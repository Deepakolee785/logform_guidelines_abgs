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
            <PageContentHeader currentPage="longform Sundanese" />
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
                <p className={styles.block_708}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.
                </p>
                <p className={styles.block_709}>
                  ● No Audio: The audio doesn't load.
                </p>
                <p className={styles.block_710}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.
                </p>
                <p className={styles.block_711}>
                  ● Other Locale: All of the speech is in a different language.
                </p>
                <p className={styles.block_712}>
                  ● Silent Audio: The entire utterance is silent
                </p>
                <p className={styles.block_713}>
                  ● Noisy Audio: The entire utterance is too noisy.
                </p>
                <p className={styles.block_714}>
                  ● Other: Other reason (Please explain).
                </p>
                <p className={styles.block_715}>
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
                <p className={styles.block_718}>
                  <span className={styles.text_4}>
                    Correct: Maneh teh leuwih beurat ti motor ieu{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    man- maneh teh leuwih beurat{' '}
                  </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_1}>ti motor ieu </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_720}>
                  Correct: sa sarah jeung urang ulin tina jeung
                </p>
                <p className={styles.block_721}>kamari ka ditu</p>
                <p className={styles.block_722}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    sa- sarah jeung urang ulin tina{' '}
                  </span>
                </p>
                <p className={styles.block_723}>
                  <span className={styles.text_1}>jeung kamari ka ditu </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_724}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.
                </p>
                <p className={styles.block_725}>
                  <span className={styles.text_4}>
                    Correct: Urang cicing di San Francisco{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    urang cicing di san francisc-{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_726}>
                  Explanation: Final sound "o" was truncated.
                </p>
                <p className={styles.block_727}>
                  <span className={styles.text_4}>Correct: nyieun pot </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>nyieun pot ge- </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_728}>
                  Explanation: Unclear whether the speaker
                </p>
                <p className={styles.block_729}>
                  would have said "gelas" or "gede".
                </p>
                <p className={styles.block_730}>
                  <span className={styles.text_4}>
                    Correct: Gim video Team Fortress{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    -im video team fortress{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_731}>
                  Explanation: Initial "g" was cut off.
                </p>
                <p className={styles.block_479}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.
                </p>
                <p className={styles.block_732}>● um</p>
                <p className={styles.block_733}>● uh</p>
                <p className={styles.block_734}>● right</p>
                <p className={styles.block_735}>● you know</p>
                <p className={styles.block_733}>● so</p>
                <p className={styles.block_736}>● like</p>
                <p className={styles.block_737}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.
                </p>
                <p className={styles.block_738}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_739}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_740}>● ah</p>
                <p className={styles.block_741}>● er</p>
                <p className={styles.block_742}>● mhm</p>
                <p className={styles.block_743}>
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
                <p className={styles.block_748}>Correct: Maneh mah pitnah?</p>
                <p className={styles.block_749}>Incorrect: Maneh mah fitnah?</p>
                <p className={styles.block_750}>
                  Explanation: Person said "fitnah" instead of
                </p>
                <p className={styles.block_751}>
                  "pitnah", but it should still be spelled as
                </p>
                <p className={styles.block_752}>standard.</p>
                <p className={styles.block_753}>Correct: Citeureup.</p>
                <p className={styles.block_754}>Incorrect: Citeureueup.</p>
                <p className={styles.block_755}>
                  Explanation: Non-Sundanese speakers will find
                </p>
                <p className={styles.block_756}>
                  it hard to say "citeureup", but it should still be
                </p>
                <p className={styles.block_757}>spelled as standard.</p>
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
