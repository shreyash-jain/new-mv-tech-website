// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector57IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector57Icon(props: Vector57IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 42"}
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
          "M34.524 26.31c-2.58-3.87-5.55-8.22-6.126-8.73-.978-.858-2.232-1.392-4.02-1.392h-13.02c-1.398 0-2.418-.294-3.252-1.194l-.06-.06c-.942-1.056-1.77-2.904-2.706-5.892l-.084-.264C4.338 5.85 3.42 2.922 2.502 0H0c.99 3.162 1.986 6.324 2.976 9.492l.084.258c1.038 3.324 2.022 5.442 3.228 6.78l.066.078c.576.624 1.188 1.074 1.86 1.386v13.038c0 2.412.042 4.836.486 6.72.546 2.31 1.668 3.858 3.882 3.858 3.648 0 5.292-5.46 5.526-6.324l.036-.114 6.132-16.59h.102c1.134 0 1.89.306 2.448.798.354.306 2.598 3.6 4.824 6.93h2.874zm-23.916-7.752c.246.018.498.024.756.024h10.452l-5.982 16.002-.018.09c-.18.654-1.314 4.542-3.222 4.542-.804 0-1.272-.804-1.554-2.004-.384-1.632-.42-3.9-.42-6.18V18.558h-.012z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector57Icon;
/* prettier-ignore-end */
