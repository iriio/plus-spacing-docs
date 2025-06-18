import { PageLayout } from "@/components/page-layout";
import { Callout } from "@/components/callout";
import { CodeBlock } from "@/components/code-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Users,
  Code2,
} from "lucide-react";

export default function Page() {
  return (
    <PageLayout
      breadcrumbs={[{ label: "Implementation Guide" }]}
      title="Implementation Guidelines"
    >
      <p className="text-base text-gray-600 mb-8 leading-relaxed">
        Practical guidance for implementing design token usage patterns in your
        design and development workflow.
      </p>

      <section id="decision-process" className="mt-12">
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          Token Selection Decision Process
        </h2>

        <p className="text-base leading-relaxed mb-8">
          Follow this step-by-step process to make informed token selection
          decisions:
        </p>

        <div className="space-y-6">
          {[
            {
              step: 1,
              title: "Identify Component Semantic Size",
              description:
                "Determine your component's primary semantic classification based on its role and context within the interface.",
              status: "start",
            },
            {
              step: 2,
              title: "Check Component Family Template",
              description:
                "Look for your component family in the documented templates. If found, follow the established patterns and cross-semantic authorizations.",
              status: "process",
            },
            {
              step: 3,
              title: "Evaluate Functional Requirements",
              description:
                "If no template exists, assess accessibility needs, usability requirements, and contextual constraints that may require cross-semantic usage.",
              status: "decision",
            },
            {
              step: 4,
              title: "Apply Cross-Semantic Logic",
              description:
                "If functional requirements conflict with semantic tokens, apply documented cross-semantic patterns with proper justification and documentation.",
              status: "process",
            },
            {
              step: 5,
              title: "Document and Validate",
              description:
                "Document your reasoning for cross-semantic usage and ensure the pattern can be systematized for similar use cases.",
              status: "complete",
            },
          ].map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      item.status === "complete"
                        ? "bg-green-100 text-green-800"
                        : item.status === "decision"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    {item.status === "decision" && (
                      <Badge variant="outline" className="text-xs">
                        Decision Point
                      </Badge>
                    )}
                    {item.status === "complete" && (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    )}
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
              {index < 4 && (
                <div className="ml-4 mt-4 mb-2">
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="guidelines" className="mt-16">
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          Role-Specific Guidelines
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                For Designers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="selection-process">
                  <AccordionTrigger className="text-left">
                    Token Selection Process
                  </AccordionTrigger>
                  <AccordionContent>
                    <ol className="list-decimal list-inside space-y-3 text-gray-600">
                      <li className="flex items-start gap-2">
                        <span className="min-w-0 flex-1">
                          Start with semantic tokens that match your component's
                          size classification
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="min-w-0 flex-1">
                          Check if a component family template exists for your
                          use case
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="min-w-0 flex-1">
                          If functional needs conflict with semantic tokens,
                          apply authorized cross-semantic patterns
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="min-w-0 flex-1">
                          Document any new cross-semantic usage with clear
                          functional reasoning
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="min-w-0 flex-1">
                          Propose new systematic patterns for design system team
                          review
                        </span>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="documentation">
                  <AccordionTrigger className="text-left">
                    Documentation Requirements
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {[
                        "Note component semantic size classification in design specs",
                        "List all tokens used with semantic category indicators",
                        "Provide functional justification for cross-semantic usage",
                        "Include accessibility requirements that influenced selection",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-green-600" />
                For Developers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="implementation">
                  <AccordionTrigger className="text-left">
                    Implementation Expectations
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {[
                        "Cross-semantic token usage is authorized when following documented guidelines",
                        "Challenge token selections that lack proper functional justification",
                        "Escalate new cross-semantic patterns that appear systematic in nature",
                        "Provide feedback on implementation constraints that affect token selection",
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="code-example">
                  <AccordionTrigger className="text-left">
                    Code Documentation Example
                  </AccordionTrigger>
                  <AccordionContent>
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
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="quality" className="mt-16">
        <h2 className="text-2xl font-medium tracking-tight mb-6">
          Quality Assurance Checklist
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-orange-600" />
                Design Review Checkpoints
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Does token selection follow established component family templates?",
                  "Is cross-semantic usage supported by documented functional requirements?",
                  "Are accessibility and usability needs properly addressed?",
                  "Can the token pattern be systematized for similar components?",
                  "Does the implementation maintain consistency within the component family?",
                ].map((item, index) => (
                  <label
                    key={index}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                System Health Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Track cross-semantic usage rates by component family",
                  "Identify emerging patterns that need template documentation",
                  "Monitor component consistency within established families",
                  "Assess functional outcome success through accessibility metrics",
                  "Review escalated patterns for potential system integration",
                ].map((item, index) => (
                  <label
                    key={index}
                    className="flex items-start gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Callout type="info" title="Quality Assurance Process" className="mt-8">
          Use these checklists during design reviews and system health
          assessments. Regular monitoring helps identify emerging patterns and
          ensures consistent application of design tokens across your system.
        </Callout>
      </section>
    </PageLayout>
  );
}
