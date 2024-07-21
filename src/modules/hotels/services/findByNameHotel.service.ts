import { Inject, Injectable } from '@nestjs/common';
import { REPOSITORY_TOKEN_CREATE } from '../utils/repositoriesTokens';
import { IHotelRepository } from '../domain/repositories/Ihotel.repositories';

@Injectable()
export class FindByNameHotelsService {
  constructor(
    @Inject(REPOSITORY_TOKEN_CREATE)
    private readonly hotelRepositories: IHotelRepository,
  ) {}
  async execute(name: string) {
    return await this.hotelRepositories.findHotelByName(name);
  }
}