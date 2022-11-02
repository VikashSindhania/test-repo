import React from 'react'

const Child = (props) => {
    console.log(Child)


    return (
        <>
            <h1>Hey My name is transferred from Parent to child : {props.name}</h1>
            <h1>Hey My name is transferred from Parent to child : {props.age}</h1>
            <h1>Hey My name is transferred from Parent to child : {props.name}</h1>
            <h1>Hey My name is transferred from Parent to child : {props.name}</h1>
            <h1>Hey My name is transferred from Parent to child : {props.name}</h1>
            <h1>Hey My name is transferred from Parent to child : {props.name}</h1>
        </>
    )
}

export default Child
