import { createTheme } from "@material-ui/core/styles";



const Theme = createTheme({
  palette:{
     primary:{
         main:'rgba(3, 49, 75, 1)'
     }
  },
  typography: {
    fontFamily: "CeraPRO",   
  
  subtitle1: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 700,
  },
  subtitle2: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: 700,

  },
  
  h1:{
    fontSize: '36px',
    lineHeight: '46px',
    fontWeight: 700,
  },
  body1: {
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: 400,
  },
  body2: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 400,
  },
 
  caption: {
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: 400,
  },
  h2:{
    fontSize: '100px',
    lineHeight: '110px',
    fontWeight: 700,

  }
  
  }

});


export default Theme;