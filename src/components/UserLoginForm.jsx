import React from 'react';

const UserLoginForm = () => {
  return (
    <>
   <section class="vh-100" >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card shadow-2-strong" style={{borderRadius: "2px"}}>
          <div class="card-body p-5 text-center">

            <h3 class="mb-5">Sign in</h3>

            <div class="form-outline mb-4">
            <label class="form-label" for="typeEmailX-2">Email</label>
              <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />              
            </div>

            <div class="form-outline mb-4">
            <label class="form-label" for="typePasswordX-2">Password</label>
              <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />              
            </div>
            <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
            <hr class="my-4"/>
            <a href="#">Forgot Password?</a>
            <br /><br />
            <button class="btn btn-danger btn-lg btn-block" type="submit">Create Account</button>           
            

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default UserLoginForm;
