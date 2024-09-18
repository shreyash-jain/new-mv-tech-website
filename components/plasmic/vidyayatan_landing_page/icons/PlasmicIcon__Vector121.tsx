// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector121IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector121Icon(props: Vector121IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 1"}
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
          "M.33 0h4.152c.18 0 .33.15.33.33 0 .18-.15.33-.33.33H.33C.15.66 0 .51 0 .33 0 .15.15 0 .33 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector121Icon;
/* prettier-ignore-end */
