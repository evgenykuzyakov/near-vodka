(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{128:function(e,t,a){"use strict";(function(e){var n=a(137),c=a(1),r=a.n(c),s=a(5),o=a(33),l=a(34),i=a(138),u=a(135),m=a(0),d=a.n(m),f=(a(78),a(164),a(165),a(166),a(167),a(129)),h=a(75),b=a(7),g=a(4),p=a(36),v=a(57),w=a(132),E=a.n(w),_=a(133),N=a(54),j=a(74),O=a(55),k=(window.location.hostname,{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",archivalNodeUrl:"https://rpc.testnet.internal.near.org",contractName:"dev-1613368835598-7014445",walletUrl:"https://wallet.testnet.near.org"}),y=function(t){Object(i.a)(c,t);var a=Object(u.a)(c);function c(t){var n;return Object(o.a)(this,c),(n=a.call(this,t))._near={blockViewCall:function(t,a,n){var c=this;return Object(s.a)(r.a.mark((function s(){var o,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=n||{},c.account.validateArgs(n),o=t+172800<c.lastBlockHeight?c.archivalConnection:c.account.connection,r.next=5,o.provider.query({request_type:"call_function",block_id:t,account_id:k.contractName,method_name:a,args_base64:new e(JSON.stringify(n),"utf8").toString("base64")});case 5:return l=r.sent,r.abrupt("return",l.result&&l.result.length>0&&JSON.parse(e.from(l.result).toString()));case 7:case"end":return r.stop()}}),s)})))()}},n.state={connected:!1,isNavCollapsed:!0,newPosts:[],followers:{},following:{}},n._initNear().then((function(){n.setState({signedIn:!!n._near.accountId,signedAccountId:n._near.accountId,connected:!0})})),n}return Object(l.a)(c,[{key:"_initNear",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n,c=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p.keyStores.BrowserLocalStorageKeyStore,e.next=3,p.connect(Object.assign({deps:{keyStore:t}},k));case 3:return a=e.sent,this._near.archivalConnection=p.Connection.fromConfig({networkId:k.networkId,provider:{type:"JsonRpcProvider",args:{url:k.archivalNodeUrl}},signer:{type:"InMemorySigner",keyStore:t}}),this._near.keyStore=t,this._near.near=a,this._near.walletConnection=new p.WalletConnection(a,k.contractName),this._near.accountId=this._near.walletConnection.getAccountId(),this._near.account=this._near.walletConnection.account(),e.next=12,this._near.account.connection.provider.block({finality:"final"});case 12:return n=e.sent,this._near.lastBlockHeight=n.header.height,this._near.contract=new p.Contract(this._near.account,k.contractName,{viewMethods:["get_account","get_accounts","get_num_accounts","get_followers","get_following","get_post","storage_minimum_balance","storage_balance_of"],changeMethods:["storage_deposit","storage_withdraw","post","follow","unfollow"]}),e.next=17,this._near.contract.storage_minimum_balance();case 17:if(this._near.storageMinimumBalance=e.sent,this._near.accounts={},this._near.getAccount=function(e){return e in c._near.accounts?c._near.accounts[e]:c._near.accounts[e]=Promise.resolve(v.a.load(c._near,e))},this._near.cacheAccount=function(e,t){e in c._near.accounts||(c._near.accounts[e]=Promise.resolve(t))},this._near.posts={},this._near.getPost=function(e,t){var a="".concat(e,"/").concat(t);return a in c._near.posts?c._near.posts[a]:c._near.posts[a]=Promise.resolve(N.a.load(c._near,e,t))},!this._near.accountId){e.next=33;break}return e.next=26,this._near.getAccount(this._near.accountId);case 26:return this._near.accountData=e.sent,e.next=29,this._near.accountData.fetchStorageBalance();case 29:return e.next=31,this._near.accountData.fetchFollowings();case 31:this.setState({followings:Object.assign({},this._near.accountData.followings),enoughStorageBalance:this._near.accountData.stats.enoughStorageBalance}),this._near.accountData.fetchFollowers().then((function(){c.setState({followers:Object.assign({},c._near.accountData.followers)})}));case 33:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"requestSignIn",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"NEAR Vodka",e.next=4,this._near.walletConnection.requestSignIn(k.contractName,"NEAR Vodka");case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._near.walletConnection.signOut(),this._near.accountId=null,this.setState({signedIn:!!this._accountId,signedAccountId:this._accountId});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=Object(n.a)({_near:this._near,updateState:function(t){return e.setState(t)}},this.state),a=this.state.connected?this.state.signedIn?d.a.createElement("div",null,d.a.createElement(O.a,t),d.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e.logOut()}},"Sign out (",this.state.signedAccountId,")")):d.a.createElement("div",null,d.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.requestSignIn(t)}},"Sign in with NEAR Wallet")):d.a.createElement("div",null,"Connecting... ",d.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}));return d.a.createElement("div",{className:"App"},d.a.createElement(b.a,{basename:""},d.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-3"},d.a.createElement("div",{className:"container-fluid"},d.a.createElement(b.b,{className:"navbar-brand",to:"/",title:"NEAR Vodka - connecting people"},d.a.createElement("img",{src:E.a,alt:"NEAR Vodka",className:"d-inline-block align-middle"}),"[TESTNET] NEAR Vodka"),d.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},d.a.createElement("span",{className:"navbar-toggler-icon"})),d.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},d.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},d.a.createElement("li",{className:"nav-item"},d.a.createElement(b.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),this.state.signedIn&&d.a.createElement("li",{className:"nav-item"},d.a.createElement(b.b,{className:"nav-link","aria-current":"page",to:"/discover"},"Discover")),this.state.signedIn&&d.a.createElement("li",{className:"nav-item"},d.a.createElement(b.b,{className:"nav-link","aria-current":"page",to:"/a/".concat(this.state.signedAccountId)},"Profile"))),d.a.createElement("form",{className:"d-flex"},a)))),d.a.createElement("a",{className:"github-fork-ribbon right-bottom fixed",href:"https://github.com/evgenykuzyakov/near-vodka","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub"},"Fork me on GitHub"),d.a.createElement(g.c,null,d.a.createElement(g.a,{exact:!0,path:"/"},this.state.signedIn?d.a.createElement(f.a,t):d.a.createElement(j.a,t)),d.a.createElement(g.a,{exact:!0,path:"/discover"},d.a.createElement(j.a,t)),d.a.createElement(g.a,{exact:!0,path:"/a/:accountId"},d.a.createElement(h.a,t)),d.a.createElement(g.a,{path:"/a/:accountId/:suffix"},d.a.createElement(h.a,t)),d.a.createElement(g.a,{exact:!0,path:"/p/:accountId/:blockHeight"},d.a.createElement(_.a,t)))))}}]),c}(d.a.Component);t.a=y}).call(this,a(14).Buffer)},129:function(e,t,a){"use strict";var n=a(3),c=(a(81),a(0)),r=a.n(c),s=a(53),o=a(35),l=a(24),i=a(7);t.a=function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),u=a[0],m=a[1];return Object(c.useEffect)((function(){if(e.connected){var t=e._near.accountData;if(t){var a=Object.entries(e.followings).map((function(e){var t=Object(n.a)(e,2),a=t[0];return[t[1].stats.lastPostHeight,a]}));t.stats.lastPostHeight>0&&a.push([t.stats.lastPostHeight,t.accountId]),m(a)}else m([])}}),[e.connected,e.followings,e._near.accountData]),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},r.a.createElement(s.a,e),u&&u.length>0?r.a.createElement("div",null,r.a.createElement("h3",null,"Your Feed"),r.a.createElement(o.a,Object.assign({},e,{seed:u,extraPosts:e.newPosts}))):u?r.a.createElement("div",null,r.a.createElement("h3",null,"Feed is empty"),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/discover",className:"btn btn-outline-secondary"},"Discover more"))):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))),r.a.createElement("div",{className:"col col-12 col-lg-4 col-xl-4"},e.signedIn&&r.a.createElement(l.a,e)))))}},132:function(e,t,a){e.exports=a.p+"static/media/near_vodka_logo.f18e89c9.png"},133:function(e,t,a){"use strict";var n=a(3),c=a(0),r=a.n(c),s=a(4),o=a(56),l=a(24);t.a=function(e){var t=Object(s.f)(),a=t.accountId,i=t.blockHeight,u=Object(c.useState)(!1),m=Object(n.a)(u,2),d=m[0],f=m[1];return e.connected&&e._near&&e._near.getPost(a,parseInt(i)).then((function(e){f(e)})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},d?r.a.createElement(o.a,Object.assign({},e,{post:d})):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))),r.a.createElement("div",{className:"col col-12 col-lg-4 col-xl-4"},e.signedIn&&r.a.createElement(l.a,e))))}},139:function(e,t,a){e.exports=a(140)},140:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(127),s=a.n(r),o=(a(145),a(128));s.a.render(c.a.createElement(o.a,null),document.getElementById("root"))},145:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){},170:function(e,t,a){},180:function(e,t,a){},185:function(e,t){},191:function(e,t){},206:function(e,t){},208:function(e,t){},24:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=(a(82),a(25));t.a=function(e){var t=Object.keys(e.followers).filter((function(t){return!(t in e.followings)})).map((function(t){var a="f/".concat(t);return c.a.createElement("div",{key:a,className:"follower"},c.a.createElement("div",{className:"card mb-3"},c.a.createElement("div",{className:"card-body"},c.a.createElement(r.a,Object.assign({accountId:t},e)))))}));return e.connected?t.length>0?c.a.createElement("div",null,c.a.createElement("h3",null,"Follow back"),t):c.a.createElement("div",null):c.a.createElement("div",{className:"d-flex justify-content-center"},c.a.createElement("div",{className:"spinner-grow",role:"status"},c.a.createElement("span",{className:"visually-hidden"},"Loading...")))}},25:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(5),s=a(3),o=a(0),l=a.n(o),i=(a(83),a(7));a(170);var u=function(e){var t=e.accountId,a=e.account;function n(){return(n=Object(r.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.enoughStorageBalance){n.next=3;break}return alert("Add storage balance to follow"),n.abrupt("return");case 3:if(e.followings&&!(t in e.followings)){n.next=5;break}return n.abrupt("return");case 5:return e._near.accountData.followings[t]=a,e.updateState({followings:Object.assign({},e._near.accountData.followings)}),n.next=9,e._near.contract.follow({account_id:t});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(){return(s=Object(r.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.followings&&t in e.followings){a.next=2;break}return a.abrupt("return");case 2:return delete e._near.accountData.followings[t],e.updateState({followings:Object.assign({},e._near.accountData.followings)}),a.next=6,e._near.contract.unfollow({account_id:t});case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return l.a.createElement("div",{className:"follow-button mb-3"},a?t===e.signedAccountId?l.a.createElement("div",null,"It's you"):e.followings&&t in e.followings?l.a.createElement("button",{className:"btn btn-primary btn-unfollow",onClick:function(){return s.apply(this,arguments)}},l.a.createElement("span",null,"Following")):e.signedIn?l.a.createElement("button",{className:"btn btn-outline-primary btn-follow",onClick:function(){return n.apply(this,arguments)}},"Follow"):l.a.createElement("button",{className:"btn btn-outline-secondary btn-follow",disabled:!0},"Sign in to Follow"):l.a.createElement("div",{className:"spinner-grow",role:"status"},l.a.createElement("span",{className:"visually-hidden"},"Loading...")))},m=a(43),d=a(23),f=a.n(d);t.a=function(e){var t=Object(o.useState)(null),a=Object(s.a)(t,2),n=a[0],d=a[1],h=Object(o.useState)([]),b=Object(s.a)(h,2),g=b[0],p=b[1],v=Object(o.useState)([]),w=Object(s.a)(v,2),E=w[0],_=w[1],N=Object(o.useState)(!0),j=Object(s.a)(N,2),O=j[0],k=j[1],y=Object(o.useState)(!1),x=Object(s.a)(y,2),I=x[0],S=x[1],F=Object(o.useState)(f()()),A=Object(s.a)(F,1)[0],P=e.hidden,C=e.accountId,H=Object(o.useCallback)(Object(r.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._near.getAccount(C);case 2:a=t.sent,d(a),e.signedIn&&e.signedAccountId!==C&&(S(C in e.followers),a.fetchFollowers().then((function(){p(Object.keys(a.followers).filter((function(t){return t in e.followings})))})),a.fetchFollowings().then((function(){_(Object.keys(a.followings).filter((function(t){return!(t in e.followings)&&t!==e.signedAccountId})))})));case 5:case"end":return t.stop()}}),t)}))),[C,e._near,e.followings,e.signedIn,e.signedAccountId,e.followers]);Object(o.useEffect)((function(){!e.connected||P||n&&n.accountId===C||(k(!0),H().then((function(){return k(!1)})))}),[e.connected,C,P,n,H]);var D=g.slice(0,4===g.length?4:3).map((function(t,a){return l.a.createElement("span",{key:"a-".concat(A,"-").concat(t)},a>0&&", ",l.a.createElement(m.a,Object.assign({},e,{accountId:t})))})),B=g.length-D.length,L=E.slice(0,4===E.length?4:3).map((function(t,a){return l.a.createElement("span",{key:"b-".concat(A,"-").concat(t)},a>0&&", ",l.a.createElement(m.a,Object.assign({},e,{accountId:t})))})),q=E.length-L.length;return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("h5",null,l.a.createElement(i.b,{className:"account-handle",to:"/a/".concat(C)},"@",C))),O?l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"spinner-grow",role:"status"},l.a.createElement("span",{className:"visually-hidden"},"Loading..."))):n?l.a.createElement("div",null,l.a.createElement(u,Object.assign({},e,{accountId:C,account:n})),l.a.createElement("div",{className:"mb-2"},l.a.createElement("div",null,l.a.createElement("span",{className:"me-md-2"},n.stats.numPosts?l.a.createElement("b",null,n.stats.numPosts):l.a.createElement("span",{className:"text-muted"},"No")," ",l.a.createElement("span",{className:"text-muted"},"post",1!==n.stats.numPosts&&"s")),I&&l.a.createElement("span",{className:"badge bg-secondary"},"Follows You")),l.a.createElement("div",null,l.a.createElement(i.b,{to:"/a/".concat(C,"/following"),className:"following-followers"},l.a.createElement("span",{className:"me-md-2"},l.a.createElement("b",null,n.stats.numFollowing)," ",l.a.createElement("span",{className:"text-muted"},"following"))),l.a.createElement(i.b,{to:"/a/".concat(C,"/followers"),className:"following-followers"},l.a.createElement("span",null,l.a.createElement("b",null,n.stats.numFollowers)," ",l.a.createElement("span",{className:"text-muted"},"followers"))))),e.signedIn&&C!==e.signedAccountId&&l.a.createElement("div",null,l.a.createElement("div",{className:"text-muted"},D.length>0?l.a.createElement("div",null,"Followed by ",D," ",B?" and ".concat(B," others you follow"):""):"Not followed by anyone you know"),L.length>0&&l.a.createElement("div",{className:"text-muted"},"Follows ",L," ",q?" and ".concat(q," others you don't follow"):""))):l.a.createElement("div",null,"Error loading account"))}},35:function(e,t,a){"use strict";var n=a(26),c=a(1),r=a.n(c),s=a(5),o=a(3),l=a(0),i=a.n(l),u=a(56),m=a(131),d=a(23),f=a.n(d);t.a=function(e){var t=Object(l.useState)(!0),a=Object(o.a)(t,2),c=a[0],d=a[1],h=Object(l.useState)([]),b=Object(o.a)(h,2),g=b[0],p=b[1],v=Object(l.useState)(f()()),w=Object(o.a)(v,1)[0],E=e.seed,_=e.extraPosts||[],N=Object(l.useCallback)(function(){var t=Object(s.a)(r.a.mark((function t(a){var n,c,s,l,i,u,d;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=[],c=Object(m.SortedSet)(E);case 2:if(!(c.length>0&&n.length<30)){t.next=19;break}if(s=c.pop(),l=Object(o.a)(s,2),i=l[0],u=l[1],0!==i){t.next=6;break}return t.abrupt("break",19);case 6:return t.next=8,e._near.getPost(u,i);case 8:if(!(d=t.sent)){t.next=17;break}if(d.lastPostHeight>0&&c.push([d.lastPostHeight,u]),n.push(d),!a.mounted){t.next=16;break}p([].concat(n)),t.next=17;break;case 16:return t.abrupt("break",19);case 17:t.next=2;break;case 19:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[E,e._near]);Object(l.useEffect)((function(){var e={mounted:!0};return d(!0),N(e).then((function(){e.mounted&&d(!1)})),function(){e.mounted=!1}}),[E,N]);var j=[].concat(Object(n.a)(_),Object(n.a)(g)).map((function(t){var a="".concat(w,"-").concat(t.accountId,"/").concat(t.blockHeight);return i.a.createElement(u.a,Object.assign({},e,{key:a,post:t}))}));return i.a.createElement("div",null,j.length>0?j:!c&&i.a.createElement("div",{className:"text-muted"},"No posts."),c&&i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement("div",{className:"spinner-grow",role:"status"},i.a.createElement("span",{className:"visually-hidden"},"Loading..."))))}},43:function(e,t,a){"use strict";var n=a(3),c=a(0),r=a.n(c),s=(a(83),a(136)),o=a(7),l=a(25),i=a(23),u=a.n(i);t.a=function(e){var t=Object(c.useState)(!0),a=Object(n.a)(t,2),i=a[0],m=a[1],d=Object(c.useState)(u()()),f=Object(n.a)(d,1)[0],h=e.accountId;return r.a.createElement("div",{className:"account"},r.a.createElement(o.b,{className:"account-handle","data-tip":!0,"data-for":f,to:"/a/".concat(h)},"@",h),r.a.createElement(s.a,{id:f,type:"light",border:!0,borderColor:"rgb(222, 236, 230)",className:"account-tooltip",delayHide:100,delayShow:200,effect:"solid",afterShow:function(){return m(!1)},afterHide:function(){return m(!0)}},r.a.createElement(l.a,Object.assign({},e,{accountId:h,hidden:i}))))}},53:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(26),s=a(5),o=a(3),l=a(0),i=a.n(l),u=a(54),m=a(55);t.a=function(e){var t=Object(l.useState)(""),a=Object(o.a)(t,2),n=a[0],d=a[1],f=Object(l.useState)(!1),h=Object(o.a)(f,2),b=h[0],g=h[1],p=function(){var t=Object(s.a)(c.a.mark((function t(){var a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n,g(!0),d(""),t.t0=u.b,t.next=6,e._near.contract.post({body:a});case 6:t.t1=t.sent,(s=(0,t.t0)(t.t1)).accountId=e.signedAccountId,e.updateState({newPosts:[].concat(Object(r.a)(e.newPosts),[s])}),g(!1);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.enoughStorageBalance?i.a.createElement("div",null,i.a.createElement("form",null,i.a.createElement("div",{className:"mb-3"},i.a.createElement("textarea",{className:"form-control",placeholder:"New post",rows:"5",value:n,onChange:function(e){return d(e.target.value)}})),i.a.createElement("div",{className:"mb-3 d-grid gap-2 d-md-flex justify-content-md-end"},i.a.createElement("button",{className:"btn btn-primary",disabled:!n,onClick:p},b?i.a.createElement("span",null,i.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}),i.a.createElement("span",{className:"visually-hidden"},"Loading...")," ","Posting"):i.a.createElement("span",null,"Post now"))))):i.a.createElement("div",{className:"mb-3"},i.a.createElement("div",null,i.a.createElement("div",{className:"alert alert-danger",role:"alert"},i.a.createElement("b",null,"Not enough storage balance!"),i.a.createElement("br",null),"Add storage balance to be able to post and follow people.")),i.a.createElement("div",null,i.a.createElement(m.a,e)))}},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(1),c=a.n(n),r=a(5),s=a(33),o=a(34),l=function(e){return{body:e.body,time:new Date(parseFloat(e.time)/1e6),blockHeight:e.block_height,lastPostHeight:e.last_post_height}},i=function(){function e(t,a,n){Object(s.a)(this,e),this._near=t,this.accountId=a,this.requestBlockHeight=n,this._ready=!1}return Object(o.a)(e,[{key:"fetch",value:function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._near.blockViewCall(this.requestBlockHeight,"get_post",{account_id:this.accountId});case 2:(t=e.sent)&&Object.assign(this,l(t)),this._ready=!0;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"load",value:function(){var t=Object(r.a)(c.a.mark((function t(a,n,r){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=new e(a,n,r),t.next=3,s.fetch();case 3:return t.abrupt("return",s);case 4:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}()}]),e}()},55:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(5),s=a(0),o=a.n(s);t.a=function(e){function t(){return(t=Object(r.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e._near.contract.storage_deposit({},"30000000000000","100000000000000000000000");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return!e.enoughStorageBalance&&o.a.createElement("button",{className:"btn btn-primary me-md-2",onClick:function(e){return t.apply(this,arguments)}},"Add storage balance")}},56:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=(a(82),a(43)),s=a(134),o=a(7);t.a=function(e){var t=e.post;return c.a.createElement("div",{className:"card mb-3"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},c.a.createElement(r.a,Object.assign({},e,{accountId:t.accountId}))),c.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},c.a.createElement(o.b,{className:"post-link",to:"/p/".concat(t.accountId,"/").concat(t.blockHeight)},c.a.createElement(s.a,{datetime:t.time}))),c.a.createElement("div",{className:"card-text"},t.body)))}},57:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(3),c=a(1),r=a.n(c),s=a(5),o=a(33),l=a(34),i=a(18),u=a.n(i),m=new u.a("50000000000000000000000"),d=function(e){return{numPosts:e.num_posts,numFollowers:e.num_followers,numFollowing:e.num_following,lastPostHeight:e.last_post_height}},f=function(){function e(t,a,n){Object(o.a)(this,e),this._near=t,this.accountId=a,this.stats={lastPostHeight:0,numFollowers:0,numFollowing:0,numPosts:0,enoughStorageBalance:!1},n?(Object.assign(this.stats,d(n)),this._ready=!0):this._ready=!1,this.followings=!1,this.followers=!1,this._near.cacheAccount(a,this)}return Object(l.a)(e,[{key:"fetchStorageBalance",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._near.contract.storage_balance_of({account_id:this.accountId});case 2:t=e.sent,this.stats.storageTotal=new u.a(t.total),this.stats.storageAvailable=new u.a(t.available),this.stats.enoughStorageBalance=this.stats.storageAvailable>m;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchAccountStats",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._near.contract.get_account({account_id:this.accountId});case 2:(t=e.sent)&&(Object.assign(this.stats,d(t)),this._ready=!0);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchFollowings",value:function(){var t=Object(s.a)(r.a.mark((function t(){var a,c,o=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1===this.followings){t.next=4;break}return t.next=3,this.followingsFetch;case 3:return t.abrupt("return");case 4:for(a=[],c=0;c<this.stats.numFollowing;c+=100)a.push(this._near.contract.get_following({account_id:this.accountId,from_index:c,limit:100}));return this.followings={},this.followingsFetch=new Promise(function(){var t=Object(s.a)(r.a.mark((function t(c){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(a);case 2:t.sent.flat().forEach((function(t){var a=Object(n.a)(t,2),c=a[0],r=a[1];o.followings[c]=new e(o._near,c,r)})),c();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=10,this.followingsFetch;case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchFollowers",value:function(){var t=Object(s.a)(r.a.mark((function t(){var a,c,o=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1===this.followers){t.next=4;break}return t.next=3,this.followersFetch;case 3:return t.abrupt("return");case 4:for(a=[],c=0;c<this.stats.numFollowers;c+=100)a.push(this._near.contract.get_followers({account_id:this.accountId,from_index:c,limit:100}));return this.followers={},this.followersFetch=new Promise(function(){var t=Object(s.a)(r.a.mark((function t(c){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(a);case 2:t.sent.flat().forEach((function(t){var a=Object(n.a)(t,2),c=a[0],r=a[1];o.followers[c]=new e(o._near,c,r)})),c();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),t.next=10,this.followersFetch;case 10:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}],[{key:"load",value:function(){var t=Object(s.a)(r.a.mark((function t(a,n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=new e(a,n),t.next=3,c.fetchAccountStats();case 3:return t.abrupt("return",c);case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}]),e}()},74:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(5),s=a(3),o=(a(81),a(0)),l=a.n(o),i=a(35),u=a(57),m=a(24);t.a=function(e){var t=Object(o.useState)(!1),a=Object(s.a)(t,2),n=a[0],d=a[1],f=Object(o.useCallback)(Object(r.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.connected){t.next=9;break}return t.next=3,e._near.contract.get_num_accounts();case 3:return a=t.sent,t.next=6,e._near.contract.get_accounts({from_index:Math.max(a-100,0),limit:100});case 6:return t.abrupt("return",t.sent.map((function(t){var a=Object(s.a)(t,2),n=a[0],c=a[1];return[new u.a(e._near,n,c).stats.lastPostHeight,n]})));case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)}))),[e.connected,e._near]);return Object(o.useEffect)((function(){f().then(d)}),[f]),l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},n&&n.length>0&&l.a.createElement("div",null,l.a.createElement("h3",null,"Discover"),l.a.createElement(i.a,Object.assign({},e,{seed:n}))),!n&&l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"spinner-grow",role:"status"},l.a.createElement("span",{className:"visually-hidden"},"Loading...")))),l.a.createElement("div",{className:"col col-12 col-lg-4 col-xl-4"},e.signedIn&&l.a.createElement(m.a,e)))))}},75:function(e,t,a){"use strict";var n=a(3),c=a(0),r=a.n(c),s=(a(180),a(4)),o=a(35),l=a(24),i=a(53),u=a(25),m=a(1),d=a.n(m),f=a(26),h=a(5),b=a(23),g=a.n(b);var p=function(e){var t=e.accountId,a=Object(c.useState)(null),s=Object(n.a)(a,2),o=s[0],l=s[1],i=Object(c.useState)([]),m=Object(n.a)(i,2),b=m[0],p=m[1],v=Object(c.useState)(!0),w=Object(n.a)(v,2),E=w[0],_=w[1],N=Object(c.useState)(g()()),j=Object(n.a)(N,1)[0],O=e.showFollowers,k=e.hidden,y=Object(c.useCallback)(Object(h.a)(d.a.mark((function a(){var n,c,r,s;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e._near.getAccount(t);case 2:if(n=a.sent,l(n),!O){a.next=10;break}return a.next=7,n.fetchFollowers();case 7:c=n.followers,a.next=13;break;case 10:return a.next=12,n.fetchFollowings();case 12:c=n.followings;case 13:e.signedIn&&e.signedAccountId!==t?(r=Object.keys(c).filter((function(t){return!(t in e.followings)})),s=Object.keys(c).filter((function(t){return t in e.followings})),p([].concat(Object(f.a)(r),Object(f.a)(s)))):p(Object.keys(c));case 14:case"end":return a.stop()}}),a)}))),[t,e._near,e.followings,e.signedIn,e.signedAccountId,O]);Object(c.useEffect)((function(){e.connected&&!k&&(_(!0),y().then((function(){return _(!1)})))}),[t,e.connected,k,o,y,O]);var x=b.map((function(t){var a="".concat(j,"-f/").concat(t);return r.a.createElement("div",{key:a,className:"follower"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement(u.a,Object.assign({},e,{accountId:t})))))}));return E?r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))):x.length>0?r.a.createElement("div",null,x):r.a.createElement("div",{className:"text-muted"},"No one is here")},v=a(7);t.a=function(e){var t=Object(s.f)(),a=t.accountId,m=t.suffix,d=Object(c.useState)(!1),f=Object(n.a)(d,2),h=f[0],b=f[1];return Object(c.useEffect)((function(){e.connected&&e._near.getAccount(a).then((function(e){b([[e.stats.lastPostHeight,e.accountId]])}))}),[e.connected,e._near,a]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},e.connected&&r.a.createElement("div",null,r.a.createElement(u.a,Object.assign({},e,{accountId:a})),r.a.createElement("div",{className:"mb-3"}),r.a.createElement("ul",{className:"nav nav-pills mb-2",id:"accountTab",role:"tablist"},r.a.createElement("li",{className:"nav-item",role:"presentation"},r.a.createElement(v.b,{to:"/a/".concat(a),className:"nav-link".concat(m?"":" active"),id:"posts-tab",type:"button","aria-controls":"posts","aria-selected":!m},a===e.signedAccountId&&"Your "," Posts")),r.a.createElement("li",{className:"nav-item",role:"presentation"},r.a.createElement(v.b,{to:"/a/".concat(a,"/following"),className:"nav-link".concat("following"===m?" active":""),id:"following-tab",role:"tab","aria-controls":"following","aria-selected":"following"===m},"Following")),r.a.createElement("li",{className:"nav-item",role:"presentation"},r.a.createElement(v.b,{to:"/a/".concat(a,"/followers"),className:"nav-link".concat("followers"===m?" active":""),id:"followers-tab",role:"tab","aria-controls":"followers","aria-selected":"followers"===m},"Followers"))),r.a.createElement("div",{className:"tab-content"},m?"following"===m?r.a.createElement("div",null,r.a.createElement(p,Object.assign({},e,{showFollowers:!1,accountId:a,hidden:"following"!==m}))):"followers"===m?r.a.createElement("div",null,r.a.createElement(p,Object.assign({},e,{showFollowers:!0,accountId:a,hidden:"followers"!==m}))):r.a.createElement("div",null,"Bug"):r.a.createElement("div",null,a===e.signedAccountId&&r.a.createElement(i.a,e),h?r.a.createElement(o.a,Object.assign({},e,{seed:h})):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))))))),r.a.createElement("div",{className:"col col-12 col-lg-4 col-xl-4"},e.signedIn&&r.a.createElement(l.a,e))))}},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){}},[[139,1,2]]]);
//# sourceMappingURL=main.6b9c2f5d.chunk.js.map