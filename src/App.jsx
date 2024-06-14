import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../src/components/ui/navigation-menu";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import "@/style/style.css";

function App() {
  return (
    <>
      <Header />
      <div className="kuda-preview">
        <Section1 />
      </div>
    </>
  );
}

export default App;
