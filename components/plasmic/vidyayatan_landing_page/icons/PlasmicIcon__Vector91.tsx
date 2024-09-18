// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector91IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector91Icon(props: Vector91IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
          "M2.072 1.278s1.62 3.636 7.764 3.636c0 0-1.716 4.998-5.46 4.686C.632 9.294-2.056 1.47 2.09 0l-.012 1.272-.006.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector91Icon;
/* prettier-ignore-end */
