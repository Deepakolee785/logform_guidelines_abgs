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
            <PageContentHeader currentPage="longform Turskish" />
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
                <p className={styles.block_279}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_280}>
                  In general, a complete sentence contains a subject and a verb.
                </p>
                <p className={styles.block_281}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ben uyuyacağım. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Includes subject and verb.{' '}
                  </span>
                </p>
                <p className={styles.block_282}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ve sonunda onlar da bizi anladılar.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Includes subject and verb. Sounds like{' '}
                  </span>
                </p>
                <p className={styles.block_283}>
                  a whole utterance rather than just a conjunction to a larger
                  sentence.
                </p>
                <p className={styles.block_284}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be
                </p>
                <p className={styles.block_285}>
                  treated as a sentence because of its context, e.g. if it's an
                  answer to a specific question, or
                </p>
                <p className={styles.block_286}>
                  if it's an example where dropping the subject sounds
                  completely natural as a complete sentence.
                </p>
                <p className={styles.block_287}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Kiminle konuşuyorsun? Kapı komşumuz.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: two speakers </span>
                </p>
                <p className={styles.block_288}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: kapı komşumuz </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : No context to suggest this is a{' '}
                  </span>
                </p>
                <p className={styles.block_289}>
                  sentence; treat it as a fragment.
                </p>
                <p className={styles.block_290}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: köpek resimleri </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Google search for images{' '}
                  </span>
                </p>
                <p className={styles.block_291}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Yarınki partiye gelenler?{' '}
                  </span>
                </p>
                <p className={styles.block_292}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Londra'da hava durumu{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : This is asking for information, but the most likely
                    interpretation is as a sentence fragment on its own.
                  </span>
                </p>
                <p className={styles.block_293}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences
                </p>
                <p className={styles.block_294}>and punctuated as such.</p>
                <p className={styles.block_295}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Haydi! </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: interjection </span>
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Merhaba. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: greeting </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Elbette. Bye. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : This includes both a yes/no word and a{' '}
                  </span>
                </p>
                <p className={styles.block_298}>
                  farewell, with a long pause between.
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Arkadaşlığa şerefe. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Here, "şerefe" is not being used as an interjection on its
                    own, but rather the entire sentence is being used as an
                    interjection.
                  </span>
                </p>
                <p className={styles.block_300}>
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search,
                </p>
                <p className={styles.block_301}>not as full sentences.</p>
                <p className={styles.block_302}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : fırında patatesin yapılışı{' '}
                  </span>
                </p>
                <p className={styles.block_303}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Fırında patatesin yapılışı.{' '}
                  </span>
                </p>
                <p className={styles.block_304}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: İspanya resimleri </span>
                </p>
                <p className={styles.block_305}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: İspanya Resimleri. </span>
                </p>
                <p className={styles.block_306}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : en iyi Ferzan Özpetek filmleri{' '}
                  </span>
                </p>
                <p className={styles.block_307}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : En iyi Ferzan Özpetek filmleri.{' '}
                  </span>
                </p>
                <p className={styles.block_308}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Haldun Taner oyunları{' '}
                  </span>
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Haldun Taner oyunları.{' '}
                  </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Incredibles Monsters, Inc. WALL-E studio{' '}
                  </span>
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Incredibles Monsters, Inc. WALL-E studio.
                  </span>
                </p>
                <p className={styles.block_312}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Incredibles, Monsters, Inc., WALL-E, studio.
                  </span>
                </p>
                <p className={styles.block_313}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Incredibles. Monsters, Inc. WALL-E. studio
                  </span>
                </p>
                <p className={styles.block_314}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence.
                </p>
                <p className={styles.block_315}>
                  Add end punctuation to sentence fragments that sound like the
                  end of a sentence.
                </p>
                <p className={styles.block_316}>
                  For fragments that do not clearly sound like the beginning or
                  end of a sentence, leave out
                </p>
                <p className={styles.block_317}>
                  capitalization and punctuation. Note that sentence fragments
                  may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ne düşünüyorsun? Bu sanki{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Begins as complete sentence and ends{' '}
                  </span>
                </p>
                <p className={styles.block_319}>mid-stream.</p>
                <p className={styles.block_320}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Çok daha zor. Bu anlamlı gelmiyor.{' '}
                  </span>
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Daha duygusal, dolayısıyla bunun, onun parçası olduğunu
                    hatırla.
                  </span>
                </p>
                <p className={styles.block_322}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Begins mid-stream but ends completely; part of complete
                    sentence.
                  </span>
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Çok zor, dolayısıyla moralini bozma.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Audio was cut off at the beginning.{' '}
                  </span>
                </p>
                <p className={styles.block_324}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Kafeteryaya gideceğim. Diyeceğim ki verdiğin sözleri
                    unutmuşsun.
                  </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Do not put a period, hyphen, or ellipsis, even if another
                    sentence follows.
                  </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ne kadara, nerede? </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Both sound like beginnings of sentence{' '}
                  </span>
                </p>
                <p className={styles.block_327}>
                  as well as end of a sentence. In this case, you can use
                  "comma" between "ne kadara" and "nerede" as well as a question
                  mark at the end of the sentence.
                </p>
                <p className={styles.block_328}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Nerede nerede plaj? </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Repeated beginning of the sentence.{' '}
                  </span>
                </p>
                <p className={styles.block_329}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : inadına ama hatırladım ki{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : "inadına" sounds like the middle of a{' '}
                  </span>
                </p>
                <p className={styles.block_330}>
                  sentence; the end was cut off.
                </p>
                <p className={styles.block_331}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ayakkabıları ödünç aldım. Aldım onları.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : "Aldım onları." is clearly a complete{' '}
                  </span>
                </p>
                <p className={styles.block_332}>
                  sentence since subject is attached to the verb.
                </p>
                <p className={styles.block_333}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ayakkabıları ödünç aldım. Sevdim onları.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : "Sevdim onları." is clearly a complete{' '}
                  </span>
                </p>
                <p className={styles.block_332}>
                  sentence since subject is attached to the verb.
                </p>
                <p className={styles.block_334}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples,
                </p>
                <p className={styles.block_335}>
                  do not capitalize or punctuate it as a sentence.
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : En yakın petrol istasyonu nerede?{' '}
                  </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : En yakın, petrol istasyonu, nerede?{' '}
                  </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Even if the speaker uses long pauses in these places, do
                    not use a comma. There are places where commas are allowed
                    or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_341}>
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence,
                </p>
                <p className={styles.block_342}>
                  put a comma after the single word or phrase.
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Gündüzler köyü, buraya yakın mı?{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: topic-comment </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Domates, meyve mi sebze mi?{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: topic-comment </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Şimdi ekmekler, seviyorum bunu.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: topicalization </span>
                </p>
                <p className={styles.block_346}>
                  Put a comma after common sentence openers such as
                  prepositional phrases, adverbials,
                </p>
                <p className={styles.block_347}>and introductory clauses.</p>
                <p className={styles.block_348}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Hazır onu dile getiriyorsun, biraz erzak alalım.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: introductory clause </span>
                </p>
                <p className={styles.block_349}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Biz buradayken, onlara gereksinim duyduğumuzda onlar
                    neredeydiler?
                  </span>
                </p>
                <p className={styles.block_350}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: introductory clause </span>
                </p>
                <p className={styles.block_351}>
                  Do not put a comma after common sentence openers such as
                  postpositional phrases and adverbials.
                </p>
                <p className={styles.block_352}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : İlginç bir şekilde her iki parti de aynı gün oldu.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: adverbial </span>
                </p>
                <p className={styles.block_353}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : İki yıl sonra memlekete döndüm.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : postpositional phrase{' '}
                  </span>
                </p>
                <p className={styles.block_354}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word.
                </p>
                <p className={styles.block_355}>
                  However: If there is a long pause between a discourse word,
                  interjection, or yes/no word and a full
                </p>
                <p className={styles.block_356}>
                  sentence that follows it, treat that initial word as a
                  separate sentence.
                </p>
                <p className={styles.block_357}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Hayhay, biz sonradan geliriz.{' '}
                  </span>
                </p>
                <p className={styles.block_358}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Haydi, aşağıda seni bekliyoruz.{' '}
                  </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Başüstüne, memnun oluruz.{' '}
                  </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Yok, seni dinliyorum.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Yes/no word. Other examples of these types items include
                    "evet", "hayır", "yok", and others.
                  </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Evet, ben de oradaydım{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: Yes/no word. </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Elbette, bunu yapabilirim.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : No pause after "elbette".{' '}
                  </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Elbette. Bunu yapabilirim.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Substantial pause after "elbette".{' '}
                  </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Peki, bu gerçekten çok hoş.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Use a comma when there is no pause,{' '}
                  </span>
                </p>
                <p className={styles.block_365}>
                  or when there is a pause that isn't long.
                </p>
                <p className={styles.block_366}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Peki. Bu gerçekten çok hoş.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Use a period when there is a{' '}
                  </span>
                </p>
                <p className={styles.block_367}>
                  substantial pause after "peki".
                </p>
                <p className={styles.block_368}>Use commas in lists.</p>
                <p className={styles.block_369}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Zeki, güzel, alımlı bir eşi var.{' '}
                  </span>
                </p>
                <p className={styles.block_370}>
                  Use commas for non-restrictive modifiers, but do not use
                  commas for restrictive modifiers.
                </p>
                <p className={styles.block_371}>
                  The basic test for this is whether the modifier can be dropped
                  from the sentence and still keep
                </p>
                <p className={styles.block_372}>basically the same meaning.</p>
                <p className={styles.block_373}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Amerika cumhurbaşkanı, Barack Obama, zirve
                    toplantısındaydı.
                  </span>
                </p>
                <p className={styles.block_374}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Non-restrictive modifier. "Barack Obama" does not change
                    the core meaning of "Amerika cumhurbaşkanı", it just adds
                    additional information about Amerika cumhurbaşkanı.
                  </span>
                </p>
                <p className={styles.block_375}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Rezervasyon yapan kişiler diğer kişilerden evvel hizmet
                    alacaklardır.
                  </span>
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Restrictive modifier. The relative clause "rezervazyon
                    yapan kişiler" restricts which people we are talking about,
                    it doesn't just add additional information about an already
                    delineated group of people.
                  </span>
                </p>
                <p className={styles.block_377}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Cumhurbaşkanı Obama, 2008'de seçilmiş olan, 2009'da
                    törenle göreve getirildi.
                  </span>
                </p>
                <p className={styles.block_378}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Non-restrictive modifier. As a rule of thumb, if you ask
                    yourself: "Amerika'nın hangi cumhurbaşkanı" or "hangi sınıf
                    arkadaşı" and the answer is not absolutely clear, don't use
                    commas.
                  </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : 2008'de seçilmiş olan cumhurbaşkanı göreve 2009'da
                    getirildi.
                  </span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Unless there is a significant pause after "cumhurbaşkanı",
                    you should assume this is a restrictive modifier.
                  </span>
                </p>
                <p className={styles.block_381}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Esenlikler, Kemal </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Saygılarımla, Elif </span>
                </p>
                <p className={styles.block_384}>
                  Do not use commas in sentences that consist only of a greeting
                  and an addressee.
                </p>
                <p className={styles.block_385}>
                  If a greeting occurs at the beginning of a sentence or
                  fragment, place a comma after the greeting.
                </p>
                <p className={styles.block_386}>
                  If the greeting includes an addressee, place the comma after
                  the addressee.
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Merhaba. </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Merhaba Dilan. </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Merhaba, ben Gamze. </span>
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Merhaba Dilan, bu Gamze.{' '}
                  </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Merhaba Dilan. Bu Gamze.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Long pause between "Merhaba{' '}
                  </span>
                </p>
                <p className={styles.block_391}>
                  Dilan." and "Bu Gamze." Treat as separate sentences.
                </p>
                <p className={styles.block_392}>
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_393}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Meryem, beni geri ara.{' '}
                  </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Nasılsın, Ali Usta? </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : If you hear a pause after "Nasılsın", put
                  </span>
                </p>
                <p className={styles.block_395}>a comma.</p>
                <p className={styles.block_396}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Kerim, Metin. Sizinle sigorta poliçesi hakkında konuşmam
                    gerekli.
                  </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Note that this is a difficult edge case: "Kerim, Metin."
                    appears to be a shortened version of "Kerim, bu Metin.", so
                    we treat it as a full sentence.
                  </span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Melis, merhaba, bu Jale.{' '}
                  </span>
                </p>
                <p className={styles.block_399}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation.
                </p>
                <p className={styles.block_400}>
                  When the phrase appears before longer utterances, place a
                  comma after "Google".
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ok Google </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ok Google, zeytin ağaçları resimleri{' '}
                  </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ok Google, bana Ayşe'nin bağlantı bilgilerini göster.
                  </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ok Google, bu yıl Kurban Bayramı ne zaman?
                  </span>
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={'text'}>
                  Capitalize and punctuate the following as questions:
                </p>
                <p className={styles.block_407}>
                  1) All queries syntactically built as questions, regardless of
                  intonation.
                </p>
                <p className={styles.block_408}>
                  2) All queries which sound like they are being used as
                  questions, regardless of sentence structure.
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Cidden? </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Intonation sounds more like a{' '}
                  </span>
                </p>
                <p className={styles.block_410}>question than a statement.</p>
                <p className={styles.block_411}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Saat 3'te? </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Utterance uses rising intonation.{' '}
                  </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ve Pelin de geliyor? </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Utterance uses rising intonation.{' '}
                  </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Prag'da hava durumu </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Query uses rising intonation, but{' '}
                  </span>
                </p>
                <p className={styles.block_414}>
                  is most likely a web search rather than a true question.
                </p>
                <p className={styles.block_415}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point.
                </p>
                <p className={styles.block_416}>
                  If there is any doubt, err on the side of using period.
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Çeneni kapat! </span>
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Haydi! </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Haydi. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Speaker sounds unenthused.{' '}
                  </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Sen ne ballısın. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Spoken dispassionately.{' '}
                  </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: İyi ki doğdun! </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Spoken with enthusiasm.{' '}
                  </span>
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: İyi günler. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : pleasant neutral tone{' '}
                  </span>
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Sınavı geçtim! </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Spoken with enthusiasm.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Do not use a comma between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : "Her aşk bitermiş." diyorlar.{' '}
                  </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : "Her aşk bitermiş.", diyorlar.{' '}
                  </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Since "Her aşk bitermiş." is a sentence, put punctuation
                    within quotation marks. The word "diyorlar" is amongst
                    common reported speech verbs in Turkish, but other forms of
                    words ("dedi", "söyledi") can be used for reported speech.
                  </span>
                </p>
                <p className={styles.block_429}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Aylin dedi ki: "3'te gidelim."{' '}
                  </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Aylin dedi ki: "3'te gidelim.".{' '}
                  </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The word "dedi" is the most common reported speech verb in
                    Turkish, but other words ("söyledi", "dedi", "sordu") can be
                    used for reported speech. There is no need to use "period"
                    at the end of the sentence.
                  </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Zeynep sordu: "3'te buluşacak mıyız?"{' '}
                  </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Zeynep sordu: "3'te buluşacak mıyız?".{' '}
                  </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : You should not use "period" at the end of the sentence to
                    avoid adding excessive punctuation markers.
                  </span>
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ayşe dedi mi: "Benimle burada buluş."{' '}
                  </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ayşe dedi mi: "Benimle burada buluş."?{' '}
                  </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : You should not use "quesion marker" at the end of the
                    sentence to avoid adding excessive punctuation markers.
                  </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Leyla, "Orada olacağım. Söz veriyorum." modundaydı.
                  </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The "modundaydı" construction introduces a direct
                    quotation, so a comma is needed after "Leyla". Since the
                    quote is in the middle of the sentence, you should use
                    "period" at the end of the sentence.
                  </span>
                </p>
                <p className={styles.block_441}>
                  In Turkish, we prefer to use quotation marks in quotative
                  voice actions even when the quote follows the command. If the
                  quote is in the middle of the sentence or the beginning of the
                  sentence, you should use punctuation markers for the quote and
                  the rest of the sentence.
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Fransızcaya çevir "Nasılsın?"{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : You should not use "period" at the end{' '}
                  </span>
                </p>
                <p className={styles.block_443}>of the sentence.</p>
                <p className={styles.block_444}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Çevir "mütevazı". </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Do not capitalize and punctuate the{' '}
                  </span>
                </p>
                <p className={styles.block_445}>
                  word in the quote since it is a single word.
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Çevir "İsminiz ne?" Fransızcaya.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : The quote is in the middle of a{' '}
                  </span>
                </p>
                <p className={styles.block_447}>
                  sentence, so use question mark in the quoted part.
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Nasıl söylüyorsunuz "Seni seviyorum." Fransızcada?
                  </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Omit commas after "söylüyorsunuz" verbs in translation
                    requests. You should use "period" in the quoted part and a
                    "question mark" at the end of the sentence since the quote
                    is in the middle of the sentence.
                  </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Japoncada nasıl söylersiniz "Kahve istiyorum."
                  </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : You should not use a question mark at the end of the
                    sentence. Only using a period for the quoted part would be
                    enough.
                  </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : example@gmail.com adresine "Selam, günün nasıldı?"
                  </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Email gönder example@gmail.com adresine "Selam, günün
                    nasıldı?"
                  </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Since the quote is the end of the sentence, you should not
                    use an extra punctuation marker after the quoted part.
                  </span>
                </p>
                <p className={styles.block_455}>
                  In Turkish, using quotation marks is preferred rather than
                  using colons.
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Yarın 3.30 için randevu ayarla "dişçi randevusu".
                  </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : There is no need to capitalize the first letter in the
                    word "dişçi" since the quoted part is like a fragment.
                  </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Feyyaz'a mesaj yolla "Ustalar çarşambaya kadar müsait
                    değiller."
                  </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The text in the quotation marks is a sentence. Thus, the
                    sentence starts with an uppercase letter.
                  </span>
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : 5 dakika içinde orada olacağımı Harun'a mesaj yolla.
                  </span>
                </p>
                <p className={styles.block_461}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Çevir "hello" Türkçeye.{' '}
                  </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Hello. </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : It is the beginning of the sentence. Therefore, "Hello"
                    has been written in uppercase "H".
                  </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : İspanyolcaya çevir "elma".{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Since "elma" is a single word, you{' '}
                  </span>
                </p>
                <p className={styles.block_464}>
                  should write it in lowercase.
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Gel. </span>
                </p>
                <p className={styles.block_466}>
                  In Turkish, quotation marks for metalinguistic uses of words
                  or phrases are preferred.
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Tanımla "ambidexterity".{' '}
                  </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Tanımla: ambidexterity.{' '}
                  </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : There is no need to use colon after "Tanımla". Using
                    quotation marks would be enough.
                  </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : "Ada" is spelled the same backwards and forwards.
                  </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ada is spelled the same backwards and forwards.
                  </span>
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from standard letters, you should not use any other
                  symbol than: 0-9
                  23,^÷ÓÇcŞşĞğİıÜüÖöÂâÎîÛûÉéÈèËëÊê?!'"_°:.()&lt;&gt;{}
                  -[]√/@#$€£+=%*&amp;.;
                </p>
                <p className={styles.block_474}>
                  Transcribe apostrophes as they are normally used.
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ayşe'nin annesi geldi.{' '}
                  </span>
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : 80'lerin hit parçası neymiş?{' '}
                  </span>
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : ODTÜ'nün zeki mezunlarından biriydi.{' '}
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
                <p className={styles.block_480}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses,
                </p>
                <p className={styles.block_481}>
                  phone numbers, or other word-level punctuation.
                </p>
                <p className={styles.block_482}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between
                </p>
                <p className={styles.block_483}>curly brackets.</p>
                <p className={styles.block_484}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : {`{iki nokta üst üste}`}{' '}
                  </span>
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: {`{virgül}`} </span>
                </p>
                <p className={styles.block_486}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ben şimdi gidiyorum {`{nokta}`} Sen ne zamana burada
                    olursun?
                  </span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    ben şimdi gidiyorum nokta sen ne zamana burada olursun{' '}
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
