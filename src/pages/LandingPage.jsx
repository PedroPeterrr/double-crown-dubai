import NavigationBar from "../components/NavigationBar";
import About from "../components/pages/About";
import Hero from "../components/pages/Hero";
import Information from "../components/pages/Information";
import Services from "../components/pages/services";

function LandingPage() {
  return (
    <main className="flex flex-col">
        <NavigationBar />
        <Hero />
        <Services  />
        <About />
        <Information />
    </main>
  );
}



export default LandingPage;