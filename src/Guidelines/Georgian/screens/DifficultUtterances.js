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
            <PageContentHeader currentPage="longform Georgian" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances</p>
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
                <p className={styles.block_700}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>
                <p className={styles.block_701}>
                  ● No Audio: The audio doesn't load.
                </p>
                <p className={styles.block_702}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.
                </p>
                <p className={styles.block_703}>
                  ● Other Locale: All of the speech is in a different language.
                </p>
                <p className={styles.block_704}>
                  ● Silent Audio: The entire utterance is silent
                </p>
                <p className={styles.block_705}>
                  ● Noisy Audio: The entire utterance is too noisy.
                </p>
                <p className={styles.block_706}>
                  ● Other: Other reason (Please explain).
                </p>
                <p className={styles.block_707}>
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
                <p className={styles.block_710}>
                  <span className={styles.text_15}>Correct: აჯაფსანდალი </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>აჯ</span>
                  <span className={styles.text_19}>- </span>
                  <span className={styles.text_14}>აჯაფსანდალი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_711}>
                  <span className={styles.text_15}>
                    Correct: ხაჭა ხაჭაპური{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>ხაჭა</span>
                  <span className={styles.text_19}>- </span>
                  <span className={styles.text_14}>ხაჭაპური </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_712}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_15}>
                    Correct: მე ვცხოვრობ თბილისი.{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>მე ვცხოვრობ სან თბილის</span>
                  <span className={styles.text_19}>- </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_714}>
                  Explanation: Final sound "ი" was truncated.
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_15}>Correct: ქათმის ქვაბი </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>ქათმის ქვამი ღვეზელ</span>
                  <span className={styles.text_19}>- </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_716}>
                  Explanation: Unclear whether they would have
                </p>
                <p className={styles.block_717}>
                  said "ღვეზელი" or "ღვეზელები".
                </p>
                <p className={styles.block_505}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_718}>● um</p>
                <p className={styles.block_719}>● uh</p>
                <p className={styles.block_720}>● right</p>
                <p className={styles.block_721}>● you know</p>
                <p className={styles.block_719}>● so</p>
                <p className={styles.block_722}>● like</p>
                <p className={styles.block_723}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_724}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_725}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_726}>● ah</p>
                <p className={styles.block_727}>● er</p>
                <p className={styles.block_728}>● mhm</p>
                <p className={styles.block_729}>
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
                <p className={styles.block_734}>Correct: ეს სად არის?</p>
                <p className={styles.block_735}>Incorrect: აგი სადაა?</p>
                <p className={styles.block_736}>
                  Explanation: Person used dialectical "აგი
                </p>
                <p className={styles.block_737}>
                  სადაა?", but the phrase should still be spelled
                </p>
                <p className={styles.block_738}>as standard "ეს სად არის?".</p>
                <p className={styles.block_739}>Correct: ბაყაყი</p>
                <p className={styles.block_740}>Incorrect: ბაკაკი</p>
                <p className={styles.block_741}>
                  Explanation: Person said "ბაყაყი" with an
                </p>
                <p className={styles.block_742}>
                  accent accent, using an "კ" instead of a "ყ"
                </p>
                <p className={styles.block_743}>
                  sound. Non-native Georgian speakers often
                </p>
                <p className={styles.block_744}>confuse "კ" and "ყ" sounds.</p>
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
