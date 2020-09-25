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
            <PageContentHeader currentPage="Longform French" />
            <div className="context text">
              {' '}
              <p className={'large-heading'}>Format </p>
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
                <p className={styles.block_399}>
                  <span className={styles.text_19}>
                    Write lists of numbers with digits and without commas.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_400}>
                  <span className={styles.text_21}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      zéro un un deux trois cinq huit treize
                    </span>
                  </span>
                  <span className={styles.text_24}>"</span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_21}>
                    Correct: 5 4 3 2 1 départ{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: list of numbers, no comma if just counting
                    </span>
                  </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_19}>
                    For long numbers (4+ digits), transcribe the string of
                    digits without any separator.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_21}>Correct: 10000 </span>
                  <span className={styles.text_22}>
                    Incorrect: 10 000 Incorrect: 10.000 Incorrect: 10,000
                  </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>dix mille </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_2}>
                    In math expressions or units &amp; measures, transcribe
                    fraction words using numerals and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>slashes.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_174}>
                  Correct: Ils ont besoin d'1/4 de kilo de sucre.
                </p>
                <p className={styles.block_406}>
                  <span className={styles.calibre2}>
                    Incorrect: Ils ont besoin d'un quart de kilo de sucre.
                  </span>
                </p>
                <p className={styles.block_407}>
                  Incorrect: Ils ont besoin d'1 / 4 de kilo de sucre. Incorrect:
                  Ils ont besoin d'¼ de kilo de sucre.
                </p>
                <p className={styles.block_408}>
                  <span className={styles.calibre2}>
                    Incorrect: Ils ont besoin d'un 1/4 de kilo de sucre.
                  </span>
                </p>
                <p className={styles.block_409}>
                  Incorrect: Ils ont besoin de 0,25 kilo de sucre.
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_21}>
                    Correct: Ajoutez 1/4 de litre au mélange.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Ajoutez 1/4 L au mélange.{' '}
                  </span>
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      ils ont besoin d'un quart de kilo de sucre
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.calibre2}>
                    Explanation: Here, the "un" before "quart" is part of the
                    fraction, so don't include it in the transcription. Also, be
                    careful not to include spaces or pre-combined fraction
                    characters like ¼.
                  </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      ajoutez un quart de litre au mélange
                    </span>
                  </span>
                  <span className={styles.text_20}>"</span>
                </p>
                <p className={styles.block_414}>
                  Correct: C'est une course sur 2/3 de kilomètre.
                </p>
                <p className={styles.block_415}>
                  <span className={styles.calibre2}>
                    Incorrect: C'est une course sur deux tiers de km.
                  </span>
                </p>
                <p className={styles.block_416}>
                  Incorrect: C'est une course sur 2 tiers de km.
                </p>
                <p className={styles.block_417}>Correct: 2/3 x 5/16</p>
                <p className={styles.block_418}>
                  Incorrect: deux tiers x cinq seizièmes Incorrect: deux tiers
                  fois cinq seizièmes Incorrect: 2/3 fois 5/16
                </p>
                <p className={styles.block_419}>
                  <span className={styles.calibre2}>
                    Explanation: If the query contains the words "de" or "d'"
                    after the fraction, they should be transcribed.
                  </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      c'est une course sur deux tiers de km
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.calibre2}>
                    Explanation: If the speaker does not use "de" or after the
                    fraction, leave it out of the
                  </span>
                </p>
                <p className={styles.block_422}>transcription.</p>
                <p className={styles.block_423}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    deux tiers fois cinq seizièmes{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_2}>
                    When the speaker says "quart" or "demi", transcribe as a
                    fraction if less than one or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    transcribe as a decimal if more than one. If not natural,
                    then write down the full word.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_425}>
                  Correct: Verser 1/2 L d'eau sur le mélange.
                </p>
                <p className={styles.block_426}>
                  <span className={styles.calibre2}>
                    Incorrect: Verser un demi-litre d'eau sur le mélange.
                  </span>
                </p>
                <p className={styles.block_416}>
                  Incorrect: Verser 0,5 L d'eau sur le mélange.
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_21}>
                    Correct: Ajouter 1/4 de litre de lait.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Ajouter un quart de litre de lait.
                  </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      verser un demi litre d'eau sur le mélange
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      ajouter un quart de litre de lait
                    </span>
                  </span>
                  <span className={styles.text_20}>"</span>
                </p>
                <p className={styles.block_430}>
                  Incorrect: Ajouter 0,25 de L de lait.
                </p>
                <p className={styles.block_431}>Correct: Verser 2,5 L d'eau.</p>
                <p className={styles.block_432}>
                  Incorrect: Verser 2 1/2 litres d'eau. Incorrect: Verser 2 L et
                  demi d'eau.
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_21}>
                    Correct: Mon fils a 5 ans et demi.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Mon fils a 5 ans et 1/2. Incorrect: Mon fils a 5
                    ans 1/2. Incorrect: Mon fils a 5,5 ans.
                  </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_21}>
                    Correct: J'ai mangé 3 tartes et demi.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: J'ai mangé 3,5 tartes. Incorrect: J'ai mangé 3
                    tartes 1/2. Incorrect: J'ai mangé 3 tartes et 1/2.
                  </span>
                </p>
                <p className={styles.block_273}>Correct: 3,5 + 4,5</p>
                <p className={styles.block_274}>Incorrect: 3 1/2 + 4 1/2</p>
                <p className={styles.block_264}>
                  Incorrect: 3 et 1/2 + 4 et 1/2
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      verser deux litres et demi d'eau{' '}
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    mon fils a cinq ans et demi{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                  <span className={styles.text_22}>
                    Explanation: For ages, use the written out form.
                  </span>
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    j'ai mangé trois tartes et demi{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.calibre2}>
                    Explanation: For items (not units), use the written out
                    form.
                  </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      trois et demi plus quatre et demi
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.calibre2}>
                    Explanation: For maths, stick to what the speaker says or to
                    what makes sense in mathematical operations.
                  </span>
                </p>
                <p className={styles.block_180}>
                  <span className={styles.text_21}>Correct: midi et demi </span>
                  <span className={styles.text_22}>
                    Incorrect: midi et 1/2 Incorrect: midi 1/2
                  </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>midi et demi </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.calibre2}>
                    Explanation: For time, stick to what the speaker says and
                    don't use fractions, see more in Format&gt;Time.
                  </span>
                </p>
                <p className={styles.block_441}>
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
                <p className={styles.block_145}>
                  Correct: J'ai été augmenté de 57 %.
                </p>
                <p className={styles.block_139}>
                  Correct: 1 million de pour cent.
                </p>
                <p className={styles.block_139}>
                  Correct: 50 % des cookies ont disparu.
                </p>
                <p className={styles.block_442}>
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
                <p className={styles.block_443}>
                  <span className={styles.text_19}>
                    Use Roman numerals only when part of an official name or
                    title.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_444}>Correct: Super Bowl XLVII</p>
                <p className={styles.block_371}>Incorrect: Super Bowl 47</p>
                <p className={styles.block_445}>
                  Incorrect: Super Bowl quarante-sept
                </p>
                <p className={styles.block_275}>Correct: Louis XVI</p>
                <p className={styles.block_445}>Incorrect: Louis 16</p>
                <p className={styles.block_446}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    super bowl quarante-sept{' '}
                  </span>
                  <span className={styles.text_20}>" Example audio: " </span>
                  <span className={styles.text_23}>louis seize </span>
                  <span className={styles.text_20}>"</span>
                </p>
                <p className={styles.block_336}>Incorrect: Louis seize</p>
                <p className={styles.block_447}>
                  <span className={styles.text_21}>Correct: GTA IV </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>gta quatre </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_28}>
                    Transcribe seasons and episodes of television shows with
                    numerals.
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>
                    Correct: saison 3 épisode 2{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>
                    saison trois épisode deux{' '}
                  </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_2}>
                    Transcribe phone numbers using the most common format in the
                    transcription{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>language.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_21}>Correct: 0126578942 </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    zéro un vingt-six cinquante sept quatre-vingt-neuf
                    quarante-deux{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_451}>
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
                <p className={styles.block_145}>Correct: XT 660 or XT660</p>
                <p className={styles.block_452}>
                  <span className={styles.text_2}>
                    If it really sounds like a math expression, then transcribe
                    it with numbers and symbols,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>with spaces in between.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_21}>Correct: 5 / 6 x 3 </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      cinq divisé par six multiplié par trois
                    </span>
                  </span>
                  <span className={styles.text_24}>"</span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_21}>
                    Correct: Combien font 5 x 6 ?{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Combien font cinq fois six ? Incorrect: Combien
                    font 5 fois 6 ? Incorrect: Combien font 5 * 6 ?
                  </span>
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    combien font cinq fois six{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_33}>
                    <sub className={styles.calibre3}>Correct: √3 </sub>
                  </span>
                  <span className={styles.text_34}>Example audio: " </span>
                  <span className={styles.text_35}>
                    racine carrée de trois{' '}
                  </span>
                  <span className={styles.text_34}>" </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_21}>
                    Correct: Combien font 8 heures x 12 € ?{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      combien font huit heures fois douze euros
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.calibre2}>
                    Correct: Combien font trois alligators divisé par quatre
                    iguanes ?
                  </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_28}>
                    The division sign is "/", and not ":" or "÷".
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>Correct: 13 / 7 </span>
                </p>
                <p className={styles.block_460}>Incorrect: 13 : 7</p>
                <p className={styles.block_461}>Incorrect: 13 ÷ 7</p>
                <p className={styles.block_462}>
                  <span className={styles.text_28}>
                    The multiplication sign is "x", and not "*".
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>Correct: 2 x 9 </span>
                </p>
                <p className={styles.block_463}>Incorrect: 2 * 9</p>
                <p className={styles.block_464}>
                  <span className={styles.calibre2}>
                    Explanation: Does not sound like a true math expression with
                    useful units.
                  </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    treize divisé par sept{' '}
                  </span>
                  <span className={styles.text_20}>" Example audio: " </span>
                  <span className={styles.text_23}>treize sur sept </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>deux fois neuf </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    deux multiplié par neuf{' '}
                  </span>
                  <span className={styles.text_20}>"</span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_19}>The power sign is "^".</span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_21}>Correct: 2 ^ 9 </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>deux puissance neuf </span>
                  <span className={styles.text_24}>" Example audio: " </span>
                  <span className={styles.text_25}>
                    deux puissance de neuf{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    deux à la puissance de neuf{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_471}>
                  The square root sign is "√". Don't put a blank space after it.
                </p>
                <p className={styles.block_472}>Correct: √9</p>
                <p className={styles.block_473}>Incorrect: √ 9</p>
                <p className={styles.block_474}>
                  Incorrect: racine carrée de 9
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>racine de neuf </span>
                  <span className={styles.text_20}>" Example audio: " </span>
                  <span className={styles.text_23}>racine carrée de neuf </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_2}>
                    Ordinal numbers higher than 9 must always be written in
                    their numerical forms. Simply{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    put an "e" after the number.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_425}>Correct: Il est arrivé 34e.</p>
                <p className={styles.block_445}>
                  Incorrect: Il est arrivé 34ème.
                </p>
                <p className={styles.block_445}>
                  Incorrect: Il est arrivé trente-quatrième.
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    il est arrivé trente-quatrième{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_2}>
                    Ordinal numbers from 0 to 9 are spelled out unless they
                    refer to maths, centuries,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    degrees or list of numbers.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>
                  Correct: Il est en 5e et son frère en 2de.
                </p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Il est en cinquième et son frère en
                  </span>
                </p>
                <p className={styles.block_479}>seconde.</p>
                <p className={styles.block_480}>
                  <span className={styles.text_19}>
                    Use the following abbreviations for ordinals.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>1er </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>1re </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>2d </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>2de </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>3e </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>4e </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>
                  <span className={styles.text_}>Currency and unit</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_484}>
                  <span className={styles.text_19}>
                    Transcribe currencies as commonly written in the
                    transcription language.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_19}>
                    All currencies, except euros, must always be spelled out.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_147}>
                  Correct: Le nouvel iPhone coûte 649 dollars.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Le nouvel iPhone coûte 649 $.
                </p>
                <p className={styles.block_148}>
                  Incorrect: Le nouvel iPhone coûte $649.
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Le ticket de métro m'a coûté plus de 4
                  </span>
                </p>
                <p className={styles.block_486}>livres.</p>
                <p className={styles.block_90}>
                  <span className={styles.calibre2}>
                    Incorrect: Le ticket de métro m'a coûté plus de
                  </span>
                </p>
                <p className={styles.block_487}>4 £.</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Le ticket de métro m'a coûté plus de
                  </span>
                </p>
                <p className={styles.block_488}>£4.</p>
                <p className={styles.block_489}>
                  <span className={styles.text_2}>
                    For Euro, use the euro sign (€) if it refers to an amount of
                    money. The euro sign should{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    always follow the amount and a blank space.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>Correct: Je te dois 10 €.</p>
                <p className={styles.block_298}>Incorrect: Je te dois 10€.</p>
                <p className={styles.block_371}>
                  Incorrect: Je te dois 10 euros.
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_21}>
                    Correct: Le cours de l'euro est imprévisible.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Le cours de l'€ est imprévisible.
                  </span>
                </p>
                <p className={styles.block_491}>
                  Explanation: This is not an amount of euros.
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_28}>
                    For ranges or non-specific currency quantities, write
                    everything out as spoken.
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>
                    Correct: Il me faut deux ou trois cents euros.
                  </span>
                </p>
                <p className={styles.block_493}>
                  Correct: entre un et cinq euros
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_21}>
                    Correct: 100 à 500 euros{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    cent à cinq cents euros{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                  <span className={styles.text_21}>Correct: 9 à 12 euros </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>neuf à douze euros </span>
                  <span className={styles.text_24}>" </span>
                  <span className={styles.text_21}>
                    Correct: un euro ou deux{' '}
                  </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_19}>
                    Abbreviate all units that follow numeric values.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_444}>
                  Correct: Il a acheté 10 kg d'oranges.
                </p>
                <p className={styles.block_437}>
                  <span className={styles.calibre2}>
                    Incorrect: Il a acheté 10 kilogrammes d'oranges.
                  </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    il a acheté dix kilos d'oranges{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_496}>
                  Do not abbreviate units when they don't follow numeric values,
                  typically with fractions.
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_21}>
                    Correct: Ajouter 1/4 de litre de lait.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Ajouter 1/4 de L de lait.{' '}
                  </span>
                </p>
                <p className={styles.block_182}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      ajouter un quart de litre de lait
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_19}>
                    Transcribe all numeric values preceding units in numeral
                    form, even if under 10.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_147}>
                  <span className={styles.calibre2}>
                    Correct: L'association a reçu 1000000 € de
                  </span>
                </p>
                <p className={styles.block_345}>dons.</p>
                <p className={styles.block_91}>Correct: Le chiot pèse 2 kg.</p>
                <p className={styles.block_139}>
                  Correct: J'ai vécu là-bas 6 mois.
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_2}>
                    If it is clear from context that a number or number sequence
                    refers to currency or time,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>format it as such.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_21}>
                    Correct: Le sans-plomb est à 1,50 € le litre.{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      le sans-plomb est à un cinquante le litre
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_501}>
                  <span className={styles.calibre2}>
                    Correct: Sa voiture comsomme 8 litres aux 100 km.
                  </span>
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_19}>
                    Common technical abbreviations
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un kilooctet - 1 ko </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un mégaoctet - 1 Mo </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un gigaoctet - 1 Go </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un téraoctet - 1 To </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un kilobyte - 1 kB</span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      sa voiture consomme huit litres aux cent
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un mégabyte - 1 MB </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un gigabyte - 1 GB </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un térabyte - 1 TB </span>
                </p>
                <p className={styles.block_508}>
                  <span className={styles.text_19}>
                    Slang terms (spell them out)
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>kilo </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>balle </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>plaque </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_19}>
                    Common measurements of distance and rate
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un mile - 1 mi </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un millimètre - 1 mm </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un centimètre - 1 cm </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un mètre - 1 m </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un kilomètre - 1 km </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>
                    un kilomètre par heure - 1 km/h{' '}
                  </span>
                  <span className={styles.text_38}>● </span>
                  <span className={styles.text_39}>un pied - 1 pi </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un pouce - 1 po </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_19}>
                    Common measurements of area
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>
                    un centimètre carré - 1 cm²{' '}
                  </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un mètre carré - 1 m² </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>
                    un kilomètre carré - 1 km²{' '}
                  </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un hectare - 1 ha </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un acre - 1 acre </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un pied carré - 1 pi² </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>
                    un pouce carré - 1 po²{' '}
                  </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_19}>
                    Common scientific terms
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un décibel - 1 dB </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un newton - 1 N </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un joule - 1 J</span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un parsec - 1 pc </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un ampère - 1 A </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un hertz - 1 Hz </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un watt - 1 W </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un Kilowatt - 1 kW </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un mole - 1 mol </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un candela - 1 cd </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un lumen - 1 lm </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un degré(s) - 1 ° </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un Fahrenheit - 1 F </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un Celsius - 1 C </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>
                    un degré centigrade - 1 °{' '}
                  </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un kelvin - 1 K </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_19}>
                    Common measurements of weight and volume
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un livre - 1 lb </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un once - 1 oz </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un litre - 1 L </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un gramme - 1 g </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un milligramme - 1 mg </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un kilogramme - 1 kg </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>
                    un unité cubique - 1 ³{' '}
                  </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>un mètre cube - 1 m³ </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_36}>● </span>
                  <span className={styles.text_37}>
                    un centimètre cube - 1 cm³{' '}
                  </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={styles.block_517}>
                  <span className={styles.text_19}>
                    Use the natural form for transcribing dates.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_21}>
                    Correct: le 12 juillet 1964{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      le douze juillet mille neuf cent soixante-quatre
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_21}>
                    Correct: à l'automne 2007{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    à l'automne deux mille sept{' '}
                  </span>
                  <span className={styles.text_24}>"</span>
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_21}>
                    Correct: évocateur des années 80{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    évocateur des années quatre vingt{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_21}>
                    Correct: mercredi 6 mars{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>mercredi six mars </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_19}>
                    Exception: When the date is spoken as a sequence of numbers,
                    transcribe as such.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_21}>Correct: 07/12/2010 </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      sept slash douze slash deux mille dix
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_21}>
                    Correct: La date d'expiration est le 05/10/2012.{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      la date d'expiration est le zéro cinq dix deux mille douze
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_524}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      la date d'expiration est le cinq{' '}
                    </span>
                  </span>
                </p>
                <p className={styles.block_525}>
                  <span className={styles.text_23}>dix deux mille douze </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_2}>
                    When the day or the month number is 9 or less, add a zero
                    before, whether the speaker{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>said it or not.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_21}>Correct: 08/05/1945 </span>
                  <span className={styles.text_22}>Incorrect: 8/5/1945 </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      huit cinq mille neuf cent quarante-cinq
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      zéro huit cinq mille neuf cent quarante-cinq
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      huit zéro cinq mille neuf cent quarante-cinq
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      zéro huit zéro cinq mille neuf cent quarante-cinq
                    </span>
                  </span>
                  <span className={styles.text_20}>"</span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_21}>
                    Correct: La date d'expiration est le 05/10/2012.{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      la date d'expiration est le zéro cinq dix deux mille douze
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_524}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      la date d'expiration est le cinq{' '}
                    </span>
                  </span>
                </p>
                <p className={styles.block_525}>
                  <span className={styles.text_23}>dix deux mille douze </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_19}>
                    The year number can be two or four digits, depending on what
                    the speaker said.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_21}>Correct: 14/07/1998 </span>
                  <span className={styles.text_22}>Incorrect: 14/07/98 </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_21}>Correct: 14/07/98 </span>
                  <span className={styles.text_22}>Incorrect: 14/07/1998 </span>
                </p>
                <p className={styles.block_182}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      quatorze sept mille neuf cent quatre-vingt dix-huit
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      quatorze zéro sept mille neuf cent quatre-vingt dix-huit
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    quatorze sept quatre-vingt dix huit{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    quatorze zéro sept quatre vingt dix-huit{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_19}>
                    If the speaker did not pronounce any year, don't put any.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_21}>
                    Correct: On s'y retrouve le 03/11{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    on s'y retrouve le trois onze{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_146}>
                  <span className={styles.text_19}>
                    Use the natural form for transcribing times whenever
                    possible.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_2}>
                    Write times in "nnhnn" format whenever possible, unless it
                    would look unnatural to do{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>so.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_255}>
                  <span className={styles.text_21}>Correct: 3h </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>trois heures </span>
                  <span className={styles.text_24}>"</span>
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_21}>Correct: à 4h </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>à quatre heures </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_21}>Correct: 3h15 </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>trois heures quinze </span>
                  <span className={styles.text_24}>" Example audio: " </span>
                  <span className={styles.text_25}>trois heures et quart </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_21}>Correct: 12h </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>midi </span>
                  <span className={styles.text_24}>" Example audio: " </span>
                  <span className={styles.text_25}>douze heures </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_21}>
                    Correct: Mon train arrive à 11h36{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      mon train arrive à midi moins vingt-quatre
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_21}>Correct: 6h05 </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>six heures zéro cinq </span>
                  <span className={styles.text_24}>" Example audio: " </span>
                  <span className={styles.text_25}>six heures cinq </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_21}>Correct: 3h15 </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>trois heures et quart </span>
                  <span className={styles.text_24}>" </span>
                  <span className={styles.text_21}>Correct: 1h50 </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>deux heures moins dix </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_21}>
                    Correct: quelques minutes après 3h{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      quelques minutes après trois heures
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_21}>
                    Correct: 2h10 moins le quart{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      deux heures dix euh moins le quart
                    </span>
                  </span>
                  <span className={styles.text_24}>"</span>
                </p>
                <p className={styles.block_547}>
                  <span className={styles.text_19}>
                    When the time does not have minutes, do not add "00".
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_444}>Correct: 18h</p>
                <p className={styles.block_264}>Incorrect: 18h00</p>
                <p className={styles.block_548}>Correct: 18h00</p>
                <p className={styles.block_264}>Incorrect: 18h</p>
                <p className={styles.block_549}>
                  <span className={styles.text_21}>
                    Correct: On se voit dans 2h.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: On se voit dans 2h00.{' '}
                  </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>dix huit heures </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    dix huit heures zéro zéro{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.calibre2}>
                    Explanation: If the speaker explicitely says "zéro zéro",
                    then transcribe it.
                  </span>
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    on se voit dans deux heures{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_2}>
                    If the speaker adds "du matin", "de l'après-midi" or "du
                    soir", add it after the time, but{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    don't change the time itself, accordingly..
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_553}>Correct: 6h du soir</p>
                <p className={styles.block_274}>Incorrect: 18h</p>
                <p className={styles.block_280}>
                  <span className={styles.text_21}>
                    Correct: Je suis rentré à 3h du matin{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Je suis rentré à 3h.{' '}
                  </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={styles.block_404}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>six heures du soir </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      je suis rentré à trois heures du matin
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_2}>
                    Favor full spellings over abbreviations where natural, but
                    use abbreviations when{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>explicitly spoken.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_557}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_151}>
                  Correct: McDonald's, Place de Clichy
                </p>
                <p className={styles.block_139}>Correct: cafés, 95129</p>
                <p className={styles.block_139}>
                  Correct: Marie Richard, Rennes
                </p>
                <p className={styles.block_91}>
                  Correct: docteur Bernard, Strasbourg
                </p>
                <p className={styles.block_139}>Correct: Castorama, Toulouse</p>
                <p className={styles.block_139}>
                  Correct: scie circulaire, Paris
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: séances pour le Retour du Roi,{' '}
                  </span>
                </p>
                <p className={styles.block_558}>Perpignan</p>
                <p className={styles.block_559}>
                  <span className={styles.text_28}>
                    Do not capitalize cardinal directions unless part of a
                    specific place name.
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>
                    Correct: Il habite à Tours-Sud.{' '}
                  </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_21}>
                    Correct: Il a rendez-vous dans l'est de la ville.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: No need to capitalize "est" because it's not
                      part of a proper place name.
                    </span>
                  </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={styles.block_562}>
                  <span className={styles.text_2}>
                    Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>capitalize them.</span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_21}>
                    Correct: www.google.co.kr{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      trois w point google point c o point k r
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_21}>Correct: amazon.com </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>amazon point com </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_21}>
                    Correct: http://123.com{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      h t t p deux points slash slash un deux trois point com
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_21}>
                    Correct: mike@exemple.org{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      mike arobase exemple point org{' '}
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_21}>
                    Correct: J'aime la pizza. #faim{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    j'aime la pizza hashtag faim{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_21}>
                    Correct: #faim Où est ma pizza ?{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      hashtag faim où est ma pizza{' '}
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.calibre2}>
                    Correct: J'ai tellement #faim que je pourrais manger une
                    pizza entière.
                  </span>
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      j'ai tellement mot-dièse faim que je pourrais manger une
                      pizza entière
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_568}>
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
                <p className={styles.block_208}>
                  <span className={styles.text_21}>
                    Correct: www.amazon.com{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    w w point amazon point com{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_569}>
                  <span className={styles.calibre2}>
                    Explanation: If the user mistakenly says "ww",
                  </span>
                </p>
                <p className={styles.block_570}>transcribe "www".</p>
                <p className={styles.block_539}>
                  <span className={styles.text_21}>Correct: google.co.uk </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>google point co u k </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_571}>
                  <span className={styles.calibre2}>
                    Explanation: Also transcribe the dot in an
                  </span>
                </p>
                <p className={styles.block_572}>
                  <span className={styles.calibre2}>
                    obvious URL, even if the speaker did not{' '}
                  </span>
                </p>
                <p className={styles.block_573}>include it.</p>
                <p className={styles.block_574}>
                  <span className={styles.text_21}>
                    Correct: www.forbes.com{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    w w w forbes point com{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                  <span className={styles.text_21}>
                    Correct: www.facebook.com{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    w w facebook point com{' '}
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_2}>
                    If a URL is spelled out in individual letters, transcribe
                    without spaces between individual{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>letters.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_21}>
                    Correct: www.exemple.com{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      w w w point e x e m p l e point c o m
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={styles.block_578}>
                  <span className={styles.text_19}>
                    Do not abbreviate unless the speaker says an abbreviated
                    form.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_21}>
                    Correct: PSG versus OM{' '}
                  </span>
                  <span className={styles.text_22}>Incorrect: PSG vs OM </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>psg versus om </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_30}>Correct: PSG vs OM </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>psg v s om </span>
                  <span className={styles.text_31}>" </span>
                  <span className={styles.text_28}>
                    Do not abbreviate titles.
                  </span>
                </p>
                <p className={styles.block_151}>
                  Correct: J'ai vu monsieur Girard.
                </p>
                <p className={styles.block_90}>Incorrect: J'ai vu M. Girard.</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: J'ai pris rendez-vous avec le docteur
                  </span>
                </p>
                <p className={styles.block_581}>Michel.</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: J'ai pris rendez-vous avec le Dr.
                  </span>
                </p>
                <p className={styles.block_582}>Michel.</p>
                <p className={styles.block_583}>
                  <span className={styles.text_28}>
                    Do not abbreviate the word "numéro", unless if it is a brand
                    name.
                  </span>
                  <span className={styles.text_29}> </span>
                  <span className={styles.text_30}>
                    Correct: Je suis le numéro 1.{' '}
                  </span>
                </p>
                <p className={styles.block_584}>Incorrect: Je suis le n°1</p>
                <p className={styles.block_91}>Correct: Chanel n°5</p>
                <p className={styles.block_90}>Incorrect: Chanel numéro 5</p>
                <p className={styles.block_585}>
                  <span className={styles.text_19}>
                    In acronyms, do not use periods between letters.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_21}>Correct: SNCF, MP3 </span>
                  <span className={styles.text_22}>
                    Explanation: brands and products{' '}
                  </span>
                </p>
                <p className={styles.block_587}>
                  <span className={styles.calibre2}>
                    Correct: US, USA, Washington DC, John F Kennedy
                  </span>
                </p>
                <p className={styles.block_588}>
                  Explanation: geographic and personal names
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_21}>
                    Correct: MEDEF, ONU, UNESCO{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: pronounced as words
                  </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_21}>
                    Correct: mdr, wtf, lol, rofl{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      em dé er double v té ef el oh el{' '}
                    </span>
                  </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_591}>
                  Explanation: interjection acronyms
                </p>
                <p className={styles.block_219}>
                  <span className={styles.text_21}>Correct: lol </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>lol </span>
                  <span className={styles.text_24}>" </span>
                </p>
                <p className={styles.block_312}>
                  <span className={styles.text_21}>Correct: ovni, radar </span>
                  <span className={styles.text_22}>
                    Explanation: extremely lexicalized acronyms
                  </span>
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_19}>
                    If a brand name uses periods, include the periods.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_593}>
                  <span className={styles.text_21}>Correct: E. Leclerc </span>
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
