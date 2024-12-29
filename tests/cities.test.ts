import { wordlist } from "../src/cities";


describe("wordlist", () => {
  it("contains a list of 2048 words", () => {
    expect(wordlist.length).toEqual(2048);
    expect(wordlist[0]).toEqual("aalborg");
    expect(wordlist[769]).toEqual("iquitos");
    expect(wordlist[2047]).toEqual("zurich");
  });
});
