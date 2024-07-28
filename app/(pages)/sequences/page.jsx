import Steps from "./components/Steps";

export default function Sequences() {
  return (
    <div>
      <h1 className={`text-clip w-fit mx-auto md:mt-6`}>
        Comment ça se passe ?
      </h1>
      <h2 className={`text-clip w-fit mx-auto`}>Voyons ça ensemble !</h2>
      <Steps />
    </div>
  );
}
