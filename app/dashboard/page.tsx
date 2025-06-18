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
        <Callout type="info" className="mb-0">
          <strong>In short:</strong> <br />
          <span className="block mt-1">
            Semantic = use the size or color as the system says.
          </span>
          <span>
            Cross-semantic = use a different size or color for a good reason.
          </span>
        </Callout>
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
    </PageLayout>
  );
}
