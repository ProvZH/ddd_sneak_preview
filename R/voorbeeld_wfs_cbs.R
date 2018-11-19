library(magrittr)
library(httr)
library(xml2)
library(sf)
library(tmap)

url <- parse_url("https://geodata.nationaalgeoregister.nl/cbsenergieleveringen/wfs")

# Overzicht maken van datasets ('feature types') in de service
url$query <- list(service = "WFS", 
                  request = "GetCapabilities")
request <- build_url(url)
feature_types <- GET(request) %>% 
                 content(as = "text", encoding = "UTF-8") %>% 
                 read_xml() %>%
                 xml_find_all("//wfs:FeatureType/wfs:Name") %>% 
                 xml_text()
feature_types

# Inlezen dataset aardgas_buurt_bedrijven_2014
url$query <- list(service = "WFS", 
                  request = "GetFeature", 
                  typename = "cbsenergieleveringen:aardgas_buurt_bedrijven_2014",
                  count = 100,       # Voor demonstratiedoeleinden alleen de eerste 100 rijen inlezen!
                  outputFormat = "application/json")
request <- build_url(url)
aardgas_buurt_bedrijven_2014 <- st_read(request)

# Dataset bekijken
View(aardgas_buurt_bedrijven_2014)
qtm(aardgas_buurt_bedrijven_2014)
