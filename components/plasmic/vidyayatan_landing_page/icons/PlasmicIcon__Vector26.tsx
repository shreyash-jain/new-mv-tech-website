// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector26Icon(props: Vector26IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M23.331 10.424C18.245 13.168 4.054 21.988.415 15.992-2.595 11.032 11.605 3.052 16.479 0c2.284 3.474 4.568 6.95 6.854 10.424h-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector26Icon;
/* prettier-ignore-end */
