'use client';

import CurrencyConverter from "@/components/CurrencyConverter";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div suppressHydrationWarning className="container">
        <CurrencyConverter baseCurrency="USD" />
      </div>
    </Suspense>
  );
}
