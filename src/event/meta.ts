/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Resource,
  Timestamped,
  Identifiable,
  Version,
  Tag,
  Versioned,
} from '../composition'
import { EventURIS } from './types'

export const EventURI = 'event'
export type EventURI = typeof EventURI

export interface EventMeta<
  T extends EventURIS = EventURIS,
  V extends Version = Version,
>
  extends Resource<EventURI>, Timestamped, Identifiable, Tag<T>, Versioned<V> {
  readonly occurred_at: Date
  readonly causation_id: string
  readonly correlation_id: string
}
