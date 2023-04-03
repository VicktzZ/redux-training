# Redux-training

## Introdução ao Redux

Redux é uma ferramenta front-end que facilita o transporte de dados do backend para o frontend. Ele funciona com base em `Actions` e `Reducers`, sendo que:

- Actions são ações que despacham diferentes tipos de dados para os reducers;
- Reducers são funções que executam e formatam dados para o front-end.

Para utilizá-lo, é necessário instalar:

    npm i redux redux-thunk

Caso você esteja utilizando react também é necessário instalar: 

    npm i react-thunk

No qual disponibiliza hooks que facilitam a integração da ferramenta.

Para o redux funcionar, é necessário pegar os dados de uma requisição geralmente feita pelo axios:

    npm i axios

O Axios é quem faz a requisição HTTP, e o Redux é o resposável por levar os dados desta requisição ao frontend.

## Axios

Axios é uma biblioteca que faz requisições HTTP. O utilizamos no frontend para fazer a requisição por meio de uma ação do usuário, como confirmar um cadastro, por exemplo:

```js
// api/index.js

import axios from 'axios'

const url = 'http://localhost:5000'

export const fetchUsers = () => axios.get(url)
```
Neste exemplo uma função `fetchUsers()` retorna a requisição que o `axios` fez. Como temos que passar isto para os reducers, esta função precisa ser exportada.

## Actions

As `Actions` são ações que o usuário faz e que trazem alguma coisa do backend para o frontend. Esta coisa é chamada de `payload` (carga ou entrega). Isto deve ser definido nos seus `Reducers` (onde será falado mais à frente). EXEMPLO:

```js
// actions/userActions.js

import * as api from '../api'

const fetchUsersAction = () => async dispatch => {
    const { data } = await api.fetchUsers()

    dispatch({ type: 'FETCH_ALL', payload: data })
}
```

Neste código, a função `fetchUsersAction()` retorna uma outra função anônima que tem o `dispatch` como parâmetro. Este parâmetro é uma função que retorna um objeto qualquer que for colocado como parâmetro. Geralmente, este objeto deve conter as propriedades `type` (do tipo String) e `payload` (o qual será os dados que ele irá despachar), como é mostrado no código acima. O `type` deve ser definido nos seus reducers.

## Reducers

Os `Reducers` são resposáveis pelo 'filtro' da ação que o usuário fizer. Dependendo do tipo da ação (action.type), ele irá executar e retornar uma coisa diferente:

```js
// reducers/userReducer.js

export default (state=[], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload            
    }    
}
```

Nesta função anônima, o parâmetro state representa o estado atual dos dados. Por exemplo:

```js
const obj = {
    nome: 'Vitor',
    idade: 18
}
```

Caso queiramos adicionar e/ou sobrescrever propriedades para este objeto, o melhor jeito de resolver isto seria utilizando o `Spread Operator` (...), espalhando suas propriedads:

```js
const obj2 = {...obj, nome: 'Luís'}
```

A mesma coisa deve ser feita com o state, caso seja necessário:

```js
return [...state, action.payload]
```

A diferença é que neste caso, é retornado em uma `Array`, e não um `Object`.

Já o segundo parâmetro (`action`), simboliza ação que o usuário perfomou. Caso o tipo dela for, `"FETCH_ALL"` (como mostrado no exemplo acima), a função retorna apenas o que a action lhe entregou (action.payload). O type da action, pode ser `QUALQUER COISA`, você que define nos reducers e qual será o tipo na hora de despachar (como foi mostrado acima nas `Actions`). Estes reducers devem ser exportados para o index.js da pasta Reducers para combiná-los:

```js
// reducers/index.js
import { combineReducers } from 'redux'
import user from './userReducer.js'

export default combineReducers({ user })
```

É necessário combinar os reducers para adicioná-los ao frontend na `store`, visto mais adiante.

## react-redux
