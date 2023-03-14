import { FunctionComponent } from 'react';

//register a custom component with Builder
import { Builder, withChildren } from '@builder.io/react'


type Props = {
  readonly heading: string;
  readonly button?: any;
  readonly children?: any;
};

const CustSection:
FunctionComponent<Props> = ({
    heading, children
}) => {

  return (
    <section className='custom-section'>
      <h2>{heading}</h2>
      {children}
    </section>
  )
}

export default CustSection;

const CustSectionChildren = withChildren(CustSection)

//register a custom component with Builder
Builder.registerComponent(CustSectionChildren, { 
  name: 'Custom Section',
  inputs: [
    { name: 'heading', type: 'text' },
  ],
  defaultChildren: [],
  childRequirements: {
    message: 'You can only add Custom Buttons to a Custom Section',
    query: {
      'component.name': { $in: ['Custom Button'] },
    },
  },
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/asterisk.png'
});