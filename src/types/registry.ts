/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { EntityURItoKind } from '../entity'
import { EventURItoKind } from '../event'
import { ValueObjectURItoKind } from '../value-object'

/**
 * Mapping from buildable URIs to concrete buildable types.
 *
 * Extend this interface to associate string identifiers
 * with actual buildable implementations in the domain.
 */

export interface BuildableURItoKind
  extends EntityURItoKind,
    EventURItoKind,
    ValueObjectURItoKind {}

/**
 * Type representing all valid buildable URIs.
 *
 * Extracted as the keys of BuildableURItoKind.
 */

export type BuildableURIS = keyof BuildableURItoKind

/**
 * Resolves a concrete buildable type from a URI.
 *
 * Given a URI, returns the corresponding buildable type
 * defined in BuildableURItoKind.
 */

export type BuildOf<URI extends BuildableURIS> = BuildableURItoKind[URI]
