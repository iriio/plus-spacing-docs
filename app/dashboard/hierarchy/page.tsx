import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Getting Started", href: "/dashboard" }, { label: "Token Selection Hierarchy" }]}
      title="Token Selection Hierarchy"
    >
      <p className="text-lg text-muted-foreground mb-8">
        A structured approach to selecting the right design tokens for your components, balancing semantic consistency
        with functional requirements.
      </p>

      <section id="hierarchy-overview" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Selection Hierarchy</h2>
        <p className="mb-6">
          Follow this hierarchy when selecting tokens for your components. Each level provides a fallback when the
          previous approach doesn't meet your functional requirements.
        </p>

        <div className="space-y-4">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  1
                </span>
                Primary Approach: Semantic Token Usage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Always start with tokens that match your component's semantic size classification.</p>

              <h4 className="text-lg font-semibold mb-3">Component Size Classifications:</h4>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">Small</h5>
                  <p className="text-sm text-green-700 mb-2">Compact components for dense layouts</p>
                  <code className="text-xs bg-green-100 px-2 py-1 rounded">space-25 to space-150</code>
                </div>
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">Medium</h5>
                  <p className="text-sm text-blue-700 mb-2">Standard components for typical interfaces</p>
                  <code className="text-xs bg-blue-100 px-2 py-1 rounded">space-200 to space-400</code>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <h5 className="font-semibold text-purple-800 mb-2">Large</h5>
                  <p className="text-sm text-purple-700 mb-2">Prominent components for emphasis</p>
                  <code className="text-xs bg-purple-100 px-2 py-1 rounded">space-500 to space-1000</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  2
                </span>
                Secondary Approach: Component Templates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                When semantic tokens don't meet functional requirements, follow documented component family templates.
                These templates provide pre-approved cross-semantic patterns for common use cases.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-yellow-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  3
                </span>
                Tertiary Approach: Cross-Semantic Authorization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Use tokens from different semantic categories when documented patterns support functional needs. This
                requires proper justification and documentation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                  4
                </span>
                Final Approach: Escalation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                For new patterns not covered by existing templates, document the reasoning and escalate to the design
                system team for review and potential inclusion in the system.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="selection-process" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Selection Process</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-2">Identify Component Context</h3>
              <p className="text-muted-foreground">
                Determine the component's role, size, and usage context within your interface.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-2">Apply Semantic Classification</h3>
              <p className="text-muted-foreground">
                Classify your component as Small, Medium, or Large based on its semantic role.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-2">Test Semantic Tokens</h3>
              <p className="text-muted-foreground">
                Try using tokens that match your component's semantic classification.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-sm">
              4
            </div>
            <div>
              <h3 className="font-semibold mb-2">Evaluate Functional Requirements</h3>
              <p className="text-muted-foreground">
                If semantic tokens don't meet accessibility or usability needs, proceed to the next hierarchy level.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-sm">
              5
            </div>
            <div>
              <h3 className="font-semibold mb-2">Document Decisions</h3>
              <p className="text-muted-foreground">
                Record your token selection rationale, especially for cross-semantic usage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
