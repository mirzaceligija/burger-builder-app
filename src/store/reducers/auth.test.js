import React from 'react';

import reducer from './auth';
import * as actionTypes from '../actions/actionTypes'; 

describe('*Auth reducer*', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/',
        });
    });


    it('should store the token upon login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/',
        }, { 
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token-123',
            userId: 'some-token-123',
        })).toEqual({
            token: 'some-token-123',
            userId: 'some-token-123',
            error: null,
            loading: false,
            authRedirectPath: '/',
        })
    });
});