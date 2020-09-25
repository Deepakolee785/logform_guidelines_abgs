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
            <PageContentHeader currentPage="Longform Polish" />
            <div className="content text">
              {' '}
              <p className={'heading'}>Agreed spelling</p>
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
                <p className={styles.block_496}>
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
                <p className={styles.block_497}>
                  <span className={styles.text_21}>
                    Correct: Tesco t e s c o{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Person said "tesco" and then spelled it.
                    </span>
                  </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.calibre2}>
                    Correct: a b c d e f g h i k l m n o p q r s t u v w x y z
                  </span>
                </p>
                <p className={styles.block_299}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_21}>Correct: PCK </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>p c k </span>
                  <span className={styles.text_31}>" </span>
                  <span className={styles.text_22}>
                    Explanation: common acronym{' '}
                  </span>
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_2}>
                    For uses of single letters, either referring to the letter
                    itself or some other meaning{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    associated with it, use capital letters (with apostrophes
                    for plurals).
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>
                  Correct: Jakie jest państwo na literę O?
                </p>
                <p className={styles.block_91}>
                  Correct: Jakie wyrazy zaczynają się na literę J?
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={styles.block_502}>
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
                <p className={styles.block_503}>Correct: cha cha cha</p>
                <p className={styles.block_504}>
                  Incorrect: chachachachachachacha
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>cha cha cha </span>
                  <span className={styles.text_19}>"</span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.calibre2}>
                    Explanation: Do not transcribe more than three
                  </span>
                </p>
                <p className={styles.block_507}>syllables.</p>
              </div>
              <div id="proper-names">
                <p className={styles.block_508}>Proper names</p>
                <p className={styles.block_509}>
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
                <p className={styles.block_510}>
                  <span className={styles.text_23}>
                    Defer to official spellings of celebrity names.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_21}>
                    Correct: Dorota Rabczewska{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Official spelling of the singer's name.
                    </span>
                  </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_2}>
                    If proper names include diacritics or symbols uncommon in
                    your language (č, ü, ß, etc),{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    do not include them in your spelling.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_513}>
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
                <p className={styles.block_514}>
                  <span className={styles.calibre2}>
                    Correct: Małgosia Zaremba została jedną z najlepszych
                    uczennic w szkole.
                  </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.calibre2}>
                    Incorrect: Małgosia Zaręba została jedną z najlepszych
                    uczennic w szkole.
                  </span>
                </p>
                <p className={styles.block_516}>
                  <span className={styles.calibre2}>
                    Explanation: Searching "Zaremba nazwisko" (without quotation
                    marks) yields more results than "Zaręba nazwisko".
                  </span>
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_2}>
                    If a speaker makes a small mistake in a proper name,
                    capitalize it anyway as long as the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    difference is minimal. "Minimal difference" refers to adding
                    or omitting a letter,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    switching the order of letters, or missing a diacritic.
                  </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_21}>Correct: Alegro </span>
                  <span className={styles.text_22}>
                    Explanation: actual name is "Allegro"{' '}
                  </span>
                  <span className={styles.text_21}>Correct: Mozila </span>
                  <span className={styles.text_22}>
                    Explanation: actual name is "Mozilla"{' '}
                  </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_2}>
                    Spell and capitalize holidays as they are formatted within
                    the answer box above the list{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    of Google Search results. If no box appears, defer to
                    Wikipedia's formatting, and if there{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    is no Wikipedia article, use the most common format
                    according to Google Search{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>results.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>
                  Correct: święta Bożego Narodzenia
                </p>
                <p className={styles.block_91}>
                  Correct: Kiedy obchodzimy Dzień Ojca?
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>
                  <span className={styles.text_}>Brand and product</span>
                  <span className={styles.text_1}> </span>
                </p>
                <p className={styles.block_521}>
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
                <p className={styles.block_149}>
                  Correct: Dostałam pracę w T-Mobile.
                </p>
                <p className={styles.block_139}>Correct: Yahoo</p>
                <p className={styles.block_139}>Correct: YouTube</p>
                <p className={styles.block_522}>
                  <span className={styles.text_21}>Correct: Burger King </span>
                  <span className={styles.text_22}>
                    Incorrect: BURGER KING{' '}
                  </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.calibre2}>
                    Explanation: Do not spell "Burger King" all in upper case as
                    in the stylized form of the logo,
                  </span>
                </p>
                <p className={styles.block_524}>
                  <span className={styles.calibre2}>
                    stick to the official form as per the privacy
                  </span>
                </p>
                <p className={styles.block_525}>policy.</p>
                <p className={styles.block_526}>Correct: LEGO</p>
                <p className={styles.block_150}>Incorrect: Lego</p>
                <p className={styles.block_527}>
                  <span className={styles.text_2}>
                    Capitalize names of brands if they refer to the
                    brand/company itself. Do not capitalize if{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the name refers to the product. This distinction follows
                    from the fact that, in the former{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    case, the name of the brand functions as a proper name, and
                    in the latter, it functions as{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>a common name.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.calibre2}>
                    Correct: Moje dziecko najbardziej lubi pieluchy marki
                    Pampers.
                  </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.calibre2}>
                    Incorrect: Moje dziecko najbardziej lubi pieluchy marki
                    pampers.
                  </span>
                </p>
                <p className={styles.block_530}>
                  <span className={styles.calibre2}>
                    Correct: Moje dziecko z pieluch najbardziej lubi pampersy.
                  </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.calibre2}>
                    Incorrect: Moje dziecko z pieluch najbardziej lubi Pampersy.
                  </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      moje dziecko najbardziej lubi pieluchy marki pampers
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.calibre2}>
                    Explanation: The word "Pampers" is capitalized because it
                    refers to the brand and functions as a proper name.
                  </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      moje dziecko z pieluch najbardziej lubi pampersy
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.calibre2}>
                    Explanation: The word "pampersy" is not capitalized because
                    it refers to the product itself and functions as a common
                    name.
                  </span>
                </p>
                <p className={styles.block_536}>
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
                <p className={styles.block_149}>Correct: Ok Google</p>
                <p className={styles.block_168}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, gdzie jest najbliższy{' '}
                  </span>
                </p>
                <p className={styles.block_137}>Starbucks?</p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Ok Google, kto jest prezydentem{' '}
                  </span>
                </p>
                <p className={styles.block_449}>Polski?</p>
                <p className={styles.block_91}>Correct: Okej.</p>
                <p className={styles.block_139}>
                  Correct: Okej Aniu, zaraz się tym zajmę.
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={styles.block_537}>
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
                <p className={styles.block_538}>
                  <span className={styles.text_2}>
                    Capitalize only the first word of Polish titles of films,
                    television series, theatre plays,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>songs, etc.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>Correct: Park jurajski</p>
                <p className={styles.block_139}>Correct: Szklana pogoda</p>
                <p className={styles.block_539}>
                  <span className={styles.text_2}>
                    Exceptions to the general Polish rule of capitalization in
                    titles include proper names and{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    titles of Bible parts. In Bible parts, all words should be
                    capitalized.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  Correct: Rozpaczliwie poszukując Susan
                </p>
                <p className={styles.block_168}>
                  Correct: Księga Powtórzonego Prawa
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_23}>
                    Do not use quotation marks for media titles.
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_418}>
                  Correct: Zagraj Bałkanica, Piersi
                </p>
                <p className={styles.block_139}>
                  Correct: Zagraj Takie tango Budki Suflera
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_2}>
                    Transcribe all media titles with original punctuation. In
                    cases where original punctuation{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    falls at the end of a sentence, do not transcribe
                    sentence-level punctuation. That is,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    media title punctuation trumps sentence level punctuation
                    when in conflict. If a popular{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    media title consists of an entire sentence but the official
                    spelling is without punctuation,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    then don't punctuate the title. If an utterance is ambiguous
                    between a media title and a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    sentence or web search, use your judgment for which is more
                    likely and treat it{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>accordingly.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  <span className={styles.calibre2}>
                    Correct: W którym roku został wyprodukowany
                  </span>
                </p>
                <p className={styles.block_542}>film Listy do M.</p>
                <p className={styles.block_139}>
                  Correct: Kto reżyserował film Dlaczego nie!
                </p>
                <p className={styles.block_91}>
                  Correct: recenzja filmu Ile waży koń trojański?
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_24}>
                    Very common alternate or shortened versions of titles should
                    also be capitalized.
                  </span>
                  <span className={styles.text_25}> </span>
                  <span className={styles.text_26}>Correct: GTA </span>
                  <span className={styles.text_27}>
                    Explanation: Grand Theft Auto
                  </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_21}>
                    Correct: Transformers 2{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: for "Transformers: Zemsta upadłych"
                    </span>
                  </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_2}>
                    Do not capitalize a media title that happens to occur within
                    quoted lyrics. Format lyrics{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    that form a sentence as you would a normal sentence.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.calibre2}>
                    Correct: YouTube ważne są tylko te dni, których jeszcze nie
                    znamy.
                  </span>
                </p>
                <p className={styles.block_547}>
                  <span className={styles.calibre2}>
                    Incorrect: YouTube ważne są tylko te Dni, których jeszcze
                    nie znamy.
                  </span>
                </p>
                <p className={styles.block_548}>
                  <span className={styles.calibre2}>
                    Explanation: The speaker is quoting lyrics that just happen
                    to contain the title, Dni, których jeszcze nie znamy. Format
                    as full sentence.
                  </span>
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_2}>
                    Treat foreign titles the same way as titles in the
                    transcription language if you{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>understand them.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  Correct: Silent all these years
                </p>
                <p className={styles.block_90}>
                  Incorrect: Silent All These Years
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_2}>
                    Treat foreign titles the same way as titles in the
                    transcription language if you{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>understand them.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  Correct: Silent all these years
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={styles.block_551}>
                  <span className={styles.text_2}>
                    When multiple spellings are attested, use the first spelling
                    used in the reference{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    dictionary for your language. If there is no entry, Google
                    the word and use the form with{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>the most hits.</span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_21}>Correct: menedżer </span>
                  <span className={styles.text_22}>Incorrect: menadżer </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.calibre2}>
                    Explanation: Both are correct but "menedżer" is preferred.
                  </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_2}>
                    Guess the most likely spelling given the context. When
                    context is insufficient, rely on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>Google hits.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>
                  <span className={styles.calibre2}>
                    Correct: W przyszłym miesiącu jedziemy nad
                  </span>
                </p>
                <p className={styles.block_553}>morze.</p>
                <p className={styles.block_91}>Correct: może</p>
                <p className={styles.block_554}>
                  <span className={styles.text_2}>
                    Use official spelling and capitalization for technical
                    terms. Google them and pay{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    attention to the correct format.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_149}>Correct: E. coli</p>
                <p className={styles.block_139}>Correct: Salmonella</p>
                <p className={styles.block_555}>
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
                <p className={styles.block_467}>
                  <span className={styles.text_21}>Correct: Zara będę. </span>
                  <span className={styles.text_22}>
                    Incorrect: Zaraz będę.{' '}
                  </span>
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>zara będę </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_21}>
                    Correct: Kocham ciebie.{' '}
                  </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>kocham ciebie </span>
                  <span className={styles.text_31}>"</span>
                </p>
                <p className={styles.block_557}>Incorrect: Kocham cię.</p>
                <p className={styles.block_558}>
                  <span className={styles.text_21}>
                    Correct: Zdrowych i fajnych Świąt dla państwa.{' '}
                  </span>
                  <span className={styles.text_22}>
                    Incorrect: Życzę państwu zdrowych Świąt.{' '}
                  </span>
                </p>
                <p className={styles.block_559}>
                  <span className={styles.text_19}>Example audio: " </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      zdrowych i fajnych świąt dla państwa
                    </span>
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_2}>
                    If you hear a word that does not sound like a standard word
                    of your language because{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    there is a small sound change (i.e. accent, speech error,
                    speech impairment, etc),{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    transcribe the intended word.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_21}>Correct: Pan Tadeusz </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>pan tideusz </span>
                  <span className={styles.text_31}>" </span>
                  <span className={styles.text_21}>Correct: Powrót Posła </span>
                  <span className={styles.text_31}>Example audio: " </span>
                  <span className={styles.text_32}>powrzót posła </span>
                  <span className={styles.text_31}>" </span>
                </p>
                <p className={styles.block_562}>
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
                <p className={styles.block_563}>
                  <span className={styles.text_21}>
                    Correct: Ta czekolada ma kakawowy smak.{' '}
                  </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: Unsure whether speaker intended to say
                      "kakaowy" or "kawowy", but clearly
                    </span>
                  </span>
                </p>
                <p className={styles.block_564}>
                  articulated and easy to spell.
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_2}>
                    If you hear a word that does not sound like a standard word
                    of your language because it{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    appears to be nonsense, first perform a Google search for
                    the word. If there is a clear{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    candidate, transcribe that word.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_21}>Correct: Sanjay Gupta </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      Explanation: User says "Sanjay Gupta". This might sound
                      like nonsense at first, but the
                    </span>
                  </span>
                </p>
                <p className={styles.block_567}>
                  transcriber performs a Google Search and finds
                </p>
                <p className={styles.block_568}>
                  <span className={styles.calibre2}>
                    "Sanjay Gupta", an American neurosurgeon.{' '}
                  </span>
                </p>
                <p className={styles.block_569}>Transcribe Sanjay Gupta.</p>
                <p className={styles.block_570}>
                  <span className={styles.text_2}>
                    If a word appears to be nonsense and a Google search returns
                    no clear results but it is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    easy to spell and articulated clearly, transcribe it anyway.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>Correct: kameritana</p>
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
