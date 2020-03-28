import React from 'react';
import Routes from './src/routes';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

//No react Native não existe as tags comuns do HTML
export default function App() {
  return (
    //View é semelhante a uma div
    //Text é para qualquer texto
    <Routes />
  );
}
