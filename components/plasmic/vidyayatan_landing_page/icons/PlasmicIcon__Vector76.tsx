// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector76IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector76Icon(props: Vector76IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 16"}
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
          "M.006 1.692l3.09 5.424 24.912 7.962s.252-1.17.534-2.748v-2.034c0-1.818-.294-3.57-.84-5.214C24.798 1.962 20.664 0 16.086 0H7.104C4.554 0 2.142.612 0 1.686l.006.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector76Icon;
/* prettier-ignore-end */
