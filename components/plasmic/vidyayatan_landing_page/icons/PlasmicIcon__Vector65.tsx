// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector65IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector65Icon(props: Vector65IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 29"}
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
          "M4.328 1.71S3.812 10.992.47 16.95c0 0-1.08 1.422.036 2.736C1.622 21 8.744 26.82 21.14 28.518c12.395 1.698 24.492-8.388 24.81-9.708.317-1.32-3.799-10.77-3.475-18.81L4.333 1.716l-.005-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector65Icon;
/* prettier-ignore-end */
