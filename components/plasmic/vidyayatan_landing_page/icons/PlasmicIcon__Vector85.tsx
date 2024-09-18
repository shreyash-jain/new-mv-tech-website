// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector85IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector85Icon(props: Vector85IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 57 46"}
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
          "M28.08 0h17.4c1.77 0 5.448 1.908 5.988 7.554.546 5.652 4.68 37.542 4.68 37.542H0S4.14 13.2 4.68 7.554C5.226 1.908 8.898 0 10.668 0H28.08z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector85Icon;
/* prettier-ignore-end */
