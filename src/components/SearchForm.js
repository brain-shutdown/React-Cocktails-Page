import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
	const { setQuery } = useGlobalContext();
	const searchValue = useRef('');

	function searchDrink() {
		setQuery(searchValue.current.value);
		console.log(searchValue.current.value);
	}

	useEffect(() => {
		searchValue.current.focus();
	}, []);

	return (
		<section className='section search'>
			<form className='search-form' onSubmit={(e) => e.preventDefault()}>
				<div className='form-control'>
					<label htmlFor='name'>Search your favourite cocktail</label>
					<input type='text' name='name' id='name' ref={searchValue} onChange={searchDrink} />
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
