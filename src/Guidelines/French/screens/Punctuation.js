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
            <PageContentHeader currentPage="Longform French" />

            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <p className={styles.block_200}>
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
                <p className={styles.block_202}>
                  <span className={styles.text_19}>
                    Add punctuation where needed, but err on the side of keeping
                    it minimal.
                  </span>
                  <span className={styles.text_20}> </span>
                  <span className={styles.text_19}>
                    Full sentences should start with an uppercase letter and end
                    with a punctuation mark.
                  </span>
                  <span className={styles.text_20}> </span>
                  <span className={styles.text_19}>
                    In general, a complete sentence contains a subject and a
                    verb.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_203}>
                  <span className={styles.text_21}>
                    Correct: Il travaille chez lui aujourd'hui.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: il travaille chez lui aujourd'hui
                  </span>
                </p>
                <p className={styles.block_204}>
                  <span className={styles.text_21}>
                    Correct: Et pourtant je l'aime pas.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: et pourtant je l'aime pas{' '}
                  </span>
                </p>
                <p className={styles.block_205}>
                  Explanation: Includes subject and verb.
                </p>
                <p className={styles.block_206}>
                  <span className={styles.calibre2}>
                    Explanation: Includes subject and verb, sounds like a whole
                    utterance rather than just a conjunction to a larger
                    sentence.
                  </span>
                </p>
                <p className={styles.block_207}>
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
                <p className={styles.block_208}>
                  <span className={styles.text_21}>
                    Correct: De qui tu parles ? Le mec d'à côté.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Two speakers.{' '}
                  </span>
                </p>
                <p className={styles.block_209}>Correct: le mec d'à côté</p>
                <p className={styles.block_168}>Incorrect: Le mec d'à côté.</p>
                <p className={styles.block_210}>Correct: photos de chiens</p>
                <p className={styles.block_169}>Incorrect: Photos de chiens.</p>
                <p className={styles.block_211}>
                  <span className={styles.calibre2}>
                    Correct: Qu'est-ce que je vais acheter ? Du pain et du lait.
                  </span>
                </p>
                <p className={styles.block_212}>
                  <span className={styles.calibre2}>
                    Incorrect: Qu'est-ce que je vais acheter ? du pain et du
                    lait
                  </span>
                </p>
                <p className={styles.block_213}>
                  <span className={styles.calibre2}>
                    Correct: J'ai vu Roger aujourd'hui, le mec d'à côté.
                  </span>
                </p>
                <p className={styles.block_214}>
                  <span className={styles.calibre2}>
                    Incorrect: J'ai vu Roger aujourd'hui. le mec d'à côté
                  </span>
                </p>
                <p className={styles.block_215}>
                  <span className={styles.calibre2}>
                    Incorrect: J'ai vu Roger aujourd'hui. Le mec d'à côté.
                  </span>
                </p>
                <p className={styles.block_216}>
                  <span className={styles.calibre2}>
                    Explanation: No context to suggest this is a sentence; treat
                    it as a fragment.
                  </span>
                </p>
                <p className={styles.block_217}>
                  Explanation: Google search for images.
                </p>
                <p className={styles.block_218}>
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
                <p className={styles.block_208}>
                  <span className={styles.text_21}>Correct: Mince. </span>
                  <span className={styles.text_22}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_219}>
                  <span className={styles.text_21}>Correct: Salut. </span>
                  <span className={styles.text_22}>Explanation: greeting </span>
                </p>
                <p className={styles.block_220}>
                  <span className={styles.text_21}>
                    Correct: Bien sûr. Au revoir.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: This includes both a yes/no word and a
                      farewell, with a long pause between.
                    </span>
                  </span>
                </p>
                <p className={styles.block_221}>
                  <span className={styles.text_21}>
                    Correct: Santé à mon meilleur ami.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Here, "santé" is not being used as an
                      interjection on its own, but rather the entire
                    </span>
                  </span>
                </p>
                <p className={styles.block_222}>
                  sentence is being used as an interjection.
                </p>
                <p className={styles.block_223}>
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
                <p className={styles.block_145}>
                  Correct: comment cuire pommes de terre
                </p>
                <p className={styles.block_90}>
                  Incorrect: Comment cuire pommes de terre.
                </p>
                <p className={styles.block_91}>Correct: photos d'Espagne</p>
                <p className={styles.block_90}>Incorrect: Photos d'Espagne.</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: films par un réalisateur australien se
                  </span>
                </p>
                <p className={styles.block_138}>
                  passant à Rome qui ont rapporté le plus
                </p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Films par un réalisateur australien se
                  </span>
                </p>
                <p className={styles.block_224}>
                  passant à Rome qui ont rapporté le plus.
                </p>
                <p className={styles.block_225}>
                  <span className={styles.text_21}>
                    Correct: Fabrice Lucchini filmographie{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Fabrice Lucchini filmographie.{' '}
                  </span>
                </p>
                <p className={styles.block_226}>
                  <span className={styles.calibre2}>
                    Correct: Les Indestructibles Monstres, Inc. WALL-E studio
                  </span>
                </p>
                <p className={styles.block_227}>
                  <span className={styles.calibre2}>
                    Incorrect: Les Indestructibles Monstres, Inc. WALL-E studio.
                  </span>
                </p>
                <p className={styles.block_228}>
                  <span className={styles.calibre2}>
                    Incorrect: Les Indestructibles, Monstres, Inc., WALL-E,
                    studio.
                  </span>
                </p>
                <p className={styles.block_229}>
                  <span className={styles.calibre2}>
                    Incorrect: Les Indestructibles. Monstres, Inc. WALL-E.
                    studio
                  </span>
                </p>
                <p className={styles.block_230}>
                  <span className={styles.calibre2}>
                    Explanation: For these lists included in queries, don't put
                    any commas between the different elements of the query.
                  </span>
                </p>
                <p className={styles.block_231}>
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
                <p className={styles.block_232}>
                  <span className={styles.calibre2}>
                    Correct: Qu'est-ce que tu en penses ? C'est pas comme si
                  </span>
                </p>
                <p className={styles.block_233}>
                  <span className={styles.calibre2}>
                    Correct: beaucoup plus dur. Ça ne fait aucun sens.
                  </span>
                </p>
                <p className={styles.block_234}>
                  <span className={styles.calibre2}>
                    Explanation: Begins as a complete sentence and ends
                    mid-stream.
                  </span>
                </p>
                <p className={styles.block_235}>
                  Explanation: Fragment is the end of a sentence.
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_21}>
                    Correct: se voit demain, alors ?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Begins mid-stream but ends completely; part
                      of a complete sentence.
                    </span>
                  </span>
                </p>
                <p className={styles.block_237}>
                  <span className={styles.calibre2}>
                    Correct: vraiment difficile, donc il faut pas te décourager.
                  </span>
                </p>
                <p className={styles.block_238}>
                  <span className={styles.calibre2}>
                    Correct: Je vais au café. Je vais me prendre un C'est
                    combien le cappucino ?
                  </span>
                </p>
                <p className={styles.block_239}>
                  Explanation: Audio was cut off at the beginning.
                </p>
                <p className={styles.block_240}>
                  <span className={styles.calibre2}>
                    Explanation: Do not put a period, dashes, or ellipses, even
                    if another sentence follows.
                  </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_21}>
                    Correct: Combien coûte le Où-est-ce que{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Both sound like beginnings of sentences.
                    </span>
                  </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_21}>
                    Correct: Où est la Où est la plage ?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Repeated beginning of the sentence.
                    </span>
                  </span>
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_21}>
                    Correct: qu'il a dit que sa sœur allait le{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Audio was cut off at the beginning and at the
                      end, no capitals or punctuation.
                    </span>
                  </span>
                </p>
                <p className={styles.block_244}>
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
                <p className={styles.block_245}>
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
                <p className={styles.block_89}>Correct: Activer GPS.</p>
                <p className={styles.block_91}>
                  Correct: Appeler Carole portable.
                </p>
                <p className={styles.block_151}>
                  Correct: Activer le réveil à 7h15.
                </p>
                <p className={styles.block_139}>
                  Correct: Affiche mes e-mails.
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Rappelle-moi d'aller chez le dentiste
                  </span>
                </p>
                <p className={styles.block_246}>demain.</p>
                <p className={styles.block_247}>
                  <span className={styles.text_21}>
                    Correct: directions pour aller à Nice{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: No trigger here, it is a web search. Treat it
                      as a fragment.
                    </span>
                  </span>
                </p>
                <p className={styles.block_248}>
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
                <p className={styles.block_249}>
                  <span className={styles.text_1}> </span>
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={styles.block_250}>
                  <span className={styles.text_2}>
                    Only use commas where required. Err on the side of minimal
                    punctuation. Do not rely on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>intonation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_251}>
                  <span className={styles.calibre2}>
                    Correct: Où est la station-essence la plus proche ?
                  </span>
                </p>
                <p className={styles.block_252}>
                  <span className={styles.calibre2}>
                    Incorrect: Où est, la station-essence, la plus proche ?
                  </span>
                </p>
                <p className={styles.block_253}>
                  <span className={styles.calibre2}>
                    Explanation: Even if the speaker uses long pauses in these
                    places, do not use a comma. There are places where commas
                    are allowed or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_254}>
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
                <p className={styles.block_255}>
                  <span className={styles.text_21}>
                    Correct: Château de Versailles, c'est fermé ?{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: topic-comment
                  </span>
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_21}>
                    Correct: Tomate, fruit ou légume ?{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: topic-comment{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: Maintenant les pommes, j'aime ça.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: topicalization{' '}
                  </span>
                </p>
                <p className={styles.block_257}>
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
                <p className={styles.block_258}>
                  <span className={styles.calibre2}>
                    Correct: Maintenant que tu en parles, on devrait en
                    racheter.
                  </span>
                </p>
                <p className={styles.block_259}>
                  <span className={styles.calibre2}>
                    Incorrect: Maintenant que tu en parles on devrait en
                    racheter.
                  </span>
                </p>
                <p className={styles.block_260}>
                  <span className={styles.calibre2}>
                    Correct: Tant qu'on y est, où ils étaient quand on avait
                    besoin d'eux ?
                  </span>
                </p>
                <p className={styles.block_261}>
                  <span className={styles.calibre2}>
                    Incorrect: Tant qu'on y est où ils étaient quand on avait
                    besoin d'eux ?
                  </span>
                </p>
                <p className={styles.block_262}>
                  <span className={styles.calibre2}>
                    Correct: Malheureusement, les deux fêtes ont eu lieu le même
                    jour.
                  </span>
                </p>
                <p className={styles.block_261}>
                  <span className={styles.calibre2}>
                    Incorrect: Malheureusement les deux fêtes ont eu lieu le
                    même jour.
                  </span>
                </p>
                <p className={styles.block_263}>
                  Correct: Ce mercredi, il a fait beau.
                </p>
                <p className={styles.block_264}>
                  Incorrect: Ce mercredi il a fait beau.
                </p>
                <p className={styles.block_265}>
                  Explanation: introductory clause Explanation: introductory
                  clause Explanation: adverbial
                </p>
                <p className={styles.block_266}>
                  Explanation: prepositional phrase
                </p>
                <p className={styles.block_267}>
                  <span className={styles.calibre2}>
                    Correct: En France, on a des cafés à tous les coins de rue.
                  </span>
                </p>
                <p className={styles.block_183}>
                  <span className={styles.calibre2}>
                    Incorrect: En France on a des cafés à tous les coins de rue.
                  </span>
                </p>
                <p className={styles.block_268}>
                  <span className={styles.calibre2}>
                    Correct: D'un autre côté, les perroquets font des animaux de
                    compagnie assez classes.
                  </span>
                </p>
                <p className={styles.block_269}>
                  <span className={styles.calibre2}>
                    Incorrect: D'un autre côté les perroquets font des animaux
                    de compagnie assez classes.
                  </span>
                </p>
                <p className={styles.block_270}>
                  Explanation: prepositional phrase Explanation: prepositional
                  phrase
                </p>
                <p className={styles.block_271}>
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
                <p className={styles.block_272}>
                  <span className={styles.text_21}>
                    Correct: Bon, on en reparle demain.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Bon on en reparle demain.{' '}
                  </span>
                </p>
                <p className={styles.block_273}>Correct: Désolé, bébé.</p>
                <p className={styles.block_274}>Incorrect: Désolé bébé.</p>
                <p className={styles.block_275}>Correct: Haha, génial.</p>
                <p className={styles.block_264}>Incorrect: Haha génial.</p>
                <p className={styles.block_276}>
                  Explanation: discourse word Explanation: interjection
                  Explanation: interjection
                </p>
                <p className={styles.block_277}>
                  <span className={styles.text_21}>
                    Correct: OK, je te suis.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: polarity item
                  </span>
                </p>
                <p className={styles.block_278}>Incorrect: OK je te suis.</p>
                <p className={styles.block_279}>Correct: Oui, elle y va.</p>
                <p className={styles.block_274}>Incorrect: Oui elle y va.</p>
                <p className={styles.block_280}>
                  <span className={styles.text_21}>
                    Correct: Bien sûr, je m'en occupe.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Bien sûr je m'en occupe.{' '}
                  </span>
                </p>
                <p className={styles.block_281}>
                  <span className={styles.text_21}>
                    Correct: Bien sûr. Je m'en occupe.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Bien sûr, je m'en occupe.{' '}
                  </span>
                </p>
                <p className={styles.block_282}>Explanation: polarity item</p>
                <p className={styles.block_283}>
                  Explanation: no pause after "bien sûr" Explanation:
                  substantial pause after "bien sûr"
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_2}>
                    Use a comma in conditionals of the form [si X, Y] but not of
                    the form [Y si X]. (Do the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    same with après, quand, etc.)
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>
                  Correct: Si c'est ce que tu veux, je peux le faire.
                </p>
                <p className={styles.block_148}>
                  Incorrect: Si c'est ce que tu veux je peux le faire.
                </p>
                <p className={styles.block_139}>
                  Correct: Je peux le faire si c'est ce que tu veux.
                </p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Je peux le faire, si c'est ce que tu
                  </span>
                </p>
                <p className={styles.block_285}>veux.</p>
                <p className={styles.block_91}>
                  Correct: Quand Jean revient, on peut y aller.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Quand Jean revient on peut y aller.
                </p>
                <p className={styles.block_151}>
                  Correct: Après qu'Anna soit rentrée, elle a dîné.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Après qu'Anna soit rentrée elle a dîné.
                </p>
                <p className={styles.block_146}>
                  <span className={styles.text_19}>Use commas in lists.</span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_147}>
                  <span className={styles.calibre2}>
                    Correct: C'est une maison grande, aérée et
                  </span>
                </p>
                <p className={styles.block_286}>lumineuse.</p>
                <p className={styles.block_287}>
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
                <p className={styles.block_288}>
                  <span className={styles.calibre2}>
                    Correct: Le président des États-Unis, Barack Obama, était à
                    ce sommet.
                  </span>
                </p>
                <p className={styles.block_289}>
                  <span className={styles.calibre2}>
                    Incorrect: Le président des États-Unis Barack Obama était à
                    ce sommet.
                  </span>
                </p>
                <p className={styles.block_290}>
                  <span className={styles.calibre2}>
                    Correct: Mon collègue Jean était à ce sommet aussi.
                  </span>
                </p>
                <p className={styles.block_291}>
                  <span className={styles.calibre2}>
                    Incorrect: Mon collègue, Jean, était à ce sommet aussi.
                  </span>
                </p>
                <p className={styles.block_292}>
                  <span className={styles.calibre2}>
                    Correct: Ma sœur Jeanne est sortie quelques minutes.
                  </span>
                </p>
                <p className={styles.block_293}>
                  <span className={styles.calibre2}>
                    Explanation: Non-restrictive. "Barack Obama" does not change
                    the scope of whom "le président des États-Unis" might refer
                    to because there is only one US president.
                  </span>
                </p>
                <p className={styles.block_294}>
                  <span className={styles.calibre2}>
                    Explanation: Restrictive. "Jean" narrows the scope of whom
                    "mon collègue" might refer to because people tend to have
                    multiple coworkers.
                  </span>
                </p>
                <p className={styles.block_295}>
                  <span className={styles.calibre2}>
                    Explanation: We do not know whether the speaker has one
                    sister or several. In these cases, assume the appositive is
                    restrictive.
                  </span>
                </p>
                <p className={styles.block_296}>
                  <span className={styles.text_2}>
                    Use commas in sign-offs, such as those at the end of a
                    message. Do not use end{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>punctuation.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>Correct: À bientôt, Léon</p>
                <p className={styles.block_90}>Incorrect: À bientôt Léon</p>
                <p className={styles.block_148}>Incorrect: À bientôt, Léon.</p>
                <p className={styles.block_139}>Correct: Cordialement, Yoann</p>
                <p className={styles.block_148}>
                  Incorrect: Cordialement Yoann
                </p>
                <p className={styles.block_90}>
                  Incorrect: Cordialement, Yoann.
                </p>
                <p className={styles.block_297}>
                  <span className={styles.text_2}>
                    Do not use commas in sentences that consist only of a
                    greeting and an addressee. If a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    greeting occurs at the beginning of a sentence or fragment,
                    place a comma after the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    greeting. If the greeting includes an addressee, place the
                    comma after the addressee.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>Correct: Bonjour.</p>
                <p className={styles.block_139}>Correct: Bonjour Jean.</p>
                <p className={styles.block_148}>Incorrect: Bonjour, Jean.</p>
                <p className={styles.block_139}>
                  Correct: Bonjour, c'est Laure.
                </p>
                <p className={styles.block_148}>
                  Incorrect: Bonjour c'est Laure.
                </p>
                <p className={styles.block_139}>
                  Correct: Bonjour Jean, c'est Laure.
                </p>
                <p className={styles.block_148}>
                  Incorrect: Bonjour Jean c'est Laure.
                </p>
                <p className={styles.block_298}>
                  Incorrect: Bonjour, Jean, c'est Laure.
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_21}>
                    Correct: Bonjour Jean. C'est Laure.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Bonjour Jean, c'est Laure.{' '}
                  </span>
                </p>
                <p className={styles.block_300}>
                  <span className={styles.calibre2}>
                    Explanation: long pause between "Bonjour Jean" and "C'est
                    Laure". Treat as separate sentences.
                  </span>
                </p>
                <p className={styles.block_301}>
                  <span className={styles.text_2}>
                    Except in greetings, sentence-initial and sentence-final
                    addressees should be separated{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>by a comma.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>
                  Correct: Marie, rappelle-moi.
                </p>
                <p className={styles.block_139}>
                  Correct: Comment ça va, Aline ?
                </p>
                <p className={styles.block_139}>
                  Correct: Marc, salut, c'est Jeanne.
                </p>
                <p className={styles.block_302}>
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
                <p className={styles.block_145}>Correct: Ok Google</p>
                <p className={styles.block_139}>
                  Correct: Ok Google, images d'oliviers
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, montre-moi le numéro de
                  </span>
                </p>
                <p className={styles.block_303}>téléphone de Damien.</p>
                <p className={styles.block_151}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, Pâques c'est quand cette
                  </span>
                </p>
                <p className={styles.block_304}>année ?</p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={styles.block_306}>
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
                <p className={styles.block_307}>
                  <span className={styles.text_21}>
                    Correct: Tu es sérieux ?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Intonation sounds more like a statement than
                      a question.
                    </span>
                  </span>
                </p>
                <p className={styles.block_308}>
                  <span className={styles.text_21}>Correct: À 3h ? </span>
                  <span className={styles.text_22}>
                    Explanation: Utterance uses rising intonation.{' '}
                  </span>
                  <span className={styles.text_21}>
                    Correct: Et Antoine vient, aussi ?{' '}
                  </span>
                  <span className={styles.text_22}>
                    Explanation: Utterance uses rising intonation.
                  </span>
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_21}>
                    Correct: météo à Carcassonne{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Query uses rising intonation, but is most
                      likely a web search rather than a true
                    </span>
                  </span>
                </p>
                <p className={styles.block_310}>question.</p>
                <p className={styles.block_311}>
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
                <p className={styles.block_145}>Correct: Ferme-la !</p>
                <p className={styles.block_90}>Incorrect: Ferme-la.</p>
                <p className={styles.block_312}>
                  <span className={styles.text_21}>Correct: Youpi ! </span>
                  <span className={styles.text_22}>
                    Explanation: speaker sounds enthusiastic
                  </span>
                </p>
                <p className={styles.block_313}>Incorrect: Youpi.</p>
                <p className={styles.block_314}>Correct: Youpi.</p>
                <p className={styles.block_315}>Incorrect: Youpi !</p>
                <p className={styles.block_316}>
                  <span className={styles.text_21}>
                    Correct: Tu es vraiment un lâche.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Tu es vraiment un lâche !{' '}
                  </span>
                </p>
                <p className={styles.block_317}>Correct: Connard !</p>
                <p className={styles.block_315}>Incorrect: Connard.</p>
                <p className={styles.block_318}>
                  <span className={styles.text_21}>
                    Correct: Joyeux anniversaire !{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Joyeux anniversaire.{' '}
                  </span>
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_21}>
                    Correct: Passe une bonne journée.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Passe une bonne journée !{' '}
                  </span>
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_21}>
                    Correct: J'ai réussi mon exam !{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: J'ai réussi mon exam.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={styles.block_322}>
                  Explanation: speaker sounds unenthused Explanation: spoken
                  dispassionately
                </p>
                <p className={styles.block_323}>
                  Explanation: spoken with enthusiasm Explanation: pleasant
                  neutral tone Explanation: spoken with enthusiasm
                </p>
                <p className={styles.block_324}>
                  <span className={styles.text_2}>
                    Do not use any punctuation between reported speech verbs and
                    the quotation marks{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    starting direct quotations. Do not put punctuation within
                    quotation marks unless the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation belongs to the reported speech.
                  </span>
                </p>
                <p className={styles.block_325}>
                  <span className={styles.text_21}>
                    Correct: Mon ami a dit "alligator crocodile".{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Mon ami a dit "alligator crocodile." Incorrect:
                    Mon ami a dit, "alligator crocodile". Incorrect: Mon ami a
                    dit : "alligator crocodile".
                  </span>
                </p>
                <p className={styles.block_326}>
                  <span className={styles.calibre2}>
                    Explanation: The word "dire" is the most common reported
                    speech verb in French, but other words ("demander",
                    "répondre") can be used.
                  </span>
                </p>
                <p className={styles.block_327}>
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
                <p className={styles.block_328}>
                  <span className={styles.calibre2}>
                    Correct: Anne a dit "On se donne rendez-vous à 3h."
                  </span>
                </p>
                <p className={styles.block_329}>
                  <span className={styles.calibre2}>
                    Incorrect: Anne a dit "On se donne rendez-vous à 3h.".
                  </span>
                </p>
                <p className={styles.block_330}>
                  <span className={styles.calibre2}>
                    Incorrect: Anne a dit "On se donne rendez-vous à 3h".
                  </span>
                </p>
                <p className={styles.block_331}>
                  <span className={styles.calibre2}>
                    Correct: Camille a demandé "On se donne rendez-vous à 3h ?"
                  </span>
                </p>
                <p className={styles.block_332}>
                  <span className={styles.calibre2}>
                    Incorrect: Camille a demandé "On se donne rendez-vous à 3h
                    ?".
                  </span>
                </p>
                <p className={styles.block_333}>
                  <span className={styles.calibre2}>
                    Incorrect: Camille a demandé "On se donne rendez-vous à 3h"?
                  </span>
                </p>
                <p className={styles.block_334}>
                  Correct: Est-ce que Camille a dit "On se voit là."
                </p>
                <p className={styles.block_335}>
                  <span className={styles.calibre2}>
                    Explanation: The word "dire" is the most common reported
                    speech verb in French, but other words ("demander",
                    "répondre") can be used for reported speech.
                  </span>
                </p>
                <p className={styles.block_336}>
                  <span className={styles.calibre2}>
                    Incorrect: Est-ce que Camille a dit "On se voit
                  </span>
                </p>
                <p className={styles.block_337}>là." ?</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Gaétan a fait "Je serai là. C'est
                  </span>
                </p>
                <p className={styles.block_138}>
                  promis." sans même vérifier son agenda.
                </p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Gaétan a fait "Je serai là. C'est
                  </span>
                </p>
                <p className={styles.block_224}>
                  promis.", sans même vérifier son agenda.
                </p>
                <p className={styles.block_338}>
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
                <p className={styles.block_339}>
                  <span className={styles.text_21}>
                    Correct: Traduis en anglais : Comment ça va ?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: The quote follows the command, so use a
                      colon.
                    </span>
                  </span>
                </p>
                <p className={styles.block_340}>
                  <span className={styles.calibre2}>
                    Correct: Traduis "Comment tu t'appelles ?" en anglais.
                  </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.calibre2}>
                    Explanation: The quote is in the middle of a sentence, so
                    use quotation marks.
                  </span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_21}>
                    Correct: Comment dire "Je t'aime." en anglais ?{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Omit commas after "dire" verbs in translation
                      requests.
                    </span>
                  </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.calibre2}>
                    Correct: Comment dire en japonais : Je veux un
                  </span>
                </p>
                <p className={styles.block_153}>café.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: À exemple@gmail.com : Salut, ta{' '}
                  </span>
                </p>
                <p className={styles.block_344}>journée s'est bien passée ?</p>
                <p className={styles.block_151}>
                  <span className={styles.calibre2}>
                    Correct: Envoyer email à exemple@gmail.com
                  </span>
                </p>
                <p className={styles.block_345}>
                  disant : Salut, ta journée s'est bien passée ?
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_2}>
                    Leave text after colons lowercase unless capitalization is
                    required (can stand alone as{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>complete sentence).</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>
                  <span className={styles.calibre2}>
                    Correct: Ajouter rendez-vous à 3h : rendez-vous
                  </span>
                </p>
                <p className={styles.block_153}>chez le docteur.</p>
                <p className={styles.block_148}>
                  Incorrect: Ajouter rendez-vous à 3h : Rendez
                </p>
                <p className={styles.block_347}>vous chez le docteur.</p>
                <p className={styles.block_91}>Correct: Chercher : béquille</p>
                <p className={styles.block_90}>
                  Incorrect: Chercher : Béquille.
                </p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Envoyer message à Raphaëlle : Les
                  </span>
                </p>
                <p className={styles.block_348}>
                  toituriers seront pas là avant mercredi.
                </p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: Envoyer message à Raphaëlle : les
                  </span>
                </p>
                <p className={styles.block_349}>
                  toituriers seront pas là avant mercredi.
                </p>
                <p className={styles.block_139}>
                  Correct: Écris à Sarah : J'arrive dans 5 minutes.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Écris à Sarah : j'arrive dans 5 minutes.
                </p>
                <p className={styles.block_350}>
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
                <p className={styles.block_351}>
                  <span className={styles.text_21}>
                    Correct: Traduire "bonjour" en anglais.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Traduire "Bonjour." en anglais.
                  </span>
                </p>
                <p className={styles.block_352}>
                  <span className={styles.text_21}>
                    Correct: Traduire en espagnol : laisse.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Traduire en espagnol : Laisse.{' '}
                  </span>
                </p>
                <p className={styles.block_353}>
                  <span className={styles.calibre2}>
                    Explanation: If the speaker had said olny "bonjour", it
                    should have been transcribed "Bonjour."
                  </span>
                </p>
                <p className={styles.block_354}>
                  <span className={styles.calibre2}>
                    Explanation: If the speaker had said only "laisse", it
                    should have been transcribed "Laisse."
                  </span>
                </p>
                <p className={styles.block_355}>
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
                <p className={styles.block_145}>
                  Correct: Définir ambidextrie.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Définir "ambidextrie".
                </p>
                <p className={styles.block_91}>
                  Correct: Il vient de dire le mot courgette.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Il vient de dire le mot "courgette".
                </p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Elle s'épelle de la même façon depuis
                  </span>
                </p>
                <p className={styles.block_286}>le début et depuis la fin.</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: "Elle" s'épelle de la même façon
                  </span>
                </p>
                <p className={styles.block_356}>
                  depuis le début et depuis la fin.
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={styles.block_358}>
                  <span className={styles.text_2}>
                    Apart from standard letters, you should not use any other
                    symbol than: 0-9{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ²³,?!'"_°:.()&lt;&gt;
                    {}
                    []√/@#$€£+=%*&amp;-.;
                  </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_2}>
                    Put a space before and after a hyphen if it is opposing two
                    words. Do not use spaces for{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    compund words, numbers or clitics.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_145}>
                  Correct: J'ai vu le match Lyon - Paris hier soir.
                </p>
                <p className={styles.block_90}>
                  Incorrect: J'ai vu le match Lyon-Paris hier soir.
                </p>
                <p className={styles.block_91}>Correct: arc-en-ciel</p>
                <p className={styles.block_90}>Incorrect: arc - en - ciel</p>
                <p className={styles.block_139}>
                  Correct: C'était pendant la guerre de 39-45.
                </p>
                <p className={styles.block_148}>
                  Incorrect: C'était pendant la guerre de 39 - 45.
                </p>
                <p className={styles.block_139}>Correct: Donne-le-moi.</p>
                <p className={styles.block_148}>Incorrect: Donne - le - moi</p>
                <p className={styles.block_360}>
                  <span className={styles.text_19}>
                    Never use a final apostrophe with any kind of abbreviation.
                  </span>
                  <span className={styles.text_20}> </span>
                </p>
                <p className={styles.block_361}>Correct: Bon ap !</p>
                <p className={styles.block_148}>Incorrect: Bon ap' !</p>
                <p className={styles.block_139}>
                  Correct: J'ai vu mon petit cousin.
                </p>
                <p className={styles.block_148}>
                  Incorrect: J'ai vu mon p'tit cousin.
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_21}>
                    Correct: J'ai regardé P'tit Quinquin hier soir.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: The apostrophe is in the original media
                      title, so keep it.
                    </span>
                  </span>
                </p>
                <p className={styles.block_363}>
                  Incorrect: J'ai regardé Petit Quinquin hier soir.
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={styles.block_365}>
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
                <p className={styles.block_366}>
                  <span className={styles.text_21}>
                    Correct: Comment ça va {`{point d'interrogation}`}{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Comment ça va ?{' '}
                  </span>
                </p>
                <p className={styles.block_367}>
                  Incorrect: Comment ça va point d'interrogation
                </p>
                <p className={styles.block_368}>
                  <span className={styles.calibre2}>
                    Correct: Je serai en retard {`{virgule}`} ne m'attends pas{' '}
                    {`{point}`}
                  </span>
                </p>
                <p className={styles.block_369}>
                  Incorrect: Je serai en retard, ne m'attends pas.
                </p>
                <p className={styles.block_370}>
                  <span className={styles.calibre2}>
                    Incorrect: Je serai en retard, ne m'attends pas point
                  </span>
                </p>
                <p className={styles.block_263}>
                  Correct: OK {`{trois petits points}`}
                </p>
                <p className={styles.block_371}>Incorrect: OK...</p>
                <p className={styles.block_372}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      comment ça va point d'interrogation
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      je serai en retard virgule ne m'attends pas point
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_374}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    ok trois petits points{' '}
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_375}>
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
                <p className={styles.block_376}>
                  <span className={styles.text_21}>
                    Correct: J'habite dans l'appartement 4-A.{' '}
                  </span>
                  <span className={styles.text_24}>Example audio: " </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      j'habite dans l'appartement quatre tiret a
                    </span>
                  </span>
                  <span className={styles.text_24}>"</span>
                </p>
                <p className={styles.block_377}>
                  <span className={styles.calibre2}>
                    Incorrect: J'habite dans l'appartement 4 {`{tiret}`} A.
                  </span>
                </p>
                <p className={styles.block_378}>
                  <span className={styles.calibre2}>
                    Incorrect: J'habite dans l'appartement quatre {`{tiret}`} A.
                  </span>
                </p>
                <p className={styles.block_379}>
                  Correct: www.exemple-domaine.com
                </p>
                <p className={styles.block_380}>
                  <span className={styles.calibre2}>
                    Incorrect: www {`{point}`} exemple {`{tiret}`} domaine{' '}
                    {`{point}`} com
                  </span>
                </p>
                <p className={styles.block_381}>
                  <span className={styles.text_21}>
                    Correct: Elle est actrice/mannequin.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Elle est actrice {`{slash} `}mannequin.
                  </span>
                </p>
                <p className={styles.block_382}>
                  <span className={styles.calibre2}>
                    Incorrect: Elle est actrice {`{barre oblique}`} mannequin.
                  </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_21}>
                    Correct: le match Saint-Étienne - Lyon{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: le match Saint-Étienne tiret Lyon
                  </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      w w w point exemple tiret domaine point com
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      elle est actrice slash mannequin{' '}
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      elle est actrice barre oblique mannequin
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.calibre2}>
                    Explanation: We consider slash to be word-level punctuation.
                  </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      le match saint-étienne tiret lyon
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_389}>
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
                <p className={styles.block_145}>Correct: {`{deux points}`}</p>
                <p className={styles.block_90}>Incorrect: :</p>
                <p className={styles.block_151}>Correct:{` {tiret}`}</p>
                <p className={styles.block_90}>Incorrect: -</p>
                <p className={styles.block_390}>
                  <span className={styles.text_2}>
                    Treat spoken punctuation as you would regular symbols, and
                    capitalize the following{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>sentence as normal.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.calibre2}>
                    Correct: Je serai en retard {`{point}`} Ne m'attends pas.
                  </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.calibre2}>
                    Incorrect: Je serai en retard {`{point}`} ne m'attends pas.
                  </span>
                </p>
                <p className={styles.block_393}>
                  <span className={styles.calibre2}>
                    Correct: Il arrive quand{' '}
                    {`{point d'interrogation} Demain {point
          d'interrogation}`}
                  </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.calibre2}>
                    Incorrect: Il arrive quand ? {`{point`}{' '}
                  </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_26}>
                    {`d'interrogation} Demain ?`} {`{point d'interrogation} `}
                  </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      je serai en retard point ne m'attends pas
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_20}>Example audio: " </span>
                  <span className={styles.text_23}>
                    <span className={styles.calibre2}>
                      il arrive quand point d'interrogation demain point
                      d'interrogation
                    </span>
                  </span>
                  <span className={styles.text_20}>" </span>
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
