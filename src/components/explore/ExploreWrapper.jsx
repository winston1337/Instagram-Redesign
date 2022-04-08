import React, {useState, useEffect} from 'react';
import ExploreCard from './ExploreCard';
// import Search from "./Search";

const Wrapper = () => {
    const [cards, setCards] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        window.fetch('/api/instagram')
            .then((response) => response.text())
            .then((data) => JSON.parse(data))
            .then((cards) => {setCards(cards)})
            .catch((err) => {
                console.error(err)
            })
    },[])


    return (
    <>  <input className="searchBar" type="text" value=
        {query} onChange={e => {
            setQuery(e.target.value)
        }}/> 
         <div className="cards">
            { cards
                .filter((post) => {
                    return (
                        post.name.toLowerCase().includes(query.toLowerCase()) ||
                        post.caption.toLowerCase().includes(query.toLowerCase())
                    )
                })
                .map((post) => {
                    console.log(post)
                    return(
                        <ExploreCard
                        username={post.name}
                        avatar={post.avatar} 
                        url={post.image} 
                        caption={post.caption}
                        key={post.id}
                        />
                    )
                })
            }
            </div>


    </>
    );
}

export default Wrapper;