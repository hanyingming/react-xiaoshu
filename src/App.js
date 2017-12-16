import React, { Component } from 'react'
import CommentInputContainer from './container/CommentInputContainer'
import CommentListContainer from './container/CommentListContainer'

export default class CommentApp extends Component {
    render() {
        return (
            <div className='wrapper'>
                <CommentInputContainer />
                <CommentListContainer />
            </div>
        )
    }
}