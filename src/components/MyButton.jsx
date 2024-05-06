import PropTypes from "prop-types";

const MyButton = ({ css, label }) => {
  return (
    <button className={`px-6 btn lg:text-lg font-semibold capitalize ${css}`}>
      {label}
    </button>
  );
};

MyButton.propTypes = {
  css: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default MyButton;
