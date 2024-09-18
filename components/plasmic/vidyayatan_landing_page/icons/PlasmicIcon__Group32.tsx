// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group32IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group32Icon(props: Group32IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 58 46"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M45.123 45.063H4.953C2.216 45.063 0 42.935 0 40.2h45.123v4.864z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M45.565 44.94l12.21-38.419a4.952 4.952 0 00-3.22-6.218L40.846 43.442l4.72 1.5-.001-.002zm-4.581-6.58a.301.301 0 01-.287-.392l12-37.758a.301.301 0 01.573.183l-12 37.758a.302.302 0 01-.286.21v-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group32Icon;
/* prettier-ignore-end */
