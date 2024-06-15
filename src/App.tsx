
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Ourbelif } from "./pages/Ourbelif";
import { Values } from "./pages/Values";
import { Story } from "./pages/Story";
import { Vision } from "./pages/Vision";
import { Team } from "./pages/Team";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Home />
      <About />
      <Ourbelif />
      <Values />
      <Story />
      <Vision />
      <Team />
      <Contact />
    </div>
  );
}
export default App;
