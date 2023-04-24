import { useContext, useState } from "react";
import { PoopDeckContext } from "../../context";

//Types: roles?
//Img
//Text
//

//Components
export const ImgOptions = () => {
  const { updaters, pack } = useContext(PoopDeckContext);
  const [local, setLocal] = useState(pack.styles?.imgUrl || "");
  const handleUpdate = (e: any) => {
    const styles = { ...pack.styles, imgUrl: e.target.value };
    updaters.field({ ...pack, styles });
    setLocal(e.target.value);
  };

  return (
    <div>
      <div>Image Options</div>
      <div>
        <span className="w-100">
          <label>URL</label>
          <input
            type="url"
            value={local}
            className="w-100"
            onChange={handleUpdate}
          />
        </span>
        <span>
          <label>Alt</label>
          <input type="string" value={local} />
        </span>
      </div>
      <div>
        <span>
          <label>Size</label>
          <select>
            <option>Icon</option>
            <option>Fit to Parent</option>
            <option>Full Page</option>
          </select>
        </span>
      </div>
    </div>
  );
};

//Dictionary
export const DisplayOptions: searchable = {
  image: ImgOptions,
};

//Master Data Holder
export default function Display(pack: ComponentPackage) {
  const Component = DisplayOptions[pack.role];
  if (!Component) return <></>;
  return (
    <div>
      <Component />
    </div>
  );
}

//Build order of Image Options

//Sizes:
//Icon
//Fit To Parent
//Full Page

//Position
//static
// relative
// fixed
// absolute
// sticky

//Alignment
//Top
//Bottom
//End
//Start

// background-size: cover;
// background-repeat: no-repeat;
// background-position: 50% 50%;

//Opacity
//Rotation
