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
            <PageContentHeader currentPage="longform Dutch" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Write small numbers (0 to 9) as words and larger numbers (10
                  and above) using digits. However, you may write small numbers
                  using digits if they appear in a list, in mathematical
                  expression, as street numbers, as a measure or time unit.
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_4}>
                    Correct: Er zitten negen studenten in mijn klas.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: numbers less than 10{' '}
                  </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_4}>
                    Correct: Er zitten 13 studenten in mijn klas.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: numbers greater than 9{' '}
                  </span>
                </p>
                <p className={styles.block_551}>
                  When two or more numbers refer to the to the same noun, and
                  one number is 10 or greater, transcribe both as numerals.
                </p>
                <p className={styles.block_552}>
                  Correct: Mijn kinderen wilden graag 9 of 10
                </p>
                <p className={styles.block_553}>goudvissen kopen.</p>
                <p className={styles.block_554}>
                  Use "e" as the ordinal suffix.
                </p>
                <p className={styles.block_555}>Correct: 1e, 2e, 3e...</p>
                <p className={styles.block_556}>
                  If a large number consists of only a number followed by
                  "miljoen", "biljoen", "triljoen", or higher, then transcribe
                  as a numeral plus word. Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_4}>
                    Correct: 1 miljoen ganzen{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>één miljoen ganzen </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_558}>
                  <span className={styles.text_4}>
                    Correct: een miljoen ganzen{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>een miljoen ganzen </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_4}>Correct: 1.000 ganzen </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>duizend ganzen </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_4}>Correct: $1,5 miljard </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    anderhalf miljard dollar{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_561}>
                  Explanation: For mixed numbers before
                </p>
                <p className={styles.block_562}>
                  "miljoen", "miljard", etc., use decimals.
                </p>
                <p className={styles.block_563}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_564}>
                  <span className={styles.text_4}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    nul één één twee drie vijf acht{' '}
                  </span>
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_1}>dertien </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_4}>
                    Correct: 3 2 1 lift-off{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>drie twee één lift-off </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_567}>
                  Explanation: list of numbers, no comma if just
                </p>
                <p className={styles.block_568}>counting</p>
                <p className={styles.block_569}>
                  For long numbers (4+ digits) indicating quantity, insert the
                  relevant separator (comma, decimal point, or space, depending
                  on language).
                </p>
                <p className={styles.block_570}>
                  <span className={styles.text_4}>Correct: 10.000 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>tienduizend </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_571}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_572}>
                  <span className={styles.text_4}>
                    Correct: Sla saf over 1/4 km.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>sla saf over een kwart </span>
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_1}>kilometer </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_574}>
                  For mixed numbers in math and units &amp; measures, use a
                  number with a decimal separator rather than spelling out the
                  fraction (e.g. by inserting "en" in between).
                </p>
                <p className={styles.block_575}>Correct: 3,5 km</p>
                <p className={styles.block_576}>
                  Incorrect: 3 en 1⁄2 kilometer
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    drie en een halve kilometer{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_578}>Correct: 5,5 maand oud</p>
                <p className={styles.block_579}>
                  Incorrect: 5 en 1⁄2 maand oud
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    vijf en een halve maand oud{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_4}>Correct: 1/3 + 3,5 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    een derde plus drie en een half{' '}
                  </span>
                </p>
                <p className={styles.block_582}>"</p>
                <p className={styles.block_283}>
                  When referring to items (not units or measures), write
                  fractions out in words.
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_4}>
                    Correct: Geef mij de helft van die taart.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    geef mij de helft van die taart{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_584}>
                  Incorrect: Geef mij 1⁄2 van die taart.
                </p>
                <p className={styles.block_585}>
                  Correct: Ik ken het verhaal ook maar half.
                </p>
                <p className={styles.block_586}>
                  Incorrect: Ik ken het verhaal ook maar 1⁄2.
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    ik ken het verhaal ook maar{' '}
                  </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_1}>half </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_589}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_4}>
                    Correct: Kun je me €2,50 lenen?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    kun je me twee en een halve{' '}
                  </span>
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_1}>euro lenen </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_592}>
                  Correct: Albert Verlinde heeft die villa gekocht
                </p>
                <p className={styles.block_593}>voor €3,5 miljoen.</p>
                <p className={styles.block_594}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    albert verlinde heeft die villa{' '}
                  </span>
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_1}>
                    gekocht voor drie en een half miljoen{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_596}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_597}>
                  Correct: Slechts 2% van de Nederlanders eet
                </p>
                <p className={styles.block_484}>elke week poffertjes.</p>
                <p className={styles.block_598}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    slechts twee procent van de{' '}
                  </span>
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_1}>
                    nederlanders eet elke week poffertjes{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_600}>Correct: 1 miljoen procent</p>
                <p className={styles.block_601}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_602}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_603}>
                  <span className={styles.text_4}>Correct: Lodewijk XIV </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>lodewijk de veertiende </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_604}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_605}>
                  <span className={styles.text_4}>
                    Correct: seizoen 3 aflevering 2{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    seizoen drie aflevering twee{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_606}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_607}>Correct: 071-5991234</p>
                <p className={styles.block_608}>
                  <span className={styles.text_4}>
                    Correct: +31-71-5991234{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    plus één en dertig één en{' '}
                  </span>
                </p>
                <p className={styles.block_609}>
                  <span className={styles.text_1}>zeventig </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_214}>Correct: 0800-1234</p>
                <p className={styles.block_610}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Do not
                  transcribe credit card numbers, etc.
                </p>
                <p className={styles.block_611}>Correct: XT 660 or XT660</p>
                <p className={styles.block_612}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_4}>Correct: 5 / 6 ^ 3 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    vijf gedeeld door zes tot de{' '}
                  </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_1}>derde </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_615}>
                  <span className={styles.text_4}>Correct: Wat is 5 * 6? </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>wat is vijf keer zes </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_8}>Correct: √3 </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>wortel van drie </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_617}>
                  <span className={styles.text_4}>
                    Correct: Wat is 8 uur * $12?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    wat is acht uur keer twaalf{' '}
                  </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_1}>dollar </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_618}>
                  Correct: Wat is drie krokodillen gedeeld door
                </p>
                <p className={styles.block_542}>twee hagedissen?</p>
                <p className={styles.block_619}>
                  Explanation: Does not sound like a true math
                </p>
                <p className={styles.block_620}>
                  expression with useful units.
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_623}>
                  <span className={styles.text_4}>Correct: $10 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>tien dollar </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_624}>
                  <span className={styles.text_4}>
                    Correct: Wat is €20 in dollars?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    wat is twintig euro in dollars{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_625}>
                  When a speaker uses words like "euro" without specifying a
                  quantity, spell them out.
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_4}>Correct: een paar euro </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>een paar euro </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_359}>
                  Correct: wisselkoers van de euro tegenover de
                </p>
                <p className={styles.block_627}>dollar</p>
                <p className={styles.block_628}>
                  For cent-only quantities, the word “cent” should follow the
                  amount.
                </p>
                <p className={styles.block_629}>
                  <span className={styles.text_4}>Correct: 5 cent </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>vijf cent </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_630}>
                  <span className={styles.text_4}>
                    Correct: een snoepje van 10 cent{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    een snoepje van tien cent{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_436}>
                  Correct: currency conversion between Indian
                </p>
                <p className={styles.block_631}>rupee and US dollar</p>
                <p className={styles.block_632}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_633}>Correct: 200 yen</p>
                <p className={styles.block_634}>Incorrect: ¥200</p>
                <p className={styles.block_635}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>tweehonderd yen </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_636}>
                  Write out denominations of currency (the face values of bills,
                  notes, coins, etc). Use hyphens as needed.
                </p>
                <p className={styles.block_637}>
                  Correct: Dit twintigeurobiljet is vers van de pers.
                </p>
                <p className={styles.block_638}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_639}>
                  Correct: Ik moet vier of vijfhonderd euro
                </p>
                <p className={styles.block_640}>hebben.</p>
                <p className={styles.block_641}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    ik moet vier of vijfhonderd euro{' '}
                  </span>
                </p>
                <p className={styles.block_642}>
                  <span className={styles.text_1}>hebben </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_643}>
                  <span className={styles.text_4}>Correct: 9 tot 12 euro </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>negen tot twaalf euro </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_644}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_645}>Correct: Het is buiten 20°.</p>
                <p className={styles.block_646}>
                  Correct: Het wordt vannacht -5°.
                </p>
                <p className={styles.block_647}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_648}>
                  <span className={styles.text_4}>
                    Correct: Deze tafel is 100cm lang.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>deze tafel is honderd </span>
                </p>
                <p className={styles.block_649}>
                  <span className={styles.text_1}>centimeter lang </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_650}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_651}>
                  Correct: Slager, mag ik 2 ons ham van u?
                </p>
                <p className={styles.block_652}>
                  Correct: Ik heb daar 6 maanden gewoond.
                </p>
                <p className={styles.block_653}>
                  For lengths, widths, and heights, use "x" instead of any
                  preposition.
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_4}>
                    Correct: Deze kamer is 3x4.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    deze kamer is drie bij vier{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_655}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_656}>
                  Correct: Voor minder dan €80 per nacht kun je
                </p>
                <p className={styles.block_657}>
                  tegenwoordig geen hotelkamer meer krijgen in
                </p>
                <p className={styles.block_658}>hartje Amsterdam.</p>
                <p className={styles.block_659}>
                  Incorrect: Voor minder dan 80 per nacht kun je
                </p>
                <p className={styles.block_660}>
                  tegenwoordig geen hotelkamer meer krijgen in
                </p>
                <p className={styles.block_661}>hartje Amsterdam.</p>
                <p className={styles.block_662}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    voor minder dan tachtig per{' '}
                  </span>
                </p>
                <p className={styles.block_663}>
                  nacht kun je tegenwoordig geen hotelkamer
                </p>
                <p className={styles.block_664}>
                  <span className={styles.text_1}>
                    meer krijgen in hartje amsterdam{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_665}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_666}>● kilobyte - kB</p>
                <p className={styles.block_667}>● megabyte - MB</p>
                <p className={styles.block_668}>● gigabyte - GB</p>
                <p className={styles.block_669}>● terabyte - TB</p>
                <p className={styles.block_670}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_671}>● millimeter - mm</p>
                <p className={styles.block_672}>● centimeter - cm</p>
                <p className={styles.block_673}>● meter - m</p>
                <p className={styles.block_674}>● kilometer - km</p>
                <p className={styles.block_675}>● kilometer per uur - km/u</p>
                <p className={styles.block_676}>Common measurements of area</p>
                <p className={styles.block_677}>● vierkante centimeter - cm2</p>
                <p className={styles.block_678}>● vierkante meter - m2</p>
                <p className={styles.block_679}>● vierkante kilometer - km2</p>
                <p className={styles.block_680}>● are - a</p>
                <p className={styles.block_681}>● hectare - ha</p>
                <p className={styles.block_682}>Common scientific terms</p>
                <p className={styles.block_683}>● decibel - dB</p>
                <p className={styles.block_684}>● Newton - N</p>
                <p className={styles.block_685}>● Joule - J</p>
                <p className={styles.block_686}>● parsec - parsec</p>
                <p className={styles.block_687}>● ampere - amp</p>
                <p className={styles.block_688}>● Hertz - Hz</p>
                <p className={styles.block_685}>● Watt - W</p>
                <p className={styles.block_689}>● Kilowatt - kW</p>
                <p className={styles.block_690}>● mol - mol</p>
                <p className={styles.block_691}>● Candela - cd</p>
                <p className={styles.block_692}>● lumen - lm</p>
                <p className={styles.block_693}>● graad - °</p>
                <p className={styles.block_673}>● graden - °</p>
                <p className={styles.block_694}>● Fahrenheit - F</p>
                <p className={styles.block_692}>● Celsius - C</p>
                <p className={styles.block_695}>● Kelvin - K</p>
                <p className={styles.block_696}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_697}>● liter - l</p>
                <p className={styles.block_693}>● gram - g</p>
                <p className={styles.block_698}>● milligram - mg</p>
                <p className={styles.block_689}>● kilogram - kg</p>
                <p className={styles.block_699}>● kubieke meter - m3</p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_702}>
                  <span className={styles.text_4}>Correct: 4 juli 2015 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    vier juli tweeduizend vijftien{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_703}>
                  <span className={styles.text_4}>
                    Correct: muziek uit de jaren '80{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    muziek uit de jaren tachtig{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_704}>
                  <span className={styles.text_4}>
                    Correct: woensdag 6 maart{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>woensdag zes maart </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_705}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such.
                </p>
                <p className={styles.block_706}>
                  <span className={styles.text_4}>Correct: 7-12-2010 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    zeven twaalf tweeduizendtien{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    zeven streepje twaalf streepje{' '}
                  </span>
                </p>
                <p className={styles.block_708}>
                  <span className={styles.text_1}>tweeduizendtien </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_4}>
                    Correct: de vervaldatum 05/10/2012.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    de vervaldatum is nul vijf tien{' '}
                  </span>
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_1}>tweeduizend twaalf </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_711}>
                  Use the natural form for transcribing times whenever possible.
                </p>
                <p className={styles.block_712}>
                  <span className={styles.text_11}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                  <span className={styles.text_12}>
                    <sub className={styles.calibre2}>Correct: 3:15 </sub>
                  </span>
                  <span className={styles.text_13}>
                    <sub className={styles.calibre2}>Example audio: " </sub>
                  </span>
                  <span className={styles.text_14}>
                    <sub className={styles.calibre2}>kwart over drie </sub>
                  </span>
                  <span className={styles.text_13}>
                    <sub className={styles.calibre2}>" </sub>
                  </span>
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_4}>Correct: 3 uur </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>drie uur </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_714}>
                  Explanation: See following rule.
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_4}>Correct: 6:05 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>zes uur vijf </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_716}>
                  For round times, do not write ":00". Instead, write "uur".
                </p>
                <p className={styles.block_717}>
                  <span className={styles.text_4}>
                    Correct: Oké dan ben ik er om 5 uur{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    oké dan ben ik er om vijf uur{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_718}>
                  <span className={styles.text_4}>Correct: 3 uur </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>drie uur </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_721}>
                  Correct: Hij woont op de Tweede
                </p>
                <p className={styles.block_722}>
                  Oosterparkstraat in Amsterdam.
                </p>
                <p className={styles.block_723}>
                  Correct: Tweede Oosterparkstraat 34,
                </p>
                <p className={styles.block_724}>Amsterdam</p>
                <p className={styles.block_725}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_721}>
                  Correct: McDonald's, Leidseplein
                </p>
                <p className={styles.block_726}>
                  Correct: Tweede Oosterparkstraat, Amsterdam
                </p>
                <p className={styles.block_727}>
                  If the speaker uses "nummer" between the street name and the
                  house number, omit this from your transcription.
                </p>
                <p className={styles.block_728}>
                  <span className={styles.text_4}>
                    Correct: Carnegielaan 4, Den Haag{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    carnegielaan nummer vier den{' '}
                  </span>
                </p>
                <p className={styles.block_729}>
                  <span className={styles.text_1}>haag </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_730}>
                  In stand-alone addresses, you should omit the word "in"
                  between house numbers and place names, using a comma instead.
                </p>
                <p className={styles.block_731}>
                  <span className={styles.text_4}>
                    Correct: Carnegielaan 4, Den Haag{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    carnegielaan nummer vier in{' '}
                  </span>
                </p>
                <p className={styles.block_732}>
                  <span className={styles.text_1}>den haag </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_733}>
                  You should insert a single white space between the digits and
                  the letters of Dutch postal codes.
                </p>
                <p className={styles.block_734}>Correct: 1234 AB</p>
                <p className={styles.block_735}>
                  Letters following house numbers should be capitalized and
                  attached directly to the house number.
                </p>
                <p className={styles.block_736}>Correct: 3A</p>
                <p className={styles.block_737}>
                  Do not capitalize cardinal directions unless part of a
                  specific place name.
                </p>
                <p className={styles.block_738}>
                  Correct: De zon komt op in het oosten.
                </p>
                <p className={styles.block_739}>
                  Correct: Die avonturier is op de bonnefooi naar
                </p>
                <p className={styles.block_740}>het Verre Oosten vertrokken.</p>
                <p className={styles.block_438}>
                  Correct: Mijn tante woont in Amsterdam-Oost.
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_743}>
                  <span className={styles.text_4}>
                    Correct: www.google.co.kr{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    w w w punt google punt c o{' '}
                  </span>
                </p>
                <p className={styles.block_744}>
                  <span className={styles.text_1}>punt k r </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_745}>
                  <span className={styles.text_4}>Correct: amazon.com </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>amazon dot com </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_746}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>amazon punt com </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_747}>
                  <span className={styles.text_4}>
                    Correct: http://123.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    h t t p dubbele punt slash{' '}
                  </span>
                </p>
                <p className={styles.block_748}>
                  <span className={styles.text_1}>
                    slash één twee drie punt com{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_749}>
                  <span className={styles.text_4}>
                    Correct: mike@example.org{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    mike at example dot org{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_750}>
                  <span className={styles.text_4}>
                    Correct: Ik hou van pizza. #hungry{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    ik hou van pizza hashtag{' '}
                  </span>
                </p>
                <p className={styles.block_751}>
                  <span className={styles.text_1}>hungry </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_752}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".
                </p>
                <p className={styles.block_753}>
                  <span className={styles.text_4}>
                    Correct: http://nytimes.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    h t t p dubbele punt slash{' '}
                  </span>
                </p>
                <p className={styles.block_754}>
                  <span className={styles.text_1}>
                    slash n y times dot com{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_755}>
                  <span className={styles.text_4}>
                    Correct: http:\\mail.yahoo.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    h t t p dubbele punt backslash{' '}
                  </span>
                </p>
                <p className={styles.block_756}>
                  <span className={styles.text_1}>
                    backslash mail dot yahoo dot com{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_757}>
                  <span className={styles.text_4}>
                    Correct: www.forbes.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>w w w forbes dot com </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_705}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_4}>
                    Correct: www.google.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>w w dot google dot com </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_758}>
                  Explanation: If the user mistakenly says "ww",
                </p>
                <p className={styles.block_759}>transcribe "www".</p>
                <p className={styles.block_760}>
                  <span className={styles.text_4}>
                    Correct: www.forbes.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>w w w forbes dot com </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_761}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_762}>
                  <span className={styles.text_4}>
                    Correct: www.target.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    w w w dot t a r g e t dot c o m{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_765}>Correct: Laren, Gld</p>
                <p className={styles.block_766}>Incorrect: Laren, Gelderland</p>
                <p className={styles.block_767}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>laren g l d </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_768}>Correct: et cetera</p>
                <p className={styles.block_769}>Incorrect: etc.</p>
                <p className={styles.block_770}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>et cetera </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_771}>Correct: met ingang van</p>
                <p className={styles.block_772}>Incorrect: m.i.v.</p>
                <p className={styles.block_773}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>met ingang van </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_774}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_775}>
                  <span className={styles.text_4}>
                    Correct: MP3-speler, NASA, NASCAR{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: brands and products{' '}
                  </span>
                </p>
                <p className={styles.block_776}>
                  Abbreviate titles when accompanied by last names, not
                  otherwise. "meneer", "de heer" and "mevrouw" are not
                  abbreviated, even when accompanied by a last name.
                </p>
                <p className={styles.block_611}>Correct: Ik ken dr. Haring.</p>
                <p className={styles.block_777}>
                  Correct: Prof. Jones is niet beschikbaar.
                </p>
                <p className={styles.block_778}>
                  Correct: Dat is een hele meneer.
                </p>
                <p className={styles.block_779}>
                  For other proper names involving titles, use the official
                  spelling of the proper name. If in doubt, do not abbreviate
                  the title.
                </p>
                <p className={styles.block_780}>Correct: Sint-Janskathedraal</p>
                <p className={styles.block_781}>
                  Incorrect: St. Janskathedraal
                </p>
                <p className={styles.block_475}>
                  Explanation: The cathedral's name is officially
                </p>
                <p className={styles.block_782}>
                  spelled "Sint-Janskathedraal".
                </p>
                <p className={styles.block_783}>
                  If a brand name uses periods, include the periods.
                </p>
                <p className={styles.block_784}>
                  <span className={styles.text_4}>Correct: J. C. Penney </span>
                  <span className={styles.text_5}>
                    Explanation: Official brand name as seen in the
                  </span>
                </p>
                <p className={styles.block_785}>
                  privacy policy includes periods.
                </p>
                <p className={styles.block_786}>
                  Omit commas from proper names and titles.
                </p>
                <p className={styles.block_787}>
                  Correct: Martin Luther King Jr.
                </p>
                <p className={styles.block_788}>
                  Incorrect: Martin Luther King, Jr.
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
