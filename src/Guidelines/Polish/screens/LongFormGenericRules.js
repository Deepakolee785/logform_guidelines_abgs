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
            <PageContentHeader currentPage="Longform Polish" />
            <div className="content">
              {' '}
              <p className={'large-heading'}>Longform generic rules</p>
              <p className={styles.block_80}>
                <span className={styles.text_17}>
                  <span className={styles.calibre1}>
                    Follow the rules in this section to label and transcribe
                    speaker segments for longform audio. Transcribe ALL speech
                    that is heard, including pre recorded and synthesized
                    speech. For speech that is unintelligible, foreign, or
                    singing, follow the rules below. Only transcribe up to 20
                    unique speakers. Stop transcribing the task once the 21st
                    speaker is heard.
                  </span>
                </span>
              </p>
              <div id="unintelligible-or-foreign-or-singing">
                <p className={'heading'}>
                  Unintelligible or foreign or singing{' '}
                </p>
                <p className={styles.block_81}>
                  <span className={styles.calibre1}>
                    If you hear speech that is unintelligible or in a foreign
                    language, create a speaker segment that covers only the
                    audio range with that speech. Select either the
                    Unintelligible or Foreign Speech Label and assign to the
                    appropriate speaker.
                  </span>
                </p>
                <p className={styles.block_82}>
                  <span className={styles.calibre1}>
                    If the entire audio is unintelligible or in a foreign
                    language, create a speaker segment that covers the entire
                    audio range and select either the Unintelligible or Foreign
                    Speech Label.
                  </span>
                </p>
                <p className={styles.block_83}>
                  <span className={styles.text_17}>
                    <span className={styles.calibre1}>
                      If you hear audio that is singing, transcribe the lyrics,
                      assign to the appropriate speaker, and add the Singing
                      label. If the singing is in a foreign language, select the
                      Foreign Speech label.
                    </span>
                  </span>
                </p>
              </div>
              <div id="segmentation">
                <p className={'heading'}>Segmentation </p>
                <p className={styles.block_84}>
                  All speaker segment boundaries should be accurate with at
                  least 100ms precision.
                </p>
                <p className={styles.block_85}>
                  <span className={styles.calibre1}>
                    Speaker turns should not contain pauses in speech that are
                    longer than 0.5 seconds. If a speaker does pause their
                    speech for longer than 0.5 seconds, end the speaker turn
                    before the pause then create a new turn for when the speaker
                    resumes talking.
                  </span>
                </p>
                <p className={styles.block_86}>
                  <span className={styles.calibre1}>
                    Speaker turns should not be longer than 30 seconds. If a
                    single speaker talks for more than 30 consecutive seconds
                    without taking a 0.5 second pause, then end the turn at the
                    30 second mark and begin a new turn.
                  </span>
                </p>
              </div>
              <div id="speaker-labeling">
                <p className={'heading'}>Speaker labeling</p>
                <p className={styles.block_88}>
                  <span className={styles.calibre1}>
                    All speaker labels should be consistently formatted. Speaker
                    labels should always: be in all lowercase, be spelled
                    correctly, and should not contain underscores or hyphens.
                    Only transcribe up to the 20th unique speaker.
                  </span>
                </p>
                <p className={styles.block_89}>Correct: speaker 1</p>
                <p className={styles.block_90}>Incorrect: Speaker 1</p>
                <p className={styles.block_91}>
                  Correct: pre recorded speaker 1
                </p>
                <p className={styles.block_90}>
                  Incorrect: pre-recorded speaker_1
                </p>
                <p className={styles.block_91}>
                  Correct: unidentifiable speaker
                </p>
                <p className={styles.block_92}>
                  <span className={styles.calibre1}>
                    ● 'speaker #' Used for different speakers in the audio.
                    Includes a number that corresponds to each different
                    speaker.
                  </span>
                </p>
                <p className={styles.block_93}>
                  <span className={styles.calibre1}>
                    ● 'pre recorded speaker #' Used when there is speech coming
                    from a machine. Includes a number that corresponds to each
                    different pre recorded speaker.
                  </span>
                </p>
                <p className={styles.block_94}>
                  <span className={styles.calibre1}>
                    ● 'unidentifiable speaker' Used when you cannot identify who
                    the speaker is. Does not ever include numbers.
                  </span>
                </p>
                <p className={styles.block_95}>
                  <span className={styles.calibre1}>
                    ● 'speaker Tom' Used when the name of a speaker becomes
                    known. The names of speakers should always be capitalized.
                    You can use first and last names. (Note: adding speaker
                    names will be allowed for some projects but not others. In
                    tool validators will indicate whether or not you can submit
                    a speaker name.)
                  </span>
                </p>
              </div>
              <div id="audio-labels">
                <p className={'heading'}>Audio labels</p>
                <p className={styles.block_97}>
                  <span className={styles.calibre1}>
                    For instances with music and lyrics, create separate labels:
                    one for Music and one for Singing. Transcribe the singing
                    speech and assign to the appropriate speaker.
                  </span>
                </p>
                <p className={styles.block_98}>
                  <span className={styles.calibre1}>
                    Below is a list of labels that may be available for you to
                    choose from. Each contain a description of when is an
                    appropriate time to use it.
                  </span>
                </p>
                <p className={styles.block_99}>
                  <span className={styles.calibre1}>
                    ● Applause: Use this label if you hear one or more people
                    clapping or cheering. ● DTMF: Stands for 'dual-tone
                    multi-frequency.' This is the sound you hear when a number
                    is pressed during a phone call. For example, 'Press one to
                    speak to a representative' DTMF.
                  </span>
                </p>
                <p className={styles.block_100}>
                  ● Foreign Speech: Use this label if the speaker is not talking
                  in the target language. ● Laughter: Use this label when you
                  hear laughter.
                </p>
                <p className={styles.block_101}>
                  ● Music: Use this label when you hear music.
                </p>
                <p className={styles.block_102}>
                  ● Noise: Use this label for instances of miscellaneous noise
                  events.
                </p>
                <p className={styles.block_103}>
                  <span className={styles.calibre1}>
                    ● PII: Use this label when you hear Personally Identifiable
                    Information (PII). For more information see the PII section
                    of this guideline.
                  </span>
                </p>
                <p className={styles.block_104}>
                  ● Ring Tone: Use this label when you hear a ring-tone.
                </p>
                <p className={styles.block_105}>
                  <span className={styles.calibre1}>
                    ● Singing: Use this label to indicate that the speaker is
                    singing their speech. ● Unintelligible: Use this label to
                    indicate that you cannot understand what the speaker is
                    saying.
                  </span>
                </p>
                <p className={styles.block_106}>
                  <span className={styles.calibre1}>
                    ● Unknown: Use this label for audio events that are not
                    classified to any of the above labels.
                  </span>
                </p>
              </div>
              <div id="PII">
                <p className={'heading'}>PII</p>
                <p className={styles.block_108}>
                  <span className={styles.calibre1}>
                    PII stands for Personally Identifiable Information. PII is
                    information that is not publicly available, but can help you
                    or Google identify an individual person.
                  </span>
                </p>
                <p className={styles.block_109}>
                  <span className={styles.calibre1}>
                    PII should never be transcribed. When PII is heard, create a
                    new speaker segment that captures the audio range of the PII
                    speech. Add the PII label and assign to the appropriate
                    speaker. Do not transcribe PII.
                  </span>
                </p>
                <p className={styles.block_110}>
                  <span className={styles.calibre1}>
                    If applicable, select the appropriate PII subcategory which
                    is nested underneath the parent 'PII' label. If the
                    appropriate PII subcategory is not available then select the
                    parent 'PII' label to cover all other cases. If there are no
                    PII subcategories available to choose from then use the
                    'PII' label for all cases of PII.
                  </span>
                </p>
                <p className={styles.block_111}>
                  See the below list for all valid PII items
                </p>
                <p className={styles.block_112}>
                  ● NAME: First and/or Last name
                </p>
                <p className={styles.block_113}>● CREDIT_CARD_NUMBER</p>
                <p className={styles.block_102}>● EMAIL</p>
                <p className={styles.block_114}>● PHONE_NUMBER</p>
                <p className={styles.block_102}>● SOCIAL_INSURANCE_NUMBER</p>
                <p className={styles.block_102}>● DRIVER_LICENSE_NUMBER</p>
                <p className={styles.block_115}>
                  ● NATIONAL_HEALTH_SERVICE_NUMBER
                </p>
                <p className={styles.block_102}>● SOCIAL_SECURITY_NUMBER</p>
                <p className={styles.block_102}>● PASSPORT</p>
                <p className={styles.block_116}>
                  <span className={styles.calibre1}>
                    ● TAX_FILE_NUMBER: A tax file number (TFN) is a unique
                    identifier issued by the Australian Taxation Office (ATO) to
                    each taxpaying entity
                  </span>
                </p>
                <p className={styles.block_117}>
                  <span className={styles.calibre1}>
                    ● LOCATION_STREET: If the street name is heard, mark as PII.
                    Other locations such as State, City, County, zip code are
                    all OK to transcribe.
                  </span>
                </p>
                <p className={styles.block_118}>
                  <span className={styles.calibre1}>
                    ● LOCATION_STREET_NUMBER: If the street number is heard,
                    mark as PII. Other locations such as State, City, County,
                    zip code are all OK to transcribe. ● MRN (medical record
                    number)
                  </span>
                </p>
                <p className={styles.block_119}>
                  <span className={styles.calibre1}>
                    ● BANKERS_CUSIP_ID: CUSIP stands for Committee on Uniform
                    Securities Identification Procedures. A CUSIP number
                    identifies most financial instruments, including: stocks of
                    all registered U.S. and Canadian companies, commercial
                    paper, and U.S. government and municipal bonds.
                  </span>
                </p>
                <p className={styles.block_120}>
                  <span className={styles.calibre1}>
                    ● BC_PHN: Each B.C. resident enrolled with the Medical
                    Services Plan (MSP) is given a unique lifetime identifier
                    for health care called a Personal Health Number (PHN) ●
                    OHIP: Ontario Health Insurance Plan
                  </span>
                </p>
                <p className={styles.block_104}>
                  ● QUEBEC_HIN: Quebec Health Insurance Number
                </p>
                <p className={styles.block_121}>
                  <span className={styles.calibre1}>
                    ● CNI NIR: The French national identity card (French: Carte
                    nationale d'identite or CNI) is an official identity
                    document consisting of a laminated plastic card bearing a
                    photograph, name and address.
                  </span>
                </p>
                <p className={styles.block_122}>
                  <span className={styles.calibre1}>
                    ● IBAN_CODE: The International Bank Account Number (IBAN) is
                    an internationally agreed system of identifying bank
                    accounts
                  </span>
                </p>
                <p className={styles.block_123}>
                  <span className={styles.calibre1}>
                    ● SWIFT_CODE: A SWIFT code is an international bank code
                    that identifies particular banks worldwide. It's also known
                    as a Bank Identifier Code (BIC).
                  </span>
                </p>
                <p className={styles.block_124}>
                  <span className={styles.calibre1}>
                    ● BANK_ROUTING_MICR: The numbers located on the bottom of a
                    check is called a MICR line. MICR means Magnetic Image
                    Character Recognition. The MICR line is made up of three
                    sets of numbers. The first set is called the ABA Bank
                    Routing Number or routing transit number (RTN)
                  </span>
                </p>
                <p className={styles.block_125}>
                  <span className={styles.calibre1}>
                    ● DEA_NUMBER: A DEA number (DEA Registration Number) is an
                    identifier assigned to a health care provider (such as a
                    physician, optometrist, dentist, or veterinarian) by the
                    United States Drug Enforcement Administration
                  </span>
                </p>
                <p className={styles.block_126}>
                  <span className={styles.calibre1}>
                    ● HEALTHCARE_NPI: A National Provider Identifier or NPI is a
                    unique 10-digit identification number issued to health care
                    providers in the United States by the Centers for Medicare
                    and Medicaid Services (CMS).
                  </span>
                </p>
                <p className={styles.block_104}>● MEDICARE_NUMBER</p>
                <p className={styles.block_115}>
                  ● NIE_NUMBER: The NIE is a tax identification number in Spain
                </p>
                <p className={styles.block_127}>
                  <span className={styles.calibre1}>
                    ● CPF_NUMBER: The CPF (Cadastro de Pessoas Fisicas or
                    Natural Persons Register) is a number assigned by the
                    Brazilian revenue agency to both Brazilians and resident
                    aliens who are subject to taxes in Brazil
                  </span>
                </p>
                <p className={styles.block_128}>
                  <span className={styles.calibre1}>
                    ● PAN_INDIVIDUAL: Permanent Account Number (PAN) is a code
                    that acts as an identification for individuals, families and
                    corporates (Indian or Foreign), especially those who pay
                    Income Tax
                  </span>
                </p>
                <p className={styles.block_129}>
                  <span className={styles.calibre1}>
                    ● BSN_NUMBER: netherlands: The citizen service number (BSN)
                    is a unique personal number allocated to everyone registered
                    in the Personal Records Database (BRP). ● ICD_CODE:
                    International Statistical Classification of Diseases and
                    Related Health Problems (ICD), a medical classification list
                    by the World Health Organization (WHO). It contains codes
                    for diseases, signs and symptoms, abnormal findings,
                    complaints, social circumstances, and external causes of
                    injury or diseases.
                  </span>
                </p>
                <p className={styles.block_130}>
                  ● FDA_CODE: Prescription drug
                </p>
                <p className={styles.block_102}>
                  <span className={styles.calibre2}>
                    ● NIF: Tax Identification Number in Spain{' '}
                  </span>
                </p>
                <p className={styles.block_131}>
                  http://www.investinspain.org/guidetobusiness/en/2/art_2_3.html
                </p>
                <p className={styles.block_132}>● TAXPAYER_REFERENCE</p>
                <p className={styles.block_133}>
                  <span className={styles.calibre1}>
                    ● CURP_NUMBER: CURP is the abbreviation for Clave Unica de
                    Registro de Poblacion (translated into English as Unique
                    Population Registry Code or else as Personal ID Code
                    Number). It is a unique identity code for both citizens and
                    residents of Mexico.
                  </span>
                </p>
                <p className={styles.block_134}>
                  <span className={styles.calibre1}>
                    ● RRN: Receiver Registration Number (RNN) is a 10-character
                    alphanumeric can be to a bank account, a credit/debit card,
                    mobile wallet, or home delivery.
                  </span>
                </p>
                <p className={styles.block_135}>
                  Information that does not fit the above PII rules should NOT
                  be considered PII. Some examples of things that are not PII
                  are:
                </p>
                <p className={styles.block_136}>
                  <span className={styles.calibre2}>
                    Correct: Commonly known names like Taylor{' '}
                  </span>
                </p>
                <p className={styles.block_137}>
                  Swift, Tom Hanks, Michael Jordan
                </p>
                <p className={styles.block_91}>
                  <span className={styles.calibre2}>
                    Correct: Company or Business name, phone{' '}
                  </span>
                </p>
                <p className={styles.block_138}>number, or address.</p>
                <p className={styles.block_139}>Correct: Pet names</p>
                <p className={styles.block_91}>Correct: Social media handles</p>
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
