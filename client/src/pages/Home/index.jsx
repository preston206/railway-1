import { useEffect, useState } from 'preact/hooks';
import GeneralApiTester from '../../components/api-testers/general';
import DishByNameApiTester from '../../components/api-testers/dishByName';
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
		<div class="container">
			<GeneralApiTester />
			<DishByNameApiTester />
		</div>
	);
}
