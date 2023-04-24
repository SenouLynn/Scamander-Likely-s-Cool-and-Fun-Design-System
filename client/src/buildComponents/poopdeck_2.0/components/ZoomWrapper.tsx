import { useEffect } from "react";

const snapToComponent = () => {
  const component = document.getElementById("component-builder-display");
  if (component) {
    component.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
};

export default function ZoomWrapper(props: any) {
  useEffect(() => {
    return () => snapToComponent();
  }, []);
  
  return (
    <div className="h-200vh w-200vw position-relative remove-scroll-bar">
      {props.children}
    </div>
  );
}
