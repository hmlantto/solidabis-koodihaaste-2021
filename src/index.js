import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

const cars = [
  {
    id: 1,
    fuel: 3
  },
  {
    id: 2,
    fuel: 3.5
  },
  {
    id: 3,
    fuel: 4
  }
]

ReactDOM.render(
  <App cars={cars} />,
  document.getElementById('root')
)