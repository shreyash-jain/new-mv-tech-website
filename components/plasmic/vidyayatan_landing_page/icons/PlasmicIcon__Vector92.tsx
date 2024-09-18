// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector92IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector92Icon(props: Vector92IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 40 24"}
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
          "M39.468 14.262h-.672c-.06 2.466-.21 4.206-.21 4.206-2.172-.666-2.46 3.678-2.46 3.678-2.634-.81-2.238-8.394-2.238-8.394-2.976-1.152-2.574-5.754-2.574-5.754-2.298 2.976-6.294-.744-6.294-.744-2.37 6.024-13.398-1.284-13.398-1.284s2.298 2.028 1.08 3.114c-1.218 1.08-3.99-1.692-3.99-1.692-.066 4.74-3.72 7.104-3.72 7.104 0 7.038-2.364 8.796-2.364 8.796C2.7 19.572 0 18.552 0 18.552s2.25-2.268 1.032-9.03A11.525 11.525 0 01.87 8.088C3.606 3.27 8.784 0 14.688 0h8.982c8.184 0 14.976 6.276 15.792 14.256l.006.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector92Icon;
/* prettier-ignore-end */
