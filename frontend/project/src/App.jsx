import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import backgroundImage from "src/assets/image.jpg"
import './App.css'

function App() {
  return (
    <>
    <Box
      sx={{
        height: '100vh',
        backgroundImage: 'url(${backgroundImage})',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
    <Container maxWidth="sm">
        <h1>Hello world</h1>
      </Container>

    </Box>
     

    </>
  )
}

export default App
