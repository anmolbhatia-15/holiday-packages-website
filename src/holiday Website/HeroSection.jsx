import { useState } from "react"
import Search from "./Search"


const HeroSection = ({search,setSearch}) => {
  
    return (
        <>
            <div className="Hero">

                <div className="mainline" style={{ font: 'message-box' }}>
                    <h1 className="hhm">Pick a place.<br></br>
                        We'll pack the rest.</h1>
                    <br />

                    <p className="param">Hand-planned holidays with stays, transfers and sightseeing<br></br> included.</p>
                    <br />
                    <Search  search={search} setSearch={setSearch}/>
                </div>
            </div>
        </>
    )
}

export default HeroSection
