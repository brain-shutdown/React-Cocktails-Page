import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

const CocktailList = () => {
	const { loading, filteredDrinks } = useGlobalContext();

	if (loading) {
		return <Loading />;
	}

	if (filteredDrinks.length === 0) {
		return <h2 className='section-title'>No cocktails matched your search criteria</h2>;
	}

	return (
		<section className='section'>
			<h2 className='section-title'>cocktails</h2>
			<div className='cocktails-center'>
				{filteredDrinks.map((drink) => {
					const { idDrink } = drink;
					return <Cocktail key={idDrink} {...drink} />;
				})}
			</div>
		</section>
	);
};

export default CocktailList;
