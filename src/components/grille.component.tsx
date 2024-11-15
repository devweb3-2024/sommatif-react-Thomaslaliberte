import React, { useEffect, useState } from 'react';
import { Alert, Button, Grid, Paper, Snackbar } from '@mui/material';


interface GrilleChatsProps {

}
const imageDefaut = "public/dessus-carte.svg"

const chats:string[] = [
  "../public/chat1.png",
  "../public/chat2.png",
  "../public/chat3.png",
  "../public/chat4.png",
  "../public/chat5.png",
  "../public/chat6.png",
  "../public/chat7.png",
  "../public/chat8.png",
  "../public/chat1.png",
  "../public/chat2.png",
  "../public/chat3.png",
  "../public/chat4.png",
  "../public/chat5.png",
  "../public/chat6.png",
  "../public/chat7.png",
  "../public/chat8.png"
]

const tableau:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let choix:string = "";
const GrilleMot: React.FC<GrilleChatsProps> = ({


}) => {
  const [essais, setEssais] = useState<number>(20);
  const [combinaisons, setCombinaisons] = useState<number>(0);
  const [partieTermine, setPartieTermine] = useState<boolean>(false);
  const [message, setMessage] = useState<{
    text: string;
    severity: 'success' | 'error';
  } | null>(null);

  function clique(caseChoisie:number){
    if(choix == ""){
      choix = chats[caseChoisie]
    }
    else{
      if(choix != chats[caseChoisie]){
        setEssais(essais-1)
        
      }
      else{
        setCombinaisons(combinaisons+1);
      }
      choix = ""
    }
  }
  useEffect(() => {
    if(essais <1){
      setPartieTermine(true);
      setMessage({
        text: 'Vous n\'avez pas réussis',
        severity: 'error',
      });
    }
  }, [essais]);
  useEffect(() => {
    if(combinaisons == 8){
      setPartieTermine(true);
      setMessage({
        text: 'Félicitations ! Vous avez réussi !',
        severity: 'success',
      });
    }
  }, [combinaisons]);
  useEffect(() => {
    chats.sort(() => Math.random() - 0.5)
    console.log(chats)
  });
  return(
  <>
  <div>nombre d'essaie : {essais}</div>
    <Grid container spacing={1} sx={{ marginTop: 2,width:900 ,justifyContent: 'center'}}>
        {chats &&
          tableau.map((tableau) => {
            return (
              <Grid >
                  <Paper sx={{
                  height: 150,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'grey.500',
                  color: 'white',
                  fontSize: 24,
                  fontWeight: 'bold',
                  width: 150,
                  margin:2
                }}>
                  <Button variant="contained" onClick={()=>clique(tableau)} sx={{ height:150, width:150 }} disabled={partieTermine}>
                    <img src={partieTermine?chats[tableau]:imageDefaut} alt="" height={150} width={150}  />
                  </Button>
                  
                </Paper>
                
              </Grid>
            );
          })}
      </Grid>
      {message && (
        <Snackbar open autoHideDuration={6000} onClose={() => setMessage(null)}>
          <Alert
            onClose={() => setMessage(null)}
            severity={message.severity}
            sx={{ width: '100%' }}
          >
            {message.text}
          </Alert>
        </Snackbar>
      )}
      </>
  )
};

export default GrilleMot;


