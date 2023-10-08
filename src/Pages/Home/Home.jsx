// Home Component{outlet}
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Phones from "../Phones/Phones";

const Home = () => {

    const phones = useLoaderData();


  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="py-10">
        <Phones phones={phones}></Phones>
      </div>
    </div>
  );
};

export default Home;
