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
      <section id="button-family" className="mt-12">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            Button Family
          </h2>
          <p className="text-sm text-gray-600">
            works for: pagination, input fields, and similar clickable things
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
        </div>

        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Button Size</TableHead>
              <TableHead>What Part</TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Size Category</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={3}>
                Small
              </TableCell>
              <TableCell>side padding</TableCell>
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
              <TableCell>top/bottom padding</TableCell>
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
              <TableCell>side padding</TableCell>
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
              <TableCell>top/bottom padding</TableCell>
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
              <TableCell>side padding</TableCell>
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
              <TableCell>top/bottom padding</TableCell>
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

        <Callout type="info" title="Why This Works">
          Large buttons need bigger side padding so they're easier to click, but
          we keep the top/bottom padding small so they don't take up too much
          vertical space.
        </Callout>
      </section>

      <section id="badge-family" className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            Badge & Chip Family
          </h2>
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

        <Table className="mb-8">
          <TableHeader>
            <TableRow>
              <TableHead>Badge Size</TableHead>
              <TableHead>Token Property</TableHead>
              <TableHead>Token Value</TableHead>
              <TableHead>Semantic Category</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                Badge H1
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>gap</TableCell>
              <TableCell>space-400</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                Badge H2
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>gap</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                Badge H3
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>gap</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                Badge H4
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>gap</TableCell>
              <TableCell>space-200</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                Badge H5
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
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
              <TableCell className="font-medium" rowSpan={2}>
                Badge H6
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                  cross-semantic
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

            {/* Badge B1 */}
            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                Badge B1
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
              <TableCell>space-100</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>

            {/* Badge B2 */}
            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                Badge B2
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
              <TableCell>space-75</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>

            {/* Badge B3 */}
            <TableRow>
              <TableCell className="font-medium" rowSpan={2}>
                Badge B3
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
              <TableCell>space-50</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Callout type="info" title="Note">
          Badge spacing changes with font size.
        </Callout>
      </section>

      <section id="form-family" className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            Form & Input Family
          </h2>
        </div>
        <Callout type="info" title="Note">
          Input fields are similar to buttons, though this is listed separately
          because vertical spacings are used here.
        </Callout>
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
              <TableHead>Element Size</TableHead>
              <TableHead>Token Property</TableHead>
              <TableHead>Token Value</TableHead>
              <TableHead>Semantic Category</TableHead>
              <TableHead>Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* Small Input*/}
            <TableRow>
              <TableCell className="font-medium" rowSpan={4}>
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
              <TableCell>horizontal-gap</TableCell>
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
              <TableCell>vertical-gap</TableCell>
              <TableCell>space-50</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>

            {/* Medium Input*/}
            <TableRow>
              <TableCell className="font-medium" rowSpan={4}>
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
              <TableCell>horizontal-gap</TableCell>
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
              <TableCell>vertical-gap</TableCell>
              <TableCell>space-50</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>

            {/* Large Input*/}
            <TableRow>
              <TableCell className="font-medium" rowSpan={4}>
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
              <TableCell>horizontal-gap</TableCell>
              <TableCell>space-200</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100  text-orange-800">
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
            <TableRow>
              <TableCell>vertical-gap</TableCell>
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
      </section>

      <section id="modal-family" className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">Modals</h2>
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
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={3}>
                Modal Content, <br /> Modal Header, <br />
                Modal Button Group
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-300 </TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>horizontal-gap</TableCell>
              <TableCell>space-200 or space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>vertical-padding</TableCell>
              <TableCell>space-100</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                  cross-semantic
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      <section id="nav-family" className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            Navigation Tabs
          </h2>
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
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={3}>
                Tabs
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                  cross-semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>horizontal-gap</TableCell>
              <TableCell>space-300</TableCell>
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
      </section>

      <section id="alert-family" className="mt-16">
        <div className="mb-6">
          <h2 className="text-2xl font-medium tracking-tight mb-2">
            Alerts & Notifications
          </h2>
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
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium" rowSpan={4}>
                Alert Components
              </TableCell>
              <TableCell>horizontal-padding</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>horizontal-gap</TableCell>
              <TableCell>space-100</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                  cross-semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>vertical-padding</TableCell>
              <TableCell>space-300</TableCell>
              <TableCell>Medium</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                  semantic
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>vertical-gap</TableCell>
              <TableCell>space-50</TableCell>
              <TableCell>Small</TableCell>
              <TableCell>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-orange-100 text-orange-800">
                  cross-semantic
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </PageLayout>
  );
}
