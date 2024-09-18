// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector116IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector116Icon(props: Vector116IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 20"}
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
          "M6.06 3.066a.27.27 0 00.366.096.264.264 0 00.096-.36l-.516-.894a.264.264 0 00-.366-.096.264.264 0 00-.096.36l.516.894zm6.06-1.764c0 .15.12.264.264.264.144 0 .27-.12.27-.264V.27c0-.144-.12-.27-.27-.27-.15 0-.264.12-.264.27v1.032zm6.126 1.5a.26.26 0 00.102.36c.126.072.288.03.36-.096l.516-.894a.264.264 0 00-.456-.264l-.516.894h-.006zm4.56 4.362a.259.259 0 00-.096.36.264.264 0 00.36.096l.894-.516a.259.259 0 00.096-.36.259.259 0 00-.36-.096l-.888.516h-.006zm.666 6.054c-.15 0-.27.12-.27.27 0 .15.12.264.27.264h1.026c.15 0 .264-.12.264-.264 0-.144-.12-.27-.264-.27h-1.026zm-2.352 5.64a.264.264 0 00-.264.456l.888.516c.126.072.294.03.366-.096a.272.272 0 00-.096-.366l-.894-.516v.006zm-17.214.462a.259.259 0 00.096-.36.259.259 0 00-.36-.096l-.888.516a.264.264 0 00-.096.366.264.264 0 00.36.096l.894-.516-.006-.006zm-2.61-5.568c.15 0 .27-.12.27-.264 0-.144-.12-.27-.27-.27H.27c-.15 0-.27.12-.27.27 0 .15.12.264.27.264h1.026zm.402-6.126c.126.072.288.03.366-.096a.264.264 0 00-.096-.36l-.888-.516a.272.272 0 00-.366.096.264.264 0 00.096.36l.894.516h-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector116Icon;
/* prettier-ignore-end */
