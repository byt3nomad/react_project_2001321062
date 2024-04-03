import React, { useState, useEffect } from 'react';

const FoodTable = ({ foods, onFoodClick }) => {
    const [filter, setFilter] = useState('');

    const filteredFoods = foods.filter(food =>
        food.description.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
            <h2 className="text-lg font-semibold my-4">Browse foods</h2>

            <input
                type="text"
                placeholder="Filter foods..."
                className="mb-4 px-3 py-2 border rounded shadow appearance-none"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <table className="table-auto w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Description</th>
                        <th className="px-4 py-2">Calories</th>
                        <th className="px-4 py-2">Protein (g)</th>
                        <th className="px-4 py-2">Fat (g)</th>
                        <th className="px-4 py-2">Carbs (g)</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredFoods.map((food) => (
                        <tr key={food.id} onClick={() => onFoodClick(food)} className="cursor-pointer hover:bg-gray-100">
                            <td className="border px-4 py-2">{food.description}</td>
                            <td className="border px-4 py-2">{food.calories}</td>
                            <td className="border px-4 py-2">{food.protein}</td>
                            <td className="border px-4 py-2">{food.fat}</td>
                            <td className="border px-4 py-2">{food.carbs}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FoodTable;
