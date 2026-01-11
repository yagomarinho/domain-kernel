/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Idempotent, Resource, Tag } from '../composition'
import { ValueObjectURIS } from './types'

/**
 * Resource identifier for value objects.
 *
 * Used to discriminate value objects from other domain constructs
 * at runtime.
 */
export const ValueObjectURI = 'value-object'
export type ValueObjectURI = typeof ValueObjectURI

/**
 * Metadata associated with a value object.
 *
 * Value objects do not carry identity or lifecycle information,
 * only a resource discriminator.
 */

export interface ValueObjectMeta<T extends ValueObjectURIS = ValueObjectURIS>
  extends Resource<ValueObjectURI>, Tag<T>, Idempotent {}
