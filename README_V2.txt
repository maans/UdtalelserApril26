Udtalelser v2.0
================

Ændringer i denne version:
- Appnavn opdateret til Udtalelser v2.0.
- Skolenavn ændret fra Himmerlands Ungdomsskole til Himmerlands Efterskole i standardtekster og print/preview-output.
- Nyt logo lagt ind i assets/ og overrides/.
- Printlogo fallback peger nu på assets/himmerlands-efterskole-logo.jpeg.
- Excel-import til elevlisten tilføjet: .xlsx og .xls understøttes via SheetJS CDN.
- CSV-import virker fortsat som før.
- Importknappen er ændret til “Indlæs elevliste (Excel/CSV)”.
- UI/iPad-forbedringer: større trykfelter, 16px tekstfelter for at undgå iPad-zoom, bedre fokusmarkering, forbedret preview-scroll og mobil/tablet-layout.
- Print-CSS strammet op for preview/udskrift.

Bevaret:
- Eksisterende datastruktur og localStorage-prefix.
- Eksisterende CSV-mapping og elevnormalisering.
- Eksisterende snippets/skabelonlogik; kun skolenavnet er opdateret.
- Eksisterende printmotor og signaturblok.

Bemærkning om Excel:
Excel-import kræver, at appen kan hente SheetJS fra CDN:
https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js
Hvis appen bruges helt offline, virker CSV stadig.
