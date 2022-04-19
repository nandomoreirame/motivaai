import { redirect } from '@remix-run/node';
import { notionService } from '~/services/Notion';
import type { PhraseDatabase } from '~/tyles/schema';
import type { Phrase as PhraseType } from '~/tyles/phrase';
import { normalizePhrase, shuffleArray } from '~/utils';

export async function loaderRandom(): Promise<string> {
  const { NOTION_PHRASES_DATABASE_ID } = process.env;
  const database = await notionService.getPhrasesDatabase<PhraseDatabase>(NOTION_PHRASES_DATABASE_ID);
  const phrases = database.map(phrase => normalizePhrase(phrase));
  const { path } = shuffleArray<PhraseType>(phrases)[0];
  return redirect(path);
}
