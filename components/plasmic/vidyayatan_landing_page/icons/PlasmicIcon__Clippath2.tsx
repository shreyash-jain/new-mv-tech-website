// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Clippath2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Clippath2Icon(props: Clippath2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1000 651"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M1000 0H0v650.208h1000V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Clippath2Icon;
/* prettier-ignore-end */
