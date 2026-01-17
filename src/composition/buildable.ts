/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { EntityMeta, EntityURIS } from '../entity'
import { BuildableURIS, BuildOf } from '../types'
import { Version } from './versioned'

export type MetaInit<T extends EntityURIS, V extends Version> = Omit<
  EntityMeta<T, V>,
  'tag' | 'version' | 'resource'
>

/**
 * Buildable contract for entities.
 *
 * Represents a factory-like capability that can construct
 * a fully materialized entity from its raw properties and metadata.
 *
 * - P: shape of the entity properties
 * - T: entity URI used to resolve the concrete entity type
 */

export interface Buildable<P, T extends string> {
  /**
   * Build function.
   *
   * Combines domain properties with entity metadata
   * to produce a concrete entity instance associated
   * with the given entity URI.
   */

  readonly builder: T extends BuildableURIS
    ? (props: P, meta: MetaInit<T, BuildOf<T>['meta']['version']>) => BuildOf<T>
    : (props: P, meta: any) => any
}
