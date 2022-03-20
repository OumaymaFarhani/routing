import React from 'react';
import {useNavigate , useParams} from 'react-router-dom'

function Shop() {
  let navigate= useNavigate();
  let {username}=useParams();
  return (
    <div >
     <h1>This is {username} !!</h1>
     <button onClick={()=>{navigate("/about")}}>Change Me </button>
    </div>
  );
}

export default Shop;
