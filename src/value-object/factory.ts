/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Buildable } from '../composition'
import { ValueObjectMeta } from './meta'
import { ValueObjectOf, ValueObjectURIS, ValueObjectURItoKind } from './types'

/**
 * Factory function for creating value objects.
 *
 * Ensures consistent structure, tagging, and metadata
 * initialization.
 */

export function createValueObject<P extends {}, T extends ValueObjectURIS>(
  props: P,
  meta: ValueObjectMeta<T>,
  builder: Buildable<ValueObjectURItoKind[T]['props'], T>['builder'],
): ValueObjectOf<T> {
  return {
    props,
    meta,
    builder,
  } as any
}
