function Input({data, type, name}) {
    return (
        <label>
            {data}
            <input type={type} name={name}/>
        </label>
    );
}

export default Input;