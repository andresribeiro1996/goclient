import React, { Component } from 'react'
import CardChat from './CardChat';
import { CardGroup } from 'reactstrap';

export default class CardList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            talks: [
                {
                    name: 'Joao',
                    last_seen: '04-01-2020',
                    messages: [
                        {
                            date: 'message date',
                            content: 'ola tudo bem',
                            from: 'Joao',
                            to: 'Andre'
                        },
                        {
                            date: 'message date2',
                            content: 'Hey, ta tudo e contigo?',
                            from: 'Andre',
                            to: 'Joao'
                        },
                        {
                            date: 'message date3',
                            content: 'tambem!',
                            from: 'Joao',
                            to: 'Andre'
                        }
                    ]
                },
                {
                    name: 'Marta',
                    last_seen: '03-01-2020',
                    messages: [
                        {
                            date: 'message date',
                            content: 'ola tudo bem',
                            from: 'Marta',
                            to: 'Andre'
                        },
                        {
                            date: 'message date2',
                            content: 'Hey, ta tudo e contigo?',
                            from: 'Andre',
                            to: 'Marta'
                        },
                        {
                            date: 'message date3',
                            content: 'tambem!',
                            from: 'Marta',
                            to: 'Andre'
                        },
                        {
                            date: 'message date4',
                            content: 'Entao que tens feito?',
                            from: 'Marta',
                            to: 'Andre'
                        },
                        {
                            date: 'message date5',
                            content: 'nada de especial',
                            from: 'Andre',
                            to: 'Marta'
                        }
                    ]
                },
                {
                    name: 'Daniel',
                    last_seen: '02-01-2020',
                    messages: [
                        {
                            date: 'message date',
                            content: 'ola tudo bem',
                            from: 'Daniel',
                            to: 'Andre'
                        },
                        {
                            date: 'message date2',
                            content: 'Hey, ta tudo e contigo?',
                            from: 'Andre',
                            to: 'Marta'
                        },
                        {
                            date: 'message date3',
                            content: 'tambem!',
                            from: 'Daniel',
                            to: 'Andre'
                        },
                        {
                            date: 'message date4',
                            content: 'Entao que tens feito?',
                            from: 'Daniel',
                            to: 'Andre'
                        },
                        {
                            date: 'message date5',
                            content: 'nada de especial',
                            from: 'Andre',
                            to: 'Marta'
                        }
                    ]
                }
                
            ],
            name: "wtf"
        }
    }

    render() {
        const { talks } = this.state
        return (
            <CardGroup className="card-group">
                {talks.map((talk) => 
                    <CardChat 
                        key={talk.last_seen}
                        talk={talk}
                    />
                )}
            </CardGroup>
        )
    }
}
