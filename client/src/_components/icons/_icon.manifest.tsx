import * as I from "react-icons/bi";

let Icons = I as searchable;
export const IconManifest = Object.keys(Icons).reduce(
  (a: searchable, b: string) => ((a[b.substring(2)] = Icons[b]), a),
  {}
);

export const Icon = (props: IconProps) => {
  const { icon } = props;
  const Icon = IconManifest[icon];
  if (!Icon) {
    console.warn(`Could not find icon ${icon} in IconManifest`);
    return <></>;
  }
  return <Icon size="20" />;
};

// type Icons = ObjectKeys<typeof Icons, IconType>;
type IconProps = {
  icon: keyof typeof IconManifest;
};
