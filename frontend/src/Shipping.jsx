import React from 'react';
import "./Shipping.css";
import { Link } from "react-router-dom";
// import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';

 function Shipping() {
  return (
<div>
<header>
		<h3>Checkout</h3>
	</header>

	<main>
		
		<section class="checkout-form">
			<form action="#!" method="get">
				<h6>Contact information</h6>
				<div class="form-control">
					<label for="checkout-email">E-mail</label>
					<div>
						<span class="fa fa-envelope"></span>
						<input type="email" id="checkout-email" name="checkout-email" placeholder="Enter your email..." />
					</div>
				</div>
				<div class="form-control">
					<label for="checkout-phone">Phone</label>
					<div>
						<span class="fa fa-phone"></span>
						<input type="tel" name="checkout-phone" id="checkout-phone" placeholder="Enter you phone..." />
					</div>
				</div>
				<br />
				<h6>Shipping address</h6>
				<div class="form-control">
					<label for="checkout-name">Full name</label>
					<div>
						<span class="fa fa-user-circle"></span>
						<input type="text" id="checkout-name" name="checkout-name" placeholder="Enter you name..." />
					</div>
				</div>
				<div class="form-control">
					<label for="checkout-address">Address</label>
					<div>
						<span class="fa fa-home"></span>
						<input type="text" name="checkout-address" id="checkout-address" placeholder="Your address..." />
					</div>
				</div>
				<div class="form-control">
					<label for="checkout-city">City</label>
					<div>
						<span class="fa fa-building"></span>
						<input type="text" name="checkout-city" id="checkout-city" placeholder="Your city..." />
					</div>
				</div>
				<div class="form-group">
					<div class="form-control">
						<label for="checkout-country">Country</label>
						<div>
							<span class="fa fa-globe"></span>
							<input type="text" name="checkout-country" id="checkout-country" placeholder="Your country..." list="country-list" />
							<datalist id="country-list">
								<option value="India"></option>
								<option value="USA"></option>
								<option value="Russia"></option>
								<option value="Japan"></option>
								<option value="Egypt"></option>
							</datalist>
						</div>
					</div>
					<div class="form-control">
						<label for="checkout-postal">Postal code</label>
						<div>
							<span class="fa fa-archive"></span>
							<input type="numeric" name="checkout-postal" id="checkout-postal" placeholder="Your postal code..." />
            </div>
					</div>
				</div>
				<div class="form-control checkbox-control">
					<input type="checkbox" name="checkout-checkbox" id="checkout-checkbox" />
					<label for="checkout-checkbox">Save this information for next time</label>
				</div>
				
			</form>
		</section>

		

	</main>

	
  
  <Link to="/Order" className="btn btn-success">
        {" "}

    
      </Link>
</div>
  );
}

export default Shipping;