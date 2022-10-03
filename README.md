# ncyra ui package

> Ncyra is a simple, lightweight, and fast web ui library for React.js. Made with create-react-library by @harundogdu

[![NPM](https://img.shields.io/npm/v/ncyra.svg)](https://www.npmjs.com/package/ncyra) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save ncyra
```

```bash
yarn add ncyra
```

## Usage

```tsx
import React from 'react'

import { Button } from 'ncyra'
import 'ncyra/dist/index.css'

function App() {
  return (
    <>
      <Button
        text='Primary Button'
        type='primary'
        onClick={() => alert('Button clicked')}
      />
      <Button
        text='Default Button'
        type='default'
        onClick={() => alert('Button clicked')}
      />
      <Button
        text='Dashed Button'
        type='dashed'
        onClick={() => alert('Button clicked')}
      />
      <Button
        text='Text Button'
        type='text'
        onClick={() => alert('Button clicked')}
      />
      <Button
        text='Link Button'
        type='link'
        onClick={() => alert('Button clicked')}
      />
    </>
  )
}

```

## License

MIT © [harundogdu](https://github.com/harundogdu)
