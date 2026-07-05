import { Button } from '@chakra-ui/react';

import { Link } from 'react-router-dom'

const CreatePage = () => {
   const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', // Espace entre les boutons
    width: 'fit-content' // Pour que la div ne prenne pas toute la largeur
  };
  return (
    <div style={containerStyle}>
       This is Page 3
       <Button ><Link to = {"/Page1"}>Page1</Link></Button>
       <Button ><Link to = {"/Page2"}>Page2</Link></Button>
       <Button ><Link to = {"/"}>HomePage</Link></Button>
    </div>
  )
};

export default CreatePage
