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
            <PageContentHeader currentPage="longform Sundanese" />
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
                <p className={styles.block_266}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a
                </p>
                <p className={styles.block_267}>
                  specific question, or if it's an example where dropping the
                  subject sounds completely natural as a complete sentence.
                </p>
                <p className={styles.block_268}>
                  Correct: Saha nu ku maneh diomongkeun?
                </p>
                <p className={styles.block_269}>Lalaki tatangga urang.</p>
                <p className={styles.block_270}>
                  Explanation: Two speakers. "Lalaki tatangga
                </p>
                <p className={styles.block_271}>
                  urang." is an answer to a specific question.
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_4}>
                    Correct: lalaki tatangga urang{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: No context to suggest this is a
                  </span>
                </p>
                <p className={styles.block_273}>
                  sentence; treat it as a fragment.
                </p>
                <p className={styles.block_274}>
                  <span className={styles.text_4}>
                    Correct: Arek datang ka ondangan isuk?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Dropping the subject and main{' '}
                  </span>
                </p>
                <p className={styles.block_275}>
                  verb here sounds natural as a complete
                </p>
                <p className={styles.block_276}>
                  sentence. Punctuate as sentence.
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_4}>
                    Correct: ngamandikeun anak anjing na bak{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sounds like a web search as{' '}
                  </span>
                </p>
                <p className={styles.block_278}>
                  opposed to a dropped subject. Punctuate as
                </p>
                <p className={styles.block_279}>fragment.</p>
                <p className={styles.block_280}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_281}>
                  <span className={styles.text_4}>Correct: Anjir. </span>
                  <span className={styles.text_5}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_282}>
                  <span className={styles.text_4}>Correct: Sampurasun. </span>
                  <span className={styles.text_5}>Explanation: greeting </span>
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_4}>
                    Correct: Wilujeng kanggo sobat abdi.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Entire phrase is being used as an
                  </span>
                </p>
                <p className={styles.block_284}>interjection.</p>
                <p className={styles.block_285}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_286}>
                  <span className={styles.text_4}>
                    Correct: Ceuk maneh kumaha? Lain jiga{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sentence-initial fragment ends
                  </span>
                </p>
                <p className={styles.block_287}>mid-stream.</p>
                <p className={styles.block_288}>
                  <span className={styles.text_4}>
                    Correct: leuwih hese. Teu kaharti.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sentence-final fragment begins
                  </span>
                </p>
                <p className={styles.block_287}>mid-stream.</p>
                <p className={styles.block_289}>
                  <span className={styles.text_4}>
                    Correct: hese pisan, ulah pondok pangharepan.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Audio was cut off at the beginning.
                  </span>
                </p>
                <p className={styles.block_290}>
                  Correct: Urang arek ka warung kopi. Urang arek
                </p>
                <p className={styles.block_291}>Sabaraha harga kopi hideung?</p>
                <p className={styles.block_292}>
                  Explanation: Do not put a period, hyphen, or
                </p>
                <p className={styles.block_293}>
                  ellipsis after a fragment even if another
                </p>
                <p className={styles.block_294}>sentence follows.</p>
                <p className={styles.block_295}>
                  <span className={styles.text_4}>
                    Correct: Sabarahaan Di mana{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Both sound like beginnings of{' '}
                  </span>
                </p>
                <p className={styles.block_296}>sentences.</p>
                <p className={styles.block_297}>
                  <span className={styles.text_4}>
                    Correct: Di mana Di mana basisir teh?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Repeated beginning of the{' '}
                  </span>
                </p>
                <p className={styles.block_298}>sentence.</p>
                <p className={styles.block_299}>
                  <span className={styles.text_4}>
                    Correct: bakal indit tapi jadina{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Sounds like the middle of a{' '}
                  </span>
                </p>
                <p className={styles.block_300}>
                  sentence; beginning and end were cut off.
                </p>
                <p className={styles.block_301}>
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
                <p className={styles.block_304}>
                  Correct: Di mana pom bengsin nu pang
                </p>
                <p className={styles.block_305}>deukeutna?</p>
                <p className={styles.block_306}>
                  Incorrect: Di mana, pom bengsin, nu pang
                </p>
                <p className={styles.block_307}>deukeutna?</p>
                <p className={styles.block_308}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_309}>
                  pauses, do not use commas to show those
                </p>
                <p className={styles.block_310}>
                  pauses. There are places where commas are
                </p>
                <p className={styles.block_311}>
                  allowed or required, but this example contains
                </p>
                <p className={styles.block_312}>neither.</p>
                <p className={styles.block_313}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_314}>
                  Correct: Tah, tadina urang nyangka maneh
                </p>
                <p className={styles.block_315}>boga pausahaan.</p>
                <p className={styles.block_316}>
                  Explanation: Discourse word. Other examples of
                </p>
                <p className={styles.block_317}>
                  discourse words in Sundanese include "tapi",
                </p>
                <p className={styles.block_318}>
                  "jadi", "sabenerna", and "saestuna".
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_4}>
                    Correct: Punten, kanyaah.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Interjection. Other examples of
                  </span>
                </p>
                <p className={styles.block_320}>
                  interjections include "horseh", "hey", "haha", and
                </p>
                <p className={styles.block_321}>others.</p>
                <p className={styles.block_322}>
                  <span className={styles.text_4}>
                    Correct: Nya, urang hayang.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: yes/no word{' '}
                  </span>
                </p>
                <p className={styles.block_323}>
                  <span className={styles.text_4}>
                    Correct: Pasti, eta mah urang bisa.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: yes/no word{' '}
                  </span>
                </p>
                <p className={styles.block_324}>
                  <span className={styles.text_4}>
                    Correct: Pasti. Eta mah urang bisa.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Substantial pause after "pasti".
                  </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_4}>
                    Correct: Tah. Eta alus pisan.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Substantial pause after "tah".
                  </span>
                </p>
                <p className={styles.block_326}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_327}>Correct: Ok Google</p>
                <p className={styles.block_328}>
                  Correct: Ok Google, gambar tangkal minyak
                </p>
                <p className={styles.block_329}>jaitun</p>
                <p className={styles.block_330}>
                  Correct: Ok Google, tingalikeun inpo kontak
                </p>
                <p className={styles.block_331}>Dean.</p>
                <p className={styles.block_332}>
                  Correct: Ok Google, iraha Idul Pitri taun ayeuna?
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
                <p className={styles.block_335}>
                  <span className={styles.text_4}>
                    Correct: Iraha maneh balik?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Syntactically built as a question, so
                  </span>
                </p>
                <p className={styles.block_336}>
                  punctuate as a question regardless of
                </p>
                <p className={styles.block_337}>intonation.</p>
                <p className={styles.block_338}>
                  <span className={styles.text_4}>
                    Correct: Jam 3:00 isuk?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Rising intonation suggests it is a
                  </span>
                </p>
                <p className={styles.block_339}>
                  question, so punctuate as a question regardless
                </p>
                <p className={styles.block_287}>of structure.</p>
                <p className={styles.block_340}>
                  <span className={styles.text_4}>
                    Correct: cuaca di Tucson{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Query has rising intonation, but is
                  </span>
                </p>
                <p className={styles.block_341}>
                  most likely a web search rather than a true
                </p>
                <p className={styles.block_342}>question.</p>
                <p className={styles.block_343}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_4}>Correct: Horseh! </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_4}>Correct: Horseh. </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker sounds unenthused.{' '}
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
                <p className={styles.block_348}>
                  Correct: Ceuk babaturan urang, "buhaya
                </p>
                <p className={styles.block_349}>muara".</p>
                <p className={styles.block_350}>
                  Incorrect: Ceuk babaturan urang, "buhaya
                </p>
                <p className={styles.block_351}>muara."</p>
                <p className={styles.block_352}>
                  Incorrect: Ceuk babaturan urang "buhaya
                </p>
                <p className={styles.block_351}>muara."</p>
                <p className={styles.block_352}>
                  Incorrect: Ceuk babaturan urang "buhaya
                </p>
                <p className={styles.block_351}>muara".</p>
                <p className={styles.block_353}>
                  Explanation: The word "ceuk" is the most
                </p>
                <p className={styles.block_354}>
                  common reported speech verb in Sundanese,
                </p>
                <p className={styles.block_355}>
                  but other words ("nanya", "ngajawab") can be
                </p>
                <p className={styles.block_356}>used for reported speech.</p>
                <p className={styles.block_357}>
                  Correct: Sebutkeun "dinosaurus".
                </p>
                <p className={styles.block_358}>
                  Incorrect: Sebutkeun, "dinosaurus".
                </p>
                <p className={styles.block_359}>
                  Explanation: Omit the comma if the verb is in
                </p>
                <p className={styles.block_360}>the imperative.</p>
                <p className={styles.block_361}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_362}>
                  Correct: Susi nyebutkeun, "Hayu panggih jam
                </p>
                <p className={styles.block_363}>3:00."</p>
                <p className={styles.block_364}>
                  Incorrect: Susi nyebutkeun, "Hayu panggih jam
                </p>
                <p className={styles.block_365}>3:00.".</p>
                <p className={styles.block_366}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_367}>
                  as a sentence. Do not add excess punctuation.
                </p>
                <p className={styles.block_368}>
                  Correct: Joko nanya, "Urang bakal rapat jam
                </p>
                <p className={styles.block_369}>3:00?"</p>
                <p className={styles.block_370}>
                  Incorrect: Joko nanya, "Urang bakal rapat jam
                </p>
                <p className={styles.block_371}>3:00?".</p>
                <p className={styles.block_366}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_367}>
                  as a sentence. Do not add excess punctuation.
                </p>
                <p className={styles.block_372}>
                  Correct: Tadi Joko ngomong, "Ke urang ka
                </p>
                <p className={styles.block_373}>ditu."</p>
                <p className={styles.block_374}>
                  Incorrect: Tadi Joko ngomong, "Ke urang ka
                </p>
                <p className={styles.block_365}>ditu."?</p>
                <p className={styles.block_366}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_367}>
                  as a sentence. Do not add excess punctuation.
                </p>
                <p className={styles.block_375}>
                  Correct: Dika ngomong kieu, "Urang pasti
                </p>
                <p className={styles.block_376}>
                  datang. Urang jangji." bari teu nempo
                </p>
                <p className={styles.block_377}>kalender-kalender acan.</p>
                <p className={styles.block_366}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_378}>
                  as sentences. Do not alter its end punctuation
                </p>
                <p className={styles.block_379}>
                  even though the quote is within a sentence.
                </p>
                <p className={styles.block_380}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_381}>
                  Correct: Tarjamahkeun kana Basa Jawa:
                </p>
                <p className={styles.block_382}>Kumaha damang?</p>
                <p className={styles.block_383}>
                  Explanation: The quote follows the command,
                </p>
                <p className={styles.block_384}>
                  so use a colon and omit quotation marks.
                </p>
                <p className={styles.block_385}>
                  Correct: Tarjamahkeun "Saha ngaran anjeun?"
                </p>
                <p className={styles.block_386}>kana Basa Jepang.</p>
                <p className={styles.block_387}>
                  Explanation: The quote is in the middle of a
                </p>
                <p className={styles.block_388}>
                  sentence, so use quotation marks and omit
                </p>
                <p className={styles.block_389}>colon.</p>
                <p className={styles.block_385}>
                  Correct: Kumaha cara ngomong "Urang nyaah
                </p>
                <p className={styles.block_390}>
                  ka anjeun." dina Basa Inggris?
                </p>
                <p className={styles.block_350}>
                  Incorrect: Kumaha cara ngomong, "Urang
                </p>
                <p className={styles.block_391}>
                  nyaah ka anjeun." dina Basa Inggris?
                </p>
                <p className={styles.block_392}>
                  Explanation: Omit commas after "ngomong"
                </p>
                <p className={styles.block_393}>
                  verbs in translation requests.
                </p>
                <p className={styles.block_394}>
                  Correct: Ka conto@gmail.com: Hey, kumaha
                </p>
                <p className={styles.block_395}>kaayaan anjeun?</p>
                <p className={styles.block_396}>
                  Correct: Kirim surelek ka conto@gmail.com nu
                </p>
                <p className={styles.block_397}>
                  eusina: Hey, kumaha kaayaan anjeun?
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from the English letters a through z, you should not use
                  any other symbol than: 0-9
                  äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?
                  !~^\'"_°:.()&lt;&gt;{}[]√/@#$€£+=%*&amp;-.;
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
                <p className={styles.block_402}>
                  Correct: Okeh {`{titik} `}
                  {`{titik} `}
                  {`  {titik}`}
                </p>
                <p className={styles.block_403}>Incorrect: Okeh...</p>
                <p className={styles.block_404}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>okay titik titik titik </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_405}>
                  Correct: Hey {`{koma}`} kumaha kaayaan anjeun
                </p>
                <p className={styles.block_406}>
                  {`{tanda tanya}`} Urang cageur {`{titik}`}
                </p>
                <p className={styles.block_407}>
                  Incorrect: Hey, kumaha kaayaan anjeun? Urang
                </p>
                <p className={styles.block_408}>cageur.</p>
                <p className={styles.block_409}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    hey koma kumaha kaayaan{' '}
                  </span>
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_1}>
                    anjeun tanda tanya urang cageur titik{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_411}>
                  Correct: Manehna ngomong ka urang, {`{petik`}
                </p>
                <p className={styles.block_412}>
                  {`buka}`} Ulah mawa ucing.{` {petik tutup}`}
                </p>
                <p className={styles.block_413}>
                  Incorrect: Manehna ngomong ka urang, "Ulah
                </p>
                <p className={styles.block_414}>mawa ucing."</p>
                <p className={styles.block_415}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    manehna ngomong ka urang{' '}
                  </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_1}>
                    petik buka ulah mawa ucing petik tutup{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_417}>
                  Correct: {`{beungeut seuri}`}
                </p>
                <p className={styles.block_418}>Incorrect: :-)</p>
                <p className={styles.block_419}>Incorrect: beungeut seuri</p>
                <p className={styles.block_420}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>beungeut seuri </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_421}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_422}>
                  Correct: Urang cicing di apartemen 4-A.
                </p>
                <p className={styles.block_423}>
                  Incorrect: Urang cicing di apartemen 4 {`{dash}`}
                </p>
                <p className={styles.block_424}>A.</p>
                <p className={styles.block_306}>
                  Incorrect: Urang cicing di apartemen opat
                </p>
                <p className={styles.block_425}>{`{dash}`} A.</p>
                <p className={styles.block_426}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    urang cicing di apartemen opat{' '}
                  </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_1}>dash a </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_428}>
                  Correct: www.bohong-domain.com
                </p>
                <p className={styles.block_429}>
                  Incorrect: www {`{dot}`} bohong {`{strip}`} domain
                </p>
                <p className={styles.block_430}>{`{dot} `}com</p>
                <p className={styles.block_431}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>w w w dot bohong strip </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_1}>domain dot com </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_433}>
                  Correct: Siti teh penyanyi/model.
                </p>
                <p className={styles.block_434}>
                  Incorrect: Siti teh penyanyi {`{garis miring}`}
                </p>
                <p className={styles.block_435}>model.</p>
                <p className={styles.block_436}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    siti teh penyanyi garis miring{' '}
                  </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_1}>model </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_438}>
                  Explanation: We consider slash to be word-level
                </p>
                <p className={styles.block_439}>punctuation.</p>
                <p className={styles.block_440}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_441}>Correct: {`{titik dua}`}</p>
                <p className={styles.block_442}>Correct: {`{garis handap}`}</p>
                <p className={styles.block_443}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_444}>
                  Correct: Urang indit ayeuna {`{titik} `}Sabaraha lila
                </p>
                <p className={styles.block_445}>lalampahan ieu?</p>
                <p className={styles.block_446}>
                  Incorrect: Urang indit ayeuna {`{titik} `}sabaraha
                </p>
                <p className={styles.block_447}>lila lalampahan ieu?</p>
                <p className={styles.block_448}>
                  Incorrect: Urang indit ayeuna titik Sabaraha lila
                </p>
                <p className={styles.block_449}>lalampahan ieu?</p>
                <p className={styles.block_450}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    urang indit ayeuna titik{' '}
                  </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_1}>
                    sabaraha lila lalampahan ieu{' '}
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
