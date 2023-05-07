import * as Yup from 'yup';

const validation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    age: Yup.number()
        .required('Age is required')
        .positive('Age must be a positive number')
        .integer('Age must be an integer'),
    sex: Yup.string().required('Sex is required'),
    mobile: Yup.string()
        .matches(/^[6-9]\d{9}$/, { message: 'Mobile number must be a valid Indian mobile number', excludeEmptyString: true })
        .required('Mobile number is required'),
    emergencyContactNumber: Yup.string()
        .matches(/^[6-9]\d{9}$/, { message: 'Emergency contact number must be a valid Indian mobile number', excludeEmptyString: true })
        .required('Emergency contact number is required'),
    idType: Yup.string().required('ID type is required'),
    govtId: Yup.string()
        .required('ID is required')
        .test('invalid-id', 'Invalid ID format', (value, { parent }) => {
            const idType = parent.idType;
            const regex = idType === 'Aadhar' ? /^\d{12}$/ : /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
            return regex.test(value);
        }),
});

export default validation;
