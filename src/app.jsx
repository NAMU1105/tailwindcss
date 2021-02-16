import './app.css';
import Auth from '../src/users/pages/auth';
import Header from '../src/shared/components/Navigation/mainHeader';
import Footer from './shared/components/Navigation/footer';

const App = () => {
    return (
        <div className="App bg-black">
            <Header />
            <main>
                <Auth />
            </main>
            <Footer />
        </div>
    );
};

export default App;
