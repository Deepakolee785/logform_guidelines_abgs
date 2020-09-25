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
            <PageContentHeader currentPage="Longform Spanish" />
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
                <p className={styles.block_291}>
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
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_292}>
                  <span className={styles.text_19}>
                    Correct: nueve fotos una palabra{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: numbers less than 10{' '}
                  </span>
                  <span className={styles.text_19}>
                    Correct: Hay 13 estudiantes en la clase.{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: numbers greater than 9{' '}
                  </span>
                </p>
                <p className={styles.block_293}>
                  <span className={styles.text_19}>
                    Correct: Tengo seis perros y 12 pericos.{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Follow this rule even if the noun phrases
                      with numbers are coordinated.
                    </span>
                  </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_19}>Correct: 101 gatos </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>ciento un gatos </span>
                  <span className={styles.text_32}>" </span>
                  <span className={styles.text_19}>
                    Correct: segundo grado{' '}
                  </span>
                </p>
                <p className={styles.block_295}>Correct: 20º aniversario</p>
                <p className={styles.block_91}>
                  Correct: Es la 14.ª estación de la jornada.
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_19}>Correct: 3.14 </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>tres punto uno cuatro </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_25}>
                    Write lists of numbers with digits and without commas.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_19}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: cero uno uno dos tres cinco ocho trece
                    </span>
                  </span>
                </p>
                <p className={styles.block_298}>
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
                <p className={styles.block_299}>
                  <span className={styles.text_19}>Correct: 10,000 </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>diez mil </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_300}>
                  <span className={styles.text_2}>
                    In math expressions or units &amp; measures, transcribe
                    fraction words using numerals and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>slashes.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_301}>
                  <span className={styles.text_19}>
                    Correct: Se vaciaron los 3/4 del tanke.{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    <span className={styles.calibre2}>
                      se vaciaron los tres cuartos del tanke
                    </span>
                  </span>
                  <span className={styles.text_32}>"</span>
                </p>
                <p className={styles.block_302}>
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
                <p className={styles.block_303}>
                  <span className={styles.text_19}>
                    Correct: Dame la mitad de la torta.{' '}
                  </span>
                  <span className={styles.text_20}>
                    Incorrect: Dame 1/2 de la torta. Incorrect: Dame 0.5 de la
                    torta.
                  </span>
                </p>
                <p className={styles.block_304}>
                  <span className={styles.text_19}>
                    Correct: Cinco tercios de una manzana.{' '}
                  </span>
                  <span className={styles.text_20}>
                    Incorrect: 5/3 de una manzana.{' '}
                  </span>
                </p>
                <p className={styles.block_305}>
                  <span className={styles.calibre2}>
                    Explanation: The word "torta" is is not a unit, so the
                    fraction should be written in words, not numbers.
                  </span>
                </p>
                <p className={styles.block_306}>
                  <span className={styles.text_25}>
                    For mixed numbers that represent currency amounts, always
                    use decimals.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_307}>
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
                <p className={styles.block_151}>
                  Correct: Hay 2% de gordo en esta leche.
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Al 50% de los menores de edad no les
                  </span>
                </p>
                <p className={styles.block_308}>gusta la música clásica.</p>
                <p className={styles.block_309}>
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
                <p className={styles.block_310}>
                  <span className={styles.text_25}>
                    Use Roman numerals only when part of an official name or
                    title.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_19}>
                    Correct: videojuego Diablo III{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    videojuego diablo tres{' '}
                  </span>
                  <span className={styles.text_32}>"</span>
                </p>
                <p className={styles.block_312}>
                  <span className={styles.text_19}>
                    Correct: El rey Alfonso X gobernó el país.{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    <span className={styles.calibre2}>
                      el rey alfonso diez gobernó el país
                    </span>
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_313}>
                  <span className={styles.text_26}>
                    Transcribe seasons and episodes of television shows with
                    numerals.
                  </span>
                  <span className={styles.text_27}> </span>
                  <span className={styles.text_28}>
                    Correct: temporada 4 episodio 2{' '}
                  </span>
                </p>
                <p className={styles.block_314}>
                  <span className={styles.text_2}>
                    Transcribe phone numbers using the most common format in the
                    transcription{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>language.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_19}>Correct: 650 253 000 </span>
                  <span className={styles.text_20}>
                    Incorrect: 650 25 30 00{' '}
                  </span>
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      seiscientos cincuenta doscientos cincuenta y tres cero
                      cero cero
                    </span>
                  </span>
                  <span className={styles.text_21}>" </span>
                </p>
                <p className={styles.block_317}>
                  Explanation: mobile phone number
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_19}>Correct: 765 432 123 </span>
                  <span className={styles.text_20}>
                    Explanation: mobile phone number{' '}
                  </span>
                  <span className={styles.text_19}>Correct: 856 443 119 </span>
                  <span className={styles.text_20}>
                    Explanation: landline phone number{' '}
                  </span>
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_19}>
                    Correct: +34 987 654 321{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: landline phone number with country code
                    </span>
                  </span>
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_19}>Correct: 800 123 123 </span>
                  <span className={styles.text_20}>
                    Explanation: toll-free number{' '}
                  </span>
                  <span className={styles.text_19}>Correct: 900 123 123 </span>
                  <span className={styles.text_20}>
                    Explanation: toll-free number
                  </span>
                </p>
                <p className={styles.block_321}>
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
                <p className={styles.block_151}>Correct: XT 660 or XT660</p>
                <p className={styles.block_322}>
                  <span className={styles.text_2}>
                    If it really sounds like a math expression, then transcribe
                    it with numbers and symbols,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>with spaces in between.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_19}>Correct: 5 * 3 </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>cinco por tres </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_19}>Correct: 20 : 6 </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>veinte entre seis </span>
                  <span className={styles.text_32}>" Example audio: " </span>
                  <span className={styles.text_33}>
                    veinte dividido por seis{' '}
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_324}>
                  <span className={styles.text_19}>Correct: 10 - 7 </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>diez menos siete </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_34}>
                    <sub className={styles.calibre3}>Correct: √20 </sub>
                  </span>
                  <span className={styles.text_35}>Example audio: " </span>
                  <span className={styles.text_36}>
                    raíz cuadrada de veinte{' '}
                  </span>
                  <span className={styles.text_35}>" </span>
                  <span className={styles.text_38}> </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={styles.block_326}>
                  <span className={styles.text_25}>
                    Transcribe currencies as commonly written in the
                    transcription language.
                  </span>
                  <span className={styles.text_21}> </span>
                  <span className={styles.text_25}>
                    For ranges or non-specific currency quantities, write
                    everything out as spoken.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.calibre2}>
                    Correct: Tenía un precio entre 50.000 y 80.000 euros.
                  </span>
                </p>
                <p className={styles.block_328}>
                  Incorrect: Tenía un precio entre 50.000 y 80.000 €.
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      tenía un precio entre cincuenta mil y ochenta mil euros
                    </span>
                  </span>
                  <span className={styles.text_21}>"</span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.text_25}>
                    Abbreviate all units that follow numeric values.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_19}>
                    Correct: Camine 100 m y gire a la izquierda.{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    <span className={styles.calibre2}>
                      camine cien metros y gire a la izquierda
                    </span>
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_26}>
                    Transcribe all numeric values preceding units in numeral
                    form, even if under 10.
                  </span>
                  <span className={styles.text_27}> </span>
                  <span className={styles.text_28}>
                    Correct: Medía 1.5 m cuando tenía 14 años.
                  </span>
                </p>
                <p className={styles.block_333}>
                  Correct: Quiero 7 pulgadas de hilo.
                </p>
                <p className={styles.block_139}>
                  Correct: Compró 2 kg de papas.
                </p>
                <p className={styles.block_334}>
                  <span className={styles.text_2}>
                    If it is clear from context that a number or number sequence
                    refers to currency or time,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>format it as such.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_335}>
                  <span className={styles.text_19}>
                    Correct: Este metal cuesta 52 € por kilo.{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    <span className={styles.calibre2}>
                      este metal cuesta cincuenta y dos euros por kilo
                    </span>
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_336}>
                  <span className={styles.text_25}>
                    Common technical abbreviations
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>megabyte - MB </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>kilobyte - kB </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>gigabyte - GB </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>terabyte - TB </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_25}>
                    Slang terms (spell them out)
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>gigs </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>bucks</span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_25}>
                    Common measurements of distance and rate
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>milla - mi </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>centímetro - cm </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>metro - m </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_25}>
                    Common measurements of area
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>
                    kilómetro cuadrado - km²{' '}
                  </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>hectárea - ha </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>milla cuadrada - mi² </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_25}>
                    Common scientific terms
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>decibel - dB </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Newton - N </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Joule - J </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>parsec - parsec </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>amperio - amp </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Hertz - Hz </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Watt - W </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Kilowatt - kW </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Candela - cd </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>lumen - lm </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>grado - ° </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Fahrenheit - F </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Celsius - C </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Centígrado - C </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Kelvin - K </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_25}>
                    Common measurements of weight and volume
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>pound - lb </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>ounce - oz </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>quart - q </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>litro - L</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>gramo - g </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>millígramo - mg </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>kilógramo - kg </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={styles.block_347}>
                  <span className={styles.text_25}>
                    Use the natural form for transcribing dates.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_348}>
                  <span className={styles.text_19}>
                    Correct: 12 de julio de 1964{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    <span className={styles.calibre2}>
                      doce de julio de mil novecientos sesenta y cuatro
                    </span>
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_349}>Correct: Llegamos a marzo 21</p>
                <p className={styles.block_350}>
                  <span className={styles.text_19}>
                    Correct: rock de los 80s{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>rock de los ochentas </span>
                  <span className={styles.text_32}>" </span>
                  <span className={styles.text_19}>
                    Correct: martes, 14 de agosto de 2012{' '}
                  </span>
                </p>
                <p className={styles.block_351}>
                  <span className={styles.text_26}>
                    Exception: When the date is spoken as a sequence of numbers,
                    transcribe as such.
                  </span>
                  <span className={styles.text_27}> </span>
                  <span className={styles.text_28}>Correct: 7/12/2010 </span>
                  <span className={styles.text_41}>Example audio: " </span>
                  <span className={styles.text_42}>
                    siete del doce de dos mil diez{' '}
                  </span>
                  <span className={styles.text_41}>" </span>
                </p>
                <p className={styles.block_352}>
                  <span className={styles.text_19}>
                    Correct: La fecha de caducidad es 5/3/2012.{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    <span className={styles.calibre2}>
                      la fecha de caducidad es cinco del tres de dos mil doce
                    </span>
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_353}>
                  <span className={styles.text_25}>
                    Use the natural form for transcribing times whenever
                    possible.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_354}>
                  <span className={styles.text_2}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>so.</span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_19}>Correct: a las 3 </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>a las tres </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_356}>
                  <span className={styles.calibre2}>
                    Explanation: When the speaker doesn't mention
                  </span>
                </p>
                <p className={styles.block_357}>
                  minutes, do not append ":00".
                </p>
                <p className={styles.block_358}>
                  <span className={styles.text_19}>
                    Correct: a las 3 en punto{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>a las tres en punto </span>
                  <span className={styles.text_32}>" </span>
                  <span className={styles.text_19}>Correct: a las 3:00 </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>a las tres cero cero </span>
                  <span className={styles.text_32}>" </span>
                  <span className={styles.text_19}>Correct: 6:05 </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>seis y cinco </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_19}>Correct: 3:15 </span>
                  <span className={styles.text_20}>Incorrect: 3.15 </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>tres y quince </span>
                  <span className={styles.text_21}>" Example audio: " </span>
                  <span className={styles.text_22}>tres y cuarto </span>
                  <span className={styles.text_21}>" </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.calibre2}>
                    Explanation: Do not use dot as the time separator. Use
                    colons.
                  </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_19}>Correct: 2:45 </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>tres menos cuarto </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_19}>
                    Correct: Son las 11:30 de la noche.{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    <span className={styles.calibre2}>
                      son las once y media de la noche{' '}
                    </span>
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_19}>
                    Correct: Es medianoche.{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>es medianoche </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.calibre2}>
                    Explanation: Special case: with "mediodía" y
                  </span>
                </p>
                <p className={styles.block_366}>
                  <span className={styles.calibre2}>
                    "medianoche", use the written form "mediodía"
                  </span>
                </p>
                <p className={styles.block_367}>or "medianoche".</p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={styles.block_369}>
                  <span className={styles.text_2}>
                    Favor full spellings over abbreviations where natural, but
                    use abbreviations when{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>explicitly spoken.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_25}>
                    Use commas for ENTITY, LOCATION.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_216}>
                  Correct: McDonald's, Calle Atocha
                </p>
                <p className={styles.block_139}>
                  Correct: Diana Manzano Guttiérez, Madrid
                </p>
                <p className={styles.block_139}>
                  Correct: Dr. Alarcó Borréda, Valencia
                </p>
                <p className={styles.block_91}>Correct: Segundamano, Madrid</p>
                <p className={styles.block_139}>Correct: tiempo, Barcelona</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: horarios para The Return of the King,
                  </span>
                </p>
                <p className={styles.block_370}>Oviedo</p>
                <p className={styles.block_371}>
                  <span className={styles.text_25}>
                    Inside a sentence do not capitalize street types, but
                    capitalize them in word searches.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_19}>
                    Correct: Vive en la calle Serrano, 14.{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: This is a full sentence "calle" should not be
                      capitalized.
                    </span>
                  </span>
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_19}>
                    Correct: Calle Serrano, 14{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: This is a web search, not a sentence, "calle"
                      should be capitalized.
                    </span>
                  </span>
                </p>
                <p className={styles.block_374}>
                  <span className={styles.text_2}>
                    In the case of addresses with the house number after the
                    street name, if the house{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    number is preceded by "número", do not transcribe "número".
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  Correct: Calle Independencia, 34
                </p>
                <p className={styles.block_90}>
                  Incorrect: Calle Independencia No. 34
                </p>
                <p className={styles.block_148}>
                  Incorrect: Calle Independencia número 34
                </p>
                <p className={styles.block_375}>
                  <span className={styles.text_2}>
                    Use a comma between an address and a town or post code, but
                    not between a post{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>code and a town.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>
                  <span className={styles.calibre2}>
                    Correct: Avenida de la Almozara 35, 50003{' '}
                  </span>
                </p>
                <p className={styles.block_376}>Zaragoza</p>
                <p className={styles.block_139}>
                  Correct: Pizza Hut, Barcelona
                </p>
                <p className={styles.block_139}>Correct: 18001 Granada</p>
                <p className={styles.block_377}>
                  <span className={styles.text_26}>
                    If an address contains a mistake, do not correct it, stick
                    to what the speaker said.
                  </span>
                  <span className={styles.text_27}> </span>
                  <span className={styles.text_28}>
                    Correct: Calle Del Rosario, Cádiz{' '}
                  </span>
                </p>
                <p className={styles.block_230}>
                  Incorrect: Calle Rosario, Cádiz
                </p>
                <p className={styles.block_378}>
                  <span className={styles.text_2}>
                    For foreign place names in the languages of the Peninsula
                    which have an official{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    spelling, keep the spelling. For foreign street names,
                    capitalize the word following the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>street name.</span>
                </p>
                <p className={styles.block_176}>Correct: Errenteria</p>
                <p className={styles.block_90}>Incorrect: Rentería</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Viven en el 751 Jefferson Street de
                  </span>
                </p>
                <p className={styles.block_379}>Nueva York.</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Viven en el 751 Jefferson street de
                  </span>
                </p>
                <p className={styles.block_380}>Nueva York.</p>
                <p className={styles.block_381}>
                  <span className={styles.text_25}>
                    If a full sentence contains an address, transcribe it
                    according to the agreed format.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_382}>
                  <span className={styles.calibre2}>
                    Correct: Vivo en Prat de la Riba, 34 en Hospitalet
                  </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      vivo en prat de la riba treinta y cuatro en hospitalet
                    </span>
                  </span>
                  <span className={styles.text_21}>" </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_26}>
                    Do not capitalize cardinal directions unless part of a
                    specific place name.
                  </span>
                  <span className={styles.text_27}> </span>
                  <span className={styles.text_28}>
                    Correct: Estoy por la calle del Norte.{' '}
                  </span>
                </p>
                <p className={styles.block_333}>
                  Correct: Nos encontraremos al sur de la plaza.
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={styles.block_386}>
                  <span className={styles.text_2}>
                    Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>capitalize them.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_19}>
                    Correct: www.google.es{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    w w w punto google punto es{' '}
                  </span>
                  <span className={styles.text_32}>"</span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_19}>Correct: amazon.com </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>amazon punto com </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_19}>
                    Correct: http://123.com{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    <span className={styles.calibre2}>
                      h t t p dos puntos barra barra uno dos tres punto com
                    </span>
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_389}>
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
                <p className={styles.block_390}>
                  <span className={styles.text_19}>
                    Correct: www.amazon.com{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    <span className={styles.calibre2}>
                      w w punto amazon punto com{' '}
                    </span>
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.calibre2}>
                    Explanation: If the user mistakenly says "ww",
                  </span>
                </p>
                <p className={styles.block_392}>transcribe "www".</p>
                <p className={styles.block_243}>
                  <span className={styles.text_19}>Correct: google.co.uk </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>google punto co u k </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_393}>
                  <span className={styles.calibre2}>
                    Explanation: Also transcribe the dot in an
                  </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.calibre2}>
                    obvious URL, even if the speaker did not{' '}
                  </span>
                </p>
                <p className={styles.block_395}>include it.</p>
                <p className={styles.block_396}>
                  <span className={styles.text_19}>
                    Correct: www.expansion.com{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    w w w expansion punto com{' '}
                  </span>
                  <span className={styles.text_32}>" </span>
                  <span className={styles.text_19}>
                    Correct: www.facebook.com{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    w w facebook punto com{' '}
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_2}>
                    If a URL is spelled out in individual letters, transcribe
                    without spaces between individual{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>letters.</span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_19}>
                    Correct: www.elmundo.es{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    <span className={styles.calibre2}>
                      w w w punto e l m u n d o punto e s
                    </span>
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={styles.block_400}>
                  <span className={styles.text_25}>
                    Do not abbreviate unless the speaker says an abbreviated
                    form.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.calibre2}>
                    Correct: Assignia Manresa verse Baloncesto Fuenlabrada
                  </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.calibre2}>
                    Incorrect: Assignia Manresa vs. Baloncesto Fuenlabrada
                  </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.calibre2}>
                    Correct: Assignia Manresa v s Baloncesto Fuenlabrada
                  </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      assignia manresa verse baloncesto fuenlabrada
                    </span>
                  </span>
                  <span className={styles.text_21}>" </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      assignia manresa v s baloncesto fuenlabrada
                    </span>
                  </span>
                  <span className={styles.text_21}>" </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_25}>
                    In acronyms, do not use periods between letters.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_19}>Correct: BCA, MP3 </span>
                  <span className={styles.text_20}>
                    Explanation: brands and products{' '}
                  </span>
                  <span className={styles.text_19}>
                    Correct: USA, José M Aznar, Washington DC{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: geographic and personal names{' '}
                  </span>
                  <span className={styles.text_19}>
                    Correct: NASA, UNESCO, UNICEF{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: pronounced as words{' '}
                  </span>
                  <span className={styles.text_19}>
                    Correct: jk, wtf, lol, rofl{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: interjection acronyms{' '}
                  </span>
                  <span className={styles.text_19}>Correct: lol </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>lol </span>
                  <span className={styles.text_32}>"</span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_19}>Correct: scuba, radar </span>
                  <span className={styles.text_20}>
                    Explanation: extremely lexicalized acronyms
                  </span>
                </p>
                <p className={styles.block_408}>
                  <span className={styles.text_2}>
                    Titles should be abbreviated and capitalized only when
                    followed by a proper name. If a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    title is used with no proper name, it should not be
                    abbreviated nor capitalized.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  Correct: Conozco al Dr. Moreno.
                </p>
                <p className={styles.block_139}>
                  Correct: La Sra. Rodríguez no está disponible.
                </p>
                <p className={styles.block_91}>
                  Correct: Buenas noches, señora.
                </p>
                <p className={styles.block_139}>
                  Correct: Es un doctor especializado en geriatría.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Es un Dr. especializado en geriatría.
                </p>
                <p className={styles.block_381}>
                  <span className={styles.text_25}>
                    If a brand name uses periods, include the periods.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_19}>Correct: E.Leclerc </span>
                  <span className={styles.text_20}>
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
