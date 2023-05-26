import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPublication } from './actions';
import "./AddPubCode.css";

const AddPublicationForm = ({ authors }) => {
    const [publicationData, setPublicationData] = useState({
        authorId: authors[0].id,
        text: '',
        imageUrl: ''
    });

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setPublicationData({
            ...publicationData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const publicationDataWithAuthorId = {
            ...publicationData,
            authorId: parseInt(publicationData.authorId)
        };
        dispatch(addPublication(publicationDataWithAuthorId));
        setPublicationData({
            authorId: authors[0].id,
            text: '',
            imageUrl: ''
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label className='label' htmlFor="authorId">Автор:</label>
                <select
                    id="authorId"
                    name="authorId"
                    value={publicationData.authorId}
                    onChange={handleInputChange}
                >
                    <option value="" disabled selected>---Select author---</option>
                    {authors.map((author) => (
                        <option key={author.id} value={author.id}>
                            {author.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='text-area'>
                <label className='label' htmlFor="text">Текст публікації:</label>
                <textarea
                    id="text"
                    name="text"
                    value={publicationData.text}
                    onChange={handleInputChange}
                    maxLength="100"></textarea>
            </div>
            <div className='photo_link'>
                <label className='label' htmlFor="imageUrl">Посилання на зображення:</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={publicationData.imageUrl}
                    onChange={handleInputChange}
                />
            </div>
            <button className='add_btn fill' type="submit">Add Post</button>
        </form >
    );
};

export default AddPublicationForm;
