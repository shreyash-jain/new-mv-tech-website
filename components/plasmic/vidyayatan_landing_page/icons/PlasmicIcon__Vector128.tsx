// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector128IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector128Icon(props: Vector128IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={"M.498.996a.497.497 0 100-.996A.5.5 0 000 .498a.5.5 0 00.498.498z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector128Icon;
/* prettier-ignore-end */
