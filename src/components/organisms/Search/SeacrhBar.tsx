import { makeStyles, TextField, Typography,Grid,Container ,InputAdornment} from '@material-ui/core';
import Cards from '../../molecules/BookCard';
import { useEffect,useState } from 'react';
import { Search } from '@material-ui/icons';
import { useNavigate } from 'react-router';
import Banner from '../../molecules/Banner/Banner';

const useStyles= makeStyles({
  
   mainDiv:{
     marginTop:'100px',    
      
   },
   typo:{
    marginLeft:'17%',
    marginTop:'20px' ,
    fontWeight:700,
   
    width:'40%'
   },
   search:{
    marginLeft:'17%',
    marginTop:'20px' ,
    fontWeight:700,
    color:'grey',
    width:'40%',
    fontSize:'24px',
    
    
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

const SeacrhBar=()=> {
  const [bookData,setBookData] = useState([]);
 const classes=useStyles();

    useEffect(()=>{
        fetch('http://localhost:8000/myLibrary')
        .then(res=>{
           return res.json();
        })
        .then(data=>{console.log(data)
        setBookData(data);
        })
    },[])
  console.log(bookData);
  const navigate=useNavigate();
  return (
      
    <div className={classes.mainDiv}>
        <Banner></Banner>
    
    <div className={classes.typo} >
    <TextField variant="standard"
    InputProps={{
      startAdornment:(
        <InputAdornment position="start">
        <Search/>
        </InputAdornment>
      )
    }}
    value="Search by author and book names" fullWidth
    />
    </div>

    <Typography variant='h6' className={classes.typo}>Trending blinks</Typography>
    <Container>
    <Grid container >
     { bookData && bookData.filter((book:DataBook)=>{
       return book.isTrending===true;
     }).map((data:DataBook)=>(
       <Grid style={{padding:'10px 0 10px 15px'}} key={data.id} data-testid={`card-${data.id}`}>
       <Cards bookData={data} btnText={data.state===""?"+ Add to Library":""} bookFunction={()=>navigate(`/bookdetailviewpage/${data.id}`)}/>
         
      </Grid>
     )
     )
    }

    </Grid>
     </Container>
     <Typography variant='h6' className={classes.typo} >Just added</Typography>
     <Container>
     <Grid container >
      { bookData && bookData.filter((book:DataBook)=>{
        return book.justAdded===true;
      }).map((data:DataBook) => (
        <Grid style={{padding:'10px 0 10px 15px'}} key={data.id} data-testid={`justadded-${data.id}`}>
        <Cards bookData={data} btnText={data.state===""?"+ Add to Library":""} bookFunction={()=>navigate(`/bookdetailviewpage/${data.id}`)}/>
          
       </Grid>
      ))
      
     }
 
     </Grid>

      </Container>

      <Typography variant='h6' className={classes.typo} >Featured audio blinks</Typography>
     <Container>
     <Grid container >
      { bookData && bookData.filter((book:any)=>{
        return book.audio===true;
      }).map((data:DataBook) => (
        <Grid style={{padding:'10px 0 10px 15px'}} key={data.id} >
        <Cards bookData={data} btnText={data.state===""?"+ Add to Library":""} bookFunction={()=>navigate(`/bookdetailviewpage/${data.id}`)}/>          
       </Grid>
      ))
      
     }
 
     </Grid>

      </Container>
     </div>
  )
}


export default SeacrhBar