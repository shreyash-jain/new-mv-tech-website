// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Rectangle5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Rectangle5Icon(props: Rectangle5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 291 197"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 6.193A6.193 6.193 0 016.193 0h278.125a6.193 6.193 0 016.193 6.193v190.162H0V6.193z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Rectangle5Icon;
/* prettier-ignore-end */
