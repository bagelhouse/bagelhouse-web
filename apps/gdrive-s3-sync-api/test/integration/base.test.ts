import * as request from 'supertest'
import { Test } from '@nestjs/testing'
import { AppModule } from '@gdrive-s3-sync-api/src/app/app.module'
// import { AppService } from '@gdrive-s3-sync-api/src/app/app.service'
import { INestApplication } from '@nestjs/common'

describe('Cats', () => {
  let app: INestApplication
  const AppService = { findAll: () => 'Welcome to my-nest-app!' }

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AppService)
      .useValue(AppService)
      .compile()

    app = moduleRef.createNestApplication()
    await app.init()
  })

  it('/GET api', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect({
        data: AppService.findAll(),
      })
  })

  afterAll(async () => {
    await app.close()
  })
})