// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame52IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame52Icon(props: Frame52IconProps) {
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
          "M30.991 15.565C30.764 9.693 25.884 5 20.008 5a11.013 11.013 0 00-9.847 6.084A10.935 10.935 0 009 15.966 1.023 1.023 0 018.071 17 1 1 0 017 16a12.957 12.957 0 01.668-4.115.5.5 0 00-.594-.647A8.011 8.011 0 001 19c0 4.399 3.719 8 8.125 8H20a11.011 11.011 0 0010.991-11.435zm-6.284-.857l-6 6a1.001 1.001 0 01-1.415 0l-3-3a1 1 0 111.415-1.415L18 18.585l5.293-5.293a1 1 0 011.415 1.415z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame52Icon;
/* prettier-ignore-end */
