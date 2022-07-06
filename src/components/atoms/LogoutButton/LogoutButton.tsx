import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { makeStyles ,Button} from '@material-ui/core'

const useStyles=makeStyles({
    buttons:{
        backgroundColor: 'white',
        color: 'black',
        '&:hover': {
          backgroundColor: 'blue',
          color: 'black'
     },
    }
})

 const LogoutButton = () => {
     const {logout} = useAuth0();
     const classes=useStyles();
  return (
    <Button
    onClick={()=>logout()} variant='outlined'
     size='large' className={classes.buttons}
    >Log Out</Button>
  )
}
export default LogoutButton