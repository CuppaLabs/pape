"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import Pagination, { paginate } from "../components/pagination";
import { useSearchParams } from 'next/navigation';
import Select, { ControlProps, StylesConfig, components } from 'react-select'

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
	const query  = useSearchParams();
	const [rangeQuery, setRangeQuery] = useState(query.get('range'));
	const [categoryQuery, setCategoryQuery] = useState(query.get('category'));
	const [currentPage, setCurrentPage] = useState(1);
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	const [ranges, setRanges] = useState<any>([]);
	const [categories, setCategories] = useState<any>([]);
	const [paginatedData, setPaginatedData] = useState([]);
	const options: any = [
		{ value: 'recommended', label: 'Recommended' },
		{ value: 'priceAsc', label: 'Price: Low to High' },
		{ value: 'priceDsc', label: 'Price: High to Low' },
		{ value: 'discountDsc', label: 'Discount: High to low' },
		{ value: 'discountAsc', label: 'Discount: Low to High' },
		{ value: 'nameAsc', label: 'Name: A to Z' },
		{ value: 'nameDsc', label: 'Name: Z to A' }
	  ]
	const [filters, setFilters] = useState<any>({
		keyword: '',
		price: {
			from: 0,
			to:0
		},
		selectedRanges: rangeQuery ? [rangeQuery] : [],
		selectedCategories: categoryQuery ? [categoryQuery] :[],
		sortBy: options[0]
	});

	const pageSize = 12;

	const onPageChange = (page: any) => {
		setCurrentPage(page);
	};
	useEffect(() => {
		async function fetchData() {
			const resp = await getData();
			setData(resp);
			const rangeList: any = Array.from(new Set(resp.map((obj: any) => obj.range)));
			const catList = Array.from(new Set(resp.map((obj: any) => obj.category)));
			setRanges([...ranges, ...rangeList]);
			setCategories([...categories, ...catList]);
		}
		if(data.length === 0){
			fetchData();
		}
		
	}, []);

