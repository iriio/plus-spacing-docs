import { PageLayout } from "@/components/page-layout"
import { Callout } from "@/components/callout"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <PageLayout breadcrumbs={[{ label: "Getting Started" }]} title="Design Token Usage Guidelines">
      <p className="text-xl text-slate-600 mb-8 leading-relaxed">
        Comprehensive guidelines for intelligent token selection that balances systematic consistency with functional
        excellence.
      </p>

      <Callout type="info" title="Quick Start">
        These guidelines help you select the right design tokens while maintaining system consistency and enabling
        optimal user experiences.
      </Callout>

      <section id="philosophy" className="mt-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Core Philosophy</h2>

        <p className="text-lg leading-relaxed mb-6">
          Our design system prioritizes <strong>functional excellence within systematic constraints</strong>. While
          semantic consistency is important, user experience and accessibility requirements take precedence when
          conflicts arise.
        </p>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Key Principles</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-medium">User-Centered Design</div>
                  <div className="text-sm text-slate-600">
                    Prioritize UX and accessibility over strict semantic adherence
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-medium">Systematic Flexibility</div>
                  <div className="text-sm text-slate-600">Maintain coherence while allowing thoughtful exceptions</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Framework Benefits</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-medium">Reduced Decision Fatigue</div>
                  <div className="text-sm text-slate-600">Clear guidelines eliminate guesswork</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <div className="font-medium">Enhanced Accessibility</div>
                  <div className="text-sm text-slate-600">Framework prioritizes accessibility requirements</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hierarchy" className="mt-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Token Selection Hierarchy</h2>

        <p className="text-lg leading-relaxed mb-8">
          Follow this hierarchy when selecting tokens for your components. Each level provides a fallback when the
          previous approach doesn't meet your functional requirements.
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-l-green-500 pl-6">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-green-500">1</Badge>
              <h3 className="text-xl font-semibold">Primary: Semantic Token Usage</h3>
            </div>
            <p className="mb-4">Always start with tokens that match your component's semantic size classification.</p>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="font-semibold text-green-800 mb-2">Small</div>
                <div className="text-sm text-green-700 mb-2">Compact components for dense layouts</div>
                <code className="text-xs bg-green-100 px-2 py-1 rounded">space-25 to space-150</code>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="font-semibold text-blue-800 mb-2">Medium</div>
                <div className="text-sm text-blue-700 mb-2">Standard components for typical interfaces</div>
                <code className="text-xs bg-blue-100 px-2 py-1 rounded">space-200 to space-400</code>
              </div>
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="font-semibold text-purple-800 mb-2">Large</div>
                <div className="text-sm text-purple-700 mb-2">Prominent components for emphasis</div>
                <code className="text-xs bg-purple-100 px-2 py-1 rounded">space-500 to space-1000</code>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-l-blue-500 pl-6">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-blue-500">2</Badge>
              <h3 className="text-xl font-semibold">Secondary: Component Templates</h3>
            </div>
            <p>
              When semantic tokens don't meet functional requirements, follow documented component family templates with
              pre-approved cross-semantic patterns.
            </p>
          </div>

          <div className="border-l-4 border-l-yellow-500 pl-6">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-yellow-500">3</Badge>
              <h3 className="text-xl font-semibold">Tertiary: Cross-Semantic Authorization</h3>
            </div>
            <p>
              Use tokens from different semantic categories when documented patterns support functional needs. Requires
              proper justification.
            </p>
          </div>

          <div className="border-l-4 border-l-red-500 pl-6">
            <div className="flex items-center gap-3 mb-3">
              <Badge className="bg-red-500">4</Badge>
              <h3 className="text-xl font-semibold">Final: Escalation</h3>
            </div>
            <p>
              For new patterns not covered by existing templates, document reasoning and escalate to the design system
              team.
            </p>
          </div>
        </div>
      </section>

      <section id="authorization" className="mt-16">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Cross-Semantic Usage Authorization</h2>

        <p className="text-lg leading-relaxed mb-8">
          Cross-semantic token usage is permitted when functional requirements take precedence over semantic
          consistency.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-700">✅ When Authorized</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Accessibility Requirements</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-green-500">•</span>
                    Touch target minimums (44px × 44px)
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">•</span>
                    Screen reader navigation needs
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">•</span>
                    Color contrast ratio adjustments
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Functional Requirements</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-green-500">•</span>
                    Content legibility needs
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">•</span>
                    Interactive element grouping
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500">•</span>
                    Visual hierarchy for comprehension
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-700">❌ When NOT Authorized</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Aesthetic Preferences</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    "It looks better" without justification
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Personal design preferences
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Arbitrary visual adjustments
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Consistency Breaking</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    One-off solutions that can't be systematized
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Patterns conflicting with established families
                  </li>
                  <li className="flex gap-2">
                    <span className="text-red-500">•</span>
                    Usage undermining system coherence
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
  )
}
