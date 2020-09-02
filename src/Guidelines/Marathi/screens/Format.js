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
            <PageContentHeader currentPage="longform Marathi" />
            <div className="content text">
              <p class="text_5">Format </p>
              <p class="block_556">
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <p class="block_307">Number</p>
              <p class="block_557">
                Only Western Arabic numerals should be used.
              </p>
              <p class="block_219">
                Cardinals and ordinals from 0 to 9 are written with letters
                (except for measures and currency - see Currency and Unit).
              </p>
              <p class="block_558">Correct: मा ा वग त नऊ मल आहत.</p>
              <p class="block_559">Incorrect: मा ा वग त 9 मल आहत.</p>
              <p class="block_560">
                Explanation: Numbers less than 10 should be
              </p>
              <p class="block_561">
                written out, so the number 9 should be written
              </p>
              <p class="block_562">out as "नऊ".</p>
              <p class="block_563">Correct: मा ा वग त 13 मल आहत.</p>
              <p class="block_564">Incorrect: मा ा वग त तरा मल आहत.</p>
              <p class="block_565">
                Explanation: Numbers 10 or above use digits. The
              </p>
              <p class="block_566">
                number 13 should not be written out as "तरा", just
              </p>
              <p class="block_567">use the digits "13".</p>
              <p class="block_568">
                Use digits for cardinals and ordinals 10 and above, even if they
                are coordinated with numbers under 10.
              </p>
              <p class="block_569">Correct: मा ा कड सहा क ी आ ण 12 पोपट आहत.</p>
              <p class="block_570">Incorrect: मा ा कड 6 क ी आ ण 12 पोपट आहत.</p>
              <p class="block_571">Incorrect: मा ा कड सहा क ी आ ण बारा पोपट</p>
              <p class="block_572">आहत.</p>
              <p class="block_573">
                Explanation: Even though this sentence has "क ी
              </p>
              <p class="block_574">
                and पोपट " coordinated with numbers, since 6 is
              </p>
              <p class="block_575">
                less than 10, it should be written out as "सहा ",
              </p>
              <p class="block_576">while 12 should use digits.</p>
              <p class="block_577">Transcribe all decimal numbers as digits.</p>
              <p class="block_578">
                <span class="text_18">Example </span>
                <span class="text_6">Correct: 3.14 </span>
              </p>
              <p class="block_579">
                <span class="text_8">audio: " </span>
                <span class="text_9">तीन पॉइट एक चार </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_580">Incorrect: तीन पॉइट एक चार</p>
              <p class="block_239">
                Explanation: Even though 3.14 is less than 10, the
              </p>
              <p class="block_581">
                correct transcription uses digits and does not
              </p>
              <p class="block_582">
                spell out "3.14" as "तीन पॉ ट एक चार" because
              </p>
              <p class="block_583">decimal numbers always use digits.</p>
              <p class="block_584">
                When two or more numbers refer to the same noun, and one number
                is 10 or greater, transcribe both as numerals.
              </p>
              <p class="block_585">Correct: नी 9 का 10 मास आणल</p>
              <p class="block_586">Incorrect: नी नऊ का 10 मास आणल</p>
              <p class="block_587">
                Explanation: Even though 9 is less than 10, both
              </p>
              <p class="block_574">
                numbers refer to " मास" and one of the numbers
              </p>
              <p class="block_588">
                is 10 or greater so write out both numbers using
              </p>
              <p class="block_589">digits "9 or 10".</p>
              <p class="block_590">
                Write lists of numbers with digits and without commas.
              </p>
              <p class="block_591">Correct: 0 1 1 2 3 5 8 13</p>
              <p class="block_592">Incorrect: 0, 1, 1, 2, 3, 5, 8, 13</p>
              <p class="block_593">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">श एक एक दोन तीन पाच आठ </span>
              </p>
              <p class="block_594">
                <span class="text_9">तरा </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_595">
                Explanation: Because the numbers are listed,
              </p>
              <p class="block_596">
                transcribe all of them with digits. Do not include
              </p>
              <p class="block_597">commas.</p>
              <p class="block_598">Correct: 3 2 1 आ ण चाल</p>
              <p class="block_599">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">तीन दोन एक आ ण चाल </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_600">Incorrect: 3, 2, 1 आ ण चाल</p>
              <p class="block_601">
                Explanation: Even though “3 2 1” is part of a
              </p>
              <p class="block_602">
                sentence, the numbers are still transcribed
              </p>
              <p class="block_603">
                using digits and without commas because they
              </p>
              <p class="block_604">are considered a list of numbers.</p>
              <p class="block_605">
                If the speaker in the audio says a number followed by "लाख",
                "कोटी", "करोड", "अ " or higher, then transcribe it as a numeral
                followed by the word. Otherwise, transcribe as numerals
                following the rules below.
              </p>
              <p class="block_606">Correct: 3 लाख</p>
              <p class="block_607">Incorrect: 3,00,000</p>
              <p class="block_608">
                Explanation: Since this example is just a number
              </p>
              <p class="block_609">
                followed by "लाख", it is written out as "3"
              </p>
              <p class="block_610">followed by "लाख".</p>
              <p class="block_611">Correct: 7.8 अ</p>
              <p class="block_612">Incorrect: 7,01,80,00,000</p>
              <p class="block_613">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">सात पॉइट आठ अ </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_614">
                Explanation: The speaker says the number at the
              </p>
              <p class="block_615">
                beginning as a decimal so just write "सात पॉइट
              </p>
              <p class="block_616">
                आठ" using digits "7.8" and the write out "अ "
              </p>
              <p class="block_617">after it.</p>
              <p class="block_618">
                <span class="text_13">Correct: 9,87,65,43,291 </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">नऊ अ स ायशी कोटी पास </span>
              </p>
              <p class="block_619">
                <span class="text_9">लाख चाळ स हजार दोनश ए ा णव </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_620">
                Explanation: Here the number is said with "अ ",
              </p>
              <p class="block_621">
                but it's further specified, so write out the whole
              </p>
              <p class="block_622">number with numerals as "9,87,65,43,291".</p>
              <p class="block_623">
                Use the Indian numbering system to format large numbers when the
                speaker says "लाख", "कोटी", "करोड" or "अ ".
              </p>
              <p class="block_624">Correct: 12,12,12,123</p>
              <p class="block_625">Incorrect: 121,212,123</p>
              <p class="block_626">
                Explanation: This number is transcribed following
              </p>
              <p class="block_627">
                the formatting rules of the Indian numbering
              </p>
              <p class="block_628">system because the speaker said "लाख" and</p>
              <p class="block_629">"कोटी".</p>
              <p class="block_630">
                For all other long numbers (4+ digits), transcribe a comma
                between groups of three digits.
              </p>
              <p class="block_631">
                <span class="text_18">Example </span>
                <span class="text_6">Correct: 10,000 </span>
              </p>
              <p class="block_632">
                <span class="text_8">audio: " </span>
                <span class="text_9">दहा हजार </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_633">Incorrect: 10000</p>
              <p class="block_634">
                Explanation: Long numbers of 4 or more digits
              </p>
              <p class="block_635">
                use a comma as a separator between groups of
              </p>
              <p class="block_636">
                three digits. So "दहा हजार" should be written as
              </p>
              <p class="block_637">
                "10,000" with a comma before the last three
              </p>
              <p class="block_638">digits.</p>
              <p class="block_639">
                In math expressions or units &amp; measures, transcribe fraction
                words using numerals and slashes.
              </p>
              <p class="block_640">Correct: 1/4 चमचा धण</p>
              <p class="block_641">Incorrect: पाव चमचा धण</p>
              <p class="block_642">Incorrect: 0.25 चमचा धण</p>
              <p class="block_643">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">पाव चमचा धण </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_644">
                Explanation: The speaker said "पाव" which is
              </p>
              <p class="block_645">
                means 1/4. Please transcribe the fraction "1/4"
              </p>
              <p class="block_646">instead of the word "पाव".</p>
              <p class="block_647">Correct: 2/3 km कोस न डावी कड वळा.</p>
              <p class="block_648">
                Incorrect: 2/3 िकलोमीटर कोस न डावी कड वळा.
              </p>
              <p class="block_649">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">दोन तसरा िकलोमीटर कोस न डावी कड वळा </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_650">Correct: 2/3 * 2/3</p>
              <p class="block_651">Incorrect: 2/3 ग णल 2/3</p>
              <p class="block_652">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">दोन तसरा ग णल पाच दोन </span>
              </p>
              <p class="block_653">
                <span class="text_9">तसरा </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_654">Explanation: This is a math expression so</p>
              <p class="block_655">transcribe the numbers using slashes and</p>
              <p class="block_656">numerals.</p>
              <p class="block_657">
                For mixed numbers in math and units &amp; measures, use
                numerals.
              </p>
              <p class="block_658">
                <span class="text_6">Correct: 7 1/2 km </span>
                <span class="text_7">
                  Explanation: "7 1/2" is a mixed number so write
                </span>
              </p>
              <p class="block_659">
                out the number and fraction with numerals and
              </p>
              <p class="block_660">
                slashes. Include a space between "7" and "1/2".
              </p>
              <p class="block_661">
                <span class="text_6">Correct: 1/3 + 3 1/2 </span>
                <span class="text_7">
                  Explanation: In a math equation, mixed{' '}
                </span>
              </p>
              <p class="block_662">numbers should be transcribed as numerals</p>
              <p class="block_406">and slashes.</p>
              <p class="block_663">
                If a fraction is referring to items (not measurement units or
                math equations), transcribe the fraction in words.
              </p>
              <p class="block_664">Correct: एक ि तीय श चद</p>
              <p class="block_315">Incorrect: 1/3 चद</p>
              <p class="block_665">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">एक ि तीय श चद </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_666">
                Explanation: "एक ि तीय श" is a fraction that
              </p>
              <p class="block_667">
                represents part of an item ( चद) so do not use
              </p>
              <p class="block_668">
                numerals and slashes to transcribe. Write the
              </p>
              <p class="block_669">fraction out.</p>
              <p class="block_670">
                Mixed numbers that refer to items should be written out in words
                if it's under 10, otherwise write it with numerals.
              </p>
              <p class="block_671">Correct: अडीच तारो</p>
              <p class="block_672">Incorrect: 2 1/2 तारो</p>
              <p class="block_673">
                Explanation: Mixed numbers that refer to items
              </p>
              <p class="block_674">
                (here, it refers to तारो) should be written out in
              </p>
              <p class="block_675">words as in this example "अडीच".</p>
              <p class="block_676">
                For mixed numbers that represent currency amounts, always use
                decimals.
              </p>
              <p class="block_677">Correct: ₹7.5 लाख</p>
              <p class="block_678">Incorrect: 7 1/2 लाख पय</p>
              <p class="block_679">
                Explanation: Use the standard currency form
              </p>
              <p class="block_680">
                "₹7.5" and since it's a value in the millions, write
              </p>
              <p class="block_646">out the word "लाख" after.</p>
              <p class="block_681">
                Transcribe percentages using numerals followed by the % sign. In
                the unlikely case that you encounter a number of a million or
                greater used as a percentage, spell it out.
              </p>
              <p class="block_682">
                <span class="text_14">Example </span>
                <span class="text_15">Correct: 2% ध </span>
              </p>
              <p class="block_683">
                <span class="text_8">audio: " </span>
                <span class="text_9">दोन ट ध </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_684">Incorrect: 2 ट ध</p>
              <p class="block_504">
                Explanation: Amount has percentages so use
              </p>
              <p class="block_685">
                numerals and the percent sign "2%", don't write
              </p>
              <p class="block_686">out the words.</p>
              <p class="block_687">
                Transcribe seasons and episodes of television shows with
                numerals.
              </p>
              <p class="block_688">
                For landline phone numbers, transcribe a space after the
                operating code then transcribe the remaining digits together
                with no spaces. For mobile numbers, transcribe a space after the
                country code, and a space after the fourth digit of the phone
                number. Only transcribe a "+" if the speaker says " स".
              </p>
              <p class="block_689">
                <span class="text_6">Correct: 011 20000198 </span>
                <span class="text_7">
                  Explanation: This is a landline number so there
                </span>
              </p>
              <p class="block_690">
                is a dash after the operator code, 011. The rest
              </p>
              <p class="block_691">
                of the digits are transcribed without spaces or
              </p>
              <p class="block_692">dashes.</p>
              <p class="block_693">
                <span class="text_13">Correct: +91 1234 123456 </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">स नऊ एक एक दोन तीन चार </span>
              </p>
              <p class="block_694">
                <span class="text_9">एक दोन तीन चार पाच सहा </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_695">
                Explanation: Since the speaker said the country
              </p>
              <p class="block_696">
                calling code with a " स" before the number,
              </p>
              <p class="block_697">
                transcribe the spoken " स" as the plus symbol,
              </p>
              <p class="block_698">"+".</p>
              <p class="block_699">
                Transcribe alpha-digit sequences (product codes, car models,
                etc.) in their most natural way (there may be more than one way
                to transcribe). Do not transcribe credit card numbers or any
                other personal information numbers.
              </p>
              <p class="block_700">Correct: Mercedes-Benz CLS450 or</p>
              <p class="block_701">Mercedes-Benz CLS 450</p>
              <p class="block_702">
                <span class="text_">Example audio: " </span>
                <span class="text_1">mercedes benz c l s four fifty </span>
                <span class="text_">" </span>
              </p>
              <p class="block_703">
                Explanation: Here the letter sequence followed
              </p>
              <p class="block_704">
                by digits can be transcribed either all together
              </p>
              <p class="block_705">
                "CLS450" or with a space between the letters
              </p>
              <p class="block_706">and numbers "CLS 450".</p>
              <p class="block_707">
                Math expressions should be transcribed with numerals and math
                symbols with spaces in between them.
              </p>
              <p class="block_708">Correct: 5 / 6 ^ 3</p>
              <p class="block_709">Incorrect: 5/6^3</p>
              <p class="block_710">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">पाच भािगल सहा घात तीन </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_711">
                Explanation: The spoken sentence sounds like
              </p>
              <p class="block_547">
                a math expression so the corresponding math
              </p>
              <p class="block_596">
                symbols and numerals are used to transcribe it.
              </p>
              <p class="block_712">Correct: 5 * 6</p>
              <p class="block_713">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">पाच ग णल सात </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_714">Incorrect: 5 tग णल 6</p>
              <p class="block_715">
                Explanation: This is a math expression so digits
              </p>
              <p class="block_716">are used even though the numbers are both</p>
              <p class="block_680">
                less than 10. Note, the symbol for multiplication
              </p>
              <p class="block_717">is "*" NOT "X"</p>
              <p class="block_718">Correct: √3</p>
              <p class="block_719">Incorrect: वग मळ 3</p>
              <p class="block_720">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">वग मळ तीन </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_721">Correct: 8 तास * ₹12</p>
              <p class="block_722">Incorrect: 8 तास * 12 पय</p>
              <p class="block_723">
                Explanation: "तास " is spelled out because it is a
              </p>
              <p class="block_561">
                unit of measurement. However, currency is the
              </p>
              <p class="block_724">
                one exception to this rule, so " पय" is transcribed
              </p>
              <p class="block_725">with the symbol, "₹".</p>
              <p class="block_726">Correct: तीन मगरी भािगल दोन बकरो</p>
              <p class="block_727">Incorrect: 3 मगरी / 2 बकरो</p>
              <p class="block_728">
                Explanation: "मगरी" and "बकरो" are not useful
              </p>
              <p class="block_547">
                units of measurement, so this is not a true math
              </p>
              <p class="block_729">
                expression. The numbers and math operators
              </p>
              <p class="block_730">should be written out.</p>
              <p class="block_731">Currency and unit</p>
              <p class="block_732">
                Transcribe currencies with "₹" followed by digits. Do not
                include a space between "₹" and the digits.
              </p>
              <p class="block_733">Correct: ₹100</p>
              <p class="block_709">Incorrect: ₹ 100</p>
              <p class="block_734">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">शभर पय </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_735">
                Explanation: "शभर पय" is an amount of currency.
              </p>
              <p class="block_596">
                Rupee amounts in Marathi should be written with
              </p>
              <p class="block_736">a Rupee symbol (₹) and the number with no</p>
              <p class="block_737">
                spaces in between the symbol and the number.
              </p>
              <p class="block_738">
                If it is obvious from context that a number reflects an amount
                of currency, transcribe with a currency symbol.
              </p>
              <p class="block_739">Correct: पाहता या पा याची खरी कमत साधारणत</p>
              <p class="block_740">₹2,000 ती हजार लटर एवढी होत.</p>
              <p class="block_741">
                Incorrect: पाहता या पा याची खरी कमत साधारणत
              </p>
              <p class="block_742">2,000 ती हजार लटर एवढी होत.</p>
              <p class="block_743">
                Explanation: Here the speaker is referring to the
              </p>
              <p class="block_744">
                price of water so it should also be transcribed
              </p>
              <p class="block_716">
                with a rupee sign and numerals as "₹2,000".
              </p>
              <p class="block_745">
                For all other currencies and slang terms for money, spell out
                the words.
              </p>
              <p class="block_746">Correct: ग धी</p>
              <p class="block_747">Incorrect: ₹500</p>
              <p class="block_748">
                Explanation: Even though "ग धी" is slang for 500
              </p>
              <p class="block_749">
                rupees, transcribe it as the word "ग धी". Don't
              </p>
              <p class="block_750">transcribe using ₹.</p>
              <p class="block_751">Correct: पटी</p>
              <p class="block_752">Incorrect: ₹1 लाख</p>
              <p class="block_753">
                Explanation: Even though "पटी" is slang for 1 लाख
              </p>
              <p class="block_296">
                rupees, transcribe it as the word "पटी". Don't
              </p>
              <p class="block_750">transcribe using ₹.</p>
              <p class="block_754">Correct: 200 डॉलस</p>
              <p class="block_755">Incorrect: $200</p>
              <p class="block_756">
                Explanation: Since dollars is a foreign currency,
              </p>
              <p class="block_757">please spell it out and do not use a "$".</p>
              <p class="block_758">
                When a speaker uses a currency name without specifying a
                quantity, spell it out.
              </p>
              <p class="block_309">Correct: पया</p>
              <p class="block_759">Incorrect: ₹</p>
              <p class="block_760">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">पया </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_761">
                Explanation: Since the speaker just says the
              </p>
              <p class="block_547">
                currency without any number amount, the word
              </p>
              <p class="block_762">" पया" is spelled out.</p>
              <p class="block_763">
                Write out denominations of currency (the face values of bills,
                notes, coins, etc).
              </p>
              <p class="block_764">
                For ranges of currency quantities, write everything out as
                spoken.
              </p>
              <p class="block_765">
                <span class="text_10">Correct: 100 त 500 पय </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">शभर शभर त पाच शभर पय </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_766">
                Explanation: Since this is a range of currency
              </p>
              <p class="block_767">
                quantities, write out " पय" instead of using the ₹
              </p>
              <p class="block_768">symbol.</p>
              <p class="block_769">
                Keep units of measurement in English. Do not transliterate.
              </p>
              <p class="block_770">Correct: MB</p>
              <p class="block_719">Incorrect: मगबी स</p>
              <p class="block_771">
                Explanation: Use the abbreviation "MB". Do not
              </p>
              <p class="block_772">transliterate the whole word.</p>
              <p class="block_773">Correct: km</p>
              <p class="block_774">Incorrect: िकलोमीटस</p>
              <p class="block_684">Incorrect: िकलोमीटर</p>
              <p class="block_775">
                Explanation: Use the abbreviation "km". Do not
              </p>
              <p class="block_772">transliterate the whole word.</p>
              <p class="block_776">Correct: cm2</p>
              <p class="block_777">Incorrect: सकवार सि मटस</p>
              <p class="block_778">
                Explanation: Use the abbreviation "cm2". Do not
              </p>
              <p class="block_772">transliterate the whole word.</p>
              <p class="block_779">Correct: g</p>
              <p class="block_780">Incorrect:</p>
              <p class="block_781">
                Explanation: Use the abbreviation "g". Do not
              </p>
              <p class="block_772">transliterate the whole word.</p>
              <p class="block_782">Common technical abbreviations</p>
              <p class="block_783">● MB</p>
              <p class="block_784">● KB</p>
              <p class="block_785">● GB</p>
              <p class="block_786">● TB</p>
              <p class="block_787">Common measurements of distance and rate</p>
              <p class="block_788">● in</p>
              <p class="block_789">● ft</p>
              <p class="block_790">● yd</p>
              <p class="block_791">● mi</p>
              <p class="block_792">● mm</p>
              <p class="block_793">● cm</p>
              <p class="block_794">● m</p>
              <p class="block_793">● km</p>
              <p class="block_328">● mph</p>
              <p class="block_795">● km/h</p>
              <p class="block_796">Common measurements of area</p>
              <p class="block_797">● km2</p>
              <p class="block_798">● in2</p>
              <p class="block_790">● ft2</p>
              <p class="block_799">● mi2</p>
              <p class="block_792">● cm2</p>
              <p class="block_800">● m2</p>
              <p class="block_801">Common measurements of weight and volume</p>
              <p class="block_802">● g</p>
              <p class="block_803">● mg</p>
              <p class="block_327">● kg</p>
              <p class="block_804">● L</p>
              <p class="block_800">● m3</p>
              <p class="block_805">● in3</p>
              <p class="block_806">For degrees, use the ° symbol.</p>
              <p class="block_807">Correct: 20° C.</p>
              <p class="block_808">Incorrect: 20 िड ी स अस</p>
              <p class="block_809">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">वीस िड ी स अस </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_810">Explanation: The speaker explicitly says</p>
              <p class="block_685">
                "celsius" here so use the symbol for celsius "C"
              </p>
              <p class="block_811">after the degree symbol.</p>
              <p class="block_812">
                <span class="text_14">Example </span>
                <span class="text_15">Correct: स ा तापमान 40 आह. </span>
              </p>
              <p class="block_813">
                <span class="text_8">audio: " </span>
                <span class="text_9">स ा तापमान चाळ स आह </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_814">Incorrect: स ा तापमान 40o आह.</p>
              <p class="block_815">Explanation: If the speaker refers to the</p>
              <p class="block_816">
                temperature in degrees, but does not actually say
              </p>
              <p class="block_817">
                the word "िड ी", do not transcribe the word or the
              </p>
              <p class="block_818">degree symbol.</p>
              <p class="block_819">
                Abbreviate all units of measurement that are after numbers.
              </p>
              <p class="block_733">Correct: 10 m</p>
              <p class="block_820">Incorrect: 10 मीटर</p>
              <p class="block_821">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">दहा मीटर </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_822">
                Explanation: Since "lमीटर" appears after the
              </p>
              <p class="block_635">
                number 10, it is abbreviated as "m" with a space
              </p>
              <p class="block_823">between "10" and "m".</p>
              <p class="block_824">
                Transcribe all numeric values preceding units in numeral form,
                even if under 10.
              </p>
              <p class="block_825">Correct: 2 g</p>
              <p class="block_826">Incorrect: दोन म</p>
              <p class="block_827">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">दोन म </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_828">
                Explanation: Even though 2 is less than 10, it
              </p>
              <p class="block_829">
                should not be written out as "दोन " here since it
              </p>
              <p class="block_830">comes before a unit of measurement " म".</p>
              <p class="block_831">
                For lengths, widths, and heights: use "x" instead of any
                preposition.
              </p>
              <p class="block_832">Correct: 20x20x40</p>
              <p class="block_833">Incorrect: 20 बाय 20 बाय 40.</p>
              <p class="block_834">
                Explanation: The numbers here are referring to
              </p>
              <p class="block_835">
                the length, width, and height. Transcribe it with
              </p>
              <p class="block_836">"x" in between the numbers (no spaces).</p>
              <p class="block_837">
                <span class="text_6">Correct: 9x12 m </span>
                <span class="text_7">
                  Explanation: "9x12 m" is referring to a{' '}
                </span>
              </p>
              <p class="block_838">
                measurement. In stead of writing out " बाय", use
              </p>
              <p class="block_839">"x".</p>
              <p class="block_840">
                If a speaker says a number without saying words like स ाकाळच, रा
                ीच or पहाटचेetc., format it as time if it is obvious that the
                number refers to a time.
              </p>
              <p class="block_841">Date and time</p>
              <p class="block_842">
                Transcribe dates using 2 digits for the day, the month spelled
                out, followed by a comma, and the four digit year. Remember to
                only use Western Arabic numerals, not Devanagari numerals.
              </p>
              <p class="block_843">Correct: 04 सतबर, 2000</p>
              <p class="block_844">Incorrect: सतबर 04, 2000</p>
              <p class="block_845">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">बध स बर दोन हजार </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_846">
                Exception: When the date is spoken as a sequence of numbers,
                transcribe it as numerals with the proper punctuation separating
                the month, date, and year.
              </p>
              <p class="block_847">
                <span class="text_13">Correct: 04/09/2000 </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">चार श नऊ श दोन हजार </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_848">
                Explanation: The speaker is saying the date
              </p>
              <p class="block_849">aloud so transcribe the numbers and the</p>
              <p class="block_850">"slash" as the symbol "/".</p>
              <p class="block_851">Correct: माझ वाढिदवस 04/09/2000 आह.</p>
              <p class="block_852">Incorrect: माझ वाढिदवस 04092000 आह.</p>
              <p class="block_853">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">माझ वाढिदवस चार नऊ दोन हजार </span>
              </p>
              <p class="block_854">
                <span class="text_9">आह </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_855">
                Explanation: Even though the speaker doesn't say
              </p>
              <p class="block_856">
                " श", since it is referring to a date, use the
              </p>
              <p class="block_857">
                correct format for expiration dates with numerals
              </p>
              <p class="block_858">separated by slashes.</p>
              <p class="block_859">
                Write times in hh:mm format whenever possible, unless it would
                look unnatural to do
              </p>
              <p class="block_860">
                <span class="text_19">so. </span>
                <span class="text_20">
                  <sub class="calibre2">Correct: 1:00 </sub>
                </span>
              </p>
              <p class="block_861">Incorrect: 1 वाजला</p>
              <p class="block_862">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">एक वाजला </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_863">
                Explanation: "वाजला" refers to the exact hour on a
              </p>
              <p class="block_864">
                12-hour clock so it should be transcribed as "1:00"
              </p>
              <p class="block_865">
                <span class="text_13">Correct: 3:15 </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">तीन पधरा </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_866">
                <span class="text_13">Correct: 3:01 </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">तीन एक </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_867">
                <span class="text_13">Correct: 12:45 </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">एक वाजायला पधरा िमिनटेबाक </span>
              </p>
              <p class="block_868">
                <span class="text_11">" </span>
                <span class="text_21">
                  <sub class="calibre2">
                    Explanation: When referring to time, "एक
                  </sub>
                </span>
              </p>
              <p class="block_869">
                वाजायला पधरा िमिनट बाक " is equivalent to the
              </p>
              <p class="block_870">
                time 12:45. So please write out this time as 12:45.
              </p>
              <p class="block_871">
                <span class="text_13">Correct: 1:15 </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">स ा एक </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_872">
                Explanation: Here, "स ा एक" is equal to "one
              </p>
              <p class="block_870">
                (hour) fifteen (minutes) so please transcribe it as
              </p>
              <p class="block_873">1:15.</p>
              <p class="block_874">
                <span class="text_13">Correct: 1:30 </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">डढ बज </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_875">
                Explanation: Do not write out the words "डढ बज"
              </p>
              <p class="block_876">
                when they refer to time. Transcribe it with
              </p>
              <p class="block_877">numbers as 1:30.</p>
              <p class="block_878">
                <span class="text_13">Correct: 2:30 </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">ढाई बज </span>
                <span class="text_11">" </span>
              </p>
              <p class="block_879">
                Explanation: Do not write out the words "ढाई बज"
              </p>
              <p class="block_880">
                when they refer to time. Transcribe it with
              </p>
              <p class="block_881">numbers as 2:30.</p>
              <p class="block_882">
                For " पार" and "म रा ", use the written form.
              </p>
              <p class="block_883">Correct: पार</p>
              <p class="block_884">Incorrect: तीन 12:00</p>
              <p class="block_885">
                Explanation: Since the speaker said " पार", please
              </p>
              <p class="block_886">write it out as the word.</p>
              <p class="block_887">Correct: म रा</p>
              <p class="block_888">Incorrect: रा ीच 12:00</p>
              <p class="block_889">Address</p>
              <p class="block_890">
                When transcribing addresses, please follow the following format:
                number, location description general locality, road, specific
                locality, city zip code country
              </p>
              <p class="block_891">Use commas for ENTITY, LOCATION.</p>
              <p class="block_892">
                <span class="text_15">Correct: Seasonal Tastes, मबई </span>
                <span class="text_17">
                  Explanation: The entity "Seasonal Tastes" that the
                </span>
              </p>
              <p class="block_893">
                speaker is referring to is located in मबई, so a
              </p>
              <p class="block_894">comma is used in between the two.</p>
              <p class="block_895">
                <span class="text_6">Correct: र ॉर स, 400063 </span>
                <span class="text_7">
                  Explanation: The speaker is looking for र ॉर स
                </span>
              </p>
              <p class="block_896">
                within the zip code 400063, so there is a comma
              </p>
              <p class="block_897">
                in between the entity, "र ॉर स" and the location,
              </p>
              <p class="block_898">"400063" .</p>
              <p class="block_899">Correct: लोकमा नगर, मबई</p>
              <p class="block_900">Web</p>
              <p class="block_901">
                Write URLs, email addresses, and Twitter hashtags in Latin
                script and as they are spoken. Do not capitalize them.
              </p>
              <p class="block_902">Correct: www.google.co.in</p>
              <p class="block_903">
                Incorrect:{` w w w {डॉट} google {डॉट} c o {डॉट} `}i n
              </p>
              <p class="block_904">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">ड ड ड डॉट गगल डॉट सी ओ डॉट आई एन </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_905">
                Explanation: Although the speaker said "डॉट"
              </p>
              <p class="block_906">
                aloud, these are symbols that are associated
              </p>
              <p class="block_907">
                with URLs and should be transcribed as "." and
              </p>
              <p class="block_908">not spelled out in curly brackets.</p>
              <p class="block_909">
                <span class="text_13">Correct: https://google.com </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_12">एच टी टी पी एस अपण िवराम </span>
              </p>
              <p class="block_910">
                <span class="text_9">तक रघ तक रघ गगल डॉट सी ओ मी </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_911">
                Explanation: The "एच टी टी पी एस अपण िवराम
              </p>
              <p class="block_912">
                तक रघ तक रघ " is part of the web URL format
              </p>
              <p class="block_913">and should be written using punctuation</p>
              <p class="block_914">symbols "https://".</p>
              <p class="block_915">
                <span class="text_13">Correct: anjali_gopalan@google.com </span>
                <span class="text_11">Example audio: " </span>
                <span class="text_22">अजली अधोरखा गोपाल अ◌ट द </span>
              </p>
              <p class="block_916">
                <span class="text_9">रट गगल डॉट सी ओ मी </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_917">
                Explanation: Email and other account names that
              </p>
              <p class="block_918">
                have "अ◌ट" before the website name should be
              </p>
              <p class="block_919">transcribed with the "@" symbol.</p>
              <p class="block_920">
                <span class="text_14">Example </span>
                <span class="text_15">Correct: तच घर कोकणात आह. #lucky </span>
              </p>
              <p class="block_921">
                <span class="text_8">audio: " </span>
                <span class="text_9">तच घर कोकणात आह हशटग </span>
              </p>
              <p class="block_922">
                <span class="text_12">ल </span>
                <span class="text_11">" </span>
                <span class="text_16">Incorrect: तच घर कोकणात आह. #Lucky </span>
              </p>
              <p class="block_923">
                Explanation: The symbol "#" is used to transcribe
              </p>
              <p class="block_924">
                "हशटग". A period is included between "आह" and
              </p>
              <p class="block_925">
                "#ल " because "#ल " is not considered part
              </p>
              <p class="block_926">of the preceding sentence .</p>
              <p class="block_927">Correct: #lucky तच घर कोकणात आह.</p>
              <p class="block_928">Incorrect: #Lucky. तच घर कोकणात आह.</p>
              <p class="block_929">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">हशटग ल तच घर कोकणात </span>
              </p>
              <p class="block_930">
                <span class="text_9">आह </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_931">
                Explanation: The "l" in "lucky" is not capitalized
              </p>
              <p class="block_932">
                because words in hashtags are never capitalized,
              </p>
              <p class="block_913">even if they appear at the beginning of a</p>
              <p class="block_933">sentence. There shouldn't be punctuation</p>
              <p class="block_934">between "lucky " and " तच".</p>
              <p class="block_935">
                If the speaker drops a "w" or "डॉट" and it's an obvious URL, you
                should correct these errors. If the speaker doesn't say the "w"s
                at all, do not add them.
              </p>
              <p class="block_936">Correct: www.facebook.com</p>
              <p class="block_937">Incorrect: ww facebook.com</p>
              <p class="block_938">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">w w facebook डॉट com </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_939">
                Explanation: The speaker doesn't say the "डॉट"
              </p>
              <p class="block_940">
                before "facebook" and only says two "w"s so add
              </p>
              <p class="block_941">the missing dot and missing "w" when</p>
              <p class="block_942">transcribing.</p>
              <p class="block_943">
                If a URL is spelled out in individual letters, transcribe
                without spaces between individual letters.
              </p>
              <p class="block_708">Correct: cnet.net</p>
              <p class="block_944">Incorrect: c n e t.net</p>
              <p class="block_945">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">सी एन ई टी डॉट एन ई टी </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_946">
                Explanation: Although the speaker spells out
              </p>
              <p class="block_947">
                "cnet", write the URL all together without spaces
              </p>
              <p class="block_948">"cnet.net".</p>
              <p class="block_949">Abbreviation</p>
              <p class="block_950">
                Do not transcribe abbreviated forms of words unless the speaker
                says an abbreviated form.
              </p>
              <p class="block_951">Correct: पसगाव नबर एक</p>
              <p class="block_952">Incorrect: पसगाव न. एक</p>
              <p class="block_953">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">पसगाव नबर एक </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_954">Explanation: Even though "नबर" can be</p>
              <p class="block_955">
                abbreviated as "न.", the speaker used the full word
              </p>
              <p class="block_956">so it is transcribed as "नबर".</p>
              <p class="block_957">
                Abbreviate titles for people only when they precede proper
                names.
              </p>
              <p class="block_606">Correct: डॉ. नगर</p>
              <p class="block_684">Incorrect: डॉ र नगर</p>
              <p class="block_958">
                <span class="text_8">Example audio: " </span>
                <span class="text_9">डॉ र नगर </span>
                <span class="text_8">" </span>
              </p>
              <p class="block_959">
                Explanation: Here, the word "डॉ र" comes before
              </p>
              <p class="block_960">
                the name "नगर" so it is abbreviated as "डॉ."
              </p>
              <p class="block_961">
                <span class="text_6">Correct: इजी. नगर </span>
                <span class="text_7">
                  Explanation: Here, the word "इजीिनयर" comes
                </span>
              </p>
              <p class="block_962">
                before the name "नगर" so it is abbreviated as
              </p>
              <p class="block_963">"इजी."</p>
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
