import React from 'react'
import { createPortal } from 'react-dom';
import { BarLoader, DoubleBubble, SlidingPebbles } from 'react-spinner-animated';
import 'react-spinner-animated/dist/index.css'
import "./model.css"


const Model = () => {
    // let a=document.getElementById('portal')
    // console.log(a)
    return (
        <div className='model_ele'>
            <DoubleBubble text={"Loading ..."} width={"150px"} height={"150px"} />
        </div>
    )
}

export default Model