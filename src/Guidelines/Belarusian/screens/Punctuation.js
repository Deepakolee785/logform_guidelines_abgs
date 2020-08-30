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
            <PageContentHeader currentPage="longform Belarusian" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation </p>
              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.{' '}
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences </p>
                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.{' '}
                </p>
                <p className={styles.block_272}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.{' '}
                </p>
                <p className={styles.block_273}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.{' '}
                </p>
                <p className={styles.block_274}>
                  Correct: Аб кім ты гаворыш? Хлопцу па{' '}
                </p>
                <p className={styles.block_275}>суседству. </p>
                <p className={styles.block_276}>
                  Explanation: Two speakers. "Хлопцу па{' '}
                </p>
                <p className={styles.block_277}>
                  суседству." is an answer to a specific question.{' '}
                </p>
                <p className={styles.block_278}>
                  <span className={styles.text_4}>
                    Correct: хлопцу па суседству{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: No context to suggest this is a{' '}
                  </span>
                </p>
                <p className={styles.block_279}>
                  sentence; treat it as a fragment.{' '}
                </p>
                <p className={styles.block_280}>
                  <span className={styles.text_4}>
                    Correct: Прыйдзеш на вечарыну заўтра?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Dropping the subject and main{' '}
                  </span>
                </p>
                <p className={styles.block_281}>
                  verb here sounds natural as a complete{' '}
                </p>
                <p className={styles.block_282}>
                  sentence. Punctuate as sentence.{' '}
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_4}>
                    Correct: мыццё шчанюкоў ў ванне{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sounds like a web search as{' '}
                  </span>
                </p>
                <p className={styles.block_284}>
                  opposed to a dropped subject. Punctuate as{' '}
                </p>
                <p className={styles.block_285}>fragment. </p>
                <p className={styles.block_286}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.{' '}
                </p>
                <p className={styles.block_287}>
                  <span className={styles.text_4}>Correct: Ах. </span>
                  <span className={styles.text_5}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_288}>
                  <span className={styles.text_4}>Correct: Прывітанне. </span>
                  <span className={styles.text_5}>Explanation: greeting </span>
                </p>
                <p className={styles.block_289}>
                  <span className={styles.text_4}>Correct: Вітаю вас. </span>
                  <span className={styles.text_5}>
                    Explanation: Entire phrase is being used as an{' '}
                  </span>
                </p>
                <p className={styles.block_290}>interjection. </p>
                <p className={styles.block_291}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.{' '}
                </p>
                <p className={styles.block_292}>
                  <span className={styles.text_4}>
                    Correct: Што думаеш? Гэта не так, калі{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sentence-initial fragment ends{' '}
                  </span>
                </p>
                <p className={styles.block_293}>mid-stream. </p>
                <p className={styles.block_294}>
                  Correct: нашмат больш складана. Гэта не{' '}
                </p>
                <p className={styles.block_295}>мае ніякага сэнсу. </p>
                <p className={styles.block_296}>
                  Explanation: Audio was cut off at the beginning.{' '}
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_4}>
                    Correct: вельмі цяжка, але не хвалюйцеся.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Audio was cut off at the beginning.{' '}
                  </span>
                </p>
                <p className={styles.block_298}>
                  Correct: Я іду ў кафэ. Я закажу Колькі каштуе{' '}
                </p>
                <p className={styles.block_299}>кава з узбітымі сліўкамі? </p>
                <p className={styles.block_300}>
                  Explanation: Do not put a period, hyphen, or{' '}
                </p>
                <p className={styles.block_301}>
                  ellipsis after a fragment even if another{' '}
                </p>
                <p className={styles.block_302}>sentence follows. </p>
                <p className={styles.block_303}>
                  <span className={styles.text_4}>
                    Correct: Колькі каштуе Дзе знаходзіцца{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Both sound like beginnings of{' '}
                  </span>
                </p>
                <p className={styles.block_304}>sentences. </p>
                <p className={styles.block_305}>
                  Correct: Дзе знаходзіцца дзе знаходзіцца{' '}
                </p>
                <p className={styles.block_306}>пляж? </p>
                <p className={styles.block_307}>
                  Explanation: Repeated beginning of the{' '}
                </p>
                <p className={styles.block_308}>sentence. </p>
                <p className={styles.block_309}>
                  <span className={styles.text_4}>
                    Correct: з'язджалі, але потым вырашылі{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sounds like the middle of a{' '}
                  </span>
                </p>
                <p className={styles.block_310}>
                  sentence; beginning and end were cut off.{' '}
                </p>
                <p className={styles.block_311}>
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
                  fragments.{' '}
                </p>
                <p className={styles.block_312}>
                  <span className={styles.text_4}>
                    Correct: Актываваць рэжым палёта.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The voice action is a complete{' '}
                  </span>
                </p>
                <p className={styles.block_313}>
                  sentence. It should thus be capitalized and{' '}
                </p>
                <p className={styles.block_314}>punctuated as such. </p>
                <p className={styles.block_315}>
                  Correct: Паказаць карту Сан-Францыска.{' '}
                </p>
                <p className={styles.block_316}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.{' '}
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas </p>
                <p className={'styles'}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.{' '}
                </p>
                <p className={styles.block_319}>
                  Correct: Дзе знаходзіцца бліжэйшая{' '}
                </p>
                <p className={styles.block_320}>запраўка? </p>
                <p className={styles.block_321}>
                  Incorrect: Дзе знаходзіцца, бліжэйшая,{' '}
                </p>
                <p className={styles.block_322}>запраўка? </p>
                <p className={styles.block_323}>
                  Explanation: Even if the speaker uses long{' '}
                </p>
                <p className={styles.block_324}>
                  pauses in these places, do not use a comma.{' '}
                </p>
                <p className={styles.block_325}>
                  There are places where commas are allowed or{' '}
                </p>
                <p className={styles.block_326}>
                  required, but this example contains neither.{' '}
                </p>
                <p className={styles.block_327}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.{' '}
                </p>
                <p className={styles.block_328}>
                  Correct: Ну, я думаў, што ў цябе была{' '}
                </p>
                <p className={styles.block_329}>кампанія. </p>
                <p className={styles.block_330}>
                  Explanation: Discourse word. Other examples of{' '}
                </p>
                <p className={styles.block_331}>
                  discourse words in English include "але", "так",{' '}
                </p>
                <p className={styles.block_332}>
                  "на самай справе", "таксама".{' '}
                </p>
                <p className={styles.block_333}>
                  <span className={styles.text_4}>
                    Correct: На жаль, дзетка.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Interjection. Other examples of{' '}
                  </span>
                </p>
                <p className={styles.block_334}>
                  interjections include "вау", "эй", "ха-ха", and{' '}
                </p>
                <p className={styles.block_335}>others. </p>
                <p className={styles.block_336}>
                  <span className={styles.text_4}>
                    Correct: Так, я гэта раблю.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: yes/no word{' '}
                  </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_4}>
                    Correct: Вядома, я магу зрабіць гэта.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Use a comma when there is no{' '}
                  </span>
                </p>
                <p className={styles.block_338}>
                  pause, or when there is a pause that isn't long.{' '}
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_4}>
                    Correct: Добра. Гэта вельмі прыемна.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: substantial pause after "добра"{' '}
                  </span>
                </p>
                <p className={styles.block_340}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".{' '}
                </p>
                <p className={styles.block_341}>Correct: Ok Google </p>
                <p className={styles.block_342}>
                  Correct: Ok Google, малюнкі аліўкавых дрэў{' '}
                </p>
                <p className={styles.block_343}>
                  Correct: Ok Google, пакажыце мне{' '}
                </p>
                <p className={styles.block_344}>кантактныя дадзеныя Дэна. </p>
                <p className={styles.block_345}>
                  Correct: Ok Google, калі Дзень Незалежнасці{' '}
                </p>
                <p className={styles.block_346}>ў гэтым годзе? </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks </p>
                <p className={'text'}>
                  Capitalize and punctuate the following as questions: 1) All
                  queries syntactically built as questions, regardless of
                  intonation. 2) All queries which sound like they are being
                  used as questions, regardless of sentence structure.{' '}
                </p>
                <p className={styles.block_349}>
                  <span className={styles.text_4}>Correct: Ты сур'ёзна? </span>
                  <span className={styles.text_5}>
                    Explanation: Syntactically built as a question, so{' '}
                  </span>
                </p>
                <p className={styles.block_350}>
                  punctuate as a question regardless of{' '}
                </p>
                <p className={styles.block_351}>intonation. </p>
                <p className={styles.block_352}>
                  <span className={styles.text_4}>
                    Correct: У 3:00 раніцы?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Rising intonation suggests it is a{' '}
                  </span>
                </p>
                <p className={styles.block_353}>
                  question, so punctuate as a question regardless{' '}
                </p>
                <p className={styles.block_293}>of structure. </p>
                <p className={styles.block_354}>
                  <span className={styles.text_4}>
                    Correct: прагноз надвор'я ў Мінску{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Query has rising intonation, but is{' '}
                  </span>
                </p>
                <p className={styles.block_355}>
                  most likely a web search rather than a true{' '}
                </p>
                <p className={styles.block_356}>question. </p>
                <p className={styles.block_357}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.{' '}
                </p>
                <p className={styles.block_358}>
                  <span className={styles.text_4}>Correct: Ура! </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_4}>Correct: Ура. </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation </p>
                <p className={'text'}>
                  Use a colon between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.{' '}
                </p>
                <p className={styles.block_362}>
                  Correct: Мой сябар сказаў: "алігатар{' '}
                </p>
                <p className={styles.block_363}>кракадзіл". </p>
                <p className={styles.block_364}>
                  Explanation: The word "сказаць" is the most{' '}
                </p>
                <p className={styles.block_365}>
                  common reported speech verb in English, but{' '}
                </p>
                <p className={styles.block_366}>
                  Incorrect: Мой сябар сказаў, "алігатар{' '}
                </p>
                <p className={styles.block_367}>кракадзіл". </p>
                <p className={styles.block_368}>
                  Incorrect: Мой сябар сказаў "алігатар{' '}
                </p>
                <p className={styles.block_367}>кракадзіл". </p>
                <p className={styles.block_368}>
                  Incorrect: Мой сябар сказаў "алігатар{' '}
                </p>
                <p className={styles.block_369}>кракадзіл" </p>
                <p className={styles.block_370}>
                  other words ("запытацца", "адказаць") can be{' '}
                </p>
                <p className={styles.block_371}>used for reported speech. </p>
                <p className={styles.block_372}>
                  Correct: Скажыце "гукаперайманне".{' '}
                </p>
                <p className={styles.block_373}>
                  Incorrect: Скажыце: "гукаперайманне".{' '}
                </p>
                <p className={styles.block_374}>
                  Explanation: Omit the colon if the verb is in the{' '}
                </p>
                <p className={styles.block_375}>imperative. </p>
                <p className={styles.block_376}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.{' '}
                </p>
                <p className={styles.block_377}>
                  Correct: Ганна сказала: "Давайце{' '}
                </p>
                <p className={styles.block_378}>сустрэнемся ў 03:00." </p>
                <p className={styles.block_379}>
                  Incorrect: Ганна сказала: "Давайце{' '}
                </p>
                <p className={styles.block_380}>сустрэнемся ў 03:00.". </p>
                <p className={styles.block_381}>
                  Explanation: Text in quotation marks qualifies{' '}
                </p>
                <p className={styles.block_382}>
                  as a sentence. Do not add excess punctuation.{' '}
                </p>
                <p className={styles.block_383}>
                  Correct: Джэйн спытала: "Мы сустракаемся{' '}
                </p>
                <p className={styles.block_384}>ў 03:00?" </p>
                <p className={styles.block_385}>
                  Incorrect: Джэйн спытала: "Мы{' '}
                </p>
                <p className={styles.block_386}>сустракаемся ў 03:00?". </p>
                <p className={styles.block_381}>
                  Explanation: Text in quotation marks qualifies{' '}
                </p>
                <p className={styles.block_382}>
                  as a sentence. Do not add excess punctuation.{' '}
                </p>
                <p className={styles.block_387}>
                  Correct: Ці яна сказала: "Сустрэнемся там."{' '}
                </p>
                <p className={styles.block_388}>
                  Incorrect: Ці яна сказала: "Сустрэнемся{' '}
                </p>
                <p className={styles.block_389}>там."? </p>
                <p className={styles.block_381}>
                  Explanation: Text in quotation marks qualifies{' '}
                </p>
                <p className={styles.block_390}>
                  as a sentence. Do not add excess punctuation.{' '}
                </p>
                <p className={styles.block_391}>
                  Correct: Джош як быццам сказаў: "Я буду{' '}
                </p>
                <p className={styles.block_392}>
                  там. Я абяцаю." нават не правяраючы свой{' '}
                </p>
                <p className={styles.block_320}>каляндар. </p>
                <p className={styles.block_381}>
                  Explanation: Text in quotation marks qualifies{' '}
                </p>
                <p className={styles.block_393}>
                  as sentences. Do not alter its end punctuation{' '}
                </p>
                <p className={styles.block_394}>
                  even though the quote is within a sentence.{' '}
                </p>
                <p className={styles.block_395}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.{' '}
                </p>
                <p className={styles.block_396}>
                  Correct: Перавядзіце на французскую мову:{' '}
                </p>
                <p className={styles.block_397}>Як ты? </p>
                <p className={styles.block_381}>
                  Explanation: The quote follows the command,{' '}
                </p>
                <p className={styles.block_398}>
                  so use a colon and omit quotation marks.{' '}
                </p>
                <p className={styles.block_399}>
                  Correct: Перавядзіце "Як цябе клічуць?" на{' '}
                </p>
                <p className={styles.block_400}>французскую мову. </p>
                <p className={styles.block_401}>
                  Explanation: The quote is in the middle of a{' '}
                </p>
                <p className={styles.block_402}>
                  sentence, so use quotation marks and omit{' '}
                </p>
                <p className={styles.block_403}>colon. </p>
                <p className={styles.block_404}>
                  Correct: Як сказаць "Я люблю цябе."{' '}
                </p>
                <p className={styles.block_405}>па-французску? </p>
                <p className={styles.block_406}>
                  Incorrect: Як сказаць: "Я люблю цябе."{' '}
                </p>
                <p className={styles.block_407}>па-французску? </p>
                <p className={styles.block_408}>
                  Correct: Для example@gmail.com: Гэй, як{' '}
                </p>
                <p className={styles.block_378}>прайшоў твой дзень? </p>
                <p className={styles.block_409}>Correct: Адправіць імэйл на </p>
                <p className={styles.block_410}>
                  example@gmail.com кажучы: Гэй, як{' '}
                </p>
                <p className={styles.block_378}>прайшоў твой дзень? </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols </p>
                <p className={'text'}>
                  Apart from Cyrillic and Latin letters, you should not use any
                  other symbol than: 0-9
                  äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?
                  !~^\'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;{' '}
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation </p>
                <p className={'text'}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.){' '}
                </p>
                <p className={styles.block_414}>
                  Correct: Ён сказаў мне: {`{цытата}`} Ня{' '}
                </p>
                <p className={styles.block_415}>
                  прыносьце котку. {`{канец цытаты}`}{' '}
                </p>
                <p className={styles.block_416}>
                  Incorrect: Ён сказаў мне: "Ня прыносьце{' '}
                </p>
                <p className={styles.block_417}>котку." </p>
                <p className={styles.block_418}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    ён сказаў мне цытата ня{' '}
                  </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_1}>
                    прыносьце котку канец цытаты{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_420}>
                  Correct: Добра{` {кропка} {кропка} {кропка}`}{' '}
                </p>
                <p className={styles.block_421}>Incorrect: Добра... </p>
                <p className={styles.block_422}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    добра кропка кропка кропка{' '}
                  </span>
                </p>
                <p className={styles.block_423}>" </p>
                <p className={styles.block_424}>
                  Correct: Прывітанне {`{коска}`} як вы {`{знак`}{' '}
                </p>
                <p className={styles.block_425}>
                  пытання {`}`} я ў парадку {`{кропка}`}{' '}
                </p>
                <p className={styles.block_426}>
                  Incorrect: Прывітанне! Як справы? Я ў{' '}
                </p>
                <p className={styles.block_427}>парадку. </p>
                <p className={styles.block_428}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    прывітанне клічнік як вы{' '}
                  </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_1}>
                    знак пытання я ў парадку кропка{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_430}>Correct: {`{смайлік}`} </p>
                <p className={styles.block_431}>Incorrect: :-) </p>
                <p className={styles.block_432}>Incorrect: смайлік </p>
                <p className={styles.block_433}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>смайлік </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_434}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.{' '}
                </p>
                <p className={styles.block_435}>Correct: Я жыву ў доме 4A. </p>
                <p className={styles.block_436}>
                  Incorrect: Я жыву доме 4 {`{працяжнік}`} А.{' '}
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>я жыву ў доме чатыры a </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_438}>
                  Correct: www.fake-domain.com{' '}
                </p>
                <p className={styles.block_439}>
                  Incorrect: www {`{кропка}`} fake {`{злучок}`} domain{' '}
                </p>
                <p className={styles.block_440}>{`{кропка}`} cом </p>
                <p className={styles.block_441}>
                  Correct: Яна акторка/мадэль.{' '}
                </p>
                <p className={styles.block_442}>
                  Incorrect: Яна акторка {`{слэш}`} мадэль.{' '}
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    яна акторка слэш мадэль{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_444}>
                  Explanation: We consider slash to be word-level{' '}
                </p>
                <p className={styles.block_445}>punctuation. </p>
                <p className={styles.block_446}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.{' '}
                </p>
                <p className={styles.block_447}>Correct: {`{двукроп'е}`} </p>
                <p className={styles.block_448}>
                  Correct: {`{падкрэсліванне}`}{' '}
                </p>
                <p className={styles.block_449}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.{' '}
                </p>
                <p className={styles.block_450}>
                  Correct: Я ад'яжджаю {`{кропка} `}Як доўга
                </p>
                <p className={styles.block_397}>ехаць? </p>
                <p className={styles.block_451}>
                  Incorrect: Я ад'яжджаю {`{кропка}`} як доўга
                </p>
                <p className={styles.block_417}>ехаць? </p>
                <p className={styles.block_452}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>я ад'яжджаю кропка як </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_1}>доўга ехаць </span>
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
