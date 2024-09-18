// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qg9BUJrNtisePZMs8FM4BQ
// Component: KwXEJ_Tan7Os

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_vidyayatan_landing_page_css from "../vidyayatan_landing_page/plasmic.module.css"; // plasmic-import: aqUnUFeSAtbFb77THsmBtm/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_apple_css from "../apple/plasmic.module.css"; // plasmic-import: 3eY1qD8fYUzK6iRzHmP8VZ/projectcss
import plasmic_vercel_workflow_css from "../vercel_workflow/plasmic.module.css"; // plasmic-import: 9geyujr9Gmmnu34Qh9ic8E/projectcss
import plasmic_saa_s_website_css from "../saa_s_website/plasmic.module.css"; // plasmic-import: ybfbkvuYhwx2f8pSa8cKG/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qg9BUJrNtisePZMs8FM4BQ/projectcss
import sty from "./PlasmicFaqAccordianMobile.module.css"; // plasmic-import: KwXEJ_Tan7Os/css

import Frame17Icon from "./icons/PlasmicIcon__Frame17"; // plasmic-import: qCObakUSkcsr/icon
import Frame12Icon from "./icons/PlasmicIcon__Frame12"; // plasmic-import: Z85vYva0b0da/icon
import Frame13Icon from "./icons/PlasmicIcon__Frame13"; // plasmic-import: 3aywcLGyBpWS/icon

createPlasmicElementProxy;

export type PlasmicFaqAccordianMobile__VariantMembers = {
  opened: "opened";
  closed: "closed";
};
export type PlasmicFaqAccordianMobile__VariantsArgs = {
  opened?: SingleBooleanChoiceArg<"opened">;
  closed?: SingleBooleanChoiceArg<"closed">;
};
type VariantPropType = keyof PlasmicFaqAccordianMobile__VariantsArgs;
export const PlasmicFaqAccordianMobile__VariantProps =
  new Array<VariantPropType>("opened", "closed");

export type PlasmicFaqAccordianMobile__ArgsType = {
  slot?: React.ReactNode;
  children?: React.ReactNode;
  q12?: React.ReactNode;
};
type ArgPropType = keyof PlasmicFaqAccordianMobile__ArgsType;
export const PlasmicFaqAccordianMobile__ArgProps = new Array<ArgPropType>(
  "slot",
  "children",
  "q12"
);

export type PlasmicFaqAccordianMobile__OverridesType = {
  root?: Flex__<"div">;
  q1?: Flex__<"div">;
  plus?: Flex__<"div">;
  minus?: Flex__<"div">;
};

