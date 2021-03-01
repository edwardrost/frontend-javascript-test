import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className="">
			<input
				className='w-100 ml3 pa3 ba br3 b--green' 
				type='search' 
				placeholder='Поиск'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;