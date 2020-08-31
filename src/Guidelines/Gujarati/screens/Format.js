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
            <PageContentHeader currentPage="longform Gujarati" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Only Western Arabic numerals should be used.
                </p>
                <p className={'text'}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                </p>
                <p className={styles.block_375}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : વગમા નવ ન્સવદ્યાથીઓ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : વગમા 9 ન્સવદ્યાથીઓ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_377}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : 10થી ઓછી સખ્યાના આકડા શબ્દોમા િખવા. એટિ 9ન નવ તરીક િખાશ.
                  </span>
                </p>
                <p className={styles.block_378}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : વગમા 13 ન્સવદ્યાથીઓ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : વગમા તર ન્સવદ્યાથીઓ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : 10થી વધારની સખ્યા આકડાઓમા જ િખવી. એટિ તરન 13 તરીક િખાશ.
                  </span>
                </p>
                <p className={styles.block_381}>
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10.
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : મારી પાસ છ ક તરા અન 12 પોપટ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : મારી પાસ 6 ક તરા અન 12 પોપટ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : મારી પાસ છ ક તરા અન બાર પોપટ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : ભિ વાક્યામા "ક તરા અન પોપટ" છ. 6 10થી ઓછો આક છ તથી ત છ
                    િખાશ અન 12 10થી મોટો આક છ તથી ત 12 િખાશ.
                  </span>
                </p>
                <p className={styles.block_386}>
                  Transcribe all decimal numbers as digits.
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 7.89 </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: સાત દશાશ નવ્યાસી </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>સાત દશાશ નવ્યાસી </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Even though 7.89 is less than 10, the correct
                    transcription uses digits and does not spell out "7.89" as
                    "સાત દશાશ નવ્યાસી" because decimal numbers always use
                    digits.
                  </span>
                </p>
                <p className={styles.block_391}>
                  When two or more numbers refer to the same noun, and one
                  number is 10 or greater, transcribe both as numerals.
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : તઓ પટ લટોરમાથી 9 ક 10 ગોલ્ડફીશ િાવ્યા.{' '}
                  </span>
                </p>
                <p className={styles.block_393}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : તઓ પટ લટોરમાથી નિ ક 10 ગોલ્ડફીશ િાવ્યા.{' '}
                  </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : ભિ 9, 10થી નાનો આક છ અન બન્ન ગોલ્ડફીશની વાત કર છ જમા એક
                    સખ્યા 10 છ તથી બન્ન આકડામા જ િખાશ.
                  </span>
                </p>
                <p className={styles.block_395}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 1 1 2 3 5 13 </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 1, 1, 2, 3, 5, 13 </span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>એક એક બ ત્રણ પાચ તર </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_399}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Because the numbers are listed, all of them are
                    transcribed as numbers even though some are less than 10 and
                    there are no commas used.
                  </span>
                </p>
                <p className={styles.block_400}>
                  If the speaker in the audio says one number followed by
                  "ન્સમન્સિયન", "ન્સબન્સિયન", "ન્સટન્સિયન", "િાખ", "કરોડ",
                  "અબજ", or higher, then transcribe it as a numeral followed by
                  the word. Otherwise, transcribe it as numerals following the
                  rules below.
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: 7 ન્સમન્સિયન </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 7,000,000 </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>સાત ન્સમન્સિયન </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Here, the number 7 is followed by a "ન્સમન્સિયન" so it
                    should be transcribed as the numeral "7" with the word
                    "ન્સમન્સિયન" written out after it.
                  </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: 7 કરોડ </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 7,00,00,000 </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>સાત કરોડ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_408}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Here, the number 7 is followed by a "કરોડ" so it should be
                    transcribed as the numeral "7" with the word "કરોડ" written
                    out after it.
                  </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: 1,000 ફિો </span>
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 1 હજાર ફિો </span>
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>એક હજાર ફિો </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Only write out "િાખ" or any higher amount. In this
                    example, "એક હજાર" is small enough to be transcribed using
                    digits "1,000".
                  </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: 7.89 અબજ </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 789,00,00,000 </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>સાત દશાશ નવ્યાસી અબજ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The speaker says the number at the beginning as a decimal
                    so just write "સાત દશાશ નવ્યાસી" using digits "7.89" and
                    then write out "અબજ" after it.
                  </span>
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_11}>: 987,65,43,291 </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>
                    નવ અબજ ન્સસત્યાસી કરોડ પાસઠ િાખ{' '}
                  </span>
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_6}>
                    ત્રતાિીસ હજાર બલસો એકાણ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Here the number is in crores where number 9 is followed by
                    "કરોડ", but it's further specified, so write out the whole
                    number with numerals as "987,65,43,291".
                  </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: 9 અબજ આઠ </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 9 અબજ 8 </span>
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>નવ અબજ આઠ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Speaker gets cut off. Since the number is not complete, do
                    not write it out as numerals but transcribe the initial
                    number with digits "9" then write out "અબજ" and the number 8
                    as "આઠ".
                  </span>
                </p>
                <p className={styles.block_424}>
                  Use the Indian numbering system to format large numbers when
                  the speaker says "િાખ", "કરોડ", or "અબજ".
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 12,12,12,123 </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 121,212,123 </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    બાર કરોડ બાર િાખ બાર હજાર એકસો ત્રવીસ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : This number is transcribed following the formatting rules
                    of the Indian numbering system because the speaker said
                    "કરોડ" and "િાખ".
                  </span>
                </p>
                <p className={styles.block_429}>
                  For all other long numbers (4+ digits), transcribe a comma
                  between groups of three digits.
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 10,000 </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 10000 </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>દસ હજાર </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Long numbers of 4 or more digits use a comma as a
                    separator between groups of three digits. So "દસ હજાર"
                    should be written as "10,000" with a comma before the last
                    three digits.
                  </span>
                </p>
                <p className={styles.block_434}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: 1/4 ન્સકિો ખાડ આપો. </span>
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 1⁄4 ન્સકિો ખાડ આપો. </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 0.25 ન્સકિો ખાડ આપો. </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>અડધો ન્સકિો ખાડ આપો </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "અડધો" here is a fraction meaning "1/4". Be careful not to
                    include spaces between numbers and slashes or pre-combined
                    fraction characters (e.g. "1/4" not "1⁄4" ).
                  </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : 3/4 km મા ડાબી બાજ વળો.{' '}
                  </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : 3/4 ન્સકિોમીટર મા ડાબી બાજ વળો.{' '}
                  </span>
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    પોણા ન્સકિોમીટર મા ડાબી બાજ વળો{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The fraction should be transcribed as "3/4". Do not write
                    out "km" as "ન્સકિોમીટર".
                  </span>
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 1/2 * 3/4 </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 1/2 ગણા 3/4 </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>અડધ ગણા પોણા </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : This is a math expression so transcribe the numbers using
                    slashes and numerals.
                  </span>
                </p>
                <p className={styles.block_448}>
                  For mixed numbers in math and units &amp; measures, use
                  numerals with a space between the numeral and fraction.
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_11}>: 3 1/2 km </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>સાડા ત્રણ ન્સકિોમીટર </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_212}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 1/3 + 3 1/2 </span>
                </p>
                <p className={styles.block_450}>
                  If a fraction is referring to items (not measurement units or
                  math equations), transcribe the fraction in words.
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: પોણા સફરજન </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 3/4 સફરજન </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>પોણા સફરજન </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "પોણા" is a fraction that represents part of an item
                    (સફરજન) so do not use numerals and slashes to transcribe.
                    Write the fraction out.
                  </span>
                </p>
                <p className={styles.block_455}>
                  Mixed numbers that refer to items should be written out in
                  words if it's under 10, otherwise write it with numerals.
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: દોઢ નારગી </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 1 1/2 નારગી </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Mixed numbers that refer to items (here, it refers to
                    "નારગી") should be written out in words as in this example
                    "દોઢ".
                  </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : 16 પણાક ત્રણ ભાગ્યા ચાર સફરજન{' '}
                  </span>
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : સોળ પણાક ત્રણ ભાગ્યા ચાર સફરજન{' '}
                  </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Even though this is a mixed number, you should follow the
                    rule about using numerals for numbers greater than 9. 16 is
                    greater than 9 so use numerals but for the fraction part of
                    the mixed number, write it out in words.
                  </span>
                </p>
                <p className={styles.block_462}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : શ તમ મન ₹2.50 િોન આપશો?{' '}
                  </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : શ તમ મન 2 1/2 રૂપીયાની િોન આપશો?{' '}
                  </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    શ તમ મન અઢી રૂપીયાની િોન આપશો{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "અઢી" is a mixed number but since it refers to currency,
                    use the standard currency format "₹2.50".
                  </span>
                </p>
                <p className={styles.block_467}>
                  Transcribe percentages using numerals followed by the % sign.
                  In the unlikely case that you encounter a number of a million
                  or greater used as a percentage, spell it out.
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE </span>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: 2% દધ </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_5}>AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>બ ટકા દધ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 2 ટકા દધ </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Amount has percentages so use numerals and the percent
                    sign "2%", don't write out the words.
                  </span>
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: 1 કરોડ ટકા </span>
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 1 કરો% </span>
                </p>
                <p className={styles.block_474}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>એક કરોડ ટકા </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The rule regarding amounts in the lakhs or greater applies
                    here so spell out "કરોડ" and "ટકા" but use digits for the
                    number in front ("1" not "એક").
                  </span>
                </p>
                <p className={styles.block_476}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: સપર બાઉિ XLVII </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: સપર બાઉિ 47 </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>સપર બાઉિ સડતાિીસ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The Super Bowl refers to an official name of a sports game
                    and is stylized by using Roman numerals for the game number
                    so write "સડતાિીસ" as "XLVII".
                  </span>
                </p>
                <p className={styles.block_481}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>
                    : ન્સસઝન 3 એન્સપસોડની 2{' '}
                  </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>
                    ન્સસઝન ત્રણ એન્સપસોડની બ{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Even though "3" and "2" are less than 10, they should be
                    transcribed as numerals here since they refer to the season
                    and episode of a television show.
                  </span>
                </p>
                <p className={styles.block_484}>
                  For landline phone numbers, transcribe a space after the
                  operating code then transcribe the remaining digits together
                  with no spaces. For mobile numbers, transcribe a space after
                  the country code, and a space after the fourth digit of the
                  phone number. Only transcribe a "+" is the speaker says
                  "પ્િસ".
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 079 22683721 </span>
                </p>
                <p className={styles.block_486}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 07922683721 </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    શ્ય સાત નવ બ બ છ આઠ ત્રણ સાત બ એક{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The correct transcription of this landline number includes
                    a space between the operating code and the rest of the
                    number.
                  </span>
                </p>
                <p className={styles.block_489}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 91 9897 334241 </span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 91-9897-334241 </span>
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    પ્િસ નવ એક નવ આઠ નવ સાત ત્રણ ત્રણ ચાર બ ચાર એક{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The correct transcription of this mobile number includes a
                    space after the country calling code and the next four
                    digits.
                  </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_11}>: +91 9897 334241 </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>
                    પ્િસ નવ એક નવ આઠ નવ સાત ત્રણ ત્રણ{' '}
                  </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_6}>ચાર બ ચાર એક </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Since the speaker said the country calling code with a
                    "પ્િસ" before the number, transcribe the spoken "પ્િસ" as
                    the plus symbol, "+".
                  </span>
                </p>
                <p className={styles.block_496}>
                  Transcribe alpha-digit sequences (product codes, car models,
                  etc.) in their most natural way (there may be more than one
                  way to transcribe). Do not transcribe credit card numbers or
                  any other personal information numbers.
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_11}>: XT660 or XT 660 </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_22}>x t </span>
                  <span className={styles.text_21}>છ સાઈઠ </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Here the letter sequence followed by digits can be
                    transcribed either all together "XT660" or with a space
                    between the letters and numbers "XT 660".
                  </span>
                </p>
                <p className={styles.block_499}>
                  Math expressions should be transcribed with numerals and math
                  symbols with spaces in between them.
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 5 / 6 </span>
                </p>
                <p className={styles.block_501}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 5/6 </span>
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>પાચ ભાગ્યા છ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The spoken sentence sounds like a math expression so the
                    corresponding math symbols and numerals are used to
                    transcribe it.
                  </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: 5 * 6 કટિા થાય? </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 5 ગણા 6 કટિા થાય? </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>પાચ ગણા છ કટિા થાય </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The correct transcription uses the asterisk symbol for
                    multiplication "*", and not "x".
                  </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies with the rupee symbol "₹" followed by
                  digits. Do not add a space or period between the rupee symbol
                  and number.
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_11}>: ₹220 </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>બલસો વીસ રૂપીયાની </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "બલસો વીસ રૂપીયાની" is an amount of currency. Transcribe
                    it using "₹" followed by "220".
                  </span>
                </p>
                <p className={styles.block_512}>
                  If it is obvious from context that a number reflects an amount
                  of currency, transcribe with a currency symbol.
                </p>
                <p className={styles.block_513}>
                  For paisa-only quantities, the word "પસા" should follow the
                  amount.
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: 20 પસા </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 20 p </span>
                </p>
                <p className={styles.block_516}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>વીસ પસા </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_517}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: 100 યઆન </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_17}>: 100元 </span>
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>એકસો યઆન </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "યઆન" refers to a foreign currency. Transcribe the numbers
                    as digits "100" and write out the word "યઆન". Don't use the
                    yuan symbol.
                  </span>
                </p>
                <p className={styles.block_522}>
                  When a speaker uses a currency name without specifying a
                  quantity, spell it out.
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>
                    : આ ભાઈ તના રૂન્સપયા આપી દશ.{' '}
                  </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_14}>
                    : The speaker is referring to rupees in{' '}
                  </span>
                </p>
                <p className={styles.block_524}>
                  general with no specific amounts, so write out the word
                  "રૂન્સપયા".
                </p>
                <p className={styles.block_525}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_526}>
                  Keep units of measurement in English. Do not transliterate.
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: MB </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: મગાબાઈટ </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Please use the abbreviation "MB" instead of writing out
                    the whole word.
                  </span>
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: km </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ન્સકિોમીટર </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Please use the abbreviation "km" instead of writing out
                    the whole word.
                  </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: cm2 </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ચોરસ સટીમીટર </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Please use the abbreviation "cm2" instead of writing out
                    the whole word.
                  </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: g </span>
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ગ્રામ </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Please use the abbreviation "g" instead of writing out the
                    whole word.
                  </span>
                </p>
                <p className={styles.block_539}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>MB </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>KB </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>GB </span>
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_8}>• </span>
                  <span className={styles.text_23}>TB </span>
                </p>
                <p className="text">Common measurements of distance and rate</p>
                <p className={styles.block_544}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>in </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>ft </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>yd </span>
                </p>
                <p className={styles.block_547}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>mi </span>
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>mm </span>
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>cm </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>m </span>
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>km </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>mph </span>
                </p>
                <p className={styles.block_553}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>km/h </span>
                </p>
                <p className={styles.block_554}>Common measurements of area</p>
                <p className={styles.block_555}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>km2 </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>in2 </span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>ft2 </span>
                </p>
                <p className={styles.block_558}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>mi2 </span>
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>cm2 </span>
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>m2 </span>
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>km2 </span>
                </p>
                <p className={styles.block_560}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>g </span>
                </p>
                <p className={styles.block_562}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>mg </span>
                </p>
                <p className={styles.block_547}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>kg </span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>L </span>
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>m3 </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>in3 </span>
                </p>
                <p className={styles.block_566}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 20° C </span>
                </p>
                <p className={styles.block_568}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 20 ન્સડગ્રી સલ્સીઅસ </span>
                </p>
                <p className={styles.block_569}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>વીસ ન્સડગ્રી સલ્સીઅસ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_570}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The speaker explicitly says "સલ્સીઅસ" here so use the
                    symbol for celsius "C" after the degree symbol.
                  </span>
                </p>
                <p className={styles.block_571}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 20 C </span>
                </p>
                <p className={styles.block_572}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 20° C </span>
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>વીસ સલ્સીઅસ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_574}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : If the speaker refers to the temperature in degrees, but
                    does not actually say the word "ન્સડગ્રી", do not transcribe
                    the word or the degree symbol.
                  </span>
                </p>
                <p className={styles.block_575}>
                  Abbreviate all units of measurement that are after numbers.
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : મારા પન્સરવાર ઍ 10 L નારગી નો રસ ખન્સરન્સદયો.
                  </span>
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : મારા પન્સરવાર ઍ 10 િીટર નારગી નો રસ ખન્સરન્સદયો.
                  </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    મારા પન્સરવાર ઍ દસ િીટર નારગી નો રસ ખન્સરન્સદયો{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_578}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Since "િીટર" appears after the number 10, it is
                    abbreviated as "L" with a space between "10" and "L".
                  </span>
                </p>
                <p className={styles.block_579}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 5 g </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: પાચ g </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>પાચ ગ્રામ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: 3 મન્સહના </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>ત્રણ મન્સહના </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_584}>
                  For lengths, widths, and heights: use "x" instead of any
                  preposition.
                </p>
                <p className={styles.block_585}>
                  If a speaker says a number without saying "વાગ્યો", "વાગ" or
                  any other time words, format it as time if it is obvious that
                  the number refers to a time.
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE </span>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: કાયરમ બપોર 2:00 છ. </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_5}>AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>કાયરમ બપોર બ છ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: કાયરમ બપોર 2 છ </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Although the speaker did not say "વાગ", it is obvious from
                    the context that the speaker is referring to the time. "બ"
                    should be transcribed using time format with a ":" between
                    the "2" and "00"
                  </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  When transcribing dates, write the date in numeral form
                  followed by the month written out in words, then the year in
                  numeral form.
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: 3 ઑક્ટોબર 2001 </span>
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 3મી ઑક્ટોબર 2001 </span>
                </p>
                <p className={styles.block_593}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>ત્રણ ઑક્ટોબર બ હજાર એક </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Write the date as the number "3", spell the month out as
                    "ઑક્ટોબર", and use 4 digits to write the year out as "2001".
                  </span>
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: બધવાર, 6 માચ </span>
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: બધવાર 6 માચ </span>
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>બધવાર છઠ્ઠી માચ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_597}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : There should be a comma between "બધવાર" and the date in
                    numeral form "6".
                  </span>
                </p>
                <p className={styles.block_598}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe it as numerals with the proper punctuation
                  separating the date, month, and year.
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_11}>: 12/7/2000 </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>
                    બાર લિશ સાત લિશ બ હજાર{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_600}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The speaker is saying the date aloud so transcribe the
                    numbers and numerals and the "લિશ" as the symbol "/".
                  </span>
                </p>
                <p className={styles.block_601}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.
                </p>
                <p className={styles.block_602}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 2:00 </span>
                </p>
                <p className={styles.block_603}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: 2 વાગ </span>
                </p>
                <p className={styles.block_604}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>બ વાગ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_605}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE </span>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: એ 4:00 આવશ </span>
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_5}>AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>એ ચાર આવશ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: એ 4 આવશ </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: 11:40 થઈ ગયા </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>
                    અન્સગયાર વાગીન ચાિીસ થઈ ગયા{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_609}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_11}>: 1:45 </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>પોના બ </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_610}>
                  For "બપોર" and "મધરાત", use the written form.
                </p>
                <p className={styles.block_611}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: બપોર </span>
                </p>
                <p className={styles.block_612}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 12:00 </span>
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>બપોર </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: મધરાત </span>
                </p>
                <p className={styles.block_615}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 12:00 </span>
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>મધરાત </span>
                  <span className={styles.text_4}>" </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Write out the full names of locations, roads, states, etc.
                  Only use abbreviations when explicitly spoken.
                </p>
                <p className={'text'}>Use commas for ENTITY, LOCATION.</p>
                <p className={styles.block_619}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : કૌન્સશક જનરિ લટોસ, પણ{' '}
                  </span>
                </p>
                <p className={styles.block_620}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: કૉફી શોપ, 400001 </span>
                </p>
                <p className={styles.block_621}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ન્સવવકાનદ ન્સનશાળ, ન્સટળક રોડ{' '}
                  </span>
                </p>
                <p className={styles.block_622}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : બન્સરલતા િવાઝા, મઝબાન રોડ{' '}
                  </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: www.google.com </span>
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : www {`{ટપક}`} Google {`{ટપક}`} com{' '}
                  </span>
                </p>
                <p className={styles.block_627}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    ડબ્લ્ય ડબ્લ્ય ડબ્લ્ય ટપક ગગિ ટપક કોમ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_628}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Although the speaker said "ટપક " aloud, these are symbols
                    that are associated with URLs and should be transcribed as
                    "." and not spelled out in curly brackets.
                  </span>
                </p>
                <p className={styles.block_629}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_11}>: http://amazon.com </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>
                    એચ ટી ટી પી અપણ ન્સવરામ લિશ લિશ{' '}
                  </span>
                </p>
                <p className={styles.block_630}>
                  <span className={styles.text_6}>એમઝોન ટપક કોમ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_631}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The "એચ ટી ટી પી અપણ ન્સવરામ લિશ લિશ" is part of the web
                    URL format and should be written using punctuation symbols
                    "http://".
                  </span>
                </p>
                <p className={styles.block_632}>
                  <span className={styles.text_7}>C</span>
                  <span className={styles.text_8}>ORRECT</span>
                  <span className={styles.text_7}>: mike@example.org </span>
                  <span className={styles.text_27}>E</span>
                  <span className={styles.text_28}>XAMPLE AUDIO</span>
                  <span className={styles.text_27}>: " </span>
                  <span className={styles.text_29}>
                    mike at example dot org{' '}
                  </span>
                  <span className={styles.text_27}>" </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : #ઈન્સ્ડયા આજ વરસાદ જવ વાતાવરણ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_634}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : #ઈન્સ્ડયા. આજ વરસાદ જવ વાતાવરણ છ.{' '}
                  </span>
                </p>
                <p className={styles.block_635}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    હશ ટગ ઈન્સ્ડયા આજ વરસાદ જવ વાતાવરણ છ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_636}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "બક લિશ".
                </p>
                <p className={styles.block_637}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : http:\\mail.yahoo.com{' '}
                  </span>
                </p>
                <p className={styles.block_638}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : http://mail.yahoo.com{' '}
                  </span>
                </p>
                <p className={styles.block_639}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    એચ ટી ટી પી અપણ ન્સવરામ બક લિશ બક લિશ મિ ટપક યાહ ટપક કોમ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_640}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Even though the correct format should have the forward
                    slash "/", the speaker says "બક લિશ" here so transcribe it
                    using the backslash symbol "\".
                  </span>
                </p>
                <p className={styles.block_641}>
                  If the speaker drops a "ડબલ્ય " or "ટપક " and it's an obvious
                  URL, you should correct these errors. If the speaker doesn't
                  say "ડબલ્ય " at all, do not add them.
                </p>
                <p className={styles.block_642}>
                  <span className={styles.text_27}>E</span>
                  <span className={styles.text_28}>XAMPLE </span>
                  <span className={styles.text_7}>C</span>
                  <span className={styles.text_8}>ORRECT</span>
                  <span className={styles.text_7}>: www.facebook.com </span>
                </p>
                <p className={styles.block_643}>
                  <span className={styles.text_5}>AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    ડબલ્ય ડબલ્ય ફસબક ટપક કોમ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: ww facebook.com </span>
                </p>
                <p className={styles.block_645}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The speaker doesn't say the "ટપક " before "ફસબક" and only
                    says two "ડબલ્ય "s so add the missing dot and missing "ડબલ્ય
                    " when transcribing.
                  </span>
                </p>
                <p className={styles.block_646}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not transcribe abbreviated forms of words unless the
                  speaker says an abbreviated form.
                </p>
                <p className={styles.block_649}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : અન્સતમ તારીખ 3 ઑક્ટોબર 2001{' '}
                  </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : અન્સતમ તા. 3 ઑક્ટોબર 2001{' '}
                  </span>
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    અન્સતમ તારીખ ત્રણ ઑક્ટોબર બ હજાર એક{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The speaker said "તારીખ" aloud and not "તા" so write out
                    the whole word and do not transcribe the abbreviated form.
                  </span>
                </p>
                <p className={styles.block_652}>
                  For other proper names involving titles, use the official
                  spelling of the proper name. If you are not sure, do not
                  abbreviate the title.
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
