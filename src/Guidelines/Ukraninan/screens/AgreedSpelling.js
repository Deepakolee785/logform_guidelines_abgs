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
            <PageContentHeader currentPage="longform Ukraninan" />
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
                <p className={styles.block_1072}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Кучма к у ч м а </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Person said "Кучма" and then spelled{' '}
                  </span>
                </p>
                <p className={styles.block_1073}>it.</p>
                <p className={styles.block_1074}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : а б в г ґ д е є ж з и і ї й к л м н о п р с т у ф х ц ч ш
                    щ ь ю я
                  </span>
                </p>
                <p className={styles.block_1075}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    а бе ве ге ґе де е йе же зе и і йі йот ка ел ем ен о пе ер
                    ес те у еф ха це че ша шча м'який знак йу йа{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1076}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: spelled out alphabet </span>
                </p>
                <p className={styles.block_1077}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: ВНЗ </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>ве ен зе </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1078}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: common acronym </span>
                </p>
                <p className={styles.block_1079}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: СБУшник </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>ес бе у шник </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1080}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : acronym with suffix "шник"{' '}
                  </span>
                </p>
                <p className={styles.block_1081}>
                  For uses of single letters, either referring to the letter
                  itself or some other meaning associated with it, use capital
                  letters.
                </p>
                <p className={styles.block_759}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: всі слова на букву К </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>всі слова на букву ка </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1082}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: В тебе є план Б? </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>в тебе є план бе </span>
                  <span className={styles.text_9}>" </span>
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_1085}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : гей, ха, хаха, хахаха{' '}
                  </span>
                </p>
                <p className={styles.block_1086}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: хахаха </span>
                </p>
                <p className={styles.block_1087}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: хахахахахахаха </span>
                </p>
                <p className={styles.block_1088}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>ха ха ха ха ха ха ха </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1089}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Do not transcribe more than three syllables.
                  </span>
                </p>
                <p className={styles.block_1090}>
                  List of Ukrainian common interjections.
                </p>
                <p className={styles.block_1091}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>о </span>
                </p>
                <p className={styles.block_1092}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>а </span>
                </p>
                <p className={styles.block_1093}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ану </span>
                </p>
                <p className={styles.block_1094}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>гей </span>
                </p>
                <p className={styles.block_1095}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ой </span>
                </p>
                <p className={styles.block_1096}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>агов </span>
                </p>
                <p className={styles.block_1097}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>на </span>
                </p>
                <p className={styles.block_1097}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ех </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>овва </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>от тобі і на </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>геть </span>
                </p>
                <p className={styles.block_1098}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>киць-киць </span>
                </p>
                <p className={styles.block_1099}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>тпру </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>цок-цок </span>
                </p>
                <p className={styles.block_1100}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>жах </span>
                </p>
                <p className={styles.block_1101}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>боже </span>
                </p>
                <p className={styles.block_1102}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>леле </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>отакої </span>
                </p>
                <p className={styles.block_1103}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>фу </span>
                </p>
                <p className={styles.block_1104}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>гайда </span>
                </p>
                <p className={styles.block_1093}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>пхе </span>
                </p>
                <p className={styles.block_1099}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>цить </span>
                </p>
                <p className={styles.block_1102}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>алло </span>
                </p>
                <p className={styles.block_1097}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ну </span>
                </p>
                <p className={styles.block_1105}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>нумо </span>
                </p>
                <p className={styles.block_160}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ціп-ціп </span>
                </p>
                <p className={styles.block_1106}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>йой </span>
                </p>
                <p className={styles.block_1106}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>годі </span>
                </p>
                <p className={styles.block_1107}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ого </span>
                </p>
                <p className={styles.block_1097}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>гм </span>
                </p>
                <p className={styles.block_1108}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>хм </span>
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>диви </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>цур тобі </span>
                </p>
                <p className={styles.block_1093}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>вау </span>
                </p>
                <p className={styles.block_1109}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ку-ку </span>
                </p>
                <p className={styles.block_1108}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>тю </span>
                </p>
                <p className={styles.block_1097}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ба </span>
                </p>
                <p className={styles.block_1110}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>так </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>окей </span>
                </p>
                <p className={styles.block_1111}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_5}>ок </span>
                  <span className={styles.text_20}></span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names </p>
                <p className={'text'}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.
                </p>
                <p className={styles.block_1113}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_1114}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: пісні Beatles </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Unless there is an official name in Cyrillics,
                  </span>
                </p>
                <p className={styles.block_1115}>
                  base your spelling on top hits from Google.
                </p>
                <p className={styles.block_1116}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : новий альбом Брітні Спірс{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Foreign personal name, use Cyrillics to{' '}
                  </span>
                </p>
                <p className={styles.block_1117}>transcribe it.</p>
                <p className={styles.block_1118}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : композиція Ріанни Diamonds{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Foreign personal name, use Cyrillics; for
                  </span>
                </p>
                <p className={styles.block_1119}>
                  band names use original spelling.
                </p>
                <p className={styles.block_1120}>
                  If proper names include diacritics uncommon in your language
                  (é, ü, ç, etc), include them in your spelling. If unsure,
                  refer to news articles, official city or celebrity websites,
                  IMDb, Wikipedia, Google Maps, or knowledge cards (the answer
                  box above the list of Google Search results) in that order.
                  When no other source can be used to decide between spellings,
                  choose the spelling used in the first hit(s) on Google.
                </p>
                <p className={styles.block_1121}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_1122}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Йоганн Вольфганг фон Гете{' '}
                  </span>
                </p>
                <p className={styles.block_1123}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Йоганн Вольфґанґ фон Ґете{' '}
                  </span>
                </p>
                <p className={styles.block_1124}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Searching "Вольфганг Гете" yields more results than
                    "Вольфґанґ Ґете", so use the more common spelling. Both
                    variants are orthographically acceptable.
                  </span>
                </p>
                <p className={styles.block_1125}>
                  If a speaker makes a small mistake in a proper name,
                  capitalize it anyway as long as the difference is minimal.
                  "Minimal difference" refers to adding or dropping articles,
                  possessives, and plurals.
                </p>
                <p className={styles.block_1126}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Володарі перснів </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Actual name is "Володар перснів".{' '}
                  </span>
                </p>
                <p className={styles.block_1127}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: грати в Майкрафт </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Actual name is "Майнкрафт".{' '}
                  </span>
                </p>
                <p className={styles.block_1128}>
                  Spell and capitalize holidays as they are formatted within the
                  answer box above the list of Google Search results. If no box
                  appears, defer to Wikipedia's formatting, and if there is no
                  Wikipedia article, use the most common format according to
                  Google Search results.
                </p>
                <p className={styles.block_1129}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : З Новим Роком і Різдвом Христовим!{' '}
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Майже всі в Україні святкують Великдень.{' '}
                  </span>
                </p>
                <p className={styles.block_1130}>
                  Capitalize words used as titles and names when they are used
                  that way.
                </p>
                <p className={styles.block_1131}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Голова Верховної Ради України Володимир Гройсман
                  </span>
                </p>
                <p className={styles.block_1132}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : "Голова Верховної Ради" is a title.{' '}
                  </span>
                </p>
                <p className={styles.block_1133}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : письменник Квітка-Основ'яненко{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "письменник" is not a title.{' '}
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
                <p className={styles.block_1136}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Я чув, що Yahoo та T-Mobile нещодавно погодились.
                  </span>
                </p>
                <p className={styles.block_1137}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    я чув що яху та ті мобайл нещодавно погодились{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1138}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Toys "R" Us </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>тойз ар ас </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1139}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Google </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>гугл </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1140}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Burger King </span>
                </p>
                <p className={styles.block_1141}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: BURGER KING </span>
                </p>
                <p className={styles.block_1142}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Do not spell "Burger King" all in uppercase as in the
                    stylized form of the logo, stick to the official form as per
                    the privacy policy.
                  </span>
                </p>
                <p className={styles.block_1143}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: LEGO </span>
                </p>
                <p className={styles.block_1144}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Lego </span>
                </p>
                <p className={styles.block_1145}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Мобільні ТелеСистеми </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : officially camel case{' '}
                  </span>
                </p>
                <p className={styles.block_1146}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Кока-Кола </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Official name in Cyrillics is available and
                  </span>
                </p>
                <p className={styles.block_1147}>widely used.</p>
                <p className={styles.block_1148}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: ROSHEN </span>
                </p>
                <p className={styles.block_1149}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: ЮГОК </span>
                </p>
                <p className={styles.block_503}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases. Outside of this phrase, use the spelling "окей",
                  and do not capitalize this word unless it begins a sentence.
                </p>
                <p className={styles.block_1150}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ok Google </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>окей гугл </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1151}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ok Google Now </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>окей гугл нау </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1152}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ok Google, гарбуз </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>окей гугл гарбуз </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1153}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ok Google, де Хрещатик?{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>окей гугл де хрещатик </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1154}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Oкей, Оксано. </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Oкей, пішли в кав'ярню.{' '}
                  </span>
                </p>
                <p className={styles.block_1155}>
                  In addition to the flexibility detailed in Agreed Spelling
                  &gt; Proper Names, slight differences in word order are also
                  acceptable. This applies only to order &mdash; if words not
                  found in the correct name are added to the attempted name, do
                  not capitalize these extra words.
                </p>
                <p className={styles.block_1156}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Баттерфляй Ультрамарин.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: official name </span>
                </p>
                <p className={styles.block_1157}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ультрамарин Баттерфляй.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: slight reordering </span>
                </p>
                <p className={styles.block_1158}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ми йдемо в Ультрамарин дивитись новий фільм.
                  </span>
                </p>
                <p className={styles.block_1159}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : omitted non-essential part of business name
                  </span>
                </p>
                <p className={styles.block_1160}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : кінотеатр Ультрамарин{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "Ультрамарин" is essential part of title;
                  </span>
                </p>
                <p className={styles.block_1161}>
                  "кінотеатр" describes the nature of the business.
                </p>
                <p className={styles.block_1162}>
                  List of common brands and products.
                </p>
                <p className={styles.block_1163}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Нафтогаз </span>
                </p>
                <p className={styles.block_1164}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Укрзалізниця </span>
                </p>
                <p className={styles.block_1165}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Укрнафта </span>
                </p>
                <p className={styles.block_1166}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Укртатнафта </span>
                </p>
                <p className={styles.block_1167}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Енергоатом </span>
                </p>
                <p className={styles.block_1168}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Епіцентр </span>
                </p>
                <p className={styles.block_1169}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Донецьксталь </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Запоріжсталь </span>
                </p>
                <p className={styles.block_904}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>АТБ-Маркет </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Київстар </span>
                </p>
                <p className={styles.block_400}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Рошен </span>
                </p>
                <p className={styles.block_166}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Укртелеком </span>
                </p>
                <p className={styles.block_1170}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Лукойл </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>АероСвіт </span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Фуршет </span>
                </p>
                <p className={styles.block_1168}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Оболонь </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Славутич </span>
                </p>
                <p className={styles.block_1099}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>МАУ </span>
                </p>
                <p className={styles.block_1171}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Харківобленерго </span>
                </p>
                <p className={styles.block_1172}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Київміськбуд </span>
                </p>
                <p className={styles.block_1173}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Технополіс </span>
                </p>
                <p className={styles.block_1174}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Макдональдз </span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ТНТ </span>
                </p>
                <p className={styles.block_909}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Центрегерго </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Мотор Січ </span>
                </p>
                <p className={styles.block_1101}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Конті </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Хортиця </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Рогань </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Чернігівське </span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Славутич </span>
                </p>
                <p className={styles.block_906}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Львівське </span>
                </p>
                <p className={styles.block_1175}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Балтика </span>
                </p>
                <p className={styles.block_407}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Житомирське </span>
                </p>
                <p className={styles.block_1176}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>АВЕК </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Фоззі </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Самсунг </span>
                </p>
                <p className={styles.block_1177}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Філіп Моріс </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Нестле </span>
                </p>
                <p className={styles.block_907}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Сандора </span>
                </p>
                <p className={styles.block_1178}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Азовзагальмаш </span>
                </p>
                <p className={styles.block_1179}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Велика Кишеня </span>
                </p>
                <p className={styles.block_1180}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Сільпо </span>
                </p>
                <p className={styles.block_1181}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Укрпошта </span>
                </p>
                <p className={styles.block_1175}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Nemiroff </span>
                </p>
                <p className={styles.block_1169}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Миргородська </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Світоч </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Чумак </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ласуня </span>
                </p>
                <p className={styles.block_1182}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_5}>АВК </span>
                  <span className={styles.text_20}></span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title </p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_1184}>
                  Capitalize only the first word in media titles in Ukrainian.
                  If there is a proper noun in the title, capitalize it as well.
                  Capitalize foreign media titles in accordance with the
                  capitalization conventions of the media title's original
                  language. For English media titles, capitalize every word
                  except articles, conjunctions, and prepositions unless they
                  are the first word.
                </p>
                <p className={styles.block_1185}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : дивитись серіал Картковий будинок{' '}
                  </span>
                </p>
                <p className={styles.block_1186}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Дивитись серіал Картковий Будинок.{' '}
                  </span>
                </p>
                <p className={styles.block_1187}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : дивитись фільм Містер Бін на відпочинку{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "Бін" is a proper noun, so capitalize it as
                  </span>
                </p>
                <p className={styles.block_1188}>well.</p>
                <p className={styles.block_1189}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : слухати пісню Rolling in the Deep{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : In English titles, all the words are{' '}
                  </span>
                </p>
                <p className={styles.block_1190}>
                  capitalized except articles, conjunctions and prepositions.
                </p>
                <p className={styles.block_1191}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_1192}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : дивитись фільм Весільний майстер{' '}
                  </span>
                </p>
                <p className={styles.block_1193}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : грати пісню Це зі мною Бумбокс{' '}
                  </span>
                </p>
                <p className={styles.block_1194}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Третій зайвий 2 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>третій зайвий два </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1195}>
                  Transcribe all media titles with original punctuation. In
                  cases where original punctuation falls at the end of a
                  sentence, do not transcribe sentence-level punctuation. That
                  is, media title punctuation trumps sentence level punctuation
                  when in conflict. If a popular media title consists of an
                  entire sentence but the official spelling is without
                  punctuation, then don't punctuate the title. If an utterance
                  is ambiguous between a media title and a sentence or web
                  search, use your judgment for which is more likely and treat
                  it accordingly.
                </p>
                <p className={styles.block_1196}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : В якому році вийшов Володар перснів: Дві вежі?
                  </span>
                </p>
                <p className={styles.block_1197}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : В якому році вийшов Володар перснів. Дві вежі.
                  </span>
                </p>
                <p className={styles.block_1198}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : дивитись фільм Чувак, де моя машина?{' '}
                  </span>
                </p>
                <p className={styles.block_1199}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : дивитись фільм Чувак де моя машина.{' '}
                  </span>
                </p>
                <p className={styles.block_1200}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : знайти фільм Іронія долі, або З легкою парою!
                  </span>
                </p>
                <p className={styles.block_1201}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : знайти фільм Іронія долі або з легкою парою
                  </span>
                </p>
                <p className={styles.block_1202}>
                  Very common alternate or shortened versions of titles should
                  also be capitalized.
                </p>
                <p className={styles.block_1203}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Трансформери 2 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Official title is "Трансформери 2:{' '}
                  </span>
                </p>
                <p className={styles.block_1204}>Помста померлих".</p>
                <p className={styles.block_1205}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Іронія долі </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Official title is "Іронія долі, або З легкою
                  </span>
                </p>
                <p className={styles.block_1206}>парою!"</p>
                <p className={styles.block_1207}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : текст пісні Океану Ельзи Дівчина{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Official title is "Дівчина (з іншого{' '}
                  </span>
                </p>
                <p className={styles.block_1208}>життя)".</p>
                <p className={styles.block_760}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : слухати Джамала Верше{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Official title is "Верше мій, верше".{' '}
                  </span>
                </p>
                <p className={styles.block_1209}>
                  Do not capitalize a media title that happens to occur within
                  quoted lyrics. Format lyrics that form a sentence as you would
                  a normal sentence.
                </p>
                <p className={styles.block_1210}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : YouTube Я не здамся без бою.{' '}
                  </span>
                </p>
                <p className={styles.block_265}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : YouTube Я не здамся Без бою.{' '}
                  </span>
                </p>
                <p className={styles.block_1211}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : They are quoting lyrics that just happen to contain the
                    title "Без бою"; format as full sentence.
                  </span>
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the 2008 online dictionary by the Ukrainian Academy of
                  Sciences on http://lcorp.ulif.org.ua/dictua/, and search for
                  the word in the multi-dictionary search bar. If there is no
                  entry, Google the word and use the form with the most hits.
                </p>
                <p className={styles.block_1214}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Сьєрра-Леоне </span>
                </p>
                <p className={styles.block_1215}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Сієрра-Леоне </span>
                </p>
                <p className={styles.block_1216}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Сьєрра-Лєонє </span>
                </p>
                <p className={styles.block_1217}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The reference dictionary states "Сьєрра-Леоне".
                  </span>
                </p>
                <p className={styles.block_1218}>
                  Guess the most likely spelling given the context. When context
                  is insufficient, rely on Google hits.
                </p>
                <p className={styles.block_1219}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Час швидко мине. </span>
                </p>
                <p className={styles.block_1220}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: мене </span>
                </p>
                <p className={styles.block_1221}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_1222}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Псевдотсуга Мензіса </span>
                </p>
                <p className={styles.block_1223}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: E. coli </span>
                </p>
                <p className={styles.block_1224}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Метронідазол </span>
                </p>
                <p className={styles.block_1225}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_1226}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ти підеш на фізру? </span>
                </p>
                <p className={styles.block_1227}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ти підеш на фізкультуру?{' '}
                  </span>
                </p>
                <p className={styles.block_1228}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Вік, іди-но сюди! </span>
                </p>
                <p className={styles.block_1229}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Віко, іди-но сюди! </span>
                </p>
                <p className={styles.block_1230}>
                  Use standard spelling for reductions that commonly occur in
                  normal running speech, like "що", "скільки" for "шо", "скіки".
                </p>
                <p className={styles.block_1231}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Що трапилось? </span>
                </p>
                <p className={styles.block_1232}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Шо трапилось? </span>
                </p>
                <p className={styles.block_1233}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>шо трапилось </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1234}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Скільки коштує хліб? </span>
                </p>
                <p className={styles.block_1235}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Скіки коштує хліб? </span>
                </p>
                <p className={styles.block_1236}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>скіки коштує хліб </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1237}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_1238}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Лос-Анджелес </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>лас енджилес </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1239}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Здрастуйте! </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>здґастуйте </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1240}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Speaker has trouble pronouncing "р" sound.
                  </span>
                </p>
                <p className={styles.block_1241}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Візьми мене з собою. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>вісьми мине с сабою </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_486}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_1242}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: інтерпрувати </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker meant "інтерпретувати" but{' '}
                  </span>
                </p>
                <p className={styles.block_1243}>skipped a syllable.</p>
                <p className={styles.block_1127}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: відповідувати </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Speaker meant "відповідати" but{' '}
                  </span>
                </p>
                <p className={styles.block_1244}>added an extra syllable.</p>
                <p className={styles.block_1245}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first perform
                  a Google search for the word. If there is a clear candidate,
                  transcribe that word.
                </p>
                <p className={styles.block_1246}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ашрафія </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : User says "ашрафія". Transcriber{' '}
                  </span>
                </p>
                <p className={styles.block_1247}>
                  searches "ашрафія", finds correct results. Transcribe
                  "Ашрафія".
                </p>
                <p className={styles.block_1248}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_1249}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: вабріація </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>вабріація </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_550}>
                  List of common onomatopoeias. When an onomatopoeia is repeated
                  two or more times, it should be concatenated and connected
                  with a hyphen (e.g. "ха-ха-ха", "няв-няв", "чік-чірік").
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>плюх </span>
                </p>
                <p className={styles.block_1109}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>грюк </span>
                </p>
                <p className={styles.block_1110}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>гуп </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>шубовсь </span>
                </p>
                <p className={styles.block_1250}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кукуріку </span>
                </p>
                <p className={styles.block_1093}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>няв </span>
                </p>
                <p className={styles.block_1110}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>гав </span>
                </p>
                <p className={styles.block_1097}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ай </span>
                </p>
                <p className={styles.block_1251}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ам </span>
                </p>
                <p className={styles.block_1252}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>геп </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>пугу-пугу </span>
                </p>
                <p className={styles.block_1253}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>бринь-бринь </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>цок-цок </span>
                </p>
                <p className={styles.block_907}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>шур-шур </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>тук-тук </span>
                </p>
                <p className={styles.block_1100}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>бум </span>
                </p>
                <p className={styles.block_1167}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>скрип-скрип </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>дзинь </span>
                </p>
                <p className={styles.block_1093}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>бах </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>бабах </span>
                </p>
                <p className={styles.block_1100}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>брр </span>
                </p>
                <p className={styles.block_1254}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>га </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ха-ха </span>
                </p>
                <p className={styles.block_1097}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ха </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ж-ж-ж </span>
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>і-го-го </span>
                </p>
                <p className={styles.block_1255}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кап-кап </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кря-кря </span>
                </p>
                <p className={styles.block_404}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кар-кар </span>
                </p>
                <p className={styles.block_1106}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>мур </span>
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>піф-паф </span>
                </p>
                <p className={styles.block_1256}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>плюх </span>
                </p>
                <p className={styles.block_1110}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>тсс </span>
                </p>
                <p className={styles.block_1256}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>р-р-р </span>
                </p>
                <p className={styles.block_1096}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>тьху </span>
                </p>
                <p className={styles.block_1107}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>тяв </span>
                </p>
                <p className={styles.block_1106}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>хі-хі </span>
                </p>
                <p className={styles.block_1257}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>хрю </span>
                </p>
                <p className={styles.block_1093}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>цап </span>
                </p>
                <p className={styles.block_1100}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>циц </span>
                </p>
                <p className={styles.block_1094}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>чух </span>
                </p>
                <p className={styles.block_405}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>шмиг </span>
                </p>
                <p className={styles.block_1258}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ш-ш </span>
                </p>
                <p className={styles.block_1094}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>топ </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>туп-туп </span>
                </p>
                <p className={styles.block_1107}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>бух </span>
                </p>
                <p className={styles.block_1093}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ляп </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ку-ку </span>
                </p>
                <p className={styles.block_1176}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ля-ля </span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>жу-жу </span>
                </p>
                <p className={styles.block_1259}>
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
