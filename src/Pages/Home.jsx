import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <HelmetProvider>
        <div>
            <Helmet>
                <title>Welcome to IndusHub - Empowering Industrial Innovation</title>
            </Helmet>
            <h1>Hello I am home pages</h1>
        </div>
        </HelmetProvider>
    );
};

export default Home;