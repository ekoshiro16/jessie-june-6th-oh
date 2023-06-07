import { useState, useEffect  } from 'react'
import MyChildComp from './components/MyChildComp'

function App() {
  const [welcomeText, setWelcomeText] = useState("Welcome")
  const [counter, setCounter] = useState(0)
  // const [numOfRenders, setNumOfRenders] = useState([{}, {}, {}, {}])

  // S - setup your state
  const [allProducts, setAllProducts] = useState([]);


  // F - fetch your state data
  useEffect(() => {
    async function fetchProductData() {
      try {
        // Fetch the data
        const response = await fetch("https://dummyjson.com/products")

        // Translate the data
        const translatedData = await response.json(); 

        console.log(translatedData)

        // Put the data into the state
        setAllProducts(translatedData.products)
      } catch (error) {
        console.log(error); 
      }
    }

    fetchProductData(); 
  }, [])

  // R - render your data
  return (
    <>
      {/* <h2>Jessie's OH</h2>
      <p>{welcomeText}</p>
      {
        numOfRenders.length ? numOfRenders.map((indivElement) => {
          return (
            <MyChildComp />
          )
        }) : <p>Loading...</p>
      } */}

      <p>{welcomeText}</p>
      <button onClick={() => setWelcomeText(welcomeText + "!")}>Click Me</button>

      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add to counter</button>

      {
        allProducts.map((singleProduct) => {
          console.log(singleProduct)
          return (
            <div key={singleProduct.id}>
              <p>Title: {singleProduct.title}</p>
            </div>
          )
        })
      }
    </>
  )
}



export default App


// if (numOfRenders.length) {
//   // do the mapping
// } else {
//   // show loading
// }

// numOfRenders.length ? do mapping : do loading


