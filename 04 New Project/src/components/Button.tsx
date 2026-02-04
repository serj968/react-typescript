import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps =ComponentPropsWithoutRef<'button'> &  {
  href?: never; 
} ;

type AnchorProps =ComponentPropsWithoutRef<'a'> & {
  href?: string;
} ;

// Type guard to determine if props are for an anchor element
//Type predicate here as a return value type
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return ('href' in props);
}

export default function Button(props: ButtonProps | AnchorProps) {
  
  if (isAnchorProps(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
