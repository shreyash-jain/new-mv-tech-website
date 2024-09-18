// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector72IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector72Icon(props: Vector72IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 62 28"}
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
          "M59.273 0c.63 6.738 1.356 12.75 1.836 15.174.378 1.914.474 3.576.378 5.034-9.144 4.932-19.602 7.734-30.726 7.734-11.124 0-21.582-2.802-30.726-7.734-.096-1.458 0-3.12.378-5.034C.887 12.75 1.613 6.738 2.249 0h57.024z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector72Icon;
/* prettier-ignore-end */
