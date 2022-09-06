import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const { data : blogs, isPending, error} = useFetch('http://localhost:8001/blogs');
    return ( 
        <div className="home">
            { <div>Test 1 x1...</div> }
            { error && <div>{error}</div> } 
            { isPending && <div>Loading ...</div> }
            
        </div>
    )
}
 
export default Home;