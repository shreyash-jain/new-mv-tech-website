// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame22IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame22Icon(props: Frame22IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12 1.875A10.125 10.125 0 1022.125 12 10.137 10.137 0 0012 1.875zm0 18A7.875 7.875 0 1119.875 12 7.883 7.883 0 0112 19.875zM18.375 12a1.125 1.125 0 01-1.125 1.125H12A1.125 1.125 0 0110.875 12V6.75a1.125 1.125 0 112.25 0v4.125h4.125A1.125 1.125 0 0118.375 12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame22Icon;
/* prettier-ignore-end */
