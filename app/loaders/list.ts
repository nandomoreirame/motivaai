import { notionService } from '~/services/Notion';
import type { PhraseDatabase } from '~/tyles/schema';
import type { Phrase as PhraseType } from '~/tyles/phrase';
import { normalizePhrase, shuffleArray } from '~/utils';

export async function loaderList<T>(): T {
  const { NOTION_PHRASES_DATABASE_ID } = process.env;
  const database = await notionService.getPhrasesDatabase<PhraseDatabase>(NOTION_PHRASES_DATABASE_ID);
  const phrases = database.map(phrase => normalizePhrase(phrase));

  return {
    phrases: shuffleArray<PhraseType>(phrases),
  };
}
