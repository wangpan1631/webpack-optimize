// import jquery from 'jquery';
// import moment from 'moment';
// import 'moment/locale/zh-cn'; // 打包的时候在webpack配置文件里面忽略了moment里面的locale模块，这里要使用需要手动引入需要的模块

// moment.locale('zh-cn');
// let r = moment().endOf('day').fromNow();
// console.log('--r---', r);

import React from 'react';
import { render } from 'react-dom';
render(<h1>jsx</h1>, window.root);