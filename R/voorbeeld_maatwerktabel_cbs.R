library(readxl)

# Energiebesparingspotentie van koopwoningen
# zie ook http://cbsnl.maps.arcgis.com/apps/MapSeries/index.html?appid=fde4bb483c8441b0971df437804355ac

url <- "https://www.cbs.nl/-/media/_excel/2017/26/energiepotentiekaarten_publicatie2.xlsx"
bestand <- tempfile(fileext = ".xlsx")
download.file(url, destfile = bestand, mode = "wb")
data <- read_excel(bestand, sheet = "Tabel", skip = 6, col_names = FALSE, na = ".")

kolomnamen <- c("Gemeentecode",
                "Gemeentenaam",
                "Buurtcode",
                "Buurtnaam",
                "Koopwoningen - Populatie",
                "Koopwoningen - Doelgroep",
                "Gemiddeld theoretisch gebouwgebonden energieverbruik - Populatie",
                "Gemiddeld theoretisch gebouwgebonden energieverbruik - Doelgroep",
                "Gemiddelde theoretische besparingspotentie - Populatie - Alle maatregelen",
                "Gemiddelde theoretische besparingspotentie - Populatie - Bouwfysische maatregelen",
                "Gemiddelde theoretische besparingspotentie - Populatie  - Installatietechnische maatregelen",
                "Gemiddelde reële besparingspotentie - Doelgroep - Alle maatregelen",
                "Gemiddelde reële besparingspotentie - Doelgroep - Bouwfysische maatregelen",
                "Gemiddelde reële besparingspotentie - Doelgroep - Installatietechnische maatregelen",
                "Gemiddelde theoretische eenmalig benodigde investering  - Populatie - Alle maatregelen",
                "Gemiddelde theoretische eenmalig benodigde investering  - Populatie - Bouwfysische maatregelen",
                "Gemiddelde theoretische eenmalig benodigde investering  - Populatie - Installatietechnische maatregelen",
                "Gemiddelde reële eenmalig benodigde investering - Doelgroep - Alle maatregelen",
                "Gemiddelde reële eenmalig benodigde investering - Doelgroep - Bouwfysische maatregelen",
                "Gemiddelde reële eenmalig benodigde investering - Doelgroep - Installatietechnische maatregelen",
                "Gemiddelde energie-index",
                "Percentage bevolking 25 tot 65 jaar oud",
                "Totaal aantal huishoudens",
                "Gemiddelde huishoudensgrootte",
                "Percentage huishoudens laag inkomen",
                "Percentage huishoudens hoog inkomen",
                "Woningvoorraad",
                "Gemiddelde woningwaarde x 1000 euro",
                "Percentage eengezingswoning",
                "Percentage meergezinswoning",
                "Percentage koopwoningen",
                "Percentage huurwoningen",
                "Percentage stadsverwarming",
                "Gemiddeld aardgasverbruik koopwoning m3",
                "Gemiddeld elektriciteitsverbruik koopwoning kWh")

names(data) <- kolomnamen
View(data)

# Helaas bevat de dataset nu geen geometrie
# Deze is wel in te lezen via de hosted feature service op ArcGIS Online

library(httr)
library(jsonlite)
library(sf)
library(tmap)

url <- parse_url("https://services2.arcgis.com")
url$path <- "V0QSnyxD0qR3lCHS/ArcGIS/rest/services/Energiepotentie_buurten/FeatureServer/1/query"
url$query <- list(where = "1=1",
                  outFields = "*",
                  f = "geojson")
request <- build_url(url)
data_incl_geom <- st_read(request)

# Plot buurten in 's Gravenhage
qtm(data_incl_geom[grepl("BU0518", data_incl_geom$STATCODE), ])

# Probleem: Wat zijn meer beschrijvende kolomnamen?
names(data_incl_geom)
