// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse670IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse670Icon(props: Ellipse670IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle cx={"8"} cy={"8"} r={"8"} fill={"currentColor"}></circle>
    </svg>
  );
}

export default Ellipse670Icon;
/* prettier-ignore-end */
