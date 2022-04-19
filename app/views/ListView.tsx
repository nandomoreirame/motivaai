import * as React from 'react';
import { NavLink } from '@remix-run/react';
import { Phrase } from '~/components/Phrase';
import { shuffleArray } from '~/utils';
import { BsShuffle } from 'react-icons/bs';

export interface ListViewProps {
  phrases: PhraseType[];
}

export function ListView({ phrases }: ListViewProps): React.ReactElement {
  const [newPhrases, setNewPhrases] = React.useState<PhraseType[]>(phrases);

  React.useEffect(() => {
    setNewPhrases([...phrases]);
  }, [phrases]);

  return (
    <div className="phrases container">
      <h3>
        <button className="btn btn-shuffle" onClick={() => setNewPhrases(shuffleArray<PhraseType>(phrases))}>
          <span className="btn__inner">
            <BsShuffle />
            <span>Misturar lista</span>
          </span>
        </button>
        <NavLink className="btn btn-random" to="/random">
          <span className="btn__inner">
            <BsShuffle />
            <span>Motiva Aí!</span>
          </span>
        </NavLink>
      </h3>

      <ul className="phrases__list">
        {newPhrases.map(phrase => (
          <li className="phrases__item" key={phrase.id}>
            <NavLink className="phrases__link" to={phrase.path}>
              <Phrase phrase={phrase} />
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
