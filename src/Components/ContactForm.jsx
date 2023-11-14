import { useState } from 'react'

const ContactForm = () => {

const [name, setName] = useState('')
const [nameError, setNameError] = useState(false)
const [email, setEmail] = useState('')
const [emailError, setEmailError] = useState(false)
const [message, setMessage] = useState('')
const [messageError, setMessageError] = useState('')
const [errorMessage, setErrorMessage] = useState('')

const handleChange = (e) => {
    console.log(e.target.value)
   switch (e.target.name) {
    case 'name':
        setName(e.target.value)
        setNameError(validateLength(e.target.value))
        break
    case 'email':
        setEmail(e.target.value)
        setEmailError(validateLength(e.target.value, 3))
        break
    case 'message':
        setMessage(e.target.value)
        setMessageError(validateLength(e.target.value, 10))
        break
   }
}


const validateLength = (value, minLength=1) => {
    if (value.length < minLength)
        return true
    return false 
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    for(let element of e.target) {
        switch (element.name) {
            case 'name':
                setName(element.value)
                setNameError(validateLength(element.value))
                break
            case 'email':
                setEmail(element.value)
                setEmailError(validateLength(element.value, 3))
                break
            case 'message':
                setMessage(element.value)
                setMessageError(validateLength(element.value, 10))
                break
        }        

    }
        if(!nameError && !emailError && !errorMessage) {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name, email, message
                })
            });

            if (result.status === 200) 
                alert('Lyckades!')
             else 
                setErrorMessage('Något gick fel')
            
    }
}

return (
    <div className="container">
    <form onSubmit={handleSubmit} noValidate>
        <p className="errorMessage">{errorMessage}</p>
        <div className="input-group">
            <label className={`${nameError ? 'error': ''}`}>{`Name ${nameError ? ' is required' :'' }`} </label>
            <input type="text" name="name" value={name} onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-group">
            <label className={`${emailError ? 'error': ''}`}>{`Email ${emailError ? ' is required' :'' }`}</label>
            <input type="email" name="email" value={email} onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-group">
            <label className={`${messageError ? 'error': ''}`}>{`Your message ${messageError ? ' is required' :'' }`}</label>
            <input type="text" name="message" value={message} onChange={(e) => handleChange(e)} />
        </div>
        <button type="submit">tryck här</button>  
    </form>
    </div>






  )
}

export default ContactForm