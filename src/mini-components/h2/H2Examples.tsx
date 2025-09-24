import React from "react";
import { H2 } from "./H2";

export const H2Examples: React.FC = () => {
  return (
    <div>
      <h2>H2 Component Examples</h2>

      <section>
        <h3>Basic usage</h3>
        <H2>My secondary title</H2>
      </section>

      <section>
        <h3>With custom class</h3>
        <H2 className="featured-subtitle">Subtitle with custom styling</H2>
      </section>

      <section>
        <h3>With ID for navigation</h3>
        <H2 id="main-subtitle">Subtitle with unique identifier</H2>
      </section>

      <section>
        <h3>With accessibility attributes</h3>
        <H2 aria-label="Secondary page title" role="heading">
          Accessible subtitle
        </H2>
      </section>

      <section>
        <h3>With React content</h3>
        <H2>
          Subtitle with <em>emphasis</em> and <strong>importance</strong>
        </H2>
      </section>
    </div>
  );
};

export const H2EdgeCasesExamples: React.FC = () => {
  return (
    <div>
      <h2>H2 Edge Cases</h2>

      <section>
        <h3>Cases that don't render (check console)</h3>
        <H2>{null}</H2>
        <H2>{undefined}</H2>
        <H2>{""}</H2>
        <H2>{"   "}</H2>
        <p>
          <em>The cases above should not display any H2</em>
        </p>
      </section>
    </div>
  );
};
