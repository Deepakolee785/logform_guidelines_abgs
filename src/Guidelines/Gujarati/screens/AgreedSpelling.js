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
            <PageContentHeader currentPage="longform Gujarati" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
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
                <p className={styles.block_797}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: આગળીઓ આ ગ ળી ઓ </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>આગળીઓ આ ગ ળી ઓ </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_798}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The speaker says "આગળીઓ" aloud so transcribe the word
                    without spaces. The spelled out portion should have spaces
                    between the letters.
                  </span>
                </p>
                <p className={styles.block_799}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : અ આ ઇ ઈ ઉ ઊ ઋ ઍ એ ઐ ઑ ઓ ઔ ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત
                    થ દ ધ ન પ ફ બ ભ મ ય ર િ ળ વ શ ર્ સ હ ૠ ૡ
                  </span>
                </p>
                <p className={styles.block_800}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    અ આ ઇ ઈ ઉ ઊ ઋ ઍ એ ઐ ઑ ઓ ઔ ક ખ ગ ઘ ઙ ચ છ જ ઝ ઞ ટ ઠ ડ ઢ ણ ત થ
                    દ ધ ન પ ફ બ ભ મ ય ર િ ળ વ શ ર્ સ હ ૠ ૡ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_801}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The speaker spells out the alphabet so it is transcribed
                    with spaces.
                  </span>
                </p>
                <p className={styles.block_802}>
                  Transcribe all acronyms and initialisms with no spaces. Do not
                  include periods between letters.
                </p>
                <p className={styles.block_803}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: એમબીએ </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>એમ બી એ </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_804}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Since એમબીએ is an initialism, it is transcribed with no
                    spaces.
                  </span>
                </p>
                <p className={styles.block_805}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ટીવી, એટીએમ </span>
                </p>
                <p className={styles.block_806}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ટી.વી., એ.ટી.એમ. </span>
                </p>
                <p className={styles.block_807}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: સોમ </span>
                </p>
                <p className={styles.block_808}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: સો.મ. </span>
                </p>
                <p className={styles.block_809}>
                  If you are unsure whether a word should be written with a
                  hyphen, check your language's standard dictionary for the
                  official spelling.
                </p>
                <p className={styles.block_810}>
                  Single letters should be transcribed without quotes.
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  If the speaker uses words representing laughter, crying,
                  singing, etc. transcribe them up to three syllables. Do not
                  transcribe actual laughter.
                </p>
                <p className={styles.block_813}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: હાહાહા </span>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_21}>હા હા હા હા હા </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_814}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Even if the speaker says "હા" five times, only transcribe
                    three without spaces.
                  </span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  If you're not sure about the spelling for certain celebrity or
                  band names or for names with unique formatting, look it up.
                  For Gujarati names, use the Gujarati Wikipedia, for names in
                  other languages, please refer to the Foreign Language section.
                </p>
                <p className={styles.block_817}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: એ. આર. રહમાન </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_16}>
                    : "એ. આર. રહમાન" is a musician whose{' '}
                  </span>
                </p>
                <p className={styles.block_818}>
                  official name should be transcribed with periods.
                </p>
                <p className={styles.block_819}>
                  If a personal name could have multiple spellings, use the
                  spelling that has the most Google search hits when you search
                  for the name followed by the word "નામ" (e.g. "પરવીન નામ").
                </p>
                <p className={styles.block_820}>
                  If a speaker makes a small mistake in a proper name,
                  transcribe what the speaker says as long as the difference is
                  minimal. Minimal differences include adding or dropping
                  articles, possessives, and plurals.
                </p>
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
                <p className={styles.block_823}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Technical terms </span>
                </p>
                <p className={styles.block_824}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Proper names </span>
                </p>
                <p className={styles.block_825}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Celebrity names </span>
                </p>
                <p className={styles.block_826}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Holidays </span>
                </p>
                <p className={styles.block_827}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Brand names </span>
                </p>
                <p className={styles.block_828}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_1}>Product names </span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_831}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ગીતા રબારી એક સરસ ગીત છ.{' '}
                  </span>
                </p>
                <p className={styles.block_832}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : "ગીતા રબારી" એક સરસ ગીત છ.{' '}
                  </span>
                </p>
                <p className={styles.block_833}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Quotation marks are not used to transcribe song names.
                  </span>
                </p>
                <p className={styles.block_834}>
                  Transcribe all media titles with their original punctuation.
                  If punctuation from the title occurs at the end of a sentence,
                  do not transcribe another punctuation mark (a period, question
                  mark, or exclamation mark) for end of the sentence.
                </p>
                <p className={styles.block_835}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : શ તમ થઇ જશ! પહિા જોય છ?{' '}
                  </span>
                </p>
                <p className={styles.block_836}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : શ તમ થઇ જશ પહિા જોય છ?{' '}
                  </span>
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "થઇ જશ!" is a movie with punctuation in the title. Even
                    though the title is in the middle of a sentence, the
                    exclamation point should be transcribed along with the
                    question mark at the end of the sentence.
                  </span>
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  If a word has multiple correct spellings, use the first
                  spelling in your language's standard dictionary. If there is
                  no entry, Google the word and use the spelling with the most
                  results.
                </p>
                <p className={styles.block_839}>
                  Use official spelling for technical and scientific terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_840}>
                  Transcribe slang and colloquialisms as they are commonly
                  written in your language. Do not change non-standard speech
                  that the speaker wouldn't want corrected.
                </p>
                <p className={styles.block_841}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_842}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_843}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, do a Google
                  search for the word. If there is a clear candidate, transcribe
                  that word.
                </p>
                <p className={styles.block_146}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_844}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.
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
