import net from 'net';

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
}

export default Client;
