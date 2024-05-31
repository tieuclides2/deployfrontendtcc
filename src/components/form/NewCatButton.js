import React from 'react'
import styles from './NewCatButton.module.css'
import NewCategory from '../pages/NewCategory'

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function NewCatButton() {
  const history = useNavigate();

  const handleNewCat = () => {
    history ('/newcategory');
  };

  return (
    <div>
      <button onClick={handleNewCat}>Nova Categoria</button>
    </div>
  );
}
export default NewCatButton
