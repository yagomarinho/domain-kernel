/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Mapping from event URIs to concrete event types.
 *
 * Extend this interface to associate string identifiers
 * with actual event implementations in the domain.
 */

export interface EventURItoKind {}

/**
 * Type representing all valid event URIs.
 *
 * Extracted as the keys of EventURItoKind.
 */

export type EventURIS = keyof EventURItoKind

/**
 * Resolves a concrete event type from a URI.
 *
 * Given a URI, returns the corresponding event type
 * defined in EventURItoKind.
 */

export type EventOf<URI extends EventURIS> = EventURItoKind[URI]
