// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qg9BUJrNtisePZMs8FM4BQ
// Component: tJAIrxUZQNcn

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

import SubTab from "../../SubTab"; // plasmic-import: Ge8cfBehoqUF/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_vidyayatan_landing_page_css from "../vidyayatan_landing_page/plasmic.module.css"; // plasmic-import: aqUnUFeSAtbFb77THsmBtm/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_apple_css from "../apple/plasmic.module.css"; // plasmic-import: 3eY1qD8fYUzK6iRzHmP8VZ/projectcss
import plasmic_vercel_workflow_css from "../vercel_workflow/plasmic.module.css"; // plasmic-import: 9geyujr9Gmmnu34Qh9ic8E/projectcss
import plasmic_saa_s_website_css from "../saa_s_website/plasmic.module.css"; // plasmic-import: ybfbkvuYhwx2f8pSa8cKG/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qg9BUJrNtisePZMs8FM4BQ/projectcss
import sty from "./PlasmicCompanyTab.module.css"; // plasmic-import: tJAIrxUZQNcn/css

createPlasmicElementProxy;

export type PlasmicCompanyTab__VariantMembers = {
  companyTabOptions: "companyTabOptions";
};
export type PlasmicCompanyTab__VariantsArgs = {
  companyTabOptions?: SingleBooleanChoiceArg<"companyTabOptions">;
};
type VariantPropType = keyof PlasmicCompanyTab__VariantsArgs;
export const PlasmicCompanyTab__VariantProps = new Array<VariantPropType>(
  "companyTabOptions"
);

