// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame19IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame19Icon(props: Frame19IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M28 6H4a1 1 0 00-1 1v17a2 2 0 002 2h22a2 2 0 002-2V7a1 1 0 00-1-1zm-2.571 2L16 16.644 6.571 8H25.43zM27 24H5V9.274l10.324 9.464a1 1 0 001.352 0L27 9.274V24z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame19Icon;
/* prettier-ignore-end */
