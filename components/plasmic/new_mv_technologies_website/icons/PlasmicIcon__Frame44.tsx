// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame44Icon(props: Frame44IconProps) {
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
          "M10 15v2a2 2 0 01-2 2v-6a2 2 0 012 2zm21-6v14a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2h26a2 2 0 012 2zm-19 6a4 4 0 00-4-4H7a1 1 0 00-1 1v8a1 1 0 001 1h1a4 4 0 004-4v-2zm4 0v-2h2a1 1 0 000-2h-3a1 1 0 00-1 1v8a1 1 0 001 1h3a1 1 0 000-2h-2v-2h1a1 1 0 000-2h-1zm10.271-3.963a1 1 0 00-1.233.692l-1.288 4.577-1.288-4.577a1 1 0 00-1.924.542l2.25 8a1 1 0 001.924 0l2.25-8a1 1 0 00-.69-1.234z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame44Icon;
/* prettier-ignore-end */
