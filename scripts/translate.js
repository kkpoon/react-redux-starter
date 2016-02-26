/* a clone from https://github.com/yahoo/react-intl/tree/master/examples/translations/scripts*/

import * as fs from 'fs';
import * as path from 'path';

import {sync as globSync} from 'glob';
import {sync as mkdirpSync} from 'mkdirp';

const MESSAGES_PATTERN = './build/messages/**/*.json';
const LANG_DIR         = process.env.LANG_DIR || './build/lang';

// Aggregates the default messages that were extracted from the example app's
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app's default locale.
let defaultMessages = globSync(MESSAGES_PATTERN)
  .map((filename) => fs.readFileSync(filename, 'utf8'))
  .map((file) => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({id, defaultMessage}) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }

      collection[id] = defaultMessage;
    });

    return collection;
  }, {});

mkdirpSync(LANG_DIR);

["zh-Hans","zh-Hans-CN"].forEach((locale) => {

  let langFile = path.join(LANG_DIR, locale + '.json');
  let oldMessages = JSON.parse(fs.readFileSync(langFile, "utf-8"));
  let getText = (id) => oldMessages[id];

  let messages = Object.keys(defaultMessages)
    .map((id) => [id, defaultMessages[id]])
    .reduce((collection, [id, defaultMessage]) => {
      collection[id] = getText(id) || defaultMessage;
      return collection;
    }, {});

  let last = Object.keys(oldMessages).length || 0;
  let current = Object.keys(messages).length || 0;
  fs.writeFileSync(langFile, JSON.stringify(messages, null, 2));
  console.log(`updated ${locale} at ${langFile}
    last: ${last}, current: ${current}`);
});
