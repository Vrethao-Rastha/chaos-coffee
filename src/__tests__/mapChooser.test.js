import mapChooser from '../mapChooser'

describe("mapChooser", ()=> {
    it("returns an image based on user input", ()=> {
        let expected = "portland.png"
        let actual = mapChooser("portland")
        expect(actual).toEqual(expected);
    })
    it("returns an default image when no image is chosen", ()=> {
        let expected = "None.png"
        let actual = mapChooser("")
        expect(actual).toEqual(expected);
    })
})