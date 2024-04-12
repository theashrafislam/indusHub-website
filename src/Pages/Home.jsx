import { Helmet, HelmetProvider } from 'react-helmet-async';
import Banner from '../Components/Banner';
import EstateSection from '../Components/EstateSection';

const Home = () => {
    return (
        <HelmetProvider>
        <div>
            <Helmet>
                <title>Welcome to IndusHub - Empowering Industrial Innovation</title>
            </Helmet>
            <Banner></Banner>
            <EstateSection></EstateSection>
            
        </div>
        </HelmetProvider>
    );
};

export default Home;