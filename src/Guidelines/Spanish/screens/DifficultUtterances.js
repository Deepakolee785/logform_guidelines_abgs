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
            <PageContentHeader currentPage="Longform Spanish" />
            <div className="content text">
              <p className={'large-heading'}>Difficult utterances </p>
              <p className={'text'}>
                <span className={styles.text_2}>
                  Everything relating to problematic utterances (background
                  noise, false starts, etc.) or{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>
                  different language varieties.
                </span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="skipping-a-prompt">
                <p className={'heading'}>Skipping a prompt</p>
                <p className={styles.block_533}>
                  <span className={styles.text_2}>
                    For Loft 1.0: If you can't understand part of the audio,
                    transcribe only the part you can{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    understand. For the part you cannot understand, create a
                    separate speaker segment
                  </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_2}>
                    and add the Unintelligible label as instructed in: Longform
                    generic rules &gt; Unintelligible{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>or foreign or singing.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_2}>
                    For Loft 2.0: Below is a list of reasons to skip the audio
                    that may be available for you to{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    choose from. Each contain a description of when is an
                    appropriate time to use it.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>
                    No Audio: The audio doesn't load.{' '}
                  </span>
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>
                    No Sound: The waveform indicates there is audio but I can't
                    hear anything.{' '}
                  </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>
                    Other Locale: All of the speech is in a different language.
                  </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>
                    Silent Audio: The entire utterance is silent
                  </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>
                    Noisy Audio: The entire utterance is too noisy.
                  </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>
                    Other: Other reason (Please explain).{' '}
                  </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_2}>
                    For utterances that contain speech that is user-generated,
                    pre-recorded, or synthesized,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>transcribe all of it.</span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="hesitations-and-truncations">
                <p className={'heading'}>Hesitations and truncations</p>
                <p className={styles.block_539}>
                  <span className={styles.text_2}>
                    If a speaker says only the beginning part of the word,
                    transcribe it if it can be considered{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    a word on its own. Otherwise do not transcribe the false
                    start.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_299}>
                  <span className={styles.text_19}>
                    Correct: Compraron un libro.{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    compra compraron un libro{' '}
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_2}>
                    If a user repeats a sentence for the sake of the phone,
                    format the repetition as a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence if it's restating (as a sentence) what the person
                    has said.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  Correct: Te quiero. Te quiero.
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_2}>
                    Complete words that have been truncated only if a very small
                    portion of the word is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    missing (one syllable or less in a multisyllable word) and
                    it is obvious what the word{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    should be. In cases of ambiguity, do not transcribe the
                    cut-off word. Do not put{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    punctuation at the end of truncated words.
                  </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_19}>
                    Correct: Voy a San Francisco{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>voy a san francisc- </span>
                  <span className={styles.text_32}>" </span>
                  <span className={styles.text_20}>
                    Explanation: Final sound "o" was truncated.
                  </span>
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_19}>
                    Correct: Team Fortress video game{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    -eam fortress video game{' '}
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_2}>
                    If a truncation occurs mid-quote, use an end quotation mark
                    even if there is possibly{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>more intended content.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>
                  Correct: Miguel dijo, "Tendremos que"
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_2}>
                    For numbers, stick to what is uttered, even if you know this
                    is not all the speaker is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>going to say.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_19}>
                    Correct: Calle de Méndez Álvaro, 60 y{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    <span className={styles.calibre2}>
                      calle de méndez álvaro sesenta y ci
                    </span>
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_547}>
                  <span className={styles.text_2}>
                    Transcribe any filler words that are applicable and used in
                    the target language. Below{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    are examples of filler words in the English language. These
                    may or may not be{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    applicable in the target language. Again, only transcribe
                    filler words that exist in and are{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    used in the target language.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>um </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>uh </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>right </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>you know </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>so </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>like </span>
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_2}>
                    Below is a list of all filler words that should only be
                    transcribed if affirmations or{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>answers to a question.</span>
                </p>
                <p className={styles.block_176}>
                  Correct: I need to get a new um telephone.
                </p>
                <p className={styles.block_139}>
                  Correct: Do you like it? Mhm.
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>ah </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>er </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>mhm </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_2}>
                    Only transcribe foreign words if they are common in your
                    language or if speakers of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    your language would understand it. If it is foreign and
                    speakers of your language would{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    not know this word, use the Foreign Speech label as
                    instructed in: Longform generic{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    rules &gt; Unintelligible or foreign or singing.
                  </span>
                  <span className={styles.text_3}> </span>
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
                <p className={styles.block_554}>
                  <span className={styles.text_2}>
                    Latin American and Iberian spellings may vary according to
                    the locale. Choose the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    appropriate spelling relying on the locale.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_163}>
                  <span className={styles.text_19}>
                    Correct: Llevame a casa.{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>lleváme </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.calibre2}>
                    Explanation: Person speaks with an Argentinian
                  </span>
                </p>
                <p className={styles.block_556}>Spanish prosody.</p>
                <p className={styles.block_557}>
                  <span className={styles.text_19}>
                    Correct: Llévame a casa.{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>llévame </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_558}>
                  <span className={styles.calibre2}>
                    Explanation: Person speaks with an Iberian
                  </span>
                </p>
                <p className={styles.block_559}>Spanish prosody.</p>
                <p className={styles.block_560}>
                  <span className={styles.text_2}>
                    If you hear a word that does not sound like a standard word
                    of your language, but it is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    obviously based on real words, suffixes, or prefixes,
                    transcribe as is.
                  </span>
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
