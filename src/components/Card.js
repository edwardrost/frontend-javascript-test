import React from 'react';

const Card = ({id, firstName, lastName, email, phone}) => {
	return (
		<tr class="dim pointer">
			<td class="tl pv3 pr3 bb b--black-20">{id}</td>
			<td class="tl pv3 pr3 bb b--black-20">{firstName}</td>
			<td class="tl pv3 pr3 bb b--black-20">{lastName}</td>
			<td class="tl pv3 pr3 bb b--black-20">{email}</td>
			<td class="tl pv3 pr3 bb b--black-20">{phone}</td>
		</tr>
	);
}

export default Card;