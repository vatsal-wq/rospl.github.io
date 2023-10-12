import React from 'react';
import "./Order.css";
import logo from "./image/logo.png";

const Order = () => {
  return (
    <div className="container mt-5 mb-5">
<div className="row d-flex justify-content-center">
<div className="col-md-8">
<div className="card">
<div className="text-left logo p-2 px-5"> <img src={logo} width="50" /> </div>
<div className="invoice p-5">
<h5>Your order Confirmed!</h5> <span className="font-weight-bold d-block mt-4">Hello, Bharat Kotwani</span> <span>You order has been confirmed and will be shipped in next two days!</span>
<div className="payment border-top mt-3 mb-3 border-bottom table-responsive">
<table className="table table-borderless">
<tbody>
<tr>
<td>
<div className="py-2"> <span className="d-block text-muted">Order Date</span> <span>November 5, 2022</span> </div>
</td>
<td>
<div className="py-2"> <span className="d-block text-muted">Order No</span> <span>MT12332345</span> </div>
</td>
<td>
<div className="py-2"> <span className="d-block text-muted">Payment</span> <span><img src="https://img.icons8.com/color/48/000000/mastercard.png" width="20" /></span> </div>
</td>
<td>
<div className="py-2"> <span className="d-block text-muted">Shiping Address</span> <span>Vikas Complex, Thane West</span> </div>
</td>
</tr>
 </tbody>
</table>
</div>
<div className="product border-bottom table-responsive">
<table className="table table-borderless">
<tbody>
<tr>
<td width="20%"> <img src="" width="90" /> </td>
<td width="60%"> <span className="font-weight-bold">PC Component ID #100011</span>
<div className="product-qty"> <span className="d-block">Quantity:1</span> <span>Color:Dark</span> </div>
</td>
<td width="20%">
<div className="text-right"> <span className="font-weight-bold">$2</span> </div>
</td>
</tr>
<tr>
<td width="20%"> <img src="" width="70" /> </td>
<td width="60%"> <span className="font-weight-bold">PC Component ID #100112</span>
<div className="product-qty"> <span className="d-block">Quantity:1</span> <span>Color:Orange</span> </div>
</td>
<td width="20%">
<div className="text-right"> <span className="font-weight-bold"></span>$2</div>
</td>
</tr>
<tr>
<td width="20%"> <img src="" width="70" /> </td>
<td width="60%"> <span className="font-weight-bold">PC Component ID #100112</span>
<div className="product-qty"> <span className="d-block">Quantity:1</span> <span>Color:Orange</span> </div>
</td>
<td width="20%">
<div className="text-right"> <span className="font-weight-bold"></span>$3</div>
</td>
</tr>
</tbody>
</table>
</div>
<div className="row d-flex justify-content-end">
<div className="col-md-5">
<table className="table table-borderless">
<tbody className="totals">
<tr>
<td>
<div className="text-left"> <span className="text-muted">Subtotal</span> </div>
</td>
<td>
<div className="text-right"> <span>$7</span> </div>
</td>
</tr>
<tr>
<td>
<div className="text-left"> <span className="text-muted">Shipping Fee</span> </div>
</td>
<td>
<div className="text-right"> <span>$22</span> </div>
</td>
</tr>
<tr>
<td>
<div className="text-left"> <span className="text-muted">Tax Fee</span> </div>
</td>
<td>
<div className="text-right"> <span>$7.65</span> </div>
</td>
</tr>
<tr>
<td>
<div className="text-left"> <span className="text-muted">Discount</span> </div>
</td>
<td>
<div className="text-right"> <span className="text-success">$0</span> </div>
</td>
</tr>
<tr className="border-top border-bottom">
<td>
<div className="text-left"> <span className="font-weight-bold">Subtotal</span> </div>
</td>
<td>
<div className="text-right"> <span className="font-weight-bold">$29.65</span> </div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<p>We will be sending shipping confirmation email when the item shipped successfully!</p>
<p className="font-weight-bold mb-0">Thanks for shopping with us!</p> <span>forgetech</span>
</div>
<div className="d-flex justify-content-between footer p-3"> <span>Need Help? visit our <a href="#"> help center</a></span> <span>Copyright - forgetech</span> </div>
</div>
</div>
</div>
</div> 
  );
}

export default Order
