// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame50Icon(props: Frame50IconProps) {
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
          "M28.415 9.171l-5.586-5.585a2 2 0 00-2.829 0L4.586 19A1.982 1.982 0 004 20.414V26a2 2 0 002 2h5.586A1.984 1.984 0 0013 27.414l10.459-10.458.435 1.738-4.6 4.599a1 1 0 101.413 1.415l5-5a1 1 0 00.264-.95l-.862-3.452L28.415 12a2 2 0 000-2.829zM24 13.586L18.415 8l3-3L27 10.586l-3 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame50Icon;
/* prettier-ignore-end */
