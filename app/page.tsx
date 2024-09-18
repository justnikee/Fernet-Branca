import { Hero } from "./home-components/Hero";
import Productcta from "./home-components/Product-cta";
import Whatisfernet from "./home-components/What-is-fernet";

export default function Home() {
  return (
    <div className="">
       <Hero/>
       <Whatisfernet/>
       <Productcta />
    </div>
  );
}
