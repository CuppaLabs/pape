import Image from "next/image";
import styles from "./page.module.css";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";

async function getData() {
	const products = await fetch('https://main.d1ti4231prxllr.amplifyapp.com/assets/products.json').then((res) => res.json())
   
	return products;
  }
export default async function Home() {
	const products = await getData();
	const list = products.map((obj: any) => obj.category);
	const list2 = products.map((obj: any) => obj.range);

	const categories = Array.from(new Set(list));
	const ranges = Array.from(new Set(list2));
  return (
    <>
    <div id="slider" className="section-container p-0 bg-dark">
	<Carousel>
	<div className="carousel-item" data-paroller="true" data-paroller-factor="0.3" data-paroller-factor-sm="0.01" data-paroller-factor-xs="0.01" style={{"background": "url('https://topsan.in/media/backend/images/category-banner-img/Banner_2100_x_720_-1_pixel.jpg') center 0 / cover no-repeat;"}}>
						{/* <div className="container">
						<img src="../assets/img/pape_banner.png" className="product-img right bottom fadeInRight animated" alt="" />

						</div> */}
						<div className="carousel-caption carousel-caption-left text-white">
							<div className="container">
								<h3 className="title mb-5px fadeInLeftBig animated">Sanitaryware</h3>
{/* 								<p className="mb-15px fadeInLeftBig animated">Arya Range premium bath fitting. Tik-tik fitting inside</p>
 */}								<div className="price mb-30px fadeInLeftBig animated"><small>from</small> <span>Rs. 2500/-</span></div>
								<a href="product_detail.html" className="btn btn-outline btn-lg fadeInLeftBig animated">Buy Now</a>
							</div>
						</div>
					</div>
					<div className="carousel-item" data-paroller="true" data-paroller-factor="-0.3" data-paroller-factor-sm="0.01" data-paroller-factor-xs="0.01" style={{"background": "url('https://topsan.in/media/backend/images/category-banner-img/Banner_2100_x_720_pixel(2).jpg') center 0 / cover no-repeat;"}}>
						{/* <div className="container">
							<img src="../assets/img/slider/slider-2-product.png" className="product-img left bottom fadeInLeft animated" alt="" />
						</div> */}
						<div className="carousel-caption carousel-caption-left text-white">
							<div className="container">
								<h3 className="title mb-5px fadeInRightBig animated">Faucets</h3>
{/* 								<p className="mb-15px fadeInRightBig animated">Say hello to the future.</p>
 */}								<div className="price mb-30px fadeInRightBig animated"><small>from</small> <span>$1,149.00</span></div>
								<a href="product_detail.html" className="btn btn-lg fadeInRightBig animated">Buy Now</a>
							</div>
						</div>
					</div>
					<div className="carousel-item" data-paroller="true" data-paroller-factor="-0.3" data-paroller-factor-sm="0.01" data-paroller-factor-xs="0.01" style={{"background": "url('https://s3-ap-south-1.amazonaws.com/delta-faucet-india-cdn/assets/images/collections/bathroom/zura-website-banner.jpg') center 0 / cover no-repeat;"}}>
						<div className="carousel-caption text-white">
							<div className="container">
								<h3 className="title mb-5px fadeInDownBig animated">Bath Collections</h3>
								<p className="mb-15px fadeInDownBig animated">Thin.Light.Powerful.<br />And ready for anything</p>
								<div className="price fadeInDownBig animated"><small>from</small> <span>$999.00</span></div>
								<a href="product_detail.html" className="btn btn-outline btn-lg fadeInUpBig animated">Buy Now</a>
							</div>
						</div>
					</div>
    </Carousel>
		</div>
		
		<div id="promotions" className="section-container bg-component">
			<div className="container">
				<h4 className="section-title clearfix">
						<span className="flex-1">
						Exclusive promotions
						<small>from 25 September 2023 - 1 January 2023</small>
					</span>
					<a href="/products" className="btn">SHOW ALL</a>
				</h4>
				<div className="row gx-2">
					<div className="col-lg-6">
						<div className="promotion promotion-lg bg-dark">
							<div className="promotion-image text-end promotion-image-overflow-bottom">
								<img src="../assets/img/pape_tap_ex_1.png" alt="" />
							</div>
							<div className="promotion-caption promotion-caption-inverse">
								<h4 className="promotion-title"> Arya Basin Mixer 6" & 12"</h4>
								<div className="promotion-price"><small>from</small> Rs. 4619/-</div>
								<p className="promotion-desc">A big step for small.<br />A beloved design. Now with more to love.</p>
								<a href="/products" className="promotion-btn">View More</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="promotion bg-blue">
							<div className="promotion-image promotion-image-overflow-bottom promotion-image-overflow-top">
								<img src="../assets/img/pape_mixer.png" alt="" />
							</div>
							<div className="promotion-caption promotion-caption-inverse text-end">
								<h4 className="promotion-title">Wall Mixers</h4>
								<div className="promotion-price"><small>from</small> Rs. 299.00</div>
								<p className="promotion-desc">You. At a glance.</p>
								<a href="/products" className="promotion-btn">View More</a>
							</div>
						</div>
						<div className="promotion bg-gray-200">
						<div className="promotion-image text-end">
								<img src="../assets/img/pape_spout.png" alt="" />
							</div>
							<div className="promotion-caption">
								<h4 className="promotion-title">Flexible Spout</h4>
								<div className="promotion-price"><small>from</small> Rs. 1,299.00</div>
								<p className="promotion-desc">Built for creativity on an epic scale.</p>
								<a href="/products" className="promotion-btn">View More</a>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
						<div className="promotion bg-gray-200">
							<div className="promotion-image promotion-image-overflow-bottom promotion-image-overflow-top">
								<img src="../assets/img/pape_faucet.png" alt="" />
							</div>
							<div className="promotion-caption text-end">
								<h4 className="promotion-title">Faucets</h4>
								<div className="promotion-price"><small>from</small> Rs. 99.00</div>
								<p className="promotion-desc">Redesigned. Rechargeable. Remarkable.</p>
								<a href="/products" className="promotion-btn">View More</a>
							</div>
						</div>
						<div className="promotion bg-dark">
							<div className="promotion-image text-end">
								<img src="../assets/img/pape_shower.png" alt="" />
							</div>
							<div className="promotion-caption promotion-caption-inverse">
								<h4 className="promotion-title">Showers</h4>
								<div className="promotion-price"><small>from</small> Rs. 1,299.00</div>
								<p className="promotion-desc">Built for creativity on an epic scale.</p>
								<a href="/products" className="promotion-btn">View More</a>
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
{/* 					<div className="btn-group">
						<a href="#" className="btn"><i className="fa fa-angle-left fs-16px"></i></a>
						<a href="#" className="btn"><i className="fa fa-angle-right fs-16px"></i></a>
					</div> */}
				</h4>
				<div className="row gx-2">
					{products.splice(0, 6).map((product: any) => 
					<div className="col-lg-2 col-md-4 col-sm-6">
						<div className="item item-thumbnail">
							<a href="product_detail.html" className="item-image">
								<img src={"../assets/img/products/"+product.range+' RANGE/'+product.image} alt="" />
								<div className="discount">15% OFF</div>
							</a>
							<div className="item-info">
								<h4 className="item-title">
									<a href="product_detail.html">{product.name}<br />{product.range} Range</a>
								</h4>
								<p className="item-desc">3D Touch. 12MP photos. 4K video.</p>
								<div className="item-price">$649.00</div>
								<div className="item-discount-price">Rs. {product.price}</div>
							</div>
						</div>
					</div>
					)}
				</div>
			</div>
		</div>
		{categories.map((cat: any) => 
		<div className="section-container pt-0">
			<div className="container">
				<h4 className="section-title clearfix">
					<span className="flex-1">
						{cat}
						<small>Shop and get your favourite faucet at amazing prices!</small>
					</span>
					<a href="/products" className="btn">SHOW ALL</a>
				</h4>
				<div className="category-container">
					<div className="category-sidebar">
						<ul className="category-list">
						<li className="list-header">Top Categories</li>
							{ranges && ranges.map((item: any) => 
									<li><a href="/products">{item+' RANGE'}</a></li>
								)}
						</ul>
					</div>
					
					
					<div className="category-detail">
						
						<a href="#" className="category-item full">
							<div className="item">
								<div className="item-cover">
									<img src="../assets/img/pape_banner_1.png" alt="" />
								</div>
								<div className="item-info bottom">
									<h4 className="item-title">Pillar cock tall boy 12"</h4>
									<div className="item-price">$799.00</div>
								</div>
							</div>
						</a>
						
						
						<div className="category-item list">
							<div className="item-row">
								{products.filter((obj: any) => obj.category === cat).slice(0, 3).map((prod: any) => 
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src={"../assets/img/products/"+prod.range+' RANGE/'+prod.image} alt="" />
										<div className="discount">15% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product_detail.html">{prod.name}<br />{prod.range}</a>
										</h4>
										<div className="item-price">{prod.price}</div>
										<div className="item-discount-price">{prod.price}</div>
									</div>
								</div>
								)}
							</div>
							
							<div className="item-row">
								{products.filter((obj: any) => obj.category === cat).slice(3, 6).map((prod: any) => 
								<div className="item item-thumbnail">
									<a href="product_detail.html" className="item-image">
										<img src={"../assets/img/products/"+prod.range+' RANGE/'+prod.image} alt="" />
										<div className="discount">15% OFF</div>
									</a>
									<div className="item-info">
										<h4 className="item-title">
											<a href="product_detail.html">{prod.name}<br />{prod.range}</a>
										</h4>
										<div className="item-price">{prod.price}</div>
										<div className="item-discount-price">{prod.price}</div>
									</div>
								</div>
								)}
							</div>
							
						</div>
						
					</div>
				</div>
			</div>
		</div>
		)}
		
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
