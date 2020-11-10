import { traceWords, getDefaultSettings } from '.';

describe('Verify trace', () => {
    jest.setTimeout(10000);
    test('tests tracing a word', async () => {
        const words = ['apple'];
        const config = getDefaultSettings();
        const result = await traceWords(words, config);
        expect(result).not.toHaveLength(0);

        const foundIn = result.filter((r) => r.found).map((r) => r.dictName);
        expect(foundIn).toContain('en_US.trie.gz');
    });
});
