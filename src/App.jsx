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
import "@/style/main.css";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
function App() {
  return (
    <>
      <Header />
      <div className="kuda-preview md:pt-[48px] md:pr-[40px] md:pb-[60px] md:pl-[40px]">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </div>
    </>
  );
}

export default App;
