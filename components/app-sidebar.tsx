"use client";

import type * as React from "react";
import { useState, useEffect } from "react";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getImagePath, getLinkPath } from "@/lib/utils";

import { SearchForm } from "@/components/search-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Getting Started",
      items: [
        { title: "Token Selection Hierarchy", url: "/dashboard#hierarchy" },
        {
          title: "Cross-Semantic",
          url: "/dashboard#authorization",
        },
        {
          title: "When to Ask for Help",
          url: "/dashboard#escalation",
        },
      ],
    },
    {
      title: "Component Templates",
      items: [
        { title: "Button Family", url: "/dashboard/components#button-family" },
        {
          title: "Badge & Chip Family",
          url: "/dashboard/components#badge-family",
        },
        { title: "Form Elements", url: "/dashboard/components#form-family" },
        { title: "Modal Family", url: "/dashboard/components#modal-family" },
        { title: "Navigation Family", url: "/dashboard/components#nav-family" },
        {
          title: "Alert & Notification",
          url: "/dashboard/components#alert-family",
        },
      ],
    },
    // {
    //   title: "Implementation",
    //   items: [
    //     {
    //       title: "Decision Tree",
    //       url: "/dashboard/implementation#decision-tree",
    //     },
    //     {
    //       title: "Implementation",
    //       url: "/dashboard/implementation#guidelines",
    //     },
    //     {
    //       title: "Quality Assurance",
    //       url: "/dashboard/implementation#quality",
    //     },
    //   ],
    // },
    {
      title: "Page Layout",
      items: [
        { title: "Large Tokens", url: "/dashboard/advanced#large-tokens" },
        {
          title: "Layout Patterns",
          url: "/dashboard/advanced#layout-patterns",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  // State to track which sections are open
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved state from localStorage on mount
  useEffect(() => {
    const savedState = localStorage.getItem("sidebar-state");
    if (savedState) {
      try {
        setOpenSections(JSON.parse(savedState));
      } catch (error) {
        console.error("Failed to parse saved sidebar state:", error);
        // Default to all sections open
        const defaultState = data.navMain.reduce(
          (acc, item) => ({
            ...acc,
            [item.title]: true,
          }),
          {}
        );
        setOpenSections(defaultState);
      }
    } else {
      // Default to all sections open
      const defaultState = data.navMain.reduce(
        (acc, item) => ({
          ...acc,
          [item.title]: true,
        }),
        {}
      );
      setOpenSections(defaultState);
    }
    setIsLoaded(true);
  }, []);

  // Save state to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("sidebar-state", JSON.stringify(openSections));
    }
  }, [openSections, isLoaded]);

  // Handle section toggle
  const handleSectionToggle = (sectionTitle: string, isOpen: boolean) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionTitle]: isOpen,
    }));
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={getLinkPath("/dashboard")}>
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Image
                    src={getImagePath("/Personalized Learning Logo.jpeg")}
                    alt="Design Tokens Logo"
                    width={32}
                    height={16}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Design Tokens</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <Collapsible
                key={item.title}
                open={openSections[item.title] ?? true}
                onOpenChange={(isOpen) =>
                  handleSectionToggle(item.title, isOpen)
                }
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={getLinkPath(item.url)}>
                                {item.title}
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
