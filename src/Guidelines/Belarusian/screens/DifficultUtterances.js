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
            <PageContentHeader currentPage="longform longform Belarusian" />
            <div className="content text">
              <p>
                <span className={'large-heading'}>Difficult utterances </span>
              </p>
              <p className={'text'}>
                Everything relating to problematic utterances (background noise,
                false starts, etc.) or different language varieties.{' '}
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt </p>
                <p className={'text'}>
                  For Loft 1.0: If you can't understand part of the audio,
                  transcribe only the part you can understand. For the part you
                  cannot understand, create a separate speaker segment and add
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.{' '}
                </p>
                <p className={styles.block_667}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.{' '}
                </p>
                <p className={styles.block_668}>
                  ● No Audio: The audio doesn't load.{' '}
                </p>
                <p className={styles.block_669}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.{' '}
                </p>
                <p className={styles.block_670}>
                  ● Other Locale: All of the speech is in a different language.{' '}
                </p>
                <p className={styles.block_671}>
                  ● Silent Audio: The entire utterance is silent{' '}
                </p>
                <p className={styles.block_672}>
                  ● Noisy Audio: The entire utterance is too noisy.{' '}
                </p>
                <p className={styles.block_673}>
                  ● Other: Other reason (Please explain).{' '}
                </p>
                <p className={styles.block_674}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.{' '}
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations </p>
                <p className={'text'}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.{' '}
                </p>
                <p className={styles.block_677}>
                  <span className={styles.text_4}>Correct: больш за </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>бо- больш за </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_678}>
                  <span className={styles.text_4}>
                    Correct: вялікі большы за{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>вялікі- большы за </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_679}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.{' '}
                </p>
                <p className={styles.block_680}>
                  <span className={styles.text_4}>
                    Correct: Я жыву ў Івацэвічах.{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>я жыву ў Івацэвіч- </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_681}>
                  Explanation: Final sound "ах" was truncated.{' '}
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_4}>Correct: курыны </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>курыны бу- </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_683}>
                  Explanation: Unclear whether they would have{' '}
                </p>
                <p className={styles.block_684}>said "булён" or "бялок". </p>
                <p className={styles.block_685}>
                  <span className={styles.text_4}>
                    Correct: Відэагульня Крэпасць{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>-ідэагульня крэпасць </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_686}>
                  Explanation: Initial "в" was cut off.{' '}
                </p>
                <p className={styles.block_687}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.{' '}
                </p>
                <p className={styles.block_688}>● um </p>
                <p className={styles.block_689}>● uh </p>
                <p className={styles.block_690}>● right </p>
                <p className={styles.block_691}>● you know </p>
                <p className={styles.block_689}>● so </p>
                <p className={styles.block_692}>● like </p>
                <p className={styles.block_693}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.{' '}
                </p>
                <p className={styles.block_694}>
                  Correct: I need to get a new um telephone.{' '}
                </p>
                <p className={styles.block_695}>
                  Correct: Do you like it? Mhm.{' '}
                </p>
                <p className={styles.block_696}>● ah </p>
                <p className={styles.block_697}>● er </p>
                <p className={styles.block_698}>● mhm </p>
                <p className={styles.block_699}>
                  Only transcribe foreign words if they are common in your
                  language or if speakers of your language would understand it.
                  If it is foreign and speakers of your language would not know
                  this word, use the Foreign Speech label as instructed in:
                  Longform generic rules &gt; Unintelligible or foreign or
                  singing.{' '}
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={'heading'}>Background and foreground speech </p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language </p>
              </div>
              <div id="accents">
                <p className={'heading'}>Accents </p>
                <p className={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.{' '}
                </p>
                <p className={styles.block_704}>Correct: Дзе гэта? </p>
                <p className={styles.block_705}>Incorrect: Дзе эта? </p>
                <p className={styles.block_706}>
                  Explanation: Person said "эта" instead of "гэта"{' '}
                </p>
                <p className={styles.block_325}>
                  sound, but it should still be spelled as standard.{' '}
                </p>
                <p className={styles.block_707}>Correct: Дзякуй. </p>
                <p className={styles.block_708}>Incorrect: дікуй. </p>
                <p className={styles.block_709}>
                  Explanation: Speaker said "дзякуй" using "д"{' '}
                </p>
                <p className={styles.block_710}>
                  instead of "дз" and "і" instead of "я". Spell as{' '}
                </p>
                <p className={styles.block_711}>standard. </p>
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
