// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame46Icon(props: Frame46IconProps) {
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
          "M29.286 14.356l-5.625 4.854 1.714 7.259a2.05 2.05 0 01-3.063 2.227L16 24.811l-6.316 3.885a2.05 2.05 0 01-3.059-2.227l1.72-7.259-5.625-4.854a2.057 2.057 0 011.165-3.606l7.375-.595 2.845-6.885a2.045 2.045 0 013.784 0l2.844 6.885 7.375.595a2.057 2.057 0 011.17 3.607h.008z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame46Icon;
/* prettier-ignore-end */
