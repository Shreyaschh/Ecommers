import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img1 from '../images/brand-1.jpg'
const Administration = () => {

  if(localStorage.getItem("usertype") == null)
    window.location.href = "/";
  else if(localStorage.getItem("usertype") !== "admin")
    window.location.href = "/";
  //let navigate = useNavigate();

  function logout(e){
    e.preventDefault();
    localStorage.clear();
    //navigate("/");
    window.location.href = "/";
  }
  return (
    <div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 bg-danger pt-3 ">
                <ul className='text-white' >
                <li ><Link to="/administration" className="menu-item"> Dashboard </Link> </li>
                <li ><Link to="/productcategories" className='text-white'> Product Categories </Link> </li>
                <li ><Link to="/administration" className='text-white'> Product </Link> </li>
                <li ><Link to="/administration"className='text-white' > Orders </Link> </li>
                <li ><Link to="/administration"className='text-white' > Failed Orders </Link> </li>
                <li ><button onClick={(e)=>{logout(e)}}>Logout</button> </li>
                </ul>
                </div>
                <div className="col-lg-10">

                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Administration;

