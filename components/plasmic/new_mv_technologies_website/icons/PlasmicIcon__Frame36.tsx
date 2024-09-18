// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame36IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame36Icon(props: Frame36IconProps) {
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
          "M13.5 23.5a4 4 0 11-8 0 4 4 0 018 0zm-6.793-8.793L8.5 12.915l1.793 1.793a1 1 0 101.415-1.415L9.913 11.5l1.793-1.793a1 1 0 00-1.415-1.415L8.5 10.087 6.707 8.293a1 1 0 10-1.414 1.415L7.086 11.5l-1.793 1.793a1 1 0 101.414 1.415zM26.915 23.5l1.793-1.793a1 1 0 10-1.415-1.415L25.5 22.087l-1.793-1.793a1 1 0 10-1.415 1.415l1.794 1.792-1.793 1.793a1 1 0 101.415 1.415l1.792-1.794 1.793 1.793a1 1 0 001.415-1.415L26.913 23.5zM20.707 6.293L20.415 6H23a1 1 0 100-2h-5a1 1 0 00-1 1v5a1 1 0 002 0V7.414l.293.293c2.24 2.242 2.237 4.426 1.838 5.863-.58 2.096-2.42 3.971-4.375 4.46a1 1 0 10.488 1.94c2.651-.662 5.044-3.075 5.816-5.866.763-2.756-.072-5.53-2.352-7.811z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame36Icon;
/* prettier-ignore-end */
