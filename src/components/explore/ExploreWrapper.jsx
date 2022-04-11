import React from 'react';
import ExploreCard from './ExploreCard';
import Search from "./Search";

const Wrapper = () => {
    return (
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
    );
}

export default Wrapper;