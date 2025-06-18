import { PageLayout } from "@/components/page-layout";

export default function Page() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: "Getting Started", href: "/dashboard" },
        { label: "Cross-Semantic Authorization" },
      ]}
      title="Cross-Semantic Usage Authorization"
    >
      <p className="text-base text-gray-600 mb-8">
        Guidelines for when and how to use design tokens outside their semantic
        classification, with proper justification and documentation.
      </p>

      <section id="when-authorized" className="mb-12">
        <h2 className="text-2xl font-medium mb-4">
          When Cross-Semantic Usage is Authorized
        </h2>
        <p className="mb-6">
          Cross-semantic token usage is permitted when functional requirements
          take precedence over semantic consistency. The following scenarios
          justify this approach:
        </p>

        <div className="space-y-6">
          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-4">
              Accessibility Requirements
            </h3>
            <ul className="space-y-3">
              <li className="pl-4">
                <strong>Touch target minimums (44px × 44px)</strong> require
                larger tokens regardless of semantic size
              </li>
              <li className="pl-4">
                <strong>Screen reader navigation</strong> needs may require
                adjusted spacing for landmark recognition
              </li>
              <li className="pl-4">
                <strong>Color contrast ratios</strong> may need spacing
                adjustments to maintain readability
              </li>
            </ul>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-4">
              Functional Requirements
            </h3>
            <ul className="space-y-3">
              <li className="pl-4">
                <strong>Content legibility needs</strong> - minimum text
                breathing room for readability
              </li>
              <li className="pl-4">
                <strong>Interactive element grouping</strong> and separation for
                clear user understanding
              </li>
              <li className="pl-4">
                <strong>Visual hierarchy</strong> that serves user comprehension
                and task completion
              </li>
              <li className="pl-4">
                <strong>Responsive behavior</strong> across different
                breakpoints and screen sizes
              </li>
            </ul>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-4">Context-Specific Needs</h3>
            <ul className="space-y-3">
              <li className="pl-4">
                <strong>Modal and overlay</strong> spatial relationships for
                proper focus management
              </li>
              <li className="pl-4">
                <strong>Navigation usability</strong> requirements for efficient
                user movement
              </li>
              <li className="pl-4">
                <strong>Form input practical sizing</strong> for comfortable
                data entry
              </li>
              <li className="pl-4">
                <strong>Data visualization clarity</strong> for accurate
                information interpretation
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="when-not-authorized" className="mb-12">
        <h2 className="text-2xl font-medium mb-4">
          When Cross-Semantic Usage is NOT Authorized
        </h2>
        <p className="mb-6">
          The following reasons do not justify cross-semantic token usage and
          should be avoided:
        </p>

        <div className="space-y-4">
          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-4">Aesthetic Preferences</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>"It looks better" without functional justification</li>
              <li>Personal design preferences without user benefit</li>
              <li>Arbitrary visual adjustments for stylistic reasons</li>
              <li>Trend-following without systematic consideration</li>
            </ul>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-4">Consistency Breaking</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li>One-off solutions that can't be systematized</li>
              <li>
                Patterns that conflict with established component families
              </li>
              <li>Usage that undermines overall system coherence</li>
              <li>Shortcuts that bypass proper evaluation processes</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="authorization-process" className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Authorization Process</h2>
        <p className="mb-6">
          Follow this process when considering cross-semantic token usage:
        </p>

        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-medium mb-2">Identify the Functional Need</h3>
            <p className="text-gray-600">
              Clearly articulate why semantic tokens don't meet the requirement.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-medium mb-2">Check Authorization Categories</h3>
            <p className="text-gray-600">
              Ensure your need falls into one of the authorized categories
              above.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-medium mb-2">Document the Justification</h3>
            <p className="text-gray-600">
              Record the functional requirement and how cross-semantic usage
              addresses it.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-medium mb-2">Consider Systematization</h3>
            <p className="text-gray-600">
              Evaluate if this pattern could apply to similar components
              system-wide.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded">
            <h3 className="font-medium mb-2">Implement and Monitor</h3>
            <p className="text-gray-600">
              Apply the cross-semantic pattern and track its effectiveness over
              time.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
