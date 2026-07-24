/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";

const SUFFIX = "Solid Solutions";

/** Sets the document title for a route, restoring the previous title on unmount. */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} | ${SUFFIX}` : SUFFIX;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
