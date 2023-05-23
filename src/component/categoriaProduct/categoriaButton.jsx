import React from "react";

export const categoriaButton = ({ categories, filterCategory }) => {
	return (
		<section className='categories'>
			{categories.map(category => (
				<option
					type='button'
					className='btn-category'
					onClick={() => filterCategory(category)}
					key={category}
				>
					{category}
				</option>
			))}
		</section>
	);
};

export default categoriaButton