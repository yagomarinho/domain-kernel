/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  Auditable,
  Idempotent,
  Identifiable,
  Resource,
  Tag,
  Version,
  Versioned,
} from '../composition'
import { EntityMetaOf, EntityURIS, VersionOfEntity } from './types'

export const EntityURI = 'entity'
export type EntityURI = typeof EntityURI

interface EntityMetaBase<T extends EntityURIS, V extends Version>
  extends Resource<EntityURI>, Idempotent, Tag<T>, Versioned<V> {}

export interface DraftEntityMeta<
  T extends EntityURIS = EntityURIS,
  V extends Version = Version,
>
  extends EntityMetaBase<T, V>, Partial<Identifiable>, Partial<Auditable> {}

/**
 * Metadata shared by all entities.
 *
 * This structure is responsible for identity, auditing
 * and resource discrimination.
 */

export interface EntityMeta<
  T extends EntityURIS = EntityURIS,
  V extends Version = Version,
>
  extends EntityMetaBase<T, V>, Identifiable, Auditable {}

export interface CreateMetaParams<T extends EntityURIS>
  extends
    Omit<EntityMetaBase<T, VersionOfEntity<T>>, 'resource'>,
    Partial<Identifiable>,
    Partial<Auditable> {}

export type CreateDraftMetaParams<T extends EntityURIS> = Omit<
  CreateMetaParams<T>,
  'id' | 'created_at' | 'updated_at'
>

export function createEntityMeta<T extends EntityURIS>(
  data: CreateDraftMetaParams<T>,
): DraftEntityMeta<T, VersionOfEntity<T>>
export function createEntityMeta<T extends EntityURIS>(
  data: Required<CreateMetaParams<T>>,
): EntityMetaOf<T>
export function createEntityMeta<T extends EntityURIS>({
  id,
  created_at,
  updated_at,
  idempotency_key,
  tag,
  version,
}: CreateMetaParams<T>):
  | DraftEntityMeta<T, VersionOfEntity<T>>
  | EntityMetaOf<T> {
  return {
    id,
    resource: 'entity',
    created_at,
    updated_at,
    idempotency_key,
    tag,
    version,
  }
}
