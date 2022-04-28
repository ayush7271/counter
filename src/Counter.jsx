import React from 'react'
import { useState,useEffect } from 'react'

export const Counter = () => {
    const [count, setcount] = useState(1)


    const counter=()=>{
        setcount(count+1)
    }
    const dcounter=()=>{
        setcount(count-1)
    }0
    const double=()=>{
        setcount(count*2)
    }

    useEffect(() => {
        console.log("mountedempty")
          return () => {
              console.log("abd")
          };
      }, [])
    
  return ( 
      <>
      
    <div style={count%2!=0?{background:"red"}:{background:"green"}}>Counter{count}
    </div>
        <button onClick={counter}>increase</button>
        <button onClick={dcounter}>decrease</button>
        <button onClick={double}>double</button>
      </>
  )
}
