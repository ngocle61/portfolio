export interface TruncatedTextProps {
  text: string;
  className?: string;
  // The element to render, so the text can sit inside a button or another inline element.
  as?: 'p' | 'span';
}
