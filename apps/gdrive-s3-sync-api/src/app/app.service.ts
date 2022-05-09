import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getData(): { data: string } {
    return { data: 'Welcome to my-nest-app!' }
  }
}
