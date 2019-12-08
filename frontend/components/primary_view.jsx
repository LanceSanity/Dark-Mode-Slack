import React from "react";
import PrimaryFooter from './primary_footer'
import Message from './message'

class PrimaryView extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="workspace-primary">
                <div className="primary-contents">
                    <div className="file-drop">
                        <div className="message-pane">
                            <div role="presentation">
                                <div tabindex="0" style={{position: "absolute", width: "1px", height: "1px", outline: "none", boxShadow: "none"}}>
                                    <div className="msg-list">
                                        <div className="msg-scrollbar">
                                            <div style={{ overflow: "visible", height: "0px", width: "0px" }}>
                                                <div className="msg-forward" style={{ top: "0px" }}>
                                                    <h1 className="forward-channel-name">
                                                        <span>{`#${this.props.channels[this.props.activeChannel.id].channel_name}`}</span>
                                                    </h1>
                                                    <p className="forward-description">
                                                        This is the very beginning of the <strong>#{this.props.channels[this.props.activeChannel.id].channel_name}</strong> channel.
                                                        Please stay on topic!
                                                    </p>
                                                </div>
                                                <div className="primary-contents">
                                                    {Object.values(this.props.messages).map((message, i) => {
                                                        if (message.channel_id === this.props.activeChannel.id) {
                                                            return (<Message key={message.id} body={message.body} user={this.props.users[message.user_id]} timestamp={message.created_at} />)
                                                        }
                                                    })}
                                                </div>
                                                <PrimaryFooter currentUser={this.props.currentUser} channelId={this.props.activeChannel.id} activeChannelName={this.props.channels[this.props.activeChannel.id].channel_name}
                                                    createMessage={this.props.createMessage} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                      
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PrimaryView;