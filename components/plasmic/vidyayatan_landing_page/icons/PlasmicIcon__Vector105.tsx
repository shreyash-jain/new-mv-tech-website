// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector105IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector105Icon(props: Vector105IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 54 38"}
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
          "M26.57 2.165c-.355-.222-1.069-.606-2.22-.972C7.74-4.08-1.8 9.137.282 21.641 2.18 33.06 11.803 40.788 26.575 36.918c14.766 3.87 24.396-3.858 26.292-15.276C54.943 9.132 45.41-4.087 28.795 1.194c-1.152.366-1.866.75-2.22.972h-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector105Icon;
/* prettier-ignore-end */
