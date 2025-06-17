import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { TableOfContents } from "@/components/table-of-contents"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { SearchProvider } from "@/contexts/search-context"

interface PageLayoutProps {
  children: React.ReactNode
  breadcrumbs: Array<{ label: string; href?: string }>
  title: string
}

export function PageLayout({ children, breadcrumbs, title }: PageLayoutProps) {
  return (
    <SearchProvider>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((crumb, index) => (
                  <div key={index} className="flex items-center">
                    {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
                    <BreadcrumbItem className="hidden md:block">
                      {crumb.href ? (
                        <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
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
            <main className="flex-1 px-6 py-8 max-w-4xl mx-auto" id="main-content">
              <div className="prose prose-slate max-w-none">
                <h1 className="text-4xl font-bold tracking-tight mb-4">{title}</h1>
                {children}
              </div>
            </main>
            <aside className="hidden xl:block w-64 p-6">
              <div className="sticky top-6">
                <TableOfContents />
              </div>
            </aside>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </SearchProvider>
  )
}
