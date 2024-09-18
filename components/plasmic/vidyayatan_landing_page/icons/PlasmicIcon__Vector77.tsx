// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector77IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector77Icon(props: Vector77IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 6"}
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
          "M0 .744a4.335 4.335 0 008.67.078h-.006c0-.414-.33-.75-.744-.756L.762 0C.348 0 .012.33.006.744H0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector77Icon;
/* prettier-ignore-end */
