import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './Environment';
import { baseurl } from './Environment';

const AdminLogin = () => {

  let navigate = useNavigate();

  let [data, setData] = useState({
    username:"",
    password:""
  });


  function handle(e){
    e.preventDefault();
    let newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  function submit(e){
    e.preventDefault();
    axios.post(baseurl + "admin/login", {data:data}).then((res)=>{
      if(res.data.data.status === "success")
      {
        localStorage.setItem("usertype", "admin");
        //navigate("/administration");
        window.location.href = "/administration";
      }
      else{
        window.alert("Invalid credentials");
      }
    }, (err)=>{
      console.log("Exception: " + err);
    })
  }


  return (
   <>
   <div className="container mt-5">
    <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">            
          <form>
            <div class="form-outline mb-4">
              <label class="form-label" for="password">Username</label>
              <input type="text" id="username" class="form-control" value={ data.username } onChange={(e)=>{ handle(e) }} />  
            </div>
            <div class="form-outline mb-4">
                <label class="form-label" for="password">Password</label>
                <input type="password" id="password" class="form-control" value={ data.password } onChange={(e)=>{ handle(e) }} />  
            </div>
            <button type="button" onClick={(e)=>{ submit(e); }} class="btn btn-primary btn-block mb-4">Sign in</button>
          </form>
        </div>
        <div className="col-lg-4"></div>
    </div>
   </div>
   </>
  )
}
export default AdminLogin
