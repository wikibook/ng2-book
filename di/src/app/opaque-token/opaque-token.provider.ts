import { Inject, OpaqueToken } from '@angular/core';

export let OPAQUE_TOKEN = new OpaqueToken('OPAQUE_TOKEN');

export interface Config {
    endpointURL: string;
    PORT: string;
}

export const MY_API_CONFIG: Config = {
    endpointURL: 'http://192.168.0.1:80/rest',
    PORT: '8000'
};

export let OpaqueTokenProvider = {
    provide: OPAQUE_TOKEN,
    useValue: MY_API_CONFIG
};