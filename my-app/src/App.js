// import React, { useState} from "react";
// export default function MyInput(props){
//      const [inputValue, setInputValue] = useState("");
//      function handleInputChange(event){
//           setInputValue(event.target.value)
//      }
//      function handleSubmit(event){
//           event.preventDefault();
//           console.log("Submitted value: ", inputValue);
//      }
//      const [color,setColor]=useState('blue')
//      function changeColor(){
//       setColor('red');
    
//      }

//      const[fontSize,setFontSize]=useState("1em");
//      function changeSize(){
//       setFontSize("3em");
//      }
//      return(
//           <form onSubmit={handleSubmit}>
//                <label htmlFor="word">Enter anything</label><br />
//                <input type="text" id="my-input" value={inputValue} onChange={handleInputChange} /><br/>
//                <button type="submit">changeColor</button><br />
//                <button onClick={changeColor} >change color</button>
//                <p style={{color}}> pleaze change my color</p>
//                <button onClick={changeSize}>change Size</button>
//                <p style={{fontSize}}>change my size plz</p>
//           </form>
//      )
// }







import React, { useState } from 'react'

function App() {
  function HandlingFormSubmission(){
    const [name,setName]=useState('');
    function handleNameChange(event){
      setName(event.target.value);
    }
    function handleSubmition(event){
      event.preventDefault();
      alert('Name submitted: ' + name);
    }
  }
  return (
    <div>
    <form onSubmit={handleSubmition}>
      <label>Name
      <input  type='text' value={setName} onChange={handleNameChange} />
    
    </label>

    <button type='submit'>submit</button>
       
    </form>
    </div>
  )
}

export default App
