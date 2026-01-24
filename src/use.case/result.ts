/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Tag } from '../composition'

export const FailureURI = 'failure'
export type FailureURI = typeof FailureURI

export const SuccessfulURI = 'successful'
export type SuccessfulURI = typeof SuccessfulURI

export interface Failure<E = any> extends Tag<FailureURI> {
  error: E
}

export interface Successful<D = any> extends Tag<SuccessfulURI> {
  data: D
}

export type Result<E = any, D = any> = Failure<E> | Successful<D>

export function Result<E>(type: FailureURI, error: E): Failure<E>
export function Result<D>(type: SuccessfulURI, data: D): Successful<D>
export function Result(type: FailureURI | SuccessfulURI, data: any): Result {
  return type === FailureURI ? Failure(data) : Successful(data)
}

function fail(): Failure<undefined>
function fail<E>(error: E): Failure<E>
function fail<E>(error?: E): Failure<E> {
  return Failure(error as E)
}

function ok(): Successful<undefined>
function ok<D>(data: D): Successful<D>
function ok<D>(data?: D): Successful<D> {
  return Successful(data as D)
}

Result.fail = fail
Result.ok = ok

export function Failure<E>(error: E): Failure<E> {
  return {
    tag: FailureURI,
    error,
  }
}

export function Successful<D>(data: D): Successful<D> {
  return {
    tag: SuccessfulURI,
    data,
  }
}

export function isFailure(result: Tag): result is Failure {
  return result.tag === FailureURI
}

export function isSuccessful(result: Tag): result is Successful {
  return result.tag === SuccessfulURI
}
