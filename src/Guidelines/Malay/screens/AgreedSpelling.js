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
            <PageContentHeader currentPage="longform Malay" />
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
                <p className={styles.block_635}>
                  <span className={styles.text_4}>
                    Correct: Tesco t e s c o{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Person said "tesco" and then{' '}
                  </span>
                </p>
                <p className={styles.block_973}>spelled it.</p>
                <p className={styles.block_974}>
                  <span className={styles.text_4}>
                    Correct: Bagaimana caranya ke p e t r o n a s?{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    bagaimana caranya ke p e t r o{' '}
                  </span>
                </p>
                <p className={styles.block_975}>
                  <span className={styles.text_1}>n a s </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_976}>
                  <span className={styles.text_4}>
                    Correct: kata-kata yang berawalan se s e{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    kata-kata yang berawalan se s{' '}
                  </span>
                </p>
                <p className={styles.block_977}>
                  <span className={styles.text_1}>e </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_978}>
                  Correct: a b c d e f g h i k l m n o p q r s t u v w x
                </p>
                <p className={styles.block_979}>y z</p>
                <p className={styles.block_980}>
                  Explanation: spelled out alphabet
                </p>
                <p className={styles.block_981}>
                  <span className={styles.text_4}>Correct: amazon.com </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>amazon dot k o m </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_982}>
                  <span className={styles.text_4}>Correct: ASN </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>a s n </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_983}>
                  Correct: Semua opsyen IKKL September 760
                </p>
                <p className={styles.block_984}>
                  membentuk satu rangkaian opsyen.
                </p>
                <p className={styles.block_985}>
                  Explanation: spelled out "i k k l"
                </p>
                <p className={styles.block_986}>
                  <span className={styles.text_4}>Correct: MES </span>
                  <span className={styles.text_9}>
                    Explanation: Pronounced the word "MES", or{' '}
                  </span>
                </p>
                <p className={styles.block_987}>spelled out "m e s".</p>
                <p className={styles.block_988}>
                  <span className={styles.text_4}>Correct: AIM </span>
                  <span className={styles.text_9}>
                    Explanation: Pronounced the word "AIM", or{' '}
                  </span>
                </p>
                <p className={styles.block_989}>spelled out "a i m".</p>
                <p className={styles.block_990}>
                  <span className={styles.text_4}>Correct: BBM </span>
                  <span className={styles.text_9}>
                    Explanation: Speaker says "b b m", or "rangkap
                  </span>
                </p>
                <p className={styles.block_991}>b m".</p>
                <p className={styles.block_992}>
                  <span className={styles.text_4}>Correct: AAA </span>
                  <span className={styles.text_9}>
                    Explanation: Speaker says "a a a", or "a tiga
                  </span>
                </p>
                <p className={styles.block_993}>kali".</p>
                <p className={styles.block_994}>
                  <span className={styles.text_4}>Correct: D'Riyadh </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>d'riyadh </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_995}>
                  <span className={styles.text_4}>Correct: dll </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>d l l </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_996}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>dan lain lain </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_997}>Correct: mp3</p>
                <p className={styles.block_998}>
                  For uses of single letters, either referring to the letter
                  itself or some other meaning associated with it, use capital
                  letters (with apostrophes for plurals).
                </p>
                <p className={styles.block_999}>
                  Correct: kata yang dimulai dengan huruf S
                </p>
                <p className={styles.block_1000}>
                  Correct: Dia memiliki golongan darah B.
                </p>
                <p className={styles.block_1001}>
                  Correct: Dia mendapat nilai A dan B.
                </p>
                <p className={styles.block_1002}>
                  Correct: Berapa banyak kata yang dimulai
                </p>
                <p className={styles.block_1003}>
                  dengan huruf D yang awak temukan?
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
                <p className={styles.block_1006}>
                  boo hoo, boo hoo hoo, lalala
                </p>
                <p className={styles.block_1007}>
                  <span className={styles.text_4}>Correct: hahaha </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>ha ha ha ha ha </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1008}>Proper names</p>
                <p className={styles.block_1009}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.
                </p>
                <p className={styles.block_1010}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_1011}>
                  <span className={styles.text_4}>Correct: UK'S </span>
                  <span className={styles.text_9}>
                    Explanation: Spelled this way in privacy policy.
                  </span>
                </p>
                <p className={styles.block_1012}>Correct: bittersweet</p>
                <p className={styles.block_1013}>
                  <span className={styles.text_4}>Correct: Anuar Zain </span>
                  <span className={styles.text_9}>
                    Explanation: The celebrity spells his name{' '}
                  </span>
                </p>
                <p className={styles.block_1014}>
                  differently than the more common "Anwar".
                </p>
                <p className={styles.block_1015}>
                  If proper names include diacritics uncommon in your language
                  (é, ü, ç, etc), do not include them in your spelling.
                </p>
                <p className={styles.block_780}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_1016}>Correct: Telepon Sophia.</p>
                <p className={styles.block_1017}>Incorrect: Telepon Sofia.</p>
                <p className={styles.block_1018}>
                  Explanation: Searching "Sophia nama" (without
                </p>
                <p className={styles.block_1019}>
                  quotation marks) yields more results than
                </p>
                <p className={styles.block_1020}>
                  "Sofia nama", even though searching "Sofia"
                </p>
                <p className={styles.block_1021}>
                  yields more results than "Sophia" because Sofia
                </p>
                <p className={styles.block_1022}>is the capital of Bulgaria.</p>
                <p className={styles.block_1023}>Correct: Afgan</p>
                <p className={styles.block_1024}>
                  Explanation: Searching "nama Afgan" yields
                </p>
                <p className={styles.block_1025}>Incorrect: Afghan</p>
                <p className={styles.block_1026}>
                  more search results than "nama Afghan". Note
                </p>
                <p className={styles.block_1027}>
                  that this example refers to the surname, not the
                </p>
                <p className={styles.block_1028}>restaurant chain.</p>
                <p className={styles.block_1029}>
                  <span className={styles.text_4}>Correct: Fariz Razali </span>
                  <span className={styles.text_9}>
                    Explanation: Search full names to see if they
                  </span>
                </p>
                <p className={styles.block_1030}>
                  refer to a celebrity. If the full name does not
                </p>
                <p className={styles.block_1031}>
                  belong to a celebrity, use the most common
                </p>
                <p className={styles.block_1032}>
                  spelling for each part of the name (e.g. search
                </p>
                <p className={styles.block_1033}>
                  "Fariz nama" and "Razali nama").
                </p>
                <p className={styles.block_1034}>
                  If a speaker makes a small mistake in a proper name,
                  capitalize it anyway as long as the difference is minimal.
                  "Minimal difference" refers to adding or dropping articles,
                  possessives, and plurals.
                </p>
                <p className={styles.block_1035}>
                  <span className={styles.text_4}>Correct: craiglist </span>
                  <span className={styles.text_9}>
                    Explanation: Actual name is "craigslist".{' '}
                  </span>
                </p>
                <p className={styles.block_512}>
                  Spell and capitalize holidays as they are formatted within the
                  answer box above the list of Google Search results. If no box
                  appears, defer to Wikipedia's formatting, and if there
                </p>
                <p className={styles.block_1036}>
                  is no Wikipedia article, use the most common format according
                  to Google Search results.
                </p>
                <p className={styles.block_579}>
                  Correct: Dia ingin pulang ke Malaysia untuk
                </p>
                <p className={styles.block_303}>
                  menyambut perayaan Hari Natal bersama-sama
                </p>
                <p className={styles.block_580}>keluarganya.</p>
                <p className={styles.block_1037}>
                  Correct: Kapan Hari Raya Puasa tahun ini?
                </p>
                <p className={styles.block_789}>
                  Correct: Selamat Hari Krismas.
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
                <p className={styles.block_1040}>
                  Correct: Saya masih bekerja di Shell.
                </p>
                <p className={styles.block_151}>
                  Correct: Samsung dan T-Mobile
                </p>
                <p className={styles.block_914}>
                  menandatangani dokumen perjanjian.
                </p>
                <p className={styles.block_1041}>
                  Correct: Kami pergi ke kantor Yahoo.
                </p>
                <p className={styles.block_1042}>Correct: YouTube</p>
                <p className={styles.block_806}>
                  Correct: Belok kanan di depan Wisma Bernama.
                </p>
                <p className={styles.block_1043}>
                  <span className={styles.text_4}>Correct: craigslist </span>
                  <span className={styles.text_9}>
                    Explanation: Officially "craigslist".{' '}
                  </span>
                </p>
                <p className={styles.block_1044}>
                  <span className={styles.text_4}>Correct: ASUS </span>
                  <span className={styles.text_9}>
                    Explanation: Officially "ASUS".{' '}
                  </span>
                </p>
                <p className={styles.block_1045}>
                  <span className={styles.text_4}>Correct: AAMCO </span>
                  <span className={styles.text_9}>
                    Explanation: Officially "AAMCO", and it also
                  </span>
                </p>
                <p className={styles.block_1046}>
                  reflects the initials of one of the founders.
                </p>
                <p className={styles.block_1047}>
                  <span className={styles.text_4}>Correct: ampm </span>
                  <span className={styles.text_9}>
                    Explanation: Officially "ampm" and is{' '}
                  </span>
                </p>
                <p className={styles.block_1048}>
                  pronounced as an initialism.
                </p>
                <p className={styles.block_1049}>Correct: e-fatwa</p>
                <p className={styles.block_1050}>
                  <span className={styles.text_4}>
                    Correct: Kami menonton YouTube.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: camel case{' '}
                  </span>
                </p>
                <p className={styles.block_1051}>Correct: Burger King</p>
                <p className={styles.block_1052}>Incorrect: BURGER KING</p>
                <p className={styles.block_1053}>
                  Explanation: Do not spell "Burger King" all in
                </p>
                <p className={styles.block_1054}>
                  upper case as in the stylized form of the logo,
                </p>
                <p className={styles.block_1055}>
                  stick to the official form as per the privacy
                </p>
                <p className={styles.block_1056}>policy.</p>
                <p className={styles.block_1057}>Correct: LEGO</p>
                <p className={styles.block_1058}>Incorrect: Lego</p>
                <p className={styles.block_372}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_513}>Correct: Ok Google</p>
                <p className={styles.block_1059}>Correct: Ok Google Now</p>
                <p className={styles.block_1060}>
                  Correct: Ok Google, di mana Stasiun KL Sentral?
                </p>
                <p className={styles.block_1061}>Correct: Ok Google, mangga</p>
                <p className={styles.block_1057}>Correct: Okay.</p>
                <p className={styles.block_1062}>Correct: Okay, Zain.</p>
                <p className={styles.block_1063}>
                  Correct: Okay Anwar, ayo sekolah.
                </p>
              </div>
              <div id="media-title">
                <p className={'heading'}>Media title</p>
                <p className={'text'}>
                  Refer to the Google Play Store for official spellings of media
                  titles. For film/television, IMDb is also available. If an
                  utterance is ambiguous between a media title and a sentence or
                  web search, use your judgment for which is more likely; if
                  truly unclear, default to media title.
                </p>
                <p className={styles.block_1066}>
                  Capitalize media titles the way they are typically
                  capitalized.
                </p>
                <p className={styles.block_1067}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_1068}>Correct: Muka Surat Cinta</p>
                <p className={styles.block_1069}>
                  Correct: cuplikan film Kami Histeria
                </p>
                <p className={styles.block_1070}>
                  Correct: Putarkan Cindai oleh Siti Nurhaliza.
                </p>
                <p className={styles.block_495}>
                  Correct: Perusahaan Sadur Timah Malaysia
                </p>
                <p className={styles.block_1034}>
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
                <p className={styles.block_1071}>
                  Correct: Jangan Pandang Belakang Boleh?
                </p>
                <p className={styles.block_227}>ditayangkan 30 Januari 2014.</p>
                <p className={styles.block_1000}>
                  Correct: Siapa yang bermain dalam film
                </p>
                <p className={styles.block_1072}>Cin(T)a?</p>
                <p className={styles.block_594}>
                  Correct: Film favorit sepanjang masa adalah
                </p>
                <p className={styles.block_1073}>Geng: Pengembaraan Bermula.</p>
                <p className={styles.block_1074}>
                  Very common alternate or shortened versions of titles should
                  also be capitalized.
                </p>
                <p className={styles.block_1075}>
                  <span className={styles.text_4}>
                    Correct: Transformers 2{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: for "Transformers: Revenge of the
                  </span>
                </p>
                <p className={styles.block_1076}>Fallen"</p>
                <p className={styles.block_1077}>
                  <span className={styles.text_4}>
                    Correct: Star Wars Episode III{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: for "Star Wars Episode III: Revenge
                  </span>
                </p>
                <p className={styles.block_389}>of the Sith"</p>
                <p className={styles.block_522}>
                  <span className={styles.text_4}>
                    Correct: What Does the Fox Say?{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: for "The Fox (What Does the Fox
                  </span>
                </p>
                <p className={styles.block_1078}>Say?)"</p>
                <p className={styles.block_1079}>
                  <span className={styles.text_4}>
                    Correct: The Next Generation{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: for "Star Trek: The Next{' '}
                  </span>
                </p>
                <p className={styles.block_1080}>Generation"</p>
                <p className={styles.block_1081}>
                  <span className={styles.text_4}>
                    Correct: Putarkan Lumpuhkanlah oleh Geisha.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Correct title is "Lumpuhkanlah
                  </span>
                </p>
                <p className={styles.block_1082}>Ingatanku".</p>
                <p className={styles.block_499}>
                  Correct: Saya ingin mendengarkan Geisha
                </p>
                <p className={styles.block_1083}>Lumpuhkanlah.</p>
                <p className={styles.block_1084}>
                  Explanation: Correct title is "Lumpuhkanlah
                </p>
                <p className={styles.block_1085}>Ingatanku".</p>
                <p className={styles.block_1086}>
                  Do not capitalize a media title that happens to occur within
                  quoted lyrics. Format lyrics that form a sentence as you would
                  a normal sentence.
                </p>
                <p className={styles.block_1087}>
                  Correct: YouTube Lumpuhkanlah ingatanku.
                </p>
                <p className={styles.block_1088}>Hapuskan tentang dia.</p>
                <p className={styles.block_1089}>
                  Incorrect: YouTube Lumpuhkanlah Ingatanku,
                </p>
                <p className={styles.block_235}>hapuskan tentang dia.</p>
                <p className={styles.block_1090}>
                  Incorrect: YouTube Lumpuhkanlah Ingatanku
                </p>
                <p className={styles.block_1091}>Hapuskan Tentang Dia.</p>
                <p className={styles.block_1092}>
                  Explanation: They are quoting lyrics that just
                </p>
                <p className={styles.block_1093}>
                  happen to contain the title; format as full
                </p>
                <p className={styles.block_1094}>sentence.</p>
                <p className={styles.block_1095}>
                  Correct: memaafkan menerima pengakuanku
                </p>
                <p className={styles.block_1096}>
                  Treat foreign titles the same way as titles in the
                  transcription language if you understand them.
                </p>
                <p className={styles.block_1097}>Correct: Someone Like You</p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_1100}>Correct: perubatan</p>
                <p className={styles.block_1101}>Incorrect: perobatan</p>
                <p className={styles.block_1102}>
                  Explanation: "perubatan" is preferred by
                </p>
                <p className={styles.block_1103}>eKamus.</p>
                <p className={styles.block_1104}>
                  Guess the most likely spelling given the context. When context
                  is insufficient, rely on Google hits.
                </p>
                <p className={styles.block_1105}>
                  Correct: Saya sedang membaca Murai.
                </p>
                <p className={styles.block_1057}>Correct: murai</p>
                <p className={styles.block_1106}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_1107}>Correct: Oryza sativa</p>
                <p className={styles.block_1108}>Correct: E. coli</p>
                <p className={styles.block_1109}>Correct: Amoxicillin</p>
                <p className={styles.block_1110}>
                  Transcribe slang and colloquialisms as spoken according to the
                  appendix on this page. Do not alter non-standard speech that
                  the speaker probably wouldn't want corrected.
                </p>
                <p className={styles.block_1111}>Correct: Napa camtu?</p>
                <p className={styles.block_1112}>Correct: Tunggu jap.</p>
                <p className={styles.block_1113}>
                  Write commonly accepted contractions as usual. Transcribe
                  contractions when you hear them spoken.
                </p>
                <p className={styles.block_1114}>
                  Correct: Takkan lari gunung dikejar.
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_4}>
                    Correct: Tak akan lari gunung dikejar.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Speaker clearly said two distinct
                  </span>
                </p>
                <p className={styles.block_1115}>words.</p>
                <p className={styles.block_789}>
                  Correct: Kubiarkan dia berpikir.
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_4}>
                    Correct: Aku biarkan dia berpikir.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Speaker clearly said two distinct
                  </span>
                </p>
                <p className={styles.block_1115}>words.</p>
                <p className={styles.block_1116}>Correct: nak</p>
                <p className={styles.block_1117}>Correct: ni semua</p>
                <p className={styles.block_592}>
                  Correct: Aku akan membiarkanmu tidur.
                </p>
                <p className={styles.block_1118}>
                  Correct: Kubiarkan kau tidur.
                </p>
                <p className={styles.block_1119}>
                  Contractions that are not commonly accepted should be
                  transcribed as full words.
                </p>
                <p className={styles.block_1120}>
                  <span className={styles.text_4}>
                    Correct: Ku akan pulang sekarang.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>kukan pulang sekarang </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1121}>
                  <span className={styles.text_4}>
                    Correct: Kau akan kembali.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>kaukan kembali </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1122}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_1123}>
                  <span className={styles.text_4}>
                    Correct: Lumpuhkanlah Ingatanku{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>lumpuhkamlah ingatanku </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1029}>
                  <span className={styles.text_4}>Correct: apa </span>
                  <span className={styles.text_9}>
                    Explanation: "apa" pronounced in a way that
                  </span>
                </p>
                <p className={styles.block_1124}>sounds like "ape".</p>
                <p className={styles.block_1125}>
                  <span className={styles.text_4}>
                    Correct: Di mana perpustakaan terdekat?{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    di mana perpustakan terdekat{' '}
                  </span>
                </p>
                <p className={styles.block_765}>"</p>
                <p className={styles.block_1126}>
                  <span className={styles.text_4}>Correct: Yuna Zarai </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>yuna zarai </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1127}>
                  <span className={styles.text_4}>Correct: Terima kasih. </span>
                  <span className={styles.text_9}>
                    Explanation: Person said "terima kasyi" in{' '}
                  </span>
                </p>
                <p className={styles.block_1128}>Korean accent.</p>
                <p className={styles.block_1129}>
                  <span className={styles.text_4}>
                    Correct: Maksud dia tidak seperti itu.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    maksud dia tida seperti itu{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_1130}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_1131}>
                  <span className={styles.text_4}>Correct: pengisap debu </span>
                  <span className={styles.text_9}>
                    Explanation: even if they meant "penghisap{' '}
                  </span>
                </p>
                <p className={styles.block_1132}>debu".</p>
                <p className={styles.block_1133}>
                  Correct: Kami akan menyediakan semelon
                </p>
                <p className={styles.block_1134}>nanti malam.</p>
                <p className={styles.block_482}>
                  Explanation: Unsure whether speaker intended
                </p>
                <p className={styles.block_1135}>
                  to say "semangka" or "melon", but clearly
                </p>
                <p className={styles.block_1136}>
                  articulated and easy to spell.
                </p>
                <p className={styles.block_1137}>
                  Correct: Tetiba sahaja kita rasa sedih.
                </p>
                <p className={styles.block_1138}>
                  If you hear a word that does not sound like a standard word of
                  your language because it appears to be nonsense, first perform
                  a Google search for the word. If there is a clear candidate,
                  transcribe that word.
                </p>
                <p className={styles.block_1139}>
                  <span className={styles.text_4}>Correct: Kaloli </span>
                  <span className={styles.text_9}>
                    Explanation: User says "Kaloli". This might
                  </span>
                </p>
                <p className={styles.block_1140}>
                  sound like nonsense at first, but the transcriber
                </p>
                <p className={styles.block_1141}>
                  guesses the spelling "kalolli" and is by
                </p>
                <p className={styles.block_460}>
                  corrected Google Search to "Kaloli", a gasoline
                </p>
                <p className={styles.block_1142}>
                  tanker and place in Hawaii. Transcribe Kaloli.
                </p>
                <p className={styles.block_1143}>
                  <span className={styles.text_4}>Correct: Souk Abdali </span>
                  <span className={styles.text_9}>
                    Explanation: User says "Souk Abdali".{' '}
                  </span>
                </p>
                <p className={styles.block_1144}>
                  Transcriber searches "sukabdali", finds correct
                </p>
                <p className={styles.block_1145}>
                  results. Transcribe Souk Abdali.
                </p>
                <p className={styles.block_1146}>
                  If a word appears to be nonsense and a Google search returns
                  no clear results but it is easy to spell and articulated
                  clearly, transcribe it anyway.
                </p>
                <p className={styles.block_1147}>Correct: jalanalu</p>
                <p className={styles.block_1148}>
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
