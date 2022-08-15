import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';
import sm from './sm.json';

export const endpoint = sm.apiEndpoint;
export const repositoryName = prismic.getRepositoryName(endpoint);
const ACCESS_TOKEN = process.env.PRISMIC_ACCESS_TOKEN;

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  if (doc.type === 'blogPost') {
    return `/blog/${doc.uid}`;
  }
  if (doc.type === 'educationCenterContent') {
    switch (doc.lang) {
      case 'nl-nl':
      case 'nl-be':
        return `/kennisbank/${doc.uid}`;
      case 'de-de':
        return `/datenbank/${doc.uid}`;
      case 'fr-fr':
        return `/centre-de-connaissance/${doc.uid}`;
      default:
        return `/education-center/${doc.uid}`;
    }
  }
  return '/';
}

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
    accessToken: ACCESS_TOKEN,
  });

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
}
