import * as prismic from '@prismicio/client';

const repositoryName = process.env.PRISMIC_ENDPOINT?.split('https://')[1]?.split('.')[0] || '';

export function getPrismicClient(req?: unknown) {
  const client = prismic.createClient(repositoryName, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    fetch: req ? undefined : fetch,
    routes: [
      {
        type: 'produto',
        path: '/produtos/:uid',
      },
    ],
  });

  return client;
}
