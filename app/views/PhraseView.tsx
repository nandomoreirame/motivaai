import * as React from 'react';
import { NavLink } from '@remix-run/react';
import { Phrase } from '~/components/Phrase';
import type { Phrase as PhraseType } from '~/tyles/phrase';
import { BsShuffle, BsWhatsapp } from 'react-icons/bs';

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
        <NavLink className="btn btn-random" to="/random">
          <span className="btn__inner">
            <BsShuffle />
            <span>Motiva Aí!</span>
          </span>
        </NavLink>
        <NavLink className="btn btn-whatsapp" to={`/share/${phrase.id}`} target="_blank">
          <span className="btn__inner">
            <BsWhatsapp />
            <span>Compartilhar</span>
          </span>
        </NavLink>
      </div>
    </div>
  );
}
