library(magrittr)
library(httr)
library(xml2)
library(sf)
library(tmap)
library(stringr)

url <- parse_url("https://geoservices.zuid-holland.nl/arcgis/services/Ruimte/Ruimte_WFS/MapServer/WFSServer?&request=GetCapabilities&service=WFS")

# Overzicht maken van datasets ('feature types') in de service die zijn opgenomen in de Zonnewijzer
url$query <- list(service = "WFS", 
                  request = "GetCapabilities")
request <- build_url(url)
feature_types <- GET(request) %>% 
                 content(as = "text", encoding = "UTF-8") %>% 
                 read_xml() %>%
                 xml_find_all("//wfs:FeatureType/wfs:Name") %>% 
                 xml_text()
feature_types[str_detect(feature_types, "Zonnewijzer")]

# Inlezen dataset Zonnewijzer_Potentie_buurt
url$query <- list(service = "WFS", 
                  request = "GetFeature", 
                  typename = "Ruimte_Ruimte_WFS:Zonnewijzer_Potentie_buurt")
request <- build_url(url)
Zonnewijzer_Potentie_buurt <- st_read(request)

# Dataset bekijken
View(Zonnewijzer_Potentie_buurt)
plot(Zonnewijzer_Potentie_buurt)

# Er gaat iets mis... Ik weet nog niet wat...
# Het is jammer dat de WFS-services van de PZH nog geen GeoJSON retourneren. Dat zou het een stuk makkelijker maken.