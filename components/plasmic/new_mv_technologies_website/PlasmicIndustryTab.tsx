// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qg9BUJrNtisePZMs8FM4BQ
// Component: MM66Nfn3G1us

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
import sty from "./PlasmicIndustryTab.module.css"; // plasmic-import: MM66Nfn3G1us/css

createPlasmicElementProxy;

export type PlasmicIndustryTab__VariantMembers = {
  industryTabOptions: "industryTabOptions";
};
export type PlasmicIndustryTab__VariantsArgs = {
  industryTabOptions?: SingleBooleanChoiceArg<"industryTabOptions">;
};
type VariantPropType = keyof PlasmicIndustryTab__VariantsArgs;
export const PlasmicIndustryTab__VariantProps = new Array<VariantPropType>(
  "industryTabOptions"
);

export type PlasmicIndustryTab__ArgsType = {
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
type ArgPropType = keyof PlasmicIndustryTab__ArgsType;
export const PlasmicIndustryTab__ArgProps = new Array<ArgPropType>(
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

export type PlasmicIndustryTab__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultIndustryTabProps {
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
  industryTabOptions?: SingleBooleanChoiceArg<"industryTabOptions">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicIndustryTab__RenderFunc(props: {
  variants: PlasmicIndustryTab__VariantsArgs;
  args: PlasmicIndustryTab__ArgsType;
  overrides: PlasmicIndustryTab__OverridesType;
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
        path: "industryTabOptions",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.industryTabOptions
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
          [sty.rootindustryTabOptions]: hasVariant(
            $state,
            "industryTabOptions",
            "industryTabOptions"
          )
        }
      )}
    >
      <div className={classNames(projectcss.all, sty.columns__tdQcA)}>
        <div
          className={classNames(projectcss.all, sty.column__ddGZx, {
            [sty.columnindustryTabOptions__ddGZx1Rcwj]: hasVariant(
              $state,
              "industryTabOptions",
              "industryTabOptions"
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
            className={classNames("__wab_instance", sty.subTab___70Qb, {
              [sty.subTabindustryTabOptions___70Qb1Rcwj]: hasVariant(
                $state,
                "industryTabOptions",
                "industryTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "industryTabOptions", "industryTabOptions")
                ? true
                : undefined
            }
            slot={"Smart farming solutions"}
          >
            {"Agritech"}
          </SubTab>
        </div>
        <div
          className={classNames(projectcss.all, sty.column__zVcZr, {
            [sty.columnindustryTabOptions__zVcZr1Rcwj]: hasVariant(
              $state,
              "industryTabOptions",
              "industryTabOptions"
            )
          })}
          onClick={async event => {
            const $steps = {};

            $steps["goToWhyVidyayatan"] = true
              ? (() => {
                  const actionArgs = { destination: `/why-vidyayatan` };
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
            className={classNames("__wab_instance", sty.subTab__oKj2U, {
              [sty.subTabindustryTabOptions__oKj2U1Rcwj]: hasVariant(
                $state,
                "industryTabOptions",
                "industryTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "industryTabOptions", "industryTabOptions")
                ? true
                : undefined
            }
            slot={"Tech-enhanced education solutions"}
          >
            {"Edtech"}
          </SubTab>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.columns__n82F0)}>
        <div
          className={classNames(projectcss.all, sty.column__ky17C, {
            [sty.columnindustryTabOptions__ky17C1Rcwj]: hasVariant(
              $state,
              "industryTabOptions",
              "industryTabOptions"
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
            className={classNames("__wab_instance", sty.subTab__rhSel, {
              [sty.subTabindustryTabOptions__rhSel1Rcwj]: hasVariant(
                $state,
                "industryTabOptions",
                "industryTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "industryTabOptions", "industryTabOptions")
                ? true
                : undefined
            }
            slot={"Digital finance solutions"}
          >
            {"Fintech"}
          </SubTab>
        </div>
      </div>
      <div className={classNames(projectcss.all, sty.columns__clxTt)}>
        <div
          className={classNames(projectcss.all, sty.column__aNzv2, {
            [sty.columnindustryTabOptions__aNzv21Rcwj]: hasVariant(
              $state,
              "industryTabOptions",
              "industryTabOptions"
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
            className={classNames("__wab_instance", sty.subTab__spup8, {
              [sty.subTabindustryTabOptions__spup81Rcwj]: hasVariant(
                $state,
                "industryTabOptions",
                "industryTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "industryTabOptions", "industryTabOptions")
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
          className={classNames(projectcss.all, sty.column__pQ0Uf, {
            [sty.columnindustryTabOptions__pQ0Uf1Rcwj]: hasVariant(
              $state,
              "industryTabOptions",
              "industryTabOptions"
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
            className={classNames("__wab_instance", sty.subTab__adOb2, {
              [sty.subTabindustryTabOptions__adOb21Rcwj]: hasVariant(
                $state,
                "industryTabOptions",
                "industryTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "industryTabOptions", "industryTabOptions")
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
      <div className={classNames(projectcss.all, sty.columns__ujAjM)}>
        <div
          className={classNames(projectcss.all, sty.column___8BSZa, {
            [sty.columnindustryTabOptions___8BSZa1Rcwj]: hasVariant(
              $state,
              "industryTabOptions",
              "industryTabOptions"
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
            className={classNames("__wab_instance", sty.subTab___8O8I2, {
              [sty.subTabindustryTabOptions___8O8I21Rcwj]: hasVariant(
                $state,
                "industryTabOptions",
                "industryTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "industryTabOptions", "industryTabOptions")
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
          className={classNames(projectcss.all, sty.column__pnFrM, {
            [sty.columnindustryTabOptions__pnFrM1Rcwj]: hasVariant(
              $state,
              "industryTabOptions",
              "industryTabOptions"
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
            className={classNames("__wab_instance", sty.subTab__vdMyl, {
              [sty.subTabindustryTabOptions__vdMyl1Rcwj]: hasVariant(
                $state,
                "industryTabOptions",
                "industryTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "industryTabOptions", "industryTabOptions")
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
      <div className={classNames(projectcss.all, sty.columns___1LpTx)}>
        <div
          className={classNames(projectcss.all, sty.column__jMlQl, {
            [sty.columnindustryTabOptions__jMlQl1Rcwj]: hasVariant(
              $state,
              "industryTabOptions",
              "industryTabOptions"
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
            className={classNames("__wab_instance", sty.subTab__kbejj, {
              [sty.subTabindustryTabOptions__kbejj1Rcwj]: hasVariant(
                $state,
                "industryTabOptions",
                "industryTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "industryTabOptions", "industryTabOptions")
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
          className={classNames(projectcss.all, sty.column__sNndT, {
            [sty.columnindustryTabOptions__sNndT1Rcwj]: hasVariant(
              $state,
              "industryTabOptions",
              "industryTabOptions"
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
            className={classNames("__wab_instance", sty.subTab__llwF8, {
              [sty.subTabindustryTabOptions__llwF81Rcwj]: hasVariant(
                $state,
                "industryTabOptions",
                "industryTabOptions"
              )
            })}
            companyTabOptions={
              hasVariant($state, "industryTabOptions", "industryTabOptions")
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
  PlasmicIndustryTab__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicIndustryTab__VariantsArgs;
    args?: PlasmicIndustryTab__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicIndustryTab__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicIndustryTab__ArgsType,
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
          internalArgPropNames: PlasmicIndustryTab__ArgProps,
          internalVariantPropNames: PlasmicIndustryTab__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicIndustryTab__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicIndustryTab";
  } else {
    func.displayName = `PlasmicIndustryTab.${nodeName}`;
  }
  return func;
}

export const PlasmicIndustryTab = Object.assign(
  // Top-level PlasmicIndustryTab renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicIndustryTab
    internalVariantProps: PlasmicIndustryTab__VariantProps,
    internalArgProps: PlasmicIndustryTab__ArgProps
  }
);

export default PlasmicIndustryTab;
/* prettier-ignore-end */
