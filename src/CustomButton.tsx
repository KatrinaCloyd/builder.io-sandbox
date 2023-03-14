import React, { FunctionComponent } from 'react';

//register a custom component with Builder
import { Builder } from '@builder.io/react';


type Props = {
  readonly href: string;
  readonly text?: string;
};

const CustButton:
FunctionComponent<Props> = ({
  href, text
}) => (

  <a
    className="Link"
    href={href}
  >
    {text || "Default Text"}
  </a>

);

export default CustButton;

//register a custom component with Builder

Builder.registerComponent(CustButton, { 
  name: 'Custom Button',
  inputs: [
    { name: 'href', friendlyName: 'Link URL', type: 'text', helperText: 'Link button navigates to.', required: true },
    { name: 'text', type: 'text', helperText: 'Text displayed on button.' }
  ],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/hand-click.png'
})