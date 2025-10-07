import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    // worst case
    const [readLists, setReadLists] = useState([])
    const [sort, setSort] = useState([])
    const readList = useLoaderData();
    //console.log(readList)

    useEffect(() => {
        const storeBookData = getStoreBook();
        const convertedStoredBooks = storeBookData.map(id => parseInt(id))
        const myReadlist = readList.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadLists(myReadlist)
    }, [])

    const handleSort = type => {
        setSort(type)
        
        if (type === "pages") {
            const sortedByPage=[...readLists].sort((a,b) => a.totalPages - b.totalPages)
            setReadLists(sortedByPage)
        }
        if (type === "ratings") {
            const sortedByRatings = [...readLists].sort((a, b) => b.rating - a.rating)
            setReadLists(sortedByRatings)
        }
    }

    return (
        <div>
            {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                {/* For TSX uncomment the commented types below */}
                <button className="btn" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                Sort By : {sort? sort:""}
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */ }>
                    <li><button onClick={() => handleSort("pages")}>Pages</button></li>
                    <li><button onClick={() => handleSort("ratings")}>Ratings</button></li>
                </ul>
            <Tabs>
                <TabList>
                <Tab>Read Book List</Tab>
                <Tab>My Wish List</Tab>
                </TabList>

                <TabPanel>
                <h2>Book I Read {readLists.length}</h2>
                {
                    readLists.map(b=><Book key={b.bookId} singleBook={b}></Book>)
                }
                </TabPanel>
                <TabPanel>
                <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;