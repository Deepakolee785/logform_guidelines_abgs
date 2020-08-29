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
            <PageContentHeader currentPage="longform Armenian" />
            <div className="content text">
              <div id="spelling-out">
                <p className={'large-heading'}>Agreed spelling </p>
                <p className={'text'}>
                  Spelling conventions for words where several options are
                  thinkable, as well as proper names.{' '}
                </p>
                <p className={'heading'}>Spelling out </p>
                <p className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.{' '}
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_17}>
                    Correct: Կոստկո կ ո ս տ կ ո{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>կոստկո կ ո ս տ կ ո </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_496}>
                  Correct: Ա, Բ, Գ, Դ, Ե, Զ, Է, Ը, Թ, Ժ, Ի, Լ, Խ,{' '}
                </p>
                <p className={styles.block_497}>
                  Ծ, Կ, Հ, Ձ, Ղ, Ճ, Մ, Ն, Շ, Ո, Չ, Պ, Ջ, Ռ, Ս, Վ,{' '}
                </p>
                <p className={styles.block_498}>
                  Տ, Ր, Ց, Ւ, Փ, Ք, եւ, Օ եւ Ֆ{' '}
                </p>
                <p className={styles.block_499}>
                  Explanation: արտասանել այբուբենը{' '}
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_17}>Correct: ԼՂՀ </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>լ ղ հ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_501}>
                  Explanation: հատուկ անվան հապավում{' '}
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_26}>Correct: VIPs </span>
                  <span className={styles.text_27}>
                    Explanation: Վի Այ Փի ները{' '}
                  </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections </p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.{' '}
                </p>
                <p className={styles.block_505}>
                  Correct: էհհ, հա, հահա, հեհե, բոոո հոոո,{' '}
                </p>
                <p className={styles.block_506}>լալալա </p>
                <p className={styles.block_507}>Correct: հահահա </p>
                <p className={styles.block_508}>Incorrect: հահահահահա </p>
                <p className={styles.block_509}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>հա հա հա հա հա </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_510}>
                  Explanation: Երեքից ավել վանկ{' '}
                </p>
                <p className={styles.block_511}>չտառադարձե՛լ։ </p>
              </div>
              <div id="proper-name">
                <p className={'heading'}>Proper names </p>
                <p className={'text'}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.{' '}
                </p>
                <p className={'text'}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").{' '}
                </p>
                <p className={styles.block_515}>
                  Correct: Զանգահարի՛ Մարիամին։{' '}
                </p>
                <p className={styles.block_516}>
                  Incorrect: Զանգահարի՛ Մարյամին։{' '}
                </p>
                <p className={styles.block_517}>
                  Explanation: Որոնման դեպքում կգտնվի{' '}
                </p>
                <p className={styles.block_518}>
                  ավելի շատ «Սոֆիա» քան «Սոֆյա»։{' '}
                </p>
                <p className={styles.block_519}>Correct: Արտյոմ Վարդանյան </p>
                <p className={styles.block_520}>Incorrect: Առծյոմ Վառթանյան </p>
                <p className={styles.block_521}>
                  <span className={styles.text_8}>
                    Correct: Սոֆիա Մաքդոնալդ{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Որոնե՛լ հայտնի մարդկանց{' '}
                  </span>
                </p>
                <p className={styles.block_522}>
                  տվյալ անուն-ազգանունով: Չգտնվելու{' '}
                </p>
                <p className={styles.block_523}>
                  դեմքում գրել ամենաշատ օգտագործվող{' '}
                </p>
                <p className={styles.block_524}>ձեւը։ </p>
                <p className={styles.block_525}>
                  If a speaker makes a small mistake in a proper name,
                  capitalize it anyway as long as the difference is minimal.
                  "Minimal differences" refers to adding or dropping articles,
                  possessives, and plurals.{' '}
                </p>
                <p className={styles.block_526}>
                  <span className={styles.text_8}>
                    Correct: Մատանու տիրակալը{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Իրական անունը՝{' '}
                  </span>
                </p>
                <p className={styles.block_527}>«Մատանիների տիրակալը» </p>
                <p className={styles.block_528}>
                  <span className={styles.text_8}>
                    Correct: Միացրու՛ Matrix ֆիլմը։{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Իրական անունը՝ «The Matrix»{' '}
                  </span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product </p>
                <p className={'text'}>
                  Format proper names as they are most commonly formatted on the
                  entity's website (especially official documents), if
                  available, or the Wikipedia or IMDb page. In cases of
                  ambiguity, defer to their privacy policy. If no other sources,
                  use top Google hits.{' '}
                </p>
                <p className={styles.block_531}>
                  Correct: Նա աշխատում է Amazon-ում։{' '}
                </p>
                <p className={styles.block_249}>
                  Correct: Լսել եմ Yahoo-ն եւ T-Mobile-ը{' '}
                </p>
                <p className={styles.block_532}>պայմանագիր են կնքել։ </p>
                <p className={styles.block_533}>Correct: YouTube </p>
                <p className={styles.block_534}>
                  <span className={styles.text_26}>Correct: craigslist </span>
                  <span className={styles.text_27}>
                    Explanation: պաշտոնապես «craigslist».{' '}
                  </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_26}>Correct: AAMCO </span>
                  <span className={styles.text_27}>
                    Explanation: պաշտոնապես «AAMCO» եւ{' '}
                  </span>
                </p>
                <p className={styles.block_536}>հապավում է։ </p>
                <p className={styles.block_537}>
                  <span className={styles.text_26}>Correct: ampm </span>
                  <span className={styles.text_27}>
                    Explanation: պաշտոնապես «ampm»{' '}
                  </span>
                </p>
                <p className={styles.block_538}>Correct: eHarmony </p>
                <p className={styles.block_539}>
                  <span className={styles.text_26}>
                    Correct: UnitedHealthcare{' '}
                  </span>
                  <span className={styles.text_27}>
                    Explanation: պաշտոնապես camel case։{' '}
                  </span>
                </p>
                <p className={styles.block_540}>Correct: Burger King </p>
                <p className={styles.block_541}>Incorrect: BURGER KING </p>
                <p className={styles.block_542}>
                  Explanation: Չգրե՛լ «Burger King»{' '}
                </p>
                <p className={styles.block_543}>մեծատառերով։ </p>
                <p className={styles.block_544}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.{' '}
                </p>
                <p className={styles.block_248}>Correct: Ok Google </p>
                <p className={styles.block_545}>
                  Correct: Ok Google, ո՞րտեղ է Starbucks-ը։{' '}
                </p>
                <p className={styles.block_546}>
                  Correct: Ok Google, դդումներ{' '}
                </p>
                <p className={styles.block_547}>Correct: Oքեյ։ </p>
                <p className={styles.block_548}>Correct: Oքեյ, Դավիթ։ </p>
                <p className={styles.block_549}>
                  Correct: Oքեյ Դավիթ, արի՛ գնանք։{' '}
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title </p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a{' '}
                </p>
                <p className={styles.block_552}>
                  sentence or web search, use your judgment for which is more
                  likely; if truly unclear, default to media title.{' '}
                </p>
                <p className={styles.block_553}>
                  Do not use quotation marks for media titles.{' '}
                </p>
                <p className={styles.block_554}>
                  Correct: Call of Duty սկրինշոթեր։ Black Ops 2{' '}
                </p>
                <p className={styles.block_485}>
                  Correct: Միացրու՛ Ռիհանայի Դայմոնդ երգը։{' '}
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings </p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.{' '}
                </p>
                <p className={styles.block_557}>Correct: մայրիկ </p>
                <p className={styles.block_558}>Incorrect: մայրիգ </p>
                <p className={styles.block_559}>Explanation: արեւմտահայերեն </p>
                <p className={styles.block_560}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.{' '}
                </p>
                <p className={styles.block_561}>Correct: Կատակ չեմ անում։ </p>
                <p className={styles.block_562}>Incorrect: Չեմ կատակում։ </p>
                <p className={styles.block_563}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>Կատակ չեմ անում </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_564}>Correct: Սուրճ է սիրում։ </p>
                <p className={styles.block_565}>
                  Incorrect: Նա սուրճ է սիրում։{' '}
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>սուրճ է սիրում </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_567}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.{' '}
                </p>
                <p className={styles.block_568}>
                  <span className={styles.text_17}>Correct: Ուշանում եմ։ </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_16}>ուշանում եմ </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_569}>
                  Transcribe onomatopoeia when clearly spoken. Otherwise, use
                  the Unintelligible label as instructed in: Longform generic
                  rules &gt; Unintelligible or foreign or singing.{' '}
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
