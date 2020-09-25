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
            <PageContentHeader currentPage="Longform Spanish" />
            <div className="content text">
              {' '}
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
                <p className={styles.block_413}>
                  <span className={styles.text_2}>
                    If a word is spelled or obvious pauses are made between
                    letters, spell it into letters as it{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    is said (often done for foreign names or businesses, for
                    example). Use lowercase letters
                  </span>
                </p>
                <p className={styles.block_414}>
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
                <p className={styles.block_415}>
                  <span className={styles.text_19}>
                    Correct: Costa c o s t a{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Person said "costa" and then spelled it.
                    </span>
                  </span>
                </p>
                <p className={styles.block_241}>
                  <span className={styles.text_19}>Correct: v a c a </span>
                  <span className={styles.text_20}>
                    Explanation: Person spelled "vaca".{' '}
                  </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.calibre2}>
                    Correct: a b c ch d e f g h i k l ll m n ñ o p q r rr s t u
                    v w x y z
                  </span>
                </p>
                <p className={styles.block_417}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_19}>Correct: CEO </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>c e o </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_19}>Correct: FIFA </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Pronounced the word "FIFA", or spelled out "f
                      i f a".
                    </span>
                  </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_19}>Correct: AAA </span>
                  <span className={styles.text_20}>
                    Explanation: Speaker says "triple a", or "a a a".{' '}
                  </span>
                  <span className={styles.text_19}>Correct: T-shirt </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>t-shirt </span>
                  <span className={styles.text_32}>" </span>
                  <span className={styles.text_19}>Correct: email </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>email </span>
                  <span className={styles.text_32}>" </span>
                  <span className={styles.text_19}>Correct: LDAP </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>el-dap </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_421}>
                  <span className={styles.calibre2}>
                    Correct: K-Narias, iPhone, USA, IBM, HTML,
                  </span>
                </p>
                <p className={styles.block_422}>MP3</p>
                <p className={styles.block_423}>
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
                <p className={styles.block_151}>
                  Correct: palabras que empiezan por J
                </p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: ¿Cuántas letras A hay en la palabra
                  </span>
                </p>
                <p className={styles.block_424}>autocaravana?</p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={styles.block_425}>
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
                <p className={styles.block_151}>
                  Correct: jaja, ay, ayayay, oh
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_19}>Correct: jajaja </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>jajajajaja </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_25}>
                    Use the following spelling for interjections.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>este </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>chao </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>boo </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>wow </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>¡Jajaja! </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>¡Jaja! </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>¿Aló? </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>hmn </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>oh </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>mmm </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>ay </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>ayayay</span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={styles.block_428}>
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
                <p className={styles.block_429}>
                  <span className={styles.text_25}>
                    Defer to official spellings of celebrity names.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_216}>Correct: will.i.am</p>
                <p className={styles.block_430}>
                  <span className={styles.text_19}>Correct: Avalanch </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: The name of the band is spelled differently
                      than the word "Avalancha".
                    </span>
                  </span>
                </p>
                <p className={styles.block_431}>Correct: Anni B Sweet</p>
                <p className={styles.block_139}>
                  Correct: Fito &amp; Fitipaldis
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_2}>
                    If proper names include diacritics uncommon in your language
                    (Ø, ę, etc), include them{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    in your spelling. If unsure, refer to news articles,
                    official city or celebrity websites, IMDb,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Wikipedia, Google Maps, or knowledge cards (the answer box
                    above the list of Google{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Search results) in that order. When no other source can be
                    used to decide between{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    spellings, choose the spelling used in the first hit(s) on
                    Google.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_89}>Correct: Zlatan Ibrahimovic</p>
                <p className={styles.block_148}>
                  Incorrect: Zlatan Ibrahimović
                </p>
                <p className={styles.block_433}>
                  Mispronounced proper names should be corrected.
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_19}>
                    Correct: Alejandro Sanz{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>alejandro senz </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_434}>
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
                <p className={styles.block_435}>
                  <span className={styles.text_19}>
                    Correct: Llamar a Sofia.{' '}
                  </span>
                  <span className={styles.text_20}>
                    Incorrect: Llamar a Sophia.{' '}
                  </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.calibre2}>
                    Explanation: Searching "Sofia nombre" (without quotation
                    marks) yields more results than "Sophia nombre".
                  </span>
                </p>
                <p className={styles.block_436}>
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
                <p className={styles.block_163}>
                  <span className={styles.text_19}>
                    Correct: The Lord of the Ring{' '}
                  </span>
                  <span className={styles.text_20}>
                    Explanation: for "The Lord of the Rings"{' '}
                  </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_19}>
                    Correct: Descendientes{' '}
                  </span>
                  <span className={styles.text_20}>
                    Incorrect: descendientes{' '}
                  </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.calibre2}>
                    Explanation: The actual name is "Los descendientes" and in
                    media titles, the first word should be capitalized.
                  </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_19}>Correct: craiglist </span>
                  <span className={styles.text_20}>
                    Explanation: "craig list"; actual name "craigslist"
                  </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_25}>
                    Choose the following spellings of proper names.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Ángel de la Guarda </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>CantaJuego </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>CCOO </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Chu chu ua </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El conejo asesino </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>el conejo asesino</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>el Lobo Feroz </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>el Pájaro Loco </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>ElRubius </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Greenpeace </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Hola soy Germán </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Issei Miaki </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Kesha </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>La Caja Café </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Lobito Caulimón </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>los Beatles </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Los Delinqüentes </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>los Destrampados </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Los Vazquez </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Los Zetas </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Mackenzie </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Meccano </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Nicola Di Bari </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Perro Chacarrón </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Peter La Anguila </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>pombagira </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>PSY </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Rayssa e Ravel </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Scooby-Doo </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Señora vaca </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Shaka Saint Seiya </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Slenderman </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Tin-Tan </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Tito El Bambino </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Virgen de Guadalupe </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_25}>
                    Choose the following spellings of place names.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>las Torres Gemelas </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Nueva York </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Parquesur </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>PortAventura </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>República Mexicana</span>
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={styles.block_440}>
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
                <p className={styles.block_151}>Correct: Trabaja en Amazon.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Parece que Yahoo y T-Mobile tienen un
                  </span>
                </p>
                <p className={styles.block_424}>acuerdo.</p>
                <p className={styles.block_441}>
                  <span className={styles.text_19}>Correct: Craigslist </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Officially "craigslist" per its privacy
                      policy, but capitalize it.
                    </span>
                  </span>
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_19}>Correct: Asus </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Officially "ASUS", but capitalize only the
                      first letter.
                    </span>
                  </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_19}>Correct: TripAdvisor </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: Officially "TripAdvisor" and is pronounced as
                      an initialism.
                    </span>
                  </span>
                </p>
                <p className={styles.block_349}>Correct: elRellano</p>
                <p className={styles.block_155}>
                  <span className={styles.text_19}>Correct: Burger King </span>
                  <span className={styles.text_20}>
                    Incorrect: BURGER KING{' '}
                  </span>
                </p>
                <p className={styles.block_156}>
                  <span className={styles.calibre2}>
                    Explanation: Do not spell "Burger King" all in upper case as
                    in the stylized form of the logo, stick to the official form
                    as per the privacy policy.
                  </span>
                </p>
                <p className={styles.block_444}>Correct: LEGO</p>
                <p className={styles.block_90}>Incorrect: Lego</p>
                <p className={styles.block_445}>
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
                <p className={styles.block_151}>Correct: Ok Google</p>
                <p className={styles.block_139}>Correct: Ok Google Now</p>
                <p className={styles.block_139}>
                  Correct: Ok Google, texto a María: "Nos vemos."
                </p>
                <p className={styles.block_139}>Correct: Okay.</p>
                <p className={styles.block_91}>Correct: Okay, David.</p>
                <p className={styles.block_446}>
                  <span className={styles.text_25}>
                    Agreed spelling for brand names.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Adobe Flash Player </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>4shared </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>4Square </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>4Tube </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Air Liquide </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>AhorraMas </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Amazon </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Anatel </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Android Market </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Andro4all</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Anima Tunes </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>AniTube </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>AnuncioSex </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Anzuclub </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>APN Brasil </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Argos </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>ask.fm </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Avast </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Badoo </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Baixaki </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Battlefield </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>BazaaR Android </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>BBB 12 </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>BBC </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>beeg </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Big-Lar </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Bike Race </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>BlackBerry </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>BlackMart </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Blu-ray </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Bluetooth </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>BravoTube </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Brico Depôt </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Buscapé </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Cadena SER </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Canal+ </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>¡Cuánto Cabrón! </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Cam4 </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Camera360 Ultimate </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>cheAuto </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Chicco </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Cine Hoyts </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>CineTube </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>craigslist </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Cumlouder </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>¡Cuánto Cabrón! </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Decathlon </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>DIA </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>DivxTotaL</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Cifra Club </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Citibank </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Click Hotéis </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Click Jogos </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>clicRBS </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Climatempo </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Clube dos Videos </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Coca-Cola </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>CompreAuto </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>elEconomista </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>elRellano </span>
                </p>
                <p className={styles.block_455}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>CoolROM </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>esRadio </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Corinthians </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>CorreioWeb </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>FisgonClub </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>FLEX </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Fotocasa </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>CrossFire </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>CrossFox </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Ibercaja </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>idealista </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>IKEA </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>IMDb </span>
                </p>
                <p className={styles.block_456}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>INTERSPORT </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>CyberCopy </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>DDTank </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>DescontAgora </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Detran </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Dolce &amp; Gabbana </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Domino's </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>DragonVale </span>
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>DreamWorks </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Dulux </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>laCaixa </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Earth </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>eBay </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>EcoSport </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El Diablito</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>m1nutouno </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>MAPFRE </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Marca </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Meccano </span>
                </p>
                <p className={styles.block_461}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>MercadoLibre </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Meteocat </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Miapuesta </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>elRellano </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>ElRubiusOMG </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>ESPN </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Everfriends </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Evernote </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Explicita Videos </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>FACAMP </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Facebook </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Face </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Faceporn </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>FAETEC </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Milanuncios </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>MotoGP </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Mycook </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Onda Cero </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>OpenCor </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Famiglia Mancini </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Fiat </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>FIFA </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>FisgonClub </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>FLORAM </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Fórmula 1 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Parquesur </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Galaxy </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Galaxy S </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Galaxy Note </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Galaxy S II Lite </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Galaxy mini </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Galaxy S4 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Gameloft </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>GameVicio </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Gazetaweb</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>GBarbosa </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Gilette </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Globo Esporte </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Globo News </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Gmail </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google Apps </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google Images </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google Imagens </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google Now </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google Livros </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google Mail </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google Maps </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google Mapas </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google Play </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google Search </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google BazaaR </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Google Tradutor </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Groupon </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>GTalk </span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Habbinfo Hotelig </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Habib's </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Halfords </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Hyundai </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>i-Emote </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>ID! Free </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>idealista </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>iG </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>iGO </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>IKEA </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>IMDb </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Instagram </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Intelbras </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>INTERSPORT </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>
                    Irados do Club Penguin{' '}
                  </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Jobcentre Plus </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>jogo do bicho </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>KaBuM! </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Kboing</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Kekanto </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Kinect </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Kit Kat </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>laCaixa </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Lalaloopsy </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Lancenet! </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Lâncome </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>LEGO </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>LitoralCar </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Livemocha </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>lojas Americanas </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Lotofácil </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Lotomania </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Make B. </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>MAPFRE </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Marca </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Mario Bros. </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Massey Fergusson </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>MasterCard </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>McDonald's </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Mega-Sena </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Megacubo </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>MercadoLibre </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>MercadoPago </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Mercedes-Benz </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Meteocat </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Miapuesta </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>microSD </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Mierdijuegos </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Milanuncios </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>MiniMundos </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>miniSD </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>MiniMundos </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>MKV Android </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>mobile9 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>MobiTV </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>ModFace </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Mormaii </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>MotoGP</span>
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Motorola RAZR </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>MSN </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Multishow </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>MusicLand </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Mycook </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>m1nutouno </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Naproxeno </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Navfree </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>NeroVision </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>NET </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>NetCartas </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Netflix </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Netshoes </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Netvasco </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Nisshimbo </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>NoTex </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>O Globo </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Ojogos </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>OLX </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Onda Cero </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>OpenCor </span>
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Outback Steakhouse </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>OxyElite </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>PDF </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Photoshop </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>PIC Micro </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>PlayerPro </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>PlayStation 3 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Poringa! </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>PSafe </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Quadra 2 </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>QueVideos </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>R7 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>RADAR64 </span>
                </p>
                <p className={styles.block_474}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Rádio Maanaim </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>RadioShack </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Pizza Dez Dez </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Poringa! </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>PornHub</span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>porta dos fundos </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Pou </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>PowerPoint </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>RadioShack </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>RealPlayer </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>RedeTV! </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>RedTube </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Renfe </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Rio+20 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Rock in Rio </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>RockPlayer </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Rojadirecta </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Rubias19 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Sainsbury's </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Samsung Chat </span>
                </p>
                <p className={styles.block_476}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Samsung Galaxy </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Samsung Galaxy SII </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Samsung Galaxy S III </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Samsung Galaxy S 4 </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>SEAT </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Segundamano </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Senac </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>SENAI </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>JEFIT </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Sesc </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>SEUR </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>SexoTube </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Sexy Hot </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Shazam </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Shoptime </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Six-Guns </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>SKY </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>SkyBlock </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>SkyDrive </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Skype </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>SongPop </span>
                </p>
                <p className={styles.block_477}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Sony Cyber-shot </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>SoundCloud </span>
                </p>
                <p className={styles.block_478}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>SporTV</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>SPTrans </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Stardoll </span>
                </p>
                <p className={styles.block_479}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Street View </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Supercor </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>S Voice </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>TalkTalk </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>TAM </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Tamigo </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Taringa! </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Tele Sena </span>
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Telecine Play </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>TelexFREE </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>TIM </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>tiraMillas </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>T-Mobile </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Toddynho </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>TomTom </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Transformice </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Trial Xtreme 2 </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>TripAdvisor </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>TubeMate </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Tubidy </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Tumblr </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>TV FOX </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Twitter </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Umizoomi </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>UniCEUB </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>UOL </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>US Open </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>UVAonline </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Valecard </span>
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>ViaMichelin </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Videolog </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Visa Vale </span>
                </p>
                <p className={styles.block_484}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Vodafone yu: </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>VoIP </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Walmart </span>
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>WebMotors </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Werevertumorro</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>WhatsApp </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Wii </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Wikipédia </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>WindGURU </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>WinZip </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>X Games </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>X-Tenso </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Xbook </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Xbox </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>xHamster </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Xheken </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>XNXX </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Xoom 2 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Xperia </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Xvideos </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>xxbuceta </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>XXX </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Yahoo </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Yahoo Mail </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>YouPorn </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>YouToba </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>YouTube </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>YouTube Original </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>ZDbox </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Zello </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Zona Sul </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Zona Norte </span>
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={styles.block_486}>
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
                <p className={styles.block_487}>
                  <span className={styles.text_2}>
                    For Spanish media titles, capitalize the first word of media
                    titles, unless another rule on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    capitalization applies. For English media titles, capitalize
                    all title words except articles,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    conjunctions and prepositions unless they are the first
                    word.
                  </span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.text_25}>
                    Do not use quotation marks for media titles.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_216}>Correct: Skyfall</p>
                <p className={styles.block_139}>Correct: El País</p>
                <p className={styles.block_489}>
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
                <p className={styles.block_89}>
                  Correct: Quiero descargar Shall we dance?
                </p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: ¿Cuánto se puede ganar en ¿Quién{' '}
                  </span>
                </p>
                <p className={styles.block_258}>quiere ser millonario?</p>
                <p className={styles.block_490}>
                  <span className={styles.text_25}>
                    Very common alternate or shortened versions of titles should
                    also be capitalized.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_19}>
                    Correct: Transformers 2{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: for "Transformers: Revenge of the Fallen"
                    </span>
                  </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_19}>
                    Correct: Star Wars Episode III{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: for "Star Wars Episode III: Revenge of the
                      Sith"
                    </span>
                  </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_19}>
                    Correct: What Does the Fox Say?{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: for "The Fox (What Does the Fox Say?)"
                    </span>
                  </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_19}>
                    Correct: The Next Generation{' '}
                  </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: for "Star Trek: The Next Generation"
                    </span>
                  </span>
                </p>
                <p className={styles.block_495}>
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
                <p className={styles.block_496}>
                  <span className={styles.calibre2}>
                    Correct: YouTube We are the champions my friends, and we'll
                    keep on fighting till the end.
                  </span>
                </p>
                <p className={styles.block_497}>
                  <span className={styles.calibre2}>
                    Incorrect: YouTube We Are the Champions my friends, and
                    we'll keep on fighting till the end.
                  </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.calibre2}>
                    Incorrect: YouTube We Are the Champions My Friends And We'll
                    Keep on Fighting till the End.
                  </span>
                </p>
                <p className={styles.block_499}>
                  Correct: ground control to Major Tom
                </p>
                <p className={styles.block_500}>
                  <span className={styles.calibre2}>
                    Explanation: They are quoting lyrics that just happen to
                    contain the title; format as full sentence.
                  </span>
                </p>
                <p className={styles.block_501}>
                  <span className={styles.text_2}>
                    Treat foreign titles the same way as titles in the
                    transcription language if you{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>understand them.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_25}>
                    Choose the following spellings of media titles.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>1000 maneras de morir </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>12 años de esclavitud </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Ai se eu te pego </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Angry Birds </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Battlefield </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Bíblia sagrada </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Caperucita roja</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Chrono Trigger </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El conde Duckula </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Cri-Crí </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Cuarto milenio </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>D2K </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Déjà vu </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Día de los Muertos </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Crónicas vampíricas </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Dora, la exploradora </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Dragon Ball Z </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>
                    El asombroso mundo de Gumball{' '}
                  </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>El chapulín colorado </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El chavo del 8 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El gato con botas </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>
                    El gato en el sombrero{' '}
                  </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>The Cat in the Hat </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Spider-Man </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>
                    El Asombroso Mundo de Gumball{' '}
                  </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>El lonje moco </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El patito feo </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El payaso Eso </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El payaso Plin Plin </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El pollito Pío </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El ratón vaquero </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El Rayo McQueen </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El rey león </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El tamborilero </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El último samurái </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El zancudo draculón </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Frontline Commando </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Fruit Ninja </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>God of War III </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Huevocartoon </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Invizimals </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Johnny Test </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Jorge, el curioso </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>La chupitos </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>La familia P. Luche </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>La gallina turuleca</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>La llorona </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>La naranja molesta </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>La pantera rosa </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>La princesa Sofía </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>La vaca lechera </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Left 4 Dead 2 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Linterna verde </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Looney Tunes </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Los backyardigans </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Los dinosaucers </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Los padrinos mágicos </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Los pitufos </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Luluyesyes </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Memín Pinguín </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Mierdijuegos </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Mimoso Ratón </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Minions </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Mira quién baila </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Mortal Kombat </span>
                </p>
                <p className={styles.block_508}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Naruto Shippuden </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Niña repelente </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>oppa Gangnam Style </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Osito gominola </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Osos amorosos </span>
                  <span className={styles.text_43}>● </span>
                  <span className={styles.text_44}>Oso traposo </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Pac-Man </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Patito feo </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Pelusa Caligari </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Peppa Pig </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Pin Pon </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Planeta vegetta </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Pretty Woman </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Ranma 1/2 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Ratatouille </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Rayo McQueen </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Resident Evil </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Scooby-Doo </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Slenderman </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>El hombre delgado</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>SlendyTubbies </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Soccer Superstars </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Campeones </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Tortugas ninja </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Trollface </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Wise Up </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>World of Warcraft </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Yu-Gi-Oh! </span>
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={styles.block_511}>
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
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_19}>Correct: Pereira </span>
                  <span className={styles.text_20}>Incorrect: Pereyra </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>pereira </span>
                  <span className={styles.text_21}>" </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.calibre2}>
                    Explanation: Pereira has more hits than Pereyra.
                  </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_25}>
                    Choose the following spellings for multiple spellings.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_337}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>a capela </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>brandy </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>champagne </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>chao </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>cognac </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>CD </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>DVD </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Dj </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>DJ </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>email </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>guion </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Harlem Shake </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Hi-Fi </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>hip-hop </span>
                </p>
                <p className={styles.block_341}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>internet</span>
                </p>
                <p className={styles.block_345}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>MP3 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>MP4 </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>OK </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>online </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>raio X </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>raios X </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>reggaeton </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>ROM </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>sexy </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>sexys </span>
                </p>
                <p className={styles.block_339}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>SMS </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>VIP </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>VIPs </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>vodka </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>Wi-Fi </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>whiskey </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>X-Ray </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_2}>
                    Guess the most likely spelling given the context. When
                    context is insufficient, rely on{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>Google hits.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>Correct: Luismi móvil</p>
                <p className={styles.block_90}>Incorrect: Luis mi móvil</p>
                <p className={styles.block_91}>Correct: llevárselas</p>
                <p className={styles.block_90}>Incorrect: llevarse las</p>
                <p className={styles.block_516}>
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
                <p className={styles.block_89}>Correct: Quercus robur</p>
                <p className={styles.block_176}>Correct: E. coli</p>
                <p className={styles.block_139}>Correct: Metronidazole</p>
                <p className={styles.block_517}>
                  <span className={styles.text_2}>
                    Write commonly accepted contractions as usual. Transcribe
                    contractions when you{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>hear them spoken.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>boli </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>cole </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>aventi </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>fisio </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>mini </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>tele </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>expo </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>nick </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>moto </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>play </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>intro </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>illo </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>finde </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>radio </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>bio </span>
                </p>
                <p className={styles.block_338}>
                  <span className={styles.text_39}>● </span>
                  <span className={styles.text_40}>mija </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_26}>
                    Contractions that are not commonly accepted should be
                    transcribed as full words.
                  </span>
                  <span className={styles.text_27}> </span>
                  <span className={styles.text_28}>
                    Correct: Me he equivocado.{' '}
                  </span>
                  <span className={styles.text_41}>Example audio: " </span>
                  <span className={styles.text_42}>m'equivocao </span>
                  <span className={styles.text_41}>" </span>
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_19}>Correct: He llegado. </span>
                  <span className={styles.text_20}>
                    Incorrect: He llegao.:{' '}
                  </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_21}>Example audio: " </span>
                  <span className={styles.text_22}>he llegao </span>
                  <span className={styles.text_21}>"</span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_19}>
                    Correct: He estado todo el día para los nenes.{' '}
                  </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>
                    he 'stao to'l día pa' los nenes{' '}
                  </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_2}>
                    For Catalan, Galician and some infrequent Spanish words,
                    words apostrophe is{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>transcribed as usual.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_151}>Correct: Turó de l'home</p>
                <p className={styles.block_139}>Correct: O'Donnell</p>
                <p className={styles.block_523}>
                  <span className={styles.text_25}>
                    Slang and colloquialisms should be transcribed.
                  </span>
                  <span className={styles.text_21}> </span>
                </p>
                <p className={styles.block_216}>
                  <span className={styles.calibre2}>
                    Correct: Estoy todo chungo y no voy a ir al
                  </span>
                </p>
                <p className={styles.block_524}>curro.</p>
                <p className={styles.block_139}>
                  <span className={styles.calibre2}>
                    Correct: Coloca bien el retro que no sea que
                  </span>
                </p>
                <p className={styles.block_424}>alguien se lo cargue.</p>
                <p className={styles.block_525}>
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
                <p className={styles.block_526}>
                  <span className={styles.text_19}>Correct: llama </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>yama </span>
                  <span className={styles.text_32}>" </span>
                  <span className={styles.text_19}>Correct: zapato </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>sapato </span>
                  <span className={styles.text_32}>" </span>
                  <span className={styles.text_19}>Correct: los tuyos </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>loh tuyoh </span>
                  <span className={styles.text_32}>"</span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_19}>Correct: mujer </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>muher </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_19}>Correct: Madrid </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>madrit </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_243}>
                  <span className={styles.text_19}>Correct: álbol </span>
                  <span className={styles.text_32}>Example audio: " </span>
                  <span className={styles.text_33}>árbol </span>
                  <span className={styles.text_32}>" </span>
                </p>
                <p className={styles.block_527}>
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
                <p className={styles.block_528}>
                  <span className={styles.text_19}>Correct: Souk Abdali </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre2}>
                      Explanation: User says "Souk Abdali". Transcriber searches
                      "sukabdali", finds correct
                    </span>
                  </span>
                </p>
                <p className={styles.block_529}>
                  results. Transcribe Souk Abdali.
                </p>
                <p className={styles.block_530}>
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
                <p className={styles.block_151}>Correct: serpientos</p>
                <p className={'text'}>
                  <span className={styles.text_45}>
                    Transcribe onomatopoeia when clearly spoken. Otherwise, use
                    the Unintelligible label{' '}
                  </span>
                  <span className={styles.text_46}> </span>
                  <span className={styles.text_45}>
                    as instructed in: Longform generic rules &gt; Unintelligible
                    or foreign or singing.
                  </span>
                  <span className={styles.text_46}> </span>
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
