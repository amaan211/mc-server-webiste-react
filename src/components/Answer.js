import React from 'react'

export const Answer = ({dat, index, toggleFAQ}) => {
    return (
        <div className={"faq" + (dat.open ? 'open' : '') } key={index} onClick={()=>toggleFAQ(index)}>
            <div className="faq-question">
				{dat.question}
			</div>
			<div className="faq-answer">
				{dat.answer}
			</div>


        </div>
    )
}
