import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
	return (
		<div className="ph4">
			<table className="f6 w-100 mw8 center">
				<thead>	
					<tr>
						<th className="tl pv3 pr3 bb b--black-20">id</th>
						<th className="tl pv3 pr3 bb b--black-20">First     Name</th>
						<th className="tl pv3 pr3 bb b--black-20">Last      Name</th>
						<th className="tl pv3 pr3 bb b--black-20">Email</th>
						<th className="tl pv3 pr3 bb b--black-20">Phone</th>
					</tr>
				</thead>
				<tbody>
					{
						robots.map((user, i) => {
							return (
								<Card 
									key={i} 
									id={robots[i].id} 
									firstName={robots[i].firstName}
									lastName={robots[i].lastName}
									email={robots[i].email}
									phone={robots[i].phone}
								/>
							);
						})

					}
				</tbody>
			</table>
		</div>
	);
}

export default CardList;