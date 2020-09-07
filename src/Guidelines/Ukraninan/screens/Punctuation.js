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
            <PageContentHeader currentPage="longform Ukraninan" />
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
                <p className={styles.block_289}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_290}>
                  In general, a complete sentence contains a subject and a verb,
                  and should be punctuated accordingly. However, sentences
                  without a subject or verb could also be legal in some cases,
                  and are especially common in informal speech.
                </p>
                <p className={styles.block_291}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Сьогодні він працює вдома.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Includes subject (він) and verb{' '}
                  </span>
                </p>
                <p className={styles.block_292}>(працює).</p>
                <p className={styles.block_293}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Сьогодні він вдома. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>сьогодні він вдома </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Permitted sentence, includes subject (він) and no verb.
                  </span>
                </p>
                <p className={styles.block_295}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Можеш прийти завтра. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>можеш прийти завтра </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Sounds like a whole utterance, possibly an answer to a
                    specific question. The subject pronoun was left out by the
                    speaker.
                  </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Включи ліхтарик. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>включи ліхтарик </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Imperative sentences that serve as commands should be
                    formatted as complete sentences.
                  </span>
                </p>
                <p className={styles.block_299}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_300}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : З ким ти розмовляєш? З нашими сусідами.{' '}
                  </span>
                </p>
                <p className={styles.block_301}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Two speakers. "With our neighbors." is an answer to a
                    specific question.
                  </span>
                </p>
                <p className={styles.block_302}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: з нашими сусідами </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : No context to suggest this is a{' '}
                  </span>
                </p>
                <p className={styles.block_303}>
                  sentence; treat it as a fragment.
                </p>
                <p className={styles.block_304}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Йдеш на вечірку завтра?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Dropping the subject is permitted.{' '}
                  </span>
                </p>
                <p className={styles.block_305}>Punctuate as a sentence.</p>
                <p className={styles.block_306}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : купати кошенят в домашніх умовах{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Sounds like a web search as opposed{' '}
                  </span>
                </p>
                <p className={styles.block_307}>
                  to a dropped subject. Punctuate as fragment.
                </p>
                <p className={styles.block_308}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Отакої. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: interjection </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Привіт. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: greeting </span>
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Добре. Хай щастить. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Entire phrase is being used as an{' '}
                  </span>
                </p>
                <p className={styles.block_312}>interjection.</p>
                <p className={styles.block_313}>
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search, not as full sentences.
                </p>
                <p className={styles.block_314}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: як варити картоплю </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Як варити картоплю. </span>
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Океан Ельзи пісні </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Океан Ельзи. Пісні. </span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: слухати музику </span>
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Слухати музику. </span>
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Іnfinitive phrases should be non- capitalized and
                    non-punctuated.
                  </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : включити телефон включити телефон включити телефон
                  </span>
                </p>
                <p className={styles.block_322}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Repeated infinitive phrases should be separated by spaces
                    only.
                  </span>
                </p>
                <p className={styles.block_323}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_324}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Що ти думаєш? Це не так, ніби{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Sentence-initial fragment ends mid-{' '}
                  </span>
                </p>
                <p className={styles.block_325}>stream.</p>
                <p className={styles.block_326}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : набагато важче. Це безглуздо.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Sentence-final fragment begins mid-{' '}
                  </span>
                </p>
                <p className={styles.block_325}>stream.</p>
                <p className={styles.block_327}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : дуже важко, але не треба засмучуватися.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Audio was cut off at the beginning.{' '}
                  </span>
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Я зараз йду до кав'ярні. Я замовлю одне Скільки коштує
                    капучино?
                  </span>
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Do not put a period, hyphen, or ellipsis after a fragment
                    even if another sentence follows.
                  </span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Скільки коштує в А де знаходиться{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Both sound like beginnings of sentences.{' '}
                  </span>
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Де знаходиться Де знаходиться пляж?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Repeated beginning of the sentence.{' '}
                  </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : їхали додому та після{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Sounds like the middle of a sentence;{' '}
                  </span>
                </p>
                <p className={styles.block_333}>
                  beginning and end were cut off.
                </p>
                <p className={styles.block_334}>
                  The words "так", "ні", "ото ж", and similar items expressing
                  an affirmative or negative answer, should generally be
                  considered as complete sentences when on their own.
                </p>
                <p className={styles.block_335}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Так. </span>
                </p>
                <p className={styles.block_336}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: так. </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Йдеш до неї на весілля? Авжеж.{' '}
                  </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Йдеш до неї на весілля? авжеж{' '}
                  </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Two speakers. "Авжеж" is an answer to a specific question.
                  </span>
                </p>
                <p className={styles.block_340}>
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
                <p className={styles.block_341}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Рома Сандрека Набрати.{' '}
                  </span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Відкрий програму Clash of Clans.{' '}
                  </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Додати нагадування: робота.{' '}
                  </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Встановити будильник на 9:05.{' '}
                  </span>
                </p>
                <p className={styles.block_345}>
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
                <p className={styles.block_348}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Де найближча заправка?{' '}
                  </span>
                </p>
                <p className={styles.block_349}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Де, найближча, заправка?{' '}
                  </span>
                </p>
                <p className={styles.block_350}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Even if the speaker uses long pauses in these places, do
                    not use a comma. There are places where commas are allowed
                    or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_351}>
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a comma after the
                  single word or phrase.
                </p>
                <p className={styles.block_352}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Буенос Айрес, це де? </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: topic-comment </span>
                </p>
                <p className={styles.block_353}>
                  Put a comma after common sentence openers such as
                  prepositional phrases, adverbials, and introductory clauses.
                </p>
                <p className={styles.block_354}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Безперечно, він дуже талановитий.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: adverbial </span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Перебування в Києві, уяви собі, багато дало мені для
                    п'єси.
                  </span>
                </p>
                <p className={styles.block_356}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: introductory clause </span>
                </p>
                <p className={styles.block_357}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : По-перше, я не чула про цю угоду.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: introductory clause </span>
                </p>
                <p className={styles.block_358}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Він, до речі, не дуже зацікавлений.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: introductory clause </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : То, певна річ, була помилка.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: introductory clause </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Переглядаючи фотокартки, Олена посміхалася.
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : introductory participial phrase "переглядаючи фотокартки"
                  </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Повечерявши, усі полягали спати.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : introductory verb participle phrase{' '}
                  </span>
                </p>
                <p className={styles.block_363}>"повечерявши"</p>
                <p className={styles.block_364}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Прощаючись, Микола пообіцяв собі повернутися.
                  </span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : introductory verb participle phrase "прощаючись"
                  </span>
                </p>
                <p className={styles.block_366}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_367}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Дійсно, з батареї відкривався вид майже всього
                    розташування російських військ.
                  </span>
                </p>
                <p className={styles.block_368}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Дійсно з батареї відкривався вид майже всього розташування
                    російських військ.
                  </span>
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: Discourse word. </span>
                </p>
                <p className={styles.block_370}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Так, я згодна. </span>
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Так я згодна. </span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: Yes/no word. </span>
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Вибач, я був неправий.{' '}
                  </span>
                </p>
                <p className={styles.block_374}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Вибач я був неправий </span>
                </p>
                <p className={styles.block_375}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Interjection. Other examples are "вау", "гей", etc.
                  </span>
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Добре, я спробую. </span>
                </p>
                <p className={styles.block_377}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Добре я спробую. </span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: Yes/no word. </span>
                </p>
                <p className={styles.block_378}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Добре. Я спробую. </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Добре я спробую. </span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Yes/no word. Substantial pause after "Добре".
                  </span>
                </p>
                <p className={styles.block_381}>
                  List of interjections and discourse words that are separated
                  by comma.
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>бач </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>бачиш </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>бачте </span>
                </p>
                <p className={styles.block_166}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>безперечно </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>безсумнівно </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>безумовно </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>бувало </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>видимо </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>видно </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>відома річ </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>власне </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>головне </span>
                </p>
                <p className={styles.block_393}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>головним чином </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>далебі </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>до речі </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>звичайно </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>звісно </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>здавалось </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>здається </span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>значить </span>
                </p>
                <p className={styles.block_399}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>зрозуміло </span>
                </p>
                <p className={styles.block_400}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кажуть </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>коротко кажучи </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>либонь </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>мабуть </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>між іншим </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>мовляв </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>може </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>можливо </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>навпаки </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>на жаль </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>на мій погляд </span>
                </p>
                <p className={styles.block_408}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>на нашу думку </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>наприклад </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>нарешті </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>на щастя </span>
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>немає сумніву </span>
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>отже </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>очевидно </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>певна річ </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>певно </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>по-перше </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>по-друге </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>правда </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>проте </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>однак </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>сказати б </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>справді </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>щоправда </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>як видимо </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ясна річ </span>
                </p>
                <p className={styles.block_417}>
                  List of interjections and discourse words that are not
                  separated by comma.
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>адже </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>все-таки </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>все ж таки </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>наче </span>
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>начебто </span>
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>немов </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>немовби </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ніби </span>
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>нібито </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>от </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>принаймні </span>
                </p>
                <p className={styles.block_426}>
                  Use commas before tag questions and sentence-final "будь
                  ласка", "вибач", "правда", etc.
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Цікава була лекція, чи не так?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: Tag question. </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Тут гарно, правда? </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Sentence-final "правда".{' '}
                  </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Допоможіть, будь ласка.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Sentence-final "будь ласка".{' '}
                  </span>
                </p>
                <p className={styles.block_430}>
                  Use commas to set apart independent clauses.
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Якщо Оля не піде, то я теж не піду.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : conditional clause "якщо"{' '}
                  </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Коли немає натхнення, то немає і праці.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : conditional clause "коли"{' '}
                  </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ми мусимо більше працювати, оскільки наша команда
                    невелика.
                  </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : conditional clause "оскільки"{' '}
                  </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Щоб виконати цю вправу, потрібен конспект.
                  </span>
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : conditional clause "щоб"{' '}
                  </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Потрібен конспект, щоб виконати цю вправу.
                  </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : День закінчився, і ми вирішили їхати додому.
                  </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Independent clause that starts with "і".{' '}
                  </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Я вважаю, що вам не зашкодить познайомитися.
                  </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Subordinate clause that begins with "що".
                  </span>
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Я бачу, як багато ти працюєш.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Subordinate clause that begins with{' '}
                  </span>
                </p>
                <p className={styles.block_443}>"як".</p>
                <p className={styles.block_444}>
                  Use a comma in comparisons that use words like "як", "немов",
                  "наче", "мов", "ніби", etc.
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : сяють, як зорі у небі{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Comparison that starts with "як".{' '}
                  </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: легке, немов пір'я </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Comparison that starts with "немов".{' '}
                  </span>
                </p>
                <p className={styles.block_447}>
                  Use commas in lists where members are coordinated, belong to
                  the same grammatical category and define the same part of the
                  sentence.
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Там стояли червоні, сині, зелені столи.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: list of adjectives </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Нам потрібні помідори, картопля, м'ясо і олія.
                  </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Нам потрібні помідори, картопля, м'ясо, і олія.
                  </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : List of nouns, do not use a comma before "і".
                  </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Йшов довгий товарний потяг.{' '}
                  </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Йшов довгий, товарний потяг.{' '}
                  </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : List of adjectives defining different qualities, do not
                    use commas in between.
                  </span>
                </p>
                <p className={styles.block_455}>
                  Use commas for non-restrictive modifiers, but do not use
                  commas for restrictive modifiers. The basic test for this is
                  whether the modifier can be dropped from the sentence and
                  still keep basically the same meaning.
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Мені подобається місто Київ.{' '}
                  </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Мені подобається місто, Київ.{' '}
                  </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Restrictive modifier. The appositive "Київ" restricts
                    which city the speaker is referring to.
                  </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Столиця України, Київ, мені дуже подобається.
                  </span>
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Столиця України Київ мені дуже подобається.
                  </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Non-restrictive modifier. The appositive "Київ" merely
                    adds information about the city. If the appositive was
                    removed, the meaning of the sentence would remain the same.
                  </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Доброго дня. Ось мій друг Олег Боднаренко.
                  </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Доброго дня. Ось мій друг, Олег Боднаренко.
                  </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Restrictive modifier.{' '}
                  </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Мій найкращий друг, Іван Потопальський, сьогодні завітав
                    до мене.
                  </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Мій найкращий друг Іван Потопальський сьогодні завітав до
                    мене.
                  </span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The appositive "Іван Потопальський" is non-restrictive and
                    merely adds more information. If it was removed, the
                    sentence would have slightly less information, but would
                    retain the core of its meaning.
                  </span>
                </p>
                <p className={styles.block_468}>
                  When two or more words or phrases of the same grammatical
                  category (e.g. two noun phrases or two verbs) are joined by a
                  conjunction "а", "але", "та", "однак", "проте", "а проте",
                  "зате", "так", "зате" or multiple conjunctions "і...і"
                  ("й...й"), "ні...ні" (vані...ані"), "то...то" ("не то...не
                  то"), "чи...чи" ("чи то...чи то"), "або...або", separate them
                  with commas. Do not put a comma between words that belong to
                  fixed phrasal sets, among which are: "і так і сяк", "і туди і
                  сюди", "і вдень і вночі", "ні туди ні сюди", "ні сяк ні так",
                  "ні се ні те", "ні вдень ні вночі", "ні риба ні м'ясо".
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Тобі треба не фільм дивитися, а домашнє завдання робити.
                  </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Verb phrases joined by conjunction "а".{' '}
                  </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Він гарний хлопець, але дуже впертий.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Adjectival phrases joined by{' '}
                  </span>
                </p>
                <p className={styles.block_472}>conjunction "але".</p>
                <p className={styles.block_473}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Тече вода, та не витікає.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Adjectival phrases joined by{' '}
                  </span>
                </p>
                <p className={styles.block_474}>conjunction "та".</p>
                <p className={styles.block_475}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ми працювали і вдень і вночі.{' '}
                  </span>
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ми працювали і вдень, і вночі.{' '}
                  </span>
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Noun phrases joined by conjunctions "і...і". The words "і
                    вдень і вночі" belong to the fixed phrase, thus do not put a
                    comma.
                  </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Вона то просиналась, то знов засинала.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Verb phrases joined by conjunctions{' '}
                  </span>
                </p>
                <p className={styles.block_479}>"то...то".</p>
                <p className={styles.block_480}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Він не хотів ані одружуватись, ані працювати.
                  </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Verb phrases joined by conjunctions "ані...ані".
                  </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Важко сказати, чи то вечір, чи ніч на дворі.
                  </span>
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Noun phrases joined by conjunctions "чи...чи".
                  </span>
                </p>
                <p className={styles.block_484}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: З любов'ю, Тарас </span>
                </p>
                <p className={styles.block_486}>
                  Sentence-initial, mid sentence and sentence-final addressees
                  should always be separated from the rest of the sentence by
                  commas, even when sentence consists of only of a greeting and
                  addressee.
                </p>
                <p className={styles.block_293}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Привіт, Олено. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Addressee should always be{' '}
                  </span>
                </p>
                <p className={styles.block_487}>separated by commas.</p>
                <p className={styles.block_488}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Іване, принеси мені води.{' '}
                  </span>
                </p>
                <p className={styles.block_489}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Як тебе не вистачає, люба Україно!{' '}
                  </span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Здрастуй, моя Наталко, як довго ми не бачилися!
                  </span>
                </p>
                <p className={styles.block_491}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ok Google </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: зображення собак </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ok Google, увімкни GPS.{' '}
                  </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ok Google, зустрітися завтра з Іваном о другій годині.
                  </span>
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
                <p className={styles.block_291}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Як справи? </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Syntactically built as a question, so{' '}
                  </span>
                </p>
                <p className={styles.block_498}>
                  punctuate as a question regardless of intonation.
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: О третій ранку? </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Rising intonation suggests it is a{' '}
                  </span>
                </p>
                <p className={styles.block_500}>
                  question, so punctuate as a question regardless of structure.
                </p>
                <p className={styles.block_501}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : землетрус на Львівщині{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Query uses rising intonation, but is{' '}
                  </span>
                </p>
                <p className={styles.block_502}>
                  most likely a web search rather than a true question.
                </p>
                <p className={styles.block_503}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ура! </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ура. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker sounds unenthused.{' '}
                  </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Приємно познайомитись.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Spoken dispassionately.{' '}
                  </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Замовч! </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Spoken with enthusiasm.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a colon between reported speech verbs like "сказав" and
                  "відповів" and direct quotations.
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Він сказав: "Я дуже хочу пити".{' '}
                  </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Він сказав, "Я дуже хочу пити".{' '}
                  </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Use a colon before the beginning of reported speech.
                  </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Моя мама відповіла: "Ми поїдемо в Карпати завтра".
                  </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Моя мама відповіла, "Ми поїдемо в Карпати завтра".
                  </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Use a colon before the beginning of reported speech.
                  </span>
                </p>
                <p className={styles.block_515}>
                  If the text in quotation marks qualifies as an affirmative
                  sentence, capitalize but do not punctuate. If the quotation is
                  at the end of a sentence, put the appropriate sentence-final
                  punctuation after the closing quotation mark. If the quotation
                  is at the beginning or in the middle of a sentence, put a
                  comma and a dash after the closing quotation mark.
                </p>
                <p className={styles.block_516}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ганна сказала: "Давай зустрінемось о третій".
                  </span>
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ганна сказала: "Давай зустрінемось о третій."
                  </span>
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ганна сказала: "Давай зустрінемось о третій.".
                  </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : No period inside the quotation marks. Put a period after
                    the quotation.
                  </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Хіба Ганна не сказала: "Давай зустрінемось о третій"?
                  </span>
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ганна сказала: "Давай зустрінемось о третій?"
                  </span>
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ганна сказала: "Давай зустрінемось о третій."?
                  </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : No period inside the quotation marks. Put a question mark
                    after the quotation.
                  </span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : "Давай зустрінемось о третій", - сказала Ганна.
                  </span>
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : "Давай зустрінемось о третій", сказала Ганна.
                  </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : "Давай зустрінемось о третій." - сказала Ганна.
                  </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : No period inside the quotation marks. Put a comma and a
                    dash after the quotation.
                  </span>
                </p>
                <p className={styles.block_524}>
                  If the text inside the quotation marks is a question or
                  exclamation that would normally end with an intonation mark
                  (question mark or exclamation point), put that intonation mark
                  before the closing quotation mark unless a question mark
                  follows the quote. Do not add excess punctuation. If the quote
                  is in the middle of a sentence, put a dash after the closing
                  quotation mark.
                </p>
                <p className={styles.block_525}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ганна спитала: "Ми можемо зустрітися о третій?"
                  </span>
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ганна спитала: "Ми можемо зустрітися о третій"?
                  </span>
                </p>
                <p className={styles.block_527}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ганна спитала: "Давай зустрінемось о третій?".
                  </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The quote is a question, so put a question mark inside the
                    quotes. Do not put a period after the quote.
                  </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ганна вигукнула: "Нарешті!"{' '}
                  </span>
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ганна вигукнула: "Нарешті"!{' '}
                  </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ганна вигукнула: "Нарешті!".{' '}
                  </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The quote is an exclamation, so put an exclamation point
                    inside the quotes. Do not put a period after the quote.
                  </span>
                </p>
                <p className={styles.block_533}>
                  Do not use quotation marks for indirect quotes. Instead, use a
                  comma between the clauses. Use sentence structure and
                  intonation to determine whether a quote is direct or indirect.
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Діти сказали, що вони голодні.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Intonation implies indirect quote.{' '}
                  </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Батько спитав, чи хочу я поїхати з ним до Києва.
                  </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Intonation and sentence structure imply indirect quote.
                  </span>
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Батько спитав: "Хочеш поїхати зі мною до Києва?"
                  </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Intonation and sentence structure imply direct quote.
                  </span>
                </p>
                <p className={styles.block_538}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Відправити повідомлення Іванові: Я запізнюсь.
                  </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The quote follows the command, so use a colon and omit
                    quotation marks.
                  </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Оновити Google+: Я працюю вдома.{' '}
                  </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Надіслати повідомлення на 063 933 55 67: Привіт!
                  </span>
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    надіслати повідомлення на нуль шість три дев'ять три три
                    п'ять п'ять шість сім привіт{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Як сказати "Я тебе кохаю" французькою?{' '}
                  </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Як сказати: "я тебе кохаю" французькою?{' '}
                  </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Omit colon after verb "сказати" in translation requests.
                  </span>
                </p>
                <p className={styles.block_547}>
                  Leave text after colons lowercase unless capitalization is
                  required (can stand alone as complete sentence).
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Додай нагадування на завтра о 15:30: зустріч з Олесею.
                  </span>
                </p>
                <p className={styles.block_489}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Напиши смс татові: Буду о восьмій.{' '}
                  </span>
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Напиши смс татові, що буду вдома о восьмій.
                  </span>
                </p>
                <p className={styles.block_550}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Переклади "привіт" французькою.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Do not capitalize "привіт" even{' '}
                  </span>
                </p>
                <p className={styles.block_552}>
                  though it can stand alone as a sentence in other contexts.
                </p>
                <p className={styles.block_553}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Переклади німецькою: дякую.{' '}
                  </span>
                </p>
                <p className={styles.block_554}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : що таке білатеральність{' '}
                  </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : що таке "білатеральність"{' '}
                  </span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Він три рази повторив слово мама.{' '}
                  </span>
                </p>
                <p className={styles.block_558}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Він три рази повторив слово "мама".{' '}
                  </span>
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Білатеральність важко вимовити по буквах{' '}
                  </span>
                </p>
                <p className={styles.block_212}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : "Білатеральність" важко вимовити по буквах.
                  </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Казак читається однаково в обох напрямках.
                  </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : "Казак" читається однаково в обох напрямках.
                  </span>
                </p>
              </div>
              <div id="other-symbols">
                {' '}
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from the Ukrainian letters and the Latin letters a
                  through z, you should not use any other symbol than: 0-9
                  äàéèëñóöÄÀÁÉÈËÑÓÖ23,?!~^\'"_°:.()&lt;&gt;{}
                  []√/@#$€£+=%*&amp;-.;
                </p>
                <p className={styles.block_564}>
                  Transcribe apostrophes as they are normally used.
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Це будинок Мар'яни. </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : В'ячеслав живе із матір'ю.{' '}
                  </span>
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : На подвір'ї росте бур'ян.{' '}
                  </span>
                </p>
                <p className={styles.block_568}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_569}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ти йдеш на матч Динамо-Шахтар?{' '}
                  </span>
                </p>
                <p className={styles.block_570}>
                  Include a hyphen between locations in flight itineraries.
                </p>
                <p className={styles.block_571}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: рейс Київ-Харків </span>
                </p>
                <p className={styles.block_572}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: рейс Київ - Харків </span>
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: рейс Київ Харків </span>
                </p>
                <p className={styles.block_574}>
                  Use a hyphen in phrases and compounds typically written with a
                  hyphen. If in doubt, use a hyphen. Check your locale's
                  dictionary for hyphenation.
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Він живе бозна-де. </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Зустрінемось віч-на-віч.{' '}
                  </span>
                </p>
                <p className={styles.block_577}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Кам'янець-Подільський{' '}
                  </span>
                </p>
                <p className={styles.block_578}>
                  Use a hyphen with spaces around it between nouns that together
                  describe a concept or a relationship.
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : відносини професор - студент{' '}
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : проблема людина - суспільство - природа{' '}
                  </span>
                </p>
                <p className={styles.block_581}>
                  Use a hyphen with spaces around it if the subject and the
                  predicate are expressed by the same lexico-grammatical
                  categories.
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Київ - столиця України.{' '}
                  </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Жити - не байдики бити.{' '}
                  </span>
                </p>
                <p className={styles.block_584}>
                  Use a hyphen with spaces around it when some words are elided
                  (absent but implied) in the middle of a sentence (not at the
                  beginning or end of a clause). This can happen when the same
                  words are present in a different part of the sentence or when
                  the omitted words are obvious and can be inferred from
                  context.
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Я граю на фортепіано, а він - на скрипці.
                  </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Мені - котлету, а Олені - борщу!{' '}
                  </span>
                </p>
                <p className={styles.block_587}>
                  Use a hyphen with spaces around it when a word or phrase is
                  followed by a predicate which functions like a definition.
                  Such definitions are often preceded by the words "це", "оце",
                  "ось", "то", "значить".
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Очі - то зеркало душі.{' '}
                  </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ранок - це найкраща пора дня.{' '}
                  </span>
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Токіо - ось де я хочу жити!{' '}
                  </span>
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Жити без праці - значить не жити.{' '}
                  </span>
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Вона - медсестра чи лікар?{' '}
                  </span>
                </p>
                <p className={styles.block_593}>
                  Use a hyphen with spaces around it in implied conditionals of
                  the following form, without a word like "якщо".
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Кохаєш її - одружуйся.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : This is an implied conditional. The full{' '}
                  </span>
                </p>
                <p className={styles.block_595}>
                  meaning is "Якщо кохаєш її, то одружуйся".
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Хочеш чогось досягти - працюй наполегливіше.
                  </span>
                </p>
                <p className={styles.block_597}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : This is an implied conditional. The full meaning is "Якщо
                    хочеш чогось досягти, то працюй наполегливіше".
                  </span>
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
                <p className={styles.block_600}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Як справи {`{знак питання}`}{' '}
                  </span>
                </p>
                <p className={styles.block_601}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Як справи? </span>
                </p>
                <p className={styles.block_602}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Як справи {`{знак питання}`}?{' '}
                  </span>
                </p>
                <p className={styles.block_603}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>як справи знак питання </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_604}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Добре {`{крапка}`} {`{крапка}`} {`{крапка}`}{' '}
                  </span>
                </p>
                <p className={styles.block_605}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Добре... </span>
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    добре крапка крапка крапка{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Привіт Андрію {`{кома}`} побачимося завтра{` {крапка}`}
                  </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Привіт Андрію, побачимося завтра.{' '}
                  </span>
                </p>
                <p className={styles.block_609}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    привіт андрію кома побачимося завтра крапка{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_610}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : {`{Усміхнений смайлик}`}{' '}
                  </span>
                </p>
                <p className={styles.block_611}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: :-) </span>
                </p>
                <p className={styles.block_612}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: усміхнений смайлик </span>
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>усміхнений смайлик </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_614}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_615}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Я мешкаю на вулиці Старокиївській 8/12.{' '}
                  </span>
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Я мешкаю на вулиці Старокиївській 8 дріб 12.
                  </span>
                </p>
                <p className={styles.block_617}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Я мешкаю на вулиці Старокиївській вісім дріб дванадцять.
                  </span>
                </p>
                <p className={styles.block_618}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: www.fake-domain.com </span>
                </p>
                <p className={styles.block_619}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : www{` {крапка}`} fake {`{дефіс}`} domain{` {крапка}`} com
                  </span>
                </p>
                <p className={styles.block_620}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    дабл'ю дабл'ю дабл'ю крапка фейк дефіс домен крапка ком{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_621}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Він знає 3-4 мови. </span>
                </p>
                <p className={styles.block_622}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Він знає 3 {`{дефіс}`} 4 мови.{' '}
                  </span>
                </p>
                <p className={styles.block_623}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Він знає три {`{дефіс}`} чотири мови.{' '}
                  </span>
                </p>
                <p className={styles.block_624}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    він знає три чотири мови{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_625}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: {`{тире}`} </span>
                </p>
                <p className={styles.block_627}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: - </span>
                </p>
                <p className={styles.block_628}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: {`{знак оклику}`} </span>
                </p>
                <p className={styles.block_629}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: ! </span>
                </p>
                <p className={styles.block_630}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_631}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Я виїжджаю {`{крапка}`} Що на вечерю {`{знак питання}`}
                  </span>
                </p>
                <p className={styles.block_632}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Я виїжджаю. Що на вечерю?{' '}
                  </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Я виїжджаю {`{крапка}`} що на вечерю {`{знак питання}`}
                  </span>
                </p>
                <p className={styles.block_634}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    я виїжджаю крапка що на вечерю знак питання{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
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
