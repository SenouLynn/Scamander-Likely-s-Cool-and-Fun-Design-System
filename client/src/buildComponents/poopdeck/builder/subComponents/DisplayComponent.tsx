import { createStyles } from "../../../../utils/styles/createStyles";

export default function DisplayComponent({ pack }: ComponentBuilderProps) {
  //Weird class muncher for display placement
  const placementClass =
    pack && createStyles(pack).includes("w-100")
      ? "w-100"
      : "flex-center-center";

  return (
    <div className="h-100 w-100 ">
      <div className="">
        <h1>{pack?.label || "New Component"}</h1>
      </div>
      <div className="w-100 h-100 border flex-center-start padding-xxl">
        {pack && (
          <div className={placementClass}>
            <>{pack.render({ props: {}, pack: pack })}</>
          </div>
        )}
      </div>
    </div>
  );
}
