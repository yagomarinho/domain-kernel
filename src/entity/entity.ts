/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Version } from '../composition'
import { Buildable } from '../composition/buildable'
import { EntityURIS } from './types'
import { EntityMeta } from './meta'

/**
 * Core Entity interface.
 *
 * Represents a domain entity with:
 * - a unique tag (URI) for identification
 * - versioning for optimistic concurrency or tracking
 * - build capabilities to construct concrete instances
 *
 * - P: type of domain-specific properties
 * - T: entity URI used for type-level identification
 * - V: version type (default is string-based `Version`)
 */

export interface Entity<
  P extends {} = any,
  T extends EntityURIS = EntityURIS,
  V extends Version = Version,
> extends Buildable<P, T> {
  readonly meta: EntityMeta<T, V>
  readonly props: Readonly<P>
}
