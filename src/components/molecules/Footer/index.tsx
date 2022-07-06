import React from 'react';
import logo from '../../../assets/logo.svg';
import {Box, Typography,makeStyles } from'@material-ui/core'
import { FooterData } from '../../../assets/data';

 const useStyles=makeStyles({ 
     footerCon:{
        
        padding: "2em",
        display: "flex",
        justifyContent: "center",
        paddingRight:"280px"
 },
 footer_logo:{

    height: "2em",
    marginBottom:"1em"
},
 footer_right:{
    display:'block',
    marginRight:"80px",
    marginLeft:'20px',
    
},
main:{
    backgroundColor:"#ecf2fb",
},
links:{
    marginBottom: "16px",
    color: "#6D787E"
},
 heading:{
    color: "#0365F2",
    fontSize:"24px",
    fontWeight:32
},
 subtitle_head:{
    fontWeight:700,
    marginBottom: "1em"
},
 footer_left:{
    display:'block',
    marginRight:"40px",
        marginLeft:'10px'
},
 bottom_foot:{

    padding:'2em',
},
 bottom_text:{
    padding:'10px 250px',
}
 })

function FooterComp() {
    const classes=useStyles();
  return (
    <footer className={classes.main}>
        <Box className={classes.footerCon}>
            <div className={classes.footer_left}>
                <img src={logo} className={classes.footer_logo} alt="blinkist"/>
                {FooterData.data.map((e,index)=>(<Typography key={index} variant='h5' className={classes.heading}>{e}</Typography>))}
            </div>
            <div className={classes.footer_right}>
                 <Typography variant='subtitle2' className={classes.subtitle_head}>{FooterData.footerHeading1[0]}</Typography>
                 {FooterData.data2.map((e,index)=>(<Typography data-testid={`paragraph1-${index}`} key={index} variant='body2' className={classes.links}>{e}</Typography>))}
            </div>
            <div className={classes.footer_right}>
                <Typography variant='subtitle2' className={classes.subtitle_head}>{FooterData.footerHeading1[1]}</Typography>
                {FooterData.data3.map((e,index)=>(<Typography key={index} data-testid={`paragraph2-${index}`} variant='body2' className={classes.links}>{e}</Typography>))}
            </div>
            <div className={classes.footer_right}>
                <Typography  variant='subtitle2' className={classes.subtitle_head}>{FooterData.footerHeading1[2]}</Typography>
                {FooterData.data4.map((e,index)=>(<Typography key={index} variant='body2' data-testid={`paragraph3-${index}`} className={classes.links}>{e}</Typography>))}
            </div>
        </Box>
        <div className={classes.bottom_foot}>
            <div className={classes.bottom_text}>
            {FooterData.copyright}
            </div>
            
        </div>
    </footer>
  )
}

export default FooterComp