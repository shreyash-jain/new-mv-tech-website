// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector166IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector166Icon(props: Vector166IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 11"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M5.029 6.65l3.283 1.415 1.65-3.827L6.68 2.823 5.029 6.65zM1.202 5l3.283 1.415 1.65-3.828-3.283-1.415L1.202 5zm11.482 4.97a.603.603 0 01-.327.308.65.65 0 01-.453 0L.984 5.544a.602.602 0 01-.308-.327.65.65 0 010-.453L2.326.937a.602.602 0 01.327-.309.65.65 0 01.453 0l10.92 4.734a.602.602 0 01.308.327.65.65 0 010 .453l-1.65 3.828zm2.503-2.794a2.982 2.982 0 00-.381-.163 1.427 1.427 0 00-.163-.072l.236-.545c.126-.29.126-.598 0-.907a1.126 1.126 0 00-.635-.653L3.324.102c-.308-.127-.617-.145-.925 0a1.126 1.126 0 00-.653.635L.096 4.564c-.128.29-.128.599 0 .907.126.309.326.526.634.653l10.92 4.734c.29.127.598.127.907 0 .308-.126.526-.326.653-.634l.235-.544s.055.018.164.072c.109.054.236.109.38.163a.5.5 0 00.454 0c.145-.072.272-.163.327-.308l.707-1.633a.5.5 0 000-.453.504.504 0 00-.308-.327l.018-.018z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector166Icon;
/* prettier-ignore-end */
