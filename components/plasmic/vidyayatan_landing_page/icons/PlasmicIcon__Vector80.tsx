// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector80IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector80Icon(props: Vector80IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.43 1.218C2.43.545 1.886 0 1.215 0S0 .545 0 1.218v1.584C0 3.475.544 4.02 1.215 4.02S2.43 3.475 2.43 2.802V1.218z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector80Icon;
/* prettier-ignore-end */
