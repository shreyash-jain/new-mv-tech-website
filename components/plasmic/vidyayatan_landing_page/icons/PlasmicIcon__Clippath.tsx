// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ClippathIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ClippathIcon(props: ClippathIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 8 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 1.714S1.482.19 3.462.017c1.98-.175 3.705 1.065 3.705 1.065S5.684 2.606 3.705 2.78C1.725 2.954 0 1.714 0 1.714z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ClippathIcon;
/* prettier-ignore-end */
