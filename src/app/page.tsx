import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
    <div id="slider" className="section-container p-0 bg-dark">
			
			<div id="main-carousel" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					
					<div className="carousel-item active" data-paroller="true" data-paroller-factor="0.3" data-paroller-factor-sm="0.01" data-paroller-factor-xs="0.01" style={{"background": "url(../assets/img/slider/slider-1-cover.jpg) center 0 / cover no-repeat;"}}>
						<div className="container">
							<img src="../assets/img/products/ARYA RANGE/WALLMIXER L BEND.jpg" className="product-img right bottom fadeInRight animated" alt="" />
						</div>
						<div className="carousel-caption carousel-caption-left text-white">
							<div className="container">
								<h3 className="title mb-5px fadeInLeftBig animated">WALLMIXER L BEND</h3>
								<p className="mb-15px fadeInLeftBig animated">Arya Range premium bath fitting. Tik-tik fitting inside</p>
								<div className="price mb-30px fadeInLeftBig animated"><small>from</small> <span>Rs. 2500/-</span></div>
								<a href="product_detail.html" className="btn btn-outline btn-lg fadeInLeftBig animated">Buy Now</a>
							</div>
						</div>
					</div>
					<div className="carousel-item" data-paroller="true" data-paroller-factor="-0.3" data-paroller-factor-sm="0.01" data-paroller-factor-xs="0.01" style={{"background": "url(../assets/img/slider/slider-2-cover.jpg) center 0 / cover no-repeat;"}}>
						<div className="container">
							<img src="../assets/img/slider/slider-2-product.png" className="product-img left bottom fadeInLeft animated" alt="" />
						</div>
						<div className="carousel-caption carousel-caption-right text-white">
							<div className="container">
								<h3 className="title mb-5px fadeInRightBig animated">iPhone X</h3>
								<p className="mb-15px fadeInRightBig animated">Say hello to the future.</p>
								<div className="price mb-30px fadeInRightBig animated"><small>from</small> <span>$1,149.00</span></div>
								<a href="product_detail.html" className="btn btn-outline btn-lg fadeInRightBig animated">Buy Now</a>
							</div>
						</div>
					</div>
					<div className="carousel-item" data-paroller="true" data-paroller-factor="-0.3" data-paroller-factor-sm="0.01" data-paroller-factor-xs="0.01" style={{"background": "url(../assets/img/slider/slider-3-cover.jpg) center 0 / cover no-repeat;"}}>
						<div className="carousel-caption text-white">
							<div className="container">
								<h3 className="title mb-5px fadeInDownBig animated">Macbook Air</h3>
								<p className="mb-15px fadeInDownBig animated">Thin.Light.Powerful.<br />And ready for anything</p>
								<div className="price fadeInDownBig animated"><small>from</small> <span>$999.00</span></div>
								<a href="product_detail.html" className="btn btn-outline btn-lg fadeInUpBig animated">Buy Now</a>
							</div>
						</div>
					</div>
				</div>
				<a className="carousel-control-prev" href="#main-carousel" data-bs-slide="prev"> 
					<i className="fa fa-angle-left"></i> 
				</a>
				<a className="carousel-control-next" href="#main-carousel" data-bs-slide="next"> 
					<i className="fa fa-angle-right"></i> 
				</a>
			</div>
		</div>
		
		<div id="promotions" className="section-container bg-component">
			<div className="container">
				<h4 className="section-title clearfix">
						<span className="flex-1">
						Exclusive promotions
						<small>from 25 September 2023 - 1 January 2023</small>
					</span>
					<a href="#" className="btn">SHOW ALL</a>
				</h4>
				<div className="row gx-2">
					<div className="col-lg-6">
						<div className="promotion promotion-lg bg-dark">
							<div className="promotion-image text-end promotion-image-overflow-bottom">
								<img src="../assets/img/products/MILANO RANGE/WALLMIXER L BEND.jpg" alt="" />
							</div>
							<div className="promotion-caption promotion-caption-inverse">
								<h4 className="promotion-title">3 x1 wallmixer</h4>
								<div className="promotion-price"><small>from</small> Rs. 3000/-</div>
								<p className="promotion-desc">A big step for small.<br />A beloved design. Now with more to love.</p>
								<a href="#" className="promotion-btn">View More</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="promotion bg-blue">
							<div className="promotion-image promotion-image-overflow-bottom promotion-image-overflow-top">
								<img src="...png" alt="" />
							</div>
							<div className="promotion-caption promotion-caption-inverse text-end">
								<h4 className="promotion-title">Wall Mixers</h4>
								<div className="promotion-price"><small>from</small> Rs. 299.00</div>
								<p className="promotion-desc">You. At a glance.</p>
								<a href="#" className="promotion-btn">View More</a>
							</div>
						</div>
						<div className="promotion bg-gray-200">
							<div className="promotion-image text-center promotion-image-overflow-bottom">
								<img src="...png" alt="" />
							</div>
							<div className="promotion-caption text-center">
								<h4 className="promotion-title">Taps</h4>
								<div className="promotion-price"><small>from</small> Rs. 199.00</div>
								<p className="promotion-desc">It’s mini in a massive way.</p>
								<a href="#" className="promotion-btn">View More</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="promotion bg-gray-200">
							<div className="promotion-image promotion-image-overflow-right promotion-image-overflow-bottom text-end">
								<img src="../.png" alt="" />
							</div>
							<div className="promotion-caption text-center">
								<h4 className="promotion-title">Faucets</h4>
								<div className="promotion-price"><small>from</small> Rs. 99.00</div>
								<p className="promotion-desc">Redesigned. Rechargeable. Remarkable.</p>
								<a href="#" className="promotion-btn">View More</a>
							</div>
						</div>
						<div className="promotion bg-dark">
							<div className="promotion-image text-end">
								<img src="../.png" alt="" />
							</div>
							<div className="promotion-caption promotion-caption-inverse">
								<h4 className="promotion-title">Showers</h4>
								<div className="promotion-price"><small>from</small> Rs. 1,299.00</div>
								<p className="promotion-desc">Built for creativity on an epic scale.</p>
								<a href="#" className="promotion-btn">View More</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div id="trending-items" className="section-container">
			<div className="container">
				<h4 className="section-title clearfix">
					<span className="flex-1">
						Trending Items
					<small>Shop and get your favourite items at amazing prices!</small>
					</span>
					<div className="btn-group">
						<a href="#" className="btn"><i className="fa fa-angle-left fs-16px"></i></a>
						<a href="#" className="btn"><i className="fa fa-angle-right fs-16px"></i></a>
					</div>
				</h4>
				<div className="row gx-2">
					<div className="col-lg-2 col-md-4 col-sm-6">
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/products/MILANO RANGE/2 IN 1 ANGLECOCK.jpg" alt="" />
								<div className="discount">15% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product_detail.html">2 IN 1 ANGLECOCK<br />Milano Range</a>
								</h4>
								<p className="item-desc">3D Touch. 12MP photos. 4K video.</p>
								<div className="item-price">$649.00</div>
								<div className="item-discount-price">Rs. 249.00</div>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-4 col-sm-6">
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/products/AURA RANGE/2 IN 1 ANGLECOCK.jpg" alt=""  />
								<div className="discount">32% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product.html">2 IN 1 ANGLECOCK<br />Aura Range</a>
								</h4>
								<p className="item-desc">Super. Computer. Now in two sizes.</p>
								<div className="item-price">$599.00</div>
								<div className="item-discount-price">Rs. 249.00</div>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-4 col-sm-6">
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/products/MILANO RANGE/PILLERCOCK.jpg" alt="" />
								<div className="discount">20% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product.html">PILLERCOCK<br />MILANO RANGE</a>
								</h4>
								<p className="item-desc">Retina. Now in colossal and ginormous.</p>
								<div className="item-price">$1,099.00</div>
								<div className="item-discount-price">Rs. 249.00</div>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-4 col-sm-6">
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/products/MILANO RANGE/WASHING TAP.jpg" alt="" />
								<div className="discount">13% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product.html">WASHING TAP<br />MILANO RANGE</a>
								</h4>
								<p className="item-desc">You. At a glance.</p>
								<div className="item-price">$599.00</div>
								<div className="item-discount-price">Rs. 249.00</div>
							</div>
						</div>
					</div>

					<div className="col-lg-2 col-md-4 col-sm-6">
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/products/GOLF RANGE/anglecock.jpg" alt="" />
								<div className="discount">30% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product.html">Angle Cock<br />GOLF RANGE</a>
								</h4>
								<p className="item-desc">Stunning Retina Display</p>
								<div className="item-price">$1299.00</div>
								<div className="item-discount-price">Rs. 249.00</div>
							</div>
						</div>
					</div>

					<div className="col-lg-2 col-md-4 col-sm-6">
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src="../assets/img/products/NEXA RANGE/2 in 1 bibcock.jpg" alt="" />
								<div className="discount">40% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product.html">2 in 1 bibcock<br />NEXA RANGE</a>
								</h4>
								<p className="item-desc">The future of television is here.</p>
								<div className="item-price">$149.00</div>
								<div className="item-discount-price">Rs. 249.00</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="mobile-list" className="section-container pt-0">
			<div className="container">
				<h4 className="section-title clearfix">
					<span className="flex-1">
						Mobile Phones
						<small>Shop and get your favourite phone at amazing prices!</small>
					</span>
					<a href="#" className="btn">SHOW ALL</a>
				</h4>
				<div className="category-container">
					<div className="category-sidebar">
						<ul className="category-list">
							<li className="list-header">Top Categories</li>
							<li><a href="#">Microsoft</a></li>
							<li><a href="#">Samsung</a></li>
							<li><a href="#">Apple</a></li>
							<li><a href="#">Micromax</a></li>
							<li><a href="#">Karbonn</a></li>
							<li><a href="#">Intex</a></li>
							<li><a href="#">Sony</a></li>
							<li><a href="#">HTC</a></li>
							<li><a href="#">Asus</a></li>
							<li><a href="#">Nokia</a></li>
							<li><a href="#">Blackberry</a></li>
							<li><a href="#">All Brands</a></li>
						</ul>
					</div>
					
					
					<div className="category-detail">
						
						<a href="#" className="category-item full">
							<div className="item">
								<div className="item-cover">
									<img src="../assets/img/products/MILANO RANGE/WALLMIXER L BEND.jpg" alt="" />
								</div>
								<div className="item-info bottom">
									<h4 className="item-title">Samsung Galaxy s7 Edge + Geat 360 + Gear VR</h4>
									<p className="item-desc">Redefine what a phone can do</p>
									<div className="item-price">$799.00</div>
								</div>
							</div>
						</a>
						
						
						<div className="category-item list">
							<div className="item-row">
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/SINKCOCK.jpg" alt="" />
										<div className="discount">15% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product_detail.html">iPhone 6s Plus<br />16GB</a>
										</h4>
										<p className="item-desc">3D Touch. 12MP photos. 4K video.</p>
										<div className="item-price">$649.00</div>
										<div className="item-discount-price">$739.00</div>
									</div>
								</div>
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/SINKCOCK.jpg" alt="" />
										<div className="discount">32% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product.html">Samsung Galaxy Note 5<br />Black</a>
										</h4>
										<p className="item-desc">Super. Computer. Now in two sizes.</p>
										<div className="item-price">$599.00</div>
										<div className="item-discount-price">$799.00</div>
									</div>
								</div>
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/SINKCOCK.jpg" alt="" />
										<div className="discount">20% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product.html">iPhone SE<br />32/64Gb</a>
										</h4>
										<p className="item-desc">A big step for small.</p>
										<div className="item-price">$499.00</div>
										<div className="item-discount-price">$599.00</div>
									</div>
								</div>
							</div>
							
							<div className="item-row">
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/SINKCOCK.jpg" alt="" />
										<div className="discount">15% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product_detail.html">Assus ZenFone 2<br />‏(ZE550ML)</a>
										</h4>
										<p className="item-desc">See What Others Can’t See</p>
										<div className="item-price">$399.00</div>
										<div className="item-discount-price">$453.00</div>
									</div>
								</div>
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/SINKCOCK.jpg" alt="" />
										<div className="discount">32% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product.html">Sony Xperia Z<br />Black Color</a>
										</h4>
										<p className="item-desc">For unexpectedly beautiful moments</p>
										<div className="item-price">$599.00</div>
										<div className="item-discount-price">$799.00</div>
									</div>
								</div>
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/SINKCOCK.jpg" alt="" />
										<div className="discount">20% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product.html">Microsoft Lumia 531<br />Smartphone Orange</a>
										</h4>
										<p className="item-desc">1 Year Local Manufacturer Warranty</p>
										<div className="item-price">$99.00</div>
										<div className="item-discount-price">$199.00</div>
									</div>
								</div>
							</div>
							
						</div>
						
					</div>
				</div>
			</div>
		</div>
		
		<div id="tablet-list" className="section-container pt-0">
			<div className="container">
				<h4 className="section-title clearfix">
					<span className="flex-1">
						Tablet
						<small>Shop and get your favourite tablet at amazing prices!</small>
					</span>
					<a href="#" className="btn">SHOW ALL</a>
				</h4>
				<div className="category-container">
					<div className="category-sidebar">
						<ul className="category-list">
							<li className="list-header">Top Categories</li>
							<li><a href="#">Apple</a></li>
							<li><a href="#">HP</a></li>
							<li><a href="#">Huawei</a></li>
							<li><a href="#">Samsung</a></li>
							<li><a href="#">Sony</a></li>
							<li><a href="#">All Brands</a></li>
						</ul>
					</div>
					
					
					<div className="category-detail">
						
						<a href="#" className="category-item full">
							<div className="item">
								<div className="item-cover">
									<img src="../assets/img/product/product-huawei-mediapad.jpg" alt="" />
								</div>
								<div className="item-info bottom">
									<h4 className="item-title">Huawei MediaPad T1 7.0</h4>
									<p className="item-desc">Vibrant colors. Beautifully displayed</p>
									<div className="item-price">$299.00</div>
								</div>
							</div>
						</a>
						
						
						<div className="category-item list">
							<div className="item-row">
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/longbody.jpg" alt="" />
										<div className="discount">15% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product_detail.html">9.7-inch iPad Pro<br />32GB</a>
										</h4>
										<p className="item-desc">3D Touch. 12MP photos. 4K video.</p>
										<div className="item-price">$649.00</div>
										<div className="item-discount-price">$739.00</div>
									</div>
								</div>
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/longbody.jpg" alt="" />
										<div className="discount">32% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product.html">Samsung Galaxy Tab S2<br />Black</a>
										</h4>
										<p className="item-desc">A Brilliant Screen That Adjusts to You</p>
										<div className="item-price">$399.99</div>
										<div className="item-discount-price">$499.00</div>
									</div>
								</div>
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/longbody.jpg" alt="" />
										<div className="discount">20% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product.html">Samsung Galaxy Tab A<br />9.7 16Gb(Wi-Fi)</a>
										</h4>
										<p className="item-desc">Keep All Your Samsung Devices In Sync</p>
										<div className="item-price">$349.99</div>
										<div className="item-discount-price">$399.99</div>
									</div>
								</div>
							</div>
							
							<div className="item-row">
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/longbody.jpg" alt="" />
										<div className="discount">15% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product_detail.html">HP Spectre x2<br />‏12-a011nr</a>
										</h4>
										<p className="item-desc">Our thinnest detachable separates from all others.</p>
										<div className="item-price">$799.99</div>
										<div className="item-discount-price">$850.00</div>
									</div>
								</div>
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/longbody.jpg" alt="" />
										<div className="discount">32% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product.html">Sony Xperia Z2 Tablet<br />Black Color</a>
										</h4>
										<p className="item-desc">For unexpectedly beautiful moments</p>
										<div className="item-price">$199.00</div>
										<div className="item-discount-price">$259.00</div>
									</div>
								</div>
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src="../assets/img/products/MILANO RANGE/longbody.jpg" alt="" />
										<div className="discount">20% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product.html">iPad Air 2<br />32/64Gb</a>
										</h4>
										<p className="item-desc">Light. Heavyweight.</p>
										<div className="item-price">$399.00</div>
										<div className="item-discount-price">$459.00</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div id="policy" className="section-container bg-component">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-4 mb-4 mb-md-0">
						<div className="policy">
							<div className="policy-icon"><i className="fa fa-truck"></i></div>
							<div className="policy-info">
								<h4>Free Delivery Over $100</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4 mb-4 mb-md-0">
						<div className="policy">
							<div className="policy-icon"><i className="fa fa-umbrella"></i></div>
							<div className="policy-info">
								<h4>1 Year Warranty For Phones</h4>
								<p>Cras laoreet urna id dui malesuada gravida. <br />Duis a lobortis dui.</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-4">
						<div className="policy">
							<div className="policy-icon"><i className="fa fa-user-md"></i></div>
							<div className="policy-info">
								<h4>6 Month Warranty For Accessories</h4>
								<p>Fusce ut euismod orci. Morbi auctor, sapien non eleifend iaculis.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div id="subscribe" className="section-container">
			<div className="container">
				<div className="row">
					<div className="col-md-6 mb-4 mb-md-0">
						<div className="subscription">
							<div className="subscription-intro">
								<h4> LETs STAY IN TOUCH</h4>
								<p>Get updates on sales specials and more</p>
							</div>
							<div className="subscription-form">
								<form name="subscription_form" action="index.html" method="POST">
									<div className="input-group">
										<input type="text" className="form-control" name="email" placeholder="Enter Email Address" />
										<button type="submit" className="btn btn-dark"><i className="fa fa-angle-right"></i></button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="social">
							<div className="social-intro">
								<h4>FOLLOW US</h4>
								<p>We want to hear from you!</p>
							</div>
							<div className="social-list">
								<a href="#"><i className="fab fa-facebook"></i></a>
								<a href="#"><i className="fab fa-twitter"></i></a>
								<a href="#"><i className="fab fa-instagram"></i></a>
								<a href="#"><i className="fab fa-dribbble"></i></a>
								<a href="#"><i className="fab fa-google-plus"></i></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </>
  );
}
