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
            <PageContentHeader currentPage="longform Armenian" />
            <div className="content text">
              <div id="difficult-utterance">
                <p className={styles.block_570}>Difficult utterances </p>
                <p className={styles.block_571}>
                  Everything relating to problematic utterances (background
                  noise, false starts, etc.) or different language varieties.{' '}
                </p>
                <p className={'heading'}>Skipping a prompt </p>
                <p className={'text'}>
                  For Loft 1.0: If you can't understand part of the audio,
                  transcribe only the part you can understand. For the part you
                  cannot understand, create a separate speaker segment and add
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.{' '}
                </p>
                <p className={styles.block_574}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to choose from. Each contain a
                  description of when is an appropriate time to use it.{' '}
                </p>
                <p className={styles.block_575}>
                  ● No Audio: The audio doesn't load.{' '}
                </p>
                <p className={styles.block_576}>
                  ● No Sound: The waveform indicates there is audio but I can't
                  hear anything.{' '}
                </p>
                <p className={styles.block_577}>
                  ● Other Locale: All of the speech is in a different language.{' '}
                </p>
                <p className={styles.block_578}>
                  ● Silent Audio: The entire utterance is silent{' '}
                </p>
                <p className={styles.block_579}>
                  ● Noisy Audio: The entire utterance is too noisy.{' '}
                </p>
                <p className={styles.block_580}>
                  ● Other: Other reason (Please explain).{' '}
                </p>
                <p className={styles.block_581}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized, transcribe all of it.{' '}
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={styles.block_582}>Hesitations and truncations </p>
                <p className={styles.block_583}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered a word on its own.
                  Otherwise do not transcribe the false start.{' '}
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_17}>
                    Correct: ավելի մեծ քան{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>ավելի մեեեծ քան </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_17}>
                    Correct: մեծ ավելի մեծ քան{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>մեծ- ավելի մեծ քան </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_586}>
                  Complete words that have been truncated only if a very small
                  portion of the word is missing (one syllable or less in a
                  multisyllable word) and it is obvious what the word should be.
                  In cases of ambiguity, do not transcribe the cut-off word. Do
                  not put punctuation at the end of truncated words.{' '}
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_17}>
                    Correct: Ես ապրում եմ Սան Ֆրանցիսկոյում։{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>Ես ապրում եմ Սան </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_5}>Ֆրանցիսկ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_589}>
                  Explanation: Վերջին «ո»-ն չի լսվում։{' '}
                </p>
                <p className={styles.block_590}>
                  <span className={styles.text_17}>
                    Correct: շոկոլադե սալիկ{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>շոկոլադե սալիկ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_591}>
                  Explanation: Պարզ չէ, թե խոսողը նկատի{' '}
                </p>
                <p className={styles.block_592}>ունի «սալիկ» թե «սալիկներ»։ </p>
                <p className={styles.block_593}>
                  <span className={styles.text_17}>
                    Correct: Թիմ Ֆորթրես վիդեո խաղ։{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>-իմ Ֆորթրես վիդեո խաղ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_594}>
                  Explanation: «Թ» տառը ընդհատված է։{' '}
                </p>
                <p className={styles.block_595}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below are examples of filler words in the
                  English language. These may or may not be applicable in the
                  target language. Again, only transcribe filler words that
                  exist in and are used in the target language.{' '}
                </p>
                <p className={styles.block_596}>● um </p>
                <p className={styles.block_597}>● uh </p>
                <p className={styles.block_598}>● right </p>
                <p className={styles.block_599}>● you know </p>
                <p className={styles.block_600}>● so </p>
                <p className={styles.block_601}>● like </p>
                <p className={styles.block_602}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or answers to a question.{' '}
                </p>
                <p className={styles.block_603}>
                  Correct: I need to get a new um telephone.{' '}
                </p>
                <p className={styles.block_604}>
                  Correct: Do you like it? Mhm.{' '}
                </p>
                <p className={styles.block_605}>● ah </p>
                <p className={styles.block_606}>● er </p>
                <p className={styles.block_607}>● mhm </p>
                <p className={styles.block_608}>
                  Only transcribe foreign words if they are common in your
                  language or if speakers of your language would understand it.
                  If it is foreign and speakers of your language would not know
                  this word, use the Foreign Speech label as instructed in:
                  Longform generic rules &gt; Unintelligible or foreign or
                  singing.{' '}
                </p>
              </div>
              <div id="background-and-foreground-speech">
                <p className={styles.block_609}>
                  Background and foreground speech{' '}
                </p>
              </div>
              <div id="foreign-language">
                <p className={styles.block_610}>Foreign language </p>
              </div>
              <div id="accents">
                <p className={styles.block_611}>Accents </p>
                <p className={'text'}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard pronunciations could be from speakers of regional
                  dialects, language learners, or speakers from different
                  countries.{' '}
                </p>
                <p className={styles.block_613}>Correct: Հա՞ց գնել ես։ </p>
                <p className={styles.block_614}>Incorrect: Խա՞ց գնել ես։ </p>
                <br />
                <p className={styles.block_615}>
                  Explanation: Խոսողն ասում է «խաց» հացի փոխարեն: Տառադարձե՛լ
                  ճիշտ տարբերակով։
                </p>
                <p className={styles.block_618}>Correct: Շնորհակալություն։ </p>
                <p className={styles.block_619}>Incorrect: շնոռակալուցուն </p>
                <br />
                <p className={styles.block_620}>
                  Explanation: Խոսողն ասում է «շնոռակալուցուն» ռուսական
                  շեշտադրությամբ: Տառադարձե՛լ ճիշտ տարբերակով։
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
