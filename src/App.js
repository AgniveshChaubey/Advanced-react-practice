import './App.css';
import Switch from './Switch';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { ProgressGoals } from './components/ProgressGoals';
import GiftCardPage from './components/GiftCardPage';
import FetchFn from './Tests/FetchFn';
import FetchFn2 from './components/FetchFn2';
import { Test } from './Tests/Test';
import UsePrevious from './components/usePrevious';
import RadioGrp from './components/RadioGroup';
import { PanelMouseTracker, PointMouseTracker } from './components/HOC';
import { MouseTracker } from './components/MousrTracker';
import { FeedbackForm } from './components/FeedbackForm';
// import Appp from './components/aaaa';
// import DessertList from './components/DessertList';
// import { FeedbackForm } from './components/FeedbackForm';
// import { Form } from './components/Form';
// import { RegistrationForm } from './components/RegistrationForm';

// function App() {
// const data = [
//   {
//     sno: 1,
//     name: 'a',
//     calories: 100,
//     createdAt: 'Vapi'
//   },
//   {
//     sno: 2,
//     name: 'b',
//     calories: 200,
//     createdAt: 'Ahmedabad'
//   },
//   {
//     sno: 3,
//     name: 'c',
//     calories: 300,
//     createdAt: 'Vadodara'
//   }
// ]



const Title = ({ children }) => {
  const { theme } = useTheme();
  return (
    <h2
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </h2>
  );
};

const Paragraph = ({ children }) => {
  const { theme } = useTheme();
  return (
    <p
      style={{
        color: theme === "light" ? "black" : "white",
      }}
    >
      {children}
    </p>
  );
};


const Content = () => {
  return (
    <div>
      <Paragraph>
        We are a pizza loving family. And for years, I searched and searched and
        searched for the perfect pizza dough recipe. I tried dozens, or more.
        And while some were good, none of them were that recipe that would
        make me stop trying all of the others.
      </Paragraph>
    </div>
  );
};


const Header = () => {
  return (
    <header>
      <Title>Little Lemon 🍕</Title>
      <Switch />
    </header>
  );
};


const Page = () => {
  return (
    <div className="Page">
      <Title>When it comes to dough</Title>
      <Content />
    </div>
  );
};


function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
      }}
    >
      {/* <Header />
      <Page /> */}
      {/* <Test /> */}
      {/* <ProgressGoals /> */}
      {/* <GiftCardPage /> */}
      {/* <FetchFn /> */}
      {/* <FetchFn2 /> */}
      {/* <UsePrevious /> */}
      {/* <RadioGrp /> */}
      {/* <PanelMouseTracker /> */}
      {/* <PointMouseTracker /> */}
      {/* <MouseTracker /> */}
      <FeedbackForm />
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;


//   return (
//     <>
//       {/* <DessertList data={data} /> */}
//       {/* <Form /> */}
      // {/* <FeedbackForm /> */}
      //  <RegistrationForm />
//       <ThemeProvider />
//     </>
//   );
// }

// export default App;
