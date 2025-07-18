import NavigationBar from "../components/NavigationBar";
import Hero from "../components/pages/Hero";
import Services from "../components/pages/services";

function LandingPage() {
  return (
    <main className="flex flex-col">
        <NavigationBar />
        <Hero />
    </main>
  );
}



export default LandingPage;