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
    <PageLayout breadcrumbs={[{ label: "Page Layout" }]} title="Page Layout">
      <section id="responsive" className="mt-12">
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          Using Large Tokens for Page Layout
        </h2>

        <p className="text-base leading-relaxed mb-8">
          Large tokens (space-500 and up) are mainly used for page-level spacing
          - things like margins between major sections, container padding, and
          overall page structure. These create the big picture layout.
        </p>

        <div className="space-y-6">
          <div className="overflow-hidden border rounded">
            <div className="bg-gray-50 px-6 py-3 border-b">
              <h3 className="font-medium">Where Large Tokens Work Best</h3>
            </div>
            <div className="p-6 space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Layout Element</TableHead>
                    <TableHead>Token Range</TableHead>
                    <TableHead>What It Does</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Page container margins
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      space-400 to space-600
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Keeps content away from screen edges, creates breathing
                      room
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Section spacing
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      space-600 to space-1000
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Creates clear separation between major content areas
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Hero section padding
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      space-800 to space-1200
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Makes important content feel spacious and prominent
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Modal/dialog spacing
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      space-500 to space-800
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Separates modal content from screen edges and backdrop
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <Callout type="info" title="Components vs Layout">
            Small/medium tokens are for component internals (button padding,
            card spacing). Large tokens are for the bigger picture - how
            sections and containers relate to each other.
          </Callout>
        </div>
      </section>

      <section id="layout-patterns" className="mt-16">
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          Page Layout Spacing Patterns
        </h2>

        <p className="text-base leading-relaxed mb-8">
          Consistent spacing patterns for creating well-structured page layouts
          across all screen sizes. These patterns scale appropriately with your
          breakpoint system.
        </p>

        <div className="space-y-6">
          <div className="flex flex-row gap-4 w-full">
            <div className="bg-gray-50 p-6 rounded-lg w-1/2 flex-1">
              <h4 className="font-medium mb-4">Page Layout Structure</h4>
              <div className="flex justify-center">
                <div className="w-80 h-96 bg-white border-2 border-dashed border-blue-300 p-3 rounded-lg shadow-sm flex flex-col">
                  <div className="text-xs text-blue-600 mb-2 flex-shrink-0">
                    Page Container (outer padding)
                  </div>
                  <div className=" bg-blue-50 border border-blue-200 p-4 rounded flex flex-col flex-1 h-full">
                    <div className="text-xs text-blue-700 mb-3">
                      Main Content (horizontal + vertical padding)
                    </div>
                    <div className="flex-1 flex flex-col h-full gap-1">
                      <div className="bg-white border border-gray-200 p-3 rounded text-xs h-full flex flex-col justify-center">
                        <div className="font-medium">Content Block 1</div>
                        <div className="text-gray-500 mt-1">
                          consistent internal padding
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 text-center py-1">
                        ↕ block spacing
                      </div>
                      <div className="bg-white border border-gray-200 p-3 rounded text-xs h-full flex flex-col justify-center">
                        <div className="font-medium">Content Block 1</div>
                        <div className="text-gray-500 mt-1">
                          consistent internal padding
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 text-center py-1">
                        ↕ block spacing
                      </div>
                      <div className="bg-white border border-gray-200 p-3 rounded text-xs h-full flex flex-col justify-center">
                        <div className="font-medium">Content Block 1</div>
                        <div className="text-gray-500 mt-1">
                          consistent internal padding
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex-1">
              <h4 className="font-medium mb-4">
                Content Block Spacing Pattern
              </h4>
              <div className="bg-white border rounded-lg p-6 flex  h-96">
                <div className="relative">
                  {/* Top spacing indicator */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 bg-yellow-100 px-2 py-1 rounded">
                    space-400
                  </div>
                  {/* Left spacing indicator */}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 text-xs text-gray-500 bg-green-100 px-2 py-1 rounded">
                    space-500
                  </div>
                  {/* Right spacing indicator */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 text-xs text-gray-500 bg-purple-100 px-2 py-1 rounded">
                    space-650
                  </div>
                  {/* Bottom spacing indicator */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 bg-blue-100 px-2 py-1 rounded">
                    space-500
                  </div>
                  {/* Content block */}
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 p-8 text-center text-sm text-gray-600 h-full flex flex-col justify-center items-center">
                    Content Block
                    <div className="mt-2 text-xs">
                      <div className="text-gray-500 ">
                        Slightly more space on right for visual balance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden border rounded">
            <div className="bg-gray-50 px-6 py-3 border-b">
              <h4 className="font-medium">Container Hierarchy</h4>
            </div>
            <div className="p-6 space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Container Level</TableHead>
                    <TableHead>Spacing Approach</TableHead>
                    <TableHead>Purpose</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Page container
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Small-medium tokens for outer padding
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Creates consistent margins from screen edges
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Main content container
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Medium-large tokens for generous padding
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Provides comfortable reading space and content focus
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Content blocks gap
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Medium tokens for visual separation
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Clear distinction between major content sections
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="overflow-hidden border rounded">
            <div className="bg-gray-50 px-6 py-3 border-b">
              <h4 className="font-medium">Content Block Spacing Strategy</h4>
            </div>
            <div className="p-6 space-y-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Spacing Area</TableHead>
                    <TableHead>Approach</TableHead>
                    <TableHead>Rationale</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      Internal padding
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Asymmetric padding pattern
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Creates visual balance and optimal reading flow
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Vertical spacing
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Small-medium tokens consistently
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Maintains scannable content rhythm
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      Horizontal spacing
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Small tokens (100-300 range)
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      Keeps related elements visually connected
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <Callout type="info" title="Layout Consistency">
            These spacing patterns are used consistently across the platform, so
            try to respect them when possible.
          </Callout>
        </div>
      </section>
    </PageLayout>
  );
}
