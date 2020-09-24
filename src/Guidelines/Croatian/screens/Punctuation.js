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
    'fragment-versus-sentences',
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
            <PageContentHeader currentPage="Longform Croatian" />

            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <p className={'text'}>
                <span className={styles.text_2}>
                  Follow the punctuation regulations of your locale. Additional
                  conventions are outlined in{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>this section.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="fragment-versus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={styles.block_86}>
                  <span className={styles.text_17}>
                    Add punctuation where needed, but err on the side of keeping
                    it minimal.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_2}>
                    Sometimes a phrase which is not obviously grammatically a
                    sentence should{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    nevertheless be treated as a sentence because of its
                    context, e.g. if it's an answer to a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    specific question, or if it's an example where dropping the
                    subject sounds completely{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    natural as a complete sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_180}>
                  <span className={styles.calibre2}>
                    Correct: Tko je taj za koga misliš da proizvodi buku?
                    Susjed.
                  </span>
                </p>
                <p className={styles.block_181}>
                  <span className={styles.calibre2}>
                    Explanation: Two speakers. "Susjed." is an answer to a
                    specific question.
                  </span>
                </p>
                <p className={styles.block_182}>
                  <span className={styles.text_24}>Correct: susjed </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: No context to suggest this is a sentence;
                      treat it as a fragment.
                    </span>
                  </span>
                </p>
                <p className={styles.block_183}>
                  <span className={styles.text_24}>
                    Correct: Dolaziš na zabavu sutra?{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Dropping the subject and main verb here
                      sounds natural as a complete
                    </span>
                  </span>
                </p>
                <p className={styles.block_184}>
                  sentence. Punctuate as sentence.
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_24}>
                    Correct: pranje štenadi u kadi{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Sounds like a web search as opposed to a
                      dropped subject. Punctuate as
                    </span>
                  </span>
                </p>
                <p className={styles.block_186}>fragment.</p>
                <p className={styles.block_187}>
                  <span className={styles.text_24}>
                    Correct: Idem do tipa vrata do.{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Dropping the subject here sounds natural as a
                      complete sentence. Punctuate as
                    </span>
                  </span>
                </p>
                <p className={styles.block_188}>sentence.</p>
                <p className={styles.block_189}>
                  <span className={styles.text_2}>
                    Interjections, greetings, and farewells said in isolation
                    should be considered complete{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentences and punctuated as such.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_190}>
                  <span className={styles.text_24}>Correct: K vragu. </span>
                  <span className={styles.text_25}>
                    Explanation: interjection{' '}
                  </span>
                  <span className={styles.text_24}>Correct: Bog. </span>
                  <span className={styles.text_25}>Explanation: greeting </span>
                </p>
                <p className={styles.block_191}>
                  <span className={styles.text_24}>Correct: Zdravo. </span>
                  <span className={styles.text_25}>Explanation: greeting </span>
                </p>
                <p className={styles.block_192}>
                  <span className={styles.text_24}>Correct: Adio. </span>
                  <span className={styles.text_25}>Explanation: greeting </span>
                </p>
                <p className={styles.block_193}>
                  <span className={styles.text_24}>Correct: Vidimo se. </span>
                  <span className={styles.text_25}>Explanation: greeting </span>
                </p>
                <p className={styles.block_194}>
                  <span className={styles.text_24}>
                    Correct: Pozdrav mom najboljem prijatelju.{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Here, the entire sentence is being used as an
                      interjection.
                    </span>
                  </span>
                </p>
                <p className={styles.block_195}>
                  <span className={styles.text_17}>
                    Below are some examples of common interjections.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ah</span>
                </p>
                <p className={styles.block_196}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>oh </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>hehe </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>he </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>hura </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>jao </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>joj </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>oho </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>uh </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>uf </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ijuju </span>
                </p>
                <p className={styles.block_197}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>haj </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>eh </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ehe </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>iš </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>đija </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>mic </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ej </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>de </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>hej </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>oj </span>
                </p>
                <p className={styles.block_198}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>ej </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>o </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>hajde </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>na </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>halo </span>
                </p>
                <p className={styles.block_199}>
                  <span className={styles.text_2}>
                    Capitalize sentence fragments that sound like the beginning
                    of a sentence. Add end{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation to sentence fragments that sound like the end of
                    a sentence. For fragments{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    that do not clearly sound like the beginning or end of a
                    sentence, leave out capitalization{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    and punctuation. Note that sentence fragments may be a
                    result of cut-off audio{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>samples.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_200}>
                  <span className={styles.text_24}>
                    Correct: Što misliš? Nije da{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Begins as complete sentence and ends
                      mid-stream.
                    </span>
                  </span>
                </p>
                <p className={styles.block_201}>
                  <span className={styles.text_24}>
                    Correct: puno teže. Nema smisla.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Fragment is the end of a sentence.
                  </span>
                </p>
                <p className={styles.block_202}>
                  <span className={styles.text_24}>
                    Correct: puno teže. Nema smisla.{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Begins mid-stream but ends completely; part
                      of complete sentence.
                    </span>
                  </span>
                </p>
                <p className={styles.block_203}>
                  <span className={styles.calibre2}>
                    Correct: stvarno teško, tako da se ne obeshrabruješ.
                  </span>
                </p>
                <p className={styles.block_204}>
                  <span className={styles.calibre2}>
                    Correct: Idem u kafić. Naručiti ću Koliko košta cappuccino?
                  </span>
                </p>
                <p className={styles.block_205}>
                  Explanation: Audio was cut off at the beginning.
                </p>
                <p className={styles.block_206}>
                  <span className={styles.calibre2}>
                    Explanation: Do not put a period, hyphen, or ellipsis, even
                    if another sentence follows.
                  </span>
                </p>
                <p className={styles.block_207}>
                  <span className={styles.text_24}>
                    Correct: Koliko je Gdje je{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Both sound like beginnings of sentences.
                    </span>
                  </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.text_24}>
                    Correct: Gdje je Gdje je plaža?{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Repeated beginning of the sentence.
                    </span>
                  </span>
                </p>
                <p className={styles.block_209}>
                  <span className={styles.text_24}>
                    Correct: smo odlazili ali smo onda odlučili da{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Sounds like the middle of a sentence;
                      beginning and end were cut off.
                    </span>
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_2}>
                    If an utterance is not clearly a sentence according to the
                    above rules and examples, do{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    not capitalize or punctuate it as a sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={styles.block_212}>
                  <span className={styles.text_2}>
                    Only use commas where required. Err on the side of minimal
                    punctuation. Do not rely on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>intonation.</span>
                </p>
                <p className={styles.block_213}>
                  <span className={styles.text_24}>
                    Correct: Gdje je najbliža benzinska postaja?{' '}
                  </span>
                  <span className={styles.text_25}>
                    Incorrect: Gdje je, najbliža, benzinska postaja?
                  </span>
                </p>
                <p className={styles.block_214}>
                  <span className={styles.calibre2}>
                    Correct: On je uključio glazbu a ja sam prala posuđe.
                  </span>
                </p>
                <p className={styles.block_215}>
                  <span className={styles.calibre2}>
                    Incorrect: On je uključio glazbu a, ja, sam prala posuđe.
                  </span>
                </p>
                <p className={styles.block_216}>
                  <span className={styles.calibre2}>
                    Explanation: Even if the speaker uses long pauses in these
                    places, do not use a comma. There are places where commas
                    are allowed or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_217}>
                  <span className={styles.text_2}>
                    Use a comma when a sentence starts with a discourse word,
                    interjection, or yes/no{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    word. However: If there is a long pause between a discourse
                    word, interjection, or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    yes/no word and a full sentence that follows it, treat that
                    initial word as a separate{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>sentence.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_218}>
                  <span className={styles.text_24}>
                    Correct: Pa, mislio sam da imam društvo.{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Discourse word. Other examples of discourse
                      words in Croatian include "ali",
                    </span>
                  </span>
                </p>
                <p className={styles.block_219}>
                  "tako da", "u stvari", and "također".
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_24}>
                    Correct: Zapravo, vrlo je glup.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Discourse word.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Correct: Nažalost, Toni ne može doći.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Discourse word.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Correct: Strašno, ni mi to nismo znali.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Discourse word.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Correct: Hura, pobijedili smo ih!{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Interjection.
                  </span>
                </p>
                <p className={styles.block_201}>
                  <span className={styles.text_24}>
                    Correct: Joj, samo da nas ne ugleda.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Interjection.{' '}
                  </span>
                </p>
                <p className={styles.block_193}>
                  <span className={styles.text_24}>
                    Correct: Hajde, iš, bježi odavdje!{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Interjection.{' '}
                  </span>
                </p>
                <p className={styles.block_193}>
                  <span className={styles.text_24}>
                    Correct: Hej, ne pretvaraj se!{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Interjection.{' '}
                  </span>
                </p>
                <p className={styles.block_192}>
                  <span className={styles.text_24}>
                    Correct: Oprosti, draga.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Interjection.{' '}
                  </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.text_24}>
                    Correct: Da, radim to.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Yes/no word.{' '}
                  </span>
                  <span className={styles.text_24}>
                    Correct: Naravno, mogu to uraditi.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: No pause after "naravno".{' '}
                  </span>
                  <span className={styles.text_24}>
                    Correct: Naravno. Mogu to uraditi.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Substantial pause after "naravno".{' '}
                  </span>
                  <span className={styles.text_24}>
                    Correct: Dakle. To je stvarno lijepo.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Substantial pause after "dakle".
                  </span>
                </p>
                <p className={styles.block_222}>
                  <span className={styles.text_2}>
                    The phrase "Ok Google" in isolation is transcribed without a
                    comma or end punctuation.{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    When the phrase appears before longer utterances, place a
                    comma after "Google".
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: Ok Google</p>
                <p className={styles.block_94}>
                  Correct: Ok Google, slike otoka Raba
                </p>
                <p className={styles.block_138}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, pokaži mi Deanove{' '}
                  </span>
                </p>
                <p className={styles.block_173}>informacije.</p>
                <p className={styles.block_93}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, kada je ove godine Dan
                  </span>
                </p>
                <p className={styles.block_133}>hrvatskih branitelja?</p>
                <p className={styles.block_93}>
                  Correct: Ok Google, uključi GPS.
                </p>
                <p className={styles.block_94}>
                  Correct: Ok Google, put do najbliže ljekarne
                </p>
                <p className={styles.block_94}>
                  Correct: Ok Google, gdje je Gunja?
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={styles.block_224}>
                  <span className={styles.text_2}>
                    Capitalize and punctuate the following as questions: 1) All
                    queries syntactically built as{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    questions, regardless of intonation. 2) All queries which
                    sound like they are being used{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    as questions, regardless of sentence structure.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_24}>
                    Correct: Jesi li ti ozbiljan?{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Syntactically built as a question, so
                      punctuate as a question regardless of
                    </span>
                  </span>
                </p>
                <p className={styles.block_226}>intonation.</p>
                <p className={styles.block_227}>
                  <span className={styles.text_24}>Correct: Kako si? </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Syntactically built as a question, so
                      punctuate as a question regardless of
                    </span>
                  </span>
                </p>
                <p className={styles.block_228}>intonation.</p>
                <p className={styles.block_229}>
                  <span className={styles.text_24}>
                    Correct: U 3:00 ujutro?{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Rising intonation suggests it is a question,
                      so punctuate as a question regardless
                    </span>
                  </span>
                </p>
                <p className={styles.block_230}>of structure.</p>
                <p className={styles.block_193}>
                  <span className={styles.text_24}>
                    Correct: Nećeš tako, ha?{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: Utterance uses rising intonation.
                  </span>
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_24}>
                    Correct: vrijeme u Zadru{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Query uses rising intonation, but is most
                      likely a web search rather than a true
                    </span>
                  </span>
                </p>
                <p className={styles.block_232}>question.</p>
                <p className={styles.block_233}>
                  <span className={styles.text_2}>
                    If a speaker uses clearly exclamatory intonation, use an
                    exclamation point. If there is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    any doubt, err on the side of using period.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_234}>
                  <span className={styles.text_24}>Correct: Joj! </span>
                  <span className={styles.text_25}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_235}>
                  <span className={styles.text_26}>Correct: Joj. </span>
                  <span className={styles.text_27}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                  <span className={styles.text_29}> </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={styles.block_236}>
                  <span className={styles.text_17}>
                    Use Croatian quotation marks „”.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_237}>
                  <span className={styles.text_2}>
                    Use a comma between reported speech verbs and direct
                    quotations. Do not put{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation within quotation marks unless the punctuation
                    belongs to the reported{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>speech.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.calibre2}>
                    Correct: Moj prijatelj je rekao, „aligator korkodil”.
                  </span>
                </p>
                <p className={styles.block_239}>
                  <span className={styles.calibre2}>
                    Explanation: The word "reći" is the most common reported
                    speech verb in Croatian, but other words ("pitati",
                    "odgovoriti") can be used for reported speech.
                  </span>
                </p>
                <p className={styles.block_240}>
                  <span className={styles.calibre2}>
                    Incorrect: Moj prijatelj je rekao, „aligator
                  </span>
                </p>
                <p className={styles.block_241}>korkodil.”</p>
                <p className={styles.block_140}>
                  <span className={styles.calibre2}>
                    Incorrect: Moj prijatelj je rekao „aligator
                  </span>
                </p>
                <p className={styles.block_242}>korkodil.”</p>
                <p className={styles.block_92}>
                  <span className={styles.calibre2}>
                    Incorrect: Moj prijatelj je rekao „aligator
                  </span>
                </p>
                <p className={styles.block_242}>korkodil”.</p>
                <p className={styles.block_94}>
                  Correct: „Da li dolaziš?”, rekao je.
                </p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: Pitati ću te još jednom, „Koga si
                  </span>
                </p>
                <p className={styles.block_243}>udario?”</p>
                <p className={styles.block_244}>
                  <span className={styles.text_2}>
                    If the text in quotation marks qualifies as a sentence,
                    punctuate as if it were its own{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    utterance. Do not alter its end punctuation even if the
                    quote is within a sentence. Do not{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    add excess punctuation after end quotation marks.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_245}>
                  <span className={styles.text_24}>
                    Correct: Ana je rekla, „Nađimo se u 3:00.”{' '}
                  </span>
                  <span className={styles.text_25}>
                    Incorrect: Ana je rekla, „Nađimo se u 3:00.”.
                  </span>
                </p>
                <p className={styles.block_246}>
                  Correct: Jane je pitala, „Nalazimo li se u 3:00?”
                </p>
                <p className={styles.block_247}>
                  <span className={styles.calibre2}>
                    Incorrect: Jane je pitala, „nalazimo li se u 3:00?”.
                  </span>
                </p>
                <p className={styles.block_248}>
                  Correct: Da li je Jane rekla, „Nađimo se tamo.”
                </p>
                <p className={styles.block_249}>
                  <span className={styles.calibre2}>
                    Incorrect: Da li je Jane rekla, „Nađimo se tamo.”?
                  </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.calibre2}>
                    Explanation: The text in quotation marks qualifies as a
                    sentence. Do not add excess punctuation.
                  </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.calibre2}>
                    Correct: Josh je rekao, „Biti ću tamo. Obećajem.” bez da je
                    provjerio svoj kalendar.
                  </span>
                </p>
                <p className={styles.block_252}>Correct: Reci „onomatopeja”.</p>
                <p className={styles.block_146}>
                  Incorrect: Reci, „onomatopeja”.
                </p>
                <p className={styles.block_253}>
                  <span className={styles.calibre2}>
                    Explanation: The text in quotation marks qualifies as
                    sentences. Do not alter its end punctuation even though the
                    quote is within a sentence.
                  </span>
                </p>
                <p className={styles.block_254}>
                  <span className={styles.calibre2}>
                    Explanation: Omit the comma if the verb is in the
                    imperative.
                  </span>
                </p>
                <p className={styles.block_255}>
                  <span className={styles.text_2}>
                    Use a colon but no quotation marks in quotative voice
                    actions when the quote follows{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the command. Use quotation marks when the quote is in the
                    middle of the sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_24}>
                    Correct: Prevedite na francuskom: Kako si?{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: The quote follows the command, so use a
                      colon.
                    </span>
                  </span>
                </p>
                <p className={styles.block_257}>
                  <span className={styles.calibre2}>
                    Correct: Prevedite „Kako se zoveš?” na francuskom.
                  </span>
                </p>
                <p className={styles.block_258}>
                  <span className={styles.calibre2}>
                    Correct: Kako se kaže „Volim te.” na francuskom?
                  </span>
                </p>
                <p className={styles.block_259}>
                  <span className={styles.calibre2}>
                    Incorrect: Kako se kaže, „Volim te.” na francuskom?
                  </span>
                </p>
                <p className={styles.block_260}>
                  <span className={styles.calibre2}>
                    Correct: Za example@gmail.com: Hej, kako ti je prošao dan?
                  </span>
                </p>
                <p className={styles.block_261}>
                  <span className={styles.calibre2}>
                    Explanation: The quote is in the middle of a sentence, so
                    use quotation marks.
                  </span>
                </p>
                <p className={styles.block_262}>
                  <span className={styles.calibre2}>
                    Explanation: Omit commas after "kazati" verbs in translation
                    requests.
                  </span>
                </p>
                <p className={styles.block_263}>
                  <span className={styles.calibre2}>
                    Correct: Pošalji email za example@gmail.com
                  </span>
                </p>
                <p className={styles.block_264}>
                  <span className={styles.calibre2}>
                    sa sljedećim tekstom: Hej, kako ti je prošao
                  </span>
                </p>
                <p className={styles.block_265}>dan?</p>
                <p className={styles.block_94}>
                  Correct: Prevedi „večer” na njemački.
                </p>
                <p className={styles.block_93}>
                  Correct: Pošalji e-mail poruku Johnu: Kasnim.
                </p>
                <p className={styles.block_94}>
                  Correct: Aktualiziraj Google+: Radim od kuće.
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={styles.block_267}>
                  <span className={styles.text_2}>
                    Apart from the English letters a through z, you should not
                    use any other symbol than: 0-
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    9 äàáčćđéèëüšüžÄÀÁČĆĐÉÈËÑŠÜŽ²³,?!~^\'"„”_°:.()&lt;&gt;{}
                    []√/@#$€£+=%*&amp;-.;
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.text_17}>
                    Transcribe apostrophes as they are normally used.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_163}>Correct: McDonald's</p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>
                  <span className={styles.text_}>Spoken punctuation</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_270}>
                  <span className={styles.text_2}>
                    For sentence-level spoken punctuation, write out the full
                    word or words between curly{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    brackets. Do not add punctuation symbols after spoken
                    punctuation. Be careful with{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    homonyms. (See exceptions in the next rule.)
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_24}>
                    Correct: Kako si {`{upitnik}`}{' '}
                  </span>
                  <span className={styles.text_25}>Incorrect: Kako si? </span>
                </p>
                <p className={styles.block_272}>Incorrect: Kako si upitnik</p>
                <p className={styles.block_273}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>kako si upitnik </span>
                  <span className={styles.text_18}>"</span>
                </p>
                <p className={styles.block_274}>Incorrect: Kako si upitnik?</p>
                <p className={styles.block_275}>
                  <span className={styles.text_24}>
                    Correct: U redu {`{točka} {točka} {točka}`}{' '}
                  </span>
                  <span className={styles.text_25}>
                    Incorrect: U redu točka točka točka{' '}
                  </span>
                </p>
                <p className={styles.block_276}>Incorrect: U redu...</p>
                <p className={styles.block_277}>
                  <span className={styles.text_24}>
                    Correct: {`{početak citata}`} spoj {`{kraj citata}`}{' '}
                  </span>
                  <span className={styles.text_25}>Incorrect: „spoj“ </span>
                </p>
                <p className={styles.block_278}>Correct: {`{oznaka smiley}`}</p>
                <p className={styles.block_279}>Incorrect: :-)</p>
                <p className={styles.block_280}>Incorrect: oznaka smiley</p>
                <p className={styles.block_281}>
                  <span className={styles.calibre2}>
                    Correct: Zdravo {`{zarez}`} kako si {`{upitnik}`} Dobro sam{' '}
                    {`{točka}`}
                  </span>
                </p>
                <p className={styles.block_282}>
                  Incorrect: Zdravo, kako si? Dobro sam.
                </p>
                <p className={styles.block_283}>
                  <span className={styles.calibre2}>
                    Correct: Rekao mi je, {`{početak citata}`} Nemoj donijeti
                    mačku.{' '}
                    {`{kraj
          citata}`}
                  </span>
                </p>
                <p className={styles.block_284}>
                  Incorrect: Rekao mi je, „Nemoj donijeti mačku.”
                </p>
                <p className={styles.block_285}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    u redu točka točka točka{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_286}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    početak citata spoj kraj citata{' '}
                  </span>
                  <span className={styles.text_18}>" Example audio: " </span>
                  <span className={styles.text_23}>oznaka smiley </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_287}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      zdravo zarez kako si upitnik dobro sam točka
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_288}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      rekao mi je početak citata nemoj donijeti mačku kraj
                      citata
                    </span>
                  </span>
                  <span className={styles.text_18}>"</span>
                </p>
                <p className={styles.block_289}>
                  <span className={styles.text_2}>
                    Don't spell out internal punctuation like hyphens in web
                    pages, email addresses,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    addresses, phone numbers, or other word-level punctuation.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_290}>Correct: Živim u stanu 4-A.</p>
                <p className={styles.block_291}>
                  Incorrect: Živim u stanu 4 povlaka A. Incorrect: Živim u stanu
                  4{`{povlaka}`} A.
                </p>
                <p className={styles.block_292}>Correct: www.fake-domain.com</p>
                <p className={styles.block_293}>
                  <span className={styles.calibre2}>
                    Incorrect: www {`{točka}`} fake{` {crta}`} domain{' '}
                    {`{točka} `}
                    com
                  </span>
                </p>
                <p className={styles.block_294}>
                  Correct: Ona je glumica/model.
                </p>
                <p className={styles.block_295}>
                  Incorrect: Ona je glumica kosa crta model. Incorrect: Ona je
                  glumica
                  {`{kosa crta}`} model.
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    živim u stanu četiri povlaka a{' '}
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      w w w točka fake crta domain točka com
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_298}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      ona je glumica kosa crta model{' '}
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_299}>
                  <span className={styles.calibre2}>
                    Explanation: We consider slash to be word-level punctuation.
                  </span>
                </p>
                <p className={styles.block_300}>
                  <span className={styles.text_2}>
                    If a word that can refer to a punctuation mark is spoken in
                    isolation, it should be written{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    out between curly brackets.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: {`{dvotočka}`}</p>
                <p className={styles.block_94}>Correct: {`{donja crta}`}</p>
                <p className={styles.block_93}>Correct: {`{ upitnik }`}</p>
                <p className={styles.block_94}>Correct: {`{točka}`}</p>
                <p className={styles.block_301}>
                  <span className={styles.text_2}>
                    Treat spoken punctuation as you would regular symbols, and
                    capitalize the following{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>sentence as normal.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_302}>
                  Correct: Sada idem {`{točka}`} Koliko traje vožnja?
                </p>
                <p className={styles.block_303}>
                  <span className={styles.calibre2}>
                    Incorrect: Sada idem {`{točka}`} koliko traje vožnja?
                  </span>
                </p>
                <p className={styles.block_304}>
                  Incorrect: Sada idem točka Koliko traje vožnja?
                </p>
                <p className={styles.block_305}>
                  <span className={styles.calibre2}>
                    Correct: Mary Sue je večeras u bolnici kod Jerryja a ja
                    očekujem važan telefonski poziv {`{točka}`} Dok čekam poziv,
                    mogu li ti dovesti Jordana na čuvanje {`{upitnik}`}
                  </span>
                </p>
                <p className={styles.block_306}>
                  <span className={styles.calibre2}>
                    Incorrect: Mary Sue je večeras u bolnici kod Jerryja a ja
                    očekujem važan telefonski poziv {`{točka}`} dok čekam poziv,
                    mogu li ti dovesti Jordana na čuvanje{` {upitnik}`}
                  </span>
                </p>
                <p className={styles.block_307}>
                  <span className={styles.calibre2}>
                    Incorrect: Mary Sue je večeras u bolnici kod Jerryja a ja
                    očekujem važan telefonski poziv točka Dok čekam poziv, mogu
                    li ti dovesti Jordana na čuvanje upitnik
                  </span>
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      sada idem točka koliko traje vožnja
                    </span>
                  </span>
                  <span className={styles.text_18}>" </span>
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
