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
            <PageContentHeader currentPage="longform Telugu" />
            <div className="content text">
              <p className={'lrage-heading'}>Agreed spelling </p>
              <p className={'text'}>
                This section covers spelling conventions for things such as
                proper names, media titles, acronyms, slang words, and more.
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={'text'}>
                  If a word is spelled out, write it with spaces in between.
                  This rule does not apply to acronyms, URLs or email addresses.
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_10}>Correct: లయన ల య న </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>లయన ల య న </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_10}>Correct: చ త చ త </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>చ త చ త </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_451}>
                  Transcribe all acronyms and initialisms without spaces or
                  periods between letters.
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_6}>Correct: </span>
                  <span className={styles.text_21}>Example audio: " " </span>
                </p>
              </div>
              <div id="interjection">
                {' '}
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  If the speaker uses words representing laughter, crying,
                  singing, etc. transcribe them up to three syllables. Do not
                  transcribe actual laughter.
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_6}>Correct: </span>
                  <span className={styles.text_21}>Example audio: " " </span>
                </p>
                <p className={styles.block_456}>
                  Explanation: వక " " ఐదు ార అన ప ట
                </p>
                <p className={styles.block_457}>
                  ఖ మ త ల ల క ం మ డ ార మ త ాయం .
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  For celebrity names, always use the official spelling and
                  punctuation. If you're not sure about the spelling for certain
                  celebrity names with unique formatting, look it up in
                  Wikipedia. For English celebrity names, refer to the Foreign
                  Language section.
                </p>
                <p className={styles.block_460}>
                  If a personal name could have multiple spellings, use the
                  spelling that has the most Google search hits when you search
                  for the name followed by the word " ర " (e.g. "ఖ న ర ").
                </p>
                <p className={styles.block_461}>Correct: ా ాం .</p>
                <p className={styles.block_462}>Incorrect: ా ా .</p>
                <p className={styles.block_295}>
                  Explanation: " ాం ర " " ా ర " క
                </p>
                <p className={styles.block_463}>ఎక వ ఫ ల ల ా . వక ఆ వ ాల</p>
                <p className={styles.block_464}>య లనుక న ందున ా చుర మ</p>
                <p className={styles.block_465}>ా న త వ ం .</p>
                <p className={styles.block_466}>
                  <span className={styles.text_6}>Correct: అల అర </span>
                  <span className={styles.text_7}>
                    Explanation: ల ట సూ ంచట ప ర లను{' '}
                  </span>
                </p>
                <p className={styles.block_467}>ా చూడం . ప ర ల ల ట ల ల ప ంల</p>
                <p className={styles.block_468}>ప ర ామ న ంగ ల ాడం (ఉ . "అల</p>
                <p className={styles.block_469}>అర ర " ఇ ).</p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={'text'}>
                  Always use the official spelling and formatting for the
                  following types of terms. If you are not sure about the
                  spelling or formatting, transcribe them as they are spelled
                  and formatted on their Wikipedia page in your country. Note,
                  this only applies to terms in your language. For instruction
                  on transcribing English terms, refer to the English subsection
                  in Foreign Language.
                </p>
                <p className={styles.block_472}>● Technical terms</p>
                <p className={styles.block_473}>● Proper names</p>
                <p className={styles.block_474}>● Celebrity names</p>
                <p className={styles.block_475}>● Holidays</p>
                <p className={styles.block_476}>● Brand names</p>
                <p className={styles.block_477}>● Product names</p>
                <p className={styles.block_478}>
                  Spellings of common Proper Names
                </p>

                <p className={styles.block_480}>● ల</p>
                <p className={styles.block_480}>● మ</p>
                <p className={styles.block_480}>● మ</p>
                <p className={styles.block_481}>● ఆ సు మ</p>
                <p className={styles.block_482}>● ప త</p>
                <p className={styles.block_483}>● వర ం</p>
                <p className={styles.block_484}>● ఉపశమ</p>
                <p className={styles.block_485}>● ాం</p>
                <p className={styles.block_486}>● క మ ర డ</p>
                <p className={styles.block_482}>● జ నం</p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_489}>Correct: ట ంప ర ాట</p>
                <p className={styles.block_490}>Incorrect: "ట ంప ర " ాట</p>
                <p className={styles.block_491}>Explanation: ర ాయట ట ష</p>
                <p className={styles.block_422}>మ ర ల ాడ ాదు.</p>
                <p className={styles.block_492}>Correct: ఇళయ ాజ ల ల .</p>
                <p className={styles.block_493}>Incorrect: ఇళయ ాజ " ల ల " .</p>
                <p className={styles.block_494}>
                  Explanation: ాటల ర సం క ట ష మ ర ల
                </p>
                <p className={styles.block_495}>ాడ ాదు.</p>
                <p className={styles.block_496}>
                  Transcribe all media titles with their original punctuation.
                  If punctuation from the title occurs at the end of a sentence,
                  do not transcribe another punctuation mark (a period, question
                  mark, or exclamation mark) for end of the sentence.
                </p>
                <p className={styles.block_497}>Correct: ాటల , ను క ల ా?</p>
                <p className={styles.block_498}>Incorrect: ాటల , ను క ల ా??</p>
                <p className={styles.block_499}>
                  Explanation: " ను క ల ా?" ప ా ర కం వ ల
                </p>
                <p className={styles.block_500}>
                  ఉన మ ర . ఈ ఉ హరణల వక ప ా ర కం వర
                </p>
                <p className={styles.block_501}>ఉన ర ప ా ం ర . అందువలన మ త</p>
                <p className={styles.block_465}>ాయటం జ ం .</p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  If a word has multiple correct spellings, use the first
                  spelling in your language's standard dictionary. If there is
                  no entry, Google the word and use the spelling with the most
                  results.
                </p>
                <p className={styles.block_504}>Correct: ప స కం</p>
                <p className={styles.block_505}>Incorrect: ప స కమ</p>
                <p className={styles.block_506}>
                  Explanation: "ప స కం" "ప స కమ " ండూ (బ
                </p>
                <p className={styles.block_507}>
                  ల గ ప ల ) ా రణం ా ా ప ల ల గ ల .
                </p>
                <p className={styles.block_508}>
                  ఐ ఘంట వ లల ా రణం ా "ప స కం" ాడ ర
                </p>
                <p className={styles.block_509}>అందువలన అ ట ాయ .</p>
                <p className={styles.block_510}>
                  Use official spelling for technical and scientific terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_511}>Correct: ఇం ా</p>
                <p className={styles.block_512}>Correct: ట ట ం</p>
                <p className={styles.block_325}>
                  Transcribe slang and colloquialisms as they are commonly
                  written in your language. Do not change non-standard speech
                  that the speaker wouldn't want corrected.
                </p>
                <p className={styles.block_513}>Correct: జ మ .</p>
                <p className={styles.block_514}>Incorrect: త ర ా మ .</p>
                <p className={styles.block_515}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>జ మ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_516}>
                  Explanation: మ ండ క "జ " ా మ ణ క "త ర ా" ల
                </p>
                <p className={styles.block_517}>మ ర కం</p>
                <p className={styles.block_518}>Correct: ను ా ాను.</p>
                <p className={styles.block_519}>Incorrect: ను ాా ాను.</p>
                <p className={styles.block_520}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ను ా ాను </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_521}>
                  Explanation: " ాడ " అన ల గ ా మ ణ కం
                </p>
                <p className={styles.block_522}>ాక వక స ష ం ా పలకటం</p>
                <p className={styles.block_523}>
                  య తథం ా ాయటం జ ం , ఇక డ ా మ ణ క
                </p>
                <p className={styles.block_524}>సమర ప న " ాను" ాయట దు.</p>
                <p className={styles.block_525}>
                  Use standard spelling for reductions that commonly occur in
                  normal running speech.
                </p>
                <p className={styles.block_526}>Correct: ను వ ా ను.</p>
                <p className={styles.block_527}>Incorrect: ా ను.</p>
                <p className={styles.block_528}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ా ను </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_529}>
                  Explanation: వక " ా ను" అ అన ప ట అ
                </p>
                <p className={styles.block_530}>అన ా క ంగ కనుక ా మ ణ కంల మ</p>
                <p className={styles.block_531}>"వ ా ను" అ ాయ .</p>
                <p className={styles.block_532}>Correct: ఏంట సంగ ?</p>
                <p className={styles.block_533}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఏం సంగ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_534}>Incorrect: ఏం సంగ ?</p>
                <p className={styles.block_535}>
                  Explanation: వక "ఏం" అన ప ట అ అన ా క
                </p>
                <p className={styles.block_536}>ంగ కనుక ా రణ ంగ మ "ఏంట "</p>
                <p className={styles.block_537}>అ ాయటం జ ం .</p>
                <p className={styles.block_538}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_10}>Correct: ల బ ఎక డ ం ? </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>బ ఎక డ ం </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_10}>Correct: ార ఖ </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>ార ఖ </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_10}>Correct: తన క ాను. </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>తన క ాను </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_542}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_543}>Correct: ళ</p>
                <p className={styles.block_334}>Incorrect: ళ</p>
                <p className={styles.block_544}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ళ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_545}>
                  Explanation: " ళ " ా మ ణ కం ాక నప ట
                </p>
                <p className={styles.block_546}>
                  ళ ారం బదుల ా "ల ారం" ాడటం ా రణం కనుక వక
                </p>
                <p className={styles.block_547}>ప ం ప నట ా ాయటం జ ం .</p>
                <p className={styles.block_548}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, do a Google
                  search for the word. If there is a clear candidate, transcribe
                  that word.
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_6}>Correct: అబ </span>
                  <span className={styles.text_7}>
                    Explanation: వక " అబ " అ ర . ా ార{' '}
                  </span>
                </p>
                <p className={styles.block_550}>"సు ాబ " అనుక న ప డ గ గ ల "</p>
                <p className={styles.block_551}>అబ " ఉంట ాయం .</p>
                <p className={styles.block_552}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_553}>Correct: ట బ</p>
                <p className={styles.block_554}>
                  <span className={styles.text_4}>
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
