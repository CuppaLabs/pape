export default function CustomerCare() {

    return (
        <>
        		<div id="product" className="section-container pt-20px">
			<div className="container">
				<ul className="breadcrumb mb-10px fs-12px">
					<li className="breadcrumb-item"><a href="#">Home</a></li>
					<li className="breadcrumb-item"><a href="#">Support</a></li>
					<li className="breadcrumb-item active">Contact Us</li>
				</ul>
				<div className="row row-space-30">
					<div className="col-md-5">
						<h4 className="mt-0">Contact Form</h4>
						<div className="card border-0">
						<div className="card-body">
						<p className="mb-30px fs-13px">
							Please send us your queries and we will revert to you as soon as possible.
						</p>
						<form className="form-horizontal" name="contact_us_form" action="contact_us.html" method="GET">
							<div className="mb-2 row">
								<label className="col-form-label col-md-2 text-lg-end">Name <span className="text-danger">*</span></label>
								<div className="col-md-8">
									<input type="text" className="form-control"  name="name" />
								</div>
							</div>
							<div className="mb-2 row">
								<label className="col-form-label col-md-2 text-lg-end">Email <span className="text-danger">*</span></label>
								<div className="col-md-8">
									<input type="text" className="form-control" name="email" />
								</div>
							</div>
							<div className="mb-2 row">
								<label className="col-form-label col-md-2 text-lg-end">Subject <span className="text-danger">*</span></label>
								<div className="col-md-8">
									<input type="text" className="form-control" name="subject" />
								</div>
							</div>
							<div className="mb-2 row">
								<label className="col-form-label col-md-2 text-lg-end">Message <span className="text-danger">*</span></label>
								<div className="col-md-8">
									<textarea className="form-control" rows={10} name="message"></textarea>
								</div>
							</div>
							<div className="mb-2 row">
								<label className="col-form-label col-md-2"></label>
								<div className="col-md-7">
									<button type="submit" className="btn btn-dark btn-theme">SEND MESSAGE</button>
								</div>
							</div>
						</form>
						</div>
					</div>




					</div>
					<div className="col-md-3">
						<h4 className="mt-0">Call Us</h4>
						<div className="card border-0">
						<div className="card-body">
							<h1 className="card-title text-lg-center"><i className="fa fa-phone"></i></h1>
							<br></br>
							<h5 className="card-title text-lg-center">
								+91-9902384179
							</h5>
							<h5 className="card-title text-lg-center">
								+91-9902384179
							</h5>
							<h5 className="card-title text-lg-center">
								+91-9902384179
							</h5>
						</div>
					</div>
					<br></br>
					<br></br>
					<h4 className="mt-0">Email Us</h4>
						<div className="card border-0">
						<div className="card-body">
							<h1 className="card-title text-lg-center"><i className="fa fa-envelope"></i></h1>
							<br></br>
							<h5 className="card-title text-lg-center">
							info@papebathfittings.com
							</h5>
						</div>
					</div>
					</div>
					<div className="col-md-4">
						<h4 className="mt-0">Our Address</h4>
						<div className="ratio ratio-16x9 mb-15px">
							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3306.9584799260138!2d-118.49437019999998!3d34.019276700000006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4cedd1266ff%3A0x1ffe328381544853!2sGoogle+Inc!5e0!3m2!1sen!2s!4v1435718319426"></iframe>
						</div>
						<div><b>PAPE India Pvt Ltd</b></div>
						<p className="mb-15px">
							795 Gandhi street<br />
							Bhopal, Madhya Pradesh<br />
							India<br />
						</p>
{/* 						<div><b>Email</b></div>
						<p className="mb-15px">
							<a href="mailto:hello@emailaddress.com" className="text-dark">info@papebathfittings.com</a><br />
						</p> */}
						<div className="mb-5px"><b>Social Network</b></div>
						<p className="mb-15px">
							<a href="#" className="btn btn-icon btn-white btn-circle"><i className="fab fa-facebook"></i></a>
							<a href="#" className="btn btn-icon btn-white btn-circle"><i className="fab fa-twitter"></i></a>
							<a href="#" className="btn btn-icon btn-white btn-circle"><i className="fab fa-google-plus"></i></a>
							<a href="#" className="btn btn-icon btn-white btn-circle"><i className="fab fa-instagram"></i></a>
							<a href="#" className="btn btn-icon btn-white btn-circle"><i className="fab fa-dribbble"></i></a>
						</p>
					</div>
				</div>
			</div>
		</div>
        </>
    )

}