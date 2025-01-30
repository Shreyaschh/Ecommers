import React from 'react'
import {  NavLink} from 'react-router-dom'

const Header = () => {
	const NavStyle = ({isActive}) =>{
		return{
			
			color: isActive ? 'rgb(24, 228, 190) ' : '',
			position: isActive ? 'relative' : ''
		}
	}
	let adminlogggedin = false;
	if(localStorage.getItem("usertype") != null){
		if(localStorage.getItem("usertype") === "admin")
			adminlogggedin = true;
	}
  return (
    <>   
		<nav className="colorlib-nav" role="navigation">
			<div className="top-menu">
				<div className="container">
					<div className="row">
						<div className="col-sm-7 col-md-9">
							<div id="colorlib-logo"><NavLink style={NavStyle}  to="/"><i class="fa-brands fa-opencart"></i> SHOPPING</NavLink></div>
						</div>
						<div className="col-sm-5 col-md-3">
			            <form action="#" className="search-wrap">
			               <div className="form-group">
			                  <input type="search" className="form-control search" placeholder="Search"/>
			                  <button className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search"></i></button>
			               </div>
			            </form>
			         </div>
		         </div>
					<div className="row">
						<div className="col-sm-12 text-left menu-1">
							<ul>
								<li className="nav-bar-link" ><NavLink className="nav-bar-link" style={NavStyle}  to="/">Home</NavLink></li>
								<li className="has-dropdown">
									<NavLink style={NavStyle} className="nav-bar-link" to="/men">Men</NavLink>
									<ul className="dropdown">
										<li  className="nav-bar-link" ><NavLink  to="product-detail.html">Product Detail</NavLink></li>
										<li  className="nav-bar-link" ><NavLink to="cart.html">Shopping Cart</NavLink></li>
										<li  className="nav-bar-link" ><NavLink  to="checkout.html">Checkout</NavLink></li>
										<li  className="nav-bar-link" ><NavLink  to="order-complete.html">Order Complete</NavLink></li>
										<li  className="nav-bar-link" ><NavLink  to="add-to-wishlist.html">Wishlist</NavLink></li>
									</ul>
								</li>
								<li><NavLink style={NavStyle} className="nav-bar-link" to="/women">Women</NavLink></li>
								<li><NavLink style={NavStyle} className="nav-bar-link" to="/about">About</NavLink></li>
								<li><NavLink style={NavStyle} className="nav-bar-link" to="/contact">Contact</NavLink></li>
								{
									adminlogggedin ? <li><NavLink style={NavStyle} className="nav-bar-link" to="/administration">administration</NavLink></li> : ""
								}
								<li  className='cart'><NavLink style={NavStyle} className="nav-bar-link" to="/userlogin">User Login </NavLink></li>
								<li className="cart"><NavLink style={NavStyle} className="nav-bar-link" to="/cart"><i className="icon-shopping-cart"></i> Cart [0]</NavLink></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="sale">
				<div className="container">
					<div className="row">
						<div className="col-sm-8 offset-sm-2 text-center">
							<div className="row">
								<div className="owl-carousel2">
									<div className="item">
										<div className="col">
											<h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
										</div>
									</div>
									<div className="item">
										<div className="col">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
        
    </>
  )
}

export default Header;
