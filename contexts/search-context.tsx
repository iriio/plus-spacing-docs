"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface SearchResult {
  title: string
  url: string
  excerpt: string
}

interface SearchContextType {
  searchQuery: string
  setSearchQuery: (query: string) => void
  searchResults: SearchResult[]
  isSearching: boolean
}

const SearchContext = createContext<SearchContextType | undefined>(undefined)

// Mock search data - in a real app, this would come from a search API or index
const searchData = [
  {
    title: "Core Philosophy",
    url: "/dashboard#philosophy",
    content:
      "functional excellence systematic constraints semantic consistency user experience accessibility requirements",
  },
  {
    title: "Token Selection Hierarchy",
    url: "/dashboard#hierarchy",
    content: "semantic token usage component size classifications small medium large primary secondary tertiary",
  },
  {
    title: "Cross-Semantic Authorization",
    url: "/dashboard#authorization",
    content: "accessibility requirements functional requirements context-specific needs touch targets screen reader",
  },
  {
    title: "Button Family",
    url: "/dashboard/components#button-family",
    content: "button medium large padding spacing accessibility touch targets compact stacking",
  },
  {
    title: "Badge & Chip Family",
    url: "/dashboard/components#badge-family",
    content: "badge chip small text legibility horizontal breathing room readability",
  },
  {
    title: "Form Elements",
    url: "/dashboard/components#form-family",
    content: "input fields form usability content entry label association semantic constraints",
  },
  {
    title: "Modal Family",
    url: "/dashboard/components#modal-family",
    content: "modal overlay spatial relationships content hierarchy user focus breathing room",
  },
  {
    title: "Navigation Family",
    url: "/dashboard/components#nav-family",
    content: "navigation nav items touch targets interaction areas compact vertical profile",
  },
  {
    title: "Alert & Notification",
    url: "/dashboard/components#alert-family",
    content: "alert notification prominence readability semantic medium tokens",
  },
  {
    title: "Decision Tree",
    url: "/dashboard/implementation#decision-tree",
    content: "token selection decision tree semantic size component family functional requirements",
  },
  {
    title: "Implementation Guidelines",
    url: "/dashboard/implementation#guidelines",
    content: "designers developers token selection process documentation requirements code documentation",
  },
  {
    title: "Quality Assurance",
    url: "/dashboard/implementation#quality",
    content: "design review checkpoints system health monitoring component consistency",
  },
  {
    title: "Responsive Patterns",
    url: "/dashboard/advanced#responsive",
    content: "responsive token usage breakpoints mobile tablet desktop accessibility needs",
  },
  {
    title: "Accessibility Overrides",
    url: "/dashboard/advanced#accessibility",
    content: "screen reader navigation motor accessibility landmark recognition interaction areas",
  },
  {
    title: "Escalation Process",
    url: "/dashboard/advanced#escalation",
    content: "escalation documentation component family functional requirements accessibility needs",
  },
  {
    title: "Success Metrics",
    url: "/dashboard/advanced#metrics",
    content: "system health indicators guidelines effectiveness designer confidence usability testing",
  },
]

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([])
      return
    }

    setIsSearching(true)

    // Simulate search delay
    const searchTimeout = setTimeout(() => {
      const query = searchQuery.toLowerCase()
      const results = searchData
        .filter((item) => item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query))
        .map((item) => ({
          title: item.title,
          url: item.url,
          excerpt: item.content.substring(0, 100) + "...",
        }))
        .slice(0, 8) // Limit to 8 results

      setSearchResults(results)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(searchTimeout)
  }, [searchQuery])

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, searchResults, isSearching }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearchContext() {
  const context = useContext(SearchContext)
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider")
  }
  return context
}
