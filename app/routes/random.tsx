import { json, redirect } from '@remix-run/node';
import { notionService } from '~/services/Notion';
import type { Phrase as PhraseType } from '~/tyles/phrase';
import type { PhraseDatabase } from '~/tyles/schema';
import { normalizePhrase, shuffleArray } from '~/utils';

export async function loader() {
  const { NOTION_PHRASES_DATABASE_ID } = process.env;
  const database = await notionService.getPhrasesDatabase<PhraseDatabase>(NOTION_PHRASES_DATABASE_ID);
  const phrases = database.map(phrase => normalizePhrase(phrase));
  const radomPhrase: PhraseType = shuffleArray(phrases)[0];

  if (radomPhrase.path) {
    return redirect(radomPhrase.path);
  }

  return json({});
}

export default function Index() {
  return <></>;
}
