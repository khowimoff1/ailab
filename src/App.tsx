import About from "./components/About/about";
import Barriers from "./components/Barriers/barriers";
import Eksprt from "./components/Eksper/Eksprt";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Manager from "./components/Manager/manager";
import TelegramForm from "./components/TelegramForm/TelegramForm";
import TestimonialsSwiper from "./components/TestimonialsSwiper/TestimonialsSwiper";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <Helmet>
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1448733829669279');
            fbq('track', 'PageView');
          `}
        </script>
        <noscript>
          {`
            <img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1448733829669279&ev=PageView&noscript=1"/>
          `}
        </noscript>
      </Helmet>
      <Hero />
      <About />
      <Eksprt />
      <Manager />
      <Barriers />
      <TestimonialsSwiper />
      <TelegramForm />
      <Footer />
    </>
  );
};

export default App;
