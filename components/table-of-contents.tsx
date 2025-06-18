"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  className?: string;
}

export function TableOfContents({ className }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Get all headings from the page
    const headings = document.querySelectorAll("h2, h3");
    const items: TocItem[] = Array.from(headings)
      .map((heading, index) => {
        // Ensure each heading has a unique ID
        if (!heading.id) {
          heading.id = `heading-${index}-${
            heading.textContent
              ?.toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9-]/g, "") || "untitled"
          }`;
        }
        return {
          id: heading.id,
          title: heading.textContent || "",
          level: Number.parseInt(heading.tagName.charAt(1)),
        };
      })
      .filter((item) => item.title.trim() !== ""); // Filter out empty titles

    setTocItems(items);

    // Set up intersection observer for active section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (tocItems.length === 0) return null;

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-sm font-medium">On This Page</CardTitle>
      </CardHeader>
      <CardContent className="space-y-1">
        {tocItems.map((item, index) => (
          <a
            key={item.id || `toc-item-${index}`}
            href={`#${item.id}`}
            className={`block text-sm transition-colors hover:text-foreground ${
              item.level === 3 ? "pl-4" : ""
            } ${
              activeId === item.id
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            }`}
          >
            {item.title}
          </a>
        ))}
      </CardContent>
    </Card>
  );
}
