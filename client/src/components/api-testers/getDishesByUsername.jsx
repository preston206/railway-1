// @ts-nocheck
import { useState } from "preact/hooks";

const GetDishesByUsernameApiTester = () => {

	const [dishNames, setDishNames] = useState([]);

  console.log('---DISH NAMES', dishNames);

	const handleByUsernameClick = () => {
    const input = document.querySelector("#by_username_input");
    console.log('---INPUT VAL', input.value);

    if (input.value) {
      fetch(`/api/dishesByUsername/${input.value}`)
			.then(response => response.json())
			.then(data => {
        console.log('---USERNAME DATA', data);
        if (data.documents.error) {
          setDishNames(data.documents.error)
        }
        else {
          setDishNames(data.documents)
        }
        document.querySelector('[data-result--dishes-by-username]').classList.add('result-active')
      })
			.catch(error => console.error('GET BY USERNAME ERROR', error))
    }
	}

	return (
		<article class="api-tester api-tester--dishes-by-username">
      <input type="text" id="by_username_input" />
      <button
        onClick={handleByUsernameClick}
        type="button"
      >
        Get By Username
      </button>
      <div class="result" data-result--dishes-by-username>
        {dishNames &&
          dishNames.map(dish => <p key={dish.id}>{dish.name}</p>)
        }
      </div>
		</article>
	)
}

export default GetDishesByUsernameApiTester;