// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type WorkPlanSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function WorkPlanSvgrepoComSvgIcon(
  props: WorkPlanSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 100 100"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M39 32h22a2 2 0 002-2v-4a6 6 0 00-6-6H43a6 6 0 00-6 6v4a2 2 0 002 2zm33-7h-2a.94.94 0 00-1 1v4a8 8 0 01-8 8H39a8 8 0 01-8-8v-4a.94.94 0 00-1-1h-2a6 6 0 00-6 6v43a6 6 0 006 6h44a6 6 0 006-6V31a6 6 0 00-6-6zM39 68a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2a2 2 0 012 2zm0-10a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2a2 2 0 012 2zm0-10a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2h2a2 2 0 012 2zm28 20a2 2 0 01-2 2H45a2 2 0 01-2-2v-2a2 2 0 012-2h20a2 2 0 012 2zm0-10a2 2 0 01-2 2H45a2 2 0 01-2-2v-2a2 2 0 012-2h20a2 2 0 012 2zm0-10a2 2 0 01-2 2H45a2 2 0 01-2-2v-2a2 2 0 012-2h20a2 2 0 012 2z"
        }
      ></path>
    </svg>
  );
}

export default WorkPlanSvgrepoComSvgIcon;
/* prettier-ignore-end */
