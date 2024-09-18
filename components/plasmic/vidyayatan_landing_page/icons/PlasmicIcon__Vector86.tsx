// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector86IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector86Icon(props: Vector86IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 26"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.354 23.073a2.692 2.692 0 11-5.322-.822c.642-4.14 1.44-8.34 2.346-12.426.378-1.71.786-3.414 1.248-5.1.39-1.422.828-2.874 1.38-4.242a.766.766 0 01.912-.456l3.756.984c.228.06.402.204.504.42a.737.737 0 010 .654c-.576 1.248-1.002 2.7-1.368 4.026a97.745 97.745 0 00-1.308 5.424A198.247 198.247 0 005.36 23.079l-.006-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector86Icon;
/* prettier-ignore-end */
