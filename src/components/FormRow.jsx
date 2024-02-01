const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-control"
        defaultValue={defaultValue || ""}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRow;
