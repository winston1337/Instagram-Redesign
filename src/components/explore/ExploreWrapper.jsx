import React from 'react';
import ExploreCard from './ExploreCard';
import Search from "./Search";

const Wrapper = () => {
    return (
   <>  <div><Search/></div>
        <ExploreCard
          username="John Doe"
          avatar="/ExploreImages/alexander-hipp-unsplash.jpg" 
          url="/ExploreImages/wes-hicks-unsplash.jpg" 
          caption="Beautiful city skyline"/>
        <ExploreCard 
            username="Jane Smith"
            avatar="/ExploreImages/clayton-mpDV4xaFP8c-unsplash.jpg" 
            url="/ExploreImages/toomas-tartes-unsplash.jpg" 
            caption="Went hiking with a friend"/> 
        <ExploreCard 
            username="Damon Friedman"
            avatar="/ExploreImages/brian-tromp-oyoKfOhYtZI-unsplash.jpg" 
            url="/ExploreImages/lily-banse--YHSwy6uqvk-unsplash.jpg" 
            caption="Dinner at my favorite place"/>
        <ExploreCard 
            username="Allison West"
            avatar="/ExploreImages/christina-wocintechchat-com-unsplash.jpg" 
            url="/ExploreImages/luca-bravo-unsplash.jpg" 
            caption="Times Square."/>
        <ExploreCard 
            username="Chris Summers" 
            avatar="/ExploreImages/jurica-koletic-7YVZYZeITc8-unsplash.jpg"
            url="/ExploreImages/joshua-sortino-unsplash.jpg" 
            caption="incredible atmosphere here"/>
        <ExploreCard 
            username="Mary Jane" 
            avatar="/ExploreImages/meg-wagener-unsplash.jpg"
            url="/ExploreImages/andrey-andreyev-unsplash.jpg" 
            caption="Views from Iceland"/>
        <ExploreCard 
            username="Jack Todd" 
            avatar="/ExploreImages/andre-tan-AyhVvdRnHKc-unsplash.jpg"
            url="/ExploreImages/clark-douglas-unsplash.jpg" 
            caption="today's lunch"/> 
        <ExploreCard 
            username="Stephen Long" 
            avatar="/ExploreImages/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg"
            url="/ExploreImages/spacex-Ptd-iTdrCJM-unsplash.jpg" 
            caption="Successful launch day!"/>
        <ExploreCard 
            username="Tommy Watford" 
            avatar="/ExploreImages/andre-sebastian-C2Nf5iPOnz0-unsplash.jpg"
            url="/ExploreImages/joshua-koblin-unsplash.jpg" 
            caption="Ferrari LaFerrari"/>
        <ExploreCard 
            username="Jack Daniels" 
            avatar="/ExploreImages/logan-weaver-lgnwvr-Gi1rDqy9R40-unsplash.jpg"
            url="/ExploreImages/alexander-popov-unsplash.jpg" 
            caption="Last night's concert rocked"/>
        <ExploreCard 
            username="Nia Winter" 
            avatar="/ExploreImages/christina-wocintechchat-com-lFntEHwQvi4-unsplash.jpg"
            url="/ExploreImages/marcin-ciszewski-unsplash.jpg" 
            caption="New yacht listing"/>
        <ExploreCard 
            username="Eddie Strickland"
            avatar="/ExploreImages/dhaya-eddine-bentaleb-rsw9h9tD20Q-unsplash.jpg" 
            url="/ExploreImages/photo-nic-unsplash.jpg" 
            caption="Made some great memories"/>
    </>
    );
}

export default Wrapper;