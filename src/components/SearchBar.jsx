import React from "react";
import { Form, useNavigation } from "react-router-dom";

const SearchBar = ({ search }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="px-4">
      <div className="input-group rounded">
        <input
          type="search"
          name="search"
          className="form-control rounded"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          defaultValue={search}
        />
        <button
          type="submit"
          className="btn"
          id="search-addon"
          disabled={isSubmitting}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </button>
      </div>
    </Form>
  );
};

export default SearchBar;
