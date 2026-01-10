/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Buildable } from '../composition'
import { EventOf, EventURIS, EventURItoKind } from './types'

export function createEvent<T extends EventURIS>(
  payload: EventURItoKind[T]['payload'],
  meta: EventURItoKind[T]['meta'],
  builder: Buildable<EventURItoKind[T]['payload'], T>['builder'],
): EventOf<T> {
  return {
    payload,
    meta,
    builder,
  } as any
}
