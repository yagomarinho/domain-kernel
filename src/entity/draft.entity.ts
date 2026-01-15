/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Entity } from './entity'
import { DraftEntityMeta } from './meta'

/**
 * Draft version of an entity.
 *
 * Used during creation or reconstruction phases
 * where metadata may not yet exist.
 */
export type DraftEntity<E extends Entity> = Omit<E, 'meta'> & {
  meta: DraftEntityMeta<E['meta']['tag'], E['meta']['version']>
}
