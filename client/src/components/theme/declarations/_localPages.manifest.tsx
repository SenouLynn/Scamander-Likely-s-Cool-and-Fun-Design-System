import { Render } from "../../Render";

export const pages = {
  //Don't change, this is used by tests
  TestRenderer: (props: ComponentProps) =>
    Render(props, {
      defaultStyleId: "page-home",
      componentId: "page-home",
      location: "0",
      subComponents: [
        {
          defaultStyleId: "black_box",
          componentId: "black_box",
          subComponents: [
            {
              defaultStyleId: "black_box",
              componentId: "black_box",
            },
          ],
        },
        { defaultStyleId: "test_component", componentId: "test_component" },
        {
          defaultStyleId: "black_box",
          componentId: "black_box",
        },
      ],
    }),
};

export default {
  TestRenderer: pages.TestRenderer,
};
