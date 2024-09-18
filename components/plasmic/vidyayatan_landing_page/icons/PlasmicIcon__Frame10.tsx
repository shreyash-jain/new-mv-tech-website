// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame10IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame10Icon(props: Frame10IconProps) {
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
          "M11.724 9.053l-2-1a.5.5 0 00-.5.03l-.918.613a2.534 2.534 0 01-1-1l.612-.918a.5.5 0 00.031-.5l-1-2A.5.5 0 006.5 4 2.5 2.5 0 004 6.5 5.506 5.506 0 009.5 12 2.499 2.499 0 0012 9.5a.5.5 0 00-.276-.447zM9.5 11A4.505 4.505 0 015 6.5a1.5 1.5 0 011.206-1.471l.717 1.437-.61.909a.5.5 0 00-.046.47A3.53 3.53 0 008.15 9.728a.5.5 0 00.474-.041l.913-.61 1.438.718A1.5 1.5 0 019.5 11zM8 1.5a6.5 6.5 0 00-5.739 9.555l-.71 2.128a1 1 0 001.266 1.265l2.128-.71A6.5 6.5 0 108 1.5zm0 12a5.491 5.491 0 01-2.754-.738.5.5 0 00-.408-.042L2.5 13.5l.78-2.338a.5.5 0 00-.042-.408A5.5 5.5 0 118 13.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame10Icon;
/* prettier-ignore-end */
