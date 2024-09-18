// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector84IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector84Icon(props: Vector84IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
          "M1.416.083c.336 0 .648.12.894.324A.562.562 0 002.688.12a.226.226 0 01.3-.096c.108.054.15.192.096.3a.977.977 0 01-.456.432l.012.012c.186-.042.408-.144.582-.36a.22.22 0 01.312-.03.22.22 0 01.03.312 1.45 1.45 0 01-.66.457c.21-.006.444-.067.672-.21A.222.222 0 013.882 1a.219.219 0 01-.072.307c-.234.15-.468.227-.69.263l-.312.042v1.699A1.404 1.404 0 010 3.312v-1.83C0 .706.63.076 1.404.076l.012.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector84Icon;
/* prettier-ignore-end */
