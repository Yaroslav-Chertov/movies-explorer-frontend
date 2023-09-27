import { useCallback, useState } from 'react'
import isEmail from 'validator/lib/isEmail'
import { MESSAGES, NAME_REGEX } from '../utils/constants';

export const useForm = (initialValues = {}) => {
    const [form, setForm] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                !NAME_REGEX.test(value)
                    ? e.target.setCustomValidity(MESSAGES.NAME_ERROR)
                    : e.target.setCustomValidity('');
                break;
            case 'email':
                !isEmail(value)
                    ? e.target.setCustomValidity(MESSAGES.EMAIL_ERROR)
                    : e.target.setCustomValidity('');
                break;
            default:
                break;
        };

        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: e.target.validationMessage });
        setIsValid(e.target.closest('form').checkValidity());
    };

    const resetForm = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setForm(newValues);
        setErrors(newErrors);
        setIsValid(newIsValid);
    }, [setForm, setErrors, setIsValid]);


    return { form, errors, isValid, handleChange, resetForm }
};