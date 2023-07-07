const Input = ({ label, handleChange, name, placeholder, error, value }) => {
    return (
      <div>
        <label
          className={`${
            error && typeof error === "string"
              ? "labelError"
              : error && error[name === "email" ? "mail" : name]
              ? "labelError"
              : "label"
          }`}>
          <span>{label}</span>
          <span className="font-semibold text-xxs">
            {error && typeof error === "string"
              ? error
              : error && error[name === "email" ? "mail" : name]}
          </span>
        </label>
        <input
          className={`${
            error && typeof error === "string"
              ? "inputError"
              : error && error[name === "email" ? "mail" : name]
              ? "inputError"
              : "input"
          } bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          type="text"
          onChange={handleChange}
          name={name}
          placeholder={placeholder && placeholder}
          value={value}
        />
      </div>
    );
  };
  
  export default Input;