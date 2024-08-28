/* eslint-disable react/prop-types */
const Input = ({ name, isMessage }) => {
  let defaultStyling =
    "w-full px-3 py-2 mb-3 rounded-lg bg-gray-800 opacity-50 focus:outline-none";

  let messageStyling = `${defaultStyling} h-60 focus:opacity-50`;

  let displayContent = (
    <div>
      <input
        name={name}
        placeholder={name}
        className={defaultStyling}
        type='text'
      ></input>
    </div>
  );
  if (isMessage === true) {
    displayContent = (
      <div>
        <textarea
          placeholder={name}
          className={messageStyling}
          type='text'
          name={name}
        ></textarea>
      </div>
    );
  }

  return displayContent;
};
export default Input;
