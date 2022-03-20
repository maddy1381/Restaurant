import React from 'react'

function CardComponent(props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            {props.children}
        </div>
    )
}

export default CardComponent
