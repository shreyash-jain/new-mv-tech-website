// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame60Icon(props: Frame60IconProps) {
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
          "M30 7v8a1 1 0 01-1.707.707L25 12.415l-7.293 7.293a1.001 1.001 0 01-1.415 0L12 15.415l-8.293 8.293a1 1 0 01-1.414-1.415l9-9a1.001 1.001 0 011.415 0L17 17.587 23.586 11l-3.293-3.293A1 1 0 0121 6h8a1 1 0 011 1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame60Icon;
/* prettier-ignore-end */
