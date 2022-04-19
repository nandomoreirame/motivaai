import * as React from 'react';
import type { Phrase as PhraseType } from '~/tyles/phrase';

export interface PhraseProps {
  phrase: PhraseType;
  big?: boolean;
}

export function Phrase({ phrase, big = false }: PhraseProps): React.ReactElement {
  return (
    <blockquote className={`phrase ${big ? '--big' : ''}`}>
      <p className="phrase__phrase">{phrase.phrase}</p>
      <span className="phrase__author">{phrase.author}</span>
    </blockquote>
  );
}
