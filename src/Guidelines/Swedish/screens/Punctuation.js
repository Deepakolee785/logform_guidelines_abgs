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
            <PageContentHeader currentPage="longform Swedish" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={styles.block_300}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.
                </p>
                <p className={styles.block_301}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_302}>
                  In general, a complete sentence contains a subject and a verb.
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_4}>
                    Correct: Han arbetar hemifrån idag.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Includes subject and verb.{' '}
                  </span>
                </p>
                <p className={styles.block_304}>
                  <span className={styles.text_4}>
                    Correct: Och jag gillar honom inte ens.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Includes subject and verb. Sounds
                  </span>
                </p>
                <p className={styles.block_305}>
                  like a whole utterance rather than just a
                </p>
                <p className={styles.block_306}>
                  conjunction to a larger sentence.
                </p>
                <p className={styles.block_307}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_308}>
                  Correct: Vem pratar du om? Grannen bredvid
                </p>
                <p className={styles.block_309}>oss.</p>
                <p className={styles.block_310}>Explanation: two speakers</p>
                <p className={styles.block_311}>
                  <span className={styles.text_4}>
                    Correct: grannen bredvid oss{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: No context to suggest this is a
                  </span>
                </p>
                <p className={styles.block_312}>
                  sentence; treat it as a fragment.
                </p>
                <p className={styles.block_313}>
                  <span className={styles.text_4}>
                    Correct: bilder på hundar{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Google search for images, not a
                  </span>
                </p>
                <p className={styles.block_314}>sentence</p>
                <p className={styles.block_315}>
                  <span className={styles.text_4}>
                    Correct: Ses i morgon då?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: the subject ("vi") has been left out
                  </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_4}>
                    Correct: vädret i Göteborg{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: This is asking for information, but
                  </span>
                </p>
                <p className={styles.block_316}>
                  the most likely interpretation is as a sentence
                </p>
                <p className={styles.block_317}>fragment on its own.</p>
                <p className={styles.block_318}>
                  <span className={styles.text_4}>
                    Correct: Ska träffa min granne.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: the subject has been left out{' '}
                  </span>
                </p>
                <p className={styles.block_319}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_4}>Correct: Attans. </span>
                  <span className={styles.text_5}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_4}>Correct: Hej. </span>
                  <span className={styles.text_5}>Explanation: greeting </span>
                </p>
                <p className={styles.block_259}>
                  <span className={styles.text_4}>Correct: Visst. Hejdå. </span>
                  <span className={styles.text_5}>
                    Explanation: This includes both a yes/no word
                  </span>
                </p>
                <p className={styles.block_322}>
                  and a farewell, with a long pause between.
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_4}>
                    Correct: Skål för brudparet.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Here, "Skål" is not being used as an
                  </span>
                </p>
                <p className={styles.block_324}>
                  interjection on its own, but rather the entire
                </p>
                <p className={styles.block_325}>
                  sentence is being used as an interjection.
                </p>
                <p className={styles.block_326}>
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search, not as full sentences.
                </p>
                <p className={styles.block_327}>
                  Correct: hur man gör bakad potatis
                </p>
                <p className={styles.block_328}>
                  Incorrect: Hur man gör bakad potatis.
                </p>
                <p className={styles.block_329}>Correct: bilder på Spanien</p>
                <p className={styles.block_330}>
                  Incorrect: Bilder på Spanien.
                </p>
                <p className={styles.block_331}>
                  Correct: godaste lussebullen i Uppsala
                </p>
                <p className={styles.block_332}>
                  Incorrect: Godaste lussebullen i Uppsala.
                </p>
                <p className={styles.block_333}>
                  Correct: Astrid Lindgren bibliografi
                </p>
                <p className={styles.block_334}>
                  Incorrect: Astrid Lindgren bibliografi.
                </p>
                <p className={styles.block_335}>
                  Correct: Pappan och havet Vem ska trösta
                </p>
                <p className={styles.block_336}>
                  knyttet? Det osynliga barnet och andra
                </p>
                <p className={styles.block_337}>berättelser</p>
                <p className={styles.block_338}>
                  Incorrect: Pappan och havet Vem ska trösta
                </p>
                <p className={styles.block_339}>
                  knyttet? Det osynliga barnet och andra
                </p>
                <p className={styles.block_340}>berättelser.</p>
                <p className={styles.block_341}>
                  Incorrect: Pappan och havet, Vem ska trösta
                </p>
                <p className={styles.block_342}>
                  knyttet?, Det osynliga barnet och andra
                </p>
                <p className={styles.block_340}>berättelser.</p>
                <p className={styles.block_343}>
                  Incorrect: Pappan och havet. Vem ska trösta
                </p>
                <p className={styles.block_339}>
                  knyttet? Det osynliga barnet och andra
                </p>
                <p className={styles.block_340}>berättelser.</p>
                <p className={styles.block_344}>
                  Explanation: The three different book titles are initially
                  capitalized, but no other interpunctation than what is already
                  part of the titles is allowed.
                </p>

                <p className={'text'}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_348}>
                  <span className={styles.text_4}>
                    Correct: Vad tycker du? Det verkar inte som{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Begins as complete sentence and
                  </span>
                </p>
                <p className={styles.block_349}>ends mid-stream.</p>
                <p className={styles.block_350}>
                  Correct: mycket snabbare. Det är en stor
                </p>
                <p className={styles.block_351}>skillnad.</p>
                <p className={styles.block_352}>
                  Explanation: Fragment is the end of a sentence.
                </p>
                <p className={styles.block_353}>
                  Correct: känslig, så kom ihåg att ha det i
                </p>
                <p className={styles.block_354}>åtanke.</p>
                <p className={styles.block_355}>
                  Explanation: Begins mid-stream but ends
                </p>
                <p className={styles.block_356}>
                  completely; part of complete sentence.
                </p>
                <p className={styles.block_282}>
                  Correct: riktigt svårt, så bli inte avskräckt om
                </p>
                <p className={styles.block_357}>
                  det går trögt till en början.
                </p>
                <p className={styles.block_358}>
                  Explanation: Audio was cut off at the beginning.
                </p>
                <p className={styles.block_359}>
                  Correct: Jag ska till cafeterian och köpa en Hur
                </p>
                <p className={styles.block_360}>mycket kostar en cappuccino?</p>
                <p className={styles.block_361}>
                  Explanation: Do not put a period, hyphen, or
                </p>
                <p className={styles.block_362}>
                  ellipsis, even if another sentence follows.
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_4}>
                    Correct: Hur mycket kostar Var i prisklass{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Both sound like beginnings of{' '}
                  </span>
                </p>
                <p className={styles.block_364}>sentences.</p>
                <p className={styles.block_365}>
                  <span className={styles.text_4}>
                    Correct: Var är Var är stranden?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Repeated beginning of the{' '}
                  </span>
                </p>
                <p className={styles.block_366}>sentence.</p>
                <p className={styles.block_367}>
                  <span className={styles.text_4}>
                    Correct: var på väg men bestämde oss för att{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sounds like the middle of a{' '}
                  </span>
                </p>
                <p className={styles.block_368}>
                  sentence; beginning and end were cut off.
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_4}>
                    Correct: Jag lånade skorna. köpte dem{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Unclear whether "köpte dem" is the
                  </span>
                </p>
                <p className={styles.block_370}>
                  end of a sentence or a stand-alone fragment, so
                </p>
                <p className={styles.block_371}>
                  default to formatting it as a fragment.
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_4}>
                    Correct: Jag lånade skorna. Älskade dem.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: "Älskade dem." is clearly a{' '}
                  </span>
                </p>
                <p className={styles.block_372}>
                  complete sentence with an omitted subject.
                </p>
                <p className={styles.block_373}>
                  A voice action is a query where the user requests a specific
                  action that a smartphone can complete. The action requested is
                  generally expressed by a trigger (most often a verb describing
                  the action to be performed, but it can also be any other part
                  of speech denoting a change of state of the device or of an
                  app). If a voice action sounds complete, it should be
                  capitalized and punctuated as a full sentence. In contrast to
                  a voice action, a web search is a query where the user does
                  not request a specific action that a smartphone can complete.
                  Web searches are more often, but not always, spoken as true
                  fragments.
                </p>
                <p className={styles.block_374}>
                  Correct: Skicka meddelande till Magnus: Hej,
                </p>
                <p className={styles.block_375}>hur går det för er?</p>
                <p className={styles.block_376}>Correct: Ring mamma.</p>
                <p className={styles.block_377}>Correct: Starta Instagram.</p>
                <p className={styles.block_378}>Correct: Starta ficklampan.</p>
                <p className={styles.block_379}>
                  Correct: Ställ alarm klockan 12.00 imorgon.
                </p>
                <p className={styles.block_380}>
                  Correct: Påminn mig att köpa mjölk.
                </p>
                <p className={styles.block_381}>Correct: Skriva SMS.</p>
                <p className={styles.block_382}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.
                </p>
              </div>
              <div id="commas">
                <p className={styles.block_383}>Commas</p>
                <p className={styles.block_384}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <p className={styles.block_385}>
                  Correct: Var är det närmsta hotellet?
                </p>
                <p className={styles.block_386}>
                  Incorrect: Var är, det närmsta, hotellet?
                </p>
                <p className={styles.block_387}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_388}>
                  pauses in these places, do not use a comma.
                </p>
                <p className={styles.block_389}>
                  There are places where commas are allowed or
                </p>
                <p className={styles.block_390}>
                  required, but this example contains neither.
                </p>
                <p className={styles.block_391}>
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a comma after the
                  single word or phrase.
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_4}>
                    Correct: Botaniska trädgården, är den stängd?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: topic-comment{' '}
                  </span>
                </p>
                <p className={styles.block_393}>
                  <span className={styles.text_4}>
                    Correct: Peter, är han här?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: topic-comment{' '}
                  </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_4}>
                    Correct: Wienerbröd, det gillar jag.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: topic-comment{' '}
                  </span>
                </p>
                <p className={styles.block_395}>
                  Put a comma after common sentence openers such as introductory
                  clauses and sub-clauses that contain a finite verb. However,
                  never use a comma to split a sentence containing a necessary
                  sub-clause (i.e. one which without the sentence becomes
                  ungrammatical) into different parts.
                </p>
                <p className={styles.block_396}>
                  Correct: Nu när du säger det, vi borde köpa lite
                </p>
                <p className={styles.block_397}>mer mjölk.</p>
                <p className={styles.block_398}>
                  Explanation: introductory clause
                </p>
                <p className={styles.block_399}>
                  Correct: Medan vi ändå håller på, ska vi inte
                </p>
                <p className={styles.block_400}>sätta upp hyllorna också?</p>
                <p className={styles.block_398}>
                  Explanation: introductory clause
                </p>
                <p className={styles.block_401}>
                  Correct: Han undrade om flyget skulle komma
                </p>
                <p className={styles.block_402}>iväg i tid.</p>
                <p className={styles.block_403}>
                  Incorrect: Han undrade om, flyget skulle
                </p>
                <p className={styles.block_404}>komma iväg i tid.</p>
                <p className={styles.block_405}>
                  Explanation: necessary sub-clause
                </p>
                <p className={styles.block_406}>
                  Use a comma when two independent clauses are connected by
                  discourse connectives such as "och", "men", "så" and "eller".
                  However, do not put a comma before discourse connectives when
                  that means separating clauses from each other that share a
                  clause element (e.g. a subject).
                </p>
                <p className={styles.block_407}>
                  Correct: Jag tog mig an jobbet själv, så jag är
                </p>
                <p className={styles.block_408}>väldigt motiverad.</p>
                <p className={styles.block_409}>
                  Explanation: two separate clauses
                </p>
                <p className={styles.block_410}>
                  Correct: Han satte på musik, och jag tog hand
                </p>
                <p className={styles.block_411}>om disken.</p>
                <p className={styles.block_409}>
                  Explanation: two separate clauses
                </p>
                <p className={styles.block_412}>
                  Correct: Han satte på musik och tog hand om
                </p>
                <p className={styles.block_413}>disken.</p>
                <p className={styles.block_414}>
                  Explanation: two clauses that share a class
                </p>
                <p className={styles.block_415}>element ("Han")</p>
                <p className={styles.block_416}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_4}>
                    Correct: Alltså, jag vet inte.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Discourse word. Other examples of
                  </span>
                </p>
                <p className={styles.block_418}>
                  discourse words in Swedish include "liksom".
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_4}>
                    Correct: Haha, vad knäpp du är.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Interjection. Other examples of
                  </span>
                </p>
                <p className={styles.block_420}>
                  interjections include "wow", "hej", "förlåt", and
                </p>
                <p className={styles.block_421}>others.</p>
                <p className={styles.block_422}>
                  <span className={styles.text_4}>
                    Correct: Ursäkta, jag är lite sen.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Interjection{' '}
                  </span>
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_4}>
                    Correct: Okej, jag ska kolla upp det.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Yes/no word. Other examples of
                  </span>
                </p>
                <p className={styles.block_424}>
                  these types items include "nej", "jepp", "visst",
                </p>
                <p className={styles.block_425}>and others.</p>
                <p className={styles.block_426}>
                  <span className={styles.text_4}>
                    Correct: Ja, det gör vi.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Yes/no word.{' '}
                  </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_4}>
                    Correct: Jaså, jag trodde du var äldre.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: No pause after "jaså".{' '}
                  </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_4}>
                    Correct: Jaså? Jag trodde du var äldre.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Substantial pause after "jaså".
                  </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_4}>
                    Correct: Visst, vi kan komma lite senare.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Use a comma when there is no{' '}
                  </span>
                </p>
                <p className={styles.block_429}>
                  pause, or when there is a pause that isn't long.
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_4}>
                    Correct: Visst. Vi kan komma lite senare.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Use a period when there is a{' '}
                  </span>
                </p>
                <p className={styles.block_431}>
                  substantial pause after "visst".
                </p>
                <p className={styles.block_432}>
                  Use commas before tag questions.
                </p>
                <p className={styles.block_433}>
                  Correct: Det var intressant, eller hur?
                </p>
                <p className={styles.block_434}>
                  Correct: Skickar du mig saltet, är du snäll?
                </p>
                <p className={styles.block_435}>Correct: Vi ses ikväll, va?</p>
                <p className={styles.block_436}>
                  Use a comma in conditionals and similar coordinations of the
                  form "if/when X, Y happens" but not of the form "Y and/or X".
                  (This rule also applies to similar phrases containing
                  "eftersom", "då", "när", etc.)
                </p>
                <p className={styles.block_437}>
                  Correct: Om du tar med hammaren, tar jag med
                </p>
                <p className={styles.block_438}>mig en såg.</p>
                <p className={styles.block_439}>
                  Correct: Eftersom jag ville vara där först, tältade
                </p>
                <p className={styles.block_440}>jag utanför butiken.</p>
                <p className={styles.block_441}>Use commas in lists.</p>
                <p className={styles.block_442}>
                  Correct: Jag gillar golf, fotboll och basket.
                </p>
                <p className={styles.block_443}>
                  Sometimes there is no connective word in a list, inte those
                  cases a comma is used instead.
                </p>
                <p className={styles.block_444}>
                  Correct: Jag kom, jag såg, jag segrade.
                </p>
                <p className={styles.block_445}>
                  Use commas for non-restrictive modifiers, but do not use
                  commas for restrictive modifiers. The basic test for this is
                  whether the modifier can be dropped from the sentence and
                  still keep basically the same meaning.
                </p>
                <p className={styles.block_446}>
                  Correct: USA:s president, Barack Obama, var på
                </p>
                <p className={styles.block_447}>mötet.</p>
                <p className={styles.block_448}>
                  Explanation: Non-restrictive modifier. "Barack
                </p>
                <p className={styles.block_449}>
                  Obama" does not change the core meaning of
                </p>
                <p className={styles.block_450}>
                  "USA:s president", it just adds additional
                </p>
                <p className={styles.block_451}>
                  information about the US president.
                </p>
                <p className={styles.block_452}>
                  Correct: De gäster som har bokat bord har
                </p>
                <p className={styles.block_453}>
                  Explanation: Restrictive modifier. The relative
                </p>
                <p className={styles.block_454}>företräde.</p>
                <p className={styles.block_455}>
                  clause "som har bokat bord" restricts which
                </p>
                <p className={styles.block_456}>
                  guests we are talking about, it doesn't just add
                </p>
                <p className={styles.block_457}>
                  additional information about an already
                </p>
                <p className={styles.block_458}>delineated group of people.</p>
                <p className={styles.block_459}>
                  Correct: President Obama, som blev vald år
                </p>
                <p className={styles.block_460}>
                  Explanation: Non-restrictive modifier. As a rule
                </p>
                <p className={styles.block_461}>
                  2008, påbörjade sitt presidentskap år 2009.
                </p>
                <p className={styles.block_462}>
                  of thumb, if you ask yourself: "which president
                </p>
                <p className={styles.block_456}>
                  of the United States" or "which classmate" and
                </p>
                <p className={styles.block_463}>
                  the answer is not absolutely clear, don't use
                </p>
                <p className={styles.block_464}>commas.</p>
                <p className={styles.block_465}>
                  Correct: Presidenten som valdes år 2008
                </p>
                <p className={styles.block_466}>
                  Explanation: Unless there are significant
                </p>
                <p className={styles.block_467}>
                  påbörjade sitt presidentskap år 2009.
                </p>
                <p className={styles.block_468}>
                  pauses after "presidenten" and "2008", you
                </p>
                <p className={styles.block_463}>
                  should assume this is a restrictive modifier.
                </p>
                <p className={styles.block_469}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_470}>Correct: Hälsningar, Anna</p>
                <p className={styles.block_471}>Correct: Kram, Kenneth</p>
                <p className={styles.block_395}>
                  Do not use commas in sentences that consist only of a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className={styles.block_472}>Correct: Hej.</p>
                <p className={styles.block_473}>Correct: Hej David.</p>
                <p className={styles.block_474}>Correct: Hej, det är Johan.</p>
                <p className={styles.block_475}>
                  Correct: Hej David, det är Johan.
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_4}>
                    Correct: Hej David. Det är Johan.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Long pause between "Hej David."
                  </span>
                </p>
                <p className={styles.block_477}>
                  and "Det är Johan." Treat as separate
                </p>
                <p className={styles.block_364}>sentences.</p>
                <p className={styles.block_478}>
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_479}>
                  Correct: Catrin, ring upp mig.
                </p>
                <p className={styles.block_480}>Correct: Hur mår du, Johan?</p>
                <p className={styles.block_481}>
                  Correct: Malin, Amanda. Jag behöver prata
                </p>
                <p className={styles.block_482}>
                  med dig om den där försäkringen.
                </p>
                <p className={styles.block_483}>
                  Explanation: Note that this is a difficult edge
                </p>
                <p className={styles.block_484}>
                  case: "Malin, Amanda." appears to be a
                </p>
                <p className={styles.block_388}>
                  shortened version of "Malin, det är Amanda.",
                </p>
                <p className={styles.block_485}>
                  so we treat it as a full sentence.
                </p>
                <p className={styles.block_333}>
                  Correct: Peter, hej, det är Susanne.
                </p>
                <p className={styles.block_486}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_487}>Correct: Ok Google</p>
                <p className={styles.block_488}>
                  Correct: Ok Google, bilder på hundar
                </p>
                <p className={styles.block_489}>
                  Correct: Ok Google, visa Davids
                </p>
                <p className={styles.block_490}>kontaktinformation.</p>
                <p className={styles.block_491}>
                  Correct: Ok Google, när är julafton i år?
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={'text'}>
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built as questions, regardless of
                  intonation. 2) All queries which sound like they are being
                  used as questions, regardless of sentence structure.
                </p>
                <p className={styles.block_494}>Correct: Är du allvarlig?</p>
                <p className={styles.block_495}>
                  <span className={styles.text_4}>
                    Correct: Klockan tre på natten?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Utterance uses question{' '}
                  </span>
                </p>
                <p className={styles.block_496}>intonation.</p>
                <p className={styles.block_497}>
                  <span className={styles.text_4}>
                    Correct: Erik kommer också?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Utterance uses phrase final rising
                  </span>
                </p>
                <p className={styles.block_496}>intonation.</p>
                <p className={styles.block_498}>
                  <span className={styles.text_4}>
                    Correct: vädret i Stockholm{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Query uses rising intonation, but is
                  </span>
                </p>
                <p className={styles.block_499}>
                  most likely a web search rather than a true
                </p>
                <p className={styles.block_314}>question.</p>
                <p className={styles.block_500}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_501}>Correct: Håll käften!</p>
                <p className={styles.block_502}>
                  <span className={styles.text_4}>Correct: Hurra! </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_4}>Correct: Hurra. </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_4}>
                    Correct: Vilken mes du är.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Spoken dispassionately.{' '}
                  </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_4}>
                    Correct: Grattis på födelsedagen!{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_4}>
                    Correct: Ha en bra dag.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: pleasant neutral tone{' '}
                  </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_4}>
                    Correct: Jag ägde tentan idag!{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a colon when reported speech verbs are followed by direct
                  quotations. If the text in quotation marks qualifies as a
                  sentence, punctuate and capitalize as if it were its own
                  utterance. Do not alter its end punctuation. Do not add excess
                  punctuation after end quotation marks. Omit the colon if the
                  speech verb is in the imperative.
                </p>
                <p className={styles.block_508}>
                  Correct: Då sa Lena: "Jag följer med."
                </p>
                <p className={styles.block_386}>
                  Incorrect: Då sa Lena: "Jag följer med".
                </p>
                <p className={styles.block_509}>
                  Incorrect: Då sa Lena "Jag följer med."
                </p>
                <p className={styles.block_510}>
                  Incorrect: Då sa Lena, "Jag följer med."
                </p>
                <p className={styles.block_511}>
                  Explanation: The word "sa" is probably the most
                </p>
                <p className={styles.block_456}>
                  common reported speech verb in Swedish, but
                </p>
                <p className={styles.block_512}>
                  other words ( i.e. "fråga", "svara", "ropa") can be
                </p>
                <p className={styles.block_513}>
                  used for reported speech too.
                </p>
                <p className={styles.block_514}>
                  Correct: Lena utbrast: "Åh, menar du verkligen
                </p>
                <p className={styles.block_515}>det?"</p>
                <p className={styles.block_516}>
                  Incorrect: Lena utbrast: "Åh, menar du verkligen
                </p>
                <p className={styles.block_517}>det"?</p>
                <p className={styles.block_518}>
                  Incorrect: Lena utbrast: "Åh menar du verkligen
                </p>
                <p className={styles.block_517}>det"?</p>
                <p className={styles.block_519}>
                  Correct: Lena sa: "Skit också!"
                </p>
                <p className={styles.block_520}>
                  Incorrect: Lena sa: "Skit också!".
                </p>
                <p className={styles.block_521}>
                  Incorrect: Lena sa "skit också"!
                </p>
                <p className={styles.block_522}>
                  Incorrect: Lena sa, "Skit också!"
                </p>
                <p className={styles.block_523}>
                  Explanation: The phrase "Skit också!" is an
                </p>
                <p className={styles.block_524}>
                  interjection and acts as a sentence.
                </p>
                <p className={styles.block_525}>
                  Correct: Barnen utbrast: "Hamburgare och
                </p>
                <p className={styles.block_526}>pommes!"</p>
                <p className={styles.block_527}>
                  Incorrect: Barnen utbrast: "Hamburgare och
                </p>
                <p className={styles.block_528}>pommes"!</p>
                <p className={styles.block_529}>
                  Incorrect: Barnen utbrast "Hamburgare och
                </p>
                <p className={styles.block_530}>pommes!".</p>
                <p className={styles.block_531}>
                  Explanation: The noun phrase "Hamburgare och
                </p>
                <p className={styles.block_532}>
                  pommes!" most likely is a reply to a question
                </p>
                <p className={styles.block_533}>
                  and should therefore as a stand-alone
                </p>
                <p className={styles.block_534}>utterance here.</p>
                <p className={styles.block_535}>
                  <span className={styles.text_4}>
                    Correct: Hon liksom bara: "Nä, det behövs inte."{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The "liksom bara" construction
                  </span>
                </p>
                <p className={styles.block_536}>
                  introduces a direct quotation, so a colon is
                </p>
                <p className={styles.block_537}>needed here too.</p>
                <p className={styles.block_538}>
                  <span className={styles.text_4}>
                    Correct: Säg "omelett".{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The speech verb is in the{' '}
                  </span>
                </p>
                <p className={styles.block_425}>imperative.</p>
                <p className={styles.block_539}>
                  Do not use a colon if the quotation comes before the speech
                  verb or if the quote is embedded in the middle of a sentence.
                  Questions and exclamations within quotation marks should be
                  punctuated and capitalized as if they were their own
                  utterances, so do not alter their end punctuation even if the
                  quotes are within a sentence. Do not add excess punctuation
                  after end quotation marks. Ordinary statements that qualify as
                  sentences should be capitalized, but not punctuated as if
                  their own utterances, instead the end of the quote is followed
                  by a comma which then is succeeded by a space and the rest of
                  the sentence.
                </p>
                <p className={styles.block_540}>
                  Correct: "Ska vi träffas klockan tolv imorgon?"
                </p>
                <p className={styles.block_541}>frågade Peter.</p>
                <p className={styles.block_542}>
                  Explanation: The quoted question keeps its
                </p>
                <p className={styles.block_543}>
                  punctuation and the entire sentence gets it's
                </p>
                <p className={styles.block_544}>own punctuation too.</p>
                <p className={styles.block_545}>
                  <span className={styles.text_4}>
                    Correct: "Skynda dig!" ropade David.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The quoted exclamation keeps its
                  </span>
                </p>
                <p className={styles.block_546}>
                  punctuation and the entire sentence gets it's
                </p>
                <p className={styles.block_547}>own punctuation too.</p>
                <p className={styles.block_548}>
                  Correct: Fråga nummer fem, "Har du några
                </p>
                <p className={styles.block_549}>
                  övriga synpunkter på detta problem?", hade
                </p>
                <p className={styles.block_550}>många lämnat obesvarad.</p>
                <p className={styles.block_551}>
                  Explanation: Here the quoted question is acting
                </p>
                <p className={styles.block_552}>
                  like a non-restrictive modifier and is therefore
                </p>
                <p className={styles.block_553}>
                  surrounded by commas. The whole sentence is
                </p>
                <p className={styles.block_554}>ended with a period.</p>
                <p className={styles.block_555}>
                  <span className={styles.text_4}>
                    Correct: "Jag är trött", sa Sofie.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The quoted sentence is merely a
                  </span>
                </p>
                <p className={styles.block_316}>
                  statement and therefore does not get to keep
                </p>
                <p className={styles.block_556}>
                  its original punctuation. Instead it is followed by
                </p>
                <p className={styles.block_557}>
                  a comma. The only end punctuation is at the
                </p>
                <p className={styles.block_558}>end of the whole sentence.</p>
                <p className={styles.block_559}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence. Note that we here
                  don't follow the same conventions as for quotations.
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_4}>
                    Correct: Översätt till franska: Hur mår du?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The quote follows the command,
                  </span>
                </p>
                <p className={styles.block_258}>so use a colon.</p>
                <p className={styles.block_561}>
                  <span className={styles.text_4}>
                    Correct: Översätt "Vad heter du?" till franska.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The quote is in the middle of a
                  </span>
                </p>
                <p className={styles.block_562}>
                  sentence, so use quotation marks.
                </p>
                <p className={styles.block_563}>
                  Correct: Hur säger man "Jag älskar dig." på
                </p>
                <p className={styles.block_225}>franska?</p>
                <p className={styles.block_564}>
                  Correct: Till kompis@gmail.com: Hej, hur är
                </p>
                <p className={styles.block_565}>läget?</p>
                <p className={styles.block_379}>
                  Correct: Skicka mejl till kompis@gmail.com
                </p>
                <p className={styles.block_566}>
                  med följande: Hej, hur är läget?
                </p>
                <p className={styles.block_567}>
                  Leave text after colons lowercase unless capitalization is
                  required (can stand alone as complete sentence).
                </p>
                <p className={styles.block_568}>
                  Correct: Boka tid för imorgon klockan 15.30:
                </p>
                <p className={styles.block_438}>läkarbesök.</p>
                <p className={styles.block_569}>
                  Correct: Sms:a Kim: Takläggarna kommer inte
                </p>
                <p className={styles.block_570}>hit förrän på onsdag.</p>
                <p className={styles.block_571}>
                  Correct: Sms:a Johanna att jag kommer om
                </p>
                <p className={styles.block_572}>fem minuter.</p>
                <p className={styles.block_573}>
                  Explanation: The sms content is part of a sub
                </p>
                <p className={styles.block_574}>
                  clause (without a colon), thus no capitalization.
                </p>
                <p className={styles.block_575}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <p className={styles.block_576}>
                  Correct: Översätt "hej" till franska.
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_4}>Correct: Hej. </span>
                  <span className={styles.text_5}>
                    Explanation: Not a translation command, thus
                  </span>
                </p>
                <p className={styles.block_578}>capitalized.</p>
                <p className={styles.block_579}>
                  Correct: Översätt till spanska: gå.
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_4}>Correct: Gå. </span>
                  <span className={styles.text_5}>
                    Explanation: Not a translation command, thus
                  </span>
                </p>
                <p className={styles.block_578}>capitalized.</p>
                <p className={styles.block_580}>
                  Use quotation marks around metalinguistic uses of words or
                  phrases. This includes defining a word, talking about the
                  spelling of a word, or any other type of reference to the word
                  itself as a thing. A good rule of thumb is to ask yourself if
                  the sentence would keep the same meaning if you added the
                  phrase "the word" right before the quoted item.
                </p>
                <p className={styles.block_581}>
                  Correct: Förklara "anorexia".
                </p>
                <p className={styles.block_330}>
                  Incorrect: Förklara anorexia.
                </p>
                <p className={styles.block_379}>
                  Correct: Det är svårt att stava till "anorexia".
                </p>
                <p className={styles.block_223}>
                  Incorrect: Det är svårt att stava till anorexia.
                </p>
                <p className={styles.block_582}>Correct: Vad är anorexia?</p>
                <p className={styles.block_583}>
                  Incorrect: Vad är "anorexia"?
                </p>
                <p className={styles.block_584}>
                  Correct: Anorexia är en sjukdom som innefattar
                </p>
                <p className={styles.block_585}>ätstörningar.</p>
                <p className={styles.block_276}>
                  Incorrect: "Anorexia" är en sjukdom som
                </p>
                <p className={styles.block_586}>innefattar ätstörningar.</p>
                <p className={styles.block_587}>
                  Colon is used together with certain suffixes to transcribe
                  plural, definiteness and genitive for words that are single
                  letters, digits and/or acronyms. Colon + certain suffixes can
                  also be attached to acronyms/numbers to derive new words or
                  parts of speech.
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_4}>Correct: flera BH:ar </span>
                  <span className={styles.text_5}>
                    Explanation: acronym in plural{' '}
                  </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_4}>
                    Correct: Det är ABB:s huvudkontor.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: acronym in genitive{' '}
                  </span>
                </p>
                <p className={styles.block_481}>
                  Correct: Varför är dina i:ns prickar formade
                </p>
                <p className={styles.block_590}>som hjärtan?</p>
                <p className={styles.block_591}>
                  Explanation: letter in plural and genitive
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_4}>Correct: AIK:are </span>
                  <span className={styles.text_5}>
                    Explanation: a new noun denoting a person who
                  </span>
                </p>
                <p className={styles.block_593}>
                  roots for the team AIK is derived
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_4}>
                    Correct: Jag SMS:ar dig senare.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: the acronym is turned into a verb
                  </span>
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_4}>Correct: f:et </span>
                  <span className={styles.text_5}>
                    Explanation: letter with definite suffix{' '}
                  </span>
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_4}>
                    Correct: Han är 90:a och vi är 89:or.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: digits with derivational affixes, the
                  </span>
                </p>
                <p className={styles.block_597}>numbers become nouns</p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from standard letters, you should not use any other
                  symbol than: 0-9 éàüÜÀÉ0-923,?!'"_°:;.()&lt;&gt;{}
                  \[]√/\@#$€£+=%*&amp;-;
                </p>
                <p className={styles.block_174}>
                  Use hyphen instead of dash. Put a space before and after the
                  hyphen if it is opposing two words, but not if it is opposing
                  sets of numbers. Always use a hyphen in between the names of
                  two opposing sport teams and sport results, even though it
                  isn't spoken. Don't use hyphen if words are spoken to
                  symbolize the opossition instead.
                </p>
                <p className={styles.block_600}>
                  Correct: I kväll spelar Djurgården - AIK.
                </p>
                <p className={styles.block_601}>
                  Incorrect: I kväll spelar Djurgården-AIK.
                </p>
                <p className={styles.block_386}>
                  Incorrect: I kväll spelar Djurgården AIK.
                </p>
                <p className={styles.block_602}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    i kväll spelar djurgården a i k{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_603}>
                  Correct: I kväll spelar Djurgården mot AIK.
                </p>
                <p className={styles.block_604}>
                  Incorrect: I kväll spelar Djurgården - AIK.
                </p>
                <p className={styles.block_601}>
                  Incorrect: I kväll spelar Djurgården-AIK.
                </p>
                <p className={styles.block_605}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    i kväll spelar djurgården mot a{' '}
                  </span>
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_1}>i k </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_607}>Correct: De vann med 3-2.</p>
                <p className={styles.block_608}>
                  Incorrect: De vann med 3 - 2.
                </p>
                <p className={styles.block_609}>Incorrect: De vann med 3 2.</p>
                <p className={styles.block_610}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>de vann med tre två </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_611}>
                  Use hyphens in compound words where one part consists of an
                  acronym, pronoun, multiword proper name, digit(s) or an entire
                  phrase. For compounds with entire phrases in them, use a
                  hyphen between every word. Also use hyphen in double names
                  like "Åsa-Nisse" and "Lill-Babs". Do not use hyphen in a
                  compound word consisting of two ordinary, single words, even
                  if it is an unusual compound or contains a proper name.
                </p>
                <p className={styles.block_612}>
                  <span className={styles.text_4}>Correct: CD-hylla </span>
                  <span className={styles.text_5}>
                    Explanation: one part is an acronym{' '}
                  </span>
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_4}>Correct: vi-känsla </span>
                  <span className={styles.text_5}>
                    Explanation: one part is a pronoun{' '}
                  </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_4}>Correct: New York-bor </span>
                  <span className={styles.text_5}>
                    Explanation: one part is a multiword proper
                  </span>
                </p>
                <p className={styles.block_615}>name</p>
                <p className={styles.block_614}>
                  <span className={styles.text_4}>
                    Correct: Stjärnornas krig-filmerna{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: one part is a multiword proper
                  </span>
                </p>
                <p className={styles.block_615}>name</p>
                <p className={styles.block_614}>
                  <span className={styles.text_4}>
                    Correct: Cheap Monday-byxor{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: one part is a multiword proper
                  </span>
                </p>
                <p className={styles.block_615}>name</p>
                <p className={styles.block_616}>Correct: mun-mot-mun-metoden</p>
                <p className={styles.block_617}>
                  Incorrect: mun mot mun-metoden
                </p>
                <p className={styles.block_618}>
                  Explanation: one part is an entire phrase, use
                </p>
                <p className={styles.block_619}>hyphens between every word</p>
                <p className={styles.block_620}>Correct: tio-i-topp-lista</p>
                <p className={styles.block_621}>Incorrect: tio i topp-lista</p>
                <p className={styles.block_618}>
                  Explanation: one part is an entire phrase, use
                </p>
                <p className={styles.block_619}>hyphens between every word</p>
                <p className={styles.block_622}>
                  <span className={styles.text_4}>Correct: 1950-talet </span>
                  <span className={styles.text_5}>
                    Explanation: one part is only digits{' '}
                  </span>
                </p>
                <p className={styles.block_623}>
                  <span className={styles.text_4}>Correct: 32-åring </span>
                  <span className={styles.text_5}>
                    Explanation: one part is only digits{' '}
                  </span>
                </p>
                <p className={styles.block_624}>
                  <span className={styles.text_4}>
                    Correct: 16-gigabytesminne{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: one part is is only digits{' '}
                  </span>
                </p>
                <p className={styles.block_625}>Correct: Youtubeklipp</p>
                <p className={styles.block_626}>Incorrect: Youtube-klipp</p>
                <p className={styles.block_627}>
                  Explanation: two single words, so no hyphen
                </p>
                <p className={styles.block_628}>Correct: Bamsetidningar</p>
                <p className={styles.block_629}>Incorrect: Bamse-tidningar</p>
                <p className={styles.block_627}>
                  Explanation: two single words, so no hyphen
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
                <p className={styles.block_632}>
                  Correct: Hur mår du {`{frågetecken}`}
                </p>
                <p className={styles.block_152}>
                  Incorrect: Hur mår du frågetecken
                </p>
                <p className={styles.block_633}>Incorrect: Hur mår du?</p>
                <p className={styles.block_634}>
                  Correct: Marika är på konserten med Olle ikväll,
                </p>
                <p className={styles.block_635}>
                  och jag måste hämta barnen {`{punkt}`} Om jag blir
                </p>
                <p className={styles.block_636}>
                  sen, kan du ringa till dagis och förvarna
                </p>
                <p className={styles.block_637}>{`{frågetecken}`}</p>
                <p className={styles.block_638}>
                  Incorrect: Marika är på konserten med Olle
                </p>
                <p className={styles.block_639}>
                  ikväll, och jag måste hämta barnen punkt Om
                </p>
                <p className={styles.block_640}>
                  jag blir sen, kan du ringa till dagis och förvarna
                </p>
                <p className={styles.block_641}>frågetecken</p>
                <p className={styles.block_638}>
                  Incorrect: Marika är på konserten med Olle
                </p>
                <p className={styles.block_642}>
                  ikväll, och jag måste hämta barnen. Om jag blir
                </p>
                <p className={styles.block_643}>
                  sen, kan du ringa till dagis och förvarna?
                </p>
                <p className={styles.block_488}>
                  Correct: Okej {`{punkt} {punkt} {punkt}`}
                </p>
                <p className={styles.block_644}>Incorrect: Okej...</p>
                <p className={styles.block_645}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_646}>
                  Correct: Hon är skådespelarska/modell.
                </p>
                <p className={styles.block_647}>
                  Incorrect: Hon är skådespelarska slash modell.
                </p>
                <p className={styles.block_648}>
                  Incorrect: Hon är skådespelarska {`{slash}`}
                </p>
                <p className={styles.block_649}>modell.</p>
                <p className={styles.block_650}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    hon är skådespelarska slash{' '}
                  </span>
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_1}>modell </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_652}>
                  <span className={styles.text_4}>
                    Correct: Jag bor i rum 4-A.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    jag bor i lägenhet fyra streck a{' '}
                  </span>
                </p>
                <p className={styles.block_653}>"</p>
                <p className={styles.block_654}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_655}>Correct: {`{kolon}`}</p>
                <p className={styles.block_656}>Correct: {`{understreck}`}</p>
                <p className={styles.block_657}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_4}>
                    Correct: Jag åker nu {`{punkt}`} Hur lång är resan?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    jag åker nu punkt hur lång är{' '}
                  </span>
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_1}>resan </span>
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
