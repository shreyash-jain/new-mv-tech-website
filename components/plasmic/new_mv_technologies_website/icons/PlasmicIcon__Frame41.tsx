// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame41Icon(props: Frame41IconProps) {
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
          "M29 12a9 9 0 01-12.617 8.25l-6.508 7.527a4 4 0 11-5.706-5.605l.053-.048 7.528-6.506A9.009 9.009 0 0122.192 3.27a1 1 0 01.492 1.649L18 10l.707 3.294L22 14l5.081-4.69a1 1 0 011.649.491c.18.72.27 1.458.27 2.199z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame41Icon;
/* prettier-ignore-end */
