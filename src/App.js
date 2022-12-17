import logo from './logo.svg';
import './App.css';
import DesertList from './DesertList';

function App() {
  const data = [
    {
      desertName : 'a',
      desertCalories :100,
      createdAt : 'Vapi'
    },
    {
      name : 'b',
      calories :200,
      createdAt : 'Ahmedabad'
    },
    {
      name : 'c',
      calories :300,
      createdAt : 'Vadodara'
    },
  ]

  return (
    <DesertList data={data} />
  );
}

export default App;
