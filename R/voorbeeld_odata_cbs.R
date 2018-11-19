library(cbsodataR)

# Beschikbare datasets
datasets <- cbs_get_toc(Language = "nl")
View(datasets)
nrow(datasets)

# Metadata van dataset 84314NED (Energieverbruik particuliere woningen; woningtype, wijken en buurten, 2017)
metadata_84314NED <- cbs_get_meta('84314NED')
View(metadata_84314NED)

# Beschikbare attributen voor 84314NED
metadata_84314NED$DataProperties[, c("Key", "Title")]

# Classificatie van Woningkenmerken
metadata_84314NED$Woningkenmerken[, c("Key", "Title")]

# Het gemiddelde electriciteitsverbruik van eigen woningen in 2017
data <- cbs_get_data(id = "84314NED", 
                     Woningkenmerken = "g", 
                     select = c("Woningkenmerken", "WijkenEnBuurten", "GemiddeldElektriciteitsverbruik_5"))
View(data)
