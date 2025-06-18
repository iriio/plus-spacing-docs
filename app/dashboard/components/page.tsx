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

export default function Page() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Component Templates" }]}
      title="Component Family Templates"
    >
      <p className="text-base text-gray-600 mb-8 leading-relaxed">
        Pre-approved cross-semantic token patterns for common component
        families, with documented rationale and usage guidelines.
      </p>

      <section id="button-family" className="mt-12">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            Button Family
          </h2>
          <p className="text-sm text-gray-600">
            Small Components - Cross-semantic Authorized
          </p>
        </div>
        <div className="mb-8">
          <Image
            src={getImagePath("/BUTTON.png")}
            alt="Button Family Example"
            width={1000}
            height={400}
            className="rounded border border-gray-200"
          />
          <Callout type="info" title="Rationale">
            For components that are similar to or should visually behave like
            Buttons, use the following tokens:
          </Callout>
        </div>

        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Button Size</TableHead>
              <TableHead>Token Property</TableHead>
              <TableHead>Token Value</TableHead>
              <TableHead>Semantic Category</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={3}>
                Small
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-100</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>gap</TableCell>
              <TableCell>space-100</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>vertical-padding</TableCell>
              <TableCell>space-50</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" rowSpan={3}>
                Medium
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-150</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>gap</TableCell>
              <TableCell>space-150</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>vertical-padding</TableCell>
              <TableCell>space-75</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium" rowSpan={3}>
                Large
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-200</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                  cross-semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>gap</TableCell>
              <TableCell>space-200</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                  cross-semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>vertical-padding</TableCell>
              <TableCell>space-100</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Callout type="info" title="Rationale">
          Button accessibility requires larger horizontal spacing than Small
          semantic size provides, while maintaining compact vertical profile for
          layout efficiency.
        </Callout>
      </section>

      <section id="badge-family" className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            Badge & Chip Family
          </h2>
          <p className="text-sm text-gray-600">Small - Limited Authorization</p>
        </div>
        <div className="mb-8">
          <Image
            src={getImagePath("/badge.png")}
            alt="Badge & Chip Family Example"
            width={1000}
            height={400}
            className="rounded border border-slate-200"
          />
        </div>

        <Table className="mb-6">
          <TableHeader>
            <TableRow>
              <TableHead>Component Variant</TableHead>
              <TableHead>Token Property</TableHead>
              <TableHead>Token Value</TableHead>
              <TableHead>Semantic Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                All Badge & Chip Variants
              </TableCell>
              <TableCell>padding-inline</TableCell>
              <TableCell>space-200 to space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                  cross-semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Cross-semantic authorized for text legibility
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>padding-block</TableCell>
              <TableCell>space-75</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Semantic tokens preferred for vertical spacing
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Callout type="info" title="Rationale">
          Text within badges requires sufficient horizontal breathing room for
          readability, especially at small font sizes.
        </Callout>
      </section>

      <section id="form-family" className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            Form Elements Family
          </h2>
          <p className="text-sm text-gray-600">
            Small to Medium - Contextual Authorization
          </p>
        </div>
        <div className="mb-8">
          <Image
            src={getImagePath("/fields.png")}
            alt="Form Elements Family Example"
            width={1000}
            height={400}
            className="rounded border border-slate-200"
          />
        </div>

        <Table className="mb-6">
          <TableHeader>
            <TableRow>
              <TableHead>Form Element</TableHead>
              <TableHead>Token Property</TableHead>
              <TableHead>Token Value</TableHead>
              <TableHead>Semantic Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                Input Fields
              </TableCell>
              <TableCell>padding-inline</TableCell>
              <TableCell>space-150 to space-200</TableCell>
              <TableCell>Small to Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                  cross-semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                May use Medium tokens for content comfort
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>padding-block</TableCell>
              <TableCell>space-75 to space-100</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Semantic tokens for vertical spacing
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Callout type="info" title="Rationale">
          Form inputs need adequate horizontal spacing for comfortable text
          entry and clear visual boundaries.
        </Callout>
      </section>

      <section id="modal-family" className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            Modal Family
          </h2>
          <p className="text-sm text-gray-600">
            Medium to Large - Context Authorization
          </p>
        </div>
        <div className="mb-8">
          <Image
            src={getImagePath("/modal.png")}
            alt="Modal Family Example"
            width={1000}
            height={400}
            className="rounded border border-slate-200"
          />
        </div>

        <Table className="mb-6">
          <TableHeader>
            <TableRow>
              <TableHead>Modal Element</TableHead>
              <TableHead>Token Property</TableHead>
              <TableHead>Token Value</TableHead>
              <TableHead>Semantic Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Context</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={4}>
                Modal Content
              </TableCell>
              <TableCell>padding</TableCell>
              <TableCell>space-400 to space-600</TableCell>
              <TableCell>Medium to Large</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Standard modal sizes
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>gap</TableCell>
              <TableCell>space-300 to space-400</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Content section spacing
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>margin-bottom</TableCell>
              <TableCell>space-200</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Element separation
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>border-radius</TableCell>
              <TableCell>space-100</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                  cross-semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Visual consistency with system
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Callout type="info" title="Context Authorization">
          Modal spacing can use Large semantic tokens for enhanced focus and
          readability in overlay contexts.
        </Callout>
      </section>

      <section id="nav-family" className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            Navigation Family
          </h2>
          <p className="text-sm text-gray-600">
            Small - Accessibility Authorization
          </p>
        </div>
        <div className="mb-8 bg-slate-100">
          <Image
            src={getImagePath("/tabs.png")}
            alt="Navigation Family Example"
            width={1000}
            height={400}
            className="rounded border border-slate-200"
          />
        </div>

        <Table className="mb-6">
          <TableHeader>
            <TableRow>
              <TableHead>Navigation Element</TableHead>
              <TableHead>Token Property</TableHead>
              <TableHead>Token Value</TableHead>
              <TableHead>Semantic Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                Nav Items
              </TableCell>
              <TableCell>padding-inline</TableCell>
              <TableCell>space-200 to space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                  cross-semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Cross-semantic authorized for touch targets
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>padding-block</TableCell>
              <TableCell>space-100</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Semantic match for compact navigation
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Callout type="info" title="Rationale">
          Navigation requires larger interaction areas for usability, while
          maintaining compact vertical profile for layout efficiency.
        </Callout>
      </section>

      <section id="alert-family" className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            Alert & Notification Family
          </h2>
          <p className="text-sm text-gray-600">Medium - Semantic Match</p>
        </div>
        <div className="mb-8">
          <Image
            src={getImagePath("/alert.png")}
            alt="Alert & Notification Family Example"
            width={1000}
            height={400}
            className="rounded border border-slate-200"
          />
        </div>

        <Table className="mb-6">
          <TableHeader>
            <TableRow>
              <TableHead>Alert Element</TableHead>
              <TableHead>Token Property</TableHead>
              <TableHead>Token Value</TableHead>
              <TableHead>Semantic Category</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                Alert Components
              </TableCell>
              <TableCell>padding-inline</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Semantic match for horizontal spacing
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>padding-block</TableCell>
              <TableCell>space-200</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                Semantic match for vertical spacing
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Callout type="success" title="Rationale">
          Alert components use semantic Medium tokens for proper prominence and
          readability in notification contexts.
        </Callout>
      </section>
    </PageLayout>
  );
}
