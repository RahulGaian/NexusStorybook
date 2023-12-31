function aggregateDataForDMAsAndPlatformsolD(data, selectedDMAs, selectedPlatforms) {
    const aggregatedData = {};
    // console.log(selectedDMAs,selectedPlatforms)

    data.forEach(entry => {
        // Check if the DMA and platform are selected
        if (selectedDMAs.includes(entry.DMA) && selectedPlatforms.includes(entry.PlatformName)) {
            console.log('hello')
            // Sum YEAR_1, YEAR_2, M1, M2, M3, ...
            for (const field in entry) {
                if (field.startsWith("YEAR_")) {
                    if (!aggregatedData[field]) {
                        aggregatedData[field] = 0;
                    }
                    let value = parseInt(entry[field])

                    aggregatedData[field] += parseInt(value);
                }
                if(field.startsWith("AD_")){
                    if (!aggregatedData[field]) {
                        aggregatedData["ad"] = 0;
                    }
                    let value = parseInt(entry[field])

                    aggregatedData["ad"] += value;
                }
                if (field.startsWith("METERED_")){
                    if (!aggregatedData[field]) {
                        aggregatedData["metered"] = 0;
                    }
                    let value = parseInt(entry[field])
                    
                    aggregatedData["metered"] += value;
                    console.log(aggregatedData["metered"],"hello metered",value)
                }
                if (field.startsWith("FIXED_")){
                    if (!aggregatedData[field]) {
                        aggregatedData["fixed"] = 0;
                    }
                    let value = parseInt(entry[field])
                    aggregatedData["fixed"] += value;
                }
                if (field.startsWith("SUBSCRIPTION_")){
                    if (!aggregatedData[field]) {
                        aggregatedData["subscription"] = 0;
                    }
                    let value = parseInt(entry[field])

                    aggregatedData["subscription"] += value;
                }

            }
        }
    });

    return aggregatedData;
}

function aggregateDataForDMAsAndPlatforms(data, selectedDMAs, selectedPlatforms) {
    const aggregatedData = {};
    const selectedYears = ["YEAR_1", "YEAR_2", "YEAR_3", "YEAR_4", "YEAR_5", "YEAR_6", "YEAR_7", "YEAR_8", "YEAR_9", "YEAR_10"];

    data.forEach(entry => {
        // Check if the DMA and platform are selected
        if (selectedDMAs.includes(entry.DMA) && selectedPlatforms.includes(entry.PlatformName)) {
            // Sum YEAR_1, YEAR_2, M1, M2, M3, ...
            for (const field in entry) {
                if (field.startsWith("YEAR_")  ) {
                    if (!aggregatedData[field]) {
                        aggregatedData[field] = 0;
                    }
                    aggregatedData[field] += parseInt(entry[field]);

                    // Sum selected years separately
                    if (selectedYears.includes(field)) {
                        const yearField =`${entry.PlatformName}_${field}`;
                        if (!aggregatedData[yearField]) {
                            aggregatedData[yearField] = 0;
                        }
                        aggregatedData[yearField] += parseInt(entry[field]);
                    }
                }
                if(field.startsWith("AD_")){
                    if (!aggregatedData[field]) {
                        aggregatedData["ad"] = 0;
                    }
                    let value = parseInt(entry[field])

                    aggregatedData["ad"] += value;
                }
                if (field.startsWith("METERED_")){
                    if (!aggregatedData[field]) {
                        aggregatedData["metered"] = 0;
                    }
                    let value = parseInt(entry[field])
                    
                    aggregatedData["metered"] += value;
                    console.log(aggregatedData["metered"],"hello metered",value)
                }
                if (field.startsWith("FIXED_")){
                    if (!aggregatedData[field]) {
                        aggregatedData["fixed"] = 0;
                    }
                    let value = parseInt(entry[field])
                    aggregatedData["fixed"] += value;
                }
                if (field.startsWith("SUBSCRIPTION_")){
                    if (!aggregatedData[field]) {
                        aggregatedData["subscription"] = 0;
                    }
                    let value = parseInt(entry[field])

                    aggregatedData["subscription"] += value;
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