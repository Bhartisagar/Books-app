import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, makeStyles} from '@material-ui/core'
import ImageDisplay from '../../atoms/ImageDisplays/ImageDisplay'
import { AccessTime, PermIdentityOutlined } from '@material-ui/icons'
import rectangle from '../../../assets/icons/rectangle.svg'


const useStyles=makeStyles({
  cardCon:{
    height:'540px',
    width:'340px',
    '&:hover':{
      backgroundColor:'rgba(225, 236, 252, 1)'     
     },
     borderRadius:'8px',
     
  },
  cardButton:{
    height:'52px',
    width: '339px',
    marginLeft:'-8px',
    marginTop:'1.8em',
    border:'1px solid rgba(241, 246, 244, 1)',
   backgroundColor: 'white',
      color: 'black',
      '&:hover': {
        backgroundColor: 'blue',
        color: 'white'
   }    
  },
  tabButtons:{
  marginLeft:'7.5em',
  color:'black',
  '&hover':{
     color:'blue'
  }
  },
  cardcontent:{
    paddingTop:'3px'
  },
  rectangle:{
    width:'347px',
    marginLeft:'-24px'
  },
  dots:{
    marginLeft:'11em',
    paddingBottom:'29px'
  }
})

interface DataBook{
   
  "id": number,
  "imgSrc": string,
  "imgAlt": string,
  "name": string,
  "author": string,
  "readTime": string,
  "readCount": string,
  "state": string,
  "category": string,
  "audio": boolean,
  "synopsis"?:string,
"justAdded": boolean,
"isTrending": boolean

}

const Cards=(props)=>{
 const classes=useStyles();
const {bookData,btnText,bookFunction}= props;
const changeBook=(bookFunction1,bookData1:DataBook)=>{
      bookFunction1(bookData1)
}

  
  return (
    
    <>
    <Card className={classes.cardCon} data-testid={`cards${bookData.id}`}>
    
    <ImageDisplay path={bookData.imgSrc} alt={bookData.imgAlt} width={340} height={342} />
    <CardContent >
    <Typography variant='subtitle2' data-testid={`headings-${bookData.id}`} className={classes.cardcontent}>{bookData.name}</Typography>
    <Typography variant='body1' className={classes.cardcontent}>{bookData.author}</Typography>
     <div style={{display:'inline-flex',gap:'2px'}} className={classes.cardcontent}><AccessTime fontSize='small'/><Typography variant='caption'>{bookData.readTime}</Typography></div>
     {bookData.readCount.length>0 && <div style={{display:'inline-flex',gap:'2px',marginLeft:'70px'}}><PermIdentityOutlined fontSize='small'/><Typography variant='caption' data-testid={`readcount-${bookData.id}`}>{bookData.readCount}</Typography></div>}
    </CardContent>
    <CardActions>
       <div > {btnText==='+ Add to Library'&& <Button variant='outlined' className={classes.cardButton} size='large' fullWidth   onClick={()=>changeBook(bookFunction,bookData)} data-testid={`button-${bookData.id}`}>{btnText}</Button>}
       </div>
      <div>{(btnText==='Finished'||btnText==='Read Again') && (<><Button onClick={()=>changeBook(bookFunction,bookData)} variant="text" data-testid={`button-${bookData.id}`} className={classes.tabButtons}>{btnText}</Button ><img src={rectangle} alt="rantangle" className={classes.rectangle}/></>)}
      </div>
      <div>
        {btnText.length<=0 && <><Typography variant='h5' className={classes.dots}>. . .</Typography><img src={rectangle} alt="rantangle" className={classes.rectangle}/></>}
        
      </div>
    </CardActions>
    </Card>
     
   
   </>
  )
}

export default Cards