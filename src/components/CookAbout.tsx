import * as React from 'react';
import { useParams } from 'react-router-dom'

import CooksData from '../data/CooksData.json';


export interface IAppProps {
}

export default function App(props: IAppProps) {


  

  const { id } = useParams<{ id: string }>();

  const cook = CooksData.filter((cook) => cook.id.toString() === id)[0]



  return (
    <div className="flow-root">
      <dl className="my-4">
        <dt>Phone</dt>
        <dd>{cook.phone}</dd>
        <dt>City</dt>
        <dd>{cook.city}</dd>
        <dt>E-mail</dt>
        <dd>{cook.email}</dd>
        <dt>Birthday</dt>
        <dd>{cook.birthday}</dd>
        <dt>Gender</dt>
        <dd>{cook.gender}</dd>
      </dl>


    </div>
  );
}
