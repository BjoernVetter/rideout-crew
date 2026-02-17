import ContactForm from "./components/parts/ContactForm/contact-form";
import Card from "./components/Card/Card";
import FotoData from "./components/Card/FotoData";
import Welcome from "./components/Welcome/welcome";
import CookieBanner from "./components/CockieBanner/CockieBanner";

const Home = () => {
  return (
    <>
      <Welcome />
      <CookieBanner />
      <Card FotoData={FotoData} />
      <ContactForm />
    </>
  );
};

export default Home;
