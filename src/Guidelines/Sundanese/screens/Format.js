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
            <PageContentHeader currentPage="longform Sundanese" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10. Transcribe all
                  decimal numbers as digits.
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_4}>
                    Correct: Aya salapan murid di kelas.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: numbers less than 10{' '}
                  </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_4}>
                    Correct: Aya 13 murid di kelas.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: numbers 10 or above{' '}
                  </span>
                </p>
                <p className={styles.block_458}>
                  Correct: Kuring boga genep anjing jeung 12
                </p>
                <p className={styles.block_369}>parkit.</p>
                <p className={styles.block_459}>
                  Explanation: Follow this rule even if the noun
                </p>
                <p className={styles.block_460}>
                  phrases with numbers are coordinated.
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_4}>Correct: 3,14 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>tilu koma hiji opat </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_462}>Explanation: decimal numbers</p>
                <p className={styles.block_463}>
                  If a large number consists of only a number followed by
                  "juta", "milyar", "triliun", or higher, then transcribe as a
                  numeral plus word. Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_4}>Correct: 1 juta soang </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>hiji juta soang </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_4}>Correct: sajuta soang </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>sajuta soang </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_4}>
                    Correct: 1 million geese{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>one million geese </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_4}>Correct: 1.000 soang </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>hiji rebu soang </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_4}>Correct: Rp1,5 milyar </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    hiji koma lima milyar rupiah{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    hiji satengah milyar rupiah{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_470}>
                  Explanation: For mixed numbers before "juta",
                </p>
                <p className={styles.block_471}>"milyar", etc., use decimals</p>
                <p className={styles.block_472}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_4}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    nol hiji hiji dua tilu lima{' '}
                  </span>
                </p>
                <p className={styles.block_474}>
                  <span className={styles.text_1}>dalapan tilubelas </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_475}>
                  Explanation: list of numbers, no comma if just
                </p>
                <p className={styles.block_476}>counting</p>
                <p className={styles.block_477}>
                  <span className={styles.text_4}>Correct: 3 2 1 ngapung </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>tilu dua hiji ngapung </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_478}>
                  Explanation: list of numbers, no comma if just
                </p>
                <p className={styles.block_476}>counting</p>
                <p className={styles.block_479}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_4}>
                    Correct: Manehna ngabutuhkeun 1/4 kg gula.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    manehna ngabutuhkeun hiji{' '}
                  </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_1}>parapat kilogram gula </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_482}>
                  Explanation: Here, the "hiji" before "parapat" is
                </p>
                <p className={styles.block_483}>
                  part of the fraction, so don't include it in the
                </p>
                <p className={styles.block_484}>
                  transcription. Also, be careful not to include
                </p>
                <p className={styles.block_485}>
                  spaces or pre-combined fraction characters.
                </p>
                <p className={styles.block_486}>
                  <span className={styles.text_4}>
                    Correct: Dina 3/4 tina hiji km, belok katuhu.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    dina tilu parapat tina hiji km{' '}
                  </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_1}>belok katuhu </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_488}>
                  Explanation: If spoken, include "tina hiji" or "hiji"
                </p>
                <p className={styles.block_489}>after the fraction.</p>
                <p className={styles.block_490}>
                  <span className={styles.text_4}>
                    Correct: Dina 2/3 km, belok kenca.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    dina dua per tilu kilometer{' '}
                  </span>
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_1}>belok kenca </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_492}>
                  Explanation: If the speaker does not use "tina
                </p>
                <p className={styles.block_493}>
                  hiji" or "hiji" after the fraction, leave it out of the
                </p>
                <p className={styles.block_494}>transcription.</p>
                <p className={styles.block_495}>
                  Correct: Urang ngabutuhkeun hiji sekrup
                </p>
                <p className={styles.block_496}>8/10-cm.</p>
                <p className={styles.block_497}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    urang ngabutuhkeun hiji{' '}
                  </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_1}>
                    sekrup lima per genepbelas inci{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_499}>
                  Explanation: This is a prenominal use, so you
                </p>
                <p className={styles.block_500}>
                  include the "hiji" and a hyphen after the fraction.
                </p>
                <p className={styles.block_501}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_502}>
                  Correct: Maneh bisa teu nginjeuman urang
                </p>
                <p className={styles.block_503}>Rp250?</p>
                <p className={styles.block_504}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    maneh bisa teu nginjeuman{' '}
                  </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_1}>
                    urang dua ratus lima puluh rupiah{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_506}>
                  Correct: Usman meuli imah mewah saharga
                </p>
                <p className={styles.block_507}>Rp7,5 juta.</p>
                <p className={styles.block_508}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>usman meuli imah mewah </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_1}>
                    saharga tujuh setengah juta rupiah{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_510}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_511}>Correct: 2% susu</p>
                <p className={styles.block_512}>Correct: 1 juta persen</p>
                <p className={styles.block_513}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_514}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_515}>Correct: 123-456-7890</p>
                <p className={styles.block_516}>Correct: 1 123-456-7890</p>
                <p className={styles.block_517}>
                  <span className={styles.text_4}>
                    Correct: +1 123-456-7890{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>pleus hiji </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_4}>
                    Correct: 123-456-7890 ekstensi 54{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ekstensi lima opat </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_519}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_4}>Correct: 5 / 6 ^ 3 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    lima dibagi ku genep pangkat{' '}
                  </span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_1}>tilu </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    lima dibagi genep pangkat tilu{' '}
                  </span>
                </p>
                <p className={styles.block_523}>"</p>
                <p className={styles.block_524}>
                  <span className={styles.text_4}>
                    Correct: Sabaraha 5 * 6?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    sabaraha lima kali genep{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_525}>
                  <span className={styles.text_8}>Correct: √3 </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>akar tilu </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_4}>
                    Correct: Sabaraha 8 jam * Rp12?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    sabaraha dalapan jam kali dua{' '}
                  </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_1}>belas rupiah </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_528}>
                  Correct: Sabaraha tilu buhaya dibagi ku dua
                </p>
                <p className={styles.block_529}>kadal?</p>
                <p className={styles.block_530}>
                  Explanation: Does not sound like a true math
                </p>
                <p className={styles.block_531}>
                  expression with useful units.
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_4}>Correct: Rp10 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>sapuluh rupiah </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_4}>
                    Correct: Sabaraha $20 kana Rupiah?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    sabaraha dua puluh dolar kana{' '}
                  </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_1}>rupiah </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_537}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_538}>
                  Correct: Urang meakkeun lima likur.
                </p>
                <p className={styles.block_539}>
                  Incorrect: Urang meakkeun Rp500.
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    urang meakkeun lima likur{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_541}>Correct: 200 pounds</p>
                <p className={styles.block_542}>Incorrect: £200</p>
                <p className={styles.block_543}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>dua ratus pounds </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_544}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_545}>
                  Correct: Suhu di luar teh 20°.
                </p>
                <p className={styles.block_546}>
                  Correct: Suhu na mineus lima di Milwaukee.
                </p>
                <p className={styles.block_547}>
                  Incorrect: Suhuna -5 di Milwaukee.
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>suhu na mineus lima di </span>
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_1}>milwaukee </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_550}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_4}>
                    Correct: Kolot urang meuli 10 L jus jeruk.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    kolot urang meuli sapuluh liter{' '}
                  </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_1}>jus jeruk </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_553}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_554}>
                  Correct: Pasang alarm dina 5:45.
                </p>
                <p className={styles.block_555}>
                  Incorrect: Pasang alarm dina 545.
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    pasang alarm dina jam lima{' '}
                  </span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_1}>opat lima isuk </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_4}>Correct: 12 Juli 1964 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    duabelas juli salapanbelas{' '}
                  </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_1}>genep puluh opat </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_4}>
                    Correct: usum gugur '78{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    usum gugur taun tujuh dalapan{' '}
                  </span>
                </p>
                <p className={styles.block_562}>"</p>
                <p className={styles.block_563}>
                  <span className={styles.text_4}>Correct: musik '80an </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>musik dalapanpuluhan </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_4}>Correct: Rebo, 6 Maret </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>rebo genep maret </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_2}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                </p>
                <p className={styles.text_11}>
                  <sub className={styles.calibre2}>Correct: 3:00 isuk </sub>
                </p>
                <p className={styles.text_12}>
                  <sub className={styles.calibre2}>Example audio: " </sub>
                </p>
                <path className={styles.text_13}>
                  <sub className={styles.calibre2}>jam tilu isuk </sub>
                </path>
                <p className={styles.text_12}>
                  <sub className={styles.calibre2}>" </sub>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_4}>
                    Correct: Pasang alarm dina 1:00 beurang{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    pasang alarm dina jam hiji{' '}
                  </span>
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_1}>beurang </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_4}>Correct: 4:50 sore </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    jam lima kurang sapuluh sore{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_570}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_571}>
                  Correct: McDonald's, Jalan Castro
                </p>
                <p className={styles.block_572}>Correct: warung kopi, 95129</p>
                <p className={styles.block_573}>Correct: Dr. Ros, Vermont</p>
                <p className={styles.block_574}>Correct: bunderan, Kirkland</p>
                <p className={styles.block_575}>
                  Correct: waktos diputerna pilem The Return of
                </p>
                <p className={styles.block_576}>the King, San Jose</p>
                <p className={styles.block_577}>
                  Correct: Cafe Noriter, Jalan Estrada
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>
                    Correct: www.google.co.kr{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    w w w dot google dot c o dot k{' '}
                  </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_1}>r </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_4}>Correct: amazon.com </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>amazon dot com </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_4}>
                    Correct: mike@conto.org{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>mike di conto dot org </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_4}>
                    Correct: Urang resep goreng sampeu. #ngeunah{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    urang resep goreng sampeu{' '}
                  </span>
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_1}>tager ngeunah </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_586}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_4}>
                    Correct: www.google.com.ph{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    w w dot google dot com dot p{' '}
                  </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_1}>h </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_589}>
                  Explanation: Also transcribe the dot in an
                </p>
                <p className={styles.block_590}>
                  obvious URL, even if the speaker did not
                </p>
                <p className={styles.block_591}>include it.</p>
                <p className={styles.block_288}>
                  <span className={styles.text_4}>
                    Correct: www.forbes.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    w w w dot forbes dot com{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_594}>
                  Correct: Imah maneh teh di Jawa Barat
                </p>
                <p className={styles.block_595}>
                  Incorrect: Imah maneh teh di Jabar
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    imah maneh teh di jawa barat{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_597}>Correct: Boston, Mass.</p>
                <p className={styles.block_598}>
                  Incorrect: Boston, Massachusetts
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>boston mass </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_600}>
                  Capitalize and abbreviate titles for people only when they
                  precede proper names.
                </p>
                <p className={styles.block_601}>
                  Correct: Urang apal Dr. Susilawati.
                </p>
                <p className={styles.block_602}>
                  Correct: Dokter urang nyarankeun jang leuwih
                </p>
                <p className={styles.block_603}>loba olahraga.</p>
                <p className={styles.block_604}>Correct: Kang Jones teu aya.</p>
                <p className={styles.block_605}>
                  Correct: Hey mang, eta mah adi urang.
                </p>
                <p className={styles.block_606}>
                  Correct: R.A. Kartini pernah kadieu.
                </p>
                <p className={styles.block_607}>
                  Correct: Budak eta mah sok asa jadi raden di
                </p>
                <p className={styles.block_608}>sakolana.</p>
                <p className={styles.block_609}>
                  Correct: Urang ningali Presiden Joko dina
                </p>
                <p className={styles.block_610}>koran.</p>
                <p className={styles.block_611}>
                  Correct: Urang ningali presiden dina koran.
                </p>
                <p className={styles.block_612}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_613}>
                  Correct: pamuter MP3, NASA, NASCAR, AAMCO, kodeu ZIP
                </p>
              </div>
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
