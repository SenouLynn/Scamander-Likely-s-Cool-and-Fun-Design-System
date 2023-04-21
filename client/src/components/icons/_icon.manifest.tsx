import * as Icons from "react-icons/bi";

const shaper = () => {
  let iconList: searchable = {};
  const cleanTitle = (title: string) => title.split("Bi")[1];
  Object.entries(Icons).forEach(
    ([key, value]) => (iconList[cleanTitle(key)] = value)
  );
  return iconList;
};
export const IconManifest = shaper();

export const Icon = (props: IconProps) => {
  const { icon } = props;
  const Icon = IconManifest[icon];
  if (!Icon) {
    console.warn(`Could not find icon ${icon} in IconManifest`);
    return <></>;
  }
  return <Icon size="20" />;
};

type IconProps = {
  icon: string;
};
