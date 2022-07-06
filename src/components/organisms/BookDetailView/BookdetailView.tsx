import React,{ useEffect,useState} from 'react'
import { Button, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import photo from '../../../assets/2.png';
import clock from '../../../assets/icons/clock.png';
import { useNavigate } from 'react-router';
import { ArrowForward } from '@material-ui/icons';
import api from '../../../api';



const useStyles=makeStyles({
   mainDiv:{
      display:'flex',
      width:'58%',
      marginLeft:'16%',
      marginTop:'3%',
      justifyContent:'space-between',
      marginBottom:'2em',
      height:'550px',
      borderBottom:'1px solid #E1ECFC'
   },
   sub:{
      marginLeft:'16%',
      marginTop:'7%',
   },
   subtitles:{
      marginBottom:'0.8em',
   },
   timeClock:{
     display:'flex',
     alignItems:'center',
     gap:'10px',
     marginTop:'1em',
     width:'200px',
   },
   buttonsCon:{
    marginBottom:'2em',
    marginTop:'7%',
    display:'flex',
    justifyContent:'space-between',
    width:'40em'
   },
   buttons:{
      backgroundColor: 'rgba(44, 224, 128, 1)',
      color: 'black',
      '&:hover': {
        backgroundColor: 'rgba(46, 200, 148, 3)',
        color: 'black'
   }
  },


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

function BookdetailView(props) {
   const navigate=useNavigate();
   const {id} =props;
    console.log(id);
    const [bookData,setBookData] = useState([]);
    const [value,setValue] =useState(0);
    const handleTabs=(val)=>{
      setValue(val)
    }

    const classes=useStyles();
    useEffect(()=>{
     
      api.get('/')
      .then(response => {
      setBookData(response.data);
        }, error => {
         console.log(error);
      });

    },[])
    

   function setState(data:DataBook,btn:string){
      if(btn==='read'){
         data.state='CR'
      }
      else{
         data.state='FR'
      }
       api.put(`/${data.id}`,data).then(res=>res.data).then((status)=>{console.log(status)})

   }
    return (
    <>
      
      <Typography variant='h6' className={classes.sub}>Get the key ideas from</Typography>
      <div  className={classes.mainDiv} data-testid="test">
          
       <div>
       
     {bookData && bookData.filter((book:DataBook)=> {
     return book.id==id }).map((data:DataBook)=>( 
     <div key={data.id} data-testid={`book-${data.id}`}>   
      <Typography variant='h3' className={classes.subtitles}>{data.name}</Typography>
      <Typography variant='subtitle1' className={classes.subtitles}>Turning Your Business into an Enduring Great Company</Typography>
       <Typography className={classes.subtitles}> By {data.author}</Typography>
      <div className={classes.timeClock}><img src={clock} height="20px" alt="timericon"/>  <Typography > {data.readTime}</Typography></div>
      
      <div className={classes.buttonsCon}>
      <Button variant='outlined' size='large'  onClick={()=>{setState(data,'read');navigate('/library')}} data-testid={`bookbutton-${data.id}`}>Read Now</Button>
      <Button variant='outlined' size='large' className={classes.buttons} data-testid={`bookbutton2-${data.id}`} onClick={()=>{setState(data,'finish');navigate('/library')}}>Finished Reading</Button>
      <Button endIcon={<ArrowForward/>} data-testid={`bookbutton3-${data.id}`} >Send to Kindle</Button>
      </div>
     
      <Tabs value={value} onChange={handleTabs} TabIndicatorProps={{
     style: {
      backgroundColor: "rgba(44, 224, 128, 1)"
     }
     }}>
       <Tab label="Synopsis" value={0}></Tab>
       <Tab label="Who is it for?"></Tab>
       <Tab label="About the Author"></Tab>
    </Tabs>
    <TabPanel value={value} index={0}>{data.synopsis}</TabPanel>
    <TabPanel value={value} index={1}>{data.name}</TabPanel>
    <TabPanel value={value} index={2}>{data.author}</TabPanel>
     </div>
     ))
    
   }
   </div>
  <div> <img src={photo} alt="book"/>
  </div>
   
   </div>
    </>
  )
}
function TabPanel(props){
   const {children,value,index}=props
   
   return(
      <>
        { index===value&& <p style={{color:'rgba(3, 49, 75, 1)'}}>{children}</p>}
      </>
   )
   

}

export default BookdetailView