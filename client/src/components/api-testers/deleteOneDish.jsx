// @ts-nocheck
// import { useState } from "preact/hooks";

const DeleteDishByIdApiTester = () => {

	// const [result, setResult] = useState();

	const handleDeleteByIdClick = () => {
    const input = document.querySelector("#delete_by_id_input");
    console.log('---INPUT VAL', input.value);

    if (input.value) {
      const apiOptions = {
        method: "DELETE"
      }

      fetch(`/api/dish/${input.value}`, apiOptions)
        .then(response => response.json())
        .then(data => {
          if (data.document.error) {
            // setResult(data.document.error)
            document.querySelector('[data-result--delete-dish-by-id] span').innerText = "false";
          }
          else {
            // console.log('---DATA DOC', data.document);
            // console.log('---DATA ACK', data.document.acknowledged);
            // setResult(data.document.acknowledged)
            // setResult("deleted")
            document.querySelector('[data-result--delete-dish-by-id] span').innerText = data.document.acknowledged;
          }
          document.querySelector('[data-result--delete-dish-by-id]').classList.add('result-active')
        })
        .catch(error => console.error('DELETE BY ID ERROR', error))
    }
	}

	return (
		<article class="api-tester api-tester--delete-dish-by-id">
      <input type="text" id="delete_by_id_input" />
      <button
        onClick={handleDeleteByIdClick}
        type="button"
      >
        Delete By ID
      </button>
      <p class="result" data-result--delete-dish-by-id>Deleted: <span></span></p>
		</article>
	)
}

export default DeleteDishByIdApiTester;