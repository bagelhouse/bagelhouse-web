import { Test } from '@nestjs/testing'

import { AppService } from '@gdrive-s3-sync-api/src/app/app.service'

describe('AppService', () => {
  let service: AppService

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService],
    }).compile()
    service = app.get<AppService>(AppService)
  })

  describe('getData', () => {
    it('should return "Welcome to my-nest-app!"', () => {
      expect(service.getData()).toEqual({ data: 'Welcome to my-nest-app!' })
    })
  })
})
