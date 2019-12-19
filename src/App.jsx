import React, { Component } from 'react';
import './App.css';
import { request } from './utils/request';

import ReactEcharts from "echarts-for-react";

let fres = null;

async function crossGet() {
    let res = await request({ method: 'get', url: 'http://localhost:3001/api/cross/getTest' });
    fres = res;
    console.log('res in the function: ', res);
    return res;
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
        this.option={}
        // this.red = null;
        // this.input = null;
    }

    componentDidMount() {
        let box = document.getElementById('box');
        let observer = new IntersectionObserver((entries) => {
            entries.forEach(item => {
                let tips = item.isIntersecting ? '进入了父元素内部' : '离开了父元素';
                console.log(tips);
            })
        });
        observer.observe(box)

        // let childbox = document.getElementById('child-box');
        // let childObserver = new IntersectionObserver(entries => {
        //     entries.forEach(item => {
        //         console.log(item.isIntersecting ? 'red进入了父元素' : 'red离开了父元素');
        //     });
        // })
        // childObserver.observe(this.red)
    }

    

    render() {
        console.log('rerender');

        let crossGetRes = crossGet();


        console.log('crossGetRes: ', crossGetRes);
        // console.log('fres: ', fres);
        return (
            <div className="App">
                <header id='header' className="App-header">
                    {/* <input ref={ele => { this.input = ele }} onChange={this.handleChange} type='text' />
                    <div id='parent'>
                        <div id='child'>
                            <div id='child-box' ref={ele => { this.red = ele }}></div>
                        </div>
                    </div> */}
                    <div id='box' className='box'>
                        <ReactEcharts option={{}} />
                    </div>
                </header>
            </div>
        );
    }

}



export default App;
