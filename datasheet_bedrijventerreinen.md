# Landelijke informatie Bedrijventerreinen 

Dit is een open source product van de 12 provincies
https://www.ibis-bedrijventerreinen.nl/

Contact persoon ZH 
Rick Hoogervorst - hgm.hoogervorst@pzh.nl
R. Poolen - r.poolen@pzh.nl

Data van :
https://www.ibis-bedrijventerreinen.nl/locations/list/export?attach=list
Bewerking gedaan in Excel en Text editor. 


## Postgresql

Om de data in de database te krijgen maken we eerst een lege tabel aan:

    DROP TABLE IF EXISTS bedrijventerreinen CASCADE;
    CREATE TABLE bedrijventerreinen
        (

            RIN_Nummer integer ,
            Jaar varchar,
            Plannaam character varying(100),
            Kern character varying(100),
            Gemeente character varying(100),
            Corop_Gebied character varying(100),
            Provincie character varying(100),
            Kavels_beschikbaar character varying(100),
            Max_milieucategorie integer,
            Terstond_Uitgeefbaar integer,
            Bruto integer,
            Bruto_oppervlakte_verouderd float,
            Hoofdoorzaak_veroudering character varying(100),
            Max_erfpachtprijs_euro_p_m2 float,
            Max_verkoopprijs_euro_p_m2 float,
            Min_erfpachtprijs_euro_p_m2 float,
            Min_verkoopprijs_euro_p_m2 float,
            Netto_ha float,
            Oppervlakte_facelift float,
            Grootst_uitgeefbaar_deel_ha float,
            Oppervlakte_herprofilering_ha float,
            Niet_terstond_uitgeefbaar_gemeente_ha float,
            Niet_terstond_uitgeefbaar_particulier_ha float,
            Oppervlakte_revitalisatie float,
            Terstond_uitgeefbaar_gemeente_ha float,
            Terstond_uitgeefbaar_particulier_ha float,
            Terugkoop_gemeente_ha float,
            Totaal_uitgeefbaar_gemeente_ha float,
            Totaal_uitgeefbaar_particulier_ha float,
            Oppervlakte_zware_revitalisatie_ha float,
            Totaal_uitgegeven_tm_vorig_jaar_ha float,
            Uitgifte_huidig_jaar_ha float,
            Beoogd_jaar_niet_terstond_uitgeefbaar varchar,
            Beoogd_jaar_niet_terstond_uitgeefbaar_particulier varchar,
            Milieuzonering character varying(100),
            Oppervlakte_transformatie_ha float,
            Opmerking_bij_jaargegevens character varying(600),
            Externe_bereikbaarheid character varying(100),
            Parkeergelegenheid character varying(100),
            Parkmanagement character varying(100),
            Spoorontsluiting character varying(100),
            Waterontsluiting character varying(100),
            Startjaar varchar,
            Terreinbeheerder character varying(100),
            Gegevensbeheerder character varying(100),
            Werklocatietype character varying(100),
            Planfase character varying(100),
            Herstructureringsfase character varying(100),
            Herstructureringsplan character varying(100),
            Geometrie varchar
        )
    ;

Kopieer de data naar de lege tabel:

    COPY bedrijventerreinen
    FROM 
    '/Bedrijventerreinen/thema_bedrijventerreinen_12-09-2018_4.csv' DELIMITER ';' CSV HEADER; 


Exporteren

    \COPY bedrijventerreinen TO '/Bedrijventerreinen/thema_bedrijventerreinen_12-09-2018_5.csv' DELIMITER ';' CSV HEADER

## Atributen

### Algemeen
RIN-Nummer: 
Plannaam: 
Jaar: 
Kern: 
Gemeente: 
Corop gebied: 
Provincie: 
Kavels beschikbaar: 
Gegevensbeheerder: 
Terreinbeheerder: 
Opmerking bij jaargegevens: 

### Kenmerk
Startjaar: 
Milieuzonering: 
Werklocatietype: 
Planfase: 
Max. milieucategorie: 
Parkeergelegenheid: 
Parkmanagement: 
Externe bereikbaarheid: 

### Financieel
Min. verkoopprijs: 
€200,00 /m²
Max. verkoopprijs: 
€250,00 /m²
Min. erfpachtprijs: 
€0,00 /m²
Max. erfpachtprijs: 
€0,00 /m² 

###Oppervlakte
Bruto: 
107,4000 ha
Netto: 
74,7000 ha
Totaal uitgegeven t/m vorig jaar: 
71,7000 ha
Uitgifte huidig jaar: 
0,0000 ha
Terugkoop gemeente: 
0,0000 ha
Totaal uitgeefbaar gemeente: 
3,0000 ha
Totaal uitgeefbaar particulier: 
0,0000 ha
Terstond uitgeefbaar gemeente: 
3,0000 ha
Terstond uitgeefbaar particulier: 
0,0000 ha
Totaal terstond uitgeefbaar: 
3,0000 ha
Niet terstond uitgeefbaar gemeente: 
0,0000 ha
Niet terstond uitgeefbaar particulier: 
0,0000 ha
Grootst uitgeefbaar deel: 
0,0000 ha
Beoogd jaar niet terstond uitgeefbaar: 

###  Ontsluiting
Spoorontsluiting: 
Geen spoor
Waterontsluiting: 
Nee, er is geen vaarwater aanwezig

### Veroudering
Verouderd: 
Nee
Hoofdoorzaak veroudering: 
Onbekend
Bruto oppervlakte verouderd: 
0,0000 ha
Herstructureringsplan: 
Onbekend
Oppervlakte facelift: 
0,0000 ha
Oppervlakte revitalisatie: 
0,0000 ha
Oppervlakte zware revitalisatie: 
0,0000 ha
Oppervlakte herprofilering: 
0,0000 ha
Oppervlakte transformatie: 
0,0000 ha
Herstructureringsfase: 
Onbekend