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
    'proper-names',
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
            <PageContentHeader currentPage="Longform Javanese" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling </p>
              <p className={styles.block_342}>
                Spelling conventions for words where several options are
                thinkable, as well as proper&nbsp;
                <span className={styles.text_1}> </span>
                <span className={styles.text_}>names.&nbsp;</span>
                <span className={styles.text_1}> </span>
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={styles.block_344}>
                  <span className={styles.text_}>
                    If a word is spelled or obvious pauses are made between
                    letters, spell it into letters as it&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    is said (often done for foreign names or businesses, for
                    example). Use lowercase letters&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    for the spelled-out portion. This rule does not apply to
                    acronyms or initialisms, or to&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    spelled-out web or email addresses.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_158}>
                  Correct: a b c d e f g h i k l m n o p q r s t u v w x&nbsp; y
                  z&nbsp;
                </p>
                <p className={styles.block_193}>
                  Explanation: spelled out alphabet&nbsp;
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_18}>
                    Correct: Lanangla l a n a n g l a&nbsp;{' '}
                  </span>
                  <span className={styles.text_21}>Example audio: "​ </span>
                  <span className={styles.text_22}>
                    lanangla l a n a n g l a ​
                  </span>
                  <span className={styles.text_21}>"&nbsp; </span>
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_18}>Correct: SD&nbsp; </span>
                  <span className={styles.text_21}>Example audio: "​ </span>
                  <span className={styles.text_22}>s d ​</span>
                  <span className={styles.text_21}>"&nbsp; </span>
                  <span className={styles.text_19}>
                    Explanation: akronim umum&nbsp;
                  </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}></p>
                <p className={styles.block_347}>
                  <span className={styles.text_}>
                    Transcribe words representing laughter or other non-speech
                    vocalizations with up to&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    three syllables, but no more.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>
                  Correct: ha, haha, hehe, lalala, wkwk&nbsp;
                </p>
                <p className={styles.block_348}>Correct: hahaha&nbsp;</p>
                <p className={styles.block_349}>
                  <span className={styles.text_33}>
                    Incorrect: hahahahaha&nbsp;{' '}
                  </span>
                  <span className={styles.text_35}></span>
                </p>
              </div>
              <div id="proper-name">
                <p className={'heading'}>Proper names </p>
                <p className={styles.block_350}>
                  <span className={styles.text_17}>Example audio: "​ </span>
                  <span className={styles.text_20}>ha ha ha ha ha ​</span>
                  <span className={styles.text_17}>"&nbsp; </span>
                </p>
                <p className={styles.block_351}>
                  Explanation: Tidak mentranskripsi lebih dari&nbsp; tiga suku
                  kata.&nbsp;
                </p>
                <p className={styles.block_352}>
                  <span className={styles.text_}>
                    Use official spelling, capitalization, and punctuation for
                    proper names. Google them and&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    pay attention to the correct format. Official format and
                    spelling of a proper name may&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    supersede the usual written transcription conventions
                    detailed in this document.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_353}>
                  <span className={styles.text_}>
                    If a personal name could have multiple spellings and context
                    does not help choose a&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    spelling, use the spelling that yields the most Google
                    search hits when you search for&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    the name followed by the word "name" (without quotation
                    marks) (e.g. "Anna name").&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>Correct: MacDonald&nbsp;</p>
                <p className={styles.block_89}>Incorrect: McDonald&nbsp;</p>
                <p className={styles.block_88}>Correct: SMS Janah&nbsp;</p>
                <p className={styles.block_89}>Incorrect: SMS Jannah&nbsp;</p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={styles.block_355}>
                  <span className={styles.text_}>
                    Format proper names as they are most commonly formatted on
                    the entity's website&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    (especially official documents), if available, or the
                    Wikipedia or IMDb page. In cases of&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    ambiguity, defer to their privacy policy. If no other
                    sources, use top Google hits.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>Correct: LEGO&nbsp;</p>
                <p className={styles.block_89}>Incorrect: Lego&nbsp;</p>
                <p className={styles.block_88}>
                  Correct: Dheweke kerjo nang Unilever.&nbsp;
                </p>
                <p className={styles.block_88}>
                  Correct: Jarene Google arep bangun kantor&nbsp;
                </p>
                <p className={styles.block_128}>maneh.&nbsp;</p>
                <p className={styles.block_88}>Correct: YouTube&nbsp;</p>
                <p className={styles.block_356}>
                  <span className={styles.text_}>
                    The phrase "Ok Google", as well as possible derivatives such
                    as "Ok Google Now" and&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    "Ok Glass", require their own particular spelling of "okay".
                    This spelling is unique to these&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>cases.&nbsp;</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_86}>Correct: Ok Google&nbsp;</p>
                <p className={styles.block_88}>Correct: Ok Google Now&nbsp;</p>
                <p className={styles.block_88}>
                  Correct: Ok Google, SMS Johan.&nbsp;
                </p>
                <p className={styles.block_88}>
                  Correct: Ok Google, ketupat&nbsp;
                </p>
                <p className={styles.block_88}>Correct: Oke.&nbsp;</p>
                <p className={styles.block_149}>Correct: Oke, Sri&nbsp;</p>
                <p className={styles.block_88}>
                  Correct: Oke Siti, ayo ndang budhal.&nbsp;
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={styles.block_358}>
                  <span className={styles.text_}>
                    Refer to the Google Play Store for official spellings of
                    media titles. For film/television,&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    IMDb is also available. If an utterance is ambiguous between
                    a media title and a&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    sentence or web search, use your judgment for which is more
                    likely; if truly unclear,&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    default to media title.&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_16}>
                    Do not use quotation marks for media titles.&nbsp;
                  </span>
                  <span className={styles.text_17}> </span>
                </p>
                <p className={styles.block_326}>
                  Correct: Puter Diamonds sing dinyanyekake&nbsp;
                </p>
                <p className={styles.block_360}>Rihanna.&nbsp;</p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={styles.block_361}>
                  <span className={styles.text_}>
                    When multiple spellings are attested, use the first spelling
                    used in the reference&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    dictionary for your language. If there is no entry, Google
                    the word and use the form with&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>the most hits.&nbsp;</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_18}>Correct: Sala&nbsp; </span>
                  <span className={styles.text_19}>Incorrect: Solo&nbsp; </span>
                </p>
                <p className={styles.block_159}>
                  Explanation: "Sala" digunakan menurut kamus&nbsp;
                  referensi&nbsp;
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_}>
                    If you hear a word that does not sound like a standard word
                    of your language because&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    there is a small sound change (i.e. accent, speech error,
                    speech impairment, etc),&nbsp;
                  </span>
                  <span className={styles.text_1}> </span>
                  <span className={styles.text_}>
                    transcribe the intended word.&nbsp;
                  </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_18}>
                    Correct: Mbas, aku ning mburi yo.&nbsp;{' '}
                  </span>
                  <span className={styles.text_19}>
                    Explanation: Tidak yakin apakah penutur&nbsp; bermaksud
                    mengucapkan "mbak" or "mas",&nbsp;
                  </span>
                </p>
                <p className={styles.block_365}>
                  namun secara jelas diartikulasikan dan mudah&nbsp;
                </p>
                <p className={styles.block_366}>diucapkan/dieja.&nbsp;</p>
                <p className={styles.block_367}>
                  <span className={styles.text_36}>
                    Transcribe onomatopoeia when clearly spoken. Otherwise, use
                    the Unintelligible label&nbsp;
                  </span>
                  <span className={styles.text_37}> </span>
                  <span className={styles.text_36}>
                    as instructed in: Longform generic rules &gt; Unintelligible
                    or foreign or singing.&nbsp;
                  </span>
                  <span className={styles.text_37}> </span>
                  <span className={styles.text_38}></span>
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
