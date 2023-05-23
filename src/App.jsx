import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
} from "./components";
import style from "./style";

const App = () => {
  return (
    <div className="font-poppins bg-primary text-white overflow-hidden">
      <div className={`${style.boxWidth} mx-auto`}>
        <Navbar />
        <Hero />
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
      </div>
    </div>
  );
};

export default App;
