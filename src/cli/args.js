import process from 'node:process';

const parseArgs = () => {
  const args = process.argv.slice(2)
    .reduce((acc, cur, index, array) => {
      if (index % 2) {
        acc += cur;
      } else {
        acc += cur.slice(2);
      }

      if (index < array.length - 1) {
        if (index % 2) {
          acc +=  ', ';
        } else {
          acc += ' is ';
        }
      }

      return acc;
    }, '');

  console.log(args);
};

parseArgs();