import slugify from 'slugify';
import type { Phrase } from '~/tyles/phrase';
import type { PhraseDatabase } from '~/tyles/schema';

export function shuffleArray<T>(arr: T[]): T[] {
  return arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1]);
}

export function generatePhrasePath({ id, phrase }: { id: string; phrase: PhraseDatabase }): string {
  return `${slugify(phrase, {
    replacement: '-',
    lower: true,
    trim: true,
    remove: /([^\s\w])/,
  })}/${id}`;
}

export function normalizePhrase({ properties }: PhraseDatabase): Phrase {
  const id = properties.id.formula.string;
  const phrase = properties.phrase.rich_text[0].plain_text;
  const author = properties.author.title[0].plain_text;
  const path = generatePhrasePath({ id, phrase });

  return { id, phrase, author, path };
}
