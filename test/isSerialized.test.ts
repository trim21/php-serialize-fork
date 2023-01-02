import { test, expect } from '@jest/globals'
import isSerialized from '../src/isSerialized'

test('test whether the content is legitimate serialized content', () => {
  expect(isSerialized('a:1:{i:0;s:12:"add-post_tag";}')).toBe(true)
  expect(isSerialized('d:100010001000100004049513873408;')).toBe(true)
  expect(isSerialized('i:100000000;')).toBe(true)
  expect(isSerialized('d:1.7976931348623157E+308;')).toBe(true)
  expect(isSerialized('something')).toBe(false)
  expect(isSerialized('你好世界')).toBe(false)
  expect(isSerialized('i:10000a0000;')).toBe(false)
  expect(isSerialized('i:100000000')).toBe(false)
})
