import { useEffect, useState } from "react";
import FavoritePhones from "./FavoritePhones";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  //   Not Found data
  const [notFound, setNotFound] = useState("");
  const [showMore, setShowMore] = useState(false);
  // Running a side effect to get the data from the local storage
  useEffect(() => {
    const favoriteItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItem) {
      setFavorites(favoriteItem);
    } else {
      setNotFound("No Data Found");
    }
  }, []);
  console.log(favorites);
  const handleDelete = () => {
    localStorage.clear();
    setFavorites([]);
    setNotFound("Data Not Found!!!");
  };
  const handleSeeAll = () => {};
  console.log(showMore);
  return (
    <div className="min-h-[70vh]">
      <h2 className="text-2xl text-center uppercase font-semibold mt-8">
        Favorites
      </h2>
      {notFound ? <p className="flex justify-center mt-52">{notFound}</p> : ""}
      <div className="flex justify-center my-4">
        {favorites.length > 0 && (
          <button
            onClick={handleDelete}
            className="btn bg-sky-300 hover:bg-sky-500 focus:bg-sky-500 px-2 py-2 rounded-sm text-white"
          >
            Delete All
          </button>
        )}
      </div>
      <div className="grid px-16 lg:grid-cols-2 gap-3 my-6">
        {
           showMore ? favorites.map((phone) => (
            <FavoritePhones key={phone.id} phone={phone}></FavoritePhones> 
          )) : 
          favorites.slice(0, 4).map((phone) => (
            <FavoritePhones key={phone.id} phone={phone}></FavoritePhones> 
          ))
        }
      </div>
      <div className="flex justify-center my-4">
        <button
          className=" bg-sky-300 text-white px-3 py-2 rounded-sm hover:bg-sky-700 focus:bg-sky-600"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? 'Hide All' : 'Show'}
        </button>
      </div>
    </div>
  );
};

export default Favorite;
