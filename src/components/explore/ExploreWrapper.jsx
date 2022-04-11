import React, {useState, useEffect} from 'react';
import ExploreCard from './ExploreCard';


const Wrapper = () => {
    const [cards, setCards] = useState([]);
    const [query, setQuery] = useState('');
    useEffect(() => {
        window.fetch('/api/posts')
            .then((response) => response.text())
            .then((data) => JSON.parse(data))
            .then((cards) => {setCards(cards)})
            .catch((err) => {
                console.error(err)
            })
    },[])


    return (
<<<<<<< HEAD
<<<<<<< HEAD
        <div>
            <Search/>
            <ExploreCard 
            username="John Doe" 
            url="/ExploreImages/wes-hicks-unsplash.jpg" 
            caption="Beautiful city skyline"/>
            <ExploreCard 
                username="Jane Smith" 
                url="/ExploreImages/toomas-tartes-unsplash.jpg" 
                caption="Went hiking with a friend"/> 
            <ExploreCard 
                username="Damon Friedman" 
                url="/ExploreImages/lily-banse--YHSwy6uqvk-unsplash.jpg" 
                caption="Dinner at my favorite place"/>
            <ExploreCard 
                username="Allison West" 
                url="/ExploreImages/luca-bravo-unsplash.jpg" 
                caption="Times Square."/>
            <ExploreCard 
                username="Chris Summers" 
                url="/ExploreImages/joshua-sortino-unsplash.jpg" 
                caption="incredible atmosphere here"/>
            <ExploreCard 
                username="Mary Jane" 
                url="/ExploreImages/andrey-andreyev-unsplash.jpg" 
                caption="Views from Iceland"/>
            <ExploreCard 
                username="Jack Todd" 
                url="/ExploreImages/clark-douglas-unsplash.jpg" 
                caption="today's lunch"/> 
            <ExploreCard 
                username="Stephen Long" 
                url="/ExploreImages/spacex-Ptd-iTdrCJM-unsplash.jpg" 
                caption="Successful launch day!"/>
            <ExploreCard 
                username="Tommy Watford" 
                url="/ExploreImages/joshua-koblin-unsplash.jpg" 
                caption="Ferrari LaFerrari"/>
            <ExploreCard 
                username="Jack Daniels" 
                url="/ExploreImages/alexander-popov-unsplash.jpg" 
                caption="Last night's concert rocked"/>
            <ExploreCard 
                username="Nia Winter" 
                url="/ExploreImages/marcin-ciszewski-unsplash.jpg" 
                caption="New yacht listing"/>
            <ExploreCard 
                username="Eddie Strickland" 
                url="/ExploreImages/photo-nic-unsplash.jpg" 
                caption="Made some great memories"/>
        </div>
=======
=======
>>>>>>> 21addc99d79ef2136424a5fcf25d0b61f21d8949
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
<<<<<<< HEAD
>>>>>>> b20422409d4e78c10bfdf7ed1881725f32a6051a
=======
>>>>>>> 21addc99d79ef2136424a5fcf25d0b61f21d8949
    );
}

export default Wrapper;