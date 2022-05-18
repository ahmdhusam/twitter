import { Main } from './pages';
import { Route, Routes } from 'react-router-dom';
import MainSignForm from './pages/Sign';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />;
            <Route
                path='/signup'
                element={
                    <MainSignForm
                        btnSubValue='Up'
                        insertInputName
                        msgBeforLink='Do you have an account?'
                        redirectTo='in'
                    />
                }
            />
            <Route
                path='/signin'
                element={<MainSignForm btnSubValue='In' msgBeforLink="Don't have an account?" redirectTo='up' />}
            />
            <Route
                path='*'
                element={(() => (
                    <div>404</div>
                ))()}
            />
            ;
        </Routes>
    );
}

export default App;
