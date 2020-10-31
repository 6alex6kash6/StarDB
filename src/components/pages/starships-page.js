import React from 'react';
import { StarshipList } from '../sw-components';
import { withRouter } from 'react-router-dom'

export default function StarshipsPage({ history }) {
  return (
    <StarshipList onItemSelected={(itemId) => {
      history.push(itemId)
    }}/>
  )
}
