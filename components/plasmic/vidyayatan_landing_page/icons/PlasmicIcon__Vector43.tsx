// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector43IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector43Icon(props: Vector43IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 31"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.73 30.406h71.09l7.199-9.164C103.66 12.613 97.509 0 86.62 0H3.273l-1.76 4.253c-5.25 12.34 3.806 26.151 17.217 26.151v.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector43Icon;
/* prettier-ignore-end */
