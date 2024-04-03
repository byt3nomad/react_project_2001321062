import React, { useState, useEffect } from 'react';
import FoodTable from './FoodTable';
import SelectedFoodTable from './SelectedFoodTable';

const FoodManager = ({ foods }) => {
    const [selectedFoods, setSelectedFoods] = useState([]);

    const addFoodToSelected = (food) => {
        setSelectedFoods(prevSelectedFoods => {
            if (prevSelectedFoods.find(f => f.id === food.id)) {
                return prevSelectedFoods;
            }
            return [...prevSelectedFoods, food];
        });
    };

    return (
        <div>
            <SelectedFoodTable foods={selectedFoods} />
            <FoodTable foods={foods} onFoodClick={addFoodToSelected} />
        </div>
    );
};

export default FoodManager;
