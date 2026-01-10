/*
 * Copyright (c) 2025 Yago Marinho
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ValueObject } from './value.object'

export type RawProps<P extends {}> = {
  [K in keyof P]: P[K] extends ValueObject<infer T> ? T : P[K]
}
