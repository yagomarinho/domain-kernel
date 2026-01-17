/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Buildable, MetaInit } from '../composition'
import { DraftEntity } from './draft.entity'
import { DraftEntityMeta, EntityMeta } from './meta'
import {
  EntityURIS,
  EntityURItoKind,
  PropsOfEntity,
  VersionOfEntity,
} from './types'

export type CreateEntityMetaInit<T extends EntityURIS> = MetaInit<
  T,
  VersionOfEntity<T>
>

export type CreateDraftEntityMetaInit<T extends EntityURIS> = Partial<
  Omit<MetaInit<T, VersionOfEntity<T>>, 'id' | 'created_at' | 'updated_at'>
>

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
  version: VersionOfEntity<T>,
  builder: Buildable<PropsOfEntity<T>, T>['builder'],
  props: PropsOfEntity<T>,
  meta: DraftEntityMeta<T, VersionOfEntity<T>>,
): DraftEntity<EntityURItoKind[T]>

export function createEntity<T extends EntityURIS>(
  tag: T,
  version: VersionOfEntity<T>,
  builder: Buildable<PropsOfEntity<T>, T>['builder'],
  props: PropsOfEntity<T>,
  meta: EntityMeta<T, VersionOfEntity<T>>,
): EntityURItoKind[T]

export function createEntity<T extends EntityURIS>(
  tag: T,
  version: VersionOfEntity<T>,
  builder: Buildable<PropsOfEntity<T>, T>['builder'],
  props: PropsOfEntity<T>,
  meta:
    | DraftEntityMeta<T, VersionOfEntity<T>>
    | EntityMeta<T, VersionOfEntity<T>>,
) {
  return {
    props,
    meta,
    tag,
    version,
    builder,
  }
}
