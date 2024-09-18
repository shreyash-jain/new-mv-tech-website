// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group37Icon(props: Group37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 6 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M.294 1.4a2.598 2.598 0 114.609 2.397A2.598 2.598 0 01.294 1.399z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group37Icon;
/* prettier-ignore-end */
