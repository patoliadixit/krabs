// import { bold } from 'colors';

export const currentEnv = process.env?.NODE_ENV;
export const safeEnv = currentEnv ?? 'development';

export const environmentWarningMessage = [
  `\n\u{26A0}\u{FE0F}   ${('Warning')}\n`,
  `The ${('NODE_ENV')} environment variable is ${('undefined')}.`,
  `Krabs will run in ${safeEnv.bold} mode, meaning`,
  `it will only serve tenants domains set as ${safeEnv.bold} domains.\n`,
].join('\n').yellow;
