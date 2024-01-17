import React from 'react'

export default function Register({handlePageType}) {
  return (
    <div> <div class="container">
    <div class="screen">
      <div class="screen__content">
        <form class="login">
          <div class="login__field">
            <i class="login__icon fas fa-user"></i>
            <input
              type="text"
             
              name="username"
              class="login__input"
              placeholder="User name / Email"
            />
          </div>
          <div class="login__field">
            <i class="login__icon fas fa-lock"></i>
            <input
              type="password"
              name="password"
            
              id="pass-inp"
              class="login__input"
              placeholder="Password"
            />
          </div>
          <button  class="button login__submit">
           Register now
          </button>
          <h3 onClick={handlePageType}> already have account ? </h3>
        </form>
        <div class="social-login">
          <h3>Pls Register</h3>
          
          <div class="social-icons">
            <a href="#" class="social-login__icon fab fa-instagram"></a>
            <a href="#" class="social-login__icon fab fa-facebook"></a>
            <a href="#" class="social-login__icon fab fa-twitter"></a>
          </div>
        </div>
      </div>
      <div class="screen__background">
        <span class="screen__background__shape screen__background__shape4"></span>
        <span class="screen__background__shape screen__background__shape3"></span>
        <span class="screen__background__shape screen__background__shape2"></span>
        <span class="screen__background__shape screen__background__shape1"></span>
      </div>
    </div>
  </div>
  </div>
  )
}
