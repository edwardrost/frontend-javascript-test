import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className="pa2">
			<input
				className='w-100 pa2 ba b--green' 
				type='search' 
				placeholder='поиск'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;