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
            <PageContentHeader currentPage="Longform Polish" />

            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <p className={styles.block_176}>
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
                <p className={styles.block_178}>
                  <span className={styles.text_23}>
                    Add punctuation where needed, but err on the side of keeping
                    it minimal.
                  </span>
                  <span className={styles.text_19}> </span>
                  <span className={styles.text_23}>
                    Full sentences should start with an uppercase letter and end
                    with a punctuation mark.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_179}>
                  <span className={styles.text_23}>
                    In general, a complete sentence contains a subject and a
                    verb.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_180}>
                  <span className={styles.text_21}>
                    Correct: Piotr pracuje dzisiaj z domu.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Includes subject (Piotr) and verb (pracuje).
                    </span>
                  </span>
                </p>
                <p className={styles.block_181}>
                  <span className={styles.text_21}>
                    Correct: Ala wyszła na spacer z psem.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Includes subject (Ala) and verb (wyszła).
                    </span>
                  </span>
                </p>
                <p className={styles.block_182}>
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
                <p className={styles.block_183}>
                  <span className={styles.calibre2}>
                    Correct: O kim mówisz? O tym facecie z domu obok.
                  </span>
                </p>
                <p className={styles.block_184}>
                  <span className={styles.calibre2}>
                    Explanation: The phrase "O tym facecie z domu obok" is an
                    answer to a specific question. Punctuate as sentence.
                  </span>
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_21}>
                    Correct: o tym facecie z domu obok{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: No context to suggest this is a sentence;
                      treat it as a fragment.
                    </span>
                  </span>
                </p>
                <p className={styles.block_186}>
                  <span className={styles.text_21}>
                    Correct: Idziesz jutro do szkoły?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Dropping the subject here sounds natural as a
                      complete sentence. Punctuate as
                    </span>
                  </span>
                </p>
                <p className={styles.block_187}>sentence.</p>
                <p className={styles.block_188}>
                  <span className={styles.calibre2}>
                    Correct: Jutro wyjazd, a ty wciąż niespakowana.
                  </span>
                </p>
                <p className={styles.block_189}>
                  <span className={styles.calibre2}>
                    Explanation: Dropping the main verb here sounds natural as a
                    complete sentence. Punctuate as sentence.
                  </span>
                </p>
                <p className={styles.block_190}>
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
                <p className={styles.block_191}>
                  <span className={styles.text_21}>Correct: Ach! </span>
                  <span className={styles.text_22}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_192}>
                  <span className={styles.text_21}>Correct: Cześć! </span>
                  <span className={styles.text_22}>Explanation: greeting </span>
                </p>
                <p className={styles.block_193}>
                  <span className={styles.text_2}>
                    Do not capitalize or punctuate phrases that are intended to
                    be used by the speaker as a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    web search, not as full sentences.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>
                  Correct: jak gotować ziemniaki
                </p>
                <p className={styles.block_150}>
                  Incorrect: Jak gotować ziemniaki.
                </p>
                <p className={styles.block_194}>
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
                </p>
                <p className={styles.block_195}>
                  <span className={styles.text_21}>
                    Correct: Jak myślisz? Może to jest{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Begins as complete sentence and ends
                      mid-stream.
                    </span>
                  </span>
                </p>
                <p className={styles.block_196}>
                  <span className={styles.text_21}>
                    Correct: dużo trudniejsze. To nie ma sensu.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Sentence-final fragment begins mid-stream.
                    </span>
                  </span>
                </p>
                <p className={styles.block_197}>
                  <span className={styles.text_21}>
                    Correct: bardzo trudne więc nie poddawaj się.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Audio was cut off at the beginning.
                  </span>
                </p>
                <p className={styles.block_198}>
                  <span className={styles.text_21}>
                    Correct: Ile kosztuje ten Gdzie jest ta{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Both sound like beginnings of sentences.
                    </span>
                  </span>
                </p>
                <p className={styles.block_199}>
                  <span className={styles.text_21}>
                    Correct: Gdzie jest Gdzie jest plaża?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Repeated beginning of the sentence.
                    </span>
                  </span>
                </p>
                <p className={styles.block_200}>
                  <span className={styles.calibre2}>
                    Correct: jak wychodziliśmy ale pózniej zdecydowaliśmy żeby
                  </span>
                </p>
                <p className={styles.block_201}>
                  <span className={styles.calibre2}>
                    Explanation: Sounds like the middle of a sentence; beginning
                    and end were cut off.
                  </span>
                </p>
                <p className={styles.block_202}>
                  <span className={styles.text_2}>
                    A voice action is a query where the user requests a specific
                    action that a smartphone{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    can complete. The action requested is generally expressed by
                    a trigger (most often a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    verb describing the action to be performed, but it can also
                    be any other part of speech{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_203}>
                  <span className={styles.text_2}>
                    denoting a change of state of the device or of an app). If a
                    voice action sounds{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    complete, it should be capitalized and punctuated as a full
                    sentence. In contrast to a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    voice action, a web search is a query where the user does
                    not request a specific action{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    that a smartphone can complete. Web searches are more often,
                    but not always, spoken{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>as true fragments.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>Correct: Zadzwoń do Ula.</p>
                <p className={styles.block_168}>
                  Correct: Wyślij SMS-a do Adaś: Hej, co u ciebie?
                </p>
                <p className={styles.block_139}>
                  Correct: Przypomnij mi, by kupić mleko.
                </p>
                <p className={styles.block_139}>
                  Correct: Nastaw budzik na 9:00.
                </p>
                <p className={styles.block_91}>
                  Correct: Pokaż trasę Zamość - Francja.
                </p>
                <p className={styles.block_139}>Correct: Włącz głos.</p>
                <p className={styles.block_139}>Correct: Uruchom muzykę.</p>
                <p className={styles.block_204}>
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
                <p className={styles.block_206}>
                  <span className={styles.text_2}>
                    Only use commas where required. Err on the side of minimal
                    punctuation. Do not rely on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>intonation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_207}>
                  <span className={styles.calibre2}>
                    Correct: Gdzie jest najbliższa stacja benzynowa?
                  </span>
                </p>
                <p className={styles.block_208}>
                  <span className={styles.calibre2}>
                    Incorrect: Gdzie jest, najbliższa, stacja benzynowa?
                  </span>
                </p>
                <p className={styles.block_209}>
                  <span className={styles.calibre2}>
                    Explanation: Even if the speaker uses long pauses in these
                    places, do not use a comma. There are places where commas
                    are allowed or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_2}>
                    For complete sentences that follow a single word or phrase
                    that focuses the meaning of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    a sentence, put a comma after the single word or phrase.
                  </span>
                </p>
                <p className={styles.block_211}>
                  <span className={styles.text_21}>
                    Correct: Wrocławskie ZOO, czy jest zamknięte?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Wrocławskie ZOO is a phrase that focuses the
                      meaning of the sentence.
                    </span>
                  </span>
                </p>
                <p className={styles.block_212}>
                  <span className={styles.text_2}>
                    Put a comma after common sentence openers such as
                    prepositional phrases,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    adverbials, and introductory clauses.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_213}>
                  <span className={styles.text_21}>
                    Correct: Popatrz, ona tam idzie.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: introductory clause{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: Chodź, pokażę ci coś.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: introductory clause{' '}
                  </span>
                </p>
                <p className={styles.block_214}>
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
                <p className={styles.block_215}>
                  <span className={styles.text_21}>
                    Correct: Oczywiście, mogę się tym zająć.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: yes/no word{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: Tak, chciałbym.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: yes/no word{' '}
                  </span>
                </p>
                <p className={styles.block_216}>
                  <span className={styles.calibre2}>
                    Correct: Przepraszam, czy mogę w czymś pomóc?
                  </span>
                </p>
                <p className={styles.block_217}>
                  <span className={styles.text_23}>Use commas in lists.</span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_218}>
                  <span className={styles.calibre2}>
                    Correct: Z góry dochodziły odgłosy szmerów, pisków,
                    trzasków.
                  </span>
                </p>
                <p className={styles.block_219}>
                  Explanation: Interjection Explanation: list of nouns
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_2}>
                    Use commas for non-restrictive modifiers, but do not use
                    commas for restrictive{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    modifiers. The basic test for this is whether the modifier
                    can be dropped from the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence and still keep basically the same meaning.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.calibre2}>
                    Correct: Prezydent Polski, Bronisław Komorowski, był na
                    konferencji.
                  </span>
                </p>
                <p className={styles.block_222}>
                  <span className={styles.calibre2}>
                    Correct: Prezydent wybrany przez nas w 2008 roku został
                    nagrodzony w 2009.
                  </span>
                </p>
                <p className={styles.block_223}>
                  <span className={styles.calibre2}>
                    Explanation: Non-restrictive modifier. "Bronisław
                    Komorowski" does not change the core meaning of "prezydent
                    Polski", it just adds additional information about the
                    Polish president.
                  </span>
                </p>
                <p className={styles.block_224}>
                  <span className={styles.calibre2}>
                    Explanation: Unless there are significant pauses after
                    "prezydent" and "2008", you should assume this is a
                    restrictive modifier.
                  </span>
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_2}>
                    Do not use commas or other punctuation marks in sign-offs,
                    such as those at the end of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    a message. Do not use end punctuation.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>Correct: Pozdrawiam Alicja</p>
                <p className={styles.block_150}>
                  Incorrect: Pozdrawiam, Alicja
                </p>
                <p className={styles.block_139}>
                  Correct: Z wyrazami szacunku Joanna
                </p>
                <p className={styles.block_150}>
                  Incorrect: Z wyrazami szacunku Joanna.
                </p>
                <p className={styles.block_139}>
                  Correct: Z wyrazami poważania Marek
                </p>
                <p className={styles.block_226}>
                  <span className={styles.text_2}>
                    If a greeting occurs in isolation or is followed by a
                    substantial pause, treat it as a full{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence. Otherwise, separate it from the rest of the
                    sentence with commas.
                  </span>
                </p>
                <p className={styles.block_168}>Correct: Dzień dobry.</p>
                <p className={styles.block_139}>
                  Correct: Dzień dobry, Alicjo.
                </p>
                <p className={styles.block_139}>
                  Correct: Dzień dobry, tu Karolina.
                </p>
                <p className={styles.block_227}>
                  <span className={styles.text_21}>
                    Correct: Aniu, dzień dobry, tu Alicja.{' '}
                  </span>
                  <span className={styles.text_22}>Explanation: no pause </span>
                </p>
                <p className={styles.block_228}>
                  <span className={styles.text_21}>
                    Correct: Aniu, dzień dobry. Tu Karolina.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Substantial pause between "dzień dobry" and
                      "Tu Karolina". Treat as separate
                    </span>
                  </span>
                </p>
                <p className={styles.block_229}>sentences.</p>
                <p className={styles.block_230}>
                  <span className={styles.text_24}>
                    Addressees should be separated from the rest of the sentence
                    by commas.
                  </span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>
                    Correct: Adam, zadzwoń do mnie.{' '}
                  </span>
                </p>
                <p className={styles.block_231}>
                  Correct: Cześć, Adam, zadzwoń do mnie.
                </p>
                <p className={styles.block_139}>
                  Correct: Wiesz, mamo, chcę już spać.
                </p>
                <p className={styles.block_232}>
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
                <p className={styles.block_89}>Correct: Ok Google</p>
                <p className={styles.block_168}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, pokaż mi zdjęcia molo w
                  </span>
                </p>
                <p className={styles.block_137}>Sopocie.</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, kiedy jest święto{' '}
                  </span>
                </p>
                <p className={styles.block_138}>niepodległości?</p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={styles.block_234}>
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
                <p className={styles.block_235}>
                  <span className={styles.text_21}>
                    Correct: Czy jesteś pewien?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Syntactically built as a question, so
                      punctuate as a question regardless of
                    </span>
                  </span>
                </p>
                <p className={styles.block_236}>intonation.</p>
                <p className={styles.block_237}>
                  <span className={styles.text_21}>Correct: O 5:30 rano? </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Rising intonation suggests it is a question,
                      so punctuate as a question regardless
                    </span>
                  </span>
                </p>
                <p className={styles.block_238}>of structure.</p>
                <p className={styles.block_239}>
                  <span className={styles.text_21}>
                    Correct: pogoda w Szczecinie{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Query has rising intonation, but is most
                      likely a web search rather than a true
                    </span>
                  </span>
                </p>
                <p className={styles.block_240}>question.</p>
                <p className={styles.block_241}>
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
                <p className={styles.block_191}>
                  <span className={styles.text_21}>Correct: Super! </span>
                  <span className={styles.text_22}>
                    Explanation: Speaker sounds enthusiastic.
                  </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_26}>Correct: Super. </span>
                  <span className={styles.text_27}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                  <span className={styles.text_29}> </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={styles.block_243}>
                  <span className={styles.text_24}>
                    Use straight quotation marks and not usual Polish quotation
                    marks.
                  </span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>
                    Correct: "Spóźnię się".{' '}
                  </span>
                </p>
                <p className={styles.block_244}>Incorrect: „Spóźnię się”.</p>
                <p className={styles.block_245}>
                  <span className={styles.text_2}>
                    Use a colon between reported speech verbs and direct
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
                <p className={styles.block_246}>
                  <span className={styles.calibre2}>
                    Correct: Mój kolega powiedział: "aligator krokodyl".
                  </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.calibre2}>
                    Incorrect: Mój kolega powiedział: "aligator krokodyl."
                  </span>
                </p>
                <p className={styles.block_248}>
                  <span className={styles.calibre2}>
                    Incorrect: Mój kolega powiedział "aligator krokodyl."
                  </span>
                </p>
                <p className={styles.block_249}>
                  <span className={styles.calibre2}>
                    Incorrect: Mój kolega powiedział "aligator krokodyl".
                  </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.calibre2}>
                    Explanation: The word "say" or other words can be used for
                    reported speech.
                  </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.text_2}>
                    If the text in quotation marks qualifies as a sentence, do
                    not add excess punctuation{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    after end quotation marks.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_252}>
                  <span className={styles.text_21}>
                    Correct: Adam powiedział "Kocham cię".{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Adam powiedział "Kocham cię.".{' '}
                  </span>
                </p>
                <p className={styles.block_253}>
                  <span className={styles.calibre2}>
                    Explanation: Text in quotation marks qualifies as a
                    sentence. Do not add excess punctuation.
                  </span>
                </p>
                <p className={styles.block_254}>
                  <span className={styles.text_2}>
                    Do not use quotation marks for indirect quotes. Use context
                    and intonation to determine{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    whether a quote is direct or indirect.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  Correct: Dzieci mi powiedziały, że są głodne.
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Jacek powiedział, że nie może przyjść
                  </span>
                </p>
                <p className={styles.block_255}>w sobotę.</p>
                <p className={styles.block_256}>
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
                <p className={styles.block_257}>
                  <span className={styles.text_21}>
                    Correct: Przetłumacz na francuski: Co słychać?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: The quote follows the command, so use a colon
                      and omit quotation marks.
                    </span>
                  </span>
                </p>
                <p className={styles.block_258}>
                  <span className={styles.calibre2}>
                    Correct: Przetłumacz "Jak masz na imię" na francuski.
                  </span>
                </p>
                <p className={styles.block_259}>
                  <span className={styles.calibre2}>
                    Explanation: The quote is in the middle of a sentence, so
                    use quotation marks and omit colon.
                  </span>
                </p>
                <p className={styles.block_260}>
                  <span className={styles.text_2}>
                    Leave text after colons lowercase unless capitalization is
                    required (can stand alone as{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>complete sentence).</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>
                  <span className={styles.calibre2}>
                    Correct: Zapisz w kalendarzu o 3 po południu:
                  </span>
                </p>
                <p className={styles.block_255}>wizyta u lekarza.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Wyślij SMS-a do Kamili: Robotnicy będą
                  </span>
                </p>
                <p className={styles.block_261}>dopiero w środę.</p>
                <p className={styles.block_262}>
                  <span className={styles.text_2}>
                    When speakers make a request for single words to be
                    translated into another language,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    don't punctuate or capitalize the words, even if you'd
                    consider the words as sentences{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>in other situations.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_263}>
                  <span className={styles.text_21}>
                    Correct: Przetłumacz "cześć" na francuski.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Do not capitalize "cześć" even though it can
                      stand alone as a sentence in
                    </span>
                  </span>
                </p>
                <p className={styles.block_264}>other contexts.</p>
                <p className={styles.block_188}>
                  <span className={styles.calibre2}>
                    Correct: Przetłumacz na niemiecki: odpoczywać.
                  </span>
                </p>
                <p className={styles.block_189}>
                  <span className={styles.calibre2}>
                    Explanation: Do not capitalize "odpoczywać" even though it
                    can stand alone as a sentence in other contexts.
                  </span>
                </p>
                <p className={styles.block_265}>
                  <span className={styles.text_2}>
                    Do not use quotation marks for metalinguistic uses of words
                    or phrases. These uses{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    include defining the word, talking about the spelling of the
                    word, or any other type of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    reference to the word itself as a thing.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  Correct: definicja słowa gobelin
                </p>
                <p className={styles.block_90}>
                  Incorrect: definicja słowa "gobelin"
                </p>
                <p className={styles.block_91}>
                  Correct: On właśnie powiedział słowo cukinia.
                </p>
                <p className={styles.block_90}>
                  <span className={styles.calibre2}>
                    Incorrect: On właśnie powiedział słowo{' '}
                  </span>
                </p>
                <p className={styles.block_266}>"cukinia".</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Anna czyta się tak samo od początku i
                  </span>
                </p>
                <p className={styles.block_267}>od końca.</p>
                <p className={styles.block_90}>
                  <span className={styles.calibre2}>
                    Incorrect: "Anna" czyta się tak samo od{' '}
                  </span>
                </p>
                <p className={styles.block_268}>początku i od końca.</p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={styles.block_270}>
                  <span className={styles.text_7}>
                    Apart from the letters a through z, you should not use any
                    other symbol than: 0-9{' '}
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_7}>
                    ąäàáčćęéèéëêēïîíłńóôöüśûùúűūÿźżĄÄÀÁČĆĘÉÈÉËÊĒÏÎÍŁŃÓÔÖŚÜÛÙÚŪŸŹŻ²³,?!~^\'"_°:.()
                  </span>
                  <span className={styles.text_8}> </span>
                  <span className={styles.text_30}>
                    &lt;&gt;{}[]√/@#$€£+=%*&amp;-.;
                  </span>
                  <span className={styles.text_8}> </span>
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_2}>
                    When two opposing teams are mentioned, include a hyphen
                    separated with space on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the right and left between their names.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  Correct: mecz Polonia - AZS Ruda Śląska
                </p>
                <p className={styles.block_90}>
                  Incorrect: mecz Polonia-AZS Ruda Śląska
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_2}>
                    Include a hyphen separated with space on the right and left
                    between locations in flight{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>itineraries.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  Correct: lot Warszawa - Chicago
                </p>
                <p className={styles.block_90}>
                  Incorrect: lot Warszawa-Chicago
                </p>
                <p className={styles.block_139}>
                  Correct: tanie bilety lotnicze na trasie Wrocław -
                </p>
                <p className={styles.block_273}>Frankfurt</p>
                <p className={styles.block_150}>
                  <span className={styles.calibre2}>
                    Incorrect: tanie bilety lotnicze na trasie
                  </span>
                </p>
                <p className={styles.block_274}>Wrocław-Frankfurt</p>
                <p className={styles.block_275}>
                  <span className={styles.text_2}>
                    Use hyphen in phrases and compounds typically written with
                    hyphen. If in doubt, use{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    hyphen. Check your locale’s dictionary for hyphenation.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  Correct: Polska flaga jest biało-czerwona.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Polska flaga jest biało czerwona.
                </p>
                <p className={styles.block_168}>Correct: Święta tuż-tuż.</p>
                <p className={styles.block_90}>Incorrect: Święta tuż tuż.</p>
                <p className={styles.block_276}>
                  <span className={styles.text_1}> </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={styles.block_277}>
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
                <p className={styles.block_278}>
                  <span className={styles.text_21}>
                    Correct: Jak się masz {`{znak zapytania} `}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Jak się masz?{' '}
                  </span>
                </p>
                <p className={styles.block_279}>
                  Incorrect: Jak się masz znak zapytania? Incorrect: Jak się
                  masz znak zapytania
                </p>
                <p className={styles.block_280}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    jak się masz znak zapytania{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_281}>
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
                <p className={styles.block_282}>
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
                <p className={styles.block_283}>
                  <span className={styles.text_21}>
                    Correct: {`{myślnik}`}{' '}
                  </span>
                  <span className={styles.text_22}>Incorrect: - </span>
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>myślnik </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_285}>
                  <span className={styles.text_2}>
                    Treat spoken punctuation as you would regular symbols, and
                    capitalize the following{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>sentence as normal.</span>
                </p>
                <p className={styles.block_286}>
                  <span className={styles.calibre2}>
                    Correct: Wyjeżdżam już kropka Jak długo zajmie mi dojazd
                    znak zapytania
                  </span>
                </p>
                <p className={styles.block_288}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      wyjeżdżam już kropka jak długo zajmie mi dojazd znak
                      zapytania
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
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
