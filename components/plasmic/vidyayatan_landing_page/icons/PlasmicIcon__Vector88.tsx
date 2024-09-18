// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector88IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector88Icon(props: Vector88IconProps) {
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
          "M4.894 23.073a2.692 2.692 0 105.322-.822c-.641-4.14-1.44-8.34-2.345-12.426a105.28 105.28 0 00-1.249-5.1c-.39-1.422-.827-2.874-1.38-4.242A.766.766 0 004.33.027L.58 1.01a.753.753 0 00-.503.42.737.737 0 000 .654c.575 1.248 1.002 2.7 1.367 4.026a97.745 97.745 0 011.308 5.424 198.247 198.247 0 012.143 11.544v-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector88Icon;
/* prettier-ignore-end */
