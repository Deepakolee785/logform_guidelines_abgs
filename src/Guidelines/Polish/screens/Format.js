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
            <PageContentHeader currentPage="Longform Polish" />
            <div className="context text">
              {' '}
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                <span className={styles.text_2}>
                  Transcribe numbers, abbreviations etc. following the
                  formatting conventions in this{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>section.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={styles.block_290}>
                  <span className={styles.text_2}>
                    Write small numbers (0 to 9) as words and larger numbers (10
                    and above) using digits.{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    However, you may write small numbers using digits if they
                    appear in a list, in{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    mathematical expression, as street numbers, as a measure or
                    time unit.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  Correct: W klasie jest tylko trzech studentów.
                </p>
                <p className={styles.block_150}>
                  Incorrect: W klasie jest tylko 3 studentów.
                </p>
                <p className={styles.block_139}>
                  Correct: Mam dwa psy i trzy koty.
                </p>
                <p className={styles.block_150}>
                  Incorrect: Mam 2 psy i 3 koty.
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Muszę zamówić 168 plastikowych{' '}
                  </span>
                </p>
                <p className={styles.block_291}>
                  talerzy na jutrzejszą imprezę.
                </p>
                <p className={styles.block_150}>
                  <span className={styles.calibre2}>
                    Incorrect: Muszę zamówić sto sześćdziesiąt
                  </span>
                </p>
                <p className={styles.block_292}>
                  <span className={styles.calibre2}>
                    osiem plastikowych talerzy na jutrzejszą{' '}
                  </span>
                </p>
                <p className={styles.block_293}>imprezę.</p>
                <p className={styles.block_294}>Correct: 3,14</p>
                <p className={styles.block_295}>
                  Incorrect: trzy przecinek czternaście
                </p>
                <p className={styles.block_296}>Explanation: decimal number</p>
                <p className={styles.block_297}>
                  Correct: Mieszkam na ulicy Wyzwolenia 11.
                </p>
                <p className={styles.block_298}>
                  <span className={styles.calibre2}>
                    Incorrect: Mieszkam na ulicy Wyzwolenia jedenaście.
                  </span>
                </p>
                <p className={styles.block_299}>Explanation: street number</p>
                <p className={styles.block_300}>
                  <span className={styles.text_2}>
                    When two or more numbers refer to the same noun, and one
                    number is 10 or greater,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    transcribe both as numerals.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>
                  Correct: Kupili 9 lub 10 złotych rybek.
                </p>
                <p className={styles.block_301}>
                  <span className={styles.text_2}>
                    If a large number consists of only a number followed by
                    "milion", "miliard", "trylion", or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    higher, then transcribe as a numeral plus word. Otherwise,
                    transcribe as numerals.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_302}>
                  <span className={styles.text_21}>
                    Correct: 1 milion złotych{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>jeden milion złotych </span>
                  <span className={styles.text_31}>" </span>
                  <span className={styles.text_21}>
                    Correct: milion kobiet{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>milion kobiet </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_21}>
                    Correct: biżuteria warta 2,5 miliona złotych{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      biżuteria warta dwa i pół miliona złotych
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_304}>
                  <span className={styles.text_23}>
                    Write lists of numbers with digits and without commas.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_305}>
                  <span className={styles.text_21}>
                    Correct: 0 1 2 3 4 5 6{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      zero jeden dwa trzy cztery pięć sześć
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_306}>
                  <span className={styles.calibre2}>
                    Explanation: list of numbers, no comma if just
                  </span>
                </p>
                <p className={styles.block_307}>counting</p>
                <p className={styles.block_308}>
                  <span className={styles.text_21}>
                    Correct: 7 9 8 0 4 1 1 13{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      siedem dziewięć osiem zero cztery jeden jeden trzynaście
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_309}>
                  Explanation: list of numbers, no comma
                </p>
                <p className={styles.block_192}>
                  <span className={styles.text_21}>Correct: 3 2 1 start </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>trzy dwa jeden start </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_2}>
                    For long numbers (4+ digits) indicating quantity, insert the
                    relevant separator (comma,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    decimal point, or space, depending on language).
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_191}>
                  <span className={styles.text_21}>Correct: 10 000 </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>dziesięć tysięcy </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_2}>
                    In math expressions or units &amp; measures, transcribe
                    fraction words using numerals and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>slashes.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_312}>
                  <span className={styles.calibre2}>
                    Correct: Muszę dodać do ciasta 3/4 szklanki mąki.
                  </span>
                </p>
                <p className={styles.block_313}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      muszę dodać do ciasta trzy czwarte szklanki mąki
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_314}>
                  <span className={styles.text_21}>
                    Correct: 1/4 szklanki cukru{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    jedna czwarta szklanki cukru{' '}
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_24}>
                    For mixed numbers in math and units &amp; measures, use
                    numerals with "i".
                  </span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>
                    Correct: 3 i 1/2 kilometra{' '}
                  </span>
                  <span className={styles.text_27}>
                    Explanation: trzy i pół kilometra{' '}
                  </span>
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_21}>
                    Correct: 5 i 1/2 miesiąca{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>pięć i pół miesiąca </span>
                  <span className={styles.text_31}>"</span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_2}>
                    When referring to items (not units or measures), write
                    fractions out in words. With{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    mixed numbers, write the whole number part out in words if
                    it is under ten, otherwise{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>write it with numerals.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_21}>
                    Correct: Pół ciasta jest dla Tomka.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: 1/2 ciasta jest dla Tomka.{' '}
                  </span>
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_21}>
                    Correct: Upiekłam 12 i pół ciasteczka.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Upiekłam 12 i 1/2 ciasteczka.{' '}
                  </span>
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    pół ciasta jest dla tomka{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      upiekłam dwanaście i pół ciasteczka
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_322}>
                  <span className={styles.text_23}>
                    For mixed numbers that represent currency amounts, always
                    use decimals.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_21}>
                    Correct: To kosztuje 10,50 zł.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      to kosztuje dziesięć złotych pięćdziesiąt groszy
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_324}>
                  Explanation: Use a comma for decimals.
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_21}>
                    Correct: To kosztuje 10,50.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      to kosztuje dziesięć pięćdziesiąt
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_21}>
                    Correct: Zapłaciliśmy za ten dom 2,5 miliona zł.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      zapłaciliśmy za ten dom dwa i pół miliona złotych
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_2}>
                    Transcribe percentages using numerals and the % sign. (In
                    the unlikely case that you{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    encounter a number of a million or greater used as a
                    percentage, spell it out.)
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>Correct: 2% mleko</p>
                <p className={styles.block_168}>Correct: milion procent</p>
                <p className={styles.block_328}>
                  <span className={styles.text_24}>
                    When numbers appear in prenominals (units preceding nouns),
                    write them out.
                  </span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>
                    Correct: ośmiometrowa fala{' '}
                  </span>
                  <span className={styles.text_33}>Example audio: " </span>
                  <span className={styles.text_34}>ośmiometrowa fala </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_21}>
                    Correct: czterodrzwiowa toyota{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>czterodrzwiowa toyota </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.text_2}>
                    If a number appears in a context which calls for a certain
                    formatting in your language,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    use that formatting. Otherwise, default to the general rule
                    for transcribing numbers.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_23}>
                    Use Roman numerals only when part of an official name or
                    title.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_21}>
                    Correct: król Henryk VIII{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>król henryk ósmy </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_333}>
                  <span className={styles.text_21}>
                    Correct: Wiek XX niedługo się skończy.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      wiek dwudziesty niedługo się skończy
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_334}>
                  <span className={styles.calibre2}>
                    Correct: Znajdziesz tę informację w II tomie encyklopedii.
                  </span>
                </p>
                <p className={styles.block_335}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      znajdziesz tę informację w drugim tomie encyklopedii
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_336}>
                  <span className={styles.text_24}>
                    Transcribe seasons and episodes of television shows with
                    numerals.
                  </span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>
                    Correct: sezon 3 odcinek 2{' '}
                  </span>
                  <span className={styles.text_33}>Example audio: " </span>
                  <span className={styles.text_34}>
                    sezon trzeci odcinek drugi{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_337}>
                  If it is a product type, use the common written form.
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_21}>Correct: kaliber .22 </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    kaliber dwadzieścia dwa{' '}
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_2}>
                    Transcribe phone numbers using the most common format in the
                    transcription{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>language.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_21}>Correct: 666 77 22 </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      sześć sześć sześć siedem siedem dwa dwa
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.calibre2}>
                    Explanation: landline without area code (for
                  </span>
                </p>
                <p className={styles.block_342}>calls within the same area)</p>
                <p className={styles.block_343}>
                  <span className={styles.text_21}>Correct: 74 843 28 26 </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      siedemdziesiąt cztery osiem cztery trzy dwa osiem dwa
                      sześć
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_344}>
                  Explanation: landline with area code
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_21}>
                    Correct: 690 18 07 numer wewnętrzny 22{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      sześć dziewięć zero jeden osiem zero siedem numer
                      wewnętrzny
                    </span>
                  </span>
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_20}>dwadzieścia dwa </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_347}>
                  <span className={styles.text_21}>
                    Correct: +48 54 123 12 12{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: landline with country code{' '}
                  </span>
                  <span className={styles.text_21}>Correct: 571 231 212 </span>
                  <span className={styles.text_22}>
                    Explanation: mobile phone number{' '}
                  </span>
                  <span className={styles.text_21}>Correct: 800 12 12 12 </span>
                  <span className={styles.text_22}>
                    Explanation: toll-free number{' '}
                  </span>
                  <span className={styles.text_21}>Correct: 70 123 12 12 </span>
                  <span className={styles.text_22}>
                    Explanation: premium-rate services
                  </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_21}>Correct: 801 12 12 12 </span>
                  <span className={styles.text_22}>
                    Explanation: shared-cost services{' '}
                  </span>
                </p>
                <p className={styles.block_348}>
                  <span className={styles.text_2}>
                    Transcribe alpha-digit sequences (product codes etc.) in
                    their most natural way{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    (possibly several ways accepted). Do not transcribe credit
                    card numbers, etc.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>Correct: YZ450F</p>
                <p className={styles.block_139}>Correct: XT 660 or XT660</p>
                <p className={styles.block_349}>
                  <span className={styles.text_2}>
                    If it really sounds like a math expression, then transcribe
                    it with numbers and symbols,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>with spaces in between.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_350}>
                  <span className={styles.text_21}>Correct: 16 / 4 </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      szesnaście podzielić na cztery{' '}
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_351}>
                  <span className={styles.text_21}>Correct: 5 x 3 </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>pięć razy trzy </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_352}>
                  <span className={styles.text_26}>Correct: 10 - 5 </span>
                  <span className={styles.text_33}>Example audio: " </span>
                  <span className={styles.text_34}>dziesięć minus pięć </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}> </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={styles.block_353}>
                  <span className={styles.text_24}>
                    Transcribe currencies as commonly written in the
                    transcription language.
                  </span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>Correct: 10 zł </span>
                  <span className={styles.text_33}>Example audio: " </span>
                  <span className={styles.text_34}>dziesięć złotych </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_354}>
                  <span className={styles.text_21}>
                    Correct: 10 zł to ile dolarów?{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      dziesięć złotych to ile dolarów{' '}
                    </span>
                  </span>
                  <span className={styles.text_31}>"</span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_2}>
                    If it is obvious from context that a number reflects an
                    amount of currency, transcribe{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    with the currency symbol.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_356}>
                  <span className={styles.text_21}>
                    Correct: Mleko kosztuje 5,40 zł.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Mleko kosztuje 5,40.{' '}
                  </span>
                </p>
                <p className={styles.block_357}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      mleko kosztuje pięć czterdzieści{' '}
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_358}>
                  <span className={styles.text_24}>
                    For grosz-only quantities, the word "grosz" should follow
                    the amount.
                  </span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>Correct: 5 groszy </span>
                  <span className={styles.text_33}>Example audio: " </span>
                  <span className={styles.text_34}>pięć groszy </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_23}>
                    For all other currencies and slang terms for money, spell
                    out the words.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_21}>
                    Correct: Wydałem na to 4 tysiaki.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Wydałem na to 4 000 zł.{' '}
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_21}>
                    Correct: Wydałem na to 4 koła.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Wydałem na to 4 000 zł.{' '}
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_21}>
                    Correct: Wydałem na to 4 stówy.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Wydałem na to 400 zł.{' '}
                  </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    wydałem na to cztery tysiaki{' '}
                  </span>
                  <span className={styles.text_19}>" Example audio: " </span>
                  <span className={styles.text_20}>
                    wydałem na to cztery koła{' '}
                  </span>
                  <span className={styles.text_19}>" Example audio: " </span>
                  <span className={styles.text_20}>
                    wydałem na to cztery stówy{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_24}>
                    When a speaker uses words like "złoty" without specifying a
                    quantity, spell them out.
                  </span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>
                    Correct: Muszę pożyczyć kilka złotych.{' '}
                  </span>
                  <span className={styles.text_33}>Example audio: " </span>
                  <span className={styles.text_34}>
                    muszę pożyczyć kilka złotych{' '}
                  </span>
                  <span className={styles.text_33}>"</span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_24}>
                    Write out denominations of currency (the face values of
                    bills, notes, coins, etc).
                  </span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>
                    Correct: banknot dwudziestozłotowy{' '}
                  </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_23}>
                    For ranges or non-specific currency quantities, write
                    everything out as spoken.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_21}>
                    Correct: Potrzebuję cztery lub pięćset złotych.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      potrzebuję cztery lub pięćset złotych
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_366}>
                  <span className={styles.text_21}>
                    Correct: Potrzebuję 400 lub 500 złotych.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      potrzebuję czterysta lub pięćset złotych
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_23}>
                    For degrees, use the ° symbol. If the speaker omits the word
                    "stopień", do not add it.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_368}>
                  <span className={styles.text_21}>
                    Correct: Dzisiaj jest 20° w Krakowie.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      dzisiaj jest dwadzieścia stopni w krakowie
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_21}>
                    Correct: W Warszawie jest -10°.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      w warszawie jest minus dziesięć stopni
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_197}>
                  <span className={styles.text_21}>
                    Correct: W Warszawie jest -5.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    w warszawie jest minus pięć{' '}
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_370}>
                  <span className={styles.text_21}>
                    Correct: W Warszawie jest pięć na minusie.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      w warszawie jest pięć na minusie{' '}
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_21}>
                    Correct: W Kołobrzegu jest 10° mrozu.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      w kołobrzegu jest dziesięć stopni mrozu
                    </span>
                  </span>
                  <span className={styles.text_31}>"</span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_23}>
                    Abbreviate all units that follow numeric values.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_21}>
                    Correct: Muszę kupić 2 l mleka.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    muszę kupić dwa litry mleka{' '}
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_24}>
                    Transcribe all numeric values preceding units in numeral
                    form, even if under 10.
                  </span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>
                    Correct: Mój kot waży 5 kg.{' '}
                  </span>
                </p>
                <p className={styles.block_374}>
                  Correct: Muszę kupić 2 kg mąki.
                </p>
                <p className={styles.block_375}>
                  <span className={styles.text_23}>
                    For lengths, widths, and heights, use "x" instead of any
                    preposition.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_376}>
                  <span className={styles.calibre2}>
                    Correct: Znajdź tapetę o rozdzielczości 1024 x 768.
                  </span>
                </p>
                <p className={styles.block_377}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      znajdź tapetę o rozdzielczości tysiąc dwadzieścia cztery
                      na siedemset sześćdziesiąt osiem
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_378}>
                  <span className={styles.text_2}>
                    If it is clear from context that a number or number sequence
                    refers to currency or time,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>format it as such.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_21}>
                    Correct: Nastaw budzik na 5:45.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Nastaw budzik na 545.{' '}
                  </span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.text_23}>
                    Common technical abbreviations
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_381}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>megabajt - MB </span>
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>kilobajt - kB </span>
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>gigabajt - GB </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>terabajt - TB</span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      nastaw budzik na piątą czterdzieści pięć
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_23}>
                    Slang terms (spell them out)
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>kilo </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>deka </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>giga </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_23}>
                    Common measurements of distance and rate
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>cal - in </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>stopa - ft </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>jard - yd </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>mila - mi </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>milimetr - mm </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>centymetr - cm </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>metr - m </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>kilometr - km </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>mile na godzinę - mph </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>
                    kilometry na godzinę - km/h{' '}
                  </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_23}>
                    Common measurements of area
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>cal kwadratowy - in² </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>
                    stopa kwadratowa - ft²{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>mila kwadratowa - mi² </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>
                    centymetr kwadratowy - cm²{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>metr kwadratowy - m² </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>
                    kilometr kwadratowy - km²{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>akr - acre </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_23}>
                    Common scientific terms
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>decybel - dB </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>niuton - N </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>dżul - J </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>parsek - parsec </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>amper - amp</span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>herc - Hz </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>wat - W </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>kilowat - kW </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>Candela - cd </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>lumen - lm </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>stopień - ° </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>Fahrenheit - F </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>Celsjusz - C </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>Kelwin - K </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_23}>
                    Common measurements of weight and volume
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>funt - lb </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>uncja - oz </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>kwarta - qt </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>litr - L </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>gram - g </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>miligram - mg </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>kilogram - kg </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>sześcienny - ³ </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>metr sześcienny - m³ </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_35}>● </span>
                  <span className={styles.text_36}>cal sześcienny - in³ </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={styles.block_393}>
                  <span className={styles.text_23}>
                    Use the natural form for transcribing dates.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_21}>
                    Correct: 5 października 2015{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      piąty października dwa tysiące piętnaście
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_21}>Correct: 5.10.2015 </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      piąty października dwa tysiące piętnaście
                    </span>
                  </span>
                  <span className={styles.text_31}>"</span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_21}>Correct: 5 X 2015 </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      piąty października dwa tysiące piętnaście
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_21}>
                    Correct: 1 marca 2015 r.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      pierwszy marca dwa tysiące piętnastego roku
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_21}>Correct: 1.03.2015 r. </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      pierwszy marca dwa tysiące piętnastego roku
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_21}>
                    Correct: 1 III 2015 r.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      pierwszy marca dwa tysiące piętnastego roku
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_399}>
                  <span className={styles.text_21}>Correct: lata 90. </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    lata dziewięćdziesiąte{' '}
                  </span>
                  <span className={styles.text_31}>" </span>
                  <span className={styles.text_21}>
                    Correct: lata dwudzieste{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>lata dwudzieste </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_400}>
                  <span className={styles.text_21}>
                    Correct: środa, 28 stycznia{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      środa dwudziesty ósmy stycznia{' '}
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_23}>
                    Exception: When the date is spoken as a sequence of numbers,
                    transcribe as such.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_21}>
                    Correct: Data ważności jest do 7.12.2015.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      data ważności jest do siódmy dwunasty dwa tysiące
                      piętnaście
                    </span>
                  </span>
                  <span className={styles.text_31}>"</span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_21}>
                    Correct: Data ważności jest do 7.12.2015.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      data ważności jest do siódmego dwunastego dwa tysiące
                      piętnastego
                    </span>
                  </span>
                </p>
                <p className={styles.block_403}>"</p>
                <p className={styles.block_404}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      data ważności jest do{' '}
                    </span>
                  </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_20}>
                    siódmego dwunastego dwa tysiące piętnaście{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_23}>
                    Use the natural form for transcribing times whenever
                    possible.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_2}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>so.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_408}>
                  <span className={styles.text_21}>Correct: 3:00 </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>trzecia godzina </span>
                  <span className={styles.text_31}>" </span>
                  <span className={styles.text_21}>
                    Correct: Nastaw budzik na 4:00.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    nastaw budzik na czwartą{' '}
                  </span>
                  <span className={styles.text_31}>" </span>
                  <span className={styles.text_21}>Correct: 1:45 </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    pierwsza czterdzieści pięć{' '}
                  </span>
                  <span className={styles.text_31}>" </span>
                  <span className={styles.text_21}>
                    Correct: około 8 wieczorem{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>około ósmej wieczorem </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_23}>
                    Use "rano", "po południu" etc if spoken.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_21}>Correct: 10 rano </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>dziesiąta rano </span>
                  <span className={styles.text_31}>" </span>
                  <span className={styles.text_21}>
                    Correct: 1 po południu{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>pierwsza po południu </span>
                  <span className={styles.text_31}>"</span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_21}>Correct: 7 wieczorem </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>siódma wieczorem </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_2}>
                    If the speaker uses a word such as "południe" or "północ"
                    without the number "12" to{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    denote the hour, do not correct them by adding the number.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_412}>Correct: w południe</p>
                <p className={styles.block_413}>Incorrect: o 12 w południe</p>
                <p className={styles.block_414}>Correct: o północy</p>
                <p className={styles.block_415}>
                  <span className={styles.text_27}>
                    Incorrect: o 12 w nocy{' '}
                  </span>
                  <span className={styles.text_29}> </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>w południe </span>
                  <span className={styles.text_19}>" Example audio: " </span>
                  <span className={styles.text_20}>o północy </span>
                  <span className={styles.text_19}>" </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>

                <p className={styles.block_417}>
                  <span className={styles.text_2}>
                    Favor full spellings over abbreviations where natural, but
                    use abbreviations when{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>explicitly spoken.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_23}>
                    Use commas for ENTITY, LOCATION.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_418}>Correct: dr Nowak, Kraków</p>
                <p className={styles.block_139}>
                  Correct: McDonald's, Warszawa
                </p>
                <p className={styles.block_139}>
                  Correct: sklep monopolowy, Wrocław
                </p>
                <p className={styles.block_419}>
                  Do not capitalize cardinal directions unless part of a
                  specific place name.
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_21}>
                    Correct: Jadę Autostradą Bursztynową.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: "Autostrada Bursztynowa" is the official name
                      of the road.
                    </span>
                  </span>
                </p>
                <p className={styles.block_421}>
                  Correct: Mieszkam na południu Polski.
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Część wschodnia budynku została{' '}
                  </span>
                </p>
                <p className={styles.block_255}>wyremontowana.</p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={styles.block_423}>
                  <span className={styles.text_2}>
                    Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>capitalize them.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_21}>
                    Correct: www.google.pl{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      w w w kropka google kropka p l{' '}
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_21}>Correct: allegro.pl </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>allegro kropka p l </span>
                  <span className={styles.text_31}>" </span>
                  <span className={styles.text_21}>
                    Correct: jacek@interia.pl{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    jacek małpa interia kropka p l{' '}
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_2}>
                    Do not correct speaker errors such as transcribing a slash
                    when the user actually says{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>"odwrotny ukośnik".</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_21}>
                    Correct: http:\google.pl{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      h t t p dwukropek odwrotny ukośnik odwrotny ukośnik google
                      kropka p l
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_2}>
                    If the speaker drops a "w" or dots and it's an obvious URL,
                    you should correct these{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    errors. If the speaker doesn't say the "w"s at all, do not
                    add them.
                  </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_21}>Correct: www.onet.pl </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    w w kropka onet kropka p l{' '}
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.calibre2}>
                    Explanation: If the user mistakenly says "ww",
                  </span>
                </p>
                <p className={styles.block_430}>transcribe "www".</p>
                <p className={styles.block_192}>
                  <span className={styles.text_21}>
                    Correct: www.interia.pl{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    w w w interia kropka p l{' '}
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.calibre2}>
                    Explanation: Also transcribe the dot in an
                  </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.calibre2}>
                    obvious URL, even if the speaker did not include
                  </span>
                </p>
                <p className={styles.block_433}>it.</p>
                <p className={styles.block_434}>
                  <span className={styles.text_2}>
                    If a URL is spelled out in individual letters, transcribe
                    without spaces between individual{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>letters.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_21}>
                    Correct: www.pudelek.pl{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    <span className={styles.calibre2}>
                      w w w k r o p k a p u d e l e k k r o p k a p l
                    </span>
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={styles.block_437}>
                  <span className={styles.text_23}>
                    Do not abbreviate unless the speaker says an abbreviated
                    form.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.calibre2}>
                    Correct: Profesor Walczak jest na zwolnieniu lekarskim.
                  </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.calibre2}>
                    Incorrect: Prof. Walczak jest na zwolnieniu lekarskim.
                  </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      profesor walczak jest na zwolnieniu lekarskim
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_23}>
                    Abbreviate titles for people only when they precede proper
                    names.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_442}>
                  <span className={styles.calibre2}>
                    Correct: Przed godziną 10 rano dyr. Markowski
                  </span>
                </p>
                <p className={styles.block_443}>nie będzie dostępny.</p>
                <p className={styles.block_444}>
                  <span className={styles.calibre2}>
                    Correct: Prez. Duda miał dzisiaj wywiad w telewizji.
                  </span>
                </p>
                <p className={styles.block_445}>
                  <span className={styles.calibre2}>
                    Correct: Widziałem naszego prezydenta w telewizji.
                  </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.calibre2}>
                    Explanation: Since they stand before the proper names
                    "Markowski" and "Duda", the titles may be abbreviated.
                  </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.calibre2}>
                    Explanation: "dyrektorem" and "prezydenta" are not
                    abbreviated because the titles do not appear before a proper
                    name.
                  </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_2}>
                    By default, title abbreviations appearing before proper
                    names are not capitalized, unless{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    at the beginning of a sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  <span className={styles.calibre2}>
                    Correct: Chciałbym spotkać się z dyr.{' '}
                  </span>
                </p>
                <p className={styles.block_449}>Markowskim.</p>
                <p className={styles.block_450}>
                  <span className={styles.calibre2}>
                    Correct: Na obronę zaprosił nas prof. Witkiewicz.
                  </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.calibre2}>
                    Correct: Dyr. Markowski będzie dostępny od godziny 10 rano.
                  </span>
                </p>
                <p className={styles.block_452}>
                  Correct: Inż. Zagłoba wyjechał w delegację.
                </p>
                <p className={styles.block_453}>
                  <span className={styles.calibre2}>
                    Correct: Doc. Kamiński przyjmuje od poniedziałku do piątku.
                  </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.calibre2}>
                    Explanation: "dyr." and "prof." appear inside a sentence,
                    therefore they are not capitalized.
                  </span>
                </p>
                <p className={styles.block_455}>
                  <span className={styles.calibre2}>
                    Explanation: "Inż." and "Doc." are capitalized only by
                    virtue of standing at the beginning of a sentence.
                  </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_2}>
                    If an abbreviation constitutes the initial letter or a few
                    initial, consecutive letters of the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    abbreviated word, it must be followed by a full stop.
                  </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_21}>
                    Correct: Spotkajmy się o g. 17.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Spotkajmy się o g 17.{' '}
                  </span>
                </p>
                <p className={styles.block_458}>Correct: ob. Jan Bratek</p>
                <p className={styles.block_459}>Incorrect: ob Jan Bratek</p>
                <p className={styles.block_460}>Correct: prof. Zaleski</p>
                <p className={styles.block_461}>Incorrect: prof Zaleski</p>
                <p className={styles.block_284}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>spotkajmy się o g </span>
                  </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_20}>siedemnastej </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.calibre2}>
                    Explanation: The abbreviation consists of the first letter
                    of "godzina", so it is followed by a full stop.
                  </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>ob jan bratek </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.calibre2}>
                    Explanation: The abbreviation consists of the first two
                    letters of "obywatel", so it is followed by a full stop.
                  </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>prof zaleski </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.calibre2}>
                    Explanation: "prof" is the abbreviation of "profesor".
                  </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_2}>
                    If an abbreviation ends with the same letter as the
                    abbreviated word, it should not be{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    followed by a full stop.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_21}>Correct: dr Kamiński </span>
                  <span className={styles.text_22}>
                    Incorrect: dr. Kamiński{' '}
                  </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_21}>Correct: pokój nr 202 </span>
                  <span className={styles.text_22}>
                    Incorrect: pokój nr. 202{' '}
                  </span>
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>dr kamiński </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.calibre2}>
                    Explanation: The final letter of the abbreviated word,
                    "doktor", is the same as the final letter of its
                    abbreviation, "dr", so the abbreviation is not followed by a
                    full stop.
                  </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>pokój nr dwieście dwa </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.calibre2}>
                    Explanation: The final letter of the abbreviated word,
                    "numer", is the same as the final letter of
                  </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_21}>
                    Correct: Nie żyje płk Sławomir Berdychowski.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Nie żyje płk. Sławomir Berdychowski.
                  </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.calibre2}>
                    its abbreviation, "nr", so the abbreviation is not followed
                    by a full stop.
                  </span>
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      nie żyje płk sławomir berdychowski
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_473}>
                  <span className={styles.calibre2}>
                    Explanation: The final letter of the abbreviated word,
                    "pułkownik", is the same as the final letter of its
                    abbreviation, "płk", so the abbreviation is not followed by
                    a full stop.
                  </span>
                </p>
                <p className={styles.block_474}>
                  <span className={styles.text_2}>
                    If an abbreviation ends with a different letter than the
                    abbreviated word, it must be{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    followed by a full stop.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_21}>
                    Correct: Dr. Nowaka nie ma dziś w biurze.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Dr Nowaka nie ma dziś w biurze.
                  </span>
                </p>
                <p className={styles.block_476}>
                  Correct: Mieszkam przy ulicy Płockiej pod nr. 5.
                </p>
                <p className={styles.block_477}>
                  <span className={styles.calibre2}>
                    Incorrect: Mieszkam przy ulicy Płockiej pod nr 5.
                  </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      dr nowaka nie ma dziś w biurze{' '}
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.calibre2}>
                    Explanation: The final letter of the abbreviated word,
                    "doktora", is different from the final letter of its
                    abbreviation, "dr", so the abbreviation must be followed by
                    a full stop.
                  </span>
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      mieszkam przy ulicy płockiej pod nr piątym
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.calibre2}>
                    Explanation: The final letter of the abbreviated word,
                    "numerem", is different from the final letter of its
                    abbreviation, "nr", so the abbreviation must be followed by
                    a full stop.
                  </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_21}>
                    Correct: Wyrażał się dobrze o płk. Kowalskim.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Wyrażał się dobrze o płk Kowalskim.
                  </span>
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      wyrażał się dobrze o płk kowalskim
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_484}>
                  <span className={styles.calibre2}>
                    Explanation: The final letter of the abbreviated word,
                    "pułkowniku", is different from the final letter of its
                    abbreviation, "płk", so the abbreviation must be followed by
                    a full stop.
                  </span>
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_2}>
                    For other proper names involving titles, use the official
                    spelling of the proper name. If in{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    doubt, do not abbreviate the title.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_486}>
                  <span className={styles.calibre2}>
                    Correct: Święty Antoni był jednym z prekursorów życia
                    zakonnego.
                  </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.calibre2}>
                    Incorrect: Św. Antoni był jednym z prekursorów życia
                    zakonnego.
                  </span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      święty antoni był jednym z prekursorów życia zakonnego
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_489}>
                  <span className={styles.calibre2}>
                    Explanation: The name is officially spelled "Święty Antoni".
                  </span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_23}>
                    In acronyms, do not use periods between letters.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_442}>Correct: GOPR, RdR, MDM, WSP</p>
                <p className={styles.block_491}>
                  <span className={styles.text_23}>
                    If a brand name uses periods, include the periods.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_21}>
                    Correct: Dr. Oetker robi najlepsze galaretki.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Official brand name as seen in the privacy
                      policy includes periods.
                    </span>
                  </span>
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
