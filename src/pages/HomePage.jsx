import HeroA from '../sections/HeroA.jsx'
import HeroB from '../sections/HeroB.jsx'
import LogoMarquee from '../sections/LogoMarquee.jsx'
import Manifesto from '../sections/Manifesto.jsx'
import VideoTeaser from '../sections/VideoTeaser.jsx'
import Product from '../sections/Product.jsx'
import Cycle from '../sections/Cycle.jsx'
import Garantia from '../sections/Garantia.jsx'
import Integrations from '../sections/Integrations.jsx'
import Agents from '../sections/Agents.jsx'
import Prueba from '../sections/Prueba.jsx'
import Pricing from '../sections/Pricing.jsx'
import Faq from '../sections/Faq.jsx'
import AskAI from '../sections/AskAI.jsx'
import Rumbo from '../sections/Rumbo.jsx'
import FinalCta from '../sections/FinalCta.jsx'

export default function HomePage({ v }) {
  return (
    <>
      <HeroA v={v} />
      <HeroB v={v} />
      <LogoMarquee v={v} />
      <Manifesto v={v} />
      <VideoTeaser v={v} />
      <Product v={v} />
      <Cycle v={v} />
      <Garantia v={v} />
      <Integrations v={v} />
      <Agents v={v} />
      <Prueba v={v} />
      <Pricing v={v} />
      <Faq v={v} />
      <AskAI v={v} />
      <Rumbo v={v} />
      <FinalCta v={v} />
    </>
  )
}
