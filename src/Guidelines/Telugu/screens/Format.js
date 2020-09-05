import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Format = () => {
  const classes = useStyles()

  const headingIds = [
    'number',
    'currency-and-unit',
    'date-and-time',
    'address',
    'web',
    'abbreviation',
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
              <p className={'large-heading'}>Format </p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Only Western Arabic numerals should be used.
                </p>
                <p className={styles.block_558}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                </p>
                <p className={styles.block_559}>Correct: తరగ మం ర ల ర .</p>
                <p className={styles.block_560}>
                  Incorrect: తరగ ల 9 మం ర ల ర .
                </p>
                <p className={styles.block_561}>
                  Explanation: 10 క తక వ సంఖ ల ాయ
                </p>
                <p className={styles.block_562}>అందు 9 " " ా ాయటం జ ం .</p>
                <p className={styles.block_563}>Correct: తరగ ల 13 మం ర ల ర .</p>
                <p className={styles.block_564}>Incorrect: తరగ ల పదమ డ మం</p>
                <p className={styles.block_565}>ర ల ర .</p>
                <p className={styles.block_566}>
                  Explanation: 10 క ఎక వ న సంఖ సంఖ లల
                </p>
                <p className={styles.block_567}>
                  ాయ . అందు "పదమ డ " బదుల ా 13 అ
                </p>
                <p className={styles.block_568}>ాయటం జ ం .</p>
                <p className={styles.block_569}>
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10.
                </p>
                <p className={styles.block_570}>
                  Correct: ద ర ఆర క క ల 12 ల ల ఉ .
                </p>
                <p className={styles.block_571}>
                  Incorrect: ద ర 6 క క ల 12 ల ల ఉ .
                </p>
                <p className={styles.block_572}>
                  Incorrect: ద ర ఆర క క ల ప ండ ల ల
                </p>
                <p className={styles.block_573}>ఉ .</p>
                <p className={styles.block_574}>
                  Explanation: ఇక డ సంఖ ల " ల ల క క ల "
                </p>
                <p className={styles.block_575}>
                  సంబంధం ఉన ప ట 6 సంఖ 10 క తక వ కనుక
                </p>
                <p className={styles.block_576}>
                  "ఆర " ానూ అల 12 సంఖ లల నూ ాయ .
                </p>
                <p className={styles.block_577}>
                  Transcribe all decimal numbers as digits.
                </p>
                <p className={styles.block_578}>Correct: 3.14</p>
                <p className={styles.block_579}>Incorrect: మ డ ా ం ఒకట ల గ</p>
                <p className={styles.block_580}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>మ డ ా ం ఒకట ల గ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_581}>
                  Explanation: 3.14 10 క తక నప ట ద ాంశ
                </p>
                <p className={styles.block_582}>పద అనుగ ణం ా సంఖ లల ాయ .</p>
                <p className={styles.block_583}>
                  When two or more numbers refer to the same noun, and one
                  number is 10 or greater, transcribe both as numerals.
                </p>
                <p className={styles.block_584}>Correct: నుం 9 ల క 10 పల ర .</p>
                <p className={styles.block_585}>Incorrect: నుం ల క 10 పల</p>
                <p className={styles.block_586}>ర .</p>
                <p className={styles.block_587}>
                  Explanation: 9 అ 10 క తక నప ట ండూ
                </p>
                <p className={styles.block_588}>
                  " పల " సూ ం కనుక అందుల ఒకట 10 ల క
                </p>
                <p className={styles.block_589}>అంతక ఎక వ కనుక ాట సంఖ ాచ ాలల</p>
                <p className={styles.block_590}>ాయ .</p>
                <p className={styles.block_591}>
                  If a large number consists of only a number followed by " య ",
                  " య ", "ట య ", or higher, then transcribe as a numeral plus
                  word. Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_17}>Example </span>
                  <span className={styles.text_18}>Correct: 7 య </span>
                </p>
                <p className={styles.block_593}>
                  <span className={styles.text_15}>audio: " </span>
                  <span className={styles.text_14}>ఏడ య </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_594}>Incorrect: 7,000,000,000</p>
                <p className={styles.block_595}>Correct: 7,234,435</p>
                <p className={styles.block_596}>Incorrect: 7 య 234 ల 435</p>
                <p className={styles.block_597}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఏడ య ండ వందల మ </span>
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_14}>ల గ ల ల గ మ ఐదు </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_599}>Correct: 7 ల ల</p>
                <p className={styles.block_600}>Incorrect: 7,00,000</p>
                <p className={styles.block_601}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఏడ ల ల </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_602}>
                  Explanation: సంఖ 7 తర ాత "ల " వ ం కనుక
                </p>
                <p className={styles.block_603}>
                  మ ందు సంఖ 7 ా తర ాత ల ాయటం జ ం .
                </p>
                <p className={styles.block_604}>Correct: ఒక ల బ త ల</p>
                <p className={styles.block_605}>Incorrect: 1,00,000 బ త ల</p>
                <p className={styles.block_606}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఒక ల బ త ల </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_607}>
                  Explanation: ఇక డ "ఒక" సంఖ 1 క
                </p>
                <p className={styles.block_608}>
                  సూ సు ం , ఇక డ అ జ సంఖ సూ ంచట దు
                </p>
                <p className={styles.block_609}>కనుక సంఖ మం ా ాయటం జ ం .</p>
                <p className={styles.block_610}>Correct: 1,000 బ త ల</p>
                <p className={styles.block_611}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఒక బ త ల </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_612}>Incorrect: 1 బ త ల</p>
                <p className={styles.block_613}>
                  Explanation: "ల " ల అంతక ఎక వ అం
                </p>
                <p className={styles.block_614}>ాయ . ఉ హరణల "ఒక " అ న సంఖ</p>
                <p className={styles.block_615}>ావటం సంఖ లల ాయటం జ ం .</p>
                <p className={styles.block_616}>Correct: 7.18 ట</p>
                <p className={styles.block_617}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఏడ ా ం ఒకట ఎ ట </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_618}>Incorrect: 7,18,00,000</p>
                <p className={styles.block_619}>
                  Explanation: వక మ ందు ా ద ాంశ పద ల సంఖ
                </p>
                <p className={styles.block_620}>నందున "ఏడ ా ం ఒకట ఎ "</p>
                <p className={styles.block_621}>
                  సంఖ లల ా " ట " ప లల ాయటం జ ం .
                </p>
                <p className={styles.block_622}>Correct: 7 ల ల ండ</p>
                <p className={styles.block_623}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఏడ ల ల ండ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_624}>Incorrect: 7 ల ల 2</p>
                <p className={styles.block_625}>
                  Explanation: వక మ టల మధ ల క అయ
                </p>
                <p className={styles.block_626}>
                  అందువలన సంఖ ప ాల దు, ప సంఖ లల
                </p>
                <p className={styles.block_627}>ాయక ం మ ందు సంఖ సంఖ "7" ా ా</p>
                <p className={styles.block_628}>
                  తర ాత "ల " ప లల తర ాత సంఖ "2" ా
                </p>
                <p className={styles.block_629}>ాయ .</p>
                <p className={styles.block_630}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_631}>Correct: 0 1 1 2 3 5 8 13</p>
                <p className={styles.block_632}>
                  Incorrect: 0, 1, 1, 2, 3, 5, 8, 13
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>
                    సు ఒకట ఒకట ండ మ డ ఐదు ఎ పదమ డ{' '}
                  </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_634}>
                  Explanation: సంఖ ల వర స ా నందున
                </p>
                <p className={styles.block_635}>ాట ంట అం ల ర పంల ా ామ అందుల</p>
                <p className={styles.block_636}>
                  10 క తక వ అం ల నప ట ాట మధ ామ ల
                </p>
                <p className={styles.block_637}>ాడల దు.</p>
                <p className={styles.block_638}>Correct: 3 2 1 ల ం</p>
                <p className={styles.block_639}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>మ డ ండ ఒకట ల ం </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_640}>Incorrect: 3, 2, 1 ల ం</p>
                <p className={styles.block_587}>
                  Explanation: "3 2 1" ాక ంల గ ా , అ ఒక
                </p>
                <p className={styles.block_641}>
                  వర సల నందున ాట అం ల ర పంల ామ ల
                </p>
                <p className={styles.block_642}>ల క ం ాయ .</p>
                <p className={styles.block_643}>
                  Use the Indian numbering system to format large numbers when
                  the speaker says "ల ", " ట " or "వంద ట ".
                </p>
                <p className={styles.block_644}>Correct: 12,12,12,123</p>
                <p className={styles.block_645}>Incorrect: 121,212,123</p>
                <p className={styles.block_646}>
                  Explanation: This number is transcribed
                </p>
                <p className={styles.block_647}>
                  following the formatting rules of the Indian
                </p>
                <p className={styles.block_648}>
                  numbering system because the speaker said
                </p>
                <p className={styles.block_649}>"ల " and " ట ".</p>
                <p className={styles.block_650}>
                  For all other long numbers (4+ digits), transcribe a comma
                  between groups of three digits.
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_21}>Example </span>
                  <span className={styles.text_6}>Correct: 10,000 </span>
                </p>
                <p className={styles.block_652}>
                  <span className={styles.text_15}>audio: " </span>
                  <span className={styles.text_14}>ప ల </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_653}>Incorrect: 10000</p>
                <p className={styles.block_654}>
                  Explanation: ల గ ల ద ాంశ పద ల 4 ల
                </p>
                <p className={styles.block_655}>అంతక ఎక వ అం ల డ యట ామ</p>
                <p className={styles.block_656}>
                  ాడ ర . అందు "ప ల" "10,000" ా ాయ .
                </p>
                <p className={styles.block_657}>Correct: 200,000</p>
                <p className={styles.block_600}>Incorrect: 2,00,000</p>
                <p className={styles.block_658}>Incorrect: 2 ల ల</p>
                <p className={styles.block_659}>Incorrect: ండ వందల ల</p>
                <p className={styles.block_660}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ండ వందల ల </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_661}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_662}>Correct: ాళ 1/4 kg చ ర ా ా .</p>
                <p className={styles.block_663}>Incorrect: ాళ ావ చ ర ా ా .</p>
                <p className={styles.block_664}>
                  Incorrect: ాళ 0.25 kb చ ర ా ా .
                </p>
                <p className={styles.block_665}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ాళ ావ చ ర ా ా </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_666}>
                  Explanation: ప క ప ల , తల ాడక ం
                </p>
                <p className={styles.block_667}>లను స ష ం ా ాయ .</p>
                <p className={styles.block_668}>
                  Correct: 3/4 km తర ాత క ప ర గ .
                </p>
                <p className={styles.block_669}>
                  Incorrect: 3/4 ల తర ాత క ప ర గ .
                </p>
                <p className={styles.block_670}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>మ ా వ ల తర ాత క ప </span>
                </p>
                <p className={styles.block_671}>
                  <span className={styles.text_14}>ర గ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_672}>
                  Explanation: " ల 3/4" ల "3/4 ల " ఒక ట
                </p>
                <p className={styles.block_673}>ావటం వక నట ా ాయటం జ ం .</p>
                <p className={styles.block_674}>
                  Correct: 2/3 km తర ాత ఎడమ ప రగం .
                </p>
                <p className={styles.block_675}>
                  Incorrect: 2/3 ల టర తర ాత ఎడమ ప
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>అర ావ ల టర తర ాత </span>
                </p>
                <p className={styles.block_677}>రగం .</p>
                <p className={styles.block_678}>
                  <span className={styles.text_14}>ఎడమ ప రగం </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_679}>
                  Explanation: వక న ం తర ాత తక ా ఎక ా
                </p>
                <p className={styles.block_680}>ప ల దు, అందు "2/3 " అ ాయటం</p>
                <p className={styles.block_406}>జ ం .</p>
                <p className={styles.block_681}>
                  <span className={styles.text_21}>Example </span>
                  <span className={styles.text_6}>Correct: 2/3 * 5/16 </span>
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_11}>audio: " </span>
                  <span className={styles.text_12}>
                    పద ర ఐదు ండ బ మ డ ార గ ణ ారం య{' '}
                  </span>
                  <span className={styles.text_11}>" </span>
                  <span className={styles.text_24}>
                    Incorrect: 2/3 ట మ 5/16{' '}
                  </span>
                </p>
                <p className={styles.block_683}>
                  Explanation: ఇ గణ త యమం ావ న అల
                </p>
                <p className={styles.block_683}>ాయ .</p>
                <p className={styles.block_684}>
                  For mixed numbers in math and units &amp; measures, use
                  numerals and "\".
                </p>
                <p className={styles.block_685}>Correct: 3 1/2 km</p>
                <p className={styles.block_685}>Correct: 1/3 + 3 1/2</p>
                <p className={styles.block_684}>
                  If a fraction is referring to items (not measurement units or
                  math equations), transcribe the fraction in words.
                </p>
                <p className={styles.block_686}>Correct: ఆ ల ల ఐదు పద రవ వంత</p>
                <p className={styles.block_683}>Incorrect: ఆ ల ల 5/16 వంత</p>
                <p className={styles.block_687}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఆ ల ల ఐదు పద రవ వంత </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_683}>
                  Explanation: "ఐదు పద రవ" వంత అన ఒక
                </p>
                <p className={styles.block_683}>వసు వ ల ా సూ ం (ఆ ల ల ) అందు</p>
                <p className={styles.block_683}>అం ల ాక ం ప లల ాయ .</p>
                <p className={styles.block_686}>Correct: సగ ల సు క .</p>
                <p className={styles.block_683}>Incorrect: 1/2 ల సు క .</p>
                <p className={styles.block_683}>
                  Explanation: "సగం" అన మ టమ త ం ా ా ం
                </p>
                <p className={styles.block_683}>తప జం ా ప మ ణ ాదు అందువలన</p>
                <p className={styles.block_683}>ప ల ర పంల ాయటం జ ం .</p>
                <p className={styles.block_684}>
                  Mixed numbers that refer to items should be written out in
                  words if it's under 10, otherwise write it with numerals.
                </p>
                <p className={styles.block_686}>Correct: మ డ న ర మ ాయల</p>
                <p className={styles.block_683}>Incorrect: 3 1/2 మ ాయల</p>
                <p className={styles.block_683}>
                  Explanation: వసు వ ల (ఇక డ మ ాయల )
                </p>
                <p className={styles.block_683}>సూ ం శ మ సంఖ ల న నట ా ప లల</p>
                <p className={styles.block_683}>ాయ .</p>
                <p className={styles.block_688}>Correct: 12న ర క ల ాను.</p>
                <p className={styles.block_689}>Incorrect: ప ండ న ర క ల ాను.</p>
                <p className={styles.block_690}>
                  Explanation: ఇ శ మ సంఖ అ నప ట
                </p>
                <p className={styles.block_636}>సంఖ ాచ ాల ఉప ం యమ ను ారం 9 క</p>
                <p className={styles.block_691}>ద న సంఖ ల అం ల ర పంల గ ాట</p>
                <p className={styles.block_692}>మ ాచకంల ాయటం జ ం .</p>
                <p className={styles.block_693}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_694}>Correct: ఆ చు హౌసు ₹7.5 య</p>
                <p className={styles.block_695}>
                  Incorrect: ఆ చు హౌసు ₹7 1/2 య
                </p>
                <p className={styles.block_696}>
                  Transcribe percentages using numerals followed by the % sign.
                  In the unlikely case that you encounter a number of a million
                  or greater used as a percentage, spell it out.
                </p>
                <p className={styles.block_697}>Correct: 2% ాల</p>
                <p className={styles.block_698}>Incorrect: 2 ాతం ాల</p>
                <p className={styles.block_699}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ండ ాతం ాల </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_700}>
                  Explanation: ా సూ ం సంఖ కనుక అం
                </p>
                <p className={styles.block_701}>ాతం గ ర య "2%" ప లల ాయకం .</p>
                <p className={styles.block_702}>Correct: 1 ల ాతం</p>
                <p className={styles.block_703}>Incorrect: 1 ల %</p>
                <p className={styles.block_704}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఒక ల ాతం </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_705}>
                  Explanation: యన వంట వ నప డ పద
                </p>
                <p className={styles.block_655}>
                  ర పం ా ాయ లన యమ ను ారం ఇక డ ా
                </p>
                <p className={styles.block_706}>
                  పద ర పం ా ాయటం జ ం , ా మ ందు సంఖ
                </p>
                <p className={styles.block_707}>
                  మ త ం అం ర పంల ాయ ("ఒకట " ాక ం "1").
                </p>
                <p className={styles.block_708}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_709}>Correct: సూప బ XLVII</p>
                <p className={styles.block_612}>Incorrect: సూప బ ౌ 47</p>
                <p className={styles.block_710}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>సూప బ నల ఏడ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_711}>
                  Explanation: సూప బ అ ఒక ఆట ర , అ
                </p>
                <p className={styles.block_712}>మ సంఖ ల ష ా ాయబ ఉంట ం . అందు</p>
                <p className={styles.block_713}>"నల ఏడ " "XLVII" ా ాయ .</p>
                <p className={styles.block_714}>
                  <span className={styles.text_17}>Example </span>
                  <span className={styles.text_18}>Correct: ం VIII </span>
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_15}>audio: " </span>
                  <span className={styles.text_14}>ఎ దవ ం </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_534}>Incorrect: ం 8</p>
                <p className={styles.block_716}>
                  Explanation: "ఎ దవ ం " అన ఒక ా
                </p>
                <p className={styles.block_717}>
                  అ ా క మం అందు "ఎ " "VIII" ా ాయ .
                </p>
                <p className={styles.block_718}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_10}>Correct: జ 3 ఎ 2 </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>జ మ డ ఎ ండ </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_720}>
                  Explanation: "3" ఇం ా "2" 10 క తక వ
                </p>
                <p className={styles.block_721}>అం ల నప ట అ జను ఎ డ లను సూ ా</p>
                <p className={styles.block_722}>కనుక ాట అం ల ర పంల ాయ .</p>
                <p className={styles.block_723}>
                  For landline phone numbers, transcribe a space after the
                  operating code then transcribe the remaining digits together
                  with no spaces. For mobile numbers, transcribe a space after
                  the country code, and a space after the fourth digit of the
                  phone number. Only transcribe a "+" is the speaker says "ప ".
                </p>
                <p className={styles.block_724}>
                  <span className={styles.text_6}>Correct: 011 20000198 </span>
                  <span className={styles.text_7}>
                    Explanation: This is a landline number so there
                  </span>
                </p>
                <p className={styles.block_725}>
                  is a dash after the operator code, 011. The rest
                </p>
                <p className={styles.block_726}>
                  of the digits are transcribed without spaces or
                </p>
                <p className={styles.block_727}>dashes.</p>
                <p className={styles.block_728}>
                  <span className={styles.text_6}>
                    Correct: 91 1234 123456{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: This is a mobile number so there is
                  </span>
                </p>
                <p className={styles.block_729}>
                  a dash after the country code, "91", and after the
                </p>
                <p className={styles.block_730}>
                  fourth digit of the phone number, "4". The
                </p>
                <p className={styles.block_731}>
                  remaining six digits are transcribed without
                </p>
                <p className={styles.block_732}>spaces or dashes.</p>
                <p className={styles.block_733}>
                  <span className={styles.text_20}>
                    Correct: +91 1234 123456{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>ప ఒకట ఒకట ండ </span>
                </p>
                <p className={styles.block_734}>
                  <span className={styles.text_14}>
                    మ డ ల గ ఒకట ండ మ డ ల గ ఐదు{' '}
                  </span>
                  <span className={styles.text_16}>s</span>
                  <span className={styles.text_14}>ఆర </span>
                </p>
                <p className={styles.block_735}>"</p>
                <p className={styles.block_736}>
                  Explanation: Since the speaker says the word
                </p>
                <p className={styles.block_737}>
                  "ప " before the country code, a "+" sign is
                </p>
                <p className={styles.block_738}>transcribed.</p>
                <p className={styles.block_739}>
                  Transcribe alpha-digit sequences (product codes, car models,
                  etc.) in their most natural way (there may be more than one
                  way to transcribe). Do not transcribe credit card numbers or
                  any other personal information numbers.
                </p>
                <p className={styles.block_740}>
                  Correct: Mercedes-Benz CLS450
                </p>
                <p className={styles.block_741}>
                  Math expressions should be transcribed with numerals and math
                  symbols with spaces in between them.
                </p>
                <p className={styles.block_742}>Correct: 5 / 6 ^ 3</p>
                <p className={styles.block_743}>Incorrect: 5/6^3</p>
                <p className={styles.block_744}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>మ డ ఘ ల ఆర ఐదు </span>
                </p>
                <p className={styles.block_745}>
                  <span className={styles.text_14}>ంచబడ త ం </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_746}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఆర ఘనం త ఐదు </span>
                </p>
                <p className={styles.block_745}>
                  <span className={styles.text_14}>ంచబడ త ం </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_747}>
                  Explanation: న ాక ం గణ త మ నం ావ న
                </p>
                <p className={styles.block_588}>
                  గణ త సం ల ఇం ా అం ల ా మ ణ క పద ల
                </p>
                <p className={styles.block_748}>ాయ .</p>
                <p className={styles.block_604}>Correct: 5 * 6 ల ఎంత?</p>
                <p className={styles.block_749}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఐదు ఆర గ ణ ఎంత </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_640}>Incorrect: 5 6 ల ఎంత?</p>
                <p className={styles.block_750}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఐదు ఆర ల గ ణ రం ఎంత </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_751}>
                  Explanation: గ ణ ారం, గ ణ రం ఇం ా అ ఒకట
                </p>
                <p className={styles.block_752}>అ ా క ఉం ఒక సం తం సూ ంచబడ .</p>
                <p className={styles.block_753}>అ "*", "x" ాదు.</p>
                <p className={styles.block_754}>Correct: √3</p>
                <p className={styles.block_352}>Incorrect: 3 వర మ లం ఎంత</p>
                <p className={styles.block_755}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>మ డ వర మ లం ఎంత </span>
                  <span className={styles.text_15}>" </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies with the "₹" symbol followed by digits.
                  Do not include a space between the symbol and the number.
                </p>
                <p className={styles.block_539}>
                  <span className={styles.text_20}>Correct: ₹10 </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>ప ర ాయల </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_758}>
                  If it is obvious from context that a number reflects an amount
                  of currency, transcribe with a currency symbol.
                </p>
                <p className={styles.block_759}>
                  Correct: జనం ₹100 ఖర అవ త ం .
                </p>
                <p className={styles.block_760}>
                  Incorrect: జనం 100 ఖర అవ త ం .
                </p>
                <p className={styles.block_761}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>జనం వంద ఖర అవ త ం </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_762}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_763}>Correct: 300 య ల</p>
                <p className={styles.block_764}>Incorrect: €300</p>
                <p className={styles.block_765}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>మ డ వందల య ల </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_766}>
                  Explanation: "య ల " refers to a foreign
                </p>
                <p className={styles.block_767}>
                  currency. Transcribe the numbers as digits
                </p>
                <p className={styles.block_768}>
                  "300" and write out the word "య ల ". Don't
                </p>
                <p className={styles.block_769}>use the euro symbol.</p>
                <p className={styles.block_770}>
                  When a speaker uses the name of a currency without saying an
                  amount, write the currency in words.
                </p>
                <p className={styles.block_771}>
                  <span className={styles.text_10}>
                    Correct: ర ా రత అ ా క మ రక ద వ ం.{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>ర ా రత అ ా క మ రక </span>
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_14}>ద వ ం </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_773}>
                  Keep units of measurement in English. Do not transliterate.
                </p>
                <p className={styles.block_774}>Correct: 4 MB</p>
                <p className={styles.block_775}>Incorrect: 4 ాబ ట</p>
                <p className={styles.block_776}>Correct: 3 in</p>
                <p className={styles.block_777}>Incorrect: 3 అంగ ల</p>
                <p className={styles.block_778}>Correct: 80 km/h</p>
                <p className={styles.block_779}>Incorrect: గంటక 80 ల టర</p>
                <p className={styles.block_780}>Correct: 40 mi2</p>
                <p className={styles.block_781}>Incorrect: 40 చదరప ళ</p>
                <p className={styles.block_782}>Correct: 2 L</p>
                <p className={styles.block_783}>Incorrect: 2 టర</p>
                <p className={styles.block_784}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_330}>● MB</p>
                <p className={styles.block_785}>● KB</p>
                <p className={styles.block_786}>● GB</p>
                <p className={styles.block_785}>● TB</p>
                <p className={styles.block_787}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_788}>● in</p>
                <p className={styles.block_789}>● ft</p>
                <p className={styles.block_790}>● yd</p>
                <p className={styles.block_327}>● mi</p>
                <p className={styles.block_791}>● mm</p>
                <p className={styles.block_326}>● cm</p>
                <p className={styles.block_792}>● m</p>
                <p className={styles.block_793}>● km</p>
                <p className={styles.block_794}>● mph</p>
                <p className={styles.block_795}>● km/h</p>
                <p className={styles.block_796}>Common measurements of area</p>
                <p className={styles.block_797}>● km2</p>
                <p className={styles.block_798}>● in2</p>
                <p className={styles.block_790}>● ft2</p>
                <p className={styles.block_330}>● mi2</p>
                <p className={styles.block_797}>● cm2</p>
                <p className={styles.block_799}>● m2</p>
                <p className={styles.block_800}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_801}>● g</p>
                <p className={styles.block_326}>● mg</p>
                <p className={styles.block_327}>● kg</p>
                <p className={styles.block_802}>● L</p>
                <p className={styles.block_799}>● m3</p>
                <p className={styles.block_803}>● in3</p>
                <p className={styles.block_804}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_805}>Correct: బయట 20° C ఉం .</p>
                <p className={styles.block_806}>Incorrect: బయట 20 ల C ఉం .</p>
                <p className={styles.block_807}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>బయట ఇర య ఉం </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_808}>
                  Explanation: వక స ష ం ా " య " అన ందున
                </p>
                <p className={styles.block_809}>ఇక డ ప క న య సం తం "C" ా .</p>
                <p className={styles.block_810}>Correct: ఇ 20 C.</p>
                <p className={styles.block_534}>Incorrect: ఇ 20° C.</p>
                <p className={styles.block_811}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఇ ఇర య </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_812}>
                  Explanation: వక ఉ గ త లల సూ ం నప ట
                </p>
                <p className={styles.block_809}>స ష ం ా అ పలకనందున ఇక డ హ ం</p>
                <p className={styles.block_813}>ట ల దు.</p>
                <p className={styles.block_814}>
                  Abbreviate all units of measurement that are after numbers.
                </p>
                <p className={styles.block_815}>
                  <span className={styles.text_10}>
                    Correct: మ అన 10 L ంజ రసం డ .{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>మ అన ప ంజ రసం </span>
                </p>
                <p className={styles.block_816}>
                  <span className={styles.text_14}>డ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_817}>
                  Explanation: " ట " 10 అం తర ాత వ నందున
                </p>
                <p className={styles.block_818}>
                  సం పక ర పంల " " ా ా అం సం ప ా
                </p>
                <p className={styles.block_819}>మధ ఖ వదల .</p>
                <p className={styles.block_820}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_821}>
                  <span className={styles.text_10}>Correct: 2 g బర వ ం . </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>ండ ల బర వ ం </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_822}>
                  Explanation: 2 అం 10 క న నప ట
                </p>
                <p className={styles.block_823}>పద ర పంల ాక ం అ ప మ ణ మ ందు</p>
                <p className={styles.block_824}>వ నందున అం ర పంల ా ామ .</p>
                <p className={styles.block_825}>
                  <span className={styles.text_10}>
                    Correct: నక డ 6 లల ను.{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>నక డ ఆర లల ను </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_822}>
                  Explanation: 6 అం 10 క న నప ట
                </p>
                <p className={styles.block_826}>
                  పద ర పంల ాక అం ర పంల ాయ ఎందుకంట
                </p>
                <p className={styles.block_827}>అ లల మ ందు వ ం కనుక.</p>
                <p className={styles.block_828}>
                  For lengths, widths, and heights: use "x" instead of any
                  preposition.
                </p>
                <p className={styles.block_829}>
                  Correct: మ నంల సుక ాగల బ గ గ ష లతల
                </p>
                <p className={styles.block_830}>20x20x40.</p>
                <p className={styles.block_831}>
                  Incorrect: మ నంల సుక ాగల బ గ గ ష
                </p>
                <p className={styles.block_832}>లతల 20 బ 20 బ 40.</p>
                <p className={styles.block_833}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>మ నంల సుక ాగల బ గ </span>
                </p>
                <p className={styles.block_834}>
                  <span className={styles.text_14}>గ ష లతల ఇర బ ఇర బ నల </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_835}>
                  Explanation: ఇక డ సంఖ ల ల బ గ డవ ,
                </p>
                <p className={styles.block_836}>
                  డల , ఎత ల ల ప త ండటం ఇక డ అం ల
                </p>
                <p className={styles.block_421}>మధ "x" సం ా (ఖ ల ల క ం ).</p>
                <p className={styles.block_837}>
                  <span className={styles.text_10}>
                    Correct: క 9x12 m ఇల ా ా{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>క బ ప ండ టర </span>
                </p>
                <p className={styles.block_838}>
                  <span className={styles.text_14}>ఇల ా ా </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_839}>
                  Explanation: " బ ప ండ " ఇంట లత. "బ "
                </p>
                <p className={styles.block_840}>ాడక ం "x" ా .</p>
                <p className={styles.block_841}>
                  If a speaker says a number without saying "పగల " or " ా ",
                  format it as time if it is obvious that the number refers to a
                  time
                </p>
                <p className={styles.block_842}>Correct: 5:45 అల రం ట .</p>
                <p className={styles.block_843}>Incorrect: ఐదు 45 అల రం ట .</p>
                <p className={styles.block_844}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_25}>ఐదు ನಲವ ದು అల రం ట </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_845}>
                  Explanation: వక "ఏఎ " ల " ఎ " ల క " ా అ
                </p>
                <p className={styles.block_846}>ప క వక ఖ తం ా సమయ</p>
                <p className={styles.block_847}>సూ సు డ అర మవ టం ా మ ణ క</p>
                <p className={styles.block_848}>నంల ాయ .</p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  When transcribing dates, write out the full name of the month
                  followed by the date in the ordinal form followed by a comma,
                  then the year in numeral form.
                </p>
                <p className={styles.block_851}>Correct: జనవ 12, 1964</p>
                <p className={styles.block_852}>Incorrect: జనవ 12వ, 1964</p>
                <p className={styles.block_853}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>
                    జనవ ప ండ పం వందల అర ల గ{' '}
                  </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_854}>
                  Explanation: లల ర స ష ం ా ప ా ాయ .
                </p>
                <p className={styles.block_855}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe it as numerals with the proper punctuation
                  separating the date, month, and year.
                </p>
                <p className={styles.block_856}>
                  <span className={styles.text_20}>Correct: 7/12/2010 </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>ఏడ ా ప ండ ా ఇర ప </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_857}>
                  Explanation: వక న మ టలల అం ల అం ల
                </p>
                <p className={styles.block_858}>ర పంల ా ష ల సం ా</p>
                <p className={styles.block_859}>
                  <span className={styles.text_17}>Example </span>
                  <span className={styles.text_18}>
                    Correct: ఎ ష 05/10/2012.{' '}
                  </span>
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_11}>audio: " </span>
                  <span className={styles.text_12}>ఎ ష ఐదు ప ండ ల ప ండ </span>
                  <span className={styles.text_11}>" </span>
                  <span className={styles.text_24}>
                    Incorrect: ఎ ష 05102012.{' '}
                  </span>
                </p>
                <p className={styles.block_683}>
                  Explanation: ఇక డ వక ా అన పదం
                </p>
                <p className={styles.block_683}>ాడక నప ట కనుక ా మ ణ క పద ల</p>
                <p className={styles.block_683}>ాయవల ఉంట ం .</p>
                <p className={styles.block_860}>
                  <span className={styles.text_26}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                </p>
                <p className={styles.text_27}>Correct: 3:00</p>
                <p className={styles.block_683}>Incorrect: 3 గంటల</p>
                <p className={styles.block_687}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>మ డ గంటల </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_683}>
                  Explanation: గంటల అన స ా గంటల
                </p>
                <p className={styles.block_683}>
                  సూ సు ం కనుక ా మ ణ కం ా "3:00" ా
                </p>
                <p className={styles.block_683}>ాయ .</p>
                <p className={styles.block_686}>Correct: 4:00 అల రం ట</p>
                <p className={styles.block_683}>Incorrect: 4 అల రం ట</p>
                <p className={styles.block_687}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ల గ అల రం ట </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_683}>
                  Explanation: ఇక డ వక గంటల అ ప క
                </p>
                <p className={styles.block_683}>అ ఆ గంట అ అర మవ త ం కనుక మనం</p>
                <p className={styles.block_683}>"4:00" ా ాయ .</p>
                <p className={styles.block_861}>
                  <span className={styles.text_20}>Correct: 3:15 </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>మ డ ప ను </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_861}>
                  <span className={styles.text_20}>Correct: 6:05 </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>ఆర ఐదు </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_861}>
                  <span className={styles.text_20}>Correct: 3:15 </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>మ డ ంబ వ </span>
                  <span className={styles.text_11}>" </span>
                </p>
                <p className={styles.block_683}>
                  Explanation: ఇక డ ావ 15 మ ాల సమ నం
                </p>
                <p className={styles.block_683}>అందు 3:15 ా ాయ .</p>
                <p className={styles.block_651}>
                  <span className={styles.text_21}>Example </span>
                  <span className={styles.text_6}>Correct: 1:50 </span>
                </p>
                <p className={styles.block_862}>
                  <span className={styles.text_15}>audio: " </span>
                  <span className={styles.text_14}>ప మ ాల తక వ ండ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_863}>Incorrect: 10 తక వ 2:00</p>
                <p className={styles.block_864}>
                  Explanation: ఇక డ ాల సూ ం "ప మ ాల
                </p>
                <p className={styles.block_865}>
                  తక వ ండ " వలం ప లల సూ ంచక ం అ
                </p>
                <p className={styles.block_291}>ఒక (గంట) య ( మ ాల ) గ ర కనుక</p>
                <p className={styles.block_285}>అల "1:50" ా ాయ .</p>
                <p className={styles.block_866}>
                  Use "పగల " and " ా " if spoken.
                </p>
                <p className={styles.block_867}>Correct: పగల 3:15</p>
                <p className={styles.block_868}>Incorrect: 3:15</p>
                <p className={styles.block_869}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>పగల మ డ ప ను </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_870}>
                  For "మ హ మప డ " and "అర ా ", use the written form.
                </p>
                <p className={styles.block_871}>Correct: మ హ మప డ</p>
                <p className={styles.block_534}>Incorrect: ా 12:00</p>
                <p className={styles.block_872}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>మ హ మప డ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_873}>Correct: అర ా</p>
                <p className={styles.block_874}>Incorrect: పగల 12:00</p>
                <p className={styles.block_875}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>అర ా </span>
                  <span className={styles.text_15}>" </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Write out the full names of locations, roads, states, etc.
                  Only use abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_878}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_879}>
                  <span className={styles.text_6}>Correct: బ ా , మ ప </span>
                  <span className={styles.text_7}>
                    Explanation: వక న "బ ా " అన ాప{' '}
                  </span>
                </p>
                <p className={styles.block_880}>మ ప ల ఉం కనుక ాట ం ంట మధ ామ</p>
                <p className={styles.block_881}>ట .</p>
                <p className={styles.block_882}>
                  <span className={styles.text_6}>Correct: ా ా , 500046 </span>
                  <span className={styles.text_7}>
                    Explanation: వక 500046 ప ల ా{' '}
                  </span>
                </p>
                <p className={styles.block_883}>
                  ాప ల త క త డ . అందు ఆ ర ఇం ా ట
                </p>
                <p className={styles.block_884}>మధ ామ ట .</p>
                <p className={styles.block_885}>Correct: ఓ , ద ాబ</p>
                <p className={styles.block_886}>
                  <span className={styles.text_6}>
                    Correct: ట మ భర అ ను, ద ాబ{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: వక "భర అ ను" మ లను{' '}
                  </span>
                </p>
                <p className={styles.block_887}>ద ాబ ట ల త క త డ . అందు ాట</p>
                <p className={styles.block_888}>ం ంట మధ ామ ఉం .</p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken.
                </p>
                <p className={styles.block_891}>Correct: www.google.com</p>
                <p className={styles.block_892}>
                  Incorrect: {`www {dot} Google {dot} com`}
                </p>
                <p className={styles.block_893}>Correct: జ ఇష ం. #ఆక</p>
                <p className={styles.block_894}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".
                </p>
                <p className={styles.block_895}>
                  Correct: http:\mail.yahoo.com
                </p>
                <p className={styles.block_896}>
                  Incorrect: http://mail.yahoo.com
                </p>
                <p className={styles.block_897}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ట ట ల బ ా బ </span>
                </p>
                <p className={styles.block_898}>
                  <span className={styles.text_14}>ా య హ ా </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_899}>
                  Explanation: ఇక డ స న ా ా "/" ఉం వక "బ
                </p>
                <p className={styles.block_900}>
                  ా " అంట మనం బ ా సం తం "\" ా .
                </p>
                <p className={styles.block_901}>
                  If the speaker drops a "w" or "dot" and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_902}>Correct: www.facebook.com</p>
                <p className={styles.block_903}>Incorrect: ww facebook.com</p>
                <p className={styles.block_904}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>డబ డబ బ ా </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_905}>
                  Explanation: వక " బ " మ ందు " "
                </p>
                <p className={styles.block_906}>
                  వలం ండ "డబ " ల ా డ కనుక వ ల న
                </p>
                <p className={styles.block_907}>"డబ " ాయ .</p>
                <p className={styles.block_696}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_908}>Correct: www.target.com</p>
                <p className={styles.block_909}>
                  Incorrect: www.t a r g e t.com
                </p>
                <p className={styles.block_910}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>డబ డబ డబ ట </span>
                </p>
                <p className={styles.block_911}>
                  <span className={styles.text_14}>ా </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_912}>
                  Explanation: వక "target" అ అ ాలల ప
                </p>
                <p className={styles.block_913}>ా ఆ య ఆ ఎ ఖ ల ల క ం</p>
                <p className={styles.block_914}>"www.target.com" ా ాయ .</p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not transcribe abbreviated forms of words unless the
                  speaker says an abbreviated form.
                </p>
                <p className={styles.block_917}>
                  <span className={styles.text_4}>
                    For other proper names involving titles, use the official
                    spelling of the proper name. If you are not sure, do not
                    abbreviate the title.{' '}
                  </span>
                </p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Format" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Format

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
