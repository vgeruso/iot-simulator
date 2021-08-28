import net from 'net';
import readline from 'readline';

// const leitor = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

class Client {
  connect(address) {
    const c = net.createConnection({
      host: address.ip,
      port: address.port,
    });

    c.on('data', (data) => {
      console.info(data.toString());
    });

    return c;
  }

  sendMsg(leitor, con) {
    leitor.question('escreva uma mensagem: ', (msg) => {
      con.write(msg);
      this.option(leitor, con);
    });
  }

  option(leitor, con) {
    leitor.question('Enviar mensagem? use [Y/N]: ', (op) => {
      if (op === 'Y' || op === 'y') {
        this.sendMsg(leitor, con);
      } else {
        leitor.close();
        process.exit();
      }
    });
  }
}

export default Client;
