/**
 * @returns object with shape of tailwind's spacing: {
  ...
  '176': '44rem',
  '192': '48rem',
  '208': '52rem',
  ...
    },
 */
export function getSpacingRange({
  start,
  numberOfNewSteps,
  step = 1,
}: {
  start: number
  numberOfNewSteps: number
  step?: number
}): Record<string, string> {
  const spacing: Record<string, string> = {}

  const cof = step * 4
  const limit = start + numberOfNewSteps * cof

  for (let i = start; i < limit; i = i + cof) {
    Object.assign(spacing, { [`${i}`]: `${i / 4}rem` })
  }

  return spacing as any
}
