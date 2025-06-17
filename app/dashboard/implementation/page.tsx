import { PageLayout } from "@/components/page-layout"
import { CodeBlock } from "@/components/code-block"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <PageLayout breadcrumbs={[{ label: "Implementation" }]} title="Implementation Guidelines">
      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
        Practical guidance for designers and developers on implementing design token guidelines effectively.
      </p>

      <section id="decision-tree" className="mt-12">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Token Selection Decision Tree</h2>

        <p className="text-lg leading-relaxed mb-8">
          Follow this step-by-step process to make informed token selection decisions:
        </p>

        <div className="space-y-6">
          {[
            {
              step: 1,
              title: "Identify Component Semantic Size",
              description:
                "Determine your component's primary semantic classification based on its role and context within the interface.",
              color: "bg-blue-500",
            },
            {
              step: 2,
              title: "Check Component Family Template",
              description:
                "Look for your component family in the documented templates. If found, follow the established patterns and cross-semantic authorizations.",
              color: "bg-green-500",
            },
            {
              step: 3,
              title: "Evaluate Functional Requirements",
              description:
                "If no template exists, assess accessibility needs, usability requirements, and contextual constraints that may require cross-semantic usage.",
              color: "bg-yellow-500",
            },
            {
              step: 4,
              title: "Apply Cross-Semantic Logic",
              description:
                "If functional requirements conflict with semantic tokens, apply documented cross-semantic patterns with proper justification and documentation.",
              color: "bg-purple-500",
            },
            {
              step: 5,
              title: "Document and Validate",
              description:
                "Document your reasoning for cross-semantic usage and ensure the pattern can be systematized for similar use cases.",
              color: "bg-red-500",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4 p-6 border rounded-lg">
              <div
                className={`${item.color} text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0`}
              >
                {item.step}
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="guidelines" className="mt-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Role-Specific Guidelines</h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">For Designers</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Token Selection Process</h4>
                <ol className="list-decimal list-inside space-y-2 text-slate-600">
                  <li>Start with semantic tokens that match your component's size classification</li>
                  <li>Check if a component family template exists for your use case</li>
                  <li>If functional needs conflict with semantic tokens, apply authorized cross-semantic patterns</li>
                  <li>Document any new cross-semantic usage with clear functional reasoning</li>
                  <li>Propose new systematic patterns for design system team review</li>
                </ol>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Documentation Requirements</h4>
                <ul className="space-y-2">
                  <li className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      ✓
                    </Badge>
                    <span className="text-sm">Note component semantic size classification in design specs</span>
                  </li>
                  <li className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      ⚠️
                    </Badge>
                    <span className="text-sm">List all tokens used with semantic category indicators</span>
                  </li>
                  <li className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      📝
                    </Badge>
                    <span className="text-sm">Provide functional justification for cross-semantic usage</span>
                  </li>
                  <li className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      ♿
                    </Badge>
                    <span className="text-sm">Include accessibility requirements that influenced selection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">For Developers</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Implementation Expectations</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex gap-2">
                    <span className="text-green-500">•</span>
                    Cross-semantic token usage is authorized when following documented guidelines
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-500">•</span>
                    Challenge token selections that lack proper functional justification
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500">•</span>
                    Escalate new cross-semantic patterns that appear systematic in nature
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-500">•</span>
                    Provide feedback on implementation constraints that affect token selection
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Code Documentation Example</h4>
                <CodeBlock title="CSS Example" language="css">
                  {`/* Button Large: Cross-semantic H-padding for accessibility */
.btn-large {
  padding-left: var(--space-200);   /* Medium token for Small component */
  padding-right: var(--space-200);  /* Authorized for touch target requirements */
  padding-top: var(--space-100);    /* Semantic Small token maintained */
  padding-bottom: var(--space-100); /* Maintains compact vertical footprint */
}

/* Rationale: Accessibility requires larger horizontal spacing 
   than Small semantic size provides, while maintaining 
   compact vertical profile for layout efficiency */`}
                </CodeBlock>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quality" className="mt-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Quality Assurance</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Design Review Checkpoints</h3>
            <div className="space-y-3">
              {[
                "Does token selection follow established component family templates?",
                "Is cross-semantic usage supported by documented functional requirements?",
                "Are accessibility and usability needs properly addressed?",
                "Can the token pattern be systematized for similar components?",
                "Does the implementation maintain consistency within the component family?",
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-5 h-5 border-2 border-slate-300 rounded flex-shrink-0 mt-0.5"></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">System Health Monitoring</h3>
            <div className="space-y-3">
              {[
                "Track cross-semantic usage rates by component family",
                "Identify emerging patterns that need template documentation",
                "Monitor component consistency within established families",
                "Assess functional outcome success through accessibility metrics",
                "Review escalated patterns for potential system integration",
              ].map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="font-semibold text-green-800 mb-3">Success Indicators</h4>
            <ul className="space-y-2 text-sm text-green-700">
              <li>• Reduced design-development iteration cycles</li>
              <li>• Improved accessibility compliance scores</li>
              <li>• Increased designer confidence in token selection</li>
              <li>• Enhanced usability testing results</li>
            </ul>
          </div>
          <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-3">Warning Signs</h4>
            <ul className="space-y-2 text-sm text-red-700">
              <li>• Increasing cross-semantic usage without justification</li>
              <li>• Inconsistent patterns within component families</li>
              <li>• Frequent escalations for similar issues</li>
              <li>• Declining user experience metrics</li>
            </ul>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
