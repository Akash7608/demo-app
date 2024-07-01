import './comp.js'
import './App.css';
import {useState , useEffect} from 'react'

function App() {
  // let counter=0;

  let [counter , setCounter]=useState(10);

  function AddValue(){
    // counter=counter+1;
    setCounter(counter+1);
    // console.log(counter);
  }
  var DecValue=()=>{
    // counter=counter-1;
    setCounter(counter-1);
    // console.log(counter);
  }

  useEffect(()=>{
    console.log("mounted");

    return ()=>{
      console.log('unmountd');
    }
  } , []);

  useEffect(()=>{
    console.log('updation');
  } , [counter])
  return (
    <>
    <h1>Counter Value : {counter}</h1>
    <button onClick={AddValue}>Add Value</button>
    <br/>
    <button onClick={DecValue}>Dec value</button>
    </>
  );
}


export default App;
