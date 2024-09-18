// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame14Icon(props: Frame14IconProps) {
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
          "M8.25 9.75A.75.75 0 019 9h6a.75.75 0 110 1.5H9a.75.75 0 01-.75-.75zM9 13.5h6a.75.75 0 100-1.5H9a.75.75 0 100 1.5zm12.75-8.25v12a1.5 1.5 0 01-1.5 1.5h-5.665l-1.283 2.244a1.5 1.5 0 01-2.604 0L9.415 18.75H3.75a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5zm-1.5 0H3.75v12h6.1a.75.75 0 01.657.375l1.5 2.625 1.5-2.625a.75.75 0 01.656-.375h6.087v-12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame14Icon;
/* prettier-ignore-end */
