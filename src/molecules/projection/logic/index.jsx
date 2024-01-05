function aggregateDataForDMAsAndPlatforms(data, selectedDMAs, selectedPlatforms) {
    const aggregatedData = {};

    data.forEach(entry => {
        // Check if the DMA and platform are selected
        if (selectedDMAs.includes(entry.DMA) && selectedPlatforms.includes(entry.PlatformName)) {
            console.log('hello')
            // Sum YEAR_1, YEAR_2, M1, M2, M3, ...
            for (const field in entry) {
                if (field.startsWith("YEAR_") || field.startsWith("M")) {
                    if (!aggregatedData[field]) {
                        aggregatedData[field] = 0;
                    }
                    aggregatedData[field] += entry[field];
                }
            }
        }
    });

    return aggregatedData;
}

// Example: Selecting DMAs ["New York", "Chicago"] and platforms ["Live Weather", "cLINK"]
// const selectedDMAs = ["Philadelphia","Dallas-Fort Worth"];
// const selectedPlatforms = ["Live Weather","cLINK"];

// const result = aggregateDataForDMAsAndPlatforms(jsonData, selectedDMAs, selectedPlatforms);

// Print or use the result as needed

export default aggregateDataForDMAsAndPlatforms;