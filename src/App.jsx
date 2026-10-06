import { useState } from "react"
import Footer from "./holiday Website/footer"
import HeroSection from "./holiday Website/HeroSection"
import Holidaypackage from "./holiday Website/Holidaypackage"
import Navbar from "./holiday Website/Navbar"
import Whychoose from "./holiday Website/whychoose"


const App = () => {
    const [search, setSearch] = useState("");
  return (
    <div>
      <Navbar/>
  <HeroSection
        search={search}
        setSearch={setSearch}
      />
      <Holidaypackage search={search} />
     <Whychoose/>
     <Footer/>
    </div>
  )
}

export default App
