// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector41Icon(props: Vector41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.8 10.543a.3.3 0 01-.3-.301V7c0-2.97-.678-5.158-1.858-6.003C2.022.555 1.269.481.399.78A.302.302 0 01.204.21c1.048-.358 2.012-.255 2.788.3C4.351 1.48 5.1 3.786 5.1 7v3.242a.3.3 0 01-.3.3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector41Icon;
/* prettier-ignore-end */
