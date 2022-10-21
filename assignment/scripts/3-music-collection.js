console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
	const album = {};
	album.title = title;
	album.artist = artist;
	album.yearPublished = yearPublished;

	collection.push(album);
	console.log('Album added to collection: ', album);
}

console.log('********** Start of addToCollection **********')
addToCollection('Un Verano Sin Ti', 'Bad Bunny', 2022);

addToCollection('Certified Lover Boy', 'Drake', 2022);

addToCollection('Only Built for Infinity Links', 'Quavo & Takeoff', 2022);

addToCollection("Survivor's Remorse: A Side ", 'G Herbo', 2022);

addToCollection('Beautiful Mind', 'Rod Wave', 2022);

addToCollection('I Never Liked You', 'Future', 2022);


console.log('Entire Albums in Collection: ', collection);

console.log('********** End of addToCollection **********')

console.log('********** Start of showCollection **********')

function showCollection(Array) {
	console.log('Albums is the current Collection is: ', array.length);

	for (info in collection) {
		console.log(info.title, 'by ', info.artist, ', published in', info.yearPublished);
	}
}







console.log('********** End of showCollection **********')


