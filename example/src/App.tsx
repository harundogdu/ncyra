import React from 'react'

import { Button } from 'ncyra'
import 'ncyra/dist/index.css'

const App = () => {
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

export default App
