// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector48Icon(props: Vector48IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M20.489 16.852C18.992 19.92 9.49 17.956 9.49 17.956l-8.427-5.094a8.698 8.698 0 0115.273-8.325s5.679 9.19 4.154 12.315h-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector48Icon;
/* prettier-ignore-end */
