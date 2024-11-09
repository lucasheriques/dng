"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { Resource } from "sst";

if (typeof window !== "undefined") {
  posthog.init(Resource.PosthogKey.value, {
    api_host: Resource.PosthogHost.value,
    person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
  });
}
export function Providers({ children }: { children: React.ReactNode }) {
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
