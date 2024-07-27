# Előkövetelmények

- Törlendő fájlok
- AWS CLI 2.17.17 vagy újabb verzió
- ZIP csomag
- S3 Bucket
- IAM User legalább "AmazonS3FullAccess" hozzáféréssel (Access Key)
- Konfigurálni kell az AWS CLI-t az `aws configure` parancs segítségével

## a) Archiválás

A mappában lévő almappák közül zip-pel és átmásolja a megadott célra minden olyan mappát, ami neve szerint régebbi, mint 30 nap, majd törli a mappákat és tartalmukat a forrás mappában. (archive.sh)

Ezt a feladatot egy bash script segítségével oldottam meg. A scriptben a megadott célmappa és a forrásmappa megadása után a script lekérdezi az aznapi időt, majd végig lépked a forrásmappa összes almappáján és megvizsgálja, hogy mappa-e.

Az ellenőrzés után megvizsgálom, hogy üres-e a mappa neve, majd a mappa nevéből kiveszem a dátumhoz szükséges adatokat, hogy a `date` parancs értelmezni tudja. Átalakítom a formátumot példa szerint:
- `2024-07-20 02-04 Development` => `2024-07-20 02-04` => `2024-07-20 02:04`

Mivel a mai napot és a mappa idejét is Unix időbélyegben tároltam, így ezt visszaalakítom napokká, és ezután a mai napból kivonom a mappa idejét. Ha ez nagyobb, mint 30, akkor az objektumokat a megadott helyre menti rekurzívan zip formátumban, majd törli rekurzívan.

Az S3 Bucketbe is eltárolja az archivált mappákat. Az autentikáció úgy történik, hogy terminálban előtte az `aws configure` paranccsal be kell lépni egy IAM Userbe, az access key segítségével, így a scriptel át tudjuk másolni a Bucketbe a fájlokat.

## b) Ütemezés

Ütemezési megoldást, ami a fenti archiválási feladatot minden nap lefuttatja.

Ehhez a feladathoz cron job-ot használtam, amihez `crontab -e` paranccsal léptem be, majd az alábbi parancsot állítottam be, hogy minden nap éjfélkor futtassa a scriptet:
```bash
0 0 * * * /home/firstuser/feladat/devops_probafeladat/archive.sh
```
## c) Restore

restore script, aminek kezdő- és végdátum paraméterei vannak, és a kettő közötti archivált mappákat visszamozgatja az eredeti forrás mappába. (restore.sh)

A scriptben futtatásakor előszőr a kezdő majd a végdátumot bekéri a felhasználótól a terminálban megjelenített formában. A paraméterek megadása után ellenőrzi, hogy a kezdő dátum nem nagyobb-e, mint a végdátum, ha ez hamis akkor végig lépked a zip fájlokon, ami a mappában található. A fájlok neveiből kiszedi a dátumot majd vizsgálatot végez, ha a két dátum közé esik a dátum akkor létrehozza a mappát, amibe beleteszi az unzipelt fájlt.


