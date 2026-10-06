import React from 'react'

const Search = ({search,setSearch}) => {
 
  return (
    <> 
    <div className='inputm'>
        <input type="text"
         className='search'
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         placeholder='Try Goa,Bali or Mountains' 
         />

    </div>
    </>
  )
}

export default Search