/* 	useEffect(() => {
		setFilters({
			...filters,
			"selectedRanges": [...filters.selectedRanges, ...[rangeQuery]],
			"selectedCategories": [...filters.selectedCategories, ...[categoryQuery]]
		})
	}, [rangeQuery, categoryQuery]) */

	const sort = (arr: any) => {

		if(filters.sortBy){
			if(filters.sortBy.value === "nameAsc"){
					return arr.sort((a: any,b: any) => {
							if(a.name.toLowerCase() > b.name.toLowerCase()){
								return 1;
							}
							if(a.name.toLowerCase() < b.name.toLowerCase()){
								return -1;
							}
							return 0;
					})
			}
			else if(filters.sortBy.value === "nameDsc"){
				return arr.sort((a: any,b: any) => {
						if(a.name.toLowerCase() > b.name.toLowerCase()){
							return -1;
						}
						if(a.name.toLowerCase() < b.name.toLowerCase()){
							return 1;
						}
						return 0;
				})
			}
		else if(filters.sortBy.value === "priceAsc"){
			return arr.sort((a: any,b: any) => {
					if(a.price > b.price){
						return 1;
					}
					if(a.price < b.price){
						return -1;
					}
					return 0;
			})
			}
			else if(filters.sortBy.value === "priceDsc"){
				return arr.sort((a: any,b: any) => {
						if(a.price > b.price){
							return -1;
						}
						if(a.price < b.price){
							return 1;
						}
						return 0;
				})
				}
				else if(filters.sortBy.value === "discountAsc"){
					return arr.sort((a: any,b: any) => {
							if(a.discount > b.discount){
								return 1;
							}
							if(a.discount < b.discount){
								return -1;
							}
							return 0;
					})
					}
					else if(filters.sortBy.value === "discountDsc"){
						return arr.sort((a: any,b: any) => {
								if(a.discount > b.discount){
									return -1;
								}
								if(a.discount < b.discount){
									return 1;
								}
								return 0;
						})
						}
		}
		return arr;
	}
	const filterByValue = (array: any, string: any) => {
		return array.filter((o: any) =>
			Object.keys(o).some(k => {
				console.log(o[k]);
				return typeof o[k] === 'string' ? o[k].toLowerCase().includes(string.toLowerCase()) : false
			}));
	}
	const filterByprice = (arr: any, val: any, dir: any) => {
		return dir === "from" ? arr.filter((obj: any) => obj.price > val) :  arr.filter((obj: any) => obj.price < val);
	}
	useEffect(() => {
		if(data.length){
		let list: any = [];
		if(filters.selectedRanges.length){
			list = list.length == 0 ? data.filter((obj: any) => filters.selectedRanges.includes(obj.range)) : list.filter((obj: any) => filters.selectedRanges.includes(obj.range));
		}
		if(filters.selectedCategories.length){
			list = list.length == 0 ? data.filter((obj: any) => filters.selectedCategories.includes(obj.category)) : list.filter((obj: any) => filters.selectedCategories.includes(obj.category));
		}
		if(filters.keyword){
			list = list.length == 0 ? filterByValue(data, filters.keyword) : filterByValue(list, filters.keyword);
		}
		if(filters.price.from){
			list = list.length == 0 ? filterByprice(data, filters.price.from, 'from') : filterByprice(list, filters.price.from, 'from');
		}
		if(filters.price.to){
			list = list.length == 0 ? filterByprice(data, filters.price.to, 'to') : filterByprice(list, filters.price.to, 'to');
		}
		setFilteredData(filters.selectedRanges.length ||  filters.selectedCategories.length || filters.keyword || filters.price.from || filters.price.to ? sort(list) : sort(data));
		setCurrentPage(1);
	}
	}, [data, filters.selectedRanges, filters.selectedCategories, filters.sortBy, filters.keyword, filters.price.from, filters.price.to]);

	useEffect(() => {
		const paginatedPosts = paginate(filteredData, currentPage, pageSize);
		setPaginatedData(paginatedPosts);
		const newData: any = [];
		while (paginatedPosts.length) newData.push(paginatedPosts.splice(0, 4));
		setPaginatedData(newData);
	}, [currentPage, filteredData]);

	const handleOnRangeChange = (item: any) => {
		const index = filters.selectedRanges.indexOf(item);
		if(index > -1){
			const data = filters.selectedRanges.splice(index, 1);
			console.log(data);
			setFilters({
				...filters,
				"selectedRanges": [...filters.selectedRanges],
			})
		}
		else {
			setFilters({
				...filters,
				"selectedRanges": [...filters.selectedRanges, ...[item]],
			})
		}
		
	}
	const handleOnCatChange = (item: any) => {
		const index = filters.selectedCategories.indexOf(item);
		if(index > -1){
			const data = filters.selectedCategories.splice(index, 1);
			console.log(data);
			setFilters({
				...filters,
				"selectedCategories": [...filters.selectedCategories],
			})
		}
		else {
			setFilters({
				...filters,
				"selectedCategories": [...filters.selectedCategories, ...[item]],
			})
		}
		
	}

	const handleOnSort = (val: any) => {
		console.log(val);
		setFilters({
			...filters,
			sortBy: val
		})
	}
	const updateKeyword = (evt: any) => {
		setFilters({
			...filters,
			keyword: evt.target.value
		})
	}
	const Control = ({ children, ...props }: ControlProps<any, false>) => {
		// @ts-ignore
		const { emoji, onEmojiClick } = props.selectProps;
		const style = { cursor: 'pointer' };
	  
		return (
		  <components.Control {...props}>
			<span>Sort By: </span>
			{children}
		  </components.Control>
		);
	  };
	  const styles: StylesConfig<any, false> = {
		control: (css) => ({ ...css, paddingLeft: '1rem' }),
	  };
	  const updatePrice = (evt: any, r: String) => {
			if(r === "from"){
				setFilters({
					...filters,
					price: {
						...filters.price,
						from: parseInt(evt.target.value)
					}
				})
			}
			else if(r === "to"){
				setFilters({
					...filters,
					price: {
						...filters.price,
						to: parseInt(evt.target.value)
					}
				})
			}
	  }
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
									<input type="text" className="form-control input-sm" name="keyword" value={filters.keyword} onChange={(evt: any) => updateKeyword(evt)} placeholder="Enter Keywords" />
								</div>
								<div className="mb-3">
									<label className="form-label">Price</label>
									<div className="row row-space-0">
										<div className="col-md-5">
											<input type="number" className="form-control input-sm" name="price_from" value={filters.price.from} onChange={(evt: any) => updatePrice(evt, 'from')} placeholder="Price From" />
										</div>
										<div className="col-md-2 text-center pt-5px fs-12px text-muted">to</div>
										<div className="col-md-5">
											<input type="number" className="form-control input-sm" name="price_to" value={filters.price.to} onChange={(evt: any) => updatePrice(evt, 'to')} placeholder="Price To" />
										</div>
									</div>
								</div>
{/* 								<div className="mb-30px">
									<button type="submit" className="btn btn-sm btn-theme btn-dark w-100"><i className="fa fa-search fa-fw me-1 ms-n3"></i> FILTER</button>
								</div> */}
							</form>
							<br></br>
							<h4 className="title mb-0">Ranges</h4>
							<ul className="search-category-list">
								{ranges && ranges.map((item: any) => (
									<li>
										<div className="form-check mt-2 mb-2">
											<input className="form-check-input" type="checkbox" 
												checked={filters.selectedRanges.includes(item)} 
												value={item} id={item} 
												onChange={() => handleOnRangeChange(item)}/>
											<label className="form-check-label" htmlFor="flexCheckDefault">
											{item} <span className="pull-right">(10)</span>
											</label>
										</div>
										
									</li>
								))}
							</ul>
							<br></br>
							<br></br>
							<h4 className="title mb-0">Categories</h4>
							<ul className="search-category-list">
								{categories && categories.map((item: any) => (
									<li>
										<div className="form-check mt-2 mb-2">
											<input className="form-check-input" type="checkbox" 
												checked={filters.selectedCategories.includes(item)} 
												value={item} id={item} 
												onChange={() => handleOnCatChange(item)}/>
											<label className="form-check-label" htmlFor="flexCheckDefault">
											{item} <span className="pull-right">(10)</span>
											</label>
										</div>
									</li>
								))}
							</ul>
						</div>
						<div className="search-content">
							<div className="search-toolbar">
								<div className="row">
									<div className="col-lg-6">
										<h4></h4>
									</div>
									<div className="col-lg-6 product-sort">
									<Select styles={styles} components={{ Control }} className="react-select-container" options={options} value={filters.sortBy} onChange={(event) => handleOnSort(event)} placeholder="Sort By"/>
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
													href={"/products/" + itemc.product_id}>
													<img src={"../assets/img/products/" + itemc.range + " RANGE/" + itemc.image} alt="" />
													<div className="discount">15% OFF</div>
												</Link>

												<div className="item-info">
													<h4 className="item-title">
														<a href={"/products/" + itemc.product_id}>{itemc.name}<br />{itemc.range}</a>
													</h4>
{/* 													<p className="item-desc">3D Touch. 12MP photos. 4K video.</p>
 */}													<div className="item-price">{itemc.price}</div>
													<div className="item-discount-price">{itemc.price}</div>
												</div>
											</div>
										)}


									</div>
								)}
							</div>
							<Pagination
								items={filteredData.length} // 100
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