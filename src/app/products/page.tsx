"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Pagination, { paginate } from "../components/pagination";

async function getData() {
	const products = await fetch('http://localhost:3000/assets/products.json').then((res) => res.json())

	return products.map((prod: any) => ({
		"slug": prod.product_id,
		"product_id": prod.product_id,
		"name": prod.name,
		"category": prod.category,
		"collection": prod.collection,
		"range": prod.range,
		"price": prod.price,
		"discount": prod.discount,
		"image": prod.image,
		"description": prod.description

	}));
}

export default function Products() {
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState([]);
	const [paginatedData, setPaginatedData] = useState([]);

	const pageSize = 9;

	const onPageChange = (page: any) => {
		setCurrentPage(page);
	};
	useEffect(() => {
		async function fetchData() {
			const data = await getData();
			setData(data);
			const paginatedPosts = paginate(data, currentPage, pageSize);
			setPaginatedData(paginatedPosts);
			const newData: any = [];
			while (paginatedPosts.length) newData.push(paginatedPosts.splice(0, 3));
			setPaginatedData(newData);

		}
		fetchData();
	}, []);
	useEffect(() => {
		const paginatedPosts = paginate(data, currentPage, pageSize);
		setPaginatedData(paginatedPosts);
		const newData: any = [];
		while (paginatedPosts.length) newData.push(paginatedPosts.splice(0, 3));
		setPaginatedData(newData);

	}, [currentPage]);
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
								{paginatedData && paginatedData.map((item: any, index: any) =>
									<div className="item-row" key={index}>
										{item && item.map((itemc: any, index: any) =>
											<div className="item item-thumbnail" key={index}>
												<Link
													className="item-image"
													href={"/products/" + itemc.name}>
													<img src={"../assets/img/products/" + itemc.range + " RANGE/" + itemc.image} alt="" />
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
							<Pagination
								items={data.length} // 100
								currentPage={currentPage} // 1
								pageSize={pageSize} // 10
								onPageChange={onPageChange}
							/>
{/* 							<ul className="pagination justify-content-center mt-0">
								<li className="page-item disabled"><a href="javascript:;" className="page-link">Previous</a></li>
								<li className="page-item active"><a className="page-link" href="javascript:;">1</a></li>
								<li className="page-item"><a className="page-link" href="javascript:;">2</a></li>
								<li className="page-item"><a className="page-link" href="javascript:;">3</a></li>
								<li className="page-item"><a className="page-link" href="javascript:;">4</a></li>
								<li className="page-item"><a className="page-link" href="javascript:;">5</a></li>
								<li className="page-item"><a className="page-link" href="javascript:;">Next</a></li>
							</ul> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}