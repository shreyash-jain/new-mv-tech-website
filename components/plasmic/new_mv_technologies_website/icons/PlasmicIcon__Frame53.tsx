// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame53IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame53Icon(props: Frame53IconProps) {
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
          "M21 11.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM27 18c.003.97-.123 1.938-.375 2.875l2.78 1.215A1 1 0 0129 24a.986.986 0 01-.4-.084l-2.678-1.166a11 11 0 01-19.845 0L3.4 23.916a1 1 0 01-.8-1.832l2.775-1.209A10.97 10.97 0 015 18v-1H2a1 1 0 010-2h3v-1a10.97 10.97 0 01.375-2.875L2.6 9.916a1 1 0 11.8-1.832L6.077 9.25a11 11 0 0119.845 0L28.6 8.08a1 1 0 01.8 1.832l-2.775 1.22c.252.937.378 1.904.375 2.874v1h3a1 1 0 110 2h-3V18zm-10 0a1 1 0 00-2 0v8a1 1 0 002 0v-8zm8-4a9 9 0 00-18 0v1h18v-1z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame53Icon;
/* prettier-ignore-end */
