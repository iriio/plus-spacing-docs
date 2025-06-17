import { PageLayout } from "@/components/page-layout"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Getting Started", href: "/dashboard" }, { label: "Cross-Semantic Authorization" }]}
      title="Cross-Semantic Usage Authorization"
    >
      <p className="text-lg text-muted-foreground mb-8">
        Guidelines for when and how to use design tokens outside their semantic classification, with proper
        justification and documentation.
      </p>

      <section id="when-authorized" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">When Cross-Semantic Usage is Authorized</h2>
        <p className="mb-6">
          Cross-semantic token usage is permitted when functional requirements take precedence over semantic
          consistency. The following scenarios justify this approach:
        </p>

        <div className="space-y-6">
          <Card className="border-l-4 border-l-green-500">
            <CardHeader>
              <CardTitle className="text-green-800">Accessibility Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Touch target minimums (44px × 44px)</strong> require larger tokens regardless of semantic
                    size
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Screen reader navigation</strong> needs may require adjusted spacing for landmark
                    recognition
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Color contrast ratios</strong> may need spacing adjustments to maintain readability
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-blue-800">Functional Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Content legibility needs</strong> - minimum text breathing room for readability
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Interactive element grouping</strong> and separation for clear user understanding
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Visual hierarchy</strong> that serves user comprehension and task completion
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Responsive behavior</strong> across different breakpoints and screen sizes
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader>
              <CardTitle className="text-purple-800">Context-Specific Needs</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Modal and overlay</strong> spatial relationships for proper focus management
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Navigation usability</strong> requirements for efficient user movement
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Form input practical sizing</strong> for comfortable data entry
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong>Data visualization clarity</strong> for accurate information interpretation
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="when-not-authorized" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">When Cross-Semantic Usage is NOT Authorized</h2>
        <p className="mb-6">The following reasons do not justify cross-semantic token usage and should be avoided:</p>

        <div className="space-y-4">
          <Alert className="bg-red-50 text-red-800 border-red-200">
            <AlertTitle className="text-red-900">Aesthetic Preferences</AlertTitle>
            <AlertDescription className="text-red-800">
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>"It looks better" without functional justification</li>
                <li>Personal design preferences without user benefit</li>
                <li>Arbitrary visual adjustments for stylistic reasons</li>
                <li>Trend-following without systematic consideration</li>
              </ul>
            </AlertDescription>
          </Alert>

          <Alert className="bg-red-50 text-red-800 border-red-200">
            <AlertTitle className="text-red-900">Consistency Breaking</AlertTitle>
            <AlertDescription className="text-red-800">
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>One-off solutions that can't be systematized</li>
                <li>Patterns that conflict with established component families</li>
                <li>Usage that undermines overall system coherence</li>
                <li>Shortcuts that bypass proper evaluation processes</li>
              </ul>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section id="authorization-process" className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Authorization Process</h2>
        <p className="mb-6">Follow this process when considering cross-semantic token usage:</p>

        <div className="space-y-4">
          <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div>
              <h3 className="font-semibold mb-2">Identify the Functional Need</h3>
              <p className="text-muted-foreground">
                Clearly articulate why semantic tokens don't meet the requirement.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div>
              <h3 className="font-semibold mb-2">Check Authorization Categories</h3>
              <p className="text-muted-foreground">
                Ensure your need falls into one of the authorized categories above.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <h3 className="font-semibold mb-2">Document the Justification</h3>
              <p className="text-muted-foreground">
                Record the functional requirement and how cross-semantic usage addresses it.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              4
            </div>
            <div>
              <h3 className="font-semibold mb-2">Consider Systematization</h3>
              <p className="text-muted-foreground">
                Evaluate if this pattern could apply to similar components system-wide.
              </p>
            </div>
          </div>
          <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
              5
            </div>
            <div>
              <h3 className="font-semibold mb-2">Implement and Monitor</h3>
              <p className="text-muted-foreground">Apply the cross-semantic pattern and track its effectiveness.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
