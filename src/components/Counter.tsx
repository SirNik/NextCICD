"use client";

import { useState } from "react";

export function Counter({ initial = 0 }: { initial?: number }) {
  const [count, setCount] = useState(initial);

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => setCount((c) => c - 1)}
        className="rounded border px-3 py-1"
        aria-label="decrement"
      >
        −
      </button>
      <span data-testid="count">{count}</span>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="rounded border px-3 py-1"
        aria-label="increment"
      >
        +
      </button>
    </div>
  );
}
