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
            <PageContentHeader currentPage="Longform Polish" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality</p>
              <p className={styles.block_141}>
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
                  Correct: Dodaj mnie na Facebooku.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Dodaj mnie na Faceboku.
                </p>
                <p className={styles.block_146}>
                  Use the proper capitalization for standard words that require
                  it.
                </p>
              </div>
              <div id="context-error">
                <p className={'heading'}>Context error</p>
                <p className={styles.block_148}>
                  <span className={styles.calibre1}>
                    A context error occurs when a real word is used incorrectly
                    or when the incorrect form of a word is used. This includes
                    homophones and punctuation, among other things.
                  </span>
                </p>
                <p className={styles.block_149}>Correct: Co jesz?</p>
                <p className={styles.block_150}>Incorrect: Co jeż?</p>
                <p className={styles.block_139}>
                  Correct: Jadę jutro nad morze.
                </p>
                <p className={styles.block_150}>
                  Incorrect: Jadę jutro nad może.
                </p>
                <p className={styles.block_151}>
                  <span className={styles.calibre1}>
                    Transcribe what is actually spoken. Use context to help with
                    spelling and homophone disambiguation. Look up words if you
                    are unsure.
                  </span>
                </p>
                <p className={styles.block_89}>
                  Correct: Nad miastem unosi się smog.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Nad miastem unosi się smok.
                </p>
                <p className={styles.block_152}>
                  <span className={styles.text_17}>
                    <span className={styles.calibre1}>
                      Do not correct speaker's grammar if they intentionally say
                      something, even if what they say does not follow the
                      standard grammatical rules of the transcription language.
                    </span>
                  </span>
                </p>
              </div>
              <div id="adding-missing-words">
                <p className={'heading'}>Added or missing words </p>
                <p className={styles.block_153}>
                  <span className={styles.calibre1}>
                    Do not transcribe words that are not spoken, even if they
                    are obviously intended by the speaker. Avoid putting words
                    in the speaker's mouth. However, do transcribe implied times
                    and units of currency.
                  </span>
                </p>
                <p className={styles.block_154}>
                  <span className={styles.calibre2}>
                    Correct: Zapłaciłem 2500,00 zł za bilet samolotowy.
                  </span>
                </p>
                <p className={styles.block_155}>
                  <span className={styles.calibre2}>
                    Incorrect: Zapłaciłem 250000 za bilet samolotowy.
                  </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      zapłaciłem dwa tysiące pięćset za bilet samolotowy
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_157}>
                  <span className={styles.calibre2}>
                    Explanation: Implied currency, add "zł" even though it is
                    not spoken.
                  </span>
                </p>
                <p className={styles.block_158}>
                  <span className={styles.calibre1}>
                    Transcribe all words spoken, even if they are not intended
                    by the speaker. For interjections and non-speech
                    vocalizations, refer to Agreed Spelling &gt; Interjections
                    and Difficult Utterances &gt; Hesitations and Truncations.
                  </span>
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_21}>
                    Correct: Ile malin jagód mam kupić?{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Ile jagód mam kupić?{' '}
                  </span>
                </p>
              </div>
              <div id="substitution">
                <p className={'heading'}>Substitution</p>
                <p className={styles.block_161}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    ile malin jagód mam kupić{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_162}>
                  <span className={styles.calibre2}>
                    Explanation: Speaker corrected themselves after mistakenly
                    saying "malin".
                  </span>
                </p>
                <p className={styles.block_163}>
                  <span className={styles.calibre1}>
                    A substitution error occurs when another standard word is
                    transcribed instead of what was meant by the speaker. If
                    what the speaker said falls into another category (Context
                    Error, Proper Name, Media Title, etc.), see the relevant
                    section.
                  </span>
                </p>
                <p className={styles.block_164}>
                  <span className={styles.text_21}>
                    Correct: Kto grał w Star Wars?{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Kto grał w Star Trek?{' '}
                  </span>
                </p>
              </div>
              <div id="spacing">
                <p className={'heading'}>Spacing</p>
                <p className={styles.block_166}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>kto grał w star wars </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_167}>
                  Use only one space between words and sentences.
                </p>
                <p className={styles.block_168}>
                  <span className={styles.calibre2}>
                    Correct: Jaki jest najwyższy budynek w{' '}
                  </span>
                </p>
                <p className={styles.block_169}>Warszawie?</p>
                <p className={styles.block_150}>
                  <span className={styles.calibre2}>
                    Incorrect: Jaki jest najwyższy budynek w{' '}
                  </span>
                </p>
                <p className={styles.block_170}>_Warszawie?</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Zgadzam się z tobą. W takim razie
                  </span>
                </p>
                <p className={styles.block_171}>spróbujmy.</p>
                <p className={styles.block_150}>
                  <span className={styles.calibre2}>
                    Incorrect: Zgadzam się z tobą. _W takim razie
                  </span>
                </p>
                <p className={styles.block_172}>spróbujmy.</p>
                <p className={styles.block_173}>
                  <span className={styles.calibre1}>
                    For most types of punctuation, do not put a space between
                    the preceding word and the punctuation.
                  </span>
                </p>
                <p className={styles.block_89}>Correct: O której będziesz?</p>
                <p className={styles.block_90}>
                  Incorrect: O której będziesz ?
                </p>
                <p className={styles.block_91}>
                  Correct: Dzień dobry, tu dyr. Góral.
                </p>
                <p className={styles.block_90}>
                  Incorrect: Dzień dobry, tu dyr . Góral.
                </p>
                <p className={styles.block_174}>
                  <span className={styles.calibre1}>
                    For quotation marks and similar punctuation, put a space
                    before the opening punctuation, but not necessarily after
                    the closing punctuation.
                  </span>
                </p>
                <p className={styles.block_136}>
                  Correct: Adam powiedział: "Kocham cię".
                </p>
                <p className={styles.block_90}>
                  Incorrect: Adam powiedział: "Kocham cię" .
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
