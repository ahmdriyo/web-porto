"use client";

import Link from "next/link";
import type { ComponentProps, MouseEventHandler } from "react";

import { trackClick } from "@/services/tracking.client";
import type { TrackingActionKey } from "@/types/tracking";

type TrackingLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  actionKey: TrackingActionKey;
  href: string;
};

export default function TrackingLink({
  actionKey,
  href,
  onClick,
  ...props
}: TrackingLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    trackClick({
      actionKey,
      targetUrl: href,
      pagePath: window.location.pathname,
    });
  };

  return <Link {...props} href={href} onClick={handleClick} />;
}
