// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector95IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector95Icon(props: Vector95IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 9"}
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
          "M0 .47v5.424a2.613 2.613 0 002.604 2.604h7.524v-.012L4.386.038C2.514-.082 1.08.092 0 .47z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector95Icon;
/* prettier-ignore-end */
