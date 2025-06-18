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
        Here's how to pick the right design tokens for your components. It's
        like a step-by-step guide that gets you unstuck when your first choice
        doesn't work.
      </p>

      <section id="hierarchy-overview" className="mb-12">
        <h2 className="text-2xl font-medium mb-4">How to Pick Tokens</h2>
        <p className="mb-6">
          Start at the top and work your way down. If one approach doesn't work
          for what you need, try the next one.
        </p>

        <div className="space-y-6">
          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-2">
              Step 1: Try Semantic Tokens First
            </h3>
            <div className="space-y-4">
              <p className="mb-4">
                Always start with tokens that match your component's size. Small
                components get small tokens, big components get big tokens.
              </p>

              <h4 className="text-base font-medium mb-3">Component Sizes:</h4>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Size</TableHead>
                    <TableHead>What it's for</TableHead>
                    <TableHead>Token Range</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Small</TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Tiny stuff that doesn't need much space
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
                      Normal stuff you see everywhere
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
                      Big important things that stand out
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
              Step 2: Check if There's Already a Template
            </h3>
            <p>
              If the semantic tokens don't work, see if we already have a
              template for your type of component. These are pre-made patterns
              that we know work well.
            </p>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-2">
              Step 3: Use Cross-Semantic if You Have a Good Reason
            </h3>
            <p>
              Sometimes you need to break the rules for accessibility or
              usability. That's okay! Just make sure you have a good reason and
              write it down.
            </p>
          </div>

          <div className="border rounded p-6">
            <h3 className="text-lg font-medium mb-2">Step 4: Ask for Help</h3>
            <p>
              If none of the above work, write down what you're trying to do and
              why, then ask the design system team. We might make a new pattern
              for everyone to use.
            </p>
          </div>
        </div>
      </section>

      <section id="selection-process" className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Quick Process</h2>
        <div className="space-y-6">
          <div className="pl-4">
            <h3 className="font-medium mb-2">
              Figure out what your component is
            </h3>
            <p className="text-gray-600">
              Is it small, medium, or large? What's it used for?
            </p>
          </div>
          <div className="pl-4">
            <h3 className="font-medium mb-2">Pick the right size category</h3>
            <p className="text-gray-600">
              Small components use small tokens, etc.
            </p>
          </div>
          <div className="pl-4">
            <h3 className="font-medium mb-2">Try the semantic tokens</h3>
            <p className="text-gray-600">
              Use the tokens that match your component's size.
            </p>
          </div>
          <div className="pl-4">
            <h3 className="font-medium mb-2">Check if it works for users</h3>
            <p className="text-gray-600">
              If it's hard to use or not accessible, try the next step in the
              hierarchy.
            </p>
          </div>
          <div className="pl-4">
            <h3 className="font-medium mb-2">Write down what you did</h3>
            <p className="text-gray-600">
              Especially if you had to break the rules - explain why.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
