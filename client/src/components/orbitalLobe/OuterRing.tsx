import { createContext, useEffect, useState } from "react";

const satellites = {
  success: ({ message }: any) => ({
    title: "Success!",
    message: "Component saved to database.",
  }),
};

export default function OuterRing(props: any) {
  const [satelliteArray, setSatelliteArray] = useState<any>([]);
  //First in first out

  useEffect(() => {
    setTimeout(() => {
      let newArr = [...satelliteArray];
      newArr.shift();
      setSatelliteArray(newArr);
    }, 5000);
  }, [satelliteArray]);

  return (
    <div className="h-100vh w-100vw position-absolute top-0 bg-color-info">
      {satelliteArray.map((satellite: any) => {
        return <Satellite {...satellite} />;
      })}
      {props.children}
    </div>
  );
}

export const Satellite = (satellite: { title: string; message: string }) => {
  return (
    <div className="position-fixed z-index-11 right-0rem padding-sm border h-5rem">
      <div className="flex-column">
        <h5>{satellite.title}</h5>
      </div>
      <p>{satellite.message}</p>
    </div>
  );
};

export const OuterRingContext = createContext({
  sendIntoOrbit: () => null,
});
