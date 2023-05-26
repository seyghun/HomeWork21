import React from 'react';
import { useSelector } from 'react-redux';
import AddPublicationForm from './AddPubCode';
import check from "./images/check.png";
import message from "./images/message.png";
import repost from "./images/repost.png";
import like from "./images/like.png";
import download from "./images/download.png";
import "./Apps.css";



const Apps = () => {
    const authors = useSelector((state) => state.authors);
    const publications = useSelector((state) => state.publications);

    return (
        <div>
            <h1 className='add_pub'>Додати публікацію</h1>
            <AddPublicationForm authors={authors} />
            {publications.map((publication, index) => {
                const author = authors.find((author) => author.id === publication.authorId);

                return (
                    <div key={index} className='card'>
                        <div className='user_info'>
                            <img src={author.avatar} alt="avatar" className='avatar' />
                            <h3 className='author_name'>{author.name}</h3>
                            <img className='check' src={check} alt='check'></img>
                            <p id='profile_tag'>{author.tag}</p>
                        </div>
                        <div className='post_part'>
                            <p className='publication_text'>{publication.text}</p>
                            <img src={publication.imageUrl} id='post_img' alt="photo" />
                            <div className='actions'>
                                <img className='message_ico' src={message} alt='message'></img>
                                <p>512</p>
                                <img className='repost_ico' src={repost} alt='repost'></img>
                                <p>98</p>
                                <img className='like_ico' src={like} alt='like'></img>
                                <p>1712</p>
                                <img className='download_ico' src={download} alt='download'></img>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Apps;
