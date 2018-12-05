function mapChooser(locationName) {
    if (!locationName){
        locationName = "None"
    }
    let imageName = locationName + ".png"
    return imageName
}
export default mapChooser;