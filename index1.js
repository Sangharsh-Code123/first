const redis = require('redis');

const client = redis.createClient();

client.connect().then(async () => {
  await client.set('greeting', 'Hello, Redis!');
  const value = await client.get('greeting');
  console.log(value); // Output: Hello, Redis!
  client.quit();
});
