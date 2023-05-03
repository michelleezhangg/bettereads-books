import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), 'json');
  //Read the json data file data.json
  const fileContents = JSON.parse(await fs.readFile(jsonDirectory + '/books.json', 'utf8'));
  // get the correct book object that matches
  const bookObj = fileContents.filter(book => book.title === req.query.title);
  //Return the book object of the data file in json format
  res.status(200).json(bookObj);
}