import { Link, useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const cards = useLoaderData();
    const {id} = useParams();
    const numberId = parseInt(id);

    const details = cards.find(card => card.id === numberId);
    console.log(details);
    const {image, estate_title, segment_name, description, price, status, area, location, facilities, } = details;

    return (
        <div className="space-y-5 mx-4 md:mx-4 lg:mx-0 mt-4">
            <div>
                <img className="w-full h-[200px] md:h-[400px] lg:h-[600px] rounded-2xl" src={image} alt="" />
            </div>
            <div>
                <h1 className="font-bold text-2xl md:text-3xl mb-2">{estate_title}</h1>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Segment: </span>{segment_name}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Description: </span>{description}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Price: </span>{price}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Status: </span>{status}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Area: </span>{area}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Location: </span>{location}</p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Facilities: </span>{facilities}</p>
                <ul className="list-disc pl-5">
                    {facilities.map((facility, index) => (
                        <li key={index} className="text-gray-700 text-base mb-2">{facility}</li>
                    ))}
                </ul>
            </div>
            <div>
                <Link to="/" className="btn w-full text-base md:text-xl font-bold bg-violet-600 text-gray-50 hover:text-black">Back to Home</Link>
            </div>
        </div>
    );
};

export default EstateDetails;