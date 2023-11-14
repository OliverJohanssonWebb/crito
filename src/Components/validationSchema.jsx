import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const ContactForm = () => {
    const [errorMessage, setErrorMessage] = useState('')
        const form = useFormik ( {
            initialValues : {
                name:'',
                email:'',
                message:'',


            
            },

            validationSchema:Yup.object

        })
}