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
            <PageContentHeader currentPage="longform Turskish" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 0 1 1 2 3 5 8 10 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : sıfır bir bir iki üç beş sekiz on{' '}
                  </span>
                </p>
                <p className={styles.block_494}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 5 4 3 2 1 atış </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : list of numbers, no comma if just{' '}
                  </span>
                </p>
                <p className={styles.block_495}>counting</p>
                <p className={styles.block_496}>
                  For long numbers (4+ digits), transcribe the string of digits
                  with period.
                </p>
                <p className={styles.block_497}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 1.000 </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 1 000 </span>
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 1000 </span>
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 1,000 </span>
                </p>
                <p className={styles.block_501}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>bin </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_502}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : 1/4 tatlı kaşığı vanilya ekleyin.{' '}
                  </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Çeyrek tatlı kaşığı vanilya ekleyin.{' '}
                  </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : 1 / 4 tatlı kaşığı vanilya ekleyin.{' '}
                  </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : 1⁄4 tatlı kaşığı vanilya ekleyin. (bad because it includes
                    the pre-combined fraction 1⁄4)
                  </span>
                </p>
                <p className={styles.block_507}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    bir bölü dört tatlı kaşığı vanilya ekleyin{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_508}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Be careful not to include spaces or pre-combined fraction
                    characters. After "4", include a space.
                  </span>
                </p>
                <p className={styles.block_509}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Asfaltın 1/4'ü tamamlandı.{' '}
                  </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Asfaltın 1 /4'ü tamamlandı.{' '}
                  </span>
                </p>
                <p className={styles.block_511}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : 1/4 asfalt tamamlandı.{' '}
                  </span>
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : 1⁄4 asfalt tamamlandı.{' '}
                  </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    asfaltın dörtte biri tamamlandı{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_514}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 3/2 x 16/5 </span>
                </p>
                <p className={styles.block_515}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : üç bölü iki * on altı bölü beş{' '}
                  </span>
                </p>
                <p className={styles.block_516}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : üçte iki çarpı on altıda beş{' '}
                  </span>
                </p>
                <p className={styles.block_517}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 2/3 çarpı 5/16 </span>
                </p>
                <p className={styles.block_518}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    üç bölü iki çarpı on altı bölü beş{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : 1/4 inç tork anahtarı lazım.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    bir bölü dört inç tork anahtarı{' '}
                  </span>
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_12}>lazım </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_521}>
                  For mixed numbers in math and units &amp; measures, do not use
                  numerals with "ve".
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3,5 km </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: üç buçuk kilometre </span>
                </p>
                <p className={styles.block_523}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Kadının 1,65 m boyunda olduğu söyleniyor.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Kadının bir altmış beş boyunda olduğu{' '}
                  </span>
                </p>
                <p className={styles.block_524}>söyleniyor.</p>
                <p className={styles.block_525}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : 6,5 aylık hamileymiş.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Altı buçuk aylık hamileymiş.{' '}
                  </span>
                </p>
                <p className={styles.block_526}>
                  When referring to items (not units or measures), write
                  fractions out in words. With mixed numbers,
                </p>
                <p className={styles.block_527}>
                  write the whole number part out in words if it is under ten,
                  otherwise write it with numerals.
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Bana yarım ekmek ver.{' '}
                  </span>
                </p>
                <p className={styles.block_529}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Bana 1/2 ekmek ver. </span>
                </p>
                <p className={styles.block_530}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>bana yarım ekmek ver </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_531}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : elmanın on altıda beşi{' '}
                  </span>
                </p>
                <p className={styles.block_532}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 5/16 elma </span>
                </p>
                <p className={styles.block_533}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: elmanın 0.3125'i </span>
                </p>
                <p className={styles.block_534}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>elmanın on altıda beşi </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_535}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Yarı otomatik vites </span>
                </p>
                <p className={styles.block_536}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 1/2 otomatik vites </span>
                </p>
                <p className={styles.block_537}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 0.5 otomatik vites </span>
                </p>
                <p className={styles.block_538}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Yarım ağız gülümsedi.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Here "half" is used more figuratively,{' '}
                  </span>
                </p>
                <p className={styles.block_539}>
                  and it is written out as a word.
                </p>
                <p className={styles.block_540}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Bir elmanın yarısı gibiyiz.{' '}
                  </span>
                </p>
                <p className={styles.block_541}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : 1 elmanın 1/2'si gibiyiz.{' '}
                  </span>
                </p>
                <p className={styles.block_542}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Bir elmanın 1 / 2'si gibiyiz.{' '}
                  </span>
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    bir elmanın yarısı gibiyiz{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : 12 Dev Adam yarı final maçını da kazandı.
                  </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : 12 dev adam 1/2 maçını da kazandı.{' '}
                  </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : on iki dev adam 0.5 maçını da kazandı.{' '}
                  </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    on iki dev adam yarı final maçını da kazandı{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_547}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: €10, ₺27,75 midir? </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    on euro yirmi yedi lira yetmiş beş{' '}
                  </span>
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_12}>kuruş mudur </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : You can use "comma" after the first number "€10" to avoid
                    confusion in the written format.
                  </span>
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ödemeniz gereken tutar ₺15.500,55.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    ödemeniz gereken tutar on beş bin{' '}
                  </span>
                </p>
                <p className={styles.block_552}>
                  <span className={styles.text_12}>
                    beş yüz lira elli beş kuruş{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_553}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a
                </p>
                <p className={styles.block_554}>
                  number of a million or greater used as a percentage, spell it
                  out.)
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: %2 ihtimal var. </span>
                </p>
                <p className={styles.block_556}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: yüzde bir milyon </span>
                </p>
                <p className={styles.block_557}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: %50 şansınız mevcut. </span>
                </p>
                <p className={styles.block_558}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_559}>
                  Use Roman numerals only when part of an official name or
                  title.
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: V. Murat </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>beşinci murat </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: I. Osman </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>birinci osman </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_562}>
                  Transcribe seasons and episodes of television shows with
                  numerals.
                </p>
                <p className={styles.block_563}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 1. sezon 20. bölüm </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    birinci sezon yirminci bölüm{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_564}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_565}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 0212 233 66 95 </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 02122336695 </span>
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    sıfır iki yüz on iki iki yüz otuz üç altmış altı doksan beş{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_568}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>: landline </span>
                </p>
                <p className={styles.block_569}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: +90 212 233 66 95 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : landline with country code (the leading{' '}
                  </span>
                </p>
                <p className={styles.block_570}>"0" is removed)</p>
                <p className={styles.block_571}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 0090 212 233 66 95 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : landline with country code (the leading{' '}
                  </span>
                </p>
                <p className={styles.block_570}>"0" is removed)</p>
                <p className={styles.block_572}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 0544 323 45 45 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: mobile phone number </span>
                </p>
                <p className={styles.block_573}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 444 10 23 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: call-centre </span>
                </p>
                <p className={styles.block_574}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 800 123 45 67 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: toll-free number </span>
                </p>
                <p className={styles.block_575}>
                  Transcribe alpha-digit sequences (product codes etc.) in their
                  most natural way (possibly several ways accepted). Do not
                  transcribe credit card numbers, etc.
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: XT 660 or XT660 </span>
                </p>
                <p className={styles.block_577}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols,
                </p>
                <p className={styles.block_578}>with spaces in between.</p>
                <p className={styles.block_579}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 5 / 6 x 3 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>beş bölü altı çarpı üç </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 5 x 6 kaç eder? </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 5 kere 6 kaç eder? </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 5 çarpı 6 kaç eder? </span>
                </p>
                <p className={styles.block_583}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 5 * 6 kaç eder? </span>
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>beş kere altı kaç eder </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_14}>C</span>
                  <span className={styles.text_15}>ORRECT</span>
                  <span className={styles.text_16}>: √3 </span>
                  <span className={styles.text_17}>E</span>
                  <span className={styles.text_18}>XAMPLE AUDIO</span>
                  <span className={styles.text_17}>: " </span>
                  <span className={styles.text_19}>üçün karekökü </span>
                  <span className={styles.text_17}>" </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : İki artı iki beş eder mi hiç?{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Does not sound like a true math{' '}
                  </span>
                </p>
                <p className={styles.block_587}>
                  expression. It has been used figuratively.
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={styles.block_589}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_590}>
                  When a speaker uses words like "dollar" without specifying a
                  quantity, spell them out.
                </p>
                <p className={styles.block_591}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Dolar çok değer kazandı.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    dolar çok değer kazandı{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Önümüzdeki günlerde euro değer kaybedecekmiş.
                  </span>
                </p>
                <p className={styles.block_593}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: euronun yükselişi </span>
                </p>
                <p className={styles.block_594}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : dolar ve euro arasındaki değer farkı{' '}
                  </span>
                </p>
                <p className={styles.block_595}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : doların ve euronun değer farkı{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : There is no need to use apostrophe before
                  </span>
                </p>
                <p className={styles.block_596}>
                  the inflection markers "ın" and "nun". You can keep writing
                  the currency in lowercase.
                </p>
                <p className={styles.block_597}>
                  For ranges or non-specific currency quantities, write
                  everything out as spoken.
                </p>
                <p className={styles.block_598}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Dört yüz ila beş yüz dolar arası ön ödeme almak istiyorum.
                  </span>
                </p>
                <p className={styles.block_599}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Dört yüz ila beş yüz dolar arası ödeme bekliyorum.
                  </span>
                </p>
                <p className={styles.block_600}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : 100 ila 500 dolar arası{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    yüz ila be yüz dolar arası{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_601}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 9 ila 12 euro arası </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    dokuz ila on iki euro arası{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_602}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: bir ya da iki dolar </span>
                </p>
                <p className={styles.block_603}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_604}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Ailem 10 l süt aldı. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    ailem on litre süt aldı{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_605}>
                  Transcribe all numeric values preceding units in numeral form,
                  even if under 10.
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Derneğimiz $1 milyon bağışta bulundu.{' '}
                  </span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>
                    : Derneğimiz $ 1 milyon bağışta bulundu.{' '}
                  </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : There should not be a space before the digit.
                  </span>
                </p>
                <p className={styles.block_609}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Domatesler 5 kg geldi.{' '}
                  </span>
                </p>
                <p className={styles.block_610}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Burada 6 yıl yaşadım.{' '}
                  </span>
                </p>
                <p className={styles.block_611}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_612}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Benzinin litresi ₺3,44.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    benzinin litresi üç tl kırkdört kuruş{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Süt ₺2,50 oldu. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    süt iki tl elli kuruş oldu{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Saati 8.25'e kur. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    saati sekizi yirmi beş geçeye kur{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_615}>
                  Common technical abbreviations
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir megabayt - 1 MB </span>
                </p>
                <p className={styles.block_617}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir kilobayt - 1 KB </span>
                </p>
                <p className={styles.block_618}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir gigabayt - 1 GB </span>
                </p>
                <p className={styles.block_619}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir terabayt - 1 TB </span>
                </p>
                <p className={styles.block_620}>Slang terms (spell them out)</p>
                <p className={styles.block_621}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>metelik </span>
                </p>
                <p className={styles.block_622}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>mangır </span>
                </p>
                <p className={styles.block_623}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>papel </span>
                </p>
                <p className={styles.block_624}>
                  Common measurements of distance and rate
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir mil - 1 mi </span>
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir milimetre - 1 mm </span>
                </p>
                <p className={styles.block_627}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir santimetre - 1 cm </span>
                </p>
                <p className={styles.block_628}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir metre - 1 m </span>
                </p>
                <p className={styles.block_629}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir kilometre - 1 km </span>
                </p>
                <p className={styles.block_630}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    saatte bir kilometre - 1 km/h{' '}
                  </span>
                </p>
                <p className={styles.block_631}>Common measurements of area</p>
                <p className={styles.block_632}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    bir santimetrekare - 1 cm2{' '}
                  </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir metrekare - 1 m2 </span>
                </p>
                <p className={styles.block_634}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>
                    bir kilometrekare - 1 km2{' '}
                  </span>
                </p>
                <p className={styles.block_635}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir dönüm - 1 dönüm </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir hektar - 1 ha </span>
                </p>
                <p className={styles.block_637}>Common scientific terms</p>
                <p className={styles.block_638}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir desibel - 1 dB </span>
                </p>
                <p className={styles.block_639}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir Newton - 1 N </span>
                </p>
                <p className={styles.block_640}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir joule - 1 J </span>
                </p>
                <p className={styles.block_641}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir parsek - 1 pc </span>
                </p>
                <p className={styles.block_642}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir amper - 1 A </span>
                </p>
                <p className={styles.block_643}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir Hertz - 1 Hz </span>
                </p>
                <p className={styles.block_644}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir Watt - 1 W </span>
                </p>
                <p className={styles.block_645}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir Kilowatt - 1 kW </span>
                </p>
                <p className={styles.block_646}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir mol - 1 mol </span>
                </p>
                <p className={styles.block_647}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir Kandela - 1 cd </span>
                </p>
                <p className={styles.block_648}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir lümen - 1 lm </span>
                </p>
                <p className={styles.block_649}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir derece - 1° </span>
                </p>
                <p className={styles.block_626}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir Fahrenhayt - 1 F </span>
                </p>
                <p className={styles.block_629}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir Santigrad - 1 °C </span>
                </p>
                <p className={styles.block_650}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir Selsius - 1 C </span>
                </p>
                <p className={styles.block_651}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir Kelvin - 1 K </span>
                </p>
                <p className={styles.block_652}>
                  Common measurements of weight and volume
                </p>
                <p className={styles.block_653}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir litre - 1 l </span>
                </p>
                <p className={styles.block_654}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir gram - 1 g </span>
                </p>
                <p className={styles.block_655}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir miligram - 1 mg </span>
                </p>
                <p className={styles.block_619}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>bir kilogram - 1 kg </span>
                </p>
                <p className={styles.block_656}>
                  Use the following abbreviations for ordinals.
                </p>
                <p className={styles.block_657}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>1'inci </span>
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>2'nci </span>
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>3'üncü </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>4'üncü </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>5'inci </span>
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>6'ncı </span>
                </p>
                <p className={styles.block_658}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>7'nci </span>
                </p>
                <p className={styles.block_662}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>8'inci </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>9'uncu </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>1. </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>2. </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>3. </span>
                </p>
                <p className={styles.block_664}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>4. </span>
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>5. </span>
                </p>
                <p className={styles.block_665}>
                  <span className={styles.text_6}>• </span>
                  <span className={styles.text_5}>6. </span>
                  <span className={styles.text_20}></span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time </p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_667}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 7 Temmuz 1985 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    yedi temmuz bin dokuz yüz seksen{' '}
                  </span>
                </p>
                <p className={styles.block_668}>
                  <span className={styles.text_12}>beş </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_669}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 70'lerin sonu </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>yetmişlerin sonu </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_670}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 80'lerin başı </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>seksenlerin başı </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_671}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : 90'ların unutulmazları{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    doksanların unutulmazları{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_672}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 6 Mart Çarşamba </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>altı mart çarşamba </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_673}>
                  Exception: When the date is spoken as a sequence of numbers,
                  transcribe as such.
                </p>
                <p className={styles.block_674}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 7/12/2010 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    yedi slash on iki slash iki bin on{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_675}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Son kullanma tarihi 05.10.2012.{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    son kullanma tarihi sıfır beş on iki{' '}
                  </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_12}>bin on iki </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_677}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : If the speaker does not say any words like "slash", you
                    should use "period" in the sequence of the date
                    (i.e.dd.mm.yyyy).
                  </span>
                </p>
                <p className={styles.block_678}>
                  Use the natural form for transcribing times whenever possible.
                </p>
                <p className={styles.block_679}>
                  Write times in hh.mm format whenever possible, unless it would
                  look unnatural to do so.
                </p>
                <p className={styles.block_680}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Saat 3.00. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>saat üç </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_681}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : This can be a sentence. Therefore, you should use "period"
                    at the end of the sentence.
                  </span>
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Saat 4.00'te. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>saat dörtte </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_681}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : This can be a sentence. Therefore, you should use "period"
                    at the end of the sentence.
                  </span>
                </p>
                <p className={styles.block_683}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3.15 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>üç on beş </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_684}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 6.05 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>altı sıfır beş </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_685}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 3.15 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>üçü çeyrek geçe </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 1.50 </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>ikiye on kala </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: Saat 18.00. </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>saat on sekiz </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_688}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : This can be a sentence rather than a fragment. Therefore,
                    you should use "period" at the end of the sentence.
                  </span>
                </p>
                <p className={styles.block_689}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: 4.00 ila 5.00 arası </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    saat dört ila beş arası{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_690}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: 8 gibi. </span>
                </p>
                <p className={styles.block_691}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: 8.00 gibi. </span>
                </p>
                <p className={styles.block_692}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>sekiz gibi </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_693}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : "8.00" looks unnatural.{' '}
                  </span>
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_696}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : McDonald's, Atatürk Caddesi{' '}
                  </span>
                </p>
                <p className={styles.block_698}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: restoranlar, 26000 </span>
                </p>
                <p className={styles.block_308}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Burger King, Eskişehir{' '}
                  </span>
                </p>
                <p className={styles.block_699}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Dr. Kılıç, Ankara </span>
                </p>
                <p className={styles.block_212}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Craigslist, Groningen{' '}
                  </span>
                </p>
                <p className={styles.block_700}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: hava durumu, Muğla </span>
                </p>
                <p className={styles.block_701}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: plajlar, Antalya </span>
                </p>
                <p className={styles.block_702}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Bir Yaz Gecesi Rüyası, İstanbul{' '}
                  </span>
                </p>
                <p className={styles.block_703}>
                  Follow official spellings and capitilization as shown below.
                </p>
                <p className={styles.block_704}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Karaköy Meydanı </span>
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Dolmabahçe Sarayı </span>
                </p>
                <p className={styles.block_705}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Yunus Emre Mahallesi </span>
                </p>
                <p className={styles.block_706}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ziya Gökalp Bulvarı </span>
                </p>
                <p className={styles.block_635}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Nene Hatun Caddesi </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Fırat Nehri </span>
                </p>
                <p className={styles.block_708}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>İnkılap Sokağı </span>
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ağrı Dağı </span>
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Van Gölü </span>
                </p>
                <p className={styles.block_711}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Zigana Geçidi </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Çankaya Köşkü </span>
                </p>
                <p className={styles.block_712}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Horozlu Han </span>
                </p>
                <p className={styles.block_711}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ankara Kalesi </span>
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Galata Köprüsü </span>
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Beyazıt Kulesi </span>
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Zafer Abidesi </span>
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Bilge Kağan Anıtı </span>
                </p>
                <p className={styles.block_716}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Asya Yakası </span>
                </p>
                <p className={styles.block_717}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Çanakkale Boğazı </span>
                </p>
                <p className={styles.block_718}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Dicle Irmağı </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Ege Denizi </span>
                </p>
                <p className={styles.block_720}>
                  <span className={styles.text_}>• </span>
                  <span className={styles.text_3}>Süveyş Kanalı </span>
                </p>
                <p className={styles.block_721}>
                  Do not capitalize cardinal directions unless part of a
                  specific place name.
                </p>
                <p className={styles.block_722}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Doğu Anadolu görülmeye değer.{' '}
                  </span>
                </p>
                <p className={styles.block_723}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : Yukarı Ilıca köyüne hoş geldiniz.{' '}
                  </span>
                </p>
                <p className={styles.block_724}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Binanın aşağısında buluşalım.{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : No need to capitalize "aşağısında" because
                  </span>
                </p>
                <p className={styles.block_725}>
                  it's not part of a proper place name.
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_728}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.google.co.kr </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    w w w nokta google nokta c o nokta{' '}
                  </span>
                </p>
                <p className={styles.block_729}>
                  <span className={styles.text_12}>k r </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_730}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: amazon.com </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>amazon nokta com </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_731}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: http://123.com </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    h t t p iki nokta üst üste eğik çizgi{' '}
                  </span>
                </p>
                <p className={styles.block_732}>
                  <span className={styles.text_12}>
                    eğik çizgi bir iki üç nokta{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_733}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Although the speaker forgets to say "com", you can
                    transcribe it.
                  </span>
                </p>
                <p className={styles.block_734}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: meliha@example.org </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    meliha et example nokta org{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_735}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Lahmacunu seviyorum. #acıktım{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    lahmacunu seviyorum hashtag{' '}
                  </span>
                </p>
                <p className={styles.block_736}>
                  <span className={styles.text_12}>acıktım </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_737}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : #acıktım Lahmacunum nerede?{' '}
                  </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    hashtag acıktım lahmacunum{' '}
                  </span>
                </p>
                <p className={styles.block_738}>
                  <span className={styles.text_12}>nerede </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_739}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : O kadar çok #acıktım ki bütün lahmacunu yiyebilirim.
                  </span>
                </p>
                <p className={styles.block_740}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>
                    o kadar çok hashtag acıktım ki bütün lahmacunu yiyebilirim{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_741}>
                  Do not correct speaker errors such as transcribing a slash
                  when the user actually says "backslash".
                </p>
                <p className={styles.block_742}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: http://milliyet.com </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    h t t p iki nokta üst üste eğik çizgi{' '}
                  </span>
                </p>
                <p className={styles.block_743}>
                  <span className={styles.text_12}>
                    eğik çizgi milliyet nokta com{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_744}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: http:\mail.yahoo.com </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    h t t p iki nokta üst üste sola eğik{' '}
                  </span>
                </p>
                <p className={styles.block_745}>
                  <span className={styles.text_12}>
                    çizgi sola eğik çizgi mail nokta yahoo nokta com{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_746}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.forbes.com </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>w w w forbes nokta com </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_747}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Although speaker forgets to use the first "dot", you
                    should transcribe "dot".
                  </span>
                </p>
                <p className={styles.block_748}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_749}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.amazon.com </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    w w nokta amazon nokta com{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_750}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : If the user mistakenly says "ww", transcribe "www".
                  </span>
                </p>
                <p className={styles.block_751}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: google.com.tr </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>google nokta com t r </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_752}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Speaker forgets to say the second "dot". You should
                    transcribe "dot" in an obvious URL, even if the speaker did
                    not include any of the dots or one of them.
                  </span>
                </p>
                <p className={styles.block_753}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.forbes.com </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>w w w forbes nokta com </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_754}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Speaker forgets to use the first "dot", you should
                    transcribe "dot".
                  </span>
                </p>
                <p className={styles.block_755}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.facebook.com </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>w w w nokta facebook </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_756}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : You can transcribe "dot" and "com" even if the speaker
                    forgets to say them.
                  </span>
                </p>
                <p className={styles.block_757}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.facebook.com </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>w w facebook nokta com </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_758}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The user mistakenly says "ww", transcribe "www".
                  </span>
                </p>
                <p className={styles.block_759}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: facebook.com </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>facebook nokta com </span>
                  <span className={styles.text_7}>" </span>
                </p>
                <p className={styles.block_760}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : The speaker says facebook nokta com without "www".
                    Therefore, you should not add "www".
                  </span>
                </p>
                <p className={styles.block_761}>
                  If a URL is spelled out in individual letters, transcribe
                  without spaces between individual letters.
                </p>
                <p className={styles.block_762}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: www.target.com </span>
                  <span className={styles.text_7}>E</span>
                  <span className={styles.text_8}>XAMPLE AUDIO</span>
                  <span className={styles.text_7}>: " </span>
                  <span className={styles.text_9}>
                    w w w nokta t a r g e t nokta c o m{' '}
                  </span>
                  <span className={styles.text_7}>" </span>
                </p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_765}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: vesaire vesaire </span>
                </p>
                <p className={styles.block_766}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: vs. vs. </span>
                </p>
                <p className={styles.block_767}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>vesaire vesaire </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_768}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>
                    : bu ve benzeri durumlar{' '}
                  </span>
                </p>
                <p className={styles.block_769}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: bu vb. durumlar </span>
                </p>
                <p className={styles.block_770}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_4}>bu ve benzeri durumlar </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_771}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: AT&amp;T, MP3 </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: brands and products </span>
                </p>
                <p className={styles.block_773}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: ABD, Washington DC </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: geographic names </span>
                </p>
                <p className={styles.block_774}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : NASA, NATO, YÖK, ODTÜ{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: pronounced as words </span>
                </p>
                <p className={styles.block_775}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: scuba, radar </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : extremely lexicalized acronyms{' '}
                  </span>
                </p>
                <p className={styles.block_776}>
                  In acronyms, use periods in personal names.
                </p>
                <p className={styles.block_777}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>
                    : M. Ali, H. Hüseyin, M.K. Atatürk{' '}
                  </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>: personal names </span>
                </p>
                <p className={styles.block_778}>
                  If a brand name uses periods, include the periods.
                </p>
                <p className={styles.block_779}>
                  <span className={styles.text_5}>C</span>
                  <span className={styles.text_6}>ORRECT</span>
                  <span className={styles.text_5}>: E.C.A. kombi </span>
                  <span className={styles.text_10}>E</span>
                  <span className={styles.text_11}>XPLANATION</span>
                  <span className={styles.text_10}>
                    : Official brand name as seen in the{' '}
                  </span>
                </p>
                <p className={styles.block_780}>
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
