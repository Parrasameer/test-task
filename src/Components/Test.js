import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import validationSchema from '../Valadation'; // Importing the validation schema

const initialValues = {
    name: '',
    age: '',
    sex: '',
    email: '',
    mobile: '',
    emergencyContactNumber: '',
    idType: '',
    govtId: '',
};

const onSubmit = (values, { setSubmitting }) => {
    // Do something with the form values
    console.log(values);

    // Set submitting to false after form submission is complete
    setSubmitting(false);
};

const MyForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema} // Adding the validation schema to Formik
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <label htmlFor="name">Name:</label>
                    <Field type="text" name="name" id="name" />
                    <ErrorMessage name="name" />

                    <label htmlFor="age">Age:</label>
                    <Field type="number" name="age" id="age" />
                    <ErrorMessage name="age" />

                    <label htmlFor="sex">Sex:</label>
                    <Field type="text" name="sex" id="sex" />
                    <ErrorMessage name="sex" />

                    <label htmlFor="email">Email:</label>
                    <Field type="email" name="email" id="email" />
                    <ErrorMessage name="email" />

                    <label htmlFor="mobile">Mobile:</label>
                    <Field type="text" name="mobile" id="mobile" />
                    <ErrorMessage name="mobile" />

                    <label htmlFor="emergencyContactNumber">Emergency Contact Number:</label>
                    <Field type="text" name="emergencyContactNumber" id="emergencyContactNumber" />
                    <ErrorMessage name="emergencyContactNumber" />

                    <label htmlFor="idType">ID Type:</label>
                    <Field as="select" name="idType" id="idType">
                        <option value="">-- Select --</option>
                        <option value="Aadhar">Aadhar</option>
                        <option value="PAN">PAN</option>
                    </Field>
                    <ErrorMessage name="idType" />

                    <label htmlFor="govtId">Govt Issued ID:</label>
                    <Field type="text" name="govtId" id="govtId" />
                    <ErrorMessage name="govtId" />

                    <button type="submit" disabled={isSubmitting}>Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default MyForm;
