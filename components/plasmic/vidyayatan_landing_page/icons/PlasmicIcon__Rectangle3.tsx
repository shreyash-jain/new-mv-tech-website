// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle3Icon(props: Rectangle3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 364 246"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 7.741A7.741 7.741 0 017.741 0h347.656a7.741 7.741 0 017.741 7.741v237.702H0V7.741z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle3Icon;
/* prettier-ignore-end */
