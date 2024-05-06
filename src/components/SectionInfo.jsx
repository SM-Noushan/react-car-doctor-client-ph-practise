import PropTypes from "prop-types";

const SectionInfo = ({ heading, title, desc, descCSS }) => {
  return (
    <>
      <h5 className="text-red-811 text-xl font-bold capitalize">{heading}</h5>
      <h1 className="text-dark-001 text-3xl lg:text-[45px] font-bold capitalize">
        {title}
      </h1>
      <p className={`text-dark-003 capitalize ${descCSS}`}>{desc}</p>
    </>
  );
};

SectionInfo.propTypes = {
  heading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  descCSS: PropTypes.string,
};

export default SectionInfo;