export type PlasmicCompanyTab__ArgsType = {
  slot8?: React.ReactNode;
  slot9?: React.ReactNode;
  slot10?: React.ReactNode;
  slot11?: React.ReactNode;
  slot12?: React.ReactNode;
  slot13?: React.ReactNode;
  slot14?: React.ReactNode;
  slot15?: React.ReactNode;
  slot16?: React.ReactNode;
  slot17?: React.ReactNode;
  slot18?: React.ReactNode;
  slot19?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCompanyTab__ArgsType;
export const PlasmicCompanyTab__ArgProps = new Array<ArgPropType>(
  "slot8",
  "slot9",
  "slot10",
  "slot11",
  "slot12",
  "slot13",
  "slot14",
  "slot15",
  "slot16",
  "slot17",
  "slot18",
  "slot19"
);

export type PlasmicCompanyTab__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultCompanyTabProps {
  slot8?: React.ReactNode;
  slot9?: React.ReactNode;
  slot10?: React.ReactNode;
  slot11?: React.ReactNode;
  slot12?: React.ReactNode;
  slot13?: React.ReactNode;
  slot14?: React.ReactNode;
  slot15?: React.ReactNode;
  slot16?: React.ReactNode;
  slot17?: React.ReactNode;
  slot18?: React.ReactNode;
  slot19?: React.ReactNode;
  companyTabOptions?: SingleBooleanChoiceArg<"companyTabOptions">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCompanyTab__RenderFunc(props: {
  variants: PlasmicCompanyTab__VariantsArgs;
  args: PlasmicCompanyTab__ArgsType;
  overrides: PlasmicCompanyTab__OverridesType;
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
        path: "companyTabOptions",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.companyTabOptions
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
          [sty.rootcompanyTabOptions]: hasVariant(
            $state,
            "companyTabOptions",
            "companyTabOptions"
          )
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.columns__vzjQn)}>
        <div
          className={classNames(projectcss.all, sty.column___2TVv, {
            [sty.columncompanyTabOptions___2TVVzgYuJ]: hasVariant(
              $state,
              "companyTabOptions",
              "companyTabOptions"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToAboutUsPage"] = true
              ? (() => {
                  const actionArgs = { destination: `/about-vidyayatan` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToAboutUsPage"] != null &&
              typeof $steps["goToAboutUsPage"] === "object" &&
              typeof $steps["goToAboutUsPage"].then === "function"
            ) {
              $steps["goToAboutUsPage"] = await $steps["goToAboutUsPage"];
            }
          }}
        >
          <SubTab
            className={classNames("__wab_instance", sty.subTab___9FGIl, {
              [sty.subTabcompanyTabOptions___9FGIlzgYuJ]: hasVariant(
                $state,
                "companyTabOptions",
                "companyTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "companyTabOptions", "companyTabOptions")
                ? true
                : undefined
            }
            slot={"South Africa's premier software development company"}
          >
            {"About Us"}
          </SubTab>
        </div>
        <div
          className={classNames(projectcss.all, sty.column__qnf8F, {
            [sty.columncompanyTabOptions__qnf8FzgYuJ]: hasVariant(
              $state,
              "companyTabOptions",
              "companyTabOptions"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToWhyVidyayatan"] = true
              ? (() => {
                  const actionArgs = { destination: `/why-mv-technologies` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToWhyVidyayatan"] != null &&
              typeof $steps["goToWhyVidyayatan"] === "object" &&
              typeof $steps["goToWhyVidyayatan"].then === "function"
            ) {
              $steps["goToWhyVidyayatan"] = await $steps["goToWhyVidyayatan"];
            }
          }}
        >
          <SubTab
            className={classNames("__wab_instance", sty.subTab__h69N1, {
              [sty.subTabcompanyTabOptions__h69N1ZgYuJ]: hasVariant(
                $state,
                "companyTabOptions",
                "companyTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "companyTabOptions", "companyTabOptions")
                ? true
                : undefined
            }
            slot={"Discover how MV Technologies can elevate your business"}
          >
            {"Why MV Technologies?"}
          </SubTab>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.columns__zqVF)}>
        <div
          className={classNames(projectcss.all, sty.column__s4HT, {
            [sty.columncompanyTabOptions__s4HTzgYuJ]: hasVariant(
              $state,
              "companyTabOptions",
              "companyTabOptions"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToContactPage"] = true
              ? (() => {
                  const actionArgs = { destination: `/contact-page` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToContactPage"] != null &&
              typeof $steps["goToContactPage"] === "object" &&
              typeof $steps["goToContactPage"].then === "function"
            ) {
              $steps["goToContactPage"] = await $steps["goToContactPage"];
            }
          }}
        >
          <SubTab
            className={classNames("__wab_instance", sty.subTab__d9CHt, {
              [sty.subTabcompanyTabOptions__d9CHtzgYuJ]: hasVariant(
                $state,
                "companyTabOptions",
                "companyTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "companyTabOptions", "companyTabOptions")
                ? true
                : undefined
            }
            slot={"Get in touch with the team"}
          >
            {"Contact"}
          </SubTab>
        </div>
        <div
          className={classNames(projectcss.all, sty.column___5HyvJ, {
            [sty.columncompanyTabOptions___5HyvJzgYuJ]: hasVariant(
              $state,
              "companyTabOptions",
              "companyTabOptions"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToPage"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToPage"] != null &&
              typeof $steps["goToPage"] === "object" &&
              typeof $steps["goToPage"].then === "function"
            ) {
              $steps["goToPage"] = await $steps["goToPage"];
            }
          }}
        >
          <SubTab
            className={classNames("__wab_instance", sty.subTab___3LvGj, {
              [sty.subTabcompanyTabOptions___3LvGJzgYuJ]: hasVariant(
                $state,
                "companyTabOptions",
                "companyTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "companyTabOptions", "companyTabOptions")
                ? true
                : undefined
            }
            slot={"Become part of our exceptional team"}
          >
            {"Careers"}
          </SubTab>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.columns__yxvn2)}>
        <div
          className={classNames(projectcss.all, sty.column__tSXcg, {
            [sty.columncompanyTabOptions__tSXcgzgYuJ]: hasVariant(
              $state,
              "companyTabOptions",
              "companyTabOptions"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToContactPage"] = true
              ? (() => {
                  const actionArgs = { destination: `/contact-page` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToContactPage"] != null &&
              typeof $steps["goToContactPage"] === "object" &&
              typeof $steps["goToContactPage"].then === "function"
            ) {
              $steps["goToContactPage"] = await $steps["goToContactPage"];
            }
          }}
        >
          <SubTab
            className={classNames("__wab_instance", sty.subTab__x1Kdk, {
              [sty.subTabcompanyTabOptions__x1KdKzgYuJ]: hasVariant(
                $state,
                "companyTabOptions",
                "companyTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "companyTabOptions", "companyTabOptions")
                ? true
                : undefined
            }
            slot={renderPlasmicSlot({
              defaultContents: "Get in touch with the team",
              value: args.slot9
            })}
          >
            {renderPlasmicSlot({
              defaultContents: "Contact",
              value: args.slot8
            })}
          </SubTab>
        </div>
        <div
          className={classNames(projectcss.all, sty.column___6UVW, {
            [sty.columncompanyTabOptions___6UVWzgYuJ]: hasVariant(
              $state,
              "companyTabOptions",
              "companyTabOptions"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToPage"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToPage"] != null &&
              typeof $steps["goToPage"] === "object" &&
              typeof $steps["goToPage"].then === "function"
            ) {
              $steps["goToPage"] = await $steps["goToPage"];
            }
          }}
        >
          <SubTab
            className={classNames("__wab_instance", sty.subTab__tkuPu, {
              [sty.subTabcompanyTabOptions__tkuPuzgYuJ]: hasVariant(
                $state,
                "companyTabOptions",
                "companyTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "companyTabOptions", "companyTabOptions")
                ? true
                : undefined
            }
            slot={renderPlasmicSlot({
              defaultContents: "Become part of our exceptional team",
              value: args.slot11
            })}
          >
            {renderPlasmicSlot({
              defaultContents: "Careers",
              value: args.slot10
            })}
          </SubTab>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.columns__yzAEg)}>
        <div
          className={classNames(projectcss.all, sty.column__eyCyp, {
            [sty.columncompanyTabOptions__eyCypzgYuJ]: hasVariant(
              $state,
              "companyTabOptions",
              "companyTabOptions"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToContactPage"] = true
              ? (() => {
                  const actionArgs = { destination: `/contact-page` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToContactPage"] != null &&
              typeof $steps["goToContactPage"] === "object" &&
              typeof $steps["goToContactPage"].then === "function"
            ) {
              $steps["goToContactPage"] = await $steps["goToContactPage"];
            }
          }}
        >
          <SubTab
            className={classNames("__wab_instance", sty.subTab___3Ghvc, {
              [sty.subTabcompanyTabOptions___3GhvCzgYuJ]: hasVariant(
                $state,
                "companyTabOptions",
                "companyTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "companyTabOptions", "companyTabOptions")
                ? true
                : undefined
            }
            slot={renderPlasmicSlot({
              defaultContents: "Get in touch with the team",
              value: args.slot13
            })}
          >
            {renderPlasmicSlot({
              defaultContents: "Contact",
              value: args.slot12
            })}
          </SubTab>
        </div>
        <div
          className={classNames(projectcss.all, sty.column__n3PSw, {
            [sty.columncompanyTabOptions__n3PSwzgYuJ]: hasVariant(
              $state,
              "companyTabOptions",
              "companyTabOptions"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToPage"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToPage"] != null &&
              typeof $steps["goToPage"] === "object" &&
              typeof $steps["goToPage"].then === "function"
            ) {
              $steps["goToPage"] = await $steps["goToPage"];
            }
          }}
        >
          <SubTab
            className={classNames("__wab_instance", sty.subTab__oStXj, {
              [sty.subTabcompanyTabOptions__oStXjzgYuJ]: hasVariant(
                $state,
                "companyTabOptions",
                "companyTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "companyTabOptions", "companyTabOptions")
                ? true
                : undefined
            }
            slot={renderPlasmicSlot({
              defaultContents: "Become part of our exceptional team",
              value: args.slot15
            })}
          >
            {renderPlasmicSlot({
              defaultContents: "Careers",
              value: args.slot14
            })}
          </SubTab>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.columns___6CxqA)}>
        <div
          className={classNames(projectcss.all, sty.column__svfC9, {
            [sty.columncompanyTabOptions__svfC9ZgYuJ]: hasVariant(
              $state,
              "companyTabOptions",
              "companyTabOptions"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToContactPage"] = true
              ? (() => {
                  const actionArgs = { destination: `/contact-page` };
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToContactPage"] != null &&
              typeof $steps["goToContactPage"] === "object" &&
              typeof $steps["goToContactPage"].then === "function"
            ) {
              $steps["goToContactPage"] = await $steps["goToContactPage"];
            }
          }}
        >
          <SubTab
            className={classNames("__wab_instance", sty.subTab__zdy7G, {
              [sty.subTabcompanyTabOptions__zdy7GzgYuJ]: hasVariant(
                $state,
                "companyTabOptions",
                "companyTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "companyTabOptions", "companyTabOptions")
                ? true
                : undefined
            }
            slot={renderPlasmicSlot({
              defaultContents: "Get in touch with the team",
              value: args.slot17
            })}
          >
            {renderPlasmicSlot({
              defaultContents: "Contact",
              value: args.slot16
            })}
          </SubTab>
        </div>
        <div
          className={classNames(projectcss.all, sty.column__fOseN, {
            [sty.columncompanyTabOptions__fOseNzgYuJ]: hasVariant(
              $state,
              "companyTabOptions",
              "companyTabOptions"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToPage"] = true
              ? (() => {
                  const actionArgs = {};
                  return (({ destination }) => {
                    if (
                      typeof destination === "string" &&
                      destination.startsWith("#")
                    ) {
                      document
                        .getElementById(destination.substr(1))
                        .scrollIntoView({ behavior: "smooth" });
                    } else {
                      __nextRouter?.push(destination);
                    }
                  })?.apply(null, [actionArgs]);
                })()
              : undefined;
            if (
              $steps["goToPage"] != null &&
              typeof $steps["goToPage"] === "object" &&
              typeof $steps["goToPage"].then === "function"
            ) {
              $steps["goToPage"] = await $steps["goToPage"];
            }
          }}
        >
          <SubTab
            className={classNames("__wab_instance", sty.subTab__pMpzi, {
              [sty.subTabcompanyTabOptions__pMpzizgYuJ]: hasVariant(
                $state,
                "companyTabOptions",
                "companyTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "companyTabOptions", "companyTabOptions")
                ? true
                : undefined
            }
            slot={renderPlasmicSlot({
              defaultContents: "Become part of our exceptional team",
              value: args.slot19
            })}
          >
            {renderPlasmicSlot({
              defaultContents: "Careers",
              value: args.slot18
            })}
          </SubTab>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCompanyTab__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCompanyTab__VariantsArgs;
    args?: PlasmicCompanyTab__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCompanyTab__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCompanyTab__ArgsType,
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
          internalArgPropNames: PlasmicCompanyTab__ArgProps,
          internalVariantPropNames: PlasmicCompanyTab__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCompanyTab__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCompanyTab";
  } else {
    func.displayName = `PlasmicCompanyTab.${nodeName}`;
  }
  return func;
}

export const PlasmicCompanyTab = Object.assign(
  // Top-level PlasmicCompanyTab renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicCompanyTab
    internalVariantProps: PlasmicCompanyTab__VariantProps,
    internalArgProps: PlasmicCompanyTab__ArgProps
  }
);

export default PlasmicCompanyTab;
/* prettier-ignore-end */
