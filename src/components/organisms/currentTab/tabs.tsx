import React,{useState,useEffect} from 'react'
import {Tabs,Tab,Container,Grid, makeStyles } from '@material-ui/core'
import Cards from '../../molecules/BookCard';
import api from '../../../api';


export const TabPanel=(props:any)=>
{ const {children,value,index} = props;

return  (
  <div>
     {value===index && <h1 > {children} </h1> }  

</div>

)
}
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

export const MyTabs=()=>{
  
const [crcol,setcrColor] =useState('black');
const [rcol,setrColor] =useState('black');
const [bookState,setbookState]=useState(false)

const useStyles=makeStyles({
  tabStyle:{
    margin:'10px 280px',
},
cr:{
  color:crcol,
  borderBottomColor:crcol,
  BorderBottom:'3px',
  borderBottomStyle:'solid',
  width:"346px",

},
r:{
  color:rcol,
  width:"346px",
}

})
const setState=(data:DataBook)=>{
  if(data.state==='CR'){
    data.state='FR'
    setbookState(!bookState)
    console.log(data)
 }
 else{
    data.state='CR'
    setbookState(!bookState)
 }
 api.put(`/${data.id}`,data).then(res=>res.data).then((status)=>{console.log(status)})


}
  const [bookData,setBookData] = useState([]);
  

    useEffect(()=>{
      api.get('/')
      .then(response => {
      setBookData(response.data);
        }, error => {
         console.log(error);
      });
    },[bookState])
    const [value,setValue] =useState(0);

    const handleTabs=(val):void=>{
        setValue(val)
        if(val===0){
          setcrColor('#2CE080');
          setrColor('black');

        }
        else{
          setrColor('#2CE080');
          setcrColor('black')
        }

    }
    
    const classes=useStyles();
  return (
    <div>
            <Tabs value={value}  data-testid={'tabs'} onChange={handleTabs} className={classes.tabStyle} TabIndicatorProps={{
style: {
  backgroundColor: "rgba(44, 224, 128, 1)"
 }
}}>
                <Tab label="Current Reading" id='curTab' className={classes.cr}></Tab>
                <Tab label="finished" id='finishTab' className={classes.r} ></Tab>             
            </Tabs>
           <TabPanel  index={0} value={value} >
           <Container>
        <Grid container >
        {bookData && bookData.filter((book:DataBook)=>{return book.state==='CR';}).map((data:DataBook)=>(
          <Grid style={{padding:'10px 0 10px 15px'}} key={data.id} data-testid={`current-${data.id}`}>
          <Cards bookData={data} btnText={"Finished"} bookFunction={(dataBook:DataBook)=>{setState(dataBook)}} />
            
         </Grid>
         )
        )
       }

        </Grid>
         </Container>
           </TabPanel>

           <TabPanel  index={1} value={value}>
            <Container>
        <Grid container >
         {bookData && bookData.filter((book:DataBook)=>{
           return book.state==='FR';
         }).map((data:DataBook)=>(
           <Grid style={{padding:'10px 0 10px 15px'}} key={data.id} data-testid={`finished-${data.id}`}>
           <Cards bookData={data} btnText={"Read Again"} bookFunction={(finishedBook:DataBook)=>{setState(finishedBook)}}/>
             
          </Grid>
          )
         )
        }

        </Grid>
         </Container>
          </TabPanel>
        
    </div>
  )
}
