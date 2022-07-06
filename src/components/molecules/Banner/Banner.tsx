import React from 'react'
import { makeStyles, Typography,Box } from '@material-ui/core'
import girl from '../../../assets/girl.svg'
import {BannerData, Data} from '../../../assets/data'

const useStyles=makeStyles({
    heading:{
        marginLeft:'3%',
        marginTop:'3%',
        fontSize:'2em',
        fontWeight:700,
    
        height:'200px'    
           
      },
      subtitles:{
        fontSize:'18px',
        margin:'1px',
        
      },
      subtitlesCon:{
        marginTop:'20px'
       },
       banner:{
        width:'65em',
        marginLeft:'17%', 
        backgroundColor:'#F1F6F4',
        height:'264px',
        display:'flex',
        justifyContent:'space-around'
       
      },
})

function Banner() {
    const classes=useStyles();
  return (
    <>
    <Box className={classes.banner}>
      <div className={classes.heading}>
        {Data.map((e,index)=>(<Typography variant="h4" key={index}> {e}</Typography>))}
  
      <div className={classes.subtitlesCon}>
        {BannerData.map((e,index)=>(<Typography variant="subtitle2" className={classes.subtitles} key={index}>{e}</Typography>))}
    </div>
    </div>
    <img src={girl} alt="banner"/>
    </Box>
    </>
  )
}

export default Banner