import { writeFileSync } from 'fs';
import { cases } from '../src/data';

const fileContent = cases
  .map((item) => item.link)
  .filter((item) => item !== undefined)
  .join('\n');

writeFileSync('./routes.txt', fileContent);
