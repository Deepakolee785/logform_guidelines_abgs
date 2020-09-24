import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const LongFormGenericRules = () => {
  const classes = useStyles()

  const headingIds = [
    'unintelligible-or-foreign-or-singing',
    'segmentation',
    'speaker-labeling',
    'audio-labels',
    'PII',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="Longform Croatian" />
            <div className="content">
              <p className={'large-heading'}>Longform generic rules</p>
              <p className={'text'}>
                <span className={styles.text_2}>
                  Follow the rules in this section to label and transcribe
                  speaker segments for longform{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>
                  audio. Transcribe ALL speech that is heard, including pre
                  recorded and synthesized{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>
                  speech. For speech that is unintelligible, foreign, or
                  singing, follow the rules below. Only{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>
                  transcribe up to 20 unique speakers. Stop transcribing the
                  task once the 21st speaker is{' '}
                </span>
                <span className={styles.text_3}> </span>
                <span className={styles.text_2}>heard.</span>
                <span className={styles.text_3}> </span>
              </p>
              <div id="unintelligible-or-foreign-or-singing">
                <p className={'heading'}>
                  Unintelligible or foreign or singing
                </p>
                <p className={styles.block_82}>
                  <span className={styles.text_2}>
                    If you hear speech that is unintelligible or in a foreign
                    language, create a speaker{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    segment that covers only the audio range with that speech.
                    Select either the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Unintelligible or Foreign Speech Label and assign to the
                    appropriate speaker.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_83}>
                  <span className={styles.text_2}>
                    If the entire audio is unintelligible or in a foreign
                    language, create a speaker segment{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    that covers the entire audio range and select either the
                    Unintelligible or Foreign Speech{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>Label.</span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_84}>
                  <span className={styles.text_2}>
                    If you hear audio that is singing, transcribe the lyrics,
                    assign to the appropriate speaker,{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    and add the Singing label. If the singing is in a foreign
                    language, select the Foreign{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>Speech label.</span>
                </p>
              </div>
              <div id="segmentation">
                <p className={'heading'}>Segmentation</p>
                <p className={styles.block_86}>
                  <span className={styles.text_17}>
                    All speaker segment boundaries should be accurate with at
                    least 100ms precision.
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_87}>
                  <span className={styles.text_2}>
                    Speaker turns should not contain pauses in speech that are
                    longer than 0.5 seconds. If{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    a speaker does pause their speech for longer than 0.5
                    seconds, end the speaker turn{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    before the pause then create a new turn for when the speaker
                    resumes talking.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_88}>
                  <span className={styles.text_2}>
                    Speaker turns should not be longer than 30 seconds. If a
                    single speaker talks for more{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    than 30 consecutive seconds without taking a 0.5 second
                    pause, then end the turn at{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    the 30 second mark and begin a new turn.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
              </div>
              <div id="speaker-labeling">
                <p className={'heading'}>Speaker labeling</p>
                <p className={styles.block_90}>
                  <span className={styles.text_2}>
                    All speaker labels should be consistently formatted. Speaker
                    labels should always: be in{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    all lowercase, be spelled correctly, and should not contain
                    underscores or hyphens. Only{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    transcribe up to the 20th unique speaker.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>Correct: speaker 1</p>
                <p className={styles.block_92}>Incorrect: Speaker 1</p>
                <p className={styles.block_93}>
                  Correct: pre recorded speaker 1
                </p>
                <p className={styles.block_92}>
                  Incorrect: pre-recorded speaker_1
                </p>
                <p className={styles.block_94}>
                  Correct: unidentifiable speaker
                </p>
                <p className={styles.block_95}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      'speaker #' Used for different speakers in the audio.
                      Includes a number that corresponds to each different
                      speaker.
                    </span>
                  </span>
                </p>
                <p className={styles.block_96}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      'pre recorded speaker #' Used when there is speech coming
                      from a machine. Includes a number that corresponds to each
                      different pre recorded speaker.
                    </span>
                  </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      'unidentifiable speaker' Used when you cannot identify who
                      the speaker is. Does not ever include numbers.
                    </span>
                  </span>
                </p>
                <p className={styles.block_97}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      'speaker Tom' Used when the name of a speaker becomes
                      known. The names of speakers should always be capitalized.
                      You can use first and last names. (Note: adding speaker
                      names will be allowed for some projects but not others. In
                      tool validators will indicate whether or not you can
                      submit a speaker name.)
                    </span>
                  </span>
                </p>
              </div>
              <div id="audio-labels">
                <p className={'heading'}>Audio labels</p>
                <p className={styles.block_99}>
                  <span className={styles.text_2}>
                    For instances with music and lyrics, create separate labels:
                    one for Music and one for{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    Singing. Transcribe the singing speech and assign to the
                    appropriate speaker.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_100}>
                  <span className={styles.text_2}>
                    Below is a list of labels that may be available for you to
                    choose from. Each contain a{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    description of when is an appropriate time to use it.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_101}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    Applause: Use this label if you hear one or more people
                    clapping or cheering.{' '}
                  </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      DTMF: Stands for 'dual-tone multi-frequency.' This is the
                      sound you hear when a number is pressed during a phone
                      call. For example, 'Press one to speak to a
                      representative' DTMF.
                    </span>
                  </span>
                </p>
                <p className={styles.block_102}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    Foreign Speech: Use this label if the speaker is not talking
                    in the target language.{' '}
                  </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    Laughter: Use this label when you hear laughter.
                  </span>
                </p>
                <p className={styles.block_78}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    Music: Use this label when you hear music.
                  </span>
                </p>
                <p className={styles.block_103}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    Noise: Use this label for instances of miscellaneous noise
                    events.{' '}
                  </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      PII: Use this label when you hear Personally Identifiable
                      Information (PII). For more information see the PII
                      section of this guideline.
                    </span>
                  </span>
                </p>
                <p className={styles.block_78}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    Ring Tone: Use this label when you hear a ring-tone.
                  </span>
                </p>
                <p className={styles.block_104}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    Singing: Use this label to indicate that the speaker is
                    singing their speech.{' '}
                  </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      Unintelligible: Use this label to indicate that you cannot
                      understand what the speaker is saying.
                    </span>
                  </span>
                </p>
                <p className={styles.block_105}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      Unknown: Use this label for audio events that are not
                      classified to any of the above labels.
                    </span>
                  </span>
                </p>
              </div>
              <div id="PII">
                <p className={'heading'}>PII</p>
                <p className={styles.block_107}>
                  <span className={styles.text_2}>
                    PII stands for Personally Identifiable Information. PII is
                    information that is not publicly{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    available, but can help you or Google identify an individual
                    person.
                  </span>
                </p>
                <p className={styles.block_108}>
                  <span className={styles.text_2}>
                    PII should never be transcribed. When PII is heard, create a
                    new speaker segment that{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    captures the audio range of the PII speech. Add the PII
                    label and assign to the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    appropriate speaker. Do not transcribe PII.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_109}>
                  <span className={styles.text_2}>
                    If applicable, select the appropriate PII subcategory which
                    is nested underneath the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    parent 'PII' label. If the appropriate PII subcategory is
                    not available then select the{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    parent 'PII' label to cover all other cases. If there are no
                    PII subcategories available to{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    choose from then use the 'PII' label for all cases of PII.
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_110}>
                  <span className={styles.text_17}>
                    See the below list for all valid PII items
                  </span>
                  <span className={styles.text_18}> </span>
                </p>
                <p className={styles.block_111}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    NAME: First and/or Last name{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>CREDIT_CARD_NUMBER </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>EMAIL </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>PHONE_NUMBER </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    SOCIAL_INSURANCE_NUMBER{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>DRIVER_LICENSE_NUMBER </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    NATIONAL_HEALTH_SERVICE_NUMBER{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    SOCIAL_SECURITY_NUMBER{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>PASSPORT </span>
                </p>
                <p className={styles.block_112}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      TAX_FILE_NUMBER: A tax file number (TFN) is a unique
                      identifier issued by the Australian Taxation Office (ATO)
                      to each taxpaying entity
                    </span>
                  </span>
                </p>
                <p className={styles.block_113}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      LOCATION_STREET: If the street name is heard, mark as PII.
                      Other locations such as State, City, County, zip code are
                      all OK to transcribe.
                    </span>
                  </span>
                </p>
                <p className={styles.block_114}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      LOCATION_STREET_NUMBER: If the street number is heard,
                      mark as PII. Other locations such as State, City, County,
                      zip code are all OK to transcribe.
                    </span>
                  </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    MRN (medical record number){' '}
                  </span>
                </p>
                <p className={styles.block_115}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      BANKERS_CUSIP_ID: CUSIP stands for Committee on Uniform
                      Securities Identification Procedures. A CUSIP number
                      identifies most financial instruments, including: stocks
                      of all registered U.S. and Canadian companies, commercial
                      paper, and U.S. government and municipal bonds.
                    </span>
                  </span>
                </p>
                <p className={styles.block_116}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      BC_PHN: Each B.C. resident enrolled with the Medical
                      Services Plan (MSP) is given a unique lifetime identifier
                      for health care called a Personal Health Number (PHN)
                    </span>
                  </span>
                </p>
                <p className={styles.block_78}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    OHIP: Ontario Health Insurance Plan{' '}
                  </span>
                </p>
                <p className={styles.block_20}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    QUEBEC_HIN: Quebec Health Insurance Number
                  </span>
                </p>
                <p className={styles.block_117}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      CNI NIR: The French national identity card (French: Carte
                      nationale d'identite or CNI) is an official identity
                      document consisting of a laminated plastic card bearing a
                      photograph, name and address.
                    </span>
                  </span>
                </p>
                <p className={styles.block_118}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      IBAN_CODE: The International Bank Account Number (IBAN) is
                      an internationally agreed system of identifying bank
                      accounts
                    </span>
                  </span>
                </p>
                <p className={styles.block_119}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      SWIFT_CODE: A SWIFT code is an international bank code
                      that identifies particular banks worldwide. It's also
                      known as a Bank Identifier Code (BIC).
                    </span>
                  </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      BANK_ROUTING_MICR: The numbers located on the bottom of a
                      check is called a MICR line. MICR means Magnetic Image
                      Character Recognition. The MICR line is made up of three
                      sets of numbers. The first set is called the ABA Bank
                      Routing Number or routing transit number (RTN)
                    </span>
                  </span>
                </p>
                <p className={styles.block_120}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      DEA_NUMBER: A DEA number (DEA Registration Number) is an
                      identifier assigned to a health care provider (such as a
                      physician, optometrist, dentist, or veterinarian) by the
                      United States Drug Enforcement Administration
                    </span>
                  </span>
                </p>
                <p className={styles.block_121}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      HEALTHCARE_NPI: A National Provider Identifier or NPI is a
                      unique 10-digit identification number issued to health
                      care providers in the United States by the Centers for
                      Medicare and Medicaid Services (CMS).
                    </span>
                  </span>
                </p>
                <p className={styles.block_78}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>MEDICARE_NUMBER </span>
                </p>
                <p className={styles.block_122}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    NIE_NUMBER: The NIE is a tax identification number in Spain{' '}
                  </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      CPF_NUMBER: The CPF (Cadastro de Pessoas Fisicas or
                      Natural Persons Register) is a number assigned by the
                      Brazilian revenue agency to both Brazilians and resident
                      aliens who are subject to taxes in Brazil
                    </span>
                  </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      PAN_INDIVIDUAL: Permanent Account Number (PAN) is a code
                      that acts as an identification for individuals, families
                      and corporates (Indian or Foreign), especially those who
                      pay Income Tax
                    </span>
                  </span>
                </p>
                <p className={styles.block_124}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      BSN_NUMBER: netherlands: The citizen service number (BSN)
                      is a unique personal number allocated to everyone
                      registered in the Personal Records Database (BRP).
                    </span>
                  </span>
                </p>
                <p className={styles.block_125}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      ICD_CODE: International Statistical Classification of
                      Diseases and Related Health Problems (ICD), a medical
                      classification list by the World Health Organization
                      (WHO). It contains codes for diseases, signs and symptoms,
                      abnormal findings, complaints, social circumstances, and
                      external causes of injury or diseases.
                    </span>
                  </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    FDA_CODE: Prescription drug{' '}
                  </span>
                </p>
                <p className={styles.block_126}>
                  <span className={styles.text_21}>● </span>
                  <span className={styles.text_22}>
                    <span className={styles.calibre2}>
                      NIF: Tax Identification Number in Spain
                    </span>
                  </span>
                </p>
                <p className={styles.block_127}>
                  <span className={styles.text_20}>
                    http://www.investinspain.org/guidetobusiness/en/2/art_2_3.html{' '}
                  </span>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>TAXPAYER_REFERENCE </span>
                </p>
                <p className={styles.block_128}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      CURP_NUMBER: CURP is the abbreviation for Clave Unica de
                      Registro de Poblacion (translated into English as Unique
                      Population Registry Code or else as
                    </span>
                  </span>
                </p>
                <p className={styles.block_129}>
                  <span className={styles.calibre1}>
                    Personal ID Code Number). It is a unique identity code for
                    both citizens and residents of Mexico.
                  </span>
                </p>
                <p className={styles.block_130}>
                  <span className={styles.text_19}>● </span>
                  <span className={styles.text_20}>
                    <span className={styles.calibre1}>
                      RRN: Receiver Registration Number (RNN) is a 10-character
                      alphanumeric can be to a bank account, a credit/debit
                      card, mobile wallet, or home delivery.
                    </span>
                  </span>
                </p>
                <p className={styles.block_131}>
                  <span className={styles.text_2}>
                    Information that does not fit the above PII rules should NOT
                    be considered PII. Some{' '}
                  </span>
                  <span className={styles.text_3}> </span>
                  <span className={styles.text_2}>
                    examples of things that are not PII are:
                  </span>
                  <span className={styles.text_3}> </span>
                </p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Commonly known names like Taylor{' '}
                  </span>
                </p>
                <p className={styles.block_132}>
                  Swift, Tom Hanks, Michael Jordan
                </p>
                <p className={styles.block_93}>
                  <span className={styles.calibre2}>
                    Correct: Company or Business name, phone{' '}
                  </span>
                </p>
                <p className={styles.block_133}>number, or address.</p>
                <p className={styles.block_94}>Correct: Pet names</p>
                <p className={styles.block_93}>Correct: Social media handles</p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav
              title="Long Form Generic Rules"
              headingIds={headingIds}
            />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default LongFormGenericRules

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
