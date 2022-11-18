// eslint-disable-next-line import/no-cycle
import service from '../plugins/axios';
import { aliyunSms } from '../config/index';

export const getCaptcha = phone => service({
        url: 'common/api/sms/send',
        method: 'POST',
        data: {
            source: 'CLIENT',
            type: 'QUICK_LOGIN',
            phone,
            appCode: aliyunSms,
        },
    });

export const loginRequest = data => service({
        url: 'auth/api/login',
        method: 'POST',
        data,
    });

export const authFreeLogin = data => service({
        url: 'auth/api/keyless/login',
        method: 'POST',
        data,
    });
