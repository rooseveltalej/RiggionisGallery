import React from "react";
import { H3 } from "./H3";

export const H3Examples: React.FC = () => {
  return (
    <div>
      <h2>H3 Component Examples</h2>

      <section>
        <h3>Basic usage</h3>
        <H3>My tertiary title</H3>
      </section>

      <section>
        <h3>With custom class</h3>
        <H3 className="featured-section">Section title with custom styling</H3>
      </section>

      <section>
        <h3>With ID for navigation</h3>
        <H3 id="section-title">Section title with unique identifier</H3>
      </section>

      <section>
        <h3>With accessibility attributes</h3>
        <H3 aria-label="Section page title" role="heading">
          Accessible section title
        </H3>
      </section>

      <section>
        <h3>With React content</h3>
        <H3>
          Section title with <em>emphasis</em> and <strong>importance</strong>
        </H3>
      </section>
    </div>
  );
};

export const H3EdgeCasesExamples: React.FC = () => {
  return (
    <div>
      <h2>H3 Edge Cases</h2>

      <section>
        <h3>Cases that don't render (check console)</h3>
        <H3>{null}</H3>
        <H3>{undefined}</H3>
        <H3>{""}</H3>
        <H3>{"   "}</H3>
        <p>
          <em>The cases above should not display any H3</em>
        </p>
      </section>
    </div>
  );
};
