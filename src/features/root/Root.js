import React from 'react';
import Header from './components/Header/Header';
import  {Route} from 'react-router-dom';
import Algorithms from '../algorithms/Algorithms'
import BinaryTree from '../binaryTree/BinaryTree'
import Colors from '../colors/Colors';
import HijriAge from '../hijriAge/HijriAge';

const Root = ()=> {
    return (
        <React.Fragment>
            <Header />
            <Route exact path="/" component={null}></Route>
            <Route exact path="/binarytree" component={BinaryTree}></Route>
            <Route exact path="/algorithms" component={Algorithms}></Route>
            <Route exact path="/colors" component={Colors}></Route>
            <Route exact path="/hijriage" component={HijriAge}></Route>
        </React.Fragment>
    )
}

export default Root;