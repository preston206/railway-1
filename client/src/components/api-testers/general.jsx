import { useState } from "preact/hooks";

const GeneralApiTester = () => {

	const [result, setResult] = useState();

	const handleGeneralClick = () => {
		fetch('/api/test')
			.then(response => response.json())
			.then(data => {
        console.log('---GENERAL API TESTER - DATA', data.document);
        setResult(data.document.name)
      })
			.catch(error => console.error('GENERAL API TESTER ERROR', error));
	}

	return (
		<article class="api-tester">
      <button
        onClick={handleGeneralClick}
        type="button"
      >
        General API Tester
      </button>
      <p class="result">{result}</p>
		</article>
	)
}

export default GeneralApiTester;