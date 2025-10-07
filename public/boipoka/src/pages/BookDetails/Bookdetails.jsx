import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addTOStoreDB } from '../../utility/addToDB';

const Bookdetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const bookDetails = useLoaderData();
    const singleBook = bookDetails.find(book => book.bookId === bookId);

    const {bookName, image} = singleBook;

    const handleMarkAsRead = id => {
        //store with id
        // where to store
        // array or collection
        // if book already exist then show a alart
        // if book not exist then push in the collection or array
        addTOStoreDB(id);
        alert("Book dded to read list")
    }

    return (
        <div className='w-2/3 mx-auto'>
            <img className='w-48' src={image}/>
            <h5>{bookName}</h5>

            <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-accent m-2'>Mark as Read</button>
            <button className='btn btn-info m-2'>Add to WishList</button>
        </div>
    );
};

export default Bookdetails;