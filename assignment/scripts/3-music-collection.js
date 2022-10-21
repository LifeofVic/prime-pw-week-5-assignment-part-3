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


addToCollection('Un Verano Sin Ti', 'Bad Bunny', 2022);

addToCollection('Certified Lover Boy', 'Drake', 2022);

addToCollection('Only Built for Infinity Links', 'Quavo & Takeoff', 2022);

addToCollection("Survivor's Remorse: A Side ", 'G Herbo', 2022);

addToCollection('Beautiful Mind', 'Rod Wave', 2022);

addToCollection('I Never Liked You', 'Future', 2022);


console.log('Entire Albums in Collection: ', collection);