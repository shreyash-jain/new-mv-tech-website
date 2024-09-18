// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame38IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame38Icon(props: Frame38IconProps) {
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
          "M21 21c0 .594-.139 1.145-.381 1.514a.972.972 0 01-.869.486c-1.215 0-1.25-1.795-1.25-2 0-.593.139-1.145.381-1.514A.972.972 0 0119.75 19c1.215 0 1.25 1.795 1.25 2zm7-15v20a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h20a2 2 0 012 2zM17.605 9.447a1 1 0 001.343.448l.552-.277V14a1 1 0 002 0V8a1 1 0 00-1.448-.895l-2 1a1 1 0 00-.447 1.342zM14 18a1 1 0 00-1.447-.895l-2 1a1 1 0 10.894 1.79l.553-.277V24a1 1 0 002 0v-6zm2-7c0-2.355-1.336-4-3.25-4S9.5 8.645 9.5 11s1.336 4 3.25 4S16 13.355 16 11zm7 10c0-2.355-1.336-4-3.25-4s-3.25 1.645-3.25 4 1.336 4 3.25 4S23 23.355 23 21zM12.75 9a.971.971 0 00-.875.486c-.242.375-.375.921-.375 1.514 0 .205.035 2 1.25 2a.972.972 0 00.875-.486c.242-.375.375-.92.375-1.514 0-.205-.035-2-1.25-2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame38Icon;
/* prettier-ignore-end */
