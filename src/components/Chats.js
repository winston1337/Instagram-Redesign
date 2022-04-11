import React from "react";
import "./Chat.css";
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chat_container">
        <div className="chats">
            <Chat
                name="Queen B"
                message="hey wassup"
                timestamp="2 minutes ago"
                profilePic="https://media.architecturaldigest.com/photos/6112a33f8c1207bc593eff74/16:9/w_2560%2Cc_limit/1253172998"
            />
            <Chat
                name="Gunna"
                message="OMG WHAT HAPPENED VIRGIL"
                timestamp="4 days ago"
                profilePic="https://www.rollingstone.com/wp-content/uploads/2022/01/Gunna-press-credit-Shaun-Llewelyn.jpg?resize=1800,1200&w=1800"
            />
            <Chat
                name="Elon Musk"
                message="is the earth flat?"
                timestamp="54 minutes ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
            />
            <Chat
                name="Serena Williams"
                message="do you have time for a few sets?"
                timestamp="5 minutes ago"
                profilePic="https://media.self.com/photos/61006684037a0dc12a2fc462/4:3/w_2560%2Cc_limit/GettyImages-460481071.jpg"
            />
            <Chat
                name="Ye"
                message="Donda 3 listening party soon"
                timestamp="30 minutes ago"
                profilePic="https://manofmany.com/wp-content/uploads/2021/10/Kanye-West-White-Face-Mask-1200x900.png"
            />
            <Chat
                name="Jordan"
                message="tell Lebron he need 2 more before he the king."
                timestamp="2 hours ago"
                profilePic="https://m.media-amazon.com/images/I/71-GQUlui9L._AC_SL1024_.jpg"
            />
            <Chat
                name="Denzel Washington"
                message="I'm leaving here with something.."
                timestamp="1 day ago"
                profilePic="https://cdn.britannica.com/89/90089-050-114ACA54/Denzel-Washington-Academy-Award-actor-2002.jpg"
            />
            <Chat
                name="champagnepapi"
                message="what do you think of the new album?"
                timestamp="1 minute ago"
                profilePic="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a"
            />
           
            <Chat
                name="Naruto"
                message="I will become hokage."
                timestamp="10 minutes ago"
                profilePic="https://cdn.vox-cdn.com/thumbor/UswYUb9Ve-sg9EN1f0KMAkOUizE=/0x0:1280x721/1200x800/filters:focal(544x281:748x485)/cdn.vox-cdn.com/uploads/chorus_image/image/70124512/naruto.0.jpg"
            />
            <Chat
                name="King James"
                message="THE KING IS HERE"
                timestamp="20 minutes ago"
                profilePic="https://i.guim.co.uk/img/media/9996789ff94fcd6723a3c32d281fa46ac8015fe2/0_36_3193_1916/master/3193.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=929dc14bb32f551c6dbd2beb1f07f6e7"
            />
        </div>
        </div>

    )
}

export default Chats;
