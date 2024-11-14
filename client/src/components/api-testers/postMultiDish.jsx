// import { useState } from "preact/hooks";

const PostMultiDishApiTester = () => {

  const handleSubmit = event => {
    event.preventDefault();

		const formData = new FormData(event.currentTarget);

		const randomNumber = Math.floor(Math.random() * 9999999);

		// formData.append("is_private", "true");
		formData.append("account_id", randomNumber.toString());
		// formData.append("account_name", "Homer Simpson");

    console.log("---POST MULTI FORMDATA", formData);

    // create an object of the formData key\vals
		const formEntriesObj = Object.fromEntries(formData.entries());

    // const dishCount = formEntriesObj.filter(entry => )

    // console.log("---POST MULTI FORM ENTRIES", formData.entries());
		console.log("---POST MULTI FORM ENTRIES OBJ", formEntriesObj);
    // console.log("---POST MULTI FORM KEYS", formData.keys());
    // console.log("---POST MULTI FORM KEYS", formData.keys());

    const dishesData = Object.entries(formEntriesObj);

    const dishTypes = dishesData.filter(d => d[0].includes('type'));
    console.log('---POST MULTI DISH TYPES', dishTypes);
    const dishCount = dishTypes.length;
    console.log('---POST MULTI DISH COUNT', dishCount);

    // @ts-ignore
    formEntriesObj.dishCount = dishCount;

		const apiOptions = {
			method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formEntriesObj)
		}

		fetch('/api/dishes', apiOptions)
			.then(response => response.json())
			.then(data => {
        console.log('---POST MULTI DATA:', data);

        if (data.documents.error) {
          // setResult(data.document.error);
          // @ts-ignore
          document.querySelector('[data-result--post-one-dish-test] span').innerText = "false";
        }
        else {
          // console.log('---DATA ACK', data.document.acknowledged);
          // setResult(data.document.acknowledged);
          // @ts-ignore
          document.querySelector('[data-result--post-multi-dish-test] span').innerText = data.documents.acknowledged;
        }
        document.querySelector('[data-result--post-multi-dish-test]').classList.add('result-active')


        // TODO: re-add this get
				// fetch(`/api/dishById/${data.mealId}`)
				// 	.then((response) => {
				// 		console.log('---POST MULTI GET BY ID RESPONSE', response);
				// 		return response.json();
				// 	})
				// 	.then((data) => {
				// 		console.log('---POST MULTI GET BY ID DATA', data);
				// 		setMongoData(data);
				// 	})
				// 	.catch(error => console.log('---POST MULTI GET ERROR 2', error));


			})
			.catch(error => console.log('---POST MULTI POST ERROR:', error));

    // console.log('---SUBMITTED');
  }

	return (
		<article class="api-tester">

      <form id="meal_form" action="" onSubmit={handleSubmit}>
        <div>
					<label class="label" htmlFor="">Username</label>
					<input required type="text" name="username" id="" />
				</div>

				<div>
          <div class="type-container">
            <p class="type-heading">Dish Type:</p>
            <label class="type-label" htmlFor="">Main</label>
            <input required type="radio" name="dish_1_type" value="main" />
            <label class="type-label" htmlFor="">Side</label>
            <input required type="radio" name="dish_1_type" value="side" />
          </div>
				</div>

				<div>
					<label class="label" htmlFor="">Dish Name</label>
					<input required type="text" name="dish_1_name" id="" />
				</div>

        <div>
          <div class="type-container">
            <p class="type-heading">Dish Type:</p>
            <label class="type-label" htmlFor="">Main</label>
            <input required type="radio" name="dish_2_type" value="main" />
            <label class="type-label" htmlFor="">Side</label>
            <input required type="radio" name="dish_2_type" value="side" />
          </div>
				</div>

				<div>
					<label class="label" htmlFor="">Dish Name</label>
					<input required type="text" name="dish_2_name" id="" />
				</div>

        <div>
          <div class="type-container">
            <p class="type-heading">Dish Type:</p>
            <label class="type-label" htmlFor="">Main</label>
            <input required type="radio" name="dish_3_type" value="main" />
            <label class="type-label" htmlFor="">Side</label>
            <input required type="radio" name="dish_3_type" value="side" />
          </div>
				</div>

				<div>
					<label class="label" htmlFor="">Dish Name</label>
					<input required type="text" name="dish_3_name" id="" />
				</div>

				<button>Post Multi Dishes</button>
			</form>
      <p class="result" data-result--post-multi-dish-test>Posted: <span></span></p>
		</article>
	)
}

export default PostMultiDishApiTester;