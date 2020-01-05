import React, { Component } from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, InputGroup, InputGroupText,
    InputGroupAddon,
    InputGroupButtonDropdown,
    Input } from 'reactstrap';
import CardChatContent from './CardChatContent';
import './Style/CardChatContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

export default class CardChat extends Component {

    ws = new WebSocket('ws://localhost:3000/ws')

    componentDidMount() {
            this.ws.onopen = () => {
            // on connecting, do nothing but log it to the console
            console.log('connected')
        }

        this.ws.onmessage = evt => {
            // listen to data sent from the websocket server
            const message = JSON.parse(evt.data)
            this.setState({dataFromServer: message})
            console.log(message)
        }

        this.ws.onclose = () => {
                console.log('disconnected')
            // automatically try to reconnect on connection loss

        }

    }

    render() {
        const { talk } = this.props

        return (
            <Card className="card text-white bg-dark mb-3">
                <CardHeader className="card-header msg_head">{talk.name}</CardHeader>
                <CardBody className="card-body msg_card_body">
                    <CardChatContent  messages={talk.messages} person={talk.name}/>
                </CardBody>
                <CardFooter className="card-footer">
                <InputGroup>
                    <Input type="textarea" className="form-control type_msg" placeholder="Type your message..."/>
                    <InputGroupAddon addonType="append">
                    <Button color="secondary"><FontAwesomeIcon icon={faPaperPlane} /></Button>
                    </InputGroupAddon>
                </InputGroup>

                </CardFooter>
            </Card>
        )
    }
}
