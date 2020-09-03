import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const DifficultUtterances = () => {
  const classes = useStyles()

  const headingIds = [
    'skipping-a-prompt',
    'hesitations-and-truncations',
    'background-and-foreground-speech',
    'foreign-language',
    'accents',
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
              <p className={'large-heading'}>Difficult utterances </p>
              <p className={'text'}>
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt</p>
                <p className={'text'}>
                  For Loft 1.0: If you can't understand part of the audio,
                  transcribe only the part you can understand. For the part you
                  cannot understand, create a separate speaker segment and add
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
                </p>
                <p className={styles.block_538}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>
                <p className={styles.block_539}>
                  ● No Audio: The audio doesn't load.
                </p>
                <p className={styles.block_540}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.
                </p>
                <p className={styles.block_541}>
                  ● Other Locale: All of the speech is in a different language.
                </p>
                <p className={styles.block_542}>
                  ● Silent Audio: The entire utterance is silent
                </p>
                <p className={styles.block_543}>
                  ● Noisy Audio: The entire utterance is too noisy.
                </p>
                <p className={styles.block_544}>
                  ● Other: Other reason (Please explain).
                </p>
                <p className={styles.block_545}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={'text'}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.
                </p>
                <p className={styles.block_548}>Correct: Nitakuita.</p>
                <p className={styles.block_549}>Incorrect: Nitak nitakuita</p>
                <p className={styles.block_550}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>nitak- nitakuita </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_551}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_4}>
                    Correct: Kenya ni jirani na Tanzania.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    kenya ni jirani na tanzan{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_553}>
                  Explanation: Final sound "ia" was truncated.
                </p>
                <p className={styles.block_390}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_554}>● um</p>
                <p className={styles.block_555}>● uh</p>
                <p className={styles.block_556}>● right</p>
                <p className={styles.block_557}>● you know</p>
                <p className={styles.block_555}>● so</p>
                <p className={styles.block_558}>● like</p>
                <p className={styles.block_559}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_560}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_561}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_562}>● ah</p>
                <p className={styles.block_563}>● er</p>
                <p className={styles.block_564}>● mhm</p>
                <p className={styles.block_565}>
                  Only transcribe foreign words if they are common in your
                  language or if speakers of your language would understand it.
                  If it is foreign and speakers of your language would not know
                  this word, use the Foreign Speech label as instructed in:
                  Longform generic rules &gt; Unintelligible or foreign or
                  singing.
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech</p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language</p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents</p>
                <p className={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.
                </p>
                <p className={styles.block_570}>Correct: thelathini</p>
                <p className={styles.block_571}>Incorrect: salasini</p>
                <p className={styles.block_572}>
                  Explanation: The speaker has an accent.
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Difficult Utterances"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default DifficultUtterances

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
