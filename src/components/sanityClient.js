// sanityClient.js
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "ru6syca8",   // findest du in sanity.config oder manage.sanity.io
  dataset: "production",          // oder den Namen deines Datasets
  apiVersion: "2025-01-01",       // fix auf ein Datum setzen, nicht "v1"
  useCdn: true,                   // true = schnell, aber evtl. gecached
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;
