'use client';

import type * as React from 'react';
import { useRef, useState } from 'react';

interface SelectedNode {
  element: HTMLElement | null;
  id: number;
  transform: string;
}

export function CategoryClient({ children }: { children: React.ReactNode }) {
  const [selectedNode, setSelected] = useState<SelectedNode>({
    element: null,
    id: -1,
    transform: '',
  });
  const spanRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseMoveHandler: React.MouseEventHandler<HTMLElement> = (event) => {
    const target = (event.target as HTMLElement).closest('button');

    if (!target) {
      if (spanRef.current) {
      }
      return;
    }

    if (target.dataset.item === selectedNode.id.toString()) return;

    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      const relativeX = targetRect.left - containerRect.left;
      const relativeY = targetRect.top - containerRect.top;
      const transform = `translate(${relativeX}px, ${relativeY}px)`;

      if (spanRef.current) {
        spanRef.current.style.width = `${target.clientWidth}px`;
        spanRef.current.style.height = `${target.clientHeight}px`;

        spanRef.current.style.opacity = '1';
        if (selectedNode.id === -1) {
          spanRef.current.style.transition = 'opacity 300ms ease-in';
          spanRef.current.style.transform = transform;
        } else {
          spanRef.current.style.transition =
            'opacity 300ms ease-in, transform 300ms ease-out';
        }
      }

      setSelected({
        element: target,
        id: Number(target.dataset.item),
        transform,
      });
    }
  };

  const mouseLeaveHandler: React.MouseEventHandler<HTMLElement> = () => {
    if (spanRef.current) {
      spanRef.current.style.opacity = '0';

      // Reset the transform
      spanRef.current.style.transition = 'opacity 300ms ease-out'; // Ensure smooth transition
    }
    setSelected((prevSelected) => ({ ...prevSelected, element: null, id: -1 })); // Reset selectedNode state
  };

  return (
    <div
      ref={containerRef}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-4"
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <span
        ref={spanRef}
        className="absolute bg-secondary rounded-md pointer-events-none border-solid border-[1px] border-white/20"
        style={{
          transform: selectedNode.transform,
          opacity: 0,
        }}
      />
      {children}
    </div>
  );
}
