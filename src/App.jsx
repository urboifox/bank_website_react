import {
  Navbar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testimonials,
  CTA,
  Footer,
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
        <CTA />
      </div>
      <Footer />
    </div>
  );
};

export default App;
