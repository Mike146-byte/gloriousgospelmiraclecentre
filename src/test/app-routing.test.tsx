import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { visitorDetails } from "@/routes/index";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("shows the supplied Sunday service time", () => {
    expect(visitorDetails.serviceTime).toBe("Sundays, 7:00 a.m.–1:00 p.m.");
  });

  it("shows the supplied church location landmark", () => {
    expect(visitorDetails.location).toBe(
      "Blue Ribbon, between Kiganjo Corner and Makongeni Kamenu",
    );
  });
});
