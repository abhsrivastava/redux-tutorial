import * as React from 'react';
import {Provider} from 'react-redux';
import InlineSVG from 'svg-inline-react';
import logo from './images/logo.svg';
import './css/App.css';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

export default class App extends React.Component<{}, {}>{
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-Header">
                        <InlineSVG src={logo}/>
                        <h1 className="App-tite">Welcome to React</h1>
                    </header>
                    <PostForm/>
                    <hr />
                    <Posts/>
                </div>
            </Provider>
        );
    }
}