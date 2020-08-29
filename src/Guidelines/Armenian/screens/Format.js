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
            <PageContentHeader currentPage="longform Armenian" />
            <div className="context text">
              <p className={'large-heading'}>Format </p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.{' '}
              </p>
              <div id="number">
                <p className={'heading'}>Number </p>
                <p className={'text'}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10. Transcribe all
                  decimal numbers as digits.{' '}
                </p>
                <p className={styles.block_325}>
                  Correct: 7,884-ը կլորացնենք մինչեւ{' '}
                </p>
                <p className={styles.block_326}>հազարավորները։ </p>
                <p className={styles.block_327}>
                  Explanation: տասնորդական թվեր{' '}
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_8}>
                    Correct: Դասարանում կա տաս աշակերտ։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: 10-ից փոքր թվեր{' '}
                  </span>
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_8}>
                    Correct: Դասարանում կա 13 աշակերտ։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: 10-ից բարձր թվեր{' '}
                  </span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.text_17}>
                    Correct: Ես ունեմ վեց շուն եւ 12 թութակ։{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    Հետեւել այս կանոնին՝ գրե՛լ{' '}
                  </span>
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_5}>տառերով եւ թվերով </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_15}>Correct: 3,14 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>երեք ամբողջ տասնչորս </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_333}>
                  Explanation: տասնորդական թվեր{' '}
                </p>
                <p className={styles.block_317}>
                  If a large number consists of only a number followed by
                  "million", "billion", "trillion", or higher, then transcribe
                  as a numeral plus word. Otherwise, transcribe as numerals.{' '}
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_17}>Correct: 1 միլիոն սագ </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>մեկ միլիոն սագ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_335}>
                  <span className={styles.text_17}>Correct: մեկ մլն սագ </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>մեկ մլն սագ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_336}>
                  <span className={styles.text_17}>Correct: 1000 սագ </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>հազար սագ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_17}>Correct: 1,5$ մլրդ </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    Մեկ ամբողջ հինգ միլիարդ{' '}
                  </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_5}>դոլար </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>մեկ ու կես մլրդ դոլար </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_340}>
                  Explanation: Միլիոնի, միլիարդի հետ գրել{' '}
                </p>
                <p className={styles.block_341}>տասնորդական թվեր։ </p>
                <p className={styles.block_342}>
                  Write lists of numbers with digits and without commas.{' '}
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_15}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    Զրո մեկ մեկ երկու երեք{' '}
                  </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_5}>հինգ ութ տասներեք </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_345}>
                  Explanation: Թվերը հաշվելու դեպքում{' '}
                </p>
                <p className={styles.block_346}>ստորակետ չնե՛լ։ </p>
                <p className={styles.block_347}>
                  <span className={styles.text_17}>
                    Correct: 3 2 1 պայթյո՛ւն{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    Երեք երկու մեկ պայթյո՛ւն{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_345}>
                  Explanation: Թվերը հաշվելու դեպքում{' '}
                </p>
                <p className={styles.block_346}>ստորակետ չնե՛լ։ </p>
                <p className={styles.block_348}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.{' '}
                </p>
                <p className={styles.block_349}>
                  Correct: Նրանց անհրաժեշտ է 1/4 կգ{' '}
                </p>
                <p className={styles.block_350}>շաքարավազ։ </p>
                <p className={styles.block_351}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>Նրանց անհրաժեշտ է մեկ </span>
                </p>
                <p className={styles.block_352}>
                  <span className={styles.text_5}>
                    քառորդ կիլոգրամ շաքարավազ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_353}>
                  Explanation: Այս պարագայում «մեկ»-ը{' '}
                </p>
                <p className={styles.block_354}>կազմված է քառորդից: Ուստի </p>
                <p className={styles.block_355}>չդառադարձնե՛լ։ </p>
                <p className={styles.block_356}>
                  <span className={styles.text_17}>
                    Correct: 3/4 կմ-ից՝ թեքվել աջ։{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>Երեք քառորդ մղոնից՝ </span>
                </p>
                <p className={styles.block_357}>
                  <span className={styles.text_5}>թեքվել աջ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_358}>
                  Explanation: Գոյականը օգտագործել{' '}
                </p>
                <p className={styles.block_359}>համապատասխան հոլովով։ </p>
                <p className={styles.block_360}>
                  <span className={styles.text_17}>
                    Correct: 2/3 կմ-ից՝ թեքվել ձախ։{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    Երկու երրորդ կիլոմետրից՝{' '}
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_5}>թեքվել ձախ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_362}>
                  Explanation: Գոյականը օգտագործել{' '}
                </p>
                <p className={styles.block_363}>համապատասխան հոլովով։ </p>
                <p className={styles.block_364}>
                  Correct: Մեզ անհրաժեշտ է 5/16 չափի{' '}
                </p>
                <p className={styles.block_365}>պտուտակահան։ </p>
                <p className={styles.block_366}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    Մեզ անհրաժեշտ է հինգ տասնվեց չափի պտուտակահան{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_367}>
                  Explanation: Չափը գրել դեֆիսով։{' '}
                </p>
                <p className={styles.block_368}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.{' '}
                </p>
                <p className={styles.block_369}>
                  Correct: Կարող ե՞ս ինձ պարտքով 2.50${' '}
                </p>
                <p className={styles.block_370}>տալ։ </p>
                <p className={styles.block_371}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>Կարող ե՞ս ինձ պարտքով </span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_5}>
                    երկուս ու կես դոլար տալ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_373}>
                  Correct: Նա գնեց լողափի տունը 7.5${' '}
                </p>
                <p className={styles.block_374}>միլիոնով։ </p>
                <p className={styles.block_375}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    Նա գնեց լողափի տունը յոթ{' '}
                  </span>
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_5}>ու կես միլիոնով </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_377}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.){' '}
                </p>
                <p className={styles.block_378}>Correct: 2% կաթ </p>
                <p className={styles.block_379}>Correct: 1 միլիոն տոկոս </p>
                <p className={styles.block_380}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.{' '}
                </p>
                <p className={styles.block_381}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.{' '}
                </p>
                <p className={styles.block_382}>Correct: 501503 </p>
                <p className={styles.block_383}>Correct: 10 501503 </p>
                <p className={styles.block_384}>
                  <span className={styles.text_15}>
                    Correct: +374 10 501503{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>Պլյուս </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_17}>
                    Correct: 10 501503 ընդլայնման համարը 54{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>ընդլայնման համարը </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_5}>հիսուն չորս </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_387}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.{' '}
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_15}>Correct: 5 / 6 ^ 3 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>Հինգը բաժանած վեց </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_5}>երրորդի </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>Հինգը բաժանած վեցի </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_5}>խորանարդի </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_17}>
                    Correct: Ինչի՞ է հավասար 5 * 6-ը։{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>Ինչի՞ է հավասար հինգ </span>
                </p>
                <p className={styles.block_393}>
                  <span className={styles.text_5}>անգամ վեցը </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_18}>Correct: √3 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>Երեքի արմատ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_17}>
                    Correct: Ինչի՞ է հավասար 8 ժամը * 12$-ով։{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    Ինչի՞ է հավասար ութ ժամը{' '}
                  </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_5}>
                    բազմապատկած տասներկու դոլարով{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_397}>
                  Correct: Ինչի՞ է հավասար երեք ալիգատորը{' '}
                </p>
                <p className={styles.block_398}>բաժանած երկու իգուանայի։ </p>
                <p className={styles.block_399}>
                  Explanation: Այս արտահայտությունը ճշգրիտ{' '}
                </p>
                <p className={styles.block_400}>
                  մաթեմատիկական արտահայտություն չէ։{' '}
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit </p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.{' '}
                </p>
                <p className={styles.block_403}>
                  Correct: 1.000 չափազանց թանկ է{' '}
                </p>
                <p className={styles.block_404}>շոկոլադի համար։ </p>
                <p className={styles.block_405}>
                  <span className={styles.text_17}>
                    Correct: Ի՞նչ արժե 20€-ն ԱՄՆ դոլարով։{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    Ի՞նչ արժե քսան եվրոն ԱՄՆ{' '}
                  </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_5}>դոլարով </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={'text'}>
                  For all other currencies and slang terms for money, spell out
                  the words.{' '}
                </p>
                <p className={styles.block_408}>
                  Correct: Ծախսեցի հինգ հազար դոլար։{' '}
                </p>
                <p className={styles.block_409}>
                  Incorrect: Ծախսեցի 5.000 դոլար։{' '}
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>Ծախսեցի հինգ հազար </span>
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_5}>դոլար </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_412}>Correct: 200 իեն </p>
                <p className={styles.block_413}>Incorrect: 200¥ </p>
                <p className={styles.block_414}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>Երկու հարյուր իեն </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={'text'}>For degrees, use the ° symbol. </p>
                <p className={styles.block_416}>Correct: Դրսում 20° է։ </p>
                <p className={styles.block_417}>
                  Correct: Միլուոկոյում հինգը աստիճանից{' '}
                </p>
                <p className={styles.block_418}>ցածր է։ </p>
                <p className={styles.block_419}>
                  Incorrect: Միլուոկոյում -5 աստիճան է։{' '}
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>միլուոկոյում հինգը </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_5}>աստիճանից ցածր է </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={'text'}>
                  Abbreviate all units that follow numeric values.{' '}
                </p>
                <p className={styles.block_423}>
                  Correct: Իմ ընտանիքը գնեց 10 լ նարնջի{' '}
                </p>
                <p className={styles.block_424}>հյութ։ </p>
                <p className={styles.block_425}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    Իմ ընտանիքը գնեց տաս լիտր նարնջի հյութ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={'text'}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.{' '}
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_20}>
                    Correct: Զարթուցիչը դնել ժամը 5:45-ին։{' '}
                  </span>
                </p>
                <p className={'text'}>
                  <span className={'text'}>
                    Example audio: " Զարթուցիչը դնել ժամը վեցին տասնհինգ պակաս "
                  </span>
                  <br />
                  <span className={styles.text_10}>
                    Incorrect: Զարթուցիչը դնել ժամը 545-ին։{' '}
                  </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time </p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.{' '}
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_17}>
                    Correct: 1964 թ. հուլիսի 12-ին{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    Հազար ինն հարյուր վաթսուն չորս թվականի հուլիսի տասներկուսին
                    "
                  </span>
                </p>

                <p className={styles.block_431}>
                  <span className={styles.text_17}>Correct: 78թ</span>
                  <span className={styles.text_21}>. </span>
                  <span className={styles.text_17}>աշնանը </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    յոթանասուն ութ թվականի{' '}
                  </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_5}>աշնանը </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_17}>
                    Correct: 80-ականների երաժշտություն{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    ութսունականների երաժշտություն "
                  </span>
                </p>
                <br />
                <p className={styles.block_431}>
                  <span className={styles.text_17}>
                    Correct: չորեքշաբթի օրը՝ մարտի 6-ին{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    չորեքշաբթի օրը՝ մարտի վեցին "
                  </span>
                </p>
                <p className={'text'}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.{' '}
                </p>
                <p>
                  <span className={'blue-text'}>
                    <sub className={styles.calibre2}>
                      Correct: Ժամը 3:00-ին{' '}
                    </sub>
                  </span>
                  <span className={'text'}>
                    <sub className={styles.calibre2}>
                      Example audio: " Ժամը երեքին "
                    </sub>
                  </span>
                </p>
                <br />
                <p className={styles.block_434}>
                  Correct: Մաթեմատիկայի դասը սկսվում է{' '}
                </p>
                <p className={styles.block_434}>ժամը 14:00-ին։ </p>
                <p className={styles.block_433}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>մաթեմատիկայի դասը </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_5}>
                    սկսվում է ժամը տասնչորս զրո զրոյին{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <br />
                <p className={styles.block_431}>
                  <span className={styles.text_15}>Correct: 1:50 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>Երկուսին տաս պակաս </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <br />
                <p className={styles.block_435}>
                  <span className={styles.text_17}>
                    Correct: Ժամը 8:00-ի կողմերը{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>Ժամը ութի կողմերը </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_436}>
                  Explanation: Անբնական է հնչում՝ «8-ի{' '}
                </p>
                <p className={styles.block_437}>կողմերը»։ </p>
                <br />
                <p className={styles.block_438}>
                  Correct: Մաթեմատիկայի դասը սկսվում է{' '}
                </p>
                <p className={styles.block_439}>ժամը 14:30-ին։ </p>
                <p className={styles.block_440}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    մաթեմատիկայի դասը սկսվում է ժամը տասնչորսն անց երեսունին{' '}
                  </span>
                </p>
                <p className={styles.block_441}>" </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address </p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.{' '}
                </p>
                <p className={styles.block_444}>
                  Use commas for ENTITY, LOCATION.{' '}
                </p>
                <p className={styles.block_445}>
                  Correct: McDonald's, Կաստրո փողոց{' '}
                </p>
                <p className={styles.block_446}>Correct: սրճարան, 95129 </p>
                <p className={styles.block_447}>
                  Correct: բժիշկ Ուրունյան, Վերմոնտ{' '}
                </p>
                <p className={styles.block_448}>
                  Correct: Փայտե վառարան, Մալաթիա{' '}
                </p>
                <p className={styles.block_449}>Correct: Թագավորի վերադարձը </p>
                <p className={styles.block_450}>ցուցադրումները, Գյումրի Ս </p>
                <p className={styles.block_451}>
                  Correct: Cafe Noriter, Էստրադա փողոց{' '}
                </p>
                <p className={styles.block_452}>
                  Correct: Makati City Hall, Մանիլա{' '}
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web </p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.{' '}
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_15}>
                    Correct: www.google.co.kr{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    դաբլյու դաբլյու դաբլյու{' '}
                  </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_5}>կետ գուգլ կետ կր </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_15}>Correct: amazon.com </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>ամազոն կետ քոմ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_15}>
                    Correct: mike@openmailbox.org{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    մայք շնիկ օփենմեյլբոքս{' '}
                  </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_5}>կետ օրգ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_17}>
                    Correct: Ես սիրում եմ պիցցա։ #սոված{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>Ես սիրում եմ պիցցա </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_5}>հաշթագ սոված </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_462}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.{' '}
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_15}>
                    Correct: www.google.com.ph{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    դաբլյու դաբլյու դաբլյու{' '}
                  </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_5}>
                    կետ գուգլ կետ քոմ կետ փի հեյչ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_15}>
                    Correct: www.forbes.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>
                    դաբլյու դաբլյու դաբլյու{' '}
                  </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_5}>կետ ֆորբես կետ քոմ </span>
                  <span className={styles.text_4}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'text'}>Abbreviation </p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.{' '}
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_19}>Example </span>
                  <span className={styles.text_20}>
                    Correct: Կապան, Սյունիք{' '}
                  </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>Կապան Սյունիք </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_471}>
                  Incorrect: Կապան,Սյունիքի մարզ{' '}
                </p>
                <p className={styles.block_472}>
                  Correct: Լավագույն բուհի ուսանող։{' '}
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_14}>Incorrect: Լավագույն բ</span>
                  <span className={styles.text_13}>.</span>
                  <span className={styles.text_14}>ու</span>
                  <span className={styles.text_13}>.</span>
                  <span className={styles.text_14}>հ</span>
                  <span className={styles.text_13}>.</span>
                  <span className={styles.text_14}>-ի ուսանող։ </span>
                </p>
                <p className={styles.block_474}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    լավագույն բուհի ուսանող{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_475}>Correct: Սեւան հէկ </p>
                <p className={styles.block_476}>
                  <span className={styles.text_14}>Incorrect: Սեւան հ</span>
                  <span className={styles.text_13}>.</span>
                  <span className={styles.text_14}>է</span>
                  <span className={styles.text_13}>.</span>
                  <span className={styles.text_14}>կ</span>
                  <span className={styles.text_13}>. </span>
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>Սեւան հէկ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_478}>
                  Capitalize and abbreviate titles for people only when they
                  precede proper names.{' '}
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_14}>
                    Correct: Ես ճանաչում եմ բժ
                  </span>
                  <span className={styles.text_13}>. </span>
                  <span className={styles.text_14}>Շուստերին։ </span>
                </p>
                <p className={styles.block_480}>
                  Correct: Բժիշկս խորհուրդ տվեց{' '}
                </p>
                <p className={styles.block_481}>վարժություն անել։ </p>
                <p className={styles.block_482}>
                  <span className={styles.text_14}>Correct: Պրն</span>
                  <span className={styles.text_13}>. </span>
                  <span className={styles.text_14}>Ջոնսը զբաղված է։ </span>
                </p>
                <p className={styles.block_483}>
                  Correct: Հե՜յ պարոն, նա իմ քույրն է։{' '}
                </p>
                <p className={styles.block_484}>
                  Correct: Կարլ Ռով Կրտս-ն այստեղ է։{' '}
                </p>
                <p className={styles.block_485}>
                  Correct: Նրա կրտսեր քույրը դեռ սովորում է։{' '}
                </p>
                <p className={styles.block_486}>
                  Correct: Այսօր հեռուստատեսությամբ տեսա{' '}
                </p>
                <p className={styles.block_487}>նախագահ Օբամային։ </p>
                <p className={styles.block_488}>
                  Correct: Այսօր հեռուստատեսությամբ տեսա{' '}
                </p>
                <p className={styles.block_276}>նախագահին։ </p>
                <p className={styles.block_489}>
                  In acronyms, do not use periods between letters.{' '}
                </p>
                <p className={styles.block_490}>
                  Correct: ՄԱԿ, ԽՍՀմ, ԱՊՀ, ԵՊՀ ԼԶՀ{' '}
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
