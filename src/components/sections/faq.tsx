import { Plus } from "lucide-react";
import { faqs } from "@/content/site";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section className="section faq" aria-labelledby="faq-heading">
      <div className="container faq-grid">
        <div>
          <SectionHeading
            id="faq-heading"
            eyebrow="BEFORE YOU SET OFF"
            title="A few things you might be wondering."
          />
          <p className="faq-note">
            Have something else in mind?
            <br />
            <a href="#contact">Ask Tharusha directly.</a>
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <Plus size={19} aria-hidden="true" />
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
