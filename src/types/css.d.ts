// CSS Module Type Declarations
// This file tells TypeScript to allow importing CSS files

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

// Allow side-effect CSS imports (import "./file.css")
declare module "*.css" {
  const content: any;
  export = content;
}
