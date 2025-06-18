import { PageLayout } from "@/components/page-layout";
import { Callout } from "@/components/callout";
import { CodeBlock } from "@/components/code-block";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, FileText, CheckCircle2 } from "lucide-react";

export default function Page() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Advanced" }]}
      title="Advanced Scenarios"
    >
      <p className="text-base text-gray-600 mb-8 leading-relaxed">
        Complex use cases and advanced patterns for design token usage in
        challenging contexts.
      </p>

      <section id="responsive" className="mt-12">
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          Responsive Token Usage
        </h2>

        <p className="text-base leading-relaxed mb-8">
          Components may need different semantic approaches across breakpoints
          to optimize user experience on various devices.
        </p>

        <div className="space-y-6">
          <div className="overflow-hidden border rounded">
            <div className="bg-gray-50 px-6 py-3 border-b">
              <h3 className="font-medium">Responsive Pattern Example</h3>
            </div>
            <div className="p-6 space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Breakpoint</TableHead>
                    <TableHead>Approach</TableHead>
                    <TableHead>Token Usage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Mobile (&lt; 768px)
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Small semantic size with Medium H-padding for touch
                      accessibility
                    </TableCell>
                    <TableCell>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                        H-padding: space-200 (Medium)
                      </code>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Tablet (768px - 1024px)
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Small semantic size with semantic tokens
                    </TableCell>
                    <TableCell>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                        H-padding: space-100 (Small)
                      </code>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Desktop (&gt; 1024px)
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Small semantic size with semantic tokens
                    </TableCell>
                    <TableCell>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">
                        H-padding: space-100 (Small)
                      </code>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <Callout type="info" title="Authorization">
            Cross-semantic usage authorized for responsive accessibility needs.
            Touch targets on mobile require larger interaction areas regardless
            of semantic classification.
          </Callout>

          <CodeBlock title="Responsive Implementation" language="css">
            {`/* Responsive button with cross-semantic authorization */
.button-small {
  padding-block: var(--space-100); /* Semantic Small maintained */
  padding-inline: var(--space-100); /* Default semantic match */
}

@media (max-width: 767px) {
  .button-small {
    padding-inline: var(--space-200); /* Cross-semantic for touch targets */
  }
}`}
          </CodeBlock>
        </div>
      </section>

      <section id="accessibility" className="mt-16">
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          Accessibility Override Patterns
        </h2>

        <p className="text-base leading-relaxed mb-8">
          Specific accessibility requirements that may necessitate
          cross-semantic token usage.
        </p>

        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Accessibility Type</TableHead>
              <TableHead>Requirement</TableHead>
              <TableHead>Token Impact</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={3}>
                Screen Reader Navigation
              </TableCell>
              <TableCell className="font-medium">
                Landmark Recognition
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Additional spacing may be required for screen reader landmark
                recognition and navigation efficiency.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Content Grouping</TableCell>
              <TableCell className="text-sm text-gray-600">
                Cross-semantic spacing authorized for accessibility compliance
                and logical content organization.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Focus Management</TableCell>
              <TableCell className="text-sm text-gray-600">
                Enhanced spacing for clear focus indication and navigation flow.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" rowSpan={3}>
                Motor Accessibility
              </TableCell>
              <TableCell className="font-medium">Touch Targets</TableCell>
              <TableCell className="text-sm text-gray-600">
                Larger interaction areas may require cross-semantic padding to
                meet 44px minimum requirements.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Spacing for Precision
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Touch target requirements override semantic size constraints for
                motor accessibility.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Error Prevention</TableCell>
              <TableCell className="text-sm text-gray-600">
                Adequate spacing between interactive elements to prevent
                accidental activation.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section id="escalation" className="mt-16">
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          Escalation Process
        </h2>

        <p className="text-base leading-relaxed mb-8">
          When existing guidelines don't cover your use case, follow this
          escalation process to maintain system integrity.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-orange-600" />
                When to Escalate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Systematic Patterns",
                    desc: "Cross-semantic usage that applies to multiple components or contexts",
                    priority: "high",
                  },
                  {
                    title: "Uncovered Requirements",
                    desc: "Functional requirements not addressed by existing templates",
                    priority: "high",
                  },
                  {
                    title: "Accessibility Gaps",
                    desc: "Accessibility needs that require new token relationships",
                    priority: "critical",
                  },
                  {
                    title: "System Conflicts",
                    desc: "Situations where guidelines conflict with user needs",
                    priority: "medium",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 border rounded-lg"
                  >
                    <Badge
                      variant={
                        item.priority === "critical"
                          ? "destructive"
                          : item.priority === "high"
                          ? "default"
                          : "secondary"
                      }
                      className="mt-0.5 text-xs"
                    >
                      {item.priority}
                    </Badge>
                    <div className="flex-1">
                      <div className="font-medium text-sm">{item.title}</div>
                      <div className="text-xs text-gray-600 mt-1">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Required Documentation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Essential Information
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Component family and specific context",
                      "Functional requirement driving the need",
                      "Proposed token usage with detailed justification",
                      "Impact assessment on system consistency",
                    ].map((item, index) => (
                      <label
                        key={index}
                        className="flex items-start gap-2 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Supporting Evidence
                  </h4>
                  <div className="space-y-2">
                    {[
                      "User research findings",
                      "Accessibility audit results",
                      "Comparative analysis with similar patterns",
                      "Implementation feasibility assessment",
                    ].map((item, index) => (
                      <label
                        key={index}
                        className="flex items-start gap-2 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">
                          {item}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Callout type="warning" title="Escalation Timeline">
          Escalations should be resolved within 2-3 business days. Critical
          accessibility issues take priority and may require immediate attention
          from the design system team.
        </Callout>
      </section>
    </PageLayout>
  );
}
