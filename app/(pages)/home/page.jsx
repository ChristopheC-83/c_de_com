import EarthComponent from "./components/_EarthComponent";
import Stat from "./components/Stat";
import StatDetails from "./components/_StatDetails";
import Needs from "./components/Needs";
import Price from "./components/Price";

export default function HomePage() {
  return (
    <div className="">
      <EarthComponent />
      <div
        className="bg-fixed bg-no-repeat bg-cover customShadowLg"
        style={{ backgroundImage: "url('/images/frames/stat.jpg')" }}
      >
        <div className="bg-clip-opacity">
          <div className="bg-neutral-100/70">
            <Stat />
          </div>
        </div>
      </div>
      <Needs />
      <div
        className="bg-fixed bg-no-repeat bg-cover customShadowLg"
        style={{ backgroundImage: "url('/images/frames/price.jpg')" }}
      >
        <div className="bg-clip-opacity">
          <div className="bg-neutral-100/70">
            <Price />
          </div>
        </div>
      </div>
    </div>
  );
}
