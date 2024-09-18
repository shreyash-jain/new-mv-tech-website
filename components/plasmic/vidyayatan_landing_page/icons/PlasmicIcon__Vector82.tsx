// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector82IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector82Icon(props: Vector82IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 5"}
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
          "M1.05.66C.712 1.194.262 1.95.07 2.436c-.546 1.44 2.214 2.334 2.364.822.054-.54-.09-1.29-.282-1.938-.516-1.74-.546-1.542-1.11-.654L1.05.66z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector82Icon;
/* prettier-ignore-end */
