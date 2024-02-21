import Link from "next/link";

export default function Products() {
	const data = [

		{
			"product_id": "1",
			"name": "2 in 1 anglecock",
			"category": "Faucets",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "2 in 1 anglecock.jpg",
			"description": ""
		},
		{
			"product_id": "2",
			"name": "2 in 1 bibcock",
			"category": "Faucets",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "2 in 1 bibcock.jpg",
			"description": ""
		},
		{
			"product_id": "3",
			"name": "3 x1 wallmixer",
			"category": "Mixers",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "3 x1 wallmixer.jpg",
			"description": ""
		},
		{
			"product_id": "4",
			"name": "anglecock",
			"category": "Faucets",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "anglecock.jpg",
			"description": ""
		},
		{
			"product_id": "5",
			"name": "BIBCOCK",
			"category": "Faucets",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "BIBCOCK.jpg",
			"description": ""
		},
		{
			"product_id": "6",
			"name": "csc",
			"category": "Faucets",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "csc.jpg",
			"description": ""
		},
		{
			"product_id": "7",
			"name": "longbody",
			"category": "Faucets",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "longbody.jpg",
			"description": ""
		},
		{
			"product_id": "8",
			"name": "PILLERCOCK",
			"category": "Faucets",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "PILLERCOCK.jpg",
			"description": ""
		},
		{
			"product_id": "9",
			"name": "shinkmixer",
			"category": "Mixers",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "shinkmixer.jpg",
			"description": ""
		},
		{
			"product_id": "10",
			"name": "SINKCOCK",
			"category": "Faucets",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "SINKCOCK.jpg",
			"description": ""
		},
		{
			"product_id": "11",
			"name": "SWANNEC",
			"category": "Faucets",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "SWANNEC.jpg",
			"description": ""
		},
		{
			"product_id": "12",
			"name": "WALLMIXER L BEND",
			"category": "Mixers",
			"collection": "ARYA",
			"range": "ARYA RANGE",
			"price": "2000",
			"discount": "30%",
			"image": "WALLMIXER L BEND.jpg",
			"description": ""
		}

	];
	const newData = [];
	while (data.length) newData.push(data.splice(0, 3));

	console.log(newData);
	return (
		<>
			<div id="page-header" className="section-container page-header-container bg-dark">
				<div className="page-header-cover">
					<img src="../assets/img/cover/cover-12.jpg" alt="" />
				</div>
				<div className="container">
					<h1 className="page-header"><b>PAPE</b> Products</h1>
				</div>
			</div>
			<div id="search-results" className="section-container">
				<div className="container">
					<div className="search-container">
						<div className="search-sidebar">
							<h4 className="title">Filter By</h4>
							<form action="product.html" method="POST" name="filter_form">
								<div className="mb-3">
									<label className="form-label">Keywords</label>
									<input type="text" className="form-control input-sm" name="keyword" value="a" placeholder="Enter Keywords" />
								</div>
								<div className="mb-3">
									<label className="form-label">Price</label>
									<div className="row row-space-0">
										<div className="col-md-5">
											<input type="number" className="form-control input-sm" name="price_from" value="10" placeholder="Price From" />
										</div>
										<div className="col-md-2 text-center pt-5px fs-12px text-muted">to</div>
										<div className="col-md-5">
											<input type="number" className="form-control input-sm" name="price_to" value="10000" placeholder="Price To" />
										</div>
									</div>
								</div>
								<div className="mb-30px">
									<button type="submit" className="btn btn-sm btn-theme btn-dark w-100"><i className="fa fa-search fa-fw me-1 ms-n3"></i> FILTER</button>
								</div>
							</form>
							<h4 className="title mb-0">Categories</h4>
							<ul className="search-category-list">
								<li><a href="#">Faucets <span className="pull-right">(10)</span></a></li>
								<li><a href="#">Mixers <span className="pull-right">(15)</span></a></li>
							</ul>
						</div>
						<div className="search-content">
							<div className="search-toolbar">
								<div className="row">
									<div className="col-lg-6">
										<h4></h4>
									</div>
									<div className="col-lg-6 text-end">
										<ul className="sort-list">
											<li className="text"><i className="fa fa-filter"></i> Sort by:</li>
											<li className="active"><a href="#">Popular</a></li>
											<li><a href="#">New Arrival</a></li>
											<li><a href="#">Discount</a></li>
											<li><a href="#">Price</a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="search-item-container">
								{newData && newData.map((item: any, index: any) =>
									<div className="item-row" key={index}>
										{item && item.map((itemc: any, index: any) =>
											<div className="item item-thumbnail" key={index}>
												<Link
													className="item-image"
													href={"/products/" + itemc.name}>
													<img src={"../assets/img/products/" + itemc.range + "/" + itemc.image} alt="" />
													<div className="discount">15% OFF</div>
												</Link>

												<div className="item-info">
													<h4 className="item-title">
														<a href={"/products/" + itemc.product_id}>{itemc.name}<br />16GB</a>
													</h4>
													<p className="item-desc">3D Touch. 12MP photos. 4K video.</p>
													<div className="item-price">$649.00</div>
													<div className="item-discount-price">$739.00</div>
												</div>
											</div>
										)}


									</div>
								)}
							</div>
							<ul className="pagination justify-content-center mt-0">
								<li className="page-item disabled"><a href="javascript:;" className="page-link">Previous</a></li>
								<li className="page-item active"><a className="page-link" href="javascript:;">1</a></li>
								<li className="page-item"><a className="page-link" href="javascript:;">2</a></li>
								<li className="page-item"><a className="page-link" href="javascript:;">3</a></li>
								<li className="page-item"><a className="page-link" href="javascript:;">4</a></li>
								<li className="page-item"><a className="page-link" href="javascript:;">5</a></li>
								<li className="page-item"><a className="page-link" href="javascript:;">Next</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}