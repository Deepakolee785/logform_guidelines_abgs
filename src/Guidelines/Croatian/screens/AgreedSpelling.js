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
            <PageContentHeader currentPage="Longform Croatian" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <p className={'text'}>
                <span className={styles.text_2}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>names.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={styles.block_439}>
                  <span className={styles.text_2}>
                    If a word is spelled or obvious pauses are made between
                    letters, spell it into letters as it{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    is said (often done for foreign names or businesses, for
                    example). Use lowercase letters{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    for the spelled-out portion. This rule does not apply to
                    acronyms or initialisms, or to{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    spelled-out web or email addresses.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_24}>
                    Correct: dosta d o s t a{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Person said "dosta" and then spelled it.
                    </span>
                  </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_24}>Correct: ne n e ć u </span>
                  <span className={styles.text_30}>Example audio: " </span>
                  <span className={styles.text_31}>ne n e ć u </span>
                  <span className={styles.text_30}>" </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.calibre2}>
                    Correct: a b c d e f g h i j k l m n o p q r s t u v w x y z
                  </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heaeding'}>Interjections</p>
                <p className={styles.block_443}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_444}>
                  <span className={styles.text_2}>
                    Transcribe words representing laughter or other non-speech
                    vocalizations with up to{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    three syllables, but no more.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  Correct: heh, ha, haha, hahaha
                </p>
                <p className={styles.block_372}>Correct: hahaha</p>
                <p className={styles.block_445}>
                  <span className={styles.text_27}>Incorrect: hahahahaha </span>
                  <span className={styles.text_29}> </span>
                </p>
              </div>
              <div id="proper-names">
                <span className={'heading'}>Proper names</span>
                <p className={styles.block_273}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>ha ha ha ha ha </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.calibre2}>
                    Explanation: Do not transcribe more than three syllables.
                  </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_2}>
                    Use official spelling, capitalization, and punctuation for
                    proper names. Google them and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    pay attention to the correct format. Official format and
                    spelling of a proper name may{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    supersede the usual written transcription conventions
                    detailed in this document.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_17}>
                    Defer to official spellings of celebrity names.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_2}>
                    If a personal name could have multiple spellings and context
                    does not help choose a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    spelling, use the spelling that yields the most Google
                    search hits when you search for{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the name followed by the word "name" (without quotation
                    marks) (e.g. "Anna name").
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_271}>
                  <span className={styles.text_24}>Correct: Zovi Sophia. </span>
                  <span className={styles.text_25}>
                    Incorrect: Zovi Sofia.{' '}
                  </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_24}>Correct: MacDonald </span>
                  <span className={styles.text_25}>Incorrect: McDonald </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.calibre2}>
                    Explanation: Searching "ime Sophia" (without quotation
                    marks) yields more results than "ime Sofia", even though
                    searching "Sofia" yields more results than "Sophia" because
                    Sofia is the capital of Bulgaria.
                  </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.calibre2}>
                    Explanation: Searching "ime MacDonald" yields more search
                    results than "ime McDonald". Note
                  </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.calibre2}>
                    that this example refers to the surname, not the
                  </span>
                </p>
                <p className={styles.block_454}>restaurant chain.</p>
                <p className={styles.block_455}>
                  <span className={styles.text_24}>
                    Correct: Sophia MacDonald{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Search full names to see if they refer to a
                      celebrity. If the full name does not
                    </span>
                  </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.calibre2}>
                    belong to a celebrity, use the most common
                  </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.calibre2}>
                    spelling for each part of the name (e.g. search
                  </span>
                </p>
                <p className={styles.block_458}>
                  "Sophia name" and "MacDonald name").
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_2}>
                    If a speaker makes a small mistake in a proper name,
                    capitalize it anyway as long as the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    difference is minimal. "Minimal differences" refers to
                    adding or dropping articles,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    possessives, and plurals.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_234}>
                  <span className={styles.text_24}>
                    Correct: The Lord of the Ring{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: for "The Lord of the Rings"{' '}
                  </span>
                </p>
                <p className={styles.block_358}>
                  <span className={styles.text_24}>
                    Correct: Gospodar prstena{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: The actual name is "Gospodar prstenova".
                    </span>
                  </span>
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_24}>
                    Correct: Svećenik djeca{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: The actual name is "Svećenikova djeca".
                    </span>
                  </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_24}>
                    Correct: Čudnovate zgode Hlapića{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: The actual name is "Čudnovate zgode Hlapića".
                    </span>
                  </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_24}>
                    Correct: Pokreni Matrix film.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Explanation: for "The Matrix"{' '}
                  </span>
                  <span className={styles.text_24}>Correct: Craiglist </span>
                  <span className={styles.text_25}>
                    Explanation: for "craigslist"
                  </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_26}>Correct: Moj-poso </span>
                  <span className={styles.text_27}>
                    Explanation: for "MojPosao"{' '}
                  </span>
                  <span className={styles.text_29}> </span>
                </p>
              </div>
              <div id="brand-and-product">
                <span className={'heading'}>Brand and product</span>
                <p className={styles.block_464}>
                  <span className={styles.text_2}>
                    Format proper names as they are most commonly formatted on
                    the entity's website{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    (especially official documents), if available, or the
                    Wikipedia or IMDb page. In cases of{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    ambiguity, defer to their privacy policy. If no other
                    sources, use top Google hits.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: On radi u Amazon.</p>
                <p className={styles.block_94}>
                  <span className={styles.calibre2}>
                    Correct: Čuo sam da su se Yahoo i T-Mobile
                  </span>
                </p>
                <p className={styles.block_243}>upravo dogovorili.</p>
                <p className={styles.block_94}>Correct: YouTube</p>
                <p className={styles.block_94}>Correct: Facebook</p>
                <p className={styles.block_93}>Correct: restoran Los Arcos</p>
                <p className={styles.block_94}>
                  Correct: Yahoo je objavio a T-Mobile se složio.
                </p>
                <p className={styles.block_94}>Correct: Toys "R" Us</p>
                <p className={styles.block_93}>Correct: INA</p>
                <p className={styles.block_94}>Correct: eKupi</p>
                <p className={styles.block_465}>
                  <span className={styles.text_24}>Correct: Burger King </span>
                  <span className={styles.text_25}>
                    Incorrect: BURGER KING{' '}
                  </span>
                </p>
                <p className={styles.block_466}>Correct: LEGO</p>
                <p className={styles.block_467}>Incorrect: Lego</p>
                <p className={styles.block_451}>
                  <span className={styles.calibre2}>
                    Explanation: Do not spell "Burger King" all in upper case as
                    in the stylized form of the logo, stick to the official form
                    as per the privacy policy.
                  </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_2}>
                    The phrase "Ok Google", as well as possible derivatives such
                    as "Ok Google Now" and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    "Ok Glass", require their own particular spelling of "okay".
                    This spelling is unique to these{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>cases.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: Ok Google</p>
                <p className={styles.block_94}>Correct: Ok Google Now</p>
                <p className={styles.block_94}>
                  Correct: Ok Google, gdje je Starbucks?
                </p>
                <p className={styles.block_93}>Correct: Ok Google, bundeve</p>
                <p className={styles.block_94}>
                  Correct: Ok Google, put do Zagreba
                </p>
                <p className={styles.block_94}>
                  Correct: Ok Google Now, letovi za Madrid
                </p>
                <p className={styles.block_93}>
                  Correct: Ok Google, nazovi Ivana.
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_24}>Correct: OK, David. </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: In other contexts, "OK" should be written in
                      uppercase.
                    </span>
                  </span>
                </p>
                <p className={styles.block_470}>
                  Correct: OK Patty, pokrenimo se.
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={styles.block_472}>
                  <span className={styles.text_2}>
                    Refer to the Google Play Store for official spellings of
                    media titles. For film/television,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    IMDb is also available. If an utterance is ambiguous between
                    a media title and a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence or web search, use your judgment for which is more
                    likely; if truly unclear,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>default to media title.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_17}>
                    Do not use quotation marks for media titles.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_163}>
                  <span className={styles.calibre2}>
                    Correct: snimke zaslona Call of Duty: Black Ops
                  </span>
                </p>
                <p className={styles.block_166}>2</p>
                <p className={styles.block_93}>
                  Correct: Pokreni Diamonds by Rihanna.
                </p>
                <p className={styles.block_94}>
                  Correct: Red Hot Chili Peppers Californication
                </p>
                <p className={styles.block_94}>
                  Correct: Slušao sam Blaqk Audio On A Friday.
                </p>
                <p className={styles.block_93}>
                  Correct: TV serija Kalifornikacija
                </p>
                <p className={styles.block_94}>
                  Correct: Idemo li na Rokaj Fest?
                </p>
                <p className={styles.block_473}>
                  Correct: Fali V mi je bio omiljeni sastav.
                </p>
                <p className={styles.block_474}>
                  <span className={styles.calibre2}>
                    Correct: Vita jela, zelen bor se prikazuje skoro svaki dan
                    na hrvatskoj televiziji.
                  </span>
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={styles.block_475}>
                  <span className={styles.calibre2}>
                    Explanation: If the media title contains some punctuation,
                    transcribe the punctuation.
                  </span>
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_2}>
                    Transcribe slang and colloquialisms as spoken according to
                    the appendix on this page.{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Do not alter non-standard speech that the speaker probably
                    wouldn't want corrected.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: I ain't joking.</p>
                <p className={styles.block_94}>Correct: He love coffee.</p>
                <p className={styles.block_477}>
                  <span className={styles.text_2}>
                    Write commonly accepted contractions as usual. Transcribe
                    contractions when you{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>hear them spoken.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_24}>
                    Correct: Rekoh ti da ne idemo.{' '}
                  </span>
                  <span className={styles.text_25}>
                    Incorrect: Rekao sam ti da ne idemo.{' '}
                  </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>rekoh ti da ne idemo </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_24}>
                    Correct: Kaj buš delal tam?{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Colloquialism for "Što ćeš raditi tamo?"
                    </span>
                  </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_24}>Correct: Nemrem nič. </span>
                  <span className={styles.text_25}>
                    Explanation: Colloquialism for "Ne mogu ništa."
                  </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_24}>
                    Correct: Pari mi se da lampa.{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Colloquialism for "Čini mi se da sijeva."
                    </span>
                  </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_24}>
                    Correct: Ovi mali je šempjan.{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: Colloquialism for "Ovaj mali je poludio."
                    </span>
                  </span>
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_2}>
                    Use standard spelling for reductions that commonly occur in
                    normal running speech,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    like "je li", "da li" for "jel'", "dal'".
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_24}>
                    Correct: Je li dovoljno?{' '}
                  </span>
                  <span className={styles.text_25}>
                    Incorrect: Jel' dovoljno?{' '}
                  </span>
                </p>
                <p className={styles.block_484}>
                  <span className={styles.text_24}>
                    Correct: Da li me čujete?{' '}
                  </span>
                  <span className={styles.text_25}>
                    Incorrect: Dal' me čujete?{' '}
                  </span>
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_18}>Example audio: " </span>
                  <span className={styles.text_23}>jel dovoljno </span>
                  <span className={styles.text_18}>" Example audio: " </span>
                  <span className={styles.text_23}>dal me čujete </span>
                  <span className={styles.text_18}>" </span>
                </p>
                <p className={styles.block_486}>
                  <span className={styles.text_2}>
                    If you hear a word that does not sound like a standard word
                    of your language, but it is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    obviously based on real words, suffixes, or prefixes,
                    transcribe as is.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_24}>
                    Correct: Dodaj mi tu narajabuku.{' '}
                  </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: The speaker intended to say "naranču" but in
                      the last moment changed it to
                    </span>
                  </span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.calibre2}>
                    "jabuku", but clearly articulated and easy to
                  </span>
                </p>
                <p className={styles.block_489}>spell.</p>
                <p className={styles.block_490}>
                  <span className={styles.text_24}>Correct: nadvlakovođa </span>
                  <span className={styles.text_25}>
                    <span className={styles.calibre2}>
                      Explanation: The speaker meant "vlakovođa" but added an
                      extra preffix.
                    </span>
                  </span>
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_2}>
                    Transcribe onomatopoeia when clearly spoken. Otherwise, use
                    the Unintelligible label{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    as instructed in: Longform generic rules &gt; Unintelligible
                    or foreign or singing.
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
