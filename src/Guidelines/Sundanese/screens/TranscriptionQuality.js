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
            <PageContentHeader currentPage="longform Sundanese" />
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
                <p className={styles.block_221}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".
                </p>
                <p className={styles.block_222}>
                  Correct: Tingali na Facebook.
                </p>
                <p className={styles.block_223}>
                  Incorrect: Tingali na Facebok.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_226}>Correct: Abdi tuang apel.</p>
                <p className={styles.block_227}>Incorrect: Abdi tihang apel.</p>
                <p className={styles.block_228}>Correct: your favorite movie</p>
                <p className={styles.block_229}>
                  Incorrect: you're favorite movie
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
                <p className={styles.block_232}>
                  Correct: Abdi hoyong ningali pilem X-Men.
                </p>
                <p className={styles.block_233}>
                  Incorrect: Abdi hoyong ningali pilem barat
                </p>
                <p className={styles.block_234}>X-Men.</p>
                <p className={styles.block_235}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    abdi hoyong ningali pilem x{' '}
                  </span>
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_1}>men </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_237}>
                  Explanation: Do not add omitted "barat".
                </p>
                <p className={styles.block_238}>
                  Correct: Rp349 mahal teuing jang harga
                </p>
                <p className={styles.block_239}>permen.</p>
                <p className={styles.block_240}>
                  Incorrect: 349 mahal teuing jang harga permen.
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    tilu ratus opat puluh salapan{' '}
                  </span>
                </p>
                <p className={styles.block_242}>
                  <span className={styles.text_1}>
                    mahal teuing jang harga permen{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_243}>
                  Explanation: Implied currency, add "Rp" even
                </p>
                <p className={styles.block_244}>though it is not spoken.</p>
                <p className={styles.block_245}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_246}>
                  <span className={styles.text_4}>
                    Correct: Aya sabara stroberi lauk teri di dinya?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker clearly corrected{' '}
                  </span>
                </p>
                <p className={styles.block_247}>
                  themselves after mistakenly saying "stroberi".
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_251}>
                  Correct: Naon gedung nu pang jangkungna di
                </p>
                <p className={styles.block_252}>New York?</p>
                <p className={styles.block_253}>
                  Incorrect: Naon gedung nu pang jangkungna di
                </p>
                <p className={styles.block_254}>_New York?</p>
                <p className={styles.block_255}>
                  Correct: Nya bener. Hayu cobaan.
                </p>
                <p className={styles.block_256}>
                  Incorrect: Nya bener. _Hayu cobaan.
                </p>
                <p className={styles.block_257}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_258}>Correct: Maneh bakal datang?</p>
                <p className={styles.block_259}>
                  Incorrect: Maneh bakal datang ?
                </p>
                <p className={styles.block_260}>
                  Correct: Halo, ieu Dr. Smith.
                </p>
                <p className={styles.block_261}>
                  Incorrect: Halo, ieu Dr . Smith .
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
