import { AppBar, makeStyles, Typography,Toolbar,Avatar  } from '@material-ui/core';
import down from '../../../assets/icons/down.png';
import { useState } from 'react';
import Modal from '../expandtobar';
import logo from '../../../assets/logo.svg';
import searchicon from '../../../assets/icons/Vector.png';
import up from '../../../assets/icons/up.png';
import { useNavigate } from 'react-router';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../../atoms/LogoutButton/LogoutButton';
import DropComp from '../expandtobar/ExploreDropDownComponent';

function AppBars() {
    const  [underLine,setUnderLine]= useState("0px")  
    const [icon,setIcon]=useState(down); 
    const [profileIcon,setProfileIcon]=useState(down); 
    const [isOpen,setIsOpen] =useState(false)
   const [isOpenProfile,setIsOpenProfile] = useState(false);
    const navigate=useNavigate();
    const useStyles = makeStyles({
    appbar:{
        backgroundColor:'white',
        color:'black',       
    },  
      nav_content:{
        position:'absolute',
        top:'10%',       
      },    
      main:{
        display:'flex',
        justifyContent:'center',
        gap:'100px',      
      },
      exploreText:{
        display:'flex',
        borderBottom:underLine,
        borderBottomColor:'#2CE080',
        borderBottomStyle:'solid',
        alignItems:'center',
        gap:'4px'
      },  
      logoStyle:{       
        display:"flex",
        gap:'50px',       
      },
      tyPo:{
        display:'flex',
        gap:'10px',
        cursor:'pointer',
        '&:hover': {
          color: 'blue'
        }
      },
      toolbar:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-around',
        
      },
      
      avt:{
        display:'flex',
        alignItems:'center',
        
         marginRight: '11%'
        
      },
      myLibrary:{
        display:'flex',
        cursor:'pointer',
        '&:hover': {
          color: 'blue'
        }
        
      }
})
    const classes=useStyles();
    
   const handle=()=>{
    isOpen?setIsOpen(false):setIsOpen(true);
    if(underLine!=='3px'){
        setUnderLine('3px')
       
      setIcon(up)
    }
    else{
        setUnderLine('0px')
       setIcon(down)
      
    }
   }
   const handleProfile=()=>{
    isOpenProfile?setIsOpenProfile(false):setIsOpenProfile(true);
    if(isOpenProfile===true){      
      setProfileIcon(down)
    }
    else{
      setProfileIcon(up)
      
    }
   }

   const { user } = useAuth0();
   

  return (
    <>
    <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.toolbar}>
         <div className={classes.main}>
         <div className={classes.logoStyle}> <img src={logo} alt="logo" /><img src={searchicon} alt="search" /></div>

         <div className={classes.exploreText} >
           <Typography variant='body1' className={classes.tyPo} onClick={handle} data-testid={'explorediv'}>Explore</Typography>
             <img src={icon}  alt="downlist"  style={{marginTop:'0.5vh'}}/>        
           <div className={classes.nav_content}>
             <div>
             <Modal open={isOpen} DropComp={DropComp} >  
             </Modal>
            </div>  
            </div>  
            </div>
            <div className={classes.myLibrary} >
              <Typography onClick={()=>navigate('/library')} data-testid='lib' variant='body1'>My Library</Typography>
            </div>
            </div>
            <div className={classes.avt} onClick={handleProfile}>
            <div ><Avatar style={{backgroundColor:'blue'}}>{user?.name?.charAt(0).toUpperCase()}</Avatar> </div>
            <img src={profileIcon} alt="downlist1" style={{left:'73vw',top:'3vh'}}/>
            
            <div>
              <ModalProfile open={isOpenProfile}></ModalProfile>
            </div>
            
            </div>
        </Toolbar>
    </AppBar>
    </>
  )
}
const useStyless=makeStyles({
  container:{ 
    position:'fixed',    
    top:'6%',
    left:'55vw',
    height:'20vh',
    width:'20vw',
    zIndex:2,
    backgroundColor:'#ecf2fb',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    gap:'50px'
    
},


})

export const ModalProfile = (props) => {
 
        const {open}=props;
        const {user}=useAuth0();

const classes = useStyless();

if(open===true){
    return (
        <div className={classes.container}>
                     <Typography variant='h6'> {user?.name} </Typography>
                     <LogoutButton></LogoutButton>
        </div>
      )
}
else{
    return null
    }

  
}


export default AppBars