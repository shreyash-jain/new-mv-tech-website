// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame6Icon(props: Frame6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.75 13.125v9.625a.875.875 0 01-.875.875H5.25a.875.875 0 01-.875-.875v-9.625a.875.875 0 01.875-.875h9.625a.875.875 0 01.875.875zm7 6.125a.875.875 0 00-.875.875v1.75H19.25a.875.875 0 100 1.75h2.625a1.75 1.75 0 001.75-1.75v-1.75a.875.875 0 00-.875-.875zm0-7.875a.875.875 0 00-.875.875v3.5a.875.875 0 101.75 0v-3.5a.875.875 0 00-.875-.875zm-.875-7h-1.75a.875.875 0 100 1.75h1.75v1.75a.875.875 0 001.75 0v-1.75a1.75 1.75 0 00-1.75-1.75zm-6.125 0h-3.5a.875.875 0 100 1.75h3.5a.875.875 0 100-1.75zm-10.5 5.25a.875.875 0 00.875-.875V6.125h1.75a.875.875 0 000-1.75h-1.75a1.75 1.75 0 00-1.75 1.75V8.75a.875.875 0 00.875.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame6Icon;
/* prettier-ignore-end */
