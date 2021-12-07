import React from 'react';
import Spinner from '../Ui/Spinner/Spinner';
import CharacterItem from './CharacterItem';

const CharactersGrid = ({ items, isLoading }) => {
	return isLoading ? (<Spinner></Spinner>) : (
		<section className="cards">
			{
				items.map(item => (
					<CharacterItem
						key={item.char_id}
						item={item}
					></CharacterItem>
				))
			}
		</section>
	)

};

export default CharactersGrid;