import React from 'react'
import Card from './Card'

function Portfolio() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <Card img="https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg" />
                </div>
                <div className="col-md-4">
                    <Card img="https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg"/>
                </div>
                <div className="col-md-4">
                    <Card img="https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg" />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <Card img="https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg"/>
                </div>
                <div className="col-md-4">
                    <Card img="https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg"/>
                </div>
                <div className="col-md-4">
                    <Card img="https://cdn.pixabay.com/photo/2017/06/15/11/40/beautiful-2405131__340.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Portfolio