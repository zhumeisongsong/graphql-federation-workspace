import { WellbeingPromptEntity } from './wellbeing-prompt-entity';

describe('WellbeingPromptEntity', () => {
  it('should create a valid WellbeingPromptEntity object', () => {
    const wellbeingPrompt: WellbeingPromptEntity = {
      id: '1',
      content: 'Take a 5-minute walk outside.',
      category: 'physical',
      createdAt: new Date(),
    };

    expect(wellbeingPrompt).toBeDefined();
    expect(wellbeingPrompt.id).toBe('1');
    expect(wellbeingPrompt.content).toBe('Take a 5-minute walk outside.');
    expect(wellbeingPrompt.category).toBe('physical');
    expect(wellbeingPrompt.createdAt).toBeInstanceOf(Date);
  });
});