
// pages/edit-symbol.jsx

import { BuilderComponent, builder } from '@builder.io/react';
import '../src/CustomSection';
import '../src/CustomButton';


// Replace with your Public API Key.
builder.init('01f88e29b8f3456ea8e2f4f117a8de29');

export default function Page() {
  return <BuilderComponent model="button-symbols" />
}