import React from 'react'
import men from '../images/men.jpg'
import women from '../images/women.jpg'

const SimpleIdea = () => {
  return (
    <div>
      <div class="colorlib-intro">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-center">
						<h2 class="intro">It started with a simple idea: Create quality, well-designed products that I wanted myself.</h2>
					</div>
				</div>
			</div>
		</div>
		<div class="colorlib-product">
			<div class="container-fluid">
				<div class="row">
					<div class="col-sm-6 text-center">
						<div class="featured">
							<a href="#" class="featured-img" > <img src={men} className="img-fluid" alt="" /></a>
							<div class="desc">
								<h2><a href="#">Shop Men's Collection</a></h2>
							</div>
						</div>
					</div>
					<div class="col-sm-6 text-center">
						<div class="featured">
                        <a href="#" class="featured-img" > <img src={women} className="img-fluid" alt="" /></a>
							<div class="desc">
								<h2><a href="#">Shop Women's Collection</a></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}

export default SimpleIdea
