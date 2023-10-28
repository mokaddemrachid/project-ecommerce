import React from "react";
import Alert from 'react-bootstrap/Alert';
import { BiError } from 'react-icons/bi'
import { FaArrowLeft } from 'react-icons/fa'

export default function Cancel() { 

    return (
      <>

          <button style={{display: 'inline-flex', backgroundColor: 'black', color: 'white', borderRadius: '20px',
                         width: '120px', fontWeight: '500', alignItems: 'center', padding: '10px 40px', border: 'none',
                         marginLeft: '47%', position: 'relative', transition: 'background-color 0.3s, color 0.3s',
                          ':hover': {
                          backgroundColor: 'white',
                          color: 'black'
                        }}}>

         Retour
         
         <FaArrowLeft style={{position: 'absolute', left: '10px', backgroundColor: 'transparent', color: 'white',
                              transition: 'color 0.3s',
                              ':hover': {
                                backgroundColor: 'white',
                                color: 'black'
                              }}}/>

          </button>

      <Alert variant="danger" style={{marginTop:'130px', marginLeft:'300px', marginRight:'300px',
          marginBottom:'70px', display:'inline-block', border:'2px solid red', width: '800px'}}>

            <BiError style={{width: '100px', height: '100px', backgroundColor: 'transparent', textAlign: 'center'}}/>

        <Alert.Heading style={{fontWeight: '900', backgroundColor: 'transparent', textAlign: 'center'}}>
          "Oh snap ! Vous avez rencontré une erreur !"
          </Alert.Heading>

        <p style={{fontWeight: '900', backgroundColor: 'transparent', textAlign: 'center'}}>
            Votre paiement a été annulé! Veuillez réessayer plus tard.
        </p>

      </Alert>
      </>
    );
}