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
            <PageContentHeader currentPage="longform Swedish" />
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
                <p className={styles.block_1086}>
                  <span className={styles.text_4}>Correct: IKEA i k e a </span>
                  <span className={styles.text_5}>
                    Explanation: Person said "IKEA" and then{' '}
                  </span>
                </p>
                <p className={styles.block_1087}>spelled it.</p>
                <p className={styles.block_1088}>
                  <span className={styles.text_4}>
                    Correct: Hur hittar jag till c o o p?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    hur hittar jag till c o o p{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1089}>
                  <span className={styles.text_4}>
                    Correct: ord som slutar med i n g{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    ord som sluter med i n g{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1090}>
                  Correct: a b c d e f g h i j k l m n o p q r s t u v w
                </p>
                <p className={styles.block_454}>x y z å ä ö</p>
                <p className={styles.block_1091}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_1092}>
                  <span className={styles.text_4}>Correct: amazon.co.uk </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    amazon punkt c o punkt u k{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1093}>
                  <span className={styles.text_4}>Correct: VD </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>v d </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1094}>
                  Correct: Iphone, USA, IBM, MP3
                </p>
                <p className={styles.block_1095}>
                  For uses of single letters, referring to the letters
                  themselves, use lower case and the suffixes ":n", ":en", ":et"
                  when needed. When a letter refers to some other meaning
                  associated with it, a place for instance, it should be written
                  in uppercase letters and complemented with the above suffixes
                  if necessary.
                </p>
                <p className={styles.block_1096}>
                  Correct: ord som börjar på j
                </p>
                <p className={styles.block_1097}>
                  <span className={styles.text_4}>
                    Correct: Från punkt A till punkt B.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The speaker is talking about{' '}
                  </span>
                </p>
                <p className={styles.block_1098}>
                  locations, not the actual letters a and b.
                </p>
                <p className={styles.block_1099}>
                  Correct: Hur många b:n är det i abborre?
                </p>
                <p className={styles.block_262}>
                  Correct: Hur många s är det i ordet "dress"?
                </p>
                <p className={styles.block_1100}>
                  Correct: Det där F:et som jag fick på provet
                </p>
                <p className={styles.block_1101}>känns ganska onödigt nu.</p>
                <p className={styles.block_1102}>
                  Explanation: The speaker is talking about a
                </p>
                <p className={styles.block_1103}>
                  grade, not the actual letter f.
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_208}>
                  Correct: heh, ha, haha, hahaha, hehe, hehehe,
                </p>
                <p className={styles.block_1106}>
                  boo hoo, boo hoo hoo, lalala
                </p>
                <p className={styles.block_1107}>
                  <span className={styles.text_4}>Correct: hahaha </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>ha ha ha ha ha </span>
                  <span className={styles.text_6}>" </span>
                </p>
              </div>
              <div id="proper-names">
                <p className={'haeding'}>Proper names</p>
                <p className={'text'}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document. For names with multiple possible spellings,
                  choose the most basic for according to normal Swedish
                  letter-to-sound conventions, e.g. "Oskar" and not "Oscar".
                </p>
                <p className={styles.block_1110}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_1111}>
                  <span className={styles.text_4}>
                    Correct: Rickard Sjöberg{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Assuming the public figure, don't
                  </span>
                </p>
                <p className={styles.block_1067}>spell e.g. "Rikard".</p>
                <p className={styles.block_1112}>
                  <span className={styles.text_4}>Correct: Efva Attling </span>
                  <span className={styles.text_5}>
                    Explanation: The celebrity spells her name{' '}
                  </span>
                </p>
                <p className={styles.block_1113}>
                  differently than the more common "Eva".
                </p>
                <p className={styles.block_1114}>
                  Only the following special characters are allowed in Swedish
                  transcriptions: å, ä, ö, é, à, ü, Å, Ä, Ö, Ü, À and É. If
                  proper names, loan-words or foreign words include diacritics
                  uncommon in Swedish (æ, ø, ç, î, è etc), do not include them
                  in your spelling. If unsure about how to spell without
                  diacritics, refer to Swedish news articles, official city or
                  celebrity websites, the Swedish Wikipedia, Google Maps, or
                  knowledge cards (the answer box above the list of Google
                  Search results).
                </p>
                <p className={styles.block_1115}>Correct: Zlatan Ibrahimovic</p>
                <p className={styles.block_1116}>
                  Incorrect: Zlatan Ibrahimović
                </p>
                <p className={styles.block_968}>Correct: creme fraiche</p>
                <p className={styles.block_1117}>Incorrect: crème fraîche</p>
                <p className={styles.block_688}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Swedish Google search hits or search hits on
                  Birthday.se.
                </p>
                <p className={styles.block_1118}>Correct: Ring Sofia.</p>
                <p className={styles.block_1119}>Incorrect: Ring Sophia.</p>
                <p className={styles.block_1120}>
                  Explanation: Searching for "Sofia" (without
                </p>
                <p className={styles.block_1121}>
                  quotation marks) yields more results than
                </p>
                <p className={styles.block_1122}>"Sophia".</p>
                <p className={styles.block_982}>Correct: Ring Karlsson.</p>
                <p className={styles.block_1123}>Incorrect: Ring Karlson.</p>
                <p className={styles.block_1124}>
                  Explanation: Searching for "Karlsson" (without
                </p>
                <p className={styles.block_1121}>
                  quotation marks) yields more results than
                </p>
                <p className={styles.block_1125}>"Karlsson".</p>
                <p className={styles.block_1126}>
                  <span className={styles.text_4}>
                    Correct: Sofia Karlsson{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Search full names to see if they
                  </span>
                </p>
                <p className={styles.block_1127}>
                  refer to a celebrity. If the full name does not
                </p>
                <p className={styles.block_1128}>
                  belong to a celebrity, use the most common
                </p>
                <p className={styles.block_1129}>
                  spelling for each part of the name (e.g. search
                </p>
                <p className={styles.block_1130}>"Sofia" and "Karlsson").</p>
                <p className={styles.block_1131}>
                  Holiday names, and names of months and weekdays should never
                  be capitalized, unless they're in the beginning of a sentence.
                  Exceptions are made for holiday names that start with a proper
                  name.
                </p>
                <p className={styles.block_1132}>
                  Correct: Jag längtar till julafton.
                </p>
                <p className={styles.block_1133}>
                  Correct: Det känns som att november aldrig tar
                </p>
                <p className={styles.block_1134}>slut.</p>
                <p className={styles.block_970}>
                  Correct: Jag ska passa på att njuta av
                </p>
                <p className={styles.block_1135}>
                  ledigheten under Kristi himmelfärdsdag.
                </p>
                <p className={styles.block_1136}>
                  Correct: Snart är det fredag!
                </p>
                <p className={styles.block_1137}>
                  Sometimes new words are built on already existing, well-known,
                  proper names. Compound words that contain a proper name should
                  always be spelled with an initial uppercase letter, unless the
                  proper name has lost its character as a proper name in the new
                  context. If unclear, look for spellings in Swedish newspapers,
                  Wikipedia etc. or default to lowercase.
                </p>
                <p className={styles.block_1138}>Correct: Uppsalabo</p>
                <p className={styles.block_1139}>Incorrect: uppsalabo</p>
                <p className={styles.block_940}>Correct: Bamsespel</p>
                <p className={styles.block_1140}>Incorrect: bamsespel</p>
                <p className={styles.block_986}>
                  Explanation: Obviously the word "Bamse" refers
                </p>
                <p className={styles.block_1141}>
                  to the fictional character named Bamse.
                </p>
                <p className={styles.block_1142}>Correct: legospel</p>
                <p className={styles.block_1143}>Incorrect: Legospel</p>
                <p className={styles.block_1144}>
                  Explanation: The word "lego" has come to refer
                </p>
                <p className={styles.block_1145}>
                  to small toy building blocks in general, so here
                </p>
                <p className={styles.block_346}>
                  the connection to the proper name Lego isn't as
                </p>
                <p className={styles.block_1146}>
                  clear as in the previous example.
                </p>
                <p className={styles.block_1147}>Correct: barbiedocka</p>
                <p className={styles.block_1148}>
                  Explanation: The word "barbiedocka" has also
                </p>
                <p className={styles.block_1119}>Incorrect: Barbiedocka</p>
                <p className={styles.block_1149}>
                  come to refer to similar dolls from other brands
                </p>
                <p className={styles.block_1150}>
                  than Barbie (such as Sindy or maybe Bratz) and
                </p>
                <p className={styles.block_1151}>
                  therefore the "barbie"-part has lost its weight as
                </p>
                <p className={styles.block_1152}>
                  a proper name in this context.
                </p>
                <p className={styles.block_1153}>Correct: Nazityskland</p>
                <p className={styles.block_1154}>
                  Explanation: Sometimes the original proper
                </p>
                <p className={styles.block_1155}>Incorrect: nazi-Tyskland</p>
                <p className={styles.block_1119}>Incorrect: nazityskland</p>
                <p className={styles.block_1156}>
                  name is not the first part of the compound
                </p>
                <p className={styles.block_1157}>
                  word, in those cases the capital letter is moved
                </p>
                <p className={styles.block_1158}>
                  to the beginning of the new word.
                </p>
              </div>
              <div id="brand-and-product">
                <p className={'heading'}>Brand and product</p>
                <p className={styles.block_1160}>
                  Brand and product names should primarily be formatted
                  according to "Svenska skrivregler", thus avoiding commercial
                  spelling conventions using e.g. CamelCasing, all caps on names
                  that are not pronounced as letter sequences or compounding
                  entire phrases into one word. Check Swedish Wikipedia as a
                  first source. If no hits there, use main Swedish newspapers.
                  As a last resort use the format most commonly formatted on the
                  entity's website (especially official documents).
                </p>
                <p className={styles.block_1161}>
                  Correct: Han jobbar på Amazon.
                </p>
                <p className={styles.block_1162}>
                  Correct: Jag hörde att Yahoo och Ebay just
                </p>
                <p className={styles.block_637}>kom överens.</p>
                <p className={styles.block_676}>
                  Incorrect: Jag hörde att Yahoo! och eBay just
                </p>
                <p className={styles.block_1163}>kom överens.</p>
                <p className={styles.block_1164}>
                  Correct: Jag äter ofta på Burger King och
                </p>
                <p className={styles.block_1165}>Subway.</p>
                <p className={styles.block_1166}>Correct: Youtube</p>
                <p className={styles.block_1167}>Incorrect: YouTube</p>
                <p className={styles.block_1168}>Correct: Djur &amp; Natur</p>
                <p className={styles.block_1169}>Incorrect: Djur&amp;Natur</p>
                <p className={styles.block_1170}>Correct: craigslist</p>
                <p className={styles.block_1171}>Correct: IKEA</p>
                <p className={styles.block_1172}>Correct: ICA</p>
                <p className={styles.block_1173}>Correct: COOP</p>
                <p className={styles.block_1174}>Correct: FIFA</p>
                <p className={styles.block_1175}>
                  <span className={styles.text_4}>Correct: SAS </span>
                  <span className={styles.text_5}>
                    Explanation: Acronym sometimes pronounced{' '}
                  </span>
                </p>
                <p className={styles.block_1176}>
                  as a word and sometimes as a letter sequence.
                </p>
                <p className={styles.block_1177}>Correct: Ipod</p>
                <p className={styles.block_1178}>Incorrect: iPod</p>
                <p className={styles.block_1179}>
                  Explanation: Avoid the marketing version
                </p>
                <p className={styles.block_463}>
                  spelling since this word is incorporated into
                </p>
                <p className={styles.block_1180}>Swedish as Ipod.</p>
                <p className={styles.block_1181}>Correct: edIn</p>
                <p className={styles.block_1182}>
                  <span className={styles.text_4}>Correct: Burger King </span>
                  <span className={styles.text_5}>
                    Explanation: Do not spell "Burger King" all in
                  </span>
                </p>
                <p className={styles.block_1183}>
                  upper case as in the stylized form of the logo,
                </p>
                <p className={styles.block_1184}>
                  Incorrect: BURGER KING stick to the official form as per the
                  privacy
                </p>
                <p className={styles.block_1185}>policy.</p>
                <p className={styles.block_1186}>Correct: LEGO</p>
                <p className={styles.block_1187}>Incorrect: Lego</p>
                <p className={styles.block_391}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_487}>Correct: Ok Google</p>
                <p className={styles.block_1188}>Correct: Ok Google Now</p>
                <p className={styles.block_224}>
                  Correct: Ok Google, var ligger Coffeehouse by
                </p>
                <p className={styles.block_1165}>George?</p>
                <p className={styles.block_1136}>Correct: Ok Google, pumpor</p>
                <p className={styles.block_1189}>Correct: Okej.</p>
                <p className={styles.block_1190}>Correct: Okej, David.</p>
                <p className={styles.block_378}>
                  Correct: Okej Pia, nu går vi.
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  For spelling of media titles, first refer to Swedish Wikipedia
                  and/or Swedish newspapers. Follow the most commonly used
                  spelling from these sources. If not
                </p>
                <p className={styles.block_1193}>
                  existing or too ambiguous, refer to the Google Play Store for
                  official spellings of media titles. For film/television, IMDb
                  is also available.
                </p>
                <p className={styles.block_1194}>
                  For capitalization, first refer to Swedish Wikipedia and/or
                  Swedish newspapers. Follow the most commonly used
                  capitalization from these sources. If not existing or too
                  ambiguous, refer to the Google Play Store for official
                  capitalization of media titles. For film/television, IMDb is
                  also available.
                </p>
                <p className={styles.block_1195}>
                  <span className={styles.text_4}>
                    Correct: SpongeBob SquarePants{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: This is "Svampbob Fyrkant" in{' '}
                  </span>
                </p>
                <p className={styles.block_1196}>
                  Swedish, so if spoken in English we choose the
                </p>
                <p className={styles.block_1197}>IMDb capitalization.</p>
                <p className={styles.block_1198}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_1199}>
                  Correct: Författaren till Hundraåringen som klev
                </p>
                <p className={styles.block_1200}>
                  ut genom fönstret och försvann
                </p>
                <p className={styles.block_1201}>
                  Correct: Går Skyfall fortfarande på bio?
                </p>
                <p className={styles.block_1202}>Correct: Sagan om ringen</p>
                <p className={styles.block_675}>
                  Correct: skärmbilder av Call of Duty: Black Ops
                </p>
                <p className={styles.block_1203}>
                  <span className={styles.text_13}>2 </span>
                  <span className={styles.text_14}>
                    <sub className={styles.calibre2}>
                      Correct: När började Vem vill bli miljonär? gå på
                    </sub>
                  </span>
                </p>
                <p className={styles.block_1204}>tv?</p>
                <p className={styles.block_1205}>
                  Explanation: The actual title ends with a
                </p>
                <p className={styles.block_1206}>
                  question mark, but still no quotation marks.
                </p>
                <p className={styles.block_1207}>
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
                <p className={styles.block_1208}>
                  <span className={styles.text_4}>
                    Correct: Kolla vilket år Shall we dance? kom ut.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The title is not sentence final and
                  </span>
                </p>
                <p className={styles.block_431}>
                  we leave the question mark in.
                </p>
                <p className={styles.block_1209}>
                  <span className={styles.text_4}>
                    Correct: Spela upp Dude, Where's My Car?{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The title is sentence final, we
                  </span>
                </p>
                <p className={styles.block_1210}>
                  therefore include the title's question mark but
                </p>
                <p className={styles.block_1211}>
                  add no other punctuation. That is, media title
                </p>
                <p className={styles.block_812}>
                  punctuation trumps sentence level punctuiation
                </p>
                <p className={styles.block_1056}>when in conflict.</p>
                <p className={styles.block_1212}>
                  Correct: Mitt barns favoritbok är Vem ska
                </p>
                <p className={styles.block_1027}>trösta knyttet?</p>
                <p className={styles.block_1213}>Explanation: Same as above.</p>
                <p className={styles.block_1214}>
                  <span className={styles.text_4}>
                    Correct: Slå mig hårt i ansiktet{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The name of a song, not a{' '}
                  </span>
                </p>
                <p className={styles.block_1215}>
                  sentence and therefore no punctuation.
                </p>
                <p className={styles.block_1216}>
                  <span className={styles.text_4}>
                    Correct: Förr eller senare exploderar jag{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The name of a book, not a{' '}
                  </span>
                </p>
                <p className={styles.block_1215}>
                  sentence and therefore no punctuation.
                </p>
                <p className={styles.block_1217}>
                  Correct: Min favoritbok är Förr eller senare
                </p>
                <p className={styles.block_1218}>exploderar jag.</p>
                <p className={styles.block_1219}>
                  Explanation: Here the name of the book is at the
                </p>
                <p className={styles.block_1220}>
                  end of a sentence, so punctuation is needed.
                </p>
                <p className={styles.block_1221}>
                  Very common alternate or shortened versions of titles should
                  also be capitalized.
                </p>
                <p className={styles.block_1222}>
                  <span className={styles.text_4}>
                    Correct: Transformers 2{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: for "Transformers: De besegrades
                  </span>
                </p>
                <p className={styles.block_1223}>hämnd"</p>
                <p className={styles.block_1224}>
                  <span className={styles.text_4}>
                    Correct: Star Wars episod III{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: for "Star Wars episod III: Mörkrets
                  </span>
                </p>
                <p className={styles.block_1223}>hämnd"</p>
                <p className={styles.block_1225}>
                  <span className={styles.text_4}>Correct: Nu tändas </span>
                  <span className={styles.text_5}>
                    Explanation: for "Nu tändas tusen juleljus"
                  </span>
                </p>
                <p className={styles.block_1226}>
                  <span className={styles.text_4}>
                    Correct: The Next Generation{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: for "Star trek: The Next Generation"
                  </span>
                </p>
                <p className={styles.block_1227}>
                  <span className={styles.text_4}>
                    Correct: Spela Teen Spirit av Nirvana.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Correct title is "Smells Like Teen
                  </span>
                </p>
                <p className={styles.block_1185}>Spirit".</p>
                <p className={styles.block_1228}>
                  Correct: Jag vill lyssna på Taylor Swifts
                </p>
                <p className={styles.block_1229}>Trouble.</p>
                <p className={styles.block_1230}>
                  Explanation: Correct title is "I Knew You Were
                </p>
                <p className={styles.block_1231}>Trouble".</p>
                <p className={styles.block_1232}>
                  Do not capitalize a media title that happens to occur within
                  quoted lyrics. Format lyrics that form a sentence as you would
                  a normal sentence.
                </p>
                <p className={styles.block_1233}>
                  Correct: Jag är fångad av en stormvind, fast för
                </p>
                <p className={styles.block_1234}>dig.</p>
                <p className={styles.block_1235}>
                  Incorrect: Jag är Fångad av en stormvind, fast
                </p>
                <p className={styles.block_1236}>för dig.</p>
                <p className={styles.block_483}>
                  Explanation: They are quoting lyrics that just
                </p>
                <p className={styles.block_1237}>
                  happen to contain the title; format as full
                </p>
                <p className={styles.block_1238}>sentence.</p>
                <p className={styles.block_1239}>
                  If you encounter a very common single word or phrase that also
                  happens to be a media title, err on the side of caution and
                  treat them as normal words, i.e. type in lower case letters.
                </p>
                <p className={styles.block_1240}>Correct: småkryp</p>
                <p className={styles.block_806}>Incorrect: Småkryp</p>
                <p className={styles.block_511}>
                  Explanation: Småkryp could refer to the famous
                </p>
                <p className={styles.block_718}>
                  Disney movie, but we treat it as a normal noun.
                </p>
                <p className={styles.block_1241}>Correct: modig</p>
                <p className={styles.block_1242}>Incorrect: Modig</p>
                <p className={styles.block_453}>
                  Explanation: Modig could refer to the famous
                </p>
                <p className={styles.block_1243}>
                  Disney movie, but we treat it as a normal
                </p>
                <p className={styles.block_1244}>adjective.</p>
                <p className={styles.block_1245}>
                  Capitalize English titles as done in the original language,
                  mostly that means using initial capital letters on the first
                  word of the title and on each word that isn't an article or a
                  preposition. If not sure what the English format should look
                  like, google it or look it up in Google Play Store, Spotify,
                  Itunes, Netflix, IMDb or similar. For all other foreign
                  titles,
                </p>
                <p className={styles.block_1246}>
                  stick to Swedish conventions - only initial capitals on the
                  first word of the title and on any proper names.
                </p>
                <p className={styles.block_1247}>Correct: The Hunger Games</p>
                <p className={styles.block_1248}>
                  <span className={styles.text_4}>
                    Correct: The Lord of the Rings{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The first "the" with capital letter
                  </span>
                </p>
                <p className={styles.block_372}>
                  since it is the first word, second article "the"
                </p>
                <p className={styles.block_1249}>
                  and the preposition "of" are in lower case.
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_4}>
                    Correct: Runnin' With The Devil{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Some song titles, like this one by
                  </span>
                </p>
                <p className={styles.block_1210}>
                  Van Halen, have all words initially capitalized,
                </p>
                <p className={styles.block_1250}>
                  regardless of what part of speech they are.
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_4}>
                    Correct: Farväl Falkenberg{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The word Falkenberg is capitalized
                  </span>
                </p>
                <p className={styles.block_923}>since it is a proper name.</p>
                <p className={styles.block_1251}>
                  <span className={styles.text_4}>
                    Correct: La vita e bella{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: The Italian title is written{' '}
                  </span>
                </p>
                <p className={styles.block_1210}>
                  according to Swedish conventions. Note also
                </p>
                <p className={styles.block_1252}>
                  that we cannot use the acute accented "è".
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the spelling
                  recommended in the reference dictionary for your language.
                  However, some common word spellings aren't always in the
                  dictionaries, so use your linguistic sense if the recommended
                  spellings seems very off. If possible, use google hits or a
                  corpus when unsure.
                </p>
                <p className={styles.block_1255}>Correct: schysst</p>
                <p className={styles.block_1242}>Incorrect: schyst</p>
                <p className={styles.block_1256}>
                  Explanation: "schyst" or "sjyst" is preferred by
                </p>
                <p className={styles.block_1257}>
                  SAOL, but "schysst" is definitely more common.
                </p>
                <p className={styles.block_1258}>
                  <span className={styles.text_4}>Correct: kafé </span>
                  <span className={styles.text_5}>
                    Explanation: "kafé" is preferred by SAOL.{' '}
                  </span>
                </p>
                <p className={styles.block_1259}>Incorrect: café</p>
                <p className={styles.block_1260}>
                  Guess the most likely spelling given the context. When context
                  is insufficient, rely on Google hits.
                </p>
                <p className={styles.block_1261}>Correct: Det är du värd.</p>
                <p className={styles.block_1262}>
                  <span className={styles.text_4}>Correct: värld </span>
                  <span className={styles.text_5}>
                    Explanation: There are more Google hits for
                  </span>
                </p>
                <p className={styles.block_421}>"värld".</p>
                <p className={styles.block_1263}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_1264}>Correct: multipel skleros</p>
                <p className={styles.block_1265}>Incorrect: Multipel Skleros</p>
                <p className={styles.block_1266}>Incorrect: Multipel skleros</p>
                <p className={styles.block_1267}>
                  Explanation: Illness names, unless they refer to
                </p>
                <p className={styles.block_1268}>
                  a proper name, should not be capitalized.
                </p>
                <p className={styles.block_1269}>
                  Correct: pseudotsuga menziesii
                </p>
                <p className={styles.block_1270}>
                  Incorrect: Pseudotsuga menziesii
                </p>
                <p className={styles.block_1267}>
                  Explanation: Illness names, unless they refer to
                </p>
                <p className={styles.block_1268}>
                  a proper name, should not be capitalized.
                </p>
                <p className={styles.block_1271}>Correct: akustikusneurinom</p>
                <p className={styles.block_1272}>
                  Incorrect: Akustikusneurinom
                </p>
                <p className={styles.block_1267}>
                  Explanation: Illness names, unless they refer to
                </p>
                <p className={styles.block_1268}>
                  a proper name, should not be capitalized.
                </p>
                <p className={styles.block_1273}>Correct: Aspergers syndrom</p>
                <p className={styles.block_1272}>
                  Incorrect: aspergers syndrom
                </p>
                <p className={styles.block_1274}>
                  Incorrect: Aspergers Syndrom
                </p>
                <p className={styles.block_1275}>
                  Explanation: Asperger is a proper name on its
                </p>
                <p className={styles.block_1276}>
                  own, therefore that word is capitalized.
                </p>
                <p className={styles.block_1277}>Correct: dry martini</p>
                <p className={styles.block_1140}>Incorrect: Dry Martini</p>
                <p className={styles.block_1278}>
                  Explanation: Drink and food names do not refer
                </p>
                <p className={styles.block_1276}>
                  to technical terms and should never be
                </p>
                <p className={styles.block_1279}>capitalized.</p>
                <p className={styles.block_1280}>Correct: johannesört</p>
                <p className={styles.block_1281}>Incorrect: Johannesört</p>
                <p className={styles.block_1282}>
                  Explanation: Compound word, therefore only
                </p>
                <p className={styles.block_1268}>
                  lowercase. See the section on compound
                </p>
                <p className={styles.block_1283}>words under Proper names.</p>
                <p className={styles.block_1284}>Correct: fransk bulldogg</p>
                <p className={styles.block_1285}>Incorrect: Fransk Bulldogg</p>
                <p className={styles.block_1286}>Incorrect: fransk Bulldogg</p>
                <p className={styles.block_1287}>
                  Explanation: Plant and animal species should
                </p>
                <p className={styles.block_1288}>not be capitalized.</p>
                <p className={styles.block_1289}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_1290}>Correct: Kom med, vetja.</p>
                <p className={styles.block_1291}>
                  Incorrect: Kom med, vet jag.
                </p>
                <p className={styles.block_1292}>Correct: nja</p>
                <p className={styles.block_1293}>Correct: snygga pjucks</p>
                <p className={styles.block_1294}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.
                </p>
                <p className={styles.block_1295}>Correct: Tro't eller ej.</p>
                <p className={styles.block_423}>
                  <span className={styles.text_4}>Correct: På'n bara. </span>
                  <span className={styles.text_5}>
                    Explanation: Speaker clearly said two distinct
                  </span>
                </p>
                <p className={styles.block_1185}>words.</p>
                <p className={styles.block_1296}>Correct: Gör't!</p>
                <p className={styles.block_1297}>
                  Contractions that are not commonly accepted should be
                  transcribed as full words.
                </p>
                <p className={styles.block_1298}>
                  <span className={styles.text_4}>
                    Correct: Ska du på konserten ikväll?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    skaru på konserten ikväll{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1299}>
                  <span className={styles.text_4}>
                    Correct: Vi ska äta middag.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>vi ska äta midda </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1300}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_1301}>
                  <span className={styles.text_4}>Correct: Gangnam Style </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>gangdam style </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1302}>
                  <span className={styles.text_4}>Correct: meteorolog </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>metrolog </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1303}>
                  <span className={styles.text_4}>
                    Correct: Var är närmsta bibliotek?{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>
                    var är närmsta biblotek{' '}
                  </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1304}>
                  <span className={styles.text_4}>
                    Correct: Vi ses i Stockholm.{' '}
                  </span>
                  <span className={styles.text_6}>Example audio: " </span>
                  <span className={styles.text_7}>vi seth i thockholm </span>
                  <span className={styles.text_6}>" </span>
                </p>
                <p className={styles.block_1305}>
                  Explanation: spoken with a lisp
                </p>
                <p className={styles.block_1003}>
                  <span className={styles.text_4}>
                    Correct: Vilken fin byrå ni har köpt{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Person said "purå" in Finnish{' '}
                  </span>
                </p>
                <p className={styles.block_1079}>accent.</p>
                <p className={styles.block_1306}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_1307}>
                  <span className={styles.text_4}>
                    Correct: Det här är en kasastrof.{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: even if they meant "katastrof".
                  </span>
                </p>
                <p className={styles.block_1308}>
                  <span className={styles.text_4}>
                    Correct: Köp lite pecanmandlar{' '}
                  </span>
                  <span className={styles.text_5}>
                    Explanation: Unsure whether speaker intended
                  </span>
                </p>
                <p className={styles.block_1309}>
                  to say "pecannötter" or "mandlar", but clearly
                </p>
                <p className={styles.block_1310}>
                  articulated and easy to spell.
                </p>
                <p className={styles.block_1311}>
                  Correct: den långaste av alla
                </p>
                <p className={styles.block_1312}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first perform
                  a Google search for the word. If there is a clear candidate,
                  transcribe that word.
                </p>
                <p className={styles.block_1313}>
                  <span className={styles.text_4}>Correct: Kaloli </span>
                  <span className={styles.text_5}>
                    Explanation: User says "Kaloli". This might
                  </span>
                </p>
                <p className={styles.block_1314}>
                  sound like nonsense at first, but the transcriber
                </p>
                <p className={styles.block_1315}>
                  guesses the spelling "kalolli" and is by
                </p>
                <p className={styles.block_1316}>
                  corrected Google Search to "Kaloli", a gasoline
                </p>
                <p className={styles.block_1317}>
                  tanker and place in Hawaii. Transcribe Kaloli.
                </p>
                <p className={styles.block_1318}>
                  <span className={styles.text_4}>Correct: Souk Abdali </span>
                  <span className={styles.text_5}>
                    Explanation: User says "Souk Abdali".{' '}
                  </span>
                </p>
                <p className={styles.block_1319}>
                  Transcriber searches "sukabdali", finds correct
                </p>
                <p className={styles.block_1320}>
                  results. Transcribe Souk Abdali.
                </p>
                <p className={styles.block_1321}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_1322}>Correct: skrånkelfnusning</p>
                <p className={styles.block_1323}>
                  <span className={styles.text_15}>
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
