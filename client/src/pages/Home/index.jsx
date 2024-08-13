import { useEffect, useState } from 'preact/hooks';
import preactLogo from '../../assets/preact.svg';
import './style.css';

const ApiTester = () => {

	const [dishName, setDishName] = useState();

	const handleByNameClick = () => {
		fetch('/api/dishByName/lasagna')
			.then(response => response.json())
			.then(data => setDishName(data.ctx_param))
			.catch(error => console.error('GET BY NAME ERROR', error))
	}

	return (
		<section>
			<div>
				<button onClick={handleByNameClick} type="button">Get By Name</button>
				<p>{dishName}</p>
			</div>
		</section>
	)
}

export function Home() {

	useEffect(() => {
		fetch('/api/publicDishes/main')
			.then(response => response.json())
			.then(data => {
				console.log('---DATA', data);
				// const dishes = data.map(item => item.document.data());
				// console.log('---DISHES', dishes);
			})
			.catch(error => console.error('GET ALL PUBLIC DISHES ERROR', error))
	}, [])

	return (
		<div class="home">
			<ApiTester />
		</div>
	);
}
