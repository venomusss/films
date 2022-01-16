function Form({getFilms}) {
    return (
        <div className="Form" onSubmit={getFilms}>
            <form className='form'>
                <input className='input' type='text' name='film' placeholder='Enter words'/>
                <button className='button'>Submit</button>
            </form>
        </div>
    );
}

export default Form;