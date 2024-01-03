import express from 'express'
import config from './config.js';

//Create app
export const app = express();

//port where the serer listens
export const PORT = config.PORT;