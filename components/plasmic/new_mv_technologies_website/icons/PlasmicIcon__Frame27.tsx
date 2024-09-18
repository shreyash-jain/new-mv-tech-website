// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame27IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame27Icon(props: Frame27IconProps) {
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
          "M27 16.27c.005-.18.005-.36 0-.54l1.865-2.33a1 1 0 00.185-.883 13.45 13.45 0 00-1.36-3.28 1 1 0 00-.75-.492l-2.965-.33a9.896 9.896 0 00-.375-.375l-.35-2.972a1 1 0 00-.492-.75 13.41 13.41 0 00-3.282-1.358 1 1 0 00-.882.185L16.27 5h-.54L13.4 3.139a1 1 0 00-.883-.185 13.45 13.45 0 00-3.28 1.36 1 1 0 00-.492.75l-.33 2.97c-.13.124-.255.249-.375.375l-2.972.341a1 1 0 00-.75.492 13.464 13.464 0 00-1.36 3.282 1 1 0 00.187.882L5 15.73v.54L3.139 18.6a1 1 0 00-.185.883 13.45 13.45 0 001.36 3.28.999.999 0 00.75.492l2.965.33c.124.13.249.255.375.375l.346 2.973a1 1 0 00.492.75 13.467 13.467 0 003.282 1.358 1.001 1.001 0 00.882-.186L15.73 27c.18.005.36.005.54 0l2.33 1.865a1 1 0 00.883.185 13.402 13.402 0 003.28-1.36 1 1 0 00.492-.75l.33-2.965c.13-.123.255-.248.375-.375l2.973-.35a1 1 0 00.75-.492 13.467 13.467 0 001.358-3.282 1.001 1.001 0 00-.186-.882L27 16.27zM16 21a5 5 0 110-10 5 5 0 010 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame27Icon;
/* prettier-ignore-end */
