// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type IdeaSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function IdeaSvgrepoComSvgIcon(props: IdeaSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 1200 1200"}
      xmlSpace={"preserve"}
      fill={"currentColor"}
      stroke={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M567.663 0v190.423h64.679V0h-64.685.006zm-264.11 57.225l-52.992 37.103 109.203 155.946 52.963-37.104L303.553 57.225zm592.886 0L787.268 213.171l52.971 37.104L949.44 94.328l-52.992-37.103h-.009zm-296.45 185.299c-158.227 0-286.493 96.083-286.493 214.625l162.772 492.948h247.47l162.758-492.948c0-118.54-128.258-214.625-286.492-214.625h-.015zM85.465 299.673l-22.099 60.814 178.849 65.114 22.181-60.785-178.935-65.143h.004zm1029.062 0l-178.936 65.148 22.106 60.792 178.936-65.125-22.106-60.815zM255.756 577.681l-183.9 49.326 16.686 62.431 183.9-49.255-16.683-62.502h-.003zm688.48 0l-16.674 62.501 183.9 49.247 16.674-62.432-183.9-49.318v.002zM472.66 986.032v85.686h254.687v-85.673H472.661l-.001-.013zm0 128.282V1200h254.687v-85.672H472.661l-.001-.014z"
        }
      ></path>
    </svg>
  );
}

export default IdeaSvgrepoComSvgIcon;
/* prettier-ignore-end */
