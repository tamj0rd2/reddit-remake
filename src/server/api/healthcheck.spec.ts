import { mockFn, mockObj } from '~shared/test-helpers'
import { healthCheckHandler } from './healthcheck'
import { Request, Response, NextFunction } from 'express'

describe('healthcheck', () => {
  function createTestDeps() {
    const doubleReq = mockObj<Request>({})
    const doubleRes = mockObj<Response>({ status: jest.fn(), send: jest.fn() })
    const doubleNext = mockFn<NextFunction>()
    return {
      dummyReq: doubleReq,
      spyRes: doubleRes,
      stubRes: doubleRes,
      dummyNext: doubleNext,
    }
  }

  it('returns a successful response', () => {
    const { dummyReq, spyRes, dummyNext } = createTestDeps()
    spyRes.status.mockReturnThis()

    healthCheckHandler(dummyReq, spyRes, dummyNext)

    expect(spyRes.status).toBeCalledWith(200)
    expect(spyRes.send).toBeCalledWith('Nice stuff!')
  })
})
