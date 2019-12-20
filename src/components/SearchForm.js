import React, { useState, useEffect } from "react";
// import { withFormik, Form, Field } from "formik";
import { Form } from 'formik'
// import * as Yup from "yup";
import axios from "axios";

export default function SearchForm({
  values,
  errors,
  touched,
  status
}) {
  // const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   console.log(
  //     "status has changed!",
  //     status
  //   );

  //   status &&
  //   setCharacters(characters => [
  //       ...characters,
  //       status
  //     ]);
  // }, [status]);
// https://rickandmortyapi.com/api/character/?name=rick&status=alive
  return (
    <section className="search-form">Search Form
      {/* <Form>        
        <div className='btnStyle'>
          <button type="submit">
            Submit!
          </button>
        </div>
      </Form> */}
    </section>
  );
}
