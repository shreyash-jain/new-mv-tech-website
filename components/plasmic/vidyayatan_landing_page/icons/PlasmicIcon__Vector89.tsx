// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector89IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector89Icon(props: Vector89IconProps) {
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
          "M.954 0A.953.953 0 000 .954c0 .528.426.954.954.954a.953.953 0 00.954-.954A.953.953 0 00.954 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector89Icon;
/* prettier-ignore-end */
