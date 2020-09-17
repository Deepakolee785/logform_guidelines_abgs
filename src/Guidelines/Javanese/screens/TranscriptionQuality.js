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
            <PageContentHeader currentPage="Longform Javanese" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={styles.block_130}>
                <span className={styles.text_16}>
                  Comply with the standard rules of the writing system.&nbsp;
                </span>
                <span className={styles.text_17}> </span>
              </p>
              <div id="typo">
                <p className={'heading'}>Typo</p>
                <p className={'text'}>
                  A typo results in the unintentional creation of a
                  non-word.&nbsp;
                </p>
                <p className={styles.block_132}>
                  <span className={styles.text_}>
                    Avoid making any typographical errors. Carefully check your
                    work before marking items&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>as "complete".&nbsp;</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>
                  Correct: Deloken nang Facebook.&nbsp;
                </p>
                <p className={styles.block_89}>
                  Incorrect: Deloken nang Facebok.&nbsp;
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={styles.block_134}>
                  <span className={styles.text_}>
                    Kesalahan konteks terjadi jika kata yang sebenarnya
                    digunakan secara salah atau jika&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    bentuk kata yang salah digunakan. Kesalahan ini mencakup
                    homofon.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>Correct: Putrane loro.&nbsp;</p>
                <p className={styles.block_89}>
                  Incorrect: Putrane lara.&nbsp;
                </p>
                <p className={styles.block_88}>
                  Correct: Pancen dadi manten iku manut antepe&nbsp;
                </p>
                <p className={styles.block_135}>dhewe-dhewe.&nbsp;</p>
                <p className={styles.block_89}>
                  Incorrect: Pancen dadi manten iku manut&nbsp;
                </p>
                <p className={styles.block_136}>antebe dhewe-dhewe.&nbsp;</p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words</p>
                <p className={styles.block_137}>
                  <span className={styles.text_}>
                    Do not transcribe words that are not spoken, even if they
                    are obviously intended by the&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    speaker. Avoid putting words in the speaker's mouth.
                    However, do transcribe implied&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    times and units of currency.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_138}>
                  <span className={styles.text_18}>
                    Correct: Regane klambi iki Rp200.000.&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Incorrect: Regane klambi iki 200000.&nbsp;
                  </span>
                </p>
                <p className={styles.block_139}>
                  <span className={styles.text_18}>
                    Correct: Ono opo nang omahku?&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Incorrect: Ono opo awakmu nang omahku?&nbsp;
                  </span>
                </p>
                <p className={styles.block_140}>
                  <span className={styles.text_17}>Example audio: "​ </span>
                  <span className={styles.text_20}>
                    regane klambi iki rong atus&nbsp; sewu ​
                  </span>
                  <span className={styles.text_17}>"&nbsp; </span>
                </p>
                <p className={styles.block_141}>
                  Explanation: Implied currency, add "Rp" even&nbsp; though it
                  is not spoken.&nbsp;
                </p>
                <p className={styles.block_142}>
                  <span className={styles.text_21}>Example audio: "​ </span>
                  <span className={styles.text_22}>ono opo nang omahku ​</span>
                  <span className={styles.text_21}>"&nbsp; </span>
                  <span className={styles.text_19}>
                    Explanation: Do not add omitted "awakmu".&nbsp;
                  </span>
                </p>
                <p className={styles.block_143}>
                  <span className={styles.text_}>
                    Transcribe all words spoken, even if they are not intended
                    by the speaker. For&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    interjections and non-speech vocalizations, refer to Agreed
                    Spelling &gt; Interjections and&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    Difficult Utterances &gt; Hesitations and Truncations.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_144}>
                  <span className={styles.text_18}>
                    Correct: Awakmu sido tuku wortel cambah?&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Penutur secara jelas mengoreksi&nbsp; ucapannya
                    sendiri setelah salah mengucapkan&nbsp;
                  </span>
                </p>
                <p className={styles.block_145}>"wortel".&nbsp;</p>
                <p className={styles.block_146}></p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={styles.block_148}>
                  Use only one space between words and sentences.&nbsp;
                </p>
                <p className={styles.block_149}>
                  Correct: Apa bangunan sing paling dhuwur ing&nbsp;
                </p>
                <p className={styles.block_150}>Jakarta?&nbsp;</p>
                <p className={styles.block_89}>
                  Incorrect: Apa bangunan sing paling dhuwur ing&nbsp;
                </p>
                <p className={styles.block_151}>_Jakarta?&nbsp;</p>
                <p className={styles.block_88}>
                  Correct: Pikirku yo ngono. Ayo dicoba.&nbsp;
                </p>
                <p className={styles.block_89}>
                  Incorrect: Pikirku yo ngono. _Ayo dicoba.&nbsp;
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_}>
                    For most types of punctuation, do not put a space between
                    the preceding word and the&nbsp;
                  </span>
                  <span className={styles.text_1}></span>
                  <span className={styles.text_}>punctuation.&nbsp;</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>
                  Correct: Awakmu teko kan?&nbsp;
                </p>
                <p className={styles.block_89}>
                  Incorrect: Awakmu teko kan ?&nbsp;
                </p>
                <p className={styles.block_88}>
                  Correct: Halo, iki Dr. Yudha.&nbsp;
                </p>
                <p className={styles.block_89}>
                  Incorrect: Halo, iki Dr . Smith.&nbsp;
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
