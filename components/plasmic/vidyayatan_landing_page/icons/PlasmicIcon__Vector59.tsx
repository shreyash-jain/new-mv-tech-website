// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector59Icon(props: Vector59IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 61"}
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
          "M49.74 52.403a1.192 1.192 0 102.136-1.056c-.324-.66-9.09-13.98-10.128-14.886-.978-.858-2.232-1.392-4.02-1.392h-13.02c-1.404 0-2.418-.294-3.252-1.194l-.06-.06c-.948-1.056-1.77-2.904-2.706-5.892l-.084-.264c-2.1-6.702-4.2-13.41-6.312-20.106-.582-1.848-1.254-3.468-2.118-4.722C9.222 1.445 8.04.509 6.516.185c-1.2-.252-2.562-.192-3.858-.132C2.19.07 1.728.095 1.2.095a1.2 1.2 0 100 2.4c.42 0 .984-.024 1.56-.054 1.146-.048 2.352-.102 3.264.09.864.18 1.572.774 2.184 1.662.702 1.026 1.278 2.43 1.8 4.074a9834.388 9834.388 0 016.312 20.106l.084.258c1.038 3.324 2.022 5.442 3.228 6.78l.066.078c.576.624 1.188 1.074 1.86 1.386v13.038c0 2.412.042 4.836.486 6.72.546 2.31 1.668 3.858 3.882 3.858 3.648 0 5.292-5.46 5.526-6.324l.036-.114 6.132-16.59h.102c1.134 0 1.89.306 2.448.798.72.63 9.318 13.668 9.558 14.148l.012-.006zm-25.776-14.97c.246.018.498.024.756.024h10.446l-5.982 16.002-.018.096c-.174.654-1.314 4.542-3.222 4.542-.804 0-1.272-.804-1.554-2.004-.384-1.632-.42-3.9-.42-6.18V37.439l-.006-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector59Icon;
/* prettier-ignore-end */
