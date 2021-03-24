import React from 'react';

const Navabar= ({searchfield , searchchange})=>{
    return(
        <div className="tc pa2 bb b--washed-red">
            <input
            className="w-25 h-25 pa3 ba b--green bg-lightest-blue" 
            type="text"
            name="search"
            placeholder="enter name"
            onChange={searchchange}/>            
        </div>
    )
}

export default Navabar;