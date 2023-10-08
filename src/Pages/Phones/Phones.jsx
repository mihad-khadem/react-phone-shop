import PhoneCard from "./PhoneCard";

const Phones = ({ phones }) => {
  console.log(phones);
  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">Our Phones</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10">
        {
            phones?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
        }
      </div>
    </div>
  );
};

export default Phones;
