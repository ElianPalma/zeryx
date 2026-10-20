export default function Cursor({ v }) {
  return (
    <div data-cursor="1" style={{ position: "fixed", top: "0", left: "0", width: "34px", height: "34px", margin: "-17px 0 0 -17px", borderRadius: "50%", border: "1.5px solid #7c3aed", pointerEvents: "none", zIndex: "90", opacity: "0", transition: "width .3s,height .3s,margin .3s,background .3s,opacity .3s" }}></div>
  )
}
