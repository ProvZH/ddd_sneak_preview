# Postcodes, buurten, wijken, gemeenten van Provincie Zuid-Holland

Download koppeltabel van CBS: https://www.cbs.nl/nl-nl/maatwerk/2017/38/buurt-wijk-en-gemeente-2017-voor-postcode-huisnummer

    wget https://www.cbs.nl/-/media/_excel/2017/38/2017-cbs-pc6huisnr20170801_buurt.zip
    unzip 2017-cbs-pc6huisnr20170801_buurt.zip

Om de data in de database te krijgen maken we eerst een lege tabel aan:

    CREATE TABLE cbs_pc6huisnr_buurt_2017
        (
            id1 serial NOT NULL,
            PC6 character varying(6),
            Huisnummer integer,	
            Buurt2017	integer,
            Wijk2017	integer,
            Gem2017 integer
        )
    ;

Kopieer de data naar de lege tabel:

    COPY cbs_pc6huisnr_buurt_2017(PC6,Huisnummer,Buurt2017,Wijk2017,Gem2017) 
    FROM '/gemeenten/2017-cbs-pc6huisnr20170801_buurt/pc6hnr20170801_gwb.csv' DELIMITER ';' CSV HEADER; 


## Gemeenten en provincies lijst
https://www.cbs.nl/nl-nl/onze-diensten/methoden/classificaties/overig/gemeentelijke-indelingen-per-jaar/indeling%20per%20jaar/gemeentelijke-indeling-op-1-januari-2017


    wget https://www.cbs.nl/-/media/_excel/2016/38/gemeenten%20alfabetisch%202017.xls

      CREATE TABLE gemeenten_2017_provincie
        (
            id serial NOT NULL,
            Gemeentecode integer,
            GemeentecodeGM character varying(6),
            Gemeentenaam character varying(200),
            Provinciecode integer,
            ProvinciecodePV character varying(4),
            Provincienaam character varying(100)
        )
    ;

    COPY gemeenten_2017_provincie(Gemeentecode,GemeentecodeGM,Gemeentenaam,Provinciecode,ProvinciecodePV,Provincienaam) 
    FROM '/gemeenten/Gemeenten alfabetisch 2017.csv' DELIMITER ';' CSV HEADER; 

## Gemeenten Provincie Zuid-Holland

    CREATE TABLE gemeenten_2017_pzh AS
        SELECT
            *
        FROM 
            gemeenten_2017_provincie 
        WHERE ProvinciecodePV = 'PV28';

## Koppeling pc6 naar provincie
subset maken van lijst 1 met behulp van 2 plus verrijken.

<!-- Zonder Huisnummers -->
    DROP TABLE koppeltabel CASCADE;
    CREATE TABLE koppeltabel AS
        SELECT
            b.provincienaam AS prov_naam,
            b.provinciecodepv AS cbs_prov_code,
            b.provinciecode AS prov_code,
            b.gemeentenaam AS gm_naam,
            b.gemeentecodegm AS cbs_gm_code,
            b.gemeentecode AS gem_code,
            'wk' || a.wijk2017 AS cbs_wk_code,
            a.wijk2017 AS wk_code,
            'bu' || a.buurt2017 AS cbs_bu_code,
            a.buurt2017 AS bu_code,
            a.pc6 AS pc6
        FROM 
            cbs_pc6huisnr_buurt_2017 AS a
        INNER JOIN
            gemeenten_2017_pzh AS b
        ON 
            b.gemeentecode = a.gem2017
        GROUP BY 
            b.provincienaam,
            b.provinciecodepv ,
            b.provinciecode,
            b.gemeentenaam ,
            b.gemeentecodegm ,
            b.gemeentecode ,
            a.wijk2017,
            a.wijk2017 ,
            a.buurt2017 ,
            a.buurt2017 ,
            a.pc6
        ORDER BY
            a.PC6
    ; 


## Check


    SELECT count(*) FROM koppeltabel;

count 
-------
 90837
(1 row)

## Export tabel

    \COPY koppeltabel TO '../overig_koppeltabelProvGemWijkBuurtPostcode2017_2018-11-07_1.csv' DELIMITER ';' CSV HEADER

