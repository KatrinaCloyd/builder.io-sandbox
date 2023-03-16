import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from "react";

// Put your API key here
builder.init('01f88e29b8f3456ea8e2f4f117a8de29');


// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function BuilderComp() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(undefined);

  // get the page content from Builder
  useEffect( () => {
    async function fetchContent() {
      const content = await builder.get('page', {
        url: window.location.pathname
      }).promise();

      setContent(content);
      setNotFound(!content);
    }
    fetchContent();
  }, []);
  // if no page is found, return a 404 page
  if (notFound && !isPreviewingInBuilder) {
    return <div>Hmm.... not getting something... </div>
  }

  // console.log('builder-------->', content)

  // return the page when found
  return (
    <div className="builder">
      {/* Render the Builder page */}
      <BuilderComponent model="page" content={content} />
    </ div>
  );
}