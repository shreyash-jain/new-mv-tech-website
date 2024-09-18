// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group58Icon(props: Group58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 31"}
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
          "M12.68 13.71l3-5.064a1.06 1.06 0 00-.133-.906l-3.396-5.316s-.24-.354-.456.012L7.01 10.344a.524.524 0 00.18.714l4.776 2.832c.246.144.57.066.714-.18z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M18.079 10.296l-5.544-8.688a.28.28 0 01.084-.384L18.493.048c.33-.066.81-.09.936.102l4.212 6.6c.144.192.36.246.564.114.408-.264.816-.522 1.224-.78a.28.28 0 01.42.318l-1.836 5.634c-.384 1.182-.114.966-1.35.816l-5.826-.702a.274.274 0 01-.24-.216.283.283 0 01.12-.3c.408-.258.816-.522 1.224-.78.21-.132.252-.348.138-.558zm3.522 5.046l2.652 5.25c.114.132.384.378.834.378h6.312s.426-.012.234-.396l-4.14-8.208a.518.518 0 00-.702-.228l-4.956 2.502a.52.52 0 00-.228.702h-.006z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M21.44 21.594h10.307c.156 0 .276.126.276.276l-2.166 5.58c-.126.318-.36.732-.588.732h-7.83c-.24.018-.402.168-.402.414v1.452c0 .12-.072.222-.186.264a.268.268 0 01-.306-.084l-3.762-4.578c-.792-.96-.756-.618.036-1.578l3.72-4.53a.274.274 0 01.306-.084.278.278 0 01.186.264v1.452c0 .246.162.396.402.42h.006zm-6.397.012l-5.88-.066c-.168.042-.51.162-.72.564l-2.91 5.598s-.186.39.24.39l9.192.108a.526.526 0 00.528-.516l.066-5.55a.526.526 0 00-.516-.528z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M9.487 18.648l-4.752 9.15a.28.28 0 01-.378.12L.403 23.424c-.222-.252-.486-.654-.378-.858l3.612-6.948c.09-.222.03-.432-.186-.546-.432-.222-.858-.45-1.29-.672a.283.283 0 01-.15-.288.274.274 0 01.216-.234l5.796-1.224c1.218-.258.894-.384 1.386.762l2.304 5.394a.266.266 0 01-.066.312.273.273 0 01-.318.042c-.432-.228-.858-.45-1.29-.672-.216-.114-.426-.042-.552.162v-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group58Icon;
/* prettier-ignore-end */
