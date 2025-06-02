import { Test, TestingModule } from '@nestjs/testing';
import { DirectorsController } from './directors.controller';
import { DirectorsService } from './directors.service';

describe('DirectorsController', () => {
  let controller: DirectorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectorsController],
      providers: [DirectorsService],
    }).compile();

    controller = module.get<DirectorsController>(DirectorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
