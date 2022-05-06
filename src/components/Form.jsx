import "../css/Form.css"
export const Form = ( {handlerClickContinue} ) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let phone = e.target.phone.value;
        let email = e.target.email.value;
        handlerClickContinue({name, phone, email});
    }

    return(
        <form className="form" onSubmit={ handleSubmit }>
            <input type="text" name="name" autoComplete="off"/>
            <input type="number" name="phone" autoComplete="off"/>
            <input type="email" name="email" autoComplete="off"/>
            <button type="submit">Finalizar compra</button>
        </form>
        
    );
}