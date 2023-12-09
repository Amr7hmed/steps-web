export type CustomHeadProps = {
  title?: string;
  name?: {
    [key: string]: string;
    // description of the webpage
    description?: string;
    // Twitter Card type, twitter card are for when sharing on twitter
    'twitter:card'?: string;
    // Twitter Label (1, it can be multiple)
    'twitter:label1'?: string;
    // Twitter Data (1, it can be multiple)
    'twitter:data1'?: string;
    // For each label it must be a corresponding data
  };
  // og stand for OpenGraph
  // these meta help in social apps
  property?: {
    [key: string]: string;
    // The title of the object (aka webpage)
    'og:title'?: string;
    // The canonical URL of your object that will be used as its permanent ID in the graph
    'og:url'?: string;
    // A one to two sentence description of your object (usually the same as the page description)
    'og:description'?: string;
    //  The image that will appear when sharing on social networks
    'og:image'?: string;
    // The properties of the image
    'og:image:width'?: string;
    'og:image:height'?: string;
    'og:image:type'?: string;
    // The type of your object
    'og:type'?: string;
    // If your object is part of a larger web site, the name which should be displayed for the overall site
    'og:site_name'?: string;
  };
};
