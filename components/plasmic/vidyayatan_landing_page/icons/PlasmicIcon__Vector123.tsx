// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector123IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector123Icon(props: Vector123IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 12"}
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
          "M5.598 11.196a5.608 5.608 0 005.598-5.598A5.608 5.608 0 005.598 0 5.608 5.608 0 000 5.598a5.608 5.608 0 005.598 5.598z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector123Icon;
/* prettier-ignore-end */
