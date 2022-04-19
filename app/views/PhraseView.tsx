import * as React from 'react';
import { NavLink } from '@remix-run/react';
import { Phrase } from '~/components/Phrase';
import type { Phrase as PhraseType } from '~/tyles/phrase';

export interface PhraseViewProps {
  phrase: PhraseType;
}

export function PhraseView({ phrase }: PhraseViewProps): React.ReactElement {
  return (
    <div className="full">
      <NavLink className="back" to="/">
        <span>←</span> <small>Voltar para listagem</small>
      </NavLink>
      <div className="container">
        <Phrase phrase={phrase} big />
        <NavLink className="btn-grad" to="/random">
          Motiva Aí!
        </NavLink>
      </div>
    </div>
  );
}
