// Copyright 2018 Matt<mr.chenyuqing@live.com>

import immutable from 'immutable';

import { IHomeAction } from 'ts/actions';

interface IHomeState {
    name: string;
    age: number;
}

const initalState = immutable.fromJS({
    name: 'Matt',
    age: 20,
} as IHomeState);

export default function home (state: typeof initalState = initalState, action: IHomeAction) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return state.set('name', action.name);
        default:
            return state;
    }
}
