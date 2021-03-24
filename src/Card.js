// eslint-disable-next-line
import React from 'react';
import './card.css';


function Card(prop) {
  let user = prop.user
  
  return (
    
    <div className="tc ma2 mh3 bg-washed-green grow" onClick={()=>{prop.clickHandle(user['id'])}}>
      <img src={`https://robohash.org/${user['id']}`} alt = {`${user.id}`} className="image"></img>
      <h3 className="f3">{user.name}</h3>
      <p className="f5">{user.email}</p>      
    </div>
    
  );
}

export default Card;
