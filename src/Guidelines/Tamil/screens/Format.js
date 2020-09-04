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
            <PageContentHeader currentPage="longform Tamil" />
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
                <p className={styles.block_383}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நான இரண ஆப ள னேறன. </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: நான 2 ஆப ள னேறன. </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Numbers less than 10 should be written out, so the number
                    2 should be written out as "இரண ".
                  </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : நான 14 வாைழபபழம னேறன.{' '}
                  </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: நான ப னான வாைழபபழம </span>
                </p>
                <p className={styles.block_389}>னேறன.</p>
                <p className={styles.block_390}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Numbers 10 or above use digits. The number 14 should not
                    be written out as "ப னான ", just use the digits "14".
                  </span>
                </p>
                <p className={styles.block_391}>
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10.
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : எனனிடம ன ஆரஞ க ம 12 மாமபழஙக ம இ க னற .{' '}
                  </span>
                </p>
                <p className={styles.block_393}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : எனனிடம 3 ஆரஞ க ம 12 மாமபழஙக ம இ க னற .{' '}
                  </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : எனனிடம ன ஆரஞ க ம பனனிரண மாமபழஙக ம இ க னற .
                  </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Even though this sentence has "ஆரஞ க ம" and "மாமபழஙக ம"
                    coordinated with numbers, since 3 is less than 10, it should
                    be written out as " ன ", while 12 should use digits.
                  </span>
                </p>
                <p className={styles.block_396}>
                  Transcribe all decimal numbers as digits.
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 3.14 </span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ன ளளி ஒன நா </span>
                </p>
                <p className={styles.block_366}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ன ளளி ஒன நா </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_399}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Even though 3.14 is less than 10, the correct
                    transcription uses digits and does not spell out "3.14" as "
                    ன ளளி ஒன நா " because decimal numbers always use digits.
                  </span>
                </p>
                <p className={styles.block_400}>
                  When two or more numbers refer to the same noun, and one
                  number is 10 or greater, transcribe both as numerals.
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 9 அலல 10 தஙக ன </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ஒனப அலல பத தஙக ன </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Even though 9 is less than 10, both numbers refer to "தஙக
                    ன" and one of the numbers is 10 or greater so write out both
                    numbers using digits "9 அலல 10".
                  </span>
                </p>
                <p className={styles.block_404}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 0 1 1 2 3 5 8 </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 0, 1, 1, 2, 3, 5, 8 </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ஜயம ஒ ஒ இரண </span>
                </p>
                <p className={styles.block_408}>
                  <span className={styles.text_5}>ன ஐந எட </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Because the numbers are listed, all of them are
                    transcribed as numbers even though some are less than 10 and
                    there are no commas used.
                  </span>
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 3 2 1 ஏவத </span>
                </p>
                <p className={styles.block_366}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ன இரண ஒ ஏவத </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 3, 2, 1 ஏவத </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Even though "3 2 1" is part of a sentence, the numbers are
                    still transcribed using digits and without commas because
                    they are considered a list of numbers.
                  </span>
                </p>
                <p className={styles.block_413}>
                  If the speaker in the audio says one number followed by " ல
                  யன", " ல யன", " ரில யன", "லடசம", "ேகா ", "அர ", or higher,
                  then transcribe it as a numeral followed by the word.
                  Otherwise, transcribe it as numerals following the rules
                  below.
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 7 ல யன </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 7,000,000 </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ஏ ல யன </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Here, the number 7 is followed by a " ல யன" so it should
                    be transcribed as the numeral "7" with the word " ல யன"
                    written out after it.
                  </span>
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 1 இலடசம </span>
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 1,00,000 </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ஒ இலடசம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Here, the number 1 is followed by a "இலடசம" so it should
                    be transcribed as the numeral "1" with the word "இலடசம"
                    written out after it.
                  </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 1,000 பகதரகளிடம </span>
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 1 ஆ ரம பகதரகளிடம </span>
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ஓரா ரம பகதரகளிடம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Only write out "லடசம" or any higher amount. In this
                    example, "ஓரா ரம" is small enough to be transcribed using
                    digits "1,000".
                  </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 2.28 ேகா </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 2,28,00,000 </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>இரண ளளி இரண எட ேகா </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The speaker says the number at the beginning as a decimal
                    so just write "இரண
                  </span>
                </p>
                <p className={styles.block_429}>
                  ளளி இரண எட " using digits "2.28" and then write out "ேகா "
                  after it.
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: 54,35,729 </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>
                    ஐமபத நான இலடசம பபத ஐயா ரத எ ற இ பத ஒனப{' '}
                  </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Here the number is in lakhs where the number 54 is
                    followed by "இலடசம", but it's further specified, so write
                    out the whole number with numerals as "54,35,729".
                  </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 3 ேகா இரண </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 3 ேகா 2 </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ன ேகா இரண</span>
                  <span className={styles.text_3}>- " </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Speaker gets cut off. Since the number is not complete, do
                    not write it out as numerals but transcribe the initial
                    number with digits "3" then write out "ேகா " and the number
                    2 as "இரண ".
                  </span>
                </p>
                <p className={styles.block_436}>
                  Use the Indian numbering system to format large numbers when
                  the speaker says "லடசம", "ேகா ", or "அர ".
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 12,12,12,123 </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 121,212,123 </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    பனனிரண ேகா பனனிரண லடசம பனனிரண ஆ ரம{' '}
                  </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_5}>ற இ பத ன </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : This number is transcribed following the formatting rules
                    of the Indian numbering system because the speaker said "ேகா
                    " and "லடசம".
                  </span>
                </p>
                <p className={styles.block_442}>
                  For all other long numbers (4+ digits), transcribe a comma
                  between groups of three digits.
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 10,000 </span>
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 10000 </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>பத ஆ ரம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "பத ஆ ரம" should be written as "10,000" with a comma
                    before the last three digits.
                  </span>
                </p>
                <p className={styles.block_447}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : அவரக க 1/2 டடர பால ேவண ம.{' '}
                  </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    அவரக க அைர டடர பால ேவண ம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அவரக க அைர டடர பால ேவண ம.{' '}
                  </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அவரக க 0.5 டடர பால ேவண ம.{' '}
                  </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Fractions should be transcribed with numerals and slashes.
                  </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 3/16 * 4/5 </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 3/16 ெப க னா 4/5 </span>
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    ன சம ெப க னா நானெகான ழ ஐந{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : This is a math expression so transcribe the numbers using
                    slashes and numerals.
                  </span>
                </p>
                <p className={styles.block_457}>
                  For mixed numbers in math and units &amp; measures, use
                  numerals.
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 2 1/2 km </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: இரணடைர km </span>
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>இரணடைர ேலா டடர </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "இரணடைர" is a mixed number so write the number and
                    fraction as numerals with slashes.
                  </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 1/3 + 3 1/2 </span>
                </p>
                <p className={styles.block_463}>
                  If a fraction is referring to items (not measurement units or
                  math equations), transcribe the fraction in words.
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ஒ ஆப ள சம </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 1/16 ஆப ள </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ஒ ஆப ள சம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : " சம" is a fraction that represents part of an item (ஆப ள)
                    so do not use numerals and slashes to transcribe. Write the
                    fraction out.
                  </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: அைர மனதான </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 1/2 மனதான </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The "half" in this example is used figuratively and does
                    not refer to a math equation or a unit of measurement so
                    write the fraction out.
                  </span>
                </p>
                <p className={styles.block_471}>
                  Mixed numbers that refer to items should be written out in
                  words if it's under 10, otherwise write it with numerals.
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: னறைர ஆரஞ </span>
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 3 1/2 ஆரஞ </span>
                </p>
                <p className={styles.block_474}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Mixed numbers that refer to items (here, it refers to ஆரஞ
                    ) should be written out in words as in this example " னறைர".
                  </span>
                </p>
                <p className={styles.block_475}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ₹2.5 லடசம </span>
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 2 1/2 லடசம பாய </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>இரணடைர லடசம பாய </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "இரணடைர" is a mixed number but since it refers to
                    currency, use the standard currency format "₹2.5".
                  </span>
                </p>
                <p className={styles.block_480}>
                  Transcribe percentages using numerals followed by the % sign.
                  In the unlikely case that you encounter a number of a million
                  or greater used as a percentage, spell it out.
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 10% மககள ெதாைக </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 10 சத தம மககள ெதாைக </span>
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>பத சத தம மககள ெதாைக </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_484}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Amount has percentages so use numerals and the percent
                    sign "10%", don't write out the words.
                  </span>
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 1 இலடசம சத தம </span>
                </p>
                <p className={styles.block_486}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 1 இலடசம% </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ஒ இலடசம சத தம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The rule regarding amounts in the millions or greater
                    applies here so spell out "இலடசம" and "சத தம" but use the
                    digit for the number in front ("1" not "ஒ ").
                  </span>
                </p>
                <p className={styles.block_489}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: பபர ேபால XLVII </span>
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: பபர ேபால 47 </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>பபர ேபால நாறபத ஏ </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The Super Bowl refers to an official name of a sports game
                    and is stylized by using Roman numerals for the game number
                    so write "நாறபத ஏ " as "XLVII".
                  </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE </span>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: ததநைத II அ ள னனபபர </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_4}>AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ததநைத இரணடாம </span>
                </p>
                <p className={styles.block_496}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ததநைத 2nd அ ள னனபபர </span>
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_5}>அ ள னனபபர </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>: " ததநைத இரணடாம அ ள </span>
                </p>
                <p className={styles.block_499}>
                  னனபபர" refers to the official title of a pope so the phrase
                  "இரணடாம" should be transcribed as "II".
                </p>
                <p className={styles.block_500}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_501}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: சன 3 அத யாயஙகள 2 </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>சன ன அத யாயஙகள </span>
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_5}>இரண </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Even though "3" and "2" are less than 10, they should be
                    transcribed as numerals here since they refer to the season
                    and episode of a television show.
                  </span>
                </p>
                <p className={styles.block_504}>
                  For landline phone numbers, transcribe a space after the
                  operating code then transcribe the remaining digits together
                  with no spaces. For mobile numbers, transcribe a space after
                  the country code, and a space after the fourth digit of the
                  phone number. Only transcribe a "+" is the speaker says "பளஸ".
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 44 23133659 </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 4423133659 </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    நான நான இரண ன ஒன ன ன ஆ ஐந ஒனப{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 91 9663 840659 </span>
                </p>
                <p className={styles.block_508}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 91-9663-840659 </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    ஒனப ஒன ஒனப ஆ ஆ ன எட நான ச யம ஆ ஐந ஒனப{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The correct transcription of this mobile number includes a
                    space between the country code, 91, and the phone number as
                    well as a space after the next four digits.
                  </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: +91 9663 840659 </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>பளஸ ஒனப ஒன ஒனப </span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.text_5}>
                    ஆ ஆ ன எட நான ச யம ஆ ஐந ஒனப{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Since the speaker said the country calling code with a
                    "பளஸ" before the number,
                  </span>
                </p>
                <p className={styles.block_513}>
                  transcribe the spoken "பளஸ" as the plus symbol, "+".
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 44 25671789 நட ப 54 </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 4425671789 54 </span>
                </p>
                <p className={styles.block_516}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    நா நா ெரண அஞ ஆ ஏ ஒன ஏ எட ஒமப நட ப அஞ நா{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Since the speaker says "நட ப " aloud, transcribe the whole
                    word, followed by the numbers spoken after "நட ப " as digits
                    "54".
                  </span>
                </p>
                <p className={styles.block_518}>
                  Transcribe alpha-digit sequences (product codes, car models,
                  etc.) in their most natural way (there may be more than one
                  way to transcribe). Do not transcribe credit card numbers or
                  any other personal information numbers.
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>
                    : .எம.ட ள K1200GT/K 1200 GT{' '}
                  </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>எம ட ள ேக ஆ ரத </span>
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_5}>இ </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Here the letter sequence followed by digits can be
                    transcribed either all together "K1200GT" or with a space
                    between the letters and numbers "K 1200 GT".
                  </span>
                </p>
                <p className={styles.block_522}>
                  Math expressions should be transcribed with numerals and math
                  symbols with spaces in between them.
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 5 / 6 ^ 3 </span>
                </p>
                <p className={styles.block_524}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 5/6^3 </span>
                </p>
                <p className={styles.block_525}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>அஞச ஆ க பபால வ ததல </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The spoken sentence sounds like a math expression so the
                    corresponding math symbols and numerals are used to
                    transcribe it.
                  </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 5 * 6 எவவள ? </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 5 ெப க னா 6 எவவள ? </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>அஞச ஆறால ெப க னா எவேளா </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The correct transcription uses the asterisk symbol for
                    multiplication "*", and not "x".
                  </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_20}>: √3 </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>னின ச ர லம </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 3 ச ர லம </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : 12 மாமபழஙக ம வ ததல ன ஆரஞ க ம{' '}
                  </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : 12 மாமபழஙக ம/3 ஆரஞ க ம{' '}
                  </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "மாமபழஙக ம" and "ஆரஞ க ம" are not useful units of
                    measurement, so this is not a true math expression. The
                    numbers and math operators should be written out except for
                    "12" because it is greater than 10.
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
                <p className={styles.block_538}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: ₹500 </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>ஐ பாய </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "ஐ பாய" is an amount of currency. Rupee amounts should be
                    transcribed with the rupee symbol (₹) followed by the
                    currency amount in numerals.
                  </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: ₹100 </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>பா </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : " பா" is an amount of currency. Rupee amounts should be
                    transcribed with the rupee symbol (₹) followed by the
                    currency amount in numerals.
                  </span>
                </p>
                <p className={styles.block_542}>
                  If it is obvious from context that a number reflects an amount
                  of currency, transcribe with a currency symbol.
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ெபடேரால ைல ₹80 ஐ எட ய .{' '}
                  </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : ெபடேரால ைல 80 ஐ எட ய .{' '}
                  </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ெபடேரால ைல எணப ஐ எட ய </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Here the speaker is referring to the price of gasoline so
                    it should also be transcribed with a rupee sign and numerals
                    as "80".
                  </span>
                </p>
                <p className={styles.block_546}>
                  For paisa-only quantities, the word "ைபசா" should follow the
                  amount.
                </p>
                <p className={styles.block_547}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 20 ைபசா </span>
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: 20 p. </span>
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>இ ப ைபசா </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The speaker makes no mention of rupees, this refers only
                    to paise so transcribe the number as digits followed by the
                    word "ைபசா".
                  </span>
                </p>
                <p className={styles.block_551}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நான ெபட </span>
                </p>
                <p className={styles.block_553}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ₹4 இலடசம </span>
                </p>
                <p className={styles.block_554}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Even though "ெபட " is slang for lakhs in Tamil, transcribe
                    it as the word "ெபட " and write out the number "4" as "நான
                    ". Don't transcribe using the rupee sign.
                  </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 300 ேரா </span>
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: €300 </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ன ேரா </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : " ேரா" refers to a foreign currency. Transcribe the
                    numbers as digits "300" and write out the word " ேரா". Don't
                    use the euro symbol.
                  </span>
                </p>
                <p className={styles.block_558}>
                  When a speaker uses a currency name without specifying a
                  quantity, spell it out.
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: டாலர ம பைப ஒப ைக ல </span>
                </p>
                <p className={styles.block_560}>பாய</p>
                <p className={styles.block_232}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The speaker is referring to the rupee and dollar in
                    general with no specific amounts, so write out the words
                    "டாலர" and " பாய".
                  </span>
                </p>
                <p className={styles.block_561}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_562}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ன தல ஐந ஆ ரம பாய </span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 3 தல 5,000 பாய </span>
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The speaker refers to a range of dollars that could be
                    interpreted as "3 தல 5,000" or "3,000
                  </span>
                </p>
                <p className={styles.block_565}>
                  தல 5,000" so write out the numbers as " ன தல ஐந " followed by
                  "ஆ ரம பாய" written out.
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: 3,000 தல 5,000 பாய </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>வா ரத தல ஐயா ரம </span>
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_5}>பாய </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_568}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The exact amount of the range of dollars is definitely
                    "3,000 தல 5,000" so transcribe the
                  </span>
                </p>
                <p className={styles.block_569}>
                  numbers using digits followed by the word " பாய" written out.
                </p>
                <p className={styles.block_570}>
                  Keep units of measurement in English. Do not transliterate.
                </p>
                <p className={styles.block_571}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: MB </span>
                </p>
                <p className={styles.block_572}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ெமகாைபட </span>
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Please use the abbreviation "MB" instead of writing out
                    the whole word.
                  </span>
                </p>
                <p className={styles.block_574}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: km </span>
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ேலா டடரகள </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Please use the abbreviation "km" instead of writing out
                    the whole word.
                  </span>
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: cm2 </span>
                </p>
                <p className={styles.block_578}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ச ர ெசன டடரகள </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Please use the abbreviation "cm2" instead of writing out
                    the whole word.
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: g </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ராம </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Please use the abbreviation "g" instead of writing out the
                    whole word.
                  </span>
                </p>
                <p className={styles.block_583}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>MB </span>
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>KB </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>GB </span>
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_18}>TB </span>
                  <span className={styles.text_21}>
                    <sub className={styles.calibre2}>
                      Common measurements of distance and rate
                    </sub>
                  </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>in </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>ft </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>yd </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>mi </span>
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>mm </span>
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>cm </span>
                </p>
                <p className={styles.block_593}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>m </span>
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>km </span>
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>mph </span>
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>km/h </span>
                </p>
                <p className={styles.block_596}>Common measurements of area</p>
                <p className={styles.block_597}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>km2 </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>in2 </span>
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>ft2 </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>mi2 </span>
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>cm2 </span>
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>m2 </span>
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>km2 </span>
                </p>
                <p className={styles.block_600}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_601}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>g </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>mg </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>kg </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>L </span>
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>m3 </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>in3 </span>
                </p>
                <p className={styles.block_602}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_603}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ெவளி ல ளி 20° C. </span>
                </p>
                <p className={styles.block_604}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : ெவளி ல ளி 20 ரி ெசல யஸ.{' '}
                  </span>
                </p>
                <p className={styles.block_605}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ெவளி ல ளி இ ப </span>
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_5}>ரி ெசல யஸ </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The speaker explicitly says "ெசல யஸ" here so use the
                    symbol for celsius "C" after the degree symbol.
                  </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ெவளி ல ளி 20 C. </span>
                </p>
                <p className={styles.block_609}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ெவளி ல ளி 20° C. </span>
                </p>
                <p className={styles.block_605}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ெவளி ல ளி இ ப ெசல யஸ </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_610}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : If the speaker refers to the temperature in degrees, but
                    does not actually say the word "degrees", do not transcribe
                    the word or the degree symbol.
                  </span>
                </p>
                <p className={styles.block_611}>
                  Abbreviate all units of measurement that are after numbers.
                </p>
                <p className={styles.block_612}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : அவள 10 L ஆரஞ ஜ ஸ வாங னாள.{' '}
                  </span>
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அவள 10 டடர ஆரஞ ஜ ஸ வாங னாள.{' '}
                  </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    அவள பத டடர ஆரஞ ஜ ஸ வாங னாள{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Since " டடர" appears after the number 10, it is
                    abbreviated as "L" with a space between "10" and "L".
                  </span>
                </p>
                <p className={styles.block_615}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 2 kg </span>
                </p>
                <p className={styles.block_617}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: இரண kg </span>
                </p>
                <p className={styles.block_618}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>இரண ேலா ராம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_619}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Even though 2 is less than 10, it should not be written
                    out as "இரண " here since it comes before a unit of
                    measurement " ேலா ராம".
                  </span>
                </p>
                <p className={styles.block_620}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: 6 மாதஙகள </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>ஆ மாதஙகள </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_621}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Even though 6 is less than 10, it should not be written
                    out as "ஆ " since it comes before a unit of time "மாதஙகள".
                  </span>
                </p>
                <p className={styles.block_622}>
                  For lengths, widths, and heights: use "x" instead of any
                  preposition.
                </p>
                <p className={styles.block_623}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>
                    : பயணபெபட 20x20x40 ஆ ம{' '}
                  </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>பயணபெபட இ ப ஆல </span>
                </p>
                <p className={styles.block_624}>
                  <span className={styles.text_5}>இ ப ஆல நாறப ஆ ம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : பயணபெபட 20 ஆல 20 ஆல 40 ஆ ம{' '}
                  </span>
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The numbers here are referring to the length, width, and
                    height of a luggage, transcribe it with "x" in between the
                    numbers (no spaces).
                  </span>
                </p>
                <p className={styles.block_627}>
                  If a speaker says a number without saying " றபகல" or " றபகல",
                  format it as time if it is obvious that the number refers to a
                  time.
                </p>
                <p className={styles.block_628}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : 5:30 மணிக அலாரம ைவகக ம.{' '}
                  </span>
                </p>
                <p className={styles.block_629}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : 530 மணிக அலாரம ைவகக ம.{' '}
                  </span>
                </p>
                <p className={styles.block_630}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ஐந பப மணிக அலாரம ைவ </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_631}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Although the speaker did not say " றபகல" or " றபகல", it is
                    obvious that the speaker is referring to a time. Therefore,
                    "ஐந
                  </span>
                </p>
                <p className={styles.block_632}>
                  பப மணிக " is transcribed using time format: with a ":" in
                  between "5" and "30".
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  When transcribing dates, write out the full name of the month
                  followed by the date in numeral form followed by a comma, then
                  the year in numeral form.
                </p>
                <p className={styles.block_635}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ஜனவரி 10, 2016 </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ஜனவரி 10-ஆம, 2016 </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    ஜனவரி பததாம இரண ஆ ரம ப னா{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_637}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The month "ஜனவரி" should be spelled out. The date "10" and
                    the year "2016" are written with numerals with a comma after
                    the date.
                  </span>
                </p>
                <p className={styles.block_638}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ஞா , நவமபர 24-ம </span>
                </p>
                <p className={styles.block_639}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ஞா நவமபர 24-ம </span>
                </p>
                <p className={styles.block_640}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ஞா நவமபர இ ப நானகாம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_641}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : There should be a comma between "ஞா " and the month
                    "நவமபர".
                  </span>
                </p>
                <p className={styles.block_642}>
                  If the speaker refers to a decade without specifying the
                  century, transcribe it as words.
                </p>
                <p className={styles.block_643}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: எணப களின இைச </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>எணப களின இைச </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Here, the word "எணப களின" is referring to a decade so the
                    numbers are transcribed as words.
                  </span>
                </p>
                <p className={styles.block_645}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe it as numerals with the proper punctuation
                  separating the month, date, and year.
                </p>
                <p className={styles.block_646}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: 12/7/2010 </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>பனனிரண சாயேகா ஏ </span>
                </p>
                <p className={styles.block_647}>
                  <span className={styles.text_5}>சாயேகா இரணடா ரத பத </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_648}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The speaker is saying the date aloud so transcribe the
                    numbers as numerals and the "சாயேகா " as the symbol "/".
                  </span>
                </p>
                <p className={styles.block_649}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 1995/3/2 </span>
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 1995 மாரச 2 </span>
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    ஓரா ரத ெதாளளா ரத ெதாண ற ஐந மாரச இரண{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_652}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.
                </p>
                <p className={styles.block_653}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : அலாரதைத 4:00 மணிக ைவகக ம.{' '}
                  </span>
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அலாரதைத 4 மணிக ைவகக ம.{' '}
                  </span>
                </p>
                <p className={styles.block_655}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    நான மணிக அலாரதைத ைவகக ம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_656}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The speaker says "மணிக " so the number is referring to
                    time and should be transcribed as "4:00"
                  </span>
                </p>
                <p className={styles.block_657}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: 1:50 </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>ஒன ஐமப </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: 8:10 </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>எட மணி பத நி ஷம </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: 1:15 </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>ஒனேறகால </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : When referring to time, "கால" is equal to 15 minutes so
                    transcribe "ஒனேறகால" as 1:15.
                  </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: 1:50 </span>
                </p>
                <p className={styles.block_662}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: 10 ஆக 2:00 </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>பத ஆக இரண நி டஙகள </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_664}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Do not transcribe "பத ஆக இரண நி டஙகள" using only words if
                    it refers to the time, use the hh:mm format. Here, "பத ஆக
                    இரண நி டஙகள" is equal to "1:50".
                  </span>
                </p>
                <p className={styles.block_665}>
                  Only write out time words like " றபகல", "காைல", and " றபகல" if
                  spoken. Put one space between the time and the word. Do not
                  use the abbreviations " .ப" and " .ப".
                </p>
                <p className={styles.block_666}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: றபகல 11:00 மணி </span>
                </p>
                <p className={styles.block_667}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: .ப 11 மணி </span>
                </p>
                <p className={styles.block_668}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>றபகல ப ெனா மணி </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_669}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Write out the full word " றபகல", and include a space
                    between "11:00" and " றபகல".
                  </span>
                </p>
                <p className={styles.block_670}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: 3:00 மணி </span>
                </p>
                <p className={styles.block_671}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: றபகல 3:00 மணி </span>
                </p>
                <p className={styles.block_672}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ன மணி </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_673}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The speaker did not say " றபகல". Do not transcribe the
                    time word if the speaker did not say it in the audio.
                  </span>
                </p>
                <p className={styles.block_674}>
                  For "நணபகல" and "நளளிர ", use the written form.
                </p>
                <p className={styles.block_675}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நணபகல </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: றபகல 12:00 </span>
                </p>
                <p className={styles.block_677}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Even though "நணபகல" means the same thing as " றபகல 12:00"
                    write it out in words.
                  </span>
                </p>
                <p className={styles.block_678}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நளளிர </span>
                </p>
                <p className={styles.block_679}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: றபகல 12:00 </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Write out the full names of locations, roads, states, etc.
                  Only use abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_682}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_683}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: ராஜ , ேகாைவ </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_24}>
                    : The entity "ராஜ " that the speaker{' '}
                  </span>
                </p>
                <p className={styles.block_684}>
                  is referring to is located on ேகாைவ, so a comma is used in
                  between the two.
                </p>
                <p className={styles.block_685}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: வங , 600001 </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_24}>
                    : The speaker is looking for banks within the zip code
                    600001, so there is a comma in between the entity, "வங " and
                    the location, "600001" .
                  </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ெகாேரானஷன பாரக, ெடல </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_689}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: www.google.co.in </span>
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : ட ள ட ள ட ள {`{ளளி}`}{' '}
                  </span>
                </p>
                <p className={styles.block_691}>{` ள {ளளி} ஒ {ளளி} ஐ என`}</p>
                <p className={styles.block_692}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ட ள ட ள ட ள ளளி </span>
                </p>
                <p className={styles.block_693}>
                  <span className={styles.text_5}>ள ளளி ஒ ளளி ஐ என </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_694}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Although the speaker said " ளளி" aloud, these are symbols
                    that are associated with URLs and should be transcribed as
                    "." and not spelled out in curly brackets.
                  </span>
                </p>
                <p className={styles.block_695}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: http://123.com </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>மணி ப ககால ளளி </span>
                </p>
                <p className={styles.block_696}>
                  <span className={styles.text_5}>
                    னசாயேகா னசாயேகா ஒன இரண ன ளளி காம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>: The "மணி ப ககால ளளி </span>
                </p>
                <p className={styles.block_698}>
                  னசாயேகா னசாயேகா " is part of the web URL format and should be
                  written using punctuation symbols "http://".
                </p>
                <p className={styles.block_699}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: mike@example.org </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>ைமக அட எகசாம ல ளளி </span>
                </p>
                <p className={styles.block_700}>
                  <span className={styles.text_5}>ஆரக </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_701}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Email and other account names that have "அட" before the
                    website name should be transcribed with the "@" symbol.
                  </span>
                </p>
                <p className={styles.block_702}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: எனக டசா க ம. #ப </span>
                </p>
                <p className={styles.block_703}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: எனக டசா க ம #ப </span>
                </p>
                <p className={styles.block_704}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>எனக டசா க ம ேஹஷேடக ப </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_705}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The pound symbol "#" is used to transcribe "ேஹஷேடக". A
                    period is included between " க ம" and "#ப " because "#ப " is
                    not considered part of the preceding sentence.
                  </span>
                </p>
                <p className={styles.block_706}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: #ப எனக ஸஸா ேவண ம. </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ேஹஷேடக ப எனக </span>
                </p>
                <p className={styles.block_708}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: #ப . எனக ஸஸா ேவண ம. </span>
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_5}>ஸஸா ேவண ம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : There shouldn't be punctuation between "#ப " and "எனக "
                    even if it's at the beginning of the sentence.
                  </span>
                </p>
                <p className={styles.block_711}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "சாயேகா ".
                </p>
                <p className={styles.block_712}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: http:\yahoo.com </span>
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: http://yahoo.com </span>
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " h t t p </span>
                  <span className={styles.text_5}>ககால ளளி </span>
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_5}>
                    னசாயேகா னசாயேகா யா ளளி காம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_716}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Even though the correct format should have the forward
                    slash "சாயேகா ", the speaker says " னசாயேகா " here so
                    transcribe it using the backslash symbol "\".
                  </span>
                </p>
                <p className={styles.block_717}>
                  If the speaker drops a "ட ல " or " ளளி" and it's an obvious
                  URL, you should correct these errors. If the speaker doesn't
                  say the "ட ல " at all, do not add them.
                </p>
                <p className={styles.block_718}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: www.google.co.in </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: ww google.co.in </span>
                </p>
                <p className={styles.block_720}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    ட ல ட ல ள ளளி ேகா ளளி இன{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_721}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The speaker doesn't say the " ளளி" before " ள" and only
                    says two "ட ல " so add
                  </span>
                </p>
                <p className={styles.block_722}>
                  the missing dot and missing "ட ல " when transcribing.
                </p>
                <p className={styles.block_723}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_724}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: www.gmail.com </span>
                </p>
                <p className={styles.block_725}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: www.g m a i l.c o m </span>
                </p>
                <p className={styles.block_726}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ட ல ட ல ட ல ளளி </span>
                </p>
                <p className={styles.block_727}>
                  <span className={styles.text_5}>ராம ஒ நான எல ளளி இ ஓ </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_728}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Although the speaker spells out "gmail", write the URL all
                    together without spaces "www.gmail.com".
                  </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not transcribe abbreviated forms of words unless the
                  speaker says an abbreviated form.
                </p>
                <p className={styles.block_731}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ெசனைன பபர ஙஸ எ ராக ராயல ேசலஞசரஸ{' '}
                  </span>
                </p>
                <p className={styles.block_732}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : ெசனைன பபர ஙஸ எ ர ராயல ேசலஞசரஸ{' '}
                  </span>
                </p>
                <p className={styles.block_733}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    ெசனைன பபர ஙஸ எ ராக ராயல ேசலஞசரஸ{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_734}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Even though "எ ராக" can be abbreviated as "எ ர", the
                    speaker used the full word so it is transcribed as "எ ராக".
                  </span>
                </p>
                <p className={styles.block_735}>
                  Abbreviate titles for people only when they precede proper
                  names.
                </p>
                <p className={styles.block_736}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : எனக ைனவர. ராமசா ையத ெதரி ம.{' '}
                  </span>
                </p>
                <p className={styles.block_737}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : எனக ம த வர ராமசா ையத ெதரி ம.{' '}
                  </span>
                </p>
                <p className={styles.block_738}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    எனக ம த வர ராமசா ையத ெதரி ம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_739}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Here, the word "ம த வர" comes before the name "ராமசா ையத"
                    so it is abbreviated as " ைனவர."
                  </span>
                </p>
                <p className={styles.block_740}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: அவர ேபரா. க ணாகரன. </span>
                </p>
                <p className={styles.block_741}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அவர ேபரா ரியர க ணாகரன.{' '}
                  </span>
                </p>
                <p className={styles.block_742}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "ேபரா ரியர" precedes the name "க ணாகரன", so transcribe it
                    as "ேபரா.".
                  </span>
                </p>
                <p className={styles.block_743}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: இ என ேபரா ரியர. </span>
                </p>
                <p className={styles.block_744}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: இ என ேபரா.. </span>
                </p>
                <p className={styles.block_742}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "ேபரா ரியர" does not precede a name, so it is written out.
                  </span>
                </p>
                <p className={styles.block_745}>
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
