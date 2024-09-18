// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector47Icon(props: Vector47IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.427 26.969l-2.382-.656A4.144 4.144 0 01.15 21.22l5-18.174A4.144 4.144 0 0110.244.15l2.38.656A4.144 4.144 0 0115.521 5.9l-5 18.174a4.144 4.144 0 01-5.094 2.896z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector47Icon;
/* prettier-ignore-end */
