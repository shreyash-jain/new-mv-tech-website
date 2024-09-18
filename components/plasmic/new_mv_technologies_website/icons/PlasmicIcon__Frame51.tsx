// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame51Icon(props: Frame51IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 9a1 1 0 112 0 1 1 0 01-2 0zm3 8a1 1 0 102 0 1 1 0 00-2 0zm6.063 4.434a11.039 11.039 0 003.926-8.972.5.5 0 00-.5-.468h-3.02l-2.892 3.469a3 3 0 11-1.535-1.282l3.19-3.827A1 1 0 0124 10h2.892a.5.5 0 00.472-.669C25.909 5.25 22.108 2.25 17.593 2.01h-.074a.5.5 0 00-.519.5v3.656a3 3 0 11-2 0V2.791a.5.5 0 00-.611-.488A11.02 11.02 0 006 12.75l-2.806 5.392-.028.057a2 2 0 00.939 2.587l.031.015L7 22.113v3.875a2 2 0 002 2h5v1a1 1 0 001 1h8.971a1.07 1.07 0 00.508-.125 1 1 0 00.514-1l-.93-7.43z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame51Icon;
/* prettier-ignore-end */
