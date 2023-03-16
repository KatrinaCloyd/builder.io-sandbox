/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from 'react';

//register a custom component with Builder
import { Builder } from '@builder.io/react';


type Props = {
  readonly url: string;
  readonly alt?: string;
};

const CustButton:
FunctionComponent<Props> = ({
  url, alt
}) => {
  console.log('img', url)
  
  return(
  <img 
    className='Image'
    src={url}
    alt={alt}
  />
);
  }

export default CustButton;

//register a custom component with Builder

Builder.registerComponent(CustButton, { 
  name: 'Responsive Image',
  inputs: [
    { name: 'url', type: 'file', helperText: 'Link to Image', required: true, allowedFileTypes: ['png', 'jpg'] },
    { name: 'alt', type: 'text', helperText: 'Alt text to describe image.' }
  ],
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/photo.png'
})