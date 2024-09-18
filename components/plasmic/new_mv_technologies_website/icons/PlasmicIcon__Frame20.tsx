// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame20Icon(props: Frame20IconProps) {
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
          "M26.061 23.939a1.503 1.503 0 11-2.125 2.125L16 18.125l-7.939 7.936a1.503 1.503 0 01-2.125-2.125L13.875 16 5.939 8.061a1.503 1.503 0 012.125-2.125L16 13.875l7.939-7.94a1.503 1.503 0 012.125 2.125L18.125 16l7.936 7.939z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame20Icon;
/* prettier-ignore-end */
