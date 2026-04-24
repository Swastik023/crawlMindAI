"use client";

import useFlowValidation from "@/hooks/useFlowValidation";
import { cn } from "@/lib/utils";
import { useReactFlow } from "@xyflow/react";
import React from "react";

function NodeCard({
  nodeId,
  children,
  isSelected,
}: {
  nodeId: string;
  children: React.ReactNode;
  isSelected: boolean;
}) {
  const { getNode, setCenter } = useReactFlow();

  const centerNode = () => {
    const node = getNode(nodeId);
    if (!node) return;

    const { position, measured } = node;

    if (!position || !measured) return;
    const { width, height } = measured;
    const x = position.x + width! / 2;
    const y = position.y + height! / 2;
    if (x === undefined || y === undefined) return;
    setCenter(x, y, { zoom: 1, duration: 500 });
  };

  const { invalidInputs } = useFlowValidation();
  const hasInvalidInputs = invalidInputs.some((node) => node.nodeId === nodeId);
  return (
    <div
      onDoubleClick={centerNode}
      className={cn(
        "rounded-xl cursor-pointer bg-background border border-border shadow-md w-[420px] text-xs gap-1 flex-col transition-shadow duration-150",
        isSelected && "border-primary border-2 shadow-primary/20 shadow-lg",
        hasInvalidInputs && "border-destructive border-2 shadow-destructive/10 shadow-lg"
      )}
    >
      {children}
    </div>
  );
}

export default NodeCard;
