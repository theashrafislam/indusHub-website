import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EstateCard = ({ card }) => {
    const { image, estate_title, segment_name, description, price, status, area, location, facilities, id } = card;
    return (
        <div className="max-w-md overflow-hidden shadow-2xl mb-6 rounded-2xl">
            <img className="w-full h-[250px]" src={image} alt="Estate Image" />
            <div className="px-6 py-4">
                <h1 className="font-bold text-2xl mb-2">{estate_title}</h1>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Segment:</span> {segment_name}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Description:</span> {description}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Price:</span> {price}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Status:</span> {status}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Area</span> {area} sq ft</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Location:</span> {location}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Facilities:</span></p>
                <ul className="list-disc pl-5">
                    {facilities.map((facility, index) => (
                        <li key={index} className="text-gray-700 text-base mb-2">{facility}</li>
                    ))}
                </ul>
                <div>
                    <Link to={`/estateDetails/${id}`} className='btn w-full font-bold bg-violet-600 text-gray-50 hover:text-black'>View Property</Link>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;

EstateCard.propTypes = {
    card: PropTypes.object,
}