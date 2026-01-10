/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Buildable } from '../composition'
import { DraftEntity } from './entity'
import { EntityMeta } from './meta'
import { EntityURIS, EntityURItoKind } from './types'

/**
 * Creates a new entity instance, either as a draft (without metadata)
 * or as a fully materialized entity (with metadata).
 *
 * - tag: the entity type identifier
 * - version: the version of the entity
 * - builder: the `_b` function used to rebuild the entity
 * - props: the entity properties
 * - meta (optional): the entity metadata; if not provided, the entity is a draft
 *
 * Returns a `DraftEntity` when metadata is not provided, or a fully typed entity otherwise.
 */

export function createEntity<T extends EntityURIS>(
  tag: T,
  version: EntityURItoKind[T]['version'],
  builder: Buildable<EntityURItoKind[T]['props'], T>['builder'],
  props: EntityURItoKind[T]['props'],
): DraftEntity<EntityURItoKind[T]>

export function createEntity<T extends EntityURIS>(
  tag: T,
  version: EntityURItoKind[T]['version'],
  builder: Buildable<EntityURItoKind[T]['props'], T>['builder'],
  props: EntityURItoKind[T]['props'],
  meta: EntityMeta,
): EntityURItoKind[T]

export function createEntity<T extends EntityURIS>(
  tag: T,
  version: EntityURItoKind[T]['version'],
  builder: Buildable<EntityURItoKind[T]['props'], T>['builder'],
  props: EntityURItoKind[T]['props'],
  meta?: EntityMeta,
): any {
  return {
    builder,
    tag,
    version,
    props,
    meta,
  }
}
