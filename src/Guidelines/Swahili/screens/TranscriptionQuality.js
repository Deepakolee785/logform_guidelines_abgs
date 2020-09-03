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
            <PageContentHeader currentPage="longform Swahili" />
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
                <p className={styles.block_221}>Correct: sanaa</p>
                <p className={styles.block_222}>Incorrect: sana</p>
                <p className={styles.block_223}>Correct: matata</p>
                <p className={styles.block_224}>Incorrect: matiti</p>
                <p className={styles.block_225}>Correct: Nilienda Nairobi.</p>
                <p className={styles.block_226}>Incorrect: Nilienda nailobi.</p>
                <p className={styles.block_227}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={'text'}>
                  A context error occurs when a real word is used incorrectly or
                  when the incorrect form of a word is used. This includes
                  homophones and punctuation, among other things.
                </p>
                <p className={styles.block_230}>
                  Correct: Adhabu ya kaburi aijuaye maiti.
                </p>
                <p className={styles.block_231}>
                  Incorrect: Adabu ya kaburi aijuaye maiti.
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
                <p className={styles.block_234}>
                  Correct: huyo mtu mnafiki sana
                </p>
                <p className={styles.block_235}>
                  Incorrect: huyo mtu ni mnafiki sana
                </p>
                <p className={styles.block_236}>
                  Explanation: Do not add omitted "ni".
                </p>
                <p className={styles.block_237}>
                  <span className={styles.text_4}>
                    Correct: shati kwa Ksh. 20{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>shati kwa ishirini </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_238}>
                  Explanation: implied currency add "Ksh."
                </p>
                <p className={styles.block_239}>
                  Transcribe all words spoken, even if they are not intended by
                  the speaker. For interjections and non-speech vocalizations,
                  refer to Agreed Spelling &gt; Interjections and Difficult
                  Utterances &gt; Hesitations and Truncations.
                </p>
                <p className={styles.block_240}>
                  <span className={styles.text_4}>
                    Correct: Nilimwona nanii mwenye gari.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    nilimwona nanii mwenye gari{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_241}>
                  Explanation: Speaker clearly corrected
                </p>
                <p className={styles.block_242}>themselves after "nanii".</p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={'text'}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_246}>
                  Correct: Mwalimu alikuja baada ya siku tatu.
                </p>
                <p className={styles.block_247}>
                  Incorrect: Mwalimu alikuja baada ya siku _tatu.
                </p>
                <p className={styles.block_248}>Correct: Unatoka wapi?</p>
                <p className={styles.block_249}>Incorrect: Unatoka _wapi?</p>
                <p className={styles.block_250}>
                  For most types of punctuation, do not put a space between the
                  preceding word and the punctuation.
                </p>
                <p className={styles.block_251}>
                  Correct: Utafika lini? Ukifika, nipigie.
                </p>
                <p className={styles.block_252}>
                  Incorrect: Utafika lini ? Ukifika , nipigie.
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
