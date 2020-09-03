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
            <PageContentHeader currentPage="longform Sundanese" />
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
                <p className={styles.block_618}>
                  <span className={styles.text_4}>
                    Correct: Costco c o s t c o{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>costco c o s t c o </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_619}>
                  Correct: a b c d e f g h i k l m n o p q r s t u v w x
                </p>
                <p className={styles.block_620}>y z</p>
                <p className={styles.block_621}>
                  Explanation: spelled out the alphabet
                </p>
                <p className={styles.block_622}>
                  <span className={styles.text_4}>Correct: CEO </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>c e o </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_625}>
                  Correct: heh, ha, haha, hehe, huh, lalala
                </p>
                <p className={styles.block_626}>Correct: hahaha</p>
                <p className={styles.block_627}>Incorrect: hahahahaha</p>
                <p className={styles.block_628}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>ha ha ha ha ha </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_629}>
                  Explanation: Do not transcribe more than three
                </p>
                <p className={styles.block_630}>syllables.</p>
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
                <p className={'text'}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_634}>Correct: Geroan Sophia.</p>
                <p className={styles.block_635}>Incorrect: Geroan Sofia.</p>
                <p className={styles.block_636}>
                  Explanation: Searching "Sophia name" (without
                </p>
                <p className={styles.block_637}>
                  quotation marks) yields more results than
                </p>
                <p className={styles.block_638}>
                  "Sofia name", even though searching "Sofia"
                </p>
                <p className={styles.block_639}>
                  yields more results than "Sophia" because Sofia
                </p>
                <p className={styles.block_640}>is the capital of Bulgaria.</p>
                <p className={styles.block_641}>
                  <span className={styles.text_4}>Correct: MacDonald </span>
                  <span className={styles.text_5}>
                    Explanation: Searching "MacDonald name"{' '}
                  </span>
                </p>
                <p className={styles.block_642}>
                  yields more search results than "McDonald
                </p>
                <p className={styles.block_643}>
                  Incorrect: McDonald name". Note that this example refers to
                  the
                </p>
                <p className={styles.block_644}>
                  surname, not the restaurant chain.
                </p>
                <p className={styles.block_645}>
                  <span className={styles.text_4}>
                    Correct: Sophia MacDonald{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Search full names to see if they
                  </span>
                </p>
                <p className={styles.block_646}>
                  refer to a celebrity. If the full name does not
                </p>
                <p className={styles.block_647}>
                  belong to a celebrity, use the most common
                </p>
                <p className={styles.block_648}>
                  spelling for each part of the name (e.g. search
                </p>
                <p className={styles.block_649}>
                  "Sophia name" and "MacDonald name").
                </p>
                <p className={styles.block_650}>
                  If a speaker makes a small mistake in a proper name,
                  capitalize it anyway as long as the difference is minimal.
                  "Minimal differences" refers to adding or dropping articles,
                  possessives, and plurals.
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_4}>
                    Correct: The Lord of the Ring{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: actual name is "The Lord of the
                  </span>
                </p>
                <p className={styles.block_652}>Rings"</p>
                <p className={styles.block_653}>
                  <span className={styles.text_4}>Correct: Craiglist </span>
                  <span className={styles.text_5}>
                    Explanation: actual name is"craigslist"{' '}
                  </span>
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_4}>
                    Correct: Puter pilem Matrix{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: actual name is "The Matrix"{' '}
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
                <p className={styles.block_657}>
                  Correct: Manehna gawe di Amazon.
                </p>
                <p className={styles.block_658}>
                  Correct: Urang ngadenge Yahoo jeung T-Mobile
                </p>
                <p className={styles.block_659}>arek ngahiji.</p>
                <p className={styles.block_660}>Correct: YouTube</p>
                <p className={styles.block_661}>
                  <span className={styles.text_4}>Correct: craigslist </span>
                  <span className={styles.text_5}>
                    Explanation: Officially "craigslist".{' '}
                  </span>
                </p>
                <p className={styles.block_662}>
                  <span className={styles.text_4}>Correct: AAMCO </span>
                  <span className={styles.text_5}>
                    Explanation: Officially "AAMCO" and is based
                  </span>
                </p>
                <p className={styles.block_663}>on an acronym.</p>
                <p className={styles.block_664}>
                  <span className={styles.text_4}>Correct: ampm </span>
                  <span className={styles.text_5}>
                    Explanation: Officially "ampm" and is{' '}
                  </span>
                </p>
                <p className={styles.block_665}>pronounced as initialism.</p>
                <p className={styles.block_666}>Correct: eHarmony</p>
                <p className={styles.block_667}>
                  <span className={styles.text_4}>
                    Correct: UnitedHealthcare.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Officially camel case{' '}
                  </span>
                </p>
                <p className={styles.block_668}>Correct: Burger King</p>
                <p className={styles.block_669}>Incorrect: BURGER KING</p>
                <p className={styles.block_670}>
                  Explanation: Do not spell "Burger King" all in
                </p>
                <p className={styles.block_671}>
                  upper case as in the stylized form of the logo,
                </p>
                <p className={styles.block_672}>
                  stick to the official form as per the privacy
                </p>
                <p className={styles.block_673}>policy.</p>
                <p className={styles.block_674}>Correct: LEGO</p>
                <p className={styles.block_675}>Incorrect: Lego</p>
                <p className={styles.block_285}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_676}>Correct: Ok Google</p>
                <p className={styles.block_677}>Correct: Ok Google Now</p>
                <p className={styles.block_678}>
                  Correct: Ok Google, di mana Starbucks?
                </p>
                <p className={styles.block_679}>Correct: Ok Google, waluh</p>
                <p className={styles.block_674}>Correct: Okeh.</p>
                <p className={styles.block_680}>Correct: Okeh, David.</p>
                <p className={styles.block_681}>
                  Correct: Okeh Patty, hayu berangkat.
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
                <p className={styles.block_684}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_211}>
                  Correct: gambar layar tina Call of Duty: Black
                </p>
                <p className={styles.block_331}>Ops 2</p>
                <p className={styles.block_685}>
                  Correct: Puter Diamonds ti Rihanna.
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
                <p className={styles.block_687}>Correct: ember</p>
                <p className={styles.block_542}>Incorrect: emer</p>
                <p className={styles.block_688}>
                  Explanation: "ember" is preferred by Sundanese
                </p>
                <p className={styles.block_689}>dictionary</p>
                <p className={styles.block_690}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_691}>Correct: Nya dih kitu?</p>
                <p className={styles.block_692}>Incorrect: Enya deuih kitu?</p>
                <p className={styles.block_693}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>nya dih kitu </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_694}>
                  Correct: Eta emer jang mawa enog.
                </p>
                <p className={styles.block_695}>
                  Incorrect: Eta ember jang mawa endog.
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    eta emer jang mawa enog{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_696}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_4}>Correct: bacakeunna </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker meant "bacakeun" but{' '}
                  </span>
                </p>
                <p className={styles.block_698}>added on extra suffix.</p>
                <p className={styles.block_699}>
                  Correct: Pangmeulikeun penci jang pakeeun
                </p>
                <p className={styles.block_700}>engke.</p>
                <p className={styles.block_701}>
                  Explanation: Unsure whether speaker intended
                </p>
                <p className={styles.block_702}>
                  to say "panci" or "peci", but clearly articulated
                </p>
                <p className={styles.block_703}>and easy to spell.</p>
                <p className={styles.block_704}>
                  <span className={styles.text_14}>
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
