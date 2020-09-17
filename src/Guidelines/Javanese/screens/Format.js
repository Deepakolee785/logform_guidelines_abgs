import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Format = () => {
  const classes = useStyles()

  const headingIds = [
    'number',
    'currency-and-unit',
    'date-and-time',
    'address',
    'web',
    'abbreviation',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Javanese" />
            <div className="context text">
              <p className={styles.block_264}>
                <span className={styles.calibre1}>Format </span>
              </p>
              <p className={styles.block_265}>
                <span className={styles.text_17}>Example audio: "​ </span>
                <span className={styles.text_20}>
                  aku budhal saiki period pirang&nbsp; jam lelungan saka bogor
                  nang jakarta ​
                </span>
                <span className={styles.text_17}>"&nbsp; </span>
              </p>
              <p className={styles.block_266}>
                <span className={styles.text_}>
                  Transcribe numbers, abbreviations etc. following the
                  formatting conventions in this&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>section.&nbsp;</span>
              </p>
              <p className={styles.block_267}>
                <span className={styles.calibre1}>Number </span>
              </p>
              <p className={styles.block_268}>
                <span className={styles.text_}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  currency - see Currency and Unit). Use digits for cardinals
                  and ordinals 10 and above,&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  even if they are coordinated with numbers under 10. Transcribe
                  all decimal numbers as&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>digits.&nbsp;</span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_269}>
                <span className={styles.text_18}>
                  Correct: Ana sangang murid ing kelas.&nbsp;{' '}
                </span>
                <span className={styles.text_19}>
                  Explanation: angka kurang dari 10&nbsp;{' '}
                </span>
                <span className={styles.text_18}>
                  Correct: Ana 13 murid ing kelas.&nbsp;{' '}
                </span>
                <span className={styles.text_19}>
                  Explanation: angka 10 ke atas&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_270}>
                <span className={styles.text_18}>
                  Correct: Aku duwe enem asu lan 12 kucing.&nbsp;{' '}
                </span>
                <span className={styles.text_19}>
                  Explanation: Ikuti aturan ini meski frasa nomina&nbsp; yang
                  berisi angka dikoordinasikan.&nbsp;
                </span>
              </p>
              <p className={styles.block_271}>
                <span className={styles.text_18}>Correct: 3,14&nbsp; </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>telu koma siji papat ​</span>
                <span className={styles.text_21}>"&nbsp; </span>
                <span className={styles.text_19}>
                  Explanation: angka desimal&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_272}>
                <span className={styles.text_}>
                  If a large number consists of only a number followed by
                  "million", "billion", "trillion", or&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  higher, then transcribe as a numeral plus word. Otherwise,
                  transcribe as numerals.&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_273}>
                <span className={styles.text_18}>
                  Correct: 1 yuta bebek&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>satu yuta bebek ​</span>
                <span className={styles.text_21}>"&nbsp; </span>
                <span className={styles.text_18}>
                  Correct: sayuta bebek&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>sayuta bebek ​</span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_274}>
                <span className={styles.text_18}>
                  Correct: $1,5 milyar&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  siji koma limo milyar dolar ​
                </span>
                <span className={styles.text_21}>
                  "&nbsp; Example audio: "​{' '}
                </span>
                <span className={styles.text_22}>
                  siji setengah milyar dolar ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_275}>
                Explanation: Untuk angka campuran sebelum&nbsp;
              </p>
              <p className={styles.block_276}>
                kata "juta", "miliar", dll., gunakan desimal&nbsp;
              </p>
              <p className={styles.block_277}>
                <span className={styles.text_18}>
                  Correct: 1.000 bebek&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>sewu bebek ​</span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_278}>
                <span className={styles.text_16}>
                  Write lists of numbers with digits and without commas.&nbsp;
                </span>
                <span className={styles.text_17}> </span>
              </p>
              <p className={styles.block_279}>
                <span className={styles.text_18}>
                  Correct: 1 1 2 3 5 8 13&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  siji siji loro telu lima wolu&nbsp; telulas ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_280}>
                Explanation: daftar angka, tanpa koma jika&nbsp;
              </p>
              <p className={styles.block_281}>hanya hitungan&nbsp;</p>
              <p className={styles.block_282}>
                <span className={styles.text_}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>slashes.&nbsp;</span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_283}>
                <span className={styles.text_18}>
                  Correct: Aku arep tuku gula 1/2 kg.&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  aku arep tuku gula setengah&nbsp; kilo ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_284}>
                <span className={styles.text_18}>
                  Correct: Sawise 1/2 km, belok nganan.&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  sawise setengah kilo belok&nbsp; kanan ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_285}>
                <span className={styles.text_23}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.&nbsp;
                </span>
                <span className={styles.text_24}> </span>
                <span className={styles.text_25}>
                  Correct: Awakmu isa nyilihi aku duit Rp20.000?&nbsp;{' '}
                </span>
                <span className={styles.text_26}>Example audio: "​ </span>
                <span className={styles.text_27}>
                  awakmu isa nyilihi aku duit&nbsp; rong puluh ewu rupiah ​
                </span>
                <span className={styles.text_26}>"&nbsp; </span>
              </p>
              <p className={styles.block_286}>
                Correct: Dheweke tuku TV iku regane Rp2,5&nbsp; yuta.&nbsp;
              </p>
              <p className={styles.block_287}>
                <span className={styles.text_17}>Example audio: "​ </span>
                <span className={styles.text_20}>
                  dheweke tuku tv iku regane&nbsp; kalih yuta rupiah ​
                </span>
                <span className={styles.text_17}>"&nbsp; </span>
              </p>
              <p className={styles.block_288}>
                <span className={styles.text_}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  encounter a number of a million or greater used as a
                  percentage, spell it out.)&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_86}>Correct: 2% susu&nbsp;</p>
              <p className={styles.block_149}>Correct: 1 yuta persen&nbsp;</p>
              <p className={styles.block_289}>
                <span className={styles.text_}>
                  Transcribe phone numbers using the most common format in the
                  transcription&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>language.&nbsp;</span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_86}>Correct: 123-456-7890&nbsp;</p>
              <p className={styles.block_88}>Correct: 62 123-456-7890&nbsp;</p>
              <p className={styles.block_290}>
                <span className={styles.text_18}>
                  Correct: +62 123-456-7890&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>plus enem rong ​</span>
                <span className={styles.text_21}>"&nbsp; </span>
                <span className={styles.text_18}>
                  Correct: 123-456-7890 ekstensi 54&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>ekstensi lima papat ​</span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_291}>
                <span className={styles.text_}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols,&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  with spaces in between.&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_292}>
                <span className={styles.text_28}>
                  Correct: 5 / 6 ^ 3&nbsp;{' '}
                </span>
                <span className={styles.text_29}>Example audio: "​ </span>
                <span className={styles.text_30}>
                  lima dibagi enem pangkat telu ​
                </span>
                <span className={styles.text_29}>"&nbsp; </span>
                <span className={styles.text_28}>
                  Correct: Piro 5 * 6?&nbsp;{' '}
                </span>
                <span className={styles.text_29}>Example audio: "​ </span>
                <span className={styles.text_30}>piro lima dikali enem ​</span>
                <span className={styles.text_29}>"&nbsp; </span>
                <span className={styles.text_31}>Correct: √3&nbsp; </span>
                <span className={styles.text_29}>Example audio: "​ </span>
                <span className={styles.text_30}>akar telu ​</span>
                <span className={styles.text_29}>"&nbsp; </span>
              </p>
              <p className={styles.block_293}>
                <span className={styles.text_18}>
                  Correct: Piro 8 jam * Rp100?&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  piro wolung jam dikali satus&nbsp; rupiah ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_294}>
                Correct: Piro telung bebek dibagi karo telu&nbsp; macan?&nbsp;
              </p>
              <p className={styles.block_231}>Currency and unit</p>
              <p className={styles.block_295}>
                Explanation: Tidak terdengar seperti ungkapan&nbsp; matematika
                dengan unit yang sesuai.&nbsp;
              </p>
              <p className={styles.block_296}>
                <span className={styles.text_23}>
                  Transcribe currencies as commonly written in the transcription
                  language.&nbsp;
                </span>
                <span className={styles.text_24}> </span>
                <span className={styles.text_25}>Correct: Rp100&nbsp; </span>
                <span className={styles.text_26}>Example audio: "​ </span>
                <span className={styles.text_27}>satus rupiah ​</span>
                <span className={styles.text_26}>"&nbsp; </span>
              </p>
              <p className={styles.block_297}>
                <span className={styles.text_18}>
                  Correct: $20 yen didadekno nang rupiah piro?&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  rong puluh dolar yen&nbsp; didadekno nang rupiah piro ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_298}>
                <span className={styles.text_25}>Correct: $10,04&nbsp; </span>
                <span className={styles.text_26}>Example audio: "​ </span>
                <span className={styles.text_27}>
                  sepuluh dolar lan papat sen ​
                </span>
                <span className={styles.text_26}>"&nbsp; </span>
                <span className={styles.text_23}>
                  Untuk semua mata uang lainnya, eja katanya.&nbsp;
                </span>
                <span className={styles.text_24}> </span>
              </p>
              <p className={styles.block_299}>Correct: 200 yen&nbsp;</p>
              <p className={styles.block_300}>Incorrect: ¥200&nbsp;</p>
              <p className={styles.block_301}>
                <span className={styles.text_23}>
                  For degrees, use the ° symbol.&nbsp;
                </span>
                <span className={styles.text_24}> </span>
                <span className={styles.text_25}>
                  Correct: Suhune 20° nang jobo.&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_302}>
                Correct: Suhune ngisore rong puluh derajat&nbsp; nang
                Batu.&nbsp;
              </p>
              <p className={styles.block_303}>
                Incorrect: Suhune -20 derajat nang Batu&nbsp;
              </p>
              <p className={styles.block_304}>
                <span className={styles.text_17}>Example audio: "​ </span>
                <span className={styles.text_20}>rong atus yen ​</span>
                <span className={styles.text_17}>"&nbsp; </span>
              </p>
              <p className={styles.block_305}>
                <span className={styles.text_17}>Example audio: "​ </span>
                <span className={styles.text_20}>
                  suhune ngisore rong puluh&nbsp; derajat nang batu ​
                </span>
                <span className={styles.text_17}>"&nbsp; </span>
              </p>
              <p className={styles.block_306}>
                <span className={styles.text_16}>
                  Abbreviate all units that follow numeric values.&nbsp;
                </span>
                <span className={styles.text_17}> </span>
              </p>
              <p className={styles.block_307}>
                Correct: Awakmu kudu ngombe banyu putih 8 L&nbsp; ben
                dino.&nbsp;
              </p>
              <p className={styles.block_308}>
                <span className={styles.text_17}>Example audio: "​ </span>
                <span className={styles.text_20}>
                  awakmu kudu ngombe banyu&nbsp; putih wolung liter ben dino ​
                </span>
                <span className={styles.text_17}>"&nbsp; </span>
              </p>
              <p className={styles.block_309}>
                <span className={styles.text_}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time,&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>format it as such.&nbsp;</span>
              </p>
              <p className={styles.block_310}>
                Correct: Setel alarm gawe jam 5.45.&nbsp;
              </p>
              <p className={styles.block_311}>
                Incorrect: Setel alarm gawe jam 545.&nbsp;
              </p>
              <p className={styles.block_312}>
                Correct: Temenan awakmu tuku iki mung&nbsp; Rp5.000?&nbsp;
              </p>
              <p className={styles.block_313}>
                Incorrect: Temenan awakmu tuku iki mung&nbsp; 5000?&nbsp;
              </p>
              <p className={styles.block_314}>
                <span className={styles.calibre1}>Date and time </span>
              </p>
              <p className={styles.block_315}>
                <span className={styles.text_16}>
                  Use the natural form for transcribing dates.&nbsp;
                </span>
                <span className={styles.text_17}> </span>
              </p>
              <p className={styles.block_316}>
                <span className={styles.text_17}>Example audio: "​ </span>
                <span className={styles.text_20}>
                  setel alarm gawe jam lima&nbsp; papat lima ​
                </span>
                <span className={styles.text_17}>"&nbsp; </span>
              </p>
              <p className={styles.block_317}>
                <span className={styles.text_17}>Example audio: "​ </span>
                <span className={styles.text_20}>
                  temenan awakmu tuku iki&nbsp; mung limang ewu ​
                </span>
                <span className={styles.text_17}>"&nbsp; </span>
              </p>
              <p className={styles.block_318}>
                <span className={styles.text_18}>
                  Correct: sekitar tahun 78&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  sekitar tahun pitung puluh&nbsp; wolu-an ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_319}>
                <span className={styles.text_18}>
                  Correct: lagu tahun 80-an&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  lagu tahun wolung puluh-an ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
                <span className={styles.text_18}>
                  Correct: Rabu, 6 Maret&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>rabu enem maret ​</span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_320}>
                <span className={styles.text_}>
                  Write times in hh.mm format whenever possible, unless it would
                  look unnatural to do&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>so.&nbsp;</span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_167}>
                <span className={styles.text_18}>Correct: 01.50&nbsp; </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  loro kurang sepuluh menit ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_321}>
                <span className={styles.text_18}>
                  Correct: sekitar jam 8-an&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>sekitar jam woluan ​</span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_322}>
                Explanation: Terlihat tidak natural jika ditulis&nbsp;
              </p>
              <p className={styles.block_323}>"sekitar jam 8.00-an".&nbsp;</p>
              <p className={styles.block_14}>
                <span className={styles.calibre1}>Address </span>
              </p>
              <p className={styles.block_324}>
                <span className={styles.text_}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>explicitly spoken.&nbsp;</span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_325}>
                <span className={styles.text_16}>
                  Use commas for ENTITY, LOCATION.&nbsp;
                </span>
                <span className={styles.text_17}> </span>
              </p>
              <p className={styles.block_326}>
                Correct: Cafe Noriter, Estrada Street&nbsp;
              </p>
              <p className={styles.block_88}>
                Correct: Makati City Hall, Manila&nbsp;
              </p>
              <p className={styles.block_88}>
                Correct: McDonald's, Jalan Semeru&nbsp;
              </p>
              <p className={styles.block_88}>
                Correct: Dr. Wahyudi, Dinoyo&nbsp;
              </p>
              <p className={styles.block_88}>
                Correct: toko kembang, 65324&nbsp;
              </p>
              <p className={styles.block_88}>
                Correct: jadwal film Spider-Man, Malango&nbsp;
              </p>
              <p className={styles.block_327}>
                <span className={styles.calibre1}>Web </span>
              </p>
              <p className={styles.block_328}>
                <span className={styles.text_}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>capitalize them.&nbsp;</span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_329}>
                <span className={styles.text_18}>
                  Correct: www.google.co.kr&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  w w w dot google dot c o dot k&nbsp; r ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_169}>
                <span className={styles.text_18}>
                  Correct: kompas.com&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>kompas dot com ​</span>
                <span className={styles.text_21}>"&nbsp;</span>
              </p>
              <p className={styles.block_277}>
                <span className={styles.text_18}>
                  Correct: ayu@example.org&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>ayu at example dot org ​</span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_330}>
                <span className={styles.text_18}>
                  Correct: Pingin bebek bakar. #luwe&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  pingin bebek bakar hashtag&nbsp; luwe ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_331}>
                <span className={styles.text_}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  errors. If the speaker doesn't say the "w"s at all, do not add
                  them.&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_332}>
                <span className={styles.text_18}>
                  Correct: www.google.co.id&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  w dot google dot co dot i d ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
                <span className={styles.text_18}>
                  Correct: www.detik.com&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>w w w detik dot com ​</span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_333}>
                <span className={styles.calibre1}>Abbreviation </span>
              </p>
              <p className={styles.block_334}>
                <span className={styles.text_16}>
                  Do not abbreviate unless the speaker says an abbreviated
                  form.&nbsp;
                </span>
                <span className={styles.text_17}> </span>
              </p>
              <p className={styles.block_335}>
                <span className={styles.text_18}>
                  Correct: Arema versus Persija&nbsp;{' '}
                </span>
                <span className={styles.text_19}>
                  Incorrect: Arema vs. Persija&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_336}>
                <span className={styles.text_18}>
                  Correct: Malang, Jatim.&nbsp;{' '}
                </span>
                <span className={styles.text_19}>
                  Incorrect: Malang, Jawa Timur&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_337}>
                <span className={styles.text_17}>Example audio: "​ </span>
                <span className={styles.text_20}>arema versus persija ​</span>
                <span className={styles.text_17}>
                  "&nbsp; Example audio: "​{' '}
                </span>
                <span className={styles.text_20}>malang jatim ​</span>
                <span className={styles.text_17}>"&nbsp; </span>
              </p>
              <p className={styles.block_338}>
                <span className={styles.text_23}>
                  Capitalize and abbreviate titles for people only when they
                  precede proper names.&nbsp;
                </span>
                <span className={styles.text_24}> </span>
                <span className={styles.text_25}>
                  Correct: Aku kenal Dr. Ayu.&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_339}>
                Correct: Dokterku ngomong aja mangan sing&nbsp;
              </p>
              <p className={styles.block_128}>pedes dhisik.&nbsp;</p>
              <p className={styles.block_149}>
                Correct: Aku salaman karo Presiden Jokowi&nbsp;
              </p>
              <p className={styles.block_128}>nang acara mau.&nbsp;</p>
              <p className={styles.block_88}>
                Correct: Aku salaman karo presiden nang acara&nbsp;
              </p>
              <p className={styles.block_128}>mau.&nbsp;</p>
              <p className={styles.block_340}>
                <span className={styles.text_16}>
                  In acronyms, do not use periods between letters.&nbsp;
                </span>
                <span className={styles.text_17}> </span>
              </p>
              <p className={styles.block_341}>
                <span className={styles.text_32}>
                  Correct: AT&amp;T, SUV&nbsp;{' '}
                </span>
                <span className={styles.text_33}>
                  Explanation: MP3 player, TVRI, BUMN, BRI&nbsp;{' '}
                </span>
                <span className={styles.text_34}></span>
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Format" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Format

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: '1rem',
  },
  rightNav: {
    position: 'fixed',
    top: '5rem',
    right: '2rem',
    [theme.breakpoints.down('md')]: {
      right: '0.4rem',
      fontSize: '0.75rem',
    },
  },
}))
