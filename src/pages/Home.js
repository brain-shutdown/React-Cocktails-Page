import React from 'react';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useGlobalContext } from '../context';

const Home = () => {
	const { error } = useGlobalContext();
	if (error) {
		return (
			<section className='error-page section'>
				<div className='error-container'>
					<h1>{error}</h1>
				</div>
			</section>
		);
	}
	return (
		<main>
			<SearchForm />
			<CocktailList />
		</main>
	);
};

export default Home;
