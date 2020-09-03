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
            <PageContentHeader currentPage="longform Swahili" />
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
                <p className={styles.block_257}>
                  Full sentences should start with an uppercase letter and end
                  with a punctuation mark.
                </p>
                <p className={styles.block_258}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a
                </p>
                <p className={styles.block_259}>
                  specific question, or if it's an example where dropping the
                  subject sounds completely natural as a complete sentence.
                </p>
                <p className={styles.block_260}>
                  Correct: Mlichukua saa ngapi? Saa mbili tu.
                </p>
                <p className={styles.block_261}>
                  Incorrect: Mlichukua saa ngapi? saa mbili tu.
                </p>
                <p className={styles.block_262}>
                  Explanation: Two speakers. "Saa mbili tu." is an
                </p>
                <p className={styles.block_263}>
                  answer to a specific question.
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_4}>Correct: tunasomea </span>
                  <span className={styles.text_7}>
                    Explanation: No context to suggest this is a
                  </span>
                </p>
                <p className={styles.block_265}>
                  sentence; treat it as a fragment.
                </p>
                <p className={styles.block_266}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_267}>
                  <span className={styles.text_4}>Correct: Kwaheri. </span>
                  <span className={styles.text_7}>Explanation: greeting </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_4}>Correct: Salaale. </span>
                  <span className={styles.text_7}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_269}>
                  <span className={styles.text_4}>Correct: Kwaheri. </span>
                  <span className={styles.text_7}>Explanation: farewell </span>
                </p>
                <p className={styles.block_270}>
                  Capitalize sentence fragments that sound like the beginning of
                  a sentence. Add end punctuation to sentence fragments that
                  sound like the end of a sentence. For fragments that do not
                  clearly sound like the beginning or end of a sentence, leave
                  out capitalization and punctuation. Note that sentence
                  fragments may be a result of cut-off audio samples.
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_4}>Correct: Uzuri wake ni </span>
                  <span className={styles.text_7}>
                    Explanation: sounds like the beginning of a
                  </span>
                </p>
                <p className={styles.block_272}>
                  sentence with the rest cut off
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_4}>
                    Correct: vigumu sana. Mlikuja lini?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Fragment is the end of a sentence.
                  </span>
                </p>
                <p className={styles.block_274}>
                  Correct: Watu walikuja Watu walikuja wakapiga
                </p>
                <p className={styles.block_275}>makelele.</p>
                <p className={styles.block_276}>
                  Explanation: Repeated beginning of the
                </p>
                <p className={styles.block_277}>sentence.</p>
                <p className={styles.block_278}>
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
                <p className={styles.block_281}>
                  Correct: Watu waliokuja walitoka baada ya
                </p>
                <p className={styles.block_282}>dakika chache tu.</p>
                <p className={styles.block_283}>
                  Incorrect: Watu waliokuja, walitoka baada ya
                </p>
                <p className={styles.block_284}>dakika, chache tu.</p>
                <p className={styles.block_285}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_286}>
                  pauses in these places, do not use a comma.
                </p>
                <p className={styles.block_287}>
                  There are places where commas are allowed or
                </p>
                <p className={styles.block_288}>
                  required, but this example contains neither.
                </p>
                <p className={styles.block_289}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_290}>
                  <span className={styles.text_4}>
                    Correct: Kwa kweli, sipendi hesabu.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Discourse word. Other examples of
                  </span>
                </p>
                <p className={styles.block_291}>
                  discourse words include "lakini", "yaani", "hata
                </p>
                <p className={styles.block_292}>
                  hivyo", "isitoshe", and "aidha".
                </p>
                <p className={styles.block_293}>
                  <span className={styles.text_4}>
                    Correct: Ndio, sipendi hesabu.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: yes/no word{' '}
                  </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.text_4}>
                    Correct: Kwa kweli. Hata mimi sipendi hesabu.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: There is a long pause after "kweli".
                  </span>
                </p>
                <p className={styles.block_295}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_296}>Correct: Ok Google</p>
                <p className={styles.block_297}>
                  Correct: Ok Google, picha ya Nairobi
                </p>
                <p className={styles.block_298}>
                  Correct: Ok Google, nieleze kuhusu historia ya
                </p>
                <p className={styles.block_299}>Kenya.</p>
                <p className={styles.block_300}>
                  Correct: Ok Google, mombasa iko wapi?
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
                <p className={styles.block_303}>
                  <span className={styles.text_4}>Correct: Unawaonaje? </span>
                  <span className={styles.text_7}>
                    Explanation: Syntactically built as a question
                  </span>
                </p>
                <p className={styles.block_304}>with "je" tag at end.</p>
                <p className={styles.block_305}>
                  <span className={styles.text_4}>
                    Correct: hali ya hewa kesho{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Query uses rising intonation, but is
                  </span>
                </p>
                <p className={styles.block_306}>
                  most likely a web search rather than a true
                </p>
                <p className={styles.block_307}>question.</p>
                <p className={styles.block_308}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_4}>Correct: Ala! </span>
                  <span className={styles.text_7}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_310}>
                  <span className={styles.text_4}>Correct: Ala. </span>
                  <span className={styles.text_7}>
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
                <p className={styles.block_313}>
                  Correct: Aliponiona alisema, "mgeni amefika".
                </p>
                <p className={styles.block_314}>
                  Incorrect: Aliponiona alisema, "mgeni amefika."
                </p>
                <p className={styles.block_315}>
                  Incorrect: Aliponiona alisema "mgeni amefika"
                </p>
                <p className={styles.block_316}>
                  Incorrect: Aliponiona alisema "mgeni amefika."
                </p>
                <p className={styles.block_317}>
                  Explanation: The word "sema" is the most
                </p>
                <p className={styles.block_318}>
                  common reported speech verb in Swahili, but
                </p>
                <p className={styles.block_319}>
                  other words ("jibu", "nena", "dakiza", "teta",
                </p>
                <p className={styles.block_320}>
                  "dokeza") can be used for reported speech.
                </p>
                <p className={styles.block_321}>Correct: Sema "asante".</p>
                <p className={styles.block_322}>Incorrect: Sema, "asante".</p>
                <p className={styles.block_323}>
                  Explanation: Omit the comma if the verb is in
                </p>
                <p className={styles.block_324}>the imperative.</p>
                <p className={styles.block_325}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_326}>
                  Correct: Mkutubi alisema, "Mkipiga kelele
                </p>
                <p className={styles.block_327}>nitawatimua hapa mbio."</p>
                <p className={styles.block_328}>
                  Incorrect: Mkutubi alisema, "mkipiga kelele
                </p>
                <p className={styles.block_329}>nitawatimua hapa mbio".</p>
                <p className={styles.block_330}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_331}>
                  as a sentence. Do not add excess punctuation.
                </p>
                <p className={styles.block_332}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_333}>
                  Correct: Kutafsiri kwa Kizungu: Ninakupenda
                </p>
                <p className={styles.block_334}>Malaika.</p>
                <p className={styles.block_330}>
                  Explanation: The quote follows the command,
                </p>
                <p className={styles.block_335}>so use a colon.</p>
                <p className={styles.block_336}>
                  Correct: Tunasemaje "Ninakupenda Malaika."
                </p>
                <p className={styles.block_337}>kwa Kiingereza?</p>
                <p className={styles.block_338}>
                  Explanation: The quote is in the middle of a
                </p>
                <p className={styles.block_339}>
                  sentence, so use quotation marks.
                </p>
                <p className={styles.block_340}>
                  Correct: Tuma barua kwa rukia@gmail.com
                </p>
                <p className={styles.block_341}>isemayo: Dada, umeshindaje?</p>
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
                <p className={styles.block_345}>
                  Correct: Hii ni bei gani {`{alama ya swali}`}
                </p>
                <p className={styles.block_346}>Incorrect: Hii ni bei gani?</p>
                <p className={styles.block_347}>
                  Incorrect: Hii ni bei gani alama ya swali
                </p>
                <p className={styles.block_348}>
                  Incorrect: Hii ni bei gani alama ya swali?
                </p>
                <p className={styles.block_349}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    hii ni bei gani alama ya swali{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_350}>
                  Correct: Haya {`{kikomo} {kikomo} {kikomo}`}
                </p>
                <p className={styles.block_351}>Incorrect: Haya...</p>
                <p className={styles.block_352}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    haya kikomo kikomo kikomo{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_353}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_354}>
                  Correct: Nyumba yangu ni 4-A.
                </p>
                <p className={styles.block_355}>
                  Incorrect: Nyumba yangu ni 4 {`{kisitari}`} A.
                </p>
                <p className={styles.block_356}>
                  Incorrect: I live in apartment four {`{dash}`} A.
                </p>
                <p className={styles.block_357}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    nyumba yangu ni nne kisitari a{' '}
                  </span>
                </p>
                <p className={styles.block_358}>"</p>
                <p className={styles.block_359}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_360}>Correct: {`{kikomo}`}</p>
                <p className={styles.block_361}>Correct: {`{mkato}`}</p>
                <p className={styles.block_362}>
                  Treat spoken punctuation as you would regular symbols, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_363}>
                  Correct: Ninaenda sasa {`{kikomo}`} Niite ukifike
                </p>
                <p className={styles.block_364}>{`{kikomo}`}</p>
                <p className={styles.block_365}>
                  Incorrect: Ninaenda sasa {`{kikomo}`} niite ukifika
                </p>
                <p className={styles.block_366}>kikomo</p>
                <p className={styles.block_367}>
                  Incorrect: I'm leaving now period How long is
                </p>
                <p className={styles.block_368}>the drive?</p>
                <p className={styles.block_369}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    ninaenda sasa kikomo niite{' '}
                  </span>
                </p>
                <p className={styles.block_370}>
                  <span className={styles.text_1}>ukifika kikomo </span>
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
