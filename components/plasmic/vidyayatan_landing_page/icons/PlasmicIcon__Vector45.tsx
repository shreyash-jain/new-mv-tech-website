// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector45Icon(props: Vector45IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 36"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.26 15.911C.475 15.078 6.239 0 6.239 0l17.29 6.58s-.854 25.667-13.449 28.503C-2.515 37.92.26 15.913.26 15.913l.002-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector45Icon;
/* prettier-ignore-end */
