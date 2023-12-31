import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const PhoneCart = ({ phone }) => {
  const { id, image, brand_name, phone_name, price, rating } = phone || {};

  // Add to Favorite
 const handleAddFavorite = () => {
    const addedFavorites = [];
    const favoriteItem = JSON.parse(localStorage.getItem("favorites"));

    // When local storage is empty, then the if statement will be executed
    if (!favoriteItem) {
      addedFavorites.push(phone);
      localStorage.setItem("favorites", JSON.stringify(addedFavorites));
    } else {
      const isExists = favoriteItem.find((phone) => phone.id === id);
      if (!isExists) {
        addedFavorites.push(...favoriteItem, phone);
        localStorage.setItem("favorites", JSON.stringify(addedFavorites));
        toast.success("Item added to favorites");
      }
      else{
        toast.error('Already added')
      }
      
    }
    console.log(favoriteItem);
  };

  return (
    <div className="py-10">
      <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-sky-300 antialiased">
            {rating}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Price : {price} $
          </p>
          <a className="inline-block" href="#">
            <button
              onClick={handleAddFavorite}
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-sky-500 transition-all hover:bg-sky-500/10 active:bg-sky-300/50 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              add to favorite
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
            <ToastContainer />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhoneCart;
