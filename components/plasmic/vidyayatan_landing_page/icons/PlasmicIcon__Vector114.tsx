// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector114IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector114Icon(props: Vector114IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
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
          "M.046 18.24a26.28 26.28 0 01-.042-2.046c.012-.672.048-1.32.114-1.944.24-2.335.834-4.339 1.704-6.049a13.777 13.777 0 013.684-4.536c1.374-1.104 2.928-1.932 4.596-2.52C11.89.51 13.798.155 15.736.041a23.881 23.881 0 011.968-.036c.666.018 1.332.06 1.992.126a.266.266 0 01.186.102.288.288 0 01.06.198V.45c-.03.258-.702 5.766-3.456 10.71-2.79 5.004-7.698 9.432-16.224 7.338a.272.272 0 01-.15-.096.314.314 0 01-.06-.162H.046z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector114Icon;
/* prettier-ignore-end */
