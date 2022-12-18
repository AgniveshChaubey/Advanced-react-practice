import './App.css';
import DessertList from './components/DessertList';

function App() {
  const data = [
    {
      sno :1,
      name : 'a',
      calories :100,
      createdAt : 'Vapi'
    },
    {
      sno :2,
      name : 'b',
      calories :200,
      createdAt : 'Ahmedabad'
    },
    {
      sno :3,
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
