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
            <PageContentHeader currentPage="longform Bangla" />
            <div className="content text">
              <p>
                {' '}
                <span className={'large-heading'}>Format </span>
              </p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.{' '}
              </p>
              <div id="number">
                <p className={'heading'}>Number </p>
                <p className={'text'}>
                  Only Western Arabic numerals should be used.{' '}
                </p>
                <p className={styles.block_387}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).{' '}
                </p>
                <p className={styles.block_388}>
                  Correct: ােস ছা -ছা ী সংখ া নয় জন।{' '}
                </p>
                <p className={styles.block_389}>
                  Incorrect: ােস ছা -ছা ী সংখ া 9 জন।{' '}
                </p>
                <p className={styles.block_390}>
                  Correct: ােস ছা -ছা ী সংখ া 13 জন।{' '}
                </p>
                <p className={styles.block_391}>
                  Incorrect: ােস ছা -ছা ী সংখ া তর জন।{' '}
                </p>
                <p className={styles.block_392}>
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10.{' '}
                </p>
                <p className={styles.block_393}>
                  Correct: আমার ছয় ময়না এবং 12 য়া পািখ আেছ।{' '}
                </p>
                <p className={styles.block_394}>
                  Incorrect: আমার ছয় ময়না এবং বার য়া পািখ{' '}
                </p>
                <p className={styles.block_395}>আেছ। </p>
                <p className={styles.block_396}>
                  Transcribe all decimal numbers as digits.{' '}
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_12}>Correct: 3.14 </span>
                  <span className={styles.text_7}>Example audio: " </span>
                  <span className={styles.text_8}>তর দশিমক চৗ </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_398}>
                  If a large number consists of only a number followed by "ল ",
                  "ল কা ট", or higher, then transcribe as a numeral plus word.
                  Otherwise, transcribe as numerals.{' '}
                </p>
                <p className={styles.block_399}>Correct: 1 লাখ গ </p>
                <p className={styles.block_288}>Incorrect: 100,000 গ </p>
                <p className={styles.block_400}>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_10}>এক লাখ গ </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_401}>Correct: 5 ল মানষ </p>
                <p className={styles.block_402}>Correct: 1,000 মানষ </p>
                <p className={styles.block_403}>
                  <span className={styles.text_6}>Correct: 1.5 লাখ টাকা </span>
                  <span className={styles.text_7}>Example audio: " </span>
                  <span className={styles.text_8}>এক দশিমক পাচ লাখ টাকা </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_10}>দড় লাখ টাকা </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_405}>
                  Write lists of numbers with digits and without commas.{' '}
                </p>
                <p className={styles.block_406}>Correct: 0 1 2 5 7 8 12 </p>
                <p className={styles.block_407}>
                  Incorrect: 0, 1, 2, 5, 7, 8, 12{' '}
                </p>
                <p className={styles.block_408}>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_10}>
                    শন এক ই পাচ সাত আট বার{' '}
                  </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_409}>
                  For long numbers (4+ digits) indicating quantity, insert the
                  relevant separator (comma, decimal point, or space, depending
                  on language).{' '}
                </p>
                <p className={styles.block_410}>Correct: 10,000 </p>
                <p className={styles.block_411}>Incorrect: 10000 </p>
                <p className={styles.block_412}>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_10}>দশ হাজার </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_413}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.{' '}
                </p>
                <p className={styles.block_414}>
                  For mixed numbers in math and units &amp; measures, use
                  numerals with "and".{' '}
                </p>
                <p className={styles.block_415}>Correct: 3 1/2 km </p>
                <p className={styles.block_416}>Correct: 1/3 + 3 1/2 </p>
                <p className={styles.block_417}>
                  If a fraction is referring to items (not measurement units or
                  math equations), transcribe the fraction in words.{' '}
                </p>
                <p className={styles.block_418}>
                  Mixed numbers that refer to items should be written out in
                  words if it's under 10, otherwise write it with numerals.{' '}
                </p>
                <p className={styles.block_419}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.{' '}
                </p>
                <p className={styles.block_420}>
                  Transcribe percentages using numerals followed by the % sign.
                  In the unlikely case that you encounter a number of a million
                  or greater used as a percentage, spell it out.{' '}
                </p>
                <p className={styles.block_421}>Correct: 2% </p>
                <p className={styles.block_422}>
                  Use Roman numerals only when part of an official name or
                  title.{' '}
                </p>
                <p className={styles.block_423}>
                  Transcribe seasons and episodes of television shows with
                  numerals.{' '}
                </p>
                <p className={styles.block_424}>
                  For landline phone numbers, transcribe a space after the
                  operating code then transcribe the remaining digits together
                  with no spaces. For mobile numbers, transcribe a space after
                  the country code, and a space after the fourth digit of the
                  phone number. Only transcribe a "+" is the speaker says " াস".{' '}
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_14}>Correct: 011 20000198 </span>
                  <span className={styles.text_15}>
                    Explanation: This is a landline number so there{' '}
                  </span>
                </p>
                <p className={styles.block_426}>
                  is a space after the operator code, 011. The rest{' '}
                </p>
                <p className={styles.block_427}>
                  of the digits are transcribed without spaces.{' '}
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_14}>
                    Correct: 91 1234 123456{' '}
                  </span>
                  <span className={styles.text_15}>
                    Explanation: This is a mobile number so there is{' '}
                  </span>
                </p>
                <p className={styles.block_429}>
                  a space after the country code, "91", and after{' '}
                </p>
                <p className={styles.block_430}>
                  the fourth digit of the phone number, "4". The{' '}
                </p>
                <p className={styles.block_431}>
                  remaining six digits are transcribed without{' '}
                </p>
                <p className={styles.block_432}>spaces. </p>
                <p className={styles.block_433}>
                  <span className={styles.text_16}>
                    Correct: +91 1234 123456{' '}
                  </span>
                  <span className={styles.text_17}>
                    Explanation: Since the speaker says the word " াস"{' '}
                  </span>
                </p>
                <p className={styles.block_434}>
                  before the country code, a "+" sign is transcribed.{' '}
                </p>
                <p className={styles.block_435}>
                  Transcribe alpha-digit sequences (product codes, car models,
                  etc.) in their most natural way (there may be more than one
                  way to transcribe). Do not transcribe credit card numbers or
                  any other personal information numbers.{' '}
                </p>
                <p className={styles.block_436}>
                  Correct: Mercedes-Benz CLS450{' '}
                </p>
                <p className={styles.block_437}>
                  Math expressions should be transcribed with numerals and math
                  symbols with spaces in between them.{' '}
                </p>
                <p className={styles.block_438}>Correct: 5 / 6 ^ 3 </p>
                <p className={styles.block_439}>Incorrect: 5/6^3 </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit </p>
                <p className={'text'}>
                  Transcribe currencies with the "৳" symbol followed by digits.
                  Do not include a space between the symbol and the number.{' '}
                </p>
                <p className={styles.block_442}>Correct: ৳10 </p>
                <p className={styles.block_443}>
                  If it is obvious from context that a number reflects an amount
                  of currency, transcribe with a currency symbol.{' '}
                </p>
                <p className={styles.block_444}>
                  For all other currencies and slang terms for money, spell out
                  the words.{' '}
                </p>
                <p className={styles.block_445}>Correct: 300 ইউেরা </p>
                <p className={styles.block_446}>Incorrect: €300 </p>
                <p className={styles.block_447}>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_10}>িতন শত ইউেরা </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_448}>
                  Explanation: "ইউেরা" refers to a foreign currency. Transcribe
                  the numbers as digits "300" and write out the word "ইউেরা".
                  Don't use the euro symbol.{' '}
                </p>
                <p className={styles.block_451}>
                  Keep units of measurement in English. Do not transliterate.{' '}
                </p>
                <p className={styles.block_452}>Correct: 4 MB </p>
                <p className={styles.block_453}>Incorrect: 4 </p>
                <p className={styles.block_454}>Correct: 3 in </p>
                <p className={styles.block_455}>Incorrect: 3 ಇಂಚುಗ </p>
                <p className={styles.block_456}>Correct: 80 km/h </p>
                <p className={styles.block_457}>Incorrect: ಗಂ ೕ ಟ </p>
                <p className={styles.block_458}>Correct: 40 mi2 </p>
                <p className={styles.block_459}>Incorrect: 40 ಗ </p>
                <p className={styles.block_460}>Correct: 2 L </p>
                <p className={styles.block_461}>Incorrect: 2 ಟ </p>
                <p className={styles.block_462}>
                  Common technical abbreviations{' '}
                </p>
                <p className={styles.block_463}>● MB </p>
                <p className={styles.block_464}>● KB </p>
                <p className={styles.block_465}>● GB </p>
                <p className={styles.block_464}>● TB </p>
                <p className={styles.block_466}>
                  Common measurements of distance and rate{' '}
                </p>
                <p className={styles.block_467}>● in </p>
                <p className={styles.block_468}>● ft </p>
                <p className={styles.block_469}>● yd </p>
                <p className={styles.block_269}>● mi </p>
                <p className={styles.block_470}>● mm </p>
                <p className={styles.block_471}>● cm </p>
                <p className={styles.block_472}>● m </p>
                <p className={styles.block_473}>● km </p>
                <p className={styles.block_270}>● mph </p>
                <p className={styles.block_474}>● km/h </p>
                <p className={styles.block_475}>Common measurements of area </p>
                <p className={styles.block_476}>● km2 </p>
                <p className={styles.block_477}>● in2 </p>
                <p className={styles.block_469}>● ft2 </p>
                <p className={styles.block_272}>● mi2 </p>
                <p className={styles.block_478}>● cm2 </p>
                <p className={styles.block_464}>● m2 </p>
                <p className={styles.block_479}>
                  Common measurements of weight and volume{' '}
                </p>
                <p className={styles.block_480}>● g </p>
                <p className={styles.block_471}>● mg </p>
                <p className={styles.block_269}>● kg </p>
                <p className={styles.block_481}>● L </p>
                <p className={styles.block_464}>● m3 </p>
                <p className={styles.block_482}>● in3 </p>
                <p className={styles.block_483}>
                  For degrees, use the ° symbol.{' '}
                </p>
                <p className={styles.block_484}>
                  Abbreviate all units of measurement that are after numbers.{' '}
                </p>
                <p className={styles.block_485}>
                  Correct: বাবা 10 L জস িকেনেছন।{' '}
                </p>
                <p className={styles.block_486}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.{' '}
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time </p>
                <p className={'text'}>
                  When transcribing dates, write out the full name of the month
                  followed by the date in the ordinal form followed by a comma,
                  then the year in numeral form.{' '}
                </p>
                <p className={styles.block_489}>
                  <span className={styles.text_6}>
                    Correct: 12ই জ লাই 1964{' '}
                  </span>
                  <span className={styles.text_7}>Example audio: " </span>
                  <span className={styles.text_8}>বােরা জ লাই উিনেশা চৗষ </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_6}>
                    Correct: ১লা জানয়াির, বহ িতবার{' '}
                  </span>
                  <span className={styles.text_7}>Example audio: " </span>
                  <span className={styles.text_8}>
                    পেহলা জানয়াির বহ িতবার{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_491}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe it as numerals with the proper punctuation
                  separating the month, date, and year.{' '}
                </p>
                <p className={'text'}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.{' '}
                </p>
                <p className="text">
                  <span className={styles.text_19}>
                    <sub className={styles.calibre2}>Correct: 3:00 </sub>
                  </span>
                  <span className={styles.text_20}>
                    <sub className={styles.calibre2}>Example audio: " </sub>
                  </span>
                  <span className={styles.text_21}>
                    <sub className={styles.calibre2}>িতন টা বােজ </sub>
                  </span>
                  <span className={styles.text_20}>
                    <sub className={styles.calibre2}>" </sub>
                  </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_12}>Correct: 1:30 </span>
                  <span className={styles.text_7}>Example audio: " </span>
                  <span className={styles.text_8}>একটা ি শ </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_10}>দড়টা </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_6}>
                    Correct: ায় 8:00 টা বােজ{' '}
                  </span>
                  <span className={styles.text_7}>Example audio: " </span>
                  <span className={styles.text_8}>ায় আটটা বােজ </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_496}>
                  Use "সকাল" and " পর" if spoken.{' '}
                </p>
                <p className={styles.block_497}>Correct: সকাল 6টা </p>
                <p className={styles.block_498}>
                  For " পর" and "মধ রাত", use the written form.{' '}
                </p>
                <p className={styles.block_368}>Correct: পর </p>
                <p className={styles.block_439}>Incorrect: 12:00 </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address </p>
                <p className={'text'}>
                  Write out the full names of locations, roads, states, etc.
                  Only use abbreviations when explicitly spoken.{' '}
                </p>
                <p className={styles.block_501}>
                  Use commas for ENTITY, LOCATION.{' '}
                </p>
                <p className={styles.block_502}>Correct: হােটল রিডসন, িনক </p>
                <p className={styles.block_503}>Correct: হােটল রিডসন, িনক </p>
                <p className={styles.block_504}>
                  Correct: ড. হািকম আিরফ, ঢাকা িব িবদ ালয়{' '}
                </p>
                <p className={styles.block_505}>Correct: লকিস ট, িখলেখত </p>
                {/*  */}
                <div id="web">
                  <p className={'heading'}>Web </p>
                  <p className={'text'}>
                    Write URLs, email addresses, and Twitter hashtags as they
                    are spoken.{' '}
                  </p>
                  <p className={styles.block_508}>Correct: www.google.co.kr </p>
                  <p className={styles.block_509}>
                    Incorrect: www {`{ডট}`} Google {`{ডট}`} co{` {ডট}`} kr{' '}
                  </p>
                  <p className={styles.block_510}>
                    <span className={styles.text_11}>Example audio: " </span>
                    <span className={styles.text_10}>
                      ডাি উ ডাি উ ডাি উ ডট েগাল ডট িস ও ডট ক আর{' '}
                    </span>
                    <span className={styles.text_11}>" </span>
                  </p>
                  <p className={styles.block_511}>
                    <span className={styles.text_12}>Correct: amazon.com </span>
                    <span className={styles.text_7}>Example audio: " </span>
                    <span className={styles.text_8}>অ ামাজন ডট কম </span>
                    <span className={styles.text_7}>" </span>
                  </p>
                  <p className={styles.block_512}>Correct: mike@example.org </p>
                  <p className={styles.block_513}>Correct: পরী া #অশা </p>
                  <p className={styles.block_514}>
                    Do not correct speaker errors such as transcribing a slash
                    when the user actually says "backslash".{' '}
                  </p>
                  <p className={'text'}>
                    If the speaker drops a "w" or "dot" and it's an obvious URL,
                    you should correct these errors. If the speaker doesn't say
                    the "w"s at all, do not add them.{' '}
                  </p>
                  <br />
                  <p className={styles.block_516}>
                    <span className={styles.text_22}> </span>
                    <span className={styles.text_14}>
                      Correct: www.google.co.kr{' '}
                    </span>
                  </p>
                  <p className={styles.block_517}>
                    <span className={styles.text_11}>
                      {' '}
                      Example audio: " ডাি উ ডাি উ ডট েগাল ডট িস ও ডট ক আর"{' '}
                    </span>
                  </p>
                  <p className={styles.block_518}>
                    <span className={styles.text_23}>
                      Incorrect: ww google.co.kr{' '}
                    </span>
                  </p>
                  <p className={styles.block_519}>
                    If a URL is spelled out in individual letters, transcribe
                    without spaces between individual letters.{' '}
                  </p>
                </div>
                <div id="abbreviation">
                  <p className={'heading'}>Abbreviation </p>
                  <p className={'text'}>
                    Do not transcribe abbreviated forms of words unless the
                    speaker says an abbreviated form.{' '}
                  </p>
                  <p className={styles.block_522}>
                    For other proper names involving titles, use the official
                    spelling of the proper name. If you are not sure, do not
                    abbreviate the title.{' '}
                  </p>
                  <p className={styles.block_523}>
                    In acronyms and initialisms, do not use periods between
                    letters.{' '}
                  </p>
                  <p className={styles.block_524}>Correct: িবএনিপ </p>
                  <p className={styles.block_525}>Correct: িবিবিস </p>
                  <p className={styles.block_526}>Correct: িবিবএস </p>
                </div>
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
