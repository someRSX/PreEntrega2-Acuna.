import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import itemsData from '../data/items.json';
import './ItemDetailContainer.css';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const foundItem = itemsData.find(item => item.id === itemId);
        setItem(foundItem || null);
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {loading ? (
        <p>Loading...</p>
      ) : item ? (
        <div className="item-detail">
          <img src={item.image} alt={item.name} className="item-image" />
          <div className="item-info">
            <h1>{item.name}</h1>
            <p>Price: ${item.price}</p>
            <p>{item.description}</p>
          </div>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;