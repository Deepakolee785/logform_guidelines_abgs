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
            <PageContentHeader currentPage="Longform Javanese" />
            <div className="content text">
              <p className={styles.calibre1}>Difficult utterances </p>

              <p className={styles.block_368}>
                <span className={styles.text_}>
                  Everything relating to problematic utterances (background
                  noise, false starts, etc.) or&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  different language varieties.&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_343}>
                <span className={styles.calibre1}>Skipping a prompt </span>
              </p>
              <p className={styles.block_369}>
                <span className={styles.text_}>
                  For Loft 1.0: If you can't understand part of the audio,
                  transcribe only the part you can&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  understand. For the part you cannot understand, create a
                  separate speaker segment&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  and add the Unintelligible label as instructed in: Longform
                  generic rules &gt; Unintelligible&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  or foreign or singing.&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_370}>
                <span className={styles.text_39}>
                  For Loft 2.0: Below is a list of reasons to skip the audio
                  that may be available for you to&nbsp;
                </span>
                <span className={styles.text_40}> </span>
                <span className={styles.text_39}>
                  choose from. Each contain a description of when is an
                  appropriate time to use it.&nbsp;
                </span>
                <span className={styles.text_40}> </span>
                <span className={styles.text_41}>● </span>
                <span className={styles.text_42}>
                  No Audio: The audio doesn't load.&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_371}>
                <span className={styles.text_12}>● </span>
                <span className={styles.text_6}>
                  No Sound: The waveform indicates there is audio but I can't
                  hear anything.&nbsp;{' '}
                </span>
                <span className={styles.text_12}>● </span>
                <span className={styles.text_6}>
                  Other Locale: All of the speech is in a different
                  language.&nbsp;
                </span>
              </p>
              <p className={styles.block_113}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>
                  Silent Audio: The entire utterance is silent&nbsp;
                </span>
              </p>
              <p className={styles.block_107}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>
                  Noisy Audio: The entire utterance is too noisy.&nbsp;
                </span>
              </p>
              <p className={styles.block_107}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>
                  Other: Other reason (Please explain).&nbsp;
                </span>
              </p>
              <p className={styles.block_372}>
                <span className={styles.text_}>
                  For utterances that contain speech that is user-generated,
                  pre-recorded, or synthesized,&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  transcribe all of it.&nbsp;
                </span>
              </p>
              <p className={styles.block_373}>
                <span className={styles.calibre1}>
                  Hesitations and truncations{' '}
                </span>
              </p>
              <p className={styles.block_374}>
                <span className={styles.text_}>
                  If a speaker says only the beginning part of the word,
                  transcribe it if it can be considered&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  a word on its own. Otherwise do not transcribe the false
                  start.&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_167}>
                <span className={styles.text_18}>
                  Correct: sugeng enjing&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>su- sugeng enjing ​</span>
                <span className={styles.text_21}>"&nbsp; </span>
              </p>
              <p className={styles.block_375}>
                <span className={styles.text_}>
                  Complete words that have been truncated only if a very small
                  portion of the word is&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  missing (one syllable or less in a multisyllable word) and it
                  is obvious what the word&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  should be. In cases of ambiguity, do not transcribe the
                  cut-off word. Do not put&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  punctuation at the end of truncated words.&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_376}>
                <span className={styles.text_18}>
                  Correct: Omahku nang Palangkaraya&nbsp;{' '}
                </span>
                <span className={styles.text_21}>Example audio: "​ </span>
                <span className={styles.text_22}>
                  omahku nang palangkaray- ​
                </span>
                <span className={styles.text_21}>"&nbsp; </span>
                <span className={styles.text_19}>
                  Explanation: Huruf "a" di akhir kata terpotong.&nbsp;
                </span>
              </p>
              <p className={styles.block_377}>
                <span className={styles.text_}>
                  Transcribe any filler words that are applicable and used in
                  the target language. Below&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  are examples of filler words in the English language. These
                  may or may not be&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  applicable in the target language. Again, only transcribe
                  filler words that exist in and are&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  used in the target language.&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_113}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>um&nbsp; </span>
              </p>
              <p className={styles.block_107}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>uh&nbsp; </span>
              </p>
              <p className={styles.block_107}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>right&nbsp; </span>
              </p>
              <p className={styles.block_107}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>you know&nbsp; </span>
              </p>
              <p className={styles.block_107}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>so&nbsp; </span>
              </p>
              <p className={styles.block_107}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>like&nbsp; </span>
              </p>
              <p className={styles.block_378}>
                <span className={styles.text_}>
                  Below is a list of all filler words that should only be
                  transcribed if affirmations or&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  answers to a question.&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_86}>
                Correct: I need to get a new um telephone.&nbsp;
              </p>
              <p className={styles.block_149}>
                Correct: Do you like it? Mhm.&nbsp;
              </p>
              <p className={styles.block_379}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>ah&nbsp; </span>
              </p>
              <p className={styles.block_107}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>er&nbsp; </span>
              </p>
              <p className={styles.block_107}>
                <span className={styles.text_7}>● </span>
                <span className={styles.text_9}>mhm&nbsp; </span>
              </p>
              <p className={styles.block_380}>
                <span className={styles.text_}>
                  Only transcribe foreign words if they are common in your
                  language or if speakers of&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  your language would understand it. If it is foreign and
                  speakers of your language would&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  not know this word, use the Foreign Speech label as instructed
                  in: Longform generic&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  rules &gt; Unintelligible or foreign or singing.&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_381}>
                <span className={styles.calibre1}>
                  Background and foreground speech{' '}
                </span>
              </p>
              <p className={styles.block_382}>
                <span className={styles.calibre1}>Foreign language </span>
              </p>
              <p className={styles.block_383}>
                <span className={styles.calibre1}>Accents </span>
              </p>
              <p className={styles.block_384}>
                <span className={styles.text_}>
                  Correct non-standard pronunciations to their standard ones.
                  Non-standard&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  pronunciations could be from speakers of regional dialects,
                  language learners, or&nbsp;
                </span>
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>
                  speakers from different countries.&nbsp;
                </span>
                <span className={styles.text_1}> </span>
              </p>
              <p className={styles.block_362}>
                <span className={styles.text_18}>
                  Correct: Bapak dhahar.&nbsp;{' '}
                </span>
                <span className={styles.text_19}>
                  Incorrect: Bapak dahar&nbsp;{' '}
                </span>
              </p>
              <p className={styles.block_385}>Correct: Laler.&nbsp;</p>
              <p className={styles.block_386}>Incorrect: rarer&nbsp;</p>
              <p className={styles.block_159}>
                Explanation: Penutur mengucapkan "da", bukan&nbsp; "dha", namun
                seharusnya dieja sesuai&nbsp; pengucapan standarnya.&nbsp;
              </p>
              <p className={styles.block_387}>
                Explanation: Penutur mengucapkan "laler"&nbsp; dengan akses
                Jepang, yang menggunakan "r"&nbsp; bukan "l". Dieja sesuai
                pengucapan standarnya.&nbsp;
              </p>
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
