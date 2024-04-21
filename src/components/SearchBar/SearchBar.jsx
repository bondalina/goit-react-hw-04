import { Formik, Form, Field } from "formik";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = async (values, actions) => {
    if (!values.query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(values.query);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ query: "" }} onSubmit={handleFormSubmit}>
      <header className={css.header}>
        <Form className={css.form}>
          <button className={css.searcBtn} type="submit">
            <FiSearch className={css.searchIcon} />
          </button>
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
