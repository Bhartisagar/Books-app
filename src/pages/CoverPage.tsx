import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import LoginButton from '../components/atoms/LoginButton/LoginButton'
import ImageDisplay from '../components/atoms/ImageDisplays/ImageDisplay'

const useStyles=makeStyles({
main:{
    backgroundColor:'rgba(44, 224, 128, 1)',
    height:'100vh' 
},
logo:{
  marginLeft:'26vw'
},
heading:{
 marginTop:'-30vh',
 fontWeight:700,
 marginLeft:'7vw'
 
},
heading2:{
  fontWeight:700,
  marginLeft:'12vw'
 }
})

const CoverPage = () => {
    const classes=useStyles();
  return (
    <div className={classes.main}>
        <div className={classes.logo}><ImageDisplay path={"image 1.png"} alt="blinkistcoverlogo" height={770} width={950}></ImageDisplay>
        <Typography variant='h2' className={classes.heading}>LDP Dev interns-</Typography>
        <Typography variant='h2' className={classes.heading2}>Blinkist ps</Typography>
      
     </div>
    <LoginButton></LoginButton>
    </div>
  )
}

export default CoverPage