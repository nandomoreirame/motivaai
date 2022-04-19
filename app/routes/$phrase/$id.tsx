import { json } from '@remix-run/node';
import { NavLink, useLoaderData } from '@remix-run/react';
import type { LoaderSubmission } from '@remix-run/react/transition';
import { Phrase } from '~/components/Phrase';
import { notionService } from '~/services/Notion';
import type { Phrase as PhraseType } from '~/tyles/phrase';
import type { PhraseDatabase } from '~/tyles/schema';
import { normalizePhrase } from '~/utils';

type LoaderData = {
  phrase: PhraseType;
};

export async function loader({ params }: LoaderSubmission) {
  const { NOTION_PHRASES_DATABASE_ID } = process.env;

  if (!params?.id) {
    throw new Response('Page not found!', {
      status: 404,
      statusText: 'A página que você está procurando não existe.',
    });
  }

  const phraseDatabase = await notionService.getPhrasesDatabase<PhraseDatabase>(NOTION_PHRASES_DATABASE_ID, {
    filter: {
      property: 'id',
      rich_text: {
        equals: params?.id,
      },
    },
  });

  const phrase = normalizePhrase(phraseDatabase[0]);
  return json<LoaderData>({ phrase });
}

export default function Index() {
  const { phrase } = useLoaderData<LoaderData>();

  return (
    <div className="full">
      <div className="container">
        <Phrase phrase={phrase} big />
        <NavLink className="btn-grad" to="/random">
          Motiva Ai!
        </NavLink>
      </div>
    </div>
  );
}
