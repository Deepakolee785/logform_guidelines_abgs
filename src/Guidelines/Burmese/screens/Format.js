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
            <PageContentHeader currentPage="longform Burmese" />
            <div className="content text">
              <p className={'heading'}>Format </p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.{' '}
              </p>
              <div id="number">
                <p className={'heading'}>Number </p>
                <p className={'text'}>
                  Use Burmese numerals and not Arabic numerals.{' '}
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>၁ ၂ ၃ ၄ ၅ </span>
                </p>
                <p className={styles.block_467}>Incorrect: 1 2 3 4 5 </p>
                <p className={styles.block_468}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>တစ စ သ လ င </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={'text'}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10. Transcribe all
                  decimal numbers as digits.{' '}
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>
                    အတန ထ မ က င သ က ယ က ရ တယ ။{' '}
                  </span>
                  <span className={styles.text_15}>
                    Explanation: Numbers less than 10 are written{' '}
                  </span>
                </p>
                <p className={styles.block_471}>with letters. </p>
                <p className={styles.block_472}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>
                    အတန ထ မ က င သ ၁၅ ယ က ရ တယ ။{' '}
                  </span>
                  <span className={styles.text_15}>
                    Explanation: Numbers 10 or above are written{' '}
                  </span>
                </p>
                <p className={styles.block_473}>as numbers. </p>
                <p className={styles.block_474}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    သ တမ ခ စ က င န တပည ၁၅ ယ က{' '}
                  </span>
                </p>
                <p className={styles.block_475}>ရ တယ ။ </p>
                <p className={styles.block_476}>
                  Explanation: Follow this rule even if the noun{' '}
                </p>
                <p className={styles.block_477}>
                  phrases with numbers are coordinated.{' '}
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>၆</span>
                  <span className={styles.text_4}>.</span>
                  <span className={styles.text_5}>၀၁ </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ခ က ဒသမ သ ညတစ </span>
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ခ က ဒသမ သ ညတစ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_481}>
                  Explanation: decimal numbers{' '}
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>က င သ ၂၀ ယ က ရ တယ ။ </span>
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>က င သ စ ဆယ ယ က ရ တယ ။ </span>
                </p>
                <p className={styles.block_484}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>က င သ အ ယ က စ ဆယ ရ တယ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_485}>
                  Explanation: In the case of tens numbers, even{' '}
                </p>
                <p className={styles.block_486}>
                  if the number is spoken after the unit,{' '}
                </p>
                <p className={styles.block_487}>
                  transcribe the number in numerals followed by{' '}
                </p>
                <p className={styles.block_488}>the unit. </p>
                <p className={styles.block_489}>
                  <span className={styles.text_4}>
                    If a large number consists of only a number followed by "
                  </span>
                  <span className={styles.text_5}>သန </span>
                  <span className={styles.text_4}>", "</span>
                  <span className={styles.text_5}>မ လ ယ </span>
                  <span className={styles.text_4}>", "</span>
                  <span className={styles.text_5}>ဘ လ ယ </span>
                  <span className={styles.text_4}>", "</span>
                  <span className={styles.text_5}>ထရ လ ယ </span>
                  <span className={styles.text_4}>
                    ", or higher, then transcribe as a numeral plus word.
                    Otherwise, transcribe as numerals.{' '}
                  </span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>ဘ ငန က င ရ ၅ သန </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဘ ငန က င ရ င သန </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>ဘ ငန က င ရ ၁ ထ င </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဘ ငန က င ရ တစ ထ င </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>ဘ ငန က င ရ ၁၀၀၀ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဘ ငန က င ရ တစ ထ င </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_18}>Correct: $ </span>
                  <span className={styles.text_19}>၁</span>
                  <span className={styles.text_18}>.</span>
                  <span className={styles.text_19}>၅ ဘ လ ယ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဒ လ တစ ဒသမင ဘ လ ယ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_4}>
                    Explanation: For mixed numbers before "
                  </span>
                  <span className={styles.text_5}>သန </span>
                  <span className={styles.text_4}>", </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_4}>"</span>
                  <span className={styles.text_5}>မ လ ယ </span>
                  <span className={styles.text_4}>", etc., use decimals. </span>
                </p>
                <p className={styles.block_495}>
                  Write lists of numbers with digits and without commas.{' '}
                </p>
                <p className={styles.block_496}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>၀ ၁ ၂ ၃ ၅ ၇ ၁၁ ၁၃ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>
                    သ ည တစ စ သ င ခ န ဆယ တစ{' '}
                  </span>
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_7}>ဆယ သ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_498}>
                  Explanation: list of numbers, no comma if just{' '}
                </p>
                <p className={styles.block_499}>counting </p>
                <p className={styles.block_500}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>၁ ၂ ၃ ပ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>တစ စ သ ပ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_498}>
                  Explanation: list of numbers, no comma if just{' '}
                </p>
                <p className={styles.block_499}>counting </p>
                <p className={styles.block_501}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>၂ ၄ ၆ ၈ ၁၀ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>စ လ ခ က ရ စ ဆယ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_502}>
                  Explanation: If counting, write them with a{' '}
                </p>
                <p className={styles.block_503}>
                  space in between, not a comma.{' '}
                </p>
                <p className={styles.block_504}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.{' '}
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>သ က ၁</span>
                  <span className={styles.text_4}>/</span>
                  <span className={styles.text_5}>၃ ပ လ မယ ။ </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>သ က ၃ ပ ၁ ပ ပ လ မယ ။ </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>သ က သ ပ တစ ပ ပ လ မယ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_508}>
                  <span className={styles.text_4}>
                    Explanation: Here, the "-{' '}
                  </span>
                  <span className={styles.text_5}>ပ </span>
                  <span className={styles.text_4}>- </span>
                  <span className={styles.text_5}>ပ </span>
                  <span className={styles.text_4}>" is part of the </span>
                </p>
                <p className={styles.block_509}>
                  fraction, so don't include it in the transcription.{' '}
                </p>
                <p className={styles.block_510}>
                  Also, avoid including spaces or pre-combined{' '}
                </p>
                <p className={styles.block_511}>fraction characters. </p>
                <p className={styles.block_512}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ရ ၃</span>
                  <span className={styles.text_4}>:</span>
                  <span className={styles.text_5}>၁ ရ ပ ။ </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ရ သ ခ တစ ခ ရ ပ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ရ ၃ ခ ၁ ခ ရ ပ ။ </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_4}>
                    Explanation: Here, the " -{' '}
                  </span>
                  <span className={styles.text_5}>ခ </span>
                  <span className={styles.text_4}>- </span>
                  <span className={styles.text_5}>ခ </span>
                  <span className={styles.text_4}>" describe </span>
                </p>
                <p className={styles.block_516}>
                  ratio, so use ":" in between to indicate the{' '}
                </p>
                <p className={styles.block_517}>expression. </p>
                <p className={styles.block_518}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>၈ ၁</span>
                  <span className={styles.text_4}>/</span>
                  <span className={styles.text_5}>၂ မ င က လ ခ ပ ။ </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>၈ မ င ခ က လ ခ ပ ။ </span>
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ရ စ မ င ခ က လ ခ ပ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>က န တ တ ၁</span>
                  <span className={styles.text_18}>/</span>
                  <span className={styles.text_19}>၂ လက မ သစ ပ လ မယ ။ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>က န တ တ လက မဝက သစ ပ </span>
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_7}>လ မယ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_4}>
                    Explanation: Given the context, "
                  </span>
                  <span className={styles.text_5}>ဝက </span>
                  <span className={styles.text_4}>" is a </span>
                </p>
                <p className={styles.block_524}>
                  fraction, so transcribe it using numerals and{' '}
                </p>
                <p className={styles.block_525}>
                  slashes. Also, be careful not to include spaces{' '}
                </p>
                <p className={styles.block_526}>
                  or pre-combined fraction characters.{' '}
                </p>
                <p className={styles.block_527}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.{' '}
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>လ တ င မ </span>
                  <span className={styles.text_18}>Kyat </span>
                  <span className={styles.text_19}>၂</span>
                  <span className={styles.text_18}>.</span>
                  <span className={styles.text_19}>၅ ရ တယ ။ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>လ တ င မ စ က ပ ခ ရ တယ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>အ မ ဝယ တ န က </span>
                  <span className={styles.text_18}>Kyat </span>
                  <span className={styles.text_19}>၅</span>
                  <span className={styles.text_18}>.</span>
                  <span className={styles.text_19}>၅ သန ပ ခ ရတ ။ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>
                    အ မ ဝယ တ န က င သန ခ ပ ခ ရတ{' '}
                  </span>
                </p>
                <p className={styles.block_530}>" </p>
                <p className={styles.block_531}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.){' '}
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>၂</span>
                  <span className={styles.text_4}>% </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>၁ မ လ ယ ရ ခ င န </span>
                </p>
                <p className={styles.block_534}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.{' '}
                </p>
                <p className={styles.block_535}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.{' '}
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>၀၁</span>
                  <span className={styles.text_18}>-</span>
                  <span className={styles.text_19}>၂၀၂၈၁၈ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>
                    သ ည တစ စ သ ည စ ရ စ တစ ရ စ{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_537}>
                  Explanation: landline number with leading "0"{' '}
                </p>
                <p className={styles.block_538}>and one-digit area code </p>
                <p className={styles.block_539}>
                  <span className={styles.text_18}>Correct: +</span>
                  <span className={styles.text_19}>၉၅ ၁ ၂၉၁၅၉၄ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>အ ပ င က င တစ စ က တစ င </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_7}>က လ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_541}>
                  Explanation: landline number with country code{' '}
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>၀၉ ၂၀၀ ၅၄၃ လ င ခ ၁၂ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>သ ည က စ ရ င လ သ လ င ခ </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_7}>ဆယ စ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_18}>Correct: +</span>
                  <span className={styles.text_19}>၉၅ ၉၄၂ ၁၁၁ ၆၆၆၆ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>အ ပ င က င က လ စ </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_7}>တစ သ လ ခ က လ လ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_545}>
                  Explanation: mobile phone number with country{' '}
                </p>
                <p className={styles.block_546}>code </p>
                <p className={styles.block_529}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>၀၆ ၂၀ ၂၅ ၉၀၀ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>
                    သ ည ခြ က စ ဆယ အစ တ က ရ{' '}
                  </span>
                </p>
                <p className={styles.block_547}>" </p>
                <p className={styles.block_548}>
                  <span className={styles.text_18}>Correct: +</span>
                  <span className={styles.text_19}>၆၅ ၈၃၇၇ ၂၆၅၅ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>အ ပ င ရ စ သ ခ န ခ န </span>
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_7}>စ ခ က င င </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_550}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.{' '}
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>၅ </span>
                  <span className={styles.text_4}>/ </span>
                  <span className={styles.text_5}>၆ </span>
                  <span className={styles.text_4}>^ </span>
                  <span className={styles.text_5}>၃ </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>င အစ ခ က ထပ န က န သ </span>
                </p>
                <p className={styles.block_553}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>င အစ ခ က သ ထပ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_554}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>၅ </span>
                  <span className={styles.text_18}>* </span>
                  <span className={styles.text_19}>၆ ဆ ဘယ လ က လ ။ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>င အ မ က ခ က ဆ </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_7}>ဘယ လ က လ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_21}>Correct: √</span>
                  <span className={styles.text_19}>၂၅ မ ၅ ဖစ သည </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>
                    စ ဆယ င ၏ စ ထပ က န ရင မ{' '}
                  </span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_7}>င ဖစ သည </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_558}>
                  <span className={styles.text_18}>Correct: Kyat </span>
                  <span className={styles.text_19}>၈ </span>
                  <span className={styles.text_18}>* </span>
                  <span className={styles.text_19}>၅ န ရ ဆ ဘယ လ က လ ။ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>
                    ရ စ က ပ န င န ရ ဆ ဘယ လ က လ{' '}
                  </span>
                </p>
                <p className={styles.block_547}>" </p>
                <p className={styles.block_559}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ခ သ က င န က င စ က င က </span>
                </p>
                <p className={styles.block_560}>ပ င ထ တယ ။ </p>
                <p className={styles.block_561}>
                  Explanation: Does not sound like a true math{' '}
                </p>
                <p className={styles.block_562}>
                  expression with useful units.{' '}
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit </p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.{' '}
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_4}>Correct: Kyat </span>
                  <span className={styles.text_5}>င ခ က န ခ တယ ။ </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>က ပ ၅၀၀၀၀ က န ခ တယ ။ </span>
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>က ပ င ခ က န ခ တယ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_568}>
                  <span className={styles.text_18}>Correct: £ </span>
                  <span className={styles.text_19}>၂၀ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ပ င စ ဆယ က ယ အက စ ဒ လ </span>
                </p>
                <p className={styles.block_569}>
                  <span className={styles.text_7}>ဘယ လ က လ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_570}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>၂၀၀ ယန </span>
                </p>
                <p className={styles.block_571}>
                  <span className={styles.text_4}>Incorrect: ¥</span>
                  <span className={styles.text_5}>၂၀၀ </span>
                </p>
                <p className={styles.block_572}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ယန စ ရ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_18}>Correct: $ </span>
                  <span className={styles.text_19}>၁၀ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဆယ ဒ လ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_574}>
                  For degrees, use the ° symbol.{' '}
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>အပ ခ န ၃၁</span>
                  <span className={styles.text_4}>° </span>
                  <span className={styles.text_5}>စင တ ဂရ တ </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>အ ရ ၉၇</span>
                  <span className={styles.text_4}>°</span>
                  <span className={styles.text_5}>၃၀</span>
                  <span className={styles.text_4}>' </span>
                  <span className={styles.text_5}>လ င ဂ က ဟ </span>
                </p>
                <p className={styles.block_577}>မန မ စ တ ခ န မ ပ ။ </p>
                <p className={styles.block_578}>
                  <span className={styles.text_17}>Example </span>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>
                    ပ တ အ မ ရခ မ တ အ က အ တ င ရ တယ ။{' '}
                  </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_8}>audio: " </span>
                  <span className={styles.text_20}>
                    ပ တ အ မ ရခ မ တ အ က အ တ င ရ တယ{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                  <span className={styles.text_22}>Incorrect: </span>
                  <span className={styles.text_23}>ပ တ အ မ ရခ မ တ အ က </span>
                  <span className={styles.text_22}>-</span>
                  <span className={styles.text_23}>၅ ရ တယ ။ </span>
                </p>
                <p className={styles.block_580}>
                  For all the units that follow numeric values, please use full
                  Burmese words.{' '}
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>
                    အ မ မ ၂ လ တ ပ လင ရ တယ ။{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>အ မ မ စ လ တ ပ လင ရ တယ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_580}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.{' '}
                </p>
                <p className={styles.block_580}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.{' '}
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>မနက ၅</span>
                  <span className={styles.text_4}>:</span>
                  <span className={styles.text_5}>၃၀ စက ပ ထ ပ ။ </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>မနက ၅ ခ စက ပ ထ ပ ။ </span>
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>မနက င ခ စက ပ ထ ပ </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time </p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.{' '}
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>
                    ဇ လ င ၁၂ ရက ၊ ၁၉၆၄ ခ စ{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဇ လ င လ တစ စ ရက </span>
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_7}>ထ င က ရ ခ က ဆယ လ ခ စ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>၇၈ ခ စ ရ သ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ခ နစ ဆယ ရ စ ခ စ ရ သ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>၈၀ ဝန က င သ ခ င မ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ရ စ ဆယ ဝန က င သ ခ င မ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>ဗ ဒ ဟ န ၊ မတ လ ၆ ရက </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဗ ဒ ဟ န မတ လ ခြ က ရက </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_24}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                  <span className={styles.text_25}>
                    <sub className={styles.calibre2}>Correct: </sub>
                  </span>
                  <span className={styles.text_26}>
                    <sub className={styles.calibre2}>၃</sub>
                  </span>
                  <span className={styles.text_25}>
                    <sub className={styles.calibre2}>:</sub>
                  </span>
                  <span className={styles.text_26}>
                    <sub className={styles.calibre2}>၀၀ န ရ </sub>
                  </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>၃ န ရ </span>
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>သ န ရ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_4}>
                    Explanation: Use the pattern{' '}
                  </span>
                  <span className={styles.text_5}>၁၂</span>
                  <span className={styles.text_4}>:</span>
                  <span className={styles.text_5}>၀၀ </span>
                  <span className={styles.text_4}>to describe </span>
                </p>
                <p className={styles.block_586}>time. </p>
                <p className={styles.block_581}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>စက က ၄</span>
                  <span className={styles.text_18}>:</span>
                  <span className={styles.text_19}>၀၀ န ရ ထ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>စက က လ န ရ ထ </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>၄</span>
                  <span className={styles.text_18}>:</span>
                  <span className={styles.text_19}>၄၅ န ရ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>င န ရ မတ တင </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>၆</span>
                  <span className={styles.text_4}>:</span>
                  <span className={styles.text_5}>၃၀ အ ရ က ပန လ မယ ။ </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>
                    ၆ န ရ ၃၀ မ နစ အ ရ က ပန လ မယ ။{' '}
                  </span>
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ခ က ခ အမ ပန လ မယ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_4}>Use "</span>
                  <span className={styles.text_5}>န နက ၊</span>
                  <span className={styles.text_4}>", " </span>
                  <span className={styles.text_5}>န လည ၊</span>
                  <span className={styles.text_4}>", "</span>
                  <span className={styles.text_5}>ည န၊</span>
                  <span className={styles.text_4}>", or "</span>
                  <span className={styles.text_5}>ည၊</span>
                  <span className={styles.text_4}>" if spoken. </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>န လည ၁၂</span>
                  <span className={styles.text_18}>:</span>
                  <span className={styles.text_19}>၀၀ န ရ တ တ လ ခ မယ ။ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>
                    န လည ဆယ စ န ရ တ တ လ ခ မယ{' '}
                  </span>
                </p>
                <p className={styles.block_588}>" </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address </p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.{' '}
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_4}>Use the section sign "</span>
                  <span className={styles.text_5}>ပ ဒ က လ </span>
                  <span className={styles.text_4}>" for ENTITY</span>
                  <span className={styles.text_5}>၊ </span>
                  <span className={styles.text_4}>LOCATION </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ဝ င က ကအ ၊ က က တ တ </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ရ က င ကယ ၊ ၅၁ လမ </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>အ မ အမ တ ၃၁၊ ၄၉ လမ </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>၅၃</span>
                  <span className={styles.text_4}>(</span>
                  <span className={styles.text_5}>ခ</span>
                  <span className={styles.text_4}>)</span>
                  <span className={styles.text_5}>
                    ၊ ရ တ င က လမ ၊ ဗဟန မ နယ{' '}
                  </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    ဝဇ ရ ၊ မ လ အတ က ပ ရ င ပခ န မ{' '}
                  </span>
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    မ င အ က ဖ ၊ ဗ လ မတ ထ န လမ င{' '}
                  </span>
                </p>
                <p className={styles.block_592}>ရ က လမ ထ င </p>
                <p className={styles.block_593}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ရန က န မ တ ခန မ၊ မ လ မ </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web </p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.{' '}
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_18}>
                    Correct: www.google.com.mm{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဒဘလ သ လ ဒ ဂ ဂ ဒ က န ဒ </span>
                </p>
                <p className={styles.block_597}>
                  <span className={styles.text_7}>အမ အမ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_18}>Correct: amazon.com </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>အ မဇ န ဒ က န </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_18}>
                    Correct: koeimaung@gmail.com{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>က အ မ င အက ဂ မ ဒ က န </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_600}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>သမ တအသစ </span>
                  <span className={styles.text_18}>#</span>
                  <span className={styles.text_19}>ဦ ထင က </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>သမ တအသစ ဟက ရ တက </span>
                </p>
                <p className={styles.block_601}>
                  <span className={styles.text_7}>ဦ ထင က </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_602}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.{' '}
                </p>
                <p className={styles.block_603}>
                  <span className={styles.text_18}>
                    Correct: www.google.com.mm{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဒဘလ ဒဘလ ဒ ဂ ဂ ဒ က န </span>
                </p>
                <p className={styles.block_604}>
                  <span className={styles.text_7}>ဒ အမ အမ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_605}>
                  <span className={styles.text_18}>
                    Correct: www.google.com.mm{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဒဘလ သ လ ဒ ဂ ဂ ဒ က န ဒ </span>
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_7}>မန မ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_18}>Correct: www.bbc.com </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဒဘလ သ လ ဘ ဘ စ ဒ က န </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_18}>
                    Correct: www.youtube.com{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>ဒဘလ သ လ ဒ ယ တ ဒ က န </span>
                  <span className={styles.text_8}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation </p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.{' '}
                </p>
                <p className={styles.block_610}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>မက န သ သ မဟ တ က က တ </span>
                </p>
                <p className={styles.block_611}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>မက န သ </span>
                  <span className={styles.text_4}>(</span>
                  <span className={styles.text_5}>သ </span>
                  <span className={styles.text_4}>) </span>
                  <span className={styles.text_5}>က က တ </span>
                </p>
                <p className={styles.block_612}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>မက န သ သ က က တ </span>
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>မက န သ သ မဟ တ က က တ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>မရ ပ ည ဟ တယ ၊ မန ။ </span>
                </p>
                <p className={styles.block_615}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>မရ ပ ည ဟ တယ ၊ မ လ ။ </span>
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>မရ ပ ည ဟ တယ မန </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_617}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>စ ပ က သန ဝန က ဌ န </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>စ ပ ရ င က သန ရ င ဝယ ရ </span>
                </p>
                <p className={styles.block_618}>ဝန က ဌ န </p>
                <p className={styles.block_619}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>စ ပ က သန ဝန က ဌ န </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_620}>
                  Capitalize and abbreviate English titles when accompanied by
                  proper English names.{' '}
                </p>
                <p className={styles.block_621}>Correct: Dr. Schuster </p>
                <p className={styles.block_622}>
                  In Burmese, transcribe titles as spoken.{' '}
                </p>
                <p className={styles.block_623}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ပ ရ ဖက ဆ ဒ န လ သ န </span>
                </p>
                <p className={styles.block_624}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>
                    ဒ န လ သ န ဟ ပ ရ ဖက ဆ ဖစ ပ တယ ။{' '}
                  </span>
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ဒ န မ </span>
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ဒ တ ယ န က ရ မ </span>
                </p>
                <p className={styles.block_627}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ဒ န မ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_628}>
                  Explanation: A job title is abbreviated. Just{' '}
                </p>
                <p className={styles.block_629}>transcribe as spoken. </p>
                <p className={styles.block_630}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ဒ တ ယ န က ရ မ ခန </span>
                </p>
                <p className={styles.block_631}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ဒ န မ ခန </span>
                </p>
                <p className={styles.block_632}>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ဒ တ ယ န က ရ မ ခန </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_633}>
                  Explanation: Transcribe title as spoken.{' '}
                </p>
                <p className={styles.block_634}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>ရ န ဦ က န </span>
                </p>
                <p className={styles.block_635}>
                  <span className={styles.text_4}>Incorrect: </span>
                  <span className={styles.text_5}>ရ နဦ က န </span>
                </p>
                <p className={styles.block_636}>
                  Explanation: For titles like Lawyer, Doctor,{' '}
                </p>
                <p className={styles.block_637}>
                  Celebrity preceding proper name, please write{' '}
                </p>
                <p className={styles.block_638}>
                  them with a space, and use the standard{' '}
                </p>
                <p className={styles.block_639}>spelling. </p>
                <p className={styles.block_640}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>မ ပ ပ ဦ က ရင </span>
                  <span className={styles.text_15}>
                    Explanation: For titles like Lawyer, Doctor,{' '}
                  </span>
                </p>
                <p className={styles.block_641}>
                  Celebrity preceding proper name, please write{' '}
                </p>
                <p className={styles.block_642}>
                  them with a space, and use the standard{' '}
                </p>
                <p className={styles.block_643}>spelling. </p>
                <p className={styles.block_640}>
                  <span className={styles.text_13}>Correct: </span>
                  <span className={styles.text_14}>အလက က စ က စ ည န </span>
                  <span className={styles.text_15}>
                    Explanation: For titles like Lawyer, Doctor,{' '}
                  </span>
                </p>
                <p className={styles.block_641}>
                  Celebrity preceding proper name, please write{' '}
                </p>
                <p className={styles.block_642}>
                  them with a space, and use the standard{' '}
                </p>
                <p className={styles.block_643}>spelling. </p>
                <p className={styles.block_644}>
                  In acronyms, do not use periods between letters.{' '}
                </p>
                <p className={styles.block_645}>
                  Correct: NASA, NASCAR, AAMCO, ZIP code{' '}
                </p>
                <p className={styles.block_646}>
                  <span className={styles.text_4}>Correct: </span>
                  <span className={styles.text_5}>အထက၊ တစည၊ ဖဆပလ၊ မခမမ </span>
                </p>
                <p className={styles.block_647}>
                  <span className={styles.text_18}>Correct: </span>
                  <span className={styles.text_19}>စစစ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_20}>စသ လ </span>
                  <span className={styles.text_8}>" </span>
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
