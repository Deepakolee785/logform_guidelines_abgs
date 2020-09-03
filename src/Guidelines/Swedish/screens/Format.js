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
            <PageContentHeader currentPage="longform Swedish" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Cardinals and ordinals &lt;= 10 are written with letters
                  instead of digits (except for in math expressions, measures
                  and currency - see respective subsections). High value
                  (&gt;10) cardinals and ordinals are written with digits. Never
                  mix spelled out numbers with actual digits in the same
                  sentence/context. If there are two numbers, one &lt;= 10 and
                  one (or more) &gt;10, transcribe them all with digits.
                  Transcribe all decimal numbers as digits. Note that we here
                  intentionally do not conform with standard rules for Swedish.
                </p>
                <p className={styles.block_664}>
                  Correct: Det finns nio elever i klassen.
                </p>
                <p className={styles.block_328}>
                  Incorrect: Det finns 9 elever i klassen.
                </p>
                <p className={styles.block_665}>
                  Correct: Det finns sju miljarder människor på
                </p>
                <p className={styles.block_666}>jorden.</p>
                <p className={styles.block_667}>
                  Incorrect: Det finns 7 miljarder människor på
                </p>
                <p className={styles.block_668}>jorden.</p>
                <p className={styles.block_669}>
                  Correct: Boken var 150 sidor lång.
                </p>
                <p className={styles.block_670}>
                  Incorrect: Boken var hundra femtio sidor lång.
                </p>
                <p className={styles.block_579}>
                  Correct: Hon kom på andra plats.
                </p>
                <p className={styles.block_671}>
                  Incorrect: Hon kom på 2:a plats.
                </p>
                <p className={styles.block_672}>
                  Correct: Jag kom på 28:e plats i Lidingöloppet.
                </p>
                <p className={styles.block_673}>
                  Incorrect: Jag kom på tjugoåttonde plats i
                </p>
                <p className={styles.block_674}>Lidingöloppet.</p>
                <p className={styles.block_675}>
                  Correct: Jag kom på 28:e plats och hon på 3:e.
                </p>
                <p className={styles.block_676}>
                  Incorrect: Jag kom på tjugoåttonde plats och
                </p>
                <p className={styles.block_677}>hon på tredje.</p>
                <p className={styles.block_678}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_679}>
                  <span className={styles.text_4}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    noll ett ett två tre fem åtta{' '}
                  </span>
                </p>
                <p className={styles.block_680}>
                  <span className={styles.text_1}>tretton </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_681}>
                  <span className={styles.text_4}>Correct: 3 2 1 kör </span>
                  <span className={styles.text_5}>
                    Explanation: list of numbers, no comma if just
                  </span>
                </p>
                <p className={styles.block_682}>counting</p>
                <p className={styles.block_683}>
                  For long numbers (5+ digits) indicating quantity, use period
                  as separator.
                </p>
                <p className={styles.block_684}>
                  <span className={styles.text_4}>Correct: 10.000 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>tio tusen </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_685}>
                  <span className={styles.text_4}>Correct: 22.500 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    tjugotvå tusen fem hundra{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_4}>Correct: 1.040.250 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    en miljon fyrtio tusen två{' '}
                  </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_1}>hundra femtio </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_688}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes. If the expression
                  is spoken as a decimal number, transcribe it as such, using
                </p>
                <p className={styles.block_689}>
                  numerals and a comma. Don't write out the "och" in mixed
                  numbers, just use a space in between.
                </p>
                <p className={styles.block_690}>
                  Correct: Det behövs 1/4 dl socker.
                </p>
                <p className={styles.block_691}>
                  Incorrect: Det behövs en fjärdedels deciliter
                </p>
                <p className={styles.block_692}>socker.</p>
                <p className={styles.block_693}>
                  Incorrect: Det behövs 1⁄4 dl socker. (bad
                </p>
                <p className={styles.block_694}>
                  because it includes the pre-combined fraction
                </p>
                <p className={styles.block_695}>1⁄4)</p>
                <p className={styles.block_696}>
                  Incorrect: Det behövs 0.25 dl socker.
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    det behövs en fjärdedels{' '}
                  </span>
                </p>
                <p className={styles.block_698}>
                  <span className={styles.text_1}>deciliter socker </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_699}>
                  Explanation: Here, the "en" before "fjärdedels",
                </p>
                <p className={styles.block_700}>
                  part of the fraction, so don't include it in the
                </p>
                <p className={styles.block_701}>
                  transcription. Also, be careful not to include
                </p>
                <p className={styles.block_702}>
                  spaces or pre-combined fraction characters.
                </p>
                <p className={styles.block_703}>
                  and the genitive "s" at the end of the word, is
                </p>
                <p className={styles.block_704}>
                  Correct: Tillsätt 1/2 tsk salt.
                </p>
                <p className={styles.block_705}>
                  Incorrect: Tillsätt en halv tesked salt.
                </p>
                <p className={styles.block_706}>
                  Incorrect: Tillsätt 1/2 tesked salt.
                </p>
                <p className={styles.block_707}>
                  Incorrect: Tillsätt 0,5 tsk salt.
                </p>
                <p className={styles.block_708}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    tillsätt en halv tesked salt{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_709}>
                  Correct: Tillsätt 0,5 tsk salt.
                </p>
                <p className={styles.block_705}>
                  Incorrect: Tillsätt en halv tesked salt.
                </p>
                <p className={styles.block_706}>
                  Incorrect: Tillsätt 1/2 tesked salt.
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    tillsätt noll komma fem{' '}
                  </span>
                </p>
                <p className={styles.block_711}>
                  <span className={styles.text_1}>teskedar salt </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_712}>
                  Correct: Tillsätt 3/4 kg mjöl.
                </p>
                <p className={styles.block_713}>
                  Incorrect: Tillsätt tre fjärdedels kilo mjöl.
                </p>
                <p className={styles.block_714}>
                  Incorrect: Tillsätt 3/4 kilo mjöl.
                </p>
                <p className={styles.block_715}>
                  Incorrect: Tillsätt 3/4 kilogram mjöl.
                </p>
                <p className={styles.block_716}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    tillsätt tre fjärdedels kilo mjöl{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_717}>
                  Explanation: The full name of some units aren't
                </p>
                <p className={styles.block_718}>
                  always pronounced in Swedish. Google a word
                </p>
                <p className={styles.block_719}>
                  if you can't figure out what unit it is and what
                </p>
                <p className={styles.block_720}>
                  the abbreviation should be. For instance, the
                </p>
                <p className={styles.block_721}>
                  word "kilo" here is short for "kilogram".
                </p>
                <p className={styles.block_722}>Correct: 2/3 * 5/16</p>
                <p className={styles.block_723}>
                  Incorrect: två tredjedelar * fem sextondelar
                </p>
                <p className={styles.block_724}>
                  Incorrect: två tredjedelar gånger fem
                </p>
                <p className={styles.block_725}>sextondelar</p>
                <p className={styles.block_726}>Incorrect: 2/3 gånger 5/16</p>
                <p className={styles.block_727}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    två tredjedelar gånger fem{' '}
                  </span>
                </p>
                <p className={styles.block_728}>
                  <span className={styles.text_1}>sextondelar </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_729}>Correct: 3 1/2 msk kakao</p>
                <p className={styles.block_730}>
                  Incorrect: 3 och 1/2 msk kakao
                </p>
                <p className={styles.block_731}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    tre och en halv matsked kakao{' '}
                  </span>
                </p>
                <p className={styles.block_732}>"</p>
                <p className={styles.block_733}>Correct: 1/3 + 3 1/2</p>
                <p className={styles.block_734}>Incorrect: 1/3 + 3 och 1/2</p>
                <p className={styles.block_735}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    en tredjedel plus tre och ett{' '}
                  </span>
                </p>
                <p className={styles.block_736}>
                  <span className={styles.text_1}>halvt </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_737}>
                  When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.
                </p>
                <p className={styles.block_738}>
                  Correct: Ge mig hälften av pajen.
                </p>
                <p className={styles.block_739}>Incorrect: Ge mig 1/2 pajen.</p>
                <p className={styles.block_740}>
                  Incorrect: Ge mig 0.5 av pajen.
                </p>
                <p className={styles.block_741}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    ge mig hälften av pajen{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_742}>
                  Correct: en fjärdedel av ett äpple
                </p>
                <p className={styles.block_743}>Incorrect: 1/4 av ett äpple</p>
                <p className={styles.block_744}>Incorrect: 0,25 av ett äpple</p>
                <p className={styles.block_745}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    en fjärdedel av ett äpple{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_746}>Correct: Jag är halvsäker.</p>
                <p className={styles.block_747}>Incorrect: Jag är 1/2 säker.</p>
                <p className={styles.block_748}>Incorrect: Jag är 0,5 säker.</p>
                <p className={styles.block_749}>
                  Correct: Han halvvinkade från andra sidan
                </p>
                <p className={styles.block_750}>rummet.</p>
                <p className={styles.block_751}>
                  Explanation: Here "halv" is used more
                </p>
                <p className={styles.block_752}>
                  figuratively, and it is written out as a word.
                </p>
                <p className={styles.block_753}>
                  Correct: tre och en halv apelsin
                </p>
                <p className={styles.block_754}>Incorrect: 3.5 apelsiner</p>
                <p className={styles.block_609}>Incorrect: 3 och 1/2 apelsin</p>
                <p className={styles.block_755}>
                  Incorrect: 3 och en halv apelsin
                </p>
                <p className={styles.block_756}>
                  Explanation: tre och en halv apelsin
                </p>
                <p className={styles.block_757}>
                  Correct: 12 och en halv tårta.
                </p>
                <p className={styles.block_758}>Incorrect: 12.5 tårta.</p>
                <p className={styles.block_759}>
                  Incorrect: tolv och en halv tårta
                </p>
                <p className={styles.block_760}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>tolv och en halv tårta </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_761}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_762}>
                  <span className={styles.text_4}>
                    Correct: Den kostar 9,90 kr.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    den kostar nio och nitto{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_763}>
                  <span className={styles.text_4}>
                    Correct: Hon köpte villan för 7,5 miljoner.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    hon köpte villan för sju och en{' '}
                  </span>
                </p>
                <p className={styles.block_764}>
                  <span className={styles.text_1}>halv miljon </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_765}>
                  Transcribe percentages using numerals, space and the % sign,
                  only write out the full words if they are part of a continuous
                  text or have a more figurative meaning. Never transcribe with
                  the % sign when it is part of a compound word and don't ever
                  mix it with written out numerals.
                </p>
                <p className={styles.block_766}>Correct: 70 % kakao</p>
                <p className={styles.block_234}>Incorrect: sjuttio % kakao</p>
                <p className={styles.block_767}>Incorrect: 70% kakao</p>
                <p className={styles.block_768}>
                  Correct: Jag känner mig inte riktigt hundra
                </p>
                <p className={styles.block_351}>procent.</p>
                <p className={styles.block_769}>
                  Incorrect: Jag känner mig inte riktigt 100 %.
                </p>
                <p className={styles.block_770}>
                  Explanation: This is figurative speech.
                </p>
                <p className={styles.block_771}>Correct: femprocentig</p>
                <p className={styles.block_772}>Incorrect: 5 %-ig</p>
                <p className={styles.block_773}>Incorrect: fem-%-ig</p>
                <p className={styles.block_774}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_775}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_776}>
                  <span className={styles.text_4}>Correct: Karl XII </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>karl den tolfte </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_777}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_778}>
                  <span className={styles.text_4}>
                    Correct: säsong 3 avsnitt 2{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>säsong tre avsnitt två </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_779}>
                  Area code + groups of two or three, depending on length, and
                  numbers read one-by-one or in their hundreds, teens or tens.
                  After the area code, from left to right, start with one or
                  multiple groups of three digits, followed by groups of two if
                  needed, to end up with a last part of only two digits. Six
                  digits (after the area code) are put into groups of two. Add a
                  hyphen after the area code, but spaces everywhere else. If the
                  speaker clearly breaks these conventions by phrasing the
                  numbers differently, reflect that in the transcription. In
                  examples below we use to illustrate either a pause or an
                  intonation phrase break that clearly identifies a way to group
                  digits.
                </p>
                <p className={styles.block_780}>
                  <span className={styles.text_4}>Correct: 08-123 456 78 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    noll åtta [pause] ett hundra{' '}
                  </span>
                </p>
                <p className={styles.block_781}>
                  tjugotre [pause] fyra hundra femtiosex [pause]
                </p>
                <p className={styles.block_782}>
                  <span className={styles.text_1}>sjuttioåtta </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_783}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    noll åtta [pause] ett två tre{' '}
                  </span>
                </p>
                <p className={styles.block_784}>
                  [pause] fyra hundra femtiosex [pause] sjuttioåtta
                </p>
                <p className={styles.block_785}>"</p>
                <p className={styles.block_786}>
                  <span className={styles.text_4}>
                    Correct: 08-12 34 56 78{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    noll åtta [pause] tolv [pause]{' '}
                  </span>
                </p>
                <p className={styles.block_787}>
                  <span className={styles.text_1}>
                    trettiofyra [pause] femtiosex [pause] sjuttioåtta{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_788}>
                  Explanation: Speaker is phrasing the number in
                </p>
                <p className={styles.block_789}>an unconventional way</p>
                <p className={styles.block_790}>
                  <span className={styles.text_4}>Correct: 070-111 22 33 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    noll sju noll [pause] ett ett ett{' '}
                  </span>
                </p>
                <p className={styles.block_791}>
                  <span className={styles.text_1}>
                    [pause] två två [pause] tre tre{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_596}>
                  <span className={styles.text_4}>Correct: 018-12 34 56 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    noll ett åtta ett två tre fyra fem{' '}
                  </span>
                </p>
                <p className={styles.block_792}>
                  <span className={styles.text_1}>sex </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_793}>
                  Explanation: Speaker is making no clear
                </p>
                <p className={styles.block_322}>
                  grouping, choose the conventional format.
                </p>
                <p className={styles.block_794}>Correct: 0980-668 00</p>
                <p className={styles.block_795}>
                  Transcribe Swedish 'personal numbers' ('personnummer') with a
                  hyphen between the date section and the last four digits.
                </p>
                <p className={styles.block_796}>
                  <span className={styles.text_4}>Correct: 780613-0231 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    sjuttioåtta noll sex tretton noll{' '}
                  </span>
                </p>
                <p className={styles.block_797}>
                  <span className={styles.text_1}>två tre ett </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_798}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Letters
                  should most often be in uppercase, and in
                </p>
                <p className={styles.block_799}>
                  addresses they are separated from the digits with a space, but
                  in many other cases where they are part of name they are
                  always kept together as one unit. Do not transcribe credit
                  card numbers, etc. (see Difficult Utterances &gt; Skipping a
                  Prompt). If uncertain what to transcribe and how, google the
                  sequence.
                </p>
                <p className={styles.block_800}>Correct: Volvo V40</p>
                <p className={styles.block_801}>Incorrect: Volvo V 40</p>
                <p className={styles.block_801}>Incorrect: Volvo V-40</p>
                <p className={styles.block_802}>Incorrect: Volvo v40</p>
                <p className={styles.block_803}>
                  Explanation: This is part of a name and the
                </p>
                <p className={styles.block_804}>
                  most common spelling if you google it.
                </p>
                <p className={styles.block_805}>Correct: Xbox 360</p>
                <p className={styles.block_806}>Incorrect: Xbox360</p>
                <p className={styles.block_807}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>xbox tre sextio </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_808}>
                  <span className={styles.text_4}>
                    Correct: Kungsgatan 15 A{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Letters in addresses should{' '}
                  </span>
                </p>
                <p className={styles.block_809}>
                  always be in uppercase and separated from the
                </p>
                <p className={styles.block_810}>digits with a space.</p>
                <p className={styles.block_811}>
                  <span className={styles.text_4}>Correct: klass 5B </span>
                  <span className={styles.text_5}>
                    Explanation: Letters in class names should{' '}
                  </span>
                </p>
                <p className={styles.block_812}>
                  always be in uppercase, but not separated from
                </p>
                <p className={styles.block_813}>the digits.</p>
                <p className={styles.block_814}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_815}>
                  <span className={styles.text_4}>Correct: 5 / 6 ^ 3 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    fem delat med sex upphöjt till{' '}
                  </span>
                </p>
                <p className={styles.block_816}>
                  <span className={styles.text_1}>tre </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_817}>Correct: Vad blir 5 * 6?</p>
                <p className={styles.block_818}>
                  Incorrect: Vad blir fem gånger sex?
                </p>
                <p className={styles.block_819}>
                  Incorrect: Vad blir 5 gånger 6?
                </p>
                <p className={styles.block_820}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    vad blir fem gånger sex{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_821}>
                  Incorrect: Vad blir fem multiplicerat med sex?
                </p>
                <p className={styles.block_822}>
                  <span className={styles.text_8}>Correct: √ 3 </span>
                  <span className={styles.text_9}>Example audio: " </span>
                  <span className={styles.text_10}>roten ur tre </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_823}>
                  Correct: Hur mycket är tre iguanor delat på två
                </p>
                <p className={styles.block_824}>alligatorer?</p>
                <p className={styles.block_825}>
                  Explanation: Does not sound like a true math
                </p>
                <p className={styles.block_826}>
                  expression with useful units.
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  For money amounts in dollar, euro and pound use the specific
                  symbols: $, € and £. In line with this Swedish currency
                  "kronor"is always shortened "kr" when preceded by a specific
                  amount. For other currencies, use their respective currency
                  codes. If the speaker specifies which country's dollar or
                  kronor they are referrring to, use the currency code then as
                  well. Remember to type out space in between the currency
                  symbol/abbreviation/code and the amount. When a speaker uses a
                  currency word without specifying a quantity, spell the word
                  out.
                </p>
                <p className={styles.block_829}>
                  <span className={styles.text_4}>Correct: 55 € </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>femtiofem euro </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_830}>
                  <span className={styles.text_4}>Correct: 5 $ </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>fem dollar </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_831}>
                  <span className={styles.text_4}>Correct: 199 kr </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>hundranittionio kronor </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_832}>
                  <span className={styles.text_4}>Correct: 20 £ </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>tjugo pund </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_833}>
                  <span className={styles.text_4}>Correct: 199 NOK </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    hundranittionio norska kronor{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_4}>Correct: 199 SEK </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    hundranittionio svenska kronor{' '}
                  </span>
                </p>
                <p className={styles.block_834}>"</p>
                <p className={styles.block_835}>
                  <span className={styles.text_4}>Correct: 5 NZD </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    fem nyazeeländska dollar{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_836}>
                  Correct: Omvandla svenska kronor till
                </p>
                <p className={styles.block_837}>amerikanska dollar.</p>
                <p className={styles.block_838}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    omvandla svenska kronor till{' '}
                  </span>
                </p>
                <p className={styles.block_839}>
                  <span className={styles.text_1}>amerikanska dollar </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_840}>
                  Explanation: no quantity is specified
                </p>
                <p className={styles.block_841}>
                  <span className={styles.text_4}>
                    Correct: Omvandla 10 SEK till USD.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    omvandla tio svenska kronor{' '}
                  </span>
                </p>
                <p className={styles.block_842}>
                  <span className={styles.text_1}>
                    till amerikanska dollar{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_843}>
                  Explanation: quantity for conversion is
                </p>
                <p className={styles.block_844}>
                  specified, then use currency code for both
                </p>
                <p className={styles.block_496}>currencies</p>
                <p className={styles.block_845}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_846}>
                  Correct: Den kostar tio eller femton kronor.
                </p>
                <p className={styles.block_847}>
                  Correct: två till tre hundra kronor
                </p>
                <p className={styles.block_848}>
                  Incorrect: två- till tre hundra kronor
                </p>
                <p className={styles.block_849}>Correct: en krona eller två</p>
                <p className={styles.block_850}>
                  Abbreviate all units that follow numeric values. Exception for
                  "liter" and "gram", where you should spell them out. For
                  numbers &lt;= 10, use spelled out form and do not use
                  abbreviated form for unit.
                </p>
                <p className={styles.block_851}>
                  Correct: Min familj dricker tio liter juice på en
                </p>
                <p className={styles.block_447}>vecka.</p>
                <p className={styles.block_852}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    min familj dricker tio liter juice{' '}
                  </span>
                </p>
                <p className={styles.block_853}>
                  <span className={styles.text_1}>på en vecka </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_854}>
                  <span className={styles.text_4}>
                    Correct: Han åkte fem kilometer på en kvart.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    han åkte fem kilometer på en{' '}
                  </span>
                </p>
                <p className={styles.block_855}>
                  <span className={styles.text_1}>kvart </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_856}>
                  <span className={styles.text_4}>
                    Correct: Han åkte 11 km på en kvart.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    han åkte elva kilometer på en{' '}
                  </span>
                </p>
                <p className={styles.block_855}>
                  <span className={styles.text_1}>kvart </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_857}>
                  <span className={styles.text_4}>
                    Correct: Han åkte 3 km och väger 67 kg.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    han åkte tre kilometer och{' '}
                  </span>
                </p>
                <p className={styles.block_858}>
                  <span className={styles.text_1}>väger sextiosju kilo </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_859}>
                  Explanation: mixed of &lt;= 10 and &gt; 10 - use
                </p>
                <p className={styles.block_860}>digits for all.</p>
                <p className={styles.block_861}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_273}>
                  Correct: Rita en cirkel med radien 3 cm.
                </p>
                <p className={styles.block_862}>
                  Incorrect: Rita en cirkel med radien tre cm.
                </p>
                <p className={styles.block_863}>Correct: Katten vägde 4 kg.</p>
                <p className={styles.block_471}>Correct: Jag köpte 5 dl.</p>
                <p className={styles.block_864}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_865}>
                  <span className={styles.text_4}>
                    Correct: Godiset kostar 6,90 kr/kg.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    godiset kostar sex och nittio{' '}
                  </span>
                </p>
                <p className={styles.block_866}>
                  <span className={styles.text_1}>kilot </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_867}>
                  <span className={styles.text_4}>
                    Correct: Jag är 180 cm.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>jag är en och åttio </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_868}>
                  <span className={styles.text_4}>
                    Correct: Ställ alarmet på kl 9.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ställ alarmet på nio </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_869}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_870}>● kilobit - bbit</p>
                <p className={styles.block_871}>● megabit - Mbit</p>
                <p className={styles.block_872}>● gigabit - Gbit</p>
                <p className={styles.block_873}>● terabit - Tbit</p>
                <p className={styles.block_874}>● kilobyte - kB</p>
                <p className={styles.block_875}>● megabyte - MB</p>
                <p className={styles.block_876}>● gigabyte - GB</p>
                <p className={styles.block_877}>● terabyte - TB</p>
                <p className={styles.block_878}>Slang terms (spell them out)</p>
                <p className={styles.block_879}>● gig</p>
                <p className={styles.block_880}>● spänn</p>
                <p className={styles.block_881}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_882}>● en millimeter - 1 mm</p>
                <p className={styles.block_883}>● en centimeter - 1 cm</p>
                <p className={styles.block_871}>● en meter - 1 m</p>
                <p className={styles.block_884}>● en kilometer - 1 km</p>
                <p className={styles.block_885}>
                  ● en meter per sekund - 1 m/s
                </p>
                <p className={styles.block_886}>
                  ● en centimeter per år - 1 cm/år
                </p>
                <p className={styles.block_887}>
                  ● en kilometer i timmen - 1 km/h
                </p>
                <p className={styles.block_888}>Common measurements of area</p>
                <p className={styles.block_889}>
                  ● en kvadratcentimeter - 1 cm2
                </p>
                <p className={styles.block_890}>● en kvadratmeter - 1 m2</p>
                <p className={styles.block_891}>
                  ● en kvadratkilometer - 1 km2
                </p>
                <p className={styles.block_892}>● en hektar - 1 ha</p>
                <p className={styles.block_893}>Common scientific terms</p>
                <p className={styles.block_894}>● en decibel - 1 dB</p>
                <p className={styles.block_895}>● en newton - 1 N</p>
                <p className={styles.block_877}>● en joule - 1 J</p>
                <p className={styles.block_896}>● en parsec - 1 parsec</p>
                <p className={styles.block_897}>● en ampere - 1 amp</p>
                <p className={styles.block_898}>● en hertz - 1 Hz</p>
                <p className={styles.block_899}>● en watt - 1 W</p>
                <p className={styles.block_179}>● en kilowatt - 1 kW</p>
                <p className={styles.block_900}>● en candela - 1 cd</p>
                <p className={styles.block_901}>● en lumen - 1 lm</p>
                <p className={styles.block_874}>● en grad - 1 °</p>
                <p className={styles.block_902}>
                  ● en grader Fahrenheit - °1 F
                </p>
                <p className={styles.block_903}>● en grader Celsius - 1 °C</p>
                <p className={styles.block_904}>● en kelvin - 1 K</p>
                <p className={styles.block_905}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_906}>● en liter - 1 l</p>
                <p className={styles.block_894}>● en tesked - 1 tsk</p>
                <p className={styles.block_907}>● en matsked - 1 msk</p>
                <p className={styles.block_908}>● ett kryddmått - 1 krm</p>
                <p className={styles.block_909}>● en kaffekopp - 1 kkp</p>
                <p className={styles.block_910}>● en milliliter - 1 ml</p>
                <p className={styles.block_911}>● en centiliter - 1 cl</p>
                <p className={styles.block_876}>● ett gram - 1 g</p>
                <p className={styles.block_912}>● ett milligram - 1 mg</p>
                <p className={styles.block_913}>● ett hekto - 1 hg</p>
                <p className={styles.block_914}>● ett hektogram - 1 hg</p>
                <p className={styles.block_915}>● ett kilo - 1 kg</p>
                <p className={styles.block_916}>● ett kilogram - 1 kg</p>
                <p className={styles.block_917}>● en kubikcentimeter - 1 cm3</p>
                <p className={styles.block_883}>● en kubikmeter - 1 m3</p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the established norms for transcribing dates. Only
                  transcribe the definite article "den" before the date if it
                  the date isn't followed by a month, or if the date is preceded
                  by a weekday. Leave out the article if the month is specified.
                </p>
                <p className={styles.block_920}>
                  <span className={styles.text_4}>Correct: 17 juli 1964 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    den sjuttonde juli nitton hundra{' '}
                  </span>
                </p>
                <p className={styles.block_921}>
                  <span className={styles.text_1}>sextiofyra </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_922}>
                  Explanation: The definite article is excluded as
                </p>
                <p className={styles.block_923}>it is followed by a month.</p>
                <p className={styles.block_313}>
                  <span className={styles.text_4}>
                    Correct: Jag fyller år den 24:e.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    jag fyller år den tjugofjärde{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_924}>
                  Explanation: The date isn't followed by a month
                </p>
                <p className={styles.block_809}>
                  (or year), so here the definite article is included.
                </p>
                <p className={styles.block_925}>
                  <span className={styles.text_4}>
                    Correct: det var på hösten -78{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    det var på hösten sjuttioåtta{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_926}>
                  <span className={styles.text_4}>
                    Correct: någon gång på 90-talet{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    någon gång på nittiotalet{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_927}>
                  <span className={styles.text_4}>
                    Correct: onsdagen den 6 mars{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    onsdagen den sjätte mars{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_928}>
                  Explanation: The date is preceded by a
                </p>
                <p className={styles.block_929}>
                  weekday, so the article is included.
                </p>
                <p className={styles.block_930}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such.
                </p>
                <p className={styles.block_931}>
                  <span className={styles.text_4}>Correct: 2013-01-02 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    tjugo hundra tretton noll ett{' '}
                  </span>
                </p>
                <p className={styles.block_932}>
                  <span className={styles.text_1}>noll två </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_933}>
                  <span className={styles.text_4}>
                    Correct: Sista förbrukningsdag är 05/10 2012.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    sista förbrukningsdag är noll{' '}
                  </span>
                </p>
                <p className={styles.block_934}>
                  <span className={styles.text_1}>fem tio två tusen tolv </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_833}>
                  <span className={styles.text_4}>
                    Correct: Sista förbrukningsdag är 5/10 2012.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    sista förbrukningsdag är femte{' '}
                  </span>
                </p>
                <p className={styles.block_935}>
                  <span className={styles.text_1}>
                    i tionde två tusen tolv{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_936}>
                  Use the natural form for transcribing times whenever possible.
                </p>
                <p className={styles.block_937}>
                  Use arabic numbers for times. If the speaker says "klockan",
                  write it out. Use the abbreviated form "kl." before all times
                  in hh.mm format. For times with hours and
                </p>
                <p className={styles.block_938}>
                  minutes information, use hh.mm format. If the context makes it
                  awkward to use hh.mm, spell out the number.
                </p>
                <p className={styles.block_939}>
                  <span className={styles.text_4}>Correct: 3.00 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>tre noll noll </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_940}>Correct: klockan tre</p>
                <p className={styles.block_941}>Incorrect: kl. tre</p>
                <p className={styles.block_942}>Incorrect: kl. 3</p>
                <p className={styles.block_943}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>klockan tre </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_944}>
                  Correct: klockan fyra på morgonen
                </p>
                <p className={styles.block_521}>
                  Incorrect: kl. fyra på morgonen
                </p>
                <p className={styles.block_945}>Incorrect: kl. 4 på morgonen</p>
                <p className={styles.block_946}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    klockan fyra på morgonen{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_652}>
                  <span className={styles.text_4}>
                    Correct: klockan fyra på eftermiddagen{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    klockan fyra på eftermiddagen{' '}
                  </span>
                </p>
                <p className={styles.block_834}>"</p>
                <p className={styles.block_947}>Correct: kvart över tre</p>
                <p className={styles.block_941}>Incorrect: 15.15</p>
                <p className={styles.block_948}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>kvart över tre </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_949}>
                  <span className={styles.text_4}>Correct: tio i två </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>tio i två </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_950}>
                  <span className={styles.text_4}>Correct: kl. 22.30 </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    klockan tjugotvå och trettio{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_951}>
                  <span className={styles.text_4}>
                    Correct: några minuter efter tre{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    några minuter efter tre{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_952}>
                  <span className={styles.text_4}>
                    Correct: Vi ses vid fyra.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>vi ses vid fyra </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_953}>
                  <span className={styles.text_4}>
                    Correct: runt åttatiden{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>runt åttatiden </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_956}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_957}>
                  Correct: McDonald's, Dragarbrunnsgatan
                </p>
                <p className={styles.block_958}>
                  <span className={styles.text_4}>
                    Correct: Ica, Liljeholmen{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: This should also be interpreted as
                  </span>
                </p>
                <p className={styles.block_959}>
                  ENTITY, LOCATION - rather than just one
                </p>
                <p className={styles.block_960}>
                  stand-alone ENTITY - because the complete
                </p>
                <p className={styles.block_961}>
                  proper name would be "Ica Kvantum
                </p>
                <p className={styles.block_962}>Liljeholmen".</p>
                <p className={styles.block_963}>Correct: kaféer, Södermalm</p>
                <p className={styles.block_964}>
                  Correct: Mehmet Demir, Stockholm
                </p>
                <p className={styles.block_965}>
                  Correct: leg sjukgymnast M. Schönberg,
                </p>
                <p className={styles.block_966}>Göteborg</p>
                <p className={styles.block_967}>
                  Correct: barnsängar, Nyköping
                </p>
                <p className={styles.block_968}>Correct: vädret, Täfteå</p>
                <p className={styles.block_969}>
                  Correct: visningar av Hungerspelen, Malmö
                </p>
                <p className={styles.block_970}>
                  Correct: Stora Nygatan 23, Stockholm
                </p>
                <p className={styles.block_971}>
                  Do not capitalize cardinal directions unless part of a
                  specific place name.
                </p>
                <p className={styles.block_972}>Correct: Östra station</p>
                <p className={styles.block_973}>Correct: Norra bantorget</p>
                <p className={styles.block_974}>
                  <span className={styles.text_4}>
                    Correct: Vi möts upp på västra sidan om ån.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: No need to capitalize "västra"
                  </span>
                </p>
                <p className={styles.block_975}>
                  because it's not part of a proper place name.
                </p>
                <p className={styles.block_976}>
                  Place names should be formatted according to "Svenska
                  skrivregler". This means that in place names that consist of
                  more than one word, where one word is a noun preceded by one
                  or several attributes, the noun should always be written in
                  all lower case letters - unless the noun can be interpreted as
                  a proper name in its own right. This is a very common
                  structure for street names for example. Stick to this rule,
                  even though some municipalities tend to deviate from this
                  standard.
                </p>
                <p className={styles.block_977}>Correct: Jenny Linds väg</p>
                <p className={styles.block_978}>Incorrect: Jenny Linds Väg</p>
                <p className={styles.block_979}>
                  Explanation: "Jenny Linds" are attributes to the
                </p>
                <p className={styles.block_980}>noun "väg".</p>
                <p className={styles.block_733}>Correct: Stabby allé</p>
                <p className={styles.block_981}>Incorrect: Stabby Allé</p>
                <p className={styles.block_982}>Correct: Bäverns gränd</p>
                <p className={styles.block_983}>Incorrect: Bäverns Gränd</p>
                <p className={styles.block_984}>Correct: Västra Ågatan</p>
                <p className={styles.block_985}>Incorrect: Västra ågatan</p>
                <p className={styles.block_986}>
                  Explanation: "Västra" is an attribute to "Ågatan",
                </p>
                <p className={styles.block_987}>
                  but "Ågatan" is a proper name in its own right
                </p>
                <p className={styles.block_988}>
                  and therefore it should be capitalized.
                </p>
                <p className={styles.block_989}>Correct: Engelska parken</p>
                <p className={styles.block_990}>Incorrect: Engelska Parken</p>
                <p className={styles.block_991}>Correct: S:t Johannes kyrka</p>
                <p className={styles.block_992}>
                  Incorrect: S:t Johannes Kyrka
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_995}>
                  <span className={styles.text_4}>
                    Correct: www.google.co.kr{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    v v v punkt google punkt c o{' '}
                  </span>
                </p>
                <p className={styles.block_996}>
                  <span className={styles.text_1}>punkt k r </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_997}>
                  <span className={styles.text_4}>Correct: amazon.com </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>amazon punkt com </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_998}>
                  <span className={styles.text_4}>Correct: amazon.com </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>amazon dot com </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_999}>
                  <span className={styles.text_4}>
                    Correct: http://123.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    h t t p kolon snedstreck{' '}
                  </span>
                </p>
                <p className={styles.block_1000}>
                  <span className={styles.text_1}>
                    snedstreck ett två tre punkt com{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1001}>
                  <span className={styles.text_4}>
                    Correct: fredde@gmail.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    fredde snabel-a gmail punkt{' '}
                  </span>
                </p>
                <p className={styles.block_1002}>
                  <span className={styles.text_1}>com </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1003}>
                  <span className={styles.text_4}>
                    Correct: Jag älskar pizza. #hungrig{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    jag älskar pizza hashtag{' '}
                  </span>
                </p>
                <p className={styles.block_1004}>
                  <span className={styles.text_1}>hungrig </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1005}>
                  Correct: Jag är så #hungrig att jag skulle kunna
                </p>
                <p className={styles.block_1006}>äta en hel pizza.</p>
                <p className={styles.block_1007}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    jag är så hashtag hungrig att{' '}
                  </span>
                </p>
                <p className={styles.block_1008}>
                  <span className={styles.text_1}>
                    jag skulle kunna äta en hel pizza{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1009}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".
                </p>
                <p className={styles.block_1010}>
                  <span className={styles.text_4}>
                    Correct: http://nytimes.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    h t t p kolon snedstreck{' '}
                  </span>
                </p>
                <p className={styles.block_1011}>
                  <span className={styles.text_1}>
                    snedstreck n y times punkt com{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1012}>
                  <span className={styles.text_4}>
                    Correct: http:\\mail.yahoo.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    h t t p kolon bakstreck{' '}
                  </span>
                </p>
                <p className={styles.block_1013}>
                  <span className={styles.text_1}>
                    bakstreck mail punkt yahoo punkt com{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_930}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_1014}>
                  <span className={styles.text_4}>
                    Correct: www.amazon.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    w w punkt amazon punkt com{' '}
                  </span>
                </p>
                <p className={styles.block_1015}>
                  <span className={styles.text_11}>" </span>
                  <span className={styles.text_12}>
                    <sub className={styles.calibre2}>
                      Explanation: If the user mistakenly says "ww",
                    </sub>
                  </span>
                </p>
                <p className={styles.block_1016}>transcribe "www".</p>
                <p className={styles.block_1017}>
                  <span className={styles.text_4}>Correct: google.co.uk </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>google punkt co u k </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1018}>
                  Explanation: Also transcribe the dot in an
                </p>
                <p className={styles.block_1019}>
                  obvious URL, even if the speaker did not
                </p>
                <p className={styles.block_1020}>include it.</p>
                <p className={styles.block_1021}>
                  <span className={styles.text_4}>Correct: www.forex.se </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>v v v forex punkt se </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1022}>
                  <span className={styles.text_4}>
                    Correct: www.facebook.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>v v facebook punkt com </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_373}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_1023}>
                  <span className={styles.text_4}>
                    Correct: www.adlibris.com{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    v v v punkt a d l i b r i s punkt c{' '}
                  </span>
                </p>
                <p className={styles.block_1024}>
                  <span className={styles.text_1}>o m </span>
                  <span className={styles.text_}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Only use abbreviations and contractions if the speaker says a
                  shortened form of a word, or if it is part of a brand,
                  company, artist or place name which is spelled shortened.
                  Abbreviations should always be punctuated using periods, but
                  do not punctuate contractions except ones that should be
                  punctuated with a colon, like "S:t". Do not use space between
                  punctuations.
                </p>
                <p className={styles.block_1026}>
                  Correct: Vi behöver saxar, klister, tejp, glitter,
                </p>
                <p className={styles.block_1027}>tyg med mera.</p>
                <p className={styles.block_1028}>
                  Incorrect: Vi behöver saxar, klister, tejp, glitter,
                </p>
                <p className={styles.block_1029}>tyg m.m.</p>
                <p className={styles.block_1030}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    vi behöver saxar klister tejp{' '}
                  </span>
                </p>
                <p className={styles.block_1031}>
                  <span className={styles.text_1}>glitter tyg med mera </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1032}>
                  Explanation: speaker doesn't say an
                </p>
                <p className={styles.block_1033}>abbreviation</p>
                <p className={styles.block_1034}>
                  Correct: Vi behöver saxar, klister, tejp, glitter,
                </p>
                <p className={styles.block_1035}>tyg m.m.</p>
                <p className={styles.block_1028}>
                  Incorrect: Vi behöver saxar, klister, tejp, glitter,
                </p>
                <p className={styles.block_1036}>tyg m. m.</p>
                <p className={styles.block_1030}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    vi behöver saxar klister tejp{' '}
                  </span>
                </p>
                <p className={styles.block_1037}>
                  <span className={styles.text_1}>glitter tyg m m </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1038}>
                  Explanation: speaker says an abbreviation
                </p>
                <p className={styles.block_1039}>
                  Correct: Jag ska till Gbg i helgen.
                </p>
                <p className={styles.block_1040}>
                  Incorrect: Jag ska till Göteborg i helgen.
                </p>
                <p className={styles.block_1041}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    jag ska till g b g i helgen{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1042}>
                  Explanation: speaker says a contraction
                </p>
                <p className={styles.block_1043}>
                  Correct: Jag ska till Göteborg i helgen.
                </p>
                <p className={styles.block_1044}>
                  Incorrect: Jag ska till Gbg i helgen.
                </p>
                <p className={styles.block_1045}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    jag ska till göteborg i helgen{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_1046}>
                  Explanation: speaker doesn't say a contraction
                </p>
                <p className={styles.block_1047}>
                  <span className={styles.text_4}>
                    Correct: Där ligger S:t Pers kyrka.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    där ligger sankt pers kyrka{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1048}>
                  Explanation: Churches and streets are often
                </p>
                <p className={styles.block_536}>
                  spelled with the contracted form of "sankt"
                </p>
                <p className={styles.block_1049}>Correct: dB, Hz, kW</p>
                <p className={styles.block_1050}>Incorrect: hz, db, kw</p>
                <p className={styles.block_1051}>
                  Explanation: Some unit contractions require
                </p>
                <p className={styles.block_1052}>
                  special casing (see the Currency and unit
                </p>
                <p className={styles.block_1053}>
                  section for more units contractions).
                </p>
                <p className={styles.block_1054}>
                  <span className={styles.text_4}>
                    Correct: Det kostar ca 5 kr.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    det kostar ca fem kronor{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1055}>
                  Explanation: Always contract the word "cirka"
                </p>
                <p className={styles.block_429}>
                  before digits, unless the numeral is written out
                </p>
                <p className={styles.block_1056}>(i.e. "cirka fem").</p>
                <p className={styles.block_1057}>
                  Use periods between letters in initials (and in or at the end
                  of abbreviations), but never for acronyms. Use upper case
                  letters for acronyms and initials. But follow your linguistic
                  sense, as there are exceptions to these rules. Always check
                  which is most common by looking it up in dictionaries,
                  Wikipedia and Swedish news articles. Acronyms pronounced as
                  letter sequences should always be written in uppercase
                  letters. Extremely lexicalized acronyms that are pronounced as
                  words rather than letter sequences should be written in
                  lowercase, unless that is a very uncommon practice or it is a
                  company, brand or product name. If a lowercase spelling would
                  be problematic, don't use it.
                </p>
                <p className={styles.block_1058}>
                  <span className={styles.text_4}>
                    Correct: HTML, DVD, LED, SAS{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: brands and products{' '}
                  </span>
                </p>
                <p className={styles.block_422}>
                  <span className={styles.text_4}>Correct: USA, UK </span>
                  <span className={styles.text_5}>
                    Explanation: geographic{' '}
                  </span>
                </p>
                <p className={styles.block_1059}>Correct: GPS, CV, MP3, IT</p>
                <p className={styles.block_983}>Incorrect: gps, cv, mp3, it</p>
                <p className={styles.block_1060}>
                  Explanation: Acronyms pronounced as letter
                </p>
                <p className={styles.block_1061}>
                  sequences should always be written in
                </p>
                <p className={styles.block_1062}>uppercase letters.</p>
                <p className={styles.block_1063}>
                  <span className={styles.text_4}>
                    Correct: K.G. Hammar, J.K. Rowling{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>k g hammar j k rowling </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1064}>
                  Explanation: Initials in names
                </p>
                <p className={styles.block_1065}>
                  <span className={styles.text_4}>Correct: PUL </span>
                  <span className={styles.text_5}>
                    Explanation: Sometimes pronounced as a word,
                  </span>
                </p>
                <p className={styles.block_1066}>
                  but the spelling most used in newspapers is
                </p>
                <p className={styles.block_1067}>uppercase letters.</p>
                <p className={styles.block_1068}>
                  <span className={styles.text_4}>Correct: vab </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>vab </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1069}>
                  Explanation: Extremely lexicalized acronyms
                </p>
                <p className={styles.block_1070}>
                  such as "vab" ("vård av barn") should be written
                </p>
                <p className={styles.block_844}>
                  in lowercase when pronounced as a word.
                </p>
                <p className={styles.block_321}>
                  <span className={styles.text_4}>Correct: cf. </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>c f </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1071}>
                  Explanation: abbreviation, not to be mistaken
                </p>
                <p className={styles.block_1072}>for acronym</p>
                <p className={styles.block_1073}>Correct: jk, wtf, lol, rofl</p>
                <p className={styles.block_1074}>
                  Incorrect: JK, WTF, LOL, ROFL
                </p>
                <p className={styles.block_1075}>
                  Explanation: Interjection and emotion acronyms
                </p>
                <p className={styles.block_1076}>
                  are an exception, they always should be in
                </p>
                <p className={styles.block_1077}>lowercase letters.</p>
                <p className={styles.block_1078}>
                  <span className={styles.text_4}>Correct: km, dl, hg </span>
                  <span className={styles.text_5}>
                    Explanation: unit abbreviations do not require
                  </span>
                </p>
                <p className={styles.block_1079}>periods</p>
                <p className={styles.block_1080}>
                  If a brand name uses periods, include the periods.
                </p>
                <p className={styles.block_796}>
                  <span className={styles.text_4}>Correct: J. C. Penney </span>
                  <span className={styles.text_5}>
                    Explanation: Official brand name as seen in the
                  </span>
                </p>
                <p className={styles.block_1081}>
                  privacy policy includes periods.
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
