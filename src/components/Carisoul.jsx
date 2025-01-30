import React from 'react'
import img1 from '../images/img_bg_1.jpg'
import img2 from '../images/img_bg_2.jpg'
import img3 from '../images/xyz.jpeg'

const Carisoul = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} style={{height:"700px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div class="container-fluid">
			   			<div class="row">
				   			<div class="col-sm-6 offset-sm-3 text-center slider-text">
				   				<div class="slider-text-inner">
				   					<div class="desc">
					   					<h1 class="head-1">Men's</h1>
					   					{/* <h2 class="head-2">Shoes</h2> */}
					   					<h2 class="head-3">Collection</h2>
					   					<p class="category"><span>New trending collection</span></p>
					   					<p><a href="#" class="btn btn-primary">Shop Collection</a></p>
				   					</div>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img2} style={{height:"700px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div class="container-fluid">
			   			<div class="row">
				   			<div class="col-sm-6 offset-sm-3 text-center slider-text">
				   				<div class="slider-text-inner">
				   					<div class="desc">
					   					<h1 class="head-1">Huge</h1>
					   					<h2 class="head-2">Sale</h2>
					   					<h2 class="head-3"><strong class="font-weight-bold">50%</strong> Off</h2>
					   					<p class="category"><span>Big sale sandals</span></p>
					   					<p><a href="#" class="btn btn-primary">Shop Collection</a></p>
				   					</div>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={img3} style={{height:"700px"}} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <div class="container-fluid">
			   			<div class="row">
				   			<div class="col-sm-6 offset-sm-3 text-center slider-text">
				   				<div class="slider-text-inner">
				   					<div class="desc">
					   					<h1 class="head-1">New</h1>
					   					<h2 class="head-2">Arrival</h2>
					   					<h2 class="head-3">up to <strong class="font-weight-bold">30%</strong> off</h2>
					   					{/* <p class="category"><span>New stylish shoes for men</span></p> */}
					   					<p><a href="#" class="btn btn-primary">Shop Collection</a></p>
				   					</div>
				   				</div>
				   			</div>
				   		</div>
			   		</div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carisoul
