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
            <PageContentHeader currentPage="longform Malay" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Write small numbers (0 to 9) as words and larger numbers (10
                  and above) using digits. However, you may write small numbers
                  using digits if they appear in a list, in a mathematical
                  expression, as a street number, as a measure or as a time
                  unit.
                </p>
                <p className={styles.block_635}>
                  <span className={styles.text_4}>
                    Correct: Saya mau beli tiga buku.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    saya mau beli tiga buku{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_636}>
                  Explanation: numbers less than 10
                </p>
                <p className={styles.block_637}>
                  <span className={styles.text_4}>
                    Correct: Saya mau beli 11 pinggan{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    saya mau beli sebelas pinggan{' '}
                  </span>
                </p>
                <p className={styles.block_638}>
                  <span className={styles.text_10}>" </span>
                  <span className={styles.text_11}>
                    <sub className={styles.calibre2}>
                      Explanation: numbers 10 or above{' '}
                    </sub>
                  </span>
                </p>
                <p className={styles.block_639}>
                  If a large number consists of only a number followed by
                  "juta", "bilion", "trilion", or higher, then transcribe as a
                  numeral plus word. Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_640}>
                  Correct: Skim PROSPER Runcit menawarkan
                </p>
                <p className={styles.block_641}>
                  pembiayaan di antara RM100,000 sehingga
                </p>
                <p className={styles.block_642}>
                  maksimum RM1 juta untuk keperluan
                </p>
                <p className={styles.block_643}>perniagaan anda.</p>
                <p className={styles.block_644}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_645}>
                  <span className={styles.text_4}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    sifar satu satu dua tiga lima{' '}
                  </span>
                </p>
                <p className={styles.block_646}>
                  <span className={styles.text_1}>lapan tiga belas </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_647}>
                  <span className={styles.text_4}>
                    Correct: 5 4 3 2 1 kirim{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: list of numbers, no comma if just
                  </span>
                </p>
                <p className={styles.block_648}>counting</p>
                <p className={styles.block_649}>
                  For long numbers (4+ digits) indicating quantity, insert the
                  relevant separator (comma, decimal point, or space, depending
                  on language).
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_4}>Correct: 10,000 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>sepuluh ribu </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_651}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_652}>
                  Correct: Dia membeli 1/4 kg gula melaka.
                </p>
                <p className={styles.block_653}>
                  Incorrect: Dia membeli 250 gr gula melaka.
                </p>
                <p className={styles.block_654}>
                  Incorrect: Dia membeli seperempat kilogram
                </p>
                <p className={styles.block_655}>gula melaka.</p>
                <p className={styles.block_656}>
                  Incorrect: Dia membeli 1 / 4 kg gula melaka.
                </p>
                <p className={styles.block_657}>
                  Incorrect: Dia membeli 1⁄4 kg gula melaka.
                </p>
                <p className={styles.block_658}>
                  Incorrect: Dia membeli 0,25 kg gula melaka.
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    dia membeli satu perempat{' '}
                  </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_1}>kilogram gula melaka </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_661}>
                  pre-combined fraction characters.
                </p>
                <p className={styles.block_662}>
                  Explanation: Be careful not to include spaces or
                </p>
                <p className={styles.block_663}>
                  Correct: Setelah 3/4 km, belok kanan.
                </p>
                <p className={styles.block_664}>
                  Incorrect: Setelah tiga perempat kilometer,
                </p>
                <p className={styles.block_665}>belok kanan.</p>
                <p className={styles.block_666}>
                  Incorrect: Setelah 3/4 kilometer, belok kanan.
                </p>
                <p className={styles.block_667}>
                  Incorrect: Setelah 750 m, belok kanan.
                </p>
                <p className={styles.block_668}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>setelah tiga perempat </span>
                </p>
                <p className={styles.block_669}>
                  <span className={styles.text_1}>kilometer belok kanan </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_670}>
                  Correct: Setelah dua 2/3 km, belok kiri.
                </p>
                <p className={styles.block_671}>
                  Incorrect: Setelah dua pertiga kilometer, belok
                </p>
                <p className={styles.block_672}>kiri.</p>
                <p className={styles.block_673}>
                  Incorrect: Setelah 2/3 kilometer, belok kiri.
                </p>
                <p className={styles.block_674}>
                  Incorrect: Setelah dua pertiga km, belok kiri.
                </p>
                <p className={styles.block_675}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    setelah dua pertiga kilometer{' '}
                  </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_1}>belok kiri </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_677}>Correct: 2 / 3 * 5 / 16</p>
                <p className={styles.block_674}>
                  Incorrect: dua pertiga * lima per enam belas
                </p>
                <p className={styles.block_664}>
                  Incorrect: dua pertiga darab lima per enam
                </p>
                <p className={styles.block_678}>belas</p>
                <p className={styles.block_679}>Incorrect: 2/3 darab 5/16</p>
                <p className={styles.block_680}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    dua pertiga darab lima per{' '}
                  </span>
                </p>
                <p className={styles.block_681}>
                  <span className={styles.text_1}>enam belas </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_682}>"didarab".</p>
                <p className={styles.block_683}>
                  Explanation: Another word for "darab" is
                </p>
                <p className={styles.block_684}>
                  Correct: Kita membutuhkan sebuah palu 5/16
                </p>
                <p className={styles.block_685}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    kita membutuhkan sebuah{' '}
                  </span>
                </p>
                <p className={styles.block_686}>inci.</p>
                <p className={styles.block_687}>
                  <span className={styles.text_1}>
                    palu lima perenam belas inci{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_688}>
                  For mixed numbers in math and units &amp; measures, use
                  numerals with "and".
                </p>
                <p className={styles.block_689}>
                  <span className={styles.text_4}>Correct: 3 1/2 km </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    tiga setengah kilometer{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_4}>Correct: 3 1/4 kg </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    tiga satu perempat kilogram{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_691}>
                  Correct: Sapi itu memiliki berat 2 1/2 ton.
                </p>
                <p className={styles.block_692}>Correct: umur 5 1/2 bulan</p>
                <p className={styles.block_693}>
                  Incorrect: umur 5 setengah bulan
                </p>
                <p className={styles.block_694}>Incorrect: umur 5,5 bulan</p>
                <p className={styles.block_695}>Correct: 1 / 3 + 3 1 / 2</p>
                <p className={styles.block_696}>Incorrect: 1/3 + 3 setengah</p>
                <p className={styles.block_697}>Incorrect: 1/3 + 3 1/2</p>
                <p className={styles.block_698}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    satu pertiga ditambah tiga{' '}
                  </span>
                </p>
                <p className={styles.block_699}>
                  <span className={styles.text_1}>setengah </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_700}>"tambah".</p>
                <p className={styles.block_701}>
                  Explanation: Another word for "ditambah" is
                </p>
                <p className={styles.block_702}>
                  When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.
                </p>
                <p className={styles.block_703}>
                  Correct: Berikan setengah mangga itu.
                </p>
                <p className={styles.block_704}>
                  Incorrect: Berikan 1/2 mangga itu.
                </p>
                <p className={styles.block_705}>
                  Incorrect: Berikan 0,5 mangga itu.
                </p>
                <p className={styles.block_706}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    berikan setengah mangga itu{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_707}>
                  Correct: satu perlapan dari pizza itu
                </p>
                <p className={styles.block_708}>
                  Incorrect: 1/8 dari pizza itu
                </p>
                <p className={styles.block_709}>
                  Incorrect: 0,125 dari pizza itu
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    satu perlapan dari pizza itu{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_711}>
                  Correct: Saya dapat bonus setengah bulan gaji.
                </p>
                <p className={styles.block_653}>
                  Incorrect: Saya dapat bonus 1/2 bulan gaji.
                </p>
                <p className={styles.block_712}>
                  Incorrect: Saya dapat bonus 0,5 bulan gaji.
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_4}>
                    Correct: Dia berbicara setengah gugup.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Here "setengah" is used more{' '}
                  </span>
                </p>
                <p className={styles.block_714}>
                  figuratively, and it is written out as a word.
                </p>
                <p className={styles.block_715}>Correct: tiga setengah jeruk</p>
                <p className={styles.block_716}>Incorrect: 3,5 jeruk</p>
                <p className={styles.block_717}>Incorrect: 3 1/2 jeruk</p>
                <p className={styles.block_718}>Incorrect: 3 setengah jeruk</p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>tiga setengah jeruk </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_720}>
                  Correct: Mereka makan 12 setengah potong
                </p>
                <p className={styles.block_721}>pizza.</p>
                <p className={styles.block_722}>
                  Incorrect: Mereka makan 12,5 potong pizza.
                </p>
                <p className={styles.block_723}>
                  Incorrect: Mereka makan dua belas setengah
                </p>
                <p className={styles.block_609}>potong pizza.</p>
                <p className={styles.block_724}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>mereka makan dua belas </span>
                </p>
                <p className={styles.block_725}>
                  <span className={styles.text_1}>setengah potong pizza </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_726}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_727}>
                  Correct: Modal yang dikeluarkan hampir
                </p>
                <p className={styles.block_728}>RM100,000.</p>
                <p className={styles.block_625}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>modal yang dikeluarkan </span>
                </p>
                <p className={styles.block_729}>
                  <span className={styles.text_1}>
                    hampir seratus ribu ringgit{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_730}>
                  Correct: Dia membeli rumah berharga RM7.5
                </p>
                <p className={styles.block_731}>bilion.</p>
                <p className={styles.block_732}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    dia membeli rumah berharga{' '}
                  </span>
                </p>
                <p className={styles.block_733}>
                  <span className={styles.text_1}>
                    tujuh koma lima bilion ringgit{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_734}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_735}>Correct: 2% protein</p>
                <p className={styles.block_736}>Correct: 1 juta persen</p>
                <p className={styles.block_737}>
                  Correct: Awak harus menyelesaikan 20%
                </p>
                <p className={styles.block_738}>pekerjaan ini.</p>
                <p className={styles.block_739}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_740}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_741}>
                  <span className={styles.text_4}>
                    Correct: Sukma XVII Perlis 2014{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    sukma ketujuh belas perlis{' '}
                  </span>
                </p>
                <p className={styles.block_742}>
                  <span className={styles.text_1}>
                    tahun dua ribu empat belas{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_743}>
                  <span className={styles.text_4}>
                    Correct: Sultan Abdul Jalil IV{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    sultan abdul jalil keempat{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_744}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_745}>
                  <span className={styles.text_4}>Correct: episod 114 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    episod seratus empat belas{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_746}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_747}>
                  <span className={styles.text_4}>
                    Correct: +60 3 8787 5496{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: landline number with one-digit area
                  </span>
                </p>
                <p className={styles.block_748}>code and country code</p>
                <p className={styles.block_749}>
                  <span className={styles.text_4}>Correct: 012 565 6565 </span>
                  <span className={styles.text_9}>
                    Explanation: mobile phone number with{' '}
                  </span>
                </p>
                <p className={styles.block_750}>
                  seven-digit subscriber number
                </p>
                <p className={styles.block_749}>
                  <span className={styles.text_4}>Correct: 012 6565 6565 </span>
                  <span className={styles.text_9}>
                    Explanation: mobile phone number with{' '}
                  </span>
                </p>
                <p className={styles.block_751}>
                  eight-digit subscriber number
                </p>
                <p className={styles.block_752}>
                  <span className={styles.text_4}>Correct: 03 4056 4555 </span>
                  <span className={styles.text_9}>
                    Explanation: landline number with leading "0"
                  </span>
                </p>
                <p className={styles.block_753}>
                  and one-digit area code and eight-digit
                </p>
                <p className={styles.block_754}>subscriber number</p>
                <p className={styles.block_755}>
                  <span className={styles.text_4}>Correct: 03 405 4555 </span>
                  <span className={styles.text_9}>
                    Explanation: landline number with leading "0"
                  </span>
                </p>
                <p className={styles.block_756}>
                  and one-digit area code and seven-digit
                </p>
                <p className={styles.block_754}>subscriber number</p>
                <p className={styles.block_755}>
                  <span className={styles.text_4}>Correct: 082 4056 4555 </span>
                  <span className={styles.text_9}>
                    Explanation: landline number with leading "0"
                  </span>
                </p>
                <p className={styles.block_757}>and two-digit area code</p>
                <p className={styles.block_758}>
                  <span className={styles.text_4}>Correct: 1800 12 1234 </span>
                  <span className={styles.text_9}>
                    Explanation: toll-free number{' '}
                  </span>
                </p>
                <p className={styles.block_759}>
                  <span className={styles.text_4}>Correct: 1300 12 1234 </span>
                  <span className={styles.text_9}>
                    Explanation: toll-free number{' '}
                  </span>
                </p>
                <p className={styles.block_760}>
                  <span className={styles.text_4}>Correct: 1600 12 1234 </span>
                  <span className={styles.text_9}>
                    Explanation: premium-rate number{' '}
                  </span>
                </p>
                <p className={styles.block_761}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Do not
                  transcribe credit card numbers, etc.
                </p>
                <p className={styles.block_762}>Correct: XT 660 or XT660</p>
                <p className={styles.block_763}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_764}>
                  <span className={styles.text_4}>Correct: 5 / 6 ^ 3 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    lima dibahagi enam kuasa tiga{' '}
                  </span>
                </p>
                <p className={styles.block_765}>"</p>
                <p className={styles.block_766}>Correct: Berapakah 5 * 6?</p>
                <p className={styles.block_767}>
                  Incorrect: Berapakah lima didarab enam?
                </p>
                <p className={styles.block_768}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    berapakah lima darab enam{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_769}>
                  Incorrect: Berapakah 5 didarab 6?
                </p>
                <p className={styles.block_770}>Incorrect: Berapakah 5 x 6?</p>
                <p className={styles.block_771}>
                  <span className={styles.text_12}>Correct: √3 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>punca kuasa dua tiga </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>
                    Correct: Berapakah 8 jam * RM2.5?{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    berapakah delapan jam darab{' '}
                  </span>
                </p>
                <p className={styles.block_773}>
                  <span className={styles.text_1}>dua koma lima ringgit </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_774}>
                  Correct: Selera itu harus dijual, bukan dibagi
                </p>
                <p className={styles.block_775}>rata.</p>
                <p className={styles.block_776}>
                  Explanation: Does not sound like a true math
                </p>
                <p className={styles.block_777}>
                  expression with useful units.
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_780}>
                  When a speaker uses words like "dollar" without specifying a
                  quantity, spell them out.
                </p>
                <p className={styles.block_781}>
                  Correct: Saya perlu RM10,000. Berapa nak tukar
                </p>
                <p className={styles.block_782}>dolar ke ringgit?</p>
                <p className={styles.block_783}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    saya perlu sepuluh ribu ringgit{' '}
                  </span>
                </p>
                <p className={styles.block_784}>
                  <span className={styles.text_1}>
                    berapa nak tukar dolar ke ringgit{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_785}>
                  Correct: hanya beberapa ringgit
                </p>
                <p className={styles.block_786}>
                  Correct: nilai tukar rupiah ke ringgit
                </p>
                <p className={styles.block_787}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_788}>
                  Correct: Saya perlu empat atau lima dolar.
                </p>
                <p className={styles.block_789}>
                  Correct: satu sampai 500 dolar
                </p>
                <p className={styles.block_790}>
                  <span className={styles.text_4}>
                    Correct: 100 sampai 500 dolar{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    seratus sampai lima ratus{' '}
                  </span>
                </p>
                <p className={styles.block_791}>
                  <span className={styles.text_1}>dolar </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_792}>
                  <span className={styles.text_4}>
                    Correct: 9 sampai 12 euro{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    sembilan sampai dua belas{' '}
                  </span>
                </p>
                <p className={styles.block_793}>
                  <span className={styles.text_1}>euro </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_794}>Correct: satu dolar atau dua</p>
                <p className={styles.block_795}>
                  For degrees, use the "°" symbol.
                </p>
                <p className={styles.block_796}>
                  Correct: Suhu kota ini cenderung konstan,
                </p>
                <p className={styles.block_312}>
                  dengan titik maksimum 33 °C (91 °F) dan tidak
                </p>
                <p className={styles.block_797}>
                  pernah melampaui 37 °C (99 °F).
                </p>
                <p className={styles.block_798}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_799}>
                  <span className={styles.text_4}>
                    Correct: Ayah membeli 10 kg beras.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>ayah membeli sepuluh </span>
                </p>
                <p className={styles.block_800}>
                  <span className={styles.text_1}>kilogram beras </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_801}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_802}>
                  Correct: Syarikat pengurusan dana yang
                </p>
                <p className={styles.block_803}>
                  dikenakan ikat jamin RM2.05 juta.
                </p>
                <p className={styles.block_804}>
                  Incorrect: Syarikat pengurusan dana yang
                </p>
                <p className={styles.block_805}>
                  dikenakan ikat jamin RM2.050.000.
                </p>
                <p className={styles.block_806}>
                  Correct: Nelayan menaikkan ikan yang beratnya
                </p>
                <p className={styles.block_807}>melebihi 35 kg.</p>
                <p className={styles.block_808}>
                  Correct: Jailani menghabiskan masa selama 6
                </p>
                <p className={styles.block_809}>
                  bulan di Banting bersama keluarga Encik
                </p>
                <p className={styles.block_810}>Suffian.</p>
                <p className={styles.block_811}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_812}>
                  Correct: Harga Petrol RON 97 akan diturunkan
                </p>
                <p className={styles.block_813}>
                  menjadi RM2.11 per liter mulai 1 Januari 2015.
                </p>
                <p className={styles.block_618}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    harga petrol ron sembilan{' '}
                  </span>
                </p>
                <p className={styles.block_814}>
                  puluh tujuh akan diturunkan menjadi dua ringgit
                </p>
                <p className={styles.block_815}>
                  sebelas sen per liter mulai satu januari dua ribu
                </p>
                <p className={styles.block_816}>
                  <span className={styles.text_1}>lima belas </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_817}>
                  Correct: Semangkuk bubur dan pengat pula
                </p>
                <p className={styles.block_818}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    semangkuk bubur dan pengat{' '}
                  </span>
                </p>
                <p className={styles.block_819}>
                  dijual pada harga RM1.50 hingga RM2.
                </p>
                <p className={styles.block_820}>
                  pula dijual pada harga satu setengah ringgit
                </p>
                <p className={styles.block_821}>
                  <span className={styles.text_1}>hingga dua ringgit </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_822}>
                  <span className={styles.text_4}>
                    Correct: Set alarm 5:45 petang.{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    set alarm lima empat lima{' '}
                  </span>
                </p>
                <p className={styles.block_823}>
                  <span className={styles.text_1}>petang </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_824}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_825}>● megabit - MB</p>
                <p className={styles.block_826}>● kilobit - kB</p>
                <p className={styles.block_827}>● gigabit - GB</p>
                <p className={styles.block_828}>● terabit - TB</p>
                <p className={styles.block_829}>Slang terms (spell them out)</p>
                <p className={styles.block_830}>● kilo</p>
                <p className={styles.block_831}>
                  ● m (billion of [unit in currency])
                </p>
                <p className={styles.block_832}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_833}>● inci - in</p>
                <p className={styles.block_408}>● kaki - ft</p>
                <p className={styles.block_834}>● yard - yd</p>
                <p className={styles.block_408}>● mil - mi</p>
                <p className={styles.block_835}>● milimeter - mm</p>
                <p className={styles.block_836}>● sentimeter - cm</p>
                <p className={styles.block_837}>● meter - m</p>
                <p className={styles.block_838}>● kilometer - km</p>
                <p className={styles.block_839}>● mil per jam - mph</p>
                <p className={styles.block_177}>● kilometer per jam - km/h</p>
                <p className={styles.block_840}>Common measurements of area</p>
                <p className={styles.block_841}>● inci persegi - in2</p>
                <p className={styles.block_842}>● kaki persegi - ft2</p>
                <p className={styles.block_842}>● mil persegi - mi2</p>
                <p className={styles.block_843}>● sentimeter persegi - cm2</p>
                <p className={styles.block_844}>● meter persegi - m2</p>
                <p className={styles.block_845}>● kilometer persegi - km2</p>
                <p className={styles.block_826}>● ekar - ekar</p>
                <p className={styles.block_846}>Common scientific terms</p>
                <p className={styles.block_847}>● desibel - dB</p>
                <p className={styles.block_848}>● Newton - N</p>
                <p className={styles.block_849}>● Joule - J</p>
                <p className={styles.block_850}>● parsec - parsec</p>
                <p className={styles.block_851}>● ampere - amp</p>
                <p className={styles.block_852}>● Hertz - Hz</p>
                <p className={styles.block_849}>● Watt - W</p>
                <p className={styles.block_853}>● Kilowatt - kW</p>
                <p className={styles.block_854}>● mole - mol</p>
                <p className={styles.block_855}>● Candela - cd</p>
                <p className={styles.block_856}>● lumen - lm</p>
                <p className={styles.block_837}>● derajat - °</p>
                <p className={styles.block_857}>● Fahrenheit - F</p>
                <p className={styles.block_854}>● Celsius - C</p>
                <p className={styles.block_858}>● Centigrade - C</p>
                <p className={styles.block_859}>● Kelvin - K</p>
                <p className={styles.block_860}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_861}>● pon - pon</p>
                <p className={styles.block_862}>● ons - ons</p>
                <p className={styles.block_863}>● quart - q</p>
                <p className={styles.block_864}>● liter - L</p>
                <p className={styles.block_865}>● sendok teh - sdt</p>
                <p className={styles.block_866}>● sendok makan - sdm</p>
                <p className={styles.block_863}>● gram - g</p>
                <p className={styles.block_851}>● miligram - mg</p>
                <p className={styles.block_853}>● kilogram - kg</p>
                <p className={styles.block_867}>● kubik - 3</p>
                <p className={styles.block_868}>● meter kubik - m3</p>
                <p className={styles.block_869}>● inci kubik - in3</p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_872}>
                  <span className={styles.text_4}>
                    Correct: 12 Disember 1964{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    dua belas disember seribu{' '}
                  </span>
                </p>
                <p className={styles.block_873}>
                  <span className={styles.text_1}>
                    sembilan ratus enam puluh empat{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_874}>
                  <span className={styles.text_4}>Correct: akhir '98 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>akhir sembilan delapan </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_875}>
                  <span className={styles.text_4}>
                    Correct: tren tahun '90-an{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    tren tahu sembilan puluhan{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_876}>
                  <span className={styles.text_4}>Correct: Rabu, 6 Maret </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>rabu enam maret </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_877}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such.
                </p>
                <p className={styles.block_878}>
                  <span className={styles.text_4}>Correct: 7/12/2010 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    tujuh garis condong dua belas{' '}
                  </span>
                </p>
                <p className={styles.block_879}>
                  <span className={styles.text_1}>
                    garis condong dua ribu sepuluh{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_880}>
                  Correct: Masa kedaluwarsanya adalah
                </p>
                <p className={styles.block_881}>05/10/2012.</p>
                <p className={styles.block_818}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    masa kedaluwarsanya adalah{' '}
                  </span>
                </p>
                <p className={styles.block_882}>
                  <span className={styles.text_1}>
                    lima sepuluh dua ribu dua belas{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_883}>
                  Use the natural form for transcribing times whenever possible.
                </p>
                <p className={styles.block_884}>
                  <span className={styles.text_15}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.{' '}
                  </span>
                  <span className={styles.text_8}>
                    <sub className={styles.calibre2}>Correct: pukul 3:00 </sub>
                  </span>
                  <span className={styles.text_16}>
                    <sub className={styles.calibre2}>Example audio: " </sub>
                  </span>
                  <span className={styles.text_17}>
                    <sub className={styles.calibre2}>pukul tiga </sub>
                  </span>
                  <span className={styles.text_16}>
                    <sub className={styles.calibre2}>" </sub>
                  </span>
                </p>
                <p className={styles.block_885}>
                  <span className={styles.text_4}>
                    Correct: pada pukul 14:00{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>pada pukul empat belas </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_886}>
                  <span className={styles.text_4}>Correct: 3:15 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>tiga lima belas </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_887}>
                  <span className={styles.text_4}>Correct: 6:05 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>enam sifar lima </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_888}>
                  <span className={styles.text_4}>Correct: 3:15 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>tiga seperempat </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_889}>
                  <span className={styles.text_4}>Correct: 1:50 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>dua kurang sepuluh </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_890}>
                  <span className={styles.text_4}>Correct: pukul 18:00 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    pukul lapan belas kosong{' '}
                  </span>
                </p>
                <p className={styles.block_279}>
                  <span className={styles.text_1}>kosong </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_743}>
                  <span className={styles.text_4}>
                    Correct: beberapa minit setelah jam 3{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    beberapa minit setelah jam{' '}
                  </span>
                </p>
                <p className={styles.block_891}>
                  <span className={styles.text_1}>tiga </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_4}>Correct: 2:45 </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    jam tiga kurang seperempat{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_4}>
                    Correct: sekitar jam 6-an{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>sekitar jam enaman </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_893}>
                  Explanation: Looks unnatural with 6:00-an.
                </p>
                <p className={styles.block_894}>
                  For "waktu tengah hari" and "tengah malam", use the written
                  form.
                </p>
                <p className={styles.block_895}>
                  Correct: Adakah cuaca bertukar yang
                </p>
                <p className={styles.block_896}>
                  menyebabkan bayi rasa terlalu sejuk di tengah
                </p>
                <p className={styles.block_575}>malam?</p>
                <p className={styles.block_310}>
                  Incorrect: Adakah cuaca bertukar yang
                </p>
                <p className={styles.block_897}>
                  menyebabkan bayi rasa terlalu sejuk di 12:00?
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_900}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_901}>
                  Correct: Bangunan Graha Maju, Jalan Graha
                </p>
                <p className={styles.block_902}>Maju</p>
                <p className={styles.block_789}>
                  Correct: Haniffa, Kuala Lumpur
                </p>
                <p className={styles.block_903}>
                  Correct: Dr. Adrian Chan, Penang
                </p>
                <p className={styles.block_904}>
                  Correct: Universiti Kebangsaan Malaysia,
                </p>
                <p className={styles.block_496}>Selangor</p>
                <p className={styles.block_905}>Correct: cuaca, Sabah</p>
                <p className={styles.block_906}>
                  Correct: pohon mangga, Penang
                </p>
                <p className={styles.block_907}>
                  Correct: acara di Stadium Nasional, Bukit Jalil
                </p>
                <p className={styles.block_908}>
                  Do not capitalize cardinal directions unless part of a
                  specific place name.
                </p>
                <p className={styles.block_909}>
                  Correct: Penulis ialah pensyarah di Fakulti
                </p>
                <p className={styles.block_910}>
                  Pengurusan Perniagaan, Universiti Utara
                </p>
                <p className={styles.block_911}>Malaysia.</p>
                <p className={styles.block_912}>
                  Correct: Mereka adalah daripada tiga kumpulan
                </p>
                <p className={styles.block_913}>
                  berasingan dari Klang, Segamat dan Kuantan
                </p>
                <p className={styles.block_914}>
                  serta bertemu di Gunung Liang Timur.
                </p>
                <p className={styles.block_915}>
                  Correct: Manakala itu, katanya, kemudahan
                </p>
                <p className={styles.block_916}>
                  kesihatan seperti hospital kini boleh dinikmati
                </p>
                <p className={styles.block_917}>
                  di Hospital Pandan pusat perubatan terbesar di
                </p>
                <p className={styles.block_918}>selatan Semenanjung.</p>
                <p className={styles.block_919}>
                  Explanation: No need to capitalize "selatan"
                </p>
                <p className={styles.block_557}>
                  because it's not part of a proper place name.
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_922}>
                  <span className={styles.text_4}>
                    Correct: www.google.co.kr{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    w w w dot google dot c o dot k{' '}
                  </span>
                </p>
                <p className={styles.block_923}>
                  <span className={styles.text_1}>r </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_924}>
                  <span className={styles.text_4}>Correct: amazon.com </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>amazon dot kom </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_925}>
                  <span className={styles.text_4}>
                    Correct: http://123.com{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    h t t p titik dua garis condong{' '}
                  </span>
                </p>
                <p className={styles.block_926}>
                  <span className={styles.text_1}>
                    garis condong satu dua tiga dot kom{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_927}>
                  <span className={styles.text_4}>
                    Correct: maf@contoh.org{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>maf et contoh dot org </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_928}>
                  Correct: Masyarakat Melayu ini amat suka
                </p>
                <p className={styles.block_929}>berkias. #budaya</p>
                <p className={styles.block_930}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    masyarakat melayu ini amat{' '}
                  </span>
                </p>
                <p className={styles.block_729}>
                  <span className={styles.text_1}>
                    suka berkias tagar budaya{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_931}>
                  Explanation: "Tagar" is the short version of
                </p>
                <p className={styles.block_932}>
                  "tanda pagar". Both can be used for hashtag.
                </p>
                <p className={styles.block_933}>
                  Correct: #budaya Masyarakat Melayu ini amat
                </p>
                <p className={styles.block_934}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    tagar budaya masyarakat{' '}
                  </span>
                </p>
                <p className={styles.block_563}>suka berkias.</p>
                <p className={styles.block_935}>
                  <span className={styles.text_1}>
                    melayu ini amat suka berkias{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_936}>
                  Correct: Saya membaca tulisan #kebudayaan
                </p>
                <p className={styles.block_937}>
                  Masyarakat Melayu ini amat suka berkias.
                </p>
                <p className={styles.block_938}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    saya membaca tulisan tagar{' '}
                  </span>
                </p>
                <p className={styles.block_939}>
                  kebudayaan masyarakat melayu ini amat suka
                </p>
                <p className={styles.block_940}>
                  <span className={styles.text_1}>berkias </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_941}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_942}>
                  <span className={styles.text_4}>
                    Correct: www.amazon.com{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>w w dot amazon dot kom </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_943}>
                  Explanation: If the user mistakenly says "ww",
                </p>
                <p className={styles.block_944}>transcribe "www".</p>
                <p className={styles.block_892}>
                  <span className={styles.text_4}>Correct: google.com.my </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>google dot kom my </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_945}>
                  Explanation: Also transcribe the dot in an
                </p>
                <p className={styles.block_946}>
                  obvious URL, even if the speaker did not
                </p>
                <p className={styles.block_947}>include it.</p>
                <p className={styles.block_948}>
                  <span className={styles.text_4}>
                    Correct: www.bernama.com{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>w w w bernama dot kom </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_949}>
                  <span className={styles.text_4}>
                    Correct: www.facebook.com{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>w w facebook dot kom </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_950}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_951}>
                  <span className={styles.text_4}>
                    Correct: www.target.com{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    w w w dot t a r g e t dot k o m{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_954}>
                  Correct: Inggeris versus Malaysia
                </p>
                <p className={styles.block_955}>
                  Incorrect: Inggeris vs. Malaysia
                </p>
                <p className={styles.block_956}>
                  <span className={styles.text_}>Example audio: " </span>
                  <span className={styles.text_1}>
                    inggeris versus malaysia{' '}
                  </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_957}>
                  <span className={styles.text_4}>
                    Correct: Inggeris v s Malaysia{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>inggeris v s malaysia </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_958}>
                  <span className={styles.text_4}>
                    Correct: Y A Tuan Roslan bin Mat Nor{' '}
                  </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>
                    y a tuan roslan bin mat nor{' '}
                  </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_959}>Explanation: court cases</p>
                <p className={styles.block_960}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_961}>
                  <span className={styles.text_4}>Correct: AT&amp;T, MP3 </span>
                  <span className={styles.text_9}>
                    Explanation: brands and products{' '}
                  </span>
                </p>
                <p className={styles.block_962}>
                  <span className={styles.text_4}>
                    Correct: AKN, APN, N Rajendran{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: geographic and personal names{' '}
                  </span>
                </p>
                <p className={styles.block_963}>
                  <span className={styles.text_4}>
                    Correct: NASA, ASEAN, NATO{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: pronounced as words{' '}
                  </span>
                </p>
                <p className={styles.block_964}>
                  <span className={styles.text_4}>Correct: lol </span>
                  <span className={styles.text_5}>Example audio: " </span>
                  <span className={styles.text_6}>lol </span>
                  <span className={styles.text_5}>" </span>
                </p>
                <p className={styles.block_965}>
                  <span className={styles.text_4}>Correct: radar </span>
                  <span className={styles.text_9}>
                    Explanation: extremely lexicalized acronyms
                  </span>
                </p>
                <p className={styles.block_966}>
                  If a brand name uses periods, include the periods.
                </p>
                <p className={styles.block_967}>
                  <span className={styles.text_4}>Correct: X.M.L </span>
                  <span className={styles.text_9}>
                    Explanation: Official brand name as seen in the
                  </span>
                </p>
                <p className={styles.block_968}>
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
