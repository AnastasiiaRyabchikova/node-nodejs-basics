import { env } from 'node:process';

const parseEnv = () => {
  const vars = Object.keys(env)
    .filter(item => item.indexOf('RSS_') === 0)
    .map(item => `${item}=${env[item]}`)
    .join('; ');

  console.log(vars);
};

parseEnv();