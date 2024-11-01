import { getAllUsernames, insertUsername } from './db/queries.js';
import type { Request, Response } from 'express';

export async function getUsernames(req: Request, res: Response) {
  try {
    const usernames = await getAllUsernames();
    console.log('Usernames: ', usernames);
    res.send('Usernames: ' + usernames.map((user) => user.username).join(', '));
  } catch (error) {
    console.error('Error fetching usernames:', error);
    res.status(500).send('Error fetching usernames');
  }
}

export async function createUsernameGet(req: Request, res: Response) {
  // render the form
  res.send('Form to create username');
}

export async function createUsernamePost(req: Request, res: Response) {
  try {
    const { username } = req.body;
    await insertUsername(username);
    res.redirect('/');
  } catch (error) {
    console.error('Error creating username:', error);
    res.status(500).send('Error creating username');
  }
}
