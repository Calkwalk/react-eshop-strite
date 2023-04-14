import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Header, Footer, Banner, NewsLatter, Home, Category, SingleProduct} from './components';
import AppContext from './utils/context';

function App() {
    return (
        
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path='/' element={ <Navigate to="/home" />} />
                    <Route path='/home' element={ <><Banner /><Home /></> } />
                    <Route path='/category/:id' element={ <Category /> } />
                    <Route path='/product/:id' element={ <SingleProduct /> } />
                </Routes>

                <NewsLatter />
                <Footer />
            </AppContext>
            
        </BrowserRouter>
    );
}

export default App;
