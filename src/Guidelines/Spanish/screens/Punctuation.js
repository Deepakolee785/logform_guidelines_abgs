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
            <PageContentHeader currentPage="Longform Spanish" />

            <div className="content text">
              <p className={'heading'}>Punctuation</p>
              <p className={styles.block_180}>
                <span className={styles.text_2}>
                  Follow the punctuation regulations of your locale. Additional
                  conventions are outlined in{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>this section.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="fragment-versus-sentences">
                <p className={'heading'}>
                  <span className={styles.text_}>
                    Fragments versus sentences
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_182}>
                  <span className={styles.text_25}>
                    Add punctuation where needed, but err on the side of keeping
                    it minimal.
                  </span>
                  <span className={styles.text_21}> </span>
                  <span className={styles.text_25}>
                    Full sentences should start with an uppercase letter and end
                    with a punctuation mark.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_183}>
                  <span className={styles.text_25}>
                    In general, a complete sentence contains a subject and a
                    verb.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_184}>
                  <span className={styles.text_19}>
                    Correct: Hoy nos vamos de fiesta.{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: Includes subject and verb
                  </span>
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_2}>
                    Use the appropriate punctuation even when the person speaks
                    with no intonation and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>with lots of pauses.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_186}>
                  <span className={styles.calibre2}>
                    Correct: ¡Hola! ¿Qué tal hoy? Yo no me encuentro muy bien.
                  </span>
                </p>
                <p className={styles.block_187}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      hola [pause] qué tal hoy [pause] yo no [pause] me [pause]
                      encuentro [pause] muy bien [pause]
                    </span>
                  </span>
                  <span className={styles.text_21}>" </span>
                </p>
                <p className={styles.block_188}>
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
                <p className={styles.block_189}>
                  <span className={styles.text_19}>Correct: Que se fue. </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Interpreted as a response so should be
                      punctuated.
                    </span>
                  </span>
                </p>
                <p className={styles.block_190}>
                  <span className={styles.text_19}>
                    Correct: perros peleando con gatos{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: No context to suggest this is a sentence;
                      treat it as a fragment.
                    </span>
                  </span>
                </p>
                <p className={styles.block_191}>
                  <span className={styles.text_19}>
                    Correct: imágenes de perros{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: Google search for images{' '}
                  </span>
                </p>
                <p className={styles.block_192}>
                  <span className={styles.text_19}>
                    Correct: Comiendo con el vecino.{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: Sentences that begin with gerund like verbs can
                    be considered responses.
                  </span>
                </p>
                <p className={styles.block_193}>
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
                <p className={styles.block_89}>Correct: ¡Qué bien!</p>
                <p className={styles.block_194}>
                  <span className={styles.text_2}>
                    Do not capitalize or punctuate phrases that are intended to
                    be used by the speaker as a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    web search, not as full sentences.
                  </span>
                </p>
                <p className={styles.block_176}>
                  Correct: descargar app para Android
                </p>
                <p className={styles.block_90}>
                  Incorrect: Descargar app para Android.
                </p>
                <p className={styles.block_91}>
                  Correct: nuevo videoclip de Britney Spears
                </p>
                <p className={styles.block_90}>
                  Incorrect: Nuevo videoclip de Britney Spears.
                </p>
                <p className={styles.block_91}>
                  Correct: hombres cambiando llantas
                </p>
                <p className={styles.block_90}>
                  Incorrect: Hombres cambiando llantas.
                </p>
                <p className={styles.block_139}>
                  Correct: edad máxima de las tortugas
                </p>
                <p className={styles.block_148}>
                  Incorrect: Edad máxima de las tortugas.
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Incredibles Monsters, Inc. WALL-E
                  </span>
                </p>
                <p className={styles.block_195}>studio</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Incredibles Monsters, Inc. WALL-E
                  </span>
                </p>
                <p className={styles.block_196}>studio.</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Incredibles, Monsters, Inc., WALL-E,
                  </span>
                </p>
                <p className={styles.block_196}>studio.</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Incredibles. Monsters, Inc. WALL-E.
                  </span>
                </p>
                <p className={styles.block_197}>studio</p>
                <p className={styles.block_198}>
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
                    sentence, leave out capitalization
                  </span>
                </p>
                <p className={styles.block_199}>
                  <span className={styles.text_2}>
                    and punctuation. Note that sentence fragments may be a
                    result of cut-off audio{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>samples.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_200}>
                  <span className={styles.text_19}>
                    Correct: No sé qué decirte porque{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Begins as complete sentence and ends
                      mid-stream.
                    </span>
                  </span>
                </p>
                <p className={styles.block_201}>
                  <span className={styles.text_19}>
                    Correct: acabado de cenar?{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: Fragment is the end of a sentence.
                  </span>
                </p>
                <p className={styles.block_202}>
                  <span className={styles.text_19}>
                    Correct: quien dijo que su hermana había{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Sounds like the middle of a sentence;
                      beginning and end were cut off.
                    </span>
                  </span>
                </p>
                <p className={styles.block_203}>
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
                <p className={styles.block_204}>
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
                <p className={styles.block_151}>Correct: Llama a Mónica.</p>
                <p className={styles.block_139}>Correct: Abrir Facebook app.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Enviar mensaje a mi hermana que diga,
                  </span>
                </p>
                <p className={styles.block_205}>"Hola."</p>
                <p className={styles.block_139}>
                  Correct: Despiértame a las 9:10.
                </p>
                <p className={styles.block_176}>
                  Correct: Baja el brillo de la pantalla.
                </p>
                <p className={styles.block_139}>
                  Correct: Enciende el modo avión.
                </p>
                <p className={styles.block_139}>
                  Correct: Establecer alarma en 5 minutos.
                </p>
                <p className={styles.block_206}>
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
                <p className={styles.block_208}>
                  <span className={styles.text_2}>
                    Only use commas where required. Err on the side of minimal
                    punctuation. Do not rely on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>intonation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  Correct: Bueno, yo a veces voy.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Bueno, yo, a veces, voy.
                </p>
                <p className={styles.block_209}>
                  <span className={styles.text_2}>
                    For complete sentences that follow a single word or phrase
                    that focuses the meaning of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    a sentence, put a comma after the single word or phrase.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_210}>
                  <span className={styles.text_19}>
                    Correct: Boletos de avión, ¿cuánto cuestan?{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: topic-comment{' '}
                  </span>
                  <span className={styles.text_19}>
                    Correct: Real Madrid, ¿cómo quedó?{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: topic-comment{' '}
                  </span>
                </p>
                <p className={styles.block_211}>
                  <span className={styles.text_2}>
                    Put a comma after common sentence openers such as
                    prepositional phrases,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    adverbials, and introductory clauses.
                  </span>
                </p>
                <p className={styles.block_176}>
                  Correct: Ahora que me lo dices, ya me acuerdo.
                </p>
                <p className={styles.block_90}>
                  <span className={styles.calibre2}>
                    Incorrect: Ahora que me lo dices ya me{' '}
                  </span>
                </p>
                <p className={styles.block_212}>acuerdo.</p>
                <p className={styles.block_139}>
                  Correct: Sin embargo, yo no iré.
                </p>
                <p className={styles.block_148}>
                  Incorrect: Sin embargo yo no iré.
                </p>
                <p className={styles.block_213}>
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
                <p className={styles.block_151}>Correct: Jajaja, me alegro.</p>
                <p className={styles.block_148}>Incorrect: Jajaja me alegro.</p>
                <p className={styles.block_214}>
                  <span className={styles.text_19}>
                    Correct: Claro, no te preocupes.{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: Small pause after "claro"{' '}
                  </span>
                  <span className={styles.text_19}>
                    Correct: Claro. No te preocupes.{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: Substantial pause after "claro"
                  </span>
                </p>
                <p className={styles.block_215}>
                  <span className={styles.text_25}>Use commas in lists.</span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_216}>
                  <span className={styles.calibre2}>
                    Correct: Es una casa grande, bien ubicada,
                  </span>
                </p>
                <p className={styles.block_217}>agradable y no muy cara.</p>
                <p className={styles.block_218}>
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
                <p className={styles.block_219}>
                  <span className={styles.calibre2}>
                    Correct: El presidente de los Estados Unidos, Barack Obama,
                    habló ante el congreso.
                  </span>
                </p>
                <p className={styles.block_220}>
                  <span className={styles.calibre2}>
                    Incorrect: El presidente de los Estados Unidos Barack Obama
                    habló ante el congreso.
                  </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.calibre2}>
                    Correct: Mi colega Juan estaba también a la reunión.
                  </span>
                </p>
                <p className={styles.block_222}>
                  <span className={styles.calibre2}>
                    Incorrect: Mi colega, Juan, estaba también a la reunión.
                  </span>
                </p>
                <p className={styles.block_223}>
                  <span className={styles.calibre2}>
                    Explanation: Non-restrictive. "Barack Obama" does not change
                    the scope of whom "el presidente de los Estados Unidos"
                    might refer to because there is only one US president.
                  </span>
                </p>
                <p className={styles.block_224}>
                  <span className={styles.calibre2}>
                    Explanation: Restrictive. "Juan" narrows the scope of whom
                    "mi colega" might refer to because people tend to have
                    multiple coworkers.
                  </span>
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_2}>
                    Use commas in sign-offs, such as those at the end of a
                    message. Do not use end{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>punctuation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>Correct: Un abrazo, Milena.</p>
                <p className={styles.block_139}>Correct: Adiós, Juanjo.</p>
                <p className={styles.block_226}>
                  <span className={styles.text_26}>
                    Use a comma in sentences that consist only of a greeting and
                    an addressee.
                  </span>
                  <span className={styles.text_27}> </span>
                  <span className={styles.text_28}>Correct: Hola, Juan. </span>
                </p>
                <p className={styles.block_227}>Correct: Hola, Google.</p>
                <p className={styles.block_228}>
                  <span className={styles.text_2}>
                    Except in greetings, sentence-initial and sentence-final
                    addressees should be separated{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>by a comma.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  Correct: María, ¿vas a venir?
                </p>
                <p className={styles.block_139}>
                  Correct: Hermano mío, casi ni te veo.
                </p>
                <p className={styles.block_139}>Correct: Hija, ¿qué pasó?</p>
                <p className={styles.block_229}>
                  <span className={styles.text_26}>
                    Do not use a comma in queries and between the query and the
                    tag.
                  </span>
                  <span className={styles.text_27}> </span>
                  <span className={styles.text_28}>
                    Correct: Calibre 50 letra{' '}
                  </span>
                </p>
                <p className={styles.block_230}>Incorrect: Calibre 50, letra</p>
                <p className={styles.block_139}>
                  Correct: tiempo para hoy Málaga
                </p>
                <p className={styles.block_148}>
                  Incorrect: tiempo para hoy, Málaga
                </p>
                <p className={styles.block_155}>
                  <span className={styles.text_19}>Correct: Shakira Loca </span>
                  <span className={styles.text_20}>
                    Incorrect: Shakira, Loca{' '}
                  </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.calibre2}>
                    Explanation: No comma between singer and song titles.
                  </span>
                </p>
                <p className={styles.block_231}>
                  <span className={styles.text_2}>
                    Use a comma between repeated words only if the speaker makes
                    an obvious pause{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>between the words.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_232}>
                  <span className={styles.text_19}>
                    Correct: No, no lo sé.{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Person makes an obvious pause between the
                      first and second "no".
                    </span>
                  </span>
                </p>
                <p className={styles.block_233}>
                  <span className={styles.text_19}>
                    Correct: Te quiero mucho mucho.{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: no obvious pause between the first and second
                      "mucho"
                    </span>
                  </span>
                </p>
                <p className={styles.block_234}>
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
                <p className={styles.block_151}>Correct: Ok Google</p>
                <p className={styles.block_139}>
                  Correct: Ok Google, texto a María: "Nos vemos."
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, muéstrame fotos de la{' '}
                  </span>
                </p>
                <p className={styles.block_235}>Sagrada Família.</p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={styles.block_237}>
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
                <p className={styles.block_238}>
                  <span className={styles.text_19}>
                    Correct: ¿Cuántos años tiene el Papa?{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Regardless of the intonation, it is built as
                      a question, and therefore punctuated as
                    </span>
                  </span>
                </p>
                <p className={styles.block_239}>such.</p>
                <p className={styles.block_240}>
                  <span className={styles.text_19}>Correct: A las 3. </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Does not sound like a question, no question
                      mark.
                    </span>
                  </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_19}>Correct: ¿A las 3? </span>
                  <span className={styles.text_20}>
                    Explanation: Sounds like a question.
                  </span>
                </p>
                <p className={styles.block_242}>
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
                <p className={styles.block_151}>Correct: ¡Basta, cabrón!</p>
                <p className={styles.block_243}>
                  <span className={styles.text_19}>Correct: ¡Hola! </span>
                  <span className={styles.text_20}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_244}>
                  <span className={styles.text_28}>
                    Correct: ¡Qué ganitas tengo!{' '}
                  </span>
                  <span className={styles.text_29}>
                    Explanation: Spoken with enthusiasm.{' '}
                  </span>
                  <span className={styles.text_31}> </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={styles.block_245}>
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
                <p className={styles.block_151}>
                  Correct: Y me dijo, "pelota".
                </p>
                <p className={styles.block_90}>
                  Incorrect: Y me dijo: "pelota".
                </p>
                <p className={styles.block_148}>
                  Incorrect: Y me dijo "pelota."
                </p>
                <p className={styles.block_246}>
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
                <p className={styles.block_151}>
                  <span className={styles.calibre2}>
                    Correct: María me preguntó, "¿Nos vemos a las
                  </span>
                </p>
                <p className={styles.block_247}>3?"</p>
                <p className={styles.block_139}>
                  Correct: María me dijo, "Nos vemos a las 3."
                </p>
                <p className={styles.block_248}>
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
                <p className={styles.block_249}>
                  <span className={styles.calibre2}>
                    Correct: Envía un mensaje a Juan: Voy a llegar tarde.
                  </span>
                </p>
                <p className={styles.block_250}>
                  <span className={styles.calibre2}>
                    Correct: Escribir SMS: "¿Cómo estás?" a Natalia.
                  </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.calibre2}>
                    Explanation: The quote follows the command, so use a colon.
                  </span>
                </p>
                <p className={styles.block_252}>
                  <span className={styles.calibre2}>
                    Explanation: The quote is in the middle of a sentence, so
                    use quotation marks.
                  </span>
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_19}>
                    Correct: ¿Cómo se dice "microbio" en inglés?{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Omit commas after verbs like "decir" in
                      translation requests.
                    </span>
                  </span>
                </p>
                <p className={styles.block_254}>
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
                    Correct: Envía un mensaje a Juan: Voy a llegar
                  </span>
                </p>
                <p className={styles.block_255}>tarde.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Añadir evento en mi calendario:{' '}
                  </span>
                </p>
                <p className={styles.block_256}>encuentro en Tijuana.</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Añadir evento en mi calendario:
                  </span>
                </p>
                <p className={styles.block_257}>Encuentro en Tijuana.</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Añadir evento en mi calendario: Pablo
                  </span>
                </p>
                <p className={styles.block_258}>de vacaciones.</p>
                <p className={styles.block_259}>
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
                </p>
                <p className={styles.block_176}>
                  Correct: ¿Cómo se dice "microbio" en inglés?
                </p>
                <p className={styles.block_139}>Correct: Traduce beber.</p>
                <p className={styles.block_139}>
                  Correct: Traduce beber al turco.
                </p>
                <p className={styles.block_91}>
                  Correct: Traduce al turco beber.
                </p>
                <p className={styles.block_260}>
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
                <p className={styles.block_151}>
                  Correct: Definición de ambidiestro.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Definición de "ambidiestro".
                </p>
                <p className={styles.block_91}>
                  Correct: Acaba de decir la palabra playa.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Acaba de decir la palabra "playa".
                </p>
                <p className={styles.block_91}>
                  Correct: Deletréame la palabra Abu Dabi.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Deletréame la palabra "Abu Dabi".
                </p>
                <p className={styles.block_261}>
                  <span className={styles.text_26}>
                    Do not use quotation marks for media titles, lyrics or
                    brands in web searches.
                  </span>
                  <span className={styles.text_27}> </span>
                  <span className={styles.text_28}>
                    Correct: Sting Fields of Gold
                  </span>
                </p>
                <p className={styles.block_152}>
                  Incorrect: Sting "Fields of Gold"
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={styles.block_263}>
                  <span className={styles.calibre2}>
                    Apart from standard letters, you should not use any other
                    symbol than: 0-9
                    àäááëéïíöóúüÀÄÁËÉÏÍÖÓÚÜñÑçÇ²³μ,'?!¿¡"_°:.()&lt;&gt;{}
                    []√/@#$€£+=%*&amp;-ªº̃;
                  </span>
                </p>
                <p className={styles.block_264}>
                  <span className={styles.text_26}>
                    Question and exclamation marks should always have their
                    inverted counterparts.
                  </span>
                  <span className={styles.text_27}> </span>
                  <span className={styles.text_28}>
                    Correct: ¿Cómo te llamas?{' '}
                  </span>
                </p>
                <p className={styles.block_230}>Incorrect: Cómo te llamas?</p>
                <p className={styles.block_91}>Correct: ¡Qué pasada!</p>
                <p className={styles.block_265}>
                  <span className={styles.text_25}>
                    Use letters "ñ" and "Ñ" whenever it is needed.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_216}>Correct: Hasta mañana.</p>
                <p className={styles.block_148}>Incorrect: Hasta manana.</p>
                <p className={styles.block_139}>
                  Correct: ¿Quién es el actor de Ñuño?
                </p>
                <p className={styles.block_148}>
                  Incorrect: ¿Quién es el actor de Nuno?
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={styles.block_267}>
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
                </p>
                <p className={styles.block_268}>
                  <span className={styles.calibre2}>
                    Correct: Te quiero mucho coma amor mío{` {punto}`}
                  </span>
                </p>
                <p className={styles.block_269}>
                  Incorrect: Te quiero mucho, amor mío.
                </p>
                <p className={styles.block_270}>
                  <span className={styles.calibre2}>
                    Incorrect: Te quiero mucho coma, amor mío punto
                  </span>
                </p>
                <p className={styles.block_271}>
                  <span className={styles.calibre2}>
                    Incorrect: Te quiero mucho coma, amor mío punto.
                  </span>
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      te quiero mucho coma amor mío punto
                    </span>
                  </span>
                  <span className={styles.text_21}>" </span>
                </p>
                <p className={styles.block_273}>
                  <span className={styles.text_19}>
                    Correct: Porfa{` {punto}`}
                    {` {punto}`}
                    {` {punto}`}{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    porfa punto punto punto{' '}
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_274}>
                  Correct: Muy bien {`{punto aparte}`}
                </p>
                <p className={styles.block_275}>Incorrect: Muy bien.</p>
                <p className={styles.block_276}>
                  <span className={styles.calibre2}>
                    Correct: Estaremos todos {`{dos punto}`} Pedro su hermana
                    Lola y Lucas
                    {` {punto}`}
                  </span>
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>muy bien punto aparte </span>
                  <span className={styles.text_21}>" </span>
                </p>
                <p className={styles.block_278}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      estaremos todos dos punto pedro su hermana lola y lucas
                      punto
                    </span>
                  </span>
                  <span className={styles.text_21}>" </span>
                </p>
                <p className={styles.block_279}>
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
                <p className={styles.block_280}>
                  <span className={styles.text_2}>
                    For "signo de interrogación" and "signo de exclamación" do
                    not add the inverted{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation symbol at the beginning of the sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_281}>
                  <span className={styles.calibre2}>
                    Correct: Cuántas veces has estado signo de interrogación
                  </span>
                </p>
                <p className={styles.block_282}>
                  <span className={styles.calibre2}>
                    Incorrect: ¿Cuántas veces has estado signo de interrogación
                  </span>
                </p>
                <p className={styles.block_283}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      cuántas veces has estado signo de interrogación
                    </span>
                  </span>
                  <span className={styles.text_21}>"</span>
                </p>
                <p className={styles.block_284}>
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
                <p className={styles.block_151}>Correct: {`{dos puntos}`}</p>
                <p className={styles.block_90}>Incorrect: :</p>
                <p className={styles.block_285}>
                  <span className={styles.text_2}>
                    Treat spoken punctuation as you would regular symbols, and
                    capitalize the following{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>sentence as normal.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_286}>
                  <span className={styles.calibre2}>
                    Correct: Voy a salir a las 6{` {punto}`} ¿Me esperas?
                  </span>
                </p>
                <p className={styles.block_288}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      voy a salir a las seis punto me esperas
                    </span>
                  </span>
                  <span className={styles.text_21}>" </span>
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
