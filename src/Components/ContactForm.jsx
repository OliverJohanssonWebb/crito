import { useState } from 'react';
import style from '../Components/ContactFormStyle.scss'


const ContactForm = () => {

const [name, setName] = useState('')
const [nameError, setNameError] = useState(false)
const [email, setEmail] = useState('')
const [emailError, setEmailError] = useState(false)
const [message, setMessage] = useState('')
const [messageError, setMessageError] = useState('')
const [errorMessage, setErrorMessage] = useState('')

const handleChange = (e) => {
    
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
                alert('Message sent!')
             else 
                setErrorMessage('Något gick fel')
            
    }
}

return (
    <section className="contactForm-section">
    <div className="container">
        <div className="section-title">
        <h2>Leave us a message for any information.</h2>
    </div>    
    <div className="submitForm">
    <form onSubmit={handleSubmit} noValidate>
        <p className="errorMessage">{errorMessage}</p>
        <div className="input-group">
            <label className={`${nameError ? 'error': ''}`}>{`* ${nameError ? '*' :'' }`} </label>
            <input placeholder="Name"type="text" name="name" value={name} onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-group">
            <label className={`${emailError ? 'error': ''}`}>{`* ${emailError ? ' *' :'' }`}</label>
            <input placeholder="Email"type="email" name="email" value={email} onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-group-extra">
            <label className={`${messageError ? 'error': ''}`}>{`* ${messageError ? '*' :'' }`}</label>
            <input placeholder="Message" type="text" name="message" value={message} onChange={(e) => handleChange(e)} />
        </div>
        <button className="btn-yellow" type="submit">Send message<i class="fa-solid fa-arrow-turn-up"></i></button>  
    </form>
    </div>
    </div>
    </section>






  )
}

export default ContactForm