export interface DefaultFaqAccordianMobileProps {
  slot?: React.ReactNode;
  children?: React.ReactNode;
  q12?: React.ReactNode;
  opened?: SingleBooleanChoiceArg<"opened">;
  closed?: SingleBooleanChoiceArg<"closed">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFaqAccordianMobile__RenderFunc(props: {
  variants: PlasmicFaqAccordianMobile__VariantsArgs;
  args: PlasmicFaqAccordianMobile__ArgsType;
  overrides: PlasmicFaqAccordianMobile__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "opened",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.opened
      },
      {
        path: "closed",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.closed
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_vidyayatan_landing_page_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_apple_css.plasmic_tokens,
        plasmic_vercel_workflow_css.plasmic_tokens,
        plasmic_saa_s_website_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootclosed]: hasVariant($state, "closed", "closed"),
          [sty.rootopened]: hasVariant($state, "opened", "opened")
        }
      )}
      onAbort={async event => {
        const $steps = {};
      }}
      onClick={async event => {
        const $steps = {};
      }}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__r5ZmX, {
          [sty.freeBoxopened__r5ZmX5HMfS]: hasVariant(
            $state,
            "opened",
            "opened"
          )
        })}
        onClick={async event => {
          const $steps = {};

          $steps["updateOpened"] = true
            ? (() => {
                const actionArgs = {
                  vgroup: "opened",
                  operation: 2,
                  value: "opened"
                };
                return (({ vgroup, value }) => {
                  if (typeof value === "string") {
                    value = [value];
                  }

                  const oldValue = $stateGet($state, vgroup);
                  $stateSet($state, vgroup, !oldValue);
                  return !oldValue;
                })?.apply(null, [actionArgs]);
              })()
            : undefined;
          if (
            $steps["updateOpened"] != null &&
            typeof $steps["updateOpened"] === "object" &&
            typeof $steps["updateOpened"].then === "function"
          ) {
            $steps["updateOpened"] = await $steps["updateOpened"];
          }
        }}
      >
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__qXvLg, {
            [sty.freeBoxopened__qXvLg5HMfS]: hasVariant(
              $state,
              "opened",
              "opened"
            )
          })}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__tzziG)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"q1"}
              data-plasmic-override={overrides.q1}
              hasGap={true}
              className={classNames(projectcss.all, sty.q1)}
            >
              {renderPlasmicSlot({
                defaultContents: (
                  <Frame17Icon
                    className={classNames(projectcss.all, sty.svg__hg5Jz)}
                    role={"img"}
                  />
                ),

                value: args.q12
              })}
            </Stack__>
            <div
              className={classNames(projectcss.all, sty.freeBox__mc1HL, {
                [sty.freeBoxopened__mc1HL5HMfS]: hasVariant(
                  $state,
                  "opened",
                  "opened"
                )
              })}
            >
              {renderPlasmicSlot({
                defaultContents:
                  "Why should I choose Vidyayatan Technologies as my tech partner? ",
                value: args.children,
                className: classNames(sty.slotTargetChildren, {
                  [sty.slotTargetChildrenopened]: hasVariant(
                    $state,
                    "opened",
                    "opened"
                  )
                })
              })}
            </div>
            <div className={classNames(projectcss.all, sty.freeBox__zLyAp)}>
              <Stack__
                as={"div"}
                data-plasmic-name={"plus"}
                data-plasmic-override={overrides.plus}
                hasGap={true}
                className={classNames(projectcss.all, sty.plus, {
                  [sty.plusopened]: hasVariant($state, "opened", "opened")
                })}
              >
                <Frame12Icon
                  className={classNames(projectcss.all, sty.svg__mktWt)}
                  role={"img"}
                />
              </Stack__>
              <Stack__
                as={"div"}
                data-plasmic-name={"minus"}
                data-plasmic-override={overrides.minus}
                hasGap={true}
                className={classNames(projectcss.all, sty.minus, {
                  [sty.minusopened]: hasVariant($state, "opened", "opened")
                })}
                onClick={async event => {
                  const $steps = {};

                  $steps["updateClosed"] = true
                    ? (() => {
                        const actionArgs = { vgroup: "closed", operation: 4 };
                        return (({ vgroup, value }) => {
                          if (typeof value === "string") {
                            value = [value];
                          }

                          $stateSet($state, vgroup, true);
                          return true;
                        })?.apply(null, [actionArgs]);
                      })()
                    : undefined;
                  if (
                    $steps["updateClosed"] != null &&
                    typeof $steps["updateClosed"] === "object" &&
                    typeof $steps["updateClosed"].then === "function"
                  ) {
                    $steps["updateClosed"] = await $steps["updateClosed"];
                  }
                }}
              >
                <Frame13Icon
                  className={classNames(projectcss.all, sty.svg___5FyWm, {
                    [sty.svgopened___5FyWm5HMfS]: hasVariant(
                      $state,
                      "opened",
                      "opened"
                    )
                  })}
                  role={"img"}
                />
              </Stack__>
            </div>
          </Stack__>
          <div className={classNames(projectcss.all, sty.freeBox__p3I5O)}>
            {(hasVariant($state, "opened", "opened") ? true : false)
              ? renderPlasmicSlot({
                  defaultContents: (
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__hXQdS
                      )}
                    >
                      {
                        "Vidyayatan Technologies is committed to transforming industries with innovative solutions. With a diverse portfolio and expertise in ERP, SaaS, and custom software development, we empower businesses to excel. Our solutions are tailored to meet specific industry needs, ensuring your success in the digital era."
                      }
                    </div>
                  ),
                  value: args.slot
                })
              : null}
          </div>
        </Stack__>
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "q1", "plus", "minus"],
  q1: ["q1"],
  plus: ["plus"],
  minus: ["minus"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  q1: "div";
  plus: "div";
  minus: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFaqAccordianMobile__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFaqAccordianMobile__VariantsArgs;
    args?: PlasmicFaqAccordianMobile__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFaqAccordianMobile__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFaqAccordianMobile__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFaqAccordianMobile__ArgProps,
          internalVariantPropNames: PlasmicFaqAccordianMobile__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFaqAccordianMobile__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFaqAccordianMobile";
  } else {
    func.displayName = `PlasmicFaqAccordianMobile.${nodeName}`;
  }
  return func;
}

export const PlasmicFaqAccordianMobile = Object.assign(
  // Top-level PlasmicFaqAccordianMobile renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    q1: makeNodeComponent("q1"),
    plus: makeNodeComponent("plus"),
    minus: makeNodeComponent("minus"),

    // Metadata about props expected for PlasmicFaqAccordianMobile
    internalVariantProps: PlasmicFaqAccordianMobile__VariantProps,
    internalArgProps: PlasmicFaqAccordianMobile__ArgProps
  }
);

export default PlasmicFaqAccordianMobile;
/* prettier-ignore-end */
