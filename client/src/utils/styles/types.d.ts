import { FlexSizes, Roles } from "../../_components/containers/types";
import {
  ComponentStyleProps,
  ItemContainerProps,
  WrapperContainerProps,
} from "../../types";

export type StylePackage = Partial<ComponentStyleProps> &
  Partial<WrapperContainerProps> &
  Partial<ItemContainerProps> & {
    component: string;
    className?: string[];
  };

export type CreateStyleClass = {
  stylePackage: StylePackage;
  key: string;
  buildString: (any) => string;
};
