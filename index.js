/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleRecords` variable below to gain access to an array of records.

  Keep in mind that your functions must still have and use a parameter for accepting all records.
*/
const exampleRecords = require("./records");
// Do not change the line above.

/**
 * getAllRecordTitles()
 * -----------------------------
 * Returns all of titles from an array of records. If the inputted `records` array is empty, throw an error with a message.
 * @param {Object[]} records - An array of records. See the `records.js` file for an example of this array.
 * @returns {string[]|Error} An array of strings, which are record titles.
 *
 * NOTE: You must use the `.map()` method.
 */
function getAllRecordTitles(records) {
  if (records.length === 0){
    throw "No records found"
  }
return records.map(record => record.title)
}

/**
 * checkIfAnyRecordHasGenre()
 * -----------------------------
 * Returns a boolean, representing whether or not any of the records includes the provided genre. If the inputted `records` array is empty, throw an error with a message.
 * @param {Object[]} records - An array of records. See the `records.js` file for an example of this array.
 * @param {string} genre - A genre.
 * @returns {boolean|Error} Returns `true` if any record exists in the list with the given genre, otherwise returns `false`.
 *
 * NOTE: You must use the `.some()` method.
 *
 * EXAMPLE:
 *  checkIfAnyRecordHasGenre(records, "funk");
 *  //> true
 *
 * EXAMPLE:
 *  checkIfAnyRecordHasGenre(records, "marching band");
 *  //> false
 */
function checkIfAnyRecordHasGenre(records, genre) {
  if (records.length === 0){
    throw "No records found"
  }
  return records.some(record => record.genres.includes(genre))
}

/**
 * findByTitle()
 * -----------------------------
 * Returns a record object from an array of objects based on the title. If the inputted `records` array is empty, throw an error with a message. If the title does not match any record, return `null`.
 * You can assume every record on the list has a unique title.
 * @param {Object[]} records - An array of records. See the `records.js` file for an example of this array.
 * @param {string} id - A title`.
 * @returns {Object|Error|null} The record object with the matching title.
 *
 * NOTE: You must use the `.find()` method.
 */
function findByTitle(records, id) {
  if (records.length === 0){
    throw "No records found"
  }
  let recordId = records.find(record => record.title.toUpperCase() === id.toUpperCase())
  if(!recordId){
    return null
  }
  return recordId
}

/**
 * filterByLabel()
 * -----------------------------
 * Returns all record objects with a matching label. If the inputted `records` array is empty, throw an error with a message. If no records match the inputted `label`, return `[]`.
 * @param {Object[]} records - An array of movies. See the `movies.js` file for an example of this array.
 * @param {string} label - The label of a record. (e.g. "Capitol")
 * @returns {Object[]|Error} An array of records where at least one of the labels matches the `label` inputted.
 *
 * NOTE: You must use the `.filter()` method.
 * 
 */
function filterByLabel(records, label) {
  if (records.length === 0){
    throw "No records found"
  }
return records.filter(record => record.label === label )
}

/**
 * checkMinYear()
 * -----------------------------
 * Returns either true or false depending whether all records came out in or after the given year. If the records array is empty, throw an error with a message. If no year is given, use 1900 as the default value of `year`.
 * @param {Object[]} records - An array of records. See the `records.js` file for an example of this array.
 * @param {number} year - A year
 * @returns {Boolean|Error} A boolean
 *
 * NOTE: You must use the .every()` method.
 *
 * EXAMPLES:
 *  checkMinYear(records, 1999));
 *  //>  false
 * 
 *  checkMinYear(records, 1865));
 *  //>  true
 */
function checkMinYear(records, year = 1900) {
  if (records.length === 0){
    throw "No records found"
  }
  return records.every(record => record.year >= year )
}

/**
 * getArtistAndTitleObjects()
 * -----------------------------
 * Transform each record, returning an array of objects where the key is the artist's name and the value is the record's title. If there are no records, throw an error with a message.
 * @param {Object[]} records - An array of records. See the `records.js` file for an example of this array.
 * @returns {Object[]|Error} An array of objects where the key is the artist's name and the value is the title.
 * 
 * NOTE: You must use the `.map()` method.
 *
 * EXAMPLE:
 *  getArtistAndTitleObjects(records);
 *  //> [
      {"The Band": "Music From Big Pink"},
      {"The Jimi Hendrix Experience": "Axis: Bold as Love"},
      {"Beyoncé": "Lemonade"},
      {"The Beach Boys": "Pet Sounds"},
      {"Patti Smith": "Horses"},
      {"A Tribe Called Quest": "The Low End Theory"},
      {"The Velvet Underground": "The Velvet Underground and Nico"},
      {"Kendrick Lamar": "To Pimp a Butterfly"},
      {"Missy Elliott": "Supa Dupa Fly"},
      {"Prince and the Revolution": "Purple Rain"},
      {"Radiohead": "OK Computer"},
      {"Frank Ocean": "Blond"},
      {"Bruce Springsteen": "Darkness on the Edge of Town"},
      {"Pink Floyd": "The Dark Side of the Moon"},
      {"David Bowie": "The Rise and Fall of Ziggy Stardust and the Spiders From Mars"},
      {"Sly and the Family Stone": "There’s a Riot Goin’ On"},
      {"Wu-Tang Clan": "Enter the Wu-Tang (36 Chambers)"},
      {"Marvin Gaye": "What’s Going On"},
      {"Daft Punk": "Random Access Memories"},
      {"Alanis Morissette": "Jagged Little Pill"},
      {"The Beatles": "Rubber Soul"}]
 */
function getArtistAndTitleObjects(records) {
  if (records.length === 0){
    throw "No records found"
  }
  return records.map((record) => {
    return {[record.artist]: record.title}

    // let obj = {}
    // obj[record.artist] = record.title
    // return obj
  })
}

// Do not change anything below this line.
module.exports = {
  getAllRecordTitles,
  checkIfAnyRecordHasGenre,
  findByTitle,
  filterByLabel,
  checkMinYear,
  getArtistAndTitleObjects,
};
