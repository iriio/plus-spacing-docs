import { PageLayout } from "@/components/page-layout";
import { Callout } from "@/components/callout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Page() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Getting Started" }]}
      title="Design Token Usage Guidelines"
    >
      <Callout type="info" title="Quick Start">
        These guidelines help you select the right design tokens while
        maintaining system consistency and enabling optimal user experiences.
      </Callout>

      <section id="hierarchy" className="mt-16">
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          Token Selection Hierarchy
        </h2>

        <p className="text-base leading-relaxed mb-8">
          Follow this hierarchy when selecting tokens for your components. Each
          level provides a fallback when the previous approach doesn't meet your
          functional requirements.
        </p>

        <div className="space-y-8 border-l border-slate-400 pl-4">
          <div className="pl-4">
            <h3 className="text-lg font-medium mb-2">
              Refer to Existing Component & Template Patterns
            </h3>
            <p className="text-gray-600">
              When semantic tokens don't meet functional requirements, follow
              documented component family templates with pre-approved
              cross-semantic patterns.
            </p>
          </div>

          <div className="pl-4">
            <h3 className="text-lg font-medium mb-2">
              Use Semantic Tokens if it's a New Component
            </h3>
            <p className="text-gray-600 mb-4">
              Always start with tokens that match your component's semantic size
              classification.
            </p>

            <h4 className="text-base font-medium mb-3">
              Component Size Classifications:
            </h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Size</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Token Range</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Small</TableCell>
                  <TableCell className="text-sm text-gray-600">
                    Compact components for dense layouts
                  </TableCell>
                  <TableCell>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                      space-25 to space-150
                    </code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Medium</TableCell>
                  <TableCell className="text-sm text-gray-600">
                    Standard components for typical interfaces
                  </TableCell>
                  <TableCell>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                      space-200 to space-400
                    </code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Large</TableCell>
                  <TableCell className="text-sm text-gray-600">
                    Prominent components for emphasis
                  </TableCell>
                  <TableCell>
                    <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                      space-500 to space-1000
                    </code>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="pl-4">
            <h3 className="text-lg font-medium mb-2">
              Use Cross-Semantic Tokens if Visually Requires
            </h3>
            <p className="text-gray-600">
              Use tokens from different semantic categories when documented
              patterns support functional needs. Requires proper justification.
            </p>
          </div>

          <div className="pl-4">
            <h3 className="text-lg font-medium mb-2">Escalation</h3>
            <p className="text-gray-600">
              For new patterns not covered by existing templates, document
              reasoning and escalate to the design system team.
            </p>
          </div>
        </div>
      </section>

      <section id="authorization" className="mt-16">
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          Cross-Semantic Usage Authorization
        </h2>

        <p className="text-base leading-relaxed mb-8">
          Cross-semantic token usage is permitted when functional requirements
          take precedence over semantic consistency.
        </p>

        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Authorization Status</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Examples</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-green-900" rowSpan={2}>
                Authorized
              </TableCell>
              <TableCell className="font-medium">
                Accessibility Requirements
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Touch target minimums (44px × 44px), Screen reader navigation
                needs, Color contrast ratio adjustments
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Functional Requirements
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Content legibility needs, Interactive element grouping, Visual
                hierarchy for comprehension
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-red-900" rowSpan={2}>
                Not Authorized
              </TableCell>
              <TableCell className="font-medium">
                Aesthetic Preferences
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                "It looks better" without justification, Personal design
                preferences, Arbitrary visual adjustments
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Consistency Breaking
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                One-off solutions that can't be systematized, Patterns
                conflicting with established families, Usage undermining system
                coherence
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Callout type="warning" title="Authorization Process" className="mt-8">
          <ol className="list-decimal list-inside space-y-2">
            <li>Identify the functional need clearly</li>
            <li>Check if it falls into authorized categories</li>
            <li>Document the justification thoroughly</li>
            <li>Consider if the pattern can be systematized</li>
            <li>Implement and monitor effectiveness</li>
          </ol>
        </Callout>
      </section>
    </PageLayout>
  );
}
