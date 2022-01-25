import { ContactUs } from "../components/ContactForm";
import { Meta } from "../components/Core/Meta";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { AppConfig } from "../utils/AppConfig";

const ContactPage = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <ContactUs />
    <Footer />
  </div>
);

export default ContactPage;
