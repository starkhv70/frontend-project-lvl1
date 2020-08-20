#!/usr/bin/env node
import { greeting, makeQuestion } from '../src/games/brain-gcd.js';
import playGame from '../src/index.js';

playGame(greeting, makeQuestion);
