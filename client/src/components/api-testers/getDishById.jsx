// @ts-nocheck
import { useState } from "preact/hooks";

const GetDishByIdApiTester = () => {

	const [dishName, setDishName] = useState();

	const handleByIdClick = () => {
    const input = document.querySelector("#by_id_input");
    console.log('---INPUT VAL', input.value);

    if (input.value) {
      fetch(`/api/dishById/${input.value}`)
			.then(response => response.json())
			.then(data => {
        if (data.document.error) {
          setDishName(data.document.error)
        }
        else {
          setDishName(data.document.name)
        }
        document.querySelector('[data-result--dish-by-id]').classList.add('result-active')
      })
			.catch(error => console.error('GET BY ID ERROR', error))
    }
	}

	return (
		<article class="api-tester api-tester--dish-by-id">
      <input type="text" id="by_id_input" />
      <button
        onClick={handleByIdClick}
        type="button"
      >
        Get By ID
      </button>
      <p class="result" data-result--dish-by-id>{dishName}</p>
		</article>
	)
}

export default GetDishByIdApiTester;