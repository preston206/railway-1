import { useEffect, useState } from 'preact/hooks';
import GetGeneralApiTester from '../../components/api-testers/getGeneral';
import GetDishByNameApiTester from '../../components/api-testers/getDishByName';
import GetDishByIdApiTester from '../../components/api-testers/getDishById';
import GetDishesByUsernameApiTester from '../../components/api-testers/getDishesByUsername';
import PostOneDishApiTester from '../../components/api-testers/postOneDish';
import PostMultiDishApiTester from '../../components/api-testers/postMultiDish';
import DeleteDishByIdApiTester from '../../components/api-testers/deleteOneDish';
import UpdateDishByIdApiTester from '../../components/api-testers/updateOneDish';
import './style.css';

export function Home() {

	// useEffect(() => {
	// 	fetch('/api/publicDishes/main')
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			console.log('---DATA', data);
	// 			// const dishes = data.map(item => item.document.data());
	// 			// console.log('---DISHES', dishes);
	// 		})
	// 		.catch(error => console.error('GET ALL PUBLIC DISHES ERROR', error))
	// }, [])

	return (
		<section>
			<div class="container container--get">
				<h2>GET</h2>
				<GetGeneralApiTester />
				<GetDishByNameApiTester />
				<GetDishByIdApiTester />
				<GetDishesByUsernameApiTester />
			</div>

			<div class="container container--post">
				<h2>POST</h2>
				<PostOneDishApiTester />
				<PostMultiDishApiTester />
			</div>

			<div class="container container--delete">
				<h2>DELETE</h2>
				<DeleteDishByIdApiTester />
			</div>

			<div class="container container--update">
				<h2>UPDATE</h2>
				<UpdateDishByIdApiTester />
			</div>
		</section>
	);
}
