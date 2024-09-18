// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector75IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector75Icon(props: Vector75IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 43"}
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
          "M1.056 4.464A16.648 16.648 0 000 10.296V25.53c0 9.21 7.536 16.746 16.752 16.746 9.21 0 16.746-7.536 16.746-16.746V10.296c0-1.818-.294-3.57-.84-5.214C29.754 1.962 25.62 0 21.048 0h-8.982C7.8 0 3.918 1.704 1.056 4.464z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector75Icon;
/* prettier-ignore-end */
