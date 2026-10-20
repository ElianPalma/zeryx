// <zeryx-silk> — seda WebGL2 para el hero. Motor basado en FondoCascada.vue (login de Zeryx),
// con composición propia en diagonal, reacción al cursor y al scroll.

// Compuerta de arranque. Ninguna instancia crea su contexto WebGL hasta que se llama a
// releaseSilk(): Site lo hace cuando la cortina de intro empieza a levantarse o, sin intro,
// cuando la página ha terminado de cargar. Antes de eso la seda está tapada por la cortina
// (o aún no ha hecho su fundido de entrada), así que renderizarla solo costaba CPU.
const gate = { open: false, waiting: new Set(), timer: 0 };
export function releaseSilk() {
  if (gate.open) return;
  gate.open = true;
  clearTimeout(gate.timer);
  gate.waiting.forEach(el => { if (el.isConnected && el.vis && !el.gl) el.initGL(); });
  gate.waiting.clear();
}

// Registro del custom element. Se llama desde Site.componentDidMount, es decir, después de
// que React haya hidratado el HTML prerenderizado: si se registrara al importar el módulo, el
// navegador actualizaría los <zeryx-silk> del HTML (añadiendo su capa de grano) antes de la
// hidratación y React vería un DOM distinto al del servidor.
export function defineSilk() {
  if (typeof window === 'undefined' || customElements.get('zeryx-silk')) return;
  const M4 = {
    mul: (a, b) => { const o = new Array(16); for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) o[c * 4 + r] = a[r] * b[c * 4] + a[4 + r] * b[c * 4 + 1] + a[8 + r] * b[c * 4 + 2] + a[12 + r] * b[c * 4 + 3]; return o; },
    translate: (x, y, z) => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1],
    scale: (x, y, z) => [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1],
    rotX: a => { const c = Math.cos(a), s = Math.sin(a); return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]; },
    rotY: a => { const c = Math.cos(a), s = Math.sin(a); return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]; },
    rotZ: a => { const c = Math.cos(a), s = Math.sin(a); return [c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]; },
    ortho: (l, r, b, t, n, f) => [2 / (r - l), 0, 0, 0, 0, 2 / (t - b), 0, 0, 0, 0, -2 / (f - n), 0, -(r + l) / (r - l), -(t + b) / (t - b), -(f + n) / (f - n), 1]
  };
  const rotAxis = (v, ax, ang) => { const [x, y, z] = v, [ux, uy, uz] = ax, c = Math.cos(ang), s = Math.sin(ang), d = (ux * x + uy * y + uz * z) * (1 - c); return [x * c + (uy * z - uz * y) * s + ux * d, y * c + (uz * x - ux * z) * s + uy * d, z * c + (ux * y - uy * x) * s + uz * d]; };
  const mapLinear = (v, a1, b1, a2, b2) => a2 + ((v - a1) * (b2 - a2)) / (b1 - a1);
  const parabola = (x, k) => Math.pow(4 * x * (1 - x), k);
  function buildFolded(W = 400, H = 400, SX = 160, SY = 192) {
    const cols = SX + 1, rows = SY + 1, L = 16, pos = new Float32Array(cols * rows * 3), uv = new Float32Array(cols * rows * 2);
    let p = 0, q = 0;
    for (let iy = 0; iy < rows; iy++) for (let ix = 0; ix < cols; ix++) {
      const f = ix / SX, t = f < 0.3 ? -W / 2 + (f / 0.3) * (W / 2 - L) : f < 0.7 ? -L + ((f - 0.3) / 0.4) * 2 * L : L + ((f - 0.7) / 0.3) * (W / 2 - L), y = H / 2 - (iy / SY) * H, u = (t + W / 2) / W, v2 = 1 - iy / SY, m = parabola(v2, 9.5), v = 4 - 2 * m;
      let X, Z;
      if (t < -L) { X = t + 100; Z = v; } else if (t < L) { X = Math.cos(mapLinear(t, -L, L, -Math.PI / 2, Math.PI / 2)) * v - L + 100; Z = Math.cos(mapLinear(t, -L, L, 0, Math.PI)) * v; } else { X = -t + 100; Z = -v; }
      let vv = rotAxis([X, y, Z], [1, 0, 0], -Math.PI / 2); vv = rotAxis(vv, [0, 1, 0], -Math.PI / 2);
      pos[p++] = vv[0]; pos[p++] = vv[1]; pos[p++] = vv[2]; uv[q++] = u; uv[q++] = v2;
    }
    const idx = new Uint32Array(SX * SY * 6); let k = 0;
    for (let iy = 0; iy < SY; iy++) for (let ix = 0; ix < SX; ix++) { const a = iy * cols + ix, b = a + 1, c = a + cols, d = c + 1; idx[k++] = a; idx[k++] = c; idx[k++] = b; idx[k++] = b; idx[k++] = c; idx[k++] = d; }
    return { pos, uv, idx };
  }
  const NOISE = `float xxhash(vec2 x){uvec2 t=floatBitsToUint(x);uint h=0xc2b2ae3du*t.x+0x165667b9u;h=(h<<17u|h>>15u)*0x27d4eb2fu;h+=0xc2b2ae3du*t.y;h=(h<<17u|h>>15u)*0x27d4eb2fu;h^=h>>15u;h*=0x85ebca77u;h^=h>>13u;h*=0xc2b2ae3du;h^=h>>16u;return uintBitsToFloat(h>>9u|0x3f800000u)-1.0;}
vec2 hash(vec2 x){float k=6.283185307*xxhash(x);return vec2(cos(k),sin(k));}
float simplexNoise(in vec2 p){const float K1=0.366025404;const float K2=0.211324865;vec2 i=floor(p+(p.x+p.y)*K1);vec2 a=p-i+(i.x+i.y)*K2;float m=step(a.y,a.x);vec2 o=vec2(m,1.0-m);vec2 b=a-o+K2;vec2 c=a-1.0+2.0*K2;vec3 h=max(0.5-vec3(dot(a,a),dot(b,b),dot(c,c)),0.0);vec3 n=h*h*h*vec3(dot(a,hash(i+0.0)),dot(b,hash(i+o)),dot(c,hash(i+1.0)));return dot(n,vec3(32.99));}`;
  const VERT = `#version 300 es
in vec3 position; in vec2 uv;
uniform mat4 projectionMatrix, modelViewMatrix;
uniform float u_time; uniform vec2 u_resolution;
uniform float u_twistFrequencyX,u_twistFrequencyY,u_twistFrequencyZ,u_twistPowerX,u_twistPowerY,u_twistPowerZ;
uniform float u_displaceFrequencyX,u_displaceFrequencyZ,u_displaceAmount;
out vec2 v_uv; out vec3 v_position; out vec2 v_resolution;
${NOISE}
float expStep(float x,float n){return exp2(-exp2(n)*pow(x,n));}
mat4 rotationMatrix(vec3 axis,float angle){axis=normalize(axis);float s=sin(angle);float c=cos(angle);float oc=1.0-c;return mat4(oc*axis.x*axis.x+c,oc*axis.x*axis.y-axis.z*s,oc*axis.z*axis.x+axis.y*s,0.0,oc*axis.x*axis.y+axis.z*s,oc*axis.y*axis.y+c,oc*axis.y*axis.z-axis.x*s,0.0,oc*axis.z*axis.x-axis.y*s,oc*axis.y*axis.z+axis.x*s,oc*axis.z*axis.z+c,0.0,0.0,0.0,0.0,1.0);}
void main(void){
  v_uv=uv; v_resolution=u_resolution;
  mat4 rA=rotationMatrix(vec3(0.5,0.0,0.5),u_twistFrequencyY*expStep(v_uv.x,u_twistPowerY));
  mat4 rB=rotationMatrix(vec3(0.0,0.5,0.5),u_twistFrequencyX*expStep(v_uv.y,u_twistPowerX));
  mat4 rC=rotationMatrix(vec3(0.5,0.0,0.5),u_twistFrequencyZ*expStep(v_uv.y,u_twistPowerZ));
  vec3 p=position.xyz;
  p.y+=u_displaceAmount*simplexNoise(vec2(p.x*u_displaceFrequencyX+u_time,p.z*u_displaceFrequencyZ+u_time));
  v_position=(vec4(p,1.0)*rA).xyz; v_position=(vec4(v_position,1.0)*rB).xyz; v_position=(vec4(v_position,1.0)*rC).xyz;
  gl_Position=projectionMatrix*modelViewMatrix*vec4(v_position,1.0);
}`;
  const FRAG = `#version 300 es
precision highp float;
in vec2 v_uv; in vec3 v_position; in vec2 v_resolution;
uniform sampler2D u_paletteTexture; uniform float u_glowAmount,u_glowPower,u_glowRamp,u_shift,u_whiten,u_maxL,u_dark,u_rim,u_floor;
out vec4 fragColor;
${NOISE}
float parabola(float x,float k){return pow(4.0*x*(1.0-x),k);}
float mapLinear(float value,float min1,float max1,float min2,float max2){return min2+(value-min1)*(max2-min2)/(max1-min1);}
void main(void){
  vec2 dy=dFdy(v_uv);
  float pdy=dy.y*v_resolution.y*u_glowAmount;
  pdy=clamp(mapLinear(pdy,-1.0,1.0,0.0,1.0),0.0,1.0); pdy=pow(pdy,u_glowPower); pdy=clamp(smoothstep(0.0,u_glowRamp,pdy),0.0,1.0);
  float rgt=(u_floor<-1.5?1.0:smoothstep(0.42,0.72,gl_FragCoord.x/v_resolution.x))*min(abs(u_floor),1.0); float ux=mix(v_uv.x,max(v_uv.x,1.0-v_uv.x),rgt); vec3 color=texture(u_paletteTexture,vec2(fract(ux+u_shift),v_uv.y)).rgb;
  float p=1.0-parabola(v_uv.x,3.0);
  float n0=simplexNoise(vec2(v_uv.x*0.1,v_uv.y*0.5));
  float n1=mapLinear(simplexNoise(vec2(v_uv.x*(600.0+(300.0*n0)),v_uv.y*4.0*n0)),-1.0,1.0,0.0,1.0);
  color+=(n1*0.2*(1.0-color.b*0.9)*pdy*p);
  vec4 c=vec4(color,1.0); c.rgb+=(1.0-pdy)*u_whiten; float l=max(c.r,max(c.g,c.b)); c.rgb*=min(1.0,u_maxL/max(l,1e-3)); float L=dot(c.rgb,vec3(0.299,0.587,0.114)); vec3 duo=mix(vec3(0.157,0.016,0.396),vec3(0.545,0.361,0.965),smoothstep(0.25,0.95,L)); c.rgb=mix(c.rgb,duo,u_dark); c.rgb+=pow(clamp(1.0-pdy,0.0,1.0),2.6)*vec3(0.80,0.70,1.0)*u_rim;
  float ex=smoothstep(0.0,0.09,v_uv.x)*smoothstep(1.0,0.91,v_uv.x); float ey=smoothstep(0.0,0.12,v_uv.y)*smoothstep(1.0,0.88,v_uv.y); float a=ex*ey; a=a*a*(3.0-2.0*a); if(a<0.004) discard; fragColor=vec4(clamp(c.rgb,0.0,1.0),a);
}`;
  const GRID = [
    '#f6f2ff,#ece2ff,#ddc9ff,#cdb0fb,#bd97f5,#ab82ee,#9a6ee9,#8b5cf6,#7c4bea,#7c3aed,#8149ef,#8b62f1,#97a2f7,#8fb2ff,#a5c1ff,#c0d4ff,#d1dfff,#e2ebff,#eef3ff,#f2edff,#eadcff,#dfcaff,#d3b8fe,#c9abfb',
    '#e9ddff,#dcc6ff,#cbadfc,#b892f4,#a67cee,#9569e8,#8558ec,#7c3aed,#6d30d9,#6427cb,#6a35d4,#7a4fe4,#8a6ff2,#8fa0fb,#8fb2ff,#a9c4ff,#c3d6ff,#d7e3ff,#e6eeff,#e4dcff,#d3c2ff,#c2a9fd,#b294f7,#a687f2',
    '#d7c0ff,#c6a8fc,#b48ff6,#a077ef,#8f63e9,#7f51e6,#7440e8,#6c33e0,#6027c9,#5a21bd,#5e2ac6,#6c42d9,#7d61ec,#8579f6,#7f92fb,#93acff,#aec6ff,#c9daff,#dce7ff,#d8cfff,#c4b3fe,#b09bf9,#9f88f3,#9379ee',
    '#c9abfb,#b491f7,#a179f0,#8d63e9,#7c50e4,#6e40e0,#6233da,#5a2ad0,#5222bd,#4d18a9,#5121b4,#5c35c8,#6b4fdd,#7267ec,#6a7ef6,#7d97fe,#98b3ff,#b5cbff,#cdddff,#c8c2fe,#b3a6fb,#9e8df5,#8c79ef,#7f6aea',
    '#b791f8,#a075f2,#8c5eeb,#7a4ce4,#6a3cdd,#5e30d5,#5427c9,#4c1fba,#4419a6,#3f1193,#43199e,#4e2cb3,#5c44ca,#6058dc,#5570ea,#688af6,#84a6ff,#a3c0ff,#bdd3ff,#b7b5fc,#a099f8,#8a80f1,#786cea,#6b5de5',
    '#a97ff4,#9161ec,#7c4be3,#6a3bda,#5b2ecf,#5024c2,#471cb3,#4015a3,#390f92,#340a82,#38128c,#4224a0,#4f39b8,#5148ca,#4560da,#587aea,#7497fa,#93b3ff,#aec9ff,#a6a8fa,#8f8bf4,#7971ec,#685ee4,#5b50de'
  ].map(r => r.split(','));
  const CFG = {
    speed: 4.5e-5, timeOffset: 9200,
    displaceFrequencyX: 0.0052, displaceFrequencyZ: 0.0142, displaceAmount: -9.5,
    position: [430, -301.7, -11.1], rotation: [-0.4496, -0.1176, 2.15], scale: [9, 8, 5],
    twistFrequencyX: -0.62, twistFrequencyY: 0.52, twistFrequencyZ: -0.8,
    twistPowerX: 3.3, twistPowerY: 0.85, twistPowerZ: 3.6,
    glowRamp: 0.834, glowAmount: 1.98, glowPower: 0.806,
    cam: { x: 200, anchorTop: 400, designWidth: 1568, z: 5000, rotY: 0.02 },
    view: { angle: 1.25, ox: 0.2, oy: -0.2, zoom: 0.85, sy: 1.8, scrollK: 0.35, designWidth: 1100, whiten: 0.03, maxL: 0.86, res: 0.6 }
  };
  let GEO = null;
  class ZeryxSilk extends HTMLElement {
    connectedCallback() {
      if (this._init) return; this._init = 1;
      this.style.cssText += ';position:absolute;inset:0;display:block;overflow:hidden;pointer-events:none';
      const grain = document.createElement('div');
      grain.style.cssText = "position:absolute;inset:0;opacity:.45;mix-blend-mode:overlay;background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")";
      this.grain = grain;
      const C = this.C = JSON.parse(JSON.stringify(CFG));
      try { Object.assign(C.view, JSON.parse(this.getAttribute('view') || '{}')); } catch (e) {}
      this.transparent = this.hasAttribute('transparent');
      if (!this.hasAttribute('nograin')) this.append(grain);
      this.mouse = [0, 0]; this.sm = [0, 0]; this.lastY = window.scrollY; this.tAcc = 0; this.boost = 0;
      this.reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.onMove = e => { this.mouse = [e.clientX / innerWidth - .5, e.clientY / innerHeight - .5]; };
      this.onResize = () => { this.resize(); this.checkVis && this.checkVis(); };
      window.addEventListener('mousemove', this.onMove, { passive: true });
      window.addEventListener('resize', this.onResize);
      this.ro = new ResizeObserver(() => this.resize()); this.ro.observe(this);
      this.vis = false;
      this.io = new IntersectionObserver(es => { this.vis = es[0].isIntersecting; if (this.vis && !this.gl) this.initGL(); }, { rootMargin: '200px' }); this.io.observe(this);
      this.far = new IntersectionObserver(es => { if (!es[0].isIntersecting && this.gl) this.releaseGL(); }, { rootMargin: '1200px' }); this.far.observe(this);
      this.checkVis = () => { const r = this.getBoundingClientRect(), H = window.innerHeight; if (!r.height) return; const near = r.bottom > -200 && r.top < H + 200, far = r.bottom < -1200 || r.top > H + 1200; this.vis = near; if (near && !this.gl) this.initGL(); else if (far && this.gl) this.releaseGL(); };
      [0, 120].forEach(d => setTimeout(this.checkVis, d));
      if (!gate.open && !gate.timer) gate.timer = setTimeout(releaseSilk, 8000);
      this.set = v => { Object.assign(C.view, v); this.buildModel(); if (!this.gl) this.initGL(); this.resize(); this.force = true; this.frame(performance.now()); };
      (window.zeryxSilks = window.zeryxSilks || []).push(this); window.zeryxSilk = window.zeryxSilks[0];
    }
    fallback() { this.style.background = 'radial-gradient(55% 70% at 85% 20%, rgba(139,92,246,.45), transparent 60%), radial-gradient(45% 60% at 10% 80%, rgba(73,125,238,.3), transparent 65%)'; }
    initGL() {
      if (this.gl) return;
      if (!gate.open) { gate.waiting.add(this); return; }
      const C = this.C;
      const cv = document.createElement('canvas'); cv.style.cssText = 'position:absolute;inset:-12px;width:calc(100% + 24px);height:calc(100% + 24px);opacity:0;transition:opacity 1.2s ease;filter:blur(3px)';
      this.insertBefore(cv, this.firstChild); this.cv = cv;
      const gl = cv.getContext('webgl2', { antialias: false, preserveDrawingBuffer: false, premultipliedAlpha: true, powerPreference: 'low-power' });
      if (!gl) { cv.remove(); this.cv = null; this.fallback(); return; }
      cv.addEventListener('webglcontextlost', e => { e.preventDefault(); cancelAnimationFrame(this.raf); this.gl = null; });
      cv.addEventListener('webglcontextrestored', () => { cv.remove(); this.cv = null; if (this.vis) this.initGL(); });
      this.gl = gl;
      const mk = (t, s) => { const sh = gl.createShader(t); gl.shaderSource(sh, s); gl.compileShader(sh); if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh)); return sh; };
      const prog = gl.createProgram();
      try { gl.attachShader(prog, mk(gl.VERTEX_SHADER, VERT)); gl.attachShader(prog, mk(gl.FRAGMENT_SHADER, FRAG)); gl.linkProgram(prog); } catch (e) { if (!gl.isContextLost()) console.error('zeryx-silk', e); return; }
      gl.useProgram(prog);
      const geo = GEO || (GEO = buildFolded()); this.n = geo.idx.length;
      const vao = gl.createVertexArray(); gl.bindVertexArray(vao);
      const buf = (data, name, size) => { const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b); gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW); const l = gl.getAttribLocation(prog, name); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, size, gl.FLOAT, false, 0, 0); };
      buf(geo.pos, 'position', 3); buf(geo.uv, 'uv', 2);
      const ib = gl.createBuffer(); gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ib); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, geo.idx, gl.STATIC_DRAW);
      const U = {}; ['projectionMatrix', 'modelViewMatrix', 'u_time', 'u_resolution', 'u_twistFrequencyX', 'u_twistFrequencyY', 'u_twistFrequencyZ', 'u_twistPowerX', 'u_twistPowerY', 'u_twistPowerZ', 'u_displaceFrequencyX', 'u_displaceFrequencyZ', 'u_displaceAmount', 'u_paletteTexture', 'u_glowAmount', 'u_glowPower', 'u_glowRamp', 'u_shift', 'u_whiten', 'u_maxL', 'u_dark', 'u_rim', 'u_floor'].forEach(n => U[n] = gl.getUniformLocation(prog, n));
      this.U = U;
      const pc = document.createElement('canvas'); pc.width = 24; pc.height = 6; const px = pc.getContext('2d');
      GRID.forEach((row, y) => row.forEach((hx, x) => { px.fillStyle = hx; px.fillRect(x, y, 1, 1); }));
      const tex = gl.createTexture(); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, pc);
      [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER].forEach(k => gl.texParameteri(gl.TEXTURE_2D, k, gl.LINEAR));
      [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T].forEach(k => gl.texParameteri(gl.TEXTURE_2D, k, gl.CLAMP_TO_EDGE));
      gl.uniform1i(U.u_paletteTexture, 0);
      ['twistPowerX', 'twistPowerY', 'twistPowerZ', 'displaceFrequencyX', 'displaceFrequencyZ', 'glowAmount', 'glowPower', 'glowRamp'].forEach(k => gl.uniform1f(U['u_' + k], C[k]));
      this.buildModel();
      gl.enable(gl.DEPTH_TEST); gl.enable(gl.BLEND); gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA); if (this.transparent) gl.clearColor(0, 0, 0, 0); else gl.clearColor(1, 1, 1, 1);
      this.resize();
      let fc = 0, lastT = null, ramp = this.tAcc > 0 ? 1 : 0;
      const draw = t => {
        if (!this.gl) return;
        const gl = this.gl;
        if (!this.force && (!this.vis || document.hidden)) { lastT = null; return; }
        this.force = false;
        cv.style.opacity = 1;
        const y = window.scrollY, dv = y - this.lastY; this.lastY = y;
        if (dv) this.updateView();
        const dt = lastT === null ? 0 : Math.min(50, t - lastT); lastT = t;
        this.boost += (Math.min(Math.abs(dv) * 0.02, 0.8) - this.boost) * 0.08;
        this.tAcc += dt * ramp * (1 + this.boost);
        this.sm[0] += (this.mouse[0] - this.sm[0]) * 0.04; this.sm[1] += (this.mouse[1] - this.sm[1]) * 0.04;
        ramp = Math.min(ramp + 0.016, 1);
        gl.uniform1f(U.u_time, (C.timeOffset + this.tAcc) * C.speed);
        gl.uniform1f(U.u_twistFrequencyX, C.twistFrequencyX);
        gl.uniform1f(U.u_twistFrequencyY, C.twistFrequencyY);
        gl.uniform1f(U.u_twistFrequencyZ, C.twistFrequencyZ);
        gl.uniform1f(U.u_displaceAmount, C.displaceAmount);
        gl.uniform1f(U.u_shift, C.view.shift || 0); gl.uniform1f(U.u_whiten, C.view.whiten ?? 0.03); gl.uniform1f(U.u_maxL, C.view.maxL ?? 0.86); gl.uniform1f(U.u_dark, C.view.dark || 0); gl.uniform1f(U.u_rim, C.view.rim || 0); gl.uniform1f(U.u_floor, C.view.floor || 0);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.drawElements(gl.TRIANGLES, this.n, gl.UNSIGNED_INT, 0);
      };
      this.frame = draw;
      const loop = t => { this.raf = requestAnimationFrame(loop); if (++fc % 2) return; draw(t); if (this.reduce) cancelAnimationFrame(this.raf); };
      this.force = true; draw(performance.now());
      this.raf = requestAnimationFrame(loop);
    }
    releaseGL() {
      cancelAnimationFrame(this.raf);
      const gl = this.gl; this.gl = null; this.frame = () => {};
      if (gl) { const ext = gl.getExtension('WEBGL_lose_context'); if (ext) ext.loseContext(); }
      if (this.cv) { this.cv.remove(); this.cv = null; }
    }
    buildModel() {
      const C = this.C, V = C.view, [rx, ry, rz] = C.rotation, s = C.scale;
      this.model = M4.mul(M4.translate(...C.position), M4.mul(M4.rotX(rx), M4.mul(M4.rotY(ry), M4.mul(M4.rotZ(rz), M4.scale(s[0] * (V.sx || 1), s[1] * (V.sy || 1), s[2] * (V.sz || 1))))));
    }
    resize() {
      const gl = this.gl, cv = this.cv; if (!gl || !cv) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1) * (this.C.view.res || 0.6), W = cv.clientWidth, H = cv.clientHeight; if (!W || !H) return;
      cv.width = W * dpr; cv.height = H * dpr; gl.viewport(0, 0, cv.width, cv.height); gl.uniform2f(this.U.u_resolution, cv.width, cv.height);
      this.W = W; this.H = H; this.updateView();
    }
    updateView() {
      const gl = this.gl, W = this.W, H = this.H; if (!gl || !W) return;
      const C = this.C, V = C.view, k = Math.max(1, W / (V.designWidth || C.cam.designWidth)) * V.zoom, halfW = W / (2 * k), halfH = H / (2 * k), camY = C.cam.anchorTop - halfH;
      const base = M4.mul(M4.rotY(-C.cam.rotY), M4.translate(-C.cam.x, -camY, -C.cam.z));
      const r = this.getBoundingClientRect(), rel = (window.innerHeight - r.top) / (window.innerHeight + r.height) - (V.scrollRef ?? 0);
      const sp = Math.max(-1.5, Math.min(1.5, V.scrollRef === undefined ? window.scrollY / Math.max(1, window.innerHeight) : rel)) * (V.scrollK || 0);
      const view = M4.mul(M4.translate(V.ox * halfW, (V.oy + sp) * halfH, 0), M4.mul(M4.rotZ(V.angle - sp * 0.25), base));
      gl.uniformMatrix4fv(this.U.projectionMatrix, false, new Float32Array(M4.ortho(-halfW, halfW, -halfH, halfH, 1, 20000)));
      this.mv = new Float32Array(M4.mul(view, this.model));
      gl.uniformMatrix4fv(this.U.modelViewMatrix, false, this.mv);
    }
    disconnectedCallback() { gate.waiting.delete(this); this.releaseGL(); this.io && this.io.disconnect(); this.far && this.far.disconnect(); if (window.zeryxSilks) window.zeryxSilks = window.zeryxSilks.filter(x => x !== this); window.removeEventListener('mousemove', this.onMove); window.removeEventListener('resize', this.onResize); this.ro && this.ro.disconnect(); this._init = 0; this.innerHTML = ''; this.style.background = ''; }
  }
  customElements.define('zeryx-silk', ZeryxSilk);
}
