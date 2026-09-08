const axios = require('axios');
const { parse } = require('./parse')
const { BASE_URL } = require('./base')
const { save } = require('./save')

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Host': 'github.com',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  }
});

async function run (since = 'daily', language = 'all') {
  let reqPath = `/trending${language == 'all' ? '' : ('/' + language)}`
  if(since !== 'daily') reqPath += `?since=${since}`

  const { data } = await instance.get(reqPath);
  await save(parse(data), since, language)
};

(async () => {
  try {
    console.log('get', 'daily', 'all')
    await run('daily', 'all')
    console.log('done')
  } catch (error) {
    console.error('Error language all:', error);
    process.exit(1)
  }
})();
