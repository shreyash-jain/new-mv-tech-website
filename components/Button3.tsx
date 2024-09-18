import * as React from "react";
import {
  PlasmicButton3,
  DefaultButton3Props
} from "./plasmic/vidyayatan_landing_page/PlasmicButton3";

import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

export interface Button3Props extends DefaultButton3Props {
  // Feel free to add any additional props that this component should receive
}
function Button3_(props: Button3Props, ref: ButtonRef) {
  const { plasmicProps } = PlasmicButton3.useBehavior<Button3Props>(props, ref);
  return <PlasmicButton3 {...plasmicProps} />;
}

export type ButtonComponentType = {
  (
    props: Omit<Button3Props, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<Button3Props, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};
const Button3 = React.forwardRef(Button3_) as any as ButtonComponentType;

export default Object.assign(Button3, { __plumeType: "button" });
