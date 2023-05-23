import { nanoid } from "nanoid";

const Clients = (props) => {
  const clientsDisplay = Object.keys(props).map((prop) => {
    return (
      <div key={nanoid()} className="max-w-[190px] flex-shrink-0 mr-20">
        <img src={props[prop]} alt="client" />
        {console.log(props[prop])}
      </div>
    );
  });
  return (
    <div className="overflow-x-scroll justify-between no-bar scroll flex items-center mt-20">
      {clientsDisplay}
    </div>
  );
};

export default Clients;
