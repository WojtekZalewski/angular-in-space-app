import { SpaceRoutingModule } from './space-routing.module';

describe('SpaceRoutingModule', () => {
  let spaceRoutingModule: SpaceRoutingModule;

  beforeEach(() => {
    spaceRoutingModule = new SpaceRoutingModule();
  });

  it('should create an instance', () => {
    expect(spaceRoutingModule).toBeTruthy();
  });
});
