import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const TranscriptionQuality = () => {
  const classes = useStyles()

  const headingIds = [
    'typo',
    'context-error',
    'adding-missing-words',
    'substitution',
    'spacing',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Dutch" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_220}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={`${styles.block_221} blue-text`}>
                  Correct: Like ons op Facebook.
                </p>
                <p className={styles.block_222}>
                  Incorrect: Like ons op Facebok.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={`${styles.block_225} blue-text`}>
                  Correct: Hij heeft jouw boek gelezen.
                </p>
                <p className={styles.block_226}>
                  Incorrect: Hij heeft jou boek gelezen.
                </p>
                <p className={`${styles.block_227} blue-text`}>
                  Correct: Mijn vrienden en ik gaan volgende
                </p>
                <p className={styles.block_228}>week op vakantie.</p>
                <p className={styles.block_229}>
                  Incorrect: Me vrienden en ik gaan volgende
                </p>
                <p className={styles.block_230}>week op vakantie.</p>
                <p className={styles.block_231}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.
                </p>
                <p className={`${styles.block_232} blue-text`}>
                  Correct: De koe staat in de wei.
                </p>
                <p className={styles.block_233}>
                  Incorrect: De koe staat in de wij.
                </p>
                <p className={styles.block_234}>
                  Do not correct speaker's grammar if they intentionally say
                  something, even if what they say does not follow the standard
                  grammatical rules of the transcription language.
                </p>
                <p className={`${styles.block_235} blue-text`}>
                  Correct: Wat zien ik!?
                </p>
                <p className={styles.block_236}>Incorrect: Wat zie ik!?</p>
                <p className={styles.block_237}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>wat zien ik </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={'text'}>
                  Do not transcribe words that are not spoken, even if they are
                  obviously intended by the speaker. Avoid putting words in the
                  speaker's mouth. However, do transcribe implied times and
                  units of currency.
                </p>
                <p className={`${styles.block_240} blue-text`}>
                  Correct: Hij woont op Leidseplein.
                </p>
                <p className={styles.block_241}>
                  Incorrect: Hij woont op het Leidseplein.
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    hij woont op leidseplein{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_243}>
                  Explanation: Do not add omitted "het".
                </p>
                <p className={`${styles.block_244} blue-text`}>
                  Correct: €3,49 is veel te duur voor een drankje.
                </p>
                <p className={styles.block_245}>
                  Incorrect: 349 is veel te duur voor een drankje.
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    drie negen en veertig is veel te{' '}
                  </span>
                </p>
                <p className={styles.block_247}>
                  <span className={styles.text_1}>duur voor een drankje </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_248}>
                  Explanation: Implied currency, add "€" even
                </p>
                <p className={styles.block_249}>though it is not spoken.</p>
                <p className={styles.block_250}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={`${styles.block_251} blue-text`}>
                  Correct: Hoeveel aardbeien aardappels heb je
                </p>
                <p className={styles.block_252}>gekocht?</p>
                <p className={styles.block_253}>
                  Incorrect: Hoeveel aardappels heb je gekocht?
                </p>
                <p className={styles.block_254}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    hoeveel aardbeien aardappels heb je gekocht "{' '}
                  </span>
                </p>

                <p className={styles.block_256}>
                  Explanation: Speaker clearly corrected themselves after
                  mistakenly saying "aardbeien".
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={'text'}>
                  A substitution error occurs when another standard word is
                  transcribed instead of what was meant by the speaker. If what
                  the speaker said falls into another category (Context Error,
                  Proper Name, Media Title, etc.), see the relevant section.
                </p>
                <p className={`${styles.block_260} blue-text`}>
                  Correct: Hij zegt dat hij morgen niet komt.
                </p>
                <p className={styles.block_261}>
                  Incorrect: Zij zegt dat ze morgen niet komt.
                </p>
                <p className={styles.block_262}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    hij zegt dat hij morgen niet komt"{' '}
                  </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={`${styles.block_266} blue-text`}>
                  Correct: Wat is de hoogste heuvel in
                </p>
                <p className={styles.block_267}>Nederland?</p>
                <p className={styles.block_268}>
                  Incorrect: Wat is de hoogste heuvel in Nederland?
                </p>
                <p className={styles.block_270}>
                  Explanation: Use exactly one space between
                </p>
                <p className={styles.block_271}>words.</p>
                <p className={`${styles.block_272} blue-text`}>
                  Correct: Ik denk dat dat wel zal lukken. Laten
                </p>
                <p className={styles.block_273}>we het gewoon proberen.</p>
                <p className={styles.block_270}>
                  Explanation: Use exactly one space between
                </p>
                <p className={styles.block_271}>words.</p>
                <p className={styles.block_274}>
                  Incorrect: Ik denk dat dat wel zal lukken. _Laten
                </p>
                <p className={styles.block_275}>we het gewoon proberen.</p>
                <p className={styles.block_276}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_277}>
                  Correct: Kom je ook naar het feestje?
                </p>
                <p className={styles.block_278}>
                  Incorrect: Kom je ook naar het feestje ?
                </p>
                <p className={`${styles.block_279} blue-text`}>
                  Correct: Prof.dr. Vincent Icke is vaak bij De
                </p>
                <p className={styles.block_280}>Wereld Draait Door te zien.</p>
                <p className={styles.block_281}>
                  Incorrect: Prof . dr . Vincent Icke is vaak bij De
                </p>
                <p className={styles.block_282}>Wereld Draait Door te zien.</p>
                <p className={styles.block_283}>
                  For quotation marks and similar punctuation, put a space
                  before the opening punctuation, but not necessarily after the
                  closing punctuation.
                </p>
                <p className={styles.block_284}>
                  Correct: Romeo zei: "Ik hou van jou."
                </p>
                <p className={styles.block_285}>
                  Incorrect: Romeo zei: "Ik hou van jou. "
                </p>
                <p className={`${styles.block_286} blue-text`}>
                  Correct: Vertaal "kersenbloesem" naar het
                </p>
                <p className={styles.block_287}>Japans.</p>
                <p className={styles.block_229}>
                  Incorrect: Vertaal "kersenbloesem"naar het
                </p>
                <p className={styles.block_288}>Japans.</p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Transcription Quality"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default TranscriptionQuality

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
