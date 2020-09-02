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
            <PageContentHeader currentPage="longform Mandarin" />
            <div className="content text">
              <p className={'large-heading'}>Agreed spelling</p>
              <div id="spelling-out">
                <p className={'heading'}>Spelling out</p>
                <p className={'text'}>
                  If a word is spelled with pinyin, spell it into pinyin as it
                  is said.
                </p>
                <p className={styles.block_182}>Correct: b ai bai d u du</p>
                <p className={styles.block_550}>
                  Example audio: " ㄅ ㄞ 百 ㄉ ㄨ 度 "
                </p>
                <p className={styles.block_551}>
                  Don't transcribe retroflex final / non-syllabic diminutive
                  suffix "r" (儿).
                </p>
                <p className={styles.block_193}>Correct: 聊天</p>
                <p className={styles.block_394}>Example audio: " 聊天儿 "</p>
                <p className={styles.block_552}>
                  For English: If a word is spelled or obvious pauses are made
                  between letters, spell it into letters as it is said (often
                  done for foreign names or businesses, for example). Use
                  lowercase letters for the spelled-out portion. This rule does
                  not apply to acronyms or initialisms, or to spelled-out web or
                  email addresses.
                </p>
                <p className={styles.block_91}>Correct: a p p l e</p>
                <p className={styles.block_553}>Example audio: " a p p l e "</p>
                <p className={styles.block_169}>
                  Correct: 1881 heritage h e r i t a g e
                </p>
                <p className={styles.block_554}>
                  Example audio: " 一八八一 heritage h e r i t a g e "
                </p>
                <p className={styles.block_486}>
                  Correct: 你要怎麼去 c o s t c o?
                </p>
                <p className={styles.block_424}>
                  Example audio: " 你要怎麼去 c o s t c o "
                </p>
                <p className={styles.block_444}>Correct: CEO</p>
                <p className={styles.block_237}>Example audio: " c e o "</p>
                <p className={styles.block_555}>
                  Explanation: Capitalized and without spaces because it is an
                  acronym.
                </p>
                <p className={styles.block_556}>
                  For English: For uses of single letters, either referring to
                  the letter itself or some other meaning associated with it,
                  use capital letters (with apostrophes for plurals).
                </p>
                <p className={styles.block_557}>
                  Correct: J 开头的英文字有哪些?
                </p>
                <p className={styles.block_558}>Correct: 我被分到 A 组。</p>
                <p className={styles.block_497}>Correct: S 型曲线</p>
                <p className={styles.block_559}>
                  Correct: She got straight A's and B's.
                </p>
                <p className={styles.block_559}>
                  Explanation: scores on the transcript
                </p>
              </div>
              <div id="interjection">
                <p className={'heading'}>Interjections</p>
                <p className={'text'}>
                  Transcribe words representing laughter or other non-speech
                  vocalizations with up to three syllables, but no more.
                </p>
                <p className={styles.block_391}>Correct: 哈哈哈</p>
                <p className={styles.block_338}>
                  Example audio: " 哈哈哈哈哈 "
                </p>
                <p className={styles.block_117}>
                  Correct: heh, ha, haha, hahaha, hehe, hehehe, boo hoo, boo hoo
                  hoo, lalala
                </p>
                <p className={styles.block_561}>
                  Commonly used interjections and particles are listed below.
                </p>
                <p className={styles.block_562}>
                  <span className={styles.text_4}>啊</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>
                      呀哪呢哼嗯咦喲(not "呦"){' '}
                    </sub>
                  </span>
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_4}>哇</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>哦哎呀 </sub>
                  </span>
                </p>
                <p className={styles.block_564}>
                  If the interjection is unclear or ambiguous, follow the rules
                  below.
                </p>
                <p className={styles.block_288}>Correct: 啊</p>
                <p className={styles.block_565}>
                  Explanation: Transcribe the interjection as "啊" when it
                  sounds ambiguous.
                </p>
              </div>
              <div id="proper-names">
                <p className={'heading'}>Proper names</p>
                <p className={'text'}>
                  Use official spelling, capitalization, and punctuation for
                  proper names. Google them and pay attention to the correct
                  format. Official format and spelling of a proper name may
                  supersede the usual written transcription conventions detailed
                  in this document.
                </p>
                <p className={styles.block_273}>Correct: 江泽民</p>
                <p className={styles.block_567}>Incorrect: jiang1 ze2 min2</p>
                <p className={styles.block_149}>
                  Correct: John Piper, China, USA
                </p>
                <p className={styles.block_353}>Correct: San Fransisco</p>
                <p className={styles.block_568}>
                  Defer to official spellings of celebrity names.
                </p>
                <p className={styles.block_273}>Correct: 周杰伦</p>
                <p className={styles.block_393}>Incorrect: 周结伦</p>
                <p className={styles.block_273}>Correct: 庾澄庆</p>
                <p className={styles.block_393}>Incorrect: 瘐澄庆</p>
                <p className={styles.block_193}>Correct: 阿宝</p>
                <p className={styles.block_569}>Incorrect: A 宝</p>
                <p className={styles.block_29}>Correct: will.i.am</p>
                <p className={styles.block_204}>Correct: Beatles, Will Smith</p>
                <p className={styles.block_570}>Correct: Katy Perry</p>
                <p className={styles.block_107}>
                  Explanation: Transcribe the correct spellings even if speaker
                  says katy pewy (with an accent).
                </p>
                <p className={styles.block_571}>
                  If proper names include diacritics uncommon in your language
                  (é, ü, ç, etc), include them in your spelling. If unsure,
                  refer to news articles, official city or celebrity websites,
                  IMDb, Wikipedia, Google Maps, or knowledge cards (the answer
                  box above the list of Google Search results) in that order.
                  When no other source can be used to decide between spellings,
                  choose the spelling used in the first hit(s) on Google.
                </p>
                <p className={styles.block_572}>
                  Correct: 石湖墟後街出現一家叫 Cafe Je T'aime 的咖啡店。
                </p>
                <p className={styles.block_573}>
                  Correct: 台北下午茶 Bügel Bagel
                </p>
                <p className={styles.block_574}>
                  If a personal name could have multiple spellings and context
                  does not help choose a spelling, use the spelling that yields
                  the most Google search hits when you search for the name
                  followed by the word "name" (without quotation marks) (e.g.
                  "Anna name").
                </p>
                <p className={styles.block_208}>Correct: 打电话给小明。</p>
                <p className={styles.block_209}>Incorrect: 打电话给小铭。</p>
                <p className={styles.block_575}>
                  Explanation: With Google search, using "小明 名字" (without
                  quotation marks) finds you more hits than using "小铭 名字".
                </p>
                <p className={styles.block_228}>Correct: 我妹的名字叫王芳。</p>
                <p className={styles.block_229}>
                  Incorrect: 我妹的名字叫王妨。
                </p>
                <p className={styles.block_575}>
                  Explanation: With Google search, using "王芳 名字" (without
                  quotation marks) finds you more hits than using "王妨 名字".
                </p>
                <p className={styles.block_576}>
                  For English: Spell and capitalize holidays as they are
                  formatted within the answer box above the list of Google
                  Search results. If no box appears, defer to Wikipedia's
                  formatting, and if there is no Wikipedia article, use the most
                  common format according to Google Search results.
                </p>
                <p className={styles.block_577}>Correct: Merry Christmas.</p>
                <p className={styles.block_578}>
                  Correct: When is Eid al-Fitr this year?
                </p>
                <p className={styles.block_579}>
                  Common spellings of geonames are listed below.
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>张北</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>水源镇 </sub>
                  </span>
                </p>
                <p className={styles.block_581}>四川省黄岩镇 DV 大道</p>
                <p className={styles.block_582}>演武楼</p>
                <p className={styles.block_583}>湖北省通城县</p>
                <p className={styles.block_584}>
                  <span className={styles.text_4}>卢乡</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>广水市应山 </sub>
                  </span>
                </p>
                <p className={styles.block_582}>永丰村</p>
                <p className={styles.block_569}>中国广西象州县</p>
                <p className={styles.block_260}>云南省宣威市热水镇</p>
                <p className={styles.block_582}>古平岗</p>
                <p className={styles.block_585}>
                  Common spellings of human names are listed below.
                </p>
                <p className={styles.block_582}>徐志艳</p>
                <p className={styles.block_582}>石海峰</p>
                <p className={styles.block_582}>梁恩胜</p>
                <p className={styles.block_582}>吴小莉</p>
                <p className={styles.block_586}>
                  <span className={styles.text_4}>朱云</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>郭亚忠 </sub>
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>段晓</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>王红陆俊华 </sub>
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>史成</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>赵元旺 </sub>
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>关红</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>黄明辉 </sub>
                  </span>
                </p>
                <p className={styles.block_582}>牛金龙</p>
                <p className={styles.block_582}>罗丽娜</p>
                <p className={styles.block_587}>王佳静</p>
                <p className={styles.block_582}>张同瑞</p>
                <p className={styles.block_582}>王子刚</p>
                <p className={styles.block_586}>
                  <span className={styles.text_4}>陈华</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>曹如如 </sub>
                  </span>
                </p>
                <p className={styles.block_582}>周诗瑶</p>
                <p className={styles.block_582}>刘传平</p>
                <p className={styles.block_582}>王有才</p>
                <p className={styles.block_582}>姚爱云</p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>立维</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>贾雪婷 </sub>
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>李淼</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>齐少安 </sub>
                  </span>
                </p>
                <p className={styles.block_582}>石云红</p>
                <p className={styles.block_582}>张瓜娃</p>
                <p className={styles.block_586}>
                  <span className={styles.text_4}>熊音</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>周新宇 </sub>
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>关乾</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>李揭王树彬 </sub>
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>闫妮</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>张正陈代国 </sub>
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>张丽</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>宋立涛 </sub>
                  </span>
                </p>
                <p className={styles.block_582}>宁小明</p>
                <p className={styles.block_587}>黄旭东</p>
                <p className={styles.block_582}>滕忠康</p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>小桂</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>周丽霞 </sub>
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_4}>王吉</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>曾强张三坤叔王少明 </sub>
                  </span>
                </p>
                <p className={styles.block_582}>张明达</p>
                <p className={styles.block_582}>王卫东</p>
                <p className={styles.block_582}>雷小飞</p>
                <p className={styles.block_582}>刘军平</p>
                <p className={styles.block_582}>孙万杰</p>
                <p className={styles.block_582}>靳文斌</p>
                <p className={styles.block_588}>陈明纯</p>
                <p className={styles.block_582}>康小兵</p>
                <p className={styles.block_582}>崔龙成</p>
                <p className={styles.block_582}>董秋雨</p>
                <p className={styles.block_563}>
                  <span className={styles.text_4}>程真</span>
                  <span className={styles.text_5}>
                    <sub className={styles.calibre1}>梁旭 </sub>
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
                <p className={styles.block_590}>
                  Correct: 我听说 Yahoo 和 T-Mobile 刚刚同意了。
                </p>
                <p className={styles.block_591}>
                  Incorrect: 我听说 Yahoo!和 T-Mobile 刚刚同意了。
                </p>
                <p className={styles.block_361}>
                  Example audio: " 我听说 yahoo 和 t mobile 刚刚同意了 "
                </p>
                <p className={styles.block_592}>
                  Correct: 最新的影片在 YouTube 上面。
                </p>
                <p className={styles.block_593}>
                  Incorrect: 最新的影片在 Youtube 上面。
                </p>
                <p className={styles.block_594}>
                  Example audio: " 最新的影片在 you tube 上面 or 最新的影片在
                  you to be 上面 "
                </p>
                <p className={styles.block_172}>
                  Explanation: Transcribe the correct form even if the brand or
                  product is incorrectly pronounced.
                </p>
                <p className={styles.block_595}>Correct: iSQUARE, The ONE</p>
                <p className={styles.block_596}>
                  Explanation: names of shopping malls
                </p>
                <p className={styles.block_58}>Correct: Burger King</p>
                <p className={styles.block_597}>Incorrect: BURGER KING</p>
                <p className={styles.block_598}>
                  Explanation: Do not spell "Burger King" all in upper case as
                  in the stylized form of the logo, stick to the official form
                  as per the privacy policy.
                </p>
                <p className={styles.block_545}>Correct: LEGO</p>
                <p className={styles.block_463}>Incorrect: Lego</p>
                <p className={styles.block_552}>
                  For English: If a business name is officially spelled in all
                  capital or all lowercase letters, capitalize only the first
                  letter instead. If a business name follows camel case (e.g.
                  easyJet) or has a lowercase first letter followed by a
                  capitalized second letter (e.g. eHarmony), follow that
                  business's convention. If a company's name is based on an
                  acronym or initialism, capitalize as the company does.
                </p>
                <p className={styles.block_167}>
                  Correct: Asus, Yamaha, Toyota
                </p>
                <p className={styles.block_69}>
                  Explanation: Officially "ASUS, YAMAHA, TOYOTA", but capitalize
                  only the first letter.
                </p>
                <p className={styles.block_527}>
                  Spellings of common brand and product names are listed below.
                </p>
                <p className={styles.block_160}>4chan</p>
                <p className={styles.block_599}>Abba</p>
                <p className={styles.block_600}>Adidas</p>
                <p className={styles.block_119}>Aldo</p>
                <p className={styles.block_601}>Amazon</p>
                <p className={styles.block_602}>Android Market</p>
                <p className={styles.block_603}>Angry Birds</p>
                <p className={styles.block_604}>BBC One</p>
                <p className={styles.block_374}>BlackBerry</p>
                <p className={styles.block_605}>Burger King</p>
                <p className={styles.block_606}>Casio</p>
                <p className={styles.block_607}>Chanel</p>
                <p className={styles.block_11}>Chrome</p>
                <p className={styles.block_608}>Claire's</p>
                <p className={styles.block_609}>Coca-Cola</p>
                <p className={styles.block_610}>Domino's</p>
                <p className={styles.block_608}>easyJet</p>
                <p className={styles.block_599}>eBay</p>
                <p className={styles.block_611}>Evernote</p>
                <p className={styles.block_612}>Facebook</p>
                <p className={styles.block_613}>FIFA</p>
                <p className={styles.block_606}>Flickr</p>
                <p className={styles.block_609}>Formula 1</p>
                <p className={styles.block_614}>Gmail</p>
                <p className={styles.block_76}>Google</p>
                <p className={styles.block_132}>Google Apps</p>
                <p className={styles.block_91}>Google Calendar</p>
                <p className={styles.block_615}>Google Earth</p>
                <p className={styles.block_478}>Google Images</p>
                <p className={styles.block_253}>Google mail</p>
                <p className={styles.block_616}>Google Search</p>
                <p className={styles.block_617}>Google Street View</p>
                <p className={styles.block_463}>Google Toolbar</p>
                <p className={styles.block_618}>Häagen-Dazs</p>
                <p className={styles.block_619}>Haribo</p>
                <p className={styles.block_11}>Hotmail</p>
                <p className={styles.block_191}>IKEA</p>
                <p className={styles.block_191}>iMac</p>
                <p className={styles.block_599}>IMDb</p>
                <p className={styles.block_620}>iOS</p>
                <p className={styles.block_621}>iPad</p>
                <p className={styles.block_622}>iPhone</p>
                <p className={styles.block_611}>Kellogg's</p>
                <p className={styles.block_619}>Kit Kat</p>
                <p className={styles.block_606}>LEGO</p>
                <p className={styles.block_623}>LEGOLAND</p>
                <p className={styles.block_119}>edIn</p>
                <p className={styles.block_610}>Maroon 5</p>
                <p className={styles.block_624}>McDonald's</p>
                <p className={styles.block_610}>Minecraft</p>
                <p className={styles.block_621}>Mini</p>
                <p className={styles.block_119}>Nike</p>
                <p className={styles.block_160}>Oral-B</p>
                <p className={styles.block_625}>Picasa</p>
                <p className={styles.block_570}>Plants vs. Zombies</p>
                <p className={styles.block_615}>PlayStation 4</p>
                <p className={styles.block_626}>PlayStation 1</p>
                <p className={styles.block_11}>Porsche</p>
                <p className={styles.block_375}>PowerPoint</p>
                <p className={styles.block_627}>PS4</p>
                <p className={styles.block_37}>RealPlayer</p>
                <p className={styles.block_29}>Samsung Galaxy</p>
                <p className={styles.block_46}>Samsung Galaxy S II</p>
                <p className={styles.block_456}>Samsung Galaxy S III</p>
                <p className={styles.block_72}>Samsung Galaxy S4</p>
                <p className={styles.block_72}>Samsung Galaxy S5</p>
                <p className={styles.block_628}>Siri</p>
                <p className={styles.block_28}>SpongeBob SquarePants</p>
                <p className={styles.block_609}>Starbucks</p>
                <p className={styles.block_629}>T-Mobile</p>
                <p className={styles.block_609}>Toys"R"Us</p>
                <p className={styles.block_600}>Tumblr</p>
                <p className={styles.block_622}>Twitter</p>
                <p className={styles.block_621}>Visa</p>
                <p className={styles.block_164}>WhatsApp</p>
                <p className={styles.block_611}>WWE '13</p>
                <p className={styles.block_630}>Xbox</p>
                <p className={styles.block_610}>Xbox 360</p>
                <p className={styles.block_631}>Xbox One</p>
                <p className={styles.block_614}>Yahoo</p>
                <p className={styles.block_632}>YouTube</p>
                <p className={styles.block_633}>
                  The phrase "Ok Google", as well as possible derivatives such
                  as "Ok Google Now" and "Ok Glass", require their own
                  particular spelling of "okay". This spelling is unique to
                  these cases.
                </p>
                <p className={styles.block_617}>Correct: Ok Google</p>
                <p className={styles.block_634}>Incorrect: OK Google</p>
                <p className={styles.block_353}>Incorrect: OK GOOGLE</p>
                <p className={styles.block_72}>Incorrect: ok google</p>
                <p className={styles.block_182}>Incorrect: Okay Google</p>
                <p className={styles.block_146}>Incorrect: ok Google</p>
                <p className={styles.block_536}>Correct: OK 等下見。</p>
                <p className={styles.block_635}>Incorrect: ok 等下見。</p>
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
                <p className={styles.block_638}>
                  Do not use quotation marks for media titles.
                </p>
                <p className={styles.block_221}>Correct: 瘦身男女</p>
                <p className={styles.block_536}>Incorrect: "瘦身男女"</p>
                <p className={styles.block_208}>Correct: 指环王电影剧照</p>
                <p className={styles.block_639}>Incorrect: "指环王"电影剧照</p>
                <p className={styles.block_640}>
                  Treat foreign titles the same way as titles in the
                  transcription language if you understand them.
                </p>
                <p className={styles.block_200}>Correct: 周慧敏 C'est la Vie</p>
                <p className={styles.block_641}>Correct: Y Tu Mamá También</p>
                <p className={styles.block_642}>
                  For English: Transcribe the official media titles even if
                  speaker omits word-final consonants or has an accent.
                </p>
                <p className={styles.block_146}>Correct: Angry Birds</p>
                <p className={styles.block_634}>Incorrect: Angry Bird</p>
                <p className={styles.block_334}>
                  Example audio: " angry bird "
                </p>
                <p className={styles.block_237}>Correct: Gangnam Style</p>
                <p className={styles.block_577}>Incorrect: Gangdam Style</p>
                <p className={styles.block_643}>
                  Example audio: " gangdam style "
                </p>
                <p className={styles.block_465}>
                  For English: Capitalize media titles the way they are
                  typically capitalized.
                </p>
                <p className={styles.block_335}>Correct: Let It Go</p>
                <p className={styles.block_570}>Incorrect: Let it go.</p>
                <p className={styles.block_342}>
                  Explanation: Search for the song.
                </p>
                <p className={styles.block_217}>
                  Correct: Stand by Me Doraemon
                </p>
                <p className={styles.block_644}>
                  Incorrect: Stand by me Doraemon
                </p>
                <p className={styles.block_70}>
                  Explanation: Search for the movie.
                </p>
                <p className={styles.block_645}>
                  For English: Very common alternate or shortened versions of
                  titles should also be capitalized.
                </p>
                <p className={styles.block_646}>
                  Correct: 我想聽 Taylor Swift 的 Trouble。
                </p>
                <p className={styles.block_647}>
                  Explanation: Correct title is "I Knew You Were Trouble".
                </p>
                <p className={styles.block_235}>Correct: Transformers 2</p>
                <p className={styles.block_648}>
                  Explanation: for "Transformers: Revenge of the Fallen"
                </p>
                <p className={styles.block_649}>
                  Correct: What Does the Fox Say?
                </p>
                <p className={styles.block_650}>
                  Explanation: for "The Fox (What Does the Fox Say?)"
                </p>
              </div>
              <div id="multiple-spelling">
                <p className={'heading'}>Multiple spellings</p>
                <p className={'text'}>
                  When multiple spellings are attested, use the first spelling
                  used in the reference dictionary for your language. If there
                  is no entry, Google the word and use the form with the most
                  hits.
                </p>
                <p className={styles.block_193}>Correct: 早点</p>
                <p className={styles.block_194}>Incorrect: 早點</p>
                <p className={styles.block_652}>
                  Explanation: "點" is traditional Chinese.
                </p>
                <p className={styles.block_193}>Correct: 手机</p>
                <p className={styles.block_194}>Incorrect: 手機</p>
                <p className={styles.block_652}>
                  Explanation: "機" is traditional Chinese.
                </p>
                <p className={styles.block_193}>Correct: 浮云</p>
                <p className={styles.block_194}>Incorrect: 浮雲</p>
                <p className={styles.block_653}>
                  Explanation: "雲" is traditional Chinese.
                </p>
                <p className={styles.block_615}>Correct: gray</p>
                <p className={styles.block_67}>Incorrect: grey</p>
                <p className={styles.block_654}>
                  Explanation: "gray" is preferred by Merriam-Webster.
                </p>
                <p className={styles.block_655}>
                  Use official spelling and capitalization for technical terms.
                  Google them and pay attention to the correct format.
                </p>
                <p className={styles.block_221}>Correct: 乙酰胆碱</p>
                <p className={styles.block_221}>Correct: 儿茶酚胺</p>
                <p className={styles.block_656}>
                  Transcribe common neologisms or buzz words as spoken.
                </p>
                <p className={styles.block_193}>Correct: 靠谱</p>
                <p className={styles.block_242}>Explanation: It means 可靠.</p>
                <p className={styles.block_273}>Correct: 纯爷们</p>
                <p className={styles.block_193}>Correct: 绝倒</p>
                <p className={styles.block_193}>Correct: 牛逼</p>
                <p className={styles.block_657}>
                  Use standard spelling for contractions/reductions that
                  commonly occur in normal running speech.
                </p>
                <p className={styles.block_273}>Correct: 有时候</p>
                <p className={styles.block_194}>Incorrect: 有兽</p>
                <p className={styles.block_149}>
                  Example audio: " you3 shou4 "
                </p>
                <p className={styles.block_658}>Explanation: as if "有兽"</p>
                <p className={styles.block_340}>Correct: 你知道吗?</p>
                <p className={styles.block_222}>Incorrect: 你造吗?</p>
                <p className={styles.block_659}>
                  Example audio: " ni3 zao4 ma1 "
                </p>
                <p className={styles.block_434}>Explanation: as if "你造吗?"</p>
                <p className={styles.block_456}>Correct: I want to go.</p>
                <p className={styles.block_167}>
                  Example audio: " i wanna go "
                </p>
                <p className={styles.block_660}>Correct: It is not true.</p>
                <p className={styles.block_353}>Incorrect: It's not true.</p>
                <p className={styles.block_661}>
                  Example audio: " it is not true "
                </p>
                <p className={styles.block_662}>
                  If you hear a word that does not sound like a standard word,
                  but it is obviously based on real words, suffixes, or
                  prefixes, transcribe as is.
                </p>
                <p className={styles.block_273}>Correct: 隨和化</p>
                <p className={styles.block_663}>
                  Explanation: even if it doesn't sound like a legit word.
                </p>
                <p className={styles.block_46}>Correct: interpretate</p>
                <p className={styles.block_664}>
                  Explanation: even if they meant "interpret"
                </p>
                <p className={styles.block_665}>
                  If you hear a word that does not sound like a standard word of
                  your language because there is a small sound change (i.e.
                  accent, speech error, speech impairment, etc), transcribe the
                  intended word.
                </p>
                <p className={styles.block_273}>Correct: 湖南人</p>
                <p className={styles.block_666}>
                  Example audio: " fu2 nan2 len2 "
                </p>
                <p className={styles.block_667}>
                  Explanation: Person says "湖南人" with Hunan accent.
                </p>
                <p className={styles.block_273}>Correct: 九寨沟</p>
                <p className={styles.block_668}>
                  Example audio: " jiu4 zhai3 gou1 "
                </p>
                <p className={styles.block_669}>
                  Explanation: Person says "九寨沟" with Sichuan accent.
                </p>
                <p className={styles.block_602}>Correct: galaxy</p>
                <p className={styles.block_670}>
                  Explanation: Person says "galax".
                </p>
                <p className={styles.block_671}>
                  If you hear a word that does not sound like a standard word of
                  your language, but it is obviously based on real words,
                  suffixes, or prefixes, transcribe as is.
                </p>
                <p className={styles.block_46}>Correct: interpretate</p>
                <p className={styles.block_664}>
                  Explanation: even if they meant "interpret"
                </p>
                <p className={styles.block_273}>Correct: 隨和化</p>
                <p className={styles.block_663}>
                  Explanation: even if it doesn't sound like a legit word.
                </p>
                <p className={styles.block_672}>
                  Transcribe slang and colloquialisms as spoken. Do not alter
                  non-standard speech that the speaker probably wouldn't want
                  corrected.
                </p>
                <p className={styles.block_273}>Correct: 有木有</p>
                <p className={styles.block_673}>
                  Example audio: " you3 mu4 you3 "
                </p>
                <p className={styles.block_208}>Correct: 神马都是浮云。</p>
                <p className={styles.block_674}>
                  Example audio: " shen2 ma3 dou1 shi4 fu2 yun2 "
                </p>
                <p className={styles.block_199}>Correct: 是不是被河蟹了?</p>
                <p className={styles.block_675}>
                  Example audio: " shi4 bu2 shi4 bei4 he2 xie4 le0 "
                </p>
                <p className={styles.block_340}>Correct: 这碉堡了。</p>
                <p className={styles.block_454}>
                  Example audio: " zhe4 diao1 bao3 le0 "
                </p>
                <p className={styles.block_42}>
                  If you hear a word that does not sound like a standard word of
                  your language
                </p>
                <p className={styles.block_676}>
                  because it appears to be nonsense, first perform a Google
                  search for the word. If there is a clear candidate, transcribe
                  that word.
                </p>
                <p className={styles.block_221}>Correct: 马路牙子</p>
                <p className={styles.block_193}>Correct: 跌份</p>
                <p className={styles.block_193}>Correct: 白斋</p>
                <p className={styles.block_273}>Correct: 马爬犁</p>
                <p className={styles.block_18}>
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
