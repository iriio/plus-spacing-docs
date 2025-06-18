import { PageLayout } from "@/components/page-layout";
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
      breadcrumbs={[
        { label: "Getting Started", href: "/dashboard" },
        { label: "Token Selection Hierarchy" },
      ]}
      title="Token Selection Hierarchy"
    >
      <p className="text-base text-gray-600 mb-8">
        A structured approach to selecting the right design tokens for your
        components, balancing semantic consistency with functional requirements.
      </p>

      <section id="hierarchy-overview" className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Selection Hierarchy</h2>
        <p className="mb-6">
          Follow this hierarchy when selecting tokens for your components. Each
          level provides a fallback when the previous approach doesn't meet your
          functional requirements.
        </p>

        <div className="space-y-6">
          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-2">
              Primary Approach: Semantic Token Usage
            </h3>
            <div className="space-y-4">
              <p className="mb-4">
                Always start with tokens that match your component's semantic
                size classification.
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
          </div>

          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-2">
              Secondary Approach: Component Templates
            </h3>
            <p>
              When semantic tokens don't meet functional requirements, follow
              documented component family templates. These templates provide
              pre-approved cross-semantic patterns for common use cases.
            </p>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-2">
              Tertiary Approach: Cross-Semantic Authorization
            </h3>
            <p>
              Use tokens from different semantic categories when documented
              patterns support functional needs. This requires proper
              justification and documentation.
            </p>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-2">
              Final Approach: Escalation
            </h3>
            <p>
              For new patterns not covered by existing templates, document the
              reasoning and escalate to the design system team for review and
              potential inclusion in the system.
            </p>
          </div>
        </div>
      </section>

      <section id="selection-process" className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Selection Process</h2>
        <div className="space-y-6">
          <div className="pl-4">
            <h3 className="font-medium mb-2">Identify Component Context</h3>
            <p className="text-gray-600">
              Determine the component's role, size, and usage context within
              your interface.
            </p>
          </div>
          <div className="pl-4">
            <h3 className="font-medium mb-2">Apply Semantic Classification</h3>
            <p className="text-gray-600">
              Classify your component as Small, Medium, or Large based on its
              semantic role.
            </p>
          </div>
          <div className="pl-4">
            <h3 className="font-medium mb-2">Test Semantic Tokens</h3>
            <p className="text-gray-600">
              Try using tokens that match your component's semantic
              classification.
            </p>
          </div>
          <div className="pl-4">
            <h3 className="font-medium mb-2">
              Evaluate Functional Requirements
            </h3>
            <p className="text-gray-600">
              If semantic tokens don't meet accessibility or usability needs,
              proceed to the next hierarchy level.
            </p>
          </div>
          <div className="pl-4">
            <h3 className="font-medium mb-2">Document Decisions</h3>
            <p className="text-gray-600">
              Record your token selection rationale, especially for
              cross-semantic usage.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
