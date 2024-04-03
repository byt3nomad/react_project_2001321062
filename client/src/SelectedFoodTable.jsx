const SelectedFoodTable = ({ foods }) => {

    const totals = foods.reduce(
        (acc, food) => {
            acc.calories += food.calories;
            acc.protein += food.protein;
            acc.fat += food.fat;
            acc.carbs += food.carbs;
            return acc;
        },
        { calories: 0, protein: 0, fat: 0, carbs: 0 }
    );

    return (
        <div>
            <h2 className="text-lg font-semibold my-4">Selected Foods</h2>
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
                    {foods.map((food) => (
                        <tr key={food.id}>
                            <td className="border px-4 py-2">{food.description}</td>
                            <td className="border px-4 py-2">{food.calories}</td>
                            <td className="border px-4 py-2">{food.protein}</td>
                            <td className="border px-4 py-2">{food.fat}</td>
                            <td className="border px-4 py-2">{food.carbs}</td>
                        </tr>
                    ))}
                    <tr className="bg-gray-100 font-semibold">
                        <td className="border px-4 py-2">Totals</td>
                        <td className="border px-4 py-2">{totals.calories}</td>
                        <td className="border px-4 py-2">{totals.protein}</td>
                        <td className="border px-4 py-2">{totals.fat}</td>
                        <td className="border px-4 py-2">{totals.carbs}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

};
export default SelectedFoodTable;
