import PropTypes from "prop-types";

const Card = ({ data = {}, cardType }) => {
  const { _id, title, img, price } = data;
  return (
    <div className="p-6 rounded-lg border border-dark-006 mx-auto">
      <img
        src={img || "../../assets/images/services/1.jpg"}
        alt="services-image"
        className="rounded-lg w-[303px] h-[202px] object-cover object-center"
      />
      <h1 className="text-dark-002 text-[22px] lg:text-[25px] font-bold mt-4">
        {title || "Unknown Title"}
      </h1>
      <div
        className={
          cardType === "services" && "flex items-center justify-between"
        }
      >
        <h2 className="text-red-811 text-lg lg:text-xl font-semibold">
          Price : ${price || 0}
        </h2>
        {cardType === "services" && (
          <button className="hover:bg-red-811/20 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75"
                stroke="#FF3811"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  cardType: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

export default Card;
