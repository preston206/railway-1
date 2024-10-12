// @ts-nocheck
import { useState } from "preact/hooks";

const DishByNameApiTester = () => {

	const [dishName, setDishName] = useState();

	const handleByNameClick = () => {
    const input = document.querySelector("#by_name_input");
    console.log('---INPUT VAL', input.value);
		
    if (input.value) {
      fetch(`/api/dishByName/${input.value}`)
			.then(response => response.json())
			.then(data => {
        if (data.document.error) {
          setDishName(data.document.error)
        }
        else {
          setDishName(data.document.name)
        }
      })
			.catch(error => console.error('GET BY NAME ERROR', error))
    }
	}

	return (
		<article class="api-tester api-tester--dish-by-name">
      <input type="text" id="by_name_input" />
      <button
        onClick={handleByNameClick}
        type="button"
      >
        Get By Name
      </button>
      <p class="result">{dishName}</p>
		</article>
	)
}

export default DishByNameApiTester;