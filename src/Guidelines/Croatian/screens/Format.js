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
            <PageContentHeader currentPage="Longform Croatian" />
            <div className="context text">
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
                <p className={styles.block_311}>
                  <span className={styles.text_2}>
                    Cardinals and ordinals from 0 to 9 are written with letters
                    (except for measures and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    currency - see Currency and Unit). Use digits for cardinals
                    and ordinals 10 and above,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    even if they are coordinated with numbers under 10.
                    Transcribe all decimal numbers as{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>digits.</span>
                </p>
                <p className={styles.block_312}>
                  <span className={styles.text_24}>
                    Correct: U razredu je devet učenika.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: numbers less than 10{' '}
                  </span>
                  <span className={styles.text_24}>
                    Correct: U razredu je 13 učenika.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: numbers greater than 9{' '}
                  </span>
                </p>
                <p className={styles.block_313}>
                  <span className={styles.text_24}>
                    Correct: Imam šest pasa i 12 papiga.{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Follow this rule even if the noun phrases
                      with numbers are coordinated.
                    </span>
                  </span>
                </p>
                <p className={styles.block_314}>Correct: 101 knjiga</p>
                <p className={styles.block_315}>
                  <span className={styles.text_24}>Correct: 3,14 </span>
                  <span className={styles.text_25}>
                    Explanation: decimal numbers{' '}
                  </span>
                  <span className={styles.text_24}>
                    Correct: U dvije škole ide ukupno 982 đaka.
                  </span>
                </p>
                <p className={styles.block_316}>
                  Correct: Dvije kile kruha koštaju 15,50 HRK.
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_2}>
                    If a large number consists of only a number followed by
                    "milijun", "milijarda", "trilijun", or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    higher, then transcribe as a numeral plus word. Otherwise,
                    transcribe as numerals.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_24}>
                    Correct: 1 milijun gusaka{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>jedan milijun gusaka </span>
                  <span className={styles.text_30}>" </span>
                  <span className={styles.text_24}>Correct: 1.000 gusaka </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>jedna tisuća gusaka </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_24}>
                    Correct: 1,5 milijarda ${' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      jedan zarez pet milijardi dolara{' '}
                    </span>
                  </span>
                  <span className={styles.text_30}>"</span>
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    jedna i po milijarda dolara{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.calibre2}>
                    Explanation: For mixed numbers before{' '}
                  </span>
                </p>
                <p className={styles.block_322}>
                  "milijun", "milijarda", etc., use decimals.
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_24}>
                    Correct: Na Zemlji živi 7 milijardi ljudi.{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      na zemlji živi sedam milijardi ljudi
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_324}>
                  <span className={styles.text_24}>Correct: 10.000 </span>
                  <span className={styles.text_25}>Incorrect: 10 tisuća </span>
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>deset tisuća </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_17}>
                    Write lists of numbers with digits and without commas.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_24}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      nula jedan jedan dva tri pet osam trinaest
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_24}>
                    Correct: 5 4 3 2 1 polijetanje{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    tri dva jedan polijetanje{' '}
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_328}>
                  <span className={styles.calibre2}>
                    Explanation: list of numbers, no comma if just
                  </span>
                </p>
                <p className={styles.block_329}>counting</p>
                <p className={styles.block_192}>
                  <span className={styles.text_24}>Correct: 3 4 5 6 7 </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    tri četiri pet šest sedam{' '}
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.text_2}>
                    In math expressions or units &amp; measures, transcribe
                    fraction words using numerals and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>slashes.</span>
                </p>
                <p className={styles.block_331}>
                  Correct: Trebaju 1/4 funte šećera.
                </p>
                <p className={styles.block_146}>
                  Incorrect: Trebaju 1 / 4 funte šećera.
                </p>
                <p className={styles.block_332}>
                  <span className={styles.calibre2}>
                    Incorrect: Trebaju ¼ funte šećera. (bad because it includes
                    the pre-combined fraction ¼)
                  </span>
                </p>
                <p className={styles.block_333}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    trebaju četvrtinu funte šećera{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_24}>
                    Correct: Nakon 3/4 milje, skrenite desno.{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      nakon tri četvrtine milje skrenite desno
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_335}>
                  Correct: Nakon 2/3 km, skrenite lijevo.
                </p>
                <p className={styles.block_336}>
                  <span className={styles.calibre2}>
                    Incorrect: Nakon dvije trećine km, skrenite lijevo.
                  </span>
                </p>
                <p className={styles.block_337}>
                  Incorrect: Nakon 2/3 kilometra, skrenite lijevo.
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      nakon dvije trećine kilometra skrenite lijevo
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_24}>
                    Correct: Treba nam 5/16 vijak.{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      treba nam pet kroz šesnaest vijak
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_195}>
                  <span className={styles.text_17}>
                    For mixed numbers that represent currency amounts, always
                    use decimals.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_24}>
                    Correct: Možeš li mi posuditi 2,50 $?{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      možeš li mi posuditi dva i po dolara
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.calibre2}>
                    Correct: Kupila je kuću na plaži za 7,5 milijuna $.
                  </span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      kupila je kuću na plaži za sedam i po milijuna dolara
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      kupila je kuću na plaži za sedam i pola milijuna dolara
                    </span>
                  </span>
                  <span className={styles.text_18}>"</span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      kupila je kuću na plaži za{' '}
                    </span>
                  </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_23}>
                    sedam zarez pola milijuna dolara{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_24}>Correct: 3,99 € </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    tri eura devedesetdevet centi{' '}
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_347}>
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
                <p className={styles.block_170}>Correct: mlijeko 2,8%</p>
                <p className={styles.block_93}>Correct: 1 milijun posto</p>
                <p className={styles.block_348}>
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
                <p className={styles.block_349}>
                  <span className={styles.text_2}>
                    Transcribe phone numbers using the most common format in the
                    transcription{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>language.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_350}>
                  <span className={styles.text_24}>
                    Correct: 01 656 3217 lokal 54{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      nula jedan šest pet šest tri dva jedan sedam lokal pedeset
                      četiri
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_351}>
                  <span className={styles.calibre2}>
                    Explanation: landline with leading "0" followed
                  </span>
                </p>
                <p className={styles.block_352}>by one-digit area code</p>
                <p className={styles.block_353}>
                  <span className={styles.text_24}>
                    Correct: +385 1 253 0000{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      plus tri osam pet jedan dva pet tri nula nula nula nula
                    </span>
                  </span>
                  <span className={styles.text_30}>"</span>
                </p>
                <p className={styles.block_354}>
                  Explanation: landline with country code
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_24}>
                    Correct: 00385 1 253 0000{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      nula nula tri osam pet jedan dva pet tri nula nula nula
                      nula
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_356}>
                  <span className={styles.text_24}>Correct: 051 622 389 </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      nula pet jedan šest dva dva tri osam devet
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_357}>
                  <span className={styles.calibre2}>
                    Explanation: landline with leading "0" followed
                  </span>
                </p>
                <p className={styles.block_352}>by two-digit area code</p>
                <p className={styles.block_358}>
                  <span className={styles.text_24}>Correct: 099 297 3856 </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      nula devet devet dva devet sedam tri osam pet šest
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_359}>
                  Explanation: mobile phone number
                </p>
                <p className={styles.block_192}>
                  <span className={styles.text_24}>Correct: 0800 6655 </span>
                  <span className={styles.text_25}>
                    Explanation: toll-free number{' '}
                  </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_2}>
                    If it really sounds like a math expression, then transcribe
                    it with numbers and symbols,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>with spaces in between.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_24}>Correct: 5 / 6 ³ </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    pet dijeljeno šest na treću{' '}
                  </span>
                  <span className={styles.text_30}>" Example audio: " </span>
                  <span className={styles.text_31}>
                    pet dijeljeno šest na kub{' '}
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_24}>
                    Correct: Koliko je 5 * 6?{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    koliko je pet puta šest{' '}
                  </span>
                  <span className={styles.text_30}>"</span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_32}>
                    <sub className={styles.calibre3}>Correct: √3 </sub>
                  </span>
                  <span className={styles.text_33}>Example audio: " </span>
                  <span className={styles.text_34}>drugi korijen iz tri </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_24}>
                    Correct: Koliko je 8 sati * 12 $?{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      koliko je osam sati puta dvanaest dolara
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.calibre2}>
                    Correct: Koliko je tri aligatora podijeljeno sa dvije
                    iguane?
                  </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={styles.block_367}>
                  <span className={styles.calibre2}>
                    Explanation: Does not sound like a true math expression with
                    useful units.
                  </span>
                </p>
                <p className={styles.block_368}>
                  <span className={styles.text_35}>
                    Transcribe currencies as commonly written in the
                    transcription language.
                  </span>
                  <span className={styles.text_36}> </span>
                  <span className={styles.text_26}>Correct: 20 kn </span>
                  <span className={styles.text_37}>Example audio: " </span>
                  <span className={styles.text_38}>dvadeset kuna </span>
                  <span className={styles.text_37}>" </span>
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_24}>Correct: 20 HRK </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>dvadeset kuna </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_370}>
                  <span className={styles.calibre2}>
                    Explanation: The symbol "HKR" should be used
                  </span>
                </p>
                <p className={styles.block_371}>
                  in the context of international transactions only.
                </p>
                <p className={styles.block_193}>
                  <span className={styles.text_24}>Correct: 10 $ </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>deset dolara </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_372}>Correct: 15 €</p>
                <p className={styles.block_373}>Incorrect: 15 Euro</p>
                <p className={styles.block_273}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>petnaest eura </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_374}>
                  <span className={styles.text_35}>
                    For all other currencies and slang terms for money, spell
                    out the words.
                  </span>
                  <span className={styles.text_36}> </span>
                  <span className={styles.text_26}>Correct: 200 jena </span>
                  <span className={styles.text_37}>Example audio: " </span>
                  <span className={styles.text_38}>dvije stotine jena </span>
                  <span className={styles.text_37}>"</span>
                </p>
                <p className={styles.block_375}>Incorrect: 200 ¥</p>
                <p className={styles.block_376}>
                  <span className={styles.text_35}>
                    For degrees, use the ° symbol.
                  </span>
                  <span className={styles.text_36}> </span>
                  <span className={styles.text_26}>Correct: Vani je 20°. </span>
                </p>
                <p className={styles.block_377}>Correct: Vani je 20 °C.</p>
                <p className={styles.block_378}>
                  <span className={styles.text_24}>
                    Correct: U Milwaukiju je pet ispod nule.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Incorrect: U Milwaukiju je -5.{' '}
                  </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    u milwaukiju je pet ispod nule{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.text_17}>
                    Abbreviate all units that follow numeric values.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_381}>
                  <span className={styles.calibre2}>
                    Correct: Moja obitelj je kupila 10 l soka od naranče.
                  </span>
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      moja obitelj je kupila deset litara soka od naranče
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_24}>Correct: 3 kg </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>tri kilograma </span>
                  <span className={styles.text_30}>" </span>
                  <span className={styles.text_24}>
                    Correct: Kreni 100 m južno.{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    kreni sto metara južno{' '}
                  </span>
                  <span className={styles.text_30}>" </span>
                  <span className={styles.text_24}>
                    Correct: Kupio bih 3 kg brašna.{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    kupio bih tri kilograma brašna{' '}
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_24}>
                    Correct: 1 l ima 1.000 ml.{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      jedna litra ima tisuću mililitara
                    </span>
                  </span>
                  <span className={styles.text_30}>"</span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_2}>
                    If it is clear from context that a number or number sequence
                    refers to currency or time,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>format it as such.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_386}>
                  Correct: Namjestite alarm za 5:45.
                </p>
                <p className={styles.block_387}>
                  Incorrect: Namjestite alarm za 545.
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={styles.block_389}>
                  <span className={styles.text_17}>
                    Use the natural form for transcribing dates.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      namjestite alarm za pet četrdeset pet
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_24}>
                    Correct: 12. srpnja 1964.{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      dvanaesti srpnja tisuću devetsto šezdeset četvrte
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_24}>Correct: jesen '78 </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>jesen sedamdeset osme </span>
                  <span className={styles.text_30}>" </span>
                  <span className={styles.text_24}>Correct: muzika 80-ih </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>muzika osamdesetih </span>
                  <span className={styles.text_30}>" </span>
                  <span className={styles.text_24}>
                    Correct: srijeda, 6. ožujaka{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>srijeda šesti ožujka </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_393}>
                  <span className={styles.text_24}>
                    Correct: rođen je 19. veljače 1976. godine.{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      rođen je devetnaesti veljače tisuću devetsto sedamdeset
                      šeste godine
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_17}>
                    Use the natural form for transcribing times whenever
                    possible.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_2}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>so.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_24}>Correct: 3:00 </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>tri sata </span>
                  <span className={styles.text_30}>"</span>
                </p>
                <p className={styles.block_201}>
                  <span className={styles.text_24}>
                    Correct: Namjesti alarm u 4:00.{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    namjesti alarm u četiri sata{' '}
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_24}>Correct: 1:50 </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>deset do dva </span>
                  <span className={styles.text_30}>" Example audio: " </span>
                  <span className={styles.text_31}>dva manje deset </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_24}>Correct: 3:15 </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>tri i petnaest </span>
                  <span className={styles.text_30}>" </span>
                  <span className={styles.text_24}>Correct: 19:20 </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>devetnaest i dvadeset </span>
                  <span className={styles.text_30}>" </span>
                  <span className={styles.text_24}>Correct: 7:30 </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>sedam i pol </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_399}>Correct: 16:00</p>
                <p className={styles.block_400}>Incorrect: 4:00 poslijepodne</p>
                <p className={styles.block_401}>
                  <span className={styles.text_35}>
                    Use "ponoć" and "podne" if spoken.
                  </span>
                  <span className={styles.text_36}> </span>
                  <span className={styles.text_26}>Correct: podne </span>
                </p>
                <p className={styles.block_402}>Incorrect: 12:00</p>
                <p className={styles.block_403}>Correct: ponoć</p>
                <p className={styles.block_400}>Incorrect: 24:00</p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={styles.block_405}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    četiri sata poslijepodne{' '}
                  </span>
                  <span className={styles.text_18}>" Example audio: " </span>
                  <span className={styles.text_23}>šesnaest sata </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>podne </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>ponoć </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_408}>
                  <span className={styles.text_2}>
                    Favor full spellings over abbreviations where natural, but
                    use abbreviations when{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>explicitly spoken.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_17}>
                    Use commas for ENTITY, LOCATION.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_163}>
                  Correct: Cafe Noriter, Estrada Street
                </p>
                <p className={styles.block_94}>
                  Correct: Makati City Hall, Manila
                </p>
                <p className={styles.block_94}>
                  Correct: Hotel Jadran, Vlaška 50
                </p>
                <p className={styles.block_93}>
                  Correct: Avenija Dubrovnik, 10020 Zagreb
                </p>
                <p className={styles.block_94}>
                  Correct: Prilaz oslobođenja 19 A, Zagreb
                </p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: Ministarstvo gospodarstva, Ulica grada
                  </span>
                </p>
                <p className={styles.block_410}>Vukovara 78, 10 000 Zagreb</p>
                <p className={styles.block_94}>
                  Correct: Ulica Asje Petričić 7, 23000 Zadar
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={styles.block_412}>
                  <span className={styles.text_2}>
                    Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>capitalize them.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_24}>
                    Correct: www.google.co.uk{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      w w w točka google točka c o točka u k
                    </span>
                  </span>
                  <span className={styles.text_30}>"</span>
                </p>
                <p className={styles.block_201}>
                  <span className={styles.text_24}>Correct: amazon.com </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>amazon točka com </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_24}>
                    Correct: http://123.com{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      h t t p colon slash slash one two three dot com
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_24}>
                    Correct: mike@example.org{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    mike et example točka org{' '}
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      mike manki example točka org{' '}
                    </span>
                  </span>
                </p>
                <p className={styles.block_416}>"</p>
                <p className={styles.block_193}>
                  <span className={styles.text_24}>
                    Correct: Volim pizzu. #gladan{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    volim picu ljestve gladan{' '}
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_24}>
                    Correct: www.facebook.com{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      w w w točka fejsbuk točka com{' '}
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_2}>
                    If the speaker drops a "w" or dots and it's an obvious URL,
                    you should correct these{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    errors. If the speaker doesn't say the "w"s at all, do not
                    add them.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_24}>
                    Correct: www.google.com.hr{' '}
                  </span>
                  <span className={styles.text_25}>
                    Incorrect: ww.google.com.hr{' '}
                  </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_24}>
                    Correct: www.forbes.com{' '}
                  </span>
                  <span className={styles.text_25}>
                    Incorrect: wwwforbes.com{' '}
                  </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      w w točka google točka kom točka h r
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_422}>
                  <span className={styles.calibre2}>
                    Explanation: If the user mistakenly says "ww", transcribe
                    "www".
                  </span>
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    w w w forbes točka com{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.calibre2}>
                    Explanation: Also transcribe the dot in an obvious URL, even
                    if the speaker did not include it.
                  </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_24}>Correct: www.123.com </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      w w w jedan dva tri točka com{' '}
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_24}>
                    Correct: www.facebook.com{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      w w točka facebook točka com{' '}
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_335}>Correct: 123.com</p>
                <p className={styles.block_427}>
                  <span className={styles.text_27}>
                    Incorrect: www.123.com{' '}
                  </span>
                  <span className={styles.text_29}> </span>
                </p>
              </div>
              <div id="abbreviation">
                <span className={'heading'}>Abbreviation</span>
                <p className={styles.block_273}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    jedan dva tri točka com{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.calibre2}>
                    Explanation: If the speaker doesn't say "www." it shouln't
                    be added.
                  </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_17}>
                    Do not abbreviate unless the speaker says an abbreviated
                    form.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_24}>
                    Correct: Cibalia versus Šibenika{' '}
                  </span>
                  <span className={styles.text_25}>
                    Incorrect: Cibalia vs. Šibenika{' '}
                  </span>
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_24}>
                    Correct: Ulica grada Vukovara{' '}
                  </span>
                  <span className={styles.text_25}>
                    Incorrect: Ul. Grada Vukovara{' '}
                  </span>
                </p>
                <p className={styles.block_431}>Correct: i tako dalje</p>
                <p className={styles.block_373}>Incorrect: itd.</p>
                <p className={styles.block_432}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    cibalia versus šibenika{' '}
                  </span>
                  <span className={styles.text_18}>" Example audio: " </span>
                  <span className={styles.text_23}>ulica grada vukovara </span>
                  <span className={styles.text_18}>" Example audio: " </span>
                  <span className={styles.text_23}>i tako dalje </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_433}>
                  Abbreviate titles for people only when they precede proper
                  names.
                </p>
                <p className={styles.block_138}>
                  Correct: Poznajem dr. Schustera.
                </p>
                <p className={styles.block_94}>
                  Correct: Gđa Jones nije dostupna.
                </p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: Vidio sam predsjednika na televiziji
                  </span>
                </p>
                <p className={styles.block_265}>danas.</p>
                <p className={styles.block_434}>
                  <span className={styles.text_24}>
                    Correct: dr. sc. Ivana Ivančić, doc{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    <span className={styles.calibre2}>
                      doktor znanosti ivana ivančić docent
                    </span>
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_24}>
                    Correct: g. Marin Blagojević{' '}
                  </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>
                    gospodin marin blagojević{' '}
                  </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_17}>
                    List of common abbreviations for titles.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>godina, gospodin - g. </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    blaženi, blažena - bl.{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    plemeniti, plemenita - pl.{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>sveti, svezak - sv. </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>diplomirani - dipl. </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>profesor - prof. </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>doktor - dr. </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>magistar - mr. </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>akademik - akad. </span>
                </p>
                <p className={styles.block_197}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>inženjer - ing. </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>monsinjor - msgr. </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>velečasni - vlč. </span>
                </p>
                <p className={styles.block_436}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_138}>Correct: MP3, AT&amp;T, NASA</p>
                <p className={styles.block_94}>Correct: GONG, MUP, SRCE</p>
                <p className={styles.block_94}>Correct: UNESCO, IBM, EU, USA</p>
                <p className={styles.block_93}>
                  <span className={styles.calibre2}>
                    Correct: HNK, HAZU, INA, HVIDRA. MIOC,{' '}
                  </span>
                </p>
                <p className={styles.block_133}>USKOK, JMGB, PDV, FER, BiH</p>
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
