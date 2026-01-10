/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { EventMeta } from './meta'
import { Buildable, Version } from '../composition'
import { EventURIS } from './types'

export interface DomainEvent<
  P extends {} = any,
  T extends EventURIS = EventURIS,
  V extends Version = Version,
> extends Buildable<P, T> {
  readonly meta: EventMeta<T, V>
  readonly payload: Readonly<P>
}
