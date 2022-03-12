import Link from "next/link";
import React from "react";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function Pricing() {
  return (
    <MainLayout>
      <h1>Pricing page</h1>
      <h1 className="title">
        {/* Ir a <a href="/about">About</a> */}
        Ir a <Link href="/home">Home</Link>
      </h1>

      <p className="description">
        Get started by editing <code className="code">pages/pricing.jsx</code>
      </p>
    </MainLayout>
  );
}
