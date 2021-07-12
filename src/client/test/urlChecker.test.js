import { validURL } from "../js/urlChecker";


describe(" Testing 'validURL()' ", () => {
    test('It should return true as defined', () => {
        expect(validURL).toBeDefined();
    });

    test('It should false because of invalid URL', () => {
        expect(validURL("google.")).toBeFalsy();
    });
});