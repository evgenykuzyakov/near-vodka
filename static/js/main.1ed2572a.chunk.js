(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{126:function(e,t,a){"use strict";(function(e){var n=a(136),c=a(1),r=a.n(c),s=a(4),o=a(31),l=a(32),i=a(137),u=a(134),m=a(0),d=a.n(m),f=(a(76),a(163),a(164),a(165),a(166),a(127)),h=a(130),g=a(14),b=a(3),p=a(34),v=a(55),E=a(131),w=a.n(E),_=a(132),N=a(51),j=a(73),k=a(52),y=(window.location.hostname,{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",archivalNodeUrl:"https://rpc.testnet.internal.near.org",contractName:"dev-1613368835598-7014445",walletUrl:"https://wallet.testnet.near.org"}),O=function(t){Object(i.a)(c,t);var a=Object(u.a)(c);function c(t){var n;return Object(o.a)(this,c),(n=a.call(this,t))._near={blockViewCall:function(t,a,n){var c=this;return Object(s.a)(r.a.mark((function s(){var o,l;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=n||{},c.account.validateArgs(n),o=t+172800<c.lastBlockHeight?c.archivalConnection:c.account.connection,r.next=5,o.provider.query({request_type:"call_function",block_id:t,account_id:y.contractName,method_name:a,args_base64:new e(JSON.stringify(n),"utf8").toString("base64")});case 5:return l=r.sent,r.abrupt("return",l.result&&l.result.length>0&&JSON.parse(e.from(l.result).toString()));case 7:case"end":return r.stop()}}),s)})))()}},n.state={connected:!1,isNavCollapsed:!0,newPosts:[],followers:{},following:{}},n._initNear().then((function(){n.setState({signedIn:!!n._near.accountId,signedAccountId:n._near.accountId,connected:!0})})),n}return Object(l.a)(c,[{key:"_initNear",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,a,n,c=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new p.keyStores.BrowserLocalStorageKeyStore,e.next=3,p.connect(Object.assign({deps:{keyStore:t}},y));case 3:return a=e.sent,this._near.archivalConnection=p.Connection.fromConfig({networkId:y.networkId,provider:{type:"JsonRpcProvider",args:{url:y.archivalNodeUrl}},signer:{type:"InMemorySigner",keyStore:t}}),this._near.keyStore=t,this._near.near=a,this._near.walletConnection=new p.WalletConnection(a,y.contractName),this._near.accountId=this._near.walletConnection.getAccountId(),this._near.account=this._near.walletConnection.account(),e.next=12,this._near.account.connection.provider.block({finality:"final"});case 12:return n=e.sent,this._near.lastBlockHeight=n.header.height,this._near.contract=new p.Contract(this._near.account,y.contractName,{viewMethods:["get_account","get_accounts","get_num_accounts","get_followers","get_following","get_post","storage_minimum_balance","storage_balance_of"],changeMethods:["storage_deposit","storage_withdraw","post","follow","unfollow"]}),e.next=17,this._near.contract.storage_minimum_balance();case 17:if(this._near.storageMinimumBalance=e.sent,this._near.accounts={},this._near.getAccount=function(e){return e in c._near.accounts?c._near.accounts[e]:c._near.accounts[e]=Promise.resolve(v.a.load(c._near,e))},this._near.cacheAccount=function(e,t){e in c._near.accounts||(c._near.accounts[e]=Promise.resolve(t))},this._near.posts={},this._near.getPost=function(e,t){var a="".concat(e,"/").concat(t);return a in c._near.posts?c._near.posts[a]:c._near.posts[a]=Promise.resolve(N.a.load(c._near,e,t))},!this._near.accountId){e.next=33;break}return e.next=26,this._near.getAccount(this._near.accountId);case 26:return this._near.accountData=e.sent,e.next=29,this._near.accountData.fetchStorageBalance();case 29:return e.next=31,this._near.accountData.fetchFollowings();case 31:this.setState({followings:Object.assign({},this._near.accountData.followings),enoughStorageBalance:this._near.accountData.stats.enoughStorageBalance}),this._near.accountData.fetchFollowers().then((function(){c.setState({followers:Object.assign({},c._near.accountData.followers)})}));case 33:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"requestSignIn",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"NEAR Vodka",e.next=4,this._near.walletConnection.requestSignIn(y.contractName,"NEAR Vodka");case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._near.walletConnection.signOut(),this._near.accountId=null,this.setState({signedIn:!!this._accountId,signedAccountId:this._accountId});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=Object(n.a)({_near:this._near,updateState:function(t){return e.setState(t)}},this.state),a=this.state.connected?this.state.signedIn?d.a.createElement("div",null,d.a.createElement(k.a,t),d.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e.logOut()}},"Sign out (",this.state.signedAccountId,")")):d.a.createElement("div",null,d.a.createElement("button",{className:"btn btn-primary",onClick:function(t){return e.requestSignIn(t)}},"Sign in with NEAR Wallet")):d.a.createElement("div",null,"Connecting... ",d.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}));return d.a.createElement("div",{className:"App"},d.a.createElement(g.a,{basename:""},d.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light mb-3"},d.a.createElement("div",{className:"container-fluid"},d.a.createElement("a",{className:"navbar-brand",href:"/",title:"NEAR Vodka - connecting people"},d.a.createElement("img",{src:w.a,alt:"NEAR Vodka",className:"d-inline-block align-middle"}),"[TESTNET] NEAR Vodka"),d.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},d.a.createElement("span",{className:"navbar-toggler-icon"})),d.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},d.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},d.a.createElement("li",{className:"nav-item"},d.a.createElement(g.b,{className:"nav-link","aria-current":"page",to:"/"},"Home")),this.state.signedIn&&d.a.createElement("li",{className:"nav-item"},d.a.createElement(g.b,{className:"nav-link","aria-current":"page",to:"/discover"},"Discover")),this.state.signedIn&&d.a.createElement("li",{className:"nav-item"},d.a.createElement(g.b,{className:"nav-link","aria-current":"page",to:"/a/".concat(this.state.signedAccountId)},"Profile"))),d.a.createElement("form",{className:"d-flex"},a)))),d.a.createElement("a",{className:"github-fork-ribbon right-bottom fixed",href:"https://github.com/evgenykuzyakov/near-vodka","data-ribbon":"Fork me on GitHub",title:"Fork me on GitHub"},"Fork me on GitHub"),d.a.createElement(b.c,null,d.a.createElement(b.a,{exact:!0,path:"/"},this.state.signedIn?d.a.createElement(f.a,t):d.a.createElement(j.a,t)),d.a.createElement(b.a,{exact:!0,path:"/discover"},d.a.createElement(j.a,t)),d.a.createElement(b.a,{exact:!0,path:"/a/:accountId"},d.a.createElement(h.a,t)),d.a.createElement(b.a,{exact:!0,path:"/p/:accountId/:blockHeight"},d.a.createElement(_.a,t)))))}}]),c}(d.a.Component);t.a=O}).call(this,a(13).Buffer)},127:function(e,t,a){"use strict";var n=a(5),c=(a(79),a(0)),r=a.n(c),s=a(50),o=a(33),l=a(23),i=a(14);t.a=function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),u=a[0],m=a[1];return Object(c.useEffect)((function(){if(e.connected){var t=e._near.accountData;if(t){var a=Object.entries(e.followings).map((function(e){var t=Object(n.a)(e,2),a=t[0];return[t[1].stats.lastPostHeight,a]}));t.stats.lastPostHeight>0&&a.push([t.stats.lastPostHeight,t.accountId]),m(a)}else m([])}}),[e.connected,e.followings,e._near.accountData]),r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},r.a.createElement(s.a,e),u&&u.length>0?r.a.createElement("div",null,r.a.createElement("h3",null,"Your Feed"),r.a.createElement(o.a,Object.assign({},e,{seed:u,extraPosts:e.newPosts}))):u?r.a.createElement("div",null,r.a.createElement("h3",null,"Feed is empty"),r.a.createElement("div",null,r.a.createElement(i.b,{to:"/discover",className:"btn btn-outline-secondary"},"Discover more"))):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))),r.a.createElement("div",{className:"col col-12 col-lg-4 col-xl-4"},e.signedIn&&r.a.createElement(l.a,e)))))}},130:function(e,t,a){"use strict";var n=a(5),c=a(0),r=a.n(c),s=a(3),o=a(33),l=a(54),i=a(23),u=a(50);t.a=function(e){var t=Object(s.f)().accountId,a=Object(c.useState)(!1),m=Object(n.a)(a,2),d=m[0],f=m[1],h=Object(c.useState)(null),g=Object(n.a)(h,2),b=g[0],p=g[1];return e.connected&&e._near&&(console.log(e._near),e._near.getAccount(t).then((function(e){p(e)}))),Object(c.useEffect)((function(){e.connected&&b&&f([[b.stats.lastPostHeight,b.accountId]])}),[e.connected,b]),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},r.a.createElement("h3",null,"Account @",t),t===e.signedAccountId?r.a.createElement("div",null,r.a.createElement(u.a,e),r.a.createElement("h3",null,"Your Posts")):r.a.createElement("div",null,r.a.createElement(l.a,Object.assign({},e,{accountId:t,account:b})),r.a.createElement("h3",null,"Posts")),d?r.a.createElement(o.a,Object.assign({},e,{seed:d})):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))),r.a.createElement("div",{className:"col col-12 col-lg-4 col-xl-4"},e.signedIn&&r.a.createElement(i.a,e))))}},131:function(e,t,a){e.exports=a.p+"static/media/near_vodka_logo.f18e89c9.png"},132:function(e,t,a){"use strict";var n=a(5),c=a(0),r=a.n(c),s=a(3),o=a(56),l=a(23);t.a=function(e){var t=Object(s.f)(),a=t.accountId,i=t.blockHeight,u=Object(c.useState)(!1),m=Object(n.a)(u,2),d=m[0],f=m[1];return e.connected&&e._near&&e._near.getPost(a,parseInt(i)).then((function(e){f(e)})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-md-center"},r.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},d?r.a.createElement(o.a,Object.assign({},e,{post:d})):r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading...")))),r.a.createElement("div",{className:"col col-12 col-lg-4 col-xl-4"},e.signedIn&&r.a.createElement(l.a,e))))}},138:function(e,t,a){e.exports=a(139)},139:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(125),s=a.n(r),o=(a(144),a(126));s.a.render(c.a.createElement(o.a,null),document.getElementById("root"))},144:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},169:function(e,t,a){},183:function(e,t){},189:function(e,t){},204:function(e,t){},206:function(e,t){},23:function(e,t,a){"use strict";var n=a(24),c=a(0),r=a.n(c),s=(a(80),a(53));t.a=function(e){var t=Object.keys(e.followers).filter((function(t){return!(t in e.followings)})),a=Object.keys(e.followers).filter((function(t){return t in e.followings})),c=[].concat(Object(n.a)(t),Object(n.a)(a)).map((function(t){var a="f/".concat(t);return r.a.createElement("div",{key:a,className:"follower"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement(s.a,Object.assign({accountId:t},e)))))}));return r.a.createElement("div",null,r.a.createElement("h3",null,"Your followers"),c.length>0?c:r.a.createElement("div",{className:"text-muted"},"No one is following you :("),!e.connected&&r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-grow",role:"status"},r.a.createElement("span",{className:"visually-hidden"},"Loading..."))))}},33:function(e,t,a){"use strict";var n=a(24),c=a(1),r=a.n(c),s=a(4),o=a(5),l=a(0),i=a.n(l),u=a(56),m=a(129);t.a=function(e){var t=Object(l.useState)(!0),a=Object(o.a)(t,2),c=a[0],d=a[1],f=Object(l.useState)([]),h=Object(o.a)(f,2),g=h[0],b=h[1],p=e.seed,v=e.extraPosts||[],E=Object(l.useCallback)(Object(s.a)(r.a.mark((function t(){var a,n,c,s,l,i,u;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=[],n=Object(m.SortedSet)(p);case 2:if(!(n.length>0&&a.length<10)){t.next=12;break}if(c=n.pop(),s=Object(o.a)(c,2),l=s[0],i=s[1],0!==l){t.next=6;break}return t.abrupt("break",12);case 6:return t.next=8,e._near.getPost(i,l);case 8:(u=t.sent)&&(u.lastPostHeight>0&&n.push([u.lastPostHeight,i]),a.push(u),b([].concat(a))),t.next=2;break;case 12:case"end":return t.stop()}}),t)}))),[p,e._near]);Object(l.useEffect)((function(){d(!0),E().then((function(){return d(!1)}))}),[E]);var w=[].concat(Object(n.a)(v),Object(n.a)(g)).map((function(t){var a="".concat(t.accountId,"/").concat(t.blockHeight);return i.a.createElement(u.a,Object.assign({key:a,post:t},e))}));return i.a.createElement("div",null,c?i.a.createElement("div",{className:"d-flex justify-content-center"},i.a.createElement("div",{className:"spinner-grow",role:"status"},i.a.createElement("span",{className:"visually-hidden"},"Loading..."))):w.length>0?w:i.a.createElement("div",{className:"text-muted"},"No posts."))}},50:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(24),s=a(4),o=a(5),l=a(0),i=a.n(l),u=a(51),m=a(52);t.a=function(e){var t=Object(l.useState)(""),a=Object(o.a)(t,2),n=a[0],d=a[1],f=Object(l.useState)(!1),h=Object(o.a)(f,2),g=h[0],b=h[1],p=function(){var t=Object(s.a)(c.a.mark((function t(){var a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n,b(!0),d(""),t.t0=u.b,t.next=6,e._near.contract.post({body:a});case 6:t.t1=t.sent,(s=(0,t.t0)(t.t1)).accountId=e.signedAccountId,e.updateState({newPosts:[].concat(Object(r.a)(e.newPosts),[s])}),b(!1);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return e.enoughStorageBalance?i.a.createElement("div",null,i.a.createElement("form",null,i.a.createElement("div",{className:"mb-3"},i.a.createElement("textarea",{className:"form-control",placeholder:"New post",rows:"5",value:n,onChange:function(e){return d(e.target.value)}})),i.a.createElement("div",{className:"mb-3 d-grid gap-2 d-md-flex justify-content-md-end"},i.a.createElement("button",{className:"btn btn-primary",disabled:!n,onClick:p},g?i.a.createElement("span",null,i.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}),i.a.createElement("span",{className:"visually-hidden"},"Loading...")," ","Posting"):i.a.createElement("span",null,"Post now"))))):i.a.createElement("div",{className:"mb-3"},i.a.createElement("div",null,i.a.createElement("div",{className:"alert alert-danger",role:"alert"},i.a.createElement("b",null,"Not enough storage balance!"),i.a.createElement("br",null),"Add storage balance to be able to post and follow people.")),i.a.createElement("div",null,i.a.createElement(m.a,e)))}},51:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));var n=a(1),c=a.n(n),r=a(4),s=a(31),o=a(32),l=function(e){return{body:e.body,time:new Date(parseFloat(e.time)/1e6),blockHeight:e.block_height,lastPostHeight:e.last_post_height}},i=function(){function e(t,a,n){Object(s.a)(this,e),this._near=t,this.accountId=a,this.requestBlockHeight=n,this._ready=!1}return Object(o.a)(e,[{key:"fetch",value:function(){var e=Object(r.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._near.blockViewCall(this.requestBlockHeight,"get_post",{account_id:this.accountId});case 2:(t=e.sent)&&Object.assign(this,l(t)),this._ready=!0;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}],[{key:"load",value:function(){var t=Object(r.a)(c.a.mark((function t(a,n,r){var s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=new e(a,n,r),t.next=3,s.fetch();case 3:return t.abrupt("return",s);case 4:case"end":return t.stop()}}),t)})));return function(e,a,n){return t.apply(this,arguments)}}()}]),e}()},52:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(4),s=a(0),o=a.n(s);t.a=function(e){function t(){return(t=Object(r.a)(c.a.mark((function t(a){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,e._near.contract.storage_deposit({},"30000000000000","100000000000000000000000");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return!e.enoughStorageBalance&&o.a.createElement("button",{className:"btn btn-primary me-md-2",onClick:function(e){return t.apply(this,arguments)}},"Add storage balance")}},53:function(e,t,a){"use strict";var n=a(5),c=a(0),r=a.n(c),s=(a(81),a(14)),o=a(54);t.a=function(e){var t=Object(c.useState)(null),a=Object(n.a)(t,2),l=a[0],i=a[1],u=e.accountId;return e.connected&&e._near&&e._near.getAccount(u).then((function(e){i(e)})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("h5",null,r.a.createElement(s.b,{className:"account-handle",to:"/a/".concat(u)},"@",u))),r.a.createElement(o.a,Object.assign({},e,{accountId:u,account:l})),l&&r.a.createElement("div",null,r.a.createElement("div",null,"Num posts: ",l.stats.numPosts),r.a.createElement("div",null,"Num followers: ",l.stats.numFollowers),r.a.createElement("div",null,"Num following: ",l.stats.numFollowing)))}},54:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(4),s=a(0),o=a.n(s);a(169);t.a=function(e){var t=e.accountId,a=e.account;function n(){return(n=Object(r.a)(c.a.mark((function n(){return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.enoughStorageBalance){n.next=3;break}return alert("Add storage balance to follow"),n.abrupt("return");case 3:if(e.followings&&!(t in e.followings)){n.next=5;break}return n.abrupt("return");case 5:return e._near.accountData.followings[t]=a,e.updateState({followings:Object.assign({},e._near.accountData.followings)}),n.next=9,e._near.contract.follow({account_id:t});case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function s(){return(s=Object(r.a)(c.a.mark((function a(){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.followings&&t in e.followings){a.next=2;break}return a.abrupt("return");case 2:return delete e._near.accountData.followings[t],e.updateState({followings:Object.assign({},e._near.accountData.followings)}),a.next=6,e._near.contract.unfollow({account_id:t});case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return o.a.createElement("div",{className:"follow-button mb-3"},a?t===e.signedAccountId?o.a.createElement("div",null,"It's you"):e.followings&&t in e.followings?o.a.createElement("button",{className:"btn btn-primary btn-unfollow",onClick:function(){return s.apply(this,arguments)}},o.a.createElement("span",null,"Following")):e.signedIn?o.a.createElement("button",{className:"btn btn-outline-primary btn-follow",onClick:function(){return n.apply(this,arguments)}},"Follow"):o.a.createElement("button",{className:"btn btn-outline-secondary btn-follow",disabled:!0},"Sign in to Follow"):o.a.createElement("div",{className:"spinner-grow",role:"status"},o.a.createElement("span",{className:"visually-hidden"},"Loading...")))}},55:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var n=a(5),c=a(1),r=a.n(c),s=a(4),o=a(31),l=a(32),i=a(18),u=a.n(i),m=new u.a("50000000000000000000000"),d=function(e){return{numPosts:e.num_posts,numFollowers:e.num_followers,numFollowing:e.num_following,lastPostHeight:e.last_post_height}},f=function(){function e(t,a,n){Object(o.a)(this,e),this._near=t,this.accountId=a,this.stats={lastPostHeight:0,numFollowers:0,numFollowing:0,numPosts:0,enoughStorageBalance:!1},n?(Object.assign(this.stats,d(n)),this._ready=!0):this._ready=!1,this.followings=!1,this.followers=!1,this._near.cacheAccount(a,this)}return Object(l.a)(e,[{key:"fetchStorageBalance",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._near.contract.storage_balance_of({account_id:this.accountId});case 2:t=e.sent,this.stats.storageTotal=new u.a(t.total),this.stats.storageAvailable=new u.a(t.available),this.stats.enoughStorageBalance=this.stats.storageAvailable>m;case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchAccountStats",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._near.contract.get_account({account_id:this.accountId});case 2:(t=e.sent)&&(Object.assign(this.stats,d(t)),this._ready=!0);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fetchFollowings",value:function(){var t=Object(s.a)(r.a.mark((function t(){var a,c,s=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1===this.followings){t.next=2;break}return t.abrupt("return");case 2:for(a=[],c=0;c<this.stats.numFollowing;c+=100)a.push(this._near.contract.get_following({account_id:this.accountId,from_index:c,limit:100}));return this.followings={},t.next=7,Promise.all(a);case 7:t.sent.flat().forEach((function(t){var a=Object(n.a)(t,2),c=a[0],r=a[1];s.followings[c]=new e(s._near,c,r)}));case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"fetchFollowers",value:function(){var t=Object(s.a)(r.a.mark((function t(){var a,c,s=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!1===this.followers){t.next=2;break}return t.abrupt("return");case 2:for(a=[],c=0;c<this.stats.numFollowers;c+=100)a.push(this._near.contract.get_followers({account_id:this.accountId,from_index:c,limit:100}));return this.followers={},t.next=7,Promise.all(a);case 7:t.sent.flat().forEach((function(t){var a=Object(n.a)(t,2),c=a[0],r=a[1];s.followers[c]=new e(s._near,c,r)}));case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}],[{key:"load",value:function(){var t=Object(s.a)(r.a.mark((function t(a,n){var c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=new e(a,n),t.next=3,c.fetchAccountStats();case 3:return t.abrupt("return",c);case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()}]),e}()},56:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=(a(80),a(81),a(135)),s=a(14),o=a(53);var l=function(e){var t=e.accountId;return c.a.createElement("div",{className:"account"},c.a.createElement(s.b,{className:"account-handle","data-tip":!0,"data-for":"rt-".concat(t),to:"/a/".concat(t)},"@",t),c.a.createElement(r.a,{id:"rt-".concat(t),className:"account-tooltip",delayHide:100,delayShow:200,effect:"solid"},c.a.createElement(o.a,Object.assign({},e,{accountId:t}))))},i=a(133);t.a=function(e){var t=e.post;return c.a.createElement("div",{className:"card mb-3"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h5",{className:"card-title"},c.a.createElement(l,Object.assign({},e,{accountId:t.accountId}))),c.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},c.a.createElement(s.b,{className:"post-link",to:"/p/".concat(t.accountId,"/").concat(t.blockHeight)},c.a.createElement(i.a,{datetime:t.time}))),c.a.createElement("div",{className:"card-text"},t.body)))}},73:function(e,t,a){"use strict";var n=a(1),c=a.n(n),r=a(4),s=a(5),o=(a(79),a(0)),l=a.n(o),i=a(33),u=a(55),m=a(23);t.a=function(e){var t=Object(o.useState)(!1),a=Object(s.a)(t,2),n=a[0],d=a[1],f=Object(o.useCallback)(Object(r.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.connected){t.next=9;break}return t.next=3,e._near.contract.get_num_accounts();case 3:return a=t.sent,t.next=6,e._near.contract.get_accounts({from_index:Math.max(a-100,0),limit:100});case 6:return t.abrupt("return",t.sent.map((function(t){var a=Object(s.a)(t,2),n=a[0],c=a[1];return[new u.a(e._near,n,c).stats.lastPostHeight,n]})));case 9:return t.abrupt("return",!1);case 10:case"end":return t.stop()}}),t)}))),[e.connected,e._near]);return Object(o.useEffect)((function(){f().then(d)}),[f]),l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-md-center"},l.a.createElement("div",{className:"col col-12 col-lg-8 col-xl-6"},n&&n.length>0&&l.a.createElement("div",null,l.a.createElement("h3",null,"Discover"),l.a.createElement(i.a,Object.assign({},e,{seed:n}))),!n&&l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement("div",{className:"spinner-grow",role:"status"},l.a.createElement("span",{className:"visually-hidden"},"Loading...")))),l.a.createElement("div",{className:"col col-12 col-lg-4 col-xl-4"},e.signedIn&&l.a.createElement(m.a,e)))))}},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){}},[[138,1,2]]]);
//# sourceMappingURL=main.1ed2572a.chunk.js.map