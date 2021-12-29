import React, { useState, useContext } from 'react';
import useFetch from './useFetch';
import useDebounce from './useDebounce';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [query, setQuery] = useState('');
	const { data, loading, error } = useFetch(url);
	const debouncedValue = useDebounce(query, 300);
	let filteredDrinks = data?.drinks;

	if (filteredDrinks) {
		if (query !== '') {
			filteredDrinks = data.drinks.filter((drink) => {
				return drink.strDrink.toLowerCase().includes(debouncedValue.toLowerCase());
			});
		}
	}

	return (
		<AppContext.Provider
			value={{
				loading,
				error,
				setQuery,
				filteredDrinks,
			}}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
