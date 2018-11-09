import axios from 'axios';

//action type

const GET_USER = 'GET_USER';

//initial state
const defaultUser = {};

//action creator

const getUser = user => ({ type: GET_USER, user });
