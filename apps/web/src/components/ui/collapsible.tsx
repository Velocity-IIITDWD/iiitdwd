"use client";

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import React from "react";

function Collapsible({
  children,
  ...props
}: any) {
  // @ts-expect-error Radix type incompatibility
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props}>{children}</CollapsiblePrimitive.Root>;
}

function CollapsibleTrigger({
  children,
  ...props
}: any) {
  return (
    // @ts-expect-error Radix type incompatibility
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    >{children}</CollapsiblePrimitive.CollapsibleTrigger>
  );
}

function CollapsibleContent({
  children,
  ...props
}: any) {
  return (
    // @ts-expect-error Radix type incompatibility
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    >{children}</CollapsiblePrimitive.CollapsibleContent>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };

