import type { LoaderSubmission } from '@remix-run/react/transition';
import { notionService } from '~/services/Notion';
import type { PhraseDatabase } from '~/tyles/schema';
import { normalizePhrase } from '~/utils';

export async function loaderPhrase<T>({ params }: LoaderSubmission): T {
  if (!params?.id) {
    throw new Response('Page not found!', {
      status: 404,
      statusText: 'A página que você está procurando não existe.',
    });
  }

  const { NOTION_PHRASES_DATABASE_ID } = process.env;

  const phraseDatabase = await notionService.getPhrasesDatabase<PhraseDatabase>(NOTION_PHRASES_DATABASE_ID, {
    filter: {
      property: 'id',
      rich_text: {
        equals: params?.id,
      },
    },
  });

  return {
    phrase: normalizePhrase(phraseDatabase[0]),
  };
}
