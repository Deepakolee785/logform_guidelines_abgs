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
            <PageContentHeader currentPage="longform Ukraninan" />
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
                  expression, as street numbers, as a measure or time unit.
                </p>
                <p className={styles.block_639}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : У класі дев'ятеро учнів.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: numbers less than 10 </span>
                </p>
                <p className={styles.block_640}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: У класі 13 учнів. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : numbers greater than 9{' '}
                  </span>
                </p>
                <p className={styles.block_641}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3,14 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    три цілих чотирнадцять сотих{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_642}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: decimal number </span>
                </p>
                <p className={styles.block_643}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 101 далматинець </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>сто один далматинець </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : numbers greater than 9{' '}
                  </span>
                </p>
                <p className={styles.block_645}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : У мене три кішки і 12 риб.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    у мене три кішки і дванадцять{' '}
                  </span>
                </p>
                <p className={styles.block_646}>
                  <span className={styles.text_12}>риб </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_647}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Follow this rule even if the noun phrases with numbers are
                    coordinated.
                  </span>
                </p>
                <p className={styles.block_648}>
                  When two or more numbers refer to the same noun, and one
                  number is 10 or greater, transcribe both as numerals.
                </p>
                <p className={styles.block_649}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Вони купили 9 чи 10 риб у зоомагазині.{' '}
                  </span>
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Петро володіє трьома чи чотирма мовами.{' '}
                  </span>
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Нам потрібні дві лопати і 11 візків.{' '}
                  </span>
                </p>
                <p className={styles.block_652}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Нам потрібні 2 лопати і 11 візків.{' '}
                  </span>
                </p>
                <p className={styles.block_653}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    нам потрібні дві лопати і одинадцять візків{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The numbers refer to different nouns, so this rule does
                    not apply here.
                  </span>
                </p>
                <p className={styles.block_655}>
                  If a large number consists of only a number followed by
                  "мільйон" or "мільярд", transcribe the number using digits and
                  an abbreviation ("млн" for "мільйон", "млрд" for "мільярд").
                  If no number precedes "мільйон" or "мільярд", write the full
                  word.
                </p>
                <p className={styles.block_656}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Населення Землі складає 7 млрд людей.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    населення землі складає сім{' '}
                  </span>
                </p>
                <p className={styles.block_657}>
                  <span className={styles.text_12}>мільярдів людей </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: цілий мільйон людей </span>
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: цілий млн людей </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Here "мільйон" is not preceded by a number, so do not
                    abbreviate it.
                  </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 1,5 млн грн </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    півтора мільйони гривень{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_662}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : For mixed numbers before "мільйон", "мільярд", etc., use
                    decimals.
                  </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 7,8 млрд </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    сім цілих вісім десятих мільярда{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_664}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_665}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 0 1 1 2 3 5 8 13 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    нуль один один два три п'ять{' '}
                  </span>
                </p>
                <p className={styles.block_666}>
                  <span className={styles.text_12}>вісім тринадцять </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_667}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3 2 1 пуск </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>три два один пуск </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_668}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : list of numbers, no comma if just counting
                  </span>
                </p>
                <p className={styles.block_669}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3 4 5 6 7 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    три чотири п'ять шість сім{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_670}>
                  For long numbers (4+ digits) indicating quantity, insert the
                  relevant separator (comma, decimal point, or space, depending
                  on language).
                </p>
                <p className={styles.block_671}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 10 000 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>десять тисяч </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_672}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 2 576 980 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    два мільйони п'ятсот сімдесят{' '}
                  </span>
                </p>
                <p className={styles.block_673}>
                  <span className={styles.text_12}>
                    шість тисяч дев'ятсот вісімдесят{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_674}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 10,000 грн </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : The number is followed by a currency,{' '}
                  </span>
                </p>
                <p className={styles.block_675}>
                  so the separator should be a comma.
                </p>
                <p className={styles.block_676}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_656}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Через 3/4 милі поверни направо.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    через три четвертих милі{' '}
                  </span>
                </p>
                <p className={styles.block_677}>
                  <span className={styles.text_12}>поверни направо </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_678}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Потрібна ще 1/4 кг цукру.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    потрібна ще чверть кілограма{' '}
                  </span>
                </p>
                <p className={styles.block_679}>
                  <span className={styles.text_12}>цукру </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_680}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Через 2/3 кілометра поверни наліво.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    через дві третіх кілометра{' '}
                  </span>
                </p>
                <p className={styles.block_681}>
                  <span className={styles.text_12}>поверни наліво </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 2/3 * 5/16 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    дві третіх помножене на п'ять{' '}
                  </span>
                </p>
                <p className={styles.block_683}>
                  <span className={styles.text_12}>шістнадцятих </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_684}>
                  For mixed numbers in math and units &amp; measures, use
                  numerals.
                </p>
                <p className={styles.block_685}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 3 1/2 км </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 3 і 1/2 км </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    три з половиною кілометри{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_688}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : дівчинці 5 1/2 місяців{' '}
                  </span>
                </p>
                <p className={styles.block_689}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : дівчинці п'ять з половиною місяця{' '}
                  </span>
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    дівчинці п'ять з половиною місяців{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_691}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 1/3 + 3 1/2 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>одна третя плюс три з </span>
                </p>
                <p className={styles.block_692}>
                  <span className={styles.text_12}>половиною </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_693}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Кішка вчора важила 12 1/4 фунтів.{' '}
                  </span>
                </p>
                <p className={styles.block_694}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Кішка вчора важила дванадцять з чвертю фунта.
                  </span>
                </p>
                <p className={styles.block_695}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    кішка вчора важила дванадцять з чвертю фунтів{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_696}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The noun agrees with the integer if the fraction contains
                    "half" or "quarter".
                  </span>
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 20 1/3 відсотка </span>
                </p>
                <p className={styles.block_698}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : двадцять цілих і одна третя відсотки{' '}
                  </span>
                </p>
                <p className={styles.block_699}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    двадцять цілих і одна третя відсотка{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_700}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The noun agrees with the fractional part if it is ed to
                    the integer with the conjunction "and".
                  </span>
                </p>
                <p className={styles.block_701}>
                  When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers, write the whole
                  number part out in words if it is under ten, otherwise write
                  it with numerals.
                </p>
                <p className={styles.block_702}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Дай мені половину пирога.{' '}
                  </span>
                </p>
                <p className={styles.block_703}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Дай мені 1/2 пирога. </span>
                </p>
                <p className={styles.block_704}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : три з половиною апельсини{' '}
                  </span>
                </p>
                <p className={styles.block_705}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 3 1/2 апельсини </span>
                </p>
                <p className={styles.block_706}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Зробили 12 з половиною пирогів.{' '}
                  </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Зробили 12 з 1/2 пирогів.{' '}
                  </span>
                </p>
                <p className={styles.block_708}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Зробили 12 1/2 пирогів.{' '}
                  </span>
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    зробили дванадцять з половиною пирогів{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_710}>
                  After the prefix "пів-" meaning "half", use a hyphen with
                  proper names. If a word starts with я, ю, є, ї, "пів-" should
                  be followed by an apostrophe. Otherwise, do not use a hyphen
                  or apostrophe.
                </p>
                <p className={styles.block_711}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: півгодини </span>
                </p>
                <p className={styles.block_712}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: пів-години </span>
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: пів-Африки </span>
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: півафрики </span>
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: пів'яблука </span>
                </p>
                <p className={styles.block_716}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: півяблука </span>
                </p>
                <p className={styles.block_717}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_718}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ти можеш позичити мені 2,50 грн?{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    ти можеш позичити мені дві{' '}
                  </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_12}>п'ятдесят </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_720}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3,50 грн </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    три з половиною гривні{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_721}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Вона купила дім за 7,5 млн доларів.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    вона купила дім за сім з{' '}
                  </span>
                </p>
                <p className={styles.block_722}>
                  <span className={styles.text_12}>
                    половиною мільйонів доларів{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_723}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 123,45 грн </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    сто двадцять три гривні сорок{' '}
                  </span>
                </p>
                <p className={styles.block_724}>
                  <span className={styles.text_12}>п'ять копійок </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_725}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3,99 € </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    три євро дев'яносто дев'ять{' '}
                  </span>
                </p>
                <p className={styles.block_726}>
                  <span className={styles.text_12}>центів </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_727}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 5,20 $ </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    п'ять доларів двадцять центів{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_728}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_729}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 40% </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>сорок відсотків </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_730}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: мільйон відсотків </span>
                </p>
                <p className={styles.block_731}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 5 млн процентів </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    п'ять мільйонів процентів{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_732}>
                  When numbers appear in prenominals (units preceding nouns),
                  transcribe using words. Transcribe as digits if paired with
                  units; for cardinals use a hyphen and appropriate suffixation
                  after the digit.
                </p>
                <p className={styles.block_733}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: двометрова хвиля </span>
                </p>
                <p className={styles.block_734}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 2 метрова хвиля </span>
                </p>
                <p className={styles.block_735}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: чотиридверна Тойота </span>
                </p>
                <p className={styles.block_736}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 4 дверна Тойота </span>
                </p>
                <p className={styles.block_737}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: стогривнева купюра </span>
                </p>
                <p className={styles.block_738}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 100 грн. купюра </span>
                </p>
                <p className={styles.block_739}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 15 км </span>
                </p>
                <p className={styles.block_740}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: п'ятнадцять км </span>
                </p>
                <p className={styles.block_741}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>п'ятнадцять кілометрів </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_742}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: на 36-му кілометрі </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>на тридцять шостому </span>
                </p>
                <p className={styles.block_743}>
                  <span className={styles.text_12}>кілометрі </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_744}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: після 7-ї години </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>після сьомої години </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_745}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: двопроцентне молоко </span>
                </p>
                <p className={styles.block_746}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 2% молоко </span>
                </p>
                <p className={styles.block_747}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Elements "дво-", "три-", "чотири-" are connected to the
                    root that starts with a consonant, while their variations
                    "двох-", "трьох-", "чотирьох-" are used when the second
                    component starts with a vowel.
                  </span>
                </p>
                <p className={styles.block_748}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_749}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_750}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Генріх VII </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>генріх сьомий </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_473}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: відеогра Diablo III </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>відеогра дйабло три </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_751}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: XVII століття </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>сімнадцяте століття </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_752}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Use Roman numerals to denote centuries.{' '}
                  </span>
                </p>
                <p className={styles.block_753}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: XXI Олімпійські ігри </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    двадцять перші олімпійські ігри{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_754}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_755}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3 сезон 5 серія </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    третій сезон п'ята серія{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_756}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : 5-а серія 3-го сезону{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    п'ята серія третього сезону{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_757}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Ordinals may use the appropriate endings according to the
                    rules.
                  </span>
                </p>
                <p className={styles.block_758}>
                  If it is a product type, use the common written form.
                </p>
                <p className={styles.block_759}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: калібр.22 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>калібр двадцять два </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_760}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Android 4.0.1 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    андроїд чотири нуль один{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_761}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_762}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 098 385-07-22 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    нуль дев'яносто вісім триста{' '}
                  </span>
                </p>
                <p className={styles.block_763}>
                  <span className={styles.text_12}>
                    вісімдесят п'ять нуль сім двадцять два{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_764}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: mobile phone number </span>
                </p>
                <p className={styles.block_765}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 0532 65-62-54 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    нуль п'ять тридцять два{' '}
                  </span>
                </p>
                <p className={styles.block_766}>
                  <span className={styles.text_12}>
                    шістдесят п'ять шістдесят два п'ятдесят чотири{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_767}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : landline with three-digit area code preceded by a leading
                    "0"
                  </span>
                </p>
                <p className={styles.block_768}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 053 123-45-67 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : landline with two-digit area code{' '}
                  </span>
                </p>
                <p className={styles.block_769}>preceded by a leading "0"</p>
                <p className={styles.block_770}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: +380 512 22-30-61 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    плюс три вісім нуль п'ятсот{' '}
                  </span>
                </p>
                <p className={styles.block_771}>
                  <span className={styles.text_12}>
                    дванадцять двадцять два тридцять шістдесят один{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : landline with country code (the leading "0" is removed)
                  </span>
                </p>
                <p className={styles.block_773}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 00380 512 22-30-61 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : landline with country code (the leading{' '}
                  </span>
                </p>
                <p className={styles.block_774}>"0" is removed)</p>
                <p className={styles.block_775}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 8-048-433525 дод. 54 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    вісім нуль сорок вісім сорок три{' '}
                  </span>
                </p>
                <p className={styles.block_776}>
                  <span className={styles.text_12}>
                    тридцять п'ять двадцять п'ять додатковий номер п'ятдесят
                    чотири{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_777}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 0-800-12-34-56 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>: toll-free number </span>
                </p>
                <p className={styles.block_778}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Do not
                  transcribe credit card numbers, etc.
                </p>
                <p className={styles.block_779}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: XT 660 or XT660 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    екс ті шістсот шістдесят{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_780}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_781}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 5 * 6 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    п'ять помножити на шість{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_782}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    п'ять помножене на шість{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_783}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>п'ять на шість </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_784}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 4x4 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>чотири на чотири </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_785}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: truck type </span>
                </p>
                <p className={styles.block_786}>
                  <span className={styles.text_14}>C</span>
                  <span className={styles.text_15}>ORRECT</span>
                  <span className={styles.text_16}>: √3 </span>
                  <span className={styles.text_17}>E</span>
                  <span className={styles.text_18}>XAMPLE AUDIO</span>
                  <span className={styles.text_17}>: " </span>
                  <span className={styles.text_19}>корінь від трьох </span>
                  <span className={styles.text_17}>" </span>
                </p>
                <p className={styles.block_787}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Скільки буде 8 годин * 12 $?{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    скільки буде вісім годин{' '}
                  </span>
                </p>
                <p className={styles.block_788}>
                  <span className={styles.text_12}>
                    помножене на дванадцять доларів{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_789}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Скільки буде два удави розділити на чотири папуги?
                  </span>
                </p>
                <p className={styles.block_790}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Does not sound like a true math expression with useful
                    units, so transcribe with words.
                  </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_793}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 20 $ </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>двадцять доларів </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_794}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 33,50 € </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    тридцять три євро п'ятдесят{' '}
                  </span>
                </p>
                <p className={styles.block_795}>
                  <span className={styles.text_12}>центів </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_796}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3 грн </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>три гривні </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_797}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 11 коп </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>одинадцять копійок </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_798}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 1 грн 50 коп </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    одна гривня п'ятдесят копійок{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_799}>
                  If it is obvious from context that a number reflects an amount
                  of currency, transcribe adding "грн" following the amount, or
                  other currency sign.
                </p>
                <p className={styles.block_800}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Ціна на бензин виросла до 4.89 грн за літр.
                  </span>
                </p>
                <p className={styles.block_801}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Ціна на бензин виросла до 489 за літр.{' '}
                  </span>
                </p>
                <p className={styles.block_802}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    ціна на бензин виросла до чотирьох вісімдесяти дев'яти за
                    літр{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_803}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : На Манхеттені студія коштує не менше 2000 $.
                  </span>
                </p>
                <p className={styles.block_804}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    на манхеттені студія коштує не менше двох тисяч{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_805}>
                  For kopiyok-only quantities, the abbreviation "коп" should
                  follow the amount.
                </p>
                <p className={styles.block_806}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 5 коп </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>п'ять копійок </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_807}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 50-копійкове пиво </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    п'ятдесятикопійкове пиво{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_808}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_809}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Я заплатив 5 штук. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>я заплатив п'ять штук </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_810}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Я заплатив 5,000 $. </span>
                </p>
                <p className={styles.block_811}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 100 баксів </span>
                </p>
                <p className={styles.block_812}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 100 $ </span>
                </p>
                <p className={styles.block_813}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>сто баксів </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_814}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 2 000 єн </span>
                </p>
                <p className={styles.block_815}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: ¥2000 </span>
                </p>
                <p className={styles.block_816}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>дві тисячі єн </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_817}>
                  When a speaker uses words like "dollar" without specifying a
                  quantity, spell them out.
                </p>
                <p className={styles.block_818}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ось тобі долар. </span>
                </p>
                <p className={styles.block_819}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Ось тобі 1 $. </span>
                </p>
                <p className={styles.block_820}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>ось тобі долар </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_821}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: лише декілька євро </span>
                </p>
                <p className={styles.block_822}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: лише декілька € </span>
                </p>
                <p className={styles.block_823}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : курс української гривні до іноземних валют
                  </span>
                </p>
                <p className={styles.block_824}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : курс української грн до іноземних валют{' '}
                  </span>
                </p>
                <p className={styles.block_825}>
                  Write out denominations of currency (the face values of bills,
                  notes, coins, etc). Use hyphens as needed.
                </p>
                <p className={styles.block_826}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: стогривнева купюра </span>
                </p>
                <p className={styles.block_827}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 20-доларова банкнота </span>
                </p>
                <p className={styles.block_828}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 5-копійкова монета </span>
                </p>
                <p className={styles.block_829}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_830}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Мені потрібно чотири або п'ять тисяч гривень.
                  </span>
                </p>
                <p className={styles.block_831}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    мені потрібно чотири або п'ять тисяч гривень{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_832}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : від п'яти до восьми тисяч доларів{' '}
                  </span>
                </p>
                <p className={styles.block_833}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : У мене 400 або 500 євро.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    у мене чотириста або п'ятсот{' '}
                  </span>
                </p>
                <p className={styles.block_834}>
                  <span className={styles.text_12}>євро </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_835}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 9 або 12 гривень </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    дев'ять або дванадцять гривень{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_836}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_837}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: на вулиці 20° </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    на вулиці двадцять градусів{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_838}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 5° C </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    п'ять градусів цельсія{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_839}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    п'ять градусів за цельсієм{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_840}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 70° F </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>сімдесят градусів за </span>
                </p>
                <p className={styles.block_841}>
                  <span className={styles.text_12}>фаренгейтом </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_842}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    сімдесят за фаренгейтом{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_843}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    сімдесят градусів фаренгейта{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_731}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : У Києві сьогодні -10°.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    у києві сьогодні мінус десять{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_844}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : У нас тепліше. Було нижче 0°, а стало +5°.
                  </span>
                </p>
                <p className={styles.block_845}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    у нас тепліше було нижче нуля а стало плюс п'ять{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_846}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_847}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Пройдіть 100 м та поверніть ліворуч.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    пройдіть сто метрів та{' '}
                  </span>
                </p>
                <p className={styles.block_848}>
                  <span className={styles.text_12}>поверніть ліворуч </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_725}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Він важить 3 кг. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    він важить три кілограми{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_849}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ми купили 12 л соку. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    ми купили дванадцять літрів{' '}
                  </span>
                </p>
                <p className={styles.block_850}>
                  <span className={styles.text_12}>соку </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_851}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Він пройшов 10 миль. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    він пройшов десять миль{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_852}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Купи 700 г цукру. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    купи сімсот грамів цукру{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_853}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Вони мають проїхати 20 км.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    вони мають проїхати двадцять{' '}
                  </span>
                </p>
                <p className={styles.block_854}>
                  <span className={styles.text_12}>кілометрів </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_853}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Було перевезено 30 т зерна.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    було перевезено тридцять тон{' '}
                  </span>
                </p>
                <p className={styles.block_855}>
                  <span className={styles.text_12}>зерна </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_856}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Завод обробив 2 ц руди.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    завод обробив два центнери{' '}
                  </span>
                </p>
                <p className={styles.block_857}>
                  <span className={styles.text_12}>руди </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Квітка виросла на 4 см.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    квітка виросла на чотири{' '}
                  </span>
                </p>
                <p className={styles.block_858}>
                  <span className={styles.text_12}>сантиметри </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_859}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_860}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Нам бракує 50 г цукру.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    нам бракує п'ятдесяти грамів{' '}
                  </span>
                </p>
                <p className={styles.block_861}>
                  <span className={styles.text_12}>цукру </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_862}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Вони працюють 8 годин на день.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    вони працюють вісім годин на{' '}
                  </span>
                </p>
                <p className={styles.block_863}>
                  <span className={styles.text_12}>день </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Пакунок важить 3 кг. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    пакунок важить три кілограми{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_864}>
                  For lengths, widths, and heights, use "x" instead of any
                  preposition.
                </p>
                <p className={styles.block_865}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ми замовили фотографії 9x13 см.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    ми замовили фотографії дев'ять{' '}
                  </span>
                </p>
                <p className={styles.block_866}>
                  <span className={styles.text_12}>
                    на тринадцять сантиметрів{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_867}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Розмір моєї валізи - приблизно 40х30х20.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    розмір моєї валізи приблизно сорок{' '}
                  </span>
                </p>
                <p className={styles.block_868}>
                  <span className={styles.text_12}>
                    на тридцять на двадцять сантиметрів{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_869}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: розширення 1024x768 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    розширення тисяча двадцять{' '}
                  </span>
                </p>
                <p className={styles.block_870}>
                  <span className={styles.text_12}>
                    чотири на сімсот шістдесят вісім{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_871}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_872}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Постав будильник на 5:45.{' '}
                  </span>
                </p>
                <p className={styles.block_873}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Постав будильник на 545.{' '}
                  </span>
                </p>
                <p className={styles.block_874}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    постав будильник на п'ять сорок п'ять{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_875}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Зустріч відбудеться о 20:00.{' '}
                  </span>
                </p>
                <p className={styles.block_876}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Зустріч відбудеться о 2000.{' '}
                  </span>
                </p>
                <p className={styles.block_877}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    зустріч відбудеться о двадцятій нуль нуль{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_878}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_879}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>мегабайт - МБ </span>
                </p>
                <p className={styles.block_880}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кілобайт - КБ </span>
                </p>
                <p className={styles.block_881}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>гігабайт - ГБ </span>
                </p>
                <p className={styles.block_882}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>терабайт - ТБ </span>
                </p>
                <p className={styles.block_883}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>біт на секунду - біт/с </span>
                </p>
                <p className={styles.block_884}>Slang terms (spell them out)</p>
                <p className={styles.block_885}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кіло </span>
                </p>
                <p className={styles.block_886}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>гіга </span>
                </p>
                <p className={styles.block_887}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>гігов </span>
                </p>
                <p className={styles.block_888}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>гіг </span>
                </p>
                <p className={styles.block_889}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>бакси </span>
                </p>
                <p className={styles.block_890}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>баксів </span>
                </p>
                <p className={styles.block_891}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>міліметр - мм </span>
                </p>
                <p className={styles.block_893}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>сантиметр - см </span>
                </p>
                <p className={styles.block_894}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>метр - м </span>
                </p>
                <p className={styles.block_895}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кілометр - км </span>
                </p>
                <p className={styles.block_896}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    кілометр за годину - км/год{' '}
                  </span>
                </p>
                <p className={styles.block_897}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>метр за секунду - м/с </span>
                </p>
                <p className={styles.block_898}>Common measurements of area</p>
                <p className={styles.block_899}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    квадратний сантиметр - см2{' '}
                  </span>
                </p>
                <p className={styles.block_900}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>квадратний метр - м2 </span>
                </p>
                <p className={styles.block_901}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>метр в квадраті - м2 </span>
                </p>
                <p className={styles.block_159}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    квадратний кілометр - км2{' '}
                  </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>гектар - га </span>
                </p>
                <p className={styles.block_902}>Common scientific terms</p>
                <p className={styles.block_903}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>децибел - дБ </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ньютон - Н </span>
                </p>
                <p className={styles.block_904}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>джоуль - Дж </span>
                </p>
                <p className={styles.block_905}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>парсек - пк </span>
                </p>
                <p className={styles.block_906}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ампер - А </span>
                </p>
                <p className={styles.block_907}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>герц - Гц </span>
                </p>
                <p className={styles.block_908}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>ват - Вт </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>вольт - В </span>
                </p>
                <p className={styles.block_909}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кіловат - кВт </span>
                </p>
                <p className={styles.block_910}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>моль - моль </span>
                </p>
                <p className={styles.block_413}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>градус - ° </span>
                </p>
                <p className={styles.block_911}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>градус Фаренгейта - °F </span>
                </p>
                <p className={styles.block_912}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>градус Цельсія - °C </span>
                </p>
                <p className={styles.block_913}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_914}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>грам - г </span>
                </p>
                <p className={styles.block_915}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>міліграм - мг </span>
                </p>
                <p className={styles.block_904}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кілограм - кг </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>літр - л </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>мілілітр - мл </span>
                </p>
                <p className={styles.block_161}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кубичні одиниці - 3 </span>
                </p>
                <p className={styles.block_916}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кубічний метр - м3 </span>
                </p>
                <p className={styles.block_917}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>кубометр - м3 </span>
                </p>
                <p className={styles.block_918}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>фунт - фунт </span>
                </p>
                <p className={styles.block_919}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>унція - унція </span>
                </p>
                <p className={styles.block_920}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>калорія - кал </span>
                </p>
                <p className={styles.block_921}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>столова ложка - ст. л. </span>
                </p>
                <p className={styles.block_922}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>чайна ложка - ч. л. </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_925}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: в 90-ті рр. </span>
                </p>
                <p className={styles.block_926}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: в 90 роки </span>
                </p>
                <p className={styles.block_927}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>в дев'яності роки </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_928}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 12 липня 1964 року </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    дванадцяте липня тисяча{' '}
                  </span>
                </p>
                <p className={styles.block_929}>
                  <span className={styles.text_12}>
                    дев'ятсот шістдесят четвертого року{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_930}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : вівторок, 14 серпня 2012 року{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    вівторок чотирнадцяте серпня{' '}
                  </span>
                </p>
                <p className={styles.block_931}>
                  <span className={styles.text_12}>
                    дві тисячі дванадцятого року{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_932}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: весна 98-го </span>
                </p>
                <p className={styles.block_933}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: весна 98го </span>
                </p>
                <p className={styles.block_934}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    весна дев'яносто восьмого{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_935}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 15 вересня ц.р. </span>
                </p>
                <p className={styles.block_936}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 15-го вересня ц.р. </span>
                </p>
                <p className={styles.block_937}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    п'ятнадцятого вересня цього року{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_938}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such.
                </p>
                <p className={styles.block_939}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 07.12.2010 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    сьоме дванадцяте дві тисячі{' '}
                  </span>
                </p>
                <p className={styles.block_940}>
                  <span className={styles.text_12}>десятий </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_941}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Вжити до 05.10.2012. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    вжити до п'ятого десятого дві{' '}
                  </span>
                </p>
                <p className={styles.block_942}>
                  <span className={styles.text_12}>тисячі дванадцятого </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_943}>
                  Use the natural form for transcribing times whenever possible.
                </p>
                <p className={styles.block_944}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so.
                </p>
                <p className={styles.block_945}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 12:20 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    дванадцята година двадцять{' '}
                  </span>
                </p>
                <p className={styles.block_946}>
                  <span className={styles.text_12}>хвилин </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_947}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>дванадцята двадцять </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_948}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 15:15 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>п'ятнадцять хвилин на </span>
                </p>
                <p className={styles.block_949}>
                  <span className={styles.text_12}>четверту </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_950}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3:15 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>п'ятнадцять хвилин на </span>
                </p>
                <p className={styles.block_951}>
                  <span className={styles.text_12}>четверту </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_952}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: об 11:30 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    об одинадцятій тридцять{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_953}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: о 3:00 </span>
                </p>
                <p className={styles.block_954}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: о 3 годині </span>
                </p>
                <p className={styles.block_955}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: о 3 год </span>
                </p>
                <p className={styles.block_956}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>о третій </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_957}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: через дві години </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>через дві години </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_950}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 4:15 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>п'ятнадцять хвилин по </span>
                </p>
                <p className={styles.block_958}>
                  <span className={styles.text_12}>четвертій </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_959}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 8:50 </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    за десять хвилин дев'ята{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_960}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Поїзд відходить о 18:07.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    поїзд відходить о вісімнадцятій{' '}
                  </span>
                </p>
                <p className={styles.block_961}>
                  <span className={styles.text_12}>нуль сім </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_962}>
                  If spoken, use "ранку", "вранці", "до обіду" for "a.m.", and
                  "вечора", "ввечері", "увечері", "пополудні", "після обіду",
                  "по обіді" for p.m.
                </p>
                <p className={styles.block_963}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Поїзд відходить о 9-й ранку.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    поїзд відходить о дев'ятій{' '}
                  </span>
                </p>
                <p className={styles.block_964}>
                  <span className={styles.text_12}>ранку </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_965}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Mи їдемо об 11-й вечора.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    ми їдемо об одинадцятій{' '}
                  </span>
                </p>
                <p className={styles.block_966}>
                  <span className={styles.text_12}>вечора </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_967}>
                  For "опівдні" and "опівночі", use the written form.
                </p>
                <p className={styles.block_968}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Зустрінемося опівдні.{' '}
                  </span>
                </p>
                <p className={styles.block_969}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Зустрінемося о 12:00.{' '}
                  </span>
                </p>
                <p className={styles.block_970}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>зустрінемося опівдні </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_971}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Опівночі було страшно йти додому.{' '}
                  </span>
                </p>
                <p className={styles.block_972}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : О 00:00 було страшно йти додому.{' '}
                  </span>
                </p>
                <p className={styles.block_973}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    опівночі було страшно йти додому{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_976}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Вона живе в Житомирському районі Львова.{' '}
                  </span>
                </p>
                <p className={styles.block_977}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Вони провели осінь в селі Воскресенськ.{' '}
                  </span>
                </p>
                <p className={styles.block_978}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : вулиця Чайковського, 31, квартира 20, місто Одеса, 65496
                  </span>
                </p>
                <p className={styles.block_979}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    вулиця чайковського тридцять один квартира двадцять місто
                    oдеса шістдесят п'ять чотириста дев'яносто шість{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_980}>
                  Use commas between elements of an address, such as the street,
                  the town, the region, and the country.
                </p>
                <p className={styles.block_981}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : 01601, місто Київ, вулиця Бастіонна, 9{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    нуль один шістсот один місто{' '}
                  </span>
                </p>
                <p className={styles.block_982}>
                  <span className={styles.text_12}>
                    київ вулиця бастіонна дев'ять{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_983}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : 03168, Чернігів, Повітрофлотський проспект, 6
                  </span>
                </p>
                <p className={styles.block_984}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    нуль три один шість вісім чернігів повітрофлотський проспект
                    шість{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_985}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : вулиця Українська, будинок 104, село Вороньків,
                    Бориспільський район, Київська область, 08352 Україна
                  </span>
                </p>
                <p className={styles.block_986}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    вулиця українська будинок сто чотири село вороньків
                    бориспільський район київська область нуль вісім триста
                    п'ятдесят два україна{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_987}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_988}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : ресторан Українські страви, Львів{' '}
                  </span>
                </p>
                <p className={styles.block_989}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Шоколадниця, вулиця Васляєва{' '}
                  </span>
                </p>
                <p className={styles.block_990}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : продовольчі товари, Миколаїв{' '}
                  </span>
                </p>
                <p className={styles.block_991}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: хірург Шпак, Харків </span>
                </p>
                <p className={styles.block_992}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: погода, Кременчуг </span>
                </p>
                <p className={styles.block_993}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Джеймс Бонд, сеанси, Київ{' '}
                  </span>
                </p>
                <p className={styles.block_994}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Дмитро Іванов, Одеса </span>
                </p>
                <p className={styles.block_995}>
                  Do not capitalize cardinal directions unless part of a
                  specific place name.
                </p>
                <p className={styles.block_996}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Зустрінемося біля південного виходу з метро.
                  </span>
                </p>
                <p className={styles.block_997}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Зустрінемося на станції Південна.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "Південна" is a name of the station.{' '}
                  </span>
                </p>
                <p className={styles.block_998}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Він ніколи не доїжджав до найпівденнішої станції.
                  </span>
                </p>
                <p className={styles.block_342}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Північний районний відділ міліції{' '}
                  </span>
                </p>
                <p className={styles.block_999}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: село Північне </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : "Північне" is a town name.{' '}
                  </span>
                </p>
                <p className={styles.block_1000}>
                  If a speaker uses the words "будинок" and "номер" after the
                  street name and before the street number, omit the words
                  "будинок" and "номер" when transcribing.
                </p>
                <p className={styles.block_1001}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: вулиця Галицька, 38 </span>
                </p>
                <p className={styles.block_1002}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : вулиця Галицька, будинок 38{' '}
                  </span>
                </p>
                <p className={styles.block_1003}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    вулиця галицька будинок тридцять вісім{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1004}>
                  Do not omit prepositions like "в" and "у" if you're dealing
                  with isolated addresses.
                </p>
                <p className={styles.block_1005}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : вулиця Галицька, 38 в Івано-Франківську{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    вулиця галицька тридцять вісім в{' '}
                  </span>
                </p>
                <p className={styles.block_1006}>
                  <span className={styles.text_12}>івано франківську </span>
                  <span className={styles.text_13}>" </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_1009}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.google.com.ua </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    дабл'ю дабл'ю дабл'ю крапка гугл{' '}
                  </span>
                </p>
                <p className={styles.block_1010}>
                  <span className={styles.text_12}>крапка ком крапка юей </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_1011}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.123.com </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    дабі дабі дабі один два три крапка{' '}
                  </span>
                </p>
                <p className={styles.block_1012}>
                  <span className={styles.text_12}>ком </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_1013}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: http://123.com </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    ейч ті ті пі двокрапка подвійний{' '}
                  </span>
                </p>
                <p className={styles.block_1014}>
                  <span className={styles.text_12}>
                    слеш один два три крапка ком{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_1015}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: http://example.com </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    ейч ті ті пі подвійна скісна риска{' '}
                  </span>
                </p>
                <p className={styles.block_1016}>
                  <span className={styles.text_12}>екзампл крапка ком </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_1017}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: email@google.com </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    імейл собачка гугл крапка ком{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1018}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: amazon.com </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>амазон крапка ком </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1019}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Вечеря в улюбленому ресторані #обожнююп'ятницю
                  </span>
                </p>
                <p className={styles.block_1020}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    вечеря в улюбленому ресторані хештег обожнюю п'ятницю{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1021}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: я не люблю хештеги </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : If a user uses hashtag as a noun, write it
                  </span>
                </p>
                <p className={styles.block_1022}>out as a word.</p>
                <p className={styles.block_1023}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".
                </p>
                <p className={styles.block_860}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : http:\\mail.yahoo.com{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    ейч ті ті пі двокрапка подвійна{' '}
                  </span>
                </p>
                <p className={styles.block_1024}>
                  <span className={styles.text_12}>
                    зворотня скісна риска мейл крапка яху крапка ком{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_1025}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_1026}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.google.com </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    дабл'ю дабл'ю крапка гугл крапка{' '}
                  </span>
                </p>
                <p className={styles.block_1027}>
                  <span className={styles.text_12}>ком </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_1028}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : If the user mistakenly says "ww", transcribe "www".
                  </span>
                </p>
                <p className={styles.block_304}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.forbes.com </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    дабл'ю дабл'ю дабл'ю форбз{' '}
                  </span>
                </p>
                <p className={styles.block_1029}>
                  <span className={styles.text_12}>крапка ком </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_1030}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Also transcribe the dot in an obvious URL, even if the
                    speaker did not include it.
                  </span>
                </p>
                <p className={styles.block_1031}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_1032}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.google.com </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    дабл'ю дабл'ю дабл'ю крапка{' '}
                  </span>
                </p>
                <p className={styles.block_1033}>
                  <span className={styles.text_12}>
                    джі оу оу джі ел і крапка сі оу ем{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text '}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_1036}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Купи молока, сиру і так далі.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    купи молока сиру і так далі{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1037}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Купи молока, сиру і т. д.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    купи молока сиру і те де{' '}
                  </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1038}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Кабмін ухвалив держбюджет.{' '}
                  </span>
                </p>
                <p className={styles.block_1039}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Кабмін ухвалив державний бюджет.{' '}
                  </span>
                </p>
                <p className={styles.block_1040}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    кабмін ухвалив держбюджет{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1041}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Кабінет міністрів ухвалив державний бюджет.
                  </span>
                </p>
                <p className={styles.block_1042}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Кабмін ухвалив держбюджет.{' '}
                  </span>
                </p>
                <p className={styles.block_1043}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    кабінет міністрів ухвалив державний бюджет{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1044}>
                  Do not capitalize titles. Abbreviate ukrainian titles "пане"
                  and "пані" for people only when they precede proper names.
                </p>
                <p className={styles.block_1045}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Я знаю п. Клімкіна. </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>я знаю пана клімкіна </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1046}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Шановна п. Тетяно! </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>шановна пані тетяно </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1047}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Пані та панове, сьогодні важливий день.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    пані та панове сьогодні важливий{' '}
                  </span>
                </p>
                <p className={styles.block_1048}>
                  <span className={styles.text_12}>день </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_1049}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: містер Сміт </span>
                </p>
                <p className={styles.block_1050}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: м-р Сміт </span>
                </p>
                <p className={styles.block_1051}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_1052}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: MP3, DVD, NASA, PM </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : acronyms commonly written with Latin{' '}
                  </span>
                </p>
                <p className={styles.block_1053}>letters</p>
                <p className={styles.block_1054}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ООН, НАТО, МЗС, ДАІ, АЗС{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : acronyms commonly written with Сyrillic{' '}
                  </span>
                </p>
                <p className={styles.block_1055}>letters</p>
                <p className={styles.block_1056}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: lol </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>ел о ел </span>
                  <span className={styles.text_9}>" </span>
                </p>
                <p className={styles.block_1057}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>лол </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_1058}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Internet acronym usually written with Latin letters
                  </span>
                </p>
                <p className={styles.block_1059}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ця конференція лише для ООНівців.{' '}
                  </span>
                  <span className={styles.text_9}>E</span>
                  <span className={styles.text_10}>XAMPLE AUDIO</span>
                  <span className={styles.text_9}>: " </span>
                  <span className={styles.text_11}>
                    ця конференція лише для{' '}
                  </span>
                </p>
                <p className={styles.block_1060}>
                  <span className={styles.text_12}>оонівців </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_1061}>
                  If a brand name uses periods, include the periods.
                </p>
                <p className={styles.block_1062}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: A. Tan </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XPLANATION</span>
                  <span className={styles.text_7}>
                    : Official brand name as seen in the{' '}
                  </span>
                </p>
                <p className={styles.block_1063}>
                  privacy policy includes periods.
                </p>
                <p className={styles.block_1064}>
                  Use periods after initials in personal names. Include a space
                  after each period.
                </p>
                <p className={styles.block_1065}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Т. Г. Шевченко </span>
                </p>
                <p className={styles.block_1066}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Т.Г.Шевченко </span>
                </p>
                <p className={styles.block_1067}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: ТГ Шевченко </span>
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
