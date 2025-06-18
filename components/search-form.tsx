"use client";

import type React from "react";
import Link from "next/link";

import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";
import { useSearchContext } from "@/contexts/search-context";
import { getLinkPath } from "@/lib/utils";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const { searchQuery, setSearchQuery, searchResults, isSearching } =
    useSearchContext();

  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search the docs..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
        </SidebarGroupContent>

        {/* Search Results */}
        {searchQuery && (
          <SidebarGroupContent className="mt-2">
            <div className="max-h-64 overflow-y-auto">
              {isSearching ? (
                <div className="p-2 text-sm text-muted-foreground">
                  Searching...
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-1">
                  {searchResults.map((result, index) => (
                    <Link
                      key={index}
                      href={getLinkPath(result.url)}
                      className="block p-2 text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md"
                    >
                      <div className="font-medium">{result.title}</div>
                      <div className="text-xs text-muted-foreground truncate">
                        {result.excerpt}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-2 text-sm text-muted-foreground">
                  No results found
                </div>
              )}
            </div>
          </SidebarGroupContent>
        )}
      </SidebarGroup>
    </form>
  );
}
