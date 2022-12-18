const DessertList = (props) => {
    const lowCaloriesDesserts = props.data
        .filter((dessert) => {
            return dessert.calories <= 200;
        })
        .sort((a, b) => {
            return a.calories - b.calories;
        })
        .map((dessert) => {
            return (
                <li key={dessert.sno}>
                    {dessert.name} - {dessert.calories} cal
                </li>
            );
        });
    return (
        <ul>
            {lowCaloriesDesserts}
        </ul>
    )
}

export default DessertList;
