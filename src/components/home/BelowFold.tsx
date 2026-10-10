/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Metrics from "./Metrics";
import About from "./About";
import Offerings from "./Offerings";
import Ecosystem from "./Ecosystem";
import Sectors from "./Sectors";
import Stack from "./Stack";
import Priorities from "./Priorities";
import HowWeBuild from "./HowWeBuild";
import WhyUs from "./WhyUs";
import Roadmap from "./Roadmap";
import Audiences from "./Audiences";
import FAQ from "./FAQ";
import Contact from "./Contact";

/** Everything below the hero, loaded as its own chunk so the first paint stays small. */
export default function BelowFold() {
  return (
    <>
      <Metrics />
      <About />
      <Offerings />
      <Ecosystem />
      <Sectors />
      <Stack />
      <Priorities />
      <HowWeBuild />
      <WhyUs />
      <Roadmap />
      <Audiences />
      <FAQ />
      <Contact />
    </>
  );
}
