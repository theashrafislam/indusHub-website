import { Helmet, HelmetProvider } from 'react-helmet-async';
import Banner from '../Components/Banner';
import EstateSection from '../Components/EstateSection';
// import { Toaster } from 'react-hot-toast';
// import { useLocation } from 'react-router-dom';

const Home = () => {
    // const location = useLocation()
    // console.log(location);
    return (
        <HelmetProvider>
        <div>
            <Helmet>
                <title>Welcome to IndusHub - Empowering Industrial Innovation</title>
            </Helmet>
            <Banner></Banner>
            <EstateSection></EstateSection>
            

            {/* <Toaster /> */}
        </div>
        </HelmetProvider>
    );
};

export default Home;