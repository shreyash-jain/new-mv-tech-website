// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector83IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector83Icon(props: Vector83IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 4 5"}
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
          "M2.507.083c-.336 0-.648.12-.894.324A.562.562 0 011.235.12a.226.226 0 00-.3-.096.226.226 0 00-.096.3.977.977 0 00.456.432l-.012.012A1.033 1.033 0 01.7.407a.22.22 0 00-.312-.03.22.22 0 00-.03.312c.198.24.432.378.66.457a1.327 1.327 0 01-.672-.21A.23.23 0 00.035 1a.219.219 0 00.072.307c.234.15.468.227.696.263l.312.042v1.699c0 .773.63 1.403 1.404 1.403.774 0 1.404-.63 1.404-1.403v-1.83c0-.775-.63-1.405-1.404-1.405l-.012.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector83Icon;
/* prettier-ignore-end */
