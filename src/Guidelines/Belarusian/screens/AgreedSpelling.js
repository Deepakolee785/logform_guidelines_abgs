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
            <PageContentHeader currentPage="longform Belarusian" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling </p>
              <p className={'text'}>
                Spelling conventions for words where several options are
                thinkable, as well as proper names.{' '}
              </p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out </p>
                <p className={'text'}>
                  If a word is spelled or obvious pauses are made between
                  letters, spell it into letters as it is said (often done for
                  foreign names or businesses, for example). Use lowercase
                  letters for the spelled-out portion. This rule does not apply
                  to acronyms or initialisms, or to spelled-out web or email
                  addresses.{' '}
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_4}>
                    Correct: Ганцэвічы г а н ц э в і ч ы{' '}
                  </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>
                    ганцэвічы г а н ц э в і ч ы{' '}
                  </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_596}>
                  Correct: а б в г д е ё ж з і й к л м н о п р с т у{' '}
                </p>
                <p className={styles.block_597}>ф х ц ч ш э ю я </p>
                <p className={styles.block_598}>
                  Explanation: spelled out the alphabet{' '}
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_4}>Correct: ДАІ </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>д а і </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_600}>Explanation: acronym </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections </p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.{' '}
                </p>
                <p className={styles.block_603}>
                  Correct: ха-ха, га-га, э, а, о, ого, эх, ах, ох, ух,{' '}
                </p>
                <p className={styles.block_604}>фэ, ай-яй </p>
                <p className={styles.block_605}>
                  <span className={styles.text_4}>Correct: хахаха </span>
                  <span className={styles.text_8}>Example audio: " </span>
                  <span className={styles.text_9}>ха ха ха ха ха </span>
                  <span className={styles.text_8}>" </span>
                </p>
                <p className={styles.block_606}>
                  Explanation: Do not transcribe more than three{' '}
                </p>
                <p className={styles.block_607}>syllables. </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names </p>
                <p className={'text'}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.{' '}
                </p>
                <p className={styles.block_610}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").{' '}
                </p>
                <p className={styles.block_611}>Correct: Пазвані Лізавеце. </p>
                <p className={styles.block_612}>
                  Incorrect: Пазвані Альжбеце.{' '}
                </p>
                <p className={styles.block_613}>
                  Explanation: Searching "імя Лізавета" (without{' '}
                </p>
                <p className={styles.block_614}>
                  quotation marks) yields more results than "імя{' '}
                </p>
                <p className={styles.block_615}>
                  Альжбета", even though searching "Лізавета"{' '}
                </p>
                <p className={styles.block_616}>
                  yields more results than "Альжбета".{' '}
                </p>
                <p className={styles.block_617}>
                  <span className={styles.text_4}>
                    Correct: Лізавета Герман{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Search full names to see if they{' '}
                  </span>
                </p>
                <p className={styles.block_618}>
                  refer to a celebrity. If the full name does not{' '}
                </p>
                <p className={styles.block_619}>
                  belong to a celebrity, use the most common{' '}
                </p>
                <p className={styles.block_338}>
                  spelling for each part of the name (e.g. search{' '}
                </p>
                <p className={styles.block_620}>"Лізавета" and "Герман"). </p>
                <p className={styles.block_621}>
                  If a speaker makes a small mistake in a proper name,
                  capitalize it anyway as long as the difference is minimal.
                  "Minimal differences" refers to adding or dropping articles,
                  possessives, and plurals.{' '}
                </p>
                <p className={styles.block_622}>
                  <span className={styles.text_4}>
                    Correct: Уладар пярсцёнка{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: actual name "Уладар{' '}
                  </span>
                </p>
                <p className={styles.block_623}>пярсцёнкаў" </p>
                <p className={styles.block_624}>
                  <span className={styles.text_4}>
                    Correct: Глядзець трылер Вайна светаў{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: official name "Вайна светаў Z"{' '}
                  </span>
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_4}>
                    Correct: фільм Ідзі глядзі{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: for "Ідзі і глядзі"{' '}
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
                <p className={styles.block_628}>
                  Correct: Ён працуе ў кампаніі Пяты элемент.{' '}
                </p>
                <p className={styles.block_629}>
                  Correct: Гандлёвая марка Пяты элемент{' '}
                </p>
                <p className={styles.block_630}>пашырае свае ўладанні. </p>
                <p className={styles.block_631}>Correct: БЕЛАВІЯ </p>
                <p className={styles.block_632}>Correct: Атлант-Сэрвіс </p>
                <p className={styles.block_633}>Incorrect: АТЛАНТ-СЭРВІС </p>
                <p className={styles.block_501}>
                  Correct: МТЗ БЕЛАРУС Трактар{' '}
                </p>
                <p className={styles.block_634}>
                  Incorrect: МТЗ БЕЛАРУС ТРАКТАР{' '}
                </p>
                <p className={styles.block_291}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.{' '}
                </p>
                <p className={styles.block_635}>Correct: Ok Google </p>
                <p className={styles.block_636}>Correct: Ok Google Now </p>
                <p className={styles.block_637}>
                  Correct: Ok Google, дзе знаходзіцца{' '}
                </p>
                <p className={styles.block_638}>найбліжэйшы касцёл? </p>
                <p className={styles.block_639}>Correct: Ok Google, тыквы </p>
                <p className={styles.block_640}>Correct: Добра, Дэйвід. </p>
                <p className={styles.block_641}>
                  Correct: Добра Пэці, пойдзем.{' '}
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title </p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.{' '}
                </p>
                <p className={styles.block_644}>
                  Capitalize media titles the way they are typically
                  capitalized.{' '}
                </p>
                <p className={styles.block_645}>
                  Do not use quotation marks for media titles.{' '}
                </p>
                <p className={styles.block_646}>
                  Correct: скрыншоты з Адзін у цемры{' '}
                </p>
                <p className={styles.block_647}>
                  Correct: Прайграванне Лёгкія-лёгкія{' '}
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
                <p className={styles.block_649}>Correct: без нас </p>
                <p className={styles.block_650}>Incorrect: бяз нас </p>
                <p className={styles.block_651}>
                  Explanation: "без" is preferred by Слоўнік{' '}
                </p>
                <p className={styles.block_652}>беларускай мовы. </p>
                <p className={styles.block_653}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.{' '}
                </p>
                <p className={styles.block_654}>
                  Correct: Патэліш мне заўтра зранку.{' '}
                </p>
                <p className={styles.block_655}>
                  Incorrect: Патэлефануеш мне заўтра зранку.{' '}
                </p>
                <p className={styles.block_656}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    патэліш мне заўтра зранку{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_657}>
                  Correct: Хопіць табе байсяліць.{' '}
                </p>
                <p className={styles.block_658}>Incorrect: Кажы па справе. </p>
                <p className={styles.block_659}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>хопіць табе байсяліць </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_660}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.{' '}
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_4}>
                    Correct: Яны прыслалі карэнспандэнцыю.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker meant "карэспандэнта"{' '}
                  </span>
                </p>
                <p className={styles.block_662}>but added one extra suffix. </p>
                <p className={styles.block_663}>
                  <span className={styles.text_6}>
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
