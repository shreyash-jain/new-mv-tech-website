// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector94IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector94Icon(props: Vector94IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 81 29"}
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
          "M65.68 6.144H14.476c-1.518-1.446-5.01-4.758-5.67-5.352C7.96.03 6.406 0 6.406 0H1.99C-.176 0 .004 1.698.004 1.698v24.546a2.613 2.613 0 002.604 2.604h74.946a2.61 2.61 0 002.604-2.604V1.704S80.332.006 78.172.006h-4.416s-1.548.03-2.4.792c-.66.594-4.152 3.906-5.67 5.352l-.006-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector94Icon;
/* prettier-ignore-end */
