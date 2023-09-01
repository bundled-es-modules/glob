import { readFileSync, writeFileSync } from 'node:fs';

const fileBefore = readFileSync('./index-esm.js', 'utf-8');
const process = readFileSync('./process.js', 'utf-8');

/**
 * Manually fix some issues with process global being unavailable
 */
const fileAfter = `${process}\n${fileBefore}`;

writeFileSync('./index-esm.js', fileAfter);