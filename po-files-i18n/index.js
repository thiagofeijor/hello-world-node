import data from './mock'
import fs from 'fs'
import { po } from 'gettext-parser'

var output = po.compile(data);

fs.writeFileSync('output.po', output);