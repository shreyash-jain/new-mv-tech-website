// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame43IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame43Icon(props: Frame43IconProps) {
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
          "M22 29a1 1 0 01-1 1H11a1 1 0 010-2h10a1 1 0 011 1zm5-16a10.944 10.944 0 01-4.205 8.651A2.03 2.03 0 0022 23.25V24a2 2 0 01-2 2h-8a2 2 0 01-2-2v-.75a2 2 0 00-.779-1.582A10.949 10.949 0 015 13.06C4.968 7.104 9.783 2.143 15.735 2A11 11 0 0127 13zm-4.014-1.168a7.201 7.201 0 00-5.82-5.818 1 1 0 00-.332 1.972c2.071.349 3.829 2.106 4.18 4.182a1 1 0 101.972-.335z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame43Icon;
/* prettier-ignore-end */
