import './App.css';
import Appp from './components/aaaa';
import DessertList from './components/DessertList';
import { FeedbackForm } from './components/FeedbackForm';
import { Form } from './components/Form';
import { RegistrationForm } from './components/RegistrationForm';

function App() {
  const data = [
    {
      sno: 1,
      name: 'a',
      calories: 100,
      createdAt: 'Vapi'
    },
    {
      sno: 2,
      name: 'b',
      calories: 200,
      createdAt: 'Ahmedabad'
    },
    {
      sno: 3,
      name: 'c',
      calories: 300,
      createdAt: 'Vadodara'
    }
  ]

  return (
    <>
      {/* <DessertList data={data} /> */}
      {/* <Form /> */}
      {/* <FeedbackForm /> */}
      <RegistrationForm />
      
    </>
  );
}

export default App;
