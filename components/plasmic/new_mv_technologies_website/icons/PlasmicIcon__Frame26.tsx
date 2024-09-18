// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame26IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame26Icon(props: Frame26IconProps) {
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
          "M29 15h-1.043A12.018 12.018 0 0017 4.043V3a1 1 0 00-2 0v1.043A12.018 12.018 0 004.043 15H3a1 1 0 000 2h1.043A12.018 12.018 0 0015 27.957V29a1 1 0 002 0v-1.043A12.018 12.018 0 0027.957 17H29a1 1 0 000-2zm-4 2h.95A10.019 10.019 0 0117 25.95V25a1 1 0 00-2 0v.95A10.019 10.019 0 016.05 17H7a1 1 0 000-2h-.95A10.019 10.019 0 0115 6.05V7a1 1 0 002 0v-.95A10.019 10.019 0 0125.95 15H25a1 1 0 000 2zm-4-1a5 5 0 11-10 0 5 5 0 0110 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame26Icon;
/* prettier-ignore-end */
