// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame30IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame30Icon(props: Frame30IconProps) {
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
          "M28.82 13.835A12.99 12.99 0 1118.165 3.18a1 1 0 01-.33 1.972A11.01 11.01 0 005 16a10.952 10.952 0 002.78 7.301 9.964 9.964 0 012.72-2.663.5.5 0 01.605.04 7.475 7.475 0 009.782 0 .5.5 0 01.605-.04 9.981 9.981 0 012.724 2.663A10.952 10.952 0 0027 16c0-.615-.051-1.229-.152-1.835a1 1 0 111.972-.33zM10.5 15a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zM29.707 4.293a1 1 0 00-1.415 0L25 7.586l-1.293-1.293a1 1 0 10-1.415 1.414l2 2a1 1 0 001.415 0l4-4a1 1 0 000-1.414z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame30Icon;
/* prettier-ignore-end */
