/* Chaikin Money Flow */
import { VOLUME, HIGH, LOW, CLOSE } from './cons'
import { sum } from './arrayMath'
import { KData } from './types';

// Money Flow Multiplier
// [(close - low) - (high - close)] / (high - low)
export const mfm = (data: KData) =>
  HIGH(data) - LOW(data) === 0 ? 0 : ((CLOSE(data) - LOW(data)) - (HIGH(data) - CLOSE(data))) / (HIGH(data) - LOW(data))

// Money Flow Volume
export const mfv = (data: KData) => mfm(data) * VOLUME(data)


/**
 * Chaikin Money Flow
 */
export const cmf = (periods: number) => (data: KData[]) => {
  const mfvs = data.map(mfv)
  const volumes = data.map(VOLUME)
  return mfvs.map((m, i) => (i < periods - 1 ? 0 : sum(periods, i, mfvs) / sum(periods, i, volumes)))
}
