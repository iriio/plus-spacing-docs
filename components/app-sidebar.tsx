import type * as React from "react"
import { GalleryVerticalEnd, Minus, Plus } from "lucide-react"

import { SearchForm } from "@/components/search-form"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
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
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Getting Started",
      items: [
        { title: "Core Philosophy", url: "/dashboard#philosophy" },
        { title: "Token Selection Hierarchy", url: "/dashboard#hierarchy" },
        { title: "Cross-Semantic Authorization", url: "/dashboard#authorization" },
      ],
    },
    {
      title: "Component Templates",
      items: [
        { title: "Button Family", url: "/dashboard/components#button-family" },
        { title: "Badge & Chip Family", url: "/dashboard/components#badge-family" },
        { title: "Form Elements", url: "/dashboard/components#form-family" },
        { title: "Modal Family", url: "/dashboard/components#modal-family" },
        { title: "Navigation Family", url: "/dashboard/components#nav-family" },
        { title: "Alert & Notification", url: "/dashboard/components#alert-family" },
      ],
    },
    {
      title: "Implementation",
      items: [
        { title: "Decision Tree", url: "/dashboard/implementation#decision-tree" },
        { title: "Implementation Guidelines", url: "/dashboard/implementation#guidelines" },
        { title: "Quality Assurance", url: "/dashboard/implementation#quality" },
      ],
    },
    {
      title: "Advanced",
      items: [
        { title: "Responsive Patterns", url: "/dashboard/advanced#responsive" },
        { title: "Accessibility Overrides", url: "/dashboard/advanced#accessibility" },
        { title: "Escalation Process", url: "/dashboard/advanced#escalation" },
        { title: "Success Metrics", url: "/dashboard/advanced#metrics" },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Design Tokens</span>
                  <span className="">Semantic Flexibility Framework</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item, index) => (
              <Collapsible
                key={item.title}
                defaultOpen={index === 0} // Open "Getting Started" by default
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title} <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={item.url}>{item.title}</a>
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
  )
}
