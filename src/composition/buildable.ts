/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BuildableURIS, BuildOf } from '../types'

/**
 * Buildable contract for entities.
 *
 * Represents a factory-like capability that can construct
 * a fully materialized entity from its raw properties and metadata.
 *
 * - P: shape of the entity properties
 * - T: entity URI used to resolve the concrete entity type
 */

export interface Buildable<P, T extends BuildableURIS> {
  /**
   * Build function.
   *
   * Combines domain properties with entity metadata
   * to produce a concrete entity instance associated
   * with the given entity URI.
   */

  readonly builder: (props: P, meta: BuildOf<T>['meta']) => BuildOf<T>
}
