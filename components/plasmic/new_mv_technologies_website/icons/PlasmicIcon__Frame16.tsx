// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame16IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame16Icon(props: Frame16IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.375 10.5a1.75 1.75 0 00-1.75-1.75h-3.5v-3.5a1.75 1.75 0 00-1.75-1.75h-14a1.75 1.75 0 00-1.75 1.75v14a.875.875 0 001.422.68l3.828-3.086v3.281a1.75 1.75 0 001.75 1.75h10.236l4.092 3.305a.875.875 0 001.422-.68v-14zm-4.654 9.82a.875.875 0 00-.547-.195H9.625v-3.5h8.75a1.75 1.75 0 001.75-1.75V10.5h3.5v12.168l-2.904-2.348z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame16Icon;
/* prettier-ignore-end */
