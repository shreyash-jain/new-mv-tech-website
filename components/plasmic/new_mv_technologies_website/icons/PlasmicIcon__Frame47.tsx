// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame47Icon(props: Frame47IconProps) {
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
          "M16 3a13 13 0 1013 13A13.013 13.013 0 0016 3zm1.5 19H17v1a1 1 0 01-2 0v-1h-2a1 1 0 010-2h4.5a1.5 1.5 0 100-3h-3a3.5 3.5 0 110-7h.5V9a1 1 0 012 0v1h2a1 1 0 010 2h-4.5a1.5 1.5 0 100 3h3a3.5 3.5 0 110 7z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame47Icon;
/* prettier-ignore-end */
