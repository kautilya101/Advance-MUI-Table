import { useState } from 'react'
import './App.css'
import Table from './Table'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

function App() {
  const [count, setCount] = useState(0)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className='app'>
        <Table />
      </div>
    </LocalizationProvider>
  )
}

export default App
