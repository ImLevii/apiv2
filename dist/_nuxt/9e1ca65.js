(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{500:function(t,e,r){var content=r(592);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("23b24688",content,!0,{sourceMap:!1})},501:function(t,e,r){var content=r(594);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(6).default)("b70dad34",content,!0,{sourceMap:!1})},591:function(t,e,r){"use strict";r(500)},592:function(t,e,r){(e=r(5)(!1)).push([t.i,".uk-container[data-v-088cb92b]{padding-bottom:20px}.page-section[data-v-088cb92b]{padding:20px}.ticket-table[data-v-088cb92b]{margin:10px 0 0;font-size:14px;line-height:14px}.ticket-table .ticket[data-v-088cb92b]{border-bottom:1px solid #dfe7eb}.ticket-table .ticket[data-v-088cb92b]:last-child{border-bottom:none}.ticket-table thead[data-v-088cb92b]{background:#262626}.ticket-table thead tr[data-v-088cb92b]{border-bottom:1px solid #dfe7eb}.ticket-table thead tr th[data-v-088cb92b]:first-child{border-top-left-radius:3px;border-bottom-left-radius:3px}.ticket-table thead tr th[data-v-088cb92b]:last-child{border-top-right-radius:3px;border-bottom-right-radius:3px}.ticket-table thead tr th[data-v-088cb92b]{padding-left:10px;padding-right:10px;color:#fff;opacity:.85}.ticket-table .ticket td[data-v-088cb92b]{padding:10px}.ticket-table .ticket td[data-v-088cb92b]:last-child{text-align:right}.ticket-table .ticket td.ticket-title[data-v-088cb92b],.ticket-table thead tr th.ticket-title[data-v-088cb92b]{margin-right:auto}.ticket-table .ticket td.ticket-title[data-v-088cb92b]{font-weight:700}.ticket-table .ticket .assigned ul[data-v-088cb92b]{display:flex;list-style:none;margin:0;padding:0}.ticket-table .ticket .assigned ul li[data-v-088cb92b]{margin-right:4px}.ticket-table .ticket .assigned ul li[data-v-088cb92b]:last-child{margin-right:0}",""]),t.exports=e},593:function(t,e,r){"use strict";r(501)},594:function(t,e,r){(e=r(5)(!1)).push([t.i,".ticket-table .ticket .player-avatar{width:24px;height:24px}",""]),t.exports=e},783:function(t,e,r){"use strict";r.r(e);r(21);var c=r(3),n={middleware:"staff",data:function(){return{tickets:null}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,e.next=3,r.get("/staff/tickets/assigned").then((function(t){var data={};return 200===t.status&&(data.tickets=t.data),data})).catch((function(t){}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))()},computed:{getReadableStatus:function(){return function(t){switch(t){case"INITIATED":return"Initiated";case"ANSWERED":return"Answered";case"USER_REPLY":return"User Reply";case"CLOSED":return"Closed"}}}}},l=(r(591),r(593),r(2)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-container uk-margin"},[r("ul",{staticClass:"uk-breadcrumb"},[r("li",[r("nuxt-link",{attrs:{to:{name:"staff-dashboard"}}},[t._v("Staff Dashboard")])],1),t._v(" "),t._m(0),t._v(" "),r("li",[r("nuxt-link",{attrs:{to:{name:"staff-tickets-assigned"}}},[t._v("Assigned Tickets")])],1)]),t._v(" "),r("div",{staticClass:"page-section uk-margin"},[r("span",{staticClass:"page-title"},[t._v("Assigned Tickets")]),t._v(" "),r("table",{staticClass:"ticket-table uk-table"},[t._m(1),t._v(" "),r("tbody",t._l(t.tickets,(function(e){return r("tr",{staticClass:"ticket"},[r("td",{staticClass:"ticket-title"},[r("SupportTicketLink",{attrs:{ticket:e,staff:!0}})],1),t._v(" "),r("td",[r("span",{staticClass:"uk-label ticket-status",class:[e.ticket_status.toLowerCase()]},[t._v(t._s(t.getReadableStatus(e.ticket_status)))])]),t._v(" "),r("td",[r("DateDisplay",{attrs:{timestamp:e.last_update,ago:!0}})],1),t._v(" "),r("td",[r("DateDisplay",{attrs:{timestamp:e.created_at}})],1),t._v(" "),r("td",[r("PlayerAvatar",{attrs:{user:e.created_by}}),t._v(" "),r("PlayerLink",{attrs:{user:e.created_by}})],1),t._v(" "),r("td",{staticClass:"assigned"},[r("ul",[0===e.assigned_to.length?r("li",[t._v("\n\t\t\t\t\t\t\tnobody\n\t\t\t\t\t\t")]):t._l(e.assigned_to,(function(t){return r("li",[r("PlayerAvatar",{attrs:{user:t}})],1)}))],2)]),t._v(" "),r("td",[r("SupportTicketLink",{staticClass:"uk-button uk-btn-blue",attrs:{ticket:e,staff:!0}},[t._v("View")])],1)])})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"divider"},[e("i",{staticClass:"fas fa-chevron-right"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",{staticClass:"ticket-title"},[t._v("Ticket")]),t._v(" "),r("th",[t._v("Status")]),t._v(" "),r("th",[t._v("Last Update")]),t._v(" "),r("th",[t._v("Created")]),t._v(" "),r("th",[t._v("Created By")]),t._v(" "),r("th",[t._v("Assigned To")]),t._v(" "),r("th")])])}],!1,null,"088cb92b",null);e.default=component.exports;installComponents(component,{SupportTicketLink:r(203).default,DateDisplay:r(65).default,PlayerAvatar:r(41).default,PlayerLink:r(34).default})}}]);