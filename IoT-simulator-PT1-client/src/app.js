import net from 'net';
import delay from 'delay';

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

  async writeMsg(leitor, con) {
    con.on('data', (data) => {
      console.log(`sua mensagem: ${data.toString()}`);
    });
    await delay(100);
    this.option(leitor, con);
  }

  sendMsg(leitor, con) {
    leitor.question('escreva uma mensagem: ', (msg) => {
      con.write(msg);
      this.writeMsg(leitor, con);
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
