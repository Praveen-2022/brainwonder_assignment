import ComponentFive from "./components/ComponentFive";
import ComponentFour from "./components/ComponentFour";
import ComponentOne from "./components/ComponentOne";
import ComponentThree from "./components/ComponentThree";
import ComponentTwo from "./components/ComponentTwo";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="mx-32">
        <ComponentOne />
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
