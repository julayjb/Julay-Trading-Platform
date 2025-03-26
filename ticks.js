import DerivAPIBasic from 'https://cdn.skypack.dev/@deriv/deriv-api/dist/DerivAPIBasic';

const app_id = 1089; // Replace with your app_id or leave as 1089 for testing.
const connection = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${app_id}`);
const api = new DerivAPIBasic({ connection });

const ticks_history_request = {
  ticks_history: 'R_50',
  adjust_start_time: 1,
  count: 1000,
  end: 'latest',
  start: 1,
  style: 'candles',
};

const ticks_request = {
  ...ticks_history_request,
  subscribe: 1,
};

const tickSubscriber = () => api.subscribe(ticks_request);

const ticksHistoryResponse = async (res) => {
  const data = JSON.parse(res.data);
  if (data.error !== undefined) {
    console.log('Error : ', data.error.message);
    connection.removeEventListener('message', ticksHistoryResponse, false);
    await api.disconnect();
  }
  if (data.msg_type === 'history') {
    console.log(data.history);
  }
  connection.removeEventListener('message', ticksHistoryResponse, false);
};
const dadosElement = document.getElementById('dados');

const ticksResponse = async (res) => {
  const data = JSON.parse(res.data);
  // This example returns an object with a selected amount of past ticks.
  if (data.error !== undefined) {
    console.log('Error : ', data.error.message);
    connection.removeEventListener('message', ticksResponse, false);
    await api.disconnect();
  }
  // Allows you to monitor ticks.
  if (data.msg_type === 'tick') {
    const tick = data.tick;
    console.log('Received tick data:', tick); // Adicionei este console.log
    const html = `
      <p>Ask: ${tick.ask}</p>
      <p>Bid: ${tick.bid}</p>
      <p>Epoch: ${tick.epoch}</p>
      <p>ID: ${tick.id}</p>
      <p>Pip Size: ${tick.pip_size}</p>
      <p>Quote: ${tick.quote}</p>
      <p>Symbol: ${tick.symbol}</p>
    `;
    console.log('Generated HTML:', html); // Adicionei2 este console.log
    dadosElement.innerHTML = html;
  }
};

const subscribeTicks = async () => {
  connection.addEventListener('message', ticksResponse);
  await tickSubscriber();
};

const unsubscribeTicks = async () => {
  connection.removeEventListener('message', ticksResponse, false);
  await tickSubscriber().unsubscribe();
};

const getTicksHistory = async () => {
  connection.addEventListener('message', ticksHistoryResponse);
  await api.ticksHistory(ticks_history_request);
};

const subscribe_ticks_button = document.querySelector('#ticks');
subscribe_ticks_button.addEventListener('click', subscribeTicks);

const unsubscribe_ticks_button = document.querySelector('#ticks-unsubscribe');
unsubscribe_ticks_button.addEventListener('click', unsubscribeTicks);

const ticks_history_button = document.querySelector('#ticks-history');
ticks_history_button.addEventListener('click', getTicksHistory);



