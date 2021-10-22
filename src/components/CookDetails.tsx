import * as React from 'react';
import { Link, useParams } from 'react-router-dom'
import { COOKS } from './MainPage';

export interface IAppProps {


}

export default function CookDetails (props: IAppProps) {

const {id} = useParams<{id: string}>();

const cook = COOKS.filter((item) => item.id.toString() === id )[0]


  return (
    <div>
      <div>
        <img src={cook.image} alt=""  className="w-32" />
        <p>Name: {cook.name}</p>
        <p>Description: {cook.description}</p>
        <span>Stars</span>
      </div>
    </div>
  );
}



