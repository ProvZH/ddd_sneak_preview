# Datasheet CBS

Publicatie van CBS-gegevens vindt plaats via de volgende kanalen:
* [StatLine](https://opendata.cbs.nl/#/CBS/nl/) (er is ook een [alfabetische inhoudsopgave in PDF-formaat](https://www.cbs.nl/-/media/statline/documenten/statline-inhoudsopgave-nederlands.pdf?la=nl-nl) beschikbaar)
* [CBS Open Data Portaal](https://opendata.cbs.nl/statline/portal.html?_la=nl&_catalog=CBS) (meer informatie via [deze link](https://www.cbs.nl/nl-nl/onze-diensten/open-data/databank-cbs-statline-als-open-data))
* [CBS-datasets op data.overheid.nl](https://data.overheid.nl/data/dataset?maintainer_facet=http%3A%2F%2Fstandaarden.overheid.nl%2Fowms%2Fterms%2FCentraal_Bureau_voor_de_Statistiek)
* [CBS-datasets in het Nationaal Georegister](http://www.nationaalgeoregister.nl/geonetwork/srv/dut/catalog.search#/search?facet.q=orgName%2FCentraal%2520Bureau%2520voor%2520de%2520Statistiek)

Formaten:
* [OData](https://www.cbs.nl/-/media/_pdf/2017/13/handleiding-cbs-open-data-services.pdf?la=nl-nl) (Open Data Protocol)
* WFS en WMS
* Handmatige download of export, bijvoorbeeld [energiebesparingspotentie onder koopwoningen](https://www.cbs.nl/-/media/_excel/2017/26/energiepotentiekaarten_publicatie2.xlsx)

Raadpleeg deze bronnen voor meer informatie over de OData interface:
* [Handleiding CBS Open Data Services]

Voor het inlezen van CBS-gegevens in R is het [`cbsodataR`](https://cran.r-project.org/web/packages/cbsodataR/) package ontwikkeld.

Voorbeeldscripts:
* [Inlezen van CBS energieleveringen WFS in R](../../tree/master/R/voorbeeld_wfs_cbs.R)
* [Inlezen van CBS gegevens via OData interface in R](../../tree/master/R/voorbeeld_odata_cbs.R)
* [Inlezen van CBS gegevens via OData interface in FME Desktop](../../tree/master/R/voorbeeld_cbs.fmw)

Licentie:    
In principe worden gegevens beschikbaar gesteld onder een [CC-BY-SA 4.0]((https://creativecommons.org/licenses/by/4.0/deed.nl)) licentie. Verifieer in de metadata of voor een specifieke dataset afwijkende voorwaarden voor hergebruik gelden.

Issues:
* De gegevens die via OData beschikbaar worden gesteld, bevatten geen geometrie. Voor een ruimtelijke analyse of visualisatie op de kaart is wel geometrie nodig.
* De gegevens die via WFS en OData beschikbaar worden gesteld, zijn niet eenvoudig te filteren op provincie. Om alleen de gegevens van provincie Zuid-Holland op te halen is een tussenstap nodig.