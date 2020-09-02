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
              <p class="block_547">Agreed spelling</p>
              <p class="block_548">Spelling out</p>
              <p class="block_549">
                If a word is spelled with pinyin, spell it into pinyin as it is
                said.
              </p>
              <p class="block_182">Correct: b ai bai d u du</p>
              <p class="block_550">Example audio: " ㄅ ㄞ 百 ㄉ ㄨ 度 "</p>
              <p class="block_551">
                Don't transcribe retroflex final / non-syllabic diminutive
                suffix "r" (儿).
              </p>
              <p class="block_193">Correct: 聊天</p>
              <p class="block_394">Example audio: " 聊天儿 "</p>
              <p class="block_552">
                For English: If a word is spelled or obvious pauses are made
                between letters, spell it into letters as it is said (often done
                for foreign names or businesses, for example). Use lowercase
                letters for the spelled-out portion. This rule does not apply to
                acronyms or initialisms, or to spelled-out web or email
                addresses.
              </p>
              <p class="block_91">Correct: a p p l e</p>
              <p class="block_553">Example audio: " a p p l e "</p>
              <p class="block_169">Correct: 1881 heritage h e r i t a g e</p>
              <p class="block_554">
                Example audio: " 一八八一 heritage h e r i t a g e "
              </p>
              <p class="block_486">Correct: 你要怎麼去 c o s t c o?</p>
              <p class="block_424">Example audio: " 你要怎麼去 c o s t c o "</p>
              <p class="block_444">Correct: CEO</p>
              <p class="block_237">Example audio: " c e o "</p>
              <p class="block_555">
                Explanation: Capitalized and without spaces because it is an
                acronym.
              </p>
              <p class="block_556">
                For English: For uses of single letters, either referring to the
                letter itself or some other meaning associated with it, use
                capital letters (with apostrophes for plurals).
              </p>
              <p class="block_557">Correct: J 开头的英文字有哪些?</p>
              <p class="block_558">Correct: 我被分到 A 组。</p>
              <p class="block_497">Correct: S 型曲线</p>
              <p class="block_559">Correct: She got straight A's and B's.</p>
              <p class="block_559">Explanation: scores on the transcript</p>
              <p class="block_21">Interjections</p>
              <p class="block_560">
                Transcribe words representing laughter or other non-speech
                vocalizations with up to three syllables, but no more.
              </p>
              <p class="block_391">Correct: 哈哈哈</p>
              <p class="block_338">Example audio: " 哈哈哈哈哈 "</p>
              <p class="block_117">
                Correct: heh, ha, haha, hahaha, hehe, hehehe, boo hoo, boo hoo
                hoo, lalala
              </p>
              <p class="block_561">
                Commonly used interjections and particles are listed below.
              </p>
              <p class="block_562">
                <span class="text_4">啊</span>
                <span class="text_5">
                  <sub class="calibre1">呀哪呢哼嗯咦喲(not "呦") </sub>
                </span>
              </p>
              <p class="block_563">
                <span class="text_4">哇</span>
                <span class="text_5">
                  <sub class="calibre1">哦哎呀 </sub>
                </span>
              </p>
              <p class="block_564">
                If the interjection is unclear or ambiguous, follow the rules
                below.
              </p>
              <p class="block_288">Correct: 啊</p>
              <p class="block_565">
                Explanation: Transcribe the interjection as "啊" when it sounds
                ambiguous.
              </p>
              <p class="block_26">Proper names</p>
              <p class="block_566">
                Use official spelling, capitalization, and punctuation for
                proper names. Google them and pay attention to the correct
                format. Official format and spelling of a proper name may
                supersede the usual written transcription conventions detailed
                in this document.
              </p>
              <p class="block_273">Correct: 江泽民</p>
              <p class="block_567">Incorrect: jiang1 ze2 min2</p>
              <p class="block_149">Correct: John Piper, China, USA</p>
              <p class="block_353">Correct: San Fransisco</p>
              <p class="block_568">
                Defer to official spellings of celebrity names.
              </p>
              <p class="block_273">Correct: 周杰伦</p>
              <p class="block_393">Incorrect: 周结伦</p>
              <p class="block_273">Correct: 庾澄庆</p>
              <p class="block_393">Incorrect: 瘐澄庆</p>
              <p class="block_193">Correct: 阿宝</p>
              <p class="block_569">Incorrect: A 宝</p>
              <p class="block_29">Correct: will.i.am</p>
              <p class="block_204">Correct: Beatles, Will Smith</p>
              <p class="block_570">Correct: Katy Perry</p>
              <p class="block_107">
                Explanation: Transcribe the correct spellings even if speaker
                says katy pewy (with an accent).
              </p>
              <p class="block_571">
                If proper names include diacritics uncommon in your language (é,
                ü, ç, etc), include them in your spelling. If unsure, refer to
                news articles, official city or celebrity websites, IMDb,
                Wikipedia, Google Maps, or knowledge cards (the answer box above
                the list of Google Search results) in that order. When no other
                source can be used to decide between spellings, choose the
                spelling used in the first hit(s) on Google.
              </p>
              <p class="block_572">
                Correct: 石湖墟後街出現一家叫 Cafe Je T'aime 的咖啡店。
              </p>
              <p class="block_573">Correct: 台北下午茶 Bügel Bagel</p>
              <p class="block_574">
                If a personal name could have multiple spellings and context
                does not help choose a spelling, use the spelling that yields
                the most Google search hits when you search for the name
                followed by the word "name" (without quotation marks) (e.g.
                "Anna name").
              </p>
              <p class="block_208">Correct: 打电话给小明。</p>
              <p class="block_209">Incorrect: 打电话给小铭。</p>
              <p class="block_575">
                Explanation: With Google search, using "小明 名字" (without
                quotation marks) finds you more hits than using "小铭 名字".
              </p>
              <p class="block_228">Correct: 我妹的名字叫王芳。</p>
              <p class="block_229">Incorrect: 我妹的名字叫王妨。</p>
              <p class="block_575">
                Explanation: With Google search, using "王芳 名字" (without
                quotation marks) finds you more hits than using "王妨 名字".
              </p>
              <p class="block_576">
                For English: Spell and capitalize holidays as they are formatted
                within the answer box above the list of Google Search results.
                If no box appears, defer to Wikipedia's formatting, and if there
                is no Wikipedia article, use the most common format according to
                Google Search results.
              </p>
              <p class="block_577">Correct: Merry Christmas.</p>
              <p class="block_578">Correct: When is Eid al-Fitr this year?</p>
              <p class="block_579">
                Common spellings of geonames are listed below.
              </p>
              <p class="block_580">
                <span class="text_4">张北</span>
                <span class="text_5">
                  <sub class="calibre1">水源镇 </sub>
                </span>
              </p>
              <p class="block_581">四川省黄岩镇 DV 大道</p>
              <p class="block_582">演武楼</p>
              <p class="block_583">湖北省通城县</p>
              <p class="block_584">
                <span class="text_4">卢乡</span>
                <span class="text_5">
                  <sub class="calibre1">广水市应山 </sub>
                </span>
              </p>
              <p class="block_582">永丰村</p>
              <p class="block_569">中国广西象州县</p>
              <p class="block_260">云南省宣威市热水镇</p>
              <p class="block_582">古平岗</p>
              <p class="block_585">
                Common spellings of human names are listed below.
              </p>
              <p class="block_582">徐志艳</p>
              <p class="block_582">石海峰</p>
              <p class="block_582">梁恩胜</p>
              <p class="block_582">吴小莉</p>
              <p class="block_586">
                <span class="text_4">朱云</span>
                <span class="text_5">
                  <sub class="calibre1">郭亚忠 </sub>
                </span>
              </p>
              <p class="block_580">
                <span class="text_4">段晓</span>
                <span class="text_5">
                  <sub class="calibre1">王红陆俊华 </sub>
                </span>
              </p>
              <p class="block_580">
                <span class="text_4">史成</span>
                <span class="text_5">
                  <sub class="calibre1">赵元旺 </sub>
                </span>
              </p>
              <p class="block_580">
                <span class="text_4">关红</span>
                <span class="text_5">
                  <sub class="calibre1">黄明辉 </sub>
                </span>
              </p>
              <p class="block_582">牛金龙</p>
              <p class="block_582">罗丽娜</p>
              <p class="block_587">王佳静</p>
              <p class="block_582">张同瑞</p>
              <p class="block_582">王子刚</p>
              <p class="block_586">
                <span class="text_4">陈华</span>
                <span class="text_5">
                  <sub class="calibre1">曹如如 </sub>
                </span>
              </p>
              <p class="block_582">周诗瑶</p>
              <p class="block_582">刘传平</p>
              <p class="block_582">王有才</p>
              <p class="block_582">姚爱云</p>
              <p class="block_580">
                <span class="text_4">立维</span>
                <span class="text_5">
                  <sub class="calibre1">贾雪婷 </sub>
                </span>
              </p>
              <p class="block_580">
                <span class="text_4">李淼</span>
                <span class="text_5">
                  <sub class="calibre1">齐少安 </sub>
                </span>
              </p>
              <p class="block_582">石云红</p>
              <p class="block_582">张瓜娃</p>
              <p class="block_586">
                <span class="text_4">熊音</span>
                <span class="text_5">
                  <sub class="calibre1">周新宇 </sub>
                </span>
              </p>
              <p class="block_580">
                <span class="text_4">关乾</span>
                <span class="text_5">
                  <sub class="calibre1">李揭王树彬 </sub>
                </span>
              </p>
              <p class="block_580">
                <span class="text_4">闫妮</span>
                <span class="text_5">
                  <sub class="calibre1">张正陈代国 </sub>
                </span>
              </p>
              <p class="block_580">
                <span class="text_4">张丽</span>
                <span class="text_5">
                  <sub class="calibre1">宋立涛 </sub>
                </span>
              </p>
              <p class="block_582">宁小明</p>
              <p class="block_587">黄旭东</p>
              <p class="block_582">滕忠康</p>
              <p class="block_580">
                <span class="text_4">小桂</span>
                <span class="text_5">
                  <sub class="calibre1">周丽霞 </sub>
                </span>
              </p>
              <p class="block_580">
                <span class="text_4">王吉</span>
                <span class="text_5">
                  <sub class="calibre1">曾强张三坤叔王少明 </sub>
                </span>
              </p>
              <p class="block_582">张明达</p>
              <p class="block_582">王卫东</p>
              <p class="block_582">雷小飞</p>
              <p class="block_582">刘军平</p>
              <p class="block_582">孙万杰</p>
              <p class="block_582">靳文斌</p>
              <p class="block_588">陈明纯</p>
              <p class="block_582">康小兵</p>
              <p class="block_582">崔龙成</p>
              <p class="block_582">董秋雨</p>
              <p class="block_563">
                <span class="text_4">程真</span>
                <span class="text_5">
                  <sub class="calibre1">梁旭 </sub>
                </span>
              </p>
              <p class="block_422">Brand and product</p>
              <p class="block_589">
                Format proper names as they are most commonly formatted on the
                entity's website (especially official documents), if available,
                or the Wikipedia or IMDb page. In cases of ambiguity, defer to
                their privacy policy. If no other sources, use top Google hits.
              </p>
              <p class="block_590">
                Correct: 我听说 Yahoo 和 T-Mobile 刚刚同意了。
              </p>
              <p class="block_591">
                Incorrect: 我听说 Yahoo!和 T-Mobile 刚刚同意了。
              </p>
              <p class="block_361">
                Example audio: " 我听说 yahoo 和 t mobile 刚刚同意了 "
              </p>
              <p class="block_592">Correct: 最新的影片在 YouTube 上面。</p>
              <p class="block_593">Incorrect: 最新的影片在 Youtube 上面。</p>
              <p class="block_594">
                Example audio: " 最新的影片在 you tube 上面 or 最新的影片在 you
                to be 上面 "
              </p>
              <p class="block_172">
                Explanation: Transcribe the correct form even if the brand or
                product is incorrectly pronounced.
              </p>
              <p class="block_595">Correct: iSQUARE, The ONE</p>
              <p class="block_596">Explanation: names of shopping malls</p>
              <p class="block_58">Correct: Burger King</p>
              <p class="block_597">Incorrect: BURGER KING</p>
              <p class="block_598">
                Explanation: Do not spell "Burger King" all in upper case as in
                the stylized form of the logo, stick to the official form as per
                the privacy policy.
              </p>
              <p class="block_545">Correct: LEGO</p>
              <p class="block_463">Incorrect: Lego</p>
              <p class="block_552">
                For English: If a business name is officially spelled in all
                capital or all lowercase letters, capitalize only the first
                letter instead. If a business name follows camel case (e.g.
                easyJet) or has a lowercase first letter followed by a
                capitalized second letter (e.g. eHarmony), follow that
                business's convention. If a company's name is based on an
                acronym or initialism, capitalize as the company does.
              </p>
              <p class="block_167">Correct: Asus, Yamaha, Toyota</p>
              <p class="block_69">
                Explanation: Officially "ASUS, YAMAHA, TOYOTA", but capitalize
                only the first letter.
              </p>
              <p class="block_527">
                Spellings of common brand and product names are listed below.
              </p>
              <p class="block_160">4chan</p>
              <p class="block_599">Abba</p>
              <p class="block_600">Adidas</p>
              <p class="block_119">Aldo</p>
              <p class="block_601">Amazon</p>
              <p class="block_602">Android Market</p>
              <p class="block_603">Angry Birds</p>
              <p class="block_604">BBC One</p>
              <p class="block_374">BlackBerry</p>
              <p class="block_605">Burger King</p>
              <p class="block_606">Casio</p>
              <p class="block_607">Chanel</p>
              <p class="block_11">Chrome</p>
              <p class="block_608">Claire's</p>
              <p class="block_609">Coca-Cola</p>
              <p class="block_610">Domino's</p>
              <p class="block_608">easyJet</p>
              <p class="block_599">eBay</p>
              <p class="block_611">Evernote</p>
              <p class="block_612">Facebook</p>
              <p class="block_613">FIFA</p>
              <p class="block_606">Flickr</p>
              <p class="block_609">Formula 1</p>
              <p class="block_614">Gmail</p>
              <p class="block_76">Google</p>
              <p class="block_132">Google Apps</p>
              <p class="block_91">Google Calendar</p>
              <p class="block_615">Google Earth</p>
              <p class="block_478">Google Images</p>
              <p class="block_253">Google mail</p>
              <p class="block_616">Google Search</p>
              <p class="block_617">Google Street View</p>
              <p class="block_463">Google Toolbar</p>
              <p class="block_618">Häagen-Dazs</p>
              <p class="block_619">Haribo</p>
              <p class="block_11">Hotmail</p>
              <p class="block_191">IKEA</p>
              <p class="block_191">iMac</p>
              <p class="block_599">IMDb</p>
              <p class="block_620">iOS</p>
              <p class="block_621">iPad</p>
              <p class="block_622">iPhone</p>
              <p class="block_611">Kellogg's</p>
              <p class="block_619">Kit Kat</p>
              <p class="block_606">LEGO</p>
              <p class="block_623">LEGOLAND</p>
              <p class="block_119">edIn</p>
              <p class="block_610">Maroon 5</p>
              <p class="block_624">McDonald's</p>
              <p class="block_610">Minecraft</p>
              <p class="block_621">Mini</p>
              <p class="block_119">Nike</p>
              <p class="block_160">Oral-B</p>
              <p class="block_625">Picasa</p>
              <p class="block_570">Plants vs. Zombies</p>
              <p class="block_615">PlayStation 4</p>
              <p class="block_626">PlayStation 1</p>
              <p class="block_11">Porsche</p>
              <p class="block_375">PowerPoint</p>
              <p class="block_627">PS4</p>
              <p class="block_37">RealPlayer</p>
              <p class="block_29">Samsung Galaxy</p>
              <p class="block_46">Samsung Galaxy S II</p>
              <p class="block_456">Samsung Galaxy S III</p>
              <p class="block_72">Samsung Galaxy S4</p>
              <p class="block_72">Samsung Galaxy S5</p>
              <p class="block_628">Siri</p>
              <p class="block_28">SpongeBob SquarePants</p>
              <p class="block_609">Starbucks</p>
              <p class="block_629">T-Mobile</p>
              <p class="block_609">Toys"R"Us</p>
              <p class="block_600">Tumblr</p>
              <p class="block_622">Twitter</p>
              <p class="block_621">Visa</p>
              <p class="block_164">WhatsApp</p>
              <p class="block_611">WWE '13</p>
              <p class="block_630">Xbox</p>
              <p class="block_610">Xbox 360</p>
              <p class="block_631">Xbox One</p>
              <p class="block_614">Yahoo</p>
              <p class="block_632">YouTube</p>
              <p class="block_633">
                The phrase "Ok Google", as well as possible derivatives such as
                "Ok Google Now" and "Ok Glass", require their own particular
                spelling of "okay". This spelling is unique to these cases.
              </p>
              <p class="block_617">Correct: Ok Google</p>
              <p class="block_634">Incorrect: OK Google</p>
              <p class="block_353">Incorrect: OK GOOGLE</p>
              <p class="block_72">Incorrect: ok google</p>
              <p class="block_182">Incorrect: Okay Google</p>
              <p class="block_146">Incorrect: ok Google</p>
              <p class="block_536">Correct: OK 等下見。</p>
              <p class="block_635">Incorrect: ok 等下見。</p>
              <p class="block_636">Media title</p>
              <p class="block_637">
                Refer to the Google Play Store for official spellings of media
                titles. For film/television, IMDb is also available. If an
                utterance is ambiguous between a media title and a sentence or
                web search, use your judgment for which is more likely; if truly
                unclear, default to media title.
              </p>
              <p class="block_638">
                Do not use quotation marks for media titles.
              </p>
              <p class="block_221">Correct: 瘦身男女</p>
              <p class="block_536">Incorrect: "瘦身男女"</p>
              <p class="block_208">Correct: 指环王电影剧照</p>
              <p class="block_639">Incorrect: "指环王"电影剧照</p>
              <p class="block_640">
                Treat foreign titles the same way as titles in the transcription
                language if you understand them.
              </p>
              <p class="block_200">Correct: 周慧敏 C'est la Vie</p>
              <p class="block_641">Correct: Y Tu Mamá También</p>
              <p class="block_642">
                For English: Transcribe the official media titles even if
                speaker omits word-final consonants or has an accent.
              </p>
              <p class="block_146">Correct: Angry Birds</p>
              <p class="block_634">Incorrect: Angry Bird</p>
              <p class="block_334">Example audio: " angry bird "</p>
              <p class="block_237">Correct: Gangnam Style</p>
              <p class="block_577">Incorrect: Gangdam Style</p>
              <p class="block_643">Example audio: " gangdam style "</p>
              <p class="block_465">
                For English: Capitalize media titles the way they are typically
                capitalized.
              </p>
              <p class="block_335">Correct: Let It Go</p>
              <p class="block_570">Incorrect: Let it go.</p>
              <p class="block_342">Explanation: Search for the song.</p>
              <p class="block_217">Correct: Stand by Me Doraemon</p>
              <p class="block_644">Incorrect: Stand by me Doraemon</p>
              <p class="block_70">Explanation: Search for the movie.</p>
              <p class="block_645">
                For English: Very common alternate or shortened versions of
                titles should also be capitalized.
              </p>
              <p class="block_646">Correct: 我想聽 Taylor Swift 的 Trouble。</p>
              <p class="block_647">
                Explanation: Correct title is "I Knew You Were Trouble".
              </p>
              <p class="block_235">Correct: Transformers 2</p>
              <p class="block_648">
                Explanation: for "Transformers: Revenge of the Fallen"
              </p>
              <p class="block_649">Correct: What Does the Fox Say?</p>
              <p class="block_650">
                Explanation: for "The Fox (What Does the Fox Say?)"
              </p>
              <p class="block_41">Multiple spellings</p>
              <p class="block_651">
                When multiple spellings are attested, use the first spelling
                used in the reference dictionary for your language. If there is
                no entry, Google the word and use the form with the most hits.
              </p>
              <p class="block_193">Correct: 早点</p>
              <p class="block_194">Incorrect: 早點</p>
              <p class="block_652">Explanation: "點" is traditional Chinese.</p>
              <p class="block_193">Correct: 手机</p>
              <p class="block_194">Incorrect: 手機</p>
              <p class="block_652">Explanation: "機" is traditional Chinese.</p>
              <p class="block_193">Correct: 浮云</p>
              <p class="block_194">Incorrect: 浮雲</p>
              <p class="block_653">Explanation: "雲" is traditional Chinese.</p>
              <p class="block_615">Correct: gray</p>
              <p class="block_67">Incorrect: grey</p>
              <p class="block_654">
                Explanation: "gray" is preferred by Merriam-Webster.
              </p>
              <p class="block_655">
                Use official spelling and capitalization for technical terms.
                Google them and pay attention to the correct format.
              </p>
              <p class="block_221">Correct: 乙酰胆碱</p>
              <p class="block_221">Correct: 儿茶酚胺</p>
              <p class="block_656">
                Transcribe common neologisms or buzz words as spoken.
              </p>
              <p class="block_193">Correct: 靠谱</p>
              <p class="block_242">Explanation: It means 可靠.</p>
              <p class="block_273">Correct: 纯爷们</p>
              <p class="block_193">Correct: 绝倒</p>
              <p class="block_193">Correct: 牛逼</p>
              <p class="block_657">
                Use standard spelling for contractions/reductions that commonly
                occur in normal running speech.
              </p>
              <p class="block_273">Correct: 有时候</p>
              <p class="block_194">Incorrect: 有兽</p>
              <p class="block_149">Example audio: " you3 shou4 "</p>
              <p class="block_658">Explanation: as if "有兽"</p>
              <p class="block_340">Correct: 你知道吗?</p>
              <p class="block_222">Incorrect: 你造吗?</p>
              <p class="block_659">Example audio: " ni3 zao4 ma1 "</p>
              <p class="block_434">Explanation: as if "你造吗?"</p>
              <p class="block_456">Correct: I want to go.</p>
              <p class="block_167">Example audio: " i wanna go "</p>
              <p class="block_660">Correct: It is not true.</p>
              <p class="block_353">Incorrect: It's not true.</p>
              <p class="block_661">Example audio: " it is not true "</p>
              <p class="block_662">
                If you hear a word that does not sound like a standard word, but
                it is obviously based on real words, suffixes, or prefixes,
                transcribe as is.
              </p>
              <p class="block_273">Correct: 隨和化</p>
              <p class="block_663">
                Explanation: even if it doesn't sound like a legit word.
              </p>
              <p class="block_46">Correct: interpretate</p>
              <p class="block_664">
                Explanation: even if they meant "interpret"
              </p>
              <p class="block_665">
                If you hear a word that does not sound like a standard word of
                your language because there is a small sound change (i.e.
                accent, speech error, speech impairment, etc), transcribe the
                intended word.
              </p>
              <p class="block_273">Correct: 湖南人</p>
              <p class="block_666">Example audio: " fu2 nan2 len2 "</p>
              <p class="block_667">
                Explanation: Person says "湖南人" with Hunan accent.
              </p>
              <p class="block_273">Correct: 九寨沟</p>
              <p class="block_668">Example audio: " jiu4 zhai3 gou1 "</p>
              <p class="block_669">
                Explanation: Person says "九寨沟" with Sichuan accent.
              </p>
              <p class="block_602">Correct: galaxy</p>
              <p class="block_670">Explanation: Person says "galax".</p>
              <p class="block_671">
                If you hear a word that does not sound like a standard word of
                your language, but it is obviously based on real words,
                suffixes, or prefixes, transcribe as is.
              </p>
              <p class="block_46">Correct: interpretate</p>
              <p class="block_664">
                Explanation: even if they meant "interpret"
              </p>
              <p class="block_273">Correct: 隨和化</p>
              <p class="block_663">
                Explanation: even if it doesn't sound like a legit word.
              </p>
              <p class="block_672">
                Transcribe slang and colloquialisms as spoken. Do not alter
                non-standard speech that the speaker probably wouldn't want
                corrected.
              </p>
              <p class="block_273">Correct: 有木有</p>
              <p class="block_673">Example audio: " you3 mu4 you3 "</p>
              <p class="block_208">Correct: 神马都是浮云。</p>
              <p class="block_674">
                Example audio: " shen2 ma3 dou1 shi4 fu2 yun2 "
              </p>
              <p class="block_199">Correct: 是不是被河蟹了?</p>
              <p class="block_675">
                Example audio: " shi4 bu2 shi4 bei4 he2 xie4 le0 "
              </p>
              <p class="block_340">Correct: 这碉堡了。</p>
              <p class="block_454">Example audio: " zhe4 diao1 bao3 le0 "</p>
              <p class="block_42">
                If you hear a word that does not sound like a standard word of
                your language
              </p>
              <p class="block_676">
                because it appears to be nonsense, first perform a Google search
                for the word. If there is a clear candidate, transcribe that
                word.
              </p>
              <p class="block_221">Correct: 马路牙子</p>
              <p class="block_193">Correct: 跌份</p>
              <p class="block_193">Correct: 白斋</p>
              <p class="block_273">Correct: 马爬犁</p>
              <p class="block_18">
                Transcribe onomatopoeia when clearly spoken. Otherwise, use the
                Unintelligible label as instructed in: Longform generic rules
                &gt; Unintelligible or foreign or singing.
              </p>
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
