// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector112IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector112Icon(props: Vector112IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 40"}
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
          "M19.794 39.576c10.902 0 19.788-8.892 19.788-19.788S30.69 0 19.794 0 0 8.892 0 19.788s8.892 19.788 19.794 19.788z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector112Icon;
/* prettier-ignore-end */
