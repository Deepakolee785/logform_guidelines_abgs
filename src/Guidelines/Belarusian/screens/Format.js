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
            <PageContentHeader currentPage="longform Belarusian" />
            <div className="content text">
              <p class="block_454">Format </p>
              <p class="block_455">
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.{' '}
              </p>
              <p class="block_456">Number </p>
              <p class="block_457">
                Cardinals and ordinals from 0 to 9 are written with letters
                (except for measures and currency - see Currency and Unit). Use
                digits for cardinals and ordinals 10 and above, even if they are
                coordinated with numbers under 10. Transcribe all decimal
                numbers as digits.{' '}
              </p>
              <p class="block_458">
                <span class="text_4">Correct: У класе дзевяць студэнтаў. </span>
                <span class="text_5">Explanation: numbers less than 10 </span>
              </p>
              <p class="block_459">
                <span class="text_4">Correct: У класе 13 студэнтаў. </span>
                <span class="text_5">Explanation: numbers 10 or above </span>
              </p>
              <p class="block_460">
                <span class="text_4">Correct: 3,14 </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">тры кропка адзін чатыры </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_461">Explanation: decimal numbers </p>
              <p class="block_462">
                If a large number consists of only a number followed by
                "міл’ён", "міл’ярд" or higher, then transcribe as a numeral plus
                word. Otherwise, transcribe as numerals.{' '}
              </p>
              <p class="block_463">
                <span class="text_4">Correct: 1 мільён гусей </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">адзін мільён гусей </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_464">
                <span class="text_4">Correct: мільён гусей </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">мільён гусей </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_465">
                <span class="text_4">Correct: 1.000 гусей </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">тысяча гусей </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_466">
                <span class="text_4">Correct: 1,5 мільярда даляраў </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">адзін з паловай мільярда </span>
              </p>
              <p class="block_467">
                <span class="text_1">даляраў </span>
                <span class="text_">" </span>
              </p>
              <p class="block_468">
                Write lists of numbers with digits and without commas.{' '}
              </p>
              <p class="block_469">
                <span class="text_4">Correct: 0 1 1 2 3 5 8 13 </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">нуль адзін адзін два тры </span>
              </p>
              <p class="block_470">
                <span class="text_1">пяць восем трынаццаць </span>
                <span class="text_">" </span>
              </p>
              <p class="block_471">
                <span class="text_4">Correct: 3 2 1 узлятаем </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">тры два адзін узлятаем </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_472">
                Explanation: list of numbers, no comma if just{' '}
              </p>
              <p class="block_473">counting </p>
              <p class="block_474">
                For long numbers (4+ digits) indicating quantity, insert the
                relevant separator (comma, decimal point, or space, depending on
                language).{' '}
              </p>
              <p class="block_220">
                In math expressions or units &amp; measures, transcribe fraction
                words using numerals and slashes.{' '}
              </p>
              <p class="block_475">
                <span class="text_4">
                  Correct: Ім патрэбна 1/4 фунта цукру.{' '}
                </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">ім патрэбна чвэрць фунта </span>
              </p>
              <p class="block_476">
                <span class="text_1">цукру </span>
                <span class="text_">" </span>
              </p>
              <p class="block_477">
                <span class="text_4">
                  Correct: Праз 3/4 мілі павярнуць направа{' '}
                </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">праз тры чвэрці мілі </span>
              </p>
              <p class="block_478">
                <span class="text_1">павярнуць направа </span>
                <span class="text_">" </span>
              </p>
              <p class="block_479">
                <span class="text_4">
                  Correct: Праз 2/3 км павярнуць налева.{' '}
                </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">праз дзве траціны кіламетра </span>
              </p>
              <p class="block_480">
                <span class="text_1">павярнуць налева </span>
                <span class="text_">" </span>
              </p>
              <p class="block_481">
                <span class="text_4">
                  Correct: Нам патрэбен 5/16-цалевы шруб.{' '}
                </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">нам патрэбен пяць </span>
              </p>
              <p class="block_482">
                <span class="text_1">шаснаццатых цалевы шруб </span>
                <span class="text_">" </span>
              </p>
              <p class="block_483">
                For mixed numbers that represent currency amounts, always use
                decimals.{' '}
              </p>
              <p class="block_484">Correct: Не маглі б вы пазычыць мне 2,50 </p>
              <p class="block_485">рубля? </p>
              <p class="block_486">
                <span class="text_">Example audio: " </span>
                <span class="text_1">не маглі б вы пазычыць мне </span>
              </p>
              <p class="block_487">
                <span class="text_1">два з паловай рубля </span>
                <span class="text_">" </span>
              </p>
              <p class="block_488">
                Correct: Яна купіла домік на пляжы за 7,5{' '}
              </p>
              <p class="block_489">мільёнаў руб. </p>
              <p class="block_490">
                <span class="text_">Example audio: " </span>
                <span class="text_1">яна купіла домік на пляжы </span>
              </p>
              <p class="block_491">
                <span class="text_1">за сем з паловай мільёнаў руб </span>
                <span class="text_">" </span>
              </p>
              <p class="block_492">
                Transcribe percentages using numerals and the % sign. (In the
                unlikely case that you encounter a number of a million or
                greater used as a percentage, spell it out.){' '}
              </p>
              <p class="block_493">Correct: 2% малако </p>
              <p class="block_494">Correct: 1 мільён адсоткаў </p>
              <p class="block_495">
                If a number appears in a context which calls for a certain
                formatting in your language, use that formatting. Otherwise,
                default to the general rule for transcribing numbers.{' '}
              </p>
              <p class="block_496">
                Transcribe phone numbers using the most common format in the
                transcription language.{' '}
              </p>
              <p class="block_497">Correct: 8 017 285 03 21 </p>
              <p class="block_498">
                <span class="text_4">Correct: +375 17 204 77 30 </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">плюс трыста семдзесят </span>
              </p>
              <p class="block_499">пяць адзін сем два нуль чатыры сем сем </p>
              <p class="block_500">
                <span class="text_1">нуль тры </span>
                <span class="text_">" </span>
              </p>
              <p class="block_501">Correct: дадатковы нумар 4554 </p>
              <p class="block_502">
                If it really sounds like a math expression, then transcribe it
                with numbers and symbols, with spaces in between.{' '}
              </p>
              <p class="block_503">
                <span class="text_4">Correct: 5 / 6 ^ 3 </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">пяць падзеленыя на шэсць </span>
              </p>
              <p class="block_504">
                <span class="text_1">да трэцяй </span>
                <span class="text_">" </span>
              </p>
              <p class="block_505">
                <span class="text_">Example audio: " </span>
                <span class="text_1">пяць дзеліцца на шэсць кубе </span>
              </p>
              <p class="block_506">" </p>
              <p class="block_507">
                <span class="text_4">Correct: Колькі будзе 5 * 6? </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">колькі будзе пяць </span>
              </p>
              <p class="block_508">
                <span class="text_1">памножанае на шэсць </span>
                <span class="text_">" </span>
              </p>
              <p class="block_509">
                <span class="text_10">Correct: √3 </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">квадратны корань з трох </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_510">
                <span class="text_4">Correct: Колькі будзе 8 * 12? </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">колькі будзе восем </span>
              </p>
              <p class="block_511">
                <span class="text_1">памножаныя на дванаццаць </span>
                <span class="text_">" </span>
              </p>
              <p class="block_512">Correct: Колькі будзе тры алігатары </p>
              <p class="block_513">падзеленыя на дзве ігуаны? </p>
              <p class="block_514">
                Explanation: Does not sound like a true math{' '}
              </p>
              <p class="block_515">expression with useful units. </p>
              <p class="block_516">Currency and unit </p>
              <p class="block_517">
                Transcribe currencies as commonly written in the transcription
                language.{' '}
              </p>
              <p class="block_518">
                <span class="text_4">Correct: 1 руб. </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">адзін рубель </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_519">
                <span class="text_4">Correct: 10 руб. </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">дзесяць рублёў </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_520">
                <span class="text_4">
                  Correct: Колькі будзе 20 руб. у доларах ЗША?{' '}
                </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">колькі будзе дваццаць </span>
              </p>
              <p class="block_521">
                <span class="text_1">рублёў у доларах зша </span>
                <span class="text_">" </span>
              </p>
              <p class="block_522">
                For all other currencies and slang terms for money, spell out
                the words.{' '}
              </p>
              <p class="block_523">Correct: 200 ен </p>
              <p class="block_524">Incorrect: ¥200 </p>
              <p class="block_229">Incorrect: дзвесце ен </p>
              <p class="block_525">For degrees, use the ° symbol. </p>
              <p class="block_526">Correct: Звонку 20°. </p>
              <p class="block_527">
                Correct: Сёння у Брэсце пяць ніжей за нуль.{' '}
              </p>
              <p class="block_528">Incorrect: Сёння у Брэсце -5. </p>
              <p class="block_529">
                <span class="text_">Example audio: " </span>
                <span class="text_1">сёння у брэсце пяць ніжей </span>
              </p>
              <p class="block_530">
                <span class="text_1">за нуль </span>
                <span class="text_">" </span>
              </p>
              <p class="block_531">
                Abbreviate all units that follow numeric values.{' '}
              </p>
              <p class="block_532">
                <span class="text_4">
                  Correct: Я купіла 10 л апельсінавага соку.{' '}
                </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">я купіла дзесяць літраў </span>
              </p>
              <p class="block_533">
                <span class="text_1">апельсінавага соку </span>
                <span class="text_">" </span>
              </p>
              <p class="block_534">
                If it is clear from context that a number or number sequence
                refers to currency or time, format it as such.{' '}
              </p>
              <p class="block_535">Correct: Завядзіце будзільнік на 5:45. </p>
              <p class="block_536">Incorrect: Завядзіце будзільнік на 545. </p>
              <p class="block_537">
                <span class="text_">Example audio: " </span>
                <span class="text_1">завядзіце будзільнік на пяць </span>
              </p>
              <p class="block_538">
                <span class="text_1">сорак пяць </span>
                <span class="text_">" </span>
              </p>
              <p class="block_539">Date and time </p>
              <p class="block_540">
                Use the natural form for transcribing dates.{' '}
              </p>
              <p class="block_541">
                <span class="text_4">Correct: 12 ліпеня 1964 </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">дванадцтага ліпеня тысяча </span>
              </p>
              <p class="block_542">
                <span class="text_1">
                  дзевятьсот шэсцьдзесят чацвёртага года{' '}
                </span>
                <span class="text_">" </span>
              </p>
              <p class="block_543">
                <span class="text_4">Correct: восень 98-га </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">восень дзевяноста восьмага </span>
              </p>
              <p class="block_544">" </p>
              <p class="block_466">
                <span class="text_4">Correct: музыка 80-х </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">музыка васьмідзесятых </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_545">
                <span class="text_4">Correct: серада, 6 сакавіка </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">серада шостае сакавіка </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_546">
                <span class="text_13">
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.{' '}
                </span>
                <span class="text_14">
                  <sub class="calibre2">Correct: 3:00 </sub>
                </span>
                <span class="text_15">
                  <sub class="calibre2">Example audio: " </sub>
                </span>
                <span class="text_16">
                  <sub class="calibre2">тры гадзіны </sub>
                </span>
                <span class="text_15">
                  <sub class="calibre2">" </sub>
                </span>
              </p>
              <p class="block_547">
                <span class="text_4">Correct: Да сустрэчы у 8:00. </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">да сустрэчы а восьмай </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_548">
                <span class="text_4">Correct: 11:50 </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">без дзесяці дванаццаць </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_549">
                <span class="text_4">Correct: каля 8:00 </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">каля восьмай </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_550">
                Use p.m. and a.m. if "вечара" or "раніцы" are spoken.{' '}
              </p>
              <p class="block_551">
                <span class="text_4">Correct: 6:00 p.m. </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">у шэсць гадзін вечара </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_552">Address </p>
              <p class="block_553">
                Favor full spellings over abbreviations where natural, but use
                abbreviations when explicitly spoken.{' '}
              </p>
              <p class="block_554">Use commas for ENTITY, LOCATION. </p>
              <p class="block_555">Correct: Д-р Іваноў, Івацэвічы </p>
              <p class="block_556">Correct: маршрутызатар, Трэнднэт </p>
              <p class="block_557">Correct: Дзікае паляванне караля Стаха, </p>
              <p class="block_558">Вялікі тэатр оперы і балета </p>
              <p class="block_259">Correct: Грай кафэ, Інтэрнацыянальная </p>
              <p class="block_559">Correct: Мінская гарадская ратуша, Мінск </p>
              <p class="block_560">Web </p>
              <p class="block_561">
                Write URLs, email addresses, and Twitter hashtags as they are
                spoken and don't capitalize them.{' '}
              </p>
              <p class="block_562">
                <span class="text_4">Correct: www.google.by </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">дабл ю дабл ю дабл ю </span>
              </p>
              <p class="block_563">
                <span class="text_1">
                  кропка гугл кропка к о кропка бі yай{' '}
                </span>
                <span class="text_">" </span>
              </p>
              <p class="block_564">
                <span class="text_4">Correct: Люблю дранікі. #хобі </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">люблю дранікі хэштэг хобі </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_565">
                <span class="text_4">Correct: jan@example.org </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">ян эт ігзампл кропка орг </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_566">
                <span class="text_4">Correct: amazon.com </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">амазон дот ком </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_567">
                If the speaker drops a "w" or dots and it's an obvious URL, you
                should correct these errors. If the speaker doesn't say the "w"s
                at all, do not add them.{' '}
              </p>
              <p class="block_503">
                <span class="text_4">Correct: www.google.by </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">дабл ю дабл ю кропка гугл </span>
              </p>
              <p class="block_568">
                <span class="text_1">кропка бі yай </span>
                <span class="text_">" </span>
              </p>
              <p class="block_569">
                <span class="text_4">Correct: www.forbes.com </span>
                <span class="text_8">Example audio: " </span>
                <span class="text_9">дабл ю дабл ю дабл ю </span>
              </p>
              <p class="block_570">
                <span class="text_1">кропка форбз кропка ком </span>
                <span class="text_">" </span>
              </p>
              <p class="block_571">Abbreviation </p>
              <p class="block_572">
                Do not abbreviate unless the speaker says an abbreviated form.{' '}
              </p>
              <p class="block_573">Correct: Славія супраць ЗЛіНа </p>
              <p class="block_574">
                Incorrect: Славія супраць завода ліцця...{' '}
              </p>
              <p class="block_575">
                <span class="text_">Example audio: " </span>
                <span class="text_1">славія супраць зліна </span>
                <span class="text_">" </span>
              </p>
              <p class="block_576">Correct: Пруды, Мінская вобл. </p>
              <p class="block_577">Incorrect: Пруды, Мінская вобласць </p>
              <p class="block_578">
                <span class="text_">Example audio: " </span>
                <span class="text_1">пруды мінская вобласць </span>
                <span class="text_">" </span>
              </p>
              <p class="block_579">
                Abbreviate titles for people only when they precede proper names
                and capitalize them only if they occur at the beginning of a
                sentence.{' '}
              </p>
              <p class="block_580">Correct: Д-р Іваноў. </p>
              <p class="block_581">
                Correct: Мой доктар кажа, што трэба больш{' '}
              </p>
              <p class="block_582">займацца фізічнымі практыкаваннямі. </p>
              <p class="block_583">Correct: Сп. Іваноў не даступны. </p>
              <p class="block_584">Correct: Эй, панe, яна мая сястра. </p>
              <p class="block_585">Correct: Д-ру Ёсіноры Асумі прысвоілі </p>
              <p class="block_586">Нобелеўскую прэмію. </p>
              <p class="block_587">Correct: Нобелеўскую прэмію ў галіне </p>
              <p class="block_588">літаратуры прысвоілі сп. Алексіевіч. </p>
              <p class="block_589">
                In acronyms, do not use periods between letters.{' '}
              </p>
              <p class="block_590">Correct: ФПБ, СФП, МКСП </p>
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
