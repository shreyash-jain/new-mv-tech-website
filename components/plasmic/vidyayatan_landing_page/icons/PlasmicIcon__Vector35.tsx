// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector35Icon(props: Vector35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 17"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.788.911C11.471.743 8.408-.815 5.611.567 3.529 1.596 2.51 3.596 1.306 7.207c-1.417 4.255-1.67 6.995-.814 8.3 1.352 2.063 8.176 1.492 11.78-1.251 2.601-1.98 3.805-5.41 3.246-8.655-.558-3.235-3.529-4.583-3.731-4.69h.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector35Icon;
/* prettier-ignore-end */
