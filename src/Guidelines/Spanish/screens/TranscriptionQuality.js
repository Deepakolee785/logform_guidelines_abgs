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
            <PageContentHeader currentPage="Longform Spanish" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={'text'}>
                Comply with the standard rules of the writing system.
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={styles.block_143}>
                  A typo results in the unintentional creation of a non-word.
                </p>
                <p className={styles.block_144}>
                  <span className={styles.calibre1}>
                    Avoid making any typographical errors. Carefully check your
                    work before marking items as "complete".
                  </span>
                </p>
                <p className={styles.block_145}>
                  Correct: Quiero abrir Facebook.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Quiero abrir Facebok.
                </p>
                <p className={styles.block_146}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
                <p className={styles.block_147}>
                  Correct: Ir al paseo del Prado.
                </p>
                <p className={styles.block_148}>
                  Incorrect: Ir al Paseo Del Prado.
                </p>
                <p className={styles.block_139}>Correct: Me voy a Barcelona.</p>
                <p className={styles.block_148}>
                  Incorrect: Me voy a barcelona.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={styles.block_150}>
                  <span className={styles.calibre1}>
                    A context error occurs when a real word is used incorrectly
                    or when the incorrect form of a word is used. This includes
                    homophones and punctuation, among other things.
                  </span>
                </p>
                <p className={styles.block_151}>
                  Correct: No tengo noticias de él.
                </p>
                <p className={styles.block_148}>
                  Incorrect: No tengo noticias de el.
                </p>
                <p className={styles.block_139}>
                  Correct: Pablo ha ido al mercado.
                </p>
                <p className={styles.block_152}>
                  Incorrect: Pablo a ido al mercado.
                </p>
                <p className={styles.block_153}>Correct: Tocar música.</p>
                <p className={styles.block_148}>Incorrect: Tocar musica.</p>
                <p className={styles.block_154}>
                  <span className={styles.calibre1}>
                    Transcribe what is actually spoken. Use context to help with
                    spelling and homophone disambiguation. Look up words if you
                    are unsure.
                  </span>
                </p>
                <p className={styles.block_89}>
                  Correct: ¿Dónde queda el Tigre?
                </p>
                <p className={styles.block_148}>
                  Incorrect: ¿Dónde queda el tigre?
                </p>
                <p className={styles.block_155}>
                  <span className={styles.text_19}>Correct: hacer </span>
                  <span className={styles.text_20}>Incorrect: a ser </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.calibre2}>
                    Explanation: "hacer" returns more hits on Google search.
                  </span>
                </p>
                <p className={styles.block_157}>
                  <span className={styles.calibre1}>
                    Do not correct speaker's grammar if they intentionally say
                    something, even if what they say does not follow the
                    standard grammatical rules of the transcription language.
                  </span>
                </p>
                <p className={styles.block_158}>Correct: manzana bueno</p>
                <p className={styles.block_159}>Incorrect: manzana buena</p>
                <p className={styles.block_161}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>manzana buena </span>
                  <span className={styles.text_21}>" </span>
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>

                <p className={'text'}>
                  <span className={styles.calibre1}>
                    Do not transcribe words that are not spoken, even if they
                    are obviously intended by the speaker. Avoid putting words
                    in the speaker's mouth. However, do transcribe implied times
                    and units of currency.
                  </span>
                </p>
                <p className={styles.block_163}>
                  <span className={styles.text_19}>
                    Correct: Quiero ir Paris.{' '}
                  </span>
                  <span className={styles.text_23}>Example audio: " </span>
                  <span className={styles.text_24}>quiero ir paris </span>
                  <span className={styles.text_23}>"</span>
                </p>
                <p className={styles.block_164}>
                  <span className={styles.calibre2}>
                    Explanation: Do not add the omitted preposition
                  </span>
                </p>
                <p className={styles.block_165}>"a".</p>
                <p className={styles.block_166}>
                  <span className={styles.text_19}>
                    Correct: No me voy a gastar más de 10 €.{' '}
                  </span>
                  <span className={styles.text_23}>Example audio: " </span>
                  <span className={styles.text_24}>
                    <span className={styles.calibre2}>
                      no me voy a gastar más de diez{' '}
                    </span>
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_167}>
                  <span className={styles.calibre1}>
                    Transcribe all words spoken, even if they are not intended
                    by the speaker. For interjections and non-speech
                    vocalizations, refer to Agreed Spelling &gt; Interjections
                    and Difficult Utterances &gt; Hesitations and Truncations.
                  </span>
                </p>
                <p className={styles.block_89}>
                  Correct: YouTube YouTube YouTube
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={styles.block_169}>
                  <span className={styles.calibre1}>
                    A substitution error occurs when another standard word is
                    transcribed instead of what was meant by the speaker. If
                    what the speaker said falls into another category (Context
                    Error, Proper Name, Media Title, etc.), see the relevant
                    section.
                  </span>
                </p>
                <p className={styles.block_170}>
                  <span className={styles.text_19}>
                    Correct: Mañana vamos a Madrid.{' '}
                  </span>
                  <span className={styles.text_20}>
                    Incorrect: Hoy vamos a Madrid{' '}
                  </span>
                </p>
                <p className={styles.block_172}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>mañana vamos a madrid </span>
                  <span className={styles.text_21}>" </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>

                <p className={styles.block_173}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_147}>
                  Correct: ¿Cuál es el punto más alto de Sevilla?
                </p>
                <p className={styles.block_148}>
                  <span className={styles.calibre2}>
                    Incorrect: ¿Cuál es el _punto más alto de{' '}
                  </span>
                </p>
                <p className={styles.block_174}>Sevilla?</p>
                <p className={styles.block_175}>
                  <span className={styles.calibre1}>
                    For most types of punctuation, do not put a space between
                    the preceding word and the punctuation.
                  </span>
                </p>
                <p className={styles.block_176}>Correct: Hola, soy Pedro.</p>
                <p className={styles.block_90}>Incorrect: Hola , soy Pedro.</p>
                <p className={styles.block_91}>
                  Correct: ¿Cuál es la siguiente fase?
                </p>
                <p className={styles.block_90}>
                  Incorrect: ¿ Cuál es la siguiente fase ?
                </p>
                <p className={styles.block_177}>
                  <span className={styles.calibre1}>
                    For quotation marks and similar punctuation, put a space
                    before the opening punctuation, but not necessarily after
                    the closing punctuation.
                  </span>
                </p>
                <p className={styles.block_178}>
                  Correct: Antonio me dijo, "Te quiero."
                </p>
                <p className={styles.block_90}>
                  Incorrect: Antonio me dijo, " Te quiero. "
                </p>
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
