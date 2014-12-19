define(["lib/react","lib/clib","stores/EngineVirtualStore","stores/ChatStore","actions/ChatActions"],function(e,t,n,r,i){function u(e,t){var n=this,r="msg-chat-message";switch(e.type){case"say":e.role==="admin"&&(r+=" msg-admin-message");var i=n.state.engine.username;return i&&e.username!=i&&e.message.toLowerCase().indexOf(i.toLowerCase())!=-1&&(r+=" msg-highlight-message"),s.li({className:r,key:"msg"+t},s.a({href:"/user/"+e.username,target:"_blank"},e.username,":")," ",e.message);case"mute":return r="msg-mute-message",s.li({className:r,key:"msg"+t},s.a({href:"/user/"+e.moderator,target:"_blank"},"*** <"+e.moderator+">"),e.shadow?" shadow muted ":" muted ",s.a({href:"/user/"+e.username,target:"_blank"},"<"+e.username+">")," for "+e.timespec);case"error":case"info":return r="msg-info-message",s.li({className:r,key:"msg"+t},s.span(null," *** "+e.message));default:}}function a(){var e=r.getState();return e.engine=n.getState(),e}var s=e.DOM,o=120;return e.createClass({displayName:"Chat",getInitialState:function(){var e=a();return this.listLength=e.engine.chat.length,e},componentDidMount:function(){n.addChangeListener(this._onChange),r.addChangeListener(this._onChange);var e=this.refs.messages.getDOMNode();e.scrollTop=e.scrollHeight},componentWillUnmount:function(){n.removeChangeListener(this._onChange),r.removeChangeListener(this._onChange)},componentDidUpdate:function(e,t){if(t.engine.chat.length!=this.listLength){this.listLength=this.state.engine.chat.length;var n=this.refs.messages.getDOMNode(),r=n.scrollHeight-n.offsetHeight-n.scrollTop;r<o&&(n.scrollTop=n.scrollHeight)}},_onChange:function(){this.setState(a())},_sendMessage:function(e){if(e.keyCode==13){var t=this.state.inputText;t.length>1&&t.length<500&&this._say(t)}},_say:function(e){i.say(e)},_updateInputText:function(e){i.updateInputText(e.target.value)},render:function(){var e=this,t=this.state.engine.chat.map(u,e),n;return this.state.engine.username?n=s.input({className:"chat-input",onKeyDown:this._sendMessage,onChange:this._updateInputText,value:this.state.inputText,ref:"input",placeholder:"Type here..."}):n=s.input({className:"chat-input",ref:"input",placeholder:"Log in to chat...",disabled:!0}),s.div({className:"messages-container"},s.ul({className:"messages",ref:"messages"},t),n)}})});