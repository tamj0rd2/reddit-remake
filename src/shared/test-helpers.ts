/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export const mockObj = <T>(thing: Partial<T>): jest.Mocked<T> => thing as jest.Mocked<T>

export const mockCtor = (target: jest.Constructable) => target as jest.MockedClass<typeof target>

export const mockFn = <T extends (...args: any[]) => any = (...args: unknown[]) => unknown>(
  implementation?: (...params: Parameters<T>) => ReturnType<T>,
) => jest.fn<ReturnType<T>, Parameters<T>>(implementation)

export const mockedFn = <T extends (...args: any[]) => any>(fn?: (...params: Parameters<T>) => ReturnType<T>) =>
  fn as MockedFn<T>

export const mockI = <T extends { [P in keyof T]: (...args: any[]) => any }>(o?: T): jest.Mocked<T> => {
  const dummy = o ?? {}

  const handler = {
    get: function <P = keyof T>(target: Record<any, MockedFn<any>>, prop: string): MockedFn<T[keyof T]> {
      const p: unknown = prop
      const key = p as P

      if (!Reflect.has(target, prop)) {
        Reflect.defineProperty(target, prop, { value: mockFn() })
      }

      const x: unknown = target[key]
      return x as MockedFn<T[keyof T]>
    },
  }

  const proxy: unknown = new Proxy(dummy, handler)
  return proxy as jest.Mocked<T>
}

export type MockedFn<T extends (...args: any[]) => any> = jest.Mock<ReturnType<T>, Parameters<T>>

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>
}

export type Public<T> = { [P in keyof T]: T[P] }
