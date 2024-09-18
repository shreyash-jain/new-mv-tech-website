// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/new_mv_technologies_website/PlasmicGlobalContextsProvider";

import { PlasmicArtificialIntelligence } from "../components/plasmic/new_mv_technologies_website/PlasmicArtificialIntelligence";
import { useRouter } from "next/router";

function ArtificialIntelligence() {
  // Use PlasmicArtificialIntelligence to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicArtificialIntelligence are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicArtificialIntelligence is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    <GlobalContextsProvider>
      <PageParamsProvider__
        route={useRouter()?.pathname}
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicArtificialIntelligence />
      </PageParamsProvider__>
    </GlobalContextsProvider>
  );
}

export default ArtificialIntelligence;
