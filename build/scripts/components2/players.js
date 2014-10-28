define(["lib/react","lib/clib","lib/lodash"],function(e,t,n){function i(e,t){return(t-100)*e/100}var r=e.DOM;return e.createClass({displayName:"usersPlaying",propTypes:{engine:e.PropTypes.object.isRequired},render:function(){var e=this,s=[],o=[],u,a,f,l,c,h,p;n.forEach(e.props.engine.playerInfo,function(e,t,n){e.stopped_at?s.push({username:t,info:e}):o.push({username:t,info:e})});var d=n.sortBy(s,function(e){return e.info.stopped_at}).reverse(),v=n.sortBy(o,function(e){return e.info.bet}).reverse();if(e.props.engine.gameState==="IN_PROGRESS"||e.props.engine.gameState==="STARTING"){a=[];for(var m=0,g=v.length;m<g;m++)a.push(r.tr({className:"user-playing",key:"user"+m},r.td(null,r.a({href:"/user/"+v[m].username,target:"_blank"},v[m].username)),r.td(null,"-"),r.td(null,t.formatSatoshis(v[m].info.bet,0)),r.td(null,"-"),r.td(null,"-")));u=[];for(var m=0,g=d.length;m<g;m++){var y=d[m],b=y.info.bet,w=i(b,y.info.stopped_at);u.push(r.tr({className:"user-cashed",key:"user"+m},r.td(null,r.a({href:"/user/"+y.username,target:"_blank"},y.username)),r.td(null,y.info.stopped_at/100+"x"),r.td(null,t.formatSatoshis(b,0)),r.td(null,"-"),r.td(null,t.formatSatoshis(w))))}c=r.tbody({className:""},a,u),h="users-playing-container",p="users-playing"}else e.props.engine.gameState==="ENDED"&&(a=v.map(function(e,n){var i=e.info.bet,s=e.info.bonus,o=-i;return s?(o=t.formatSatoshis(o+s),s=t.formatDecimals(s*100/i,2)+"%"):(o=t.formatSatoshis(o),s="0%"),r.tr({className:"user-lost",key:"user"+n},r.td(null,r.a({href:"/user/"+e.username,target:"_blank"},e.username)),r.td(null,"-"),r.td(null,t.formatSatoshis(e.info.bet,0)),r.td(null,s),r.td(null,o))}),u=d.map(function(e,n){var i=e.info.bet,s=e.info.bonus,o=e.info.stopped_at,u=i*(o-100)/100;return s?(u=t.formatSatoshis(u+s),s=t.formatDecimals(s*100/i,2)+"%"):(u=t.formatSatoshis(u),s="0%"),r.tr({className:"user-won",key:"user"+n},r.td(null,r.a({href:"/user/"+e.username,target:"_blank"},e.username)),r.td(null,o/100,"x"),r.td(null,t.formatSatoshis(i,0)),r.td(null,s),r.td(null,u))}),c=r.tbody({className:""},a,u),h="users-cashed-container",p="users-summary");return r.div({className:h},r.table({className:p},r.thead(null,r.tr(null,r.th(null,"User"),r.th(null,"@"),r.th(null,"Bet"),r.th(null,"Bonus"),r.th(null,"Profit"))),c))}})});