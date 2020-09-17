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
            <PageContentHeader currentPage="Longform Filipino" />
            <div className="context text">
              <p className={'large-heading'}>Format</p>
              <p className={'text'}>
                Transcribe numbers, abbreviations etc. following the formatting
                conventions in this section.
              </p>
              <div id="number">
                <p className={'heading'}>Number</p>
                <p className={styles.block_357}>
                  <span className={styles.text_2}>
                    Write small numbers (0 to 9) as words and larger numbers (10
                    and above) using digits.
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    However, you may write small numbers using digits if they
                    appear in a list, in mathematical
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    expression, as street numbers, as a measure or time unit.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_358}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : May siyam na estudyante sa klase.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Number is less than 10.{' '}
                  </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : May 13 na estudyante sa klase.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Number is 10 or greater.{' '}
                  </span>
                </p>
                <p className={styles.block_359}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Ako'y may anim na aso at 12 ibon.{' '}
                  </span>
                  <span className={styles.text_38}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_38}>
                    : Follow this rule even if the noun phrases with numbers are
                    coordinated.
                  </span>
                </p>
                <p className={styles.block_360}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 3.14 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>tatlo tuldok isa apat </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>: decimal numbers </span>
                </p>
                <p className={styles.block_361}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Mayroong walong politiko na dadalo sa kasalan.
                  </span>
                </p>
                <p className={styles.block_236}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : Number is less than 10.{' '}
                  </span>
                </p>
                <p className={styles.block_362}>
                  <span className={styles.text_2}>
                    When two or more numbers refer to the to the same noun, and
                    one number is 10 or greater,
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    transcribe both as numerals.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Bumili sila ng 9 o 10 goldfish sa pet store.
                  </span>
                </p>
                <p className={styles.block_363}>
                  <span className={styles.text_2}>
                    If a large number consists of only a number followed by
                    "milyon", "bilyon" or higher, then
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    transcribe as a numeral plus word. Otherwise, transcribe as
                    numerals.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_364}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 1,000 taon </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>isang libong taon </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 1 milyong gansa </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>isang milyong gansa </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_365}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Php1.5 bilyon </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    isa’t kalahating bilyong piso{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_366}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : For mixed numbers before "milyon",{' '}
                  </span>
                </p>
                <p className={styles.block_367}>
                  "bilyon", etc., use decimals.
                </p>
                <p className={styles.block_368}>
                  Write lists of numbers with digits and without commas.
                </p>
                <p className={styles.block_369}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: 0 1 1 2 3 5 8 13 </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    sero isá isá dalawá tatlo limá walo labing tatlo{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_370}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : list of numbers, no comma if just counting
                  </span>
                </p>
                <p className={styles.block_371}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 3 2 1 lipad </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    tatlo dalawa isa lipad{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : list of numbers, no comma if just counting
                  </span>
                </p>
                <p className={styles.block_372}>
                  <span className={styles.text_8}>
                    For long numbers (4+ digits) indicating quantity, insert a
                    comma as a separator.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_318}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 10,000 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>sampung libo </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_373}>
                  <span className={styles.text_8}>
                    In math expressions or units &amp; measures, transcribe
                    fraction words using numerals and slashes.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_374}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Kailangan nila ng 1/4 na kilong asukal.{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    kailangan nila ng kapat na kilong asukal{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_375}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Sa 3/4 na milya, kumanan.{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    sa ikatlong-kapat na milaya kumanan{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : If spoken, include "na" after the fraction.
                  </span>
                </p>
                <p className={styles.block_376}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Sa 2/3 kilometro, kumaliwa.{' '}
                  </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    sa ikadalawa katlong kilometro kumaliwa{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_377}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : If the speaker does not use "na" after the
                  </span>
                </p>
                <p className={styles.block_378}>
                  fraction, leave it out of the transcription.
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Kailangan natin ng 5/16-in na screw.{' '}
                  </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    kailangan natin ng lima kalabinganim pulgada na screw{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_380}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : This is a prenominal use, so you include
                  </span>
                </p>
                <p className={styles.block_381}>
                  the "na" and a hyphen after the fraction.
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : 1/2 lb makahimo sa diced kamatis, blended
                  </span>
                </p>
                <p className={styles.block_182}>hangtud nga hapsay</p>
                <p className={styles.block_382}>
                  <span className={styles.text_8}>
                    For mixed numbers in math and units &amp; measures, use
                    numerals with "at".
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_383}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 3 at 1/2 kilometro </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    tatlo at kalahating kilometro{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : 5 at 1/2-buwang gulang{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    lima at kalahating-buwan gulang{' '}
                  </span>
                  <span className={styles.text_33}>"</span>
                </p>
                <p className={styles.block_384}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 1/3 + 3 at 1/2 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    katlo dagdagan ng tatlo at kalahati{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_2}>
                    When referring to items (not units or measures), write
                    fractions out in words. With mixed
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    numbers, write the whole number part out in words if it is
                    under ten, otherwise write it with
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>numerals.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Bigyan mo ako ng kalahati ng pie.{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : bigyan mo ako ng 1/2 ng pie.{' '}
                  </span>
                </p>
                <p className={styles.block_387}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : 12 at kalahating pumkin pie ang ginawa.{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : 12 at 1/2 pumpkin pies ang ginawa.{' '}
                  </span>
                </p>
                <p className={styles.block_388}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Mahigit kalahati ng populasyon ng Albay, inilikas.
                  </span>
                </p>
                <p className={styles.block_389}>
                  <span className={styles.text_23}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_23}>
                    : Mahigit 1/2 ng populasyon ng Albay, inilikas.
                  </span>
                </p>
                <p className={styles.block_390}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>
                    bigyan mo ako ng kalahati ng pie{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_391}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    labing dalawa at kalahating pumkin pie ang ginawa{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_392}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    mahigit kalahati ng populasyon ng albay inilikas{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_393}>
                  <span className={styles.text_8}>
                    For mixed numbers that represent currency amounts, always
                    use decimals.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_394}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Pwede mo ba akong mapahiram ng Php2.50?{' '}
                  </span>
                </p>
                <p className={styles.block_395}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Binili niya ang bahay sa tabing dagat sa halagang Php7.5
                    milyon.
                  </span>
                </p>
                <p className={styles.block_396}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Php5.50 napakamahal naman niyan{' '}
                  </span>
                </p>
                <p className={styles.block_397}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    pwede mo ba akong mapahiram ng dalawang piso at limampung
                    sentim{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_398}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    binili niya ang bahay sa tabing dagat sa halagang pito at
                    kalahating milyong piso{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_399}>
                  <span className={styles.text_2}>
                    Transcribe percentages using numerals and the % sign. (In
                    the unlikely case that you encounter
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    a number of a million or greater used as a percentage, spell
                    it out.)
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: 2% gatas </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: 1 milyon porsiyento </span>
                </p>
                <p className={styles.block_400}>
                  <span className={styles.text_2}>
                    If a number appears in a context which calls for a certain
                    formatting in your language, use that
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    formatting. Otherwise, default to the general rule for
                    transcribing numbers.
                  </span>
                </p>
                <p className={styles.block_175}>
                  <span className={styles.text_8}>
                    Use Roman numerals only when part of an official name or
                    title.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Vicente Sotto III </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    vicente sotto the third{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_8}>
                    Transcribe seasons and episodes of television shows with
                    numerals.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: season 3 episode 2 </span>
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_8}>
                    If it is a product type, use the common written form.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: kalibre .22 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>kalibre bente dos </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_401}>
                  <span className={styles.text_8}>
                    Transcribe phone numbers using the most common format in the
                    transcription language.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_402}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: 033 456 7890 </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    sero tatlo tatlo apat lima anim pito walo siyam sero{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : landline with trunk prefix ("0") and{' '}
                  </span>
                </p>
                <p className={styles.block_404}>two-digit area code</p>
                <p className={styles.block_405}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: 02 456 7890 </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    sero dalawa apat lima anim pito walo siyam sero{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_406}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : landline with trunk prefix ("0") and{' '}
                  </span>
                </p>
                <p className={styles.block_407}>one-digit area code</p>
                <p className={styles.block_408}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 63 33 456 7890 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    anim tatlo tatlo tatlo apat lima anim pito walo siyam sero{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : landline with area code and country code
                  </span>
                </p>
                <p className={styles.block_410}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: +63 33 456 7890 </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    plus anim tatlo tatlo tatlo apat lima anim pito walo siyam
                    sero{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_409}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : landline with area code and country code
                  </span>
                </p>
                <p className={styles.block_411}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: +63 456 7890 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    plus anim tatlo apat lima anim pito walo siyam sero{' '}
                  </span>
                  <span className={styles.text_33}>"</span>
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : landline with country code (the area code
                  </span>
                </p>
                <p className={styles.block_413}>is omitted)</p>
                <p className={styles.block_414}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : 033 456 7890 extension 54{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    sero tatlo tatlo apat lima anim pito walo siyam sero
                    extension fifty four{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_415}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 0938 123 1234 </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>: mobile number </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 1 800 1234 1234 </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>: toll-free number </span>
                </p>
                <p className={styles.block_416}>
                  <span className={styles.text_2}>
                    Transcribe alpha-digit sequences (product codes etc.) in
                    their most natural way (possibly
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    several ways accepted). Do not transcribe credit card
                    numbers, etc.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_153}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: XT 660 or XT660 </span>
                </p>
                <p className={styles.block_417}>
                  <span className={styles.text_2}>
                    If it really sounds like a math expression, then transcribe
                    it with numbers and symbols, with
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>spaces in between.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_418}>
                  <span className={styles.text_45}>C</span>
                  <span className={styles.text_46}>ORRECT</span>
                  <span className={styles.text_47}>: √3 </span>
                  <span className={styles.text_48}>E</span>
                  <span className={styles.text_49}>XAMPLE AUDIO</span>
                  <span className={styles.text_48}>: " </span>
                  <span className={styles.text_50}>square root of three </span>
                  <span className={styles.text_48}>" </span>
                </p>
                <p className={styles.block_419}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 5 / 6 ^ 3 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    five divided by six to the third{' '}
                  </span>
                  <span className={styles.text_33}>" E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    five divided by six cubed{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_145}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: What is 5 * 6? </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    what is five times six{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_420}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Magkano ang 7 araw * Php444?{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    magkano ang pitong araw times apat na raan apat na pu't apat
                    na piso{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
              </div>
              <div id="currency-and-unit">
                <p className={'heading'}>Currency and unit</p>
                <p className={styles.block_422}>
                  <span className={styles.text_8}>
                    Transcribe currencies as commonly written in the
                    transcription language.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Php10 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>sampung piso </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_423}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Magkano ang Php10 sa US dollars?{' '}
                  </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    magkano ang sampung piso sa us dollars{' '}
                  </span>
                  <span className={styles.text_40}>"</span>
                </p>
                <p className={styles.block_424}>
                  <span className={styles.text_2}>
                    If it is obvious from context that a number reflects an
                    amount of currency, transcribe with the
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>piso sign (Php).</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_425}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Umabot hanggang Php48.00 ang bawat litro ng gasolina.
                  </span>
                </p>
                <p className={styles.block_426}>
                  <span className={styles.text_23}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_23}>
                    : Umabot hanggang kwarentay otso ang bawat litro ng
                    gasolina.
                  </span>
                </p>
                <p className={styles.block_427}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    umabot hanggang kwarentay otso ang bawat litro ng gasolina{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_428}>
                  <span className={styles.text_8}>
                    For cent-only quantities, the word "sentimo" should follow
                    the amount.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_429}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 5 sentimo </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>limang sentimo </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 25 sintimong kendi </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    bente singko sentimong kendi{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_430}>
                  <span className={styles.text_8}>
                    When a speaker uses words like "piso" without specifying a
                    quantity, spell them out.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_431}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : paglakas ng piso dahil sa bumubuting ekonomiya
                  </span>
                </p>
                <p className={styles.block_432}>
                  <span className={styles.text_23}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_23}>
                    : paglakas ng Php dahil sa bumubuting ekonomiya
                  </span>
                </p>
                <p className={styles.block_433}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : ano ang katumbas ng piso laban sa dollar C
                  </span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: ilang piso </span>
                </p>
                <p className={styles.block_434}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    paglakas ng piso dahil sa bumubuting ekonomiya{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_435}>
                  <span className={styles.text_8}>
                    For ranges or non-specific currency quantities, write
                    everything out as spoken.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_436}>
                  <span className={styles.text_23}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_23}>
                    : Kailangan ko ng mga tatlo o apat na daang piso.
                  </span>
                </p>
                <p className={styles.block_437}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    kailangan ko ng mga tatlo o apt na daang piso{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_438}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Kailangan ko ng 400 o 500 piso.{' '}
                  </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    kailangan ko ng apat na daan o limang daang piso{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>: 9 hanggang 12 piso </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    siyam hanggang labing dalawang piso{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_440}>
                  For all other currencies and slang terms for money, spell out
                  the words.
                </p>
                <p className={styles.block_322}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Pahiram ng tapwe. </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: Pahiram ng Php50. </span>
                </p>
                <p className={styles.block_275}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: 200 yen </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: ¥200 </span>
                </p>
                <p className={styles.block_346}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>pahiram ng tapwe </span>
                  <span className={styles.text_19}>" E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>dalawang daang yen </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : malutong na 20 pisong papel{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    malutong na dalawampung pisong papel{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_8}>
                    For degrees, use the ° symbol.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Naninigas o nagyeyelo ang tubig sa{' '}
                  </span>
                </p>
                <p className={styles.block_444}>temperaturang 0°.</p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Mainit sa caloocan. </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Makulimlim ang panahon ngayon.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Ang ganda ng panahon, hindi masyadong{' '}
                  </span>
                </p>
                <p className={styles.block_309}>
                  mainit, hindi din masyadong malamig.
                </p>
                <p className={styles.block_445}>
                  <span className={styles.text_8}>
                    Abbreviate all units that follow numeric values.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Bumili ang pamilya ko ng 10 L orange juice.{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    bumili ang pamilya ko ng sampung litrong orange juice{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_447}>
                  <span className={styles.text_13}>
                    Transcribe all numeric values preceding units in numeral
                    form, even if under 10.
                  </span>
                  <span className={styles.text_14}> </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Tumimbang ng 2 lb ang kuting.{' '}
                  </span>
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Tumira ako doon sa loob ng 6 na buwan.{' '}
                  </span>
                </p>
                <p className={styles.block_448}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : 7 araw sa isang linggo{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    pitong araw sa isang linggo{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_13}>
                    For lengths, widths, and heights, use "x" instead of any
                    preposition.
                  </span>
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Maghanap ng 1024x768 wallpapers.{' '}
                  </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    maghanap ng isang libo dalawampu’t apat por pitong daan
                    animnapu’t walong wallpapers{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_450}>
                  <span className={styles.text_2}>
                    If it is clear from context that a number or number sequence
                    refers to currency or time, format it
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>as such.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_451}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Itakda ang alarma para sa 5:45.{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Itakda ang alarma para sa 545.{' '}
                  </span>
                </p>
                <p className={styles.block_452}>
                  <span className={styles.text_8}>
                    Common technical abbreviations
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_25}>● </span>
                  <span className={styles.text_19}>megabyte - MB </span>
                </p>
                <p className={styles.block_121}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>kilobyte - kB </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>gigabyte - GB </span>
                </p>
                <p className={styles.block_122}>
                  <span className={styles.text_27}>● </span>
                  <span className={styles.text_28}>terabyte - TB</span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_454}>
                  <span className={styles.text_8}>
                    Common measurements of distance and rate
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_120}>
                  <span className={styles.text_25}>● </span>
                  <span className={styles.text_19}>pulgada - in </span>
                </p>
                <p className={styles.block_121}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>talampakang - ft </span>
                </p>
                <p className={styles.block_122}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>bakuran - yd </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>milya - mi </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>milimetro - mm </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>sentimetro - cm </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>metro - m </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>kilometro - km </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    milya bawat oras - mph{' '}
                  </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_27}>● </span>
                  <span className={styles.text_28}>
                    kilometro bawat oras - km/h
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_455}>Common measurements of area</p>
                <p className={styles.block_456}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_23}>: " </span>
                  <span className={styles.text_36}>
                    itakda ang alarma para sa singko kwarentay singko{' '}
                  </span>
                  <span className={styles.text_23}>" </span>
                </p>
                <p className={styles.block_457}>
                  <span className={styles.text_25}>● </span>
                  <span className={styles.text_19}>
                    pulgadang parisukat - in²{' '}
                  </span>
                </p>
                <p className={styles.block_121}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    talampakang parisukat - ft²{' '}
                  </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>milya parisukat - mi² </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>
                    sentimetro parisukat - cm²{' '}
                  </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>metro parisukat - m² </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_27}>● </span>
                  <span className={styles.text_28}>
                    kilometro parisukat - km²
                  </span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_8}>Common scientific terms</span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_453}>
                  <span className={styles.text_25}>● </span>
                  <span className={styles.text_19}>decibel - dB </span>
                </p>
                <p className={styles.block_121}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>Newton - N </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>Parsec - parsec </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>amper - amp </span>
                </p>
                <p className={styles.block_122}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>Hertz - Hz </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>wat - W </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>Kilowat - kW </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>Candela - cd </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>lumen - lm </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>digri - ° </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>Fahrenheit - F </span>
                </p>
                <p className={styles.block_122}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>Celsius - C </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>sentigrado - C </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_27}>● </span>
                  <span className={styles.text_28}>Kelvin - K</span>
                  <span className={styles.text_19}> </span>
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_8}>
                    Common measurements of weight and volume
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_120}>
                  <span className={styles.text_25}>● </span>
                  <span className={styles.text_19}>libra - lb </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>onsa - oz</span>
                </p>
                <p className={styles.block_140}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>litro - L </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>gramo - g </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>miligram - mg </span>
                </p>
                <p className={styles.block_122}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>kilo - kg </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>kubiko unit - ³ </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_26}>● </span>
                  <span className={styles.text_19}>metro kubiko - m³ </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_27}>● </span>
                  <span className={styles.text_28}>kubiko pulgada - in³</span>
                  <span className={styles.text_19}> </span>
                </p>
              </div>
              <div id="date-and-time">
                <p className={'heading'}>Date and time</p>
                <p className={styles.block_461}>
                  <span className={styles.text_8}>
                    Use the natural form for transcribing dates.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_462}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : tag-init ng dekada '78{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    tag init ng dekada sitentay otso{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: mga kanta ng 80's </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    mga kanta ng dekada otsenta{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Miyerkules, ika-anim ng Marso{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    miyerkules ika-anim ng marso{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_463}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Nobyembre 29, 1980 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    ika dalawampu't siyam ng nobyembre taong isang libo siyam na
                    raan at walumpu{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_8}>
                    Exception: When the date is spoken as a sequence of numbers,
                    transcribe as such.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Ang expiration date ay 5/10/2012.{' '}
                  </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    ang expiration date ay five ten two thousand twelve{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_443}>
                  <span className={styles.text_8}>
                    Use the natural form for transcribing times whenever
                    possible.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_465}>
                  <span className={styles.text_13}>
                    Write times in hh:mm format whenever possible, unless it
                    would look unnatural to do so.
                  </span>
                  <span className={styles.text_14}> </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 3:00 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>alas tres </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_466}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : Itakda ang alarma para sa 4:00.{' '}
                  </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    itakda ang alarma para sa alas kwatro{' '}
                  </span>
                  <span className={styles.text_40}>"</span>
                </p>
                <p className={styles.block_467}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 1:50 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    sampung minuto bago mag alas dos{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: mga 8:00 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>mga alas otso </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 9:45 </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    alas nuebe kwarenta y singko{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_468}>
                  <span className={styles.text_8}>
                    Use p.m. and a.m. if spoken.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_469}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: 12:00 p.m. </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>alas dose ng tanghali </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_13}>
                    For "tanghali", "hantinggabi", etc., use the written form.
                  </span>
                  <span className={styles.text_14}> </span>
                </p>
                <p className={styles.block_470}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: sa tanghali </span>
                </p>
                <p className={styles.block_471}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>: sa 12:00 p.m. </span>
                </p>
                <p className={styles.block_472}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : mamayang hantinggabi{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: mamayang 12:00 a.m. </span>
                </p>
                <p className={styles.block_473}></p>
                <p className={styles.block_474}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>sa tanghali </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_475}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>mamayang hantinggabi </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_476}></p>
                <p className={styles.block_477}></p>
              </div>
              <div id="address">
                <p className={'heading'}>Address</p>
                <p className={styles.block_479}>
                  <span className={styles.text_8}>
                    Favor full spellings over abbreviations where natural, but
                    use abbreviations when explicitly
                  </span>
                  <span className={styles.text_6}> </span>
                  <span className={styles.text_8}>spoken.</span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_480}>
                  <span className={styles.text_8}>
                    Use commas for ENTITY, LOCATION.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Cafe Noriter, Estrada Street{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Makati City Hall, Manila{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: coffee shops, 4301 </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Dr. Rosen, Bacolod City{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : circular saw, Quezon City
                  </span>
                </p>
                <p className={styles.block_185}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : showtimes for The Return of the King, Makati
                  </span>
                </p>
                <p className={styles.block_382}>
                  <span className={styles.text_8}>
                    Do not capitalize cardinal directions unless part of a
                    specific place name.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Magkita tayo sa kanlurang bahagi ng gusali.
                  </span>
                </p>
                <p className={styles.block_481}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Namamaneho ako sa SLEX.{' '}
                  </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : "SLEX" is the official name of the road.
                  </span>
                </p>
              </div>
              <div id="web">
                <p className={'heading'}>Web</p>
                <p className={styles.block_483}>
                  <span className={styles.text_2}>
                    Write URLs, email addresses, and Twitter hashtags as they
                    are spoken and don't capitalize
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>them.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_484}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: www.google.com.ph </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    w w w dot google dot com dot p h{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: amazon.com </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>amazon dot com </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : catapang@halimbawa.org{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    catapang arobase halimbawa dot org{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_485}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Gustong gusto ko ng pizza. #gutom{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    gustong gusto ko ng pizza hashtag gutom{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_486}>
                  <span className={styles.text_2}>
                    Do not correct speaker errors such as transcribing a slash
                    when the user actually says
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>"backslash".</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_487}>
                  <span className={styles.text_37}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_37}>
                    : http:\mail.yahoo.com{' '}
                  </span>
                  <span className={styles.text_40}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_40}>: " </span>
                  <span className={styles.text_41}>
                    h t t p colon backslash backslash mail dot yahoo dot com{' '}
                  </span>
                  <span className={styles.text_40}>" </span>
                </p>
                <p className={styles.block_488}>
                  <span className={styles.text_2}>
                    If the speaker drops a "w" or dots and it's an obvious URL,
                    you should correct these errors. If
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the speaker doesn't say the "w"s at all, do not add them.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_489}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: www.google.com.ph </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: ww.google.com.ph </span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>
                    w w dot google dot com dot p h{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_491}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : If the user mistakenly says "ww", transcribe "www".
                  </span>
                </p>
                <p className={styles.block_492}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: www.forbes.com </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>w w w forbes dot com </span>
                  <span className={styles.text_33}>"</span>
                </p>
                <p className={styles.block_493}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_19}>
                    : Also transcribe the dot in an obvious URL,
                  </span>
                </p>
                <p className={styles.block_494}>
                  even if the speaker did not include it.
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_8}>
                    If a URL is spelled out in individual letters, transcribe
                    without spaces between individual letters.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_495}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: www.google.com.ph </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    w w w dot g o o g l e dot c o m dot p h{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_496}></p>
              </div>
              <div id="abbreviation">
                <p className={'heading'}>Abbreviation</p>
                <p className={styles.block_461}>
                  <span className={styles.text_8}>
                    Do not abbreviate unless the speaker says an abbreviated
                    form.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_498}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Warriors laban sa Lakers{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    warriors laban sa lakers{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Alaska versus Talk'N Text{' '}
                  </span>
                  <span className={styles.text_33}>E</span>
                  <span className={styles.text_34}>XAMPLE AUDIO</span>
                  <span className={styles.text_33}>: " </span>
                  <span className={styles.text_35}>
                    alaska versus talk n text{' '}
                  </span>
                  <span className={styles.text_33}>" </span>
                </p>
                <p className={styles.block_499}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: Tara sa McDo. </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>: Tara sa McDonald's. </span>
                </p>
                <p className={styles.block_500}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>tara sa mcdo </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_501}>
                  <span className={styles.text_13}>
                    Capitalize and abbreviate titles for people only when they
                    precede proper names.
                  </span>
                  <span className={styles.text_14}> </span>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Si Mrs. Santos ay umalis na.{' '}
                  </span>
                </p>
                <p className={styles.block_253}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Hoy misis, nahulog ang pitaka mo.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Si Calixto Mendoza Jr. ay nandoon.{' '}
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>
                    : Siya ang junior ni kuya.{' '}
                  </span>
                </p>
                <p className={styles.block_502}>
                  <span className={styles.text_2}>
                    For other proper names involving titles, use the official
                    spelling of the proper name. If in doubt,
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    do not abbreviate the title.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_344}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>
                    : Santo Tomas, Davao del Sur{' '}
                  </span>
                  <span className={styles.text_31}>I</span>
                  <span className={styles.text_32}>NCORRECT</span>
                  <span className={styles.text_31}>
                    : Sto. Tomas, Davao del Sur{' '}
                  </span>
                </p>
                <p className={styles.block_490}>
                  <span className={styles.text_19}>E</span>
                  <span className={styles.text_20}>XAMPLE AUDIO</span>
                  <span className={styles.text_19}>: " </span>
                  <span className={styles.text_39}>
                    santo tomas davao del sur{' '}
                  </span>
                  <span className={styles.text_19}>" </span>
                </p>
                <p className={styles.block_503}>
                  <span className={styles.text_23}>E</span>
                  <span className={styles.text_20}>XPLANATION</span>
                  <span className={styles.text_23}>
                    : The town's name is officially spelled "Santo Tomas".
                  </span>
                </p>
                <p className={styles.block_504}>
                  <span className={styles.text_8}>
                    In acronyms, do not use periods between letters.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: MP3, NASA, NASCAR </span>
                </p>
                <p className={styles.block_319}>
                  <span className={styles.text_8}>
                    If a brand name uses periods, include the periods.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_29}>C</span>
                  <span className={styles.text_30}>ORRECT</span>
                  <span className={styles.text_29}>: J.C. Penney </span>
                  <span className={styles.text_31}>E</span>
                  <span className={styles.text_32}>XPLANATION</span>
                  <span className={styles.text_31}>
                    : Official brand name includes periods.{' '}
                  </span>
                </p>
                <p className={styles.block_505}>
                  <span className={styles.text_8}>
                    Omit commas from proper names and titles.
                  </span>
                  <span className={styles.text_6}> </span>
                </p>
                <p className={styles.block_176}>
                  <span className={styles.text_19}>C</span>
                  <span className={styles.text_20}>ORRECT</span>
                  <span className={styles.text_19}>: Calixto Mendoza Jr. </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.text_19}>I</span>
                  <span className={styles.text_20}>NCORRECT</span>
                  <span className={styles.text_19}>
                    : Calixto Mendoza, Jr.{' '}
                  </span>
                </p>
                <p className={styles.block_506}></p>
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
