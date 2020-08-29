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
            <PageContentHeader currentPage="longform Bangla" />
            <div className="content text">
              <p className={'large-heading'}>Transcription quality </p>
              <p className={'text'}>
                The following general rules must be obeyed at all times when
                transcribing.{' '}
              </p>
              <div id="typo">
                <p className={'heading'}>Typo </p>
                <p className={'text'}>
                  Avoid making any typographical errors. Carefully check your
                  work before marking items as "complete".{' '}
                </p>
                <p className={styles.block_219}>
                  Use proper capitalization for proper nouns, names and titles,
                  unless it would contradict a rule in these guidelines.{' '}
                </p>
                <p className={styles.block_145}>
                  Include ending punctuation at the end of sentences, unless it
                  would contradict a rule in these guidelines.{' '}
                </p>
                <p className={styles.block_220}>
                  Transcribe what is actually spoken. Use context to help with
                  spelling and homophone disambiguation. Look up words if you
                  are unsure.{' '}
                </p>
                <p className={styles.block_221}>
                  Do not correct the grammar of the speakers in the audio.
                  Transcribe what they say.{' '}
                </p>
                <p className={styles.block_222}>
                  Do not transcribe words that the speaker does not say, unless
                  it would contradict a rule in these guidelines.{' '}
                </p>
                <p className={styles.block_223}>
                  Transcribe all words the speaker says, even if the speaker did
                  not mean to say them.{' '}
                </p>
                <p className={'text'}>
                  Use only one space between words and sentences.{' '}
                </p>
              </div>
              <div id="foreign-language">
                <p className={'heading'}>Foreign language </p>
                <p className={'text'}>
                  Do not skip audio that contains foreign words. First indicate
                  whether it contains English or another language, then
                  transcribe the utterance according to the following rules.{' '}
                </p>
                <p className={styles.block_226}>English </p>
                <p className={styles.block_227}>
                  Please transliterate all English media titles.{' '}
                </p>
                <p className={styles.block_228}>Keep URLs in Latin script. </p>
                <p className={styles.block_229}>Correct: www.google.co.in </p>
                <p className={styles.block_230}>
                  Transcribe English companies in English. Do not transliterate.{' '}
                </p>
                <p className={styles.block_231}>
                  Below are some common company names that should be transcribed
                  in English with Latin characters{' '}
                </p>
                <p className={styles.block_232}>● Apple </p>
                <p className={styles.block_233}>● Facebook </p>
                <p className={styles.block_234}>● Google </p>
                <p className={styles.block_235}>● Instagram </p>
                <p className={styles.block_236}>● Netflix </p>
                <p className={styles.block_237}>● Skype </p>
                <p className={styles.block_238}>● Snapchat </p>
                <p className={styles.block_239}>● Twitter </p>
                <p className={styles.block_240}>● WhatsApp </p>
                <p className={styles.block_241}>● Yahoo </p>
                <p className={styles.block_242}>● YouTube </p>
                <p className={styles.block_243}>
                  Transliterate common English words into your language.{' '}
                </p>
                <p className={styles.block_244}>Correct: হ ােলা। </p>
                <p className={styles.block_245}>Incorrect: Hello. </p>
                <p className={styles.block_246}>
                  If the speaker in the audio is speaking in English and says a
                  word in your language transliterate it to English.{' '}
                </p>
                <p className={styles.block_247}>
                  If someone says an English texting initialism, abbreviation,
                  or acronym, transcribe it in English with lowercase letters.{' '}
                </p>
                <p className={styles.block_248}>Correct: jk, wtf, lol </p>
                <p className={styles.block_249}>Incorrect: JK, WTF, LOL </p>
                <p className={styles.block_250}>
                  Use the spelling "Ok" for the phrase "Ok Google", as well as
                  related phrases like "Ok Google Now" and "Ok Glass". For all
                  other cases, transcribe the word as "ওেক".{' '}
                </p>
                <p className={styles.block_251}>Correct: Ok Google </p>
                <p className={styles.block_252}>Incorrect: OK Google। </p>
                <p className={styles.block_253}>
                  Explanation: "Ok" appears before "Google", it is spelled{' '}
                </p>
                <p className={styles.block_254}>"Ok" and not "ওেক". </p>
                <p className={styles.block_255}>Correct: Ok Google Now </p>
                <p className={styles.block_256}>Other foreign languages </p>
                <p className={styles.block_257}>
                  If you hear a foreign word (besides English) that is commonly
                  understood by speakers of your language, transcribe it in your
                  script.{' '}
                </p>
              </div>
              <div id="accents">
                <p className={styles.block_258}>Accents </p>
                <p className={'text'}>
                  If you hear a word with non-standard pronunciation, transcribe
                  the word using the standard spelling according to your
                  language's official dictionary.{' '}
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
