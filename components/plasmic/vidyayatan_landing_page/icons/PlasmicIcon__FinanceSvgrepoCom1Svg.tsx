// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FinanceSvgrepoCom1SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FinanceSvgrepoCom1SvgIcon(
  props: FinanceSvgrepoCom1SvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
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
          "M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464zM8.03 5.97a.75.75 0 010 1.06l-.22.22H8c1.68 0 3.155.872 4 2.187a4.746 4.746 0 014-2.187h.19l-.22-.22a.75.75 0 011.06-1.06l1.5 1.5a.75.75 0 010 1.06l-1.5 1.5a.75.75 0 11-1.06-1.06l.22-.22H16A3.25 3.25 0 0012.75 12v6a.75.75 0 01-1.5 0v-6A3.25 3.25 0 008 8.75h-.19l.22.22a.75.75 0 11-1.06 1.06l-1.5-1.5a.75.75 0 010-1.06l1.5-1.5a.75.75 0 011.06 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default FinanceSvgrepoCom1SvgIcon;
/* prettier-ignore-end */
