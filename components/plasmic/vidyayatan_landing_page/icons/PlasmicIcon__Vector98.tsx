// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector98IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector98Icon(props: Vector98IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 18"}
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
          "M5.508.257c.162.132.318.246.462.324.642.336 2.604 1.212 3.702 1.89.6.366 4.608 6.126 4.782 6.594.174.468-.984 1.536-2.016.906-1.344-.822-3.51-2.52-3.51-2.52l3.426 4.914s.816 1.668 2.076 1.668h4.008c1.464 0 2.484.876 2.952 1.698.468.816-.408 1.11-1.668 1.11h-2.4s.12.612-1.14.612H9.774c-1.494 0-2.958-1.056-3.66-2.25-.702-1.2-4.272-4.8-4.914-6.258-.3-.684-.63-1.716-.966-2.73l-.09-.27C-.702 2.903 2.31-1.063 5.514.263L5.508.257z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector98Icon;
/* prettier-ignore-end */
