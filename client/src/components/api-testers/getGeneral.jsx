import { useState } from "preact/hooks";

const GetGeneralApiTester = () => {

	const [result, setResult] = useState();

	const handleGeneralClick = () => {
		fetch('/api/test')
			.then(response => response.json())
			.then(data => {
        console.log('---GENERAL API TESTER - DATA', data.document);
				if (data.document.error) {
          setResult(data.document.error)
        }
        else {
					setResult(data.document.name)
				}
				document.querySelector('[data-result--general-test]').classList.add('result-active')
      })
			.catch(error => console.error('GENERAL API TESTER ERROR', error));
	}

	return (
		<article class="api-tester">
			<input type="text" id="general_test_input" />
      <button
        onClick={handleGeneralClick}
        type="button"
      >
        General API Tester
      </button>
      <p class="result" data-result--general-test>{result}</p>
		</article>
	)
}

export default GetGeneralApiTester;