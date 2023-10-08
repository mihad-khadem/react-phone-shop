import { Link } from "react-router-dom";

const PhoneCard = ({ phone }) => {
    // Car Details
  const { id, image, brand_name, phone_name, price, rating } = phone || {};
  return (
    <div>
      <div className="relative flex w-70 h-70 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {price}
            </p> 
            
          </div>
          <p>{brand_name}</p>
          <p>{rating}</p>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            
          </p>
        </div>
        <div className="p-6 pt-0">
          <Link to={`/phones/${id}`}><button
            className="block w-full select-none rounded-lg bg-sky-200 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-blue-gray- transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
           See Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
