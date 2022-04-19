import * as React from 'react';

export function Loading(): React.ReactElement {
  return (
    <div className="loading">
      <div>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p>Aguarde...</p>
        <p>Carregando frase motivacional</p>
      </div>
    </div>
  );
}
