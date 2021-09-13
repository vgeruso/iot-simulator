import net from 'net';

const server = net.createServer((con, err) => {
  if (err) {
    console.error(err);
  }
  console.info('-V- Cliente connected -V-\n');
  con.write('Conexão estabelecida');

  con.on('data', async (data) => {
    console.log(`${data.toString()}\n`);
    con.write(`${data.toString()}\n`);
  });

  con.on('end', () => {
    console.log('-V- Client disconnect -V-\n');
  });
});

export default server;
