import { useState } from "react";

export const Form = ( {handlerClickContinue} ) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    return(
        <form onSubmit={ e => { e.preventDefault();
                                setName(e.target.name.value);
                                setPhone(e.target.phone.value);
                                setEmail(e.target.email.value);
                        }}
        >
            <input type="text" name="name" autoComplete="off"/>
            <input type="number" name="phone" autoComplete="off"/>
            <input type="email" name="email" autoComplete="off"/>
            {/* <button type="submit" onClick={() => handlerClickContinue({name, phone, email})}>Finalizar compra</button> */}
            <button type="submit" onClick={() => handlerClickContinue({name, phone, email})}>Finalizar compra</button>
        </form>
        
    );
}