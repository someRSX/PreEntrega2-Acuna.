import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import itemsData from '../data/items.json';
import './ItemListContainer.css';

function ItemListContainer() {
  const { id: categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const filteredItems = categoryId
          ? itemsData.filter(item => item.category === categoryId)
          : itemsData;
        setItems(filteredItems);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.length > 0 ? (
            items.map(item => (
              <li key={item.id} className="item-list-item">
                <Link to={`/item/${item.id}`}>
                  <div className="item-card">
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-info">
                      <h2>{item.name}</h2>
                      <p>Price: ${item.price}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <p>No items found</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default ItemListContainer;