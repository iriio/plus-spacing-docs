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
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

      <section id="definitions" className="mt-12">
        <h2 className="text-2xl font-medium tracking-tight mb-4">
          What Are Semantic and Cross-Semantic Tokens?
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-stretch mb-6">
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-base">Semantic Example</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <strong>Badge:</strong> Uses <code>space-small</code> for
                padding. Badges are small, so they use small space.
              </div>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardHeader>
              <CardTitle className="text-base">
                Cross-Semantic Example
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm">
                <strong>Button:</strong> Is usually small, but uses{" "}
                <code>space-200</code> (medium space) for padding. This makes it
                easier to tap, even though it is bigger than normal for a small
                button.
              </div>
            </CardContent>
          </Card>
        </div>
        <p className="text-base leading-relaxed mb-4">
          <strong>Semantic tokens</strong> are the sizes or colors you are
          supposed to use for each part, like the right padding for a badge.
        </p>
        <p className="text-base leading-relaxed mb-4">
          <strong>Cross-semantic token usage</strong> means using a size or
          color in a different way than usual, because you have a special reason
          (like making something easier to use).
        </p>
        <Card className="mb-0">
          <CardContent className="pt-6">
            <div className="text-base">
              <strong>In short:</strong>
              <div className="mt-2 space-y-1">
                <div>Semantic = use the size or color as the system says.</div>
                <div>
                  Cross-semantic = use a different size or color for a good
                  reason.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

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

            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h4 className="font-medium mb-4">
                Component Spacing Visualization
              </h4>
              <div className="flex justify-center">
                <div className="w-64 bg-white border-2 border-dashed border-gray-300 p-4 rounded-lg shadow-sm">
                  <div className="text-xs text-gray-600 mb-3 text-center">
                    Component Container
                  </div>
                  <div className="relative bg-blue-50 border border-blue-200 rounded p-3">
                    {/* Padding indicators */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 bg-yellow-100 px-1 py-0.5 rounded">
                      padding
                    </div>
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 text-xs text-gray-500 bg-green-100 px-1 py-0.5 rounded">
                      padding
                    </div>

                    <div className="space-y-2">
                      <div className="bg-white border border-gray-200 p-2 rounded text-xs text-center">
                        Element 1
                      </div>
                      <div className="text-xs text-gray-500 text-center">
                        ↕ gap spacing
                      </div>
                      <div className="bg-white border border-gray-200 p-2 rounded text-xs text-center">
                        Element 2
                      </div>
                      <div className="text-xs text-gray-500 text-center">
                        ↔ inline spacing
                      </div>
                      <div className="flex gap-2">
                        <div className="bg-white border border-gray-200 p-2 rounded text-xs text-center flex-1">
                          Button 1
                        </div>
                        <div className="bg-white border border-gray-200 p-2 rounded text-xs text-center flex-1">
                          Button 2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
          When is Cross-Semantic Usage Okay?
        </h2>

        <p className="text-base leading-relaxed mb-8">
          Sometimes you need to use a different size or color than what the
          system says. That's totally fine if you have a good reason—like making
          something easier to use, more readable, or more accessible.
        </p>

        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Is it okay?</TableHead>
              <TableHead>Why?</TableHead>
              <TableHead>Examples</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Yes</TableCell>
              <TableCell className="font-medium">
                Accessibility or usability
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Making buttons easier to tap, improving readability, helping
                screen readers, etc.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Yes</TableCell>
              <TableCell className="font-medium">Functional needs</TableCell>
              <TableCell className="text-sm text-gray-600">
                Grouping things, making layouts clearer, making forms easier to
                use, etc.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Yes, if...</TableCell>
              <TableCell className="font-medium">
                Aesthetic preference, but...
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                You have a clear reason, it doesn't break consistency, and it
                won't cause more design problems later.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">No</TableCell>
              <TableCell className="font-medium">
                Just because "it looks better" (with no reason)
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Changing things for style only, if it makes the system messy or
                inconsistent, or if it creates more work down the line.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">No</TableCell>
              <TableCell className="font-medium">
                Breaks consistency or creates design debt
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                One-off changes that don't fit with the rest, or that force
                other parts to change too.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section id="escalation" className="mt-16">
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          When to Ask for Help
        </h2>

        <p className="text-base leading-relaxed mb-8">
          Sometimes you'll run into something that doesn't fit any of our
          existing patterns. Here's when you should reach out to the design
          system team and what to include.
        </p>

        <h3 className="text-xl font-medium tracking-tight mb-4">
          These Things Definitely Need Review
        </h3>
        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Situation</TableHead>
              <TableHead>How Urgent</TableHead>
              <TableHead>Why We Need to Know</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                You Need This Pattern Everywhere
              </TableCell>
              <TableCell>
                <Badge variant="default" className="text-xs">
                  high
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                If you're going to use this spacing in lots of places, we should
                probably make it official
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Nothing We Have Works
              </TableCell>
              <TableCell>
                <Badge variant="default" className="text-xs">
                  high
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                You've tried all our templates and none of them solve your
                problem
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Accessibility Issues
              </TableCell>
              <TableCell>
                <Badge variant="destructive" className="text-xs">
                  critical
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                You can't make something accessible with our current tokens
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Rules Don't Make Sense
              </TableCell>
              <TableCell>
                <Badge variant="secondary" className="text-xs">
                  medium
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Following our guidelines would make the user experience worse
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <h3 className="text-xl font-medium tracking-tight mb-4">
          What to Tell Us
        </h3>
        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>✓</TableHead>
              <TableHead>What We Need</TableHead>
              <TableHead>How Important</TableHead>
              <TableHead>Why This Helps</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </TableCell>
              <TableCell className="font-medium">
                What component and where you're using it
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  must have
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                We need to understand the context to give good advice
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </TableCell>
              <TableCell className="font-medium">
                What you're trying to accomplish
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  must have
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Tell us what user need you're trying to solve
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </TableCell>
              <TableCell className="font-medium">
                What tokens you want to use and why
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  must have
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Show us your thinking so we can build on it
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </TableCell>
              <TableCell className="font-medium">
                How this might affect other things
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  must have
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Help us spot any unintended consequences
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </TableCell>
              <TableCell className="font-medium">
                Any user research or testing
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  nice to have
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Evidence that users actually need this change
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </TableCell>
              <TableCell className="font-medium">
                Accessibility testing results
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  nice to have
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Results from accessibility testing that justify the approach
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </TableCell>
              <TableCell className="font-medium">
                Comparative analysis with similar patterns
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  supporting
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                How similar components or patterns handle comparable
                requirements
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </TableCell>
              <TableCell className="font-medium">
                Implementation feasibility assessment
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="text-xs">
                  supporting
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Technical evaluation of the proposed implementation approach
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </PageLayout>
  );
}
