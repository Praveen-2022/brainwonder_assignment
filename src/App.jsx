import ComponentFive from "./components/ComponentFive";
import ComponentFour from "./components/ComponentFour";
import ComponentOne from "./components/ComponentOne";
import ComponentSix from "./components/ComponentSix";
import ComponentThree from "./components/ComponentThree";
import ComponentTwo from "./components/ComponentTwo";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="mx-[140px]">
        <ComponentOne />
        <ComponentSix/>
        <ComponentTwo />
        <ComponentThree />
        <ComponentFour />
        <ComponentFive />
      </div>
      <Footer />
    </>
  );
}

export default App;
