import React, {Component} from 'react';

var randomText = [
	`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dictum, risus vel sollicitudin pretium,
			mi neque tempor sem, et venenatis mauris lacus et metus. Integer lacinia tortor augue,
			at sodales turpis fermentum vel. Pellentesque quis dolor purus.
			Duis ac sapien nec nisl blandit tempor et non metus. Nulla facilisi. Suspendisse potenti.
			Donec vitae felis in nulla euismod auctor a a mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
	`Sed nec pulvinar eros. Duis blandit efficitur eros ac cursus. Fusce pulvinar lobortis nulla, eu consequat nunc.
			Ut at luctus lectus. Aliquam vitae egestas dolor. Nunc eget interdum nunc."
			Aenean ut nisl blandit lectus blandit tincidunt quis in mi. Sed vitae tempus felis."
			Donec vel sodales tortor. Cras vehicula turpis at risus semper pharetra."
			Cras placerat magna eu elementum ultricies. Morbi accumsan porttitor orci sit amet pharetra.
			Integer a ex tempus, interdum arcu quis, suscipit lorem. Pellentesque a auctor tortor.`,
	`Aenean a sapien elit. Nam tempus massa nec imperdiet imperdiet.
			Maecenas nec nulla vel dui feugiat vehicula nec vitae eros. Donec vehicula, felis rhoncus rhoncus ornare,
			ex lectus aliquet justo, et mollis libero purus sit amet libero. Sed quis orci lobortis, porttitor erat a,
			dictum nisi. Proin vestibulum turpis id vestibulum sagittis. Vivamus pellentesque vitae nibh vitae tristique.
			Morbi vel tortor tortor. Vivamus porta tristique viverra.`
];

function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export default class Article extends Component {
	render() {
		const randomTextIndex = generateRandomNumber(0, 2);
		return (
			<article className="article">
				{randomText[randomTextIndex]}
			</article>
		);
	}
}
