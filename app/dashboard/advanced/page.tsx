import { PageLayout } from "@/components/page-layout"
import { Callout } from "@/components/callout"
import { CodeBlock } from "@/components/code-block"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <PageLayout breadcrumbs={[{ label: "Advanced" }]} title="Advanced Scenarios">
      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
        Complex use cases and advanced patterns for design token usage in challenging contexts.
      </p>

      <section id="responsive" className="mt-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Responsive Token Usage</h2>

        <p className="text-lg leading-relaxed mb-8">
          Components may need different semantic approaches across breakpoints to optimize user experience on various
          devices.
        </p>

        <div className="space-y-6">
          <div className="overflow-hidden border rounded-lg">
            <div className="bg-slate-50 px-6 py-3 border-b">
              <h3 className="font-semibold">Responsive Pattern Example</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      Mobile
                    </Badge>
                    <span className="text-sm text-slate-600">&lt; 768px</span>
                  </div>
                  <p className="text-sm mb-2">Small semantic size with Medium H-padding for touch accessibility</p>
                  <code className="text-xs bg-blue-100 px-2 py-1 rounded block">H-padding: space-200 (Medium)</code>
                </div>
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      Tablet
                    </Badge>
                    <span className="text-sm text-slate-600">768px - 1024px</span>
                  </div>
                  <p className="text-sm mb-2">Small semantic size with semantic tokens</p>
                  <code className="text-xs bg-green-100 px-2 py-1 rounded block">H-padding: space-100 (Small)</code>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      Desktop
                    </Badge>
                    <span className="text-sm text-slate-600">&gt; 1024px</span>
                  </div>
                  <p className="text-sm mb-2">Small semantic size with semantic tokens</p>
                  <code className="text-xs bg-purple-100 px-2 py-1 rounded block">H-padding: space-100 (Small)</code>
                </div>
              </div>
            </div>
          </div>

          <Callout type="info" title="Authorization">
            Cross-semantic usage authorized for responsive accessibility needs. Touch targets on mobile require larger
            interaction areas regardless of semantic classification.
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
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Accessibility Override Patterns</h2>

        <p className="text-lg leading-relaxed mb-8">
          Specific accessibility requirements that may necessitate cross-semantic token usage.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Screen Reader Navigation</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Landmark Recognition</h4>
                <p className="text-sm text-slate-600">
                  Additional spacing may be required for screen reader landmark recognition and navigation efficiency.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Content Grouping</h4>
                <p className="text-sm text-slate-600">
                  Cross-semantic spacing authorized for accessibility compliance and logical content organization.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Focus Management</h4>
                <p className="text-sm text-slate-600">
                  Enhanced spacing for clear focus indication and navigation flow.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Motor Accessibility</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Touch Targets</h4>
                <p className="text-sm text-slate-600">
                  Larger interaction areas may require cross-semantic padding to meet 44px minimum requirements.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Spacing for Precision</h4>
                <p className="text-sm text-slate-600">
                  Touch target requirements override semantic size constraints for motor accessibility.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Error Prevention</h4>
                <p className="text-sm text-slate-600">
                  Adequate spacing between interactive elements to prevent accidental activation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="escalation" className="mt-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Escalation Process</h2>

        <p className="text-lg leading-relaxed mb-8">
          When existing guidelines don't cover your use case, follow this escalation process to maintain system
          integrity.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">When to Escalate</h3>
            <div className="space-y-3">
              {[
                {
                  title: "Systematic Patterns",
                  desc: "Cross-semantic usage that applies to multiple components or contexts",
                },
                {
                  title: "Uncovered Requirements",
                  desc: "Functional requirements not addressed by existing templates",
                },
                { title: "Accessibility Gaps", desc: "Accessibility needs that require new token relationships" },
                { title: "System Conflicts", desc: "Situations where guidelines conflict with user needs" },
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-slate-600">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Required Documentation</h3>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border rounded-lg">
                <h4 className="font-medium mb-2">Essential Information</h4>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• Component family and specific context</li>
                  <li>• Functional requirement driving the need</li>
                  <li>• Proposed token usage with detailed justification</li>
                  <li>• Impact assessment on system consistency</li>
                </ul>
              </div>
              <div className="p-4 bg-slate-50 border rounded-lg">
                <h4 className="font-medium mb-2">Supporting Evidence</h4>
                <ul className="text-sm space-y-1 text-slate-600">
                  <li>• User research findings</li>
                  <li>• Accessibility audit results</li>
                  <li>• Comparative analysis with similar patterns</li>
                  <li>• Implementation feasibility assessment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="metrics" className="mt-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Success Metrics</h2>

        <p className="text-lg leading-relaxed mb-8">
          Measuring the effectiveness of our design token guidelines and their impact on system health and user
          experience.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">System Health Dashboard</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  Positive Indicators
                </h4>
                <div className="space-y-3">
                  {[
                    "Increased designer confidence in token selection",
                    "Reduced design-development iteration cycles",
                    "Improved accessibility compliance scores",
                    "Enhanced usability testing results",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-green-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  Warning Signs
                </h4>
                <div className="space-y-3">
                  {[
                    "Increasing cross-semantic usage without justification",
                    "Inconsistent patterns within component families",
                    "Frequent escalations for similar issues",
                    "Declining user experience metrics",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-red-700">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Guidelines Effectiveness</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Key Questions</h4>
                <div className="space-y-2">
                  {[
                    "Are component families maintaining consistency within their templates?",
                    "Is cross-semantic usage solving real functional problems?",
                    "Are new patterns emerging that need template documentation?",
                    "Is the system serving both consistency and user experience goals?",
                  ].map((question, index) => (
                    <div key={index} className="flex gap-2 text-sm">
                      <span className="text-blue-500 font-bold">?</span>
                      <span>{question}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-3">Success Criteria</h4>
                <div className="space-y-2">
                  {[
                    "90%+ of components follow established patterns",
                    "Cross-semantic usage has documented functional justification",
                    "Accessibility compliance meets or exceeds standards",
                    "User satisfaction scores improve over time",
                  ].map((criteria, index) => (
                    <div key={index} className="flex gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span>{criteria}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Callout type="success" title="Framework Benefits">
            This framework ensures our design system evolves intelligently, maintaining systematic integrity while
            enabling optimal user experiences through thoughtful flexibility. By balancing consistency with functional
            excellence, we create a sustainable approach to design token usage that serves both designers and users
            effectively.
          </Callout>
        </div>
      </section>
    </PageLayout>
  )
}
