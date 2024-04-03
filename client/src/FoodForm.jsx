import React, { useState } from 'react';

const FoodForm = ({ onFoodAdded }) => {
    const [showForm, setShowForm] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [formData, setFormData] = useState({
        description: '',
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const isNumberField = ['calories', 'protein', 'fat', 'carbs'].includes(name);
        setFormData({
            ...formData,
            [name]: isNumberField ? Number(value) : value,
        });
    };

    const resetForm = () => {
        setFormData({
            description: '',
            calories: 0,
            protein: 0,
            fat: 0,
            carbs: 0,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        const response = await fetch('http://localhost:3000/foods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            setSuccessMessage('Food added successfully!');
            resetForm();
            onFoodAdded();
            setTimeout(() => setSuccessMessage(''), 5000);
        } else {
            setSuccessMessage('An error occurred. Please try again.');
            setTimeout(() => setSuccessMessage(''), 5000);
        }

    };

    return (
        <div>
            <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? 'Hide Form' : 'Add Food'}
            </button>

            {showForm && (
                <form onSubmit={handleSubmit} className="mt-4">
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            )}
            {successMessage && <div className="mt-3 text-green-500">{successMessage}</div>}

            {showForm && (
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            type="text"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="calories">
                            Kcal
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="calories"
                            type="number"
                            name="calories"
                            value={formData.calories}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="protein">
                            Protein (g)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="protein"
                            type="number"
                            name="protein"
                            value={formData.protein}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fat">
                            Fat (g)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="fat"
                            type="number"
                            name="fat"
                            value={formData.fat}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="carbs">
                            Carbs (g)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="carbs"
                            type="number"
                            name="carbs"
                            value={formData.carbs}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default FoodForm;
