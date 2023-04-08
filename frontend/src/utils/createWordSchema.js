function createWordSchema(name, value) {
    switch (name) {
        case "title":
            if (value === "")
                return "Baby!! Enter the word";
            else
                return false
        default:
            break;
    }
}

export default createWordSchema;