// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector97IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector97Icon(props: Vector97IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 18"}
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
          "M16.004.257a3.128 3.128 0 01-.462.324c-.642.336-2.604 1.212-3.702 1.89-.6.366-4.608 6.126-4.782 6.594-.174.468.984 1.536 2.016.906 1.344-.822 3.51-2.52 3.51-2.52l-3.42 4.914s-.822 1.668-2.076 1.668H3.08a3.396 3.396 0 00-2.952 1.698c-.468.816.408 1.11 1.668 1.11h2.4s-.12.612 1.14.612h6.408c1.494 0 2.952-1.056 3.654-2.25.702-1.2 4.272-4.8 4.914-6.258.3-.684.63-1.716.966-2.73l.09-.27c.846-3.042-2.166-7.008-5.37-5.682l.006-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector97Icon;
/* prettier-ignore-end */
