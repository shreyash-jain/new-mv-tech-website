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
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M27.814 11.803l-2.791-5.585a1.75 1.75 0 00-2.349-.782l-2.72 1.36-5.73-1.516a.89.89 0 00-.448 0l-5.73 1.515-2.72-1.36a1.75 1.75 0 00-2.349.783L.186 11.802a1.75 1.75 0 00.782 2.348l2.953 1.477 6.07 4.335c.089.064.19.11.296.137l7 1.75a.874.874 0 00.831-.23l4.375-4.375 1.65-1.65 2.889-1.444a1.75 1.75 0 00.782-2.347zm-6.003 3.65l-3.764-3.015a.875.875 0 00-1.168.067c-1.948 1.962-4.12 1.714-5.504.839l4.73-4.594h3.479l2.976 5.951-.75.752zm-4.58 4.578l-6.357-1.59-5.381-3.843 3.062-6.125L14 7.031l1.072.283-4.922 4.777-.009.01a1.75 1.75 0 00.298 2.714c2.248 1.436 4.962 1.203 7.1-.547l3.023 2.43-3.331 3.333zm-2.813 3.806a.875.875 0 01-1.061.637l-4.562-1.141a.861.861 0 01-.297-.137l-2.882-2.058a.875.875 0 011.018-1.422l2.746 1.962 4.401 1.098a.876.876 0 01.637 1.061z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame10Icon;
/* prettier-ignore-end */
