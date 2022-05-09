import { Test, TestingModule } from '@nestjs/testing'

import { AppController } from '@gdrive-s3-sync-api/src/app/app.controller'
import { AppService } from '@gdrive-s3-sync-api/src/app/app.service'

describe('AppController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()
  })

  describe('getData', () => {
    it('should return "Welcome to my-nest-app!"', () => {
      const appController = app.get<AppController>(AppController)
      expect(appController.getData()).toEqual({
        data: 'Welcome to my-nest-app!',
      })
    })
  })
})
