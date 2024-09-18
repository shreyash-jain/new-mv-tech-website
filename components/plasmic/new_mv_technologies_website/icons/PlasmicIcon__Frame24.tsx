// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame24Icon(props: Frame24IconProps) {
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
          "M8.015 18.475a.5.5 0 01-.5.525H2a1 1 0 01-.975-.771 1.044 1.044 0 01.203-.866 8.473 8.473 0 013.397-2.674 5 5 0 118.307-4.475.492.492 0 01-.283.522 8.011 8.011 0 00-4.634 7.739zm22.75-1.114a8.47 8.47 0 00-3.39-2.672 5.001 5.001 0 00-5.588-8.175 5 5 0 00-2.72 3.7.492.492 0 00.284.522A8.01 8.01 0 0124 18c0 .16 0 .317-.015.475a.5.5 0 00.5.525H30a1 1 0 00.975-.771 1.043 1.043 0 00-.204-.868h-.006zM19.64 22.76a6 6 0 10-7.296 0 9.016 9.016 0 00-4.21 3.741A1 1 0 009 28h14a1 1 0 00.866-1.5 9.018 9.018 0 00-4.217-3.741h-.009z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame24Icon;
/* prettier-ignore-end */
