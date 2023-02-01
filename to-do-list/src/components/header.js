import React, { useState } from "react";

function Header(){
    
    const [input, setInput] = useState("");
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(input);
        setInput("");
    };
    
    return (
        <>
        <center>
        <form onSubmit = {handleSubmit}>
        <h1> To Do</h1>
        
        <div>
        <input>
        value = {input}
        onchange = {(e) => setInput(e.target.value)}
        </input>
        <button type="submit"> Submit 
        </button>
        </div>
        </center>
        </>
    );
    
    
    
    
    
    
}