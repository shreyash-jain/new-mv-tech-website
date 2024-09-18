// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group13IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group13Icon(props: Group13IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 34 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.598 18.586a.3.3 0 01-.293-.233L5.247.604.303.652H.301A.3.3 0 010 .354.303.303 0 01.298.049L5.485 0h.003a.3.3 0 01.293.234l4.054 17.73L28 16.433l-.01-11.422-5.424.004a.3.3 0 110-.602l5.725-.004c.08 0 .156.031.213.087a.296.296 0 01.089.213l.01 12a.3.3 0 01-.277.3L9.624 18.586h-.026v.001z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M23.441 17.42a.302.302 0 01-.3-.28l-.855-12.115L6.5 5.029a.3.3 0 010-.603l16.066-.005a.3.3 0 01.3.28l.876 12.396a.3.3 0 01-.278.321h-.022l-.002.003zM7.995 26.835a3.324 3.324 0 01-3.321-3.319 3.326 3.326 0 013.318-3.323h.003a3.3 3.3 0 012.347.97 3.3 3.3 0 01.974 2.35 3.325 3.325 0 01-3.319 3.323h-.002v-.001zm-.002-6.041H7.99a2.722 2.722 0 00-2.717 2.721 2.722 2.722 0 002.719 2.717h.003a2.7 2.7 0 001.922-.798 2.7 2.7 0 00.795-1.923 2.7 2.7 0 00-.798-1.922 2.703 2.703 0 00-1.92-.795zm21.814 6.023c-.886 0-1.72-.344-2.347-.971a3.3 3.3 0 01-.974-2.349 3.325 3.325 0 013.319-3.323h.002a3.323 3.323 0 012.351 5.668 3.294 3.294 0 01-2.35.974h-.002.001zm0-6.041h-.002a2.7 2.7 0 00-1.922.798 2.7 2.7 0 00-.796 1.923 2.7 2.7 0 00.798 1.922 2.702 2.702 0 001.921.796h.003a2.7 2.7 0 001.922-.798 2.7 2.7 0 00.795-1.924 2.722 2.722 0 00-2.719-2.717z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.014 23.791a.3.3 0 010-.602l15.75-.013a.3.3 0 010 .603l-15.75.012zm-2.136-2.865a.302.302 0 01-.288-.39l.721-2.34a.301.301 0 11.577.177l-.721 2.34a.3.3 0 01-.289.213z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group13Icon;
/* prettier-ignore-end */
