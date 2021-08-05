import React from 'react'
import { Answer } from './Answer'

export const Faq = (props) => {

    const toggleFAQ = (index) => {
        props.setdata(props.data.map((dat, i) => {
          if(i==index){
            dat.open = !dat.open
          }
          else{
              dat.open=false
          }
          return dat
        }))
      }

    return (
        
        <>
        <header>
            <h2 className="display-1 h1">FAQ Page</h2>
        </header>

        <div className="faqs">
            {props.data.map((dat,i)=>(
                
                    <Answer dat={dat} index={i} toggleFAQ={toggleFAQ}/>
                
            ))}
        </div>

        </>

    )
}
