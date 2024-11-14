// import { useState } from "preact/hooks";

const PostOneDishApiTester = () => {

	// const [result, setResult] = useState();

  // const resultRef = useRef(result);
  // resultRef.current = result;

  // console.log('---POST ONE RESULT', result);

	// const handlePostOneDishClick = () => {

  //   const dish = {
  //     "name": "pizza",
  //     "username": "homersimpson"
  //   }

  //   fetch('/api/dish', {
  //     method: "POST",
  //     body: JSON.stringify(dish),
  //     headers: {
  //       "Content-Type": "application/json",
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('---POST ONE DISH API TESTER - DATA', data.document);
  //     if (data.document.error) {
  //       // setResult(data.document.error);
  //       // @ts-ignore
  //       document.querySelector('[data-result--post-one-dish-test] span').innerText = "false";
  //     }
  //     else {
  //       // console.log('---DATA ACK', data.document.acknowledged);
  //       // setResult(data.document.acknowledged);
  //       // @ts-ignore
  //       document.querySelector('[data-result--post-one-dish-test] span').innerText = data.document.acknowledged;
  //     }
  //     document.querySelector('[data-result--post-one-dish-test]').classList.add('result-active')
  //   })
  //   .catch(error => console.error('POST ONE DISH API TESTER ERROR', error));


	// 	// fetch('/api/dish')
	// 	// 	.then(response => response.json())
	// 	// 	.then(data => {
  //   //     console.log('---POST ONE DISH API TESTER - DATA', data.document);
	// 	// 		if (data.document.error) {
  //   //       setResult(data.document.error)
  //   //     }
  //   //     else {
	// 	// 			setResult(data.document.name)
	// 	// 		}
	// 	// 		document.querySelector('[data-result--post-one-dish-test]').classList.add('result-active')
  //   //   })
	// 	// 	.catch(error => console.error('POST ONE DISH API TESTER ERROR', error));
	// }

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
			method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
			body: JSON.stringify(formEntries)
		}

		fetch('/api/dish', apiOptions)
			.then(response => response.json())
			.then(data => {
        console.log('---POST ONE DATA:', data);
				// const getOptions = {
				// 	method: "GET",
				// 	body: JSON.stringify(formEntries)
				// }

				// console.log('---FE DATA MEAL ID', data);

        if (data.document.error) {
          // setResult(data.document.error);
          // @ts-ignore
          document.querySelector('[data-result--post-one-dish-test] span').innerText = "false";
        }
        else {
          console.log('---POST DATA DOC', data.document);
					// console.log('---POST DATA ACK', data.document.acknowledged);
          // setResult(data.document.acknowledged);
          // @ts-ignore
          document.querySelector('[data-result--post-one-dish-test] span').innerText = data.document.acknowledged;
        }
        document.querySelector('[data-result--post-one-dish-test]').classList.add('result-active')



        // TODO: re-add this get
				// fetch(`/api/dishById/${data.mealId}`)
				// 	.then((response) => {
				// 		console.log('---POST ONE GET BY ID RESPONSE', response);
				// 		return response.json();
				// 	})
				// 	.then((data) => {
				// 		console.log('---POST ONE GET BY ID DATA', data);
				// 		setMongoData(data);
				// 	})
				// 	.catch(error => console.log('---POST ONE GET ERROR 2', error));




			})
			.catch(error => console.log('---POST ONE POST ERROR:', error));

    // console.log('---SUBMITTED');
  }

	return (
		<article class="api-tester">

      <form id="post_meal_form" action="" onSubmit={handleSubmit}>
				<div>
          <div class="type-container">
            <p class="type-heading">Dish Type:</p>
            <label class="type-label" htmlFor="">Main</label>
            <input required type="radio" name="type" value="main" />
            <label class="type-label" htmlFor="">Side</label>
            <input required type="radio" name="type" value="side" />
          </div>
				</div>

        <div>
					<label class="label" htmlFor="">Username</label>
					<input required type="text" name="username" id="" />
				</div>

				<div>
					<label class="label" htmlFor="">Dish Name</label>
					<input required type="text" name="name" id="" />
				</div>
				
				<div>
					<label class="label" htmlFor="">Description</label>
					<textarea name="description" id=""></textarea>
				</div>
				
				<div>
					<label class="label" htmlFor="">Ingredients</label>
					<textarea name="ingredients" id=""></textarea>
				</div>
				
				<div>
					<label class="label" htmlFor="">Instructions</label>
					<textarea name="instructions" id=""></textarea>
				</div>
				
				<div>
					<label class="label" htmlFor="">Notes</label>
					<textarea name="notes" id=""></textarea>
				</div>

				<button>Post One Dish</button>
			</form>

      <p class="result" data-result--post-one-dish-test>Posted: <span></span></p>
		</article>
	)
}

export default PostOneDishApiTester;