import React, { useState, useEffect } from 'react';
import UserProfile from "../../asstes/user.jpeg"
import Card from './Card';

const Dashboard = () => {
    const [cards, setCards] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const [newImageUrl, setNewImageUrl] = useState('')

    useEffect(() => {
        fetchRandomImages();
    }, []);

    const fetchRandomImages = async () => {
        try {
            const response = await fetch('https://picsum.photos/v2/list?page=1&limit=6');
            const data = await response.json();
            setCards(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const hendleDelete = (deleteId) => {
        const deleteCard = cards.filter((card) => card.id !== deleteId);
        setCards(deleteCard);
    }

    const updateCard = (cardId, newImageData, newTitle) => {
        setCards((prevCards) => {
            return prevCards.map((card) =>
                card.id === cardId
                    ? { ...card, download_url: newImageData, author: newTitle }
                    : card
            );
        });
    };
    const createCard = () => {
        const newCard = {
            id: cards.length + 1,
            download_url: newImageUrl,
            author: newTitle,
        };

        setCards([...cards, newCard]);
        setNewTitle('');
        setNewImageUrl('');
    };
    return (
        <div className="dashboard">
            <div className="sidebar">
                <h3>Necleo</h3>
                <div className="top_sec">
                    <ul>
                        <li>My Project</li>
                        <li>Sample Project</li>
                        <li>Apps</li>
                        <li>Intro to Necleo</li>
                    </ul>
                </div>
                <div className='bottam_sec'>
                    <ul>
                        <li>Help & Support</li>
                        <li>Feedback</li>
                        <li>Collapse</li>
                    </ul>
                </div>
            </div>

            <div className="container">
                <div className="main-sec">
                    <nav>
                        <h4>Free Trail</h4>
                        <img src={UserProfile} alt="userprofile" />
                    </nav>
                    <div className="add-card">
                        <input
                            type="text"
                            placeholder="New Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={newImageUrl}
                            onChange={(e) => setNewImageUrl(e.target.value)}
                        />
                        <button onClick={createCard}>Create Card</button>
                    </div>
                    <div className='card-container'>
                        {cards &&
                            cards.map((card) => (
                                <Card
                                    key={card.id}
                                    card={card}
                                    title={card}
                                    onUpdate={updateCard}
                                    onDelete={() => hendleDelete(card.id)}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
