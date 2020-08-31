import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Punctuation = () => {
  const classes = useStyles()

  const headingIds = [
    'fragment-vrsus-sentences',
    'commas',
    'intonation-marks',
    'colon-and-quotation',
    'other-symbols',
    'spoken-punctuation',
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
              <p className={'large-heading'}>Punctuation</p>
              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.
                </p>
                <p className={styles.block_293}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_294}>
                  In general, a complete sentence contains a subject and a verb.
                </p>
                <p className={styles.block_295}>
                  <span className={styles.text_4}>
                    Correct: Hij werkt vandaag thuis.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Includes subject (hij) and verb
                  </span>
                </p>
                <p className={styles.block_296}>(werkt).</p>
                <p className={styles.block_297}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_298}>
                  <span className={styles.text_4}>
                    Correct: Wie vertelde jou dat het buurtfeest niet
                  </span>
                </p>
                <p className={styles.block_299}>
                  doorging? De buurman van nummer 36.
                </p>
                <p className={styles.block_300}>
                  Explanation: Two speakers. "de buurman van
                </p>
                <p className={styles.block_301}>
                  nummer 36" is an answer to a specific
                </p>
                <p className={styles.block_302}>question.</p>
                <p className={styles.block_303}>
                  <span className={styles.text_4}>Correct: de buurman </span>
                  <span className={styles.text_5}>
                    Explanation: No context to suggest this is a
                  </span>
                </p>
                <p className={styles.block_304}>
                  sentence; treat as a fragment.
                </p>
                <p className={styles.block_305}>
                  <span className={styles.text_4}>
                    Correct: Dat nieuwe boek van Lars Kepler al
                  </span>
                </p>
                <p className={styles.block_306}>gelezen?</p>
                <p className={styles.block_307}>
                  Explanation: Dropping the subject and main
                </p>
                <p className={styles.block_308}>
                  verb here sounds natural as a complete
                </p>
                <p className={styles.block_309}>
                  sentence. Punctuate as sentence.
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_4}>
                    Correct: puppy's in bad doen{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sounds like a web search as{' '}
                  </span>
                </p>
                <p className={styles.block_311}>
                  opposed to a dropped subject. Punctuate as
                </p>
                <p className={styles.block_312}>fragment.</p>
                <p className={styles.block_313}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_314}>
                  <span className={styles.text_4}>Correct: Verrek. </span>
                  <span className={styles.text_5}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_4}>Correct: Hoi. </span>
                  <span className={styles.text_5}>Explanation: greeting </span>
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_4}>
                    Correct: Proost, op je gezondheid.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Entire phrase is being used as an
                  </span>
                </p>
                <p className={styles.block_317}>interjection.</p>
                <p className={styles.block_318}>
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search, not as full sentences.
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_4}>
                    Correct: filmografie Ted Danson
                  </span>
                </p>
                <p className={styles.block_320}>
                  Incorrect: filmografie Ted Danson.
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_4}>
                    Correct: The Incredibles Monsters en co.
                  </span>
                </p>
                <p className={styles.block_322}>WALL-E studio</p>
                <p className={styles.block_323}>
                  Incorrect: The Incredibles Monsters en co.
                </p>
                <p className={styles.block_324}>WALL-E studio.</p>
                <p className={styles.block_325}>
                  Incorrect: The Incredibles, Monsters en co.,
                </p>
                <p className={styles.block_326}>WALL-E, studio.</p>
                <p className={styles.block_229}>
                  Incorrect: The Incredibles. Monsters en co.
                </p>
                <p className={styles.block_324}>WALL-E. studio</p>
                <p className={styles.block_327}>
                  Correct: Hoe bak je aardappels?
                </p>
                <p className={styles.block_328}>
                  Incorrect: hoe bak je aardappels
                </p>
                <p className={styles.block_329}>
                  Explanation: This is a full sentence, so it should
                </p>
                <p className={styles.block_330}>
                  be capitalized and punctuated, even if it might
                </p>
                <p className={styles.block_331}>be a web search.</p>
                <p className={styles.block_332}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_333}>
                  Correct: Wat denk jij daar nou van? Ik bedoel,
                </p>
                <p className={styles.block_334}>hij</p>
                <p className={styles.block_335}>
                  Explanation: Begins as complete sentence and
                </p>
                <p className={styles.block_336}>ends mid-stream.</p>
                <p className={styles.block_337}>
                  Correct: is een loodgieter. Dan kan hij toch
                </p>
                <p className={styles.block_338}>minstens deze wc ontstoppen.</p>
                <p className={styles.block_339}>
                  Explanation: Sentence-final fragment begins
                </p>
                <p className={styles.block_340}>mid-stream.</p>
                <p className={styles.block_341}>
                  Correct: best lastig, dus laat dat je niet
                </p>
                <p className={styles.block_342}>ontmoedigen.</p>
                <p className={styles.block_343}>
                  Explanation: Audio was cut off at the beginning.
                </p>
                <p className={styles.block_344}>
                  Correct: Ik loop even naar Starbucks. Ik zal wel
                </p>
                <p className={styles.block_345}>
                  Hoeveel kost een cappuccino tegenwoordig?
                </p>
                <p className={styles.block_346}>
                  Explanation: Do not put a period, hyphen, or
                </p>
                <p className={styles.block_347}>
                  ellipsis after a fragment even if another
                </p>
                <p className={styles.block_348}>sentence follows.</p>
                <p className={styles.block_349}>
                  <span className={styles.text_4}>
                    Correct: Hoeveel kost een Waar ga jij naartoe?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Both sound like beginnings of{' '}
                  </span>
                </p>
                <p className={styles.block_350}>sentences.</p>
                <p className={styles.block_351}>
                  <span className={styles.text_4}>
                    Correct: Waar is Waar is het strand?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Repeated beginning of the{' '}
                  </span>
                </p>
                <p className={styles.block_312}>sentence.</p>
                <p className={styles.block_352}>
                  Correct: gingen weg maar toen besloten we
                </p>
                <p className={styles.block_353}>toch</p>
                <p className={styles.block_354}>
                  Explanation: Sounds like the middle of a
                </p>
                <p className={styles.block_355}>
                  sentence; beginning and end were cut off.
                </p>
                <p className={styles.block_356}>
                  A voice action is a query where the user requests a specific
                  action that a smartphone can complete. The action requested is
                  generally expressed by a trigger (most often a verb describing
                  the action to be performed, but it can also be any other part
                  of speech denoting a change of state of the device or of an
                  app). If a voice action sounds complete, it should be
                  capitalized and punctuated as a full sentence. In contrast to
                  a voice action, a web search is a query where the user does
                  not request a specific action
                </p>
                <p className={styles.block_357}>
                  that a smartphone can complete. Web searches are more often,
                  but not always, spoken as true fragments.
                </p>
                <p className={styles.block_358}>Correct: Bel thuis.</p>
                <p className={styles.block_359}>
                  Correct: Verstuur WhatsApp bericht aan Anita:
                </p>
                <p className={styles.block_360}>Hoe gaat het?</p>
                <p className={styles.block_214}>Correct: Open mail.</p>
                <p className={styles.block_361}>Correct: Speel muziek.</p>
                <p className={styles.block_362}>Correct: Zet de locatie aan.</p>
                <p className={styles.block_363}>
                  Correct: Zet timer op 10 minuten.
                </p>
                <p className={styles.block_364}>
                  Correct: Herinner me zaterdag om 12 uur:
                </p>
                <p className={styles.block_365}>sauna.</p>
                <p className={styles.block_366}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <p className={styles.block_369}>
                  Correct: Waar is de dichtstbijzijnde Albert
                </p>
                <p className={styles.block_370}>Heijn?</p>
                <p className={styles.block_371}>
                  Incorrect: Waar is, de dichtstbijzijnde, Albert
                </p>
                <p className={styles.block_372}>Heijn?</p>
                <p className={styles.block_373}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_374}>
                  pauses in these places, do not use a comma.
                </p>
                <p className={styles.block_375}>
                  There are places where commas are allowed or
                </p>
                <p className={styles.block_376}>
                  required, but this example contains neither.
                </p>
                <p className={styles.block_377}>
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a comma after the
                  single word or phrase.
                </p>
                <p className={styles.block_378}>
                  <span className={styles.text_4}>
                    Correct: Taipei, waar ligt dat?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Taipei is a phrase that focuses the
                  </span>
                </p>
                <p className={styles.block_379}>meaning of the sentence.</p>
                <p className={styles.block_380}>
                  Put a comma after common sentence openers such as introductory
                  clauses.
                </p>
                <p className={styles.block_381}>
                  Correct: Nu je het zegt, geloof ik inderdaad niet
                </p>
                <p className={styles.block_382}>
                  dat hij aardbeien had meegenomen.
                </p>
                <p className={styles.block_383}>
                  Explanation: introductory clause
                </p>
                <p className={styles.block_384}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_385}>
                  Correct: Ja, ik kom morgen ook wel even langs
                </p>
                <p className={styles.block_386}>op kraamvisite.</p>
                <p className={styles.block_387}>Explanation: yes/no word</p>
                <p className={styles.block_388}>
                  <span className={styles.text_4}>
                    Correct: Wow, dat is een mooie bak.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Interjection. Other examples of
                  </span>
                </p>
                <p className={styles.block_389}>
                  interjections include "hey", "haha", and others.
                </p>
                <p className={styles.block_390}>
                  Correct: Nou ja, ik zou natuurlijk liever ergens
                </p>
                <p className={styles.block_391}>
                  aan een zonnig strand liggen.
                </p>
                <p className={styles.block_392}>Explanation: Interjection</p>
                <p className={styles.block_393}>
                  <span className={styles.text_4}>Correct: Ja, ik wil. </span>
                  <span className={styles.text_5}>
                    Explanation: yes/no word{' '}
                  </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_4}>
                    Correct: Tuurlijk, komt voor de bakker.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: yes/no word{' '}
                  </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_4}>
                    Correct: Tuurlijk. Komt voor de bakker.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Substantial pause after "tuurlijk".
                  </span>
                </p>
                <p className={styles.block_396}>Use commas in lists.</p>
                <p className={styles.block_397}>
                  Correct: Ik ga op reis en ik neem mee: drie
                </p>
                <p className={styles.block_398}>
                  jassen, twee koffers, acht boeken.
                </p>
                <p className={styles.block_399}>
                  Explanation: list of noun phrases
                </p>
                <p className={styles.block_400}>
                  Correct: Iedereen aanbidt haar fantastisch
                </p>
                <p className={styles.block_401}>
                  leuke, schattige, lieve baby.
                </p>
                <p className={styles.block_402}>
                  Explanation: list of adjectives
                </p>
                <p className={styles.block_403}>
                  Use commas for non-restrictive modifiers, but do not use
                  commas for restrictive modifiers. The basic test for this is
                  whether the modifier can be dropped from the sentence and
                  still keep basically the same meaning.
                </p>
                <p className={styles.block_404}>
                  Correct: Klanten die een tafel gereserveerd
                </p>
                <p className={styles.block_405}>
                  hebben worden als eerste bediend.
                </p>
                <p className={styles.block_406}>
                  Explanation: Restrictive modifier. The relative
                </p>
                <p className={styles.block_407}>
                  clause "die een tafel gereserveerd hebben"
                </p>
                <p className={styles.block_408}>
                  restricts which people we are talking about, it
                </p>
                <p className={styles.block_409}>
                  doesn't just add additional information about an
                </p>
                <p className={styles.block_410}>
                  already delineated group of people.
                </p>
                <p className={styles.block_411}>
                  Correct: Mark Rutte, die sinds 2010
                </p>
                <p className={styles.block_412}>
                  Explanation: Non-restrictive modifier. As a rule
                </p>
                <p className={styles.block_413}>
                  minister-president van Nederland is, werd
                </p>
                <p className={styles.block_414}>geboren in 1967.</p>
                <p className={styles.block_415}>
                  of thumb, if you ask yourself: "which Mark
                </p>
                <p className={styles.block_416}>
                  Rutte" and the answer is absolutely clear, use
                </p>
                <p className={styles.block_417}>commas.</p>
                <p className={styles.block_418}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_419}>
                  Correct: Hartelijke groet, Pieter
                </p>
                <p className={styles.block_420}>
                  Do not use commas in sentences that consist only of a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className={styles.block_421}>Correct: Hoi.</p>
                <p className={styles.block_422}>Correct: Hoi Hanna.</p>
                <p className={styles.block_423}>Correct: Hoi, Joost hier.</p>
                <p className={styles.block_424}>
                  <span className={styles.text_4}>
                    Correct: Hoi Hanna. Joost hier.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Long pause between "Hoi Hanna."
                  </span>
                </p>
                <p className={styles.block_425}>
                  and "Joost hier." Treat as separate sentences.
                </p>
                <p className={styles.block_426}>
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_427}>
                  Correct: Elly, bel je me even terug?
                </p>
                <p className={styles.block_428}>
                  Correct: Hoe gaat het ermee, Maaike?
                </p>
                <p className={styles.block_429}>
                  Correct: Daan, Joost hier. We moeten even met
                </p>
                <p className={styles.block_430}>
                  elkaar zitten over die verzekeringsclaim.
                </p>
                <p className={styles.block_339}>
                  Explanation: Note that this is a difficult edge
                </p>
                <p className={styles.block_431}>case: "Daan, Joost."</p>
                <p className={styles.block_432}>
                  Correct: Hanna, hoi, ik ben Dorien.
                </p>
                <p className={styles.block_433}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_434}>Correct: Ok Google</p>
                <p className={styles.block_435}>
                  Correct: Ok Google, foto's van olijfbomen
                </p>
                <p className={styles.block_436}>
                  Correct: Ok Google, laat de contactgegevens
                </p>
                <p className={styles.block_437}>van Bart zien.</p>
                <p className={styles.block_438}>
                  Correct: Ok Google, wanneer is Pasen dit jaar?
                </p>
                <p className={styles.block_439}>Intonation marks</p>
                <p className={styles.block_440}>
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built as questions, regardless of
                  intonation. 2) All queries which sound like they are being
                  used as questions, regardless of sentence structure.
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_4}>Correct: Meen je dat? </span>
                  <span className={styles.text_5}>
                    Explanation: Syntactically built as a question, so
                  </span>
                </p>
                <p className={styles.block_442}>
                  punctuate as a question regardless of
                </p>
                <p className={styles.block_443}>intonation.</p>
                <p className={styles.block_444}>
                  <span className={styles.text_4}>Correct: Om 3 uur? </span>
                  <span className={styles.text_5}>
                    Explanation: Rising intonation suggests it is a
                  </span>
                </p>
                <p className={styles.block_445}>
                  question, so punctuate as a question regardless
                </p>
                <p className={styles.block_446}>of structure.</p>
                <p className={styles.block_447}>
                  <span className={styles.text_4}>
                    Correct: weer in Amsterdam{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Query has rising intonation, but is
                  </span>
                </p>
                <p className={styles.block_448}>
                  most likely a web search rather than a true
                </p>
                <p className={styles.block_449}>question.</p>
                <p className={styles.block_450}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_4}>Correct: Hoera! </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_4}>Correct: Hoera. </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a colon between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_455}>
                  Correct: Mijn vrienden zeiden: "Dat gaat je nooit
                </p>
                <p className={styles.block_456}>lukken."</p>
                <p className={styles.block_457}>
                  Incorrect: Mijn vrienden zeiden, "dat gaat je
                </p>
                <p className={styles.block_458}>nooit lukken."</p>
                <p className={styles.block_459}>
                  Incorrect: Mijn vrienden zeiden "dat gaat je
                </p>
                <p className={styles.block_458}>nooit lukken."</p>
                <p className={styles.block_460}>
                  Incorrect: Mijn vrienden zeiden "Dat gaat je
                </p>
                <p className={styles.block_458}>nooit lukken".</p>
                <p className={styles.block_461}>
                  Explanation: The word "zeggen" is the most
                </p>
                <p className={styles.block_462}>
                  common reported speech verb in Dutch, but
                </p>
                <p className={styles.block_463}>
                  other words ("vragen", "antwoorden") can be
                </p>
                <p className={styles.block_464}>used for reported speech.</p>
                <p className={styles.block_465}>
                  Correct: Zeg eens "Liesje leerde Lotje lopen
                </p>
                <p className={styles.block_466}>langs de lange Lindelaan".</p>
                <p className={styles.block_467}>
                  Incorrect: Zeg eens: "Liesje leerde Lotje lopen
                </p>
                <p className={styles.block_468}>langs de lange Lindelaan".</p>
                <p className={styles.block_469}>
                  Explanation: Omit the comma if the verb is in
                </p>
                <p className={styles.block_470}>the imperative.</p>
                <p className={styles.block_471}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_472}>
                  Correct: Tom zei: "Laten we bij de HEMA
                </p>
                <p className={styles.block_267}>afspreken."</p>
                <p className={styles.block_473}>
                  Incorrect: Tom zei: "laten we bij de HEMA
                </p>
                <p className={styles.block_474}>afspreken.".</p>
                <p className={styles.block_475}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_476}>
                  as a sentence. Do not add excess punctuation.
                </p>
                <p className={styles.block_477}>
                  Correct: Tom zei: "Zullen we bij de HEMA
                </p>
                <p className={styles.block_478}>afspreken?"</p>
                <p className={styles.block_475}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_479}>
                  as sentences. Do not alter its end punctuation
                </p>
                <p className={styles.block_480}>
                  even though the quote is within a sentence.
                </p>
                <p className={styles.block_481}>
                  Incorrect: Tom zei, "zullen we bij de HEMA
                </p>
                <p className={styles.block_269}>afspreken?".</p>
                <p className={styles.block_482}>
                  Correct: Josh heeft gelijk zoiets van, "Ik ben er
                </p>
                <p className={styles.block_483}>
                  ook bij. Beloofd." zonder überhaupt even naar
                </p>
                <p className={styles.block_484}>zijn agenda te kijken.</p>
                <p className={styles.block_475}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_479}>
                  as sentences. Do not alter its end punctuation
                </p>
                <p className={styles.block_485}>
                  even though the quote is within a sentence.
                </p>
                <p className={styles.block_486}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_487}>
                  Correct: Vertaal naar het Frans: Hoe gaat het
                </p>
                <p className={styles.block_488}>met jou?</p>
                <p className={styles.block_489}>
                  Explanation: The quote follows the command,
                </p>
                <p className={styles.block_490}>
                  so use a colon and omit quotation marks.
                </p>
                <p className={styles.block_491}>
                  Correct: Vertaal "Hoe gaat het met jou" naar het
                </p>
                <p className={styles.block_370}>Frans.</p>
                <p className={styles.block_492}>
                  Explanation: The quote is in the middle of a
                </p>
                <p className={styles.block_493}>
                  sentence, so use quotation marks and omit
                </p>
                <p className={styles.block_494}>colon.</p>
                <p className={styles.block_495}>
                  Correct: Aan example@gmail.com: Hey, hoe
                </p>
                <p className={styles.block_478}>was je dag?</p>
                <p className={styles.block_496}>
                  Correct: Stuur een e-mail aan
                </p>
                <p className={styles.block_497}>
                  example@gmail.com met de inhoud: Hey, hoe
                </p>
                <p className={styles.block_478}>was je dag?</p>
                <p className={styles.block_498}>
                  Do not capitalize the first word after a colon in
                  enumerations, but use uppercase if the part of the utterance
                  after the colon can be a full sentence.
                </p>
                <p className={styles.block_499}>
                  Correct: Vertaal naar het Frans: Hoe gaat het
                </p>
                <p className={styles.block_500}>met jou?</p>
                <p className={styles.block_501}>
                  Correct: Neem voor mij het volgende mee: drie
                </p>
                <p className={styles.block_502}>
                  appels, twee bananen en een peer.
                </p>
                <p className={styles.block_503}>
                  Explanation: This is an enumeration, so you
                </p>
                <p className={styles.block_504}>
                  should not capitalize the first letter.
                </p>
                <p className={styles.block_505}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_4}>
                    Correct: Vertaal "hallo" naar het Frans.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Do not capitalize "hallo" even
                  </span>
                </p>
                <p className={styles.block_507}>
                  though it can stand alone as a sentence in
                </p>
                <p className={styles.block_508}>other contexts.</p>
                <p className={styles.block_509}>
                  <span className={styles.text_4}>
                    Correct: Vertaal naar het Spaans: verdwijn.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Do not capitalize "verdwijn" even
                  </span>
                </p>
                <p className={styles.block_507}>
                  though it can stand alone as a sentence in
                </p>
                <p className={styles.block_508}>other contexts.</p>
                <p className={styles.block_510}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.
                </p>
                <p className={styles.block_511}>
                  Correct: Hoe schrijf je takata?
                </p>
                <p className={styles.block_512}>
                  Incorrect: Hoe schrijf je "takata"?
                </p>
                <p className={styles.block_513}>
                  Correct: Hij zei alleen komkommer.
                </p>
                <p className={styles.block_514}>
                  Incorrect: Hij zei alleen "komkommer".
                </p>
                <p className={styles.block_515}>
                  Correct: Anna is een palindroom.
                </p>
                <p className={styles.block_516}>
                  Incorrect: "Anna" is een palindroom.
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from standard letters, you should not use any other
                  symbol than: 0-9
                  äâàßçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                  []√/@#$€£+=%*&amp;-.;
                </p>
                <p className={styles.block_519}>
                  Transcribe apostrophes as they are normally used.
                </p>
                <p className={styles.block_520}>
                  Correct: hits uit de jaren '80
                </p>
                <p className={styles.block_521}>
                  Correct: Dit is Renee's huis.
                </p>
                <p className={styles.block_522}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_523}>
                  Correct: Ajax-PSV is 1-2 geworden.
                </p>
                <p className={styles.block_524}>
                  Include a hyphen between locations in flight itineraries.
                </p>
                <p className={styles.block_525}>Correct: goedkope retourtjes</p>
                <p className={styles.block_526}>Amsterdam-Londen</p>
                <p className={styles.block_527}>
                  Use hyphen in phrases and compounds typically written with
                  hyphen. If in doubt, use hyphen. Check your locale's
                  dictionary for hyphenation.
                </p>
                <p className={styles.block_528}>
                  Correct: Nederlandse marinefregatten voeren
                </p>
                <p className={styles.block_529}>de rood-wit-blauwe vlag.</p>
                <p className={styles.block_530}>
                  Correct: Berkel-Enschot is een plaats bij Tilburg.
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.)
                </p>
                <p className={styles.block_532}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_533}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_534}>Correct:{` {laag streepje}`}</p>
                <p className={styles.block_535}>Incorrect: _</p>
                <p className={styles.block_536}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>laag streepje </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_537}>Correct: {`{streepje}`}</p>
                <p className={styles.block_538}>Incorrect: -</p>
                <p className={styles.block_539}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>streepje </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_540}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_541}>
                  Correct: Ik ga nu weg {`{punt}`} Hoe laat ben jij
                </p>
                <p className={styles.block_542}>thuis {`{vraagteken}`}</p>
                <p className={styles.block_543}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    ik ga nu weg punt hoe laat ben{' '}
                  </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_1}>jij thuis vraagteken </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Punctuation" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Punctuation

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
