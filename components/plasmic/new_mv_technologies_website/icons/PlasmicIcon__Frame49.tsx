// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame49Icon(props: Frame49IconProps) {
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
          "M10 24a1 1 0 01-1 1H4a1 1 0 010-2h5a1 1 0 011 1zm18-1h-5a1 1 0 000 2h5a1 1 0 000-2zm-9 0h-6a1 1 0 000 2h6a1 1 0 000-2zM4 21h10a1 1 0 000-2H4a1 1 0 000 2zm24-2H18a1 1 0 000 2h10a1 1 0 000-2zm0-12H4a1 1 0 00-1 1v3a1 1 0 001 1h24a1 1 0 001-1V8a1 1 0 00-1-1zm0 7H4a1 1 0 00-1 1v1a1 1 0 001 1h24a1 1 0 001-1v-1a1 1 0 00-1-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame49Icon;
/* prettier-ignore-end */
