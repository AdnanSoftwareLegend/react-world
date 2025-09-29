
import { Suspense } from 'react'
import './App.css'
import Countries from './assets/Components/countries/countries'

const countriesPromise= fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())


function App() {
 

  return (
    <>
      
     <Suspense fallback={<p>Please wait loding........ </p>}>

      <Countries countriesPromise={countriesPromise} ></Countries>
     </Suspense>
      


    </>
  )
}

export default App
