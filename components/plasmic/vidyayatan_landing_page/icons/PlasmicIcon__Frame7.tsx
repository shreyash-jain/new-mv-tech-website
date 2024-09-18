// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame7Icon(props: Frame7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.75 4.781c0 2.02-3.023 3.657-6.75 3.657-3.728 0-6.75-1.638-6.75-3.657S5.272 1.125 9 1.125c3.727 0 6.75 1.637 6.75 3.656z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9 9.563c2.014 0 3.893-.44 5.309-1.207.52-.277 1-.626 1.422-1.038.012.09.019.183.019.276 0 2.019-3.023 3.656-6.75 3.656-3.728 0-6.75-1.637-6.75-3.656 0-.093.007-.186.019-.276.422.412.901.761 1.422 1.038C5.107 9.123 6.986 9.563 9 9.563z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9 12.375c2.014 0 3.893-.44 5.309-1.207a6.21 6.21 0 001.422-1.038c.012.091.019.183.019.276 0 2.02-3.023 3.656-6.75 3.656-3.728 0-6.75-1.637-6.75-3.656 0-.093.007-.185.019-.276.422.412.901.762 1.422 1.038 1.416.768 3.295 1.207 5.309 1.207z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M9 15.188c2.014 0 3.893-.44 5.309-1.207.52-.277 1-.626 1.422-1.038.012.09.019.183.019.276 0 2.019-3.023 3.656-6.75 3.656-3.728 0-6.75-1.637-6.75-3.656 0-.093.007-.185.019-.276.422.412.901.761 1.422 1.038 1.416.767 3.295 1.207 5.309 1.207z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame7Icon;
/* prettier-ignore-end */
