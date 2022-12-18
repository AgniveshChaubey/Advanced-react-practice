import './App.css';
import DessertList from './DessertList';

function App() {
  const data = [
    {
      name : 'a',
      calories :100,
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
    }
  ]

  return (
    <DessertList data={data} />
  );
}

export default App;
