import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCart from "./PhoneCart";

const Phone = () => {
  const [phone, setPhone] = useState({});

  const { id } = useParams();
  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones?.find((phone) => phone.id === id);

    setPhone(findPhone);
  }, [id, phones]);

  return (
    <div className="py-10 px-56">
      <PhoneCart phone={phone}></PhoneCart>
    </div>
  );
};

export default Phone;
