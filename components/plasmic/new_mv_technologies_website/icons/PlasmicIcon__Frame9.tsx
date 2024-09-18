// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame9Icon(props: Frame9IconProps) {
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
          "M14 2.625A11.375 11.375 0 1025.375 14 11.387 11.387 0 0014 2.625zm4.375 13.125a.875.875 0 11-1.75 0v-3.138l-5.506 5.507a.875.875 0 01-1.238-1.238l5.507-5.506H12.25a.875.875 0 110-1.75h5.25a.875.875 0 01.875.875v5.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame9Icon;
/* prettier-ignore-end */
