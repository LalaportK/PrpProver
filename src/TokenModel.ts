/*
    This file defines the interface of tokens.
*/

import{ Token } from './token';

export interface TokenModel {
    type: Token;
    value: string;
}