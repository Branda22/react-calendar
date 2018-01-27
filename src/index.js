import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

import 'bulma/bulma.sass';

import store from './modules'
import App from './containers/app';


render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
