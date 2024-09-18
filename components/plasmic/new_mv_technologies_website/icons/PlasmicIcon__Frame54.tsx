// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame54IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame54Icon(props: Frame54IconProps) {
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
          "M28 15h-2v-2h2a1 1 0 010 2zM4 13a1 1 0 000 2h2v-2H4zm22 7c0 .337-.017.671-.05 1H28a1 1 0 010 2h-2.46a10 10 0 01-19.08 0H4a1 1 0 010-2h2.05c-.032-.329-.05-.663-.05-1v-1H4a1 1 0 010-2h2v-2h20v2h2a1 1 0 010 2h-2v1zm-9-2a1 1 0 00-2 0v8a1 1 0 002 0v-8zM8.73 7.144A9.97 9.97 0 006.05 13h19.9a9.97 9.97 0 00-2.68-5.856l2.438-2.437a1 1 0 00-1.415-1.414L21.756 5.83a9.968 9.968 0 00-11.512 0L7.707 3.292a1 1 0 10-1.414 1.415L8.73 7.144z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame54Icon;
/* prettier-ignore-end */
