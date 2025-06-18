import { PageLayout } from "@/components/page-layout";
import { Callout } from "@/components/callout";
import { TokenExample } from "@/components/token-example";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Page() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Component Templates" }]}
      title="Component Family Templates"
    >
      <p className="text-md text-slate-600 mb-8 leading-relaxed">
        Pre-approved cross-semantic token patterns for common component
        families, with documented rationale and usage guidelines.
      </p>

      <section id="button-family" className="mt-12">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Button Family
          </h2>
          <div className="flex gap-2">
            <Badge variant="outline">Small Components</Badge>
            <Badge variant="secondary">Cross-semantic Authorized</Badge>
          </div>
        </div>
        <div className="mb-8">
          <Image
            src="/BUTTON.png"
            alt="Button Family Example"
            width={1000}
            height={400}
            className="rounded-lg border border-slate-200"
          />
          <Callout type="info" title="Rationale">
            For components that are similar to or should visually behave like
            Buttons, use the following tokens:
          </Callout>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Small</h3>
            <div className="space-y-3">
              <TokenExample
                token="horizontal-padding: space-100"
                value="Small"
                type="semantic"
                description=""
              />
              <TokenExample
                token="gap: space-100"
                value="Small"
                type="semantic"
                description=""
              />
              <TokenExample
                token="vertical-padding: space-50"
                value="Small"
                type="semantic"
                description=""
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Medium</h3>
            <div className="space-y-3">
              <TokenExample
                token="horizontal-padding: space-150"
                value="Small"
                type="semantic"
                description=""
              />
              <TokenExample
                token="gap: space-150"
                value="Small"
                type="semantic"
                description=""
              />
              <TokenExample
                token="vertical-padding: space-75"
                value="Small"
                type="semantic"
                description=""
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Large</h3>
            <div className="space-y-3">
              <TokenExample
                token="horizontal-padding: space-200"
                value="Medium"
                type="cross-semantic"
                description=""
              />
              <TokenExample
                token="gap: space-200"
                value="Medium"
                type="cross-semantic"
                description=""
              />
              <TokenExample
                token="vertical-padding: space-100"
                value="Small"
                type="semantic"
                description=""
              />
            </div>
          </div>

          <Callout type="info" title="Rationale">
            Button accessibility requires larger horizontal spacing than Small
            semantic size provides, while maintaining compact vertical profile
            for layout efficiency.
          </Callout>
        </div>
      </section>

      <section id="badge-family" className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Badge & Chip Family
          </h2>
          <div className="flex gap-2">
            <Badge variant="outline">Small</Badge>
            <Badge variant="secondary">Limited Authorization</Badge>
          </div>
        </div>
        <div className="mb-8">
          <Image
            src="/placeholder.jpg"
            alt="Badge & Chip Family Example"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">
              All Badge & Chip Variants
            </h3>
            <div className="space-y-3">
              <TokenExample
                token="padding-inline: space-200 to space-300"
                value="Medium"
                type="cross-semantic"
                description="Cross-semantic authorized for text legibility"
              />
              <TokenExample
                token="padding-block: space-75"
                value="Small"
                type="semantic"
                description="Semantic tokens preferred for vertical spacing"
              />
            </div>
          </div>

          <Callout type="info" title="Rationale">
            Text within badges requires sufficient horizontal breathing room for
            readability, especially at small font sizes.
          </Callout>
        </div>
      </section>

      <section id="form-family" className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Form Elements Family
          </h2>
          <div className="flex gap-2">
            <Badge variant="outline">Small to Medium</Badge>
            <Badge variant="secondary">Contextual Authorization</Badge>
          </div>
        </div>
        <div className="mb-8">
          <Image
            src="/placeholder.jpg"
            alt="Form Elements Family Example"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Input Fields</h3>
            <div className="space-y-3">
              <TokenExample
                token="padding-inline: space-150 to space-200"
                value="Small to Medium"
                type="cross-semantic"
                description="May use Medium tokens for content comfort"
              />
              <TokenExample
                token="padding-block: space-75 to space-100"
                value="Small"
                type="semantic"
                description="Semantic match preferred for vertical spacing"
              />
            </div>
          </div>

          <Callout type="info" title="Rationale">
            Form usability requires adequate space for content entry and label
            association, often exceeding Small semantic constraints.
          </Callout>
        </div>
      </section>

      <section id="modal-family" className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Modal Family
          </h2>
          <div className="flex gap-2">
            <Badge variant="outline">Medium to Large</Badge>
            <Badge variant="secondary">Context Authorization</Badge>
          </div>
        </div>
        <div className="mb-8">
          <Image
            src="/placeholder.jpg"
            alt="Modal Family Example"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Modal Components</h3>
            <div className="space-y-3">
              <TokenExample
                token="padding-inline: space-300 to space-400"
                value="Medium to Large"
                type="cross-semantic"
                description="Cross-semantic authorized for content hierarchy"
              />
              <TokenExample
                token="padding-block: space-200 to space-300"
                value="Medium"
                type="cross-semantic"
                description="Cross-semantic authorized for modal breathing room"
              />
            </div>
          </div>

          <Callout type="info" title="Rationale">
            Modal contexts require enhanced spatial relationships for content
            hierarchy and user focus, often requiring tokens larger than
            component semantic size.
          </Callout>
        </div>
      </section>

      <section id="nav-family" className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Navigation Family
          </h2>
          <div className="flex gap-2">
            <Badge variant="outline">Small</Badge>
            <Badge variant="secondary">Accessibility Authorization</Badge>
          </div>
        </div>
        <div className="mb-8">
          <Image
            src="/placeholder.jpg"
            alt="Navigation Family Example"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Nav Items</h3>
            <div className="space-y-3">
              <TokenExample
                token="padding-inline: space-200 to space-300"
                value="Medium"
                type="cross-semantic"
                description="Cross-semantic authorized for touch targets"
              />
              <TokenExample
                token="padding-block: space-100"
                value="Small"
                type="semantic"
                description="Semantic match for compact navigation"
              />
            </div>
          </div>

          <Callout type="info" title="Rationale">
            Navigation requires larger interaction areas for usability, while
            maintaining compact vertical profile for layout efficiency.
          </Callout>
        </div>
      </section>

      <section id="alert-family" className="mt-16">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl font-semibold tracking-tight">
            Alert & Notification Family
          </h2>
          <div className="flex gap-2">
            <Badge variant="outline">Medium</Badge>
            <Badge variant="default">Semantic Match</Badge>
          </div>
        </div>
        <div className="mb-8">
          <Image
            src="/placeholder.jpg"
            alt="Alert & Notification Family Example"
            width={800}
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Alert Components</h3>
            <div className="space-y-3">
              <TokenExample
                token="padding-inline: space-300"
                value="Medium"
                type="semantic"
                description="Semantic match for horizontal spacing"
              />
              <TokenExample
                token="padding-block: space-200"
                value="Medium"
                type="semantic"
                description="Semantic match for vertical spacing"
              />
            </div>
          </div>

          <Callout type="success" title="Rationale">
            Alert components use semantic Medium tokens for proper prominence
            and readability in notification contexts.
          </Callout>
        </div>
      </section>
    </PageLayout>
  );
}
