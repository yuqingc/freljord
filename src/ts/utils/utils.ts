// Copyright 2018 Matt<mr.chenyuqing@live.com>

import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';

export const createAxios = () => {
    const localToken = localStorage.getItem('token');
    if (localToken) {
        return axios.create({
            timeout: 30000,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'Authorization': `Bearer ${localToken}`,
            }
        });
    }

    return axios.create({
        timeout: 30000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        }
    });
};

type FormParamsType = {
    [propName: string]: any;
};

export const formParamsFrom = (obj: FormParamsType) => qs.stringify(obj);

type showGlobalMessageKeyType = 'info' | 'success' | 'error' | 'warning';

export const showGlobalMessage = (mode: showGlobalMessageKeyType, messageString: string) => {
    message[mode](messageString);
  };
