
import { use, useState } from "react"
import PACKAGES from "../../data/data"
const Holidaypackage = ({search}) => {
 const filteredPackages = PACKAGES.filter((item) =>
    item.place.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase()) ||
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const [selectedPack,setSelectedPack]=useState(null)
    
  return (
    <>
<div className="package-heading" id="Packages">
    <p>EXPLORE • DISCOVER • TRAVEL</p>
    <h1  style={{fontFamily:"initial"}}>
        Holiday package
    </h1>
    <span>Handpicked journeys made for unforgettable memories.</span>
</div>

    <div style={{display:"flex",
    flexWrap:"wrap",
    gap:'40px',
 padding:"30px"}}>
{
    filteredPackages.map((item)=>(
        <div className="my-div" style={{
            width:'300px',
            height:'380px',
            border:'2px solid rgba(255, 248, 248, 0.3) ',
            borderRadius:'20px',
            boxShadow:'0px 1px 0px 0px rgba(0, 0, 0, 0.2)'

        }}>
        <img style={{width:'295px',margin:'auto',display:'flex',height:'200px',borderRadius:"10px"}} src={item.image} alt="" />
        <h2 style={{fontFamily:"system-ui",
            paddingLeft:"9px",
            paddingTop:'4px'
            }}>{item.name}</h2>
     <div  className="package-info" style={{padding:'10px',borderRadius:'10px',width:'100%',height:'29vh'}}>
      <p>{item.place}</p>
       <p>{item.type}</p>
       <p>₹{item.price}</p>
       <p>{item.blurb}</p>
       <button className="details-btn"
       style={{width:'250px',position:'relative',
        left:'10px',top:'3px',
        border:'none',
        backgroundColor:"skyblue",borderRadius:"20px",color:'white',height:'25px',cursor:"pointer"}}
    onClick={()=>setSelectedPack(item)}   >View details</button>
     </div>
        </div>
    ))
}
    
    </div>

     {filteredPackages.length === 0 && (
        <p>No package found for "{search}"</p>
      )}


      {
        selectedPack &&(
                    <div className="details-box">

                           <button
            className="close-btn"
            onClick={() => setSelectedPack(null)}
          >
            ✕
          </button>
          

          <h1>{selectedPack.name}</h1>
          <img style={{width:'200px',height:'200px',display:'block',margin:'auto'}} src={selectedPack.image} alt="" />
          <h3>TYPE:{selectedPack.type}</h3>
          <h3>DAY:{selectedPack.days}</h3>
          <p>{selectedPack.plan}</p>
                    </div>
        )
      }
    </>
  )
}

export default Holidaypackage
