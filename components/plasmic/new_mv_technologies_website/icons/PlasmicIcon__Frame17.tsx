// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame17IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame17Icon(props: Frame17IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 2.625A11.375 11.375 0 1025.375 14 11.387 11.387 0 0014 2.625zm4.994 9.37l-6.125 6.124a.876.876 0 01-1.238 0l-2.625-2.625a.876.876 0 011.238-1.238l2.006 2.007 5.506-5.507a.875.875 0 011.238 1.238z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame17Icon;
/* prettier-ignore-end */
