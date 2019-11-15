import React from "react";
import PrimaryFooter from './primary_footer'
import Message from './message'
import {fetchChannelMessages} from '../util/messages_api_util'

class PrimaryView extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="workspace-primary">
                <div className="primary-contents">
                    {Object.values(this.props.messages).map((message, i) => {
                        if (message.id === this.props.activeChannel.id) {
                            return (<Message body={message.body}/>)
                        }
                    })}
                </div>
                <PrimaryFooter currentUser={this.props.currentUser} />
            </div>
        )
    }
}

export default PrimaryView;