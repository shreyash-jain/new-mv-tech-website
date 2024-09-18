// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame1000000961IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame1000000961Icon(props: Frame1000000961IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1055 242"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"1.5"}
        strokeDasharray={"9 9"}
        d={"M0 1.25h1055M0 81.25h1055m-1055 80h1055m-1055 80h1055"}
      ></path>
    </svg>
  );
}

export default Frame1000000961Icon;
/* prettier-ignore-end */
