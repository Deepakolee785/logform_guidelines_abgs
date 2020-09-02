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
            <PageContentHeader currentPage="longform Malay" />
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
                <p className={styles.block_328}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_329}>
                  In general, a complete sentence contains a subject and a verb.
                </p>
                <p className={styles.block_330}>
                  <span className={styles.text_4}>
                    Correct: Dia membaca buku di dalam bilik.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Includes subject and verb.{' '}
                  </span>
                </p>
                <p className={styles.block_331}>
                  Correct: Bahkan tanpa berselindung, beliau
                </p>
                <p className={styles.block_332}>mengakui.</p>
                <p className={styles.block_333}>
                  Explanation: Includes subject and verb. Sounds
                </p>
                <p className={styles.block_334}>
                  like a whole utterance rather than just a
                </p>
                <p className={styles.block_335}>
                  conjunction to a larger sentence.
                </p>
                <p className={styles.block_336}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a
                </p>
                <p className={styles.block_337}>
                  specific question, or if it's an example where dropping the
                  subject sounds completely natural as a complete sentence.
                </p>
                <p className={styles.block_338}>
                  Correct: Apa pula kata Emma? Esok hari nak ke
                </p>
                <p className={styles.block_339}>Brunei.</p>
                <p className={styles.block_340}>Explanation: two speakers</p>
                <p className={styles.block_341}>
                  <span className={styles.text_4}>Correct: kawan sebelah </span>
                  <span className={styles.text_9}>
                    Explanation: No context to suggest this is a
                  </span>
                </p>
                <p className={styles.block_342}>
                  sentence; treat it as a fragment.
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_4}>Correct: gambar haiwan </span>
                  <span className={styles.text_9}>
                    Explanation: Google search for images{' '}
                  </span>
                </p>
                <p className={styles.block_344}>
                  Correct: Nak balik rumah sekarang?
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_4}>
                    Correct: cuaca di Langkawi{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: This is asking for information, but
                  </span>
                </p>
                <p className={styles.block_346}>
                  the most likely interpretation is as a sentence
                </p>
                <p className={styles.block_347}>fragment on its own.</p>
                <p className={styles.block_348}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_349}>
                  <span className={styles.text_4}>Correct: Waduh. </span>
                  <span className={styles.text_9}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_350}>
                  <span className={styles.text_4}>
                    Correct: Selamat jalan.{' '}
                  </span>
                  <span className={styles.text_9}>Explanation: greeting </span>
                </p>
                <p className={styles.block_351}>
                  <span className={styles.text_4}>
                    Correct: Ya. Jumpa lagi.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: This includes both a yes/no word
                  </span>
                </p>
                <p className={styles.block_352}>
                  and a farewell, with a long pause between.
                </p>
                <p className={styles.block_353}>
                  <span className={styles.text_4}>
                    Correct: Helo kita jumpa lagi.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Here, "helo" is not being used as an
                  </span>
                </p>
                <p className={styles.block_354}>
                  interjection on its own, but rather the entire
                </p>
                <p className={styles.block_355}>
                  sentence is being used as an interjection.
                </p>
                <p className={styles.block_356}>
                  Do not capitalize or punctuate phrases that are intended to be
                  used by the speaker as a web search, not as full sentences.
                </p>
                <p className={styles.block_357}>
                  Correct: bagaimana memulakan perniagaan
                </p>
                <p className={styles.block_358}>
                  Incorrect: Bagaimana memulakan perniagaan
                </p>
                <p className={styles.block_359}>
                  Correct: gambar penyanyi Alyah
                </p>
                <p className={styles.block_360}>
                  Incorrect: Gambar penyanyi Alyah.
                </p>
                <p className={styles.block_361}>
                  Correct: masjid tertua di Malaysia
                </p>
                <p className={styles.block_362}>
                  Incorrect: Masjid tertua di Malaysia.
                </p>
                <p className={styles.block_363}>Correct: lagu Chomel</p>
                <p className={styles.block_364}>Incorrect: Lagu Chomel.</p>
                <p className={styles.block_365}>
                  Correct: Safiah bt. Hj. Abdul Karim Nik, Struktur
                </p>
                <p className={styles.block_366}>
                  Interogatif dalam Bahasa Melayu
                </p>
                <p className={styles.block_367}>
                  Incorrect: Safiah bt. Hj. Abdul Karim Nik,
                </p>
                <p className={styles.block_368}>
                  Struktur Interogatif dalam Bahasa Melayu.
                </p>
                <p className={styles.block_369}>
                  Incorrect: Safiah bt., Hj., Abdul Karim Nik,
                </p>
                <p className={styles.block_370}>
                  Struktur Interogatif, dalam Bahasa Melayu.
                </p>
                <p className={styles.block_367}>
                  Incorrect: Safiah bt. Hj. Abdul Karim Nik,
                </p>
                <p className={styles.block_371}>
                  Struktur Interogatif. dalam Bahasa Melayu
                </p>
                <p className={styles.block_372}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_4}>
                    Correct: Kau faham tak? Tak seperti{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Begins as complete sentence and
                  </span>
                </p>
                <p className={styles.block_374}>ends mid-stream.</p>
                <p className={styles.block_375}>
                  <span className={styles.text_4}>
                    Correct: agak susah. Dia langsung tak faham.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Fragment is the end of a sentence.
                  </span>
                </p>
                <p className={styles.block_376}>
                  Correct: secara tiba-tiba diam, tidak seperti
                </p>
                <p className={styles.block_377}>kebiasaannya.</p>
                <p className={styles.block_378}>
                  Explanation: Begins mid-stream but ends
                </p>
                <p className={styles.block_379}>
                  completely; part of complete sentence.
                </p>
                <p className={styles.block_380}>
                  Correct: makanan, barangan keperluan dan
                </p>
                <p className={styles.block_381}>
                  ubatan telah dapat disalurkan kepada mangsa
                </p>
                <p className={styles.block_382}>banjir di 28 lokasi</p>
                <p className={styles.block_383}>
                  Explanation: Audio was cut off at the beginning.
                </p>
                <p className={styles.block_384}>
                  Correct: Saya amat Adakah Anda
                </p>
                <p className={styles.block_385}>menyukainya?</p>
                <p className={styles.block_386}>
                  Explanation: Do not put a period, hyphen, or
                </p>
                <p className={styles.block_387}>
                  ellipsis, even if another sentence follows.
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_4}>
                    Correct: Berapa Di mana{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Both sound like beginnings of{' '}
                  </span>
                </p>
                <p className={styles.block_389}>sentences.</p>
                <p className={styles.block_390}>
                  <span className={styles.text_4}>
                    Correct: Berapa berapa umur kamu?{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Repeated beginning of the{' '}
                  </span>
                </p>
                <p className={styles.block_391}>sentence.</p>
                <p className={styles.block_392}>
                  Correct: menjelaskan dasar belia negara
                </p>
                <p className={styles.block_393}>kepada</p>
                <p className={styles.block_394}>
                  Explanation: Sounds like the middle of a
                </p>
                <p className={styles.block_395}>
                  sentence; beginning and end were cut off.
                </p>
                <p className={styles.block_396}>
                  Correct: Nurul ringan mulut meminta untuk
                </p>
                <p className={styles.block_397}>
                  meminjam buku milik kawan barunya itu.
                </p>
                <p className={styles.block_398}>membelinya</p>
                <p className={styles.block_399}>
                  Explanation: Unclear whether "membelinya" is
                </p>
                <p className={styles.block_400}>
                  the end of a sentence or a stand-alone
                </p>
                <p className={styles.block_401}>
                  fragment, so default to formatting it as a
                </p>
                <p className={styles.block_402}>fragment.</p>
                <p className={styles.block_403}>
                  <span className={styles.text_4}>
                    Correct: Awak comel sangat. Suka awak.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: "Suka awak." is clearly a complete
                  </span>
                </p>
                <p className={styles.block_404}>
                  sentence with an omitted subject.
                </p>
                <p className={styles.block_405}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not capitalize or punctuate it as
                  a sentence.
                </p>
                <p className={styles.block_406}>Common interjections</p>
                <p className={styles.block_407}>● adoi</p>
                <p className={styles.block_408}>● alamak</p>
                <p className={styles.block_409}>● eh</p>
                <p className={styles.block_410}>● tahniah</p>
                <p className={styles.block_411}>● maaf</p>
                <p className={styles.block_412}>● nah</p>
                <p className={styles.block_413}>● oi</p>
                <p className={styles.block_414}>● wah</p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <p className={styles.block_417}>
                  Correct: Apakah nama benda ini?
                </p>
                <p className={styles.block_418}>
                  Incorrect: Apakah, nama, benda ini?
                </p>
                <p className={styles.block_419}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_420}>
                  pauses in these places, do not use a comma.
                </p>
                <p className={styles.block_421}>
                  There are places where commas are allowed or
                </p>
                <p className={styles.block_422}>
                  required, but this example contains neither.
                </p>
                <p className={styles.block_372}>
                  For complete sentences that follow a single word or phrase
                  that focuses the meaning of a sentence, put a comma after the
                  single word or phrase.
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_4}>
                    Correct: Nur Faten, apakah nama Anda?{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: topic-comment{' '}
                  </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_4}>
                    Correct: Bubur, nasi atau lontong?{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: topic-comment{' '}
                  </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_4}>
                    Correct: Saya tak makan lagi ni, terlalu pedas.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: topicalization{' '}
                  </span>
                </p>
                <p className={styles.block_426}>
                  Put a comma after common sentence openers such as
                  prepositional phrases, adverbials, and introductory clauses.
                </p>
                <p className={styles.block_427}>
                  Correct: Kalau awak sudah mengakuinya, tak
                </p>
                <p className={styles.block_428}>perlu takut.</p>
                <p className={styles.block_429}>
                  Explanation: introductory clause
                </p>
                <p className={styles.block_430}>
                  Correct: Ketika mereka menderita, di mana
                </p>
                <p className={styles.block_431}>kita?</p>
                <p className={styles.block_429}>
                  Explanation: introductory clause
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_4}>
                    Correct: Demikian, sila rujuk buku itu.{' '}
                  </span>
                  <span className={styles.text_9}>Explanation: adverbial </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_4}>
                    Correct: Di perhentian bus, dia menunggu kami.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: prepositional phrase{' '}
                  </span>
                </p>
                <p className={styles.block_434}>
                  Correct: Di Kuala Lumpur, pertunjukan itu
                </p>
                <p className={styles.block_435}>diadakan.</p>
                <p className={styles.block_436}>
                  Explanation: prepositional phrase
                </p>
                <p className={styles.block_437}>
                  Correct: Dari sudut kanan dewan itu, mereka
                </p>
                <p className={styles.block_438}>memulakan kerja pembersihan.</p>
                <p className={styles.block_436}>
                  Explanation: prepositional phrase
                </p>
                <p className={styles.block_439}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_440}>
                  Correct: Sebenarnya, perjalanan itu melukakan
                </p>
                <p className={styles.block_441}>diriku.</p>
                <p className={styles.block_442}>
                  Explanation: Discourse word. Other examples
                </p>
                <p className={styles.block_443}>
                  of discourse words in Malaysian include
                </p>
                <p className={styles.block_444}>
                  "namun", "tetapi", and "juga".
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_4}>
                    Correct: Aduh, kepala saya terantuk dinding.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Interjection. Other examples of
                  </span>
                </p>
                <p className={styles.block_446}>
                  interjections include "aduh", "waduh", "helo",
                </p>
                <p className={styles.block_447}>"mari", and others.</p>
                <p className={styles.block_448}>
                  <span className={styles.text_4}>
                    Correct: Mari, sila masuk sini.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Interjection{' '}
                  </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_4}>
                    Correct: Ya, saya akan melakukan itu.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Yes/no word. Other examples of
                  </span>
                </p>
                <p className={styles.block_450}>
                  these types of items include "ya", "tidak",
                </p>
                <p className={styles.block_451}>"maklumlah", and others.</p>
                <p className={styles.block_425}>
                  <span className={styles.text_4}>
                    Correct: Oke, saya mahu.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Yes/no word.{' '}
                  </span>
                </p>
                <p className={styles.block_452}>
                  Correct: Tentu saja, bahasa di kedua-dua
                </p>
                <p className={styles.block_453}>
                  negara ini akan lebih cepat dan berkesan
                </p>
                <p className={styles.block_454}>dengan penerbitan kamus ini.</p>
                <p className={styles.block_455}>
                  Explanation: No pause after "tentu saja".
                </p>
                <p className={styles.block_456}>
                  Correct: Tentu saja. Bahasa di kedua-dua
                </p>
                <p className={styles.block_453}>
                  negara ini akan lebih cepat dan berkesan
                </p>
                <p className={styles.block_454}>dengan penerbitan kamus ini.</p>
                <p className={styles.block_457}>
                  Explanation: Substantial pause after "tentu
                </p>
                <p className={styles.block_458}>saja".</p>
                <p className={styles.block_459}>
                  <span className={styles.text_4}>
                    Correct: Aduh, cepat-cepat aku berpaling.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Use a comma when there is no{' '}
                  </span>
                </p>
                <p className={styles.block_460}>
                  pause, or when there is a pause that isn't long.
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_4}>
                    Correct: Aduh. cepat-cepat aku berpaling.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Use a period when there is a{' '}
                  </span>
                </p>
                <p className={styles.block_462}>
                  substantial pause after "aduh".
                </p>
                <p className={styles.block_463}>Use commas in lists.</p>
                <p className={styles.block_464}>
                  Correct: Emak membeli sayur-sayuran seperti
                </p>
                <p className={styles.block_465}>
                  wortel, bayam, sawi dan kubis.
                </p>
                <p className={styles.block_466}>
                  Use commas for non-restrictive modifiers, but do not use
                  commas for restrictive modifiers. The basic test for this is
                  whether the modifier can be dropped from the sentence and
                  still keep basically the same meaning.
                </p>
                <p className={styles.block_467}>
                  Correct: Perdana Menteri Korea Selatan, Chung
                </p>
                <p className={styles.block_468}>
                  Hong-Won, meletak jawatan atas
                </p>
                <p className={styles.block_469}>
                  bertanggungjawab terhadap insiden feri karam.
                </p>
                <p className={styles.block_470}>
                  Explanation: Non-restrictive modifier. "Chung
                </p>
                <p className={styles.block_471}>
                  Hong-Won" does not change the core meaning
                </p>
                <p className={styles.block_472}>
                  of "Perdana Menteri Korea Selatan", it just adds
                </p>
                <p className={styles.block_473}>
                  additional information about the president of
                </p>
                <p className={styles.block_474}>South Korea.</p>
                <p className={styles.block_396}>
                  Correct: Segerombolan peminat yang tidak
                </p>
                <p className={styles.block_475}>
                  Explanation: Restrictive modifier. The relative
                </p>
                <p className={styles.block_476}>
                  henti bertanya akan menyerang mereka.
                </p>
                <p className={styles.block_477}>
                  clause "yang tidak henti bertanya" restricts
                </p>
                <p className={styles.block_478}>
                  which people we are talking about, it doesn't
                </p>
                <p className={styles.block_479}>
                  just add additional information about an
                </p>
                <p className={styles.block_480}>
                  already delineated group of people.
                </p>
                <p className={styles.block_481}>
                  Correct: Presiden Jokowi, yang menang pada
                </p>
                <p className={styles.block_482}>
                  Explanation: Non-restrictive modifier. As a rule
                </p>
                <p className={styles.block_483}>
                  pemilu bulan Juli, dilantik pada bulan Oktober.
                </p>
                <p className={styles.block_484}>
                  of thumb, if you ask yourself: "which president
                </p>
                <p className={styles.block_485}>
                  of Indonesia" or "which classmate" and the
                </p>
                <p className={styles.block_486}>
                  answer is not absolutely clear, don't use
                </p>
                <p className={styles.block_487}>commas.</p>
                <p className={styles.block_488}>
                  Correct: Perdana menteri yang terpilih pada
                </p>
                <p className={styles.block_489}>
                  Explanation: Unless there are significant
                </p>
                <p className={styles.block_490}>
                  bulan Juli dilantik pada bulan Oktober.
                </p>
                <p className={styles.block_491}>
                  pauses after "perdana menteri" and "Juli", you
                </p>
                <p className={styles.block_492}>
                  should assume this is a restrictive modifier.
                </p>
                <p className={styles.block_493}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_494}>Correct: Yang benar, Azizah</p>
                <p className={styles.block_495}>
                  Correct: Saya yang menurut perintah, Abdul
                </p>
                <p className={styles.block_496}>Rasheed</p>
                <p className={styles.block_497}>
                  Do not use commas in sentences that consist only of a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className={styles.block_498}>Correct: Selamat malam.</p>
                <p className={styles.block_213}>Correct: Selamat malam Ema.</p>
                <p className={styles.block_302}>
                  Correct: Selamat pagi, siapakah nama anda?
                </p>
                <p className={styles.block_499}>
                  Correct: Selamat pagi encik. Bilakah encik
                </p>
                <p className={styles.block_500}>datang?</p>
                <p className={styles.block_501}>
                  Explanation: Long pause between "selamat pagi
                </p>
                <p className={styles.block_502}>
                  encik" and "bilakah encik datang" treat as
                </p>
                <p className={styles.block_503}>separate sentences.</p>
                <p className={styles.block_504}>
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_505}>Correct: Abdul, apakah ini?</p>
                <p className={styles.block_506}>Correct: Apa khabar, tuan?</p>
                <p className={styles.block_507}>
                  Correct: Maya, saya. Kita perlu
                </p>
                <p className={styles.block_469}>
                  memperkukuhkan perpaduan dan integrasi tim.
                </p>
                <p className={styles.block_508}>
                  Explanation: Note that this is a difficult edge
                </p>
                <p className={styles.block_509}>
                  case: "Maya, saya." appears to be a shortened
                </p>
                <p className={styles.block_473}>
                  version of "Maya, ini saya", so we treat it as a
                </p>
                <p className={styles.block_510}>full sentence.</p>
                <p className={styles.block_511}>
                  Correct: Mazlan, helo, ini Nordiana.
                </p>
                <p className={styles.block_512}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_513}>Correct: Ok Google</p>
                <p className={styles.block_514}>
                  Correct: Ok Google, gambar rumah banglo
                </p>
                <p className={styles.block_515}>
                  Correct: Ok Google, tolong tunjukkan ke rumah
                </p>
                <p className={styles.block_516}>Siti.</p>
                <p className={styles.block_282}>
                  Correct: Ok Google, kapan Malaysia merdeka?
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
                <p className={styles.block_519}>
                  <span className={styles.text_4}>Correct: Maafkan saya? </span>
                  <span className={styles.text_9}>
                    Explanation: Intonation sounds more like a{' '}
                  </span>
                </p>
                <p className={styles.block_520}>statement than a question.</p>
                <p className={styles.block_521}>
                  <span className={styles.text_4}>
                    Correct: Sedikit sahaja?{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Utterance uses rising intonation.
                  </span>
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_4}>
                    Correct: Dia juga, datang?{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Utterance uses rising intonation.
                  </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_4}>
                    Correct: cuaca di Kuala Lumpur{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Query uses rising intonation, but is
                  </span>
                </p>
                <p className={styles.block_524}>
                  most likely a web search rather than a true
                </p>
                <p className={styles.block_525}>question.</p>
                <p className={styles.block_526}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_527}>Correct: Baiknya!</p>
                <p className={styles.block_528}>
                  <span className={styles.text_4}>Correct: Tahniah! </span>
                  <span className={styles.text_9}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_4}>Correct: Tahniah. </span>
                  <span className={styles.text_9}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_4}>
                    Correct: Awak jangan tertawa.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Spoken dispassionately.{' '}
                  </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_4}>
                    Correct: Selamat hari jadi!{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_4}>
                    Correct: Selamat makan.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: pleasant neutral tone{' '}
                  </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_4}>
                    Correct: Saya dapat tiketnya!{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a comma between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_535}>
                  Correct: Dia berkata, "masa dua jam".
                </p>
                <p className={styles.block_536}>
                  Incorrect: Dia berkata, "masa dua jam."
                </p>
                <p className={styles.block_537}>
                  Incorrect: Dia berkata "masa dua jam."
                </p>
                <p className={styles.block_537}>
                  Incorrect: Dia berkata "masa dua jam".
                </p>
                <p className={styles.block_538}>
                  Explanation: The word "berkata" is the most
                </p>
                <p className={styles.block_539}>
                  common reported speech verb in Malay, but
                </p>
                <p className={styles.block_540}>
                  other words ("katanya", "bertanya") can be used
                </p>
                <p className={styles.block_541}>for reported speech.</p>
                <p className={styles.block_542}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_543}>
                  Correct: Jaafar berkata, "Bacakan surat ini."
                </p>
                <p className={styles.block_544}>
                  Incorrect: Jaafar berkata, "Bacakan surat ini.".
                </p>
                <p className={styles.block_538}>
                  Explanation: The word "berkata" is the most
                </p>
                <p className={styles.block_478}>
                  common reported speech verb in Malaysian,
                </p>
                <p className={styles.block_545}>
                  but other words ("katanya", "bertanya") can be
                </p>
                <p className={styles.block_546}>used for reported speech.</p>
                <p className={styles.block_547}>
                  Correct: Iskandar bertanya, "Awak boleh
                </p>
                <p className={styles.block_548}>datang?"</p>
                <p className={styles.block_549}>
                  Incorrect: Iskandar bertanya, "Awak boleh
                </p>
                <p className={styles.block_550}>datang?".</p>
                <p className={styles.block_396}>
                  Correct: Apakah Amid berkata, "Awak akan
                </p>
                <p className={styles.block_551}>sampai?"</p>
                <p className={styles.block_552}>
                  Incorrect: Apakah amid berkata, "Awak akan
                </p>
                <p className={styles.block_553}>sampai."?</p>
                <p className={styles.block_554}>
                  Correct: Dia seperti, "Saya nak datang. Saya
                </p>
                <p className={styles.block_555}>
                  janji." bahkan tanpa melihat jadwalnya.
                </p>
                <p className={styles.block_556}>
                  Explanation: The "seperti" construction
                </p>
                <p className={styles.block_557}>
                  introduces a direct quotation, so a comma is
                </p>
                <p className={styles.block_558}>needed.</p>
                <p className={styles.block_559}>
                  <span className={styles.text_4}>
                    Correct: Cari "nasi lemak".{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Omit the comma if the verb is in
                  </span>
                </p>
                <p className={styles.block_560}>the imperative.</p>
                <p className={styles.block_561}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_562}>
                  Correct: Terjemahkan ke bahasa Korea:
                </p>
                <p className={styles.block_563}>Siapakah itu?</p>
                <p className={styles.block_564}>
                  Explanation: The quote follows the command,
                </p>
                <p className={styles.block_565}>so use a colon.</p>
                <p className={styles.block_566}>
                  Correct: Terjemahkan "Siapakah itu?" ke bahasa
                </p>
                <p className={styles.block_251}>Korea.</p>
                <p className={styles.block_567}>
                  Explanation: The quote is in the middle of a
                </p>
                <p className={styles.block_568}>
                  sentence, so use quotation marks.
                </p>
                <p className={styles.block_396}>
                  Correct: Bagaimana kamu menerjemahkan
                </p>
                <p className={styles.block_569}>
                  "Saya cinta awak." ke bahasa Korea?
                </p>
                <p className={styles.block_570}>
                  Explanation: Omit commas after
                </p>
                <p className={styles.block_571}>
                  "menerjemahkan" verbs in translation requests.
                </p>
                <p className={styles.block_572}>
                  Correct: Bagaimana kamu menerjemahkan ke
                </p>
                <p className={styles.block_573}>
                  bahasa Korea: Saya mahu Malaysia menang.
                </p>
                <p className={styles.block_574}>
                  Correct: To nadia@gmail.com: Helo, apa
                </p>
                <p className={styles.block_575}>khabar?</p>
                <p className={styles.block_576}>
                  Correct: Kirim emel kepada nadia@gmail.com
                </p>
                <p className={styles.block_577}>berisi: Helo, apa khabar?</p>
                <p className={styles.block_578}>
                  Leave text after colons lowercase unless capitalization is
                  required (can stand alone as complete sentence).
                </p>
                <p className={styles.block_579}>
                  Correct: Buat janji besok pukul 12.00 siang:
                </p>
                <p className={styles.block_580}>rapat umum.</p>
                <p className={styles.block_581}>
                  Correct: Tulis pesan kepada Maya: Acara
                </p>
                <p className={styles.block_582}>
                  tahunan akan berlangsung selama empat hari.
                </p>
                <p className={styles.block_226}>
                  Correct: Tulis pesan kepada Maya bahawa saya
                </p>
                <p className={styles.block_583}>nak jumpa dia.</p>
                <p className={styles.block_584}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate or capitalize the
                  words, even if you'd consider the words as sentences in other
                  situations.
                </p>
                <p className={styles.block_585}>
                  Correct: Terjemahkan "helo" ke bahasa Korea.
                </p>
                <p className={styles.block_586}>Correct: Helo.</p>
                <p className={styles.block_587}>
                  Correct: Terjemahkan ke Korea: pergi.
                </p>
                <p className={styles.block_588}>Correct: Pergi.</p>
                <p className={styles.block_589}>
                  Do not use quotation marks for metalinguistic uses of words or
                  phrases. These uses include defining the word, talking about
                  the spelling of the word, or any other type of reference to
                  the word itself as a thing.
                </p>
                <p className={styles.block_590}>Correct: Jelaskan lelasan.</p>
                <p className={styles.block_591}>
                  Incorrect: Jelaskan "lelasan".
                </p>
                <p className={styles.block_592}>
                  Correct: Dia menyebutkan kata amnesti.
                </p>
                <p className={styles.block_593}>
                  Incorrect: Dia menyebutkan kata "amnesti".
                </p>
                <p className={styles.block_594}>
                  Correct: Comel menjadi kata yang popular di
                </p>
                <p className={styles.block_595}>kalangan rakyat.</p>
                <p className={styles.block_596}>
                  Incorrect: "Comel" menjadi kata yang popular di
                </p>
                <p className={styles.block_597}>kalangan rakyat.</p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from the letters a through z, you should not use any
                  other symbol than: 0-9
                  äâàáéèéëêēïîíñóôöüûùúÄÂÀÁÉÈÉËÊĒÏÎÍÑÓÔÖÜÛÙÚ23,?!~^\'"_°:.()&lt;&gt;
                  {}[]√/@#$€£+=%*&amp;-.;
                </p>
                <p className={styles.block_600}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_601}>
                  Correct: Felda United-Kelantan
                </p>
                <p className={styles.block_602}>
                  Incorrect: Felda United Kelantan
                </p>
                <p className={styles.block_603}>
                  Include a hyphen between locations in flight itineraries.
                </p>
                <p className={styles.block_604}>Correct: Kuala Lumpur-Penang</p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.)
                </p>
                <p className={styles.block_606}>
                  Correct: Jika tidak dirawat{` {koma}`} mungkin
                </p>
                <p className={styles.block_607}>
                  ianya akan lumpuh {`{noktah}`}
                </p>
                <p className={styles.block_608}>
                  Incorrect: Jika tidak dirawat, mungkin ianya
                </p>
                <p className={styles.block_609}>akan lumpuh.</p>
                <p className={styles.block_610}>
                  Incorrect: Jika tidak dirawat koma mungkin
                </p>
                <p className={styles.block_611}>ianya akan lumpuh noktah</p>
                <p className={styles.block_612}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    jika tidak dirawat koma{' '}
                  </span>
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_1}>
                    mungkin ianya akan lumpuh noktah{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_614}>
                  Correct: Nak balik rumah sekarang {`{tanda`}
                </p>
                <p className={styles.block_441}>{`tanya}`}</p>
                <p className={styles.block_615}>
                  Incorrect: Nak balik rumah sekarang?
                </p>
                <p className={styles.block_616}>
                  Incorrect: Nak balik rumah sekarang tanda
                </p>
                <p className={styles.block_617}>tanya</p>
                <p className={styles.block_618}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    nak balik rumah sekarang{' '}
                  </span>
                </p>
                <p className={styles.block_619}>
                  <span className={styles.text_1}>tanda tanya </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_620}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_621}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_622}>
                  Correct: {`{tanda noktah bertindih}`}
                </p>
                <p className={styles.block_623}>Incorrect: :</p>
                <p className={styles.block_624}>
                  Incorrect: tanda noktah bertindih
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>tanda noktah bertindih </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_626}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_627}>
                  Correct: Saya nak pergi{` {noktah} `}Berapa lama
                </p>
                <p className={styles.block_628}>kira-kira perjalanannya?</p>
                <p className={styles.block_629}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    saya nak pergi noktah berapa{' '}
                  </span>
                </p>
                <p className={styles.block_630}>
                  <span className={styles.text_1}>
                    lama kira-kira perjalanannya{' '}
                  </span>
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
