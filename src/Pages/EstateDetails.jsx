import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const cards = useLoaderData();
    const {id} = useParams();

    console.log(cards, id);

    return (
        <div className="flex gap-5 justify-center items-center">
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h1 className="font-bold text-2xl mb-2"></h1>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Segment:</span> </p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Description:</span> </p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Price:</span> </p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Status:</span> </p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Area</span> </p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Location:</span> </p>
                <p className="text-gray-700 text-base mb-2"><span className='font-bold'>Facilities:</span></p>
                <ul className="list-disc pl-5">
                    {/* {facilities.map((facility, index) => (
                        <li key={index} className="text-gray-700 text-base mb-2">{facility}</li>
                    ))} */}
                </ul>
            </div>
        </div>
    );
};

export default EstateDetails;