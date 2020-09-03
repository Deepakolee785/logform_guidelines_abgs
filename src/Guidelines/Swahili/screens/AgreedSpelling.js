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
            <PageContentHeader currentPage="longform Swahili" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_4}>Correct: USA </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>u s a </span>
                  <span className={styles.text_5}>" </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_4}>Correct: hahaha </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>ha ha ha ha ha </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_486}>
                  <span className={styles.text_4}>Correct: wowowo </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>wowowowowo </span>
                  <span className={styles.text_5}>" </span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.
                </p>
                <p className={styles.block_488}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_489}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_490}>Correct: Maurice</p>
                <p className={styles.block_491}>Incorrect: Morris</p>
                <p className={styles.block_492}>
                  Explanation: Searching "jina Maurice" (without
                </p>
                <p className={styles.block_493}>
                  quotation marks) yields more results than "jina
                </p>
                <p className={styles.block_494}>Morris".</p>
                <p className={styles.block_495}>
                  If a speaker makes a small mistake in a proper name,
                  capitalize it anyway as long as the difference is minimal.
                  "Minimal differences" refers to adding or dropping articles,
                  possessives, and plurals.
                </p>
                <p className={styles.block_496}>
                  <span className={styles.text_4}>Correct: Dar Salaam </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>dar salaam </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_497}>
                  Explanation: Even though the actual city's name
                </p>
                <p className={styles.block_498}>
                  is Dar es Salaam, transcribe as spoken with
                </p>
                <p className={styles.block_499}>relevant capitalisation.</p>
                <p className={styles.block_500}>
                  <span className={styles.text_4}>
                    Correct: Ten Ten Supermarket{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: official name "Ten to Ten"{' '}
                  </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={'text'}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits.
                </p>
                <p className={styles.block_503}>Correct: Nakumatt</p>
                <p className={styles.block_504}>Correct: Del Monte</p>
                <p className={styles.block_505}>Correct: Airtel</p>
                <p className={styles.block_248}>Correct: The XYZ Show</p>
                <p className={styles.block_506}>Correct: Ki.chen</p>
                <p className={styles.block_507}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_296}>Correct: Ok Google</p>
                <p className={styles.block_508}>Correct: Ok Google Now</p>
                <p className={styles.block_509}>
                  Correct: Ok Google, ambapo ni Uganda?
                </p>
                <p className={styles.block_510}>Correct: Ok Google, nduma</p>
                <p className={styles.block_511}>Correct: Okay.</p>
                <p className={styles.block_512}>
                  Correct: Okay Davie, hebu twende.
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_515}>
                  Capitalize media titles the way they are typically
                  capitalized.
                </p>
                <p className={styles.block_516}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_517}>
                  Correct: je, kuangalia The African Doctor?
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_520}>Correct: tufaha</p>
                <p className={styles.block_521}>Incorrect: tufaa</p>
                <p className={styles.block_522}>Explanation: Refere to</p>
                <p className={styles.block_523}>
                  http://africanlanguages.com/swahili/index.php
                </p>
                <p className={styles.block_524}>when in doubt.</p>
                <p className={styles.block_525}>
                  Transcribe slang and colloquialisms as spoken. Do not alter
                  non-standard speech that the speaker probably wouldn't want
                  corrected.
                </p>
                <p className={styles.block_526}>Correct: Anasomanga sana.</p>
                <p className={styles.block_527}>Incorrect: Yeye husoma sana.</p>
                <p className={styles.block_528}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>anasomanga sana </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_529}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_4}>
                    Correct: Yule ni babake.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>yule ni babake </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_531}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_4}>
                    Correct: Ninaomba kiribiti.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>ninaomba kiribiti </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_533}>
                  Explanation: even if they meant "kibiriti".
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_15}>
                    Transcribe onomatopoeia when clearly spoken. Otherwise, use
                    the Unintelligible label as instructed in: Longform generic
                    rules &gt; Unintelligible or foreign or singing.{' '}
                  </span>
                </p>
              </div>
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
