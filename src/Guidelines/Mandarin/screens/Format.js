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
            <PageContentHeader currentPage="longform Mandarin" />
            <div className="content text">
              <p class="block_376">Format</p>
              <p class="block_377">Number</p>
              <p class="block_378">
                Use Chinese characters for numbers less than or equal to 10. Use
                Arabic numerals for numbers greater than 10. Unless specified,
                use lowercase characters for 1 to 9, i.e. 一二三四五六七八九
                instead of their full forms ("壹貳參肆伍陸柒捌玖"). For zero,
                use "零" instead of "〇".
              </p>
              <p class="block_345">Correct: 两个人,三到五天,三室一厅。</p>
              <p class="block_379">Explanation: numbers less than ten</p>
              <p class="block_380">
                Correct: 最後 14 堂星期二的課、50 音、班上有 13 個學生。
              </p>
              <p class="block_381">Explanation: numbers greater than ten</p>
              <p class="block_382">
                Use Arabic numerals fo numbers without units.
              </p>
              <p class="block_375">Correct: 99</p>
              <p class="block_373">Example audio: " 九九 "</p>
              <p class="block_267">Correct: 999</p>
              <p class="block_240">Example audio: " 九百九十九 "</p>
              <p class="block_383">
                Use Arabic numerals for numbers with "万" or "亿" expressions.
              </p>
              <p class="block_384">Correct: 5 万</p>
              <p class="block_373">Example audio: " 五万 "</p>
              <p class="block_384">Correct: 1 亿</p>
              <p class="block_373">Example audio: " 一亿 "</p>
              <p class="block_385">
                Use Arabic numerals for numbers with "十", "X 来/几/多"
                expressions.
              </p>
              <p class="block_386">
                Correct: 十来天,20 几岁的女人,月入 1000 多
              </p>
              <p class="block_387">
                Use Chinese characters for inexact expressions.
              </p>
              <p class="block_388">
                Correct: 兩三天、七八件、七八十歲、三四千一個月
              </p>
              <p class="block_389">
                Use Chinese characters for proverbs, sayings, idiomatic and
                idiosyncratic expressions, etc.
              </p>
              <p class="block_210">Correct: 降龙十八掌</p>
              <p class="block_221">Correct: 十二生肖</p>
              <p class="block_390">Correct: 三室一厅、一房一厅一卫一厨</p>
              <p class="block_391">Correct: 六合彩</p>
              <p class="block_392">
                Use Arabic numerals for monetary expressions.
              </p>
              <p class="block_384">Correct: 5 毛</p>
              <p class="block_373">Example audio: " 五毛 "</p>
              <p class="block_393">Correct: 2000 块</p>
              <p class="block_394">Example audio: " 兩千块 "</p>
              <p class="block_265">Correct: 奖金 900 元</p>
              <p class="block_338">Example audio: " 奖金九百元 "</p>
              <p class="block_260">Correct: 收费 10 元</p>
              <p class="block_242">Example audio: " 收费十元 "</p>
              <p class="block_395">Correct: 每坪 32000</p>
              <p class="block_396">Example audio: " 每坪三万二千 "</p>
              <p class="block_222">Correct: 月租 1800</p>
              <p class="block_242">Example audio: " 月租千八 "</p>
              <p class="block_397">
                Transcribe other numbers the way you would write them down in
                your language.
              </p>
              <p class="block_199">Correct: 座位在 7 排 8 号。</p>
              <p class="block_398">Example audio: " 座位在七排八号 "</p>
              <p class="block_394">Correct: 坐 355 到五道口。</p>
              <p class="block_399">Example audio: " 坐三五五到五道口。 "</p>
              <p class="block_400">Correct: 现在双方的比数是 2 比 1。</p>
              <p class="block_401">Example audio: " 现在双方的比数是二比一 "</p>
              <p class="block_402">Explanation: as in scores</p>
              <p class="block_323">Correct: 橙子与柠檬之比例为 4:3。</p>
              <p class="block_403">
                Example audio: " 橙子与柠檬之比例为四比三 "
              </p>
              <p class="block_404">Explanation: as in proportion</p>
              <p class="block_405">Correct: 目前血红素指数是 3.14。</p>
              <p class="block_403">
                Example audio: " 目前血红素指数是三點一四 "
              </p>
              <p class="block_272">Correct: 101 斑點狗</p>
              <p class="block_255">Example audio: " 一零一斑點狗 "</p>
              <p class="block_210">Correct: 一零一中学</p>
              <p class="block_246">
                Example audio: " 一零一中学 or 幺零幺中学 "
              </p>
              <p class="block_406">Correct: 7-Eleven</p>
              <p class="block_407">Example audio: " seven eleven "</p>
              <p class="block_408">Explanation: convenience store</p>
              <p class="block_91">Correct: Nexus 7</p>
              <p class="block_147">Example audio: " nexus seven "</p>
              <p class="block_409">Example audio: " nexus 七 "</p>
              <p class="block_209">Correct: 三星 GALAXY S2</p>
              <p class="block_410">Example audio: " 三星 galaxy s two "</p>
              <p class="block_411">
                Write lists of numbers with digits and without commas.
              </p>
              <p class="block_28">Correct: 0 1 1 2 3 5 8 13</p>
              <p class="block_362">Example audio: " 零一一二三五八十三 "</p>
              <p class="block_412">
                Explanation: Write lists of numbers with Arabic numbers
              </p>
              <p class="block_413">Correct: 我们一起倒数。5 4 3 2 1</p>
              <p class="block_414">
                Explanation: list of numbers, no comma if just counting
              </p>
              <p class="block_415">
                In math expressions or units &amp; measures, transcribe fraction
                words using numerals and slashes.
              </p>
              <p class="block_416">Correct: 他们要买 1/4 公升的牛奶。</p>
              <p class="block_417">Incorrect: 他们要买四分之一公升的牛奶。</p>
              <p class="block_418">Incorrect: 他们要买 1 / 4 公升的牛奶。</p>
              <p class="block_419">
                Incorrect: 他们要买 1⁄4 公升的牛奶。(bad because it includes the
                pre-combined fraction 1⁄4)
              </p>
              <p class="block_314">Incorrect: 他们要买 0.25 公升的牛奶。</p>
              <p class="block_420">
                Example audio: " 他们要买四分之一公升的牛奶 "
              </p>
              <p class="block_421">
                Explanation: Do not use Chinese characters for fraction words.
                Be careful not to include spaces or pre-combined fraction
                characters.
              </p>
              <p class="block_422">Correct: 2/3 x 5/16</p>
              <p class="block_423">Incorrect: 2/3 * 5/16</p>
              <p class="block_239">Incorrect: 2/3 乘 5/16</p>
              <p class="block_316">Incorrect: 三分之二乘十六分之五</p>
              <p class="block_424">Example audio: " 三分之二乘十六分之五 "</p>
              <p class="block_425">
                For mixed numbers in math and units &amp; measures, use Arabic
                numerals with "又".
              </p>
              <p class="block_426">Correct: 3 又 1/2 公里</p>
              <p class="block_230">Example audio: " 三又二分之一公里 "</p>
              <p class="block_427">Correct: 那只可拉熊重 12 又 1/3 磅。</p>
              <p class="block_428">
                Example audio: " 那只可拉熊重十二又三分之一磅。 "
              </p>
              <p class="block_426">Correct: 5 又 1/2 个月</p>
              <p class="block_429">Incorrect: 5.5 个月</p>
              <p class="block_430">Example audio: " 五又二分之一個月 "</p>
              <p class="block_431">Correct: 1/3 + 3 又 1/2</p>
              <p class="block_352">Incorrect: 1/3 + 3 1/2</p>
              <p class="block_432">Example audio: " 三分之一加三又二分之一 "</p>
              <p class="block_433">
                For mixed numbers that represent currency amounts, always use
                decimals.
              </p>
              <p class="block_295">Correct: 你可以借我 2.5 美元嗎?</p>
              <p class="block_401">Example audio: " 你可以借我二点五美元嗎 "</p>
              <p class="block_434">Correct: 这东西要价 10.7 欧。</p>
              <p class="block_362">Example audio: " 这东西要价十点七欧 "</p>
              <p class="block_435">
                Transcribe percentages using numerals and the % sign. (In the
                unlikely case that you encounter a number of a million or
                greater used as a percentage, spell it out.)
              </p>
              <p class="block_200">Correct: 脂肪含量 2%的牛奶</p>
              <p class="block_401">Example audio: " 脂肪含量百分之二的牛奶 "</p>
              <p class="block_405">Correct: 这次卖出了 30%的存货。</p>
              <p class="block_436">
                Example audio: " 这次卖出了百分之三十的存货 "
              </p>
              <p class="block_239">Correct: 百分之一百万</p>
              <p class="block_255">Example audio: " 百分之一百万 "</p>
              <p class="block_437">
                If it really sounds like a math expression, then transcribe it
                with numbers and symbols, with spaces in between.
              </p>
              <p class="block_438">Correct: 1 + 1 = 2</p>
              <p class="block_396">Example audio: " 一加一等于二 "</p>
              <p class="block_439">Correct: 5 x 6</p>
              <p class="block_393">Incorrect: 五乘六</p>
              <p class="block_440">Incorrect: 5 乘 6</p>
              <p class="block_441">Incorrect: 5x6</p>
              <p class="block_394">Example audio: " 五乘六 "</p>
              <p class="block_242">Example audio: " 五乘以六 "</p>
              <p class="block_143">
                If a number appears in a context which calls for a certain
                formatting in your language, use that formatting. Otherwise,
                default to the general rule for transcribing numbers.
              </p>
              <p class="block_442">
                Use Roman numerals only when part of an official name or title.
              </p>
              <p class="block_239">Correct: 暗黑破坏神 III</p>
              <p class="block_255">Example audio: " 暗黑破坏神三 "</p>
              <p class="block_443">Correct: 星际争霸 II</p>
              <p class="block_338">Example audio: " 星际争霸二 "</p>
              <p class="block_444">Correct: SK-II</p>
              <p class="block_55">Example audio: " s k two "</p>
              <p class="block_94">Correct: King Henry VIII</p>
              <p class="block_445">Example audio: " king henry the eighth "</p>
              <p class="block_446">
                Transcribe seasons and episodes of television shows with
                numerals.
              </p>
              <p class="block_426">Correct: 中国好声音 3</p>
              <p class="block_241">Incorrect: 中国好声音三</p>
              <p class="block_431">Correct: 兰陵王第 24 集</p>
              <p class="block_200">Incorrect: 兰陵王第二十四集</p>
              <p class="block_447">Correct: 变形金刚 2</p>
              <p class="block_211">Incorrect: 变形金刚二</p>
              <p class="block_97">Correct: season 3 episode 2</p>
              <p class="block_448">
                Example audio: " season three episode two "
              </p>
              <p class="block_449">
                If a number sounds like a product type, use the common written
                form.
              </p>
              <p class="block_267">Correct: 4x4</p>
              <p class="block_450">
                Explanation: person says, "四乘四", as a truck type.
              </p>
              <p class="block_451">Correct: 1.2 米×2 米</p>
              <p class="block_452">
                Explanation: person says, "一米二乘两米", as a product type.
              </p>
              <p class="block_426">Correct: 3 点 1 刻奶茶</p>
              <p class="block_453">
                Transcribe phone numbers as you would write them down in their
                natural blocks. Use hyphens between blocks in phone numbers.
              </p>
              <p class="block_7">Correct: +86-10-1112-3478</p>
              <p class="block_454">Explanation: landline with country code</p>
              <p class="block_13">Correct: 0086-312-260-7433</p>
              <p class="block_455">
                Example audio: " 零零八六三一二二六零七四三三 "
              </p>
              <p class="block_454">Explanation: landline with country code</p>
              <p class="block_237">Correct: 010-6277-6544</p>
              <p class="block_456">Explanation: landline</p>
              <p class="block_237">Correct: 0991-123-1234</p>
              <p class="block_456">Explanation: landline</p>
              <p class="block_457">Correct: 137-1609-5627</p>
              <p class="block_458">Explanation: mobile phone number</p>
              <p class="block_459">Correct: 400-123-1234</p>
              <p class="block_334">Explanation: toll-free number</p>
              <p class="block_459">Correct: 800-123-1234</p>
              <p class="block_334">Explanation: toll-free number</p>
              <p class="block_460">
                Transcribe alpha-digit sequences (product codes etc.) in their
                most natural way
              </p>
              <p class="block_461">
                (possibly several ways accepted). Do not transcribe credit card
                numbers, etc.
              </p>
              <p class="block_462">Correct: 公交 756 or 756 公交</p>
              <p class="block_463">Correct: XT660</p>
              <p class="block_464">Explanation: Yamaha motorcycle</p>
              <p class="block_103">Currency and unit</p>
              <p class="block_465">
                Transcribe currencies as commonly written in the transcription
                language.
              </p>
              <p class="block_466">Use Chinese characters for currencies.</p>
              <p class="block_467">Correct: 20 元</p>
              <p class="block_394">Example audio: " 二十元 "</p>
              <p class="block_467">Correct: 20 块</p>
              <p class="block_394">Example audio: " 二十块 "</p>
              <p class="block_468">Correct: 20 块钱</p>
              <p class="block_242">Example audio: " 二十块钱 "</p>
              <p class="block_469">Correct: 20 美元</p>
              <p class="block_140">Incorrect: $20</p>
              <p class="block_242">Example audio: " 二十美元 "</p>
              <p class="block_467">Correct: 25 欧</p>
              <p class="block_242">Example audio: " 二十五欧 "</p>
              <p class="block_468">Correct: 50 英镑</p>
              <p class="block_242">Example audio: " 五十英镑 "</p>
              <p class="block_470">
                For ranges or non-specific currency quantities, write everything
                out as spoken.
              </p>
              <p class="block_390">Correct: 那台冷气可能要三或四万块。</p>
              <p class="block_323">Incorrect: 那台冷气可能要三四万块</p>
              <p class="block_471">Correct: 可以借我两三百元吗?</p>
              <p class="block_323">Incorrect: 可以借我兩、三百元吗?</p>
              <p class="block_299">Correct: 大约需要一到两千元。</p>
              <p class="block_472">Incorrect: 大约需要一~两千元。</p>
              <p class="block_116">
                Correct: I need four or five hundred dollars.
              </p>
              <p class="block_379">Correct: one to five hundred dollars</p>
              <p class="block_473">Correct: 100 to 500 dollars</p>
              <p class="block_474">
                Example audio: " one hundred to five hundred dollars "
              </p>
              <p class="block_475">
                Abbreviate all units that follow numeric values.
              </p>
              <p class="block_15">Correct: 256MB</p>
              <p class="block_476">Example audio: " 二五六 megabytes "</p>
              <p class="block_477">
                Explanation: Common technical abbreviations include "megabyte -
                MB", "kilobyte - KB", "gigabyte - GB", "terabyte - TB".
              </p>
              <p class="block_478">Correct: 50mm</p>
              <p class="block_229">Example audio: " 五十 m m "</p>
              <p class="block_267">Correct: 5kg</p>
              <p class="block_199">Example audio: " 五 k g "</p>
              <p class="block_110">Correct: 750W</p>
              <p class="block_479">
                Example audio: " seven hundred fifty watt "
              </p>
              <p class="block_480">Transcribe Chinese units as spoken.</p>
              <p class="block_468">Correct: 80 平方</p>
              <p class="block_242">Example audio: " 八十平方 "</p>
              <p class="block_481">Correct: 100 米</p>
              <p class="block_394">Example audio: " 一百米 "</p>
              <p class="block_482">Correct: 3 公里</p>
              <p class="block_483">Example audio: " 三公里 "</p>
              <p class="block_481">Correct: 750 瓦</p>
              <p class="block_338">Example audio: " 七百五十瓦 "</p>
              <p class="block_484">Correct: 5 千克</p>
              <p class="block_394">Example audio: " 五千克 "</p>
              <p class="block_462">Explanation: "千克" as a unit</p>
              <p class="block_485">
                Transcribe all numeric values preceding units in numeral form,
                even if under 10.
              </p>
              <p class="block_199">Correct: 这只小猫 3 磅重。</p>
              <p class="block_230">Example audio: " 这只小猫三磅重。 "</p>
              <p class="block_486">Correct: 我今天喝了 2 公升的水。</p>
              <p class="block_401">Example audio: " 我今天喝了兩公升的水。 "</p>
              <p class="block_110">Date and time</p>
              <p class="block_487">Use Arabic numerals for dates.</p>
              <p class="block_488">Correct: 2011 年 4 月 28 日</p>
              <p class="block_401">Example audio: " 二零一一年四月二十八日 "</p>
              <p class="block_209">Correct: 2009 年 2 至 4 月</p>
              <p class="block_362">Example audio: " 二零零九年二至四月 "</p>
              <p class="block_255">Correct: 保存期限是到 05102012</p>
              <p class="block_455">
                Example audio: " 保存期限是到零五一零二零一二 "
              </p>
              <p class="block_489">Correct: 鄧麗君 90 演唱會</p>
              <p class="block_230">Example audio: " 鄧麗君九零演唱會 "</p>
              <p class="block_221">Correct: 12 月 12</p>
              <p class="block_338">Example audio: " 十二月十二 "</p>
              <p class="block_490">Correct: 3.15 消费者权益日</p>
              <p class="block_399">Example audio: " 三幺五消费者权益日 "</p>
              <p class="block_491">
                When the date is spoken as a sequence of numbers, transcribe as
                such.
              </p>
              <p class="block_423">Correct: 19/12/2014</p>
              <p class="block_403">
                Example audio: " 十九斜杠十二斜杠二零一四 "
              </p>
              <p class="block_492">
                Explanation: Don't add slash or dash unless explicitly spoken or
                if it is very unnatural to leave them out (if in doubt, leave
                them out).
              </p>
              <p class="block_493">Correct: 2010-7-13</p>
              <p class="block_362">Example audio: " 二零一零槓七槓十三 "</p>
              <p class="block_492">
                Explanation: Don't add slash or dash unless explicitly spoken or
                if it is very unnatural to leave them out (if in doubt, leave
                them out).
              </p>
              <p class="block_494">
                Use the natural form for transcribing times whenever possible.
              </p>
              <p class="block_495">
                Use Arabic numerals for numbers in "~點/時~分~秒" and
                "~半/~一/兩/三刻" expressions.
              </p>
              <p class="block_384">Correct: 2 点</p>
              <p class="block_373">Example audio: " 兩点 "</p>
              <p class="block_496">Correct: 2 时 05 分</p>
              <p class="block_338">Example audio: " 两时零五分 "</p>
              <p class="block_272">Correct: 11 点 58 分</p>
              <p class="block_398">Example audio: " 十一点五十八分 "</p>
              <p class="block_427">Correct: 主任领班说下午 5 点 40 分。</p>
              <p class="block_403">
                Example audio: " 主任领班说下午五点四十分 "
              </p>
              <p class="block_370">Correct: 3 点 15</p>
              <p class="block_242">Example audio: " 三点十五 "</p>
              <p class="block_497">Correct: 3 点一刻</p>
              <p class="block_498">Example audio: " 三点一刻 "</p>
              <p class="block_499">Correct: 6 点半到 12 点三刻</p>
              <p class="block_362">Example audio: " 六点半到十二点三刻 "</p>
              <p class="block_500">Correct: 4 p.m.</p>
              <p class="block_490">Example audio: " 四 p m "</p>
              <p class="block_501">Explanation: Use p.m. and a.m. if spoken.</p>
              <p class="block_320">
                Use Arabic numerals for temporal numbers greater than 10, and
                Chinese characters for temporal numbers smaller than 10.
              </p>
              <p class="block_295">Correct: 七个月,四周,一天两夜</p>
              <p class="block_255">Incorrect: 7 个月,4 周,1 天 2 夜</p>
              <p class="block_502">Correct: 24 个月,39 周,14 天</p>
              <p class="block_417">Incorrect: 二十四个月,三十九周,十四天</p>
              <p class="block_503">Use Chinese characters in "星期".</p>
              <p class="block_273">Correct: 星期一</p>
              <p class="block_504">Incorrect: 星期 1</p>
              <p class="block_114">Address</p>
              <p class="block_505">
                Use the most natural written form for addresses, depending on
                the locale and the context in the sentence.
              </p>
              <p class="block_263">Correct: 14 号楼 605</p>
              <p class="block_398">Example audio: " 十四号楼六零五 "</p>
              <p class="block_506">Correct: 北京市朝阳区国家体育场南路 1 号</p>
              <p class="block_507">
                Correct: 上海市徐汇区中山南二路 12 号 17 幢西 1 之 3 楼
              </p>
              <p class="block_508">
                Explanation: Use Chinese characters for street names and section
                number, but Arabic numerals for lane numbers, house numbers and
                floor numbers. Use "之" instead of hyphens.
              </p>
              <p class="block_509">
                Correct: 上海市徐汇区苍梧路 12 号 17 幢西 1 之 3F。
              </p>
              <p class="block_510">
                Example audio: " 上海市徐汇区苍梧路 12 号 17 幢西 1 之 3f "
              </p>
              <p class="block_119">Web</p>
              <p class="block_511">
                Write URLs, email addresses, and Twitter hashtags as they are
                spoken and don't capitalize them.
              </p>
              <p class="block_512">
                <span class="text_">Correct: </span>
                <span class="text_1">www.google.com </span>
              </p>
              <p class="block_513">
                Example audio: " san1 w dian3 google dian3 com "
              </p>
              <p class="block_7">Correct: wang@google.com</p>
              <p class="block_428">
                Example audio: " w a n g 圈 a google 点儿 c o m "
              </p>
              <p class="block_514">
                Do not correct speaker errors such as transcribing a slash when
                the user actually says "backslash".
              </p>
              <p class="block_7">Correct: newyorktimes.com</p>
              <p class="block_339">
                Example audio: " new york times dian3 com "
              </p>
              <p class="block_515">
                Explanation: It is likely that "nytimes.com" is what speaker
                intended to say.
              </p>
              <p class="block_516">
                <span class="text_">Correct: </span>
                <span class="text_1">http:\\mail.yahoo.com </span>
              </p>
              <p class="block_296">
                Example audio: " h t t p colon backslash backslash mail dot
                yahoo dot com "
              </p>
              <p class="block_517">
                If the speaker drops a "w" or dots and it's an obvious URL, you
                should correct these errors. If the speaker doesn't say the "w"s
                at all, do not add them.
              </p>
              <p class="block_512">
                <span class="text_">Correct: </span>
                <span class="text_1">www.google.com </span>
              </p>
              <p class="block_301">
                Example audio: " w w dian3 google dian3 com "
              </p>
              <p class="block_188">
                Explanation: If the user mistakenly says "ww", transcribe "www".
              </p>
              <p class="block_518">
                <span class="text_">Correct: </span>
                <span class="text_1">www.123.com </span>
              </p>
              <p class="block_347">
                Example audio: " w w w yi2 er4 san1 dian3 com "
              </p>
              <p class="block_519">
                Explanation: Also transcribe the dot in an obvious URL, even if
                the speaker did not include it.
              </p>
              <p class="block_520">
                If a URL lacks "http", "www", or "com", no need to add.
                Transcribe what is said.
              </p>
              <p class="block_140">Correct: www.</p>
              <p class="block_521">Example audio: " san1 w dian3 "</p>
              <p class="block_522">
                If a URL is spelled out in individual letters, transcribe
                without spaces between individual letters.
              </p>
              <p class="block_523">
                <span class="text_">Correct: </span>
                <span class="text_1">www.target.com </span>
              </p>
              <p class="block_248">
                Example audio: " w w w dian3 t a r g e t dian3 c o m "
              </p>
              <p class="block_524">Correct: .com</p>
              <p class="block_525">Example audio: " dian3 com "</p>
              <p class="block_41">Correct: 163.com</p>
              <p class="block_526">
                Example audio: " yao1 liu4 san1 dian3 c o m "
              </p>
              <p class="block_132">Abbreviation</p>
              <p class="block_527">
                Do not abbreviate unless the speaker says an abbreviated form.
              </p>
              <p class="block_416">Correct: 晚上 9 点约在清华东门见。</p>
              <p class="block_360">
                Explanation: "清华"is a short term for "清华大学".
              </p>
              <p class="block_228">Correct: 他好像有在用 K 粉。</p>
              <p class="block_528">
                Explanation: "K 粉" is a short term for Ketamine.
              </p>
              <p class="block_349">Correct: 手机上的 App.常常在更新。</p>
              <p class="block_529">
                Example audio: " 手机上的 a p p 常常在更新 "
              </p>
              <p class="block_134">Correct: Warriors versus Lakers</p>
              <p class="block_530">Incorrect: Warriors vs. Lakers</p>
              <p class="block_531">Example audio: " warriors versus lakers "</p>
              <p class="block_167">Correct: Warriors verse Lakers</p>
              <p class="block_530">Incorrect: Warriors vs. Lakers</p>
              <p class="block_532">Example audio: " warriors verse lakers "</p>
              <p class="block_7">Correct: Warriors vs. Lakers</p>
              <p class="block_44">Example audio: " warriors v s lakers "</p>
              <p class="block_533">Correct: Roe v. Wade</p>
              <p class="block_534">Example audio: " roe v wade "</p>
              <p class="block_28">Explanation: court cases</p>
              <p class="block_535">
                Abbreviate English titles when accompanied by last names, not
                otherwise.
              </p>
              <p class="block_536">Correct: 这是 Mr.杜。</p>
              <p class="block_319">Example audio: " 这是 mister 杜 "</p>
              <p class="block_537">Correct: 请问 Dr. Smith 在吗?</p>
              <p class="block_318">Example audio: " 请问 doctor smith 在吗 "</p>
              <p class="block_538">
                Correct: 王先生去年拿到法律的 doctor 学位。
              </p>
              <p class="block_539">
                Example audio: " 王先生去年拿到法律的 doctor 学位 "
              </p>
              <p class="block_540">
                If a brand name uses periods, include the periods.
              </p>
              <p class="block_541">Correct: Dr.eye 移动电视</p>
              <p class="block_394">Incorrect: Dr eye 移动电视</p>
              <p class="block_400">Explanation: doctor eye 移动电视</p>
              <p class="block_542">
                For English: In acronyms, do not use periods between letters.
              </p>
              <p class="block_543">Correct: AT&amp;T, MP3</p>
              <p class="block_148">Explanation: brands and products</p>
              <p class="block_176">
                Correct: US, USA, Washington D.C., John F Kennedy, TJ Smith
              </p>
              <p class="block_544">
                Explanation: geographic and personal names
              </p>
              <p class="block_545">Correct: NASA</p>
              <p class="block_546">Explanation: pronounced as words</p>
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
