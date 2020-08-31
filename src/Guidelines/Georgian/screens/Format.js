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
            <PageContentHeader currentPage="longform Georgian" />
            <div className="content text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={'text'}>
                  Cardinals and ordinals from 0 to 9 are written with letters
                  (except for measures and currency - see Currency and Unit).
                  Use digits for cardinals and ordinals 10 and above, even if
                  they are coordinated with numbers under 10. Transcribe all
                  decimal numbers as digits.
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_8}>
                    Correct: კლასში ცხრა მოსწავლეა.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: numbers less than 10{' '}
                  </span>
                </p>
                <p className={styles.block_482}>
                  <span className={styles.text_8}>
                    Correct: კლასში 13 მოსწავლეა.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: numbers 10 or above{' '}
                  </span>
                </p>
                <p className={styles.block_483}>
                  <span className={styles.text_8}>
                    Correct: მე მყავს ექვსი ძაღლი და 12 თუთიყუში.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Follow this rule even if the noun
                  </span>
                </p>
                <p className={styles.block_484}>
                  phrases with numbers are coordinated.
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_12}>Correct: 3,14 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>სამი მთელი თოთხმეტი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_486}>Explanation: decimal numbers</p>
                <p className={styles.block_487}>
                  If a large number consists of only a number followed by
                  "მილიონი", "მილიარდი", "ტრილიონი", or higher, then transcribe
                  as a numeral plus word. Otherwise, transcribe as numerals.
                </p>
                <p className={styles.block_488}>
                  <span className={styles.text_15}>
                    Correct: 1 მილიონი ბატი{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>ერთი მილიონი ბატი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_489}>
                  <span className={styles.text_15}>Correct: მილიონი ბატი </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>მილიონი ბატი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_15}>Correct: 1.000 ბატი </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>ათასი ბატი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_15}>Correct: 1,5 მილიარდი </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>
                    ერთი მთელი ხუთი მილიარდი{' '}
                  </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_5}>ლარი </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ერთნახევარი მილიარდი ლარი "{' '}
                  </span>
                </p>

                <p className={styles.block_495}>
                  Explanation: For mixed numbers before "მილიონამდე",
                  "მილიარდამდე", etc., use
                </p>
                <p className={styles.block_496}>
                  decimals. In this example after number noun
                </p>
                <p className={styles.block_497}>needs to be in singular.</p>
                <p className={styles.block_498}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_12}>
                    Correct: 0 1 1 2 3 5 8 13{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>
                    ნული ერთი ერთი ორი სამი{' '}
                  </span>
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_5}>ხუთი რვა ცამეტი </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_501}>
                  Explanation: list of numbers, no comma if just
                </p>
                <p className={styles.block_502}>counting</p>
                <p className={styles.block_503}>
                  <span className={styles.text_15}>
                    Correct: 3 2 1 აფეთქება{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>
                    სამი ორი ერთი აფეთქება{' '}
                  </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_504}>
                  Explanation: list of numbers, no comma if just
                </p>
                <p className={styles.block_502}>counting</p>
                <p className={styles.block_505}>
                  In math expressions or units &amp; measures, transcribe
                  fraction words using numerals and slashes.
                </p>
                <p className={styles.block_506}>
                  Correct: მათ სჭირდებათ 1/4 კგ შაქარი.
                </p>
                <p className={styles.block_507}>
                  Incorrect: მათ სჭირდებათ ერთი მეოთხედი
                </p>
                <p className={styles.block_508}>კილოგრამი შაქარი.</p>
                <p className={styles.block_509}>
                  Incorrect: მათ სჭირდებათ 1 / 4 კგ შაქარი.
                </p>
                <p className={styles.block_510}>
                  Incorrect: მათ სჭირდებათ 1⁄4 კგ შაქარი.
                </p>
                <p className={styles.block_511}>
                  Incorrect: ათ სჭირდებათ 0,25 კგ შაქარი.
                </p>
                <p className={styles.block_512}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>მათ სჭირდებათ ერთი </span>
                </p>
                <p className={styles.block_513}>
                  <span className={styles.text_5}>
                    მეოთხედი კილოგრამი შაქარი{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_514}>
                  Explanation: Be careful not to include spaces or
                </p>
                <p className={styles.block_515}>
                  pre-combined fraction characters.
                </p>
                <p className={styles.block_516}>
                  Correct: 2/3 კმ-ში, შეუხვიე მარცხნივ.
                </p>
                <p className={styles.block_517}>
                  Incorrect: ორ მესამედ კილომეტრში, შეუხვიე
                </p>
                <p className={styles.block_404}>მარცხნივ.</p>
                <p className={styles.block_518}>
                  Incorrect: 2 / 3 კმ-ში, შეუხვიე მარცხნივ.
                </p>
                <p className={styles.block_519}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>ორ მესამედ კილომეტრში </span>
                </p>
                <p className={styles.block_520}>
                  <span className={styles.text_5}>შეუხვიე მარცხნივ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_521}>
                  <span className={styles.text_15}>
                    Correct: ჩვენ გვჭირდება 5/16-დუიმი ჭანჭიკი.{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>ჩვენ გვჭირდება ხუთი </span>
                </p>
                <p className={styles.block_522}>
                  <span className={styles.text_5}>
                    მეთექვსმეტედი დუიმი ჭანჭიკი{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_523}>
                  For mixed numbers that represent currency amounts, always use
                  decimals.
                </p>
                <p className={styles.block_524}>
                  <span className={styles.text_15}>
                    Correct: შეგიძლია 2,50 მასესხო?{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>
                    შეგიძლია ორნახევარი ლარი{' '}
                  </span>
                </p>
                <p className={styles.block_525}>
                  <span className={styles.text_5}>მასესხო </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_526}>
                  Correct: მან იყიდა სახლი სანაპიროსთან 7,5
                </p>
                <p className={styles.block_527}>მილიონად.</p>
                <p className={styles.block_528}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    მან იყიდა სახლი სანაპიროსთან შვიდნახევარ მილიონ ლარად{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_529}>
                  Transcribe percentages using numerals and the % sign. (In the
                  unlikely case that you encounter a number of a million or
                  greater used as a percentage, spell it out.)
                </p>
                <p className={styles.block_530}>Correct: 2% რძე</p>
                <p className={styles.block_531}>Correct: 1 მილიონი პროცენტი</p>
                <p className={styles.block_532}>
                  If a number appears in a context which calls for a certain
                  formatting in your language, use that formatting. Otherwise,
                  default to the general rule for transcribing numbers.
                </p>
                <p className={styles.block_533}>
                  Transcribe phone numbers using the most common format in the
                  transcription language.
                </p>
                <p className={styles.block_534}>Correct: 32 104 555</p>
                <p className={styles.block_535}>Correct: 598 978 998</p>
                <p className={styles.block_536}>Correct: 591 12 34 56</p>
                <p className={styles.block_537}>Correct: +995 598 97 89 98</p>
                <p className={styles.block_538}>
                  If it really sounds like a math expression, then transcribe it
                  with numbers and symbols, with spaces in between.
                </p>
                <p className={styles.block_539}>Correct: 5 / 6 ^ 3</p>
                <p className={styles.block_540}>
                  Incorrect: ხუთი გაყოფილი ექვსზე აყვანილი
                </p>
                <p className={styles.block_541}>მესამე ხარისხში</p>
                <p className={styles.block_542}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ხუთი გაყოფილი ექვსზე ხარისხად სამი{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_543}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ხუთი გაყოფილი ექვსზე კუბში{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_544}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ხუთი შეფარდებული ექვსთან ხარისხად სამი{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_545}>
                  <span className={styles.text_10}>Example </span>
                  <span className={styles.text_8}>
                    Correct: რამდენია 5 * 6?{' '}
                  </span>
                </p>
                <p className={styles.block_546}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>რამდენია ხუთჯერ ექვსი </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_547}>
                  Incorrect: რამდენია ხუთჯერ ექვსი
                </p>
                <p className={styles.block_548}>
                  <span className={styles.text_15}>Correct: √3 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>ფესი სამიდან </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_549}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    კვადრატული ფესვი სამიდან{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_550}>
                  <span className={styles.text_15}>
                    Correct: რამდენია 8 საათი * 12{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>რამდენია რვა საათი </span>
                </p>
                <p className={styles.block_551}>
                  <span className={styles.text_5}>
                    გამრავლებული თორმეტ ლარზე{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_552}>
                  Correct: რამდენია სამი ალიგატორი გაყოფილი
                </p>
                <p className={styles.block_553}>ორ ხვლიკზე?</p>
                <p className={styles.block_554}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    რამდენია სამი ალიგატორი{' '}
                  </span>
                </p>
                <p className={styles.block_555}>
                  <span className={styles.text_5}>გაყოფილი ორ ხვლიკზე </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_556}>
                  Explanation: Does not sound like a true math
                </p>
                <p className={styles.block_557}>
                  expression with useful units.
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={'text'}>
                  Transcribe currencies as commonly written in the transcription
                  language.
                </p>
                <p className={styles.block_560}>
                  <span className={styles.text_12}>Correct: 10 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>ათი ლარი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_561}>
                  <span className={styles.text_15}>
                    Correct: რამდენი აშშ დოლარია 20 რუბლი?{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>
                    რამდენი ამერიკული დოლარია{' '}
                  </span>
                </p>
                <p className={styles.block_562}>
                  <span className={styles.text_5}>ოცი რუბლი </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_563}>
                  For degrees, use the ° symbol.
                </p>
                <p className={styles.block_564}>Correct: გარეთ 20°-ია.</p>
                <p className={styles.block_565}>
                  <span className={styles.text_10}>Example </span>
                  <span className={styles.text_8}>
                    Correct: ყაზბეგში მინუს ხუთი გრადუსია.{' '}
                  </span>
                </p>
                <p className={styles.block_566}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>
                    ყაზბეგში მინუს ხუთი გრადუსია{' '}
                  </span>
                </p>
                <p className={styles.block_567}>
                  <span className={styles.text_10}>" </span>
                  <span className={styles.text_18}>
                    Incorrect: ყაზბეგში -5_ია.{' '}
                  </span>
                </p>
                <p className={styles.block_568}>
                  Abbreviate all units that follow numeric values.
                </p>
                <p className={styles.block_569}>
                  Correct: ჩემმა ოჯახმა იყიდა 10 ლ ფორთოხლის
                </p>
                <p className={styles.block_570}>წვენი.</p>
                <p className={styles.block_571}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ჩემმა ოჯახმა იყიდა ათი ლიტრი ფორთოხლის წვენი{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_572}>
                  If it is clear from context that a number or number sequence
                  refers to currency or time, format it as such.
                </p>
                <p className={styles.block_573}>
                  Correct: დააყენე მაღვიძარა 5:45-ზე.
                </p>
                <p className={styles.block_574}>
                  Incorrect: დააყენე მაღვიძარა 545-ზე.
                </p>
                <p className={styles.block_575}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    დააყენე მაღვიძარა ხუთ საათსა{' '}
                  </span>
                </p>
                <p className={styles.block_576}>
                  <span className={styles.text_5}>და ორმოცდახუთ წუთზე </span>
                  <span className={styles.text_4}>" </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={'text'}>
                  Use the natural form for transcribing dates.
                </p>
                <p className={styles.block_579}>
                  <span className={styles.text_15}>
                    Correct: 12 ივლისი, 1964{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>
                    თორმეტი ივლისი ათას ცხრაას{' '}
                  </span>
                </p>
                <p className={styles.block_580}>
                  <span className={styles.text_5}>სამოცდაოთხი </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_581}>
                  <span className={styles.text_15}>
                    Correct: 80-ანების მუსიკა{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>ოთხმოციანების მუსიკა </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_582}>
                  <span className={styles.text_15}>
                    Correct: ოთხშაბათი, 6 მარტი{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>ოთხშაბათი ექვსი მარტი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_583}>
                  Write times in hh:mm format whenever possible, unless it would
                  look unnatural to do so. In Georgian, it is common to use
                  24-hour time format.
                </p>
                <p className={styles.block_584}>
                  <span className={styles.text_12}>Correct: 3:00 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>შუაღამის სამი საათი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_585}>
                  <span className={styles.text_12}>Correct: 3:00 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>სამი საათი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_586}>
                  <span className={styles.text_12}>Correct: 3:00 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>დილის სამი საათი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_587}>
                  <span className={styles.text_12}>Correct: 15:00 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>დღის სამი საათი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_588}>
                  <span className={styles.text_12}>Correct: 15:00 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>თხუთმეთი საათი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_589}>
                  <span className={styles.text_15}>
                    Correct: დააყენე მაღვიძარა 4:00{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>
                    დააყენე მაღვიძარა ოთხ საათზე{' '}
                  </span>
                </p>
                <p className={styles.block_590}>"</p>
                <p className={styles.block_591}>
                  <span className={styles.text_12}>Correct: 1:50 </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>ორს აკლია ათი წუთი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_592}>
                  <span className={styles.text_15}>Correct: 8-სკენ </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>რვისკენ </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_593}>
                  Explanation: Looks unnatural with "8:00-სკენ".
                </p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={'text'}>
                  Favor full spellings over abbreviations where natural, but use
                  abbreviations when explicitly spoken.
                </p>
                <p className={styles.block_596}>
                  Use commas for ENTITY, LOCATION.
                </p>
                <p className={styles.block_597}>
                  Correct: McDonald's, ნინოშვილის ქუჩა
                </p>
                <p className={styles.block_598}>
                  Correct: ყავის მაღაზიები, გურია
                </p>
                <p className={styles.block_599}>
                  Correct: პროფ. ქორიძე, თბილისი
                </p>
                <p className={styles.block_600}>
                  Correct: ბათუმის მერია, აჭარა
                </p>
                <p className={styles.block_601}>
                  Correct: წრიული ხედი, ყაზბეგი
                </p>
                <p className={styles.block_602}>
                  Correct: შოუები The Return of the King-თვის,
                </p>
                <p className={styles.block_603}>კაპადოკია</p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={'text'}>
                  Write URLs, email addresses, and Twitter hashtags as they are
                  spoken and don't capitalize them.
                </p>
                <p className={styles.block_606}>
                  <span className={styles.text_12}>
                    Correct: www.google.co.kr{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_19}>w w w </span>
                  <span className={styles.text_14}>წერტილი </span>
                  <span className={styles.text_19}>google </span>
                </p>
                <p className={styles.block_607}>
                  <span className={styles.text_5}>წერტილი </span>
                  <span className={styles.text_11}>c o </span>
                  <span className={styles.text_5}>წერტილი </span>
                  <span className={styles.text_11}>k r </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_608}>
                  <span className={styles.text_12}>Correct: amazon.com </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_19}>amazon </span>
                  <span className={styles.text_14}>წერტილი </span>
                  <span className={styles.text_19}>com </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_609}>
                  <span className={styles.text_12}>
                    Correct: http://google.com.ge{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_19}>h t t p </span>
                  <span className={styles.text_14}>ორი წერტილი ორი </span>
                </p>
                <p className={styles.block_610}>
                  <span className={styles.text_5}>წილადის ნიშანი </span>
                  <span className={styles.text_11}>google </span>
                  <span className={styles.text_5}>წერტილი </span>
                  <span className={styles.text_11}>com </span>
                  <span className={styles.text_5}>წერტილი </span>
                </p>
                <p className={styles.block_611}>
                  <span className={styles.text_1}>g e </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_612}>
                  <span className={styles.text_12}>
                    Correct: levan@example.org.ge{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>ლევანი ძაღლუკა </span>
                  <span className={styles.text_19}>example </span>
                </p>
                <p className={styles.block_613}>
                  <span className={styles.text_5}>წერტილი </span>
                  <span className={styles.text_11}>org </span>
                  <span className={styles.text_5}>წერტილი </span>
                  <span className={styles.text_11}>ge </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_15}>
                    Correct: მე მიყვარს ხაჭაპური. #მშიერი{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>
                    მე მიყვარს ხაჭაპური ჰეშტეგი{' '}
                  </span>
                </p>
                <p className={styles.block_615}>
                  <span className={styles.text_5}>მშიერი </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_614}>
                  <span className={styles.text_15}>
                    Correct: მე მიყვარს #ხაჭაპური. #მშიერი{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>
                    მე მიყვარს ჰეშტეგი ხაჭაპური{' '}
                  </span>
                </p>
                <p className={styles.block_616}>
                  <span className={styles.text_5}>ჰეშტეგი მშიერი </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_617}>
                  If the speaker drops a "w" or dots and it's an obvious URL,
                  you should correct these errors. If the speaker doesn't say
                  the "w"s at all, do not add them.
                </p>
                <p className={styles.block_618}>
                  <span className={styles.text_12}>
                    Correct: www.google.com.ge{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_19}>w w </span>
                  <span className={styles.text_14}>წერტილი </span>
                  <span className={styles.text_19}>google </span>
                  <span className={styles.text_14}>წერტილი </span>
                </p>
                <p className={styles.block_619}>
                  <span className={styles.text_11}>com </span>
                  <span className={styles.text_5}>წერტილი </span>
                  <span className={styles.text_11}>g e </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_620}>
                  Explanation: If the user mistakenly says "ww",
                </p>
                <p className={styles.block_621}>transcribe "www".</p>
                <p className={styles.block_622}>
                  <span className={styles.text_12}>
                    Correct: google.com.ge{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_19}>google </span>
                  <span className={styles.text_14}>წერტილი </span>
                  <span className={styles.text_19}>com </span>
                  <span className={styles.text_14}>წერტილი </span>
                </p>
                <p className={styles.block_623}>
                  <span className={styles.text_1}>g e </span>
                  <span className={styles.text_}>" </span>
                </p>
                <p className={styles.block_624}>
                  Explanation: User does not say "w"s.
                </p>
                <p className={styles.block_625}>
                  <span className={styles.text_12}>
                    Correct: google.com.ge{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_19}>google </span>
                  <span className={styles.text_14}>წერტილი </span>
                  <span className={styles.text_19}>com g e </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_626}>
                  Explanation: Also transcribe the წერტილი in an
                </p>
                <p className={styles.block_627}>
                  obvious URL, even if the speaker did not
                </p>
                <p className={styles.block_628}>include it.</p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={'text'}>
                  Do not abbreviate unless the speaker says an abbreviated form.
                </p>
                <p className={styles.block_631}>
                  Correct: დააყენე მაღვიძარა ორშაბათი.
                </p>
                <p className={styles.block_632}>
                  Incorrect: დააყენე მაღვიძარა ორშ.
                </p>
                <p className={styles.block_633}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    დააყენე მაღვიძარა ორშაბათი{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_634}>
                  Correct: დააყენე მაღვიძარა ორშ.
                </p>
                <p className={styles.block_635}>
                  Incorrect: დააყენე მაღვიძარა ორშაბათი.
                </p>
                <p className={styles.block_636}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>დააყენე მაღვიძარა ორშ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_637}>
                  <span className={styles.text_15}>
                    Correct: მაგალითად, თბილისი{' '}
                  </span>
                  <span className={styles.text_13}>Example audio: " </span>
                  <span className={styles.text_14}>მაგალითად თბილისი </span>
                  <span className={styles.text_13}>" </span>
                </p>
                <p className={styles.block_638}>Incorrect: მაგ., თბილისი</p>
                <p className={styles.block_639}>Correct: მაგ., თბილისი</p>
                <p className={styles.block_640}>
                  Incorrect: მაგალითად, თბილისი
                </p>
                <p className={styles.block_641}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>მაგ თბილისი </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_642}>
                  Abbreviate titles for people only when they precede proper
                  names.
                </p>
                <p className={styles.block_643}>
                  Correct: მე ვიცნობ პროფ. შონიას.
                </p>
                <p className={styles.block_644}>
                  Correct: ჩემი პროფესორი რეკომენდირებულია
                </p>
                <p className={styles.block_645}>უფრო მომზადება.</p>
                <p className={styles.block_646}>
                  In acronyms, do not use periods between letters.
                </p>
                <p className={styles.block_647}>
                  Correct: RPC, HTML, TCP/IP, PIN, USA, FTP
                </p>
                <p className={styles.block_648}>ტრანსფერი</p>
                <p className={styles.block_649}>Correct: სუამი, სსრკ</p>
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
