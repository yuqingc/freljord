// Copyright 2018 Matt<mr.chenyuqing@live.com>

interface IMainAction {
    type: string;
    [propName: string]: any;
}

interface IHomeAction {
    type: string;
    name: string;
    [propName: string]: any;
}

export {
    IMainAction,
    IHomeAction,
};
