import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import styles from "./styles.module.scss"

interface LoginData {
    username: string;
    password: string;
}

const initialValues: LoginData = {
    username: '',
    password: '',
};

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
});

const onSubmit = (values: LoginData) => {
    // handle form submission here
};

export const LoginForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {(formik) => (
                <Form>
                    <div className={styles.form_container}>
                        <div className={styles.form_name}>Вхід</div>
                        <div className={styles.form_field}>
                            <label htmlFor="username">Username</label>
                            <Field type="text" id="username" name="username"/>
                            <p className={styles.error_message}>
                                <ErrorMessage name="username"/>
                            </p>
                        </div>
                        <div className={styles.form_field}>
                            <label htmlFor="password">Password</label>
                            <Field type="password" id="password" name="password"/>
                            <p className={styles.error_message}>
                                <ErrorMessage name="password"/>
                            </p>
                        </div>
                        <button type="submit" className={styles.form__submit_button}
                                disabled={!formik.isValid || formik.isSubmitting}>
                            Submit
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};