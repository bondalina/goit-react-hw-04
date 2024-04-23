import { Formik, Form, Field } from "formik";
import { FiSearch } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const notify = () => toast("Please enter text to search for an image");
  return (
    <Formik
      initialValues={{ query: "" }}
      onSubmit={(values, actions) => {
        if (values.query.trim() === "") {
          notify();
          return;
        }
        onSubmit(values.query);
        actions.resetForm();
      }}
    >
      <header className={css.header}>
        <Form className={css.form}>
          <button className={css.searcBtn} type="submit">
            <FiSearch className={css.searchIcon} />
          </button>
          <Toaster />
          <Field
            className={css.searchInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </header>
    </Formik>
  );
};

export default SearchBar;
