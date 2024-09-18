// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame35Icon(props: Frame35IconProps) {
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
          "M12.731 23.892C12.168 25.125 10.286 28 5 28a1 1 0 01-1-1c0-5.286 2.875-7.168 4.107-7.731a1.002 1.002 0 011.352 1.26 1 1 0 01-.521.56c-.804.366-2.578 1.545-2.89 4.864 3.318-.313 4.5-2.087 4.863-2.89a1 1 0 111.82.83zm15.25-18a2 2 0 00-1.875-1.875c-1.572-.093-5.591.05-8.925 3.384L11 13.588a1 1 0 01-1.416-1.414l3.32-3.322A.5.5 0 0012.55 8H9.294a1.987 1.987 0 00-1.419.585l-4.287 4.29A2 2 0 004.72 16.27l4.809.671 5.526 5.527.671 4.81a1.993 1.993 0 001.348 1.616 2.014 2.014 0 001.402-.048c.243-.1.463-.248.648-.433l4.29-4.288A2 2 0 0024 22.706V19.45a.5.5 0 00-.854-.353l-3.321 3.32a1 1 0 01-1.464-.052 1.025 1.025 0 01.075-1.388l6.159-6.158c3.336-3.335 3.48-7.354 3.386-8.928v.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame35Icon;
/* prettier-ignore-end */
