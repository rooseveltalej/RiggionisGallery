import React from "react";
import { H1 } from "./H1";

export const H1Examples: React.FC = () => {
  return (
    <div>
      <h2>H1 Component Examples</h2>

      <section>
        <h3>Basic usage</h3>
        <H1>My main title</H1>
      </section>

      <section>
        <h3>With custom class</h3>
        <H1 className="featured-title">Title with custom styling</H1>
      </section>

      <section>
        <h3>With ID for navigation</h3>
        <H1 id="main-title">Title with unique identifier</H1>
      </section>

      <section>
        <h3>With accessibility attributes</h3>
        <H1 aria-label="Main page title" role="banner">
          Accessible title
        </H1>
      </section>

      <section>
        <h3>With React content</h3>
        <H1>
          Title with <em>emphasis</em> and <strong>importance</strong>
        </H1>
      </section>
    </div>
  );
};

export const H1EdgeCasesExamples: React.FC = () => {
  return (
    <div>
      <h2>H1 Edge Cases</h2>

      <section>
        <h3>Cases that don't render (check console)</h3>
        <H1>{null}</H1>
        <H1>{undefined}</H1>
        <H1>{""}</H1>
        <H1>{"   "}</H1>
        <p>
          <em>The cases above should not display any H1</em>
        </p>
      </section>
    </div>
  );
};
