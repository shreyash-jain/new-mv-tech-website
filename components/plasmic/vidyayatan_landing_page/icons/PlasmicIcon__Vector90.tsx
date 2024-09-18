// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector90IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector90Icon(props: Vector90IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
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
          "M7.764 1.278S6.144 4.914 0 4.914c0 0 1.716 4.998 5.46 4.686 3.744-.306 6.432-8.13 2.286-9.6l.012 1.272.006.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector90Icon;
/* prettier-ignore-end */
