"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SearchProvider } from "@/contexts/search-context";
import { getLinkPath } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  breadcrumbs: Array<{ label: string; href?: string }>;
  title: string;
}

export function PageLayout({ children, breadcrumbs, title }: PageLayoutProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [dynamicBreadcrumbs, setDynamicBreadcrumbs] = useState(breadcrumbs);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionHeight = rect.height;

        // Check if section is in view (with some offset for better UX)
        if (
          scrollY >= sectionTop - 200 &&
          scrollY < sectionTop + sectionHeight - 200
        ) {
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);

        // Update breadcrumbs based on active section
        if (currentSection) {
          const sectionElement = document.getElementById(currentSection);
          const sectionTitle = sectionElement?.querySelector("h2")?.textContent;

          if (sectionTitle) {
            setDynamicBreadcrumbs([...breadcrumbs, { label: sectionTitle }]);
          }
        } else {
          setDynamicBreadcrumbs(breadcrumbs);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, breadcrumbs]);

  return (
    <SearchProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-2 border-b px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {dynamicBreadcrumbs.map((crumb, index) => (
                  <div
                    key={`${crumb.label}-${index}`}
                    className="flex items-center"
                  >
                    {index > 0 && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}
                    <BreadcrumbItem className="hidden md:block">
                      {crumb.href ? (
                        <BreadcrumbLink href={getLinkPath(crumb.href)}>
                          {crumb.label}
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  </div>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className="flex flex-1">
            <main
              className="flex-1 px-6 py-8 max-w-4xl mx-auto"
              id="main-content"
            >
              <div className="prose prose-slate max-w-none">
                <h1 className="text-4xl font-bold tracking-tight mb-4 font-heading">
                  {title}
                </h1>
                {children}
              </div>
            </main>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </SearchProvider>
  );
}
