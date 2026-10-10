/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";

const SUFFIX = "Solid Solutions";
const ORIGIN = "https://solidsolutions.africa";

type PageMeta = {
  description?: string;
  /** When true, ask crawlers not to index this view (used for the 404). */
  noindex?: boolean;
};

function meta(attr: "name" | "property", key: string): HTMLMetaElement {
  const selector = `meta[${attr}="${key}"]`;
  const found = document.head.querySelector(selector);
  if (found instanceof HTMLMetaElement) return found;
  const created = document.createElement("meta");
  created.setAttribute(attr, key);
  document.head.appendChild(created);
  return created;
}

/** Sets the document title and share metadata for a route, restoring both on unmount. */
export function useDocumentTitle(title: string, pageMeta?: PageMeta) {
  const description = pageMeta?.description;
  const noindex = pageMeta?.noindex ?? false;

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${title} | ${SUFFIX}` : SUFFIX;

    const descriptionEl = meta("name", "description");
    const previousDescription = descriptionEl.content;
    if (description) {
      descriptionEl.content = description;
      meta("property", "og:description").content = description;
      meta("name", "twitter:description").content = description;
    }

    const titleText = document.title;
    meta("property", "og:title").content = titleText;
    meta("name", "twitter:title").content = titleText;

    const canonical = document.querySelector('link[rel="canonical"]');
    const previousCanonical = canonical?.getAttribute("href") ?? "";
    const url = `${ORIGIN}${window.location.pathname}`;
    if (canonical) canonical.setAttribute("href", url);
    meta("property", "og:url").content = url;

    const robots = meta("name", "robots");
    const previousRobots = robots.content;
    if (noindex) robots.content = "noindex, nofollow";

    return () => {
      document.title = previousTitle;
      if (description) descriptionEl.content = previousDescription;
      if (canonical && previousCanonical) canonical.setAttribute("href", previousCanonical);
      if (noindex) robots.content = previousRobots;
    };
  }, [title, description, noindex]);
}
