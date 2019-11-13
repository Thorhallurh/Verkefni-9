const API_URL = 'https://apis.is/company?name=';

/**
 * Leit að fyrirtækjum á Íslandi gegnum apis.is
 */
const program = (() => {
  let form;
  let results;

  function init(companies) {
    // finna form -> addEventListener('onSubmit', fetchData)
    companies.addEventListener('onSubmit', fetchDada);
  }

  async function fetchData(event) {
    const { value } = event.target
    if (!isEmpty(value)) // skilar villu ef value er tómt
      return null

      displayLoadingState()

      try {
      const response = await fetch(url+value)

      if (!response.ok) //birta villuskilaboð

      const result = await json.json()
      removeLoadingState()

      addToDom(result)
      } catch (e) {
        removeLoadingState()
        //villuskilaboð
      }
  }

  function displayLoadingState() {
    //ná í results
    const imgElement = document.createElement('img')
    imgElement.setAttribute('src', '/loading.gif')

    resultsDOM.appendChild(imgElement)
  }

  function removeLoadingState() {
    const imgElement = results.querySelector('img')
    resultsDOM.removeChild(imgElement)
  }

  function addToDom(data) {
    const { results } = data
    const resultDivs = []
    for(let result of results) {
      const resultDiv = document.createElement('div')
      
      if(result.active) {
        resultDiv.classList.add('company--active')
      }
      // ...

      resultDivs.push(resultDiv)
    }
    
    const resultDivs = results.map(result => {

    })

    for (let div of ResultDivs) {
      resultsDom.appendChild(div)
    }
    // eða
    resultsDivs.forEach(resultsDom.apprendChild)
  }

  return {
    init,
  };
})();



document.addEventListener('DOMContentLoaded', () => {
  program.init(companies);
});
