/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ValueObjectMeta } from './meta'
import { ValueObjectURIS } from './types'

/**
 * Core Value Object contract.
 *
 * - P: immutable value properties
 * - T: semantic tag for specialization
 *
 * Value objects are defined by their values, not by identity.
 * They must be treated as immutable and freely replaceable.
 */
export interface ValueObject<
  P extends {} = {},
  T extends ValueObjectURIS = ValueObjectURIS,
> {
  props: Readonly<P>
  meta: ValueObjectMeta<T>
}
