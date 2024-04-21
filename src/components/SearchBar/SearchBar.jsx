import { Formik, Form, Field } from "formik";
// import css from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        onSubmit(values.query);
        actions.resetForm();
      }}
    >
      <Form>
        <Field
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
