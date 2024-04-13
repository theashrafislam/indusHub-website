import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EstateCard = ({ card }) => {
    const { image, estate_title, segment_name, description, price, status, area, location, facilities, id } = card;
    return (


        <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl lg:text-3xl font-semibold tracking-wide">{estate_title}</h2>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Segment: </span>{segment_name}</p>
                    <p className="dark:text-gray-800">
                        {description.length > 100 ? description.slice(0, 100) : description}
                    </p>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Price: </span>{price}</p>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Status: </span>{status}</p>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Area: </span> {area}</p>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Location:</span> {location}</p>
                    <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Facilities:</span></p>
                    <ul className='list-disc pl-5'>
                        {facilities.map((facilities, index) => (
                            <li key={index} className="text-gray-700 text-base mb-2">{facilities}</li>
                        ))}
                    </ul>
                </div>
                <Link to={`/estateDetails/${id}`} className='btn w-full font-bold text-lg md:text-xl rounded-xl bg-violet-600 text-gray-50 hover:text-black'>
                    View Property
                </Link>
            </div>
        </div>

        // <div className="overflow-hidden shadow-2xl rounded-2xl">
        //     <img className="w-full h-[250px]" src={image} alt="" />
        //     <div className="px-6 py-4 flex flex-col">
        //         <div>
        //             <h1 className="font-bold text-2xl mb-2">{estate_title}</h1>
        //             <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Segment:</span> {segment_name}</p>
        //             <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Description: </span>
        //                 {description.length > 100 ? description.slice(0, 100) : description}
        //             </p>
        //             <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Price:</span> {price}</p>
        //             <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Status:</span> {status}</p>
        //             <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Area: </span> {area}</p>
        //             <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Location:</span> {location}</p>
        //             <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Facilities:</span></p>
        //             <ul className="list-disc pl-5">
        //                 {facilities.map((facility, index) => (
        //                     <li key={index} className="text-gray-700 text-base mb-2">{facility}</li>
        //                 ))}
        //             </ul>
        //         </div>

        //         <div className='flex-grow'>
        //             <Link to={`/estateDetails/${id}`} className='btn w-full font-bold bg-violet-600 text-gray-50 hover:text-black'>View Property</Link>
        //         </div>
        //     </div>
        // </div>
    );
};

export default EstateCard;

EstateCard.propTypes = {
    card: PropTypes.object,
}