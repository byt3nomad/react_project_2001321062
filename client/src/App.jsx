import React, { useEffect, useState } from 'react';
import FoodForm from './FoodForm';
import FoodTable from './FoodTable';
import FoodManager from './FoodManager';

function App() {
    const [foods, setFoods] = useState([]);

    const fetchFoods = async () => {
        const response = await fetch('http://localhost:3000/foods');
        const data = await response.json();
        setFoods(data);
    };

    useEffect(() => {
        fetchFoods();
    }, []);


    return (
        <div className="min-h-screen pt-6 bg-gray-100 flex flex-col  items-center">
            <div className="w-full max-w-[700px]">
                <FoodForm onFoodAdded={fetchFoods} />
                <FoodManager foods={foods} />
            </div>
        </div>
    );
}

export default App;
