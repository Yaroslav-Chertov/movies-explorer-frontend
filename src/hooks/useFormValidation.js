import { useState } from 'react';
import { isEmail } from 'validator';

export const useForm = (inputValues) => {
    const [form, setForm] = useState(inputValues);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const { value, name } = e.target;

        if (name === 'email') {
            const customError = !isEmail(value)
                ? 'Ошибка в адресе эл. почты.'
                : '';
            setErrors({ ...errors, [name]: customError });
        } else {
            setErrors({ ...errors, [name]: e.target.validationMessage });
        }
        setForm({ ...form, [name]: value });
        setIsValid(e.target.closest('form').checkValidity());
    };

    return { form, errors, isValid, handleChange };
};