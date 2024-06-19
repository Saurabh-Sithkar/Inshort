import './App.css'
import {Box,styled} from '@mui/material'
import Hearder from './component/Hearder'
import InfoHeader from './component/InfoHeader'
import  Articles  from './component/Articles'


const Container = styled(Box)(({theme}) =>({
  width: '60%',
  margin: '40px auto 0 auto',
  [theme.breakpoints.down('md')]:{
    width:'75%'
  },
  [theme.breakpoints.down('sm')]:{
    width:'85%'
  }
}));

function App() {
 

  return (
    <Box>
     <Hearder/>
     <Container>
        <InfoHeader/>
        <Articles/>
     </Container>
    </Box>
  )
}

export default App
