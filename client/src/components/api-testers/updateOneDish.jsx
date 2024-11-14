// @ts-nocheck
import { useState } from "preact/hooks";

const UpdateDishByIdApiTester = () => {

	const [dish, setDish] = useState({});

  console.log('---DISH', dish);

	const handleUpdateByIdClick = () => {
    const input = document.querySelector("#update_by_id_input");
    console.log('---INPUT VAL', input.value);


    /*
    STEPS:
    1 GET one dish by ID
    2 populate form with response
    3 UPDATE dish
    */

    // GET
    if (input.value) {
      fetch(`/api/dishById/${input.value}`)
			.then(response => response.json())
			.then(data => {
        if (data.document.error) {
          setDish(data.document.error)
        }
        else {
          // JUST SET IT HERE AND THEN IN THE FORM USE THE STATE TO POPULATE
          setDish(data.document)
        }
        // document.querySelector('[data-result--update-dish-by-id]').classList.add('result-active')
      })
			.catch(error => console.error('UPDATE BY ID ERROR', error))
    }
	}

  const handleSubmit = event => {
    event.preventDefault();

		const formData = new FormData(event.currentTarget);

		const randomNumber = Math.floor(Math.random() * 9999999);

		formData.append("is_private", "true");
		formData.append("account_id", randomNumber.toString());
		// formData.append("account_name", "Homer Simpson");

		const formEntries = Object.fromEntries(formData.entries());

		console.log("---POST ONE FORM ENTRIES", formEntries);

		const apiOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
			body: JSON.stringify(formEntries)
		}

    // UPDATE \ PUT
		fetch(`/api/dish/${dish._id}`, apiOptions)
			.then(response => response.json())
			.then(data => {
        console.log('---UPDATE ONE DATA:', data);
				// const getOptions = {
				// 	method: "GET",
				// 	body: JSON.stringify(formEntries)
				// }

				// console.log('---FE DATA MEAL ID', data);

        if (data.document.error) {
          // setResult(data.document.error);
          // @ts-ignore
          document.querySelector('[data-result--update-dish-by-id] span').innerText = "false";
        }
        else {
          console.log('---UPDATE DATA DOC', data.document);
          // console.log('---UPDATE DATA ACK', data.document.acknowledged);
          // setResult(data.document.acknowledged);
          // @ts-ignore
          document.querySelector('[data-result--update-dish-by-id] span').innerText = data.document.acknowledged;
        }
        document.querySelector('[data-result--update-dish-by-id]').classList.add('result-active')
			})
			.catch(error => console.log('---POST ONE POST ERROR:', error));

    // console.log('---SUBMITTED');
  }

	return (
		<article class="api-tester api-tester--update-dish-by-id">
      <input type="text" id="update_by_id_input" />

      <button
        onClick={handleUpdateByIdClick}
        type="button"
      >
        Get By ID
      </button>

      <form id="update_meal_form" action="" onSubmit={handleSubmit}>
				<div>
          <div class="type-container">
            <p class="type-heading">Dish Type:</p>
            <label class="type-label" htmlFor="">Main</label>
            <input required type="radio" name="type" value="main" checked={dish.type && dish.type === 'main'} />
            <label class="type-label" htmlFor="">Side</label>
            <input required type="radio" name="type" value="side" checked={dish.type && dish.type === 'side'} />
          </div>
				</div>

        {/* <div>
					<label class="label" htmlFor="">ID</label>
					<input required readOnly type="text" name="dish_id" id="" value={dish._id && dish._id} />
				</div> */}

        <div>
					<label class="label" htmlFor="">Username</label>
					<input required type="text" name="username" id="" value={dish.username && dish.username} />
				</div>

				<div>
					<label class="label" htmlFor="">Dish Name</label>
					<input required type="text" name="name" id="" value={dish.name && dish.name} />
				</div>
				
				<div>
					<label class="label" htmlFor="">Description</label>
					<textarea name="description" id="" value={dish.description && dish.description}></textarea>
				</div>
				
				<div>
					<label class="label" htmlFor="">Ingredients</label>
					<textarea name="ingredients" id="" value={dish.ingredients && dish.ingredients}></textarea>
				</div>
				
				<div>
					<label class="label" htmlFor="">Instructions</label>
					<textarea name="instructions" id="" value={dish.instructions && dish.instructions}></textarea>
				</div>
				
				<div>
					<label class="label" htmlFor="">Notes</label>
					<textarea name="notes" id="" value={dish.notes && dish.notes}></textarea>
				</div>

				<button>Update One Dish</button>
			</form>

      <p class="result" data-result--update-dish-by-id>Updated: <span></span></p>
		</article>
	)
}

export default UpdateDishByIdApiTester;