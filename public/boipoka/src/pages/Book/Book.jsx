import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';


const Book = ({singleBook}) => {
    // const data = use(bookPromise)
    // console.log(data)

    console.log(singleBook)
    const {bookName, author, bookId, image, rating, category, tags, yearOfPublishing, publisher} = singleBook

    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 shadow-sm border border-gray-100">
                            <figure className='p-3  bg-gray-100 rounded  w-2/3 mx-auto mt-4'>
                                <img className='h-[166px]'
                                src={image}
                                alt="Shoes" />
                            </figure>
                            <div className='flex justify-center gap-5'>
                                {
                                    tags.map(tag => <button>{tag}</button>)
                                }
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">
                                {bookName}
                                <div className="badge badge-secondary">{yearOfPublishing}</div>
                                </h2>
                                <p>Book By: {publisher}</p>
                                <div className='border-1 border-dashed'></div>
                                <div className="card-actions justify-end">
                                <div className="badge badge-outline">{category}</div>
                                <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
                                </div>
                            </div>
                            </div>
                    </div>
        </Link>
    );
};

export default Book;