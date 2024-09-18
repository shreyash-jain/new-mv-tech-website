// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GraphSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GraphSvgrepoComSvgIcon(props: GraphSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      version={"1.1"}
      stroke={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M29.5 7A2.5 2.5 0 0027 9.5c0 .284.058.551.144.805l-6.094 5.247a2.473 2.473 0 00-3.294.16l-4.774-2.39a2.493 2.493 0 10-4.742 1.23l-4.867 5.612a2.481 2.481 0 00-.873-.166 2.5 2.5 0 102.314 1.561l4.946-5.685c.236.073.48.124.74.124.727 0 1.377-.316 1.834-.813l4.669 2.341A2.5 2.5 0 0022 17.497c0-.044-.011-.086-.013-.13l6.503-5.587a2.5 2.5 0 101.01-4.784z"
        }
      ></path>
    </svg>
  );
}

export default GraphSvgrepoComSvgIcon;
/* prettier-ignore-end */
