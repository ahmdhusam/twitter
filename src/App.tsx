import { Main } from './pages';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />;
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
