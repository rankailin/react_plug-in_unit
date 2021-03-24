import React, { Component } from 'react'
import Page from './Pages'
export default class PageTest extends Component {
    state = {
        current:8,
        total:120,
        limit:13,
        panleNumber:6
    }
    handelPage = (newPage)=> {
        console.log(newPage)
        this.setState({
            current:newPage
        })
    }
    render() {
        return (
            <div>
                <Page onChangePage={this.handelPage} {...this.state}/>
            </div>
        )
    }
}
