// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame11Icon(props: Frame11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 4a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm0-7a5.506 5.506 0 00-5.5 5.5c0 1.962.907 4.043 2.625 6.016a15.88 15.88 0 002.59 2.393.5.5 0 00.574 0c.948-.7 1.816-1.502 2.586-2.393C12.591 10.543 13.5 8.462 13.5 6.5A5.506 5.506 0 008 1zm0 12.875c-1.033-.813-4.5-3.797-4.5-7.375a4.5 4.5 0 019 0c0 3.577-3.467 6.563-4.5 7.375z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame11Icon;
/* prettier-ignore-end */
