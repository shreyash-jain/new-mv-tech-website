// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame9Icon(props: Frame9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M13.898 9.904l-2.944-1.32-.008-.003a1 1 0 00-.995.122L8.429 10c-.963-.468-1.958-1.456-2.426-2.407L7.3 6.05a1 1 0 00.118-.99v-.007l-1.323-2.95a1 1 0 00-1.038-.594A3.516 3.516 0 002 5c0 4.963 4.038 9 9 9a3.516 3.516 0 003.492-3.057 1 1 0 00-.594-1.04zM11 13a8.009 8.009 0 01-8-8 2.512 2.512 0 012.18-2.5v.008l1.312 2.937L5.2 6.991a1 1 0 00-.098 1.03c.566 1.158 1.733 2.316 2.904 2.882a1 1 0 001.03-.107l1.52-1.296 2.937 1.316h.007A2.512 2.512 0 0111 13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame9Icon;
/* prettier-ignore-end */
