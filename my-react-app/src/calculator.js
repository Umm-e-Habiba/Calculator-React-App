import { useState } from "react";
import './calculator.css';
import React from "react";
import ReactDOM from 'react-dom/client';
let first_digit="";
let second_digit="";
let result="";
let operation="";
let operator_flag=false;
let floating_digit=false;

function Calculator(){
    const [name1,setName1]=useState("");
   
   
    const inputdigit=(digit)=>{
        if(digit=="."){
            floating_digit=true;
        }
        //const addition=parseInt(name1)+parseInt(name2);
        if(operator_flag){
            second_digit=second_digit+digit;
            setName1(second_digit);
           
            
        }
        else{
            first_digit=first_digit+digit;
            setName1(first_digit);
        }
        //alert("Added");
    }
    
    const inputoperator=(operator)=>{
        
        
        operator_flag=true;
        if(second_digit){
            equality();
            first_digit=result;
            second_digit="";
        }
        operation=operator;
        setName1("");
        
        
    }
    
    const equality=()=>{
        if(!floating_digit){
            first_digit=parseInt(first_digit);
            second_digit=parseInt(second_digit);
        }
        else{
            first_digit=parseFloat(first_digit);
            second_digit=parseFloat(second_digit);
        }
        if(operation=="+"){
            result=first_digit+second_digit;
            setName1(result);
        }
        else if( operation=="-"){
            result=first_digit-second_digit;
            setName1(result);
        }
        else if(operation=="*"){
            result=first_digit*second_digit;
            setName1(result);
        }
        else{
            result=first_digit/second_digit;
            setName1(result);
        }
        
        
        //alert("helo");
    }

    const all_clear=()=>{
        first_digit="";
        second_digit="";
        operator_flag=false;
        result="";
        setName1("");
    }
    return(
        <div className="calculator card">

            <input type="text" className="calculator-screen z-depth-1" readOnly value={name1} onChange={(e) => setName1(e.target.value)}/>

            <div className="calculator-keys">

                <button  type="button" data-mdb-button-init className="operator btn btn-info" value="+" onClick={(e) => inputoperator(e.target.value)}>+</button>
                <button  type="button" data-mdb-button-init className="operator btn btn-info" value="-" onClick={(e) => inputoperator(e.target.value)}>-</button>
                <button  type="button" data-mdb-button-init className="operator btn btn-info" value="*" onClick={(e) => inputoperator(e.target.value)}>&times;</button>
                <button  type="button" data-mdb-button-init className="operator btn btn-info" value="/" onClick={(e) => inputoperator(e.target.value)}>&divide;</button>

                <button  type="button" data-mdb-button-init value="7" data-mdb-ripple-init className="btn btn-light waves-effect" onClick={(e) => inputdigit(e.target.value)}>7</button>
                <button  type="button" data-mdb-button-init value="8" data-mdb-ripple-init className="btn btn-light waves-effect" onClick={(e) => inputdigit(e.target.value)}>8</button>
                <button  type="button" data-mdb-button-init value="9" data-mdb-ripple-init className="btn btn-light waves-effect" onClick={(e) => inputdigit(e.target.value)}>9</button>


                <button  type="button" data-mdb-button-init value="0" data-mdb-ripple-init className="btn btn-light waves-effect" onClick={(e) => inputdigit(e.target.value)}>0</button>
                <button  type="button" data-mdb-button-init value="4" data-mdb-ripple-init className="btn btn-light waves-effect"onClick={(e) => inputdigit(e.target.value)}>4</button>
                <button  type="button" data-mdb-button-init value="5" data-mdb-ripple-init className="btn btn-light waves-effect"onClick={(e) => inputdigit(e.target.value)}>5</button>


                <button  type="button" data-mdb-button-init value="6" data-mdb-ripple-init className="btn btn-light waves-effect" onClick={(e) => inputdigit(e.target.value)}>6</button>
                <button  type="button" data-mdb-button-init value="." data-mdb-ripple-init className="btn btn-light waves-effect" onClick={(e) => inputdigit(e.target.value)}>.</button>
                <button  type="button" data-mdb-button-init value="1" data-mdb-ripple-init className="btn btn-light waves-effect" onClick={(e) => inputdigit(e.target.value)}>1</button>


                <button  type="button" data-mdb-button-init value="2" data-mdb-ripple-init className="btn btn-light waves-effect" onClick={(e) => inputdigit(e.target.value)}>2</button>
                <button  type="button" data-mdb-button-init className="decimal function btn btn-secondary" value="3" onClick={(e) => inputdigit(e.target.value)}>3</button>
                <button  type="button" data-mdb-button-init className="all-clear function btn btn-danger btn-sm" value="all-clear" onClick={(e) => all_clear()}>AC</button>

                <button  type="button" data-mdb-button-init className="equal-sign  btn btn-default" value="=" onClick={equality}>=</button>

            </div>
        </div>
        
    );
}


export default Calculator;