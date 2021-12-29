import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../useFetch';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
	const { id } = useParams();
	const { data, error, loading } = useFetch(url + id);

	if (error) {
		return (
			<section className='error-page section'>
				<div className='error-container'>
					<h1>{error}</h1>
				</div>
			</section>
		);
	}
	if (loading) {
		return <Loading />;
	}
	const drink = data.drinks[0];
	const { strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb } = drink;
	const ingredients = Object.keys(drink)
		.filter((item) => item.includes('strIngredient'))
		.reduce((obj, key, index) => {
			const ingredient = drink[key];
			if (ingredient) {
				return [...obj, { id: index, ingredient: ingredient }];
			}
			return [...obj];
		}, []);

	return (
		<section className='section cocktail-section'>
			<Link to='/' className='btn btn-primary'>
				Back Home
			</Link>
			<h2 className='section-title'>{strDrink}</h2>
			<div className='drink'>
				<img src={strDrinkThumb} alt={strCategory} />
				<div className='drink-info'>
					<div>
						<span className='drink-data'>name :</span>
						{strDrink}
					</div>
					<div>
						<span className='drink-data'>category :</span>
						{strCategory}
					</div>
					<div>
						<span className='drink-data'>info :</span>
						{strAlcoholic}
					</div>
					<div>
						<span className='drink-data'>Glass :</span>
						{strGlass}
					</div>
					<div>
						<span className='drink-data'>Instructions :</span>
						{strInstructions}
					</div>
					<div>
						<span className='drink-data'>Ingredients :</span>
						<ol>
							{ingredients.map((ingredient) => {
								return <li key={ingredient.id}>{ingredient.ingredient}</li>;
							})}
						</ol>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleCocktail;
