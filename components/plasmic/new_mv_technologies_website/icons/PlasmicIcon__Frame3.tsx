// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame3Icon(props: Frame3IconProps) {
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
          "M14 2.625A11.375 11.375 0 1025.375 14 11.387 11.387 0 0014 2.625zm6.125 12.25H14a.875.875 0 01-.875-.875V7.875a.875.875 0 011.75 0v5.25h5.25a.875.875 0 110 1.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame3Icon;
/* prettier-ignore-end */
