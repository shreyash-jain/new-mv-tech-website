// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector87IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector87Icon(props: Vector87IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
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
          "M.954 0c.528 0 .954.426.954.954a.953.953 0 01-.954.954A.953.953 0 010 .954C0 .426.426 0 .954 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector87Icon;
/* prettier-ignore-end */
