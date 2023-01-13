(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{464:function(t,n,e){var r=e(9);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},504:function(t,n,e){var content=e(600);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(6).default)("7bd3cb76",content,!0,{sourceMap:!1})},599:function(t,n,e){"use strict";e(504)},600:function(t,n,e){(n=e(5)(!1)).push([t.i,'.hero[data-v-142ce5ff]{display:flex;align-items:center;justify-content:center;padding:60px 0}.transaction .transaction-details[data-v-142ce5ff]{display:flex;flex-direction:column}.transaction .transaction-details .field-label[data-v-142ce5ff]{color:#b4b4b4;font-size:14px;line-height:14px}.transaction .transaction-details .tx-amount[data-v-142ce5ff]{color:#fff;font-size:18px;font-weight:700;line-height:18px;margin:6px 0}.transaction .transaction-details .cx-details[data-v-142ce5ff]{color:#69cf54;font-size:14px;line-height:14px;text-transform:lowercase}.transaction .transaction-details .payment-address[data-v-142ce5ff]{color:#69cf54;font-size:14px;line-height:17px;text-transform:lowercase;text-align:left;margin:3px 0}.transaction .transaction-details .payment-address i[data-v-142ce5ff]{font-size:12px}.transaction .transaction-details .exchange-rate[data-v-142ce5ff]{color:#69cf54;font-weight:700}.transaction .transaction-details .gift-card[data-v-142ce5ff]{padding:14px;background:#2e3235;border:1px solid #43454b;border-radius:3px;color:#fff;font-family:"Rajdhani",sans-serif;font-size:18px;font-weight:700;text-align:center}.transaction .payment-instructions .qr-code[data-v-142ce5ff]{width:150px;height:150px;margin:10px auto 0}.transaction hr[data-v-142ce5ff]{border-top-color:#43454b}.transaction .back-button[data-v-142ce5ff]{position:absolute;top:26px;right:40px;padding:8px 12px;background:#2f3a40;border-radius:3px;color:#fff;font-size:16px;font-family:"Rajdhani",sans-serif;font-weight:700;text-transform:uppercase;line-height:15px}.transaction .back-button i[data-v-142ce5ff]{font-size:13px;margin-right:4px}.transaction[data-v-142ce5ff]{position:relative;display:flex;flex-direction:column;width:460px;padding:30px 40px;background:#1e2225;box-shadow:20px 20px 60px #222a32;border:1px solid #2f3a40;border-radius:6px;box-sizing:border-box}.transaction .form-subtitle[data-v-142ce5ff],.transaction .form-title[data-v-142ce5ff]{color:#fff;font-family:"Rajdhani",sans-serif}.transaction .form-title[data-v-142ce5ff]{font-size:24px;font-weight:700;text-transform:uppercase;text-align:center;line-height:24px}.transaction .form-subtitle[data-v-142ce5ff]{font-size:14px;text-transform:uppercase;text-align:center;line-height:14px}.transaction .uk-form-group[data-v-142ce5ff]{position:relative}.transaction .uk-form-group .uk-input[data-v-142ce5ff]{padding:40px 14px 20px;font-size:21px;font-weight:700;line-height:16px}.transaction .uk-input[data-v-142ce5ff]{padding:20px 14px;background:#2e3235;border:1px solid #43454b;border-radius:3px;color:#fff;font-size:16px;line-height:13px}.transaction .uk-input[data-v-142ce5ff]::-webkit-inner-spin-button,.transaction .uk-input[data-v-142ce5ff]::-webkit-outer-spin-button{display:none}.transaction .uk-input-label[data-v-142ce5ff]{position:absolute;top:10px;padding:0 14px;font-size:13px;color:#b4b4b4}.transaction .currency-conversion[data-v-142ce5ff]{width:80px;display:flex;flex-direction:column;align-items:flex-start;position:absolute;right:0;top:10px;padding:6px 10px;border-left:1px solid #43454b}.transaction .currency-conversion>.name[data-v-142ce5ff]{margin-bottom:5px;color:#b4b4b4;font-size:13px;line-height:12px}.transaction .currency-conversion>.tag[data-v-142ce5ff]{color:#fff;font-size:21px;font-weight:700;line-height:13px}.transaction .payment-instructions[data-v-142ce5ff]{display:flex;flex-direction:column;padding:14px;background:#2e3235;border:1px solid #43454b;border-radius:3px}.transaction .payment-instructions .important-notice[data-v-142ce5ff]{font-size:12px;line-height:13px;color:#b4b4b4}',""]),t.exports=n},785:function(t,n,e){"use strict";e.r(n);e(42),e(464),e(21);var r=e(3),o={layout:"dark",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$axios,r=t.route,o=t.error,c=r.params.id,n.next=4,e.get("/store/tx/info?tx_id="+c).then((function(t){if(200===t.status)return{transaction:t.data};throw"Unexpected response status"})).catch((function(t){t.response&&(404===t.response.statusCode?o({statusCode:404,message:"Couldn't find that transaction"}):o({statusCode:t.response.statusCode,message:t.response.data}))}));case 4:return n.abrupt("return",n.sent);case 5:case"end":return n.stop()}}),n)})))()},head:function(){return{title:"Your Transaction"}},data:function(){return{showingGiftCard:!1,updatingTask:null}},mounted:function(){var ins=this;this.updatingTask=setInterval((function(){if("PAYMENT_COMPLETE"===ins.transaction.tx_status)return clearInterval(ins.updatingTask),void(ins.updatingTask=null);ins.fetchTransactionInfo()}),25e3)},beforeDestroy:function(){this.destroyed=!0,null!=this.updatingTask&&clearInterval(this.updatingTask)},methods:{fetchTransactionInfo:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("/store/tx/info?tx_id="+t.transaction.id).then((function(n){if(200!==n.status)throw"Unexpected response status";t.transaction=n.data})).catch((function(t){t.response&&(404===t.response.statusCode?error({statusCode:404,message:"Couldn't find that transaction"}):error({statusCode:t.response.statusCode,message:t.response.data}))}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()},toggleGiftCard:function(){this.showingGiftCard=!this.showingGiftCard}},computed:{getCurrencyName:function(){switch(this.transaction.currency){case"BTC":return"Bitcoin";case"ETH":return"Ethereum";case"XRP":return"Ripple";case"XMR":return"Monero";case"BNB":return"Binance";case"LTC":return"Litecoin";case"USDC":return"Stablecoin"}},getReceiveAmount:function(){return Math.round(100*(this.transaction.crypto_amount/this.transaction.exchange_rate+Number.EPSILON))/100},isAwaitingFunds:function(){return"AWAITING_PAYMENT"===this.transaction.tx_status},isAwaitingConfirmations:function(){return"AWAITING_CONFIRMATIONS"===this.transaction.tx_status},isPaymentComplete:function(){return"PAYMENT_COMPLETE"===this.transaction.tx_status}}},c=(e(599),e(2)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"uk-container uk-margin"},[e("div",{staticClass:"hero"},[e("div",{staticClass:"transaction uk-animation-fade"},[e("span",{staticClass:"form-title",staticStyle:{"text-align":"left"}},[t._v("Your Transaction")]),t._v(" "),e("span",{staticClass:"form-subtitle",staticStyle:{"text-align":"left"}},[t._v("#"+t._s(t.transaction.id))]),t._v(" "),e("div",{staticClass:"uk-grid uk-margin"},[e("div",{staticClass:"uk-width-1-2@m"},[e("div",{staticClass:"transaction-details"},[e("span",{staticClass:"field-label"},[t._v("You send")]),t._v(" "),e("span",{staticClass:"tx-amount"},[t._v(t._s(t.transaction.crypto_amount)+" "+t._s(t.transaction.currency))]),t._v(" "),e("span",{staticClass:"cx-details"},[t._v(t._s(t.getCurrencyName))])])]),t._v(" "),e("div",{staticClass:"uk-width-1-2@m"},[e("div",{staticClass:"transaction-details"},[e("span",{staticClass:"field-label"},[t._v("You receive")]),t._v(" "),e("span",{staticClass:"tx-amount"},[t._v(t._s(t.getReceiveAmount)+" USD")]),t._v(" "),e("span",{staticClass:"cx-details"},[t._v("Store Credit")])])])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"transaction-details"},[e("span",{staticClass:"field-label"},[t._v("Exchange rate")]),t._v(" "),e("span",{staticClass:"exchange-rate"},[t._v(t._s(t.transaction.exchange_rate)+" "+t._s(t.transaction.currency)+" = 1 USD")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"uk-grid"},[e("div",{staticClass:"uk-width-1-2@m"},[e("div",{staticClass:"transaction-details"},[e("span",{staticClass:"field-label"},[t._v("Received funds")]),t._v(" "),t.isAwaitingFunds?e("span",{staticClass:"tx-amount"},[t._v("Awaiting funds...")]):e("DateDisplay",{staticClass:"tx-amount",attrs:{timestamp:t.transaction.last_updated}})],1)]),t._v(" "),e("div",{staticClass:"uk-width-1-2@m"},[t.isAwaitingConfirmations||t.isPaymentComplete?e("div",{staticClass:"transaction-details"},[e("span",{staticClass:"field-label"},[t._v("Confirmations")]),t._v(" "),t.isAwaitingConfirmations?e("span",{staticClass:"tx-amount"},[t._v(t._s(t.transaction.confirmations_needed)+" remaining...")]):e("span",{staticClass:"tx-amount"},[t._v("Payment confirmed")])]):t._e()])]),t._v(" "),t.isAwaitingFunds?[e("div",{staticClass:"payment-instructions uk-margin"},[e("div",{staticClass:"transaction-details"},[e("span",{staticClass:"field-label"},[t._v("You send")]),t._v(" "),e("span",{staticClass:"tx-amount"},[t._v(t._s(t.transaction.crypto_amount)+" "+t._s(t.transaction.currency))])]),t._v(" "),e("div",{staticClass:"transaction-details uk-margin-s",staticStyle:{position:"relative"}},[e("span",{staticClass:"field-label"},[t._v("To payment address")]),t._v(" "),e("button",{staticClass:"payment-address",attrs:{type:"button"}},[e("i",{staticClass:"fas fa-copy"}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.transaction.receiving_address)+"\n\t\t\t\t\t\t")])]),t._v(" "),e("img",{staticClass:"qr-code uk-margin",attrs:{src:t.transaction.qr_code_url,alt:"Scan QR Code to Pay"}}),t._v(" "),e("p",{staticClass:"important-notice uk-margin"},[t._v("Please send the exact amount from your wallet or exchange account to the payment address.")])])]:t._e(),t._v(" "),t.isPaymentComplete?[e("hr"),t._v(" "),e("div",{staticClass:"transaction-details"},[e("span",{staticClass:"field-label"},[t._v("Your store credit")]),t._v(" "),this.showingGiftCard?e("span",{staticClass:"gift-card uk-margin-s"},[t._v(t._s(t.transaction.gift_card||"UNKNOWN"))]):t._e(),t._v(" "),this.showingGiftCard?e("button",{staticClass:"flat-button uk-btn-grey uk-margin-s",attrs:{type:"button"},on:{click:function(n){return t.toggleGiftCard()}}},[t._v("Hide Gift Card")]):e("button",{staticClass:"flat-button uk-btn-green alt uk-margin-s",attrs:{type:"button"},on:{click:function(n){return t.toggleGiftCard()}}},[t._v("Show Gift Card")])])]:t._e()],2)])])}),[],!1,null,"142ce5ff",null);n.default=component.exports;installComponents(component,{DateDisplay:e(65).default})}}]);