/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const SolidLLM = lazy(() => import("./pages/SolidLLM"));
const SolidAIAbout = lazy(() => import("./pages/SolidAIAbout"));
const SolidAI = lazy(() => import("./pages/SolidAI"));
const SolidAIDocs = lazy(() => import("./pages/SolidAIDocs"));
const Documentation = lazy(() => import("./pages/Documentation"));
const BetaAccess = lazy(() => import("./pages/BetaAccess"));
const ComingSoon = lazy(() => import("./pages/ComingSoon"));
const PictureGallery = lazy(() => import("./pages/PictureGallery"));
const NotFound = lazy(() => import("./pages/NotFound"));
import { DeferredChatBot } from "./components/DeferredChatBot";

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-charcoal/20 border-t-charcoal" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <DeferredChatBot />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solid-llm" element={<SolidLLM />} />
          <Route path="/solid-llm/about" element={<SolidAIAbout />} />
          <Route path="/solidai" element={<SolidAI />} />
          <Route path="/solidai/docs" element={<SolidAIDocs />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/beta" element={<BetaAccess />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/gallery" element={<PictureGallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}