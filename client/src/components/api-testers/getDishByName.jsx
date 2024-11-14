// @ts-nocheck
import { useState } from "preact/hooks";

const GetDishByNameApiTester = () => {

	const [username, setUsername] = useState();

	const handleByNameClick = () => {
    const input = document.querySelector("#by_name_input");
    console.log('---INPUT VAL', input.value);

    if (input.value) {
      fetch(`/api/dishByName/${input.value}`)
			.then(response => response.json())
			.then(data => {
        if (data.document.error) {
          setUsername(data.document.error)
        }
        else {
          setUsername(data.document.username)
        }
        document.querySelector('[data-result--dish-by-name]').classList.add('result-active')
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
      <p class="result" data-result--dish-by-name>{`user: ${username}`}</p>
		</article>
	)
}

export default GetDishByNameApiTester;