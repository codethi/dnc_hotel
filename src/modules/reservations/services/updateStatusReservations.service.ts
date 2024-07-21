import { Inject, Injectable } from '@nestjs/common';
import { REPOSITORY_TOKEN_RESERVATION } from '../utils/repositoriesTokens';
import { IReservationRepository } from '../domain/repositories/Ireservations.repository';
import { ReservationStatus } from '@prisma/client';

@Injectable()
export class UpdateStatusReservationsService {
  constructor(
    @Inject(REPOSITORY_TOKEN_RESERVATION)
    private readonly reservationRepository: IReservationRepository,
  ) {}

  async execute(id: number, status: ReservationStatus) {
    return await this.reservationRepository.updateStatus(id, status);
  }
}
