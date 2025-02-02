"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function FlyonuiScript() {
  const path = usePathname();

  useEffect(() => {
    const loadFlyonui = async () => {
      await import("flyonui/flyonui");

      window.HSStaticMethods.autoInit();
    };

    loadFlyonui();
  }, [path]);

  return null;
}
