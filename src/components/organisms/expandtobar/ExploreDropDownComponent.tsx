import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography} from '@material-ui/core';
import rocket from '../../../assets/icons/rocket.png';
import science from '../../../assets/icons/science.png';
import leaf from '../../../assets/icons/leaf.png';
import globe from '../../../assets/icons/globe.png';
import bag from '../../../assets/icons/bag.png';
import man from '../../../assets/icons/man.png';
import buliding from '../../../assets/icons/buliding.png';
import health from '../../../assets/icons/health.png';
import history from '../../../assets/icons/history.png';
import bulb from '../../../assets/icons/bulb.png';
import timer from '../../../assets/icons/timer.png';
import doublecircle from '../../../assets/icons/doublecircle.png';
import statistics from '../../../assets/icons/statistics.png';
import msg from '../../../assets/icons/msg.png';
import money from '../../../assets/icons/money.png';
import heart from '../../../assets/icons/heart.png';
import education from '../../../assets/icons/education.png';
import analytical from '../../../assets/icons/analytical.png';
import { useNavigate } from 'react-router-dom';



const ExploreDropDownComponent = () => {

const useStyles = makeStyles(()=>({
  subelements:{
    paddingBottom: "1em",
    cursor:'pointer',
    
  },
  subelement1:{
    paddingBottom: "1em",
    cursor:'pointer',
    '&:hover': {
      color: 'blue'
    }
  },
  explore_container:{
    backgroundColor: "#F1F6F4",
    width:"100%",
    padding:"2em",
    display: "grid",
    justifyContent: "center",
  },
  explore_header:{
    display: "inline-flex",
    borderBottom: "1px solid black",
    paddingBottom: "1em",
    paddingRight:'1em',
    gap:'10%'
  },
  explore_titles:{
    marginRight:"4em",
  },
  explore_content:{
    paddingTop:"16px",
    paddingRight: "128px",
    display:"inline-block"
  },
  subtitles:{
    display:'flex',
    gap:'7px',
    '&:hover': {
      color: 'blue'
    }
  },
  icons:{
    height:'19px',
    width:'17px'
  }

}));
  const classes = useStyles();
  const navigate=useNavigate();
  return (
          <Box className={classes.explore_container}>
                <div className={classes.explore_header}>
                 <Typography color="primary" className={classes.explore_titles} variant="body1">Explore by category</Typography>
                  <Typography color="textPrimary" className={classes.explore_titles} variant="body1">See recently added titles</Typography>
                  <Typography color="textPrimary" className={classes.explore_titles} variant="body1">See popular titles</Typography>
                </div>
                <div className={classes.explore_content}>
                  <div className={classes.explore_content}>
                  <div className={classes.subtitles}><img src={rocket} className={classes.icons} alt="entrepreneurship"></img>   <Typography  color="textPrimary" className={classes.subelement1} variant="body2"  onClick={()=>navigate('/entrepreneurship')}>Entrepreneurship</Typography></div>
                  <div className={classes.subtitles}><img src={science} className={classes.icons} alt="science"></img> <Typography className={classes.subelements}   variant="body2">Science </Typography></div>
                  <div className={classes.subtitles}><img src={globe} className={classes.icons} alt="Economics"></img>  <Typography className={classes.subelements}   variant="body2">Economics</Typography></div>
                  <div className={classes.subtitles}><img src={bag} className={classes.icons} alt="Corporate Culture"></img>  <Typography className={classes.subelements}   variant="body2">Corporate Culture</Typography></div>
                  <div className={classes.subtitles}> <img src={man} className={classes.icons} alt="Psychology"></img>  <Typography className={classes.subelements}  variant="body2">Psychology</Typography></div>
                  <div className={classes.subtitles}> <img src={leaf} className={classes.icons} alt="Nature"></img>  <Typography className={classes.subelements}   variant="body2">Nature &amp; Environment</Typography></div>
                    
                  </div>
                  <div className={classes.explore_content}>
                  <div className={classes.subtitles}><img src={buliding} className={classes.icons} alt="Politics"></img><Typography className={classes.subelements}  variant="body2">Politics</Typography> </div>
                  <div className={classes.subtitles}><img src={health} className={classes.icons} alt="health"></img> <Typography className={classes.subelements}  variant="body2">Health &amp; Nutrition</Typography> </div>
                  <div className={classes.subtitles}><img src={history} className={classes.icons} alt="history"></img>    <Typography className={classes.subelements}  variant="body2">History</Typography> </div>
                  <div className={classes.subtitles}><img src={bulb} className={classes.icons} alt="Motivation"></img>    <Typography className={classes.subelements}   variant="body2">Motivation &amp; Inspiration</Typography> </div>
                  <div className={classes.subtitles}><img src={timer} className={classes.icons} alt="Productivity"></img>    <Typography className={classes.subelements}   variant="body2">Productivity</Typography> </div>
                  <div className={classes.subtitles}><img src={doublecircle} className={classes.icons} alt="Career"></img>    <Typography className={classes.subelements}  variant="body2">Career &amp; Success</Typography> </div>

                   </div>
                  <div className={classes.explore_content}>
                  <div className={classes.subtitles}><img src={statistics} className={classes.icons} alt="Marketing"></img>   <Typography className={classes.subelements}   variant="body2">Marketing &amp; Sales</Typography> </div>
                  <div className={classes.subtitles}><img src={analytical} className={classes.icons} alt=" Personal Development"></img>   <Typography className={classes.subelements}   variant="body2">Personal Development</Typography> </div>
                  <div className={classes.subtitles}><img src={msg} className={classes.icons} alt=" Communication Skills"></img>    <Typography className={classes.subelements}   variant="body2">Communication Skills</Typography> </div>
                  <div className={classes.subtitles}><img src={money} className={classes.icons} alt="Investments "></img>    <Typography className={classes.subelements}   variant="body2">Money &amp; Investments</Typography> </div>
                  <div className={classes.subtitles}><img src={heart} className={classes.icons} alt="Relationships "></img>    <Typography className={classes.subelements}   variant="body2">Sex &amp; Relationships</Typography> </div>
                  <div className={classes.subtitles}><img src={education} className={classes.icons} alt="Education"></img>    <Typography className={classes.subelements}   variant="body2">Education</Typography> </div>
                 
                 </div>
                </div>
              </Box>
  );
};

export default ExploreDropDownComponent;
