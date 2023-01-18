import React from "react";
import { useRef } from "react";
import { useState } from "react";


function OrderForm(){

    const fishCutletQty = useRef(null)
    const cheeseCutletQty = useRef(null)
    const chickenCutletQty = useRef(null)
    let cutletSubtotal = ""


    const [subtotal, setSubtotal] = useState(0)
    const calculateTotal = () => {
        cutletSubtotal = (fishCutletQty.current.value)*1.00 + (cheeseCutletQty.current.value)*1.00 + (chickenCutletQty.current.value)*1.25
        setSubtotal(cutletSubtotal)
    }


    return (
        <div classNameName="order-details">
                        <h3>Cutlets</h3>
                        <div className="option-container">
                            <input value="Fish Cutlet" type="hidden" name="fish-cutlet"/>
                            <input value="1.00" type="hidden" name="fish-cutlet"/>
                            <input value="cutlet" type="hidden" name="fish-cutlet"/>
                            <p>Fish: </p>
                            <input type="number" name="fish-cutlet" className="fish-cutlet" ref={fishCutletQty} />
                            <p className="price"> [$1.00/pc]</p>
                        </div>
                        <div className="option-container">
                            <input value="Cheese & Potato Cutlet" type="hidden" name="cheese-cutlet"/>
                            <input value="1.00" type="hidden" name="cheese-cutlet"/>
                            <input value='cutlet' type="hidden" name="cheese-cutlet"/>
                            <p>Cheese: </p>
                            <input type="number" name="cheese-cutlet" ref={cheeseCutletQty} />
                            <p className="price"> [$1.00/pc]</p>
                        </div>
                        <div className="option-container">
                            <input value="Chicken Cutlet" type="hidden" name="chicken-cutlet"/>
                            <input value="1.25" type="hidden" name="chicken-cutlet"/>
                            <input value="cutlet" type="hidden" name="chicken-cutlet"/>
                            <p>Chicken: </p>
                            <input type="number" name="chicken-cutlet" ref={chickenCutletQty}/>
                            <p className="price"> [$1.25/pc]</p>
                        </div>
                        <p >Total: {subtotal}</p>
                        <button onClick={calculateTotal}>Calculate Total</button>
        </div>
    )
}

export default OrderForm;