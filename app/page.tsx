"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard");
  }, [router]);

  return (
    <div className="p-8">
      <h1 className="text-xl font-medium mb-2">Design Token Documentation</h1>
    </div>
  );
}
