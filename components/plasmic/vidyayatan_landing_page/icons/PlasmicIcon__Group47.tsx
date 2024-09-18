// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group47IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group47Icon(props: Group47IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 45"}
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
          "M23.782 7.99c-.42.612-1.254.81-1.908.426a1.445 1.445 0 01-.582-1.866l2.16-5.136A2.161 2.161 0 0126.566.292a2.161 2.161 0 01.582 3.258l-3.366 4.44zM6.358 38.164a1.443 1.443 0 00-2.49-1.44l-3.366 4.44a2.161 2.161 0 00.582 3.258A2.161 2.161 0 004.198 43.3l2.16-5.136z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group47Icon;
/* prettier-ignore-end */
