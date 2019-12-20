import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";

const UserForm = ({
    values,
    errors,
    touched,
    status
}) => {
    // console.log("values", values);
    // console.log("errors", errors);
    // console.log("touched", touched);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log(
            "status has changed!",
            status
        );

        status &&
            setUsers(users => [
                ...users,
                status
            ]);
    }, [status]);
    return (
        <div className="user-form">
            <Form>
                <h1 className='pageTitle'>Character Search</h1>
                <div className='formSubSection'>
                    <label htmlFor="name">
                        Name:<>  </>
                        <Field
                            id="name"
                            type="text"
                            name="name"
                            placeholder="name"
                        />
                        {touched.name &&
                            errors.name && (
                                <p className="errors">
                                    {errors.name}
                                </p>
                            )}
                    </label>
                </div>


                <div className='btnStyle'>
                    <button type="submit">
                        Submit!
          </button>
                </div>

            </Form>
            {
                (status === undefined)? <div></div>:
                <section className = 'CharacterCards'>
                    {
                        status.results.map(e => (<CharacterCard myCharacter = {e} />))
                    }
                </section>
            }
            {/* <section className='CharacterList'>
                {
                    users.map(e => (<CharacterCard myCharacter={e} />))
                }
            </section> */}
        </div>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues(props) {
        return {
            name: props.name || ""
        };
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required('NAME IS REQUIRED')
    }),

    handleSubmit(
        values,
        { setStatus, resetForm }
    ) {
        console.log("submitting", values);
        axios
            .get(
                `https://rickandmortyapi.com/api/character/?name=${values.name}`
            )
            .then(res => {
                console.log("success", res);
                setStatus(res.data);
                // resetForm();
            })
            .catch(err =>
                console.log(err.response)
            );
    }
})(UserForm);
export default FormikUserForm;
