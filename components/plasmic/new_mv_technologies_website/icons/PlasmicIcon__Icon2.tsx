// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Icon2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Icon2Icon(props: Icon2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"#000"}
      viewBox={"0 0 256 256"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M164.44 105.34l-48-32A8 8 0 00104 80v64a8 8 0 0012.44 6.66l48-32a8 8 0 000-13.32zM120 129.05V95l25.58 17zM216 40H40a16 16 0 00-16 16v112a16 16 0 0016 16h176a16 16 0 0016-16V56a16 16 0 00-16-16zm0 128H40V56h176v112zm16 40a8 8 0 01-8 8H32a8 8 0 010-16h192a8 8 0 018 8z"
        }
      ></path>
    </svg>
  );
}

export default Icon2Icon;
/* prettier-ignore-end */
