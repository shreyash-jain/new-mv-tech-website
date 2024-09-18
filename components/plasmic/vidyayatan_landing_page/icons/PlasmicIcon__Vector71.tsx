// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector71IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector71Icon(props: Vector71IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 13"}
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
          "M7.476 3.99A27.99 27.99 0 008.67 9.096s.072.342.174.948l-5.496 2.652L0 5.436 1.188 0l6.288 3.99z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector71Icon;
/* prettier-ignore-end */
