import training from './training/training.js';
import training6w from './training/training6w';
import training4w from './training/training4w';

import androidData from './software-development/android-data';
import pythonData from './software-development/python-data';
import phpData from './software-development/php-data';
import angularData from './software-development/angular-data';
import nodeData from './software-development/node-data';

const data = [
    androidData,
    angularData,
    phpData,
    pythonData,
    {
        id:5,
        imgUrl: require('../../images/courses/mcse.jpg'),
        type:'networking',
        name: 'MCSE'
    },
    nodeData,
    {
        id:7,
        imgUrl: require('../../images/courses/aws.jpg'),
        type:'cloud computing',
        name: 'AWS'
    },
    {
        id:8,
        imgUrl: require('../../images/courses/cloud-computing.png'),
        type:'cloud computing',
        name: 'Cloud Computing'
    },
    {
        id:9,
        imgUrl: require('../../images/courses/dot-net.jpg'),
        type:'software development',
        name:'dot-net'
    },
    {
        id:10,
        imgUrl: require('../../images/courses/linux.png'),
        type:'software development'
    },
    {
        id:11,
        imgUrl: require('../../images/courses/oracle.jpg'),
        type:'software development'
    },
    {
        id:12,
        imgUrl: require('../../images/courses/embedded-system.jpg'),
        type:'ece'
    },
    {
        id:13,
        imgUrl: require('../../images/courses/ethical-hacking.jpg'),
        type:'networking'
    },
    {
        id:15,
        imgUrl: require('../../images/courses/ccnp.png'),
        type:'networking'
    },
    {
        id:16,
        imgUrl: require('../../images/courses/cisco.png'),
        type:'networking'
    },
    training4w,
    training6w,
    training,
    {
        id:18,
        imgUrl: require('../../images/courses/AI.jpg'),
        type:'analytics program'
    },
    {
        id:19,
        imgUrl: require('../../images/courses/R.jpg'),
        type:'analytics program'
    },
    {
        id:20,
        imgUrl: require('../../images/courses/spark.png'),
        type:'analytics program'
    },
    {
        id:21,
        imgUrl: require('../../images/courses/hadoop.jpg'),
        type:'analytics program'
    },
    {
        id:22,
        imgUrl: require('../../images/courses/GST.jpg'),
        type:'bfsi'
    },
    {
        id:23,
        imgUrl: require('../../images/courses/mis.jpg'),
        type:'bfsi'
    },
    {
        id:24,
        imgUrl: require('../../images/courses/hr-generalist.jpg'),
        type:'bfsi'
    },
    {
        id:25,
        imgUrl: require('../../images/courses/hr-social.jpg'),
        type:'bfsi'
    },
    {
        id:26,
        imgUrl: require('../../images/courses/digital-marketing.jpg'),
        type:'bfsi'
    },
]

export default data;