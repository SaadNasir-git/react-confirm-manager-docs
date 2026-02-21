import Animations from "./Animations"
import Classes from "./Classes"
import CostomDialog from "./CostumDialog"
import Themes from "./Themes"

const Customization = () => {
  return (
    <section id="customization" className="bg">
      <h2 className="text-center">
        Customization
      </h2>
      <Themes />
      <Animations />
      <Classes/>
      <CostomDialog/>
    </section>
  )
}

export default Customization