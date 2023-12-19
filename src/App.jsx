
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {
const [amount,setAmount]=useState(0) //state 1
const [year,setYear]=useState(0)//state 2
const [rate,setRate]=useState(0)//state 3


const [interest,setInterest]=useState(0) //state 4

console.log(amount);
console.log(year);
console.log(rate);


const calculate=(e)=>{
  const output =amount*rate*year/100
console.log(output);
setInterest(output)
}
const reset =(e)=>{
setAmount(0)
setRate(0)
setYear(0)
setInterest(0)
  

}






  return (
    <div className="App">
      <div className='container'>
<div className='header'>
    <h1>Simple Interest Calculator</h1>
    <p>Calculate your simple interest </p>
</div>
<div className='total'>
    <h2>&#8377; {interest}</h2>
    <p>Your Total Interest</p>
</div>
<div className='form'>
    <form>
<div className='input'>
<TextField id="outlined-basic" label="Amount" value={amount||""} onChange={(e)=>setAmount(e.target.value)} variant="outlined" />
<TextField id="outlined-basic" label="Year" value={year||""}  onChange={(e)=>setYear(e.target.value)} variant="outlined" />
<TextField id="outlined-basic" label="Rate" value={rate||""}  onChange={(e)=>setRate(e.target.value)} variant="outlined" />
</div>

    </form>

    <div className='button'>
    
<Button variant="contained mt-3" onClick={e=>calculate(e)}>Calculate</Button>
<Button variant="outlined mt-2" type='reset' onClick={e=>reset(e)}>Reset</Button>
        
         </div>
</div>

    </div>
    </div>
  );
}

export default App;
