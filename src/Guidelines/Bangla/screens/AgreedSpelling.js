import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const AgreedSpelling = () => {
  const classes = useStyles()

  const headingIds = [
    'spelling-out',
    'interjection',
    'brand-and-product',
    'media-title',
    'multiple-spelling',
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
              <p>
                <span className={styles.text_5}>Agreed spelling </span>
              </p>
              <p className={styles.block_331}>
                This section covers spelling conventions for things such as
                proper names, media titles, acronyms, slang words, and more.{' '}
              </p>
              <p className={styles.block_332}>Spelling out </p>
              <p className={styles.block_333}>
                If a word is spelled out, write it with spaces in between. This
                rule does not apply to acronyms, URLs or email addresses.{' '}
              </p>
              <p className={styles.block_334}>
                <span className={styles.text_9}>Correct: আড়ং আ ড় ◌ং </span>
                <span className={styles.text_7}>Example audio: " </span>
                <span className={styles.text_13}>আড়ং আ ড় ◌ং </span>
                <span className={styles.text_7}>" </span>
              </p>
              <p className={styles.block_335}>
                <span className={styles.text_6}>Correct: প ফ ব ভ শ িন </span>
                <span className={styles.text_7}>Example audio: " </span>
                <span className={styles.text_8}>প ফ ব ভ শ িন </span>
                <span className={styles.text_7}>" </span>
              </p>
              <p className={styles.block_336}>Interjections </p>
              <p className={styles.block_337}>
                If the speaker uses words representing laughter, crying,
                singing, etc. transcribe them up to three syllables. Do not
                transcribe actual laughter.{' '}
              </p>
              <p className={styles.block_338}>
                <span className={styles.text_6}>Correct: হাহাহা </span>
                <span className={styles.text_7}>Example audio: " </span>
                <span className={styles.text_8}>হা হা হা হা হা </span>
                <span className={styles.text_7}>" </span>
              </p>
              <p className={styles.block_339}>
                Explanation: Even if the speaker says "হাহাহা" five times,{' '}
              </p>
              <p className={styles.block_340}>
                only transcribe three with no spaces.{' '}
              </p>
              <p className={styles.block_341}>Proper names </p>
              <p className={styles.block_342}>
                If a personal name could have multiple spellings, use the
                spelling that has the most Google search hits when you search
                for the name followed by the word "নাম" (e.g. "Anna নাম").{' '}
              </p>
              <p className={styles.block_343}>
                If a speaker makes a small mistake in a proper name, transcribe
                it anyway as long as the difference is minimal. Minimal
                differences include adding or dropping articles, possessives,
                and plurals.{' '}
              </p>
              <p className={styles.block_344}>Brand and product </p>
              <p className={styles.block_345}>
                Always use the official spelling and formatting for the
                following types of terms. If you are not sure about the spelling
                or formatting, transcribe them as they are spelled and formatted
                on their Wikipedia page in your country. Note, this only applies
                to terms in your language. For instruction on transcribing
                English terms, refer to the English subsection in Foreign
                Language.{' '}
              </p>
              <p className={styles.block_346}>● Technical terms </p>
              <p className={styles.block_347}>● Proper names </p>
              <p className={styles.block_348}>● Celebrity names </p>
              <p className={styles.block_349}>● Holidays </p>
              <p className={styles.block_350}>● Brand names </p>
              <p className={styles.block_351}>● Product names </p>
              <p className={styles.block_352}>
                Spellings of common Proper Names{' '}
              </p>
              <p className={styles.block_353}>● সাইবা </p>
              <p className={styles.block_354}>● মৗিরন </p>
              <p className={styles.block_355}>● র </p>
              <p className={styles.block_356}>● আেভস </p>
              <p className={styles.block_357}>● সাফিরন </p>
              <p className={styles.block_358}>● মািহর </p>
              <p className={styles.block_359}>● তাস ফয়া </p>
              <p className={styles.block_360}>● িতয়াস </p>
              <p className={styles.block_361}>● আহনাফ </p>
              <p className={styles.block_362}>● মিশউর </p>
              <p className={styles.block_363}>Media title </p>
              <p className={styles.block_364}>
                Do not use quotation marks for media titles.{' '}
              </p>
              <p className={styles.block_365}>
                Transcribe all media titles with their original punctuation. If
                punctuation from the title occurs at the end of a sentence, do
                not transcribe another punctuation mark (a danda, question mark,
                or exclamation mark) for end of the sentence.{' '}
              </p>
              <p className={styles.block_366}>
                Very common alternate or shortened versions of titles should
                also be capitalized.{' '}
              </p>
              <p className={styles.block_367}>Multiple spellings </p>
              <p className={styles.block_262}>
                If a word has multiple correct spellings, use the first spelling
                in your language's standard dictionary. If there is no entry,
                Google the word and use the spelling with the most results.{' '}
              </p>
              <p className={styles.block_368}>Correct: িময়া </p>
              <p className={styles.block_369}>Incorrect: িময়া </p>
              <p className={styles.block_370}>
                Transcribe slang and colloquialisms as they are commonly written
                in your language. Do not change non-standard speech that the
                speaker wouldn't want corrected.{' '}
              </p>
              <p className={styles.block_371}>Correct: চল কিফশেপ যায় ব িব। </p>
              <p className={styles.block_372}>
                Incorrect: চল কিফশেপ যায় বা িব।{' '}
              </p>
              <p className={styles.block_373}>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_10}>চল ক ফশেপ যায় ব িব </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_374}>
                Use standard spelling for reductions that commonly occur in
                normal running speech.{' '}
              </p>
              <p className={styles.block_375}>
                If you hear a word that does not sound like a standard word of
                your language because there is a small sound change (i.e.
                accent, speech error, speech impairment, etc), transcribe the
                intended word.{' '}
              </p>
              <p className={styles.block_220}>
                If you hear a word that does not sound like a standard word of
                your language, but it is obviously based on real words,
                suffixes, or prefixes, transcribe as is.{' '}
              </p>
              <p className={styles.block_376}>Correct: হনেছ </p>
              <p className={styles.block_377}>Incorrect: শেনেছ </p>
              <p className={styles.block_378}>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_10}>হনেছ </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_379}>
                Explanation: Even if the speaker meant to say "শেনেছ",{' '}
              </p>
              <p className={styles.block_380}>transcribe what was spoken. </p>
              <p className={styles.block_381}>
                If you hear a word that does not sound like a standard word of
                your language because it appears to be nonsense, do a Google
                search for the word. If there is a clear candidate, transcribe
                that word.{' '}
              </p>
              <p className={styles.block_382}>
                If a word appears to be nonsense and a Google search returns no
                clear results but it is easy to spell and articulated clearly,
                transcribe it anyway.{' '}
              </p>
              <p className={styles.block_383}>
                <span className={styles.text_4}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.{' '}
                </span>
              </p>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Agreed Spelling" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default AgreedSpelling

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
