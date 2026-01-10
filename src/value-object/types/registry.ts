/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Mapping from value-object URIs to concrete value-object types.
 *
 * Extend this interface to associate string identifiers
 * with actual value-object implementations in the domain.
 */

export interface ValueObjectURItoKind {}

/**
 * Type representing all valid value-object URIs.
 *
 * Extracted as the keys of ValueObjectURItoKind.
 */

export type ValueObjectURIS = keyof ValueObjectURItoKind

/**
 * Resolves a concrete value-object type from a URI.
 *
 * Given a URI, returns the corresponding value-object type
 * defined in ValueObjectURItoKind.
 */

export type ValueObjectOf<URI extends ValueObjectURIS> =
  ValueObjectURItoKind[URI]
