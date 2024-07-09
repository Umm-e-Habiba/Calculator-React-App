import { useState } from "react";


function Calculator(){
    const [name1,setName1]=useState("");
    const [name2,setName2]=useState("");
    const [name3,setName3]=useState("");
    const add=()=>{
        const addition=parseInt(name1)+parseInt(name2);
        setName3(addition);
        alert("Added");
    }
    const subtt=()=>{
        let n1=parseInt(name1);
        let n2=parseInt(name2);
        //const subtraction1=parseInt(name1)-parseInt(name2);
        if(n1>n2){
            setName3(n1-n2);
        }
        else{
            setName3(n2-n1);
        }
          //subtraction1=parseInt(name1)-parseInt(name2);
        //else
          //subtraction1=parseInt(name2)-parseInt(name1);
        //setName3(subtraction1);
        alert("subtracted");
    }
    return(
        <div className="Calculator">
            <h2>Calculator</h2>
            <p Enter first Number></p><input type='number' name='num1' value={name1} onChange={(e) => setName1(e.target.value)}/>
            <p Enter Second Number></p><input type='number' name='num2' value={name2} onChange={(e) => setName2(e.target.value)}/>
            <button onClick={add}>Add</button>
            <button onClick={subtt}>subtract</button>
            <p Result></p><input type='number' name='num3' value={name3} readOnly/>
        </div>
        
    );
}


export default Calculator;