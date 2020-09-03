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
            <PageContentHeader currentPage="longform Swahili" />
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
                <p className={styles.block_375}>
                  <span className={styles.text_4}>
                    Correct: Kuna wanafunzi darasani.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: numbers less than 10{' '}
                  </span>
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_4}>
                    Correct: Kuna 13 Wanafunzi katika darasa.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: numbers greater than 9{' '}
                  </span>
                </p>
                <p className={styles.block_377}>
                  <span className={styles.text_4}>
                    Correct: Kuna baiskeli sita na magari 16 hapa.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Follow this rule even if the noun
                  </span>
                </p>
                <p className={styles.block_378}>
                  phrases with numbers are coordinated.
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_4}>Correct: 3.14 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>tatu nukta moja nne </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_380}>Explanation: decimal numbers</p>
                <p className={styles.block_362}>
                  If a large number consists of only a number followed by
                  "milioni", "bilioni", "trilioni", or higher, then transcribe
                  as a numeral plus word. Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_381}>
                  <span className={styles.text_4}>Correct: kuku milioni </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>kuku milioni </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_4}>
                    Correct: kuku 1 milioni{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>kuku milioni moja </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_4}>Correct: magari 1,000 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>magari elfu moja </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_4}>
                    Correct: magari milioni 2.5{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    magari milioni mbili nukta tano{' '}
                  </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_8}>" </span>
                  <span className={styles.text_9}>
                    <sub className={styles.calibre2}>Example audio: " </sub>
                  </span>
                  <span className={styles.text_10}>
                    <sub className={styles.calibre2}>
                      magari milioni mbili na nusu{' '}
                    </sub>
                  </span>
                  <span className={styles.text_9}>
                    <sub className={styles.calibre2}>" </sub>
                  </span>
                </p>
                <p className={styles.block_386}>
                  Explanation: For mixed numbers with "milioni",
                </p>
                <p className={styles.block_387}>
                  "bilioni", etc., use decimals.
                </p>
                <p className={styles.block_388}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_4}>Correct: 2 5 4 7 8 3 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    mbili tano nne saba nane tatu{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_390}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_4}>
                    Correct: Katika 2/3 km, pinda kushoto.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    katika theluthi mbili za{' '}
                  </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_1}>kilomita pinda kushoto </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_393}>
                  Correct: Ninataka mbao ya futi 4 1/2.
                </p>
                <p className={styles.block_394}>
                  Incorrect: Ninataka mbao ya 4 1/2 futi.
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    ninataka mbao ya futi nne na{' '}
                  </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_1}>nusu </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_397}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_398}>
                  Correct: Machungwa ni Ksh. 15.50 kila moja.
                </p>
                <p className={styles.block_399}>
                  Incorrect: Machungwa ni Ksh. 15 1/2 kila moja.
                </p>
                <p className={styles.block_400}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    machungwa ni shilingi kumi na{' '}
                  </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_1}>tano na senti hamsini </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_402}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_4}>Correct: 2% </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>asilimia mbili </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_404}>
                  Correct: milioni mbili asilimia
                </p>
                <p className={styles.block_405}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_406}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_407}>Correct: 720-030201</p>
                <p className={styles.block_408}>
                  <span className={styles.text_4}>
                    Correct: +254-720-030201{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    plus mbili tano nne saba mbili{' '}
                  </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_1}>
                    sufuri sufuri tatu sufuri mbili sufuri moja{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_410}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_4}>Correct: 10 / 5 - 3 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    kumi gawa kwa tano utoe tatu{' '}
                  </span>
                </p>
                <p className={styles.block_412}>"</p>
                <p className={styles.block_413}>
                  <span className={styles.text_4}>Correct: 2 * 2 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>mbili mara mbili </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_4}>Correct: 2 ^ 2 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>mbili mraba </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_415}>
                  Correct: Je, ni pesa ngapi ukifanya kazi masaa
                </p>
                <p className={styles.block_416}>8 * Ksh. 10?</p>
                <p className={styles.block_417}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    je ni pesa ngapi ukifanya kazi{' '}
                  </span>
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_1}>
                    masaa manane kwa shilingi kumi{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_419}>
                  Correct: Gawa machungwa manne na ndizi
                </p>
                <p className={styles.block_420}>tatu.</p>
                <p className={styles.block_421}>
                  Explanation: Does not sound like a true math
                </p>
                <p className={styles.block_422}>
                  expression with useful units.
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_4}>Correct: Ksh. 10 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>shilingi kumi </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_426}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_4}>
                    Correct: $1 ni pesa ngapi za Kenya?{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    dola moja ni pesa ngapi za{' '}
                  </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_1}>kenya </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_429}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_4}>
                    Correct: Leo itakuwa 20°.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    leo itakuwa nyusi ishirini{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_431}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_4}>
                    Correct: Kutoka Nairobi hadi Nakuru ni 150 km.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    kutoka nairobi hadi nakuru ni{' '}
                  </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_1}>
                    kilomita mia moja hamsini{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_434}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_4}>
                    Correct: Niamshe saa 6:00.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    niamshe saa kumi na mbili{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_436}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_437}>● one megabyte - 1 MB</p>
                <p className={styles.block_438}>● one kilobyte - 1 kB</p>
                <p className={styles.block_439}>● one gigabyte - 1 GB</p>
                <p className={styles.block_440}>● one terabyte - 1 TB</p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_4}>
                    Correct: 8 Januari, 1990{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    tarehe nane januari mwaka elfu{' '}
                  </span>
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_1}>moja mia tisa tisini </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_445}>
                  Explanation: "tarehe" is used to indicate date
                </p>
                <p className={styles.block_446}>
                  while "mwaka" is used to indicate year, these
                </p>
                <p className={styles.block_447}>
                  don’t need to be transcribed when used with an
                </p>
                <p className={styles.block_448}>exact date.</p>
                <p className={styles.block_449}>
                  <span className={styles.text_11}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                  <span className={styles.text_12}>
                    <sub className={styles.calibre2}>Correct: 3:00 </sub>
                  </span>
                  <span className={styles.text_13}>
                    <sub className={styles.calibre2}>Example audio: " </sub>
                  </span>
                  <span className={styles.text_14}>
                    <sub className={styles.calibre2}>saa tatu </sub>
                  </span>
                  <span className={styles.text_13}>
                    <sub className={styles.calibre2}>" </sub>
                  </span>
                </p>
                <p className={styles.block_450}>
                  Use "asubuhi" "jioni" if spoken.
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_4}>Correct: 3:00 asubuhi </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>saa tatu asubuhi </span>
                  <span className={styles.text_5}>" </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_454}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_455}>
                  Correct: Kenyatta Avenue, Nairobi
                </p>
                <p className={styles.block_456}>
                  Correct: Harambee House, Uhuru Avenue
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_459}>Correct: safaricom.co.ke</p>
                <p className={styles.block_460}>Incorrect: Safaricom.co.ke</p>
                <p className={styles.block_461}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    safaricom dot c o dot k e{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_462}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_4}>
                    Correct: safaricom.co.ke{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>safaricom dot c o k e </span>
                  <span className={styles.text_5}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_466}>
                  Correct: Nitaenda Mombasa, Nairobi, Kisumu
                </p>
                <p className={styles.block_416}>na kadhlika.</p>
                <p className={styles.block_467}>
                  Incorrect: Nitaenda Nairobi, Mombasa, Kisumu
                </p>
                <p className={styles.block_468}>n.k.</p>
                <p className={styles.block_469}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    nitaenda mombasa nairobi{' '}
                  </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_1}>kisumu na kadhalika </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_471}>
                  Capitalize and abbreviate titles for people only when they
                  precede proper names.
                </p>
                <p className={styles.block_472}>Correct: Huyu ni Bw. Abdi.</p>
                <p className={styles.block_473}>
                  Incorrect: Huyu ni bwana Abdi.
                </p>
                <p className={styles.block_474}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>huyu ni bwana abdi </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_4}>
                    Correct: Huyo bwana ni daktari.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>huyo bwana ni daktari </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_476}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_477}>Correct: KANU</p>
                <p className={styles.block_361}>Correct: BAKITA</p>
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
