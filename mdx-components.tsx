import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => <h1 className="post-title" {...props} />,
  h2: (props) => <h2 className="post-heading" {...props} />,
  h3: (props) => <h3 className="post-subheading" {...props} />,
  p: (props) => <p className="post-paragraph" {...props} />,
  ul: (props) => <ul className="post-list" {...props} />,
  ol: (props) => <ol className="post-list" {...props} />,
  blockquote: (props) => <blockquote className="post-quote" {...props} />,
  code: (props) => <code className="post-code" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
