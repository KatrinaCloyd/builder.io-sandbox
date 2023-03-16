
import { FunctionComponent } from 'react';

//register a custom component with Builder
import { Builder, BuilderBlocks, withChildren } from '@builder.io/react'


type Props = {
  readonly heading: string;
  readonly children?: any;
};

const CustSection:
FunctionComponent<Props> = ({heading, children}) => {

  return (
    <section className='custom-section'>
      <h2>{heading}</h2>
      <BuilderBlocks blocks={children} dataPath="children" />
    </section>
  )
}

export default CustSection;

const CustSectionChildren = withChildren(CustSection);

Builder.registerComponent(CustSectionChildren, { 
  name: 'Custom Section',
  inputs: [
    { name: 'heading', type: 'text', defaultValue: 'Placeholder Heading' },
  ],
  defaultChildren: [],
  childRequirements: {
    message: 'This section only accepts Custom Buttons as children.',
    query: {
      'component.name': { $in: ['Custom Button', 'Symbol', 'Responsive Image'] },
    },
  },
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/asterisk.png',
  screenshot: 'https://cdn.builder.io/api/v1/image/assets%2F01f88e29b8f3456ea8e2f4f117a8de29%2F2c7aee50cdc5421995d6e94f612cb688',
});

// register a custom component with Builder
// Builder.registerComponent(CustSection, { 
//   name: 'Custom Section',
//   inputs: [
//     { name: 'heading', type: 'text' },
//     { name: 'button', type: 'reference', model: 'Symbol', helperText: 'Use a custom button' }
//   ],
//   image: 'https://tabler-icons.io/static/tabler-icons/icons-png/asterisk.png'
// });