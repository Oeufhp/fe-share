import React from 'react'
import EventEmitter from '../../events'
import './style.scss'

export const Cookie = ({cookieName}) => (
  <div className='cookie-ja'>
    <input
      type='text'
      placeholder='cookie name'
      value={cookieName}
      onChange={(e) => EventEmitter.dispatch('onCookieNameChange', e)}
    />
  </div>
)

