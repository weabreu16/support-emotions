import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { AppNavBar } from './components/app-navbar';
import {
    About,
    Article,
    Contact,
    Home,
    HowTo,
    Profiles,
    Calendar,
    Chats,
    Meeting,
    Pricing
} from './pages';

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <AppNavBar /> }>
                <Route index element={ <Home /> } />
                <Route path="about" element={ <About /> } />
                <Route path="contact" element={ <Contact /> } />
                <Route path="article" element={ <Article /> } />
                <Route path="how-to" element={ <HowTo /> } />
                <Route path="profiles" element={ <Profiles /> } />
                <Route path="calendar" element={ <Calendar /> } />
                <Route path="chats" element={ <Chats /> } />
                <Route path="meeting" element={ <Meeting /> } />
                <Route path="pricing" element={ <Pricing /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
